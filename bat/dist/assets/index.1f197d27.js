import{a as d,B as j,L as D,j as u,_ as l,r as Nt,F as he,Z as vt,f as qe,U as He}from"./setPrototypeOf.489bfc02.js";import{c as je,d as Ge,e as Xe,N as xt,a as yt,f as Wt,g as Et,O as Tt,P as zt,Q as Lt,R as _t,u as Dt,l as Ut,t as Vt,q as Ht,S as Kt,b as Qt,M as qt}from"./index.0dd97305.js";import{u as jt,a as Gt,b as Xt,c as Zt,R as Jt}from"./usePopulateVerbsTensesForms.cb10b745.js";import{t as Me,v as rt,w as Yt,x as St,e as ge,g as ve,f as N,h as Fe,k as Pe,y as lt,l as xe,G as en,z as ke,D as tn,E as at,H as nn,J as on,K as sn,s as Ct,m as rn,L as it,u as ln,a as It,b as an,B as $e,T as Ke,A as dn,C as dt}from"./App.2da4ca63.js";import{u as Rt,b as un,c as cn,B as ut}from"./index.d065749f.js";import{u as pn}from"./usePushRandomResponse.f9f5ae77.js";import"./index.module.d0e996d7.js";import"./index.171a1989.js";import"./translationGA.c6ffbfbf.js";const fn=["onChange","maxRows","minRows","style","value"];function Be(e,t){return parseInt(e[t],10)||0}const mn={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function ct(e){return e==null||Object.keys(e).length===0}const bn=d.exports.forwardRef(function(t,n){const{onChange:o,maxRows:s,minRows:r=1,style:i,value:c}=t,S=j(t,fn),{current:v}=d.exports.useRef(c!=null),m=d.exports.useRef(null),b=Me(n,m),h=d.exports.useRef(null),y=d.exports.useRef(0),[$,C]=d.exports.useState({}),F=d.exports.useCallback(()=>{const f=m.current,x=rt(f).getComputedStyle(f);if(x.width==="0px")return{};const g=h.current;g.style.width=x.width,g.value=f.value||t.placeholder||"x",g.value.slice(-1)===`
`&&(g.value+=" ");const U=x["box-sizing"],V=Be(x,"padding-bottom")+Be(x,"padding-top"),_=Be(x,"border-bottom-width")+Be(x,"border-top-width"),k=g.scrollHeight;g.value="x";const B=g.scrollHeight;let W=k;r&&(W=Math.max(Number(r)*B,W)),s&&(W=Math.min(Number(s)*B,W)),W=Math.max(W,B);const G=W+(U==="border-box"?V+_:0),R=Math.abs(W-k)<=1;return{outerHeightStyle:G,overflow:R}},[s,r,t.placeholder]),O=(f,P)=>{const{outerHeightStyle:x,overflow:g}=P;return y.current<20&&(x>0&&Math.abs((f.outerHeightStyle||0)-x)>1||f.overflow!==g)?(y.current+=1,{overflow:g,outerHeightStyle:x}):f},p=d.exports.useCallback(()=>{const f=F();ct(f)||C(P=>O(P,f))},[F]),E=()=>{const f=F();ct(f)||Nt.exports.flushSync(()=>{C(P=>O(P,f))})};d.exports.useEffect(()=>{const f=Yt(()=>{y.current=0,m.current&&E()}),P=rt(m.current);P.addEventListener("resize",f);let x;return typeof ResizeObserver<"u"&&(x=new ResizeObserver(f),x.observe(m.current)),()=>{f.clear(),P.removeEventListener("resize",f),x&&x.disconnect()}}),St(()=>{p()}),d.exports.useEffect(()=>{y.current=0},[c]);const I=f=>{y.current=0,v||p(),o&&o(f)};return D(d.exports.Fragment,{children:[u("textarea",l({value:c,onChange:I,ref:b,rows:r,style:l({height:$.outerHeightStyle,overflow:$.overflow?"hidden":null},i)},S)),u("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:h,tabIndex:-1,style:l({},mn.shadow,i,{padding:0})})]})}),hn=bn;function Ze({props:e,states:t,muiFormControl:n}){return t.reduce((o,s)=>(o[s]=e[s],n&&typeof e[s]>"u"&&(o[s]=n[s]),o),{})}const gn=d.exports.createContext(void 0),wt=gn;function Je(){return d.exports.useContext(wt)}function pt(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function $t(e,t=!1){return e&&(pt(e.value)&&e.value!==""||t&&pt(e.defaultValue)&&e.defaultValue!=="")}function vn(e){return ve("MuiInputBase",e)}const xn=ge("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),be=xn,yn=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Ne=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${he(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},We=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},Sn=e=>{const{classes:t,color:n,disabled:o,error:s,endAdornment:r,focused:i,formControl:c,fullWidth:S,hiddenLabel:v,multiline:m,readOnly:b,size:h,startAdornment:y,type:$}=e,C={root:["root",`color${he(n)}`,o&&"disabled",s&&"error",S&&"fullWidth",i&&"focused",c&&"formControl",h==="small"&&"sizeSmall",m&&"multiline",y&&"adornedStart",r&&"adornedEnd",v&&"hiddenLabel",b&&"readOnly"],input:["input",o&&"disabled",$==="search"&&"inputTypeSearch",m&&"inputMultiline",h==="small"&&"inputSizeSmall",v&&"inputHiddenLabel",y&&"inputAdornedStart",r&&"inputAdornedEnd",b&&"readOnly"]};return xe(C,vn,t)},Ee=N("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Ne})(({theme:e,ownerState:t})=>l({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${be.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&l({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),Te=N("input",{name:"MuiInputBase",slot:"Input",overridesResolver:We})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",o=l({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),s={opacity:"0 !important"},r=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return l({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${be.formControl} &`]:{"&::-webkit-input-placeholder":s,"&::-moz-placeholder":s,"&:-ms-input-placeholder":s,"&::-ms-input-placeholder":s,"&:focus::-webkit-input-placeholder":r,"&:focus::-moz-placeholder":r,"&:focus:-ms-input-placeholder":r,"&:focus::-ms-input-placeholder":r},[`&.${be.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),Cn=u(en,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),In=d.exports.forwardRef(function(t,n){var o;const s=Fe({props:t,name:"MuiInputBase"}),{"aria-describedby":r,autoComplete:i,autoFocus:c,className:S,components:v={},componentsProps:m={},defaultValue:b,disabled:h,disableInjectingGlobalStyles:y,endAdornment:$,fullWidth:C=!1,id:F,inputComponent:O="input",inputProps:p={},inputRef:E,maxRows:I,minRows:f,multiline:P=!1,name:x,onBlur:g,onChange:U,onClick:V,onFocus:_,onKeyDown:k,onKeyUp:B,placeholder:W,readOnly:G,renderSuffix:R,rows:Q,slotProps:ye={},slots:Oe={},startAdornment:X,type:K="text",value:Z}=s,ze=j(s,yn),J=p.value!=null?p.value:Z,{current:Se}=d.exports.useRef(J!=null),q=d.exports.useRef(),Le=d.exports.useCallback(w=>{},[]),_e=Me(q,E,p.ref,Le),[Y,ee]=d.exports.useState(!1),A=Je(),z=Ze({props:s,muiFormControl:A,states:["color","disabled","error","hiddenLabel","size","required","filled"]});z.focused=A?A.focused:Y,d.exports.useEffect(()=>{!A&&h&&Y&&(ee(!1),g&&g())},[A,h,Y,g]);const se=A&&A.onFilled,Ce=A&&A.onEmpty,re=d.exports.useCallback(w=>{$t(w)?se&&se():Ce&&Ce()},[se,Ce]);St(()=>{Se&&re({value:J})},[J,re,Se]);const De=w=>{if(z.disabled){w.stopPropagation();return}_&&_(w),p.onFocus&&p.onFocus(w),A&&A.onFocus?A.onFocus(w):ee(!0)},de=w=>{g&&g(w),p.onBlur&&p.onBlur(w),A&&A.onBlur?A.onBlur(w):ee(!1)},Ue=(w,...a)=>{if(!Se){const M=w.target||q.current;if(M==null)throw new Error(vt(1));re({value:M.value})}p.onChange&&p.onChange(w,...a),U&&U(w,...a)};d.exports.useEffect(()=>{re(q.current)},[]);const te=w=>{q.current&&w.currentTarget===w.target&&q.current.focus(),V&&V(w)};let ue=O,L=p;P&&ue==="input"&&(Q?L=l({type:void 0,minRows:Q,maxRows:Q},L):L=l({type:void 0,maxRows:I,minRows:f},L),ue=hn);const ce=w=>{re(w.animationName==="mui-auto-fill-cancel"?q.current:{value:"x"})};d.exports.useEffect(()=>{A&&A.setAdornedStart(Boolean(X))},[A,X]);const pe=l({},s,{color:z.color||"primary",disabled:z.disabled,endAdornment:$,error:z.error,focused:z.focused,formControl:A,fullWidth:C,hiddenLabel:z.hiddenLabel,multiline:P,size:z.size,startAdornment:X,type:K}),Ie=Sn(pe),fe=Oe.root||v.Root||Ee,me=ye.root||m.root||{},le=Oe.input||v.Input||Te;return L=l({},L,(o=ye.input)!=null?o:m.input),D(d.exports.Fragment,{children:[!y&&Cn,D(fe,l({},me,!lt(fe)&&{ownerState:l({},pe,me.ownerState)},{ref:n,onClick:te},ze,{className:Pe(Ie.root,me.className,S),children:[X,u(wt.Provider,{value:null,children:u(le,l({ownerState:pe,"aria-invalid":z.error,"aria-describedby":r,autoComplete:i,autoFocus:c,defaultValue:b,disabled:z.disabled,id:F,onAnimationStart:ce,name:x,placeholder:W,readOnly:G,required:z.required,rows:Q,value:J,onKeyDown:k,onKeyUp:B,type:K},L,!lt(le)&&{as:ue,ownerState:l({},pe,L.ownerState)},{ref:_e,className:Pe(Ie.input,L.className),onBlur:de,onChange:Ue,onFocus:De}))}),$,R?R(l({},z,{startAdornment:X})):null]}))]})}),Ye=In;function Rn(e){return ve("MuiInput",e)}const wn=l({},be,ge("MuiInput",["root","underline","input"])),we=wn,$n=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],Pn=e=>{const{classes:t,disableUnderline:n}=e,s=xe({root:["root",!n&&"underline"],input:["input"]},Rn,t);return l({},t,s)},Fn=N(Ee,{shouldForwardProp:e=>ke(e)||e==="classes",name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Ne(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{let o=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(o=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),l({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${we.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${we.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${we.disabled}, .${we.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${o}`}},[`&.${we.disabled}:before`]:{borderBottomStyle:"dotted"}})}),kn=N(Te,{name:"MuiInput",slot:"Input",overridesResolver:We})({}),Pt=d.exports.forwardRef(function(t,n){var o,s,r,i;const c=Fe({props:t,name:"MuiInput"}),{disableUnderline:S,components:v={},componentsProps:m,fullWidth:b=!1,inputComponent:h="input",multiline:y=!1,slotProps:$,slots:C={},type:F="text"}=c,O=j(c,$n),p=Pn(c),I={root:{ownerState:{disableUnderline:S}}},f=($!=null?$:m)?qe($!=null?$:m,I):I,P=(o=(s=C.root)!=null?s:v.Root)!=null?o:Fn,x=(r=(i=C.input)!=null?i:v.Input)!=null?r:kn;return u(Ye,l({slots:{root:P,input:x},slotProps:f,fullWidth:b,inputComponent:h,multiline:y,ref:n,type:F},O,{classes:p}))});Pt.muiName="Input";const On=Pt;function Bn(e){return ve("MuiFilledInput",e)}const An=l({},be,ge("MuiFilledInput",["root","underline","input"])),ie=An,Mn=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],Nn=e=>{const{classes:t,disableUnderline:n}=e,s=xe({root:["root",!n&&"underline"],input:["input"]},Bn,t);return l({},t,s)},Wn=N(Ee,{shouldForwardProp:e=>ke(e)||e==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Ne(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{var n;const o=e.palette.mode==="light",s=o?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",r=o?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",i=o?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",c=o?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return l({position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:r,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:i,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:r}},[`&.${ie.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:r},[`&.${ie.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:c}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(n=(e.vars||e).palette[t.color||"primary"])==null?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${ie.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${ie.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:s}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${ie.disabled}, .${ie.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${ie.disabled}:before`]:{borderBottomStyle:"dotted"}},t.startAdornment&&{paddingLeft:12},t.endAdornment&&{paddingRight:12},t.multiline&&l({padding:"25px 12px 8px"},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17}))}),En=N(Te,{name:"MuiFilledInput",slot:"Input",overridesResolver:We})(({theme:e,ownerState:t})=>l({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9})),Ft=d.exports.forwardRef(function(t,n){var o,s,r,i;const c=Fe({props:t,name:"MuiFilledInput"}),{components:S={},componentsProps:v,fullWidth:m=!1,inputComponent:b="input",multiline:h=!1,slotProps:y,slots:$={},type:C="text"}=c,F=j(c,Mn),O=l({},c,{fullWidth:m,inputComponent:b,multiline:h,type:C}),p=Nn(c),E={root:{ownerState:O},input:{ownerState:O}},I=(y!=null?y:v)?qe(y!=null?y:v,E):E,f=(o=(s=$.root)!=null?s:S.Root)!=null?o:Wn,P=(r=(i=$.input)!=null?i:S.Input)!=null?r:En;return u(Ye,l({slots:{root:f,input:P},componentsProps:I,fullWidth:m,inputComponent:b,multiline:h,ref:n,type:C},F,{classes:p}))});Ft.muiName="Input";const Tn=Ft;var ft;const zn=["children","classes","className","label","notched"],Ln=N("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),_n=N("legend")(({ownerState:e,theme:t})=>l({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&l({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function Dn(e){const{className:t,label:n,notched:o}=e,s=j(e,zn),r=n!=null&&n!=="",i=l({},e,{notched:o,withLabel:r});return u(Ln,l({"aria-hidden":!0,className:t,ownerState:i},s,{children:u(_n,{ownerState:i,children:r?u("span",{children:n}):ft||(ft=u("span",{className:"notranslate",children:"\u200B"}))})}))}function Un(e){return ve("MuiOutlinedInput",e)}const Vn=l({},be,ge("MuiOutlinedInput",["root","notchedOutline","input"])),oe=Vn,Hn=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],Kn=e=>{const{classes:t}=e,o=xe({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},Un,t);return l({},t,o)},Qn=N(Ee,{shouldForwardProp:e=>ke(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Ne})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return l({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${oe.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${oe.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${oe.focused} .${oe.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${oe.error} .${oe.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${oe.disabled} .${oe.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&l({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),qn=N(Dn,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),jn=N(Te,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:We})(({theme:e,ownerState:t})=>l({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),kt=d.exports.forwardRef(function(t,n){var o,s,r,i,c;const S=Fe({props:t,name:"MuiOutlinedInput"}),{components:v={},fullWidth:m=!1,inputComponent:b="input",label:h,multiline:y=!1,notched:$,slots:C={},type:F="text"}=S,O=j(S,Hn),p=Kn(S),E=Je(),I=Ze({props:S,muiFormControl:E,states:["required"]}),f=l({},S,{color:I.color||"primary",disabled:I.disabled,error:I.error,focused:I.focused,formControl:E,fullWidth:m,hiddenLabel:I.hiddenLabel,multiline:y,size:I.size,type:F}),P=(o=(s=C.root)!=null?s:v.Root)!=null?o:Qn,x=(r=(i=C.input)!=null?i:v.Input)!=null?r:jn;return u(Ye,l({slots:{root:P,input:x},renderSuffix:g=>u(qn,{ownerState:f,className:p.notchedOutline,label:h!=null&&h!==""&&I.required?c||(c=D(d.exports.Fragment,{children:[h,"\xA0","*"]})):h,notched:typeof $<"u"?$:Boolean(g.startAdornment||g.filled||g.focused)}),fullWidth:m,inputComponent:b,multiline:y,ref:n,type:F},O,{classes:l({},p,{notchedOutline:null})}))});kt.muiName="Input";const Gn=kt;function Xn(e){return ve("MuiNativeSelect",e)}const Zn=ge("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),et=Zn,Jn=["className","disabled","IconComponent","inputRef","variant"],Yn=e=>{const{classes:t,variant:n,disabled:o,multiple:s,open:r}=e,i={select:["select",n,o&&"disabled",s&&"multiple"],icon:["icon",`icon${he(n)}`,r&&"iconOpen",o&&"disabled"]};return xe(i,Xn,t)},Ot=({ownerState:e,theme:t})=>l({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":l({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${et.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},e.variant==="filled"&&{"&&&":{paddingRight:32}},e.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),eo=N("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:ke,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],{[`&.${et.multiple}`]:t.multiple}]}})(Ot),Bt=({ownerState:e,theme:t})=>l({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${et.disabled}`]:{color:(t.vars||t).palette.action.disabled}},e.open&&{transform:"rotate(180deg)"},e.variant==="filled"&&{right:7},e.variant==="outlined"&&{right:7}),to=N("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${he(n.variant)}`],n.open&&t.iconOpen]}})(Bt),no=d.exports.forwardRef(function(t,n){const{className:o,disabled:s,IconComponent:r,inputRef:i,variant:c="standard"}=t,S=j(t,Jn),v=l({},t,{disabled:s,variant:c}),m=Yn(v);return D(d.exports.Fragment,{children:[u(eo,l({ownerState:v,className:Pe(m.select,o),disabled:s,ref:i||n},S)),t.multiple?null:u(to,{as:r,ownerState:v,className:m.icon})]})}),oo=no;function so(e){return ve("MuiSelect",e)}const ro=ge("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),Ae=ro;var mt;const lo=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],ao=N("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`&.${Ae.select}`]:t.select},{[`&.${Ae.select}`]:t[n.variant]},{[`&.${Ae.multiple}`]:t.multiple}]}})(Ot,{[`&.${Ae.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),io=N("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${he(n.variant)}`],n.open&&t.iconOpen]}})(Bt),uo=N("input",{shouldForwardProp:e=>tn(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function bt(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function co(e){return e==null||typeof e=="string"&&!e.trim()}const po=e=>{const{classes:t,variant:n,disabled:o,multiple:s,open:r}=e,i={select:["select",n,o&&"disabled",s&&"multiple"],icon:["icon",`icon${he(n)}`,r&&"iconOpen",o&&"disabled"],nativeInput:["nativeInput"]};return xe(i,so,t)},fo=d.exports.forwardRef(function(t,n){const{"aria-describedby":o,"aria-label":s,autoFocus:r,autoWidth:i,children:c,className:S,defaultOpen:v,defaultValue:m,disabled:b,displayEmpty:h,IconComponent:y,inputRef:$,labelId:C,MenuProps:F={},multiple:O,name:p,onBlur:E,onChange:I,onClose:f,onFocus:P,onOpen:x,open:g,readOnly:U,renderValue:V,SelectDisplayProps:_={},tabIndex:k,value:B,variant:W="standard"}=t,G=j(t,lo),[R,Q]=at({controlled:B,default:m,name:"Select"}),[ye,Oe]=at({controlled:g,default:v,name:"Select"}),X=d.exports.useRef(null),K=d.exports.useRef(null),[Z,ze]=d.exports.useState(null),{current:J}=d.exports.useRef(g!=null),[Se,q]=d.exports.useState(),Le=Me(n,$),_e=d.exports.useCallback(a=>{K.current=a,a&&ze(a)},[]),Y=Z==null?void 0:Z.parentNode;d.exports.useImperativeHandle(Le,()=>({focus:()=>{K.current.focus()},node:X.current,value:R}),[R]),d.exports.useEffect(()=>{v&&ye&&Z&&!J&&(q(i?null:Y.clientWidth),K.current.focus())},[Z,i]),d.exports.useEffect(()=>{r&&K.current.focus()},[r]),d.exports.useEffect(()=>{if(!C)return;const a=nn(K.current).getElementById(C);if(a){const M=()=>{getSelection().isCollapsed&&K.current.focus()};return a.addEventListener("click",M),()=>{a.removeEventListener("click",M)}}},[C]);const ee=(a,M)=>{a?x&&x(M):f&&f(M),J||(q(i?null:Y.clientWidth),Oe(a))},A=a=>{a.button===0&&(a.preventDefault(),K.current.focus(),ee(!0,a))},z=a=>{ee(!1,a)},se=d.exports.Children.toArray(c),Ce=a=>{const M=se.map(H=>H.props.value).indexOf(a.target.value);if(M===-1)return;const T=se[M];Q(T.props.value),I&&I(a,T)},re=a=>M=>{let T;if(!!M.currentTarget.hasAttribute("tabindex")){if(O){T=Array.isArray(R)?R.slice():[];const H=R.indexOf(a.props.value);H===-1?T.push(a.props.value):T.splice(H,1)}else T=a.props.value;if(a.props.onClick&&a.props.onClick(M),R!==T&&(Q(T),I)){const H=M.nativeEvent||M,Re=new H.constructor(H.type,H);Object.defineProperty(Re,"target",{writable:!0,value:{value:T,name:p}}),I(Re,a)}O||ee(!1,M)}},De=a=>{U||[" ","ArrowUp","ArrowDown","Enter"].indexOf(a.key)!==-1&&(a.preventDefault(),ee(!0,a))},de=Z!==null&&ye,Ue=a=>{!de&&E&&(Object.defineProperty(a,"target",{writable:!0,value:{value:R,name:p}}),E(a))};delete G["aria-invalid"];let te,ue;const L=[];let ce=!1;($t({value:R})||h)&&(V?te=V(R):ce=!0);const pe=se.map((a,M,T)=>{var H,Re,nt,ot;if(!d.exports.isValidElement(a))return null;let ne;if(O){if(!Array.isArray(R))throw new Error(vt(2));ne=R.some(ae=>bt(ae,a.props.value)),ne&&ce&&L.push(a.props.children)}else ne=bt(R,a.props.value),ne&&ce&&(ue=a.props.children);if(a.props.value===void 0)return d.exports.cloneElement(a,{"aria-readonly":!0,role:"option"});const Mt=()=>{if(R)return ne;const ae=T.find(Ve=>{var st;return(Ve==null||(st=Ve.props)==null?void 0:st.value)!==void 0&&Ve.props.disabled!==!0});return a===ae?!0:ne};return d.exports.cloneElement(a,{"aria-selected":ne?"true":"false",onClick:re(a),onKeyUp:ae=>{ae.key===" "&&ae.preventDefault(),a.props.onKeyUp&&a.props.onKeyUp(ae)},role:"option",selected:((H=T[0])==null||(Re=H.props)==null?void 0:Re.value)===void 0||((nt=T[0])==null||(ot=nt.props)==null?void 0:ot.disabled)===!0?Mt():ne,value:void 0,"data-value":a.props.value})});ce&&(O?L.length===0?te=null:te=L.reduce((a,M,T)=>(a.push(M),T<L.length-1&&a.push(", "),a),[]):te=ue);let Ie=Se;!i&&J&&Z&&(Ie=Y.clientWidth);let fe;typeof k<"u"?fe=k:fe=b?null:0;const me=_.id||(p?`mui-component-select-${p}`:void 0),le=l({},t,{variant:W,value:R,open:de}),w=po(le);return D(d.exports.Fragment,{children:[u(ao,l({ref:_e,tabIndex:fe,role:"button","aria-disabled":b?"true":void 0,"aria-expanded":de?"true":"false","aria-haspopup":"listbox","aria-label":s,"aria-labelledby":[C,me].filter(Boolean).join(" ")||void 0,"aria-describedby":o,onKeyDown:De,onMouseDown:b||U?null:A,onBlur:Ue,onFocus:P},_,{ownerState:le,className:Pe(_.className,w.select,S),id:me,children:co(te)?mt||(mt=u("span",{className:"notranslate",children:"\u200B"})):te})),u(uo,l({value:Array.isArray(R)?R.join(","):R,name:p,ref:X,"aria-hidden":!0,onChange:Ce,tabIndex:-1,disabled:b,className:w.nativeInput,autoFocus:r,ownerState:le},G)),u(io,{as:y,className:w.icon,ownerState:le}),u(on,l({id:`menu-${p||""}`,anchorEl:Y,open:de,onClose:z,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},F,{MenuListProps:l({"aria-labelledby":C,role:"listbox",disableListWrap:!0},F.MenuListProps),PaperProps:l({},F.PaperProps,{style:l({minWidth:Ie},F.PaperProps!=null?F.PaperProps.style:null)}),children:pe}))]})}),mo=fo,bo=sn(u("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");var ht,gt;const ho=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],go=e=>{const{classes:t}=e;return t},tt={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>ke(e)&&e!=="variant",slot:"Root"},vo=N(On,tt)(""),xo=N(Gn,tt)(""),yo=N(Tn,tt)(""),At=d.exports.forwardRef(function(t,n){const o=Fe({name:"MuiSelect",props:t}),{autoWidth:s=!1,children:r,classes:i={},className:c,defaultOpen:S=!1,displayEmpty:v=!1,IconComponent:m=bo,id:b,input:h,inputProps:y,label:$,labelId:C,MenuProps:F,multiple:O=!1,native:p=!1,onClose:E,onOpen:I,open:f,renderValue:P,SelectDisplayProps:x,variant:g="outlined"}=o,U=j(o,ho),V=p?oo:mo,_=Je(),B=Ze({props:o,muiFormControl:_,states:["variant"]}).variant||g,W=h||{standard:ht||(ht=u(vo,{})),outlined:u(xo,{label:$}),filled:gt||(gt=u(yo,{}))}[B],G=l({},o,{variant:B,classes:i}),R=go(G),Q=Me(n,W.ref);return u(d.exports.Fragment,{children:d.exports.cloneElement(W,l({inputComponent:V,inputProps:l({children:r,IconComponent:m,variant:B,type:void 0,multiple:O},p?{id:b}:{autoWidth:s,defaultOpen:S,displayEmpty:v,labelId:C,MenuProps:F,onClose:E,onOpen:I,open:f,renderValue:P,SelectDisplayProps:l({id:b},x)},y,{classes:y?qe(R,y.classes):R},h?h.props.inputProps:{})},O&&p&&B==="outlined"?{notched:!0}:{},{ref:Q,className:Pe(W.props.className,c)},!h&&{variant:B},U))})});At.muiName="Select";const So=At,Co=async(e,t,n,o,s,r)=>{console.log("userID:",e);try{const{data:i,error:c}=await Ct.from("bat_chats").insert({user_id:e,verb:t,tense:n,form:o,questions:s,intro:r}).select("*").single();if(c)throw c;if(i)return i}catch(i){alert(i.message)}},Io=async(e,t,n)=>{try{const{data:o,error:s}=await Ct.from("bat_questions").select("id").in("verb_id",e).in("tense_id",t).in("form_id",n);if(s)throw s;return o}catch(o){alert(o.message)}},Ro=()=>{const{profile:e}=rn(),{selectedVerb:t}=je(),{selectedTense:n}=Ge(),{selectedForm:o}=Xe(),s=pn();return()=>{let i=s([],"filler","intro","greeting","naive",{name:e!==null&&e.username!==null?e.username:"there"});return i=s(i,"filler","intro","taskDescription","basic",{verb:t!==void 0?t.name:"all verbs",tense:n!==void 0?n.name:"all tenses",form:o!==void 0?o.name:"all forms"}),i=s(i,"filler","intro","questionDescription","basic",{}),i=s(i,"filler","intro","getReady","basic",{}),i}},Qe=({label:e,value:t,handleChange:n,items:o,all:s=!0})=>D(So,{label:e,value:t,onChange:n,sx:{width:"100%",color:"#fff",textAlign:"center"},children:[s&&u(it,{value:"all",children:"all"},"all"),o.map((r,i)=>u(it,{value:r,children:r},i))]});function wo(){const{selectedVerb:e}=je(),{selectedTense:t}=Ge(),{selectedForm:n}=Xe(),{setQuestionSet:o}=xt(),{verbs:s}=yt(),{tenses:r}=Wt(),{forms:i}=Et();return()=>{const S=e!==void 0?[e.id]:s.map(b=>b.id),v=t!==void 0?[t.id]:r.map(b=>b.id),m=n!==void 0?[n.id]:i.map(b=>b.id);Io(S,v,m).then(b=>{console.log("q_s:",b),b!==void 0?o(b.map(h=>h.id)):console.log("question set undefined")})}}const $o=(e,t)=>{const n=new Array(t);let o=e.length;const s=new Array(o);for(t>o&&(t=o);t--;){const r=Math.floor(Math.random()*o);n[t]=e[r in s?s[r]:r],s[r]=--o in s?s[o]:o}return n},Po=()=>{const e=He(Tt),{selectedVerb:t,setSelectedVerb:n}=je(),o=He(zt),{selectedTense:s,setSelectedTense:r}=Ge(),i=He(Lt),{selectedForm:c,setSelectedForm:S}=Xe(),{noQuestions:v}=_t(),{questionSet:m}=xt(),[b,h]=d.exports.useState(!1),{chats:y,setChats:$}=Rt(),{setIntro:C}=un(),{setOutro:F}=cn(),O=ln(),{session:p}=It(),E=wo(),I=Ro(),{setAdjacencyPairs:f}=Dt(),P=()=>{p!==null&&(h(!0),E())},{setMessageInputDisabled:x}=Ut(),{t:g}=an(),{setShowAvailablePoints:U}=Vt(),{setShowPoints:V}=Ht(),{setShowHome:_}=Kt();return d.exports.useEffect(()=>{if(m.length!==0&&p!==null&&b){h(!1),V(!1),_(!1),U(!0),C([]),F([]),f([]),x(!0);const k=I(),B=$o(m,v);Co(p.user.id,t!==void 0?t.name:null,s!==void 0?s.name:null,c!==void 0?c.name:null,B,k).then(W=>{$([...y,W]),O("/chat")})}},[m]),D(ut,{children:[D($e,{children:[u(Ke,{align:"center",variant:"h6",children:g("headers.verb")}),u(Qe,{handleChange:k=>{n(e.find(B=>B.name===k.target.value))},value:t!==void 0?t.name:"all",label:"Verbs",items:e.map(k=>k.name)})]}),D($e,{mt:1,children:[u(Ke,{align:"center",variant:"h6",children:g("headers.tense")}),u(Qe,{handleChange:k=>{r(o.find(B=>B.name===k.target.value))},value:s!==void 0?s.name:"all",label:"Tenses",items:o.map(k=>k.name)})]}),D($e,{mt:1,children:[u(Ke,{align:"center",variant:"h6",children:g("headers.form")}),u(Qe,{handleChange:k=>{S(i.find(B=>B.name===k.target.value))},value:c!==void 0?c.name:"all",label:"Forms",items:i.map(k=>k.name)})]}),u($e,{mt:3,children:u(ut,{button:!0,width:"100%",children:u(dn,{size:"large",fullWidth:!0,label:g("buttons.start"),onClick:()=>{P()},selected:!0,color:"secondary"})})})]})},Fo=()=>{jt(),Gt(),Xt();const{verbs:e}=yt(),{chats:t}=Rt(),{session:n}=It(),o=Zt(),s=Qt();return d.exports.useEffect(()=>{e.length===0&&o(),t.length===0&&n!==null&&s(n.user.id)},[n]),D($e,{children:[u(qt,{title:"SetTask"}),u(dt,{p:2,children:u(Jt,{})}),u(dt,{children:u(Po,{})})]})},zo=Fo;export{zo as default};
