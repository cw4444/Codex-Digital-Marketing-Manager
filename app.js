const SAMPLE_SPEC = `Digital Marketing Manager

Looking to take the next step in digital marketing? Want the chance to work on exciting projects with the opportunity to develop and grow your career? We're looking for a hard-working and self-motivated person to join our fast-growing digital marketing team.

As a Digital Marketing Manager, you will work alongside our Head of Digital Experience to drive performance across our main retail website. This role will be the link between our Product, UX/Development and Category Marketing teams, working to optimise our online journeys and keep our digital merchandising best-in-class. You will own specific marketing categories and be responsible for the performance of these areas on the web.

We are looking for a process-driven self-starter with strong communication skills that can get up to speed and become autonomous quickly. We are a data-driven team/business so experience using analytics tool and diving into the data to draw out valuable insights is essential.

Based in our head office in Team Valley, Gateshead, we offer hybrid working and offer a competitive basic salary of up to £38,000.

Core activities include:

Work with Category Marketing teams as a digital consultant to deliver optimal customer experience across the sites
Map customer journeys and highlight key touchpoints, pain points, customer needs and opportunities to add value where it matters to our customers
Use data and insight to identify gaps and weak spots and work with the wider team to identify solutions and measure impact
Digital lead on regular activities such as move to agency model, acquisition/opening of new locations, implementation of group events/campaigns
Digital lead for implementation of manufacturer campaigns across the websites
Work with PPC Manager to optimise landing pages to drive performance and budget efficiencies
Develop robust briefs supported by data, user stories and acceptance criteria
Measure performance and be measured against KPIs
Develop, own and implement processes to improve efficiencies across the Retail Web Team and wider marketing team
Identify opportunities to expand knowledge in order to reduce reliance on developers for changes (working within our internal CMS)
Work closely with the Head of Digital Experience and wider web team to prioritise work based on team and business objectives and communicate SLAs to relevant stakeholders
Develop relationships and collaborate with stakeholders across the wider business (SEO, PPC, product, development, data, content, UX, creative, CRO, field marketing, dealerships, finance, legal)
Is this you? Do you have any of these?

Minimum 3-4 years proven expertise in a digital marketing environment, with a specific focus on web optimisation
An ability to interpret data and generate meaningful insight to create solutions and actions
Excellent planning and communication skills
Collaborative and driven to support the bigger picture success of the team as a whole
Understanding of SEO, PPC and CRM
Proven project management skills
A desire to learn and build on existing skills and knowledge`;

const SAMPLE_CV = `Digital marketing manager with 5 years of experience across ecommerce, PPC landing pages, SEO collaboration, CRO, and digital merchandising.

Worked with product, development, content, analytics, and UX teams to improve online journeys and increase conversion.

Comfortable using GA4, Looker Studio, Excel, CMS platforms, briefing requirements, writing user stories, prioritising tests, and reporting against KPIs.

Managed campaign launches, category pages, and trading updates for retail sites while balancing stakeholder requests and performance goals.`;

const SAMPLE_HALL = `Digital Marketing Executive

Join our fast-paced family business. We offer a competitive salary and a great culture.

You will manage email, social, paid media, website updates, reporting, CRM, events, content, design briefs and campaign planning.

Minimum 3 years of experience required.
---
CRM Manager

Salary £45,000. Hybrid working. Bonus and pension included.

Own lifecycle strategy, reporting, testing roadmap, segmentation, automation, and stakeholder management across product and commercial teams.

Experience with CRM platforms, analytics and experimentation required.
---
Ecommerce Manager

We are a fast-growing team looking for a self-starter who can hit the ground running.

Based in Manchester with office-based working. Competitive salary.

Lead trading, CRO, merchandising, SEO coordination, PPC landing pages, CMS updates, stakeholder alignment, launches, and weekly board reporting.`;

const KEYWORD_HINTS = [
  "digital marketing",
  "web optimisation",
  "analytics",
  "customer journeys",
  "stakeholders",
  "SEO",
  "PPC",
  "CRM",
  "CMS",
  "KPIs",
  "user stories",
  "acceptance criteria",
  "project management",
  "landing pages",
  "digital merchandising",
  "campaigns",
  "data",
  "UX",
  "product",
  "CRO",
];

const STAKEHOLDER_HINTS = [
  "SEO",
  "PPC",
  "Product",
  "Development",
  "Data",
  "Content",
  "UX",
  "Creative",
  "CRO",
  "Field Marketing",
  "Finance",
  "Legal",
  "Category Marketing",
  "Head of Digital Experience",
  "Retail Web Team",
  "Dealerships",
];

const BENEFIT_HINTS = [
  "bonus",
  "pension",
  "private healthcare",
  "healthcare",
  "holiday",
  "annual leave",
  "flexible working",
  "remote",
  "hybrid",
  "share scheme",
  "life assurance",
  "wellbeing",
  "learning budget",
  "training",
];

const RESPONSIBILITY_TRIGGERS = [
  "work ",
  "map ",
  "use ",
  "develop ",
  "identify ",
  "measure ",
  "digital lead",
  "own ",
  "prioritise ",
  "prioritize ",
  "collaborate ",
  "manage ",
  "support ",
  "deliver ",
  "drive ",
  "lead ",
  "create ",
  "implement ",
];

const REQUIREMENT_TRIGGERS = [
  "minimum",
  "experience",
  "ability",
  "understanding",
  "skills",
  "desire to",
  "proven",
  "collaborative",
  "excellent",
  "strong",
  "confident",
  "must ",
];

const elements = {
  jobSpecInput: document.getElementById("jobSpecInput"),
  cvInput: document.getElementById("cvInput"),
  hallInput: document.getElementById("hallInput"),
  analyzeBtn: document.getElementById("analyzeBtn"),
  hallOfShameBtn: document.getElementById("hallOfShameBtn"),
  generatePostBtn: document.getElementById("generatePostBtn"),
  clearBtn: document.getElementById("clearBtn"),
  copyJsonBtn: document.getElementById("copyJsonBtn"),
  copyPostBtn: document.getElementById("copyPostBtn"),
  postToneSelect: document.getElementById("postToneSelect"),
  wordCount: document.getElementById("wordCount"),
  cvWordCount: document.getElementById("cvWordCount"),
  hallCount: document.getElementById("hallCount"),
  statusText: document.getElementById("statusText"),
  roleTitle: document.getElementById("roleTitle"),
  roleMeta: document.getElementById("roleMeta"),
  salaryValue: document.getElementById("salaryValue"),
  locationValue: document.getElementById("locationValue"),
  experienceValue: document.getElementById("experienceValue"),
  workingStyleValue: document.getElementById("workingStyleValue"),
  verdictScore: document.getElementById("verdictScore"),
  verdictLabel: document.getElementById("verdictLabel"),
  verdictSummary: document.getElementById("verdictSummary"),
  balanceValue: document.getElementById("balanceValue"),
  transparencyValue: document.getElementById("transparencyValue"),
  candidateValue: document.getElementById("candidateValue"),
  matchValue: document.getElementById("matchValue"),
  responsibilityCount: document.getElementById("responsibilityCount"),
  requirementsCount: document.getElementById("requirementsCount"),
  responsibilitiesList: document.getElementById("responsibilitiesList"),
  requirementsList: document.getElementById("requirementsList"),
  keywordsList: document.getElementById("keywordsList"),
  stakeholdersList: document.getElementById("stakeholdersList"),
  redFlagsList: document.getElementById("redFlagsList"),
  suspicionList: document.getElementById("suspicionList"),
  greenFlagsList: document.getElementById("greenFlagsList"),
  leverageList: document.getElementById("leverageList"),
  pressureList: document.getElementById("pressureList"),
  matchHighlightsList: document.getElementById("matchHighlightsList"),
  matchGapsList: document.getElementById("matchGapsList"),
  hallWorstValue: document.getElementById("hallWorstValue"),
  hallAverageValue: document.getElementById("hallAverageValue"),
  hallCompetitiveValue: document.getElementById("hallCompetitiveValue"),
  hallRankingList: document.getElementById("hallRankingList"),
  linkedinPostOutput: document.getElementById("linkedinPostOutput"),
  summaryBody: document.getElementById("summaryBody"),
  jsonOutput: document.getElementById("jsonOutput"),
};

function normalizeLine(line) {
  return line.replace(/\s+/g, " ").trim();
}

function splitLines(text) {
  return text
    .split(/\r?\n/)
    .map(normalizeLine)
    .filter(Boolean);
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function extractRoleTitle(lines) {
  const firstLongTitle = lines.find((line) => /^[A-Z][A-Za-z/&,\- ]{3,}$/.test(line));
  return firstLongTitle || "Role not detected";
}

function extractSalary(text) {
  const salaryMatch = text.match(/(?:salary of |up to |salary up to |salary )([£]\s?[\d,]+(?:\.\d+)?k?)/i);
  return salaryMatch ? salaryMatch[1].replace(/\s+/g, "") : "Not stated";
}

function extractSalaryNumber(salaryText) {
  if (!salaryText || salaryText === "Not stated") {
    return null;
  }

  const match = salaryText.match(/£([\d,]+(?:\.\d+)?)(k?)/i);
  if (!match) {
    return null;
  }

  const raw = Number(match[1].replace(/,/g, ""));
  return match[2].toLowerCase() === "k" ? raw * 1000 : raw;
}

function formatCurrency(value) {
  if (value == null) {
    return "Not stated";
  }

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

function extractLocation(text) {
  const match = text.match(/Based in (.*?)(?:, we offer|\.|$)/i);
  return match ? match[1].trim() : "Not stated";
}

function extractWorkingStyle(text) {
  const styles = ["hybrid", "remote", "on-site", "onsite", "office-based"];
  const found = styles.find((style) => text.toLowerCase().includes(style));
  if (!found) {
    return "Not stated";
  }

  return found === "onsite" ? "On-site" : found[0].toUpperCase() + found.slice(1);
}

function extractExperience(text) {
  const rangeMatch = text.match(/(\d+\s*-\s*\d+|\d+\+?)\s+years?/i);
  return rangeMatch ? `${rangeMatch[1].replace(/\s+/g, "")} years` : "Not stated";
}

function extractExperienceYears(experienceText) {
  if (!experienceText || experienceText === "Not stated") {
    return null;
  }

  const range = experienceText.match(/(\d+)-(\d+)/);
  if (range) {
    return Number(range[2]);
  }

  const simple = experienceText.match(/(\d+)/);
  return simple ? Number(simple[1]) : null;
}

function classifyLine(line) {
  const lower = line.toLowerCase();

  if (REQUIREMENT_TRIGGERS.some((trigger) => lower.startsWith(trigger))) {
    return "requirement";
  }

  if (RESPONSIBILITY_TRIGGERS.some((trigger) => lower.startsWith(trigger))) {
    return "responsibility";
  }

  return "other";
}

function extractSections(lines) {
  const responsibilities = [];
  const requirements = [];

  for (const line of lines) {
    const type = classifyLine(line);
    if (type === "responsibility") {
      responsibilities.push(line);
    }
    if (type === "requirement") {
      requirements.push(line);
    }
  }

  return {
    responsibilities: unique(responsibilities),
    requirements: unique(requirements),
  };
}

function extractKeywords(text) {
  const lower = text.toLowerCase();
  return unique(KEYWORD_HINTS.filter((keyword) => lower.includes(keyword.toLowerCase())));
}

function extractStakeholders(text) {
  const lower = text.toLowerCase();
  return unique(STAKEHOLDER_HINTS.filter((stakeholder) => lower.includes(stakeholder.toLowerCase())));
}

function countBenefits(text) {
  const lower = text.toLowerCase();
  return unique(BENEFIT_HINTS.filter((benefit) => lower.includes(benefit))).length;
}

function detectBuzzwords(text) {
  const phrases = [
    "fast-growing",
    "self-motivated",
    "hard-working",
    "self-starter",
    "autonomous quickly",
    "competitive basic salary",
    "opportunity to develop and grow",
    "best-in-class",
    "process-driven",
  ];

  const lower = text.toLowerCase();
  return unique(phrases.filter((phrase) => lower.includes(phrase)));
}

function detectSuspicionTriggers(text, salaryNumber) {
  const lower = text.toLowerCase();
  const triggers = [];

  if (/competitive salary/.test(lower) && !salaryNumber) {
    triggers.push("It says \"competitive salary\" without naming a number, which usually means the salary loses every competition except secrecy.");
  }

  if (/(we('| a)?re a family|family feel|family culture)/.test(lower)) {
    triggers.push("The ad uses family language, which often hints at boundary blur, guilt-based loyalty, or under-structured management.");
  }

  if (/(great culture|amazing culture|brilliant culture|fantastic culture)/.test(lower)) {
    triggers.push("Culture is being sold hard in the copy, which gets more suspicious when concrete benefits are thin.");
  }

  if (/(fast-paced|wear many hats|hit the ground running|roll up your sleeves)/.test(lower)) {
    triggers.push("The wording suggests immediate output and context switching, which can mean chaos is already normalised.");
  }

  if (/competitive salary/.test(lower) && /(family|culture)/.test(lower)) {
    triggers.push("The classic combo is here: vague pay plus emotional/culture language doing reputational heavy lifting.");
  }

  return unique(triggers);
}

function tokenize(text) {
  return unique(
    text
      .toLowerCase()
      .match(/[a-z0-9][a-z0-9/+.-]*/g) || []
  );
}

function extractCvSignals(cvText) {
  const tokens = tokenize(cvText);
  const phrases = [
    "seo",
    "ppc",
    "crm",
    "cro",
    "analytics",
    "ga4",
    "looker",
    "excel",
    "cms",
    "ux",
    "product",
    "development",
    "stakeholder",
    "user stories",
    "kpis",
    "landing pages",
    "digital merchandising",
    "campaigns",
    "conversion",
    "customer journeys",
    "retail",
  ];

  const lower = cvText.toLowerCase();
  return unique([
    ...tokens,
    ...phrases.filter((phrase) => lower.includes(phrase)),
  ]);
}

function buildCvMatchAnalysis({ cvText, keywords, stakeholders, requirements, responsibilities, experienceYears }) {
  if (!cvText.trim()) {
    return {
      score: null,
      highlights: ["Paste a CV or rough experience summary to get a match score."],
      gaps: ["No CV text provided yet."],
      matchedTerms: [],
    };
  }

  const cvSignals = extractCvSignals(cvText);
  const jobSignals = unique([
    ...keywords,
    ...stakeholders,
    ...requirements.flatMap((item) => tokenize(item)),
    ...responsibilities.flatMap((item) => tokenize(item)),
  ]).filter((item) => item.length > 2);

  const meaningfulSignals = unique([
    ...keywords,
    ...stakeholders,
    "seo",
    "ppc",
    "crm",
    "cro",
    "analytics",
    "cms",
    "ux",
    "product",
    "development",
    "kpis",
    "user stories",
    "landing pages",
    "customer journeys",
    "project management",
  ]).filter((signal) => jobSignals.some((jobSignal) => jobSignal.toLowerCase().includes(signal.toLowerCase()) || signal.toLowerCase().includes(jobSignal.toLowerCase())));

  const matchedTerms = meaningfulSignals.filter((signal) =>
    cvSignals.some((cvSignal) => cvSignal.toLowerCase().includes(signal.toLowerCase()) || signal.toLowerCase().includes(cvSignal.toLowerCase()))
  );

  const missingTerms = meaningfulSignals.filter((signal) => !matchedTerms.includes(signal));
  let score = 35;
  score += Math.min(45, matchedTerms.length * 7);

  if (experienceYears) {
    const cvYearsMatch = cvText.match(/(\d+)\s*\+?\s+years?/i);
    if (cvYearsMatch) {
      const cvYears = Number(cvYearsMatch[1]);
      score += cvYears >= experienceYears ? 15 : Math.max(0, 15 - (experienceYears - cvYears) * 5);
    }
  }

  score = Math.max(0, Math.min(100, score));

  const highlights = [];
  const gaps = [];

  if (matchedTerms.length) {
    highlights.push(`Your background overlaps with ${matchedTerms.slice(0, 6).join(", ")}.`);
  }

  if (/stakeholder|cross-functional|product|development|ux/i.test(cvText) && stakeholders.length >= 4) {
    highlights.push("Your CV suggests cross-functional work, which helps for stakeholder-heavy ads like this.");
  }

  if (/kpi|analytics|ga4|looker|data/i.test(cvText)) {
    highlights.push("The data and measurement side looks covered, which matters because this ad leans on performance language.");
  }

  if (!highlights.length) {
    highlights.push("The match is not obviously weak, but the CV text needs more direct overlap with the language used in the ad.");
  }

  if (missingTerms.length) {
    gaps.push(`The ad asks for signals you do not clearly evidence yet: ${missingTerms.slice(0, 6).join(", ")}.`);
  }

  if (experienceYears && !/years?/i.test(cvText)) {
    gaps.push("Your CV text does not state years of experience, so the match score cannot defend you against the experience filter.");
  }

  if (!gaps.length) {
    gaps.push("No major gaps were obvious from the pasted CV text.");
  }

  return {
    score,
    highlights,
    gaps,
    matchedTerms,
  };
}

function scoreJobSpec({ salaryNumber, responsibilities, requirements, stakeholders, benefitsCount, experienceYears, text, suspicionTriggers }) {
  let score = 60;
  const redFlags = [];
  const greenFlags = [];

  if (!salaryNumber) {
    score -= 20;
    redFlags.push("No salary listed, which usually shifts the negotiation risk onto the candidate.");
  } else {
    greenFlags.push(`Salary transparency exists: the ad states ${formatCurrency(salaryNumber)}.`);
  }

  if (salaryNumber && salaryNumber <= 40000 && responsibilities.length >= 9) {
    score -= 18;
    redFlags.push("The scope is wide for a sub-£40k salary, which suggests a stretch role without stretch pay.");
  }

  if (responsibilities.length >= 10) {
    score -= 10;
    redFlags.push("The ad bundles a lot of delivery, strategy, process, and stakeholder work into one role.");
  } else if (responsibilities.length >= 6) {
    score -= 4;
  }

  if (stakeholders.length >= 8) {
    score -= 8;
    redFlags.push("There are many stakeholder groups named, which often means heavy coordination overhead.");
  } else if (stakeholders.length >= 4) {
    greenFlags.push("The collaboration surface is clear, so the team shape is at least visible.");
  }

  if (requirements.length >= 6) {
    score -= 6;
    redFlags.push("The requirement list is fairly stacked, which can read like an everything-profile search.");
  }

  if (experienceYears && salaryNumber && experienceYears >= 4 && salaryNumber <= 40000) {
    score -= 8;
    redFlags.push("The experience ask feels senior-ish for the salary band shown.");
  }

  if (benefitsCount === 0) {
    score -= 6;
    redFlags.push("The package is vague beyond salary, so the candidate has to guess the real value of the offer.");
  } else if (benefitsCount >= 2) {
    score += 6;
    greenFlags.push("The ad hints at some package detail instead of treating pay as the whole story.");
  }

  if (/hybrid/i.test(text)) {
    score += 5;
    greenFlags.push("Hybrid working is named explicitly, which is more useful than hand-wavy flexibility language.");
  }

  if (/data-driven|measure performance|kpis/i.test(text)) {
    score += 4;
    greenFlags.push("Success signals are partly tied to data and KPIs rather than pure vibes.");
  }

  if (/opportunity to develop|desire to learn|build on existing skills/i.test(text)) {
    score += 2;
    greenFlags.push("There is at least some language around growth rather than just output extraction.");
  }

  if (/self-starter|hard-working|self-motivated|autonomous quickly/i.test(text)) {
    score -= 6;
    redFlags.push("The ad leans on resilience buzzwords, which can be code for thin support or unclear onboarding.");
  }

  if (suspicionTriggers.length >= 2) {
    score -= 8;
    redFlags.push("Several classic coping phrases show up in the copy, so the employer brand may be doing too much of the compensation work.");
  }

  score = Math.max(0, Math.min(100, score));

  return {
    score,
    redFlags: unique(redFlags),
    greenFlags: unique(greenFlags),
  };
}

function buildVerdict(score) {
  if (score >= 75) {
    return {
      label: "Surprisingly fair",
      summary: "This one looks more balanced than most. Still worth probing scope versus support.",
      tone: "good",
    };
  }

  if (score >= 55) {
    return {
      label: "Mixed bag",
      summary: "Some decent signals, but the ad still asks for a lot and leaves gaps you would want clarified.",
      tone: "warn",
    };
  }

  if (score >= 35) {
    return {
      label: "Classic UK job ad nonsense",
      summary: "Plenty of responsibility, respectable experience expectations, and not much evidence the package matches the ask.",
      tone: "bad",
    };
  }

  return {
    label: "Weaponised optimism",
    summary: "The advert is asking one person to absorb a lot of scope while dressing it up as growth and autonomy.",
    tone: "bad",
  };
}

function buildPressurePoints(responsibilities, stakeholders, buzzwords) {
  const points = [];

  if (responsibilities.length >= 9) {
    points.push(`You are carrying ${responsibilities.length} distinct responsibility signals before the role is even fully defined.`);
  }

  if (stakeholders.length >= 6) {
    points.push(`The role touches ${stakeholders.length} stakeholder groups, so influencing and chasing could eat a lot of the week.`);
  }

  if (buzzwords.length >= 3) {
    points.push(`The wording leans heavily on effort language: ${buzzwords.slice(0, 3).join(", ")}.`);
  }

  if (!points.length) {
    points.push("No obvious overload pattern was detected, though the ad should still be tested against day-to-day reality.");
  }

  return points;
}

function buildLeveragePoints({ salaryNumber, workingStyle, redFlags, greenFlags, responsibilities }) {
  const leverage = [];

  if (salaryNumber && responsibilities.length >= 8) {
    leverage.push("You can argue for a higher band by tying the breadth of scope to strategy, delivery, optimisation, and cross-functional ownership.");
  }

  if (workingStyle === "Hybrid") {
    leverage.push("Hybrid is already on the table, so you can negotiate for predictable office expectations instead of vague flexibility.");
  }

  if (redFlags.some((flag) => flag.includes("package is vague"))) {
    leverage.push("Ask for the real package in writing: pension, holidays, bonus structure, and development budget.");
  }

  if (greenFlags.some((flag) => flag.includes("KPIs"))) {
    leverage.push("Because the ad references KPIs, you can ask what success looks like in the first 90 days and how performance is measured.");
  }

  if (!leverage.length) {
    leverage.push("Use the ad's own wording to pin down scope, priorities, support, and progression before investing too much time.");
  }

  return leverage;
}

function buildPlainEnglishSummary(roleTitle, verdict, salaryText, responsibilities, stakeholders) {
  const salaryLine = salaryText === "Not stated" ? "without saying what it pays" : `for ${salaryText}`;
  const scope = responsibilities.length ? `${responsibilities.length} named responsibility areas` : "a fairly broad scope";
  const collaboration = stakeholders.length ? `${stakeholders.length} stakeholder groups in the mix` : "unclear stakeholder load";

  return `${roleTitle} is pitched as a growth opportunity, but the ad mostly reads like a broad operational role ${salaryLine}. It expects one person to juggle ${scope}, with ${collaboration}, and the overall vibe is ${verdict.label.toLowerCase()}.`;
}

function splitHallEntries(text) {
  return text
    .split(/\n\s*---\s*\n/g)
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function buildHallOfShame(text) {
  const entries = splitHallEntries(text);

  if (!entries.length) {
    return {
      count: 0,
      averageScore: null,
      worstScore: null,
      competitiveSalaryCount: 0,
      ranking: [],
    };
  }

  const ranking = entries.map((entry, index) => {
    const analysis = analyzeSpec(entry);
    return {
      id: index + 1,
      roleTitle: analysis.roleTitle,
      overall: analysis.scores.overall,
      verdict: analysis.verdict.label,
      salary: analysis.salary,
      summary: analysis.plainEnglishSummary,
      suspicionCount: analysis.suspicionTriggers.length,
      redFlagCount: analysis.redFlags.length,
      hasCompetitiveSalaryTrap: analysis.suspicionTriggers.some((item) => item.includes("competitive salary")),
    };
  }).sort((a, b) => a.overall - b.overall);

  const totalScore = ranking.reduce((sum, item) => sum + item.overall, 0);

  return {
    count: ranking.length,
    averageScore: Math.round(totalScore / ranking.length),
    worstScore: ranking[0].overall,
    competitiveSalaryCount: ranking.filter((item) => item.hasCompetitiveSalaryTrap).length,
    ranking,
  };
}

function buildLinkedInPost(hall, tone = "linkedin") {
  if (!hall.ranking.length) {
    return "Paste multiple ads into Hall of Shame mode and generate a leaderboard first.";
  }

  const worst = hall.ranking[0];
  const toneMap = {
    subtle: [
      `Today's Hall of Shame winner is "${worst.roleTitle}".`,
      "",
      `${worst.summary}`,
      "",
      `It scored ${worst.overall}/100, with ${worst.redFlagCount} red flags, ${worst.suspicionCount} suspicion triggers, and salary language listed as: ${worst.salary}.`,
      "",
      "Worth asking more questions before anyone burns time on an application.",
    ],
    linkedin: [
      `Excited to announce that "${worst.roleTitle}" has set a new personal best for taking the piss.`,
      "",
      "After a rigorous selection process involving absolutely no shame, it delivered:",
      `- a score of ${worst.overall}/100 on the Hall of Shame index`,
      `- ${worst.redFlagCount} red flags and ${worst.suspicionCount} suspicion triggers`,
      `- salary transparency described as: ${worst.salary}`,
      "",
      "Key learnings:",
      "- if the pay is vague enough, apparently culture can be listed as a line item",
      "- one human can now be expected to do three jobs as long as the wording says growth opportunity",
      "- emotional branding remains undefeated as a substitute for budget",
      "",
      "Really proud of everyone who made this possible.",
      "#LinkedIn #Jobs #Recruitment #CareerGrowth #TakingThePiss",
    ],
    unhinged: [
      `BREAKING: "${worst.roleTitle}" has smashed the office delusion index with a glorious ${worst.overall}/100.`,
      "",
      `Current offer: ${worst.salary}. Current expectation: one poor bastard does everything.`,
      "",
      `Today's stats: ${worst.redFlagCount} red flags. ${worst.suspicionCount} suspicion triggers. One absolutely shameless vibe.`,
      "",
      "The recruiter starter pack remains undefeated:",
      "- call it a growth opportunity",
      "- whisper competitive salary into the void",
      "- mention culture like payroll is a state of mind",
      "",
      "See you all on the timeline when the same job gets reposted in 6 weeks.",
      "#Jobs #UKJobs #Recruitment #HallOfShame #Lmao",
    ],
  };

  return (toneMap[tone] || toneMap.linkedin).join("\n");
}

function analyzeSpec(text) {
  const normalizedText = text.trim();
  const lines = splitLines(normalizedText);
  const roleTitle = extractRoleTitle(lines);
  const { responsibilities, requirements } = extractSections(lines);
  const keywords = extractKeywords(normalizedText);
  const stakeholders = extractStakeholders(normalizedText);
  const salary = extractSalary(normalizedText);
  const salaryNumber = extractSalaryNumber(salary);
  const location = extractLocation(normalizedText);
  const experience = extractExperience(normalizedText);
  const experienceYears = extractExperienceYears(experience);
  const workingStyle = extractWorkingStyle(normalizedText);
  const benefitsCount = countBenefits(normalizedText);
  const buzzwords = detectBuzzwords(normalizedText);
  const suspicionTriggers = detectSuspicionTriggers(normalizedText, salaryNumber);
  const scoring = scoreJobSpec({
    salaryNumber,
    responsibilities,
    requirements,
    stakeholders,
    benefitsCount,
    experienceYears,
    text: normalizedText,
    suspicionTriggers,
  });
  const verdict = buildVerdict(scoring.score);

  const balanceScore = Math.max(0, Math.min(100, 100 - responsibilities.length * 6 - stakeholders.length * 2 + (salaryNumber ? 10 : -10)));
  const transparencyScore = Math.max(0, Math.min(100, (salaryNumber ? 45 : 5) + benefitsCount * 18 + (workingStyle !== "Not stated" ? 14 : 0)));
  const candidateScore = Math.max(0, Math.min(100, 55 + (workingStyle === "Hybrid" ? 8 : 0) + (salaryNumber ? 6 : -10) - scoring.redFlags.length * 4 + scoring.greenFlags.length * 4));

  return {
    roleTitle,
    salary,
    salaryNumber,
    location,
    experience,
    experienceYears,
    workingStyle,
    responsibilities,
    requirements,
    keywords,
    stakeholders,
    buzzwords,
    suspicionTriggers,
    benefitsCount,
    verdict,
    scores: {
      overall: scoring.score,
      balance: balanceScore,
      transparency: transparencyScore,
      candidatePower: candidateScore,
    },
    plainEnglishSummary: buildPlainEnglishSummary(roleTitle, verdict, salary, responsibilities, stakeholders),
    redFlags: scoring.redFlags,
    greenFlags: scoring.greenFlags,
    leveragePoints: buildLeveragePoints({
      salaryNumber,
      workingStyle,
      redFlags: scoring.redFlags,
      greenFlags: scoring.greenFlags,
      responsibilities,
    }),
    pressurePoints: buildPressurePoints(responsibilities, stakeholders, buzzwords),
    sourceStats: {
      lines: lines.length,
      words: normalizedText.split(/\s+/).filter(Boolean).length,
      characters: normalizedText.length,
    },
  };
}

function renderList(container, items, emptyText = "Nothing detected yet.") {
  container.innerHTML = "";

  if (!items.length) {
    const li = document.createElement("li");
    li.textContent = emptyText;
    container.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderTags(container, items) {
  container.innerHTML = "";

  if (!items.length) {
    const span = document.createElement("span");
    span.className = "muted-text";
    span.textContent = "Nothing detected yet.";
    container.appendChild(span);
    return;
  }

  items.forEach((item) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = item;
    container.appendChild(span);
  });
}

function updateWordCount() {
  const words = elements.jobSpecInput.value.trim().split(/\s+/).filter(Boolean);
  const cvWords = elements.cvInput.value.trim().split(/\s+/).filter(Boolean);
  const hallEntries = splitHallEntries(elements.hallInput.value.trim());
  elements.wordCount.textContent = String(words.length);
  elements.cvWordCount.textContent = String(cvWords.length);
  elements.hallCount.textContent = String(hallEntries.length);
}

function renderHallOfShame(hall) {
  elements.hallWorstValue.textContent = hall.worstScore == null ? "-" : `${hall.worstScore}/100`;
  elements.hallAverageValue.textContent = hall.averageScore == null ? "-" : `${hall.averageScore}/100`;
  elements.hallCompetitiveValue.textContent = String(hall.competitiveSalaryCount);
  elements.hallRankingList.innerHTML = "";

  if (!hall.ranking.length) {
    const li = document.createElement("li");
    li.className = "hall-item";
    li.textContent = "Paste multiple ads separated by --- to generate the leaderboard.";
    elements.hallRankingList.appendChild(li);
    return;
  }

  hall.ranking.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "hall-item";

    const title = document.createElement("div");
    title.className = "hall-item-top";
    title.innerHTML = `<strong>#${index + 1} ${item.roleTitle}</strong><span>${item.overall}/100</span>`;

    const meta = document.createElement("p");
    meta.className = "hall-item-meta";
    meta.textContent = `${item.verdict} | Salary: ${item.salary} | Red flags: ${item.redFlagCount} | Suspicion triggers: ${item.suspicionCount}`;

    const summary = document.createElement("p");
    summary.className = "hall-item-summary";
    summary.textContent = item.summary;

    li.appendChild(title);
    li.appendChild(meta);
    li.appendChild(summary);
    elements.hallRankingList.appendChild(li);
  });
}

function renderLinkedInPost(text) {
  elements.linkedinPostOutput.textContent = text;
}

function renderAnalysis(analysis, cvMatch) {
  const matchText = cvMatch.score == null ? "without CV match" : `with CV match ${cvMatch.score}/100`;
  elements.statusText.textContent = `Ran UK job ad audit on ${analysis.sourceStats.words} words ${matchText}`;
  elements.roleTitle.textContent = analysis.roleTitle;
  elements.roleMeta.textContent = `${analysis.sourceStats.lines} meaningful lines detected`;
  elements.salaryValue.textContent = analysis.salary;
  elements.locationValue.textContent = analysis.location;
  elements.experienceValue.textContent = analysis.experience;
  elements.workingStyleValue.textContent = analysis.workingStyle;
  elements.verdictScore.textContent = `${analysis.scores.overall}/100`;
  elements.verdictLabel.textContent = analysis.verdict.label;
  elements.verdictSummary.textContent = analysis.verdict.summary;
  elements.balanceValue.textContent = `${analysis.scores.balance}/100`;
  elements.transparencyValue.textContent = `${analysis.scores.transparency}/100`;
  elements.candidateValue.textContent = `${analysis.scores.candidatePower}/100`;
  elements.matchValue.textContent = cvMatch.score == null ? "-" : `${cvMatch.score}/100`;
  elements.responsibilityCount.textContent = String(analysis.responsibilities.length);
  elements.requirementsCount.textContent = String(analysis.requirements.length);

  renderList(elements.responsibilitiesList, analysis.responsibilities);
  renderList(elements.requirementsList, analysis.requirements);
  renderTags(elements.keywordsList, analysis.keywords);
  renderTags(elements.stakeholdersList, analysis.stakeholders);
  renderList(elements.redFlagsList, analysis.redFlags, "No big red flags were detected.");
  renderList(elements.suspicionList, analysis.suspicionTriggers, "No classic suspicion phrases were detected.");
  renderList(elements.greenFlagsList, analysis.greenFlags, "No standout positives were detected.");
  renderList(elements.leverageList, analysis.leveragePoints);
  renderList(elements.pressureList, analysis.pressurePoints);
  renderList(elements.matchHighlightsList, cvMatch.highlights);
  renderList(elements.matchGapsList, cvMatch.gaps);
  elements.summaryBody.textContent = analysis.plainEnglishSummary;
  elements.jsonOutput.textContent = JSON.stringify({ analysis, cvMatch }, null, 2);
}

function resetAnalysis() {
  elements.statusText.textContent = "Paste a UK job ad to audit it";
  elements.roleTitle.textContent = "Not detected yet";
  elements.roleMeta.textContent = "Paste a spec to extract details.";
  elements.salaryValue.textContent = "-";
  elements.locationValue.textContent = "-";
  elements.experienceValue.textContent = "-";
  elements.workingStyleValue.textContent = "-";
  elements.verdictScore.textContent = "-";
  elements.verdictLabel.textContent = "No verdict yet";
  elements.verdictSummary.textContent = "The app will score the ad once there is enough text to read.";
  elements.balanceValue.textContent = "-";
  elements.transparencyValue.textContent = "-";
  elements.candidateValue.textContent = "-";
  elements.matchValue.textContent = "-";
  elements.responsibilityCount.textContent = "0";
  elements.requirementsCount.textContent = "0";
  elements.summaryBody.textContent = "Nothing to summarize yet.";
  elements.hallWorstValue.textContent = "-";
  elements.hallAverageValue.textContent = "-";
  elements.hallCompetitiveValue.textContent = "-";
  renderLinkedInPost("Generate a post after running Hall of Shame mode.");
  renderList(elements.responsibilitiesList, []);
  renderList(elements.requirementsList, []);
  renderTags(elements.keywordsList, []);
  renderTags(elements.stakeholdersList, []);
  renderList(elements.redFlagsList, []);
  renderList(elements.suspicionList, []);
  renderList(elements.greenFlagsList, []);
  renderList(elements.leverageList, []);
  renderList(elements.pressureList, []);
  renderList(elements.matchHighlightsList, []);
  renderList(elements.matchGapsList, []);
  renderHallOfShame({
    count: 0,
    averageScore: null,
    worstScore: null,
    competitiveSalaryCount: 0,
    ranking: [],
  });
  elements.jsonOutput.textContent = "{}";
}

function runAnalysis() {
  const text = elements.jobSpecInput.value.trim();
  const cvText = elements.cvInput.value.trim();
  updateWordCount();

  if (!text) {
    resetAnalysis();
    return;
  }

  const analysis = analyzeSpec(text);
  const cvMatch = buildCvMatchAnalysis({
    cvText,
    keywords: analysis.keywords,
    stakeholders: analysis.stakeholders,
    requirements: analysis.requirements,
    responsibilities: analysis.responsibilities,
    experienceYears: analysis.experienceYears,
  });
  const hall = buildHallOfShame(elements.hallInput.value.trim());
  const tone = elements.postToneSelect.value;

  renderAnalysis(analysis, cvMatch);
  renderHallOfShame(hall);
  renderLinkedInPost(buildLinkedInPost(hall, tone));
  elements.jsonOutput.textContent = JSON.stringify({ analysis, cvMatch, hall }, null, 2);
}

function runHallOfShame() {
  updateWordCount();
  const hall = buildHallOfShame(elements.hallInput.value.trim());
  const tone = elements.postToneSelect.value;
  renderHallOfShame(hall);
  renderLinkedInPost(buildLinkedInPost(hall, tone));
  elements.statusText.textContent = hall.count
    ? `Ranked ${hall.count} ads in Hall of Shame mode`
    : "Paste multiple ads separated by --- to rank them";
  elements.jsonOutput.textContent = JSON.stringify({ hall }, null, 2);
}

function generateLinkedInPost() {
  updateWordCount();
  const hall = buildHallOfShame(elements.hallInput.value.trim());
  const tone = elements.postToneSelect.value;
  renderHallOfShame(hall);
  renderLinkedInPost(buildLinkedInPost(hall, tone));
  elements.statusText.textContent = hall.count
    ? `Generated ${tone === "linkedin" ? "LinkedIn waffle" : tone} post from the worst-ranked ad`
    : "Paste multiple ads separated by --- before generating a post";
}

async function copyJson() {
  try {
    await navigator.clipboard.writeText(elements.jsonOutput.textContent);
    elements.statusText.textContent = "Structured JSON copied to clipboard";
  } catch (error) {
    elements.statusText.textContent = "Clipboard copy failed in this browser";
  }
}

async function copyPost() {
  try {
    await navigator.clipboard.writeText(elements.linkedinPostOutput.textContent);
    elements.statusText.textContent = "LinkedIn post copied to clipboard";
  } catch (error) {
    elements.statusText.textContent = "Clipboard copy failed in this browser";
  }
}

elements.jobSpecInput.value = SAMPLE_SPEC;
elements.cvInput.value = SAMPLE_CV;
elements.hallInput.value = SAMPLE_HALL;
elements.jobSpecInput.addEventListener("input", updateWordCount);
elements.cvInput.addEventListener("input", updateWordCount);
elements.hallInput.addEventListener("input", updateWordCount);
elements.postToneSelect.addEventListener("change", generateLinkedInPost);
elements.analyzeBtn.addEventListener("click", runAnalysis);
elements.hallOfShameBtn.addEventListener("click", runHallOfShame);
elements.generatePostBtn.addEventListener("click", generateLinkedInPost);
elements.clearBtn.addEventListener("click", () => {
  elements.jobSpecInput.value = "";
  elements.cvInput.value = "";
  elements.hallInput.value = "";
  runAnalysis();
});
elements.copyJsonBtn.addEventListener("click", copyJson);
elements.copyPostBtn.addEventListener("click", copyPost);

updateWordCount();
runAnalysis();
