import{N as Ne,_ as h,a as d,L as ne,V as X,j as b,R as J,a4 as et,d as se,aa as tt}from"./setPrototypeOf.fd4aa278.js";import{P as me,O as xe,Q as $,a0 as _e,R as Se,X as z,Y as ve,a1 as $e,a2 as He,a3 as ge,V as Pe,a4 as pe,a5 as ot,s as De,a as lt,u as rt,H as nt,B as fe,C as be,A as st,a6 as at}from"./App.7a589c3a.js";import{M as it}from"./Meta.4db9579b.js";import"./index.a093c38f.js";import"./index.module.01fcbc19.js";let D;function Xe(){if(D)return D;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),D="reverse",e.scrollLeft>0?D="default":(e.scrollLeft=1,e.scrollLeft===0&&(D="negative")),document.body.removeChild(e),D}function ze(e,t){const l=e.scrollLeft;if(t!=="rtl")return l;switch(Xe()){case"negative":return e.scrollWidth-e.clientWidth+l;case"reverse":return e.scrollWidth-e.clientWidth-l;default:return l}}function ct(e){return xe("MuiTab",e)}const dt=me("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),_=dt,ut=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],pt=e=>{const{classes:t,textColor:l,fullWidth:a,wrapped:n,icon:s,label:p,selected:g,disabled:f}=e,m={root:["root",s&&p&&"labelIcon",`textColor${Ne(l)}`,a&&"fullWidth",n&&"wrapped",g&&"selected",f&&"disabled"],iconWrapper:["iconWrapper"]};return ve(m,ct,t)},ft=$(_e,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.label&&l.icon&&t.labelIcon,t[`textColor${Ne(l.textColor)}`],l.fullWidth&&t.fullWidth,l.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>h({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${_.iconWrapper}`]:h({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${_.selected}`]:{opacity:1},[`&.${_.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${_.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${_.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${_.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${_.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),bt=d.exports.forwardRef(function(t,l){const a=Se({props:t,name:"MuiTab"}),{className:n,disabled:s=!1,disableFocusRipple:p=!1,fullWidth:g,icon:f,iconPosition:m="top",indicator:T,label:y,onChange:S,onClick:u,onFocus:C,selected:R,selectionFollowsFocus:B,textColor:Z="inherit",value:E,wrapped:ae=!1}=a,Y=ne(a,ut),k=h({},a,{disabled:s,disableFocusRipple:p,selected:R,icon:!!f,iconPosition:m,label:!!y,fullWidth:g,textColor:Z,wrapped:ae}),K=pt(k),L=f&&y&&d.exports.isValidElement(f)?d.exports.cloneElement(f,{className:z(K.iconWrapper,f.props.className)}):f,U=I=>{!R&&S&&S(I,E),u&&u(I)},V=I=>{B&&!R&&S&&S(I,E),C&&C(I)};return X(ft,h({focusRipple:!p,className:z(K.root,n),ref:l,role:"tab","aria-selected":R,disabled:s,onClick:U,onFocus:V,ownerState:k,tabIndex:R?0:-1},Y,{children:[m==="top"||m==="start"?X(d.exports.Fragment,{children:[L,y]}):X(d.exports.Fragment,{children:[y,L]}),T]}))}),ht=bt,gt=$e(b("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),mt=$e(b("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function xt(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function St(e,t,l,a={},n=()=>{}){const{ease:s=xt,duration:p=300}=a;let g=null;const f=t[e];let m=!1;const T=()=>{m=!0},y=S=>{if(m){n(new Error("Animation cancelled"));return}g===null&&(g=S);const u=Math.min(1,(S-g)/p);if(t[e]=s(u)*(l-f)+f,u>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(y)};return f===l?(n(new Error("Element already at target position")),T):(requestAnimationFrame(y),T)}const vt=["onChange"],yt={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Ct(e){const{onChange:t}=e,l=ne(e,vt),a=d.exports.useRef(),n=d.exports.useRef(null),s=()=>{a.current=n.current.offsetHeight-n.current.clientHeight};return d.exports.useEffect(()=>{const p=ge(()=>{const f=a.current;s(),f!==a.current&&t(a.current)}),g=He(n.current);return g.addEventListener("resize",p),()=>{p.clear(),g.removeEventListener("resize",p)}},[t]),d.exports.useEffect(()=>{s(),t(a.current)},[t]),b("div",h({style:yt,ref:n},l))}function wt(e){return xe("MuiTabScrollButton",e)}const Tt=me("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Bt=Tt;var Ee,ke;const Mt=["className","direction","orientation","disabled"],Rt=e=>{const{classes:t,orientation:l,disabled:a}=e;return ve({root:["root",l,a&&"disabled"]},wt,t)},At=$(_e,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.orientation&&t[l.orientation]]}})(({ownerState:e})=>h({width:40,flexShrink:0,opacity:.8,[`&.${Bt.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),Wt=d.exports.forwardRef(function(t,l){const a=Se({props:t,name:"MuiTabScrollButton"}),{className:n,direction:s}=a,p=ne(a,Mt),f=Pe().direction==="rtl",m=h({isRtl:f},a),T=Rt(m);return b(At,h({component:"div",className:z(T.root,n),ref:l,role:null,ownerState:m,tabIndex:null},p,{children:s==="left"?Ee||(Ee=b(gt,{fontSize:"small"})):ke||(ke=b(mt,{fontSize:"small"}))}))}),zt=Wt;function Et(e){return xe("MuiTabs",e)}const kt=me("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),he=kt,Lt=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Le=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Ie=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,re=(e,t,l)=>{let a=!1,n=l(e,t);for(;n;){if(n===e.firstChild){if(a)return;a=!0}const s=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||s)n=l(e,n);else{n.focus();return}}},It=e=>{const{vertical:t,fixed:l,hideScrollbar:a,scrollableX:n,scrollableY:s,centered:p,scrollButtonsHideMobile:g,classes:f}=e;return ve({root:["root",t&&"vertical"],scroller:["scroller",l&&"fixed",a&&"hideScrollbar",n&&"scrollableX",s&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",p&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",g&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[a&&"hideScrollbar"]},Et,f)},Ft=$("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[{[`& .${he.scrollButtons}`]:t.scrollButtons},{[`& .${he.scrollButtons}`]:l.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,l.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>h({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${he.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),Nt=$("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.scroller,l.fixed&&t.fixed,l.hideScrollbar&&t.hideScrollbar,l.scrollableX&&t.scrollableX,l.scrollableY&&t.scrollableY]}})(({ownerState:e})=>h({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),_t=$("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.flexContainer,l.vertical&&t.flexContainerVertical,l.centered&&t.centered]}})(({ownerState:e})=>h({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),$t=$("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>h({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),Ht=$(Ct,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Fe={},Pt=d.exports.forwardRef(function(t,l){const a=Se({props:t,name:"MuiTabs"}),n=Pe(),s=n.direction==="rtl",{"aria-label":p,"aria-labelledby":g,action:f,centered:m=!1,children:T,className:y,component:S="div",allowScrollButtonsMobile:u=!1,indicatorColor:C="primary",onChange:R,orientation:B="horizontal",ScrollButtonComponent:Z=zt,scrollButtons:E="auto",selectionFollowsFocus:ae,TabIndicatorProps:Y={},TabScrollButtonProps:k={},textColor:K="primary",value:L,variant:U="standard",visibleScrollbar:V=!1}=a,I=ne(a,Lt),A=U==="scrollable",v=B==="vertical",O=v?"scrollTop":"scrollLeft",ee=v?"top":"left",te=v?"bottom":"right",ie=v?"clientHeight":"clientWidth",j=v?"height":"width",q=h({},a,{component:S,allowScrollButtonsMobile:u,indicatorColor:C,orientation:B,vertical:v,scrollButtons:E,textColor:K,variant:U,visibleScrollbar:V,fixed:!A,hideScrollbar:A&&!V,scrollableX:A&&!v,scrollableY:A&&v,centered:m&&!A,scrollButtonsHideMobile:!u}),W=It(q),[ye,Ue]=d.exports.useState(!1),[F,Ce]=d.exports.useState(Fe),[H,Ve]=d.exports.useState({start:!1,end:!1}),[we,Oe]=d.exports.useState({overflow:"hidden",scrollbarWidth:0}),Te=new Map,M=d.exports.useRef(null),G=d.exports.useRef(null),Be=()=>{const o=M.current;let r;if(o){const c=o.getBoundingClientRect();r={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:ze(o,n.direction),scrollWidth:o.scrollWidth,top:c.top,bottom:c.bottom,left:c.left,right:c.right}}let i;if(o&&L!==!1){const c=G.current.children;if(c.length>0){const x=c[Te.get(L)];i=x?x.getBoundingClientRect():null}}return{tabsMeta:r,tabMeta:i}},Q=pe(()=>{const{tabsMeta:o,tabMeta:r}=Be();let i=0,c;if(v)c="top",r&&o&&(i=r.top-o.top+o.scrollTop);else if(c=s?"right":"left",r&&o){const w=s?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;i=(s?-1:1)*(r[c]-o[c]+w)}const x={[c]:i,[j]:r?r[j]:0};if(isNaN(F[c])||isNaN(F[j]))Ce(x);else{const w=Math.abs(F[c]-x[c]),P=Math.abs(F[j]-x[j]);(w>=1||P>=1)&&Ce(x)}}),ce=(o,{animation:r=!0}={})=>{r?St(O,M.current,o,{duration:n.transitions.duration.standard}):M.current[O]=o},Me=o=>{let r=M.current[O];v?r+=o:(r+=o*(s?-1:1),r*=s&&Xe()==="reverse"?-1:1),ce(r)},Re=()=>{const o=M.current[ie];let r=0;const i=Array.from(G.current.children);for(let c=0;c<i.length;c+=1){const x=i[c];if(r+x[ie]>o){c===0&&(r=o);break}r+=x[ie]}return r},je=()=>{Me(-1*Re())},qe=()=>{Me(Re())},Ge=d.exports.useCallback(o=>{Oe({overflow:null,scrollbarWidth:o})},[]),Qe=()=>{const o={};o.scrollbarSizeListener=A?b(Ht,{onChange:Ge,className:z(W.scrollableX,W.hideScrollbar)}):null;const r=H.start||H.end,i=A&&(E==="auto"&&r||E===!0);return o.scrollButtonStart=i?b(Z,h({orientation:B,direction:s?"right":"left",onClick:je,disabled:!H.start},k,{className:z(W.scrollButtons,k.className)})):null,o.scrollButtonEnd=i?b(Z,h({orientation:B,direction:s?"left":"right",onClick:qe,disabled:!H.end},k,{className:z(W.scrollButtons,k.className)})):null,o},Ae=pe(o=>{const{tabsMeta:r,tabMeta:i}=Be();if(!(!i||!r)){if(i[ee]<r[ee]){const c=r[O]+(i[ee]-r[ee]);ce(c,{animation:o})}else if(i[te]>r[te]){const c=r[O]+(i[te]-r[te]);ce(c,{animation:o})}}}),N=pe(()=>{if(A&&E!==!1){const{scrollTop:o,scrollHeight:r,clientHeight:i,scrollWidth:c,clientWidth:x}=M.current;let w,P;if(v)w=o>1,P=o<r-i-1;else{const le=ze(M.current,n.direction);w=s?le<c-x-1:le>1,P=s?le>1:le<c-x-1}(w!==H.start||P!==H.end)&&Ve({start:w,end:P})}});d.exports.useEffect(()=>{const o=ge(()=>{M.current&&(Q(),N())}),r=He(M.current);r.addEventListener("resize",o);let i;return typeof ResizeObserver<"u"&&(i=new ResizeObserver(o),Array.from(G.current.children).forEach(c=>{i.observe(c)})),()=>{o.clear(),r.removeEventListener("resize",o),i&&i.disconnect()}},[Q,N]);const de=d.exports.useMemo(()=>ge(()=>{N()}),[N]);d.exports.useEffect(()=>()=>{de.clear()},[de]),d.exports.useEffect(()=>{Ue(!0)},[]),d.exports.useEffect(()=>{Q(),N()}),d.exports.useEffect(()=>{Ae(Fe!==F)},[Ae,F]),d.exports.useImperativeHandle(f,()=>({updateIndicator:Q,updateScrollButtons:N}),[Q,N]);const We=b($t,h({},Y,{className:z(W.indicator,Y.className),ownerState:q,style:h({},F,Y.style)}));let oe=0;const Je=d.exports.Children.map(T,o=>{if(!d.exports.isValidElement(o))return null;const r=o.props.value===void 0?oe:o.props.value;Te.set(r,oe);const i=r===L;return oe+=1,d.exports.cloneElement(o,h({fullWidth:U==="fullWidth",indicator:i&&!ye&&We,selected:i,selectionFollowsFocus:ae,onChange:R,textColor:K,value:r},oe===1&&L===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),Ze=o=>{const r=G.current,i=ot(r).activeElement;if(i.getAttribute("role")!=="tab")return;let x=B==="horizontal"?"ArrowLeft":"ArrowUp",w=B==="horizontal"?"ArrowRight":"ArrowDown";switch(B==="horizontal"&&s&&(x="ArrowRight",w="ArrowLeft"),o.key){case x:o.preventDefault(),re(r,i,Ie);break;case w:o.preventDefault(),re(r,i,Le);break;case"Home":o.preventDefault(),re(r,null,Le);break;case"End":o.preventDefault(),re(r,null,Ie);break}},ue=Qe();return X(Ft,h({className:z(W.root,y),ownerState:q,ref:l,as:S},I,{children:[ue.scrollButtonStart,ue.scrollbarSizeListener,X(Nt,{className:W.scroller,ownerState:q,style:{overflow:we.overflow,[v?`margin${s?"Left":"Right"}`:"marginBottom"]:V?void 0:-we.scrollbarWidth},ref:M,onScroll:de,children:[b(_t,{"aria-label":p,"aria-labelledby":g,"aria-orientation":B==="vertical"?"vertical":null,className:W.flexContainer,ownerState:q,onKeyDown:Ze,ref:G,role:"tablist",children:Je}),ye&&We]}),ue.scrollButtonEnd]}))}),Dt=Pt,Xt=async()=>{try{const{data:e,error:t}=await De.from("applications").select("name, url, category, description_en, description_ga, image");if(t)throw t;if(e)return e}catch(e){alert(e.message)}},Yt=async()=>{try{const{data:e,error:t}=await De.from("application_categories").select("id, name_en, name_ga");if(t)throw t;if(e)return e}catch(e){alert(e.message)}},Ye=J({key:"applications",default:[]}),Kt=()=>{const[e,t]=se(Ye);return{applications:e,setApplications:t}},Ut=J({key:"categories",default:[]}),Vt=()=>{const[e,t]=se(Ut);return{categories:e,setCategories:t}},Ke=J({key:"application-category-filter",default:1}),Ot=()=>{const[e,t]=se(Ke);return{applicationCategoryFilter:e,setApplicationCategoryFilter:t}},jt=et({key:"filtered-application",get:({get:e})=>{const t=e(Ye),l=e(Ke),n=(s=>s.filter(p=>p.category===l))(t).sort((s,p)=>(console.log("a.category:",s.category),console.log("b.category:",p.category),s.url>p.url?-1:s.url<p.url?1:0));return console.log("filteredApplications:",n),n}});J({key:"front-page-tabs-state",default:0});const qt=J({key:"app-tabs-state",default:0}),Gt=()=>{const[e,t]=se(qt);return{appTabs:e,setAppTabs:t}};function oo(){const{t:e,i18n:t}=lt(),{appTabs:l,setAppTabs:a}=Gt(),{applications:n,setApplications:s}=Kt(),{categories:p,setCategories:g}=Vt(),f=tt(jt),{setApplicationCategoryFilter:m}=Ot(),{breakpointSize:T}=rt(),y=(u,C)=>{const R=p[C].id;m(R),a(C)};d.exports.useEffect(()=>{console.log("in useEffect on Applications"),n.length===0&&Xt().then(u=>{console.log("res:",u),s(u)}),p.length===0&&Yt().then(u=>{g(u)})},[]);const S=u=>{window.location.replace(u)};return b(nt,{pb:8,children:X(fe,{sx:{width:"100%",maxWidth:"md"},children:[b(it,{title:e("pageTitles.applications")}),b(be,{children:b(fe,{sx:{maxWidth:"md",width:"100%"},py:{sm:4,xs:2},children:b(st,{title:e("pageTitles.applications")})})}),b(be,{children:p?b(Dt,{value:l,onChange:y,"aria-label":"disabled tabs example",children:p.map((u,C)=>b(ht,{label:t.language==="en"?u.name_en:u.name_ga},C))}):null}),b(be,{mt:2,children:b(fe,{sx:{maxWidth:"md",width:"100%"},children:f.map((u,C)=>b(at,{onClick:()=>u.name==="An Bat M\xEDrialta"?S("/applications/bat-mirialta"):S(u.url),name:u.name,description:t.language==="en"?u.description_en:u.description_ga,image:u.image,message:u.url==="#"&&u.name!=="An Bat M\xEDrialta"?e("pages.applications.comingSoon"):"",breakpointSize:T},C))})})]})})}export{oo as default};