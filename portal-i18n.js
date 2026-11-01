(function(){
"use strict";
const KEY="pkxd-portal-language-v1";
const ruToEn={"Посты и новости":"Posts & News","Вход для владельцев":"Owner login","Выйти из редакторов":"Log out of editors","Инструменты владельца":"Owner tools","УПРАВЛЕНИЕ":"MANAGEMENT","Правила, сундуки, аватарки и публикации. Доступ по паролю.":"Rules, chests, avatars and posts. Password access.","04 ИНСТРУМЕНТА":"04 TOOLS","Студия правил":"Rules Studio","Меняй карточки правил и сохраняй изображения.":"Edit rules cards and download images.","ОТКРЫТЬ":"OPEN","Конструктор сундуков":"Chest Builder","Собирай шаблоны и серии карточек с фото.":"Create templates and batches of photo cards.","СОЗДАТЬ":"CREATE","Редактор аватарок":"Avatar Editor","Фотографии, рамки, эффекты и текст.":"Photos, frames, effects and text.","Управление постами":"Manage Posts","Новые публикации и изменение существующих.":"Create and update posts.","РЕДАКТИРОВАТЬ":"EDIT","Поиск по постам...":"Search posts...","Все категории":"All categories","Закреплённые":"Pinned posts","Все посты":"All posts","Закреплено":"Pinned","Помощь порталу":"Portal Help","Главное":"Main","Новости":"News","Общее":"General","Без названия":"Untitled","Ничего не найдено.":"No posts found.","Новый пост":"New post","Заголовок":"Title","Адрес поста (slug)":"Post URL (slug)","Краткое описание":"Short description","Заголовок поста":"Post title","Краткий текст для карточки":"Short description for the card","Категория":"Category","Дата":"Date","Картинка поста":"Post image","Картинка поста: ссылка или путь assets/posts/...":"Post image: URL or assets/posts/... path","Загрузить":"Upload","Убрать":"Remove","Текст поста":"Post content","Текст поста. Каждая новая строка станет отдельным абзацем.":"Post text. Each new line becomes a paragraph.","Отмена":"Cancel","Сохранить":"Save","Закрепить пост":"Pin post","Закрепить публикацию":"Pin post","Вход в редакторы":"Editor login","Введи пароль команды. После входа откроются три редактора.":"Enter the team password to unlock the editors.","Пароль":"Password","Пароль редакторов":"Editor password","Открыть редакторы":"Open editors","Неверный пароль.":"Incorrect password.","Ошибка входа. Обнови страницу.":"Login error. Reload the page.","← На главную":"← Home","Правила":"Rules","Сундуки":"Chests","Аватарки":"Avatars","Посты":"Posts","← Вернуться на главную":"← Back to home","Управление публикациями":"Post Management","Закрыть редакторы":"Close editors","Используй общий пароль редакторов. GitHub-аккаунт не требуется.":"Use the shared editor password. No GitHub account required.","Пароль команды":"Team password","Войти":"Log in","Проверка сервера публикаций...":"Checking publishing server...","Публикации":"Posts","+ Новый пост":"+ New post","Изменения в черновиках сохраняются только в твоём браузере. Для публикации на сайте требуется подключённый сервер записи.":"Drafts are saved only in your browser. Publishing to the website requires a connected server.","Загрузить картинку с компьютера":"Upload an image from your device","Выбранная картинка отправится на сервер при публикации.":"The selected image will be uploaded when the post is published.","Текст поста, отдельные абзацы с новой строки":"Post text, one paragraph per line","Напиши текст публикации...":"Write your post here...","Пароль для записи на сервер":"Password for publishing","Пароль команды (понадобится при публикации)":"Team password (required to publish)","Сохранить черновик":"Save draft","Опубликовать на сайте":"Publish to website","Удалить публикацию":"Delete post","Сохранение черновика не меняет сайт. Кнопка публикации работает только после настройки серверного API.":"Saving a draft does not update the website. Publishing works after the server API is configured.","Черновик сохранён в браузере. Сайт пока не изменился.":"Draft saved in this browser. The website has not changed.","Сервер публикаций готов. Можно сохранять посты на сайт.":"Publishing server is ready. You can publish posts.","Сервер публикаций ещё не настроен. Можно создавать локальные черновики.":"Publishing server is not configured yet. You can save local drafts.","Сервер публикаций недоступен. Пока доступны только локальные черновики.":"Publishing server unavailable. Only local drafts can be saved.","Публикация пока невозможна: сервер не настроен. Черновик сохранён локально.":"Publishing unavailable: the server is not configured. Draft saved locally.","Заполни заголовок и адрес поста.":"Enter a title and post URL.","Заполни название и адрес поста.":"Enter the post title and URL.","Картинка выбрана. Она загрузится вместе с публикацией.":"Image selected. It will be uploaded with the post.","Черновик сохранён в браузере.":"Draft saved in the browser.","Публикация удалена с сервера.":"Post deleted from the server.","Не удалось загрузить публикации:":"Could not load posts:","Опубликовано на сайте. Изменения появятся после обновления GitHub Pages.":"Published. Changes will appear after GitHub Pages updates.","Не опубликовано:":"Not published:","Не удалось удалить:":"Could not delete:","Неверный пароль":"Incorrect password","Редактирование поста":"Edit post"," · черновик":" · draft","← Назад":"← Back","Автор:":"Author:","❤️ Нравится":"❤️ Like","💖 Лайк поставлен":"💖 Liked","🔗 Копировать ссылку":"🔗 Copy link","✅ Ссылка скопирована":"✅ Link copied","Не удалось скопировать ссылку":"Could not copy the link","Лайков:":"Likes:","Правила действуют только в наших чатах":"Rules apply only in our chats","Вернуться к публикациям":"Back to posts","Редакторы PK XD PORTAL":"PK XD PORTAL Editors","Введите общий пароль. Доступ к GitHub не требуется.":"Enter the shared password. No GitHub account required.","Неверный пароль. Попробуй ещё раз.":"Incorrect password. Try again.","Ошибка проверки пароля. Обнови страницу.":"Password check failed. Reload the page.","Спам":"Spam","Мут":"Mute","Варн":"Warn","Бан":"Ban","Портал":"Portal","Выбрать":"Select","Настройки":"Settings","Назад":"Back","Готово":"Done","Удалить":"Delete","Добавить":"Add","Скачать":"Download","Поделиться":"Share","Сохранить в галерею":"Save to gallery","Обновить":"Refresh","Сбросить":"Reset","Подтвердить":"Confirm","Применить":"Apply","Выбрать фон":"Choose background","Убрать фон":"Remove background","Цвет рамок":"Frame color","Пипетка":"Eyedropper","Сохранить в «Мои шаблоны»":"Save to My Templates","Удалить шаблон":"Delete template","Мои шаблоны":"My templates","Создать шаблон":"Create template","Новый дизайн с нуля":"Start a new design","Открыть сохранённые":"Open saved templates","Хранятся на этом устройстве":"Stored on this device","Изменения сохраняются автоматически":"Changes save automatically","Фотографии":"Photos","Добавь фотографии":"Add photos","Выбрать фотографии":"Choose photos","Выбрать все":"Select all","Новые фото":"New photos","Создать карточки":"Generate cards","Готовые карточки":"Finished cards","Добавить окно":"Add slot","Удалить окно":"Delete slot","Окна":"Slots","Выбранное окно":"Selected slot","Добавить изображение":"Add image","Объект":"Object","Рамка":"Frame","Текст":"Text","Эффекты":"Effects","Картинки":"Images","Слои":"Layers","Предпросмотр":"Preview","Загрузить фото":"Upload photo","Сохранить шаблон":"Save template","Случайный стиль":"Random style","Скачать PNG":"Download PNG","Яркость":"Brightness","Прозрачность":"Opacity","ДОБРО ПОЖАЛОВАТЬ":"WELCOME"};
const enToRu=Object.create(null);
for(const [ru,en] of Object.entries(ruToEn)) if(!(en in enToRu))enToRu[en]=ru;
let lang="ru";try{lang=localStorage.getItem(KEY)==="en"?"en":"ru";}catch(e){}
const connected=new WeakSet();
let postTranslations={};
const isEditable=el=>!!el?.closest('script,style,noscript,textarea,pre,code,[contenteditable="true"],[data-no-translate]');
function translate(t,language=lang){
 if(!t)return t;
 const trim=String(t).trim();
 if(!trim)return t;
 const map=language==="en"?ruToEn:enToRu;
 let result=map[trim];
 if(!result){
  let m;
  if((m=trim.match(/^Лайков:\s*(\d+)$/)))result="Likes: "+m[1];
  if((m=trim.match(/^Likes:\s*(\d+)$/)) && language==="ru")result="Лайков: "+m[1];
  if(language==="en" && (m=trim.match(/^(.+)\s·\sчерновик$/)))result=translate(m[1],language)+" · draft";
 }
 if(!result||result===trim)return t;
 const i=String(t).indexOf(trim);
 return i<0?result:String(t).slice(0,i)+result+String(t).slice(i+trim.length);
}
function apply(root){
 if(!root)return;
 const doc=root.nodeType===9?root:(root.ownerDocument||document);
 const target=root.nodeType===9?(root.body||root.documentElement):root;
 if(!target)return;
 const nodes=[];
 if(target.nodeType===3)nodes.push(target);
 else{
  const walker=doc.createTreeWalker(target,NodeFilter.SHOW_TEXT);
  while(walker.nextNode())nodes.push(walker.currentNode);
 }
 for(const n of nodes){
  if(isEditable(n.parentElement))continue;
  const newValue=translate(n.nodeValue);
  if(newValue!==n.nodeValue)n.nodeValue=newValue;
 }
 const all=target.querySelectorAll?target.querySelectorAll("[placeholder],[aria-label],[title]"):[];
 for(const el of all){
  if(isEditable(el))continue;
  for(const key of ["placeholder","aria-label","title"]){
   if(!el.hasAttribute(key))continue;
   const old=el.getAttribute(key),newVal=translate(old);
   if(old!==newVal)el.setAttribute(key,newVal);
  }
 }
 if(target.matches?.("[placeholder],[aria-label],[title]")){
  for(const key of ["placeholder","aria-label","title"]){
   const old=target.getAttribute(key);
   if(old!==null){const next=translate(old);if(next!==old)target.setAttribute(key,next);}
  }
 }
 doc.documentElement.lang=lang;
}
function attach(doc=document){
 if(!doc || !doc.body)return;
 apply(doc);
 if(connected.has(doc))return;
 connected.add(doc);
 let queue=new Set(),queued=false;
 const flush=()=>{queued=false;const work=[...queue];queue.clear();for(const node of work)if(node?.isConnected)apply(node);};
 const obs=new MutationObserver(records=>{
  for(const m of records){
   if(m.type==="characterData"){if(m.target?.parentElement)queue.add(m.target.parentElement);}
   else for(const n of m.addedNodes)if(n.nodeType===1||n.nodeType===3)queue.add(n);
  }
  if(queue.size&&!queued){queued=true;queueMicrotask(flush);}
 });
 obs.observe(doc.body,{childList:true,characterData:true,subtree:true});
}
function getLanguage(){return lang;}
function setLanguage(value){
 const next=value==="en"?"en":"ru";
 lang=next;
 try{localStorage.setItem(KEY,lang);}catch(e){}
 apply(document);
 for(const frame of document.querySelectorAll("iframe")){
  try{if(frame.contentDocument)apply(frame.contentDocument);}catch(e){}
 }
 updateSelector();
 window.dispatchEvent(new CustomEvent("pkxd-language-change",{detail:{language:lang}}));
}
function updateSelector(){
 const controls=document.querySelectorAll("[data-pkxd-language]");
 controls.forEach(x=>{const active=x.dataset.pkxdLanguage===lang;x.setAttribute("aria-pressed",String(active));x.classList.toggle("selected",active);});
}
function installSelector(){
 if(document.getElementById("pkxd-language-control"))return;
 const wrap=document.createElement("div");
 wrap.id="pkxd-language-control";
 wrap.setAttribute("role","group");
 wrap.setAttribute("aria-label","Language / Язык");
 wrap.style.cssText="display:flex;gap:3px;align-items:center;padding:3px;border:1px solid rgba(255,255,255,.2);background:#151428;border-radius:12px;";
 for(const language of ["ru","en"]){
  const btn=document.createElement("button");
  btn.type="button";btn.textContent=language.toUpperCase();btn.dataset.pkxdLanguage=language;
  btn.style.cssText="border:0;border-radius:9px;padding:8px 11px;font-size:12px;font-weight:800;cursor:pointer;color:#faf6ff;background:transparent;";
  btn.onclick=()=>setLanguage(language);wrap.appendChild(btn);
 }
 const style=document.createElement("style");
 style.textContent="#pkxd-language-control button.selected{background:#b861d0!important;color:#fff!important}#pkxd-language-control button:hover{filter:brightness(1.15)}";
 docHead().appendChild(style);
 const target=document.querySelector(".owner-actions")||document.querySelector(".topbar")||document.querySelector(".editor-header")||document.querySelector(".post-page")||document.querySelector("header")||document.body;
 target.appendChild(wrap);
 updateSelector();
}
function docHead(){return document.head||document.documentElement;}
function setPostTranslations(data){postTranslations=data||{};window.dispatchEvent(new Event("pkxd-post-translations-ready"));}
function postView(post){
 if(lang!=="en")return post;
 const p=postTranslations[post?.slug];
 return p?{...post,title:p.title||post.title,description:p.description||post.description,category:p.category||post.category}:post;
}
async function loadPostTranslations(prefix=""){
 try{const res=await fetch(prefix+"posts-en.json",{cache:"no-store"});if(res.ok)setPostTranslations(await res.json());}catch(e){console.warn("EN post translations unavailable",e);}
}
function translatePostPage(){
 const slug=decodeURIComponent(location.pathname.split("/").pop().replace(/\.html$/,""));
 const trans=postTranslations[slug],post=document.querySelector(".post-content");
 if(!post||!trans)return;
 if(!post.dataset.originalHtml)post.dataset.originalHtml=post.innerHTML;
 const heading=document.querySelector(".post-page h1");
 if(heading && !heading.dataset.original)heading.dataset.original=heading.textContent;
 const headerCategory=document.querySelector(".post-page .tag:not(.pin-tag)");
 if(headerCategory && !headerCategory.dataset.original)headerCategory.dataset.original=headerCategory.textContent;
 if(lang==="en" && Array.isArray(trans.paragraphs)){
  const nodes=trans.paragraphs.map(text=>{const p=document.createElement("p");p.textContent=text;return p;});
  post.replaceChildren(...nodes);
  document.title=trans.title+" | PK XD PORTAL";
 }else{
  post.innerHTML=post.dataset.originalHtml;
  document.title=(heading?.dataset.original||"PK XD PORTAL")+" | PK XD PORTAL";
 }
 const title=document.querySelector(".post-page h1");
 if(title)title.textContent=lang==="en"?trans.title:(title.dataset.original||title.textContent);
 if(headerCategory)headerCategory.textContent=lang==="en"?trans.category:(headerCategory.dataset.original||headerCategory.textContent);
}
window.PKXDI18N=Object.freeze({key:KEY,getLanguage,setLanguage,translate,apply,attach,installSelector,postView,loadPostTranslations,translatePostPage});
function init(){installSelector();attach(document);window.addEventListener("storage",e=>{if(e.key===KEY){lang=e.newValue==="en"?"en":"ru";apply(document);updateSelector();window.dispatchEvent(new Event("pkxd-language-change"));}});}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();