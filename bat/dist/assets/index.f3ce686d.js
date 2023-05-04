import{L as b,j as t,X as E,a as k}from"./setPrototypeOf.96237ccd.js";import{u as Y,a as Z,b as ee,c as ae,R as se,m as A}from"./usePopulateVerbsTensesForms.6597666a.js";import{u as te,M as ne}from"./robot.ef94f4f1.js";import{s as q,_ as re,g as D,e as w,h as I,i as T,as as P,at as V,f as R,j as oe,k as ie,au as le,av as ce,aw as ue,ax as de,b as Q,O as he,Q as me,u as be,a as _,d as ge,W as pe,H as fe,S as xe,P as ve,ay as Ee,B as u,T as y,A as ye,C}from"./App.c1c89999.js";import{b as Ce}from"./index.1943cf64.js";import{c as Se,S as ke}from"./usePushRandomResponse.e4b5d367.js";import{B as F}from"./BatBox.a522d057.js";import"./index.module.99d47a0b.js";import"./translationGA.a39e0647.js";const De=async(n,a,r,e,s,o)=>{console.log("userID:",n);try{const{data:l,error:i}=await q.from("bat_chats").insert({user_id:n,verb:a,tense:r,form:e,questions:s,intro:o}).select("*").single();if(i)throw i;if(l)return l}catch(l){alert(l.message)}},we=async(n,a,r)=>{try{const{data:e,error:s}=await q.from("bat_questions").select("id").in("verb_id",n).in("tense_id",a).in("form_id",r);if(s)throw s;return e}catch(e){alert(e.message)}},Ie=()=>{const{profile:n}=re(),{selectedVerb:a}=D(),{t:r}=w(),{selectedTense:e}=I(),{selectedForm:s}=T(),o=Se();return()=>{let i=o([],"filler","intro","greeting","naive",{name:n!==null&&n.username!==null?n.username:"there"});return i=o(i,"filler","intro","taskDescription","basic",{verb:a!==void 0?a.name:r("task.allVerbs"),tense:e!==void 0?e.name:r("task.allTenses"),form:s!==void 0?s.name:r("task.allForms")}),i=o(i,"filler","intro","questionDescription","basic",{}),i=o(i,"filler","intro","getReady","basic",{}),i}},S=({label:n,value:a,handleChange:r,items:e,all:s=!0,allDisplay:o=""})=>b(ke,{label:n,value:a,onChange:r,sx:{width:"100%",color:"#fff",textAlign:"center"},children:[s&&t(P,{value:"all",children:o},"all"),e.map((l,i)=>t(P,{value:l,children:l},i))]});function Te(){const{selectedVerb:n}=D(),{selectedTense:a}=I(),{selectedForm:r}=T(),{setQuestionSet:e}=V(),{verbs:s}=R(),{tenses:o}=oe(),{forms:l}=ie();return()=>{const f=n!==void 0?[n.id]:s.map(d=>d.id),x=a!==void 0?[a.id]:o.map(d=>d.id),g=r!==void 0?[r.id]:l.map(d=>d.id);we(f,x,g).then(d=>{d!==void 0?e(d.map(p=>p.id)):console.log("question set undefined")})}}const Ae=(n,a)=>{const r=new Array(a);let e=n.length;const s=new Array(e);for(a>e&&(a=e);a--;){const o=Math.floor(Math.random()*e);r[a]=n[o in s?s[o]:o],s[o]=--e in s?s[e]:e}return r},Pe=()=>{const n=E(le),{selectedVerb:a,setSelectedVerb:r}=D(),e=E(ce),{selectedTense:s,setSelectedTense:o}=I(),l=E(ue),{selectedForm:i,setSelectedForm:f}=T(),{noQuestions:x}=de(),{questionSet:g}=V(),[d,p]=k.exports.useState(!1),{chats:j,setChats:B}=Q(),{setIntro:M}=he(),{setOutro:O}=me(),H=be(),{session:v}=_(),G=Te(),N=Ie(),{setAdjacencyPairs:W}=ge(),{setAnimatingOutro:$}=pe(),z=()=>{v!==null&&(p(!0),G())},{setMessageInputDisabled:L}=fe(),{t:h}=w(),{setShowAvailablePoints:X}=xe(),{setShowPoints:J}=ve(),{setShowHome:K}=Ee();return k.exports.useEffect(()=>{if(g.length!==0&&v!==null&&d){p(!1),J(!1),K(!1),X(!0),M([]),O([]),W([]),L(!0),$(!1);const c=N(),m=Ae(g,x);De(v.user.id,a!==void 0?a.name:null,s!==void 0?s.name:null,i!==void 0?i.name:null,m,c).then(U=>{B([...j,U]),H(`${Ce}chat`)})}console.log("availableVerbs:",n)},[g]),b(F,{children:[b(u,{children:[t(y,{align:"center",variant:"h6",children:h("headers.verb")}),t(u,{border:2,borderColor:"primary.dark",borderRadius:1.5,children:t(S,{handleChange:c=>{r(n.find(m=>m.name===c.target.value))},value:a!==void 0?a.name:"all",label:"Verbs",items:n.map(c=>c.name),allDisplay:h("task.allVerbs")})})]}),b(u,{mt:1,children:[t(y,{align:"center",variant:"h6",children:h("headers.tense")}),t(u,{border:2,borderColor:"primary.dark",borderRadius:1.5,children:t(S,{handleChange:c=>{o(e.find(m=>m.name===c.target.value))},value:s!==void 0?s.name:"all",label:"Tenses",items:e.map(c=>c.name),allDisplay:h("task.allTenses")})})]}),b(u,{mt:1,children:[t(y,{align:"center",variant:"h6",children:h("headers.form")}),t(u,{border:2,borderColor:"primary.dark",borderRadius:1.5,children:t(S,{handleChange:c=>{f(l.find(m=>m.name===c.target.value))},value:i!==void 0?i.name:"all",label:"Forms",items:l.map(c=>c.name),allDisplay:h("task.allForms")})})]}),t(u,{mt:3,children:t(F,{button:!0,width:"100%",children:t(ye,{size:"large",fullWidth:!0,label:h("buttons.start"),onClick:()=>{z()},selected:!0,color:"secondary"})})})]})},Fe=()=>{Y(),Z(),ee();const{verbs:n}=R(),{chats:a}=Q(),{session:r}=_(),e=ae(),s=te(),{i18n:o}=w();return k.exports.useEffect(()=>{n.length===0&&e(),a.length===0&&r!==null&&s(r.user.id)},[r]),b(u,{children:[t(ne,{title:"SetTask"}),t(C,{pt:2,children:t(se,{})}),t(C,{py:1,px:2,flexDirection:"column",children:b(u,{width:"95%",height:150,children:[t(u,{width:"100%",height:"100%",sx:{display:o.language==="ga"?"block":"none"},children:t(A,{style:{height:150,width:"100%"},sequence:[1e3,"Pioc briathar, ",200,"Pioc briathar, aimsir,",200,`Pioc briathar, aimsir, agus foirm.
`,500,`Pioc briathar, aimsir, agus foirm.
Cuirfidh m\xE9 5 gceist ort le`,200,`Pioc briathar, aimsir, agus foirm.
Cuirfidh m\xE9 5 gceist ort le 'l\xEDon na bearna\xED'`,200,`Pioc briathar, aimsir, agus foirm.
Cuirfidh m\xE9 5 gceist ort le 'l\xEDon na bearna\xED' iontu.`,500,`Pioc briathar, aimsir, agus foirm.
Cuirfidh m\xE9 5 gceist ort le 'l\xEDon na bearna\xED' iontu.
Is f\xE9idir liom cabhr\xFA leat tr\xED nodanna agus molta\xED a thabhairt duit.`,500,`Pioc briathar, aimsir, agus foirm.
Cuirfidh m\xE9 5 gceist ort le 'l\xEDon na bearna\xED' iontu.
Is f\xE9idir liom cabhr\xFA leat tr\xED nodanna agus molta\xED a thabhairt duit.
T\xE1 10 bpointe ag dul ar gach ceist.`,400,`Pioc briathar, aimsir, agus foirm.
Cuirfidh m\xE9 5 gceist ort le 'l\xEDon na bearna\xED' iontu.
Is f\xE9idir liom cabhr\xFA leat tr\xED nodanna agus molta\xED a thabhairt duit.
T\xE1 10 bpointe ag dul ar gach ceist..`,400,`Pioc briathar, aimsir, agus foirm.
Cuirfidh m\xE9 5 gceist ort le 'l\xEDon na bearna\xED' iontu.
Is f\xE9idir liom cabhr\xFA leat tr\xED nodanna agus molta\xED a thabhairt duit.
T\xE1 10 bpointe ag dul ar gach ceist...`,500,`Pioc briathar, aimsir, agus foirm.
Cuirfidh m\xE9 5 gceist ort le 'l\xEDon na bearna\xED' iontu.
Is f\xE9idir liom cabhr\xFA leat tr\xED nodanna agus molta\xED a thabhairt duit.
T\xE1 10 bpointe ag dul ar gach ceist...
An bhfuil t\xFA in ann 50 a shroichint? `],wrapper:"span",cursor:!0,repeat:0})}),t(u,{width:"100%",height:"100%",sx:{display:o.language==="en"?"block":"none"},children:t(A,{style:{height:170,width:"100%"},sequence:[1e3,"Choose a verb, ",200,"Choose a verb, tense,",200,`Choose a verb, tense, and form to practice.
`,500,`Choose a verb, tense, and form to practice.
I will ask you 5`,200,`Choose a verb, tense, and form to practice.
I will ask you 5 'fill in the blank'`,200,`Choose a verb, tense, and form to practice.
I will ask you 5 'fill in the blank' questions.`,500,`Choose a verb, tense, and form to practice.
I will ask you 5 'fill in the blank' questions.
I can help by giving hints and suggestions.`,500,`Choose a verb, tense, and form to practice.
I will ask you 5 'fill in the blank' questions.
I can help by giving hints and suggestions.
There are 10 points per question.`,400,`Choose a verb, tense, and form to practice.
I will ask you 5 'fill in the blank' questions.
I can help by giving hints and suggestions.
There are 10 points per question..`,400,`Choose a verb, tense, and form to practice.
I will ask you 5 'fill in the blank' questions.
I can help by giving hints and suggestions.
There are 10 points per question...`,500,`Choose a verb, tense, and form to practice.
I will ask you 5 'fill in the blank' questions.
I can help by giving hints and suggestions.
There are 10 points per question...
Can you score 50?`],wrapper:"span",cursor:!0,repeat:0})})]})}),t(C,{children:t(Pe,{})})]})},He=Fe;export{He as default};
