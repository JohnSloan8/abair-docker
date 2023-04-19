import{B as o,G as c,K as I,M as y,k as f,S,b as g,r as _,i as C,j as V,N as z,u as k,a as B,H as b,A as q,C as d,e as F}from"./App.51d4e149.js";import{c as G,d as P,s as D,a as T,e as p,u as W,f as j,g as E,h as K,M as N,G as J,S as L,b as Q}from"./Map.4b114c53.js";import{a as v,V as l,j as e,aa as u}from"./setPrototypeOf.fd4aa278.js";import{d as U}from"./Download.8284a887.js";import{d as X}from"./index.3abbcbd0.js";import{M as Y}from"./Meta.ee4315c5.js";import"./index.1aa9bee6.js";import"./index.module.01fcbc19.js";const Z=()=>{const{synthesisAudios:i}=G(),t=v.exports.useRef(null),n=v.exports.useRef(null),r=s=>{t.current!==void 0&&t.current!==null&&(t.current.src=s,t.current.play())},a=(s,h,R,$,A,H)=>{n.current!==void 0&&n.current!==null&&(n.current.href=s,n.current.download=`${h}_${R}_${$}_${A}_${H}.wav`,n.current.click())};return l(o,{width:"95%",mt:2,children:[i.map((s,h)=>e(o,{children:l(c,{container:!0,spacing:2,children:[e(c,{item:!0,xs:8,children:e(I,{voice:s.voice,model:s.model,speed:s.speed,pitch:s.pitch,text:s.text,onClick:()=>{console.log("audio clicked")}})}),e(c,{item:!0,xs:2,children:e(y,{nonce:void 0,onResize:void 0,onResizeCapture:void 0,children:e(f,{selected:!0,color:"secondary",onClick:()=>{r(s.audioData)},icon:X})})}),e(c,{item:!0,xs:2,children:e(y,{nonce:void 0,onResize:void 0,onResizeCapture:void 0,children:e(f,{selected:!0,color:"secondary",onClick:()=>{a(s.audioData,s.voice,s.model,s.speed,s.pitch,s.text)},icon:U})})})]})},h)),e("audio",{src:"",ref:t}),e("a",{href:"",ref:n,download:"tester.wav"})]})},O=()=>{const{synthesisModel:i,setSynthesisModel:t}=P(),n=u(D);return e(S,{direction:"row",spacing:{sm:1,xs:.5},sx:{flexWrap:"wrap"},justifyContent:"center",my:{sm:2,xs:1},children:n.map((r,a)=>e(o,{mb:{sm:1,xs:.5},children:e(g,{label:r,onClick:()=>t(r),selected:r===i,color:"secondary"})},a))})};var m={},ee=C.exports;Object.defineProperty(m,"__esModule",{value:!0});var w=m.default=void 0,se=ee(_()),te=V,ne=(0,se.default)((0,te.jsx)("path",{d:"M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"}),"GraphicEq");w=m.default=ne;const ie=()=>{const{synthesisPitch:i,setSynthesisPitch:t}=T(),{synthesisVoiceIndex:n}=p();return n!==-1?e(z,{min:.5,value:i,max:1.5,onChange:r=>{t(parseFloat(r.target.value))},step:.1,icon:w,iconSize:"medium",color:"secondary.main"}):null};var x={},re=C.exports;Object.defineProperty(x,"__esModule",{value:!0});var M=x.default=void 0,oe=re(_()),ae=V,ce=(0,oe.default)((0,ae.jsx)("path",{d:"m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"}),"Speed");M=x.default=ce;const le=()=>{const{synthesisSpeed:i,setSynthesisSpeed:t}=W(),{synthesisVoiceIndex:n}=p();return n!==-1?e(z,{min:.5,value:i,max:1.5,onChange:r=>t(parseFloat(r.target.value)),step:.1,icon:M}):null},de=()=>{const i=u(j),t=u(E),{setSynthesisVoiceIndex:n}=p(),{synthesisVoices:r}=K();return e(S,{direction:"row",spacing:{sm:1,xs:.5},sx:{flexWrap:"wrap"},justifyContent:"center",my:{sm:2,xs:1},children:t!==void 0&&t.map((a,s)=>e(g,{label:a.name,onClick:()=>n(r.indexOf(a)),selected:a===i,color:"secondary"},s))})};function Se(){const{t:i}=k(),{breakpointSize:t}=B();return e(b,{pb:8,sx:{backgroundColor:"secondary.wafer",minHeight:"100vh"},children:l(o,{sx:{maxWidth:"sm",width:"100%"},children:[e(Y,{title:i("pageTitles.synthesis")}),e(o,{py:{sm:4,xs:2},children:e(q,{title:i("pageTitles.synthesis")})}),e(d,{m:{sm:2,xs:0},children:l(c,{container:!0,spacing:0,children:[e(c,{item:!0,xs:12,sm:6,my:-2,children:e(d,{children:e(o,{children:e(N,{})})})}),l(c,{container:!0,item:!0,xs:12,sm:6,direction:"column",alignItems:"center",justifyContent:"center",children:[e(o,{minHeight:"69px",children:e(de,{})}),e(J,{}),l(o,{width:"90%",children:[e(o,{minHeight:{sm:"62px",xs:"52px"},children:e(le,{})}),e(o,{minHeight:{sm:"62px",xs:"52px"},children:e(ie,{})})]}),e(o,{minHeight:"77px",children:e(O,{})})]})]})}),e(d,{children:e(F,{textbox:e(L,{rows:t==="xs"?3:4}),buttons:e(Q,{}),variation:"synthesis"})}),e(d,{children:e(Z,{})})]})})}export{Se as default};
