# Therapeutic Practice

The working repository for a counselling practice being built alongside a full-time
career and two other degrees. The gate it is aimed at, the ladder up to it, the
people who can open it, and the record that proves it happened.

Nothing here is a shop front. It holds decisions already made, written down so they
do not have to be made again.

**This is the private operating system, not a public name.** Studio Day is to Andrea
Robin Studio what Therapeutic Practice is to Therapeutic Studio: the system is not
the property. Therapeutic Studio stays the house — the public name, the notebook,
the question, and on registration the clinical practice. That was settled on
13 September 2026 in `06-the-naming-and-the-room.md` and nothing here reopens it.

---

## The boundary, and why this is two repositories

**Read this before adding anything.**

Every other property in the portfolio has a public corpus. Studio Day's is a
catalogue anyone can be shown. Accessible Learning Labs' is a library anyone can
download. **Clinical work can never be either.** Confidentiality is the condition of
the work, and no amount of de-identification turns a person's material into a
public record.

So the record splits, and the split is enforced by repository rather than by
folder:

| | Repository | Holds |
|---|---|---|
| **Public** | `therapeutic-practice` — this one | The system, the ceilings, the ladder, the calendar, the faculty map, the house rules. Decisions, dates and published facts |
| **Private** | `therapeutic-practice-private` | The hours log, the supervision log, the reflective journal, incident notes, references, the transcript, and the 2030 application drafts |

**Why two repositories and not one with a `.gitignore`.** A `.gitignore` mistake in
a public repository is not recoverable. Git keeps history: a file committed once
and deleted in the next commit is still there, still fetchable, still indexed. For
ordinary working files that is a nuisance. For a reflective journal that names a
caller, or an incident note, it is a disclosure that cannot be withdrawn — and
under a regulator from 29 November 2027, a reportable one.

Two repositories means the mistake has to be made twice, in two places, to have an
effect. That is the whole argument.

`.gitignore` and `guard.sh` in this repository are belt and braces on top of that,
not the mechanism. Run `bash guard.sh` before pushing; it refuses on private
filenames, on email addresses and phone numbers, and on the words that should
never appear on a public page here.

---

## Pages

| File | What it holds |
|---|---|
| `index.html` | **The Wednesday.** The launcher, and the one to open on a Wednesday morning. Today, the season, the next dated thing, and the standing order. |
| `calendar.html` | **The forcing function.** External deadlines on somebody else's schedule, filterable, each marked *verified* or *expected*. |
| `ladder.html` | **The ladder.** Prerequisite courses, the counted things against what registration actually wants, and the two elective traps. |

## Notes

Dated working notes, in the house register: what it was written, what it supersedes,
and which document governs where two disagree.

| File | What it holds |
|---|---|
| `the-system.md` | **Start here.** What Therapeutic Practice is, the two ceilings, the hinge between them, the five ledgers, and the nine things verification changed. Every other note here is an operational copy of part of it. |
| `the-ceiling.md` | What the rate is for. Ceiling one, 1 December 2030. Ceiling two, ~2034. And the practicum seat in January 2033 that is the real hinge. |
| `the-floor.md` | What survives the hardest year. Four things, decided now, in a season that is not hard. |
| `the-ledgers.md` | Corpus, shown, funded, scholarly, relational. One question each, asked on the first Wednesday of November. |
| `the-question.md` | One paragraph a year, dated, appended below the last and never overwritten. |
| `house-rules.md` | The pre-licence boundary: words, acts, records, respect for the licensed. Written to read as though 29 November 2027 had already passed. |
| `programmes.md` | UBC and SFU side by side, and the four differences that actually decide it. |
| `prerequisites.md` | Both lists, the union, and the two emails that resolve whether it is six courses or nine. |
| `registration.md` | RCC, CCC, and a college whose standards do not exist yet. The hedge, and the choices to make in 2032. |
| `faculty-map.md` | Named people at both institutions, their published interests, and two gaps that are findings rather than absences. |
| `verification.md` | Thirteen open items, ranked by what they cost to get wrong. Sources for everything asserted anywhere here. |

## Data

Two pages are driven by data rather than markup, because the content changes and
the layout does not.

| File | Drives | Edit this to change |
|---|---|---|
| `calendar-data.js` | `calendar.html` and the "next dated thing" on the launcher | Dated entries, each with `status`, `what` and `do` |
| `ladder-data.js` | `ladder.html` | Course states, the counters, and the two traps |

**Editing the pages by hand will be overwritten by the next edit to the data.**
Change the data file.

---

## Conventions

Carried from `00-portfolio-spine-shared.md`, house rules 3 and 4, and from the
Studio Day repository so the two read alike.

**Verification.** Any factual claim about a programme, deadline, fee, eligibility
rule or statistic carries a source and a date checked, or the word **verify**
beside it. Every substantial document ends with, or points to, a verification
appendix. Nothing marked open is planned around.

**Dated working notes.** Every document states when it was written, what it
supersedes, and which document governs where two disagree.

**Calendar entries carry a status.** `verified` means the date was read on the
organisation's own page on the date given. `expected` means it is projected from
the published cycle and must be confirmed when the window opens. **No fees appear
anywhere**, because they change annually and stale figures get trusted.

**The application boundary.** This system prepares the record, the training plan,
the calendar and the evidence. It does not draft the statement of interest, the
reference requests, or the video answers. Those are the applicant's alone, as the
department requires. `guard.sh` refuses any commit touching `application-2030/`.

**`noai` and `noimageai` meta tags** are on every page.

---

## The palette

The background is white. Studio Day's ink is sampled from photographs of a body in
sun — warm umber, sand, sea blue. This is its cooler sibling: the same structure
shifted green and slate, so the two are recognisably a pair without either
pretending to be the other. Contrast measured, not estimated.

| Token | Value | Role | Contrast on white |
|---|---|---|---|
| `--paper` | `#ffffff` | Background | — |
| `--ink-strong` | `#1f2a26` | Headings | 14.8:1 |
| `--ink` | `#3f4a45` | Body text | 9.2:1 |
| `--stone` | `#6b7671` | Captions, labels | 4.7:1 |
| `--accent` | `#1a5c63` | Links, focus, progress | 7.6:1 |
| `--accent-warm` | `#8a5233` | Note blocks | 6.3:1 |
| `--flag` | `#8c3a2e` | Verify, blocking, urgent | 7.6:1 |

Nothing falls below 4.5:1, so colour carries meaning without carrying it alone —
every state is also a word.

---

## Printing

This is a working reference, so every page prints. Paper drops the navigation and
every control, and reveals what the interactions normally hide.

| Page | On paper |
|---|---|
| The Wednesday | The standing order and the floor, flat |
| Calendar | Every entry regardless of filter, with source URLs printed after each link |
| The Ladder | All courses, counters and traps, unfiltered |

---

## Still open

The full list is `verification.md`, ranked. The three that block other work:

1. **The UBC department pages have never been read.** `ecps.educ.ubc.ca` sits behind
   a challenge page. Every UBC fact here comes from the Academic Calendar and
   Graduate Studies, authoritative on structure and possibly lagging on admissions
   detail. One sitting in an ordinary browser resolves six open items.
2. **Whether the GRE is still required for UBC's MA.** It sits on the thesis route —
   the one already committed to for doctoral reasons. Until answered, assume
   required and budget for it.
3. **The employment contract and its outside-activities clause.** Marked blocking in
   `the-studio-day-pattern.md`. It governs three properties, not one: lab
   volunteering and campus peer-programme work as much as published resources.

---

*Therapeutic Studio · September 2026*
