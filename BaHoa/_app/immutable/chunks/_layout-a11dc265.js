import{r}from"./index-323790f7.js";import{u as n}from"./userAuthStore-e6e415b6.js";import{L as a}from"./index-b7e5ee0b.js";const i=!1,l=async({data:c,parent:t,url:e})=>{const o=a(n),s=await t();if(o&&!(o!=null&&o.isAnonymous))return console.debug("User is logged in",o,o==null?void 0:o.isAnonymous),{...s};throw console.error("User is not logged in",o,o==null?void 0:o.isAnonymous),r(302,`/auth/login?redirect=${e.pathname}`)},u=Object.freeze(Object.defineProperty({__proto__:null,load:l,ssr:i},Symbol.toStringTag,{value:"Module"}));export{u as _,l,i as s};
