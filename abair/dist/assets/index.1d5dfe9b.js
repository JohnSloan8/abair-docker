import{a as r,j as e,V as i}from"./setPrototypeOf.fd4aa278.js";import{u as S,c as B,aa as A,H as T,A as W,C as h,G as l,ab as x,T as j,ac as d,ad as F,s as $,ae as E,g as H}from"./App.bffb0f55.js";import{M as k}from"./Meta.76ecbf21.js";import{B as c}from"./Box.46c5dc92.js";import"./index.608f81c6.js";import"./index.module.01fcbc19.js";function z(){const{t:a}=S(),[f,u]=r.exports.useState(!1),[w,y]=r.exports.useState(!1),[g,b]=r.exports.useState(""),[m,C]=r.exports.useState(""),o=B(),[t]=A(),v=async s=>{s.preventDefault(),u(!0),$.auth.signInWithPassword({email:g,password:m}).then(P=>{const{data:n,error:p}=P;console.log("data:",n),console.log("error:",p),u(!1),p&&(console.log("in error"),y(!0)),n.user&&n.session&&(console.log("in data"),t.get("origin")?window.location.href=`${E}/${t.get("origin")}`:o(`${H}profile`,{replace:!0}))})};return r.exports.useEffect(()=>{console.log("searchParams:",t.get("origin"))},[]),e(T,{children:i(c,{sx:{maxWidth:"sm",width:"100%"},children:[e(k,{title:a("pageTitles.login")}),e(c,{py:{sm:4,xs:2},children:e(W,{title:a("pages.auth.login")})}),e(h,{m:2,children:f?"Processing...":i(c,{component:"form",noValidate:!0,onSubmit:s=>{v(s)},sx:{mt:3},width:360,children:[i(l,{container:!0,spacing:0,children:[e(l,{item:!0,xs:12,my:1,children:e(x,{required:!0,fullWidth:!0,id:"email",label:a("pages.auth.emailAddress"),name:"email",autoComplete:"email",type:"email",placeholder:a("pages.auth.emailAddress"),value:g,onChange:s=>b(s.target.value)})}),e(l,{item:!0,xs:12,my:1,children:e(x,{required:!0,fullWidth:!0,name:"password",label:a("pages.auth.password"),type:"password",id:"password",autoComplete:"new-password",value:m,onChange:s=>C(s.target.value)})})]}),e(j,{sx:{visibility:w?"visible":"hidden"},align:"center",variant:"body2",color:"warning.main",children:a("pages.auth.incorrectEmailOrPassword")}),e(h,{sx:{width:"100%"},my:2,children:e(d,{type:"submit",variant:"contained",children:a("pages.auth.login")})}),i(F,{mt:4,sx:{width:"100%"},justifyContent:"space-between",children:[e(d,{sx:{color:"warning.main"},onClick:()=>{o("/forgot-password")},children:a("pages.auth.forgotPassword")}),e(d,{sx:{color:"secondary.main"},onClick:()=>{t.get("origin")!==null?o(`/sign-up?origin=${t.get("origin")}`):o("/sign-up")},children:a("pages.auth.createAccount")})]})]})})]})})}export{z as default};
