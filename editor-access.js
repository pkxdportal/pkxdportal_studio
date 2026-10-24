(function () {
  "use strict";
  const STORAGE_KEY = "pkxd_portal_editor_access_v2";
  // Password verification is local and provides only a convenient UI gate.
  // GitHub Pages is public: this is not server-side access control.
  const PASSWORD_HASH = "cd2dc083e86942701a3ac93bf4d4b8870c009ff555d3c43a39b6a397ac76086b";
  async function sha256(value) {
    const bytes = new TextEncoder().encode(value.trim());
    const hash = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2, "0")).join("");
  }
  function isUnlocked() {
    try { return localStorage.getItem(STORAGE_KEY) === PASSWORD_HASH; }
    catch (_) { return false; }
  }
  async function unlock(password) {
    const supplied = await sha256(password);
    if (supplied !== PASSWORD_HASH) return false;
    try { localStorage.setItem(STORAGE_KEY, PASSWORD_HASH); }
    catch (_) { return false; }
    return true;
  }
  function lock() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
  }
  window.PKXDEditorAccess = Object.freeze({ storageKey: STORAGE_KEY, isUnlocked, unlock, lock });
})();
