import{a as T,S as D,i as E}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const O="48980584-3e4c841e1693c4db1e58a6993",P="https://pixabay.com/api/";async function I(o){try{return(await T.get(P,{params:{key:O,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error(t),t}}const w=document.querySelector(".gallery");let M=new D(".gallery a");function V(o){if(o.length===0){E.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const t=R(o);w.innerHTML="",w.appendChild(t),M.refresh()}function R(o){const t=document.createDocumentFragment();return o.forEach(({webformatURL:r,largeImageURL:c,tags:e,likes:n,views:s,comments:S,downloads:q})=>{const a=document.createElement("a");a.classList.add("gallery-item"),a.href=c;const i=document.createElement("img");i.src=r,i.alt=e,i.loading="lazy";const l=document.createElement("div");l.classList.add("info");const d=document.createElement("div"),m=document.createElement("p");m.classList.add("likes-text"),m.textContent="Likes";const v=document.createElement("p");v.textContent=n,d.appendChild(m),d.appendChild(v);const u=document.createElement("div"),p=document.createElement("p");p.classList.add("views-text"),p.textContent="Views";const C=document.createElement("p");C.textContent=s,u.appendChild(p),u.appendChild(C);const f=document.createElement("div"),h=document.createElement("p");h.classList.add("comments-text"),h.textContent="Comments";const x=document.createElement("p");x.textContent=S,f.appendChild(h),f.appendChild(x);const g=document.createElement("div"),y=document.createElement("p");y.classList.add("downloads-text"),y.textContent="Downloads";const L=document.createElement("p");L.textContent=q,g.appendChild(y),g.appendChild(L),l.append(d,u,f,g),a.appendChild(i),a.appendChild(l),t.appendChild(a)}),t}const k=document.querySelector("#search-form"),z=document.querySelector("#search-input"),b=document.querySelector(".loader"),A=document.querySelector(".gallery");k.addEventListener("submit",async o=>{o.preventDefault();const t=z.value.trim();if(!t){E.warning({title:"Error",message:"Type message for searching!",position:"topRight"});return}A.innerHTML="",b.classList.add("visible");try{const r=await I(t);V(r)}catch{E.error({title:"Error",message:"Try again!",position:"topRight"})}finally{b.classList.remove("visible")}});
//# sourceMappingURL=index.js.map
