(function () {
  "use strict";
  // A shared passcode hides editing tools in the interface.
  // GitHub Pages is public and this does not protect source files.
  const PASSWORD = "G7Q5-M5WB-VKNN-ZVJP";
  const STORAGE_KEY = "pkxd_editor_team_access_v3";
  const FLAG = "unlocked-v3";
  function isUnlocked() {
    try { return localStorage.getItem(STORAGE_KEY) === FLAG; }
    catch (_) { return false; }
  }
  async function unlock(text) {
    if (String(text || "").trim() !== PASSWORD) return false;
    try { localStorage.setItem(STORAGE_KEY, FLAG); return true; }
    catch (_) { return false; }
  }
  function lock() {
    try { localStorage.removeItem(STORAGE_KEY); }
    catch (_) {}
  }
  window.PKXDEditorAccess = Object.freeze({ storageKey:STORAGE_KEY, isUnlocked, unlock, lock });
})();
