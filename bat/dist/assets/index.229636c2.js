import{U as v,L as h,j as e,a as u}from"./setPrototypeOf.1b27e896.js";import{u as y,a as A,b as F,M as P}from"./index.3f0a2b0b.js";import{u as B,a as S,b as j,c as T,R as q}from"./usePopulateVerbsTensesForms.51e2e77b.js";import{u as w,a as d,b as C,B as n,A as f,F as W,T as k,C as i}from"./App.ab358b80.js";import{C as z}from"./ChatHistories.e8d83854.js";import{u as b,a as R,B as l}from"./index.4b04f1b5.js";import{p as V,g as E,c as M,P as N,C as O}from"./calculateChatPointsCumFreq.54e6e22d.js";import"./index.module.9b73f915.js";import"./index.1aac2a7e.js";import"./TotalPoints.45917a7e.js";const _=()=>{const s=w(),{session:o}=d(),{chats:a,setChats:r}=b(),t=v(R),{setAdjacencyPairs:c}=y(),{t:m}=C(),p=g=>{g?s("/chat"):(o!==null&&t!==void 0&&(console.log("finishing previously unfinished chat"),V(t.id,null,!0,null).then(x=>{c([]),r([...a.slice(0,a.length-1),x])})),s("/set-task"))};return h(l,{children:[e(n,{children:t&&e(l,{button:!0,width:"100%",children:e(f,{size:"large",fullWidth:!0,label:m("buttons.continue"),onClick:()=>{p(!0)},selected:!0,color:"secondary"})})}),e(n,{mt:t?1:0,children:e(l,{button:!0,width:"100%",children:e(f,{size:"large",fullWidth:!0,label:m("buttons.start"),onClick:()=>{p(!1)},selected:!0,color:"secondary"})})})]})},G=()=>{const{session:s}=d(),[o,a]=u.exports.useState([]),{t:r}=C();return u.exports.useEffect(()=>{s&&E(s.user.id).then(t=>{if(t){const c=M(t);a(Object.values(c))}})},[s]),e(l,{children:h(W,{children:[e(k,{align:"center",variant:"h6",children:r("headers.stats")}),e(N,{}),e(n,{width:"100%",height:200,sx:{position:"relative"},children:e(n,{width:"93%",height:"100%",sx:{position:"absolute",left:-10},children:e(O,{cumFreq:o})})})]})})},H=()=>{B(),S(),j();const{verbs:s}=A(),{chats:o}=b(),{session:a}=d(),r=T(),t=F();return u.exports.useEffect(()=>{s.length===0&&r(),o.length===0&&a!==null&&t(a.user.id)},[a]),h(n,{py:2,children:[e(P,{title:"Welcome"}),e(i,{children:e(q,{})}),e(i,{mt:1,children:e(_,{})}),e(i,{mt:2,children:e(G,{})}),e(i,{mt:2,children:e(z,{})})]})},Z=H;export{Z as default};