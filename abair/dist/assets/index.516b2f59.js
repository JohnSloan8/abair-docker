import{j as e,N as E,_ as x,X as M,a as u,L as N,V as o}from"./setPrototypeOf.fd4aa278.js";import{a1 as U,P as L,O as V,Q as X,af as J,R as Q,X as K,Y as Z,B as n,T as c,G as m,C as d,ag as ee,ah as te,u as q,ac as P,s as O,ab as oe,c as ne,H as ae,A as ie,ai as re,k as v,ad as B}from"./App.71f4174d.js";import{d as w}from"./Download.f67fcd8f.js";import{S as se,R as le,F,a as H}from"./RadioGroup.5ec6795f.js";import{M as ce}from"./Meta.1dbfeb45.js";import{u as de}from"./index.b41b301b.js";import"./index.43181665.js";import"./index.module.01fcbc19.js";const he=U(e("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),ue=U(e("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),pe=U(e("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function me(t){return V("MuiCheckbox",t)}const ge=L("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),T=ge,fe=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],ye=t=>{const{classes:a,indeterminate:r,color:s}=t,i={root:["root",r&&"indeterminate",`color${E(s)}`]},l=Z(i,me,a);return x({},a,l)},be=X(se,{shouldForwardProp:t=>J(t)||t==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.indeterminate&&a.indeterminate,r.color!=="default"&&a[`color${E(r.color)}`]]}})(({theme:t,ownerState:a})=>x({color:(t.vars||t).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${a.color==="default"?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:M(a.color==="default"?t.palette.action.active:t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.color!=="default"&&{[`&.${T.checked}, &.${T.indeterminate}`]:{color:(t.vars||t).palette[a.color].main},[`&.${T.disabled}`]:{color:(t.vars||t).palette.action.disabled}})),ve=e(ue,{}),we=e(he,{}),Ie=e(pe,{}),ke=u.exports.forwardRef(function(a,r){var s,i;const l=Q({props:a,name:"MuiCheckbox"}),{checkedIcon:g=ve,color:y="primary",icon:p=we,indeterminate:h=!1,indeterminateIcon:I=Ie,inputProps:A,size:b="medium",className:D}=l,S=N(l,fe),W=h?I:p,R=h?I:g,f=x({},l,{color:y,indeterminate:h,size:b}),k=ye(f);return e(be,x({type:"checkbox",inputProps:x({"data-indeterminate":h},A),icon:u.exports.cloneElement(W,{fontSize:(s=W.props.fontSize)!=null?s:b}),checkedIcon:u.exports.cloneElement(R,{fontSize:(i=R.props.fontSize)!=null?i:b}),ownerState:f,ref:r,className:K(k.root,D)},S,{classes:k}))}),Ce=ke,xe=[{title:"read_info",content:"I confirm that I have read and understood the Information Leaflet."},{title:"voluntary",content:"I understand that my child/dependant's joining ABAIR and using the platform is entirely voluntary. I understand that not joining will have no negative impact on them.  "},{title:"leave",content:"I understand that my child/dependant can stop using the paltform and close their account at any time without giving a reason. I understand that doing so will not affect them in any negative manner."},{title:"contact",content:"I know how to contact the research team if I need to."},{title:"agree",content:"I agree for my my child/dependant to take part in this research project, having been fully informed of the risks and benefits in the Information Sheet."},{title:"data",content:"I agree to the use of data collected from my child/dependant's use of ABAIR, including voice recordings (from use of speech recognition), and basic demographic information about them (e.g. sex, birth year, linguistic background) being used by the research team for this research project as described in the Information Sheet. "}],Pe={"over 16":[{title:"read_info",content:"I confirm that I have read and understood the Information Leaflet."},{title:"voluntary",content:"I understand that joining ABAIR and using the platform is entirely voluntary. I understand that not taking part will have no negative impact on me.  "},{title:"leave",content:"I understand that I can stop using the paltform and close my account at any time without giving a reason. I understand that doing so will not affect me in any negative manner."},{title:"contact",content:"I know how to contact the research team if I need to."},{title:"agree",content:"I agree to take part in this research study, having been fully informed of the risks and benefits in the Information Sheet."},{title:"data",content:"I agree to the use of data collected from my use of ABAIR, including voice recordings (from use of speech recognition), and basic demographic information about me (e.g. sex, birth year, linguistic background) being used by the research team for this research project as described in the Information Sheet. "}],"under 16":[{title:"read_info",content:"I read the Information Sheet and understand it."},{title:"voluntary",content:"Joining ABAIR is my choice."},{title:"leave",content:"I can stop using ABAIR whenever I want."},{title:"agree",content:"I agree to join ABAIR."}],parent:xe},Y=({group:t="over 16",title:a})=>o(n,{children:[e(c,{my:2,variant:"h6",align:"center",children:a}),e(n,{p:2,sx:{backgroundColor:"background.paper"},children:Pe[t].map((r,s)=>e(n,{my:2,children:o(m,{container:!0,spacing:2,children:[e(m,{item:!0,xs:8,sm:10,md:11,children:e(c,{variant:"body1",children:r.content})}),e(m,{item:!0,xs:4,sm:2,md:1,children:e(d,{children:e(Ce,{})})})]})},s))})]}),Ae=[{title:"Invitation",content:"Your child/dependant is invited to sign up to the ABAIR platform to access state-of-the-art IRISH speech technologies, play educational games or use language-learning platforms.   "},{title:"What is the purpose of ABAIR?",content:"We develop synthetic voices and speech recognition for Irish and provide them for free to the public. We use these technologies in applications for speakers and learners of Irish."},{title:"Does my child/dependant have to sign up?",content:"No. Signing up is voluntary. If you agree for them to sign up, and you or your child/dependant decide to quit, it is simple to delete their data and close their account."},{title:"What will happen to my child/dependant if they sign up?",content:"If you and your child/dependant agree to join, they will be able to use all the ABAIR platforms. If they use speech recognition, their voice will be recorded and stored for analysis along with limited personal information about their age, linguistic background, and relationship with the Irish language (if provided). Pseudonymised data (i.e. speech recordings, and limited biographical/language information) will be kept indefinitely for archival purposes, as this may be of interest to future research on the Irish language. However, you may contact ABAIR at any time (details provided below) to request the destruction of all data relating to your child/dependant, and this will be carried out as soon as possible. Storage of data will be restricted to the European Union and countries deemed 'adequate' with regards to data safeguarding."},{title:"What are the benefits of taking part?",content:"Your child/dependant will be directly contributing to the development of speech technology for the Irish language. With ABAIR, these resources are being developed with public funding and are made freely available to the public without intention to monetise or privatise. "},{title:"What are the possible disadvantages and risks of taking part?",content:"Minimal. We advise you to instruct your child/dependant not to divulge personal or sensitive information when recording their voice or composing sentences. The data (including recordings) being collected are not of a sensitive nature. All data will be treated with appropriate care in line with our legal responsibilities.  "},{title:"Will my child/dependant's participation in this study be kept confidential?",content:"Yes. Privacy is important to us. We advise you to tell your child/dependant not to divulge sensitive personal information when using ABAIR which may identify themselves or others. Speech data and limited, scientifically relevant information (such as age, gender, and language background) may be shared internationally with the wider scientific community. However, any information that leaves Trinity will have no association with directly identifiable details."},{title:"What will happen to the results of this research?",content:"Information from this research may be presented at conferences and seminars and/or published in scientific papers. If this is the case, your identity will remain confidential. "},{title:"What do I do if I have any further questions?",content:"If you have any questions or concerns regarding your participation in this research, please contact us at nichiarn@tcd.ie"},{title:"What is the lawful basis to use my personal data?",content:"The legal basis for processing your child/dependant's personal data comes from the EU General Data Protection Regulation (GDPR). With your consent (Article 6(1)(a) GDPR), their information will only be used for this research which aims in the public interest to improve linguistic knowledge of Irish and develop speech technology with this knowledge (Article 6(1)(e,f) GDPR). "},{title:"What are my rights in relation to your use of my child/dependant's personal data?",content:"You are entitled to request any of the rights below unless it would make it impossible or very difficult to carry out the research study. The right to access to your child/dependant's personal data;  The right to receive a copy of your child/dependant's personal data; The right to ask us to restrict our use of your child/dependant's personal data;  The right to ask us to correct inaccurate information about your child/dependant; or  The right to ask us to delete your child/dependant's personal data.  You are entitled to object to any further processing of the information we hold about your child/dependant (except where it is de-identified).  You can exercise these rights or learn more about data protection in relation to this study by contacting the PI at nichiarn@tcd.ie or the Trinity College Data Protection Officer (contact details below).  Please note that these rights relate to data which could identify your child/dependant (personal data). If your child/dependant's data has been anonymised, we will not be able to access or delete it as we will have no way of being able to link the data to you.r child/dependant.  If you are unhappy with how we have used your child/dependant's personal data, you can raise a concern with the Data Protection Commission via their online form \u2013 https://forms.dataprotection.ie/contact \u2013 or contact the Commission at: Data Protection Commission, 21 Fitzwilliam Square South, Dublin 2, D02 RD28, Ireland, https://www.dataprotection.ie "},{title:"Data Protection Officer",content:`Data Protection Officer, Secretary's Office, Trinity College, Dublin, Dublin 2,Ireland,
Email: dataprotection@tcd.ie, 
Website: www.tcd.ie/privacy `}],_={"over 16":[{title:"Invitation",content:"You are invited to sign up to the ABAIR platform to access state-of-the-art IRISH speech technologies, play educational games or use language-learning platforms.   "},{title:"What is the purpose of ABAIR?",content:"We develop synthetic voices and speech recognition for Irish and provide them for free to the public. We use these technologies in applications for speakers and learners of Irish."},{title:"Do I have to sign up? ",content:"No. Signing up is voluntary. If you sign up, and wish to delete your data and close your account, the process is is simple."},{title:"What will happen to me if I sign up? ",content:"If you agree to join, you will be able to use all the ABAIR platforms. If you use speech recognition, your voice will be recorded and stored for analysis along with limited personal information about your age, linguistic background, and relationship with the Irish language. Your data will be stored between a server in Trinity College and the cloud, in a manner compliant with GDPR. Pseudonymised data (i.e. the speech recording itself, and limited biographical/language information) will be kept indefinitely for archival purposes, as this may be of interest to future research on the Irish language. However, you may contact ABAIR at any time (details provided below) to request the destruction of all data relating to you, and this will be carried out as soon as possible. Storage of your personal data will be restricted to the European Union and countries deemed 'adequate' with regards to data safeguarding."},{title:"What are the benefits of taking part?",content:"You will be directly contributing to the development of speech technology for the Irish language. With ABAIR, these resources are being developed with public funding and are made freely available to the public without intention to monetise or privatise. "},{title:"What are the possible disadvantages and risks of taking part?",content:"Minimal. We advise you not to divulge personal or sensitive information when recording your voice or composing sentences. The data (including recordings) being collected are not of a sensitive nature. All personal data will be treated with appropriate care in line with our legal responsibilities.  "},{title:"Will my participation in this study be kept confidential?",content:"Yes. Your privacy is important to us. We advise not to divulge sensitive personal information when using ABAIR which may identify yourself or others. Speech data and limited, scientifically relevant information (such as age, gender, and language background) may be shared internationally with the wider scientific community. However, any information that leaves Trinity will have no association with your email address."},{title:"What will happen to the results of this research?",content:"Information from this research may be presented at conferences and seminars and/or published in scientific papers. If this is the case, your identity will remain confidential. "},{title:"What do I do if I have any further questions?",content:"If you have any questions or concerns regarding your participation in this research, please contact us at nichiarn@tcd.ie"},{title:"What is the lawful basis to use my personal data?",content:"The legal basis for processing your personal data comes from the EU General Data Protection Regulation (GDPR). With your consent (Article 6(1)(a) GDPR), your information will only be used for this research which aims in the public interest to improve linguistic knowledge of Irish and develop speech technology with this knowledge (Article 6(1)(e,f) GDPR). "},{title:"What are my rights in relation to your use of my personal data?",content:"You are entitled to request any of the rights below unless it would make it impossible or very difficult to carry out the research study. The right to access to your personal data;  The right to receive a copy of your personal data; The right to ask us to restrict our use of your personal data;  The right to ask us to correct inaccurate information about you; or  The right to ask us to delete your personal data.  You are entitled to object to any further processing of the information we hold about you (except where it is de-identified).  You can exercise these rights or learn more about data protection in relation to this study by contacting the PI at nichiarn@tcd.ie or the Trinity College Data Protection Officer (contact details below).  Please note that these rights relate to data which could identify you (personal data). If your data has been anonymised, we will not be able to access or delete it as we will have no way of being able to link the data to you.  If you are unhappy with how we have used your personal data, you can raise a concern with the Data Protection Commission via their online form \u2013 https://forms.dataprotection.ie/contact \u2013 or contact the Commission at: Data Protection Commission, 21 Fitzwilliam Square South, Dublin 2, D02 RD28, Ireland, https://www.dataprotection.ie "},{title:"Data Protection Officer",content:`Data Protection Officer, Secretary's Office, Trinity College, Dublin, Dublin 2,Ireland,
Email: dataprotection@tcd.ie, 
Website: www.tcd.ie/privacy `}],"under 16":[{title:"Invitation",content:"Welcome to ABAIR! Here you can learn Irish in a fun way, through computer games."},{title:"What is ABAIR?",content:"We make robot Irish voices that sound real. We also change your spoken Irish words into writing. We want to help you become the best Irish speaker you can be."},{title:"Do I have to join? ",content:"No. You should only join if you want to."},{title:"What will happen if I join? ",content:"You will be able to play all our games. Hopefully, you will have fun and get better at Irish."},{title:"What if I want to stop?",content:"That's ok! You can close your account yourself, or ask an adult to help."}],parent:Ae},j=({height:t=340,group:a="over 16",title:r,description:s})=>(u.exports.useEffect(()=>{console.log("informationSheet:",_["over 16"])},[]),o(n,{children:[e(c,{mb:2,variant:"h6",align:"center",children:r}),e(c,{mb:2,variant:"body2",align:"center",children:s}),e(ee,{sx:{width:"100%",height:{height:t},backgroundColor:"white",overflowY:"scroll"},children:e(te,{sx:{padding:4},children:_[a].map((i,l)=>o(n,{py:1,children:[e(c,{variant:"body1",sx:{fontWeight:"bold"},children:i.title}),e(c,{children:i.content})]},l))})})]})),Se=({parentEmail:t,setParentEmail:a,parentName:r,setParentName:s})=>{const{t:i}=q();return o(n,{children:[e(c,{my:2,variant:"h6",align:"center",children:"Parent and Caregiver Information"}),e(d,{p:2,sx:{backgroundColor:"background.paper"},children:e(n,{maxWidth:"sm",children:o(m,{container:!0,spacing:0,children:[e(m,{item:!0,xs:12,my:1,children:e(P,{required:!0,fullWidth:!0,id:"parentName",label:i("pages.auth.name"),name:"parentName",type:"text",placeholder:i("pages.auth.name"),value:r,onChange:l=>s(l.target.value)})}),e(m,{item:!0,xs:12,my:1,children:e(P,{required:!0,fullWidth:!0,id:"parentEmail",label:i("pages.auth.emailAddress"),name:"email",autoComplete:"email",type:"email",placeholder:i("pages.auth.emailAddress"),value:t,onChange:l=>a(l.target.value)})})]})})})]})},G=({who:t,title:a,email:r,setEmail:s,password:i,setPassword:l,confirmPassword:g,setConfirmPassword:y})=>{const{t:p}=q();return o(n,{children:[e(c,{my:2,variant:"h6",align:"center",children:a}),e(d,{p:2,sx:{backgroundColor:"background.paper"},children:e(n,{maxWidth:"sm",children:o(m,{container:!0,spacing:0,children:[e(m,{item:!0,xs:12,my:1,children:e(P,{required:!0,fullWidth:!0,id:`${t}Email`,label:p("pages.auth.emailAddress"),name:"email",autoComplete:"email",type:"email",placeholder:p("pages.auth.emailAddress"),value:r,onChange:h=>s(h.target.value)})}),e(m,{item:!0,xs:12,my:1,children:e(P,{required:!0,fullWidth:!0,name:"password",label:p("pages.auth.password"),type:"password",id:`${t}Password`,autoComplete:"new-password",value:i,onChange:h=>l(h.target.value)})}),e(m,{item:!0,xs:12,my:1,children:e(P,{required:!0,fullWidth:!0,name:"confirm password",label:p("pages.auth.confirmPassword"),type:"password",id:`${t}ConfirmPassword`,autoComplete:"new-password",value:g,onChange:h=>y(h.target.value)})})]})})})]})},We=async(t,a,r,s)=>{try{const{data:i,error:l}=await O.from("profiles").insert({id:t,over_16:a==="over 16",parent_caregiver_name:r===""?null:r,parent_caregiver_email:s===""?null:s}).select().single();if(l)throw l;return i}catch(i){alert(i.message)}};function $e(){const{t}=q(),[a,r]=u.exports.useState(!1),[s]=oe(),[i,l]=u.exports.useState(""),[g,y]=u.exports.useState(""),[p,h]=u.exports.useState(""),[I,A]=u.exports.useState(""),[b,D]=u.exports.useState(""),[S,W]=u.exports.useState(""),{setProfile:R}=de(),f=ne(),k=async()=>{r(!0);const{data:C,error:$}=await O.auth.signUp({email:g,password:p});r(!1),$?console.log($):C.user!==null&&(console.log(C.user),We(C.user.id,i,b,S).then(z=>{z!==void 0&&R(z)}),s.get("origin")!==null?f(`/profile?origin=${s.get("origin")}`,{replace:!0}):f("/profile",{replace:!0}))};return e(ae,{children:o(n,{sx:{maxWidth:"md",width:"100%"},children:[e(ce,{title:t("pageTitles.signUp")}),e(n,{pt:{sm:4,xs:2},children:e(ie,{title:t("pages.auth.signup")})}),e(d,{m:1,children:a?"Processing...":o(n,{children:[e(n,{p:1,children:o(d,{children:[e(c,{mr:2,variant:"h6",align:"center",children:"I am:"}),e(re,{children:o(le,{"aria-labelledby":"demo-radio-buttons-group-label",name:"radio-buttons-group",row:!0,onChange:C=>{l(C.target.value)},value:i,children:[e(F,{value:"over 16",control:e(H,{}),label:"over 16"}),e(F,{value:"under 16",control:e(H,{}),label:"under 16"})]})})]})}),i!==""?i==="over 16"?o(n,{mt:2,children:[e(c,{align:"center",px:4,children:"Please read the following Information Sheet on GDPR compliance and informed consent for the ABAIR project."}),o(n,{p:4,mt:2,sx:{backgroundColor:"primary.wafer"},children:[o(n,{children:[e(j,{title:"Information Sheet",group:"over 16"}),o(d,{children:[e(c,{children:"Download Information Sheet"}),e(v,{selected:!0,color:"secondary",onClick:()=>{console.log("download")},icon:w})]})]}),o(n,{mt:4,children:[e(Y,{group:"over 16",title:"Consent"}),o(d,{children:[e(c,{children:"Download Consent Form"}),e(v,{selected:!0,color:"secondary",onClick:()=>{console.log("download")},icon:w})]})]}),e(n,{mt:4,children:e(G,{who:"self",title:"Sign Up",email:g,setEmail:y,password:p,setPassword:h,confirmPassword:I,setConfirmPassword:A})}),e(d,{sx:{width:"100%"},children:e(B,{onClick:k,variant:"contained",sx:{mt:4},children:t("pages.auth.signup")})})]})]}):o(n,{mt:2,children:[e(c,{align:"center",px:4,children:"Your parent or caregiver must help you sign up. Please ask them to read the information below."}),o(n,{p:4,mt:2,sx:{backgroundColor:"secondary.wafer"},children:[o(n,{children:[e(j,{title:"Information Sheet for Parents and Caregivers of Under 16s",group:"parent"}),o(d,{children:[e(c,{children:"Download Parent/Caregiver Information Sheet"}),e(v,{selected:!0,color:"secondary",onClick:()=>{console.log("download")},icon:w})]})]}),o(n,{mt:4,children:[e(Y,{group:"parent",title:"Consent for Parents and Caregivers"}),o(d,{children:[e(c,{children:"Download Parent/Caregiver Consent Form"}),e(v,{selected:!0,color:"secondary",onClick:()=>{console.log("download")},icon:w})]})]}),e(n,{mt:4,children:e(n,{mt:4,children:e(Se,{parentEmail:S,setParentEmail:W,parentName:b,setParentName:D})})})]}),o(n,{p:4,mt:6,sx:{backgroundColor:"primary.wafer"},children:[o(n,{children:[e(j,{title:"Information Sheet for Under 16s",group:"under 16"}),o(d,{children:[e(c,{children:"Download Under 16s Information Sheet"}),e(v,{selected:!0,color:"secondary",onClick:()=>{console.log("download")},icon:w})]})]}),o(n,{mt:4,children:[e(Y,{group:"under 16",title:"Consent for Under 16s"}),o(d,{children:[e(c,{children:"Download Under 16s Consent Form"}),e(v,{selected:!0,color:"secondary",onClick:()=>{console.log("download")},icon:w})]})]}),o(n,{mt:4,children:[e(n,{mt:4,children:e(G,{who:"self",title:"Sign Up",email:g,setEmail:y,password:p,setPassword:h,confirmPassword:I,setConfirmPassword:A})}),e(d,{sx:{width:"100%"},children:e(B,{onClick:k,variant:"contained",sx:{mt:4},children:t("pages.auth.signup")})})]})]})]}):null]})}),e(d,{p:2,children:e(B,{sx:{color:"secondary.main"},onClick:()=>{s.get("origin")!==null?f(`/login?origin=${s.get("origin")}`):f("/login")},children:t("pages.auth.haveAccount")})})]})})}export{$e as default};
