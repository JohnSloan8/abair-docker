import{j as e,N as te,_ as T,X as ce,a,L as de,V as i}from"./setPrototypeOf.fd4aa278.js";import{a1 as z,P as he,O as ue,Q as pe,ag as me,R as fe,X as ge,Y as ye,s as N,ah as ne,B as o,T as h,G as y,C as g,ai as oe,aj as ae,ak as ve,al as be,u as H,am as ie,ab as K,an as re,aa as Ie,ao as we,c as ke,H as Ce,A as xe,ap as Ae,k as O,ac as F}from"./App.3a547fae.js";import{d as W}from"./Download.5189ab47.js";import{S as Pe,R as Se,F as M,a as V}from"./RadioGroup.010bd54d.js";import{M as Re}from"./Meta.ff19919e.js";import{v as Be}from"./validateEmail.486ad16b.js";import{v as Oe}from"./validatePassword.13cdebb8.js";import"./index.25b03877.js";import"./index.module.01fcbc19.js";const We=z(e("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),De=z(e("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),je=z(e("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ee(t){return ue("MuiCheckbox",t)}const Te=he("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),Y=Te,Ke=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],_e=t=>{const{classes:s,indeterminate:n,color:d}=t,r={root:["root",n&&"indeterminate",`color${te(d)}`]},l=ye(r,Ee,s);return T({},s,l)},Ue=pe(Pe,{shouldForwardProp:t=>me(t)||t==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.indeterminate&&s.indeterminate,n.color!=="default"&&s[`color${te(n.color)}`]]}})(({theme:t,ownerState:s})=>T({color:(t.vars||t).palette.text.secondary},!s.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${s.color==="default"?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:ce(s.color==="default"?t.palette.action.active:t.palette[s.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},s.color!=="default"&&{[`&.${Y.checked}, &.${Y.indeterminate}`]:{color:(t.vars||t).palette[s.color].main},[`&.${Y.disabled}`]:{color:(t.vars||t).palette.action.disabled}})),$e=e(De,{}),Fe=e(We,{}),Ye=e(je,{}),qe=a.exports.forwardRef(function(s,n){var d,r;const l=fe({props:s,name:"MuiCheckbox"}),{checkedIcon:u=$e,color:c="primary",icon:p=Fe,indeterminate:f=!1,indeterminateIcon:I=Ye,inputProps:w,size:b="medium",className:m}=l,x=de(l,Ke),k=f?I:p,S=f?I:u,A=T({},l,{color:c,indeterminate:f,size:b}),C=_e(A);return e(Ue,T({type:"checkbox",inputProps:T({"data-indeterminate":f},w),icon:a.exports.cloneElement(k,{fontSize:(d=k.props.fontSize)!=null?d:b}),checkedIcon:a.exports.cloneElement(S,{fontSize:(r=S.props.fontSize)!=null?r:b}),ownerState:A,ref:n,className:ge(C.root,m)},x,{classes:C}))}),L=qe,Ne=async(t,s,n,d)=>{try{const{data:r,error:l}=await N.from("profiles").insert({id:t,over_16:s==="over 16",parent_caregiver_name:n===""?null:n,parent_caregiver_email:d===""?null:d}).select().single();if(l)throw l;return r}catch(r){alert(r.message)}},ze=[{title:"read_info",content:"I confirm that I have read and understood the Information Leaflet."},{title:"voluntary",content:"I understand that my child/dependant's joining ABAIR and using the platform is entirely voluntary. I understand that not joining will have no negative impact on them.  "},{title:"leave",content:"I understand that my child/dependant can stop using the paltform and close their account at any time without giving a reason. I understand that doing so will not affect them in any negative manner."},{title:"contact",content:"I know how to contact the research team if I need to."},{title:"agree",content:"I agree for my my child/dependant to take part in this research project, having been fully informed of the risks and benefits in the Information Sheet."},{title:"data",content:"I agree to the use of data collected from my child/dependant's use of ABAIR, including voice recordings (from use of speech recognition), and basic demographic information about them (e.g. sex, birth year, linguistic background) being used by the research team for this research project as described in the Information Sheet. "}],J={"over 16":[{title:"read_info",content:"I confirm that I have read and understood the Information Leaflet."},{title:"voluntary",content:"I understand that joining ABAIR and using the platform is entirely voluntary. I understand that not taking part will have no negative impact on me.  "},{title:"leave",content:"I understand that I can stop using the paltform and close my account at any time without giving a reason. I understand that doing so will not affect me in any negative manner."},{title:"contact",content:"I know how to contact the research team if I need to."},{title:"agree",content:"I agree to take part in this research study, having been fully informed of the risks and benefits in the Information Sheet."},{title:"data",content:"I agree to the use of data collected from my use of ABAIR, including voice recordings (from use of speech recognition), and basic demographic information about me (e.g. sex, birth year, linguistic background) being used by the research team for this research project as described in the Information Sheet. "}],"under 16":[{title:"read_info",content:"I read the Information Sheet and understand it."},{title:"voluntary",content:"Joining ABAIR is my choice."},{title:"leave",content:"I can stop using ABAIR whenever I want."},{title:"agree",content:"I agree to join ABAIR."}],parent:ze},He=({group:t="over 16",title:s})=>{const[n,d]=a.exports.useState(0),{setAdultConsentOK:r}=ne(),l=(u,c)=>{d(c?n+1:n-1)};return a.exports.useEffect(()=>{n===J[t].length?r(!0):r(!1)},[n]),i(o,{children:[e(h,{my:2,variant:"h6",align:"center",children:s}),e(o,{p:2,sx:{backgroundColor:"background.paper"},children:J[t].map((u,c)=>e(o,{my:2,children:i(y,{container:!0,spacing:2,children:[e(y,{item:!0,xs:8,sm:10,md:11,children:e(h,{variant:"body1",children:u.content})}),e(y,{item:!0,xs:4,sm:2,md:1,children:e(g,{children:e(L,{onChange:p=>l(c,p.target.checked)})})})]})},c))})]})},Le=[{title:"read_info",content:"I confirm that I have read and understood the Information Leaflet."},{title:"voluntary",content:"I understand that my child/dependant's joining ABAIR and using the platform is entirely voluntary. I understand that not joining will have no negative impact on them.  "},{title:"leave",content:"I understand that my child/dependant can stop using the paltform and close their account at any time without giving a reason. I understand that doing so will not affect them in any negative manner."},{title:"contact",content:"I know how to contact the research team if I need to."},{title:"agree",content:"I agree for my my child/dependant to take part in this research project, having been fully informed of the risks and benefits in the Information Sheet."},{title:"data",content:"I agree to the use of data collected from my child/dependant's use of ABAIR, including voice recordings (from use of speech recognition), and basic demographic information about them (e.g. sex, birth year, linguistic background) being used by the research team for this research project as described in the Information Sheet. "}],X={"over 16":[{title:"read_info",content:"I confirm that I have read and understood the Information Leaflet."},{title:"voluntary",content:"I understand that joining ABAIR and using the platform is entirely voluntary. I understand that not taking part will have no negative impact on me.  "},{title:"leave",content:"I understand that I can stop using the paltform and close my account at any time without giving a reason. I understand that doing so will not affect me in any negative manner."},{title:"contact",content:"I know how to contact the research team if I need to."},{title:"agree",content:"I agree to take part in this research study, having been fully informed of the risks and benefits in the Information Sheet."},{title:"data",content:"I agree to the use of data collected from my use of ABAIR, including voice recordings (from use of speech recognition), and basic demographic information about me (e.g. sex, birth year, linguistic background) being used by the research team for this research project as described in the Information Sheet. "}],"under 16":[{title:"read_info",content:"I read the Information Sheet and understand it."},{title:"voluntary",content:"Joining ABAIR is my choice."},{title:"leave",content:"I can stop using ABAIR whenever I want."},{title:"agree",content:"I agree to join ABAIR."}],parent:Le},Ge=({group:t="under 16",title:s})=>{const[n,d]=a.exports.useState(0),{setChildConsentOK:r}=oe(),l=(u,c)=>{d(c?n+1:n-1)};return a.exports.useEffect(()=>{n===X[t].length?r(!0):r(!1)},[n]),i(o,{children:[e(h,{my:2,variant:"h6",align:"center",children:s}),e(o,{p:2,sx:{backgroundColor:"background.paper"},children:X[t].map((u,c)=>e(o,{my:2,children:i(y,{container:!0,spacing:2,children:[e(y,{item:!0,xs:8,sm:10,md:11,children:e(h,{variant:"body1",children:u.content})}),e(y,{item:!0,xs:4,sm:2,md:1,children:e(g,{children:e(L,{onChange:p=>l(c,p.target.checked)})})})]})},c))})]})},Me=[{title:"read_info",content:"I confirm that I have read and understood the Information Leaflet."},{title:"voluntary",content:"I understand that my child/dependant's joining ABAIR and using the platform is entirely voluntary. I understand that not joining will have no negative impact on them.  "},{title:"leave",content:"I understand that my child/dependant can stop using the paltform and close their account at any time without giving a reason. I understand that doing so will not affect them in any negative manner."},{title:"contact",content:"I know how to contact the research team if I need to."},{title:"agree",content:"I agree for my my child/dependant to take part in this research project, having been fully informed of the risks and benefits in the Information Sheet."},{title:"data",content:"I agree to the use of data collected from my child/dependant's use of ABAIR, including voice recordings (from use of speech recognition), and basic demographic information about them (e.g. sex, birth year, linguistic background) being used by the research team for this research project as described in the Information Sheet. "}],Q={"over 16":[{title:"read_info",content:"I confirm that I have read and understood the Information Leaflet."},{title:"voluntary",content:"I understand that joining ABAIR and using the platform is entirely voluntary. I understand that not taking part will have no negative impact on me.  "},{title:"leave",content:"I understand that I can stop using the paltform and close my account at any time without giving a reason. I understand that doing so will not affect me in any negative manner."},{title:"contact",content:"I know how to contact the research team if I need to."},{title:"agree",content:"I agree to take part in this research study, having been fully informed of the risks and benefits in the Information Sheet."},{title:"data",content:"I agree to the use of data collected from my use of ABAIR, including voice recordings (from use of speech recognition), and basic demographic information about me (e.g. sex, birth year, linguistic background) being used by the research team for this research project as described in the Information Sheet. "}],"under 16":[{title:"read_info",content:"I read the Information Sheet and understand it."},{title:"voluntary",content:"Joining ABAIR is my choice."},{title:"leave",content:"I can stop using ABAIR whenever I want."},{title:"agree",content:"I agree to join ABAIR."}],parent:Me},Ve=({group:t="parent",title:s})=>{const[n,d]=a.exports.useState(0),{setParentConsentOK:r}=ae(),l=(u,c)=>{d(c?n+1:n-1)};return a.exports.useEffect(()=>{n===Q[t].length?r(!0):r(!1)},[n]),i(o,{children:[e(h,{my:2,variant:"h6",align:"center",children:s}),e(o,{p:2,sx:{backgroundColor:"background.paper"},children:Q[t].map((u,c)=>e(o,{my:2,children:i(y,{container:!0,spacing:2,children:[e(y,{item:!0,xs:8,sm:10,md:11,children:e(h,{variant:"body1",children:u.content})}),e(y,{item:!0,xs:4,sm:2,md:1,children:e(g,{children:e(L,{onChange:p=>l(c,p.target.checked)})})})]})},c))})]})},Je=[{title:"Invitation",content:"Your child/dependant is invited to sign up to the ABAIR platform to access state-of-the-art IRISH speech technologies, play educational games or use language-learning platforms.   "},{title:"What is the purpose of ABAIR?",content:"We develop synthetic voices and speech recognition for Irish and provide them for free to the public. We use these technologies in applications for speakers and learners of Irish."},{title:"Does my child/dependant have to sign up?",content:"No. Signing up is voluntary. If you agree for them to sign up, and you or your child/dependant decide to quit, it is simple to delete their data and close their account."},{title:"What will happen to my child/dependant if they sign up?",content:"If you and your child/dependant agree to join, they will be able to use all the ABAIR platforms. If they use speech recognition, their voice will be recorded and stored for analysis along with limited personal information about their age, linguistic background, and relationship with the Irish language (if provided). Pseudonymised data (i.e. speech recordings, and limited biographical/language information) will be kept indefinitely for archival purposes, as this may be of interest to future research on the Irish language. However, you may contact ABAIR at any time (details provided below) to request the destruction of all data relating to your child/dependant, and this will be carried out as soon as possible. Storage of data will be restricted to the European Union and countries deemed 'adequate' with regards to data safeguarding."},{title:"What are the benefits of taking part?",content:"Your child/dependant will be directly contributing to the development of speech technology for the Irish language. With ABAIR, these resources are being developed with public funding and are made freely available to the public without intention to monetise or privatise. "},{title:"What are the possible disadvantages and risks of taking part?",content:"Minimal. We advise you to instruct your child/dependant not to divulge personal or sensitive information when recording their voice or composing sentences. The data (including recordings) being collected are not of a sensitive nature. All data will be treated with appropriate care in line with our legal responsibilities.  "},{title:"Will my child/dependant's participation in this study be kept confidential?",content:"Yes. Privacy is important to us. We advise you to tell your child/dependant not to divulge sensitive personal information when using ABAIR which may identify themselves or others. Speech data and limited, scientifically relevant information (such as age, gender, and language background) may be shared internationally with the wider scientific community. However, any information that leaves Trinity will have no association with directly identifiable details."},{title:"What will happen to the results of this research?",content:"Information from this research may be presented at conferences and seminars and/or published in scientific papers. If this is the case, your identity will remain confidential. "},{title:"What do I do if I have any further questions?",content:"If you have any questions or concerns regarding your participation in this research, please contact us at nichiarn@tcd.ie"},{title:"What is the lawful basis to use my personal data?",content:"The legal basis for processing your child/dependant's personal data comes from the EU General Data Protection Regulation (GDPR). With your consent (Article 6(1)(a) GDPR), their information will only be used for this research which aims in the public interest to improve linguistic knowledge of Irish and develop speech technology with this knowledge (Article 6(1)(e,f) GDPR). "},{title:"What are my rights in relation to your use of my child/dependant's personal data?",content:"You are entitled to request any of the rights below unless it would make it impossible or very difficult to carry out the research study. The right to access to your child/dependant's personal data;  The right to receive a copy of your child/dependant's personal data; The right to ask us to restrict our use of your child/dependant's personal data;  The right to ask us to correct inaccurate information about your child/dependant; or  The right to ask us to delete your child/dependant's personal data.  You are entitled to object to any further processing of the information we hold about your child/dependant (except where it is de-identified).  You can exercise these rights or learn more about data protection in relation to this study by contacting the PI at nichiarn@tcd.ie or the Trinity College Data Protection Officer (contact details below).  Please note that these rights relate to data which could identify your child/dependant (personal data). If your child/dependant's data has been anonymised, we will not be able to access or delete it as we will have no way of being able to link the data to you.r child/dependant.  If you are unhappy with how we have used your child/dependant's personal data, you can raise a concern with the Data Protection Commission via their online form \u2013 https://forms.dataprotection.ie/contact \u2013 or contact the Commission at: Data Protection Commission, 21 Fitzwilliam Square South, Dublin 2, D02 RD28, Ireland, https://www.dataprotection.ie "},{title:"Data Protection Officer",content:`Data Protection Officer, Secretary's Office, Trinity College, Dublin, Dublin 2,Ireland,
Email: dataprotection@tcd.ie, 
Website: www.tcd.ie/privacy `}],Z={"over 16":[{title:"Invitation",content:"You are invited to sign up to the ABAIR platform to access state-of-the-art IRISH speech technologies, play educational games or use language-learning platforms.   "},{title:"What is the purpose of ABAIR?",content:"We develop synthetic voices and speech recognition for Irish and provide them for free to the public. We use these technologies in applications for speakers and learners of Irish."},{title:"Do I have to sign up? ",content:"No. Signing up is voluntary. If you sign up, and wish to delete your data and close your account, the process is is simple."},{title:"What will happen to me if I sign up? ",content:"If you agree to join, you will be able to use all the ABAIR platforms. If you use speech recognition, your voice will be recorded and stored for analysis along with limited personal information about your age, linguistic background, and relationship with the Irish language. Your data will be stored between a server in Trinity College and the cloud, in a manner compliant with GDPR. Pseudonymised data (i.e. the speech recording itself, and limited biographical/language information) will be kept indefinitely for archival purposes, as this may be of interest to future research on the Irish language. However, you may contact ABAIR at any time (details provided below) to request the destruction of all data relating to you, and this will be carried out as soon as possible. Storage of your personal data will be restricted to the European Union and countries deemed 'adequate' with regards to data safeguarding."},{title:"What are the benefits of taking part?",content:"You will be directly contributing to the development of speech technology for the Irish language. With ABAIR, these resources are being developed with public funding and are made freely available to the public without intention to monetise or privatise. "},{title:"What are the possible disadvantages and risks of taking part?",content:"Minimal. We advise you not to divulge personal or sensitive information when recording your voice or composing sentences. The data (including recordings) being collected are not of a sensitive nature. All personal data will be treated with appropriate care in line with our legal responsibilities.  "},{title:"Will my participation in this study be kept confidential?",content:"Yes. Your privacy is important to us. We advise not to divulge sensitive personal information when using ABAIR which may identify yourself or others. Speech data and limited, scientifically relevant information (such as age, gender, and language background) may be shared internationally with the wider scientific community. However, any information that leaves Trinity will have no association with your email address."},{title:"What will happen to the results of this research?",content:"Information from this research may be presented at conferences and seminars and/or published in scientific papers. If this is the case, your identity will remain confidential. "},{title:"What do I do if I have any further questions?",content:"If you have any questions or concerns regarding your participation in this research, please contact us at nichiarn@tcd.ie"},{title:"What is the lawful basis to use my personal data?",content:"The legal basis for processing your personal data comes from the EU General Data Protection Regulation (GDPR). With your consent (Article 6(1)(a) GDPR), your information will only be used for this research which aims in the public interest to improve linguistic knowledge of Irish and develop speech technology with this knowledge (Article 6(1)(e,f) GDPR). "},{title:"What are my rights in relation to your use of my personal data?",content:"You are entitled to request any of the rights below unless it would make it impossible or very difficult to carry out the research study. The right to access to your personal data;  The right to receive a copy of your personal data; The right to ask us to restrict our use of your personal data;  The right to ask us to correct inaccurate information about you; or  The right to ask us to delete your personal data.  You are entitled to object to any further processing of the information we hold about you (except where it is de-identified).  You can exercise these rights or learn more about data protection in relation to this study by contacting the PI at nichiarn@tcd.ie or the Trinity College Data Protection Officer (contact details below).  Please note that these rights relate to data which could identify you (personal data). If your data has been anonymised, we will not be able to access or delete it as we will have no way of being able to link the data to you.  If you are unhappy with how we have used your personal data, you can raise a concern with the Data Protection Commission via their online form \u2013 https://forms.dataprotection.ie/contact \u2013 or contact the Commission at: Data Protection Commission, 21 Fitzwilliam Square South, Dublin 2, D02 RD28, Ireland, https://www.dataprotection.ie "},{title:"Data Protection Officer",content:`Data Protection Officer, Secretary's Office, Trinity College, Dublin, Dublin 2,Ireland,
Email: dataprotection@tcd.ie, 
Website: www.tcd.ie/privacy `}],"under 16":[{title:"Invitation",content:"Welcome to ABAIR! Here you can learn Irish in a fun way, through computer games."},{title:"What is ABAIR?",content:"We make robot Irish voices that sound real. We also change your spoken Irish words into writing. We want to help you become the best Irish speaker you can be."},{title:"Do I have to join? ",content:"No. You should only join if you want to."},{title:"What will happen if I join? ",content:"You will be able to play all our games. Hopefully, you will have fun and get better at Irish."},{title:"What if I want to stop?",content:"That's ok! You can close your account yourself, or ask an adult to help."}],parent:Je},q=({height:t=340,group:s="over 16",title:n,description:d})=>(a.exports.useEffect(()=>{console.log("informationSheet:",Z["over 16"])},[]),i(o,{children:[e(h,{mb:2,variant:"h6",align:"center",children:n}),e(h,{mb:2,variant:"body2",align:"center",children:d}),e(ve,{sx:{width:"100%",height:{height:t},backgroundColor:"white",overflowY:"scroll"},children:e(be,{sx:{padding:4},children:Z[s].map((r,l)=>i(o,{py:1,children:[e(h,{variant:"body1",sx:{fontWeight:"bold"},children:r.title}),e(h,{children:r.content})]},l))})})]})),Xe=({parentEmail:t,setParentEmail:s,parentName:n,setParentName:d})=>{const{t:r}=H(),[l,u]=a.exports.useState(!1),[c,p]=a.exports.useState(!1),{setParentEmailNameOK:f}=ie();a.exports.useEffect(()=>{f(!!(l&&c))},[l,c]);const I=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,w=m=>String(m).toLowerCase().match(I)!==null;a.exports.useEffect(()=>{const m=w(t);u(!!m)},[t]);const b=m=>m.length>2;return a.exports.useEffect(()=>{const m=b(n);p(!!m)},[n]),i(o,{children:[e(h,{my:2,variant:"h6",align:"center",children:"Parent and Caregiver Information"}),e(g,{p:2,sx:{backgroundColor:"background.paper"},children:e(o,{width:360,children:i(y,{container:!0,spacing:0,children:[e(y,{item:!0,xs:12,my:1,children:e(K,{required:!0,fullWidth:!0,id:"parentName",label:r("pages.auth.name"),name:"parentName",type:"text",placeholder:r("pages.auth.name"),value:n,onChange:m=>d(m.target.value),helperText:!c&&n!==""?"must be at least 3 letters":""})}),e(y,{item:!0,xs:12,my:1,children:e(K,{required:!0,fullWidth:!0,id:"parentEmail",label:r("pages.auth.emailAddress"),name:"email",autoComplete:"email",type:"email",placeholder:r("pages.auth.emailAddress"),value:t,onChange:m=>s(m.target.value),helperText:!l&&t!==""?"must be a valid email":""})})]})})})]})},ee=({who:t,title:s,email:n,setEmail:d,password:r,setPassword:l,confirmPassword:u,setConfirmPassword:c,emailAlreadyUsedError:p})=>{const{t:f}=H(),[I,w]=a.exports.useState(!1),[b,m]=a.exports.useState(!1),[x,k]=a.exports.useState(!1),S=a.exports.useRef(),A=a.exports.useRef(),C=a.exports.useRef(),{emailPasswordOK:D,setEmailPasswordOK:_}=re();a.exports.useEffect(()=>{console.log("emailAlreadyUsedError",p)},[p]),a.exports.useEffect(()=>{_(!!(I&&b&&x))},[I,b,x]),a.exports.useEffect(()=>{console.log("emailPaaswordOK:",D)},[D]);const U=v=>r===v;return a.exports.useEffect(()=>{const v=Be(n);w(!!v)},[n]),a.exports.useEffect(()=>{const v=Oe(r);A.current!==void 0&&m(!!v)},[r]),a.exports.useEffect(()=>{const v=U(u);C.current!==void 0&&(C.current.value!==""&&v?k(!0):k(!1))},[u]),i(o,{children:[e(h,{my:2,variant:"h6",align:"center",children:s}),e(g,{p:2,sx:{backgroundColor:"background.paper"},children:e(o,{width:360,children:i(y,{container:!0,spacing:0,children:[e(y,{item:!0,xs:12,my:1,children:e(K,{inputRef:S,required:!0,fullWidth:!0,id:`${t}Email`,label:f("pages.auth.emailAddress"),name:"email",autoComplete:"email",type:"email",placeholder:f("pages.auth.emailAddress"),value:n,onChange:v=>d(v.target.value),helperText:!I&&n!==""?"must be a valid email":""})}),e(h,{variant:"body2",width:"100%",align:"center",color:"warning.main",sx:{display:p?"block":"none"},children:"email matched an existing ABAIR account"}),e(y,{item:!0,xs:12,my:1,children:e(K,{inputRef:A,required:!0,fullWidth:!0,name:"password",label:f("pages.auth.password"),type:"password",id:`${t}Password`,autoComplete:"new-password",value:r,onChange:v=>l(v.target.value),helperText:!b&&r!==""?"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character":""})}),e(y,{item:!0,xs:12,my:1,children:e(K,{inputRef:C,required:!0,fullWidth:!0,name:"confirm password",label:f("pages.auth.confirmPassword"),type:"password",id:`${t}ConfirmPassword`,autoComplete:"new-password",value:u,onChange:v=>c(v.target.value),helperText:!x&&u!==""?"Passwords don't match":""})})]})})})]})};function st(){const{emailPasswordOK:t}=re(),{adultConsentOK:s}=ne(),{parentConsentOK:n}=ae(),{childConsentOK:d}=oe(),{parentEmailNameOK:r}=ie(),{t:l}=H(),[u,c]=a.exports.useState(!1),[p]=Ie(),[f,I]=a.exports.useState(""),[w,b]=a.exports.useState(""),[m,x]=a.exports.useState(!1),[k,S]=a.exports.useState(""),[A,C]=a.exports.useState(""),[D,_]=a.exports.useState(""),[U,v]=a.exports.useState(""),{setProfile:se}=we(),$=ke(),G=async()=>{c(!0);const{data:P,error:R}=await N.auth.signUp({email:w,password:k});c(!1),R?(console.log("error",R.message),R.message==="User already registered"&&x(!0)):P.user!==null&&(x(!1),console.log(P.user),Ne(P.user.id,f,D,U).then(j=>{j!==void 0&&se(j)}),p.get("origin")!==null?$(`/profile?origin=${p.get("origin")}`,{replace:!0}):$("/profile",{replace:!0}))},B=async P=>{const{data:R,error:j}=await N.storage.from("public/abair-bucket").download("information-sheets/"+P+".pdf");if(j)console.log(j.message);else if(R){console.log("data:",R);const le=R,E=document.createElement("a");E.href=URL.createObjectURL(le),E.download=P,document.body.append(E),E.click(),E.remove()}};return e(Ce,{children:i(o,{sx:{maxWidth:"md",width:"100%"},children:[e(Re,{title:l("pageTitles.signUp")}),e(o,{pt:{sm:4,xs:2},children:e(xe,{title:l("pages.auth.signup")})}),e(g,{m:1,children:u?"Processing...":i(o,{children:[e(o,{p:1,children:i(g,{children:[e(h,{mr:2,variant:"h6",align:"center",children:"I am:"}),e(Ae,{children:i(Se,{"aria-labelledby":"demo-radio-buttons-group-label",name:"radio-buttons-group",row:!0,onChange:P=>{I(P.target.value)},value:f,children:[e(M,{value:"over 16",control:e(V,{}),label:"over 16"}),e(M,{value:"under 16",control:e(V,{}),label:"under 16"})]})})]})}),f!==""?f==="over 16"?i(o,{mt:2,children:[e(h,{align:"center",px:4,children:"Please read the following Information Sheet on GDPR compliance and informed consent for the ABAIR project."}),i(o,{p:4,mt:2,sx:{backgroundColor:"primary.wafer"},children:[i(o,{children:[e(q,{title:"Information Sheet",group:"over 16"}),i(g,{children:[e(h,{children:"Download Information Sheet"}),e(O,{selected:!0,color:"secondary",onClick:()=>{B("InformationSheetOver16s")},icon:W})]})]}),i(o,{mt:4,children:[e(He,{title:"Consent"}),i(g,{children:[e(h,{children:"Download Consent Form"}),e(O,{selected:!0,color:"secondary",onClick:()=>{B("ConsentFormOver16s")},icon:W})]})]}),e(o,{mt:4,width:"100%",children:e(ee,{who:"self",title:"Sign Up",email:w,setEmail:b,password:k,setPassword:S,confirmPassword:A,setConfirmPassword:C,emailAlreadyUsedError:m})}),e(g,{sx:{width:"100%"},children:e(F,{disabled:!(t&&s),onClick:G,variant:"contained",sx:{mt:4},children:l("pages.auth.signup")})})]})]}):i(o,{mt:2,children:[e(h,{align:"center",px:4,children:"Your parent or caregiver must help you sign up. Please ask them to read the information below."}),i(o,{p:4,mt:2,sx:{backgroundColor:"secondary.wafer"},children:[i(o,{children:[e(q,{title:"Information Sheet for Parents and Caregivers of Under 16s",group:"parent"}),i(g,{children:[e(h,{children:"Download Parent/Caregiver Information Sheet"}),e(O,{selected:!0,color:"secondary",onClick:()=>{B("InformationSheetParentsCaregivers")},icon:W})]})]}),i(o,{mt:4,children:[e(Ve,{title:"Consent for Parents and Caregivers"}),i(g,{children:[e(h,{children:"Download Parent/Caregiver Consent Form"}),e(O,{selected:!0,color:"secondary",onClick:()=>{B("ConsentFormParentsCaregivers")},icon:W})]})]}),e(o,{mt:4,children:e(o,{mt:4,children:e(Xe,{parentEmail:U,setParentEmail:v,parentName:D,setParentName:_})})})]}),i(o,{p:4,mt:6,sx:{backgroundColor:"primary.wafer"},children:[i(o,{children:[e(q,{title:"Information Sheet for Under 16s",group:"under 16"}),i(g,{children:[e(h,{children:"Download Under 16s Information Sheet"}),e(O,{selected:!0,color:"secondary",onClick:()=>{B("InformationSheetUnder16s")},icon:W})]})]}),i(o,{mt:4,children:[e(Ge,{title:"Consent for Under 16s"}),i(g,{children:[e(h,{children:"Download Under 16s Consent Form"}),e(O,{selected:!0,color:"secondary",onClick:()=>{console.log("download"),B("ConsentFormUnder16s")},icon:W})]})]}),i(o,{mt:4,children:[e(o,{mt:4,children:e(ee,{who:"self",title:"Sign Up",email:w,setEmail:b,password:k,setPassword:S,confirmPassword:A,setConfirmPassword:C,emailAlreadyUsedError:m})}),e(g,{sx:{width:"100%"},children:e(F,{disabled:!(t&&n&&d&&r),onClick:G,variant:"contained",sx:{mt:4},children:l("pages.auth.signup")})})]})]})]}):null]})}),e(g,{p:2,children:e(F,{sx:{color:"secondary.main"},onClick:()=>{p.get("origin")!==null?$(`/login?origin=${p.get("origin")}`):$("/login")},children:l("pages.auth.haveAccount")})})]})})}export{st as default};