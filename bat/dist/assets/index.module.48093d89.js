import{l as O,a as K}from"./setPrototypeOf.2ff2ecbe.js";var p={exports:{}},oe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ie=oe,ae=ie;function ee(){}function te(){}te.resetWarningCache=ee;var se=function(){function t(e,o,i,s,a,u){if(u!==ae){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function r(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:te,resetWarningCache:ee};return n.PropTypes=n,n};p.exports=se();var ue=typeof Element<"u",ce=typeof Map=="function",le=typeof Set=="function",pe=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function L(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,e,o;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(e=n;e--!==0;)if(!L(t[e],r[e]))return!1;return!0}var i;if(ce&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(i=t.entries();!(e=i.next()).done;)if(!r.has(e.value[0]))return!1;for(i=t.entries();!(e=i.next()).done;)if(!L(e.value[1],r.get(e.value[0])))return!1;return!0}if(le&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(i=t.entries();!(e=i.next()).done;)if(!r.has(e.value[0]))return!1;return!0}if(pe&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if(n=t.length,n!=r.length)return!1;for(e=n;e--!==0;)if(t[e]!==r[e])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(r).length)return!1;for(e=n;e--!==0;)if(!Object.prototype.hasOwnProperty.call(r,o[e]))return!1;if(ue&&t instanceof Element)return!1;for(e=n;e--!==0;)if(!((o[e]==="_owner"||o[e]==="__v"||o[e]==="__o")&&t.$$typeof)&&!L(t[o[e]],r[o[e]]))return!1;return!0}return t!==t&&r!==r}var fe=function(r,n){try{return L(r,n)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}},he=function(t,r,n,e,o,i,s,a){if(!t){var u;if(r===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,e,o,i,s,a],d=0;u=new Error(r.replace(/%s/g,function(){return l[d++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},V=he,de=function(r,n,e,o){var i=e?e.call(o,r,n):void 0;if(i!==void 0)return!!i;if(r===n)return!0;if(typeof r!="object"||!r||typeof n!="object"||!n)return!1;var s=Object.keys(r),a=Object.keys(n);if(s.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),l=0;l<s.length;l++){var d=s[l];if(!u(d))return!1;var h=r[d],f=n[d];if(i=e?e.call(o,h,f,d):void 0,i===!1||i===void 0&&h!==f)return!1}return!0};function y(){return y=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},y.apply(this,arguments)}function W(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,z(t,r)}function z(t,r){return z=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},z(t,r)}function G(t,r){if(t==null)return{};var n,e,o={},i=Object.keys(t);for(e=0;e<i.length;e++)r.indexOf(n=i[e])>=0||(o[n]=t[n]);return o}var c={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},ye={rel:["amphtml","canonical","alternate"]},me={type:["application/ld+json"]},Te={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},$=Object.keys(c).map(function(t){return c[t]}),M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ge=Object.keys(M).reduce(function(t,r){return t[M[r]]=r,t},{}),C=function(t,r){for(var n=t.length-1;n>=0;n-=1){var e=t[n];if(Object.prototype.hasOwnProperty.call(e,r))return e[r]}return null},ve=function(t){var r=C(t,c.TITLE),n=C(t,"titleTemplate");if(Array.isArray(r)&&(r=r.join("")),n&&r)return n.replace(/%s/g,function(){return r});var e=C(t,"defaultTitle");return r||e||void 0},be=function(t){return C(t,"onChangeClientState")||function(){}},D=function(t,r){return r.filter(function(n){return n[t]!==void 0}).map(function(n){return n[t]}).reduce(function(n,e){return y({},n,e)},{})},Oe=function(t,r){return r.filter(function(n){return n[c.BASE]!==void 0}).map(function(n){return n[c.BASE]}).reverse().reduce(function(n,e){if(!n.length)for(var o=Object.keys(e),i=0;i<o.length;i+=1){var s=o[i].toLowerCase();if(t.indexOf(s)!==-1&&e[s])return n.concat(e)}return n},[])},w=function(t,r,n){var e={};return n.filter(function(o){return!!Array.isArray(o[t])||(o[t]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof o[t]+'"'),!1)}).map(function(o){return o[t]}).reverse().reduce(function(o,i){var s={};i.filter(function(h){for(var f,g=Object.keys(h),T=0;T<g.length;T+=1){var m=g[T],b=m.toLowerCase();r.indexOf(b)===-1||f==="rel"&&h[f].toLowerCase()==="canonical"||b==="rel"&&h[b].toLowerCase()==="stylesheet"||(f=b),r.indexOf(m)===-1||m!=="innerHTML"&&m!=="cssText"&&m!=="itemprop"||(f=m)}if(!f||!h[f])return!1;var x=h[f].toLowerCase();return e[f]||(e[f]={}),s[f]||(s[f]={}),!e[f][x]&&(s[f][x]=!0,!0)}).reverse().forEach(function(h){return o.push(h)});for(var a=Object.keys(s),u=0;u<a.length;u+=1){var l=a[u],d=y({},e[l],s[l]);e[l]=d}return o},[]).reverse()},xe=function(t,r){if(Array.isArray(t)&&t.length){for(var n=0;n<t.length;n+=1)if(t[n][r])return!0}return!1},re=function(t){return Array.isArray(t)?t.join(""):t},_=function(t,r){return Array.isArray(t)?t.reduce(function(n,e){return function(o,i){for(var s=Object.keys(o),a=0;a<s.length;a+=1)if(i[s[a]]&&i[s[a]].includes(o[s[a]]))return!0;return!1}(e,r)?n.priority.push(e):n.default.push(e),n},{priority:[],default:[]}):{default:t}},J=function(t,r){var n;return y({},t,((n={})[r]=void 0,n))},Ae=[c.NOSCRIPT,c.SCRIPT,c.STYLE],q=function(t,r){return r===void 0&&(r=!0),r===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(t){return Object.keys(t).reduce(function(r,n){var e=t[n]!==void 0?n+'="'+t[n]+'"':""+n;return r?r+" "+e:e},"")},X=function(t,r){return r===void 0&&(r={}),Object.keys(t).reduce(function(n,e){return n[M[e]||e]=t[e],n},r)},j=function(t,r){return r.map(function(n,e){var o,i=((o={key:e})["data-rh"]=!0,o);return Object.keys(n).forEach(function(s){var a=M[s]||s;a==="innerHTML"||a==="cssText"?i.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:i[a]=n[s]}),O.createElement(t,i)})},v=function(t,r,n){switch(t){case c.TITLE:return{toComponent:function(){return o=r.titleAttributes,(i={key:e=r.title})["data-rh"]=!0,s=X(o,i),[O.createElement(c.TITLE,s,e)];var e,o,i,s},toString:function(){return function(e,o,i,s){var a=Q(i),u=re(o);return a?"<"+e+' data-rh="true" '+a+">"+q(u,s)+"</"+e+">":"<"+e+' data-rh="true">'+q(u,s)+"</"+e+">"}(t,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return X(r)},toString:function(){return Q(r)}};default:return{toComponent:function(){return j(t,r)},toString:function(){return function(e,o,i){return o.reduce(function(s,a){var u=Object.keys(a).filter(function(h){return!(h==="innerHTML"||h==="cssText")}).reduce(function(h,f){var g=a[f]===void 0?f:f+'="'+q(a[f],i)+'"';return h?h+" "+g:g},""),l=a.innerHTML||a.cssText||"",d=Ae.indexOf(e)===-1;return s+"<"+e+' data-rh="true" '+u+(d?"/>":">"+l+"</"+e+">")},"")}(t,r,n)}}}},B=function(t){var r=t.baseTag,n=t.bodyAttributes,e=t.encode,o=t.htmlAttributes,i=t.noscriptTags,s=t.styleTags,a=t.title,u=a===void 0?"":a,l=t.titleAttributes,d=t.linkTags,h=t.metaTags,f=t.scriptTags,g={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var T=function(m){var b=m.linkTags,x=m.scriptTags,S=m.encode,k=_(m.metaTags,Te),N=_(b,ye),H=_(x,me);return{priorityMethods:{toComponent:function(){return[].concat(j(c.META,k.priority),j(c.LINK,N.priority),j(c.SCRIPT,H.priority))},toString:function(){return v(c.META,k.priority,S)+" "+v(c.LINK,N.priority,S)+" "+v(c.SCRIPT,H.priority,S)}},metaTags:k.default,linkTags:N.default,scriptTags:H.default}}(t);g=T.priorityMethods,d=T.linkTags,h=T.metaTags,f=T.scriptTags}return{priority:g,base:v(c.BASE,r,e),bodyAttributes:v("bodyAttributes",n,e),htmlAttributes:v("htmlAttributes",o,e),link:v(c.LINK,d,e),meta:v(c.META,h,e),noscript:v(c.NOSCRIPT,i,e),script:v(c.SCRIPT,f,e),style:v(c.STYLE,s,e),title:v(c.TITLE,{title:u,titleAttributes:l},e)}},I=[],F=function(t,r){var n=this;r===void 0&&(r=typeof document<"u"),this.instances=[],this.value={setHelmet:function(e){n.context.helmet=e},helmetInstances:{get:function(){return n.canUseDOM?I:n.instances},add:function(e){(n.canUseDOM?I:n.instances).push(e)},remove:function(e){var o=(n.canUseDOM?I:n.instances).indexOf(e);(n.canUseDOM?I:n.instances).splice(o,1)}}},this.context=t,this.canUseDOM=r,r||(t.helmet=B({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},ne=O.createContext({}),Ce=p.exports.shape({setHelmet:p.exports.func,helmetInstances:p.exports.shape({get:p.exports.func,add:p.exports.func,remove:p.exports.func})}),Se=typeof document<"u",P=function(t){function r(n){var e;return(e=t.call(this,n)||this).helmetData=new F(e.props.context,r.canUseDOM),e}return W(r,t),r.prototype.render=function(){return O.createElement(ne.Provider,{value:this.helmetData.value},this.props.children)},r}(K.exports.Component);P.canUseDOM=Se,P.propTypes={context:p.exports.shape({helmet:p.exports.shape()}),children:p.exports.node.isRequired},P.defaultProps={context:{}},P.displayName="HelmetProvider";var A=function(t,r){var n,e=document.head||document.querySelector(c.HEAD),o=e.querySelectorAll(t+"[data-rh]"),i=[].slice.call(o),s=[];return r&&r.length&&r.forEach(function(a){var u=document.createElement(t);for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(l==="innerHTML"?u.innerHTML=a.innerHTML:l==="cssText"?u.styleSheet?u.styleSheet.cssText=a.cssText:u.appendChild(document.createTextNode(a.cssText)):u.setAttribute(l,a[l]===void 0?"":a[l]));u.setAttribute("data-rh","true"),i.some(function(d,h){return n=h,u.isEqualNode(d)})?i.splice(n,1):s.push(u)}),i.forEach(function(a){return a.parentNode.removeChild(a)}),s.forEach(function(a){return e.appendChild(a)}),{oldTags:i,newTags:s}},U=function(t,r){var n=document.getElementsByTagName(t)[0];if(n){for(var e=n.getAttribute("data-rh"),o=e?e.split(","):[],i=[].concat(o),s=Object.keys(r),a=0;a<s.length;a+=1){var u=s[a],l=r[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),o.indexOf(u)===-1&&o.push(u);var d=i.indexOf(u);d!==-1&&i.splice(d,1)}for(var h=i.length-1;h>=0;h-=1)n.removeAttribute(i[h]);o.length===i.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==s.join(",")&&n.setAttribute("data-rh",s.join(","))}},Z=function(t,r){var n=t.baseTag,e=t.htmlAttributes,o=t.linkTags,i=t.metaTags,s=t.noscriptTags,a=t.onChangeClientState,u=t.scriptTags,l=t.styleTags,d=t.title,h=t.titleAttributes;U(c.BODY,t.bodyAttributes),U(c.HTML,e),function(m,b){m!==void 0&&document.title!==m&&(document.title=re(m)),U(c.TITLE,b)}(d,h);var f={baseTag:A(c.BASE,n),linkTags:A(c.LINK,o),metaTags:A(c.META,i),noscriptTags:A(c.NOSCRIPT,s),scriptTags:A(c.SCRIPT,u),styleTags:A(c.STYLE,l)},g={},T={};Object.keys(f).forEach(function(m){var b=f[m],x=b.newTags,S=b.oldTags;x.length&&(g[m]=x),S.length&&(T[m]=f[m].oldTags)}),r&&r(),a(t,g,T)},E=null,R=function(t){function r(){for(var e,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))||this).rendered=!1,e}W(r,t);var n=r.prototype;return n.shouldComponentUpdate=function(e){return!de(e,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var e,o,i=this.props.context,s=i.setHelmet,a=null,u=(e=i.helmetInstances.get().map(function(l){var d=y({},l.props);return delete d.context,d}),{baseTag:Oe(["href"],e),bodyAttributes:D("bodyAttributes",e),defer:C(e,"defer"),encode:C(e,"encodeSpecialCharacters"),htmlAttributes:D("htmlAttributes",e),linkTags:w(c.LINK,["rel","href"],e),metaTags:w(c.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:w(c.NOSCRIPT,["innerHTML"],e),onChangeClientState:be(e),scriptTags:w(c.SCRIPT,["src","innerHTML"],e),styleTags:w(c.STYLE,["cssText"],e),title:ve(e),titleAttributes:D("titleAttributes",e),prioritizeSeoTags:xe(e,"prioritizeSeoTags")});P.canUseDOM?(o=u,E&&cancelAnimationFrame(E),o.defer?E=requestAnimationFrame(function(){Z(o,function(){E=null})}):(Z(o),E=null)):B&&(a=B(u)),s(a)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},r}(K.exports.Component);R.propTypes={context:Ce.isRequired},R.displayName="HelmetDispatcher";var we=["children"],Ee=["children"],Y=function(t){function r(){return t.apply(this,arguments)||this}W(r,t);var n=r.prototype;return n.shouldComponentUpdate=function(e){return!fe(J(this.props,"helmetData"),J(e,"helmetData"))},n.mapNestedChildrenToProps=function(e,o){if(!o)return null;switch(e.type){case c.SCRIPT:case c.NOSCRIPT:return{innerHTML:o};case c.STYLE:return{cssText:o};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(e){var o,i=e.child,s=e.arrayTypeChildren;return y({},s,((o={})[i.type]=[].concat(s[i.type]||[],[y({},e.newChildProps,this.mapNestedChildrenToProps(i,e.nestedChildren))]),o))},n.mapObjectTypeChildren=function(e){var o,i,s=e.child,a=e.newProps,u=e.newChildProps,l=e.nestedChildren;switch(s.type){case c.TITLE:return y({},a,((o={})[s.type]=l,o.titleAttributes=y({},u),o));case c.BODY:return y({},a,{bodyAttributes:y({},u)});case c.HTML:return y({},a,{htmlAttributes:y({},u)});default:return y({},a,((i={})[s.type]=y({},u),i))}},n.mapArrayTypeChildrenToProps=function(e,o){var i=y({},o);return Object.keys(e).forEach(function(s){var a;i=y({},i,((a={})[s]=e[s],a))}),i},n.warnOnInvalidChildren=function(e,o){return V($.some(function(i){return e.type===i}),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+$.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),V(!o||typeof o=="string"||Array.isArray(o)&&!o.some(function(i){return typeof i!="string"}),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(e,o){var i=this,s={};return O.Children.forEach(e,function(a){if(a&&a.props){var u=a.props,l=u.children,d=G(u,we),h=Object.keys(d).reduce(function(g,T){return g[ge[T]||T]=d[T],g},{}),f=a.type;switch(typeof f=="symbol"?f=f.toString():i.warnOnInvalidChildren(a,l),f){case c.FRAGMENT:o=i.mapChildrenToProps(l,o);break;case c.LINK:case c.META:case c.NOSCRIPT:case c.SCRIPT:case c.STYLE:s=i.flattenArrayTypeChildren({child:a,arrayTypeChildren:s,newChildProps:h,nestedChildren:l});break;default:o=i.mapObjectTypeChildren({child:a,newProps:o,newChildProps:h,nestedChildren:l})}}}),this.mapArrayTypeChildrenToProps(s,o)},n.render=function(){var e=this.props,o=e.children,i=G(e,Ee),s=y({},i),a=i.helmetData;return o&&(s=this.mapChildrenToProps(o,s)),!a||a instanceof F||(a=new F(a.context,a.instances)),a?O.createElement(R,y({},s,{context:a.value,helmetData:void 0})):O.createElement(ne.Consumer,null,function(u){return O.createElement(R,y({},s,{context:u}))})},r}(K.exports.Component);Y.propTypes={base:p.exports.object,bodyAttributes:p.exports.object,children:p.exports.oneOfType([p.exports.arrayOf(p.exports.node),p.exports.node]),defaultTitle:p.exports.string,defer:p.exports.bool,encodeSpecialCharacters:p.exports.bool,htmlAttributes:p.exports.object,link:p.exports.arrayOf(p.exports.object),meta:p.exports.arrayOf(p.exports.object),noscript:p.exports.arrayOf(p.exports.object),onChangeClientState:p.exports.func,script:p.exports.arrayOf(p.exports.object),style:p.exports.arrayOf(p.exports.object),title:p.exports.string,titleAttributes:p.exports.object,titleTemplate:p.exports.string,prioritizeSeoTags:p.exports.bool,helmetData:p.exports.object},Y.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},Y.displayName="Helmet";export{Y as W,p,P as q};
