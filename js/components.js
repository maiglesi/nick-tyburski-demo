/*
 * Component Renderers
 * Translates React components to Vanilla JS Strings
 */

/* --- Role Data (Aligned with Real App) --- */
const DEPARTMENT_ROLES = {
  executive: {
    meta: {
      icon: "👔",
      desc: "Strategy formulation, vision alignment, and orchestration.",
      color: "text-slate-800",
    },
    roles: [
      {
        name: "Chief Executive Officer",
        count: "5 components",
        desc: "Company vision, board reporting, investor relations, and strategic initiatives.",
        icon: "👔",
        slug: "ceo",
      },
      {
        name: "Chief Operating Officer",
        count: "5 components",
        desc: "Operational efficiency, cross-functional orchestration, and process health.",
        icon: "⚡",
        slug: "coo",
      },
      {
        name: "Chief Financial Officer",
        count: "5 components",
        desc: "Financial health, capital allocation, risk management, and unit economics.",
        icon: "💰",
        slug: "cfo",
      },
      {
        name: "Chief Technology Officer",
        count: "5 components",
        desc: "Technology roadmap, engineering velocity, and technical debt management.",
        icon: "🛠️",
        slug: "cto",
      },
      {
        name: "Chief Marketing Officer",
        count: "5 components",
        desc: "Brand positioning, market expansion, and customer acquisition strategy.",
        icon: "📣",
        slug: "cmo",
      },
      {
        name: "Chief Revenue Officer",
        count: "5 components",
        desc: "Revenue growth, sales strategy, and partnership development.",
        icon: "📈",
        slug: "cro",
      },
      {
        name: "Chief HR Officer",
        count: "5 components",
        desc: "Talent strategy, organizational culture, and people operations.",
        icon: "👥",
        slug: "chro",
      },
      {
        name: "Chief Product Officer",
        count: "5 components",
        desc: "Product vision, roadmap alignment, and market fit.",
        icon: "📦",
        slug: "cpo",
      },
      {
        name: "Chief Legal Officer",
        count: "5 components",
        desc: "Legal compliance, risk mitigation, and corporate governance.",
        icon: "⚖️",
        slug: "clo",
      },
    ],
  },
  engineering: {
    meta: {
      icon: "🔧",
      desc: "Technical excellence, infrastructure, and software development",
      color: "text-blue-600",
    },
    roles: [
      {
        name: "Engineering Manager",
        count: "5 components",
        desc: "Team leadership, sprint planning, resource allocation, and technical roadmap.",
        icon: "👔",
        slug: "engineering-manager",
      },
      {
        name: "Frontend Developer",
        count: "5 components",
        desc: "UI development, performance optimization, accessibility, and component libraries.",
        icon: "🎨",
        slug: "frontend-developer",
      },
      {
        name: "Backend Developer",
        count: "5 components",
        desc: "API development, database management, service architecture, and system optimization.",
        icon: "🖥️",
        slug: "backend-developer",
      },
      {
        name: "Fullstack Developer",
        count: "5 components",
        desc: "End-to-end feature development, integration testing, and release management.",
        icon: "🔗",
        slug: "fullstack-developer",
      },
      {
        name: "DevOps Engineer",
        count: "6 components",
        desc: "CI/CD pipelines, infrastructure automation, deployment, and system reliability.",
        icon: "🔄",
        slug: "devops-engineer",
      },
      {
        name: "Data Engineer",
        count: "1 component",
        desc: "Data pipelines, ETL processes, data warehouse management, and analytics infrastructure.",
        icon: "📊",
        slug: "data-engineer",
      },
      {
        name: "Security Engineer",
        count: "5 components",
        desc: "Security monitoring, vulnerability assessment, penetration testing, and access control.",
        icon: "🔒",
        slug: "security-engineer",
      },
      {
        name: "QA Engineer",
        count: "6 components",
        desc: "Test automation, quality assurance, bug triage, and regression analysis.",
        icon: "✅",
        slug: "qa-engineer",
      },
    ],
  },
  finance: {
    meta: {
      icon: "💰",
      desc: "Financial planning, accounting, and fiscal management",
      color: "text-amber-600",
    },
    roles: [
      {
        name: "Controller",
        count: "5 components",
        desc: "Month-end close, internal controls, audit preparation, and financial reporting.",
        icon: "📈",
        slug: "controller",
      },
      {
        name: "FP&A Analyst",
        count: "6 components",
        desc: "Budget planning, scenario analysis, headcount planning, and board reporting.",
        icon: "🎯",
        slug: "fpa-analyst",
      },
      {
        name: "Financial Analyst",
        count: "5 components",
        desc: "Variance analysis, financial modeling, forecasting, and investment analysis.",
        icon: "📊",
        slug: "financial-analyst",
      },
      {
        name: "Treasury Analyst",
        count: "5 components",
        desc: "Cash position monitoring, forecasting, bank relationships, and FX exposure.",
        icon: "🏦",
        slug: "treasury-analyst",
      },
      {
        name: "Tax Specialist",
        count: "4 components",
        desc: "Tax calendar management, provisions, nexus analysis, and transfer pricing.",
        icon: "🏛️",
        slug: "tax-specialist",
      },
      {
        name: "Accountant",
        count: "5 components",
        desc: "Accounts payable/receivable, invoice processing, and reconciliation.",
        icon: "📒",
        slug: "accountant",
      },
      {
        name: "Bookkeeper",
        count: "5 components",
        desc: "Bank reconciliation, expense reports, and transaction categorization.",
        icon: "📚",
        slug: "bookkeeper",
      },
      {
        name: "Payroll Specialist",
        count: "5 components",
        desc: "Payroll processing, time tracking, benefits enrollment, and tax filing.",
        icon: "💵",
        slug: "payroll-specialist",
      },
    ],
  },
  marketing: {
    meta: {
      icon: "📣",
      desc: "Brand management, growth, and content strategy",
      color: "text-teal-600",
    },
    roles: [
      {
        name: "Marketing Manager",
        count: "5 components",
        desc: "Campaign strategy, budget allocation, team coordination, and performance tracking.",
        icon: "🎯",
        slug: "marketing-manager",
      },
      {
        name: "Brand Designer",
        count: "5 components",
        desc: "Visual identity, creative assets, design systems, and brand guidelines.",
        icon: "🎨",
        slug: "brand-designer",
      },
      {
        name: "Content Writer",
        count: "5 components",
        desc: "Blog posts, whitepapers, social copy, SEO optimization, and editorial calendar.",
        icon: "✍️",
        slug: "content-writer",
      },
      {
        name: "SEO Specialist",
        count: "5 components",
        desc: "Keyword research, on-page optimization, technical SEO, and organic growth.",
        icon: "🔍",
        slug: "seo-specialist",
      },
      {
        name: "Paid Media Manager",
        count: "5 components",
        desc: "Ad campaign management, bid optimization, audience targeting, and ROAS analysis.",
        icon: "💰",
        slug: "paid-media-manager",
      },
      {
        name: "Social Media Manager",
        count: "5 components",
        desc: "Community engagement, content scheduling, social listening, and viral growth.",
        icon: "📱",
        slug: "social-media-manager",
      },
      {
        name: "Email Marketing Specialist",
        count: "5 components",
        desc: "Drip campaigns, newsletter automation, list segmentation, and deliverability.",
        icon: "📧",
        slug: "email-marketing",
      },
      {
        name: "Growth Hacker",
        count: "5 components",
        desc: "Viral loops, A/B testing, conversion rate optimization, and rapid experimentation.",
        icon: "🚀",
        slug: "growth-hacker",
      },
    ],
  },
  revenue: {
    meta: {
      icon: "📈",
      desc: "Revenue strategy, sales operations, and customer success",
      color: "text-indigo-600",
    },
    roles: [
      {
        name: "Sales Manager",
        count: "6 components",
        desc: "Pipeline oversight, forecasting, deal inspection, and rep performance.",
        icon: "👔",
        slug: "sales-manager",
      },
      {
        name: "Account Executive",
        count: "5 components",
        desc: "Deal management, proposals, stakeholder mapping, and contract negotiations.",
        icon: "🤝",
        slug: "account-executive",
      },
      {
        name: "Account Manager",
        count: "5 components",
        desc: "Account health, renewals, upselling, and customer relationship management.",
        icon: "📋",
        slug: "account-manager",
      },
      {
        name: "Sales Development Rep",
        count: "5 components",
        desc: "Prospecting, lead scoring, sequences, meetings, and activity metrics.",
        icon: "📞",
        slug: "sdr",
      },
      {
        name: "Customer Success Manager",
        count: "5 components",
        desc: "Customer health, onboarding, adoption metrics, and success planning.",
        icon: "🌟",
        slug: "csm",
      },
      {
        name: "Sales Operations",
        count: "5 components",
        desc: "Sales analytics, territory mapping, compensation, and CRM data quality.",
        icon: "⚙️",
        slug: "sales-ops",
      },
      {
        name: "Partnership Manager",
        count: "5 components",
        desc: "Partner pipeline, scorecards, co-marketing, and integration marketplace.",
        icon: "🔗",
        slug: "partnership-manager",
      },
    ],
  },
  people: {
    meta: {
      icon: "👥",
      desc: "Talent, culture, and organizational health",
      color: "text-rose-600",
    },
    roles: [
      {
        name: "HR Manager",
        count: "5 components",
        desc: "Policy administration, employee relations, compliance, and HR strategy.",
        icon: "👔",
        slug: "hr-manager",
      },
      {
        name: "Recruiter",
        count: "5 components",
        desc: "Sourcing, candidate pipeline, interviewing, and offer management.",
        icon: "🔎",
        slug: "recruiter",
      },
      {
        name: "People Ops Specialist",
        count: "5 components",
        desc: "Onboarding, offboarding, HRIS management, and process efficiency.",
        icon: "⚙️",
        slug: "people-ops",
      },
      {
        name: "L&D Specialist",
        count: "5 components",
        desc: "Training programs, skill gap analysis, learning paths, and workshops.",
        icon: "📚",
        slug: "ld-specialist",
      },
      {
        name: "Comp & Benefits Analyst",
        count: "5 components",
        desc: "Salary benchmarking, benefits administration, equity planning, and total rewards.",
        icon: "💹",
        slug: "comp-benefits",
      },
      {
        name: "Employee Experience",
        count: "5 components",
        desc: "Engagement surveys, culture initiatives, internal events, and recognition.",
        icon: "🎉",
        slug: "employee-experience",
      },
    ],
  },
  product: {
    meta: {
      icon: "📦",
      desc: "Product strategy, design, and development lifecycle",
      color: "text-purple-600",
    },
    roles: [
      {
        name: "Product Manager",
        count: "5 components",
        desc: "Roadmap planning, feature definition, backlog prioritization, and stakeholder management.",
        icon: "🗺️",
        slug: "product-manager",
      },
      {
        name: "Product Analyst",
        count: "5 components",
        desc: "Product metrics, user behavior analysis, cohort retention, and data insights.",
        icon: "📊",
        slug: "product-analyst",
      },
      {
        name: "UX Researcher",
        count: "5 components",
        desc: "User interviews, usability testing, persona development, and research repository.",
        icon: "🔬",
        slug: "ux-researcher",
      },
      {
        name: "UX Designer",
        count: "5 components",
        desc: "Wireframing, prototyping, user flows, and interaction design.",
        icon: "✏️",
        slug: "ux-designer",
      },
      {
        name: "UI Designer",
        count: "5 components",
        desc: "Visual design, high-fidelity mockups, design systems, and icon libraries.",
        icon: "🎨",
        slug: "ui-designer",
      },
      {
        name: "Technical Writer",
        count: "5 components",
        desc: "Documentation, API references, release notes, and user guides.",
        icon: "📝",
        slug: "technical-writer",
      },
    ],
  },
  legal: {
    meta: {
      icon: "⚖️",
      desc: "Risk management, compliance, and legal operations",
      color: "text-slate-600",
    },
    roles: [
      {
        name: "Corporate Counsel",
        count: "5 components",
        desc: "Corporate governance, board materials, entity management, and M&A support.",
        icon: "🏛️",
        slug: "corporate-counsel",
      },
      {
        name: "Contract Specialist",
        count: "5 components",
        desc: "Contract drafting, review, lifecycle management, and template libraries.",
        icon: "📝",
        slug: "contract-specialist",
      },
      {
        name: "Compliance Officer",
        count: "5 components",
        desc: "Regulatory tracking, policy enforcement, audits, and compliance reporting.",
        icon: "🛡️",
        slug: "compliance-officer",
      },
      {
        name: "Employment Counsel",
        count: "5 components",
        desc: "Labor law compliance, workplace policies, investigations, and employment agreements.",
        icon: "👥",
        slug: "employment-counsel",
      },
      {
        name: "IP Counsel",
        count: "5 components",
        desc: "Patent portfolio, trademark management, IP strategy, and licensing agreements.",
        icon: "💡",
        slug: "ip-counsel",
      },
    ],
  },
  operations: {
    meta: {
      icon: "⚙️",
      desc: "Business efficiency, logistics, and process management",
      color: "text-orange-600",
    },
    roles: [
      {
        name: "Operations Manager",
        count: "5 components",
        desc: "Operational dashboard, process optimization, resource allocation, and KPI tracking.",
        icon: "📊",
        slug: "operations-manager",
      },
      {
        name: "Project Manager",
        count: "5 components",
        desc: "Project planning, timeline tracking, risk management, and status reporting.",
        icon: "📅",
        slug: "project-manager",
      },
      {
        name: "Business Analyst",
        count: "5 components",
        desc: "Requirements gathering, process mapping, data analysis, and solution validation.",
        icon: "📈",
        slug: "business-analyst",
      },
      {
        name: "Executive Assistant",
        count: "5 components",
        desc: "Calendar management, travel planning, meeting prep, and correspondence.",
        icon: "📅",
        slug: "executive-assistant",
      },
      {
        name: "Vendor Manager",
        count: "5 components",
        desc: "Vendor selection, contract management, performance evaluation, and procurement.",
        icon: "🤝",
        slug: "vendor-manager",
      },
      {
        name: "Process Improvement",
        count: "5 components",
        desc: "Workflow analysis, automation opportunities, Six Sigma projects, and efficiency metrics.",
        icon: "🔄",
        slug: "process-improvement",
      },
    ],
  },
};

const Components = {
  /* --- Operations Command Center --- */
  OperationsCommandCenter: () => {
    return `
            <div class="bg-white border border-slate-200 rounded-lg shadow-sm p-0 overflow-hidden h-full flex flex-col">
                <!-- Header -->
                <div class="h-14 border-b border-slate-200 px-6 flex items-center justify-between bg-slate-50">
                    <div class="flex items-center gap-3">
                        <h3 class="font-semibold text-slate-800">Operations Command Center</h3>
                        <span class="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">● LIVE MONITORING</span>
                    </div>
                    <div class="text-xs text-slate-500 font-mono">UPDATED: JUST NOW</div>
                </div>

                <div class="p-6 flex-1 bg-slate-50/50 overflow-y-auto">
                    <!-- KPI Row -->
                    <div class="grid grid-cols-4 gap-4 mb-8">
                        <div class="bg-white p-4 rounded border shadow-sm">
                            <div class="text-[10px] text-slate-500 uppercase font-mono mb-1">System Health</div>
                            <div class="flex items-end justify-between">
                                <span class="text-2xl font-bold text-slate-800">94%</span>
                                <span class="text-xs text-green-600 font-medium">+2%</span>
                            </div>
                            <div class="w-full bg-slate-100 h-1 mt-3 rounded-full overflow-hidden">
                                <div class="bg-green-500 h-full w-[94%]"></div>
                            </div>
                        </div>
                        <div class="bg-white p-4 rounded border shadow-sm">
                            <div class="text-[10px] text-slate-500 uppercase font-mono mb-1">Active Agents</div>
                            <div class="text-2xl font-bold text-slate-800">7</div>
                            <div class="text-xs text-slate-400 mt-2">Currently deployed</div>
                        </div>
                        <div class="bg-white p-4 rounded border shadow-sm">
                            <div class="text-[10px] text-slate-500 uppercase font-mono mb-1">Warnings</div>
                            <div class="text-2xl font-bold text-amber-600">2</div>
                            <div class="text-xs text-slate-400 mt-2">Requires attention</div>
                        </div>
                        <div class="bg-white p-4 rounded border shadow-sm">
                            <div class="text-[10px] text-slate-500 uppercase font-mono mb-1">Blockers</div>
                            <div class="text-2xl font-bold text-red-600">1</div>
                            <div class="text-xs text-slate-400 mt-2">Critical path</div>
                        </div>
                    </div>

                    <!-- Department Grid -->
                    <div class="grid grid-cols-3 gap-6">
                        ${_renderDeptCard("Engineering", 98, "operational", "CTO Agent")}
                        ${_renderDeptCard("Marketing", 85, "warning", "CMO Agent", "Budget Approval")}
                        ${_renderDeptCard("Revenue", 94, "operational", "CRO Agent")}
                        ${_renderDeptCard("Product", 88, "warning", "CPO Agent", "User Research")}
                        ${_renderDeptCard("Finance", 100, "operational", "CFO Agent")}
                        ${_renderDeptCard("Legal", 99, "operational", "CLO Agent")}
                    </div>
                </div>
            </div>
        `;
  },

  /* --- Agent Activity Feed --- */
  AgentActivityFeed: () => {
    const events = [
      {
        agent: "Orchestrator",
        role: "ops",
        msg: "Initializing workflow...",
        status: "completed",
      },
      {
        agent: "Claude-3.5",
        role: "marketing",
        msg: "Drafting strategy → Campaign Brief",
        status: "completed",
      },
      {
        agent: "GPT-4-Turbo",
        role: "finance",
        msg: "Allocating budget → Cost Projection",
        status: "completed",
      },
      {
        agent: "Gemini-2.0",
        role: "design",
        msg: "Generating assets → Hero_Image_v1",
        status: "completed",
      },
      {
        agent: "Gemini-2.0",
        role: "design",
        msg: "Refining variation → Hero_Image_v2",
        status: "completed",
      },
      {
        agent: "Claude-3.5",
        role: "marketing",
        msg: "Generating copy → LinkedIn Ad #1",
        status: "working",
      },
      {
        agent: "Legal-Swarm",
        role: "legal",
        msg: "Scanning compliance → Ad Copy",
        status: "working",
      },
      {
        agent: "GPT-4-Turbo",
        role: "finance",
        msg: "Verifying spend → Ad Spend Allocation",
        status: "waiting",
      },
    ];

    return `
            <div class="bg-slate-900 text-slate-300 rounded-lg shadow-xl p-0 overflow-hidden h-full flex flex-col font-mono text-sm border border-slate-800">
                <div class="h-12 border-b border-slate-800 bg-slate-950 px-4 flex items-center justify-between">
                    <span class="font-bold text-white">Swarm Activity Log</span>
                    <span class="bg-green-900 text-green-400 text-[10px] px-2 py-0.5 rounded">● LIVE</span>
                </div>
                <div class="p-6 flex-1 overflow-y-auto space-y-4">
                    ${events
                      .map(
                        (e, i) => `
                        <div class="flex gap-4 items-start animate-fadeIn" style="animation-delay: ${i * 100}ms">
                            <div class="w-24 text-right text-xs opacity-50 pt-1">${new Date().toLocaleTimeString()}</div>
                            <div class="w-px bg-slate-800 relative">
                                <div class="absolute top-1.5 -left-1 w-2 h-2 rounded-full ${
                                  e.status === "working"
                                    ? "bg-blue-500 animate-pulse"
                                    : e.status === "completed"
                                      ? "bg-green-500"
                                      : "bg-slate-600"
                                }"></div>
                            </div>
                            <div class="flex-1 pb-4">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="font-bold ${
                                      e.role === "marketing"
                                        ? "text-teal-400"
                                        : e.role === "finance"
                                          ? "text-amber-400"
                                          : e.role === "design"
                                            ? "text-blue-400"
                                            : e.role === "legal"
                                              ? "text-slate-400"
                                              : "text-purple-400"
                                    }">@${e.agent}</span>
                                    ${e.status === "working" ? '<span class="text-[10px] border border-blue-900 bg-blue-900/30 text-blue-300 px-1 rounded">WORKING</span>' : ""}
                                </div>
                                <div class="text-slate-300">${e.msg}</div>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                    <div class="text-green-500 pt-4">> All tasks synchronized. Swarm active._</div>
                </div>
            </div>
        `;
  },

  /* --- Month End Close Checklist --- */
  MonthEndCloseChecklist: () => {
    const tasks = [
      {
        title: "Revenue Recognition Sync",
        status: "DONE",
        assignee: "Finance Agent",
        day: "-1",
      },
      {
        title: "Bank Reconciliation (Operating)",
        status: "DONE",
        assignee: "Finance Agent",
        day: "1",
      },
      {
        title: "AP Accruals Calculation",
        status: "REVIEW",
        assignee: "Controller",
        day: "2",
        isHuman: true,
      },
      {
        title: "Intercompany Reconciliations",
        status: "IN_PROGRESS",
        assignee: "Finance Agent",
        day: "2",
      },
      {
        title: "Fixed Asset Depreciation Run",
        status: "PENDING",
        assignee: "ERP Bot",
        day: "3",
      },
      {
        title: "Payroll Accrual Journal",
        status: "PENDING",
        assignee: "Payroll Spec.",
        day: "3",
        isHuman: true,
      },
      {
        title: "Inventory Valuation Adjustment",
        status: "BLOCKED",
        assignee: "Ops Lead",
        day: "4",
        isHuman: true,
      },
      {
        title: "Bad Debt Provision Review",
        status: "PENDING",
        assignee: "CFO",
        day: "5",
        isHuman: true,
      },
      {
        title: "Final P&L Consolidation",
        status: "PENDING",
        assignee: "Finance Agent",
        day: "5",
      },
    ];

    return `
            <div class="bg-white border border-slate-200 rounded-lg shadow-sm p-0 overflow-hidden h-full flex flex-col">
                <div class="p-6 border-b border-slate-100">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h2 class="text-lg font-bold text-slate-800">Month-End Close: December 2025</h2>
                            <p class="text-sm text-slate-500">Projected Completion: 2 Days (vs 5 avg)</p>
                        </div>
                        <span class="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">DAY 2 OF 5</span>
                    </div>
                    
                    <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                22% Complete
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                            <div style="width:22%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                        </div>
                    </div>
                </div>

                <div class="flex-1 overflow-y-auto bg-slate-50 p-6">
                    <div class="space-y-3">
                        ${tasks
                          .map(
                            (task) => `
                            <div class="bg-white p-4 rounded border ${task.status === "BLOCKED" ? "border-red-200 bg-red-50" : "border-slate-200"} shadow-sm flex items-center justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center border ${
                                      task.status === "DONE"
                                        ? "bg-green-500 border-green-500 text-white"
                                        : "border-slate-300"
                                    }">
                                        ${task.status === "DONE" ? "✓" : ""}
                                    </div>
                                    <div>
                                        <div class="text-sm font-medium text-slate-800 ${task.status === "DONE" ? "line-through text-slate-400" : ""}">${task.title}</div>
                                        <div class="flex items-center gap-2 mt-1">
                                            <span class="text-[10px] px-1.5 py-0.5 rounded ${task.isHuman ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"} font-medium">
                                                ${task.isHuman ? "👤" : "🤖"} ${task.assignee}
                                            </span>
                                            <span class="text-[10px] text-slate-400">Due Day ${task.day}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    ${_renderStatusBadge(task.status)}
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `;
  },

  /* --- Departments Overview (Interactive) --- */
  DepartmentsOverview: () => {
    const departments = [
      {
        name: "Executive",
        count: "9 roles",
        desc: "Strategy formulation, vision alignment, and orchestration.",
        icon: "👔",
        slug: "executive",
      },
      {
        name: "Engineering",
        count: "8 roles",
        desc: "Technical implementation, architecture, and system health.",
        icon: "🛠️",
        slug: "engineering",
      },
      {
        name: "Finance",
        count: "8 roles",
        desc: "Budgeting, forecasting, P&L analysis, and fiscal controls.",
        icon: "💰",
        slug: "finance",
      },
      {
        name: "Marketing",
        count: "8 roles",
        desc: "Campaign management, brand strategy, and market growth.",
        icon: "📣",
        slug: "marketing",
      },
      {
        name: "Revenue",
        count: "7 roles",
        desc: "Sales operations, pipeline management, and revenue optimization.",
        icon: "📈",
        slug: "revenue",
      },
      {
        name: "People",
        count: "6 roles",
        desc: "Talent acquisition, culture building, and HR operations.",
        icon: "👥",
        slug: "people",
      },
      {
        name: "Product",
        count: "6 roles",
        desc: "Roadmap planning, feature definition, and user experience.",
        icon: "📦",
        slug: "product",
      },
      {
        name: "Legal",
        count: "5 roles",
        desc: "Contract review, compliance monitoring, and risk management.",
        icon: "⚖️",
        slug: "legal",
      },
      {
        name: "Operations",
        count: "6 roles",
        desc: "Process optimization, efficiency tracking, and logistics.",
        icon: "⚙️",
        slug: "operations",
      },
    ];

    // Attach handler to global scope
    window.showDeptDetails = (slug, name) => {
      const container = document.getElementById("dept-container");
      const data = DEPARTMENT_ROLES[slug] || { roles: [] };
      const roles = data.roles;
      const meta = data.meta || {
        icon: "🏢",
        desc: "Department",
        color: "text-slate-800",
      };

      container.innerHTML = `
                <div class="h-full flex flex-col p-8 bg-[#FAFAF8] overflow-hidden animate-fadeIn">
                    
                    <!-- Header -->
                    <div class="mb-8 flex flex-col items-start gap-4">
                        <button onclick="Components.renderDeptGrid()" class="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-2 transition-colors">
                            ← Back to Departments
                        </button>
                        
                        <div class="flex items-center gap-4 mt-2">
                            <div class="w-16 h-16 bg-[#FFFFFF] rounded-full flex items-center justify-center text-3xl border border-[#EAEAEA] shadow-sm">
                                ${meta.icon}
                            </div>
                            <div>
                                <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-1">${name} Department</h2>
                                <p class="text-[#5C5A56]">${meta.desc}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Stats Bar -->
                    <div class="mb-8 flex gap-6">
                        <div class="bg-[#FFFFFF] border border-[#EAEAEA] rounded-[4px] px-6 py-4 shadow-sm">
                            <div class="text-2xl font-semibold text-[#1C1B1A]">${roles.length}</div>
                            <div class="text-sm text-[#5C5A56]">Active Roles</div>
                        </div>
                        <div class="bg-[#FFFFFF] border border-[#EAEAEA] rounded-[4px] px-6 py-4 shadow-sm">
                            <div class="text-2xl font-semibold text-green-600">35+</div>
                            <div class="text-sm text-[#5C5A56]">UI Components</div>
                        </div>
                        <div class="bg-[#FFFFFF] border border-[#EAEAEA] rounded-[4px] px-6 py-4 shadow-sm">
                            <div class="text-2xl font-semibold text-slate-800">Live</div>
                            <div class="text-sm text-[#5C5A56]">Status</div>
                        </div>
                    </div>
                    
                    <!-- Grid -->
                    <div class="flex-1 overflow-y-auto pr-2">
                        <div class="grid grid-cols-2 gap-6 pb-12">
                            ${roles
                              .map(
                                (role) => `
                                <div class="bg-white border border-[#EAEAEA] rounded-[4px] p-6 shadow-sm hover:shadow-md hover:border-slate-800 hover:-translate-y-1 transition-all duration-200 cursor-default group flex flex-col">
                                    <div class="flex justify-between items-start mb-4">
                                        <div class="w-12 h-12 bg-[#FAFAFA] rounded-full flex items-center justify-center text-2xl border border-[#EAEAEA] group-hover:scale-105 transition-transform">
                                            ${role.icon}
                                        </div>
                                        <span class="font-mono text-[10px] uppercase tracking-wider text-[#767370] bg-[#F1F3F5] px-2 py-1 rounded-[2px]">
                                            ${role.count}
                                        </span>
                                    </div>
                                    <div class="flex-1">
                                        <h3 class="text-lg font-semibold mb-2 group-hover:text-slate-800 transition-colors text-slate-700">
                                            ${role.name}
                                        </h3>
                                        <p class="text-sm text-[#5C5A56] leading-relaxed">
                                            ${role.desc}
                                        </p>
                                    </div>
                                    <div class="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span class="text-slate-800 text-sm font-medium flex items-center gap-1">
                                            View Components <span class="text-xs">→</span>
                                        </span>
                                    </div>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            `;
    };

    // Self-reference to allow "Back" button to work
    Components.renderDeptGrid = () => {
      const container = document.getElementById("dept-container");
      if (container) {
        container.innerHTML = _renderGridHTML(departments);
      }
    };

    return `
            <div id="dept-container" class="h-full w-full">
                ${_renderGridHTML(departments)}
            </div>
        `;
  },
};

/* --- Helpers --- */

function _renderGridHTML(departments) {
  return `
        <div class="h-full flex flex-col p-8 bg-[#FAFAF8] overflow-hidden">
            <div class="mb-8">
                <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Platform Organization</h2>
                <p class="text-[#5C5A56]">
                    Every function of a modern enterprise, mapped to an autonomous agent swarm. 
                    <strong>63 Specialized Roles</strong> ready to deploy.
                </p>
            </div>
            
            <div class="flex-1 overflow-y-auto pr-2">
                <div class="grid grid-cols-3 gap-6 pb-12">
                    ${departments
                      .map(
                        (dept) => `
                        <div onclick="window.showDeptDetails('${dept.slug}', '${dept.name}')" class="bg-white border border-[#EAEAEA] rounded-[4px] p-6 shadow-sm hover:shadow-md hover:border-blue-400 hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col h-full">
                            <div class="flex justify-between items-start mb-4">
                                <div class="w-12 h-12 bg-[#FAFAFA] rounded-full flex items-center justify-center text-2xl border border-[#EAEAEA] group-hover:scale-105 transition-transform">
                                    ${dept.icon}
                                </div>
                                <span class="font-mono text-[10px] uppercase tracking-wider text-[#767370] bg-[#F1F3F5] px-2 py-1 rounded-[2px]">
                                    ${dept.count}
                                </span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors text-slate-800">
                                    ${dept.name}
                                </h3>
                                <p class="text-sm text-[#5C5A56] leading-relaxed">
                                    ${dept.desc}
                                </p>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `;
}

function _renderDeptCard(name, health, status, agent, blocker) {
  const statusColors = {
    operational: "bg-green-500",
    warning: "bg-amber-500",
    critical: "bg-red-500",
  };

  return `
        <div class="bg-white p-4 rounded border border-slate-200 shadow-sm relative overflow-hidden">
            <div class="flex justify-between items-start mb-3">
                <h4 class="font-semibold text-slate-800">${name}</h4>
                <div class="flex gap-1">
                    <div class="w-2 h-2 rounded-full ${statusColors[status]}"></div>
                </div>
            </div>
            
            <div class="space-y-3">
                <div>
                    <div class="flex justify-between text-xs mb-1">
                        <span class="text-slate-500">Health</span>
                        <span class="font-mono ${status === "operational" ? "text-green-600" : "text-amber-600"}">${health}%</span>
                    </div>
                    <div class="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                        <div class="h-full ${status === "operational" ? "bg-green-500" : "bg-amber-500"}" style="width: ${health}%"></div>
                    </div>
                </div>
                
                <div class="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded">
                    <span>🤖</span> ${agent}
                </div>

                ${
                  blocker
                    ? `
                    <div class="flex items-center gap-2 text-[10px] text-red-700 bg-red-50 p-1.5 rounded border border-red-100 font-medium">
                        <span>⚠️ ${blocker}</span>
                    </div>
                `
                    : ""
                }
            </div>
        </div>
    `;
}

function _renderStatusBadge(status) {
  const styles = {
    DONE: "bg-green-100 text-green-700",
    REVIEW: "bg-purple-100 text-purple-700",
    IN_PROGRESS: "bg-blue-100 text-blue-700",
    PENDING: "bg-slate-100 text-slate-500",
    BLOCKED: "bg-red-100 text-red-700",
  };
  return `<span class="text-[10px] font-bold px-2 py-1 rounded ${styles[status] || styles.PENDING}">${status.replace("_", " ")}</span>`;
}
