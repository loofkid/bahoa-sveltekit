import{T as l,B as n}from"./index.esm2017-3ea644f1.js";import"./index-e5b3cc81-00185210.js";const i=async({parent:t,fetch:o,params:f})=>{globalThis.fetch=o;const a=await t(),{firestoreDatabase:s,firebaseAuth:p}=a,r=l(s,"service_features"),e=(await n(r)).docs.map(c=>c.data());return console.log(e),{...a,features:e}},_=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));export{_,i as l};