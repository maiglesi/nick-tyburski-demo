/*
 * Slide Data Configuration - General Investor Demo Template
 * Narrative: The Intuitive AI Operating System
 */

const INVESTOR_NAME = "Nick Tyburski";

const INVESTOR_PROFILE = {
  name: "Nick Tyburski",
  title: "Financial Advisor",
  firm: "Cornerstone Wealth Management / LPL Financial",
  focus: [
    "Exit readiness",
    "Fiduciary standard portfolios",
    "Vendor community liquidity planning",
  ],
  credentials: "CEPA, AIF, WMS",
  region: "Northwest Arkansas",
};

// Helper for icons to keep content clean
const Icons = {
    // Concepts
    director: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-900"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    orchestrator: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="m8 12 4 4 4-4"></path></svg>`, // Abstract core
    
    // Problems
    jarvis: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>`, // Film strip/Clapper
    fatigue: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`, // Alert
    
    // Agents/Models
    globe: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    brain: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>`,
    code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    palette: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-pink-600"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`,

    // Industries
    construction: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-700"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="4" y="14" width="16" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`, // Hard hat abstract
    legal: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-700"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>`, // Scale
    retail: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-700"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`, // Shopping bag
    tech: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-700"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><path d="M12 8v8"></path><path d="m8 12 4 4 4-4"></path></svg>`, // Server/Tech

    // Thesis
    rocket: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-900"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>`,
    link: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-900"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
    chart: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-900"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>`,

    check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    
    // New Professional Icons
    mic: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
    layout: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    cpu: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    zap: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    refresh: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
    user_check: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>`
};

const SLIDES = [
  {
    id: "title",
    type: "slide",
    content: `
            <div class="flex flex-col justify-center h-full text-center">
                <span class="deck-label">INVESTOR BRIEFING • 2025</span>
                <h1 class="deck-title" style="font-size: 72px; line-height: 1.1;">The Intuitive<br>Enterprise.</h1>
                <p class="deck-subtitle mx-auto max-w-2xl">The first AI-native operating system that works the way humans think.</p>
                
                <div class="mt-12 flex justify-center">
                    <div class="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm">
                        <div class="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold">M</div>
                        <div>
                            <div class="text-sm font-bold text-slate-900">MyCOO Universal Canvas</div>
                            <div class="text-[10px] text-slate-500 uppercase tracking-wide">Live Prototype v2.0</div>
                        </div>
                    </div>
                </div>

                <div class="mt-16 text-xs font-mono text-slate-400 animate-pulse">
                    [ Press Space to Begin ]
                </div>
            </div>
        `,
    cooMessage:
      "Welcome. The world is drowning in AI tools, but starving for AI utility. We've built the bridge between human intent and machine execution.",
    agents: [
      {
        name: "Research Agent",
        status: "ready",
        statusText: "Market Data Loaded",
        model: "gemini",
      },
      {
        name: "Strategy Agent",
        status: "ready",
        statusText: "Narrative Locked",
        model: "claude",
      },
    ],
  },
  {
        id: 'problem',
        type: 'slide',
        content: `
            <div class="deck-grid-2">
                <div>
                    <span class="deck-label text-red-600">MARKET OPPORTUNITY</span>
                    <h2 class="deck-title">The Agentic AI Gap.</h2>
                    <p class="deck-subtitle text-base">Massive market with no clear winner.</p>
                    <p class="text-sm text-slate-600 mt-6 leading-relaxed">
                        Businesses are adopting AI tools in fragments—no memory, no coordination, no orchestration. The market needs a single platform that simplifies agentic AI. We are that platform.
                    </p>
                </div>

                <div class="bg-white border border-slate-200 rounded-lg p-8 shadow-sm h-full flex flex-col justify-center">
                    <div class="mb-6 flex items-center gap-3">
                        <div class="w-10 h-10 rounded bg-red-50 border border-red-100 flex items-center justify-center text-red-600">${Icons.chart}</div>
                        <h3 class="font-bold text-slate-900">Why Now?</h3>
                    </div>

                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <div class="mt-1 text-red-500 font-bold">•</div>
                            <div>
                                <div class="font-bold text-sm text-slate-900">Adoption vs. Fragmentation</div>
                                <div class="text-xs text-slate-500 mt-1">AI adoption is accelerating, but tool sprawl is creating chaos.</div>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="mt-1 text-red-500 font-bold">•</div>
                            <div>
                                <div class="font-bold text-sm text-slate-900">Orchestration is Unsolved</div>
                                <div class="text-xs text-slate-500 mt-1">Single-agent tools exist. Multi-agent orchestration is the blue ocean.</div>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="mt-1 text-red-500 font-bold">•</div>
                            <div>
                                <div class="font-bold text-sm text-slate-900">First-Mover Advantage</div>
                                <div class="text-xs text-slate-500 mt-1">Defining the "AI COO" category before incumbents adapt.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        cooMessage: "The market is flooded with tools but starving for orchestration. We aren't just another tool; we are the platform that makes all other tools work together.",
        agents: [
            { name: "Market Agent", status: "working", statusText: "Analyzing market fragmentation", model: "claude", progress: 85 }
        ]
    },
  {
    id: "solution",
    type: "slide",
    content: `
            <div class="h-full flex flex-col justify-center">
                <div class="mb-16 text-center">
                    <span class="deck-label text-emerald-600">THE SOLUTION</span>
                    <h2 class="deck-title">The Simple AI Platform.</h2>
                    <p class="deck-subtitle mx-auto max-w-2xl">Users don't want "AI Tools." They want a competent worker. We hide the complexity to give them exactly that.</p>
                </div>

                <div class="grid grid-cols-3 gap-8">
                    <!-- The Interface -->
                    <div class="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                        <div class="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                            ${Icons.director}
                        </div>
                        <h3 class="font-bold text-lg text-slate-900 mb-3 text-center">The Simple Worker</h3>
                        <p class="text-sm text-slate-600 text-center leading-relaxed">
                            An easy-to-use interface that figures it out. No complex prompting. You just delegate, and the worker executes.
                        </p>
                    </div>

                    <!-- The Backend -->
                    <div class="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                        <div class="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                            ${Icons.cpu}
                        </div>
                        <h3 class="font-bold text-lg text-slate-900 mb-3 text-center">Hidden Complexity</h3>
                        <p class="text-sm text-slate-600 text-center leading-relaxed">
                            We solve the hard problems in the backend—memory, context, routing—so the user never sees the mess, only the result.
                        </p>
                    </div>

                    <!-- The Network -->
                    <div class="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                        <div class="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                            ${Icons.globe}
                        </div>
                        <h3 class="font-bold text-lg text-slate-900 mb-3 text-center">Connected Value</h3>
                        <p class="text-sm text-slate-600 text-center leading-relaxed">
                            <span class="text-xs uppercase tracking-wide font-bold text-emerald-600 block mb-1">IN DEVELOPMENT</span>
                            Connecting to specialized AIs for deep value. Example: <strong>tryflume.ai</strong> for automated construction material sourcing.
                        </p>
                    </div>
                </div>
            </div>
        `,
    cooMessage:
      "Complexity belongs in the code, not in the user's face. I am the interface that makes AI simple, useful, and connected.",
    agents: [
      {
        name: "COO Agent",
        status: "ready",
        statusText: "Orchestration Mode: Active",
        model: "claude",
      },
      {
        name: "Swarm",
        status: "ready",
        statusText: "Waiting for signal",
        model: "mixed",
      },
    ],
  },
  {
        id: 'market-opportunity',
        type: 'slide',
        content: `
            <div class="deck-grid-2">
                <!-- Left: Text -->
                <div>
                    <span class="deck-label text-emerald-600">THE PROOF</span>
                    <h2 class="deck-title">It Works.</h2>
                    <p class="deck-subtitle text-base">We didn't just build a demo. We deployed this to real businesses with real problems. The result? Instant value creation across completely different industries.</p>
                    
                    <div class="mt-8 space-y-4">
                         <div class="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded shadow-sm hover:border-emerald-300 transition-colors cursor-default">
                            <span class="flex-shrink-0">${Icons.construction}</span>
                            <div>
                                <div class="font-bold text-sm">HICO Construction</div>
                                <div class="text-xs text-secondary">"You built my entire digital presence in 20 minutes."</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded shadow-sm hover:border-emerald-300 transition-colors cursor-default">
                            <span class="flex-shrink-0">${Icons.legal}</span>
                            <div>
                                <div class="font-bold text-sm">Orbiss Tax Advisory</div>
                                <div class="text-xs text-secondary">"It's impressive how it got the info correct, even if I didn't give you anything." — Jenny</div>
                            </div>
                        </div>
                         <div class="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded shadow-sm hover:border-emerald-300 transition-colors cursor-default">
                            <span class="flex-shrink-0">${Icons.tech}</span>
                            <div>
                                <div class="font-bold text-sm">Neuromart (Retail AI)</div>
                                <div class="text-xs text-secondary">"I built Walmart's location platform. This is the next level of retail intelligence." — Abiy</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded shadow-sm hover:border-emerald-300 transition-colors cursor-default">
                            <span class="flex-shrink-0">${Icons.retail}</span>
                            <div>
                                <div class="font-bold text-sm">E. & J. Gallo</div>
                                <div class="text-xs text-secondary">"I've never walked into a sales meeting this prepared."</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Metrics Card -->
                <div class="relative h-full w-full bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden p-8 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-center mb-6">
                            <div>
                                <div class="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">SPRINT 1 METRICS</div>
                                <h3 class="text-2xl font-bold text-slate-900">Validation Speed</h3>
                            </div>
                            <div class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold font-mono">LIVE DATA</div>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <div class="flex justify-between text-sm mb-2">
                                    <span class="font-bold text-slate-700">Time to Value</span>
                                    <span class="font-mono text-emerald-600">20 Minutes</span>
                                </div>
                                <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div class="bg-emerald-500 h-full w-[95%]"></div>
                                </div>
                                <div class="text-[10px] text-slate-400 mt-1">vs. Industry Avg (6 Weeks)</div>
                            </div>

                            <div>
                                <div class="flex justify-between text-sm mb-2">
                                    <span class="font-bold text-slate-700">Conversion Rate</span>
                                    <span class="font-mono text-emerald-600">100%</span>
                                </div>
                                <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div class="bg-emerald-500 h-full w-full"></div>
                                </div>
                                <div class="text-[10px] text-slate-400 mt-1">4/4 Pilot LOIs Signed</div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-slate-100">
                        <div class="text-sm font-serif italic text-slate-600 text-center">
                            "This is the first time AI has felt useful, not just impressive."
                        </div>
                    </div>
                </div>
            </div>
        `,
        cooMessage: "We didn't just build a tool for one niche. We proved the Universal Canvas model works across Construction, Finance, and Retail. The platform is agnostic; the value is specific.",
        agents: [
            { name: "Analytics Agent", status: "working", statusText: "Processing pilot data", model: "gpt", progress: 65 }
        ]
    },
  {
    id: "tech-moat",
    type: "slide",
    content: `
            <div class="deck-grid-2">
                <div>
                    <span class="deck-label text-accent-blue">TECHNICAL MOAT</span>
                    <h2 class="deck-title">Context Is The Moat.</h2>
                    <p class="deck-subtitle text-base">Switching costs compound with every interaction.</p>
                    <p class="text-sm text-slate-600 mt-6 leading-relaxed">
                        Unlike commodity AI wrappers, MyCOO accumulates irreplaceable business context. Every workflow, decision, and preference becomes embedded in our semantic memory layer. Competitors can't replicate years of organizational knowledge.
                    </p>
                </div>

                <div class="bg-slate-50 border border-slate-200 rounded-lg p-8 h-full flex flex-col justify-center">
                    <div class="mb-6 flex items-center gap-3">
                        <div class="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center shadow-sm text-accent-blue">${Icons.brain}</div>
                        <h3 class="font-bold text-slate-900">Why We Win</h3>
                    </div>
                    
                    <ul class="space-y-6">
                        <li class="flex gap-4">
                            <div class="mt-1 text-accent-blue font-bold">01</div>
                            <div>
                                <div class="font-bold text-sm text-slate-900">High Switching Costs</div>
                                <div class="text-xs text-slate-500 mt-1">Strong retention. The more they use it, the smarter it gets.</div>
                            </div>
                        </li>
                        <li class="flex gap-4">
                            <div class="mt-1 text-accent-blue font-bold">02</div>
                            <div>
                                <div class="font-bold text-sm text-slate-900">Model Agnostic</div>
                                <div class="text-xs text-slate-500 mt-1">Routes to best model for the job. No vendor lock-in risk.</div>
                            </div>
                        </li>
                        <li class="flex gap-4">
                            <div class="mt-1 text-accent-blue font-bold">03</div>
                            <div>
                                <div class="font-bold text-sm text-slate-900">Enterprise Ready</div>
                                <div class="text-xs text-slate-500 mt-1">Multi-tenant isolation and semantic memory from day one.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        `,
    cooMessage:
      "We've spent months building the 'plumbing' that makes agentic workflows reliable. Context persistence, conflict resolution, inter-agent messaging—this is our moat.",
    agents: [
      {
        name: "Architect",
        status: "ready",
        statusText: "System Stable",
        model: "claude",
      },
    ],
  },
  {
    id: "mission-hico",
    type: "slide",
    content: `
            <div class="deck-grid-2">
                <div>
                    <span class="deck-label text-emerald-600">MISSION 01: CREATION</span>
                    <h2 class="deck-title">Instant Digital Reality.</h2>
                    <p class="deck-subtitle text-base">HICO Construction. A traditional business needing a digital face. The user said: "Build me a site." MyCOO did the rest.</p>
                    
                    <div class="mt-8">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="font-mono text-xs bg-slate-100 px-2 py-1 rounded">Step 1</span>
                            <span class="text-sm">Gemini researches competitors & trends.</span>
                        </div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="font-mono text-xs bg-slate-100 px-2 py-1 rounded">Step 2</span>
                            <span class="text-sm">Claude writes SEO-optimized copy.</span>
                        </div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="font-mono text-xs bg-slate-100 px-2 py-1 rounded">Step 3</span>
                            <span class="text-sm">Swarm generates logo & brand palette.</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="font-mono text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Result</span>
                            <span class="text-sm font-bold text-emerald-600">Full Website Deployed in 20 Mins.</span>
                        </div>
                    </div>

                    <button class="btn-primary mt-8" onclick="App.openViewer('assets/hico-website-mockup.html', 'HICO Construction Website', 'mode-web')">
                        View Generated Site →
                    </button>
                </div>
                <div class="relative h-full bg-slate-100 rounded-lg overflow-hidden border border-slate-200 group cursor-pointer shadow-lg transition-transform hover:scale-[1.02]" onclick="App.openViewer('assets/hico-website-mockup.html', 'HICO Construction Website', 'mode-web')">
                     <iframe src="assets/hico-website-mockup.html" class="w-full h-full pointer-events-none border-none"></iframe>
                     <div class="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors flex items-center justify-center">
                        <span class="opacity-0 group-hover:opacity-100 bg-white/90 px-4 py-2 rounded-full shadow-sm text-xs font-bold transition-opacity">Click to Preview</span>
                     </div>
                </div>
            </div>
        `,
    cooMessage:
      "This wasn't a template. The agents wrote the code, wrote the copy, and designed the assets. This is generative product development.",
    agents: [
      {
        name: "Design Agent",
        status: "done",
        statusText: "Assets Deployed",
        model: "gemini",
      },
      {
        name: "Dev Agent",
        status: "done",
        statusText: "Code Shipped",
        model: "gpt",
      },
    ],
  },
  {
    id: "mission-orbiss",
    type: "slide",
    content: `
            <div class="flex flex-col h-full">
                <div class="mb-8">
                    <span class="deck-label text-purple-600">MISSION 02: STRATEGY</span>
                    <h2 class="deck-title">Deep Work, Democratized.</h2>
                    <p class="deck-subtitle">Orbiss Tax Advisory. Complex international expansion. We deployed a legal swarm to do the work of a partner-level consultant.</p>
                </div>

                <div class="grid grid-cols-4 gap-4 flex-1">
                    <div class="deck-card bg-purple-50/50 border-purple-100 col-span-1 justify-between">
                        <div>
                            <div class="text-sm font-bold text-purple-900 mb-1">Orbiss Advisory</div>
                            <div class="text-xs text-purple-700">Strategic Client</div>
                        </div>
                        <div>
                            <div class="deck-stat-huge text-purple-900" style="font-size: 48px;">889</div>
                            <div class="text-xs font-mono text-purple-700 mt-1">LINES OF ANALYSIS</div>
                        </div>
                    </div>
                    <div class="col-span-3 bg-white border border-slate-200 rounded-lg overflow-hidden relative shadow-md">
                        <div class="absolute inset-0 overflow-y-auto p-8 font-mono text-xs text-slate-600 leading-relaxed bg-slate-50">
                            <p># European Expansion Strategy v1.0</p>
                            <p class="text-slate-400">Generated by MyCOO Strategic Swarm</p>
                            <br/>
                            <p>## 1. Executive Summary</p>
                            <p>The opportunity for US-based tax advisory in the EU market represents a $4B TAM...</p>
                            <br/>
                            <p>## 2. Regulatory Compliance (NYLLCTA)</p>
                            <p>Analysis of New York LLC Transparency Act implications for cross-border entities...</p>
                            <br/>
                            <p>## 3. Financial Projections (3-Year)</p>
                            <p>| Year | Revenue | EBITDA |</p>
                            <p>|------|---------|--------|</p>
                            <p>| 2026 | $2.4M   | $0.4M  |</p>
                            <br/>
                            <p class="text-blue-600">[... 800+ lines of analysis ...]</p>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none flex items-end justify-center pb-8">
                            <button class="btn-primary shadow-lg pointer-events-auto bg-purple-600 hover:bg-purple-700 text-white" onclick="App.openViewer('assets/european-expansion-strategy.html', 'Orbiss Strategy', 'doc')">
                                Read Full Document →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `,
    cooMessage:
      "Most AI summarizes. MyCOO analyzes. We handled complex tax law, financial modeling, and market entry strategy. This is high-value, billable work.",
    agents: [
      {
        name: "Legal Agent",
        status: "done",
        statusText: "Regulatory Analysis",
        model: "claude",
      },
      {
        name: "Finance Agent",
        status: "done",
        statusText: "Financial Modeling",
        model: "gpt",
      },
    ],
  },
  {
    id: "mission-neuromart",
    type: "slide",
    content: `
            <div class="deck-grid-2">
                <!-- Left: Text -->
                <div>
                    <span class="deck-label text-orange-600">MISSION 03: RECRUITMENT</span>
                    <h2 class="deck-title">Attracting Top Tier Talent.</h2>
                    <p class="deck-subtitle text-base">Abiy built Walmart's location platform and exited the "Amazon of Ethiopia". He was building his own retail AI, saw MyCOO, and decided to join us instead.</p>
                    
                    <div class="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-100">
                        <div class="flex items-center gap-4 mb-4">
                             <div class="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-800 font-bold text-xl">A</div>
                             <div>
                                <div class="font-bold text-sm text-slate-900">Abiy's Story</div>
                                <div class="text-xs text-secondary">Former Chegg | Walmart Platform Lead</div>
                             </div>
                        </div>
                        <p class="text-sm text-slate-700 italic">"I've built massive retail systems. MyCOO is the platform I was trying to build. I want to lead the retail vertical here."</p>
                    </div>

                    <button class="btn-primary mt-8 bg-orange-600 hover:bg-orange-700 text-white" onclick="App.openViewer('https://maiglesi.github.io/neuromart-deck/', 'Neuromart Deck', 'deck')">
                        View Neuromart Vision →
                    </button>
                </div>

                <!-- Right: Visual -->
                <div class="relative h-full w-full bg-[#F4F4F0] rounded-lg border border-slate-200 shadow-xl overflow-hidden group cursor-pointer" onclick="App.openViewer('https://maiglesi.github.io/neuromart-deck/', 'Neuromart Deck', 'deck')">
                    
                    <!-- Swiss Graph Paper Background -->
                    <div class="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    <!-- Slide Content -->
                    <div class="relative h-full flex flex-col p-12">
                        <!-- Top Bar -->
                        <div class="flex justify-between items-center border-b border-[#1A1A1A] pb-4 mb-8">
                            <span class="font-sans font-bold text-[#1A1A1A] text-xs tracking-widest">DEC 2025</span>
                            <span class="font-sans font-bold text-[#1A1A1A] text-xs tracking-widest">CONFIDENTIAL</span>
                        </div>

                        <!-- Main Title Area -->
                        <div class="flex-1 flex flex-col justify-center border-l-[8px] border-[#C04E35] pl-8">
                            <div class="font-sans font-extrabold text-[#1A1A1A] leading-[0.8] mb-4" style="font-size: 5rem;">
                                N<span style="color:#C04E35">M</span>
                            </div>
                            <h3 class="font-serif text-[#1A1A1A] text-4xl font-bold uppercase tracking-tight mb-4">Neuromart</h3>
                            <p class="font-sans text-[#1A1A1A] text-lg tracking-widest">
                                Retail Science. <span style="color:#C04E35">Applied.</span>
                            </p>
                            
                            <div class="mt-12 pt-6 border-t border-[#1A1A1A] inline-block">
                                <span class="block font-sans text-[10px] text-[#C04E35] font-bold tracking-widest mb-1">PRESENTED BY</span>
                                <div class="font-sans font-bold text-[#1A1A1A] text-sm">Abiy Selassie</div>
                                <div class="font-sans text-[#1A1A1A] text-xs opacity-70">Founder & CEO</div>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div class="mt-8 pt-4 border-t border-[#1A1A1A] flex justify-between items-end font-sans text-[10px] text-[#1A1A1A]">
                            <span>01 / 12</span>
                            <span>AGENTIC AI FOR MID-MARKET RETAIL</span>
                        </div>
                    </div>

                    <!-- Hover Overlay -->
                    <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                        <span class="bg-[#C04E35] text-white px-6 py-3 rounded-sm text-sm font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-sans tracking-wide uppercase">Open Deck</span>
                    </div>
                </div>
            </div>
        `,
    cooMessage:
      "Great platforms attract great builders. We aren't just winning customers; we're winning the talent war against major tech companies.",
    agents: [
      {
        name: "Recruiting",
        status: "done",
        statusText: "Talent Acquired",
        model: "claude",
      },
    ],
  },
  {
    id: "revenue-engine",
    type: "slide",
    content: `
            <div class="deck-grid-2">
                <!-- Text Content -->
                <div>
                    <span class="deck-label text-blue-600">MISSION 04: INTELLIGENCE</span>
                    <h2 class="deck-title">Superhuman Sales Ops.</h2>
                    <p class="deck-subtitle text-base">E. & J. Gallo. The goal: Win the account. The method: Total information dominance.</p>
                    
                    <div class="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <div class="text-sm font-bold text-blue-900 mb-2">TARGET: E. & J. Gallo Winery</div>
                        <ul class="space-y-2 text-sm text-blue-800">
                            <li class="flex items-start gap-2"><span class="mt-1">${Icons.check}</span> Deep Web Research (News, Earnings, Podcasts)</li>
                            <li class="flex items-start gap-2"><span class="mt-1">${Icons.check}</span> Psychological Profiling of Decision Makers</li>
                            <li class="flex items-start gap-2"><span class="mt-1">${Icons.check}</span> "Trojan Horse" Strategy Development</li>
                        </ul>
                    </div>

                    <button class="btn-primary mt-8 bg-blue-600 hover:bg-blue-700" onclick="App.openViewer('assets/Megan-Putney-Gallo-Analysis.html', 'Megan Putney Analysis', 'doc')">
                        Open Sales Dossier →
                    </button>
                </div>

                <!-- Visual Content (Dossier Preview) -->
                <div class="relative h-full w-full bg-white rounded-lg border border-slate-200 shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500 cursor-pointer group" onclick="App.openViewer('assets/Megan-Putney-Gallo-Analysis.html', 'Megan Putney Analysis', 'doc')">
                    
                    <!-- Document Header -->
                    <div class="h-4 bg-blue-600 w-full"></div>
                    <div class="p-8">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <div class="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">CONFIDENTIAL ANALYSIS</div>
                                <h3 class="text-2xl font-serif font-bold text-slate-900">E. & J. Gallo Winery</h3>
                                <div class="text-sm text-slate-500 mt-1">Strategic Account Intelligence</div>
                            </div>
                            <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold border border-slate-200">MP</div>
                        </div>

                        <!-- Content Preview -->
                        <div class="space-y-4">
                            <div>
                                <div class="text-xs font-bold text-slate-900 uppercase border-b border-slate-100 pb-1 mb-2">Executive Summary</div>
                                <p class="text-[10px] text-slate-600 leading-relaxed">
                                    Megan Putney (Director, Commerce Marketing) is driving a digital transformation initiative focused on omnichannel acceleration...
                                </p>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-slate-50 p-3 rounded border border-slate-100">
                                    <div class="text-[9px] font-bold text-slate-500 uppercase mb-1">Key Pain Point</div>
                                    <div class="text-[10px] font-semibold text-slate-800">Data Fragmentation</div>
                                </div>
                                <div class="bg-slate-50 p-3 rounded border border-slate-100">
                                    <div class="text-[9px] font-bold text-slate-500 uppercase mb-1">Winning Angle</div>
                                    <div class="text-[10px] font-semibold text-slate-800">Unified Commerce</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                        <span class="bg-blue-600 text-white shadow-lg px-6 py-3 rounded-full text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            View Full Analysis
                        </span>
                    </div>
                </div>
            </div>
        `,
    cooMessage:
      "This is how teams win. No more cold calls. No more guessing. MyCOO gives every employee the intelligence of a dedicated research team.",
    agents: [
      {
        name: "Sales Agent",
        status: "done",
        statusText: "Dossier Complete",
        model: "claude",
      },
    ],
  },
  {
    id: "thesis",
    type: "slide",
    content: `
            <div class="flex flex-col items-center text-center h-full justify-center">
                <span class="deck-label text-purple-600">THE ULTIMATE PROOF</span>
                <h2 class="deck-title">Built By Agents. For You.</h2>
                <p class="deck-subtitle mx-auto max-w-2xl">This entire investor demo—personalized for you—was built by MyCOO agents.</p>
                
                <div class="mt-8 mb-12 max-w-2xl mx-auto">
                    <p class="text-sm text-slate-600 leading-relaxed">
                        That's our distribution advantage: the moment a customer engages, our agents customize and deliver value instantly. No setup. No onboarding delay. Immediate ROI.
                    </p>
                </div>
                
                <div class="grid grid-cols-3 gap-8 w-full">
                    <div class="p-6 border border-purple-100 bg-purple-50/50 rounded-lg">
                        <div class="mb-4 flex justify-center">${Icons.zap}</div>
                        <h3 class="font-bold text-sm text-purple-900">Instant Value</h3>
                        <p class="text-xs text-purple-700 mt-1">Zero-day onboarding. We don't tell you what it does; we show you what it did.</p>
                    </div>
                    <div class="p-6 border border-purple-100 bg-purple-50/50 rounded-lg">
                        <div class="mb-4 flex justify-center">${Icons.refresh}</div>
                        <h3 class="font-bold text-sm text-purple-900">Self-Building</h3>
                        <p class="text-xs text-purple-700 mt-1">The product builds its own sales assets. This deck is a living artifact.</p>
                    </div>
                    <div class="p-6 border border-purple-100 bg-purple-50/50 rounded-lg">
                        <div class="mb-4 flex justify-center">${Icons.user_check}</div>
                        <h3 class="font-bold text-sm text-purple-900">Personalized</h3>
                        <p class="text-xs text-purple-700 mt-1">Every touchpoint is custom-tailored by an agent swarm.</p>
                    </div>
                </div>
            </div>
        `,
    cooMessage:
      "I didn't just help build this company. I built this pitch. This is the power of a recursive AI operating system.",
    agents: [
      {
        name: "Pitch Agent",
        status: "done",
        statusText: "Deck Generated",
        model: "gpt",
      },
    ],
  },
  {
    id: "team",
    type: "slide",
    content: `
            <div class="h-full flex flex-col">
                <div class="mb-8 text-center">
                    <span class="deck-label text-slate-500">THE BUILDERS</span>
                    <h2 class="deck-title">A Team Built for Complexity.</h2>
                    <p class="deck-subtitle mx-auto">We aren't just web devs. We are security engineers, infrastructure architects, and intelligence officers who have built systems that cannot fail.</p>
                </div>

                <div class="grid grid-cols-2 gap-8 h-full">
                    
                    <!-- Mauricio -->
                    <div class="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all group flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-16 h-16 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center text-xl font-bold">MI</div>
                            <div>
                                <h3 class="font-bold text-xl text-slate-900">Mauricio Iglesias</h3>
                                <div class="text-xs font-mono text-emerald-600 mt-1 uppercase tracking-wide">CEO • HF0 Alum • Repeat Founder</div>
                            </div>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed flex-1">
                            Repeat founder with a successful exit. Built Bastazo to <strong>$3M ARR</strong> in under a year, winning contracts with DOD/DOE. Led orgs of 60+ people. Deep expertise in AI/ML & OT Cybersecurity.
                        </p>
                    </div>

                    <!-- Nate -->
                    <div class="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all group flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-16 h-16 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center text-xl font-bold">NM</div>
                            <div>
                                <h3 class="font-bold text-xl text-slate-900">Nate McBride</h3>
                                <div class="text-xs font-mono text-blue-600 mt-1 uppercase tracking-wide">Top Secret-Cleared • Deep Defense</div>
                            </div>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed flex-1">
                            Rebuilt <strong>DARPA's security infra</strong>. Built zero-days, hunted insiders, and conducted red team exercises for three-letter agencies. Expert in forensics & deception infrastructure.
                        </p>
                    </div>

                    <!-- Claire -->
                    <div class="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all group flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-16 h-16 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center text-xl font-bold">CL</div>
                            <div>
                                <h3 class="font-bold text-xl text-slate-900">Claire Li</h3>
                                <div class="text-xs font-mono text-purple-600 mt-1 uppercase tracking-wide">HF0 Alum • Infrastructure Lead</div>
                            </div>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed flex-1">
                            <strong>Apple Anti-Fraud</strong> & Palo Alto Networks lead. Architected global cloud infra across US/UK/Aus. Built DevSecOps pipelines reducing weeks of manual work to 18 minutes.
                        </p>
                    </div>

                    <!-- Itay -->
                    <div class="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all group flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-16 h-16 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center text-xl font-bold">IY</div>
                            <div>
                                <h3 class="font-bold text-xl text-slate-900">Itay Yaffe</h3>
                                <div class="text-xs font-mono text-orange-600 mt-1 uppercase tracking-wide">IDF Unit 8200 Captain</div>
                            </div>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed flex-1">
                            7 years in <strong>Israel's elite intelligence unit</strong>. Led DevOps teams for classified systems. Expert in deploying systems in high-security, air-gapped environments.
                        </p>
                    </div>

                </div>
            </div>
        `,
    cooMessage:
      "We aren't learning on the job. We've secured nations, protected billions of devices, and built exits. We are the team to build the enterprise OS.",
    agents: [
      {
        name: "HR Agent",
        status: "ready",
        statusText: "Team Verified",
        model: "gpt",
      },
    ],
  },
  {
    id: "ask",
    type: "slide",
    content: `
            <div class="flex flex-col items-center justify-center h-full">
                <h2 class="deck-title" style="margin-bottom: 8px;">Let's Build the Future.</h2>
                <div class="deck-stat-huge text-slate-900 mb-4">$2.5M</div>
                <p class="deck-subtitle mb-12">Pre-Seed Round • Capital Efficient Growth</p>
                
                <div class="flex gap-4">
                    <button class="btn-primary text-lg px-8 py-4 bg-slate-900 hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all" onclick="App.openViewer('https://calendly.com/mauricio-ostia/30min', 'Schedule Partner Meeting')">
                        Schedule Partner Meeting →
                    </button>
                    <button class="btn-primary text-lg px-8 py-4 bg-white text-slate-900 border border-slate-300 hover:bg-slate-50" onclick="App.renderSlide(0)">
                        Replay Demo ↺
                    </button>
                </div>
            </div>
        `,
    cooMessage:
      "We are ready to scale. The technology is proven. The team is executing. Join us.",
    agents: [
      {
        name: "Calendar Agent",
        status: "ready",
        statusText: "Calendar Open",
        model: "gpt",
      },
    ],
  },
];

const DELIVERABLE_LIBRARY = {
  exitReadinessScorecard: {
    id: "exit-readiness-scorecard",
    title: "Exit Readiness Scorecard",
    badge: "LIVE",
    url: "assets/nick-exit-readiness-scorecard.html",
    mode: "doc",
    previewType: "iframe",
    description:
      "Transferable value gaps, exit readiness signals, and vendor exposure.",
    size: { width: 460, height: 300 },
  },
  liquidityForecast: {
    id: "liquidity-event-forecast",
    title: "Liquidity Event Forecast",
    badge: "PROJECTION",
    url: "assets/nick-liquidity-event-forecast.html",
    mode: "doc",
    previewType: "iframe",
    description:
      "Liquidity event timing, cash runway, and tax drag sensitivity.",
    size: { width: 460, height: 300 },
  },
  fiduciaryPortfolio: {
    id: "fiduciary-portfolio-dashboard",
    title: "Fiduciary Portfolio Dashboard",
    badge: "FIDUCIARY",
    url: "assets/nick-fiduciary-portfolio-dashboard.html",
    mode: "web",
    previewType: "iframe",
    description:
      "Risk-adjusted return view aligned to the fiduciary standard.",
    size: { width: 480, height: 320 },
  },
  taxProvision: {
    id: "tax-provision-workbook",
    title: "Tax Provision Workbook",
    badge: "REVIEW",
    url: "assets/nick-tax-provision-workbook.html",
    mode: "doc",
    previewType: "iframe",
    description:
      "Tax-efficient decumulation and liquidity event impact modeling.",
    size: { width: 460, height: 320 },
  },
  quarterlyReviewPack: {
    id: "quarterly-review-pack",
    title: "Quarterly Review Pack",
    badge: "BOARD READY",
    url: "assets/nick-quarterly-review-pack.html",
    mode: "doc",
    previewType: "iframe",
    description:
      "Board-ready review with exit readiness KPIs and fiduciary notes.",
    size: { width: 460, height: 300 },
  },
  meetingPrep: {
    id: "meeting-prep",
    title: "Meeting Preparation Dashboard",
    badge: "READY",
    url: "assets/nick-meeting-prep.html",
    mode: "doc",
    previewType: "iframe",
    description:
      "Client prep for vendor community exposure and legacy planning.",
    size: { width: 440, height: 300 },
  },
  taskPriorityBoard: {
    id: "task-priority-board",
    title: "Task Priority Board",
    badge: "LIVE",
    url: "assets/nick-task-priority-board.html",
    mode: "web",
    previewType: "iframe",
    description: "Exit readiness tasks sequenced for transferable value.",
    size: { width: 420, height: 280 },
  },
  vendorRisk: {
    id: "vendor-risk-assessment",
    title: "Vendor Risk Assessment",
    badge: "ALERT",
    url: "assets/nick-vendor-risk-assessment.html",
    mode: "doc",
    previewType: "iframe",
    description:
      "Vendor community concentration and counterparty risk review.",
    size: { width: 440, height: 300 },
  },
  cashPosition: {
    id: "cash-position",
    title: "Cash Position Dashboard",
    badge: "LIVE",
    url: "assets/nick-cash-position.html",
    mode: "web",
    previewType: "iframe",
    description:
      "Liquidity posture ahead of a potential liquidity event.",
    size: { width: 460, height: 300 },
  },
  auditLog: {
    id: "audit-log",
    title: "Audit Log Viewer",
    badge: "COMPLIANCE",
    url: "assets/nick-audit-log.html",
    mode: "doc",
    previewType: "iframe",
    description: "Fiduciary audit trail, approvals, and access records.",
    size: { width: 420, height: 280 },
  },
};

const EXPERIENCE_DEFAULT_ACTIVITY = [
  { agent: "Research Agent", text: "Gathering context for the client dossier" },
  { agent: "Finance Agent", text: "Modeling liquidity event scenarios" },
  { agent: "Ops Agent", text: "Sequencing exit readiness workstreams" },
  { agent: "COO Agent", text: "Packaging deliverables" },
];

const EXPERIENCE_ACTIVITY = {
  "exit-readiness-scan": [
    { agent: "Exit Planning Agent", text: "Scoring exit readiness signals" },
    { agent: "Ops Agent", text: "Mapping transferable value gaps" },
    { agent: "Finance Agent", text: "Quantifying concentration exposure" },
    { agent: "COO Agent", text: "Publishing scorecard" },
  ],
  "liquidity-event-timing": [
    { agent: "Treasury Agent", text: "Building cash timing curve" },
    { agent: "Tax Agent", text: "Estimating tax drag and basis impact" },
    { agent: "Finance Agent", text: "Stress testing proceeds" },
    { agent: "COO Agent", text: "Packaging liquidity forecast" },
  ],
  "fiduciary-portfolio-audit": [
    { agent: "Investment Agent", text: "Reviewing risk-adjusted return" },
    { agent: "Compliance Agent", text: "Checking fiduciary standard notes" },
    { agent: "Ops Agent", text: "Refreshing portfolio dashboard" },
    { agent: "COO Agent", text: "Logging audit trail" },
  ],
  "transferable-value-plan": [
    { agent: "Ops Agent", text: "Ranking value acceleration moves" },
    { agent: "Strategy Agent", text: "Building transferable value roadmap" },
    { agent: "Finance Agent", text: "Sizing valuation uplift" },
    { agent: "COO Agent", text: "Publishing action plan" },
  ],
  "vendor-community-risk": [
    { agent: "Vendor Agent", text: "Mapping vendor community exposure" },
    { agent: "Risk Agent", text: "Scoring counterparty risk" },
    { agent: "Finance Agent", text: "Linking cash concentration" },
    { agent: "COO Agent", text: "Packaging risk summary" },
  ],
  "succession-alignment": [
    { agent: "Executive Assistant", text: "Drafting meeting cadence" },
    { agent: "Strategy Agent", text: "Aligning stakeholders and timeline" },
    { agent: "Tax Agent", text: "Flagging estate planning needs" },
    { agent: "COO Agent", text: "Preparing review pack" },
  ],
  "liquidity-structure": [
    { agent: "Finance Agent", text: "Modeling deal structure options" },
    { agent: "Tax Agent", text: "Estimating after-tax proceeds" },
    { agent: "Investment Agent", text: "Calibrating reinvestment strategy" },
    { agent: "COO Agent", text: "Packaging structure brief" },
  ],
  "balance-sheet-cleanup": [
    { agent: "Treasury Agent", text: "Reviewing working capital" },
    { agent: "Ops Agent", text: "Sequencing cleanup tasks" },
    { agent: "Compliance Agent", text: "Validating audit trail" },
    { agent: "COO Agent", text: "Publishing readiness checklist" },
  ],
  "fiduciary-governance": [
    { agent: "Compliance Agent", text: "Updating fiduciary documentation" },
    { agent: "Investment Agent", text: "Reviewing portfolio risk bands" },
    { agent: "Board Agent", text: "Drafting governance notes" },
    { agent: "COO Agent", text: "Packaging governance pack" },
  ],
  "tax-efficient-decumulation": [
    { agent: "Tax Agent", text: "Sequencing decumulation steps" },
    { agent: "Investment Agent", text: "Aligning drawdown strategy" },
    { agent: "Finance Agent", text: "Modeling cash flow impact" },
    { agent: "COO Agent", text: "Publishing decumulation workbook" },
  ],
  "legacy-planning-brief": [
    { agent: "Estate Agent", text: "Drafting legacy planning brief" },
    { agent: "Executive Assistant", text: "Scheduling family review" },
    { agent: "Compliance Agent", text: "Documenting fiduciary notes" },
    { agent: "COO Agent", text: "Packaging briefing pack" },
  ],
  "family-governance": [
    { agent: "Executive Assistant", text: "Coordinating family cadence" },
    { agent: "Ops Agent", text: "Tracking action items" },
    { agent: "Strategy Agent", text: "Defining governance workflow" },
    { agent: "COO Agent", text: "Publishing governance plan" },
  ],
  "quarterly-review-cadence": [
    { agent: "Board Agent", text: "Updating quarterly review pack" },
    { agent: "Investment Agent", text: "Refreshing performance notes" },
    { agent: "Treasury Agent", text: "Confirming cash positioning" },
    { agent: "COO Agent", text: "Publishing cadence calendar" },
  ],
  "advisor-coo-workflow": [
    { agent: "Executive Assistant", text: "Sequencing client tasks" },
    { agent: "Ops Agent", text: "Aligning COO workflow" },
    { agent: "Compliance Agent", text: "Logging approvals" },
    { agent: "COO Agent", text: "Publishing workflow view" },
  ],
  "risk-adjusted-return-monitoring": [
    { agent: "Investment Agent", text: "Monitoring risk-adjusted return" },
    { agent: "Finance Agent", text: "Checking liquidity buffers" },
    { agent: "Risk Agent", text: "Reviewing vendor concentration" },
    { agent: "COO Agent", text: "Publishing monitoring notes" },
  ],
};

const EXPERIENCE_DELIVERABLES = {
  "exit-readiness-scan": [
    DELIVERABLE_LIBRARY.exitReadinessScorecard,
    DELIVERABLE_LIBRARY.vendorRisk,
    DELIVERABLE_LIBRARY.taskPriorityBoard,
  ],
  "liquidity-event-timing": [
    DELIVERABLE_LIBRARY.liquidityForecast,
    DELIVERABLE_LIBRARY.taxProvision,
    DELIVERABLE_LIBRARY.cashPosition,
  ],
  "fiduciary-portfolio-audit": [
    DELIVERABLE_LIBRARY.fiduciaryPortfolio,
    DELIVERABLE_LIBRARY.auditLog,
    DELIVERABLE_LIBRARY.quarterlyReviewPack,
  ],
  "transferable-value-plan": [
    DELIVERABLE_LIBRARY.exitReadinessScorecard,
    DELIVERABLE_LIBRARY.taskPriorityBoard,
    DELIVERABLE_LIBRARY.quarterlyReviewPack,
  ],
  "vendor-community-risk": [
    DELIVERABLE_LIBRARY.vendorRisk,
    DELIVERABLE_LIBRARY.cashPosition,
    DELIVERABLE_LIBRARY.auditLog,
  ],
  "succession-alignment": [
    DELIVERABLE_LIBRARY.meetingPrep,
    DELIVERABLE_LIBRARY.quarterlyReviewPack,
    DELIVERABLE_LIBRARY.taxProvision,
  ],
  "liquidity-structure": [
    DELIVERABLE_LIBRARY.liquidityForecast,
    DELIVERABLE_LIBRARY.taxProvision,
    DELIVERABLE_LIBRARY.fiduciaryPortfolio,
  ],
  "balance-sheet-cleanup": [
    DELIVERABLE_LIBRARY.cashPosition,
    DELIVERABLE_LIBRARY.auditLog,
    DELIVERABLE_LIBRARY.taskPriorityBoard,
  ],
  "fiduciary-governance": [
    DELIVERABLE_LIBRARY.fiduciaryPortfolio,
    DELIVERABLE_LIBRARY.auditLog,
    DELIVERABLE_LIBRARY.quarterlyReviewPack,
  ],
  "tax-efficient-decumulation": [
    DELIVERABLE_LIBRARY.taxProvision,
    DELIVERABLE_LIBRARY.liquidityForecast,
    DELIVERABLE_LIBRARY.fiduciaryPortfolio,
  ],
  "legacy-planning-brief": [
    DELIVERABLE_LIBRARY.quarterlyReviewPack,
    DELIVERABLE_LIBRARY.meetingPrep,
    DELIVERABLE_LIBRARY.auditLog,
  ],
  "family-governance": [
    DELIVERABLE_LIBRARY.meetingPrep,
    DELIVERABLE_LIBRARY.taskPriorityBoard,
    DELIVERABLE_LIBRARY.quarterlyReviewPack,
  ],
  "quarterly-review-cadence": [
    DELIVERABLE_LIBRARY.quarterlyReviewPack,
    DELIVERABLE_LIBRARY.fiduciaryPortfolio,
    DELIVERABLE_LIBRARY.cashPosition,
  ],
  "advisor-coo-workflow": [
    DELIVERABLE_LIBRARY.taskPriorityBoard,
    DELIVERABLE_LIBRARY.meetingPrep,
    DELIVERABLE_LIBRARY.auditLog,
  ],
  "risk-adjusted-return-monitoring": [
    DELIVERABLE_LIBRARY.fiduciaryPortfolio,
    DELIVERABLE_LIBRARY.liquidityForecast,
    DELIVERABLE_LIBRARY.vendorRisk,
  ],
};

const EXPERIENCE = {
  title: "MyCOO Fiduciary Operating Demo",
  subtitle:
    "Decision-based build aligned to exit readiness, liquidity events, and legacy planning.",
  introMessage:
    "Nick, let's run the platform live. Choose a path and I will generate fiduciary-grade deliverables in real time.",
  idleAgents: [
    {
      name: "COO Orchestrator",
      status: "watching",
      statusText: "Standing by",
      model: "claude",
    },
    {
      name: "Exit Planning Agent",
      status: "ready",
      statusText: "Value acceleration context loaded",
      model: "gemini",
    },
    {
      name: "Fiduciary Analyst",
      status: "ready",
      statusText: "Portfolio standards ready",
      model: "gpt",
    },
  ],
  layers: [
    {
      id: "exit-readiness",
      title: "Layer 1: Exit Readiness Diagnostics",
      subtitle: "Baseline the readiness signals and fiduciary posture.",
      prompt:
        "Choose the diagnostic focus and the swarm will assemble the evidence.",
      introMessage:
        "We will start with the exit readiness scan and the fiduciary baseline.",
      decisions: [
        {
          id: "exit-readiness-scan",
          label: "Exit readiness scorecard",
          description:
            "Score transferable value, vendor exposure, and operational gaps.",
          pathLabel: "Exit readiness scorecard",
          duration: 3600,
          coo: {
            start: "Launching the exit readiness scan across ops, finance, and risk.",
            complete:
              "Exit readiness scorecard delivered with transferable value gaps.",
          },
          agents: [
            {
              name: "Exit Planning Agent",
              model: "claude",
              working: "Scoring exit readiness signals",
              done: "Scorecard finalized",
            },
            {
              name: "Ops Agent",
              model: "gpt",
              working: "Mapping value acceleration tasks",
              done: "Action list ready",
            },
            {
              name: "Risk Agent",
              model: "gemini",
              working: "Assessing vendor exposure",
              done: "Risk summary delivered",
            },
          ],
        },
        {
          id: "liquidity-event-timing",
          label: "Liquidity event timing",
          description:
            "Model liquidity event timing, tax drag, and cash runway.",
          pathLabel: "Liquidity event timing",
          duration: 3800,
          coo: {
            start:
              "Modeling liquidity timing and tax-efficient decumulation paths.",
            complete:
              "Liquidity forecast ready with cash timing and tax drag notes.",
          },
          agents: [
            {
              name: "Treasury Agent",
              model: "gpt",
              working: "Building cash timing curve",
              done: "Cash timing delivered",
            },
            {
              name: "Tax Agent",
              model: "claude",
              working: "Estimating tax drag",
              done: "Tax impact finalized",
            },
            {
              name: "Finance Agent",
              model: "gemini",
              working: "Stress testing proceeds",
              done: "Scenario pack ready",
            },
          ],
        },
        {
          id: "fiduciary-portfolio-audit",
          label: "Fiduciary portfolio audit",
          description:
            "Align risk-adjusted return targets with fiduciary standard.",
          pathLabel: "Fiduciary portfolio audit",
          duration: 3400,
          coo: {
            start:
              "Reviewing fiduciary portfolio positioning and audit trail.",
            complete:
              "Portfolio dashboard and audit log are ready for review.",
          },
          agents: [
            {
              name: "Investment Agent",
              model: "claude",
              working: "Reviewing risk-adjusted return",
              done: "Portfolio review complete",
            },
            {
              name: "Compliance Agent",
              model: "gpt",
              working: "Validating fiduciary standard",
              done: "Compliance notes ready",
            },
            {
              name: "COO Agent",
              model: "gemini",
              working: "Packaging deliverables",
              done: "Artifacts published",
            },
          ],
        },
      ],
    },
    {
      id: "transferable-value",
      title: "Layer 2: Transferable Value Build",
      subtitle: "Turn findings into a value acceleration plan.",
      prompt:
        "Choose the path and we will package the transferable value sprint.",
      introMessage:
        "Let's translate readiness into the transferable value roadmap.",
      decisions: [
        {
          id: "transferable-value-plan",
          label: "Transferable value roadmap",
          description:
            "Sequence the highest ROI initiatives before a liquidity event.",
          pathLabel: "Transferable value plan",
          duration: 3600,
          coo: {
            start: "Sequencing value acceleration initiatives now.",
            complete: "Roadmap and priority board ready for review.",
          },
          agents: [
            {
              name: "Strategy Agent",
              model: "claude",
              working: "Building the value roadmap",
              done: "Roadmap finalized",
            },
            {
              name: "Ops Agent",
              model: "gpt",
              working: "Sequencing execution tasks",
              done: "Task board ready",
            },
            {
              name: "Finance Agent",
              model: "gemini",
              working: "Sizing valuation uplift",
              done: "Impact summary delivered",
            },
          ],
        },
        {
          id: "vendor-community-risk",
          label: "Vendor community risk scan",
          description:
            "Audit concentration risk inside the vendor community.",
          pathLabel: "Vendor community risk",
          duration: 3200,
          coo: {
            start: "Scanning vendor community exposure and concentration.",
            complete: "Vendor risk assessment and cash impact are ready.",
          },
          agents: [
            {
              name: "Vendor Agent",
              model: "claude",
              working: "Mapping vendor concentration",
              done: "Risk map delivered",
            },
            {
              name: "Risk Agent",
              model: "gpt",
              working: "Scoring counterparty risk",
              done: "Risk scores finalized",
            },
            {
              name: "Finance Agent",
              model: "gemini",
              working: "Linking cash exposure",
              done: "Cash exposure notes ready",
            },
          ],
        },
        {
          id: "succession-alignment",
          label: "Succession alignment",
          description:
            "Prepare the succession and stakeholder alignment plan.",
          pathLabel: "Succession alignment",
          duration: 3400,
          coo: {
            start: "Aligning succession, tax, and meeting cadence.",
            complete: "Meeting prep and review pack delivered.",
          },
          agents: [
            {
              name: "Executive Assistant",
              model: "gpt",
              working: "Drafting meeting cadence",
              done: "Meeting prep complete",
            },
            {
              name: "Tax Agent",
              model: "claude",
              working: "Flagging tax items",
              done: "Tax notes ready",
            },
            {
              name: "Strategy Agent",
              model: "gemini",
              working: "Aligning stakeholders",
              done: "Alignment plan ready",
            },
          ],
        },
      ],
    },
    {
      id: "liquidity-execution",
      title: "Layer 3: Liquidity Event Execution",
      subtitle: "Build the structure and governance for the event.",
      prompt: "Choose the execution path to package deliverables.",
      introMessage:
        "Now we move into liquidity event execution and governance.",
      decisions: [
        {
          id: "liquidity-structure",
          label: "Deal structure scenarios",
          description:
            "Model structure options and after-tax proceeds.",
          pathLabel: "Liquidity structure",
          duration: 3600,
          coo: {
            start: "Modeling structure scenarios for the liquidity event.",
            complete: "Structure brief and tax workbook delivered.",
          },
          agents: [
            {
              name: "Finance Agent",
              model: "claude",
              working: "Modeling structure options",
              done: "Scenario pack ready",
            },
            {
              name: "Tax Agent",
              model: "gpt",
              working: "Estimating after-tax proceeds",
              done: "Tax model ready",
            },
            {
              name: "Investment Agent",
              model: "gemini",
              working: "Aligning reinvestment plan",
              done: "Portfolio notes ready",
            },
          ],
        },
        {
          id: "balance-sheet-cleanup",
          label: "Balance sheet cleanup",
          description:
            "Prepare working capital and audit readiness.",
          pathLabel: "Balance sheet cleanup",
          duration: 3200,
          coo: {
            start: "Cleaning up working capital and audit trail.",
            complete: "Cash position and audit log delivered.",
          },
          agents: [
            {
              name: "Treasury Agent",
              model: "gpt",
              working: "Reviewing cash posture",
              done: "Cash dashboard ready",
            },
            {
              name: "Compliance Agent",
              model: "claude",
              working: "Validating audit trail",
              done: "Audit log ready",
            },
            {
              name: "Ops Agent",
              model: "gemini",
              working: "Sequencing cleanup tasks",
              done: "Priority board updated",
            },
          ],
        },
        {
          id: "fiduciary-governance",
          label: "Fiduciary governance pack",
          description:
            "Package fiduciary notes for ongoing oversight.",
          pathLabel: "Fiduciary governance",
          duration: 3400,
          coo: {
            start: "Packaging fiduciary governance deliverables.",
            complete: "Governance pack and review materials delivered.",
          },
          agents: [
            {
              name: "Compliance Agent",
              model: "gpt",
              working: "Updating fiduciary documentation",
              done: "Compliance pack ready",
            },
            {
              name: "Board Agent",
              model: "claude",
              working: "Drafting governance notes",
              done: "Board notes ready",
            },
            {
              name: "Investment Agent",
              model: "gemini",
              working: "Reviewing portfolio posture",
              done: "Portfolio notes ready",
            },
          ],
        },
      ],
    },
    {
      id: "legacy-decumulation",
      title: "Layer 4: Legacy + Decumulation",
      subtitle: "Align legacy planning with tax-efficient drawdown.",
      prompt: "Choose the legacy focus to assemble materials.",
      introMessage:
        "Let's align legacy planning with the decumulation strategy.",
      decisions: [
        {
          id: "tax-efficient-decumulation",
          label: "Tax-efficient decumulation",
          description:
            "Sequence withdrawals for optimal after-tax outcomes.",
          pathLabel: "Tax-efficient decumulation",
          duration: 3400,
          coo: {
            start: "Sequencing the tax-efficient decumulation path.",
            complete: "Decumulation workbook delivered.",
          },
          agents: [
            {
              name: "Tax Agent",
              model: "claude",
              working: "Sequencing decumulation steps",
              done: "Workbook ready",
            },
            {
              name: "Investment Agent",
              model: "gpt",
              working: "Aligning drawdown strategy",
              done: "Portfolio alignment ready",
            },
            {
              name: "Finance Agent",
              model: "gemini",
              working: "Modeling cash flow",
              done: "Cash flow ready",
            },
          ],
        },
        {
          id: "legacy-planning-brief",
          label: "Legacy planning brief",
          description:
            "Prepare legacy planning and family objectives.",
          pathLabel: "Legacy planning",
          duration: 3200,
          coo: {
            start: "Drafting the legacy planning brief.",
            complete: "Legacy briefing pack delivered.",
          },
          agents: [
            {
              name: "Estate Agent",
              model: "claude",
              working: "Drafting legacy brief",
              done: "Legacy brief ready",
            },
            {
              name: "Executive Assistant",
              model: "gpt",
              working: "Scheduling family review",
              done: "Meeting cadence ready",
            },
            {
              name: "Compliance Agent",
              model: "gemini",
              working: "Documenting fiduciary notes",
              done: "Notes ready",
            },
          ],
        },
        {
          id: "family-governance",
          label: "Family governance cadence",
          description:
            "Set the cadence for multi-generational reviews.",
          pathLabel: "Family governance cadence",
          duration: 3200,
          coo: {
            start: "Building the family governance cadence.",
            complete: "Governance cadence delivered.",
          },
          agents: [
            {
              name: "Executive Assistant",
              model: "gpt",
              working: "Coordinating cadence",
              done: "Cadence ready",
            },
            {
              name: "Ops Agent",
              model: "claude",
              working: "Tracking action items",
              done: "Task board updated",
            },
            {
              name: "Strategy Agent",
              model: "gemini",
              working: "Defining governance workflow",
              done: "Workflow ready",
            },
          ],
        },
      ],
    },
    {
      id: "operating-cadence",
      title: "Layer 5: Client Operating Cadence",
      subtitle: "Lock the recurring COO support workflow.",
      prompt: "Pick the cadence focus and we will publish the system.",
      introMessage:
        "We will close with the ongoing cadence and monitoring.",
      decisions: [
        {
          id: "quarterly-review-cadence",
          label: "Quarterly review cadence",
          description:
            "Refresh quarterly review packs and fiduciary notes.",
          pathLabel: "Quarterly review cadence",
          duration: 3000,
          coo: {
            start: "Refreshing the quarterly review cadence.",
            complete: "Quarterly review pack delivered.",
          },
          agents: [
            {
              name: "Board Agent",
              model: "claude",
              working: "Updating review pack",
              done: "Review pack ready",
            },
            {
              name: "Investment Agent",
              model: "gpt",
              working: "Refreshing performance notes",
              done: "Performance notes ready",
            },
            {
              name: "Treasury Agent",
              model: "gemini",
              working: "Confirming cash position",
              done: "Cash position ready",
            },
          ],
        },
        {
          id: "advisor-coo-workflow",
          label: "Advisor COO workflow",
          description:
            "Run the ongoing task and meeting system for clients.",
          pathLabel: "Advisor COO workflow",
          duration: 3000,
          coo: {
            start: "Sequencing the advisor COO workflow.",
            complete: "Workflow board and meeting prep delivered.",
          },
          agents: [
            {
              name: "Executive Assistant",
              model: "claude",
              working: "Sequencing client tasks",
              done: "Task board ready",
            },
            {
              name: "Ops Agent",
              model: "gpt",
              working: "Aligning COO workflow",
              done: "Workflow aligned",
            },
            {
              name: "Compliance Agent",
              model: "gemini",
              working: "Logging approvals",
              done: "Audit log updated",
            },
          ],
        },
        {
          id: "risk-adjusted-return-monitoring",
          label: "Risk-adjusted return monitoring",
          description:
            "Monitor risk-adjusted return and liquidity buffers.",
          pathLabel: "Risk-adjusted monitoring",
          duration: 3000,
          coo: {
            start: "Monitoring risk-adjusted return posture.",
            complete: "Monitoring dashboards delivered.",
          },
          agents: [
            {
              name: "Investment Agent",
              model: "claude",
              working: "Monitoring return bands",
              done: "Return monitoring ready",
            },
            {
              name: "Finance Agent",
              model: "gpt",
              working: "Checking liquidity buffers",
              done: "Liquidity notes ready",
            },
            {
              name: "Risk Agent",
              model: "gemini",
              working: "Reviewing vendor concentration",
              done: "Risk notes ready",
            },
          ],
        },
      ],
    },
  ],
};
