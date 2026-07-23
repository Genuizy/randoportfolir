(function () {
  'use strict';

  // --- Helper Functions & Sanitization ---
  function sanitizePlatformUrl(url) {
    if (!url) return '';
    try {
      const parsed = new URL(url);
      return ['http:', 'https:'].includes(parsed.protocol) ? parsed.origin : '';
    } catch (e) {
      return '';
    }
  }

  function sanitizeAppId(appId) {
    if (!appId) return '';
    return String(appId).replace(/[^a-zA-Z0-9_-]/g, '');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- SVG Icons ---
  const XIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  const Base44Logo = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  // --- Analytics Tracking ---
  function trackBadgeEvent(platformUrl, appId, eventName) {
    if (!platformUrl || !appId) return;
    const endpoint = `${platformUrl}/api/apps/public/badge/${appId}/events`;
    
    try {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: eventName, timestamp: new Date().toISOString() }),
        keepalive: true
      }).catch(() => {});
    } catch (e) {
      // Silently swallow analytics errors
    }
  }

  // --- Main Badge Initialization ---
  function initBadge() {
    const currentScript = document.currentScript || document.querySelector('script[data-app-id]');
    if (!currentScript) return;

    const rawAppId = currentScript.getAttribute('data-app-id');
    const rawPlatformUrl = currentScript.getAttribute('data-platform-url') || 'https://base44.com';
    const allowClone = currentScript.getAttribute('data-allow-clone') === 'true';

    const appId = sanitizeAppId(rawAppId);
    const platformUrl = sanitizePlatformUrl(rawPlatformUrl);

    if (!appId || !platformUrl) return;

    // Track initial display
    trackBadgeEvent(platformUrl, appId, 'badge_shown');

    // Container Element
    const container = document.createElement('div');
    container.id = 'base44-badge-root';
    container.style.cssText = `
      position: fixed;
      bottom: 16px;
      right: 16px;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    `;

    // Badge Trigger Button
    const badge = document.createElement('div');
    badge.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
      background: #0f172a;
      color: #ffffff;
      padding: 8px 12px;
      border-radius: 9999px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      user-select: none;
    `;

    const badgeText = allowClone ? 'Edit with Base44' : 'Made with Base44';

    badge.innerHTML = `
      <span style="display: flex; align-items: center; color: #6366f1;">${Base44Logo}</span>
      <span>${badgeText}</span>
      <button id="base44-dismiss-btn" style="
        background: transparent;
        border: none;
        color: #94a3b8;
        cursor: pointer;
        padding: 2px;
        margin-left: 4px;
        display: flex;
        align-items: center;
        border-radius: 50%;
      ">${XIcon}</button>
    `;

    badge.addEventListener('mouseenter', () => {
      badge.style.transform = 'translateY(-2px)';
      badge.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.35)';
    });

    badge.addEventListener('mouseleave', () => {
      badge.style.transform = 'translateY(0)';
      badge.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.25)';
    });

    // Dismiss Handler
    const dismissBtn = badge.querySelector('#base44-dismiss-btn');
    dismissBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      trackBadgeEvent(platformUrl, appId, 'badge_dismissed');
      container.remove();
    });

    // Open Modal Handler
    badge.addEventListener('click', () => {
      trackBadgeEvent(platformUrl, appId, 'badge_clicked');
      createModal(platformUrl, appId, allowClone);
    });

    container.appendChild(badge);
    document.body.appendChild(container);
  }

  // --- Modal Generator ---
  function createModal(platformUrl, appId, allowClone) {
    const existingModal = document.getElementById('base44-badge-modal');
    if (existingModal) existingModal.remove();

    const overlay = document.createElement('div');
    overlay.id = 'base44-badge-modal';
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(4px);
      z-index: 1000000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
      background: #ffffff;
      border-radius: 16px;
      max-width: 400px;
      width: 100%;
      padding: 24px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      position: relative;
      color: #1e293b;
    `;

    const cloneButtonHtml = allowClone ? `
      <button id="base44-clone-btn" style="
        width: 100%;
        background: #4f46e5;
        color: white;
        border: none;
        padding: 10px 16px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      ">
        Clone This App
      </button>
    ` : '';

    modal.innerHTML = `
      <button id="base44-modal-close" style="
        position: absolute;
        top: 16px;
        right: 16px;
        background: transparent;
        border: none;
        cursor: pointer;
        color: #64748b;
      ">${XIcon}</button>

      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
        <span style="color: #4f46e5;">${Base44Logo}</span>
        <h3 style="margin: 0; font-size: 18px; font-weight: 700;">Base44 Platform</h3>
      </div>

      <p style="color: #475569; font-size: 14px; line-height: 1.5; margin-bottom: 20px;">
        Build, deploy, and scale web applications visually without writing complex boilerplate code.
      </p>

      ${cloneButtonHtml}

      <button id="base44-visit-btn" style="
        width: 100%;
        background: #f1f5f9;
        color: #334155;
        border: none;
        padding: 10px 16px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
      ">
        Go to Base44
      </button>

      <div id="base44-admin-footer"></div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Event Handlers
    const closeModal = () => {
      trackBadgeEvent(platformUrl, appId, 'modal_closed');
      overlay.remove();
    };

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    modal.querySelector('#base44-modal-close').addEventListener('click', closeModal);

    modal.querySelector('#base44-visit-btn').addEventListener('click', () => {
      trackBadgeEvent(platformUrl, appId, 'modal_go_to_base44');
      window.open(platformUrl, '_blank', 'noopener,noreferrer');
    });

    if (allowClone) {
      const cloneBtn = modal.querySelector('#base44-clone-btn');
      cloneBtn.addEventListener('click', () => {
        trackBadgeEvent(platformUrl, appId, 'modal_clone_app');
        cloneBtn.innerText = 'Redirecting...';
        cloneBtn.style.opacity = '0.7';
        cloneBtn.disabled = true;

        const cloneUrl = `${platformUrl}/remix-app/${escapeHtml(appId)}`;
        window.open(cloneUrl, '_blank', 'noopener,noreferrer');
      });
    }

    // Check admin permissions
    checkAdminAndShowFooter(modal.querySelector('#base44-admin-footer'), platformUrl, appId);
  }

  // --- Admin Footer Check ---
  function checkAdminAndShowFooter(footerContainer, platformUrl, appId) {
    try {
      const token = localStorage.getItem('base44_auth_token') || localStorage.getItem('authToken');
      if (!token) return;

      // Basic JWT payload extraction
      const base64Url = token.split('.')[1];
      if (!base64Url) return;

      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(window.atob(base64));

      if (payload && (payload.role === 'admin' || payload.isAdmin)) {
        footerContainer.innerHTML = `
          <div style="
            margin-top: 16px;
            padding-top: 12px;
            border-top: 1px solid #e2e8f0;
            font-size: 12px;
            color: #64748b;
            text-align: center;
          ">
            <span>You are an admin of this app. </span>
            <a href="${platformUrl}/apps/${escapeHtml(appId)}/settings" target="_blank" style="color: #4f46e5; text-decoration: underline;">
              Manage Badge Settings
            </a>
          </div>
        `;
      }
    } catch (e) {
      // Swallow decoding errors quietly
    }
  }

  // DOM Bootstrapping
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBadge);
  } else {
    initBadge();
  }
})();
