import{a as f,j as e,V as i}from"./setPrototypeOf.fd4aa278.js";import{u as x,af as l,a as v,H as _,B as n,C as p,A as C,aj as t,ao as s,a7 as A}from"./App.6f9591d6.js";import{M as F}from"./Meta.3ee40c2f.js";import{R as d,F as a,a as r}from"./RadioGroup.e448d57e.js";import"./index.3161768b.js";import"./index.module.01fcbc19.js";function H(){const{t:m,i18n:u}=x(),[b]=f.exports.useState([{name:"Oireachtas, November 2022",description_en:"84 participant recordings from the van",description_ga:"84 participant recordings from the van",image:"#",url:`${l}/apis/synthesis`},{name:"PhonLab, February 2022",description_en:"Sibeal 300 sentences from corpus x",description_ga:"Sibeal 300 sentences from corpus x",image:"#",url:`${l}/apis/recognition`},{name:"Oireachtas, November 2021",description_en:"56 participant recordings from the hotel",description_ga:"56 participant recordings from the hotel",image:"#",url:`${l}/apis/grammar`},{name:"PhonLab, August 2021",description_en:"Padraig 278 recordings from lab",description_ga:"Padraig 278 recordings from lab",image:"#",url:`${l}/apis/grammar`}]),{breakpointSize:g}=v(),c=o=>{window.location.replace(o)};return e(_,{pb:8,children:i(n,{sx:{width:"100%",maxWidth:"md"},children:[e(F,{title:m("pageTitles.APIs")}),e(p,{children:e(n,{sx:{maxWidth:"md",width:"100%"},py:{sm:4,xs:2},children:e(C,{title:m("pageTitles.APIs")})})}),i(t,{children:[e(s,{id:"demo-radio-buttons-group-label",children:"Gender"}),i(d,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",children:[e(a,{value:"female",control:e(r,{}),label:"Female"}),e(a,{value:"male",control:e(r,{}),label:"Male"})]})]}),i(t,{children:[e(s,{id:"demo-radio-buttons-group-label",children:"Age"}),i(d,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",children:[e(a,{value:"under 18",control:e(r,{}),label:"under 18"}),e(a,{value:"18-34",control:e(r,{}),label:"18-34"}),e(a,{value:"35-50",control:e(r,{}),label:"35-50"}),e(a,{value:"50+",control:e(r,{}),label:"50+"})]})]}),i(t,{children:[e(s,{id:"demo-radio-buttons-group-label",children:"Location"}),i(d,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",children:[e(a,{value:"Oireachtas",control:e(r,{}),label:"Oireachtas"}),e(a,{value:"Lab",control:e(r,{}),label:"Lab"}),e(a,{value:"Home",control:e(r,{}),label:"Home"})]})]}),e(p,{mt:2,children:e(n,{sx:{maxWidth:"md",width:"100%"},children:b.map((o,h)=>e(A,{onClick:()=>o.name==="An Bat M\xEDrialta"?c("/applications/bat-mirialta"):c(o.url),name:o.name,description:u.language==="en"?o.description_en:o.description_ga,image:o.image,message:"",breakpointSize:g},h))})})]})})}export{H as default};
