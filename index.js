import{a as h,S as y,i as c}from"./assets/vendor-D6BwaWIN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();h.defaults.baseURL="https://pixabay.com/api/";const p=(a,t)=>{const s={params:{key:"45783365-0aa71d87ed7f50a45516fb3bf",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return h.get("",s)},b=({webformatURL:a,largeImageURL:t,tags:s,likes:l,views:e,comments:r,downloads:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
        class="gallery-image"
        src="${a}"
        alt="${s}"/>
      </a>
      <ul class="gallary-descr">
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Likes</h2>
          <p class="gallary-descr-item-num">${l}</p>
        </li>
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Views</h2>
          <p class="gallary-descr-item-num">${e}</p>
        </li>
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Comments</h2>
          <p class="gallary-descr-item-num">${r}</p>
        </li>
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Downloads</h2>
          <p class="gallary-descr-item-num">${o}</p>
        </li>
      </ul>
  </li>
  `,i=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),g=document.querySelector(".js-loader"),u=document.querySelector(".js-load-more");let d=1,m="",L=0,f=0;const S=new y(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),C=async a=>{try{if(a.preventDefault(),g.classList.remove("is-hidden"),m=i.elements.user_query.value.trim(),!m){c.error({message:"Enter what we are looking for",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fafafb",iconColor:"#fafafb"});return}d=1;const t=await p(m,d);if(t.data.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fafafb",iconColor:"#fafafb"}),u.classList.add("is-hidden"),n.innerHTML="",i.reset();return}const s=t.data.hits.map(l=>b(l)).join("");n.innerHTML=s,L=n.querySelector("li").getBoundingClientRect().height,f=Math.ceil(t.data.totalHits/15),d>=f&&c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u.classList.remove("is-hidden"),S.refresh()}catch(t){console.log(t)}finally{i.reset(),g.classList.add("is-hidden")}};i.addEventListener("submit",C);u.addEventList;
//# sourceMappingURL=index.js.map
