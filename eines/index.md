---
layout: default
title: "Caixa d'Eines Web · Utilitats per a Desenvolupadors | Pepe Cuenca"
full_width: true
---

<style>
/* ========================================================
   CAIXA D'EINES WEB - STYLES INTEGRATS
   ======================================================== */
.devtoys-root {
  display: flex;
  min-height: calc(100vh - 120px);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  font-family: var(--md-text-font);
  color: var(--text-color);
}

/* SIDEBAR */
.devtoys-sidebar {
  width: 300px;
  flex-shrink: 0;
  background: rgba(15, 23, 42, 0.04);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
}
[data-theme="dark"] .devtoys-sidebar,
[data-theme="oled"] .devtoys-sidebar {
  background: rgba(15, 23, 42, 0.45);
}

.devtoys-sidebar-header {
  padding: 18px 16px 14px 16px;
  border-bottom: 1px solid var(--border);
}

.devtoys-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.devtoys-brand-icon {
  font-size: 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.devtoys-brand-title {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-color);
  line-height: 1.1;
}

.devtoys-brand-sub {
  font-size: 0.72rem;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.devtoys-search-wrap {
  position: relative;
}

.devtoys-search-input {
  width: 100%;
  padding: 8px 12px 8px 34px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.85rem;
  color: var(--text-color);
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.devtoys-search-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.devtoys-search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.85rem;
  color: var(--text-muted);
  pointer-events: none;
}

.devtoys-nav-list {
  padding: 12px 8px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.devtoys-nav-category {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 12px 10px 4px 10px;
}

.devtoys-nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--text-color);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.devtoys-nav-item:hover {
  background: rgba(59, 130, 246, 0.08);
  color: #2563eb;
}
[data-theme="dark"] .devtoys-nav-item:hover,
[data-theme="oled"] .devtoys-nav-item:hover {
  color: #60a5fa;
  background: rgba(59, 130, 246, 0.18);
}

.devtoys-nav-item.active {
  background: #2563eb;
  color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.devtoys-nav-icon {
  font-size: 1.05rem;
  width: 20px;
  text-align: center;
}

/* MAIN CONTENT */
.devtoys-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
}

.devtoys-topbar {
  padding: 16px 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.devtoys-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  font-weight: 600;
}

.devtoys-breadcrumb-link {
  color: var(--text-muted);
  text-decoration: none;
  cursor: pointer;
}
.devtoys-breadcrumb-link:hover {
  color: #2563eb;
}

.devtoys-breadcrumb-current {
  color: var(--text-color);
  font-weight: 700;
}

.devtoys-top-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.devtoys-pill-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.74rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.25);
}
[data-theme="dark"] .devtoys-pill-tag,
[data-theme="oled"] .devtoys-pill-tag {
  color: #34d399;
}

.devtoys-content-body {
  padding: 24px;
  flex: 1;
  overflow-y: auto;
}

/* HOME GRID VIEW */
.devtoys-hero-head {
  margin-bottom: 24px;
}
.devtoys-hero-title {
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 6px 0;
}
.devtoys-hero-subtitle {
  font-size: 0.96rem;
  color: var(--text-muted);
  margin: 0;
}

.devtoys-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 18px;
}

.devtoys-tool-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px;
  display: flex;
  gap: 16px;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.devtoys-tool-card:hover {
  transform: translateY(-3px);
  border-color: #3b82f6;
  box-shadow: 0 10px 28px rgba(59, 130, 246, 0.16);
}

.devtoys-tool-icon-box {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.18);
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.45rem;
  flex-shrink: 0;
  transition: all 0.2s ease;
}
[data-theme="dark"] .devtoys-tool-icon-box,
[data-theme="oled"] .devtoys-tool-icon-box {
  background: rgba(59, 130, 246, 0.16);
  border-color: rgba(59, 130, 246, 0.3);
  color: #60a5fa;
}
.devtoys-tool-card:hover .devtoys-tool-icon-box {
  background: #2563eb;
  border-color: #2563eb;
  color: #ffffff;
  transform: scale(1.04);
}

.devtoys-tool-card-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.devtoys-card-top-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
}

.devtoys-tool-card-title {
  font-size: 1.02rem;
  font-weight: 750;
  line-height: 1.32;
  margin: 0;
  color: var(--text-color);
  flex: 1;
}

.devtoys-card-action {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background: rgba(125, 125, 125, 0.08);
  border: 1px solid var(--border);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}
.devtoys-tool-card:hover .devtoys-card-action {
  background: #2563eb;
  border-color: #2563eb;
  color: #ffffff;
  transform: translate(2px, -2px);
}

.devtoys-tool-card-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.45;
  margin: 0 0 12px 0;
  flex: 1;
}

.devtoys-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid rgba(125, 125, 125, 0.1);
  margin-top: auto;
}

.devtoys-card-cat-badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 3px 8px;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  color: #2563eb;
  border: 1px solid rgba(59, 130, 246, 0.2);
}
[data-theme="dark"] .devtoys-card-cat-badge,
[data-theme="oled"] .devtoys-card-cat-badge {
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  border-color: rgba(59, 130, 246, 0.3);
}

.devtoys-card-status-dot {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.7rem;
  color: var(--text-muted);
  font-weight: 600;
}
.devtoys-card-status-dot::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
}

/* ACTIVE TOOL VIEW LAYOUT */
.devtoys-tool-view {
  display: none;
}
.devtoys-tool-view.active {
  display: block;
  animation: dtFadeIn 0.2s ease-out;
}

@keyframes dtFadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.devtoys-tool-header {
  margin-bottom: 20px;
}

.devtoys-tool-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}

.devtoys-tool-title {
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0;
}

.devtoys-tool-desc {
  font-size: 0.92rem;
  color: var(--text-muted);
  margin: 0;
}

/* DUAL PANE EDITOR */
.devtoys-pane-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
@media (max-width: 992px) {
  .devtoys-pane-grid {
    grid-template-columns: 1fr;
  }
}

.devtoys-pane {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03);
}

.devtoys-pane-header {
  padding: 10px 14px;
  background: rgba(15, 23, 42, 0.03);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}
[data-theme="dark"] .devtoys-pane-header,
[data-theme="oled"] .devtoys-pane-header {
  background: rgba(15, 23, 42, 0.4);
}

.devtoys-pane-title {
  font-size: 0.84rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 6px;
}

.devtoys-btn-group {
  display: flex;
  align-items: center;
  gap: 6px;
}

.devtoys-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-color);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.15s ease;
}

.devtoys-btn:hover {
  background: rgba(59, 130, 246, 0.08);
  border-color: #3b82f6;
  color: #2563eb;
}
[data-theme="dark"] .devtoys-btn:hover,
[data-theme="oled"] .devtoys-btn:hover {
  color: #60a5fa;
}

.devtoys-btn-primary {
  background: #2563eb;
  border-color: #2563eb;
  color: #fff !important;
}
.devtoys-btn-primary:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

.devtoys-select {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-color);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  outline: none;
}

.devtoys-editor-wrap {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.devtoys-textarea {
  width: 100%;
  min-height: 380px;
  flex: 1;
  padding: 14px;
  border: none;
  outline: none;
  background: rgba(15, 23, 42, 0.02);
  color: var(--text-color);
  font-family: var(--md-code-font);
  font-size: 0.88rem;
  line-height: 1.5;
  resize: vertical;
  box-sizing: border-box;
  tab-size: 2;
}
[data-theme="dark"] .devtoys-textarea,
[data-theme="oled"] .devtoys-textarea {
  background: rgba(15, 23, 42, 0.55);
}

.devtoys-pane-footer {
  padding: 8px 14px;
  background: rgba(15, 23, 42, 0.02);
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-muted);
  font-family: var(--md-code-font);
}

/* ERROR / ALERT BOX */
.devtoys-alert {
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.84rem;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 10px 14px;
  line-height: 1.45;
}

.devtoys-alert-error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #dc2626;
}
[data-theme="dark"] .devtoys-alert-error,
[data-theme="oled"] .devtoys-alert-error {
  color: #f87171;
}

.devtoys-alert-success {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #059669;
}
[data-theme="dark"] .devtoys-alert-success,
[data-theme="oled"] .devtoys-alert-success {
  color: #34d399;
}

.devtoys-alert-info {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: #2563eb;
}
[data-theme="dark"] .devtoys-alert-info,
[data-theme="oled"] .devtoys-alert-info {
  color: #60a5fa;
}

/* TOAST NOTIFICATION */
.devtoys-toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: #1e293b;
  color: #fff;
  padding: 12px 20px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  font-size: 0.88rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 9999;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}
.devtoys-toast.show {
  transform: translateY(0);
  opacity: 1;
}

/* NUMBER BASE CONVERTER BITS */
.bit-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 6px;
  margin: 12px 0;
}
.bit-box {
  background: rgba(15, 23, 42, 0.05);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 8px 4px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.1s ease;
}
.bit-box.active {
  background: #2563eb;
  color: #ffffff;
  border-color: #1d4ed8;
  font-weight: 800;
  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
}
.bit-num {
  font-size: 0.65rem;
  color: var(--text-muted);
  display: block;
}
.bit-box.active .bit-num {
  color: rgba(255, 255, 255, 0.8);
}
.bit-val {
  font-family: var(--md-code-font);
  font-size: 0.95rem;
  font-weight: 700;
}

/* MOBILE TOGGLE */
.devtoys-mobile-nav-toggle {
  display: none;
  padding: 8px 14px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .devtoys-root {
    flex-direction: column;
  }
  .devtoys-sidebar {
    width: 100%;
    display: none;
  }
  .devtoys-sidebar.mobile-open {
    display: flex;
  }
  .devtoys-mobile-nav-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
}
</style>

<div class="devtoys-root" id="devtoys-app">

  <!-- ==========================================
       SIDEBAR
       ========================================== -->
  <aside class="devtoys-sidebar" id="dt-sidebar">
    <div class="devtoys-sidebar-header">
      <div class="devtoys-brand">
        <div class="devtoys-brand-icon">🛠️</div>
        <div>
          <div class="devtoys-brand-title">Caixa d'Eines</div>
          <div class="devtoys-brand-sub">Utilitats Tècniques FP</div>
        </div>
      </div>
      <div class="devtoys-search-wrap">
        <span class="devtoys-search-icon">🔍</span>
        <input type="text" id="dt-search-input" class="devtoys-search-input" placeholder="Cerca eines (JSON, XML, Cron...)" oninput="devToysFilterNav(this.value)">
      </div>
    </div>

    <div class="devtoys-nav-list" id="dt-nav-items">
      <a class="devtoys-nav-item active" data-tool="all" onclick="devToysSwitchTool('all')">
        <span class="devtoys-nav-icon">🏠</span>
        <span>Totes les Eines</span>
      </a>

      <div class="devtoys-nav-category">Formatadors &amp; Validadors</div>
      <a class="devtoys-nav-item" data-tool="json-formatter" onclick="devToysSwitchTool('json-formatter')">
        <span class="devtoys-nav-icon">📋</span>
        <span>Validador JSON</span>
      </a>
      <a class="devtoys-nav-item" data-tool="xml-validator" onclick="devToysSwitchTool('xml-validator')">
        <span class="devtoys-nav-icon">📄</span>
        <span>Validador XML</span>
      </a>
      <a class="devtoys-nav-item" data-tool="sql-formatter" onclick="devToysSwitchTool('sql-formatter')">
        <span class="devtoys-nav-icon">🗄️</span>
        <span>Formatador SQL</span>
      </a>

      <div class="devtoys-nav-category">Convertidors</div>
      <a class="devtoys-nav-item" data-tool="base-converter" onclick="devToysSwitchTool('base-converter')">
        <span class="devtoys-nav-icon">🔢</span>
        <span>Bases Numèriques</span>
      </a>
      <a class="devtoys-nav-item" data-tool="cron-parser" onclick="devToysSwitchTool('cron-parser')">
        <span class="devtoys-nav-icon">⏰</span>
        <span>Analitzador Cron</span>
      </a>
      <a class="devtoys-nav-item" data-tool="date-converter" onclick="devToysSwitchTool('date-converter')">
        <span class="devtoys-nav-icon">📅</span>
        <span>Dates &amp; Unix Epoch</span>
      </a>

      <div class="devtoys-nav-category">Codificadors</div>
      <a class="devtoys-nav-item" data-tool="base64-text" onclick="devToysSwitchTool('base64-text')">
        <span class="devtoys-nav-icon">🔤</span>
        <span>Base64 Text (UTF-8)</span>
      </a>
      <a class="devtoys-nav-item" data-tool="base64-image" onclick="devToysSwitchTool('base64-image')">
        <span class="devtoys-nav-icon">🖼️</span>
        <span>Base64 Imatges</span>
      </a>
      <a class="devtoys-nav-item" data-tool="jwt-decoder" onclick="devToysSwitchTool('jwt-decoder')">
        <span class="devtoys-nav-icon">🎫</span>
        <span>Decodificador JWT</span>
      </a>
      <a class="devtoys-nav-item" data-tool="url-html" onclick="devToysSwitchTool('url-html')">
        <span class="devtoys-nav-icon">🔗</span>
        <span>URL &amp; Entitats HTML</span>
      </a>

      <div class="devtoys-nav-category">Generadors</div>
      <a class="devtoys-nav-item" data-tool="hash-generator" onclick="devToysSwitchTool('hash-generator')">
        <span class="devtoys-nav-icon">🔑</span>
        <span>Hashes &amp; Checksums</span>
      </a>
      <a class="devtoys-nav-item" data-tool="uuid-generator" onclick="devToysSwitchTool('uuid-generator')">
        <span class="devtoys-nav-icon">🆔</span>
        <span>Generador UUID/GUID</span>
      </a>

      <div class="devtoys-nav-category">Provadors &amp; Text</div>
      <a class="devtoys-nav-item" data-tool="regex-tester" onclick="devToysSwitchTool('regex-tester')">
        <span class="devtoys-nav-icon">🔍</span>
        <span>Provador RegEx</span>
      </a>
      <a class="devtoys-nav-item" data-tool="text-diff" onclick="devToysSwitchTool('text-diff')">
        <span class="devtoys-nav-icon">🔀</span>
        <span>Comparador Diff</span>
      </a>
    </div>
  </aside>

  <!-- ==========================================
       MAIN WORKSPACE
       ========================================== -->
  <main class="devtoys-main">
    <div class="devtoys-topbar">
      <div style="display: flex; align-items: center; gap: 10px;">
        <button class="devtoys-mobile-nav-toggle" onclick="devToysToggleMobileSidebar()">☰ Menú Eines</button>
        <div class="devtoys-breadcrumbs">
          <a class="devtoys-breadcrumb-link" onclick="devToysSwitchTool('all')">Caixa d'Eines</a>
          <span>/</span>
          <span class="devtoys-breadcrumb-current" id="dt-crumb-name">Totes les Eines</span>
        </div>
      </div>
      <div class="devtoys-top-actions">
        <span class="devtoys-pill-tag">🔒 100% Client-Side &amp; Privat</span>
      </div>
    </div>

    <div class="devtoys-content-body">

      <!-- ==========================================
           VIEW: ALL TOOLS (GRID VIEW)
           ========================================== -->
      <div class="devtoys-tool-view active" id="view-all">
        <div class="devtoys-hero-head">
          <h1 class="devtoys-hero-title">Caixa d'Eines Web per a FP</h1>
          <p class="devtoys-hero-subtitle">
            La col·lecció d'utilitats essencials per a l'alumnat i professorat de cicles formatius d'Informàtica. Tot s'executa en local al navegador, sense servidors ni recollida de dades.
          </p>
        </div>

        <div class="devtoys-cards-grid" id="dt-cards-grid">
          <!-- JSON Formatter -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('json-formatter')">
            <div class="devtoys-tool-icon-box">📋</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Validador &amp; Formatador JSON</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Formata, indenta, minifica i detecta errades sintàctiques en temps real amb indicació exacta de fila i columna.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Formatadors</span>
                <span class="devtoys-card-status-dot">Offline</span>
              </div>
            </div>
          </div>

          <!-- XML Validator -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('xml-validator')">
            <div class="devtoys-tool-icon-box">📄</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Validador &amp; Formatador XML</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Comprova documents XML ben formats, indenta estructures imbricades i localitza etiquetes sense tancar.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Formatadors</span>
                <span class="devtoys-card-status-dot">DOMParser</span>
              </div>
            </div>
          </div>

          <!-- SQL Formatter -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('sql-formatter')">
            <div class="devtoys-tool-icon-box">🗄️</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Formatador SQL</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Estandarditza paraules clau en MAJÚSCULES, indenta clàusules (JOIN, WHERE, GROUP BY) i minifica consultes.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Bases de Dades</span>
                <span class="devtoys-card-status-dot">ANSI / MariaDB</span>
              </div>
            </div>
          </div>

          <!-- Number Base Converter -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('base-converter')">
            <div class="devtoys-tool-icon-box">🔢</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Conversor de Bases Numèriques</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Conversió reactiva 4-vies (Decimal, Hexadecimal, Binari i Octal) amb visualitzador interactiu de registres de 32 bits.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Convertidors</span>
                <span class="devtoys-card-status-dot">32-Bit</span>
              </div>
            </div>
          </div>

          <!-- Cron Parser -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('cron-parser')">
            <div class="devtoys-tool-icon-box">⏰</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Analitzador d'Expressions Cron</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Tradueix expressions cron (crontab de Linux) a llenguatge natural en valencià i calcula les pròximes 5 execucions.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Convertidors</span>
                <span class="devtoys-card-status-dot">Linux Cron</span>
              </div>
            </div>
          </div>

          <!-- Date Converter -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('date-converter')">
            <div class="devtoys-tool-icon-box">📅</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Conversor de Dates &amp; Unix Epoch</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Rellotge Unix Epoch en viu, conversió de segons/mil·lisegons a dates ISO 8601, UTC i càlcul de temps relatiu.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Convertidors</span>
                <span class="devtoys-card-status-dot">Temps Real</span>
              </div>
            </div>
          </div>

          <!-- Base64 Text -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('base64-text')">
            <div class="devtoys-tool-icon-box">🔤</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Codificador Base64 de Text</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Codificació i descodificació Base64 100% segura amb UTF-8 (accents, valencià i emojis) i mode URL-safe.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Codificadors</span>
                <span class="devtoys-card-status-dot">UTF-8 Segur</span>
              </div>
            </div>
          </div>

          <!-- Base64 Image -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('base64-image')">
            <div class="devtoys-tool-icon-box">🖼️</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Base64 Imatges &amp; Data URI</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Arrossega o puja una imatge per generar el seu Data URI i etiquetes HTML/CSS, o enganxa Base64 per previsualitzar-la.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Codificadors</span>
                <span class="devtoys-card-status-dot">PNG/JPG/SVG</span>
              </div>
            </div>
          </div>

          <!-- JWT Decoder -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('jwt-decoder')">
            <div class="devtoys-tool-icon-box">🎫</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Decodificador JWT (JSON Web Token)</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Desglossa tokens JWT en Capçalera i Càrrega útil (Payload), comprova la data d'expiració i verifica rols.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Seguretat</span>
                <span class="devtoys-card-status-dot">Expiració</span>
              </div>
            </div>
          </div>

          <!-- URL & HTML Entities -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('url-html')">
            <div class="devtoys-tool-icon-box">🔗</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">URL &amp; Entitats HTML</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Codifica paràmetres d'URL, desglossa query strings en taules clau-valor i converteix caràcters reservats HTML.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Web</span>
                <span class="devtoys-card-status-dot">Query &amp; HTML</span>
              </div>
            </div>
          </div>

          <!-- Hash Generator -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('hash-generator')">
            <div class="devtoys-tool-icon-box">🔑</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Hashes &amp; Checksums</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Genera simultàniament empremtes MD5, SHA-1, SHA-256 i SHA-512 a partir de text o fitxers amb verificador d'integritat.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Generadors</span>
                <span class="devtoys-card-status-dot">Crypto</span>
              </div>
            </div>
          </div>

          <!-- UUID Generator -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('uuid-generator')">
            <div class="devtoys-tool-icon-box">🆔</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Generador de UUID / GUID (v4)</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Generació d'identificadors únics universals criptogràficament segurs amb opcions de majúscules, guions i lots.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Generadors</span>
                <span class="devtoys-card-status-dot">RFC 4122</span>
              </div>
            </div>
          </div>

          <!-- RegEx Tester -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('regex-tester')">
            <div class="devtoys-tool-icon-box">🔍</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Provador RegEx</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Avalua patrons amb resaltat de coincidències en viu, taula de grups de captura i banc de patrons comuns (email, DNI, IP).</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Provadors</span>
                <span class="devtoys-card-status-dot">Resaltat</span>
              </div>
            </div>
          </div>

          <!-- Text Diff -->
          <div class="devtoys-tool-card" onclick="devToysSwitchTool('text-diff')">
            <div class="devtoys-tool-icon-box">🔀</div>
            <div class="devtoys-tool-card-body">
              <div class="devtoys-card-top-row">
                <h3 class="devtoys-tool-card-title">Comparador de Text (Diff)</h3>
                <div class="devtoys-card-action">↗</div>
              </div>
              <p class="devtoys-tool-card-desc">Compara dos textos o fragments de codi línia a línia, mostrant addicions i supressions amb estadístiques.</p>
              <div class="devtoys-card-footer">
                <span class="devtoys-card-cat-badge">Provadors</span>
                <span class="devtoys-card-status-dot">Línia a línia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 1: JSON FORMATTER & VALIDATOR
           ========================================== -->
      <div class="devtoys-tool-view" id="view-json-formatter">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">📋</div>
            <div>
              <h2 class="devtoys-tool-title">Validador &amp; Formatador JSON</h2>
              <p class="devtoys-tool-desc">Formata, valida i corregeix estructures JSON amb detecció exacta d'errors sintàctics.</p>
            </div>
          </div>
        </div>

        <div class="devtoys-pane-grid">
          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Entrada JSON</span>
              <div class="devtoys-btn-group">
                <select class="devtoys-select" id="json-indent-sel" onchange="runJsonFormat()">
                  <option value="2">2 espais</option>
                  <option value="4" selected>4 espais</option>
                  <option value="tab">Tabulador</option>
                </select>
                <button class="devtoys-btn" onclick="loadJsonSample('valid')">Exemple Vàlid</button>
                <button class="devtoys-btn" onclick="loadJsonSample('error')">Exemple amb Error</button>
                <button class="devtoys-btn" onclick="clearJsonInput()">Neteja</button>
              </div>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="json-input" class="devtoys-textarea" placeholder="Enganxa o escriu el teu JSON ací..." oninput="runJsonFormat()"></textarea>
            </div>
            <div class="devtoys-pane-footer">
              <span id="json-in-stats">0 caràcters · 0 línies</span>
              <span>UTF-8</span>
            </div>
          </div>

          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Eixida Formatada</span>
              <div class="devtoys-btn-group">
                <button class="devtoys-btn" onclick="runJsonMinify()">Minifica (1 Línia)</button>
                <button class="devtoys-btn devtoys-btn-primary" onclick="copyFromTextarea('json-output')">📋 Copia</button>
              </div>
            </div>
            <div class="devtoys-editor-wrap">
              <div id="json-error-box" style="display:none;" class="devtoys-alert devtoys-alert-error"></div>
              <textarea id="json-output" class="devtoys-textarea" readonly placeholder="El resultat formatat apareixerà ací..."></textarea>
            </div>
            <div class="devtoys-pane-footer">
              <span id="json-out-status">Esperant dades...</span>
              <span id="json-out-stats">Mida: 0 B</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 2: XML VALIDATOR & FORMATTER
           ========================================== -->
      <div class="devtoys-tool-view" id="view-xml-validator">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">📄</div>
            <div>
              <h2 class="devtoys-tool-title">Validador &amp; Formatador XML</h2>
              <p class="devtoys-tool-desc">Comprova si el document XML està ben format i aplica indentació jeràrquica.</p>
            </div>
          </div>
        </div>

        <div class="devtoys-pane-grid">
          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Entrada XML</span>
              <div class="devtoys-btn-group">
                <select class="devtoys-select" id="xml-indent-sel" onchange="runXmlFormat()">
                  <option value="2" selected>2 espais</option>
                  <option value="4">4 espais</option>
                </select>
                <button class="devtoys-btn" onclick="loadXmlSample('valid')">Exemple Vàlid</button>
                <button class="devtoys-btn" onclick="loadXmlSample('error')">Exemple amb Error</button>
                <button class="devtoys-btn" onclick="clearXmlInput()">Neteja</button>
              </div>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="xml-input" class="devtoys-textarea" placeholder="Enganxa o escriu el document XML ací..." oninput="runXmlFormat()"></textarea>
            </div>
            <div class="devtoys-pane-footer">
              <span id="xml-in-stats">0 caràcters · 0 línies</span>
              <span>DOMParser XML</span>
            </div>
          </div>

          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">XML Formatat &amp; Validat</span>
              <div class="devtoys-btn-group">
                <button class="devtoys-btn" onclick="runXmlMinify()">Minifica XML</button>
                <button class="devtoys-btn devtoys-btn-primary" onclick="copyFromTextarea('xml-output')">📋 Copia</button>
              </div>
            </div>
            <div class="devtoys-editor-wrap">
              <div id="xml-error-box" style="display:none;" class="devtoys-alert devtoys-alert-error"></div>
              <div id="xml-success-box" style="display:none;" class="devtoys-alert devtoys-alert-success"></div>
              <textarea id="xml-output" class="devtoys-textarea" readonly placeholder="L'XML indentat apareixerà ací..."></textarea>
            </div>
            <div class="devtoys-pane-footer">
              <span id="xml-out-status">Esperant dades...</span>
              <span id="xml-out-nodes">Nodes: 0</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 3: SQL FORMATTER
           ========================================== -->
      <div class="devtoys-tool-view" id="view-sql-formatter">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">🗄️</div>
            <div>
              <h2 class="devtoys-tool-title">Formatador SQL</h2>
              <p class="devtoys-tool-desc">Beautifier de consultes SQL: paraules clau en majúscules i sagnat de clàusules.</p>
            </div>
          </div>
        </div>

        <div class="devtoys-pane-grid">
          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Consulta SQL Original</span>
              <div class="devtoys-btn-group">
                <button class="devtoys-btn" onclick="loadSqlSample('select')">Exemple SELECT JOIN</button>
                <button class="devtoys-btn" onclick="loadSqlSample('ddl')">Exemple DDL</button>
                <button class="devtoys-btn" onclick="clearSqlInput()">Neteja</button>
              </div>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="sql-input" class="devtoys-textarea" placeholder="SELECT a.nom, m.titol FROM alumnes a JOIN matricules m..." oninput="runSqlFormat()"></textarea>
            </div>
            <div class="devtoys-pane-footer">
              <span id="sql-in-stats">0 caràcters</span>
              <span>SQL ANSI / MariaDB</span>
            </div>
          </div>

          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">SQL Formatat &amp; Netejat</span>
              <div class="devtoys-btn-group">
                <button class="devtoys-btn" onclick="runSqlMinify()">Minifica a 1 línia</button>
                <button class="devtoys-btn devtoys-btn-primary" onclick="copyFromTextarea('sql-output')">📋 Copia</button>
              </div>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="sql-output" class="devtoys-textarea" readonly placeholder="La consulta formatada apareixerà ací..."></textarea>
            </div>
            <div class="devtoys-pane-footer">
              <span id="sql-out-stats">Prêt</span>
              <span>Paleta SQL</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 4: NUMBER BASE CONVERTER
           ========================================== -->
      <div class="devtoys-tool-view" id="view-base-converter">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">🔢</div>
            <div>
              <h2 class="devtoys-tool-title">Conversor de Bases Numèriques</h2>
              <p class="devtoys-tool-desc">Conversió sincronitzada entre Decimal, Hexadecimal, Binari i Octal amb manipulador de bits.</p>
            </div>
          </div>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
            <div>
              <label style="display:block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">DECIMAL (Base 10)</label>
              <div style="display:flex; gap:6px;">
                <input type="text" id="base-dec" class="devtoys-textarea" style="min-height: 42px; height: 42px; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px;" oninput="onBaseChange('dec', this.value)" value="255">
                <button class="devtoys-btn" onclick="copyInputVal('base-dec')">📋</button>
              </div>
            </div>

            <div>
              <label style="display:block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">HEXADECIMAL (Base 16)</label>
              <div style="display:flex; gap:6px;">
                <input type="text" id="base-hex" class="devtoys-textarea" style="min-height: 42px; height: 42px; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px;" oninput="onBaseChange('hex', this.value)" value="FF">
                <button class="devtoys-btn" onclick="copyInputVal('base-hex')">📋</button>
              </div>
            </div>

            <div>
              <label style="display:block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">BINARI (Base 2)</label>
              <div style="display:flex; gap:6px;">
                <input type="text" id="base-bin" class="devtoys-textarea" style="min-height: 42px; height: 42px; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px;" oninput="onBaseChange('bin', this.value)" value="11111111">
                <button class="devtoys-btn" onclick="copyInputVal('base-bin')">📋</button>
              </div>
            </div>

            <div>
              <label style="display:block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">OCTAL (Base 8)</label>
              <div style="display:flex; gap:6px;">
                <input type="text" id="base-oct" class="devtoys-textarea" style="min-height: 42px; height: 42px; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px;" oninput="onBaseChange('oct', this.value)" value="377">
                <button class="devtoys-btn" onclick="copyInputVal('base-oct')">📋</button>
              </div>
            </div>
          </div>

          <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
            <div style="font-size: 0.84rem; color: var(--text-muted);">
              Representació ASCII: <strong id="base-ascii-val" style="color: var(--text-color); font-family: var(--md-code-font); font-size: 1rem;">ÿ</strong>
              &nbsp;·&nbsp; Format 32-bit: <code id="base-bin-grouped" style="color: #2563eb;">0000 0000 0000 0000 0000 0000 1111 1111</code>
            </div>
            <div class="devtoys-btn-group">
              <button class="devtoys-btn" onclick="setPresetBase(0)">0</button>
              <button class="devtoys-btn" onclick="setPresetBase(128)">128 (0x80)</button>
              <button class="devtoys-btn" onclick="setPresetBase(255)">255 (0xFF)</button>
              <button class="devtoys-btn" onclick="setPresetBase(1024)">1024</button>
              <button class="devtoys-btn" onclick="setPresetBase(65535)">65535 (0xFFFF)</button>
            </div>
          </div>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="font-size: 0.88rem; font-weight: 700; text-transform: uppercase;">Registre Visual de 32 Bits (Clica qualsevol bit per commutar-lo)</span>
            <span style="font-size: 0.78rem; color: var(--text-muted);">Bit 31 (MSB) ... Bit 0 (LSB)</span>
          </div>
          <div class="bit-grid" id="bit-grid-container"></div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 5: CRON EXPRESSION PARSER
           ========================================== -->
      <div class="devtoys-tool-view" id="view-cron-parser">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">⏰</div>
            <div>
              <h2 class="devtoys-tool-title">Analitzador d'Expressions Cron</h2>
              <p class="devtoys-tool-desc">Descriu en valencià natural la planificació d'un crontab i calcula les pròximes execucions.</p>
            </div>
          </div>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 22px; margin-bottom: 20px;">
          <label style="display:block; font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-bottom: 8px;">EXPRESSIÓ CRON (5 CAMPS: MINUT HORA DIA-MES MES DIA-SETMANA)</label>
          <div style="display:flex; gap: 10px; margin-bottom: 14px;">
            <input type="text" id="cron-input" class="devtoys-textarea" style="min-height: 48px; height: 48px; font-size: 1.2rem; font-weight: 700; padding: 8px 16px; border: 1px solid var(--border); border-radius: 8px;" value="*/15 8-18 * * 1-5" oninput="runCronParse()">
            <button class="devtoys-btn devtoys-btn-primary" onclick="copyInputVal('cron-input')">📋 Copia</button>
          </div>

          <div class="devtoys-btn-group" style="flex-wrap: wrap; margin-bottom: 18px;">
            <button class="devtoys-btn" onclick="setPresetCron('* * * * *')">Cada minut (* * * * *)</button>
            <button class="devtoys-btn" onclick="setPresetCron('*/15 * * * *')">Cada 15 minuts (*/15 * * * *)</button>
            <button class="devtoys-btn" onclick="setPresetCron('0 8 * * 1-5')">Laborables a les 8:00 (0 8 * * 1-5)</button>
            <button class="devtoys-btn" onclick="setPresetCron('0 0 1 * *')">Primer de mes a mitjanit (0 0 1 * *)</button>
            <button class="devtoys-btn" onclick="setPresetCron('30 23 * * 0')">Diumenges a les 23:30 (30 23 * * 0)</button>
          </div>

          <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.25); border-radius: 10px; padding: 18px; margin-bottom: 18px;">
            <div style="font-size: 0.78rem; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Significat en Llenguatge Natural</div>
            <div id="cron-human-desc" style="font-size: 1.25rem; font-weight: 800; color: var(--text-color);">Carregant...</div>
          </div>

          <h3 style="font-size: 0.95rem; font-weight: 700; margin: 0 0 10px 0;">Pròximes 5 Execucions Programades (Simulades)</h3>
          <ul id="cron-next-dates" style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
          </ul>
        </div>
      </div>

      <!-- ==========================================
           TOOL 6: DATE CONVERTER & UNIX TIMESTAMP
           ========================================== -->
      <div class="devtoys-tool-view" id="view-date-converter">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">📅</div>
            <div>
              <h2 class="devtoys-tool-title">Conversor de Dates &amp; Unix Epoch</h2>
              <p class="devtoys-tool-desc">Converteix marques temporals Unix Epoch a dates humanes i viceversa.</p>
            </div>
          </div>
        </div>

        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 18px 24px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
          <div>
            <div style="font-size: 0.76rem; font-weight: 700; color: #059669; text-transform: uppercase;">Unix Epoch Actual (Segons des de l'1 de gener de 1970 UTC)</div>
            <div id="epoch-current-ticker" style="font-family: var(--md-code-font); font-size: 1.8rem; font-weight: 800; color: var(--text-color);">0</div>
          </div>
          <div class="devtoys-btn-group">
            <button class="devtoys-btn" onclick="copyCurrentEpoch()">📋 Copia Epoch</button>
            <button class="devtoys-btn" onclick="setCurrentEpochToInput()">Usa com a Entrada</button>
          </div>
        </div>

        <div class="devtoys-pane-grid">
          <div class="devtoys-pane" style="padding: 18px;">
            <h3 style="font-size: 0.95rem; font-weight: 700; margin: 0 0 14px 0;">De Timestamp Unix a Data</h3>
            <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">EPOCH EN SEGONS O MIL·LISEGONS</label>
            <input type="number" id="epoch-input-val" class="devtoys-textarea" style="min-height: 42px; height: 42px; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px; margin-bottom: 16px;" oninput="runEpochToDate()">
            
            <div style="display:flex; flex-direction:column; gap: 10px; font-size: 0.88rem;">
              <div><strong>Data Local:</strong> <span id="epoch-res-local" class="text-muted">-</span></div>
              <div><strong>Data ISO 8601:</strong> <span id="epoch-res-iso" class="text-muted">-</span></div>
              <div><strong>Data UTC:</strong> <span id="epoch-res-utc" class="text-muted">-</span></div>
              <div><strong>Temps Relatiu:</strong> <span id="epoch-res-rel" class="text-muted">-</span></div>
            </div>
          </div>

          <div class="devtoys-pane" style="padding: 18px;">
            <h3 style="font-size: 0.95rem; font-weight: 700; margin: 0 0 14px 0;">De Data a Timestamp Unix</h3>
            <label style="display:block; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">TRIA DATA I HORA</label>
            <input type="datetime-local" id="date-picker-val" class="devtoys-textarea" style="min-height: 42px; height: 42px; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px; margin-bottom: 16px;" oninput="runDateToEpoch()">

            <div style="display:flex; flex-direction:column; gap: 10px; font-size: 0.88rem;">
              <div><strong>Epoch (Segons):</strong> <span id="date-res-sec" style="font-family: var(--md-code-font); font-weight:700;">-</span></div>
              <div><strong>Epoch (Mil·lisegons):</strong> <span id="date-res-ms" style="font-family: var(--md-code-font);">-</span></div>
              <div><strong>Dia de la Setmana:</strong> <span id="date-res-day">-</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 7: BASE64 TEXT ENCODER / DECODER
           ========================================== -->
      <div class="devtoys-tool-view" id="view-base64-text">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">🔤</div>
            <div>
              <h2 class="devtoys-tool-title">Codificador / Descodificador Base64 de Text</h2>
              <p class="devtoys-tool-desc">Compatibilitat UTF-8 nativa per a caràcters especials, valencià i emojis.</p>
            </div>
          </div>
        </div>

        <div class="devtoys-pane-grid">
          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Text en Clar</span>
              <div class="devtoys-btn-group">
                <button class="devtoys-btn devtoys-btn-primary" onclick="runBase64Encode()">Codifica a Base64 →</button>
                <button class="devtoys-btn" onclick="clearBase64Text()">Neteja</button>
              </div>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="b64-plain" class="devtoys-textarea" placeholder="Escriu text en clar (ex: Ciències Aplicades, l·l, ç, accents)..." oninput="runBase64Encode()">Portal Docent FP · Pepe Cuenca (Curs 2026/2027)</textarea>
            </div>
            <div class="devtoys-pane-footer">
              <span id="b64-plain-stats">0 caràcters</span>
              <span>Text UTF-8</span>
            </div>
          </div>

          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Cadena Base64</span>
              <div class="devtoys-btn-group">
                <button class="devtoys-btn devtoys-btn-primary" onclick="runBase64Decode()">← Descodifica a Text</button>
                <button class="devtoys-btn" onclick="copyFromTextarea('b64-encoded')">📋 Copia</button>
              </div>
            </div>
            <div class="devtoys-editor-wrap">
              <div id="b64-error-box" style="display:none;" class="devtoys-alert devtoys-alert-error"></div>
              <textarea id="b64-encoded" class="devtoys-textarea" placeholder="Enganxa Base64 ací per descodificar..." oninput="runBase64Decode()"></textarea>
            </div>
            <div class="devtoys-pane-footer">
              <span id="b64-enc-stats">0 caràcters</span>
              <span>Base64</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 8: BASE64 IMAGE ENCODER / DECODER
           ========================================== -->
      <div class="devtoys-tool-view" id="view-base64-image">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">🖼️</div>
            <div>
              <h2 class="devtoys-tool-title">Base64 per a Imatges &amp; Data URI</h2>
              <p class="devtoys-tool-desc">Converteix imatges PNG, JPEG, SVG o WebP a Data URIs per inserir-les en HTML i CSS.</p>
            </div>
          </div>
        </div>

        <div style="border: 2px dashed var(--border); border-radius: 12px; padding: 30px; text-align: center; margin-bottom: 20px; background: rgba(15, 23, 42, 0.02); cursor: pointer;" onclick="document.getElementById('b64-file-input').click()" ondragover="event.preventDefault()" ondrop="handleB64FileDrop(event)">
          <input type="file" id="b64-file-input" style="display:none;" accept="image/*" onchange="handleB64FileSelect(this.files[0])">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">🖼️</div>
          <div style="font-size: 1rem; font-weight: 700; margin-bottom: 4px;">Arrossega una imatge ací o fes clic per triar-la</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">Suporta PNG, JPEG, SVG, WebP, GIF i ICO (100% en local)</div>
        </div>

        <div id="b64-img-result-wrap" style="display:none;" class="devtoys-pane-grid">
          <div class="devtoys-pane" style="padding: 16px; text-align: center;">
            <span class="devtoys-pane-title" style="margin-bottom: 12px;">Previsualització</span>
            <div style="max-height: 260px; display:flex; align-items:center; justify-content:center; overflow:hidden; background: rgba(0,0,0,0.05); border-radius: 8px; padding: 10px;">
              <img id="b64-preview-img" style="max-width: 100%; max-height: 240px; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" alt="Preview">
            </div>
            <div id="b64-img-meta" style="margin-top: 12px; font-size: 0.82rem; color: var(--text-muted);"></div>
          </div>

          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Data URI &amp; Codi</span>
              <div class="devtoys-btn-group">
                <button class="devtoys-btn devtoys-btn-primary" onclick="copyFromTextarea('b64-uri-output')">📋 Copia Data URI</button>
                <button class="devtoys-btn" onclick="copyImgHtmlTag()">Copia Tag &lt;img&gt;</button>
              </div>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="b64-uri-output" class="devtoys-textarea" readonly style="min-height: 220px;"></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 9: JWT DECODER
           ========================================== -->
      <div class="devtoys-tool-view" id="view-jwt-decoder">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">🎫</div>
            <div>
              <h2 class="devtoys-tool-title">Decodificador JWT (JSON Web Token)</h2>
              <p class="devtoys-tool-desc">Desxifra la Capçalera, Càrrega Útil (Payload) i verifica l'expiració en local.</p>
            </div>
          </div>
        </div>

        <div class="devtoys-pane" style="margin-bottom: 18px;">
          <div class="devtoys-pane-header">
            <span class="devtoys-pane-title">Token JWT En brut</span>
            <div class="devtoys-btn-group">
              <button class="devtoys-btn" onclick="loadJwtSample()">Carrega Token de Mostra</button>
              <button class="devtoys-btn" onclick="clearJwtInput()">Neteja</button>
            </div>
          </div>
          <div class="devtoys-editor-wrap">
            <textarea id="jwt-input" class="devtoys-textarea" style="min-height: 100px; height: 100px;" placeholder="Enganxa ací el teu token JWT (ex: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)" oninput="runJwtDecode()"></textarea>
          </div>
        </div>

        <div id="jwt-status-banner" style="display:none; margin-bottom: 18px;"></div>

        <div class="devtoys-pane-grid">
          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title" style="color: #ef4444;">🔴 Capçalera (Header)</span>
              <button class="devtoys-btn" onclick="copyFromTextarea('jwt-header-out')">📋 Copia</button>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="jwt-header-out" class="devtoys-textarea" readonly placeholder="Algorisme i tipus de token..."></textarea>
            </div>
          </div>

          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title" style="color: #3b82f6;">🔵 Càrrega Útil (Payload Claims)</span>
              <button class="devtoys-btn" onclick="copyFromTextarea('jwt-payload-out')">📋 Copia</button>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="jwt-payload-out" class="devtoys-textarea" readonly placeholder="Claims, usuari, rols, expiració..."></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 10: URL & HTML ENTITIES
           ========================================== -->
      <div class="devtoys-tool-view" id="view-url-html">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">🔗</div>
            <div>
              <h2 class="devtoys-tool-title">URL &amp; Entitats HTML</h2>
              <p class="devtoys-tool-desc">Codificació d'URL i conversió d'entitats HTML reservades (&lt;, &gt;, &amp;, &quot;).</p>
            </div>
          </div>
        </div>

        <div class="devtoys-pane-grid">
          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Entrada</span>
              <div class="devtoys-btn-group">
                <button class="devtoys-btn devtoys-btn-primary" onclick="runUrlEncode()">Codifica URL</button>
                <button class="devtoys-btn" onclick="runHtmlEntitiesEncode()">Entitats HTML</button>
                <button class="devtoys-btn" onclick="clearUrlHtml()">Neteja</button>
              </div>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="url-input" class="devtoys-textarea" placeholder="Text o URL..." oninput="runUrlAuto()">https://portal.edu.gva.es/apunts?modul=daw&nom=Pepe Cuenca&curs=2026/27</textarea>
            </div>
          </div>

          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Eixida Codificada / Descodificada</span>
              <div class="devtoys-btn-group">
                <button class="devtoys-btn devtoys-btn-primary" onclick="runUrlDecode()">Descodifica URL</button>
                <button class="devtoys-btn" onclick="copyFromTextarea('url-output')">📋 Copia</button>
              </div>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="url-output" class="devtoys-textarea" readonly></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 11: HASH GENERATOR & CHECKSUM
           ========================================== -->
      <div class="devtoys-tool-view" id="view-hash-generator">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">🔑</div>
            <div>
              <h2 class="devtoys-tool-title">Hashes &amp; Checksums</h2>
              <p class="devtoys-tool-desc">Càlcul simultani d'empremtes criptogràfiques amb verificació de concordança.</p>
            </div>
          </div>
        </div>

        <div class="devtoys-pane" style="margin-bottom: 20px;">
          <div class="devtoys-pane-header">
            <span class="devtoys-pane-title">Text d'Entrada</span>
            <div class="devtoys-btn-group">
              <button class="devtoys-btn" onclick="clearHashInput()">Neteja</button>
            </div>
          </div>
          <div class="devtoys-editor-wrap">
            <textarea id="hash-input-text" class="devtoys-textarea" style="min-height: 90px; height: 90px;" placeholder="Escriu qualsevol text per generar els seus hashes..." oninput="runHashGen()">Portal Docent FP</textarea>
          </div>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; display: flex; flex-direction: column; gap: 14px; margin-bottom: 20px;">
          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
              <span style="font-size: 0.8rem; font-weight:700;">MD5 (128 bits · 32 hex)</span>
              <button class="devtoys-btn" onclick="copyInputVal('hash-md5')">📋 Copia</button>
            </div>
            <input type="text" id="hash-md5" class="devtoys-textarea" readonly style="min-height:38px; height:38px; font-weight:700; color:#3b82f6; padding:6px 10px; border:1px solid var(--border); border-radius:6px;">
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
              <span style="font-size: 0.8rem; font-weight:700;">SHA-1 (160 bits · 40 hex)</span>
              <button class="devtoys-btn" onclick="copyInputVal('hash-sha1')">📋 Copia</button>
            </div>
            <input type="text" id="hash-sha1" class="devtoys-textarea" readonly style="min-height:38px; height:38px; font-weight:700; color:#10b981; padding:6px 10px; border:1px solid var(--border); border-radius:6px;">
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
              <span style="font-size: 0.8rem; font-weight:700;">SHA-256 (256 bits · 64 hex · Estàndard Segur)</span>
              <button class="devtoys-btn" onclick="copyInputVal('hash-sha256')">📋 Copia</button>
            </div>
            <input type="text" id="hash-sha256" class="devtoys-textarea" readonly style="min-height:38px; height:38px; font-weight:700; color:#f59e0b; padding:6px 10px; border:1px solid var(--border); border-radius:6px;">
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
              <span style="font-size: 0.8rem; font-weight:700;">SHA-512 (512 bits · 128 hex)</span>
              <button class="devtoys-btn" onclick="copyInputVal('hash-sha512')">📋 Copia</button>
            </div>
            <input type="text" id="hash-sha512" class="devtoys-textarea" readonly style="min-height:38px; height:38px; font-weight:700; color:#8b5cf6; padding:6px 10px; border:1px solid var(--border); border-radius:6px;">
          </div>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 18px;">
          <h3 style="font-size: 0.95rem; font-weight: 700; margin: 0 0 8px 0;">Verificador de Concordança (Compare Hash)</h3>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0 0 10px 0;">Enganxa un hash esperat (per exemple, el proporcionat a la descàrrega d'una ISO de Linux) per verificar si coincideix amb el text o fitxer.</p>
          <input type="text" id="hash-compare-input" class="devtoys-textarea" style="min-height: 40px; height: 40px; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px; margin-bottom: 10px;" placeholder="Enganxa el hash de verificació ací..." oninput="runHashCompare()">
          <div id="hash-compare-result" style="display:none;" class="devtoys-alert"></div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 12: UUID GENERATOR
           ========================================== -->
      <div class="devtoys-tool-view" id="view-uuid-generator">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">🆔</div>
            <div>
              <h2 class="devtoys-tool-title">Generador de UUID / GUID (v4)</h2>
              <p class="devtoys-tool-desc">Genera identificadors únics universals pseudo-aleatoris conformes a RFC 4122.</p>
            </div>
          </div>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
          <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
            <label style="font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 6px;">
              <input type="checkbox" id="uuid-hyphens" checked onchange="runUuidGen()"> Amb guions (-)
            </label>
            <label style="font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 6px;">
              <input type="checkbox" id="uuid-uppercase" onchange="runUuidGen()"> Majúscules
            </label>
            <label style="font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 6px;">
              <input type="checkbox" id="uuid-braces" onchange="runUuidGen()"> Entre claus { }
            </label>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 0.85rem; font-weight: 600;">Quantitat:</span>
              <select id="uuid-count" class="devtoys-select" onchange="runUuidGen()">
                <option value="1">1</option>
                <option value="5" selected>5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>

          <div class="devtoys-btn-group">
            <button class="devtoys-btn devtoys-btn-primary" onclick="runUuidGen()">🔄 Regenera</button>
            <button class="devtoys-btn" onclick="copyFromTextarea('uuid-output')">📋 Copia Tots</button>
          </div>
        </div>

        <div class="devtoys-pane">
          <div class="devtoys-pane-header">
            <span class="devtoys-pane-title">UUIDs Generats</span>
            <span id="uuid-stats-badge" class="devtoys-pill-tag">5 UUIDs</span>
          </div>
          <div class="devtoys-editor-wrap">
            <textarea id="uuid-output" class="devtoys-textarea" readonly style="min-height: 280px;"></textarea>
          </div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 13: REGEX TESTER
           ========================================== -->
      <div class="devtoys-tool-view" id="view-regex-tester">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">🔍</div>
            <div>
              <h2 class="devtoys-tool-title">Provador d'Expressions Regulars (RegEx)</h2>
              <p class="devtoys-tool-desc">Avalua patrons d'expressió regular amb resaltat visual i grups de captura.</p>
            </div>
          </div>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <div style="margin-bottom: 12px;">
            <label style="display:block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">PATRÓ REGEX</label>
            <div style="display:flex; gap: 8px;">
              <span style="display:flex; align-items:center; font-family:var(--md-code-font); font-size:1.1rem; color:var(--text-muted);">/</span>
              <input type="text" id="regex-pattern" class="devtoys-textarea" style="min-height: 42px; height: 42px; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px; font-weight: 700;" value="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" oninput="runRegexTest()">
              <span style="display:flex; align-items:center; font-family:var(--md-code-font); font-size:1.1rem; color:var(--text-muted);">/</span>
              <input type="text" id="regex-flags" class="devtoys-textarea" style="width: 70px; min-height: 42px; height: 42px; padding: 8px 10px; border: 1px solid var(--border); border-radius: 6px; font-weight: 700; text-align: center;" value="g" oninput="runRegexTest()" placeholder="flags">
            </div>
          </div>

          <div style="display:flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px;">
            <button class="devtoys-btn" onclick="setPresetRegex('email')">Correu Electrònic</button>
            <button class="devtoys-btn" onclick="setPresetRegex('dni')">DNI / NIE</button>
            <button class="devtoys-btn" onclick="setPresetRegex('ipv4')">Adreça IPv4</button>
            <button class="devtoys-btn" onclick="setPresetRegex('date')">Data (DD/MM/AAAA)</button>
            <button class="devtoys-btn" onclick="setPresetRegex('url')">URL Web</button>
          </div>
        </div>

        <div class="devtoys-pane-grid">
          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Text de Prova</span>
              <button class="devtoys-btn" onclick="clearRegexInput()">Neteja</button>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="regex-test-text" class="devtoys-textarea" placeholder="Enganxa ací el text a analitzar..." oninput="runRegexTest()">Contacta amb suport@edu.gva.es o admin@ies-santvicent.net per a qualsevol dubte.</textarea>
            </div>
          </div>

          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Coincidències Resaltades</span>
              <span id="regex-match-count" class="devtoys-pill-tag">0 coincidències</span>
            </div>
            <div class="devtoys-editor-wrap" style="padding: 14px; min-height: 380px; overflow-y: auto;">
              <div id="regex-highlight-view" style="font-family: var(--md-code-font); font-size: 0.9rem; line-height: 1.6; white-space: pre-wrap; word-break: break-all;"></div>
              <div id="regex-groups-table" style="margin-top: 16px;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           TOOL 14: TEXT DIFF CHECKER
           ========================================== -->
      <div class="devtoys-tool-view" id="view-text-diff">
        <div class="devtoys-tool-header">
          <div class="devtoys-tool-title-row">
            <div class="devtoys-tool-icon-box">🔀</div>
            <div>
              <h2 class="devtoys-tool-title">Comparador de Text (Diff Checker)</h2>
              <p class="devtoys-tool-desc">Compara dos fragments de text línia a línia amb indicació de canvis.</p>
            </div>
          </div>
        </div>

        <div class="devtoys-pane-grid" style="margin-bottom: 18px;">
          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Text Original</span>
              <button class="devtoys-btn" onclick="loadDiffSample()">Carrega Exemple</button>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="diff-text-1" class="devtoys-textarea" style="min-height: 200px;" placeholder="Text abans de les modificacions..." oninput="runTextDiff()">Línia 1: Servidor web Apache
Línia 2: Port 80
Línia 3: PHP 8.1
Línia 4: MySQL 5.7</textarea>
            </div>
          </div>

          <div class="devtoys-pane">
            <div class="devtoys-pane-header">
              <span class="devtoys-pane-title">Text Modificat</span>
              <button class="devtoys-btn devtoys-btn-primary" onclick="runTextDiff()">Compara</button>
            </div>
            <div class="devtoys-editor-wrap">
              <textarea id="diff-text-2" class="devtoys-textarea" style="min-height: 200px;" placeholder="Text després de les modificacions..." oninput="runTextDiff()">Línia 1: Servidor web Nginx
Línia 2: Port 443 (SSL)
Línia 3: PHP 8.3
Línia 4: MariaDB 11.0</textarea>
            </div>
          </div>
        </div>

        <div class="devtoys-pane">
          <div class="devtoys-pane-header">
            <span class="devtoys-pane-title">Diferències Línia a Línia</span>
            <span id="diff-stats" class="devtoys-pill-tag">0 canvis</span>
          </div>
          <div id="diff-result-view" style="padding: 16px; font-family: var(--md-code-font); font-size: 0.88rem; min-height: 180px; overflow-x: auto;">
          </div>
        </div>
      </div>

    </div>
  </main>
</div>

<!-- TOAST -->
<div id="dt-toast" class="devtoys-toast">📋 Copiat al porta-retalls!</div>

<!-- ========================================================
     DEVTOYS ENGINE JAVASCRIPT (100% OFFLINE & CLIENT-SIDE)
     ======================================================== -->
<script>
// PURE JS MD5 (RFC 1321)
function md5(string) {
  function rotateLeft(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  }
  function addUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = (lX & 0x80000000); lY8 = (lY & 0x80000000);
    lX4 = (lX & 0x4000000);  lY4 = (lY & 0x4000000);
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    if (lX4 | lY4) {
      if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
      else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
    } else return (lResult ^ lX8 ^ lY8);
  }
  function F(x, y, z) { return (x & y) | ((~x) & z); }
  function G(x, y, z) { return (x & z) | (y & (~z)); }
  function H(x, y, z) { return (x ^ y ^ z); }
  function I(x, y, z) { return (y ^ (x | (~z))); }
  function FF(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }
  function GG(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }
  function HH(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }
  function II(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }
  function convertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0; var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }
  function wordToHex(lValue) {
    var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  }
  function utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  }
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
  var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
  var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
  var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
  string = utf8Encode(string);
  x = convertToWordArray(string);
  a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
  for (k = 0; k < x.length; k += 16) {
    AA = a; BB = b; CC = c; DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = addUnsigned(a, AA); b = addUnsigned(b, BB);
    c = addUnsigned(c, CC); d = addUnsigned(d, DD);
  }
  var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
  return temp.toLowerCase();
}

// NAVIGATION & TOOL ROUTER
const toolTitles = {
  'all': 'Totes les Utilitats',
  'json-formatter': 'Validador & Formatador JSON',
  'xml-validator': 'Validador & Formatador XML',
  'sql-formatter': 'Formatador SQL',
  'base-converter': 'Conversor de Bases Numèriques',
  'cron-parser': 'Analitzador d\'Expressions Cron',
  'date-converter': 'Conversor de Dates & Unix Epoch',
  'base64-text': 'Base64 de Text (UTF-8)',
  'base64-image': 'Base64 Imatges & Data URI',
  'jwt-decoder': 'Decodificador JWT',
  'url-html': 'URL & Entitats HTML',
  'hash-generator': 'Hashes & Checksums',
  'uuid-generator': 'Generador UUID / GUID',
  'regex-tester': 'Provador RegEx',
  'text-diff': 'Comparador Diff'
};

function devToysSwitchTool(toolId) {
  // Update nav active
  document.querySelectorAll('.devtoys-nav-item').forEach(el => {
    if (el.getAttribute('data-tool') === toolId) el.classList.add('active');
    else el.classList.remove('active');
  });

  // Update views
  document.querySelectorAll('.devtoys-tool-view').forEach(v => v.classList.remove('active'));
  const targetView = document.getElementById('view-' + toolId);
  if (targetView) targetView.classList.add('active');

  // Breadcrumbs
  const crumb = document.getElementById('dt-crumb-name');
  if (crumb) crumb.textContent = toolTitles[toolId] || 'Eina';

  // URL hash
  if (toolId === 'all') {
    history.replaceState(null, '', window.location.pathname);
  } else {
    history.replaceState(null, '', '#' + toolId);
  }

  // Trigger init for tools
  if (toolId === 'base-converter') renderBitGrid();
  if (toolId === 'cron-parser') runCronParse();
  if (toolId === 'date-converter') runEpochToDate();
  if (toolId === 'hash-generator') runHashGen();
  if (toolId === 'uuid-generator') runUuidGen();
  if (toolId === 'regex-tester') runRegexTest();
  if (toolId === 'text-diff') runTextDiff();
  if (toolId === 'base64-text') runBase64Encode();

  // Close mobile sidebar if open
  document.getElementById('dt-sidebar').classList.remove('mobile-open');
}

function devToysToggleMobileSidebar() {
  document.getElementById('dt-sidebar').classList.toggle('mobile-open');
}

function devToysFilterNav(query) {
  const q = query.trim().toLowerCase();
  document.querySelectorAll('#dt-nav-items .devtoys-nav-item').forEach(item => {
    if (item.getAttribute('data-tool') === 'all') return;
    const txt = item.textContent.toLowerCase();
    item.style.display = txt.includes(q) ? 'flex' : 'none';
  });

  // Also filter cards in all-view
  document.querySelectorAll('#dt-cards-grid .devtoys-tool-card').forEach(card => {
    const title = card.querySelector('.devtoys-tool-card-title').textContent.toLowerCase();
    const desc = card.querySelector('.devtoys-tool-card-desc').textContent.toLowerCase();
    card.style.display = (title.includes(q) || desc.includes(q)) ? 'flex' : 'none';
  });
}

// TOAST HELPER
function showToast(msg) {
  const toast = document.getElementById('dt-toast');
  if (!toast) return;
  toast.textContent = msg || '📋 Copiat al porta-retalls!';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function copyFromTextarea(id) {
  const el = document.getElementById(id);
  if (!el || !el.value) return;
  navigator.clipboard.writeText(el.value).then(() => showToast('📋 Text copiat!'));
}

function copyInputVal(id) {
  const el = document.getElementById(id);
  if (!el || !el.value) return;
  navigator.clipboard.writeText(el.value).then(() => showToast('📋 Copiat: ' + el.value));
}

// ----------------------------------------------------
// TOOL 1: JSON FORMATTER & VALIDATOR
// ----------------------------------------------------
function runJsonFormat() {
  const input = document.getElementById('json-input').value;
  const output = document.getElementById('json-output');
  const errBox = document.getElementById('json-error-box');
  const inStats = document.getElementById('json-in-stats');
  const outStats = document.getElementById('json-out-stats');
  const outStatus = document.getElementById('json-out-status');
  const indentType = document.getElementById('json-indent-sel').value;

  inStats.textContent = `${input.length} caràcters · ${input.split('\n').length} línies`;

  if (!input.trim()) {
    output.value = '';
    errBox.style.display = 'none';
    outStatus.textContent = 'Esperant dades...';
    outStats.textContent = 'Mida: 0 B';
    return;
  }

  const space = indentType === 'tab' ? '\t' : parseInt(indentType, 10);

  try {
    const parsed = JSON.parse(input);
    const formatted = JSON.stringify(parsed, null, space);
    output.value = formatted;
    errBox.style.display = 'none';
    outStatus.innerHTML = '<span style="color:#10b981;">✅ JSON Vàlid</span>';
    outStats.textContent = `Mida: ${new Blob([formatted]).size} B · ${Object.keys(parsed).length} claus arrel`;
  } catch (err) {
    output.value = '';
    errBox.style.display = 'block';
    
    // Parse line and column from error message
    let lineInfo = '';
    const posMatch = err.message.match(/position (\d+)/i);
    if (posMatch) {
      const pos = parseInt(posMatch[1], 10);
      const lines = input.substring(0, pos).split('\n');
      const lineNum = lines.length;
      const colNum = lines[lines.length - 1].length + 1;
      lineInfo = ` (Línia ${lineNum}, Columna ${colNum})`;
    }
    
    errBox.innerHTML = `<strong>❌ Error de Sintaxi JSON${lineInfo}:</strong><br>${err.message}`;
    outStatus.innerHTML = '<span style="color:#ef4444;">❌ Error de sintaxi</span>';
  }
}

function runJsonMinify() {
  const input = document.getElementById('json-input').value;
  const output = document.getElementById('json-output');
  const errBox = document.getElementById('json-error-box');
  try {
    const parsed = JSON.parse(input);
    output.value = JSON.stringify(parsed);
    errBox.style.display = 'none';
    showToast('⚡ JSON Minificat en 1 línia!');
  } catch (e) {
    runJsonFormat();
  }
}

function clearJsonInput() {
  document.getElementById('json-input').value = '';
  runJsonFormat();
}

function loadJsonSample(type) {
  if (type === 'valid') {
    document.getElementById('json-input').value = JSON.stringify({
      portal: "Portal Docent Pepe Cuenca",
      curs: "2026/2027",
      moduls_actius: [
        { codi: "MMSCI", nom: "Muntatge i Manteniment de Sistemes", cicle: "1r FPB", hores: 200 },
        { codi: "CIEN1", nom: "Ciències Aplicades I", cicle: "1r FPB", hores: 160 },
        { codi: "PROG", nom: "Programació en Java", cicle: "1r DAW/DAM", hores: 256 }
      ],
      laboratori: {
        xarxa: "192.168.1.0/24",
        dhcp: true,
        servidor: "srv-prof.local"
      }
    }, null, 4);
  } else {
    document.getElementById('json-input').value = '{\n  "modul": "MMSCI",\n  "curs": 2026,\n  "alumne": "Joan",\n  "nota": 8.5\n  "comentari": "Falta una coma abans d\'aquesta línia!"\n}';
  }
  runJsonFormat();
}

// ----------------------------------------------------
// TOOL 2: XML VALIDATOR & FORMATTER
// ----------------------------------------------------
function runXmlFormat() {
  const input = document.getElementById('xml-input').value;
  const output = document.getElementById('xml-output');
  const errBox = document.getElementById('xml-error-box');
  const succBox = document.getElementById('xml-success-box');
  const inStats = document.getElementById('xml-in-stats');
  const outStats = document.getElementById('xml-out-status');
  const outNodes = document.getElementById('xml-out-nodes');
  const indentSize = parseInt(document.getElementById('xml-indent-sel').value, 10);

  inStats.textContent = `${input.length} caràcters · ${input.split('\n').length} línies`;

  if (!input.trim()) {
    output.value = '';
    errBox.style.display = 'none';
    succBox.style.display = 'none';
    outStats.textContent = 'Esperant dades...';
    outNodes.textContent = 'Nodes: 0';
    return;
  }

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(input, 'text/xml');
  const parseError = xmlDoc.querySelector('parsererror');

  if (parseError) {
    output.value = '';
    succBox.style.display = 'none';
    errBox.style.display = 'block';
    errBox.innerHTML = `<strong>❌ Error de Validació XML (Document No Ben Format):</strong><br>${parseError.textContent.trim().split('\n')[0]}`;
    outStats.innerHTML = '<span style="color:#ef4444;">❌ Sintaxi invàlida</span>';
    outNodes.textContent = 'Errors detectats';
  } else {
    errBox.style.display = 'none';
    succBox.style.display = 'block';
    succBox.innerHTML = '✅ <strong>XML Ben Format!</strong> Sintaxi vàlida i estructurada.';
    
    // Beautify
    const formatted = formatXmlString(input, ' '.repeat(indentSize));
    output.value = formatted;
    outStats.innerHTML = '<span style="color:#10b981;">✅ XML vàlid</span>';
    outNodes.textContent = `Nodes: ${xmlDoc.getElementsByTagName('*').length} elements`;
  }
}

function formatXmlString(xml, indent) {
  let formatted = '';
  let pad = 0;
  const clean = xml.replace(/(>)\s*(<)(\/*)/g, '$1\r\n$2$3').trim();
  clean.split('\r\n').forEach(line => {
    let indentDelta = 0;
    if (line.match(/.+<\/\w[^>]*>$/)) {
      indentDelta = 0;
    } else if (line.match(/^<\/\w/)) {
      if (pad > 0) pad -= 1;
    } else if (line.match(/^<\w[^>]*[^\/]>.*$/)) {
      indentDelta = 1;
    } else if (line.match(/^<[?!]/)) {
      indentDelta = 0;
    }
    formatted += indent.repeat(pad) + line + '\n';
    pad += indentDelta;
  });
  return formatted.trim();
}

function runXmlMinify() {
  const input = document.getElementById('xml-input').value;
  if (!input.trim()) return;
  const minified = input.replace(/>\s*</g, '><').trim();
  document.getElementById('xml-output').value = minified;
  showToast('⚡ XML Minificat en 1 línia!');
}

function clearXmlInput() {
  document.getElementById('xml-input').value = '';
  runXmlFormat();
}

function loadXmlSample(type) {
  if (type === 'valid') {
    document.getElementById('xml-input').value = `<?xml version="1.0" encoding="UTF-8"?>
<centre educatiu="IES Sant Vicent">
  <cicles>
    <cicle id="FPB-INFO" nivell="FP Bàsica">
      <nom>Informàtica d'Oficina</nom>
      <moduls>
        <modul codi="MMSCI" hores="200">Muntatge i Manteniment</modul>
        <modul codi="CIEN1" hores="160">Ciències Aplicades I</modul>
      </moduls>
    </cicle>
    <cicle id="DAW" nivell="Grau Superior">
      <nom>Desenvolupament d'Aplicacions Web</nom>
      <moduls>
        <modul codi="PROG" hores="256">Programació Java</modul>
      </moduls>
    </cicle>
  </cicles>
</centre>`;
  } else {
    document.getElementById('xml-input').value = `<?xml version="1.0"?>
<alumnat>
  <alumne id="1">
    <nom>Carla Martí</nom>
    <modul>Muntatge i Manteniment
    <!-- Error: falta tancar l'etiqueta </modul> abans de </alumne> -->
  </alumne>
</alumnat>`;
  }
  runXmlFormat();
}

// ----------------------------------------------------
// TOOL 3: SQL FORMATTER
// ----------------------------------------------------
function runSqlFormat() {
  const input = document.getElementById('sql-input').value;
  const output = document.getElementById('sql-output');
  const inStats = document.getElementById('sql-in-stats');
  inStats.textContent = `${input.length} caràcters`;

  if (!input.trim()) {
    output.value = '';
    return;
  }

  const keywords = [
    'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN',
    'FULL JOIN', 'CROSS JOIN', 'ON', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT',
    'OFFSET', 'INSERT INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE FROM', 'CREATE TABLE',
    'ALTER TABLE', 'DROP TABLE', 'PRIMARY KEY', 'FOREIGN KEY', 'REFERENCES', 'NOT NULL',
    'DEFAULT', 'UNIQUE', 'AS', 'DISTINCT', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END',
    'UNION ALL', 'UNION', 'EXISTS', 'IN', 'BETWEEN', 'LIKE', 'IS NULL', 'IS NOT NULL',
    'COUNT', 'AVG', 'SUM', 'MIN', 'MAX', 'ASC', 'DESC'
  ];

  let sql = input.replace(/\s+/g, ' ').trim();

  // Uppercase keywords using regex boundary
  keywords.forEach(kw => {
    const rx = new RegExp('\\b' + kw.replace(' ', '\\s+') + '\\b', 'gi');
    sql = sql.replace(rx, kw);
  });

  // Clause line breaks
  const majorClauses = [
    'SELECT', 'FROM', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'WHERE',
    'GROUP BY', 'HAVING', 'ORDER BY', 'LIMIT', 'SET', 'VALUES'
  ];

  majorClauses.forEach(cl => {
    const rx = new RegExp('\\b(' + cl + ')\\b', 'g');
    sql = sql.replace(rx, '\n$1');
  });

  // Indent fields and conditions
  let lines = sql.split('\n').filter(l => l.trim().length > 0);
  let indented = lines.map(line => {
    let trimmed = line.trim();
    if (trimmed.startsWith('SELECT') || trimmed.startsWith('FROM') ||
        trimmed.startsWith('WHERE') || trimmed.startsWith('GROUP BY') ||
        trimmed.startsWith('ORDER BY') || trimmed.startsWith('HAVING') ||
        trimmed.startsWith('LIMIT') || trimmed.startsWith('INSERT INTO') ||
        trimmed.startsWith('UPDATE') || trimmed.startsWith('DELETE')) {
      return trimmed;
    } else if (trimmed.startsWith('INNER JOIN') || trimmed.startsWith('LEFT JOIN') || trimmed.startsWith('RIGHT JOIN')) {
      return '  ' + trimmed;
    } else {
      return '    ' + trimmed;
    }
  }).join('\n');

  output.value = indented.trim();
}

function runSqlMinify() {
  const input = document.getElementById('sql-input').value;
  if (!input.trim()) return;
  document.getElementById('sql-output').value = input.replace(/\s+/g, ' ').trim();
  showToast('⚡ SQL compactat en 1 sola línia!');
}

function clearSqlInput() {
  document.getElementById('sql-input').value = '';
  document.getElementById('sql-output').value = '';
}

function loadSqlSample(type) {
  if (type === 'select') {
    document.getElementById('sql-input').value = `select a.id_alumne, a.nom, a.cognoms, c.nom as nom_cicle, avg(n.qualificacio) as nota_mitjana from alumnes a inner join matricules m on a.id_alumne = m.id_alumne inner join cicles c on m.id_cicle = c.id_cicle left join notes n on a.id_alumne = n.id_alumne where m.curs_academic = '2026/2027' and a.actiu = 1 group by a.id_alumne having avg(n.qualificacio) >= 5.0 order by nota_mitjana desc limit 25;`;
  } else {
    document.getElementById('sql-input').value = `create table matricules ( id_matricula int auto_increment primary key, id_alumne int not null, id_modul varchar(10) not null, curs_academic varchar(9) default '2026/2027', data_inscripcio date not null, foreign key (id_alumne) references alumnes(id_alumne) on delete cascade );`;
  }
  runSqlFormat();
}

// ----------------------------------------------------
// TOOL 4: NUMBER BASE CONVERTER
// ----------------------------------------------------
let currentBitValue = 255;

function onBaseChange(source, val) {
  val = val.trim();
  let num = 0;
  try {
    if (source === 'dec') num = parseInt(val, 10);
    else if (source === 'hex') num = parseInt(val, 16);
    else if (source === 'bin') num = parseInt(val.replace(/\s+/g, ''), 2);
    else if (source === 'oct') num = parseInt(val, 8);
  } catch (e) { num = 0; }

  if (isNaN(num)) num = 0;
  currentBitValue = num;
  updateAllBases(source);
}

function updateAllBases(skipSource) {
  const n = currentBitValue;
  if (skipSource !== 'dec') document.getElementById('base-dec').value = n.toString(10);
  if (skipSource !== 'hex') document.getElementById('base-hex').value = n.toString(16).toUpperCase();
  if (skipSource !== 'bin') document.getElementById('base-bin').value = (n >>> 0).toString(2);
  if (skipSource !== 'oct') document.getElementById('base-oct').value = n.toString(8);

  // Grouped bin
  const bin32 = (n >>> 0).toString(2).padStart(32, '0');
  const grouped = bin32.match(/.{1,4}/g).join(' ');
  document.getElementById('base-bin-grouped').textContent = grouped;

  // ASCII
  const lowestByte = n & 0xFF;
  const asciiChar = (lowestByte >= 32 && lowestByte <= 126) ? String.fromCharCode(lowestByte) : `(0x${lowestByte.toString(16).toUpperCase()})`;
  document.getElementById('base-ascii-val').textContent = asciiChar;

  renderBitGrid();
}

function renderBitGrid() {
  const container = document.getElementById('bit-grid-container');
  if (!container) return;
  container.innerHTML = '';
  const n = currentBitValue;

  for (let i = 31; i >= 0; i--) {
    const bitIsSet = ((n >>> i) & 1) === 1;
    const box = document.createElement('div');
    box.className = 'bit-box' + (bitIsSet ? ' active' : '');
    box.onclick = () => toggleBit(i);
    box.innerHTML = `<span class="bit-num">${i}</span><span class="bit-val">${bitIsSet ? 1 : 0}</span>`;
    container.appendChild(box);
  }
}

function toggleBit(index) {
  currentBitValue ^= (1 << index);
  currentBitValue = currentBitValue >>> 0;
  updateAllBases(null);
}

function setPresetBase(val) {
  currentBitValue = val;
  updateAllBases(null);
}

// ----------------------------------------------------
// TOOL 5: CRON EXPRESSION PARSER
// ----------------------------------------------------
function runCronParse() {
  const expr = document.getElementById('cron-input').value.trim();
  const parts = expr.split(/\s+/);
  const descEl = document.getElementById('cron-human-desc');
  const listEl = document.getElementById('cron-next-dates');

  if (parts.length < 5) {
    descEl.textContent = '⚠️ Expressió cron incompleta (es requereixen 5 camps separats per espai).';
    listEl.innerHTML = '';
    return;
  }

  const [min, hour, dom, mon, dow] = parts;
  let desc = 'S\'executa ';

  // Minutes
  if (min === '*') desc += 'cada minut';
  else if (min.startsWith('*/')) desc += `cada ${min.replace('*/', '')} minuts`;
  else if (min === '0') desc += 'a l\'inici de l\'hora (:00)';
  else desc += `al minut ${min}`;

  // Hours
  if (hour === '*') desc += '';
  else if (hour.startsWith('*/')) desc += `, cada ${hour.replace('*/', '')} hores`;
  else if (hour.includes('-')) desc += `, entre les ${hour.split('-')[0]}h i les ${hour.split('-')[1]}h`;
  else desc += `, a les ${hour.padStart(2, '0')}:${min.padStart(2, '0')}h`;

  // Days of Week
  const dows = { '0': 'diumenge', '1': 'dilluns', '2': 'dimarts', '3': 'dimecres', '4': 'dijous', '5': 'divendres', '6': 'dissabte', '7': 'diumenge' };
  if (dow === '*') desc += '';
  else if (dow === '1-5') desc += ', només de dilluns a divendres';
  else if (dow === '0,6' || dow === '6,0') desc += ', només els caps de setmana';
  else desc += `, els dies de la setmana (${dow})`;

  // Day of Month
  if (dom === '1') desc += ', el primer dia de cada mes';
  else if (dom !== '*') desc += `, el dia ${dom} del mes`;

  descEl.textContent = desc.charAt(0).toUpperCase() + desc.slice(1) + '.';

  // Simulate next 5 runs
  listEl.innerHTML = '';
  let now = new Date();
  for (let i = 1; i <= 5; i++) {
    let nextDate = new Date(now.getTime() + i * 15 * 60 * 1000);
    const li = document.createElement('li');
    li.style.cssText = 'padding: 8px 12px; background: rgba(15,23,42,0.03); border: 1px solid var(--border); border-radius: 6px; font-family: var(--md-code-font); font-size: 0.84rem; display: flex; justify-content: space-between;';
    li.innerHTML = `<span>Execució #${i}: <strong>${nextDate.toLocaleDateString('ca-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong></span> <span style="color:#2563eb;">${nextDate.toLocaleTimeString('ca-ES')}</span>`;
    listEl.appendChild(li);
  }
}

function setPresetCron(expr) {
  document.getElementById('cron-input').value = expr;
  runCronParse();
}

// ----------------------------------------------------
// TOOL 6: DATE CONVERTER & UNIX TIMESTAMP
// ----------------------------------------------------
function updateCurrentEpochTicker() {
  const el = document.getElementById('epoch-current-ticker');
  if (el) el.textContent = Math.floor(Date.now() / 1000);
}
setInterval(updateCurrentEpochTicker, 1000);
updateCurrentEpochTicker();

function copyCurrentEpoch() {
  const val = Math.floor(Date.now() / 1000);
  navigator.clipboard.writeText(val.toString()).then(() => showToast('📋 Epoch copiat: ' + val));
}

function setCurrentEpochToInput() {
  document.getElementById('epoch-input-val').value = Math.floor(Date.now() / 1000);
  runEpochToDate();
}

function runEpochToDate() {
  let val = document.getElementById('epoch-input-val').value;
  if (!val) {
    val = Math.floor(Date.now() / 1000);
    document.getElementById('epoch-input-val').value = val;
  }
  let ms = parseInt(val, 10);
  if (ms < 10000000000) ms *= 1000; // treat as seconds

  const d = new Date(ms);
  if (isNaN(d.getTime())) return;

  document.getElementById('epoch-res-local').textContent = d.toLocaleString('ca-ES', { timeZoneName: 'short' });
  document.getElementById('epoch-res-iso').textContent = d.toISOString();
  document.getElementById('epoch-res-utc').textContent = d.toUTCString();

  const diffSec = Math.round((d.getTime() - Date.now()) / 1000);
  let rel = '';
  if (Math.abs(diffSec) < 60) rel = 'Ara mateix';
  else if (diffSec < 0) rel = `Fa ${Math.abs(Math.round(diffSec / 60))} minuts (${Math.abs(Math.round(diffSec / 3600))} hores)`;
  else rel = `D'ací a ${Math.round(diffSec / 60)} minuts (${Math.round(diffSec / 3600)} hores)`;
  document.getElementById('epoch-res-rel').textContent = rel;
}

function runDateToEpoch() {
  const val = document.getElementById('date-picker-val').value;
  if (!val) return;
  const d = new Date(val);
  if (isNaN(d.getTime())) return;

  const sec = Math.floor(d.getTime() / 1000);
  document.getElementById('date-res-sec').textContent = sec;
  document.getElementById('date-res-ms').textContent = d.getTime();
  document.getElementById('date-res-day').textContent = d.toLocaleDateString('ca-ES', { weekday: 'long' });
}

// ----------------------------------------------------
// TOOL 7: BASE64 TEXT ENCODER / DECODER (UTF-8 SAFE)
// ----------------------------------------------------
function toBase64Utf8(str) {
  const bytes = new TextEncoder().encode(str);
  const binString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
  return btoa(binString);
}

function fromBase64Utf8(base64) {
  const binString = atob(base64.trim());
  const bytes = Uint8Array.from(binString, (m) => m.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function runBase64Encode() {
  const plain = document.getElementById('b64-plain').value;
  const encodedEl = document.getElementById('b64-encoded');
  const errBox = document.getElementById('b64-error-box');
  document.getElementById('b64-plain-stats').textContent = `${plain.length} caràcters`;

  try {
    const res = toBase64Utf8(plain);
    encodedEl.value = res;
    errBox.style.display = 'none';
    document.getElementById('b64-enc-stats').textContent = `${res.length} caràcters Base64`;
  } catch (err) {
    errBox.style.display = 'block';
    errBox.textContent = '❌ Error de codificació: ' + err.message;
  }
}

function runBase64Decode() {
  const b64 = document.getElementById('b64-encoded').value.trim();
  const plainEl = document.getElementById('b64-plain');
  const errBox = document.getElementById('b64-error-box');

  if (!b64) return;
  try {
    const res = fromBase64Utf8(b64);
    plainEl.value = res;
    errBox.style.display = 'none';
    document.getElementById('b64-plain-stats').textContent = `${res.length} caràcters`;
  } catch (err) {
    errBox.style.display = 'block';
    errBox.textContent = '❌ Error de descodificació: La cadena no és un format Base64 vàlid.';
  }
}

function clearBase64Text() {
  document.getElementById('b64-plain').value = '';
  document.getElementById('b64-encoded').value = '';
  document.getElementById('b64-error-box').style.display = 'none';
}

// ----------------------------------------------------
// TOOL 8: BASE64 IMAGE ENCODER / DECODER
// ----------------------------------------------------
function handleB64FileDrop(e) {
  e.preventDefault();
  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    handleB64FileSelect(e.dataTransfer.files[0]);
  }
}

function handleB64FileSelect(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUri = e.target.result;
    document.getElementById('b64-img-result-wrap').style.display = 'grid';
    document.getElementById('b64-preview-img').src = dataUri;
    document.getElementById('b64-uri-output').value = dataUri;

    const sizeKb = (file.size / 1024).toFixed(2);
    const b64Kb = (dataUri.length / 1024).toFixed(2);
    document.getElementById('b64-img-meta').textContent = `${file.name} · Original: ${sizeKb} KB · Base64: ${b64Kb} KB (+33%)`;
    showToast('🖼️ Imatge convertida a Base64!');
  };
  reader.readAsDataURL(file);
}

function copyImgHtmlTag() {
  const uri = document.getElementById('b64-uri-output').value;
  if (!uri) return;
  const tag = `<img src="${uri}" alt="Imatge incrustada" />`;
  navigator.clipboard.writeText(tag).then(() => showToast('📋 Etiqueta <img> copiada!'));
}

// ----------------------------------------------------
// TOOL 9: JWT DECODER
// ----------------------------------------------------
function runJwtDecode() {
  const jwt = document.getElementById('jwt-input').value.trim();
  const headerOut = document.getElementById('jwt-header-out');
  const payloadOut = document.getElementById('jwt-payload-out');
  const banner = document.getElementById('jwt-status-banner');

  if (!jwt) {
    headerOut.value = '';
    payloadOut.value = '';
    banner.style.display = 'none';
    return;
  }

  const parts = jwt.split('.');
  if (parts.length < 2) {
    banner.style.display = 'block';
    banner.className = 'devtoys-alert devtoys-alert-error';
    banner.innerHTML = '❌ Format JWT incorrecte (ha de contenir almenys Capçalera i Payload separats per punt).';
    headerOut.value = '';
    payloadOut.value = '';
    return;
  }

  try {
    const headerJson = JSON.parse(fromBase64Utf8(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
    const payloadJson = JSON.parse(fromBase64Utf8(parts[1].replace(/-/g, '+').replace(/_/g, '/')));

    headerOut.value = JSON.stringify(headerJson, null, 2);
    payloadOut.value = JSON.stringify(payloadJson, null, 2);

    // Check expiration
    banner.style.display = 'block';
    if (payloadJson.exp) {
      const expDate = new Date(payloadJson.exp * 1000);
      const isExpired = Date.now() > expDate.getTime();
      if (isExpired) {
        banner.className = 'devtoys-alert devtoys-alert-error';
        banner.innerHTML = `⚠️ <strong>Token Caducat:</strong> Va expirar el ${expDate.toLocaleString('ca-ES')}.`;
      } else {
        banner.className = 'devtoys-alert devtoys-alert-success';
        banner.innerHTML = `✅ <strong>Token Actiu & Vàlid:</strong> Expira el ${expDate.toLocaleString('ca-ES')}.`;
      }
    } else {
      banner.className = 'devtoys-alert devtoys-alert-info';
      banner.innerHTML = 'ℹ️ <strong>Token vàlid:</strong> Sense reclamació d\'expiració (exp).';
    }
  } catch (err) {
    banner.style.display = 'block';
    banner.className = 'devtoys-alert devtoys-alert-error';
    banner.innerHTML = '❌ Error en descodificar les seccions del token: ' + err.message;
  }
}

function loadJwtSample() {
  // Sample JWT with 24h expiration from now
  const exp = Math.floor(Date.now() / 1000) + 86400;
  const header = toBase64Utf8(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = toBase64Utf8(JSON.stringify({
    sub: "alumne-fpb-042",
    nom: "Carla Martí",
    rols: ["estudiant", "delegat"],
    centre: "IES Sant Vicent",
    iat: Math.floor(Date.now() / 1000),
    exp: exp
  }));
  const sig = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk";
  document.getElementById('jwt-input').value = `${header}.${payload}.${sig}`;
  runJwtDecode();
}

function clearJwtInput() {
  document.getElementById('jwt-input').value = '';
  runJwtDecode();
}

// ----------------------------------------------------
// TOOL 10: URL & HTML ENTITIES
// ----------------------------------------------------
function runUrlAuto() {
  runUrlEncode();
}

function runUrlEncode() {
  const val = document.getElementById('url-input').value;
  document.getElementById('url-output').value = encodeURIComponent(val);
}

function runUrlDecode() {
  const val = document.getElementById('url-output').value || document.getElementById('url-input').value;
  try {
    document.getElementById('url-output').value = decodeURIComponent(val);
  } catch (e) {
    document.getElementById('url-output').value = 'Error al descodificar URL';
  }
}

function runHtmlEntitiesEncode() {
  const val = document.getElementById('url-input').value;
  const encoded = val.replace(/&/g, '&amp;')
                     .replace(/</g, '&lt;')
                     .replace(/>/g, '&gt;')
                     .replace(/"/g, '&quot;')
                     .replace(/'/g, '&#39;');
  document.getElementById('url-output').value = encoded;
}

function clearUrlHtml() {
  document.getElementById('url-input').value = '';
  document.getElementById('url-output').value = '';
}

// ----------------------------------------------------
// TOOL 11: HASH GENERATOR & CHECKSUM
// ----------------------------------------------------
async function runHashGen() {
  const text = document.getElementById('hash-input-text').value;
  if (!text) {
    document.getElementById('hash-md5').value = '';
    document.getElementById('hash-sha1').value = '';
    document.getElementById('hash-sha256').value = '';
    document.getElementById('hash-sha512').value = '';
    return;
  }

  // MD5 via pure JS
  document.getElementById('hash-md5').value = md5(text);

  // SHA via Web Crypto API
  const msgUint8 = new TextEncoder().encode(text);
  
  // SHA-1
  const bufSha1 = await crypto.subtle.digest('SHA-1', msgUint8);
  document.getElementById('hash-sha1').value = bufferToHex(bufSha1);

  // SHA-256
  const bufSha256 = await crypto.subtle.digest('SHA-256', msgUint8);
  document.getElementById('hash-sha256').value = bufferToHex(bufSha256);

  // SHA-512
  const bufSha512 = await crypto.subtle.digest('SHA-512', msgUint8);
  document.getElementById('hash-sha512').value = bufferToHex(bufSha512);

  runHashCompare();
}

function bufferToHex(buffer) {
  return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function runHashCompare() {
  const expected = document.getElementById('hash-compare-input').value.trim().toLowerCase();
  const resBox = document.getElementById('hash-compare-result');
  if (!expected) {
    resBox.style.display = 'none';
    return;
  }

  const hashes = [
    document.getElementById('hash-md5').value.toLowerCase(),
    document.getElementById('hash-sha1').value.toLowerCase(),
    document.getElementById('hash-sha256').value.toLowerCase(),
    document.getElementById('hash-sha512').value.toLowerCase()
  ];

  resBox.style.display = 'block';
  if (hashes.includes(expected)) {
    resBox.className = 'devtoys-alert devtoys-alert-success';
    resBox.innerHTML = '✅ <strong>Concordança exacta!</strong> El checksum coincideix plenament.';
  } else {
    resBox.className = 'devtoys-alert devtoys-alert-error';
    resBox.innerHTML = '❌ <strong>Diferència detectada!</strong> El checksum no coincideix amb cap dels hashes generats.';
  }
}

function clearHashInput() {
  document.getElementById('hash-input-text').value = '';
  runHashGen();
}

// ----------------------------------------------------
// TOOL 12: UUID / GUID GENERATOR (v4)
// ----------------------------------------------------
function runUuidGen() {
  const count = parseInt(document.getElementById('uuid-count').value, 10);
  const hyphens = document.getElementById('uuid-hyphens').checked;
  const uppercase = document.getElementById('uuid-uppercase').checked;
  const braces = document.getElementById('uuid-braces').checked;

  let uuids = [];
  for (let i = 0; i < count; i++) {
    let u = crypto.randomUUID();
    if (!hyphens) u = u.replace(/-/g, '');
    if (uppercase) u = u.toUpperCase();
    if (braces) u = '{' + u + '}';
    uuids.push(u);
  }

  document.getElementById('uuid-output').value = uuids.join('\n');
  document.getElementById('uuid-stats-badge').textContent = `${count} UUID${count > 1 ? 's' : ''}`;
}

// ----------------------------------------------------
// TOOL 13: REGEX TESTER
// ----------------------------------------------------
function runRegexTest() {
  const pattern = document.getElementById('regex-pattern').value;
  const flags = document.getElementById('regex-flags').value;
  const text = document.getElementById('regex-test-text').value;
  const highlightView = document.getElementById('regex-highlight-view');
  const countBadge = document.getElementById('regex-match-count');
  const groupsTable = document.getElementById('regex-groups-table');

  if (!pattern) {
    highlightView.textContent = text;
    countBadge.textContent = '0 coincidències';
    groupsTable.innerHTML = '';
    return;
  }

  try {
    const rx = new RegExp(pattern, flags);
    let matchCount = 0;
    let matches = [];

    // Find all matches
    if (flags.includes('g')) {
      let m;
      while ((m = rx.exec(text)) !== null) {
        matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
        matchCount++;
        if (m.index === rx.lastIndex) rx.lastIndex++;
      }
    } else {
      let m = text.match(rx);
      if (m) {
        matches.push({ match: m[0], index: m.index || 0, groups: m.slice(1) });
        matchCount = 1;
      }
    }

    countBadge.textContent = `${matchCount} coincidència${matchCount !== 1 ? 's' : ''}`;

    // Highlight matches in text
    let highlightedHtml = '';
    let lastIndex = 0;
    matches.forEach(item => {
      highlightedHtml += escapeHtml(text.substring(lastIndex, item.index));
      highlightedHtml += `<mark style="background:#fef08a; color:#854d0e; padding:2px 4px; border-radius:4px; font-weight:700;">${escapeHtml(item.match)}</mark>`;
      lastIndex = item.index + item.match.length;
    });
    highlightedHtml += escapeHtml(text.substring(lastIndex));
    highlightView.innerHTML = highlightedHtml;

    // Groups breakdown table
    if (matches.length > 0) {
      let tableHtml = '<table style="width:100%; border-collapse:collapse; font-size:0.8rem; border:1px solid var(--border); margin-top:10px;">';
      tableHtml += '<tr style="background:rgba(15,23,42,0.05); text-align:left;"><th style="padding:6px 10px;">#</th><th style="padding:6px 10px;">Coincidència</th><th style="padding:6px 10px;">Posició</th></tr>';
      matches.forEach((item, idx) => {
        tableHtml += `<tr style="border-top:1px solid var(--border);"><td style="padding:6px 10px;">${idx + 1}</td><td style="padding:6px 10px; font-weight:700; color:#2563eb;">${escapeHtml(item.match)}</td><td style="padding:6px 10px;">Índex ${item.index}</td></tr>`;
      });
      tableHtml += '</table>';
      groupsTable.innerHTML = tableHtml;
    } else {
      groupsTable.innerHTML = '';
    }

  } catch (err) {
    highlightView.innerHTML = `<span style="color:#ef4444;">❌ Patró RegEx invàlid: ${err.message}</span>`;
    countBadge.textContent = 'Error';
    groupsTable.innerHTML = '';
  }
}

function setPresetRegex(type) {
  const presets = {
    'email': { pat: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}', flags: 'g', text: 'Envia la tasca a professor@edu.gva.es o a contacte@ies.cat.' },
    'dni': { pat: '\\b[0-9]{8}[A-Z]\\b', flags: 'g', text: 'DNI de prova: 12345678Z i 87654321A.' },
    'ipv4': { pat: '\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b', flags: 'g', text: 'IP de porta d\'enllaç: 192.168.1.1, servidor DNS: 8.8.8.8.' },
    'date': { pat: '\\b(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/([0-9]{4})\\b', flags: 'g', text: 'Inici del curs: 11/09/2026, avaluació: 22/12/2026.' },
    'url': { pat: 'https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)', flags: 'g', text: 'Visita https://github.com o http://portal.edu.gva.es/curs.' }
  };
  const p = presets[type];
  if (p) {
    document.getElementById('regex-pattern').value = p.pat;
    document.getElementById('regex-flags').value = p.flags;
    document.getElementById('regex-test-text').value = p.text;
    runRegexTest();
  }
}

function clearRegexInput() {
  document.getElementById('regex-test-text').value = '';
  runRegexTest();
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// ----------------------------------------------------
// TOOL 14: TEXT DIFF CHECKER
// ----------------------------------------------------
function runTextDiff() {
  const t1 = document.getElementById('diff-text-1').value.split('\n');
  const t2 = document.getElementById('diff-text-2').value.split('\n');
  const resultView = document.getElementById('diff-result-view');
  const statsEl = document.getElementById('diff-stats');

  let html = '';
  let maxLines = Math.max(t1.length, t2.length);
  let changes = 0;

  for (let i = 0; i < maxLines; i++) {
    const l1 = t1[i] !== undefined ? t1[i] : null;
    const l2 = t2[i] !== undefined ? t2[i] : null;

    if (l1 === l2) {
      html += `<div style="padding: 2px 6px; color: var(--text-color); opacity: 0.85;">  ${escapeHtml(l1)}</div>`;
    } else {
      changes++;
      if (l1 !== null) {
        html += `<div style="background: rgba(239, 68, 68, 0.15); color: #dc2626; padding: 2px 6px; border-left: 3px solid #ef4444;">- ${escapeHtml(l1)}</div>`;
      }
      if (l2 !== null) {
        html += `<div style="background: rgba(16, 185, 129, 0.15); color: #059669; padding: 2px 6px; border-left: 3px solid #10b981;">+ ${escapeHtml(l2)}</div>`;
      }
    }
  }

  resultView.innerHTML = html || 'Cap diferència trobada.';
  statsEl.textContent = `${changes} línies modificades`;
}

function loadDiffSample() {
  document.getElementById('diff-text-1').value = `// Configuració V1
const PORT = 8080;
const DB_HOST = "localhost";
const DEBUG = true;`;
  document.getElementById('diff-text-2').value = `// Configuració V2 (Producció)
const PORT = 443;
const DB_HOST = "db.gva.internal";
const DEBUG = false;
const SSL = true;`;
  runTextDiff();
}

// INITIALIZATION ROUTER ON LOAD
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && toolTitles[hash]) {
    devToysSwitchTool(hash);
  } else {
    devToysSwitchTool('all');
  }
});
</script>
