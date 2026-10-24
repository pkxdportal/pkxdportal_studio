// PK XD PORTAL: парольная публикация постов без передачи GitHub аккаунта.
const REPO="pkxdportal/pkxdportal_studio";
const ORIGIN="https://pkxdportal.github.io";
const GH_API="https://api.github.com/repos/"+REPO+"/contents/";
const json=(data,status=200,origin=ORIGIN)=>new Response(JSON.stringify(data),{status,headers:{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":origin,"Access-Control-Allow-Methods":"GET,POST,DELETE,OPTIONS","Access-Control-Allow-Headers":"Content-Type,X-Portal-Password","Cache-Control":"no-store","Vary":"Origin"}});
function utf8Base64(value){
 const bytes=new TextEncoder().encode(String(value));
 let str="";
 for(let i=0;i<bytes.length;i+=0x4000)str+=String.fromCharCode(...bytes.subarray(i,i+0x4000));
 return btoa(str);
}
function fromBase64(value){
 return new TextDecoder().decode(Uint8Array.from(atob(value.replace(/\s+/g,"")),c=>c.charCodeAt(0)));
}
function sanitizeSlug(str){return String(str||"").toLowerCase().trim().replace(/[^a-z0-9а-яё_-]+/ig,"-").replace(/^-+|-+$/g,"").slice(0,100);}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function equalPassword(a,b){if(!a||!b)return false;let diff=a.length^b.length;for(let i=0;i<Math.max(a.length,b.length);i++)diff|=(a.charCodeAt(i)||0)^(b.charCodeAt(i)||0);return diff===0;}
function isConfigured(env){return !!(env.POST_EDITOR_PASSWORD&&env.GITHUB_WRITE_TOKEN);}
function gitHeaders(env){return{"Authorization":"Bearer "+env.GITHUB_WRITE_TOKEN,"Accept":"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28","User-Agent":"PKXD-Portal-Post-Editor","Content-Type":"application/json"};}
async function gitCall(path,env,method="GET",body=null){
 const opts={method,headers:gitHeaders(env)};
 if(body)opts.body=JSON.stringify(body);
 const u=GH_API+path.split("/").map(encodeURIComponent).join("/");
 const r=await fetch(u,opts);
 if(r.status===404&&method==="GET")return null;
 const data=await r.json().catch(()=>({}));
 if(!r.ok)throw Error("GitHub API "+r.status+": "+(data.message||"нет данных"));
 return data;
}
async function readFile(path,env){
 const res=await gitCall(path,env);
 if(!res)return null;
 return {sha:res.sha,content:fromBase64(res.content||"")};
}
async function putFile(path,content,env,message,sha=null,isBase64=false){
 return gitCall(path,env,"PUT",{message,content:isBase64?content:utf8Base64(content),...(sha?{sha}:{})});
}
async function delFile(path,sha,env,message){
 return gitCall(path,env,"DELETE",{message,sha});
}
function postHtml(p){
 const safeSlug=encodeURIComponent(p.slug);
 const photo=p.image?(/^(https?:)?\/\//i.test(p.image)?p.image:"../"+p.image.replace(/^\.\//,"")):"";
 const paragraphs=String(p.content||"").split(/\r?\n/).filter(Boolean).map(line=>"<p>"+escapeHtml(line)+"</p>").join("\n");
 const meta=escapeHtml(p.author||"@pkxd_portal")+" · "+escapeHtml(p.date||"");
 const title=escapeHtml(p.title),description=escapeHtml(p.description||"");
 return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
 <title>${title} | PK XD PORTAL</title><meta name="description" content="${description}">
 <meta property="og:title" content="${title}"><meta property="og:description" content="${description}">
 <meta property="og:type" content="article"><meta property="og:url" content="https://pkxdportal.github.io/pkxdportal_studio/posts/${safeSlug}.html">
 <link rel="stylesheet" href="../style.css"></head>
 <body><div class="page-bg"></div><div class="post-page-wrap"><div class="post-page">
 <a class="back-link" href="../index.html">← К публикациям</a>
 <div class="tag-row"><span class="tag">${escapeHtml(p.category||"Новости")}</span>${p.pinned?'<span class="tag pin-tag">Закреплено</span>':""}</div>
 ${photo?'<img class="post-page-image" src="'+escapeHtml(photo)+'" alt="">':""}
 <h1>${title}</h1><div class="meta">Автор: ${meta}</div>
 <div class="post-content">${paragraphs}</div>
 <div class="post-actions"><button class="action-btn" id="likeBtn" type="button">❤️ Нравится</button><span id="likeCount"></span></div>
 </div></div>
 <script>
 (()=>{const key="likes_${safeSlug}",lk="liked_${safeSlug}",b=document.getElementById("likeBtn"),c=document.getElementById("likeCount");function up(){const n=Number(localStorage.getItem(key)||0),liked=localStorage.getItem(lk)==="1";c.textContent="Лайков: "+n;b.textContent=liked?"💖 Лайк поставлен":"❤️ Нравится";}b.onclick=()=>{let n=Number(localStorage.getItem(key)||0),liked=localStorage.getItem(lk)==="1";localStorage.setItem(key,String(Math.max(0,n+(liked?-1:1))));localStorage.setItem(lk,liked?"0":"1");up();};up();})();
 <\/script></body></html>`;
}
function validatePost(input){
 const title=String(input.title||"").trim().slice(0,180);
 const slug=sanitizeSlug(input.slug||title);
 const content=String(input.content||"");
 if(!title||!slug||content.length>60000)throw Error("Некорректный заголовок, адрес или слишком длинный текст.");
 const image=String(input.image||"").trim();
 if(image && (image.length>700 || /^javascript:/i.test(image)))throw Error("Некорректная ссылка на картинку.");
 return {title,slug,date:String(input.date||"").slice(0,20),author:"@pkxd_portal",category:String(input.category||"Новости").slice(0,70),description:String(input.description||"").slice(0,300),pinned:!!input.pinned,image,content};
}
async function handlePost(request,env){
 const body=await request.json();
 const p=validatePost(body.post||{});
 const oldSlug=body.oldSlug?sanitizeSlug(body.oldSlug):null;
 const source=await readFile("posts.json",env);
 if(!source)throw Error("Файл posts.json отсутствует.");
 const posts=JSON.parse(source.content);
 if(!Array.isArray(posts))throw Error("posts.json повреждён.");
 if(posts.some(x=>x.slug===p.slug && x.slug!==oldSlug))throw Error("Такой адрес публикации уже занят.");
 const path="posts/"+p.slug+".html";
 const oldFile=await readFile(path,env);
 await putFile(path,postHtml(p),env,"Publish portal post: "+p.slug,oldFile?.sha);
 const idx=posts.findIndex(x=>x.slug===(oldSlug||p.slug));
 const summary={slug:p.slug,title:p.title,date:p.date,author:p.author,category:p.category,description:p.description,image:p.image,pinned:p.pinned};
 if(idx<0)posts.unshift(summary);else posts.splice(idx,1,summary);
 await putFile("posts.json",JSON.stringify(posts,null,2),env,"Update posts list: "+p.slug,source.sha);
 if(oldSlug&&oldSlug!==p.slug){
  const previous=await readFile("posts/"+oldSlug+".html",env);
  if(previous)await delFile("posts/"+oldSlug+".html",previous.sha,env,"Remove old address: "+oldSlug);
 }
 return {ok:true,slug:p.slug};
}
async function handleImage(request,env){
 const obj=await request.json();
 const match=String(obj.data||"").match(/^data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/=]+)$/);
 if(!match)throw Error("Поддерживаются PNG, JPG и WebP.");
 if(match[2].length>3600000)throw Error("Файл слишком большой.");
 const ext=match[1]==="jpeg"?"jpg":match[1];
 const basename=sanitizeSlug(String(obj.name||"image").replace(/\.[^.]+$/,""))||"image";
 const path="assets/posts/"+Date.now()+"-"+basename+"."+ext;
 await putFile(path,match[2],env,"Upload portal image: "+basename,null,true);
 return {ok:true,path};
}
async function handleDelete(path,env){
 const slug=sanitizeSlug(decodeURIComponent(path.slice("/api/posts/".length)));
 if(!slug)throw Error("Нет адреса поста.");
 const source=await readFile("posts.json",env);
 if(!source)throw Error("posts.json отсутствует.");
 const list=JSON.parse(source.content);
 const old=await readFile("posts/"+slug+".html",env);
 if(old)await delFile("posts/"+slug+".html",old.sha,env,"Delete post: "+slug);
 await putFile("posts.json",JSON.stringify(list.filter(x=>x.slug!==slug),null,2),env,"Remove post from index: "+slug,source.sha);
 return {ok:true};
}
export default {
 async fetch(request,env){
  const url=new URL(request.url),origin=request.headers.get("Origin");
  if(origin && origin!==ORIGIN)return json({error:"Forbidden origin"},403,ORIGIN);
  if(request.method==="OPTIONS")return new Response(null,{status:204,headers:{"Access-Control-Allow-Origin":ORIGIN,"Access-Control-Allow-Methods":"GET,POST,DELETE,OPTIONS","Access-Control-Allow-Headers":"Content-Type,X-Portal-Password","Access-Control-Max-Age":"600"}});
  if(url.pathname==="/api/health"&&request.method==="GET")return json({ready:isConfigured(env)});
  if(!url.pathname.startsWith("/api/"))return json({error:"Not found"},404);
  if(!isConfigured(env))return json({error:"Сервер публикаций не настроен. Нужны POST_EDITOR_PASSWORD и GITHUB_WRITE_TOKEN в Cloudflare."},503);
  if(!equalPassword(request.headers.get("X-Portal-Password")||"",env.POST_EDITOR_PASSWORD))return json({error:"Неверный пароль публикации"},401);
  try{
   if(url.pathname==="/api/posts"&&request.method==="POST")return json(await handlePost(request,env));
   if(url.pathname==="/api/images"&&request.method==="POST")return json(await handleImage(request,env));
   if(url.pathname.startsWith("/api/posts/")&&request.method==="DELETE")return json(await handleDelete(url.pathname,env));
   return json({error:"Not found"},404);
  }catch(e){return json({error:String(e.message||e)},400);}
 }
};