import{X as w,L as u,j as e,a as d}from"./setPrototypeOf.96237ccd.js";import{u as y,a as S,b as A,c as F,R as P,m as B}from"./usePopulateVerbsTensesForms.d647795c.js";import{u as j,M as q}from"./robot.9364aed0.js";import{u as T,a as p,b,c as W,d as k,e as h,B as n,A as m,F as _,T as z,f as $,C as r}from"./App.95538417.js";import{C as R}from"./ChatHistories.b837a521.js";import{b as C,d as V}from"./index.f8997cb6.js";import{B as o}from"./BatBox.a478c621.js";import{p as E,g as H,c as L,P as M,C as N}from"./PlayedChatStats.69c3dbcb.js";import"./index.module.99d47a0b.js";import"./TotalPoints.8d6a3a62.js";const O=()=>{const t=T(),{session:l}=p(),{chats:a,setChats:i}=b(),s=w(W),{setAdjacencyPairs:c}=k(),{t:f}=h(),g=x=>{x?t(`${C}chat`):(l!==null&&s!==void 0&&(console.log("finishing previously unfinished chat"),E(s.id,null,!0,null).then(v=>{c([]),i([...a.slice(0,a.length-1),v])})),t(`${C}set-task`))};return u(o,{children:[e(n,{children:s&&e(o,{button:!0,width:"100%",children:e(m,{size:"large",fullWidth:!0,label:f("buttons.continue"),onClick:()=>{g(!0)},selected:!0,color:"secondary"})})}),e(n,{mt:s?1:0,children:e(o,{button:!0,width:"100%",children:e(m,{size:"large",fullWidth:!0,label:f("buttons.start"),onClick:()=>{g(!1)},selected:!0,color:"secondary"})})})]})},G=()=>{const{t}=h();return e(o,{children:e(n,{children:e(o,{button:!0,width:"100%",children:e(m,{size:"large",fullWidth:!0,label:t("buttons.loginSignup"),onClick:()=>{window.location.href=`${V}/login?origin=applications/bat-mirialta`},selected:!0,color:"secondary"})})})})},I=()=>{const{session:t}=p(),[l,a]=d.exports.useState([]),{t:i}=h();return d.exports.useEffect(()=>{t&&H(t.user.id).then(s=>{if(s){const c=L(s);a(Object.values(c))}})},[t]),e(o,{children:u(_,{children:[e(z,{align:"center",variant:"h6",children:i("headers.stats")}),e(M,{}),e(n,{width:"100%",height:200,sx:{position:"relative"},children:e(n,{width:"93%",height:"100%",sx:{position:"absolute",left:-10},children:e(N,{cumFreq:l})})})]})})},X=()=>{const{t}=h();y(),S(),A();const{verbs:l}=$(),{chats:a}=b(),{session:i}=p(),s=F(),c=j();return d.exports.useEffect(()=>{l.length===0&&s(),a.length===0&&i!==null&&c(i.user.id)},[i]),u(n,{py:2,children:[e(q,{title:"Welcome"}),e(r,{children:e(P,{})}),e(r,{py:1,px:3,minHeight:70,children:e(n,{px:1,width:400,children:e(B,{sequence:[1e3,String(t("instructions.welcome.text_01")),200,String(t("instructions.welcome.text_02")),500,String(t("instructions.welcome.text_03"))],wrapper:"span",cursor:!0,repeat:0})})}),i?u(n,{children:[e(r,{mt:1,children:e(O,{})}),u(n,{children:[e(r,{mt:2,children:e(I,{})}),e(r,{mt:2,children:e(R,{})})]})]}):e(r,{mt:1,children:e(G,{})})]})},ne=X;export{ne as default};
