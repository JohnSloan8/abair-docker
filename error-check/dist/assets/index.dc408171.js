import{j as u,R as s,V as d,d as r}from"./setPrototypeOf.1b27e896.js";import{B as h}from"./App.3f993652.js";const p=({children:e,width:t="90%",button:o=!1,height:n="100%",padding:c=2,backgroundColor:i="#67add6"})=>u(h,{sx:{backgroundColor:i,zIndex:1},width:t,height:n,border:o?2:4,borderRadius:o?2.5:4,borderColor:"#3e435a",p:o?0:c,maxWidth:400,children:e}),a=s({key:"chats",default:[]}),_=()=>{const[e,t]=r(a);return{chats:e,setChats:t}},g=d({key:"chat-in-progress",get:({get:e})=>{const t=e(a);if(t.length>0&&!t[t.length-1].complete)return t[t.length-1]}}),l=s({key:"intro",default:[]}),B=()=>{const[e,t]=r(l);return{intro:e,setIntro:t}},x=s({key:"outro",default:[]}),R=()=>{const[e,t]=r(x);return{outro:e,setOutro:t}};export{p as B,g as a,B as b,R as c,l as i,x as o,_ as u};
