(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="modulepreload",h=function(r){return"/applications/bat-mirialta/"+r},c={},d=function(o,n,a){return!n||n.length===0?o():Promise.all(n.map(e=>{if(e=h(e),e in c)return;c[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":f,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t)return new Promise((u,m)=>{i.addEventListener("load",u),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())},g="Bat M\xEDrialta",p="sloanjo@tcd.ie",$="/",L="https://detail-design-develop.com/",_=1,v="https://abair-qa.duckdns.org/apis/error-check/run-full-check",w={app:{crash:{title:"Something went wrong. You can:",options:{email:`contact with author by this email - ${p}`,reset:"Press here to reset the application"}}},loader:{fail:"Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea"},images:{failed:"something went wrong during image loading :("},404:"Not found"},E={delay:300,minimumLoading:700},P={image:"/cover.png",description:"Irregular verb bot for Irish"},k="https://giphy.com/embed/xTiN0L7EW5trfOvEk0";function l(){return Math.floor(Math.random()*256)}function b(){const r=l(),o=l(),n=l();return[`rgb(${r}, ${o}, ${n})`,`rgb(${255-r}, ${255-o}, ${255-n})`]}function y(){const[r,o]=b(),n=["font-size: 40px",`color: ${r}`,`border: 1px solid ${o}`,`background-color: ${o}`,"border-radius: 5px","padding: 10px"].join(";");console.log(`%c=== ${g} ===`,n)}Promise.all([d(()=>import("./Root.e2227920.js"),["assets/Root.e2227920.js","assets/createTheme.3b532d00.js","assets/index.module.a0666f78.js"]),d(()=>import("./App.e8f14eb1.js").then(r=>r.D),["assets/App.e8f14eb1.js","assets/createTheme.3b532d00.js"])]).then(([{default:r},{default:o}])=>{r(o)});y();export{d as _,P as a,$ as b,_ as c,L as d,p as e,v as f,k as g,E as l,w as m,g as t};
