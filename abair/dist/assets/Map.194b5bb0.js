import{R as l,a4 as S,d,a as h,aa as f,V as I,j as c}from"./setPrototypeOf.fd4aa278.js";import{d as Y,a as Z,b as P}from"./index.b9789e70.js";import{B as x,k as m,z as ee,D as se,s as te,o as ne,p as ie,C as b,E as oe,q as ae,G as g,u as re,x as ce,r as D,i as E,j as G,f as ue,a as le,J as de,K as ye}from"./App.6f9591d6.js";const N=l({key:"synthesis-audio-state",default:""}),L=()=>{const[e,s]=d(N);return{synthesisAudio:e,setSynthesisAudio:s}},he=l({key:"synthesis-audios-state",default:[]}),fe=()=>{const[e,s]=d(he);return{synthesisAudios:e,setSynthesisAudios:s}},Se=S({key:"synthesis-audio-empty-state",get:({get:e})=>!(e(N).length>0)}),pe=l({key:"synthesis-audio-playing-state",default:!1}),ge=()=>{const[e,s]=d(pe);return{synthesisAudioPlaying:e,setSynthesisAudioPlaying:s}},me=l({key:"awaiting-synthesis-state",default:!1}),v=()=>{const[e,s]=d(me);return{awaitingSynthesis:e,setAwaitingSynthesis:s}},O=l({key:"synthesis-text-state",default:""}),j=()=>{const[e,s]=d(O);return{synthesisText:e,setSynthesisText:s}},xe=S({key:"synthesisTextEmptyStringState",get:({get:e})=>!(e(O).length>0)}),F=l({key:"synthesis-voice-index",default:-1}),ve=()=>{const[e,s]=d(F);return{synthesisVoiceIndex:e,setSynthesisVoiceIndex:s}},C=l({key:"synthesis-voice-options-state",default:[]}),z=()=>{const[e,s]=d(C);return{synthesisVoices:e,setSynthesisVoices:s}},Ce=l({key:"synthesis-pitch",default:1}),_e=()=>{const[e,s]=d(Ce);return{synthesisPitch:e,setSynthesisPitch:s}},Ae=l({key:"synthesis-speed",default:1}),Me=()=>{const[e,s]=d(Ae);return{synthesisSpeed:e,setSynthesisSpeed:s}},B=l({key:"synthesis-county",default:"Connemara"}),Ve=()=>{const[e,s]=d(B);return{synthesisCounty:e,setSynthesisCounty:s}},$=l({key:"synthesis-Model",default:""}),ke=()=>{const[e,s]=d($);return{synthesisModel:e,setSynthesisModel:s}},H=l({key:"synthesis-gender",default:"female"}),we=()=>{const[e,s]=d(H);return{synthesisGender:e,setSynthesisGender:s}},U=S({key:"synthesis-voice-selected",get:({get:e})=>{const s=e(F),r=e(C);if(s!==-1)return r[s]}}),We=S({key:"synthesis-model-options",get:({get:e})=>{const s=e(U);return s!==void 0?s.voices:[]}}),Re=S({key:"synthesis-voice-options",get:({get:e})=>{const s=e(C),r=e(B),o=e(H),u=e($),y=i=>{switch(r){case"Ulster":return i.filter(t=>t.locale==="Ulster");case"Connemara":return i.filter(t=>t.locale==="Connemara");case"Munster":return i.filter(t=>t.locale==="Munster");default:return i}},a=i=>{switch(o){case"male":return i.filter(t=>t.gender==="male");case"female":return i.filter(t=>t.gender==="female");default:return i}},n=i=>{switch(u){case"HTS":return i.filter(t=>t.voices.includes("HTS"));case"DNN":return i.filter(t=>t.voices.includes("DNN"));case"HTS-WORLD":return i.filter(t=>t.voices.includes("HTS-WORLD"));case"NEMO":return i.filter(t=>t.voices.includes("NEMO"));default:return i}};if(s!==void 0&&s.length!==0){const i=y(s),t=a(i);return n(t)}else return}}),Te=()=>{const[e,s]=h.exports.useState(!0),{synthesisAudio:r}=L(),o=f(Se),{awaitingSynthesis:u}=v(),{synthesisAudioPlaying:y,setSynthesisAudioPlaying:a}=ge(),n=h.exports.useRef(null),i=()=>{n.current!==void 0?n.current!==null?(n.current.play(),a(!0)):console.log("audio.current === null"):console.log("audio.current === undefined")},t=()=>{console.log("in stop"),n.current!==void 0?n.current!==null?(n.current.pause(),a(!1)):console.log("audio.current === null"):console.log("audio.current === undefined")};return h.exports.useEffect(()=>{e?s(!1):i()},[r]),I(x,{sx:{visibility:o||u?"hidden":"visible"},children:[y?c(m,{color:"secondary",onClick:()=>{t()},icon:Z}):c(m,{color:"secondary",onClick:()=>{i()},icon:Y}),c("audio",{src:r,ref:n,onEnded:t})]})},Ie=e=>e==="Connemara"?"ga_CO":e==="Ulster"?"ga_UL":"ga_MU",Pe=e=>e==="NEMO"?"nemo":e==="DNN"?"nnmnkwii":e==="HTS"?"exthts":e==="HTS-WORLD"?"exthts-WORLD":"",be=async(e,s,r,o,u)=>{console.log("currentVoice:",s),console.log("pitch:",o);const y=Pe(r),a=Ie(s.locale)+"_"+s.shortCode+"_"+y;console.log("voiceName:",a);try{const{data:n}=await P({method:"post",url:ee,headers:{"Content-Type":"application/json"},data:{synthinput:{text:e,ssml:"string"},voiceparams:{languageCode:"ga-IE",name:a,ssmlGender:"UNSPECIFIED"},audioconfig:{audioEncoding:"LINEAR16",speakingRate:u,pitch:o,volumeGainDb:1,htsParams:"string",sampleRateHertz:0,effectsProfileId:[]},outputType:"JSON"},timeout:1e4});if(n)return n}catch(n){return alert("error:"+n),!1}},q=async()=>{try{const{data:e}=await P({method:"get",url:se,timeout:1e4});if(e)return e.data}catch(e){return alert("error:"+e),!1}},De=async e=>{try{const{error:s}=await te.from("synthesis_requests").insert([e]);if(s)throw s}catch(s){alert(s.message)}},Ee=()=>{const{sessionID:e}=ne(),{session:s}=ie(),{synthesisText:r}=j(),{setSynthesisAudio:o}=L(),{setSynthesisAudios:u}=fe(),y=f(xe),a=f(U),n=f(Re),{synthesisVoices:i,setSynthesisVoices:t}=z(),{synthesisVoiceIndex:M,setSynthesisVoiceIndex:V}=ve(),{awaitingSynthesis:K,setAwaitingSynthesis:k}=v(),{synthesisModel:w,setSynthesisModel:Q}=ke(),{synthesisPitch:R}=_e(),{synthesisSpeed:T}=Me();return h.exports.useEffect(()=>{i.length===0&&q().then(p=>{t(p)})},[]),h.exports.useEffect(()=>{n!==void 0&&(n.length===0?V(-1):V(i.indexOf(n[0])))},[n]),h.exports.useEffect(()=>{a!==void 0&&Q(a.voices[a.voices.length-1])},[a]),c(b,{children:K?c(ae,{}):c(m,{disabled:y||M===-1,color:"secondary",onClick:()=>{k(!0),o(""),a!==void 0&&be(r,a,w,R,T).then(p=>{o("data:audio/wav;base64,"+p.audioContent),u(X=>[{voice:a.name,model:w,speed:T.toString(),pitch:R.toString(),audioData:"data:audio/wav;base64,"+p.audioContent,text:r},...X]),k(!1),De({user_id:s===null?null:s.user.id,session_ID:e,text:r})})},icon:oe})})},Je=()=>c(x,{sx:{width:"100%",height:"100%",position:"relative"},children:I(g,{container:!0,direction:"row",height:"100%",children:[c(g,{item:!0,xs:4}),c(g,{item:!0,xs:4,children:c(Ee,{})}),c(g,{item:!0,xs:4,children:c(b,{children:c(Te,{})})})]})}),Ke=({rows:e=4})=>{const{synthesisText:s,setSynthesisText:r}=j(),{awaitingSynthesis:o}=v(),{t:u}=re(),{synthesisVoices:y,setSynthesisVoices:a}=z();return h.exports.useEffect(()=>{y.length===0&&q().then(n=>{a(n)})},[]),c(ce,{label:u("pages.home.writeHere"),rows:e,disabled:!!o,autoFocus:!1,value:s,onChange:n=>{r(n)}})};var _={},Ge=E.exports;Object.defineProperty(_,"__esModule",{value:!0});var W=_.default=void 0,Ne=Ge(D()),Le=G,Oe=(0,Ne.default)((0,Le.jsx)("path",{d:"M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4zm-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5z"}),"Female");W=_.default=Oe;var A={},je=E.exports;Object.defineProperty(A,"__esModule",{value:!0});var J=A.default=void 0,Fe=je(D()),ze=G,Be=(0,Fe.default)((0,ze.jsx)("path",{d:"M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z"}),"Male");J=A.default=Be;const Qe=()=>{const{synthesisGender:e,setSynthesisGender:s}=we();return c(x,{children:[{name:"male",icon:J},{name:"female",icon:W}].map(o=>c(m,{selected:o.name===e,color:"secondary",onClick:()=>{s(o.name)},icon:o.icon},o.name))})},Xe=()=>{const{synthesisCounty:e,setSynthesisCounty:s}=Ve(),r=["Ulster","Connemara","Munster"],o=f(ue),{breakpointSize:u}=le(),y=de();return c(ye,{height:y.pathname==="/speech-synthesis"?u==="xs"?260:340:u==="xs"?o-90:o-65,gaeltachts:r,selectedCounty:e,setSelectedCounty:a=>s(a)})};export{Qe as G,Xe as M,Ke as S,_e as a,Je as b,fe as c,ke as d,ve as e,U as f,Re as g,z as h,We as s,Me as u};
