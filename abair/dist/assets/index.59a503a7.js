import{O as q,P as U,Q as w,R as F,U as Ce,V as ye,W as Re,X as P,Y as O,Z as ne,_ as we,$ as Ae,a0 as Se,r as re,i as ie,j as se,s as $e,a as ae,B as f,T as Ee,e as Te,C as D,k as Me,u as ze,H as Ie,A as _e,G as De}from"./App.f1ef65ff.js";import{u as ke,d as de,R as Ne,b as Be,a as We,e as Pe,f as Ge,T as Ve,c as He}from"./Transcriptions.a5e5ba5e.js";import{_ as s,a as p,ab as Le,L as Q,j as t,V as R}from"./setPrototypeOf.fd4aa278.js";import{M as je}from"./Meta.2e7728fe.js";import"./index.d8f5f280.js";import"./index.63825b5b.js";import"./index.module.01fcbc19.js";function qe(e){return q("MuiCollapse",e)}U("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Ue=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Fe=e=>{const{orientation:o,classes:n}=e,i={root:["root",`${o}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${o}`],wrapperInner:["wrapperInner",`${o}`]};return O(i,qe,n)},Oe=w("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.orientation],n.state==="entered"&&o.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&o.hidden]}})(({theme:e,ownerState:o})=>s({height:0,overflow:"hidden",transition:e.transitions.create("height")},o.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},o.state==="entered"&&s({height:"auto",overflow:"visible"},o.orientation==="horizontal"&&{width:"auto"}),o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&{visibility:"hidden"})),Qe=w("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,o)=>o.wrapper})(({ownerState:e})=>s({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Xe=w("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,o)=>o.wrapperInner})(({ownerState:e})=>s({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),ce=p.exports.forwardRef(function(o,n){const i=F({props:o,name:"MuiCollapse"}),{addEndListener:d,children:u,className:h,collapsedSize:c="0px",component:a,easing:g,in:m,onEnter:A,onEntered:S,onEntering:$,onExit:I,onExited:l,onExiting:b,orientation:y="vertical",style:E,timeout:v=Le.standard,TransitionComponent:X=Ce}=i,G=Q(i,Ue),T=s({},i,{orientation:y,collapsedSize:c}),M=Fe(T),ee=ye(),oe=p.exports.useRef(),z=p.exports.useRef(null),Y=p.exports.useRef(),V=typeof c=="number"?`${c}px`:c,N=y==="horizontal",B=N?"width":"height";p.exports.useEffect(()=>()=>{clearTimeout(oe.current)},[]);const H=p.exports.useRef(null),he=Re(n,H),_=r=>x=>{if(r){const C=H.current;x===void 0?r(C):r(C,x)}},Z=()=>z.current?z.current[N?"clientWidth":"clientHeight"]:0,xe=_((r,x)=>{z.current&&N&&(z.current.style.position="absolute"),r.style[B]=V,A&&A(r,x)}),fe=_((r,x)=>{const C=Z();z.current&&N&&(z.current.style.position="");const{duration:W,easing:L}=ne({style:E,timeout:v,easing:g},{mode:"enter"});if(v==="auto"){const te=ee.transitions.getAutoHeightDuration(C);r.style.transitionDuration=`${te}ms`,Y.current=te}else r.style.transitionDuration=typeof W=="string"?W:`${W}ms`;r.style[B]=`${C}px`,r.style.transitionTimingFunction=L,$&&$(r,x)}),me=_((r,x)=>{r.style[B]="auto",S&&S(r,x)}),ge=_(r=>{r.style[B]=`${Z()}px`,I&&I(r)}),be=_(l),ve=_(r=>{const x=Z(),{duration:C,easing:W}=ne({style:E,timeout:v,easing:g},{mode:"exit"});if(v==="auto"){const L=ee.transitions.getAutoHeightDuration(x);r.style.transitionDuration=`${L}ms`,Y.current=L}else r.style.transitionDuration=typeof C=="string"?C:`${C}ms`;r.style[B]=V,r.style.transitionTimingFunction=W,b&&b(r)});return t(X,s({in:m,onEnter:xe,onEntered:me,onEntering:fe,onExit:ge,onExited:be,onExiting:ve,addEndListener:r=>{v==="auto"&&(oe.current=setTimeout(r,Y.current||0)),d&&d(H.current,r)},nodeRef:H,timeout:v==="auto"?null:v},G,{children:(r,x)=>t(Oe,s({as:a,className:P(M.root,h,{entered:M.entered,exited:!m&&V==="0px"&&M.hidden}[r]),style:s({[N?"minWidth":"minHeight"]:V},E),ownerState:s({},T,{state:r}),ref:he},x,{children:t(Qe,{ownerState:s({},T,{state:r}),className:M.wrapper,ref:z,children:t(Xe,{ownerState:s({},T,{state:r}),className:M.wrapperInner,children:u})})}))}))});ce.muiSupportAuto=!0;const Ye=ce,Ze=p.exports.createContext({}),le=Ze;function Je(e){return q("MuiAccordion",e)}const Ke=U("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),j=Ke,eo=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],oo=e=>{const{classes:o,square:n,expanded:i,disabled:d,disableGutters:u}=e;return O({root:["root",!n&&"rounded",i&&"expanded",d&&"disabled",!u&&"gutters"],region:["region"]},Je,o)},to=w(we,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${j.region}`]:o.region},o.root,!n.square&&o.rounded,!n.disableGutters&&o.gutters]}})(({theme:e})=>{const o={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],o),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],o)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${j.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${j.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:o})=>s({},!o.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!o.disableGutters&&{[`&.${j.expanded}`]:{margin:"16px 0"}})),no=p.exports.forwardRef(function(o,n){const i=F({props:o,name:"MuiAccordion"}),{children:d,className:u,defaultExpanded:h=!1,disabled:c=!1,disableGutters:a=!1,expanded:g,onChange:m,square:A=!1,TransitionComponent:S=Ye,TransitionProps:$}=i,I=Q(i,eo),[l,b]=Ae({controlled:g,default:h,name:"Accordion",state:"expanded"}),y=p.exports.useCallback(M=>{b(!l),m&&m(M,!l)},[l,m,b]),[E,...v]=p.exports.Children.toArray(d),X=p.exports.useMemo(()=>({expanded:l,disabled:c,disableGutters:a,toggle:y}),[l,c,a,y]),G=s({},i,{square:A,disabled:c,disableGutters:a,expanded:l}),T=oo(G);return R(to,s({className:P(T.root,u),ref:n,ownerState:G,square:A},I,{children:[t(le.Provider,{value:X,children:E}),t(S,s({in:l,timeout:"auto"},$,{children:t("div",{"aria-labelledby":E.props.id,id:E.props["aria-controls"],role:"region",className:T.region,children:v})}))]}))}),ro=no;function io(e){return q("MuiAccordionDetails",e)}U("MuiAccordionDetails",["root"]);const so=["className"],ao=e=>{const{classes:o}=e;return O({root:["root"]},io,o)},co=w("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),lo=p.exports.forwardRef(function(o,n){const i=F({props:o,name:"MuiAccordionDetails"}),{className:d}=i,u=Q(i,so),h=i,c=ao(h);return t(co,s({className:P(c.root,d),ref:n,ownerState:h},u))}),po=lo;function uo(e){return q("MuiAccordionSummary",e)}const ho=U("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),k=ho,xo=["children","className","expandIcon","focusVisibleClassName","onClick"],fo=e=>{const{classes:o,expanded:n,disabled:i,disableGutters:d}=e;return O({root:["root",n&&"expanded",i&&"disabled",!d&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!d&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},uo,o)},mo=w(Se,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{const n={duration:e.transitions.duration.shortest};return s({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${k.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${k.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${k.disabled})`]:{cursor:"pointer"}},!o.disableGutters&&{[`&.${k.expanded}`]:{minHeight:64}})}),go=w("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,o)=>o.content})(({theme:e,ownerState:o})=>s({display:"flex",flexGrow:1,margin:"12px 0"},!o.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${k.expanded}`]:{margin:"20px 0"}})),bo=w("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,o)=>o.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${k.expanded}`]:{transform:"rotate(180deg)"}})),vo=p.exports.forwardRef(function(o,n){const i=F({props:o,name:"MuiAccordionSummary"}),{children:d,className:u,expandIcon:h,focusVisibleClassName:c,onClick:a}=i,g=Q(i,xo),{disabled:m=!1,disableGutters:A,expanded:S,toggle:$}=p.exports.useContext(le),I=y=>{$&&$(y),a&&a(y)},l=s({},i,{expanded:S,disabled:m,disableGutters:A}),b=fo(l);return R(mo,s({focusRipple:!1,disableRipple:!0,disabled:m,component:"div","aria-expanded":S,className:P(b.root,u),focusVisibleClassName:P(b.focusVisible,c),onClick:I,ref:n,ownerState:l},g,{children:[t(go,{className:b.content,ownerState:l,children:d}),h&&t(bo,{className:b.expandIconWrapper,ownerState:l,children:h})]}))}),Co=vo;var J={},yo=ie.exports;Object.defineProperty(J,"__esModule",{value:!0});var pe=J.default=void 0,Ro=yo(re()),wo=se,Ao=(0,Ro.default)((0,wo.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");pe=J.default=Ao;var K={},So=ie.exports;Object.defineProperty(K,"__esModule",{value:!0});var ue=K.default=void 0,$o=So(re()),Eo=se,To=(0,$o.default)((0,Eo.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");ue=K.default=To;const Mo=async e=>{try{const{data:o,error:n}=await $e.from("transcriptions").delete().match({id:e});if(n)throw n;o&&console.log("delete data:",o)}catch(o){alert(o.message)}},zo=({trans:e})=>{const{transcription:o,setTranscription:n}=ke(),{transcriptions:i,setTranscriptions:d}=de(),{breakpointSize:u}=ae(),h=a=>{(o==null?void 0:o.id)!==a.id?n(a):n(void 0)},c=a=>{a!==void 0?Mo(a).then(g=>{d(i.filter(m=>m.id!==a))}):alert("can't delete undefined")};return R(ro,{expanded:e.id===(o==null?void 0:o.id),elevation:0,sx:{borderRadius:3,border:1,borderColor:"warning.light",py:0,backgroundColor:"warning.wafer",color:"#000"},onChange:()=>{h(e)},children:[t(Co,{expandIcon:t(ue,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:t(f,{children:`"${e.correction?e.correction:e.recognition_response!==null?e.recognition_response[0].utterance.replaceAll(`
`," - "):""}"`})}),R(po,{children:[t(f,{mt:-1,mb:2,children:e.recognition_response.map(({utterance:a})=>a).map((a,g)=>t(f,{children:R(Ee,{children:["model ",g+1,'. "',t("i",{children:a.replaceAll(`
`," - ")}),'"']})},g))}),t(Te,{textbox:t(Ne,{rows:u==="xs"?3:4}),buttons:t(Be,{showRecord:!1}),variation:"recognition"})]}),t(D,{children:t(Me,{color:"info",onClick:()=>{c(e.id)},icon:pe})})]})},Io=()=>{const{transcriptions:e}=de();return t(f,{children:e.map((o,n)=>t(f,{m:1,sx:{position:"relative"},children:o===void 0?null:t(zo,{trans:o})},n))})};function Vo(){const{t:e}=ze(),{breakpointSize:o}=ae();return R(Ie,{sx:{backgroundColor:"warning.wafer",minHeight:"100vh"},children:[R(f,{sx:{width:"100%",maxWidth:"sm"},children:[t(je,{title:e("pageTitles.recognition")}),t(f,{py:{sm:4,xs:2},children:t(_e,{title:e("pageTitles.recognition")})}),t(D,{sx:{width:"100%",height:{sm:110,xs:80},position:"relative"},children:R(f,{sx:{position:"relative",backgroundColor:"white",width:o==="xs"?296:384,height:o==="xs"?90:100},pt:{sm:3},children:[t(D,{height:"100%",width:"100%",sx:{position:"relative",zIndex:2},children:t(f,{px:2,sx:{position:"absolute",top:{xs:0,sm:-16}},children:t(We,{width:o==="xs"?296:384,height:o==="xs"?80:90})})}),t(f,{borderBottom:2,sx:{position:"absolute",backgroundColor:"white",height:{sm:"54%",xs:"46%"},width:"100%",top:0,zIndex:1}})]})}),t(D,{mt:1,sx:{position:"relative",height:70},children:t(f,{my:4,mx:3,borderRadius:2,boxShadow:3,width:52,height:52,sx:{backgroundColor:"warning.light"},children:t(Pe,{})})}),t(D,{children:t(f,{height:"3px",width:"97.5%",sx:{position:"relative"},children:t(Ge,{})})}),t(D,{children:t(De,{container:!0,direction:"column",children:t(Io,{})})})]}),t(Ve,{}),t(He,{})]})}export{Vo as default};
