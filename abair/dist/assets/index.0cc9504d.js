import{k as He,l as Je,m as Ve}from"./App.8006c1cf.js";import{a7 as hr}from"./setPrototypeOf.fd4aa278.js";var oe={},pr=Je.exports;Object.defineProperty(oe,"__esModule",{value:!0});var vr=oe.default=void 0,mr=pr(He()),Er=Ve,Rr=(0,mr.default)((0,Er.jsx)("path",{d:"M8 5v14l11-7z"}),"PlayArrow");vr=oe.default=Rr;var ue={},yr=Je.exports;Object.defineProperty(ue,"__esModule",{value:!0});var br=ue.default=void 0,wr=yr(He()),Or=Ve,Ar=(0,wr.default)((0,Or.jsx)("path",{d:"M6 6h12v12H6z"}),"Stop");br=ue.default=Ar;var We={exports:{}},fe={exports:{}},ze=function(r,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return r.apply(t,n)}},Sr=ze,le=Object.prototype.toString,ce=function(e){return function(r){var t=le.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(e){return e=e.toLowerCase(),function(t){return ce(t)===e}}function de(e){return Array.isArray(e)}function $(e){return typeof e>"u"}function xr(e){return e!==null&&!$(e)&&e.constructor!==null&&!$(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Xe=A("ArrayBuffer");function Cr(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Xe(e.buffer),r}function _r(e){return typeof e=="string"}function Pr(e){return typeof e=="number"}function Ke(e){return e!==null&&typeof e=="object"}function B(e){if(ce(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var Tr=A("Date"),Nr=A("File"),Dr=A("Blob"),qr=A("FileList");function he(e){return le.call(e)==="[object Function]"}function Ur(e){return Ke(e)&&he(e.pipe)}function gr(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||le.call(e)===r||he(e.toString)&&e.toString()===r)}var Br=A("URLSearchParams");function Lr(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function $r(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function pe(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),de(e))for(var t=0,i=e.length;t<i;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function se(){var e={};function r(n,a){B(e[a])&&B(n)?e[a]=se(e[a],n):B(n)?e[a]=se({},n):de(n)?e[a]=n.slice():e[a]=n}for(var t=0,i=arguments.length;t<i;t++)pe(arguments[t],r);return e}function jr(e,r,t){return pe(r,function(n,a){t&&typeof n=="function"?e[a]=Sr(n,t):e[a]=n}),e}function Fr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Ir(e,r,t,i){e.prototype=Object.create(r.prototype,i),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function kr(e,r,t){var i,n,a,s={};r=r||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)a=i[n],s[a]||(r[a]=e[a],s[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function Mr(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var i=e.indexOf(r,t);return i!==-1&&i===t}function Hr(e){if(!e)return null;var r=e.length;if($(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var Jr=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:de,isArrayBuffer:Xe,isBuffer:xr,isFormData:gr,isArrayBufferView:Cr,isString:_r,isNumber:Pr,isObject:Ke,isPlainObject:B,isUndefined:$,isDate:Tr,isFile:Nr,isBlob:Dr,isFunction:he,isStream:Ur,isURLSearchParams:Br,isStandardBrowserEnv:$r,forEach:pe,merge:se,extend:jr,trim:Lr,stripBOM:Fr,inherits:Ir,toFlatObject:kr,kindOf:ce,kindOfTest:A,endsWith:Mr,toArray:Hr,isTypedArray:Jr,isFileList:qr},_=v;function be(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Qe=function(r,t,i){if(!t)return r;var n;if(i)n=i(t);else if(_.isURLSearchParams(t))n=t.toString();else{var a=[];_.forEach(t,function(f,d){f===null||typeof f>"u"||(_.isArray(f)?d=d+"[]":f=[f],_.forEach(f,function(h){_.isDate(h)?h=h.toISOString():_.isObject(h)&&(h=JSON.stringify(h)),a.push(be(d)+"="+be(h))}))}),n=a.join("&")}if(n){var s=r.indexOf("#");s!==-1&&(r=r.slice(0,s)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},Vr=v;function j(){this.handlers=[]}j.prototype.use=function(r,t,i){return this.handlers.push({fulfilled:r,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};j.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};j.prototype.forEach=function(r){Vr.forEach(this.handlers,function(i){i!==null&&r(i)})};var Wr=j,zr=v,Xr=function(r,t){zr.forEach(r,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[a])})},Ye=v;function T(e,r,t,i,n){Error.call(this),this.message=e,this.name="AxiosError",r&&(this.code=r),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}Ye.inherits(T,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ge=T.prototype,Ze={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Ze[e]={value:e}});Object.defineProperties(T,Ze);Object.defineProperty(Ge,"isAxiosError",{value:!0});T.from=function(e,r,t,i,n,a){var s=Object.create(Ge);return Ye.toFlatObject(e,s,function(f){return f!==Error.prototype}),T.call(s,e.message,r,t,i,n),s.name=e.name,a&&Object.assign(s,a),s};var D=T,er={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},b=v;function Kr(e,r){r=r||new FormData;var t=[];function i(a){return a===null?"":b.isDate(a)?a.toISOString():b.isArrayBuffer(a)||b.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(b.isPlainObject(a)||b.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),b.forEach(a,function(f,d){if(!b.isUndefined(f)){var c=s?s+"."+d:d,h;if(f&&!s&&typeof f=="object"){if(b.endsWith(d,"{}"))f=JSON.stringify(f);else if(b.endsWith(d,"[]")&&(h=b.toArray(f))){h.forEach(function(u){!b.isUndefined(u)&&r.append(c,i(u))});return}}n(f,c)}}),t.pop()}else r.append(s,i(a))}return n(e),r}var rr=Kr,V,we;function Qr(){if(we)return V;we=1;var e=D;return V=function(t,i,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?t(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},V}var W,Oe;function Yr(){if(Oe)return W;Oe=1;var e=v;return W=e.isStandardBrowserEnv()?function(){return{write:function(i,n,a,s,o,f){var d=[];d.push(i+"="+encodeURIComponent(n)),e.isNumber(a)&&d.push("expires="+new Date(a).toGMTString()),e.isString(s)&&d.push("path="+s),e.isString(o)&&d.push("domain="+o),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),W}var Gr=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},Zr=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},et=Gr,rt=Zr,tr=function(r,t){return r&&!et(t)?rt(r,t):t},z,Ae;function tt(){if(Ae)return z;Ae=1;var e=v,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return z=function(i){var n={},a,s,o;return i&&e.forEach(i.split(`
`),function(d){if(o=d.indexOf(":"),a=e.trim(d.substr(0,o)).toLowerCase(),s=e.trim(d.substr(o+1)),a){if(n[a]&&r.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([s]):n[a]=n[a]?n[a]+", "+s:s}}),n},z}var X,Se;function nt(){if(Se)return X;Se=1;var e=v;return X=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function a(s){var o=s;return t&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=a(window.location.href),function(o){var f=e.isString(o)?a(o):o;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),X}var K,xe;function F(){if(xe)return K;xe=1;var e=D,r=v;function t(i){e.call(this,i==null?"canceled":i,e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),K=t,K}var Q,Ce;function it(){return Ce||(Ce=1,Q=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),Q}var Y,_e;function Pe(){if(_e)return Y;_e=1;var e=v,r=Qr(),t=Yr(),i=Qe,n=tr,a=tt(),s=nt(),o=er,f=D,d=F(),c=it();return Y=function(u){return new Promise(function(fr,S){var q=u.data,U=u.headers,g=u.responseType,x;function Ee(){u.cancelToken&&u.cancelToken.unsubscribe(x),u.signal&&u.signal.removeEventListener("abort",x)}e.isFormData(q)&&e.isStandardBrowserEnv()&&delete U["Content-Type"];var l=new XMLHttpRequest;if(u.auth){var lr=u.auth.username||"",cr=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";U.Authorization="Basic "+btoa(lr+":"+cr)}var M=n(u.baseURL,u.url);l.open(u.method.toUpperCase(),i(M,u.params,u.paramsSerializer),!0),l.timeout=u.timeout;function Re(){if(!!l){var y="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,C=!g||g==="text"||g==="json"?l.responseText:l.response,O={data:C,status:l.status,statusText:l.statusText,headers:y,config:u,request:l};r(function(J){fr(J),Ee()},function(J){S(J),Ee()},O),l=null}}if("onloadend"in l?l.onloadend=Re:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(Re)},l.onabort=function(){!l||(S(new f("Request aborted",f.ECONNABORTED,u,l)),l=null)},l.onerror=function(){S(new f("Network Error",f.ERR_NETWORK,u,l,l)),l=null},l.ontimeout=function(){var C=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",O=u.transitional||o;u.timeoutErrorMessage&&(C=u.timeoutErrorMessage),S(new f(C,O.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,u,l)),l=null},e.isStandardBrowserEnv()){var ye=(u.withCredentials||s(M))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;ye&&(U[u.xsrfHeaderName]=ye)}"setRequestHeader"in l&&e.forEach(U,function(C,O){typeof q>"u"&&O.toLowerCase()==="content-type"?delete U[O]:l.setRequestHeader(O,C)}),e.isUndefined(u.withCredentials)||(l.withCredentials=!!u.withCredentials),g&&g!=="json"&&(l.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&l.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(x=function(y){!l||(S(!y||y&&y.type?new d:y),l.abort(),l=null)},u.cancelToken&&u.cancelToken.subscribe(x),u.signal&&(u.signal.aborted?x():u.signal.addEventListener("abort",x))),q||(q=null);var H=c(M);if(H&&["http","https","file"].indexOf(H)===-1){S(new f("Unsupported protocol "+H+":",f.ERR_BAD_REQUEST,u));return}l.send(q)})},Y}var G,Te;function at(){return Te||(Te=1,G=null),G}var p=v,Ne=Xr,De=D,st=er,ot=rr,ut={"Content-Type":"application/x-www-form-urlencoded"};function qe(e,r){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function ft(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Pe()),e}function lt(e,r,t){if(p.isString(e))try{return(r||JSON.parse)(e),p.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(e)}var I={transitional:st,adapter:ft(),transformRequest:[function(r,t){if(Ne(t,"Accept"),Ne(t,"Content-Type"),p.isFormData(r)||p.isArrayBuffer(r)||p.isBuffer(r)||p.isStream(r)||p.isFile(r)||p.isBlob(r))return r;if(p.isArrayBufferView(r))return r.buffer;if(p.isURLSearchParams(r))return qe(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var i=p.isObject(r),n=t&&t["Content-Type"],a;if((a=p.isFileList(r))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return ot(a?{"files[]":r}:r,s&&new s)}else if(i||n==="application/json")return qe(t,"application/json"),lt(r);return r}],transformResponse:[function(r){var t=this.transitional||I.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&p.isString(r)&&r.length)try{return JSON.parse(r)}catch(s){if(a)throw s.name==="SyntaxError"?De.from(s,De.ERR_BAD_RESPONSE,this,null,this.response):s}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:at()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(r){I.headers[r]={}});p.forEach(["post","put","patch"],function(r){I.headers[r]=p.merge(ut)});var ve=I,ct=v,dt=ve,ht=function(r,t,i){var n=this||dt;return ct.forEach(i,function(s){r=s.call(n,r,t)}),r},Z,Ue;function nr(){return Ue||(Ue=1,Z=function(r){return!!(r&&r.__CANCEL__)}),Z}var ge=v,ee=ht,pt=nr(),vt=ve,mt=F();function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mt}var Et=function(r){re(r),r.headers=r.headers||{},r.data=ee.call(r,r.data,r.headers,r.transformRequest),r.headers=ge.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),ge.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||vt.adapter;return t(r).then(function(n){return re(r),n.data=ee.call(r,n.data,n.headers,r.transformResponse),n},function(n){return pt(n)||(re(r),n&&n.response&&(n.response.data=ee.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},E=v,ir=function(r,t){t=t||{};var i={};function n(c,h){return E.isPlainObject(c)&&E.isPlainObject(h)?E.merge(c,h):E.isPlainObject(h)?E.merge({},h):E.isArray(h)?h.slice():h}function a(c){if(E.isUndefined(t[c])){if(!E.isUndefined(r[c]))return n(void 0,r[c])}else return n(r[c],t[c])}function s(c){if(!E.isUndefined(t[c]))return n(void 0,t[c])}function o(c){if(E.isUndefined(t[c])){if(!E.isUndefined(r[c]))return n(void 0,r[c])}else return n(void 0,t[c])}function f(c){if(c in t)return n(r[c],t[c]);if(c in r)return n(void 0,r[c])}var d={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:f};return E.forEach(Object.keys(r).concat(Object.keys(t)),function(h){var u=d[h]||a,R=u(h);E.isUndefined(R)&&u!==f||(i[h]=R)}),i},te,Be;function ar(){return Be||(Be=1,te={version:"0.27.2"}),te}var Rt=ar().version,w=D,me={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){me[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var Le={};me.transitional=function(r,t,i){function n(a,s){return"[Axios v"+Rt+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,o){if(r===!1)throw new w(n(s," has been removed"+(t?" in "+t:"")),w.ERR_DEPRECATED);return t&&!Le[s]&&(Le[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(a,s,o):!0}};function yt(e,r,t){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var a=i[n],s=r[a];if(s){var o=e[a],f=o===void 0||s(o,a,e);if(f!==!0)throw new w("option "+a+" must be "+f,w.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new w("Unknown option "+a,w.ERR_BAD_OPTION)}}var bt={assertOptions:yt,validators:me},sr=v,wt=Qe,$e=Wr,je=Et,k=ir,Ot=tr,or=bt,P=or.validators;function N(e){this.defaults=e,this.interceptors={request:new $e,response:new $e}}N.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=k(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&or.assertOptions(i,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(t)===!1||(a=a&&R.synchronous,n.unshift(R.fulfilled,R.rejected))});var s=[];this.interceptors.response.forEach(function(R){s.push(R.fulfilled,R.rejected)});var o;if(!a){var f=[je,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var d=t;n.length;){var c=n.shift(),h=n.shift();try{d=c(d)}catch(u){h(u);break}}try{o=je(d)}catch(u){return Promise.reject(u)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};N.prototype.getUri=function(r){r=k(this.defaults,r);var t=Ot(r.baseURL,r.url);return wt(t,r.params,r.paramsSerializer)};sr.forEach(["delete","get","head","options"],function(r){N.prototype[r]=function(t,i){return this.request(k(i||{},{method:r,url:t,data:(i||{}).data}))}});sr.forEach(["post","put","patch"],function(r){function t(i){return function(a,s,o){return this.request(k(o||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}N.prototype[r]=t(),N.prototype[r+"Form"]=t(!0)});var At=N,ne,Fe;function St(){if(Fe)return ne;Fe=1;var e=F();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(s){i=s});var n=this;this.promise.then(function(a){if(!!n._listeners){var s,o=n._listeners.length;for(s=0;s<o;s++)n._listeners[s](a);n._listeners=null}}),this.promise.then=function(a){var s,o=new Promise(function(f){n.subscribe(f),s=f}).then(a);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s){n.reason||(n.reason=new e(s),i(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(!!this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var i,n=new r(function(s){i=s});return{token:n,cancel:i}},ne=r,ne}var ie,Ie;function xt(){return Ie||(Ie=1,ie=function(r){return function(i){return r.apply(null,i)}}),ie}var ae,ke;function Ct(){if(ke)return ae;ke=1;var e=v;return ae=function(t){return e.isObject(t)&&t.isAxiosError===!0},ae}var Me=v,_t=ze,L=At,Pt=ir,Tt=ve;function ur(e){var r=new L(e),t=_t(L.prototype.request,r);return Me.extend(t,L.prototype,r),Me.extend(t,r),t.create=function(n){return ur(Pt(e,n))},t}var m=ur(Tt);m.Axios=L;m.CanceledError=F();m.CancelToken=St();m.isCancel=nr();m.VERSION=ar().version;m.toFormData=rr;m.AxiosError=D;m.Cancel=m.CanceledError;m.all=function(r){return Promise.all(r)};m.spread=xt();m.isAxiosError=Ct();fe.exports=m;fe.exports.default=m;(function(e){e.exports=fe.exports})(We);const qt=hr(We.exports);export{br as a,qt as b,vr as d};
