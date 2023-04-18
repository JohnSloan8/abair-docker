import{aE as A,aF as L,X as R,Y as $,O as N,Q as b,R as k,aG as G,aB as M,C as B,T as W,aH as I}from"./App.bffb0f55.js";import{_ as o,O as F,N as C,a as w,L as D,j as p,X as P,V as j}from"./setPrototypeOf.fd4aa278.js";import"./index.608f81c6.js";const z=["className","component","disableGutters","fixed","maxWidth","classes"],S=F(),U=A("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,t[`maxWidth${C(String(e.maxWidth))}`],e.fixed&&t.fixed,e.disableGutters&&t.disableGutters]}}),V=i=>L({props:i,name:"MuiContainer",defaultTheme:S}),_=(i,t)=>{const e=n=>N(t,n),{classes:s,fixed:h,disableGutters:l,maxWidth:r}=i,a={root:["root",r&&`maxWidth${C(String(r))}`,h&&"fixed",l&&"disableGutters"]};return $(a,e,s)};function O(i={}){const{createStyledComponent:t=U,useThemeProps:e=V,componentName:s="MuiContainer"}=i,h=t(({theme:r,ownerState:a})=>o({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}}),({theme:r,ownerState:a})=>a.fixed&&Object.keys(r.breakpoints.values).reduce((n,d)=>{const u=d,c=r.breakpoints.values[u];return c!==0&&(n[r.breakpoints.up(u)]={maxWidth:`${c}${r.breakpoints.unit}`}),n},{}),({theme:r,ownerState:a})=>o({},a.maxWidth==="xs"&&{[r.breakpoints.up("xs")]:{maxWidth:Math.max(r.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[r.breakpoints.up(a.maxWidth)]:{maxWidth:`${r.breakpoints.values[a.maxWidth]}${r.breakpoints.unit}`}}));return w.exports.forwardRef(function(a,n){const d=e(a),{className:u,component:c="div",disableGutters:f=!1,fixed:v=!1,maxWidth:m="lg"}=d,g=D(d,z),x=o({},d,{component:c,disableGutters:f,fixed:v,maxWidth:m}),T=_(x,s);return p(h,o({as:c,ownerState:x,className:R(T.root,u),ref:n},g))})}const X=O({createStyledComponent:b("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,t[`maxWidth${C(String(e.maxWidth))}`],e.fixed&&t.fixed,e.disableGutters&&t.disableGutters]}}),useThemeProps:i=>k({props:i,name:"MuiContainer"})}),Y=X,y=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],E=i=>{const{absolute:t,children:e,classes:s,flexItem:h,light:l,orientation:r,textAlign:a,variant:n}=i;return $({root:["root",t&&"absolute",n,l&&"light",r==="vertical"&&"vertical",h&&"flexItem",e&&"withChildren",e&&r==="vertical"&&"withChildrenVertical",a==="right"&&r!=="vertical"&&"textAlignRight",a==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},G,s)},H=b("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,e.absolute&&t.absolute,t[e.variant],e.light&&t.light,e.orientation==="vertical"&&t.vertical,e.flexItem&&t.flexItem,e.children&&t.withChildren,e.children&&e.orientation==="vertical"&&t.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&t.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:i,ownerState:t})=>o({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:P(i.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:i,ownerState:t})=>o({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:i,ownerState:t})=>o({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(i.vars||i).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:i})=>o({},i.textAlign==="right"&&i.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},i.textAlign==="left"&&i.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),Q=b("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.wrapper,e.orientation==="vertical"&&t.wrapperVertical]}})(({theme:i,ownerState:t})=>o({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})),q=w.exports.forwardRef(function(t,e){const s=k({props:t,name:"MuiDivider"}),{absolute:h=!1,children:l,className:r,component:a=l?"div":"hr",flexItem:n=!1,light:d=!1,orientation:u="horizontal",role:c=a!=="hr"?"separator":void 0,textAlign:f="center",variant:v="fullWidth"}=s,m=D(s,y),g=o({},s,{absolute:h,component:a,flexItem:n,light:d,orientation:u,role:c,textAlign:f,variant:v}),x=E(g);return p(H,o({as:a,className:R(x.root,r),role:c,ref:e,ownerState:g},m,{children:l?p(Q,{className:x.wrapper,ownerState:g,children:l}):null}))}),J=q;function it(){return p(Y,{sx:{height:"100%"},children:p(M,{flexDirection:"column",children:j(B,{flexDirection:"column",children:[p(W,{sx:{mt:2},variant:"h4",color:"error",children:"404 Not Found"}),p(J,{variant:"middle"}),p(W,{variant:"h4",sx:{color:i=>i.palette.info.main},children:I[404]})]})})})}export{it as default};
