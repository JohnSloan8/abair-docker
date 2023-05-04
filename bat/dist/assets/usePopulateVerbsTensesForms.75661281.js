import{X as I,a as d,j as V}from"./setPrototypeOf.96237ccd.js";import{s as a,c as y,g as u,h as m,i as b,f as p,j as A,k as F,I as D,l as h,m as w,n as g}from"./App.f6db2e07.js";import{r as S}from"./robot.3e6e89fc.js";const l=async(e,r)=>{try{if(e===void 0&&r===void 0){const{data:t,error:s}=await a.rpc("getforms");if(s)throw s;return t}else if(e===void 0){const{data:t,error:s}=await a.rpc("getformsfromtense",{t_id:r});if(s)throw s;return t}else if(r===void 0){const{data:t,error:s}=await a.rpc("getformsfromverb",{v_id:e});if(s)throw s;return t}else{const{data:t,error:s}=await a.rpc("getformsfromverbandtense",{v_id:e,t_id:r});if(s)throw s;return t}}catch(t){alert(t.message)}},v=async(e,r)=>{try{if(e===void 0&&r===void 0){const{data:t,error:s}=await a.rpc("gettenses");if(s)throw s;return t}else if(e===void 0){const{data:t,error:s}=await a.rpc("gettensesfromform",{f_id:r});if(s)throw s;return t}else if(r===void 0){const{data:t,error:s}=await a.rpc("gettensesfromverb",{v_id:e});if(s)throw s;return t}else{const{data:t,error:s}=await a.rpc("gettensesfromverbandform",{v_id:e,f_id:r});if(s)throw s;return t}}catch(t){alert(t.message)}},f=async(e,r)=>{try{if(e===void 0&&r===void 0){const{data:t,error:s}=await a.rpc("getverbs");if(s)throw s;return t}else if(e===void 0){const{data:t,error:s}=await a.rpc("getverbsfromform",{f_id:r});if(s)throw s;return t}else if(r===void 0){const{data:t,error:s}=await a.rpc("getverbsfromtense",{t_id:e});if(s)throw s;return t}else{const{data:t,error:s}=await a.rpc("getverbsfromtenseandform",{t_id:e,f_id:r});if(s)throw s;return t}}catch(t){alert(t.message)}},x=async()=>{try{const{data:e,error:r}=await a.from("bat_forms").select("*");if(r)throw r;return e}catch(e){alert(e.message)}},E=async()=>{try{const{data:e,error:r}=await a.from("bat_tenses").select("*");if(r)throw r;return e}catch(e){alert(e.message)}},j=async()=>{try{const{data:e,error:r}=await a.from("bat_verbs").select("*");if(r)throw r;return e}catch(e){alert(e.message)}};function G(){const e=I(y),{setSelectedVerb:r}=u(),{setSelectedTense:t}=m(),{setSelectedForm:s}=b(),{verbs:c}=p(),{tenses:n}=A(),{forms:i}=F();return d.exports.useEffect(()=>{e!==void 0&&(r(c.find(o=>o.name===e.verb)),t(n.find(o=>o.name===e.tense)),s(i.find(o=>o.name===e.form)))},[e]),null}const L=()=>V(D,{duration:1e3,height:150,width:150,easing:"ease-out",alt:"Abair Applications",src:S,showLoading:!0}),P=()=>{const{availableVerbIDs:e}=h(),{availableTenseIDs:r}=w(),{availableFormIDs:t}=g(),{selectedVerb:s,setSelectedVerb:c}=u(),{selectedTense:n,setSelectedTense:i}=m(),{selectedForm:o,setSelectedForm:T}=b();return d.exports.useEffect(()=>{s!==void 0&&(e.includes(s.id)||c(void 0))},[e]),d.exports.useEffect(()=>{n!==void 0&&(r.includes(n.id)||i(void 0))},[r]),d.exports.useEffect(()=>{o!==void 0&&(t.includes(o.id)||T(void 0))},[t]),null},X=()=>{const{selectedVerb:e}=u(),{selectedTense:r}=m(),{selectedForm:t}=b(),{setAvailableVerbIDs:s}=h(),{setAvailableTenseIDs:c}=w(),{setAvailableFormIDs:n}=g();return d.exports.useEffect(()=>{l(e!==void 0?e.id:void 0,r!==void 0?r.id:void 0).then(i=>{n(i!==void 0?i:[])}),v(e!==void 0?e.id:void 0,t!==void 0?t.id:void 0).then(i=>{c(i!==void 0?i:[])})},[e]),d.exports.useEffect(()=>{f(r!==void 0?r.id:void 0,t!==void 0?t.id:void 0).then(i=>{s(i!==void 0?i:[])}),l(e!==void 0?e.id:void 0,r!==void 0?r.id:void 0).then(i=>{n(i!==void 0?i:[])})},[r]),d.exports.useEffect(()=>{f(r!==void 0?r.id:void 0,t!==void 0?t.id:void 0).then(i=>{s(i!==void 0?i:[])}),v(e!==void 0?e.id:void 0,t!==void 0?t.id:void 0).then(i=>{c(i!==void 0?i:[])})},[t]),null};function q(){const{setVerbs:e}=p(),{setTenses:r}=A(),{setForms:t}=F(),{setAvailableVerbIDs:s}=h(),{setAvailableTenseIDs:c}=w(),{setAvailableFormIDs:n}=g();return()=>{j().then(o=>{o!==void 0?e(o):alert("v is undefined")}),E().then(o=>{o!==void 0?r(o):alert("t is undefined")}),x().then(o=>{o!==void 0?t(o):alert("f is undefined")}),f(void 0,void 0).then(o=>{o!==void 0&&s(o)}),v(void 0,void 0).then(o=>{o!==void 0&&c(o)}),l(void 0,void 0).then(o=>{o!==void 0&&n(o)})}}export{L as R,X as a,G as b,q as c,P as u};