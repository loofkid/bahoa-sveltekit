import{N as c,z as l}from"./index.browser.esm2017-bf94d10f.js";import"./index-c6def6da-76b86d29.js";const i=async({parent:t,fetch:o,params:f})=>{globalThis.fetch=o;const a=await t(),{firestoreDatabase:s,firebaseAuth:p}=a,r=c(s,"service_features"),e=(await l(r)).docs.map(n=>n.data());return console.log(e),{...a,features:e}},_=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));export{_,i as l};