import{X as v,L as n,j as e,a as d}from"./setPrototypeOf.96237ccd.js";import{u as F,a as B,b as A,c as E,R as P,m as b}from"./usePopulateVerbsTensesForms.62c82ae5.js";import{u as S,M as W}from"./robot.c585d123.js";import{u as k,a as m,b as C,c as q,d as D,e as u,B as s,A as p,F as M,T as j,f as T,C as o}from"./App.b1d30bee.js";import{C as z}from"./ChatHistories.03492a90.js";import{b as x,d as $}from"./index.fa1c436c.js";import{B as l}from"./BatBox.23da4515.js";import{p as R,g as V,c as L,P as N,C as O}from"./PlayedChatStats.a485d77b.js";import"./index.module.99d47a0b.js";import"./TotalPoints.36e162b8.js";const _=()=>{const t=k(),{session:c}=m(),{chats:r,setChats:i}=C(),a=v(q),{setAdjacencyPairs:h}=D(),{t:g}=u(),f=y=>{y?t(`${x}chat`):(c!==null&&a!==void 0&&(console.log("finishing previously unfinished chat"),R(a.id,null,!0,null).then(w=>{h([]),i([...r.slice(0,r.length-1),w])})),t(`${x}set-task`))};return n(l,{children:[e(s,{children:a&&e(l,{button:!0,width:"100%",children:e(p,{size:"large",fullWidth:!0,label:g("buttons.continue"),onClick:()=>{f(!0)},selected:!0,color:"secondary"})})}),e(s,{mt:a?1:0,children:e(l,{button:!0,width:"100%",children:e(p,{size:"large",fullWidth:!0,label:g("buttons.start"),onClick:()=>{f(!1)},selected:!0,color:"secondary"})})})]})},G=()=>{const{t}=u();return e(l,{children:e(s,{children:e(l,{button:!0,width:"100%",children:e(p,{size:"large",fullWidth:!0,label:t("buttons.loginSignup"),onClick:()=>{window.location.href=`${$}/login?origin=applications/bat-mirialta`},selected:!0,color:"secondary"})})})})},H=()=>{const{session:t}=m(),[c,r]=d.exports.useState([]),{t:i}=u();return d.exports.useEffect(()=>{t&&V(t.user.id).then(a=>{if(a){const h=L(a);r(Object.values(h))}})},[t]),e(l,{children:n(M,{children:[e(j,{align:"center",variant:"h6",children:i("headers.stats")}),e(N,{}),e(s,{width:"100%",height:200,sx:{position:"relative"},children:e(s,{width:"93%",height:"100%",sx:{position:"absolute",left:-10},children:e(O,{cumFreq:c})})})]})})},I=()=>{const{i18n:t}=u();F(),B(),A();const{verbs:c}=T(),{chats:r}=C(),{session:i}=m(),a=E(),h=S();return d.exports.useEffect(()=>{c.length===0&&a(),r.length===0&&i!==null&&h(i.user.id)},[i]),n(s,{py:2,children:[e(W,{title:"Welcome"}),e(o,{children:e(P,{})}),e(o,{py:1,px:2,flexDirection:"column",children:n(s,{width:"95%",height:50,children:[e(s,{width:"100%",height:"100%",sx:{display:t.language==="ga"?"block":"none"},children:e(b,{style:{height:170,width:"100%"},sequence:[1e3,"F\xE1ilte isteach sa Bhat M\xEDrialta, ",200,"F\xE1ilte isteach sa Bhat M\xEDrialta, do chuiditheoir ",500,"F\xE1ilte isteach sa Bhat M\xEDrialta, do chuiditheoir le briathra m\xEDrialta."],wrapper:"span",cursor:!0,repeat:0})}),e(s,{width:"100%",height:"100%",sx:{display:t.language==="en"?"block":"none"},children:e(b,{style:{height:170,width:"100%"},sequence:[1e3,"Welcome to ",200,"Welcome to Bat M\xEDrialta,",500,"Welcome to Bat M\xEDrialta, your irregular verb helper."],wrapper:"span",cursor:!0,repeat:0})})]})}),i?n(s,{children:[e(o,{mt:1,children:e(_,{})}),n(s,{children:[e(o,{mt:2,children:e(H,{})}),e(o,{mt:2,children:e(z,{})})]})]}):e(o,{mt:1,children:e(G,{})})]})},ae=I;export{ae as default};
