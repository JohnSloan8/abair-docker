import{a as r,j as e,V as d}from"./setPrototypeOf.fd4aa278.js";import{u as g,c as P,H as b,A as v,C as l,G as p,ab as y,ac as B,s as C,g as S}from"./App.bffb0f55.js";import{M as T}from"./Meta.76ecbf21.js";import{v as j}from"./validatePassword.13cdebb8.js";import{B as o}from"./Box.46c5dc92.js";import"./index.608f81c6.js";import"./index.module.01fcbc19.js";function G(){const{t}=g(),[u,n]=r.exports.useState(!1),[s,c]=r.exports.useState(""),[m,i]=r.exports.useState(!1),w=P();r.exports.useEffect(()=>{const a=j(s);i(!!a)},[s]);const h=async a=>{a.preventDefault(),n(!0);const{data:x,error:f}=await C.auth.updateUser({password:s});console.log("data:",x),console.log("error:",f),n(!1),w(`${S}`)};return e(b,{children:d(o,{sx:{maxWidth:"sm",width:"100%"},children:[e(T,{title:t("pageTitles.updatePassword")}),e(o,{py:{sm:4,xs:2},children:e(v,{title:t("pages.auth.updatePassword")})}),e(l,{m:2,children:u?"Processing...":d(o,{component:"form",noValidate:!0,onSubmit:a=>{h(a)},sx:{mt:3},width:360,children:[e(p,{container:!0,spacing:0,children:e(p,{item:!0,xs:12,my:1,children:e(y,{required:!0,fullWidth:!0,name:"password",label:t("pages.auth.password"),type:"password",id:"newPassword",autoComplete:"new-password",value:s,onChange:a=>c(a.target.value),helperText:!m&&s!==""?"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character":""})})}),e(l,{sx:{width:"100%",position:"relative"},my:2,children:e(B,{type:"submit",variant:"contained",children:t("pages.auth.updatePassword")})})]})})]})})}export{G as default};
