function w(){}const lt=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function G(){return Object.create(null)}function $(t){t.forEach(U)}function B(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function at(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Bt(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Ht(t,e,n,i){if(t){const s=V(t,e,n,i);return t[0](s)}}function V(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function qt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Ft(t,e,n,i,s,o){if(s){const r=V(e,n,i,o);t.p(r,s)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const X=typeof window<"u";let dt=X?()=>window.performance.now():()=>Date.now(),H=X?t=>requestAnimationFrame(t):w;const b=new Set;function Y(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&H(Y)}function _t(t){let e;return b.size===0&&H(Y),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let z=!1;function ht(){z=!0}function mt(){z=!1}function pt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,d=(s>0&&e[n[s]].claim_order<=u?s+1:pt(1,s,a=>e[n[a]].claim_order,u))-1;i[c]=n[d]+1;const f=d+1;n[f]=c,s=Math.max(f,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<o.length&&r[c].claim_order>=o[u].claim_order;)u++;const d=u<o.length?o[u]:null;t.insertBefore(r[c],d)}}function Z(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=F("style");return bt(tt(t),e),e.sheet}function bt(t,e){return Z(t.head||t,e),e.sheet}function wt(t,e){if(z){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){z&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function q(t){t.parentNode.removeChild(t)}function Jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Kt(){return I(" ")}function Qt(){return I("")}function J(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ut(t){return function(e){return e.preventDefault(),t.call(this,e)}}function xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vt(t,e){for(const n in e)xt(t,n,e[n])}function vt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,s=!1){Et(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function nt(t,e,n,i){return et(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Xt(t,e,n){return nt(t,e,n,F)}function Yt(t,e,n){return nt(t,e,n,$t)}function Nt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Zt(t){return Nt(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e){t.value=e==null?"":e}function ne(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let k;function At(){if(k===void 0){k=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{k=!0}}return k}function ie(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=F("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=At();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=J(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=J(i.contentWindow,"resize",e)}),Z(t,i),()=>{(s||o&&i.contentWindow)&&o(),q(i)}}function re(t,e,n){t.classList[n?"add":"remove"](e)}function kt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function se(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function oe(t,e){return new t(e)}const j=new Map;let D=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:gt(e),rules:{}};return j.set(t,n),n}function K(t,e,n,i,s,o,r,l=0){const c=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=c){const g=e+(n-e)*o(p);u+=p*100+`%{${r(g,1-g)}}
`}const d=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${St(d)}_${l}`,a=tt(t),{stylesheet:_,rules:h}=j.get(a)||Ct(a,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${s}ms 1 both`,D+=1,f}function Tt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),D-=s,D||jt())}function jt(){H(()=>{D||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&q(e)}),j.clear())})}let N;function E(t){N=t}function it(){if(!N)throw new Error("Function called outside component initialization");return N}function ce(t){it().$$.on_mount.push(t)}function le(t){it().$$.after_update.push(t)}const v=[],Q=[],C=[],L=[],rt=Promise.resolve();let W=!1;function st(){W||(W=!0,rt.then(ot))}function ue(){return st(),rt}function M(t){C.push(t)}function ae(t){L.push(t)}const P=new Set;let S=0;function ot(){const t=N;do{for(;S<v.length;){const e=v[S];S++,E(e),Dt(e.$$)}for(E(null),v.length=0,S=0;Q.length;)Q.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];P.has(n)||(P.add(n),n())}C.length=0}while(v.length);for(;L.length;)L.pop()();W=!1,P.clear(),E(t)}function Dt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let x;function Mt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function R(t,e,n){t.dispatchEvent(kt(`${e?"intro":"outro"}${n}`))}const T=new Set;let m;function fe(){m={r:0,c:[],p:m}}function de(){m.r||$(m.c),m=m.p}function zt(t,e){t&&t.i&&(T.delete(t),t.i(e))}function _e(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),m.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ot={duration:0};function he(t,e,n,i){let s=e(t,n),o=i?0:1,r=null,l=null,c=null;function u(){c&&Tt(t,c)}function d(a,_){const h=a.b-o;return _*=Math.abs(h),{a:o,b:a.b,d:h,duration:_,start:a.start,end:a.start+_,group:a.group}}function f(a){const{delay:_=0,duration:h=300,easing:y=lt,tick:p=w,css:g}=s||Ot,O={start:dt()+_,b:a};a||(O.group=m,m.r+=1),r||l?l=O:(g&&(u(),c=K(t,o,a,h,_,y,g)),a&&p(0,1),r=d(O,h),M(()=>R(t,a,"start")),_t(A=>{if(l&&A>l.start&&(r=d(l,h),l=null,R(t,r.b,"start"),g&&(u(),c=K(t,o,r.b,r.duration,0,y,s.css))),r){if(A>=r.end)p(o=r.b,1-o),R(t,r.b,"end"),l||(r.b?u():--r.group.r||$(r.group.c)),r=null;else if(A>=r.start){const ct=A-r.start;o=r.a+r.d*y(ct/r.duration),p(o,1-o)}}return!!(r||l)}))}return{run(a){B(s)?Mt().then(()=>{s=s(),f(a)}):f(a)},end(){u(),r=l=null}}}const me=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function pe(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ye(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ge(t){t&&t.c()}function be(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||M(()=>{const r=t.$$.on_mount.map(U).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...r):$(r),t.$$.on_mount=[]}),o.forEach(M)}function Rt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(v.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function we(t,e,n,i,s,o,r,l=[-1]){const c=N;E(t);const u=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:s,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(f,a,..._)=>{const h=_.length?_[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),d&&Lt(t,f)),a}):[],u.update(),d=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ht();const f=vt(e.target);u.fragment&&u.fragment.l(f),f.forEach(q)}else u.fragment&&u.fragment.c();e.intro&&zt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),mt(),ot()}E(c)}class $e{$destroy(){Rt(this,1),this.$destroy=w}$on(e,n){if(!B(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{pe as $,ue as A,w as B,Ht as C,wt as D,Ft as E,It as F,qt as G,Bt as H,lt as I,ut as J,dt as K,_t as L,J as M,$ as N,me as O,re as P,M as Q,he as R,$e as S,Q as T,ft as U,se as V,ie as W,Jt as X,$t as Y,Yt as Z,Vt as _,Kt as a,ye as a0,ae as a1,ee as a2,Ut as a3,Gt as b,Zt as c,de as d,Qt as e,zt as f,fe as g,q as h,we as i,le as j,F as k,Xt as l,vt as m,xt as n,ce as o,ne as p,I as q,Nt as r,Wt as s,_e as t,te as u,oe as v,ge as w,be as x,Pt as y,Rt as z};