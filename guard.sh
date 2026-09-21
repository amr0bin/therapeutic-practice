#!/usr/bin/env bash
# Therapeutic Practice — pre-push guard.
#
# Belt and braces on top of the real mechanism, which is that private material
# lives in a separate repository. See README.md → The boundary.
#
#   bash guard.sh            check the working tree
#   bash guard.sh --staged   check what is staged, for use as a pre-commit hook
#
# Install as a hook:
#   ln -s ../../guard.sh .git/hooks/pre-commit
#
# It is deliberately noisy and deliberately stupid. A false positive costs you
# thirty seconds. A false negative costs a disclosure that cannot be withdrawn.

set -uo pipefail
fail=0
mode="${1:-}"

if [ "$mode" = "--staged" ]; then
  files=$(git diff --cached --name-only --diff-filter=ACM)
else
  files=$(git ls-files)
fi

say() { printf '  %s\n' "$1"; }

# ── 1 · Filenames that belong in the private repository ───────────────────────
banned_names='hours-log|supervision-log|reflective-journal|incidents?|references\.|transcript|application-2030|client|caseload|intake'
hits=$(printf '%s\n' "$files" | grep -Ei "$banned_names" || true)
if [ -n "$hits" ]; then
  echo "BLOCKED · files that belong in therapeutic-practice-private:"
  printf '%s\n' "$hits" | while read -r f; do say "$f"; done
  fail=1
fi

# ── 2 · The application boundary ──────────────────────────────────────────────
# No AI touches the statement, the reference requests or the video answers.
hits=$(printf '%s\n' "$files" | grep -E '^application-2030/' || true)
if [ -n "$hits" ]; then
  echo "BLOCKED · application-2030/ is yours alone. Nothing here, and no assistance with it."
  fail=1
fi

# ── 3 · Personal data in tracked text ─────────────────────────────────────────
# Email addresses and phone numbers, excluding the institutional contacts that
# are published on the universities' own pages and legitimately in faculty-map.md.
for f in $files; do
  case "$f" in
    *.md|*.html|*.js|*.csv|*.txt) ;;
    *) continue ;;
  esac
  [ -f "$f" ] || continue

  bad=$(grep -nEo '[[:alnum:]._%+-]+@[[:alnum:].-]+\.[[:alpha:]]{2,}' "$f" \
        | grep -vE '@(ubc\.ca|sfu\.ca)' || true)
  if [ -n "$bad" ]; then
    echo "CHECK · email address in $f:"
    printf '%s\n' "$bad" | while read -r l; do say "$l"; done
    fail=1
  fi

  bad=$(grep -nEo '(\+?1[ .-]?)?\(?[0-9]{3}\)?[ .-][0-9]{3}[ .-][0-9]{4}' "$f" || true)
  if [ -n "$bad" ]; then
    echo "CHECK · phone number in $f:"
    printf '%s\n' "$bad" | while read -r l; do say "$l"; done
    fail=1
  fi
done

# ── 4 · Words that should never describe this practice in public ──────────────
# house-rules.md governs. The rule is stricter than the law until 29 Nov 2027,
# and from then it is the law. The notes files discuss these words on purpose,
# so only the served pages are checked.
for f in $files; do
  case "$f" in
    *.html) ;;
    *) continue ;;
  esac
  [ -f "$f" ] || continue
  bad=$(grep -nEio 'my (clients?|patients?)|book a session|my practice offers|treatment for|I (counsel|treat)' "$f" || true)
  if [ -n "$bad" ]; then
    echo "BLOCKED · pre-licence boundary, in $f:"
    printf '%s\n' "$bad" | while read -r l; do say "$l"; done
    say "See house-rules.md → Words."
    fail=1
  fi
done

echo
if [ "$fail" -eq 0 ]; then
  echo "Clear. Nothing private, nothing identifying, nothing that implies a licence."
else
  echo "Not clear. Fix the above, or move the file to therapeutic-practice-private."
fi
exit $fail
