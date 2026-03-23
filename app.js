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

const elements = {
  jobSpecInput: document.getElementById("jobSpecInput"),
  analyzeBtn: document.getElementById("analyzeBtn"),
  clearBtn: document.getElementById("clearBtn"),
  copyJsonBtn: document.getElementById("copyJsonBtn"),
  wordCount: document.getElementById("wordCount"),
  statusText: document.getElementById("statusText"),
  roleTitle: document.getElementById("roleTitle"),
  roleMeta: document.getElementById("roleMeta"),
  salaryValue: document.getElementById("salaryValue"),
  locationValue: document.getElementById("locationValue"),
  experienceValue: document.getElementById("experienceValue"),
  workingStyleValue: document.getElementById("workingStyleValue"),
  responsibilityCount: document.getElementById("responsibilityCount"),
  requirementsCount: document.getElementById("requirementsCount"),
  responsibilitiesList: document.getElementById("responsibilitiesList"),
  requirementsList: document.getElementById("requirementsList"),
  keywordsList: document.getElementById("keywordsList"),
  stakeholdersList: document.getElementById("stakeholdersList"),
  questionsList: document.getElementById("questionsList"),
  talkingPointsList: document.getElementById("talkingPointsList"),
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
  const match = text.match(/(?:salary of |up to |salary up to )([£$€]\s?[\d,.kK]+)/i);
  return match ? match[1].replace(/\s+/g, "") : "Not stated";
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

function classifyLine(line) {
  const lower = line.toLowerCase();
  const requirementTriggers = [
    "minimum",
    "experience",
    "ability",
    "understanding",
    "skills",
    "desire to",
    "proven",
    "collaborative",
    "excellent",
  ];
  const responsibilityTriggers = [
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
  ];

  if (requirementTriggers.some((trigger) => lower.startsWith(trigger))) {
    return "requirement";
  }

  if (responsibilityTriggers.some((trigger) => lower.startsWith(trigger))) {
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
  return unique(
    KEYWORD_HINTS.filter((keyword) => lower.includes(keyword.toLowerCase())).map((keyword) => keyword)
  );
}

function extractStakeholders(text) {
  const lower = text.toLowerCase();
  return unique(
    STAKEHOLDER_HINTS.filter((stakeholder) =>
      lower.includes(stakeholder.toLowerCase())
    )
  );
}

function buildInterviewQuestions(roleTitle, responsibilities, requirements) {
  const starter = roleTitle !== "Role not detected" ? roleTitle : "this role";
  const prompts = [
    `Tell me about a time you improved performance in a channel or journey similar to ${starter}.`,
    "How would you use data to identify weak points in a digital customer journey and decide what to fix first?",
    "Describe how you have aligned product, marketing, and development stakeholders around a web optimisation priority.",
  ];

  if (responsibilities[0]) {
    prompts.push(`What approach would you take to deliver this responsibility well: "${responsibilities[0]}"?`);
  }

  if (requirements[0]) {
    prompts.push(`Which past example best proves this requirement in practice: "${requirements[0]}"?`);
  }

  return unique(prompts).slice(0, 5);
}

function buildTalkingPoints(requirements, keywords, responsibilities) {
  const points = [];

  if (requirements[0]) {
    points.push(`Lead with evidence for this requirement: ${requirements[0]}`);
  }
  if (keywords.length) {
    points.push(`Mirror the language in the spec by referencing ${keywords.slice(0, 4).join(", ")}.`);
  }
  if (responsibilities[0]) {
    points.push(`Use a result-focused example tied to: ${responsibilities[0]}`);
  }
  points.push("Show how you balance data, stakeholder management, and execution rather than speaking only in channel metrics.");

  return unique(points);
}

function analyzeSpec(text) {
  const normalizedText = text.trim();
  const lines = splitLines(normalizedText);
  const roleTitle = extractRoleTitle(lines);
  const { responsibilities, requirements } = extractSections(lines);
  const keywords = extractKeywords(normalizedText);
  const stakeholders = extractStakeholders(normalizedText);
  const salary = extractSalary(normalizedText);
  const location = extractLocation(normalizedText);
  const experience = extractExperience(normalizedText);
  const workingStyle = extractWorkingStyle(normalizedText);

  return {
    roleTitle,
    salary,
    location,
    experience,
    workingStyle,
    responsibilities,
    requirements,
    keywords,
    stakeholders,
    interviewQuestions: buildInterviewQuestions(roleTitle, responsibilities, requirements),
    applicationTalkingPoints: buildTalkingPoints(requirements, keywords, responsibilities),
    sourceStats: {
      lines: lines.length,
      words: normalizedText.split(/\s+/).filter(Boolean).length,
      characters: normalizedText.length,
    },
  };
}

function renderList(container, items, className = "") {
  container.innerHTML = "";
  if (!items.length) {
    const li = document.createElement("li");
    li.textContent = "Nothing detected yet.";
    if (className) {
      li.className = className;
    }
    container.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    if (className) {
      li.className = className;
    }
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
  elements.wordCount.textContent = String(words.length);
}

function renderAnalysis(analysis) {
  elements.statusText.textContent = `Analyzed ${analysis.sourceStats.words} words`;
  elements.roleTitle.textContent = analysis.roleTitle;
  elements.roleMeta.textContent = `${analysis.sourceStats.lines} meaningful lines detected`;
  elements.salaryValue.textContent = analysis.salary;
  elements.locationValue.textContent = analysis.location;
  elements.experienceValue.textContent = analysis.experience;
  elements.workingStyleValue.textContent = analysis.workingStyle;
  elements.responsibilityCount.textContent = String(analysis.responsibilities.length);
  elements.requirementsCount.textContent = String(analysis.requirements.length);

  renderList(elements.responsibilitiesList, analysis.responsibilities);
  renderList(elements.requirementsList, analysis.requirements);
  renderTags(elements.keywordsList, analysis.keywords);
  renderTags(elements.stakeholdersList, analysis.stakeholders);
  renderList(elements.questionsList, analysis.interviewQuestions);
  renderList(elements.talkingPointsList, analysis.applicationTalkingPoints);

  elements.jsonOutput.textContent = JSON.stringify(analysis, null, 2);
}

function runAnalysis() {
  const text = elements.jobSpecInput.value.trim();
  updateWordCount();

  if (!text) {
    elements.statusText.textContent = "Paste a spec to analyze";
    elements.roleTitle.textContent = "Not detected yet";
    elements.roleMeta.textContent = "Paste a spec to extract details.";
    elements.salaryValue.textContent = "-";
    elements.locationValue.textContent = "-";
    elements.experienceValue.textContent = "-";
    elements.workingStyleValue.textContent = "-";
    elements.responsibilityCount.textContent = "0";
    elements.requirementsCount.textContent = "0";
    renderList(elements.responsibilitiesList, []);
    renderList(elements.requirementsList, []);
    renderTags(elements.keywordsList, []);
    renderTags(elements.stakeholdersList, []);
    renderList(elements.questionsList, []);
    renderList(elements.talkingPointsList, []);
    elements.jsonOutput.textContent = "{}";
    return;
  }

  renderAnalysis(analyzeSpec(text));
}

async function copyJson() {
  try {
    await navigator.clipboard.writeText(elements.jsonOutput.textContent);
    elements.statusText.textContent = "JSON copied to clipboard";
  } catch (error) {
    elements.statusText.textContent = "Clipboard copy failed in this browser";
  }
}

elements.jobSpecInput.value = SAMPLE_SPEC;
elements.jobSpecInput.addEventListener("input", updateWordCount);
elements.analyzeBtn.addEventListener("click", runAnalysis);
elements.clearBtn.addEventListener("click", () => {
  elements.jobSpecInput.value = "";
  runAnalysis();
});
elements.copyJsonBtn.addEventListener("click", copyJson);

updateWordCount();
runAnalysis();
