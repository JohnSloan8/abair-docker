import{s as h,B as n,a8 as p,a as f,H as m,A as x}from"./App.8006c1cf.js";import{R as _,d as g,a as l,j as a,V as w}from"./setPrototypeOf.fd4aa278.js";import{M as y}from"./Meta.81acadf7.js";import"./index.b8ab4f83.js";import"./index.module.01fcbc19.js";const P=async()=>{try{const{data:t,error:s}=await h.from("ab_publications").select("id, created_at, title, abstract, pdf_url, year_published, authors").order("year_published",{ascending:!1});if(t)return t;if(s)throw s}catch(t){alert(t.message)}},R=_({key:"publications",default:[]}),k=()=>{const[t,s]=g(R);return{publications:t,setPublications:s}},j=()=>{const[t,s]=l.exports.useState(!1),{publications:r,setPublications:c}=k();l.exports.useEffect(()=>{P().then(e=>{c(e),s(!1)})},[]);const d=e=>{fetch(e).then(o=>{o.blob().then(u=>{const b=window.URL.createObjectURL(u),i=document.createElement("a");i.href=b,i.download="SamplePDF.pdf",i.click()})})};return t?a("p",{children:"loading..."}):a(n,{children:r.map((e,o)=>a(p,{title:e.title,year_published:e.year_published,abstract:e.abstract,authors:e.authors,handleDownload:()=>{d(e.pdf_url)}},o))})};function S(){const{t}=f();return a(m,{children:w(n,{sx:{width:"100%",maxWidth:"md"},children:[a(y,{title:t("pageTitles.knowledge")}),a(n,{py:{sm:4,xs:2},children:a(x,{title:t("pageTitles.knowledge")})}),a(j,{})]})})}export{S as default};
