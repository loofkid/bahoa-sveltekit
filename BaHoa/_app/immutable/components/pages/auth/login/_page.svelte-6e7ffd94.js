import{S as oe,i as ie,s as ce,a as A,k as g,q as D,w as O,ad as ue,h as f,c as L,l as b,m as w,r as S,x as R,n as d,b as Y,G as l,af as K,y as F,L as T,ag as de,f as H,t as M,z as W,D as le,O as Q,u as fe,V as se,B as ne}from"../../../../chunks/index-c6b69142.js";import{m as X,I as me,D as pe,b as re}from"../../../../chunks/browser-315189d6.js";import{g as he}from"../../../../chunks/navigation-38a13be0.js";import{s as _e,j as ge,k as be,F as ve}from"../../../../chunks/index-e5b3cc81-00185210.js";import"../../../../chunks/index.esm-d888ca54.js";import{A as we}from"../../../../chunks/AnimatePresence-02341358.js";function $e(o){let s,e,t,c,_;return e=new me({props:{data:pe,scale:.75}}),{c(){s=g("div"),O(e.$$.fragment)},l(r){s=b(r,"DIV",{});var n=w(s);R(e.$$.fragment,n),n.forEach(f)},m(r,n){Y(r,s,n),F(e,s,null),t=!0,c||(_=Q(o[19].call(null,s)),c=!0)},p:ne,i(r){t||(H(e.$$.fragment,r),t=!0)},o(r){M(e.$$.fragment,r),t=!1},d(r){r&&f(s),W(e),c=!1,_()}}}function ke(o){let s,e,t,c,_,r,n,V,u,m,y,$,E,z,v,I,P,i;return{c(){s=g("div"),e=g("ul"),t=g("li"),c=D("At least 8 characters"),_=A(),r=g("li"),n=D("At least 1 uppercase letter"),V=A(),u=g("li"),m=D("At least 1 lowercase letter"),y=A(),$=g("li"),E=D("At least 1 number"),z=A(),v=g("li"),I=D("At least 1 special character"),this.h()},l(p){s=b(p,"DIV",{class:!0});var k=w(s);e=b(k,"UL",{});var a=w(e);t=b(a,"LI",{});var x=w(t);c=S(x,"At least 8 characters"),x.forEach(f),_=L(a),r=b(a,"LI",{});var C=w(r);n=S(C,"At least 1 uppercase letter"),C.forEach(f),V=L(a),u=b(a,"LI",{});var B=w(u);m=S(B,"At least 1 lowercase letter"),B.forEach(f),y=L(a),$=b(a,"LI",{});var q=w($);E=S(q,"At least 1 number"),q.forEach(f),z=L(a),v=b(a,"LI",{});var h=w(v);I=S(h,"At least 1 special character"),h.forEach(f),a.forEach(f),k.forEach(f),this.h()},h(){d(s,"class","text-xs text-zinc-800 dark:text-zinc-300 w-36 overflow-x-visible text-left whitespace-nowrap")},m(p,k){Y(p,s,k),l(s,e),l(e,t),l(t,c),l(e,_),l(e,r),l(r,n),l(e,V),l(e,u),l(u,m),l(e,y),l(e,$),l($,E),l(e,z),l(e,v),l(v,I),P||(i=Q(o[19].call(null,s)),P=!0)},p:ne,d(p){p&&f(s),P=!1,i()}}}function ye(o){let s,e;return s=new X({props:{animate:{opacity:o[5]?1:0,translateY:o[5]?0:-25,height:o[5]?re("5rem"):0},initial:{opacity:0,translateY:-25,height:0},exit:{opacity:0,translateY:-25,height:0},transition:{easings:["easeIn","easeIn"]},$$slots:{default:[ke,({motion:t})=>({19:t}),({motion:t})=>t?524288:0]},$$scope:{ctx:o}}}),{c(){O(s.$$.fragment)},l(t){R(s.$$.fragment,t)},m(t,c){F(s,t,c),e=!0},p(t,c){const _={};c&32&&(_.animate={opacity:t[5]?1:0,translateY:t[5]?0:-25,height:t[5]?re("5rem"):0}),c&1048576&&(_.$$scope={dirty:c,ctx:t}),s.$set(_)},i(t){e||(H(s.$$.fragment,t),e=!0)},o(t){M(s.$$.fragment,t),e=!1},d(t){W(s,t)}}}function ze(o){let s,e,t,c,_=o[5]?"hide":"show",r,n,V,u,m,y,$,E,z,v,I,P;return u=new X({props:{animate:{rotate:o[5]?180:0},initial:{rotate:0},transition:{easings:["easeIn"]},$$slots:{default:[$e,({motion:i})=>({19:i}),({motion:i})=>i?524288:0]},$$scope:{ctx:o}}}),y=new we({props:{show:o[5],exitBeforeEnter:!0,$$slots:{default:[ye]},$$scope:{ctx:o}}}),{c(){s=g("div"),e=g("button"),t=g("div"),c=g("span"),r=D(_),n=D(" password rules"),V=A(),O(u.$$.fragment),m=A(),O(y.$$.fragment),$=A(),E=g("a"),z=D("forgot password?"),this.h()},l(i){s=b(i,"DIV",{class:!0});var p=w(s);e=b(p,"BUTTON",{type:!0,class:!0});var k=w(e);t=b(k,"DIV",{class:!0});var a=w(t);c=b(a,"SPAN",{class:!0});var x=w(c);r=S(x,_),n=S(x," password rules"),x.forEach(f),V=L(a),R(u.$$.fragment,a),a.forEach(f),m=L(k),R(y.$$.fragment,k),k.forEach(f),$=L(p),E=b(p,"A",{href:!0});var C=w(E);z=S(C,"forgot password?"),C.forEach(f),p.forEach(f),this.h()},h(){d(c,"class","w-36 text-left"),d(t,"class","flex justify-between items-center"),d(e,"type","button"),d(e,"class",""),d(E,"href","auth/forgot-password"),d(s,"class","flex justify-between text-sm text-zinc-800 dark:text-zinc-300 ml-1")},m(i,p){Y(i,s,p),l(s,e),l(e,t),l(t,c),l(c,r),l(c,n),l(t,V),F(u,t,null),l(e,m),F(y,e,null),l(s,$),l(s,E),l(E,z),v=!0,I||(P=[T(e,"click",o[16]),Q(o[18].call(null,s))],I=!0)},p(i,p){(!v||p&32)&&_!==(_=i[5]?"hide":"show")&&fe(r,_);const k={};p&32&&(k.animate={rotate:i[5]?180:0}),p&1048576&&(k.$$scope={dirty:p,ctx:i}),u.$set(k);const a={};p&32&&(a.show=i[5]),p&1048608&&(a.$$scope={dirty:p,ctx:i}),y.$set(a)},i(i){v||(H(u.$$.fragment,i),H(y.$$.fragment,i),v=!0)},o(i){M(u.$$.fragment,i),M(y.$$.fragment,i),v=!1},d(i){i&&f(s),W(u),W(y),I=!1,le(P)}}}function Ie(o){let s,e,t,c,_,r,n,V,u,m,y,$,E,z,v,I,P,i,p,k,a,x,C,B,q;return $=new X({props:{$$slots:{default:[ze,({motion:h})=>({18:h}),({motion:h})=>h?262144:0]},$$scope:{ctx:o}}}),{c(){s=A(),e=g("div"),t=g("h1"),c=D("Log In"),_=A(),r=g("form"),n=g("input"),V=A(),u=g("div"),m=g("input"),y=A(),O($.$$.fragment),E=A(),z=g("div"),v=g("label"),I=g("input"),P=A(),i=g("span"),p=D("Remember me"),k=A(),a=g("button"),x=D("Submit"),this.h()},l(h){ue("svelte-txftx7",document.head).forEach(f),s=L(h),e=b(h,"DIV",{class:!0});var U=w(e);t=b(U,"H1",{class:!0});var ee=w(t);c=S(ee,"Log In"),ee.forEach(f),_=L(U),r=b(U,"FORM",{class:!0});var j=w(r);n=b(j,"INPUT",{type:!0,class:!0,placeholder:!0,inputmode:!0,autocorrect:!0}),V=L(j),u=b(j,"DIV",{class:!0});var Z=w(u);m=b(Z,"INPUT",{type:!0,class:!0,placeholder:!0,pattern:!0,autocorrect:!0}),y=L(Z),R($.$$.fragment,Z),Z.forEach(f),E=L(j),z=b(j,"DIV",{class:!0});var G=w(z);v=b(G,"LABEL",{class:!0});var J=w(v);I=b(J,"INPUT",{type:!0,class:!0}),P=L(J),i=b(J,"SPAN",{class:!0});var te=w(i);p=S(te,"Remember me"),te.forEach(f),J.forEach(f),k=L(G),a=b(G,"BUTTON",{type:!0,class:!0});var ae=w(a);x=S(ae,"Submit"),ae.forEach(f),G.forEach(f),j.forEach(f),U.forEach(f),this.h()},h(){document.title="Log In | Bà Hỏa Smart Smokers",d(t,"class","text-2xl text-zinc-800 dark:text-zinc-200"),d(n,"type","email"),d(n,"class","bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500 dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800"),d(n,"placeholder","email"),n.required=!0,d(n,"inputmode","email"),d(n,"autocorrect","off"),d(m,"type","password"),d(m,"class","bg-zinc-200 dark:bg-zinc-500 form-input placeholder-shown:dark:!border-zinc-300 placeholder-shown:!border-zinc-900 focus:ring-0 text-zinc-800 focus:!border-orange-500 dark:placeholder:text-zinc-200 dark:border-zinc-300 rounded-sm h-11 focus:dark:text-white focus:text-black dark:text-zinc-300 focus:dark:!border-zinc-50 focus:outline-none invalid:border-red-600 invalid:dark:border-red-800"),d(m,"placeholder","password"),d(m,"pattern","^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).*$"),m.required=!0,d(m,"autocorrect","off"),d(u,"class","grid items-center"),d(I,"type","checkbox"),d(I,"class","form-checkbox"),d(i,"class","ml-2 text-sm text-zinc-800 dark:text-zinc-300"),d(v,"class","flex items-center"),d(a,"type","submit"),d(a,"class","h-11 w-28 rounded-sm bg-orange-500 text-white"),d(z,"class","flex justify-between items-center"),d(r,"class","grid grid-cols-1 [grid-template-rows:_3.5rem_auto_3.5rem] lg:[grid-template-rows:_1fr_auto_1fr] lg:border-2 lg:border-orange-500 w-full lg:w-[30rem] lg:rounded-xl lg:p-8 gap-1 lg:gap-4 items-center"),d(e,"class","grid grid-cols-1 [grid-template-rows:_3rem_auto] items-start lg:justify-items-center my-4 px-2 lg:p-0")},m(h,N){Y(h,s,N),Y(h,e,N),l(e,t),l(t,c),l(e,_),l(e,r),l(r,n),K(n,o[0]),o[11](n),l(r,V),l(r,u),l(u,m),K(m,o[1]),o[15](m),l(u,y),F($,u,null),l(r,E),l(r,z),l(z,v),l(v,I),I.checked=o[2],l(v,P),l(v,i),l(i,p),l(z,k),l(z,a),l(a,x),C=!0,B||(q=[T(n,"blur",o[8]),T(n,"invalid",o[9]),T(n,"input",o[10]),T(m,"blur",o[12]),T(m,"invalid",o[13]),T(m,"input",o[14]),T(I,"change",o[17]),T(r,"submit",de(o[6]))],B=!0)},p(h,[N]){N&1&&n.value!==h[0]&&K(n,h[0]),N&2&&m.value!==h[1]&&K(m,h[1]);const U={};N&1048608&&(U.$$scope={dirty:N,ctx:h}),$.$set(U),N&4&&(I.checked=h[2])},i(h){C||(H($.$$.fragment,h),C=!0)},o(h){M($.$$.fragment,h),C=!1},d(h){h&&f(s),h&&f(e),o[11](null),o[15](null),W($),B=!1,le(q)}}}function Ee(o,s,e){let t,c,_=!1,r,n,V=!1,{data:u}=s;const m=async()=>{r.setCustomValidity(""),n.setCustomValidity("");try{r.checkValidity()&&n.checkValidity()?(await _e(u.firebaseAuth,t,c),_?u.firebaseAuth.setPersistence(ge):u.firebaseAuth.setPersistence(be),he("/smokers")):(r.checkValidity()||r.setCustomValidity("Invalid email"),n.checkValidity()||n.setCustomValidity("Invalid password"),r.reportValidity(),n.reportValidity())}catch(a){a instanceof ve&&(a.code==="auth/invalid-email"?r.setCustomValidity("Invalid email"):a.code==="auth/user-not-found"?r.setCustomValidity("User not found"):a.code==="auth/wrong-password"&&n.setCustomValidity("Wrong password")),console.log(a),r.reportValidity(),n.reportValidity()}},y=()=>r.checkValidity(),$=a=>console.log(a);function E(){t=this.value,e(0,t)}function z(a){se[a?"unshift":"push"](()=>{r=a,e(3,r)})}const v=()=>n.checkValidity(),I=a=>console.log(a);function P(){c=this.value,e(1,c)}function i(a){se[a?"unshift":"push"](()=>{n=a,e(4,n)})}const p=()=>e(5,V=!V);function k(){_=this.checked,e(2,_)}return o.$$set=a=>{"data"in a&&e(7,u=a.data)},[t,c,_,r,n,V,m,u,y,$,E,z,v,I,P,i,p,k]}class xe extends oe{constructor(s){super(),ie(this,s,Ee,Ie,ce,{data:7})}}export{xe as default};