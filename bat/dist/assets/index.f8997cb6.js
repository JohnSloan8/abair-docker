(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="modulepreload",h=function(r){return"/applications/bat-mirialta/"+r},c={},d=function(o,n,a){return!n||n.length===0?o():Promise.all(n.map(e=>{if(e=h(e),e in c)return;c[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":f,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t)return new Promise((u,m)=>{i.addEventListener("load",u),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())},g="Bat M\xEDrialta",p="sloanjo@tcd.ie",$="/",L="http://localhost:8000",_=.75,v="https://error-check.detail-design-develop.com/run-full-check",w={app:{crash:{title:"Something went wrong. You can:",options:{email:`contact with author by this email - ${p}`,reset:"Press here to reset the application"}}},loader:{fail:"Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea"},images:{failed:"something went wrong during image loading :("},404:"Not found"},E={delay:300,minimumLoading:700},P={image:"/cover.png",description:"Irregular verb bot for Irish"},k="https://giphy.com/embed/xTiN0L7EW5trfOvEk0";function l(){return Math.floor(Math.random()*256)}function b(){const r=l(),o=l(),n=l();return[`rgb(${r}, ${o}, ${n})`,`rgb(${255-r}, ${255-o}, ${255-n})`]}function y(){const[r,o]=b(),n=["font-size: 40px",`color: ${r}`,`border: 1px solid ${o}`,`background-color: ${o}`,"border-radius: 5px","padding: 10px"].join(";");console.log(`%c=== ${g} ===`,n)}Promise.all([d(()=>import("./Root.1537b5d9.js"),["assets/Root.1537b5d9.js","assets/setPrototypeOf.96237ccd.js","assets/index.module.99d47a0b.js","assets/translationGA.a33b74ba.js"]),d(()=>import("./App.95538417.js").then(r=>r.aC),["assets/App.95538417.js","assets/setPrototypeOf.96237ccd.js"])]).then(([{default:r},{default:o}])=>{r(o)});y();export{d as _,P as a,$ as b,_ as c,L as d,p as e,v as f,k as g,E as l,w as m,g as t};
