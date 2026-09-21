# Therapeutic Practice — private

**This repository is private and stays private. It is never made public, never
mirrored, and never merged into `therapeutic-practice`.**

It holds the part of the record that cannot be a public artefact: the hours, the
supervision, the reflection, the incidents, the people, the transcript, and the
2030 application.

---

## Why this is a separate repository

Every other property in the portfolio has a public corpus. Studio Day's is a
catalogue anyone can be shown. Accessible Learning Labs' is a library anyone can
download. **Clinical work can never be either.** Confidentiality is the condition
of the work, and no amount of de-identification turns a person's material into a
public record.

A `.gitignore` in the public repository would not be enough. Git keeps history: a
file committed once and deleted in the next commit is still there, still
fetchable, still indexed by anything that cloned in between. For an ordinary
working file that is a nuisance. For a reflective note that names a caller, it is
a disclosure that cannot be withdrawn — and from 29 November 2027, under a
regulator, a reportable one.

Two repositories means the mistake has to be made twice, in two places, to have
an effect.

**Check before creating this repository on any host: that "private" is selected,
and that it stays private if the account's plan changes.**

---

## The files

| File | What it holds | Cadence |
|---|---|---|
| `hours-log.csv` | Every hour of service, training and helping work. The three-year clock and the registrar's evidence | **Within 24 hours, always.** This is the floor |
| `supervision-log.csv` | Every supervision hour: who, when, how long, direct or indirect, individual or group | Each session |
| `references.md` | The three referees, everyone who could become one, and the date each was asked | On contact |
| `reflective-journal.md` | What the work is doing to you and what you are learning. **Anonymised at the point of writing, never later** | Weekly in service |
| `incidents.md` | Anything that went wrong, was reported, or needed a supervisor. Dated, factual, anonymised | As it happens |
| `transcript-and-prerequisites.md` | Actual courses held, grades, and what each satisfies against both institutions' lists | Once, then per course |
| `application-2030/` | The statement, the answers, the video script. **Yours alone** | From 2029 |

---

## The rules for this repository

**Anonymise at the point of writing, not later.** No names, no initials, no
identifying details, no combination of details that identifies. "A caller in
their twenties" is not anonymisation if the shift, the date and the setting are
also recorded three columns away. Write the reflection so that it would be safe
if the row were read aloud.

**The logs are formatted for a registrar, from the first entry.** BCACC wants
supervision hours with the direct/indirect split. CCPA wants direct client hours.
Both want dates and a supervisor who will confirm them. The format should not be
invented in 2033 from six years of prose.

**No AI touches `application-2030/`.** Not drafting, not editing, not "tightening",
not the reference requests written in your voice, not the video answers. The
department requires the application to be yours, and this system stops at that
boundary. `guard.sh` in the public repository refuses any commit touching that
path; the honest version of the rule is that there is nothing to enforce because
you do not ask.

**Nothing from here is ever quoted in the notebook, the Substack, the review, or a
statement.** Not paraphrased, not composited, not "based on". The governing
question is answered from the literature, from the room in general terms, and
from your own thinking — never from anyone who came to you.

**What goes in the public repository instead:** totals. `ladder-data.js` carries
counted hours with no dates, no settings and no people. That is the only thing
that crosses.

---

## Backup

This record cannot be reconstructed. Everything else in the system can be done
late; the hours log cannot.

- A private remote, and one local copy that is not on the same machine.
- Commit at the monthly Wednesday at the latest.
- Do not put it in a shared cloud folder that syncs to anyone else's device.

---

*Started 20 September 2026. See `therapeutic-practice/README.md` for the public
half of this system.*
