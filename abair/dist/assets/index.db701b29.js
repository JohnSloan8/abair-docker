import{r as p,i as m,j as x,B as o,G as c,M as B,N as _,k as g,S as V,b as z,O as $,a as b,u as q,H as D,A as F,C as d,e as P}from"./App.0d467752.js";import{c as G,d as j,s as T,a as W,e as v,u as E,f as N,g as J,h as K,M as L,G as Q,S as U,b as X}from"./Map.c72b7bdd.js";import{a as C,V as l,j as e,aa as h}from"./setPrototypeOf.fd4aa278.js";import{d as Y}from"./index.a80a5557.js";import{M as Z}from"./Meta.c90fff9e.js";import"./index.870d905a.js";import"./index.module.01fcbc19.js";var y={},O=m.exports;Object.defineProperty(y,"__esModule",{value:!0});var M=y.default=void 0,ee=O(p()),te=x,se=(0,ee.default)((0,te.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");M=y.default=se;const ne=()=>{const{synthesisAudios:i}=G(),s=C.exports.useRef(null),n=C.exports.useRef(null),r=t=>{s.current!==void 0&&s.current!==null&&(s.current.src=t,s.current.play())},a=(t,u,R,I,A,k)=>{n.current!==void 0&&n.current!==null&&(n.current.href=t,n.current.download=`${u}_${R}_${I}_${A}_${k}.wav`,n.current.click())};return l(o,{width:"95%",mt:2,children:[i.map((t,u)=>e(o,{children:l(c,{container:!0,spacing:2,children:[e(c,{item:!0,xs:8,children:e(B,{voice:t.voice,model:t.model,speed:t.speed,pitch:t.pitch,text:t.text,onClick:()=>{console.log("audio clicked")}})}),e(c,{item:!0,xs:2,children:e(_,{nonce:void 0,onResize:void 0,onResizeCapture:void 0,children:e(g,{selected:!0,color:"secondary",onClick:()=>{r(t.audioData)},icon:Y})})}),e(c,{item:!0,xs:2,children:e(_,{nonce:void 0,onResize:void 0,onResizeCapture:void 0,children:e(g,{selected:!0,color:"secondary",onClick:()=>{a(t.audioData,t.voice,t.model,t.speed,t.pitch,t.text)},icon:M})})})]})},u)),e("audio",{src:"",ref:s}),e("a",{href:"",ref:n,download:"tester.wav"})]})},ie=()=>{const{synthesisModel:i,setSynthesisModel:s}=j(),n=h(T);return e(V,{direction:"row",spacing:{sm:1,xs:.5},sx:{flexWrap:"wrap"},justifyContent:"center",my:{sm:2,xs:1},children:n.map((r,a)=>e(o,{mb:{sm:1,xs:.5},children:e(z,{label:r,onClick:()=>s(r),selected:r===i,color:"secondary"})},a))})};var f={},re=m.exports;Object.defineProperty(f,"__esModule",{value:!0});var w=f.default=void 0,oe=re(p()),ae=x,ce=(0,oe.default)((0,ae.jsx)("path",{d:"M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"}),"GraphicEq");w=f.default=ce;const le=()=>{const{synthesisPitch:i,setSynthesisPitch:s}=W(),{synthesisVoiceIndex:n}=v();return n!==-1?e($,{min:.5,value:i,max:1.5,onChange:r=>{s(parseFloat(r.target.value))},step:.1,icon:w,iconSize:"medium",color:"secondary.main"}):null};var S={},de=m.exports;Object.defineProperty(S,"__esModule",{value:!0});var H=S.default=void 0,ue=de(p()),he=x,pe=(0,ue.default)((0,he.jsx)("path",{d:"m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"}),"Speed");H=S.default=pe;const me=()=>{const{synthesisSpeed:i,setSynthesisSpeed:s}=E(),{synthesisVoiceIndex:n}=v();return n!==-1?e($,{min:.5,value:i,max:1.5,onChange:r=>s(parseFloat(r.target.value)),step:.1,icon:H}):null},xe=()=>{const i=h(N),s=h(J),{setSynthesisVoiceIndex:n}=v(),{synthesisVoices:r}=K();return e(V,{direction:"row",spacing:{sm:1,xs:.5},sx:{flexWrap:"wrap"},justifyContent:"center",my:{sm:2,xs:1},children:s!==void 0&&s.map((a,t)=>e(z,{label:a.name,onClick:()=>n(r.indexOf(a)),selected:a===i,color:"secondary"},t))})};function Ve(){const{t:i}=b(),{breakpointSize:s}=q();return e(D,{pb:8,sx:{backgroundColor:"secondary.wafer",minHeight:"100vh"},children:l(o,{sx:{maxWidth:"sm",width:"100%"},children:[e(Z,{title:i("pageTitles.synthesis")}),e(o,{py:{sm:4,xs:2},children:e(F,{title:i("pageTitles.synthesis")})}),e(d,{m:{sm:2,xs:0},children:l(c,{container:!0,spacing:0,children:[e(c,{item:!0,xs:12,sm:6,my:-2,children:e(d,{children:e(o,{children:e(L,{})})})}),l(c,{container:!0,item:!0,xs:12,sm:6,direction:"column",alignItems:"center",justifyContent:"center",children:[e(o,{minHeight:"69px",children:e(xe,{})}),e(Q,{}),l(o,{width:"90%",children:[e(o,{minHeight:{sm:"62px",xs:"52px"},children:e(me,{})}),e(o,{minHeight:{sm:"62px",xs:"52px"},children:e(le,{})})]}),e(o,{minHeight:"77px",children:e(ie,{})})]})]})}),e(d,{children:e(P,{textbox:e(U,{rows:s==="xs"?3:4}),buttons:e(X,{}),variation:"synthesis"})}),e(d,{children:e(ne,{})})]})})}export{Ve as default};
