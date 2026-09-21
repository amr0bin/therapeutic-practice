// Therapeutic Practice — the prerequisite ladder and the counted things
//
// state: "done" | "running" | "open"
// Fill `where` and `when` as each is taken. The private transcript lives in
// therapeutic-practice-private/transcript-and-prerequisites.md; this file holds
// only the state, so the page can be public.
//
// Lists verified 20 September 2026. See prerequisites.md and verification.md.

window.TP_LADDER = {

  // Best case six courses, worst case nine. The difference is whether the two
  // counselling courses and the two research/stats courses collapse across the
  // two institutions' equivalency tables. Unknown until both reply.
  courses: [
    { code:"U1",    name:"Learning",
      note:"UBC, senior undergraduate.", state:"open", where:"", when:"" },
    { code:"U2",    name:"Statistics",
      note:"UBC, senior undergraduate.", state:"open", where:"", when:"" },
    { code:"U3·S6", name:"Abnormal psychology",
      note:"Satisfies UBC's third prerequisite AND SFU's sixth. One course, two boxes — the one confirmed collapse.", state:"open", where:"", when:"" },
    { code:"U4·S2", name:"Counselling skills",
      note:"UBC names CNPS 362 (Basic Interviewing Skills); SFU names EDUC 423 as its exemplar. Probably one course for both — VERIFY against both equivalency tables.", state:"open", where:"", when:"" },
    { code:"U5·S3", name:"Counselling theories",
      note:"UBC names CNPS 365; SFU names EDUC 323. Probably one course for both — VERIFY.", state:"open", where:"", when:"" },
    { code:"S1",    name:"Cognitive or educational psychology",
      note:"SFU. May overlap U1 if framed as learning and cognition — VERIFY.", state:"open", where:"", when:"" },
    { code:"S4",    name:"Developmental psychology",
      note:"SFU.", state:"open", where:"", when:"" },
    { code:"S5",    name:"Research methods",
      note:"SFU. Often the same department sequence as statistics, rarely the same course — VERIFY.", state:"open", where:"", when:"" }
  ],

  // Counted things. Update from the private logs at the monthly Wednesday.
  // These are totals only — no dates, no settings, no people. Safe to be public.
  counters: [
    { id:"helping",    label:"Helping experience",
      have:0, need:36, unit:"months",
      note:"UBC requires a minimum of three years of work or volunteer experience involving helping relationships. SFU asks ~two years or 400 hours. Inventory what Make Space, Slow Leaf and ohHEY already carry before assuming zero." },
    { id:"service",    label:"Crisis line service",
      have:0, need:250, unit:"hours",
      note:"Crisis Centre BC: 250 credited service hours after ~110 hours of training plus 32 supervised, including 8 overnight and 48 fringe shifts." },
    { id:"supervision",label:"Clinical supervision banked",
      have:0, need:100, unit:"hours",
      note:"BCACC requires at least 100 hours for RCC, of which at least 25 must be direct. Crisis-line supervision does not count toward this, but the logging habit starts there." },
    { id:"direct",     label:"Direct client hours",
      have:0, need:150, unit:"hours",
      note:"CCPA requires 150 direct client hours for CCC, 75% meeting relational-processing standards. BCACC requires none. Plan to the higher. A UBC Counselling Services practicum delivers 180." },
    { id:"review",     label:"The scoping review",
      have:0, need:6, unit:"stages",
      note:"Protocol → screening → extraction → synthesis → preprint → journal. Six stages, four years. One a year is behind; two is on pace." }
  ],

  // The two elective choices made inside the programme in 2032, written down
  // in 2026 because they are made for reasons that have nothing to do with
  // registration and are the commonest RCC failure point.
  traps: [
    { name:"Group therapy theory and practice",
      why:"One of BCACC's six core areas for RCC, and an elective. Also directly employable: both universities run group programmes, and UBC lists wellness programming facilitation as a duty." },
    { name:"Family therapy theory and practice",
      why:"The other of BCACC's six core areas that is usually an elective. Missing it means additional coursework after graduation, at your own cost, while not yet registered and not yet earning." }
  ]
};
