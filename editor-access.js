(function(){
"use strict";
const HASH="cd2dc083e86942701a3ac93bf4d4b8870c009ff555d3c43a39b6a397ac76086b";
const STORAGE_KEY="pkxd_editor_team_access_v3";
const SESSION_KEY="pkxd_editor_post_password_session";
async function digest(text){
 const bytes=new TextEncoder().encode(String(text||"").trim());
 const hash=await crypto.subtle.digest("SHA-256",bytes);
 return [...new Uint8Array(hash)].map(x=>x.toString(16).padStart(2,"0")).join("");
}
function isUnlocked(){
 try {return localStorage.getItem(STORAGE_KEY)==="unlocked-v3";}
 catch(e){return false;}
}
async function unlock(password){
 if(await digest(password)!==HASH)return false;
 try{
  localStorage.setItem(STORAGE_KEY,"unlocked-v3");
  sessionStorage.setItem(SESSION_KEY,String(password).trim());
  return true;
 }catch(e){return false;}
}
function lock(){
 try{localStorage.removeItem(STORAGE_KEY);sessionStorage.removeItem(SESSION_KEY);}catch(e){}
}
function getSessionPassword(){
 try{return sessionStorage.getItem(SESSION_KEY)||"";}catch(e){return "";}
}
window.PKXDEditorAccess=Object.freeze({storageKey:STORAGE_KEY,isUnlocked,unlock,lock,getSessionPassword});
})();