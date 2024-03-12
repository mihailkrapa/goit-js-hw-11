import{S as u,i as c}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a={API_KEY:"26114723-eab203642ec2629c12fb3e14b",BASE_URL:"https://pixabay.com/api"};function g(s){const r=new URLSearchParams({key:a.API_KEY,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${a.BASE_URL}/?${r}`).then(o=>{if(o.ok)return o.json();throw new Error(o.status)})}const m=new u(".images-list a",{captionsData:"alt",captionDelay:250});function p({webformatURL:s,largeImageURL:r,tags:o,likes:i,views:e,comments:t,downloads:n}){return`
        <li class="images__item">
          <a
            class="images__link"
            href="${r}"
          >
            <img
              class="images__image"
              src="${s}"
              alt="${o}"
              
            />
          </a>
         <span class="images-info">
            <p class="text-center">Likes <span class="images-text">${i}</span></p>
            <p class="text-center">Views <span class="images-text">${e}</span></p> 
            <p class="text-center">Comments <span class="images-text">${t}</span></p>
            <p class="text-center">Downloads <span class="images-text">${n}</span></p>
         </span>
        </li>
      `}function d(s){return s.map(p).join("")}function h(s,r){s.insertAdjacentHTML("beforeend",d(r))}function y(){m.refresh()}const L="/goit-js-hw-11/assets/warning-33a8e06d.svg",b="/goit-js-hw-11/assets/error-d765a61d.svg",w=document.querySelector(".js-hero-form"),l=document.querySelector(".images-list"),f=document.querySelector(".loader");w.addEventListener("submit",S);l.innerHTML="";function S(s){s.preventDefault();const r=s.target.elements.query.value.trim();r===""&&_(),v(),g(r).then(o=>{o.hits.length===0&&P(),h(l,o.hits),y()}).catch(o=>{console.error(o)}).finally(()=>{x()}),s.target.reset()}function v(){f.classList.add("visible")}function x(){f.classList.remove("visible")}function _(){c.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",iconUrl:L,message:"Please enter a search query",position:"topRight"})}function P(){c.error({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",iconUrl:b,message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
