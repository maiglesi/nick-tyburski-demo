/*
 * MyCOO Demo Application Logic
 */

const CANVAS_PADDING = 24;
const CANVAS_GAP = 24;
const CANVAS_ROW_HEIGHT = 340;
const CANVAS_TWO_COLUMN_MIN_WIDTH = 980;
const CANVAS_MIN_COLUMN_WIDTH = 320;
const CANVAS_DOCK_HEIGHT = 220;
const CANVAS_DOCK_OFFSET = 24;
const DEFAULT_WINDOW_SIZE = { width: 420, height: 260 };

const App = {
  currentSlideIndex: 0,
  mode: "slides",
  chatQueue: [],
  isTyping: false,
  experienceState: {
    currentLayerIndex: 0,
    path: [],
    isRunning: false,
    activeDecisionId: null,
  },
  experienceTimers: [],

  init: () => {
    // 0. Setup Welcome Screen
    const investorNameEl = document.getElementById("welcome-investor-name");
    if (investorNameEl) {
        // Use INVESTOR_NAME from data.js if available, else default
        const name = (typeof INVESTOR_NAME !== 'undefined') ? INVESTOR_NAME : "Partner";
        investorNameEl.textContent = name;
    }

    const welcomeBtn = document.getElementById("welcome-start-btn");
    if (welcomeBtn) {
        welcomeBtn.addEventListener("click", () => {
            const overlay = document.getElementById("welcome-overlay");
            overlay.classList.add("hidden");
            // Allow keyboard nav only after start
            document.addEventListener("keydown", App.handleKeydown);
        });
    } else {
        // If no welcome screen (fallback), enable nav immediately
        document.addEventListener("keydown", App.handleKeydown);
    }

    App.renderSlide(0);
    
    // Voice Orb interaction
    const orb = document.getElementById("voice-orb");
    if (orb) {
      orb.addEventListener("click", () => {
        orb.classList.toggle("speaking");
        // Simulate listening state if needed
      });
    }
  },

  handleKeydown: (e) => {
    if (App.mode === "experience") {
      if (e.key === "Escape") {
        App.closeViewer();
      }
      return;
    }
    if (e.key === "ArrowRight" || e.key === " ") {
      App.nextSlide();
    } else if (e.key === "ArrowLeft") {
      App.prevSlide();
    } else if (e.key === "Escape") {
      App.closeViewer();
    }
  },

  nextSlide: () => {
    if (App.currentSlideIndex < SLIDES.length - 1) {
      App.renderSlide(App.currentSlideIndex + 1);
    } else if (typeof EXPERIENCE !== "undefined") {
      App.startExperience();
    }
  },

  prevSlide: () => {
    if (App.currentSlideIndex > 0) {
      App.renderSlide(App.currentSlideIndex - 1);
    }
  },

  renderSlide: (index) => {
    App.mode = "slides";
    App.clearExperienceTimers();
    document.body.classList.remove("experience-active");
    App.currentSlideIndex = index;
    const slide = SLIDES[index];
    const container = document.getElementById("canvas-stage");

    // 1. Render Content
    if (slide.type === "interactive" && Components[slide.component]) {
      container.innerHTML = `
                <div class="slide-card interactive">
                    ${Components[slide.component]()}
                </div>
            `;
    } else {
      container.innerHTML = `
                <div class="slide-card">
                    ${slide.content}
                </div>
            `;
    }

    // 2. Update Agents
    App.updateAgents(slide.agents);

    // 3. Queue COO Message
    if (slide.cooMessage) {
      App.queueMessage(slide.cooMessage);
    }
  },

  updateAgents: (agents) => {
    const list = document.getElementById("agent-list");
    const count = document.getElementById("agent-count");

    count.textContent = `(${agents ? agents.length : 0} Agents)`;
    list.innerHTML = ""; // Clear current

    if (!agents) return;

    agents.forEach((agent) => {
      const el = document.createElement("div");
      el.className = `agent-card ${agent.status === "working" ? "working" : ""}`;
      el.innerHTML = `
                <div class="agent-header">
                    <span class="text-sm font-medium">${agent.name}</span>
                    <span class="status-badge status-${agent.status}">${agent.status}</span>
                </div>
                <div class="agent-body">
                    <div class="text-xs text-secondary">${agent.statusText}</div>
                    ${
                      agent.status === "working" && agent.progress
                        ? `
                        <div class="progress-line">
                            <div class="progress-fill animate-progress" style="width: ${agent.progress}%"></div>
                        </div>
                    `
                        : ""
                    }
                    <span class="model-badge bg-${agent.model}">${agent.model.toUpperCase()}</span>
                </div>
            `;
      list.appendChild(el);
    });
  },

  queueMessage: (text, append = false) => {
    if (!text) return;
    if (append) {
      App.chatQueue.push(text);
    } else {
      // Clear previous queue if user skipped ahead fast
      App.chatQueue = [text];
    }
    if (!App.isTyping) {
      App.processChatQueue();
    }
  },

  processChatQueue: async () => {
    if (App.chatQueue.length === 0) {
      App.isTyping = false;
      return;
    }

    App.isTyping = true;
    const text = App.chatQueue.shift();

    // Create bubble structure
    const container = document.getElementById("chat-container");
    const wrapper = document.createElement("div");
    wrapper.className = "chat-msg";
    wrapper.innerHTML = `
            <span class="label">COO <span class="opacity-50">Now</span></span>
            <div class="msg-bubble coo"></div>
        `;
    container.appendChild(wrapper);
    container.scrollTop = container.scrollHeight;

    const bubble = wrapper.querySelector(".msg-bubble");

    // Typewriter effect
    await App.typeText(bubble, text);

    App.processChatQueue();
  },

  typeText: (element, text) => {
    return new Promise((resolve) => {
      let i = 0;
      element.classList.add("typing-cursor");

      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          const container = document.getElementById("chat-container");
          container.scrollTop = container.scrollHeight;
          setTimeout(type, 15); // Typing speed
        } else {
          element.classList.remove("typing-cursor");
          resolve();
        }
      }
      type();
    });
  },

  addUserMessage: (text) => {
    if (!text) return;
    const container = document.getElementById("chat-container");
    const wrapper = document.createElement("div");
    wrapper.className = "chat-msg";
    wrapper.innerHTML = `
            <span class="label">DIRECTOR <span class="opacity-50">Now</span></span>
            <div class="msg-bubble user">${text}</div>
        `;
    container.appendChild(wrapper);
    container.scrollTop = container.scrollHeight;
  },

  clearExperienceTimers: () => {
    App.experienceTimers.forEach((timer) => clearTimeout(timer));
    App.experienceTimers = [];
  },

  setExperienceTimer: (fn, delay) => {
    const timer = setTimeout(fn, delay);
    App.experienceTimers.push(timer);
    return timer;
  },

  startExperience: () => {
    if (typeof EXPERIENCE === "undefined") return;
    App.mode = "experience";
    App.experienceState = {
      currentLayerIndex: 0,
      path: [],
      isRunning: false,
      activeDecisionId: null,
      windows: [],
      activity: [],
      focusedWindowId: null,
      zIndexCounter: 1,
      gridIndexCounter: 0,
      cursors: [
        { id: "cursor-design", label: "Design Agent", color: "#3B82F6" },
        { id: "cursor-research", label: "Research Agent", color: "#14B8A6" },
        { id: "cursor-finance", label: "Finance Agent", color: "#F59E0B" },
        { id: "cursor-ops", label: "Ops Agent", color: "#1E3A5F" },
      ],
      cursorPositions: {},
    };
    document.body.classList.add("experience-active");
    App.renderExperienceLayer(0);
    if (EXPERIENCE.introMessage) {
      App.queueMessage(EXPERIENCE.introMessage, true);
    }
  },

  renderExperienceLayer: (index) => {
    const layer = EXPERIENCE.layers[index];
    if (!layer) return;

    App.mode = "experience";
    App.clearExperienceTimers();
    App.experienceState.currentLayerIndex = index;
    App.experienceState.activeDecisionId = null;
    App.experienceState.isRunning = false;
    document.body.classList.add("experience-active");

    const stage = document.getElementById("canvas-stage");
    stage.innerHTML = `
            <div class="experience-stage">
                <div class="experience-header">
                    <div>
                        <span class="label">LIVE EXPERIENCE</span>
                        <div class="experience-title">${EXPERIENCE.title}</div>
                        <div class="experience-subtitle">${EXPERIENCE.subtitle}</div>
                    </div>
                    <div class="experience-meta">
                        <div class="meta-pill">Layer ${index + 1} of ${EXPERIENCE.layers.length}</div>
                        <div class="meta-pill">${INVESTOR_PROFILE.name} | ${INVESTOR_PROFILE.firm}</div>
                    </div>
                </div>

                <div class="layer-panel">
                    <div class="layer-title">${layer.title}</div>
                    <div class="layer-subtitle">${layer.subtitle}</div>
                    <div class="layer-prompt">${layer.prompt}</div>
                </div>

                <div class="experience-path" id="experience-path"></div>

                <div class="experience-workspace">
                    <div class="experience-canvas" id="experience-canvas">
                        <div class="canvas-content" id="canvas-content"></div>
                        <div class="decision-dock" id="decision-dock">
                            <div class="decision-header">
                                <div class="decision-title">Decision ${index + 1} of ${EXPERIENCE.layers.length}</div>
                                <div class="decision-status" id="decision-status">Awaiting your decision.</div>
                            </div>
                            <div class="decision-options" id="decision-options"></div>
                            <div class="decision-actions" id="decision-actions"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    App.renderDecisionOptions(layer);
    App.renderExperiencePath();
    App.renderCanvasWindows();
    App.renderActivityLog();

    const idleAgents = layer.idleAgents || EXPERIENCE.idleAgents || [];
    App.updateAgents(idleAgents);

    if (layer.introMessage) {
      App.queueMessage(layer.introMessage, true);
    }
  },

  renderExperiencePath: () => {
    const pathEl = document.getElementById("experience-path");
    if (!pathEl) return;

    if (App.experienceState.path.length === 0) {
      pathEl.innerHTML = `<div class="path-empty">Path will appear here as you make decisions.</div>`;
      return;
    }

    pathEl.innerHTML = App.experienceState.path
      .map(
        (item, index) =>
          `<div class="path-chip">${index + 1}. ${item}</div>`
      )
      .join("");
  },

  renderDirectorBar: () => {
    return `
            <div class="director-bar-wrapper">
                <div class="director-input">
                    <input type="text" class="input-field" placeholder="Ask MyCOO to run a sprint..." aria-label="Director input" />
                    <div class="input-actions">
                        <span class="action-icon">+</span>
                        <span class="action-icon">MIC</span>
                    </div>
                </div>
            </div>
        `;
  },

  renderDecisionOptions: (layer) => {
    const optionsEl = document.getElementById("decision-options");
    if (!optionsEl) return;

    optionsEl.innerHTML = layer.decisions
      .map(
        (decision) => `
            <button class="decision-option" data-layer="${App.experienceState.currentLayerIndex}" data-decision="${decision.id}">
                <div class="decision-label">${decision.label}</div>
                <div class="decision-desc">${decision.description}</div>
            </button>
        `
      )
      .join("");

    optionsEl
      .querySelectorAll(".decision-option")
      .forEach((button) =>
        button.addEventListener("click", App.handleDecisionClick)
      );
  },

  handleDecisionClick: (event) => {
    const button = event.currentTarget;
    const layerIndex = Number(button.dataset.layer);
    const decisionId = button.dataset.decision;
    App.runDecision(layerIndex, decisionId);
  },

  runDecision: (layerIndex, decisionId) => {
    if (App.experienceState.isRunning) return;
    const layer = EXPERIENCE.layers[layerIndex];
    const decision = layer.decisions.find((item) => item.id === decisionId);
    if (!decision) return;

    App.experienceState.isRunning = true;
    App.experienceState.activeDecisionId = decisionId;
    App.experienceState.path.push(decision.pathLabel || decision.label);
    App.renderExperiencePath();
    App.setDecisionState(decisionId);
    App.updateDecisionStatus("Agents working...");
    App.addUserMessage(`Run: ${decision.label}`);

    if (decision.coo && decision.coo.start) {
      App.queueMessage(decision.coo.start, true);
    }

    const duration = decision.duration || 3200;
    const deliverables = App.getDecisionDeliverables(decision);
    const activity = App.getDecisionActivity(decision);

    App.appendActivity(activity, decisionId);
    App.runActivitySequence(activity, decisionId, duration);
    App.spawnDeliverables(deliverables, duration);
    App.runAgentSequence(decision);
    App.animateCursors(deliverables, duration);

    App.setExperienceTimer(() => {
      App.updateDecisionStatus("Deliverables ready.");
      App.showDecisionActions();
      App.experienceState.isRunning = false;
      if (decision.coo && decision.coo.complete) {
        App.queueMessage(decision.coo.complete, true);
      }
    }, duration);
  },

  getDecisionDeliverables: (decision) => {
    if (decision.deliverables && decision.deliverables.length) {
      return decision.deliverables;
    }
    if (typeof EXPERIENCE_DELIVERABLES !== "undefined") {
      return EXPERIENCE_DELIVERABLES[decision.id] || [];
    }
    return [];
  },

  getDecisionActivity: (decision) => {
    if (decision.activity && decision.activity.length) {
      return decision.activity;
    }
    if (typeof EXPERIENCE_ACTIVITY !== "undefined") {
      return EXPERIENCE_ACTIVITY[decision.id] || EXPERIENCE_DEFAULT_ACTIVITY;
    }
    return EXPERIENCE_DEFAULT_ACTIVITY;
  },

  getCanvasLayout: (count) => {
    const canvas = document.getElementById("experience-canvas");
    const width = canvas ? canvas.clientWidth : 0;
    const safeWidth = width > 0 ? width : 960;
    const columns =
      safeWidth >= CANVAS_TWO_COLUMN_MIN_WIDTH ? 2 : 1;
    const usableWidth = safeWidth - CANVAS_PADDING * 2;
    const columnWidth = Math.max(
      CANVAS_MIN_COLUMN_WIDTH,
      Math.floor(
        (usableWidth - CANVAS_GAP * (columns - 1)) / columns
      )
    );
    const totalColumnsWidth =
      columnWidth * columns + CANVAS_GAP * (columns - 1);
    const offsetX =
      CANVAS_PADDING +
      Math.max(0, Math.floor((usableWidth - totalColumnsWidth) / 2));
    const rowHeight = CANVAS_ROW_HEIGHT;
    const positions = Array.from({ length: count }, (_, index) => ({
      x: offsetX + (index % columns) * (columnWidth + CANVAS_GAP),
      y:
        CANVAS_PADDING +
        Math.floor(index / columns) * (rowHeight + CANVAS_GAP),
    }));
    const rows = Math.max(1, Math.ceil(count / columns));
    const minHeight =
      CANVAS_PADDING * 2 + rows * rowHeight + (rows - 1) * CANVAS_GAP;
    const dockSpace = CANVAS_DOCK_HEIGHT + CANVAS_DOCK_OFFSET;

    return { positions, columnWidth, rowHeight, minHeight: minHeight + dockSpace };
  },

  fitWindowSize: (size, layout) => {
    return {
      width: layout.columnWidth,
      height: layout.rowHeight,
    };
  },

  spawnDeliverables: (deliverables, duration) => {
    if (!deliverables.length) return;
    const newWindows = [];
    const layout = App.getCanvasLayout(deliverables.length);

    deliverables.forEach((deliverable, index) => {
      const existing = App.experienceState.windows.find(
        (window) => window.id === deliverable.id
      );
      if (existing) {
        existing.zIndex = ++App.experienceState.zIndexCounter;
        return;
      }

      const baseSize = deliverable.size || DEFAULT_WINDOW_SIZE;
      const size = App.fitWindowSize(baseSize, layout);
      const position = layout.positions[index] || {
        x: CANVAS_PADDING,
        y: CANVAS_PADDING,
      };
      const windowObj = {
        ...deliverable,
        status: "generating",
        baseSize,
        position,
        size,
        zIndex: ++App.experienceState.zIndexCounter,
        gridIndex: App.experienceState.gridIndexCounter++,
      };
      newWindows.push(windowObj);
    });

    if (newWindows.length) {
      App.experienceState.windows = [
        ...App.experienceState.windows,
        ...newWindows,
      ];
      App.focusWindow(newWindows[0].id);
      App.renderCanvasWindows();
    }

    newWindows.forEach((windowObj, index) => {
      const revealDelay = Math.min(duration * 0.8, 900 + index * 600);
      App.setExperienceTimer(() => {
        windowObj.status = "ready";
        App.renderCanvasWindows();
      }, revealDelay);
    });
  },

  renderCanvasWindows: () => {
    const canvas = document.getElementById("canvas-content");
    const canvasFrame = document.getElementById("experience-canvas");
    if (!canvas || !canvasFrame) return;

    const windows = App.experienceState.windows;
    if (!windows.length) {
      canvasFrame.style.minHeight = `${CANVAS_DOCK_HEIGHT + 520}px`;
      canvas.innerHTML = `
                <div class="canvas-empty">
                    Choose a decision to generate deliverables.
                </div>
            `;
      return;
    }

    const orderedWindows = [...windows].sort((a, b) => {
      const aIndex = Number.isFinite(a.gridIndex) ? a.gridIndex : 0;
      const bIndex = Number.isFinite(b.gridIndex) ? b.gridIndex : 0;
      return aIndex - bIndex;
    });
    const layout = App.getCanvasLayout(orderedWindows.length);
    canvasFrame.style.minHeight = `${layout.minHeight}px`;
    orderedWindows.forEach((windowObj, index) => {
      const baseSize =
        windowObj.baseSize || windowObj.size || DEFAULT_WINDOW_SIZE;
      windowObj.size = App.fitWindowSize(baseSize, layout);
      const basePosition = layout.positions[index] || windowObj.position || {
        x: CANVAS_PADDING,
        y: CANVAS_PADDING,
      };
      const xOffset = Math.max(
        0,
        Math.floor((layout.columnWidth - windowObj.size.width) / 2)
      );
      windowObj.position = {
        x: basePosition.x + xOffset,
        y: basePosition.y,
      };
    });

    const windowsMarkup = orderedWindows
      .map((windowObj) => {
        const isFocused = windowObj.id === App.experienceState.focusedWindowId;
        const badgeText =
          windowObj.status === "ready" ? windowObj.badge : "GENERATING";
        const previewHtml = App.renderWindowPreview(windowObj);
        return `
                <div class="canvas-window ${isFocused ? "focused" : ""} ${windowObj.status}" data-window-id="${windowObj.id}" data-window-status="${windowObj.status}"
                    style="left:${windowObj.position.x}px; top:${windowObj.position.y}px; width:${windowObj.size.width}px; height:${windowObj.size.height}px; z-index:${windowObj.zIndex};">
                    <div class="window-header">
                        <div class="window-title">
                            <span class="window-icon">${Icons.layout}</span>
                            <span>${windowObj.title}</span>
                        </div>
                        <span class="window-badge">${badgeText}</span>
                    </div>
                    <div class="window-body">
                        ${previewHtml}
                        <div class="window-description">${windowObj.description}</div>
                        <button class="window-open" data-open-url="${windowObj.url}" data-open-title="${windowObj.title}" data-open-mode="${windowObj.mode}">
                            Open Deliverable
                        </button>
                    </div>
                </div>
            `;
      })
      .join("");

    const cursorMarkup = App.renderCursorMarkup();
    canvas.innerHTML = `
            ${windowsMarkup}
            ${cursorMarkup}
        `;

    canvas.querySelectorAll(".canvas-window").forEach((windowEl) => {
      windowEl.addEventListener("click", () =>
        App.focusWindow(windowEl.dataset.windowId)
      );
    });

    canvas.querySelectorAll(".window-open").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const url = button.dataset.openUrl;
        const title = button.dataset.openTitle;
        const mode = button.dataset.openMode || "doc";
        App.openViewer(url, title, mode);
      });
    });
  },

  renderWindowPreview: (windowObj) => {
    if (windowObj.status !== "ready") {
      return `
                <div class="window-preview loading">
                    <div class="skeleton-line"></div>
                    <div class="skeleton-line wide"></div>
                    <div class="skeleton-line short"></div>
                </div>
            `;
    }

    if (windowObj.previewType === "iframe") {
      return `
                <div class="window-preview">
                    <iframe src="${windowObj.url}" title="${windowObj.title}" class="window-frame"></iframe>
                </div>
            `;
    }

    return `
            <div class="window-preview placeholder">
                Preview available on open.
            </div>
        `;
  },

  renderCursorMarkup: () => {
    if (!App.experienceState.cursors) return "";
    return App.experienceState.cursors
      .map((cursor) => {
        const position =
          App.experienceState.cursorPositions[cursor.id] || { x: 24, y: 24 };
        return `
                <div class="agent-cursor" style="left:${position.x}px; top:${position.y}px; color:${cursor.color};">
                    <div class="cursor-arrow"></div>
                    <div class="cursor-label">${cursor.label}</div>
                </div>
            `;
      })
      .join("");
  },

  focusWindow: (windowId) => {
    const target = App.experienceState.windows.find(
      (windowObj) => windowObj.id === windowId
    );
    if (!target) return;
    target.zIndex = ++App.experienceState.zIndexCounter;
    App.experienceState.focusedWindowId = windowId;
    App.renderCanvasWindows();
  },

  renderWindowsRail: () => {
    const rail = document.getElementById("experience-windows");
    if (!rail) return;
    const windows = App.experienceState.windows;

    rail.innerHTML = `
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Open Windows</span>
                    <span class="artifact-badge">${windows.length}</span>
                </div>
            </div>
            <div class="artifact-body">
                ${
                  windows.length
                    ? windows
                        .map(
                          (windowObj) => `
                        <div class="window-rail-item ${windowObj.id === App.experienceState.focusedWindowId ? "focused" : ""}" data-window-id="${windowObj.id}">
                            <span class="rail-status ${windowObj.status}"></span>
                            <div>
                                <div class="rail-title">${windowObj.title}</div>
                                <div class="rail-subtitle">${windowObj.status === "ready" ? "Ready" : "Generating"}</div>
                            </div>
                        </div>
                    `
                        )
                        .join("")
                    : `<div class="artifact-placeholder-text">No windows yet.</div>`
                }
            </div>
        `;

    rail.querySelectorAll(".window-rail-item").forEach((item) => {
      item.addEventListener("click", () =>
        App.focusWindow(item.dataset.windowId)
      );
    });
  },

  appendActivity: (activity, decisionId) => {
    const timestamp = Date.now();
    const items = activity.map((task, index) => ({
      id: `${decisionId}-${timestamp}-${index}`,
      ...task,
      status: "queued",
    }));

    App.experienceState.activity = [
      ...App.experienceState.activity,
      ...items,
    ].slice(-8);
    App.renderActivityLog();
  },

  updateActivityStatus: (activityId, status) => {
    const item = App.experienceState.activity.find(
      (entry) => entry.id === activityId
    );
    if (item) {
      item.status = status;
      App.renderActivityLog();
    }
  },

  renderActivityLog: () => {
    const activityEl = document.getElementById("rail-activity");
    if (!activityEl) return;
    const entries = App.experienceState.activity;

    activityEl.innerHTML = `
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Live Activity</span>
                    <span class="artifact-badge">${entries.length ? "LIVE" : "IDLE"}</span>
                </div>
            </div>
            <div class="artifact-body">
                ${
                  entries.length
                    ? entries
                        .map(
                          (entry) => `
                        <div class="activity-item ${entry.status}">
                            <span class="activity-dot"></span>
                            <div>
                                <div class="activity-title">${entry.agent}</div>
                                <div class="activity-text">${entry.text}</div>
                            </div>
                        </div>
                    `
                        )
                        .join("")
                    : `<div class="artifact-placeholder-text">Awaiting instructions.</div>`
                }
            </div>
        `;
  },

  runActivitySequence: (activity, decisionId, duration) => {
    const timestamp = App.experienceState.activity
      .filter((entry) => entry.id.startsWith(decisionId))
      .map((entry) => entry.id);
    if (!timestamp.length) return;

    const stepDelay = Math.max(500, Math.floor(duration / timestamp.length));
    timestamp.forEach((entryId, index) => {
      App.setExperienceTimer(() => {
        App.updateActivityStatus(entryId, "working");
      }, index * stepDelay);
      App.setExperienceTimer(() => {
        App.updateActivityStatus(entryId, "done");
      }, index * stepDelay + stepDelay * 0.8);
    });
  },

  animateCursors: (deliverables, duration) => {
    if (!deliverables.length) return;
    const cursorIds = App.experienceState.cursors.map((cursor) => cursor.id);
    const stepDelay = Math.max(500, Math.floor(duration / deliverables.length));
    const layout = App.getCanvasLayout(deliverables.length);

    deliverables.forEach((deliverable, index) => {
      const base = layout.positions[index] || {
        x: CANVAS_PADDING,
        y: CANVAS_PADDING,
      };
      const baseSize = deliverable.size || DEFAULT_WINDOW_SIZE;
      const size = App.fitWindowSize(baseSize, layout);
      const xOffset = Math.max(
        0,
        Math.floor((layout.columnWidth - size.width) / 2)
      );
      const pos = { x: base.x + xOffset + 30, y: base.y + 40 };
      const cursorId = cursorIds[index % cursorIds.length];
      App.setExperienceTimer(() => {
        App.experienceState.cursorPositions[cursorId] = pos;
        App.renderCanvasWindows();
      }, index * stepDelay);
    });
  },

  setDecisionState: (decisionId) => {
    const buttons = document.querySelectorAll(".decision-option");
    buttons.forEach((button) => {
      const isSelected = button.dataset.decision === decisionId;
      button.classList.toggle("selected", isSelected);
      button.classList.toggle("disabled", !isSelected);
      button.disabled = !isSelected;
    });
  },

  updateDecisionStatus: (text) => {
    const statusEl = document.getElementById("decision-status");
    if (statusEl) {
      statusEl.textContent = text;
    }
  },

  runAgentSequence: (decision) => {
    const agents = decision.agents || [];
    const duration = decision.duration || 3200;
    const phases = [
      { delay: 0, progress: 20, status: "working", key: "working" },
      { delay: Math.floor(duration * 0.45), progress: 60, status: "working", key: "working" },
      { delay: Math.floor(duration * 0.9), progress: 100, status: "done", key: "done" },
    ];

    phases.forEach((phase) => {
      App.setExperienceTimer(() => {
        App.updateAgents(
          agents.map((agent) => ({
            name: agent.name,
            status: phase.status,
            statusText: agent[phase.key],
            model: agent.model,
            progress: phase.progress,
          }))
        );
      }, phase.delay);
    });
  },

  showDecisionActions: () => {
    const actionsEl = document.getElementById("decision-actions");
    if (!actionsEl) return;

    const nextIndex = App.experienceState.currentLayerIndex + 1;
    const isLast = nextIndex >= EXPERIENCE.layers.length;
    if (isLast) {
      actionsEl.innerHTML = `
                <button class="decision-cta" data-action="restart">Restart Experience</button>
            `;
    } else {
      actionsEl.innerHTML = `
                <button class="decision-cta" data-action="next">Continue to ${EXPERIENCE.layers[nextIndex].title}</button>
            `;
    }

    actionsEl
      .querySelectorAll("button")
      .forEach((button) =>
        button.addEventListener("click", App.handleDecisionAction)
      );
  },

  handleDecisionAction: (event) => {
    const action = event.currentTarget.dataset.action;
    if (action === "next") {
      App.advanceLayer();
    } else if (action === "restart") {
      App.restartExperience();
    }
  },

  advanceLayer: () => {
    const nextIndex = App.experienceState.currentLayerIndex + 1;
    if (nextIndex < EXPERIENCE.layers.length) {
      App.renderExperienceLayer(nextIndex);
    } else {
      App.restartExperience();
    }
  },

  restartExperience: () => {
    App.experienceState.path = [];
    App.experienceState.windows = [];
    App.experienceState.activity = [];
    App.experienceState.focusedWindowId = null;
    App.experienceState.zIndexCounter = 1;
    App.renderExperienceLayer(0);
  },

  /* --- Viewer Overlay Logic --- */
  openViewer: (url, title, mode = "web") => {
    const overlay = document.getElementById("viewer-overlay");
    const windowEl = overlay.querySelector(".viewer-window");
    const frame = document.getElementById("viewer-frame");
    const titleEl = document.getElementById("viewer-title");
    const linkEl = document.getElementById("viewer-link");

    // Reset modes
    windowEl.classList.remove("mode-web", "mode-doc", "mode-deck", "mode-full");
    
    // Apply mode
    const normalizedMode = mode.startsWith("mode-") ? mode.replace("mode-", "") : mode;
    windowEl.classList.add(`mode-${normalizedMode}`);

    frame.src = url;
    titleEl.textContent = title;
    linkEl.href = url;

    overlay.classList.add("active");
  },

  closeViewer: () => {
    const overlay = document.getElementById("viewer-overlay");
    const frame = document.getElementById("viewer-frame");

    overlay.classList.remove("active");
    setTimeout(() => {
      frame.src = ""; // Clear source to stop media
    }, 300);
  },
};

// Start
document.addEventListener("DOMContentLoaded", App.init);
