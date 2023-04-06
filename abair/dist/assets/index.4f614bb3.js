import{_ as y,X as h,a as u,L as H,j as s,V as m}from"./setPrototypeOf.fd4aa278.js";import{P as j,O as z,Q as E,a0 as Y,af as _,ao as B,ap as O,R as A,aq as F,ar as q,W as X,X as G,Y as Q,s as I,p as J,ab as K,c as Z,H as ee,B as C,A as ae,C as S,G as b,ac as R,ai as V,as as L,at as T,ad as te,au as se,v as oe,ae as re}from"./App.1e07f856.js";import{M as ie}from"./Meta.0471c679.js";import{u as ne,a as le,b as de}from"./index.b41b301b.js";import{d as U}from"./dividerClasses.7a8b0546.js";import"./index.6b74e7eb.js";import"./index.module.01fcbc19.js";function ce(e){return z("MuiMenuItem",e)}const ue=j("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),v=ue,pe=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ge=(e,a)=>{const{ownerState:r}=e;return[a.root,r.dense&&a.dense,r.divider&&a.divider,!r.disableGutters&&a.gutters]},fe=e=>{const{disabled:a,dense:r,divider:i,disableGutters:d,selected:o,classes:n}=e,p=Q({root:["root",r&&"dense",a&&"disabled",!d&&"gutters",i&&"divider",o&&"selected"]},ce,n);return y({},n,p)},me=E(Y,{shouldForwardProp:e=>_(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ge})(({theme:e,ownerState:a})=>y({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:h(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${v.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:h(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${v.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:h(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:h(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${v.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${v.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${U.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${U.inset}`]:{marginLeft:52},[`& .${O.root}`]:{marginTop:0,marginBottom:0},[`& .${O.inset}`]:{paddingLeft:36},[`& .${B.root}`]:{minWidth:36}},!a.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&y({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${B.root} svg`]:{fontSize:"1.25rem"}}))),be=u.exports.forwardRef(function(a,r){const i=A({props:a,name:"MuiMenuItem"}),{autoFocus:d=!1,component:o="li",dense:n=!1,divider:c=!1,disableGutters:p=!1,focusVisibleClassName:g,role:$="menuitem",tabIndex:f,className:x}=i,P=H(i,pe),t=u.exports.useContext(F),l=u.exports.useMemo(()=>({dense:n||t.dense||!1,disableGutters:p}),[t.dense,n,p]),M=u.exports.useRef(null);q(()=>{d&&M.current&&M.current.focus()},[d]);const D=y({},i,{dense:l.dense,divider:c,disableGutters:p}),k=fe(i),N=X(M,r);let w;return i.disabled||(w=f!==void 0?f:-1),s(F.Provider,{value:l,children:s(me,y({ref:N,role:$,tabIndex:w,component:o,focusVisibleClassName:G(k.focusVisible,g),className:G(k.root,x)},P,{ownerState:D,classes:k}))})}),W=be,ve=async e=>{try{const{user:a}=e,{data:r,error:i}=await I.from("profiles").select("*").eq("id",a.id);if(i){console.log("error:",i);return}else return r}catch(a){alert(a.message)}},ye=async e=>{console.log("profile:",e);try{const{data:a,error:r}=await I.from("profiles").upsert({id:e.id,username:e.username,dialect:e.dialect,gender:e.gender,year:e.year}).select().single();if(r)throw r;return a}catch(a){alert(a.message)}},xe=async()=>{console.log("in getDialects");try{const{data:e,error:a}=await I.from("dialects").select("*");if(a){console.log("error:",a);return}else return e}catch(e){alert(e.message)}},he=async()=>{try{const{data:e,error:a}=await I.from("genders").select("*");if(a){console.log("error:",a);return}else return e}catch(e){alert(e.message)}};function Be(){const[e,a]=u.exports.useState(!0),[r,i]=u.exports.useState(!1),{session:d}=J(),{profile:o,setProfile:n}=ne(),{dialects:c,setDialects:p}=le(),{genders:g,setGenders:$}=de(),[f]=K(),x=Z();u.exports.useEffect(()=>{d?ve(d).then(t=>{t!==void 0&&t.length!==0?n(t[0]):console.log("no profile")}):f.get("origin")!==null?x(`/login?origin=${f.get("origin")}`):x("/login"),c===void 0&&xe().then(t=>{t!==void 0&&p(t)}),g===void 0&&he().then(t=>{t!==void 0&&$(t)})},[]),u.exports.useEffect(()=>{g!==void 0&&c!==void 0&&o!==void 0&&a(!1)},[g,c,o]);const P=async()=>{d!==null?(a(!0),ye(o).then(()=>{a(!1),f.get("origin")?window.location.href=`${re}/${f.get("origin")}`:i(!0)})):alert("not logged in")};return m(ee,{children:[m(C,{sx:{maxWidth:"sm",width:"100%"},children:[s(ie,{title:"Profile & Consent"}),s(C,{py:{sm:4,xs:2},children:s(ae,{title:"Profile"})}),s(S,{m:2,children:s(C,{children:e?"Loading...":d?m(C,{children:[m(b,{container:!0,spacing:0,children:[s(b,{item:!0,xs:12,my:1,children:s(R,{fullWidth:!0,id:"username",label:"Username",name:"username",placeholder:"Your username",value:o.username!==void 0&&o.username!==null?o.username:"",onChange:t=>{n(l=>({...l,username:t.target.value}))}})}),s(b,{item:!0,xs:12,my:1,children:s(R,{fullWidth:!0,id:"year of birth",label:"Year of Birth",name:"year of birth",autoComplete:"year of birth",placeholder:"Your year of birth",value:o.year!==void 0&&o.year!==null?o.year:"",onChange:t=>{n(l=>({...l,year:parseInt(t.target.value)}))}})}),s(b,{item:!0,xs:12,my:1,children:m(V,{fullWidth:!0,children:[s(L,{id:"demo-simple-select-label",children:"Dialect"}),s(T,{labelId:"dialect",id:"dialect",value:o.dialect!==void 0&&o.dialect!==null?o.dialect:"",label:"dialect",onChange:t=>{n(l=>({...l,dialect:t.target.value}))},children:c?c.map(t=>s(W,{value:t.id,children:t.name},t.id)):""})]})}),s(b,{item:!0,xs:12,my:1,children:m(V,{fullWidth:!0,children:[s(L,{id:"demo-simple-select-label",children:"Gender"}),s(T,{labelId:"gender",id:"gender",value:o.gender!==void 0&&o.gender!==null?o.gender:"",label:"gender",onChange:t=>{n(l=>({...l,gender:t.target.value}))},children:g?g.map(t=>s(W,{value:t.id,children:t.name},t.id)):null})]})})]}),s(S,{sx:{width:"100%"},children:s(te,{onClick:P,variant:"contained",sx:{mt:3,mb:2},disabled:e,children:"Update profile"})})]}):s("p",{children:"not logged in"})})})]}),r&&s(se,{sx:{zIndex:9999,position:"fixed",top:"0",backgroundColor:"rgba(0,0,0,0.3)"},children:s(oe,{title:"Profile Updated",description:"Thank you for providing this information :-)",condition1:"",borderColor:"primary.main",buttons:[{text:"ok",color:"primary"}],onClick:()=>{i(!1)}})})]})}export{Be as default};