import{a as r,j as t,V as u}from"./setPrototypeOf.fd4aa278.js";import{u as x,b as c,H as p,B as a,A as b,C as f,a7 as h}from"./App.c0561854.js";import{M as w}from"./Meta.1f9bea5e.js";import{u as y,g as N}from"./index.5e32fc7a.js";import"./index.547c9ddc.js";import"./index.module.01fcbc19.js";function H(){const{t:i,i18n:s}=x(),[l,n]=r.exports.useState(!1),{newsStories:o,setNewsStories:d}=y(),g=c();return r.exports.useEffect(()=>{o.length<4&&N().then(e=>{n(!1),d(e)})},[]),t(p,{children:u(a,{sx:{maxWidth:"md",width:"100%"},children:[t(w,{title:i("pageTitles.news")}),t(a,{py:{sm:4,xs:2},children:t(b,{title:i("pageTitles.news")})}),t(f,{children:t(a,{sx:{width:"100%",maxWidth:"md"},children:l?t("p",{children:"loading..."}):o.map((e,m)=>t(h,{onClick:()=>g(`/news/${e.id}`),title:s.language==="en"?e.title_en:e.title_ga,date:e.date,blurb:s.language==="en"?e.blurb_en:e.blurb_ga,body:s.language==="en"?e.body_en:e.body_ga,image:e.images[0]!==void 0?e.images[0].url:""},m))})})]})})}export{H as default};