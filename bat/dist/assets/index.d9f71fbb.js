import{f as l}from"./App.e9745c70.js";import{W as h}from"./index.module.5b592f9c.js";import{d,t as g}from"./index.9fa419e0.js";import{j as k,R as a,J as c,d as r}from"./createTheme.2c03f597.js";const F=async()=>{try{const{data:e,error:t}=await l.from("bat_forms").select("*");if(t)throw t;return e}catch(e){alert(e.message)}},T=async()=>{try{const{data:e,error:t}=await l.from("bat_tenses").select("*");if(t)throw t;return e}catch(e){alert(e.message)}},w=async()=>{try{const{data:e,error:t}=await l.from("bat_verbs").select("*");if(t)throw t;return e}catch(e){alert(e.message)}},R=async(e,t,o)=>{try{const{data:n,error:s}=await l.from("bat_questions").select("*").eq("verb_id",e).eq("tense_id",t).eq("form_id",o);if(s)throw s;return n}catch(n){alert(n.message)}};function M({description:e=d.description,meta:t=[],title:o,image:n=d.image}){const s=`${g}${o?" | "+o:""}`;return k(h,{title:s,meta:[{name:"description",content:e},{property:"og:title",content:s},{property:"og:description",content:e},{property:"og:type",content:"website"},{property:"og:image",content:n},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:s},{name:"twitter:description",content:e}].concat(t)})}const m=a({key:"verbs-state",default:[]}),q=()=>{const[e,t]=r(m);return{verbs:e,setVerbs:t}},f=a({key:"selected-verb-state",default:void 0}),P=()=>{const[e,t]=r(f);return{selectedVerb:e,setSelectedVerb:t}},i=a({key:"tenses-state",default:[]}),_=()=>{const[e,t]=r(i);return{tenses:e,setTenses:t}},b=a({key:"available-tenseIDs-state",default:[]}),J=()=>{const[e,t]=r(b);return{availabletenseIDs:e,setAvailableTenseIDs:t}},v=a({key:"selected-tense-state",default:void 0}),W=()=>{const[e,t]=r(v);return{selectedTense:e,setSelectedTense:t}},$=c({key:"available-tenses",get:({get:e})=>{const t=e(b),n=e(i).filter(s=>t.includes(s.id));return n!==void 0?n:[]}}),u=a({key:"forms-state",default:[]}),V=()=>{const[e,t]=r(u);return{forms:e,setForms:t}},S=a({key:"available-FormIDs-state",default:[]}),z=()=>{const[e,t]=r(S);return{availableFormIDs:e,setAvailableFormIDs:t}},y=a({key:"selected-form-state",default:void 0}),B=()=>{const[e,t]=r(y);return{selectedForm:e,setSelectedForm:t}},C=c({key:"available-forms",get:({get:e})=>{const t=e(S),n=e(u).filter(s=>t.includes(s.id));return n!==void 0?n:[]}}),D=a({key:"show-start-state",default:!1}),E=()=>{const[e,t]=r(D);return{showStart:e,setShowStart:t}},G=c({key:"task-selected",get:({get:e})=>{const t=e(f),o=e(v),n=e(y);return t!==void 0&&o!==void 0&&n!==void 0}}),H=c({key:"tasks-populated",get:({get:e})=>{const t=e(m),o=e(i),n=e(u);return t.length!==0&&o.length!==0&&n.length!==0}});function K(){const{setVerbs:e}=q(),{setTenses:t}=_(),{setForms:o}=V();return()=>{w().then(s=>{s!==void 0?e(s):alert("v is undefined")}),T().then(s=>{s!==void 0?t(s):alert("t is undefined")}),F().then(s=>{s!==void 0?o(s):alert("f is undefined")})}}const p=a({key:"questions-state",default:[]}),L=()=>{const[e,t]=r(p);return{questions:e,setQuestions:t}},I=a({key:"question-set-state",default:[]}),N=()=>{const[e,t]=r(I);return{questionSet:e,setQuestionSet:t}},O=c({key:"current-question-state",get:({get:e})=>{const t=e(p);if(t.length!==0)return t[t.length-1]}});export{M,C as a,E as b,$ as c,P as d,W as e,z as f,q as g,J as h,K as i,L as j,N as k,R as l,O as m,G as n,_ as o,V as p,p as q,H as t,B as u};
