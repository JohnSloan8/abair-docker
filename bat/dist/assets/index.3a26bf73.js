import{g as L,m as G}from"./index.f8997cb6.js";import{az as N,aA as B,w as R,x as w,r as M,t as b,v as k,aB as F,o as I,C as z,T as W}from"./App.95538417.js";import{_ as o,G as P,F as C,a as A,B as D,j as p,O as S,L as $}from"./setPrototypeOf.96237ccd.js";const j=["className","component","disableGutters","fixed","maxWidth","classes"],U=P(),_=N("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[`maxWidth${C(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),V=e=>B({props:e,name:"MuiContainer",defaultTheme:U}),y=(e,t)=>{const i=n=>M(t,n),{classes:s,fixed:h,disableGutters:l,maxWidth:r}=e,a={root:["root",r&&`maxWidth${C(String(r))}`,h&&"fixed",l&&"disableGutters"]};return w(a,i,s)};function O(e={}){const{createStyledComponent:t=_,useThemeProps:i=V,componentName:s="MuiContainer"}=e,h=t(({theme:r,ownerState:a})=>o({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}}),({theme:r,ownerState:a})=>a.fixed&&Object.keys(r.breakpoints.values).reduce((n,d)=>{const u=d,c=r.breakpoints.values[u];return c!==0&&(n[r.breakpoints.up(u)]={maxWidth:`${c}${r.breakpoints.unit}`}),n},{}),({theme:r,ownerState:a})=>o({},a.maxWidth==="xs"&&{[r.breakpoints.up("xs")]:{maxWidth:Math.max(r.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[r.breakpoints.up(a.maxWidth)]:{maxWidth:`${r.breakpoints.values[a.maxWidth]}${r.breakpoints.unit}`}}));return A.exports.forwardRef(function(a,n){const d=i(a),{className:u,component:c="div",disableGutters:f=!1,fixed:m=!1,maxWidth:v="lg"}=d,g=D(d,j),x=o({},d,{component:c,disableGutters:f,fixed:m,maxWidth:v}),T=y(x,s);return p(h,o({as:c,ownerState:x,className:R(T.root,u),ref:n},g))})}const H=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],X=e=>{const{absolute:t,children:i,classes:s,flexItem:h,light:l,orientation:r,textAlign:a,variant:n}=e;return w({root:["root",t&&"absolute",n,l&&"light",r==="vertical"&&"vertical",h&&"flexItem",i&&"withChildren",i&&r==="vertical"&&"withChildrenVertical",a==="right"&&r!=="vertical"&&"textAlignRight",a==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},F,s)},Y=b("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,i.orientation==="vertical"&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&i.orientation==="vertical"&&t.withChildrenVertical,i.textAlign==="right"&&i.orientation!=="vertical"&&t.textAlignRight,i.textAlign==="left"&&i.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>o({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:S(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>o({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>o({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>o({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),q=b("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,i.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>o({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),E=A.exports.forwardRef(function(t,i){const s=k({props:t,name:"MuiDivider"}),{absolute:h=!1,children:l,className:r,component:a=l?"div":"hr",flexItem:n=!1,light:d=!1,orientation:u="horizontal",role:c=a!=="hr"?"separator":void 0,textAlign:f="center",variant:m="fullWidth"}=s,v=D(s,H),g=o({},s,{absolute:h,component:a,flexItem:n,light:d,orientation:u,role:c,textAlign:f,variant:m}),x=X(g);return p(Y,o({as:a,className:R(x.root,r),role:c,ref:i,ownerState:g},v,{children:l?p(q,{className:x.wrapper,ownerState:g,children:l}):null}))}),J=E,K=O({createStyledComponent:b("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[`maxWidth${C(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),useThemeProps:e=>k({props:e,name:"MuiContainer"})}),Q=K;function it(){return p(Q,{sx:{height:"100%"},children:$(I,{flexDirection:"column",children:[p("iframe",{src:L,width:"100%",height:"50%",style:{maxHeight:"60%",maxWidth:"100%"},frameBorder:"0",allowFullScreen:!0}),$(z,{flexDirection:"column",children:[p(W,{sx:{mt:2},variant:"h4",color:"error",children:"404 Not Found"}),p(J,{variant:"middle"}),p(W,{variant:"h4",sx:{color:e=>e.palette.info.main},children:G[404]})]})]})})}export{it as default};
