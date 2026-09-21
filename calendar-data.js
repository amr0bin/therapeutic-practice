// Therapeutic Practice — the forcing function
//
// One entry per dated thing set by somebody else. Self-imposed deadlines are
// not deadlines and do not belong here.
//
// status: "verified" means the date was read on the organisation's own page on
//         the date given. "expected" means it is projected from the published
//         cycle and must be confirmed when the window opens.
// kind:   deadline | window | regulation | review | admin
// Dates are ISO. "opens" is optional.
//
// Checked 20 September 2026. Sources in verification.md.

window.TP_CALENDAR = [
  {
    id: "cacep-expiry-2026",
    name: "UBC CACEP accreditation — listed expiry",
    kind: "admin",
    date: "2026-09-30",
    status: "verified", verified: "2026-09-20",
    url: "https://www.ccpa-accp.ca/accreditation/",
    what: "Both UBC MA and MEd list an accreditation expiry of 30 September 2026, with a re-application filed 28 August 2025.",
    do: "Check the CCPA accreditation page after this date and confirm renewal. Affects the CCC fast-track, not RCC eligibility."
  },
  {
    id: "repos-readme-2026",
    name: "READMEs and licences on both public repositories",
    kind: "admin",
    date: "2026-10-31",
    status: "verified", verified: "2026-09-20",
    what: "make-space-curriculum and career both have files, commits, and no README and no licence. No licence means all rights reserved — the opposite of the stated intention to share openly.",
    do: "Two hours. The cheapest ledger entry available."
  },
  {
    id: "chcpbc-webinar-2026",
    name: "CHCPBC webinar — regulating psychotherapy",
    kind: "window",
    date: "2026-10-14",
    status: "verified", verified: "2026-09-20",
    url: "https://chcpbc.org/legislation/regulating-psychotherapy/",
    what: "Bylaw consultation is expected this autumn and entry-to-practice standards 'have not yet been established'. This is the first real sight of the standards you will be registered under.",
    do: "Attend. Then read the consultation when it opens. Free, dated, and it is a standing move as much as an information one."
  },
  {
    id: "emails-2026",
    name: "The five questions — UBC ECPS and SFU Counselling Psychology",
    kind: "admin",
    date: "2026-10-31",
    status: "verified", verified: "2026-09-20",
    what: "GRE status for the MA; the prerequisite equivalency tables at both; whether UBC adjudicates prerequisites pre-application; whether an admissions video assessment exists; how SFU grants MA faculty approval.",
    do: "Two emails. They move the timeline by months and they unblock the prerequisite ladder."
  },
  {
    id: "ccbc-intake-2027",
    name: "Crisis Centre BC — January 2027 training cohort",
    kind: "window",
    date: "2027-01-01",
    opens: "2026-10-01",
    status: "expected", verified: "2026-09-20",
    url: "https://www.crisiscentre.bc.ca/volunteer/crisis-services-volunteering/",
    what: "Applications were closed as of 20 September 2026; the next intake is the January 2027 training group. ~110 hours of basic training plus 32 supervised, then 250 credited service hours including 8 overnight and 48 fringe shifts.",
    do: "THE most time-sensitive item in this system. It is the three-year helping-experience clock UBC requires and the first external supervisor this practice has. The form cannot be saved or bookmarked, so line up three professional references first — employers, teachers or volunteer coordinators, explicitly not friends, family or therapists."
  },
  {
    id: "recon-2026",
    name: "Reconnaissance — read both application portals while nothing is at stake",
    kind: "deadline",
    date: "2026-12-01",
    status: "verified", verified: "2026-09-20",
    what: "UBC and SFU both close on 1 December for September 2027 entry. Not your year. But the portals, forms, question wording and document requirements are visible now and every year after.",
    do: "Read them. Studio Day says of job postings that watching the cycle while nothing is at stake is free reconnaissance. Same move."
  },
  {
    id: "november-review",
    name: "The November review — five ledgers, and the question",
    kind: "review",
    date: "2026-11-04",
    status: "verified", verified: "2026-09-20",
    what: "First Wednesday of November, annually. Close the logs, ask the five ledger questions, reread the ceiling and the verification list, then rewrite the question — one paragraph, dated, appended and never overwritten.",
    do: "Ninety minutes. Recurs every year; the 2026 one is the baseline and most of it will be empty."
  },
  {
    id: "regulation-2027",
    name: "Psychotherapy becomes a regulated profession in BC",
    kind: "regulation",
    date: "2027-11-29",
    status: "verified", verified: "2026-09-20",
    url: "https://chcpbc.org/legislation/regulating-psychotherapy/",
    what: "CHCPBC's 10th regulated profession. College applications open summer 2027. The reserved title has not yet been prescribed.",
    do: "Re-read every public page against the published standards. House rules were written to read as post-November-2027 from the start, so this should be a confirmation rather than a rewrite."
  },
  {
    id: "prereq-deadline-2030",
    name: "All prerequisites complete — UBC's stated boundary",
    kind: "deadline",
    date: "2030-12-31",
    status: "verified", verified: "2026-09-20",
    what: "UBC requires prerequisites complete by 31 December of the application year. Six to nine courses depending on what the equivalency tables allow.",
    do: "At one course a term from the inventory, this is comfortable. At two courses a term it competes with the crisis-line shift, and the shift is the clock."
  },
  {
    id: "apply-2030",
    name: "APPLY — UBC and SFU counselling psychology",
    kind: "deadline",
    date: "2030-12-01",
    opens: "2030-09-15",
    status: "verified", verified: "2026-09-20",
    what: "UBC opens mid-September and wants referees by 15 December. SFU opens 1 October. Both close 1 December, for September 2031 entry.",
    do: "Ceiling one. References asked at least six months before. The statement written from eight dated versions of the question rather than reconstructed under deadline."
  },
  {
    id: "practicum-2033",
    name: "Practicum applications — the hinge",
    kind: "deadline",
    date: "2033-01-15",
    status: "verified", verified: "2026-09-20",
    what: "UBC Counselling Services takes four master's practicum students; deadline 15 January; 20–30 minute mock counselling session recording, two references, interviews for the shortlist. SFU runs two streams closing 30 November and 25 January and takes students from any institution; SFU students secure their own placements in Year 2.",
    do: "The narrowest point in the whole sequence, and the documented route to being hired by the service. Plan the income question for that year no later than 2032."
  }
];
