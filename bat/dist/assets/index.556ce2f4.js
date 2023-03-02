import{a as H,u as C,b as k,c as q,d as W,e as V,f as J,g as X,h as Y,i as ee,j as te,k as se,l as ne,M as re}from"./index.0fad6825.js";import{a as h,_ as w,p as oe,j as a,F as B,G as j,H as E,y as S,I as G}from"./createTheme.2c03f597.js";import{g as ie,a as ae,s as ce,u as le,b as ue,e as de,c as pe,d as me,f as I,T as $,A as F,B as v,h as fe}from"./App.28b33096.js";import{b as ge}from"./index.91250180.js";import"./index.module.5b592f9c.js";const he=h.exports.createContext(),A=he;function xe(e){return ie("MuiGrid",e)}const Se=[0,1,2,3,4,5,6,7,8,9,10],be=["column-reverse","column","row-reverse","row"],ve=["nowrap","wrap-reverse","wrap"],b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],we=ae("MuiGrid",["root","container","item","zeroMinWidth",...Se.map(e=>`spacing-xs-${e}`),...be.map(e=>`direction-xs-${e}`),...ve.map(e=>`wrap-xs-${e}`),...b.map(e=>`grid-xs-${e}`),...b.map(e=>`grid-sm-${e}`),...b.map(e=>`grid-md-${e}`),...b.map(e=>`grid-lg-${e}`),...b.map(e=>`grid-xl-${e}`)]),y=we,$e=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function g(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function ye({theme:e,ownerState:t}){let s;return e.breakpoints.keys.reduce((n,r)=>{let o={};if(t[r]&&(s=t[r]),!s)return n;if(s===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=B({values:t.columns,breakpoints:e.breakpoints.values}),l=typeof c=="object"?c[r]:c;if(l==null)return n;const i=`${Math.round(s/l*1e8)/1e6}%`;let u={};if(t.container&&t.item&&t.columnSpacing!==0){const d=e.spacing(t.columnSpacing);if(d!=="0px"){const p=`calc(${i} + ${g(d)})`;u={flexBasis:p,maxWidth:p}}}o=w({flexBasis:i,flexGrow:0,maxWidth:i},u)}return e.breakpoints.values[r]===0?Object.assign(n,o):n[e.breakpoints.up(r)]=o,n},{})}function ke({theme:e,ownerState:t}){const s=B({values:t.direction,breakpoints:e.breakpoints.values});return j({theme:e},s,n=>{const r={flexDirection:n};return n.indexOf("column")===0&&(r[`& > .${y.item}`]={maxWidth:"none"}),r})}function D({breakpoints:e,values:t}){let s="";Object.keys(t).forEach(r=>{s===""&&t[r]!==0&&(s=r)});const n=Object.keys(e).sort((r,o)=>e[r]-e[o]);return n.slice(0,n.indexOf(s))}function Te({theme:e,ownerState:t}){const{container:s,rowSpacing:n}=t;let r={};if(s&&n!==0){const o=B({values:n,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=D({breakpoints:e.breakpoints.values,values:o})),r=j({theme:e},o,(l,i)=>{var u;const d=e.spacing(l);return d!=="0px"?{marginTop:`-${g(d)}`,[`& > .${y.item}`]:{paddingTop:g(d)}}:(u=c)!=null&&u.includes(i)?{}:{marginTop:0,[`& > .${y.item}`]:{paddingTop:0}}})}return r}function Ce({theme:e,ownerState:t}){const{container:s,columnSpacing:n}=t;let r={};if(s&&n!==0){const o=B({values:n,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=D({breakpoints:e.breakpoints.values,values:o})),r=j({theme:e},o,(l,i)=>{var u;const d=e.spacing(l);return d!=="0px"?{width:`calc(100% + ${g(d)})`,marginLeft:`-${g(d)}`,[`& > .${y.item}`]:{paddingLeft:g(d)}}:(u=c)!=null&&u.includes(i)?{}:{width:"100%",marginLeft:0,[`& > .${y.item}`]:{paddingLeft:0}}})}return r}function We(e,t,s={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[s[`spacing-xs-${String(e)}`]];const n=[];return t.forEach(r=>{const o=e[r];Number(o)>0&&n.push(s[`spacing-${r}-${String(o)}`])}),n}const Ve=ce("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e,{container:n,direction:r,item:o,spacing:c,wrap:l,zeroMinWidth:i,breakpoints:u}=s;let d=[];n&&(d=We(c,u,t));const p=[];return u.forEach(m=>{const f=s[m];f&&p.push(t[`grid-${m}-${String(f)}`])}),[t.root,n&&t.container,o&&t.item,i&&t.zeroMinWidth,...d,r!=="row"&&t[`direction-xs-${String(r)}`],l!=="wrap"&&t[`wrap-xs-${String(l)}`],...p]}})(({ownerState:e})=>w({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),ke,Te,Ce,ye);function Be(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const s=[];return t.forEach(n=>{const r=e[n];if(Number(r)>0){const o=`spacing-${n}-${String(r)}`;s.push(o)}}),s}const Ge=e=>{const{classes:t,container:s,direction:n,item:r,spacing:o,wrap:c,zeroMinWidth:l,breakpoints:i}=e;let u=[];s&&(u=Be(o,i));const d=[];i.forEach(m=>{const f=e[m];f&&d.push(`grid-${m}-${String(f)}`)});const p={root:["root",s&&"container",r&&"item",l&&"zeroMinWidth",...u,n!=="row"&&`direction-xs-${String(n)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,...d]};return me(p,xe,t)},Fe=h.exports.forwardRef(function(t,s){const n=le({props:t,name:"MuiGrid"}),{breakpoints:r}=ue(),o=de(n),{className:c,columns:l,columnSpacing:i,component:u="div",container:d=!1,direction:p="row",item:m=!1,rowSpacing:f,spacing:N=0,wrap:K="wrap",zeroMinWidth:O=!1}=o,M=oe(o,$e),L=f||N,Q=i||N,U=h.exports.useContext(A),z=d?l||12:U,P={},R=w({},M);r.keys.forEach(T=>{M[T]!=null&&(P[T]=M[T],delete R[T])});const _=w({},o,{columns:z,container:d,direction:p,item:m,rowSpacing:L,columnSpacing:Q,wrap:K,zeroMinWidth:O,spacing:N},P,{breakpoints:r.keys}),Z=Ge(_);return a(A.Provider,{value:z,children:a(Ve,w({ownerState:_,className:pe(Z.root,c),as:u,ref:s},R))})}),x=Fe,Ne=async(e,t)=>{try{const{data:s,error:n}=await I.rpc("getforms",{v_id:e,t_id:t});if(n)throw n;return s}catch(s){alert(s.message)}},Me=async e=>{try{const{data:t,error:s}=await I.rpc("gettenses",{v_id:e});if(s)throw s;return t}catch(t){alert(t.message)}},je=()=>{const e=E(H),{selectedForm:t,setSelectedForm:s}=C(),{setShowStart:n}=k(),r=o=>{s(t===o?void 0:o),n(!0)};return S(G,{children:[a($,{py:2,align:"center",children:"Roghnaigh foirm"}),a(x,{container:!0,direction:"row",spacing:{sm:1,xs:.5},sx:{flexWrap:"wrap",marginBottom:2},justifyContent:"center",maxWidth:"xs",px:{sm:4,xs:2},children:e.map((o,c)=>a(x,{item:!0,children:a(F,{label:o.name,onClick:()=>{r(o)},selected:o===t,color:"secondary"})},c))})]})},ze=()=>{const e=E(q),{selectedVerb:t}=W(),{selectedTense:s,setSelectedTense:n}=V(),{setSelectedForm:r}=C(),{setShowStart:o}=k(),{setAvailableFormIDs:c}=J(),l=i=>{n(s===i?void 0:i),r(void 0),o(!1)};return h.exports.useEffect(()=>{s!==void 0&&t!==void 0&&Ne(t.id,s.id).then(i=>{c(i)})},[s]),S(G,{children:[a($,{py:2,align:"center",children:"Roghnaigh aimsir"}),a(x,{container:!0,direction:"row",spacing:{sm:1,xs:.5},sx:{flexWrap:"wrap",marginBottom:2},justifyContent:"center",maxWidth:"xs",px:{sm:4,xs:2},children:e.map((i,u)=>a(x,{item:!0,children:a(F,{label:i.name,onClick:()=>{l(i)},selected:i===s,color:"secondary"})},u))})]})},Pe=()=>{const{verbs:e}=X(),{selectedVerb:t,setSelectedVerb:s}=W(),{setShowStart:n}=k(),{setSelectedForm:r}=C(),{setSelectedTense:o}=V(),{setAvailableTenseIDs:c}=Y(),l=i=>{s(t===i?void 0:i),o(void 0),r(void 0),n(!1)};return h.exports.useEffect(()=>{t!==void 0&&Me(t.id).then(i=>{c(i)})},[t]),S(G,{children:[a($,{align:"center",py:2,children:"Roghnaigh briathar"}),a(x,{container:!0,direction:"row",spacing:{sm:1,xs:.5},sx:{flexWrap:"wrap",marginBottom:2},justifyContent:"center",maxWidth:"xs",px:{sm:4,xs:2},children:e.map((i,u)=>a(x,{item:!0,children:a(F,{label:i!==void 0?i.name:"",onClick:()=>{l(i)},selected:t!==void 0?i===t:!1,color:"secondary"})},u))})]})},Re=()=>{const{selectedVerb:e,setSelectedVerb:t}=W(),{selectedTense:s,setSelectedTense:n}=V(),r=ee(),{setQuestions:o}=te(),{setShowStart:c}=k();return h.exports.useEffect(()=>{r(),o([]),t(void 0),n(void 0),c(!1)},[]),S(v,{children:[a(v,{children:a(Pe,{})}),e!==void 0&&a(v,{children:a(ze,{})}),e!==void 0&&s!==void 0&&a(v,{children:a(je,{})})]})},_e=()=>{const e=fe(),{setQuestionSet:t}=se(),{showStart:s}=k(),{selectedVerb:n}=W(),{selectedTense:r}=V(),{selectedForm:o}=C();return s?S(v,{children:[a($,{py:2,align:"center",children:"Ar aghaidh linn"}),a($,{align:"center",children:a(F,{label:"Tosaigh",onClick:()=>{n!==void 0&&r!==void 0&&o!==void 0?ne(n.id,r.id,o.id).then(l=>{l&&(t(()=>l),l.length>0&&e(`${ge}chat`))}):alert("undefined task")},selected:!0,color:"primary"})})]}):null},Ae=()=>S(G,{children:[a(re,{title:"Welcome"}),a(Re,{}),a(_e,{})]}),Le=Ae;export{Le as default};