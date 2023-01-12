var Ja=Object.defineProperty;var Za=(t,e,n)=>e in t?Ja(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ci=(t,e,n)=>(Za(t,typeof e!="symbol"?e+"":e,n),n);import{I as ia,J as mi,K as er,L as tr,S as Ln,i as Dn,s as zn,k as R,w as we,a as ee,q as Fe,l as L,m as D,x as ke,h as C,c as te,r as $e,n as O,b as q,D as M,y as Te,u as Vt,f as z,t as W,z as xe,e as di,M as he,g as Be,d as Xe,N as Vn,O as aa,P as _,p as oe,Q as pe,R as J,B as ne,T as Rt,U as Qt,V as nr,W as ir,X as ar,o as rr}from"../../chunks/index-25c14a5b.js";import{I as it,i as ra,L as or,f as sr,a as lr,b as fr}from"../../chunks/Icon-793e3674.js";import{w as ur}from"../../chunks/index-95b26327.js";const hi=!0;var cr=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function mr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Jt=new WeakMap,jn=function(){cr(t,[{key:"toString",value:function(){return`${this.value}`}},{key:"value",get:function(){return Jt.get(this)},set:function(n){Jt.set(this,String(n))}}]);function t(){if(mr(this,t),arguments.length<1)throw new TypeError(`Failed to construct 'CSSKeywordValue': 1 arguments required, but only ${arguments.length} present.`);Jt.set(this,String(arguments.length<=0?void 0:arguments[0]))}return t}();Object.defineProperties(jn.prototype,{value:{enumerable:!0}});var dr=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function hr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Zt=new WeakMap,jt=function(){dr(t,[{key:"toString",value:function(){return`calc(1 / ${Zt.get(this)})`}},{key:"operator",get:function(){return"invert"}},{key:"value",get:function(){return Zt.get(this)}}]);function t(e){hr(this,t),Zt.set(this,e)}return t}(),gr=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function pr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var en=new WeakMap,pn=function(){gr(t,[{key:"toString",value:function(){return`max(${en.get(this).join(", ")})`}},{key:"operator",get:function(){return"max"}},{key:"values",get:function(){return en.get(this)}}]);function t(){pr(this,t);for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];en.set(this,n)}return t}(),vr=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function br(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var tn=new WeakMap,vn=function(){vr(t,[{key:"toString",value:function(){return`min(${tn.get(this).join(", ")})`}},{key:"operator",get:function(){return"min"}},{key:"values",get:function(){return tn.get(this)}}]);function t(){br(this,t);for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];tn.set(this,n)}return t}(),yr=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function Sr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var nn=new WeakMap,Lt=function(){yr(t,[{key:"toString",value:function(){return`calc(${nn.get(this).reduce(function(n,i){return`${i instanceof jt?`${n?`${n} / `:"1 / "}${i.value}`:`${n?`${n} * `:""}${i}`}`},"")})`}},{key:"operator",get:function(){return"product"}},{key:"values",get:function(){return nn.get(this)}}]);function t(){Sr(this,t);for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];nn.set(this,n)}return t}(),wr=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function kr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var an=new WeakMap,bn=function(){wr(t,[{key:"toString",value:function(){return`calc(${an.get(this).reduce(function(n,i){return`${n?`${n} + `:""}${i}`},"")})`}},{key:"operator",get:function(){return"product"}},{key:"values",get:function(){return an.get(this)}}]);function t(){kr(this,t);for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];an.set(this,n)}return t}();function Tr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var xr=function t(){throw Tr(this,t),new TypeError("Illegal constructor")},yt={number:"",percent:"%",em:"em",ex:"ex",ch:"ch",rem:"rem",vw:"vw",vh:"vh",vmin:"vmin",vmax:"vmax",cm:"cm",mm:"mm",in:"in",pt:"pt",pc:"pc",px:"px",Q:"Q",deg:"deg",grad:"grad",rad:"rad",turn:"turn",s:"s",ms:"ms",Hz:"Hz",kHz:"kHz",dpi:"dpi",dpcm:"dpcm",dppx:"dppx",fr:"fr"},Er=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function Cr(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}function Ar(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _r=function(){function t(){Ar(this,t)}return Er(t,[{key:"add",value:function(){for(var n=this.constructor,i=new n(this.value,this.unit),a=[],r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];var f=!0,l=!1,c=void 0;try{for(var u=s[Symbol.iterator](),d;!(f=(d=u.next()).done);f=!0){var m=d.value;if(m instanceof n)a.length||i.unit!==m.unit?a.push(m):i.value+=m.value;else if(m instanceof Lt||m instanceof pn||m instanceof vn||m instanceof jt)a.push(m);else return null}}catch(p){l=!0,c=p}finally{try{!f&&u.return&&u.return()}finally{if(l)throw c}}return a.length?new(Function.prototype.bind.apply(bn,[null].concat([i],a))):i}},{key:"div",value:function(){for(var n=this.constructor,i=new n(this.value,this.unit),a=[],r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];var f=!0,l=!1,c=void 0;try{for(var u=s[Symbol.iterator](),d;!(f=(d=u.next()).done);f=!0){var m=d.value;if(typeof m=="number"&&(m=new de(m,"number")),m instanceof n)a.length||i.unit!==m.unit&&m.unit!=="number"?a.push(m):i.value/=m.value;else return null}}catch(p){l=!0,c=p}finally{try{!f&&u.return&&u.return()}finally{if(l)throw c}}return a.length?new(Function.prototype.bind.apply(Lt,[null].concat([i],Cr(a.map(function(p){return new jt(p)}))))):i}},{key:"max",value:function(){for(var n=new de(this.value,this.unit),i=[n],a=arguments.length,r=Array(a),s=0;s<a;s++)r[s]=arguments[s];var o=!0,f=!1,l=void 0;try{for(var c=r[Symbol.iterator](),u;!(o=(u=c.next()).done);o=!0){var d=u.value;if(d instanceof de)i.length>1||n.unit!==d.unit?i.push(d):n.value=Math.max(n.value,d.value);else return null}}catch(m){f=!0,l=m}finally{try{!o&&c.return&&c.return()}finally{if(f)throw l}}return i.length>1?new(Function.prototype.bind.apply(pn,[null].concat(i))):n}},{key:"min",value:function(){for(var n=new de(this.value,this.unit),i=[n],a=arguments.length,r=Array(a),s=0;s<a;s++)r[s]=arguments[s];var o=!0,f=!1,l=void 0;try{for(var c=r[Symbol.iterator](),u;!(o=(u=c.next()).done);o=!0){var d=u.value;if(d instanceof de)i.length>1||n.unit!==d.unit?i.push(d):n.value=Math.min(n.value,d.value);else return null}}catch(m){f=!0,l=m}finally{try{!o&&c.return&&c.return()}finally{if(f)throw l}}return i.length>1?new(Function.prototype.bind.apply(vn,[null].concat(i))):n}},{key:"mul",value:function(){for(var n=this.constructor,i=new n(this.value,this.unit),a=[],r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];var f=!0,l=!1,c=void 0;try{for(var u=s[Symbol.iterator](),d;!(f=(d=u.next()).done);f=!0){var m=d.value;if(typeof m=="number"&&(m=new de(m,"number")),m instanceof n)a.length||i.unit!==m.unit&&m.unit!=="number"?a.push(m):i.value*=m.value;else return null}}catch(p){l=!0,c=p}finally{try{!f&&u.return&&u.return()}finally{if(l)throw c}}return a.length?new(Function.prototype.bind.apply(Lt,[null].concat([i],a))):i}},{key:"sub",value:function(){for(var n=this.constructor,i=new n(this.value,this.unit),a=[],r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];var f=!0,l=!1,c=void 0;try{for(var u=s[Symbol.iterator](),d;!(f=(d=u.next()).done);f=!0){var m=d.value;if(m instanceof n)a.length||i.unit!==m.unit?a.push(new n(m.value*-1,m.unit)):i.value-=m.value;else return null}}catch(p){l=!0,c=p}finally{try{!f&&u.return&&u.return()}finally{if(l)throw c}}return a.length?new(Function.prototype.bind.apply(bn,[null].concat([i],a))):i}}]),t}(),Ir=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function Pr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Nr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Mr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var rn=new WeakMap,gi=new WeakMap,de=function(t){Mr(e,t),Ir(e,[{key:"toString",value:function(){return`${this.value}${yt[this.unit]}`}},{key:"value",get:function(){return rn.get(this)},set:function(i){rn.set(this,pi(i))}},{key:"unit",get:function(){return gi.get(this)}}]);function e(){Pr(this,e);var n=Nr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));if(arguments.length<2)throw new TypeError(`Failed to construct 'CSSUnitValue': 2 arguments required, but only ${arguments.length} present.`);return rn.set(n,pi(arguments.length<=0?void 0:arguments[0])),gi.set(n,Or(arguments.length<=1?void 0:arguments[1])),n}return e}(_r);Object.defineProperties(de.prototype,{value:{enumerable:!0},unit:{enumerable:!0}});function pi(t){if(isNaN(t)||Math.abs(t)===1/0)throw new TypeError("Failed to set the 'value' property on 'CSSUnitValue': The provided double value is non-finite.");return Number(t)}function Or(t){if(Object.keys(yt).indexOf(t)===-1)throw new TypeError(`Failed to construct 'CSSUnitValue': Invalid unit: ${t}`);return t}var Rr=function(){function t(e,n){var i=[],a=!0,r=!1,s=void 0;try{for(var o=e[Symbol.iterator](),f;!(a=(f=o.next()).done)&&(i.push(f.value),!(n&&i.length===n));a=!0);}catch(l){r=!0,s=l}finally{try{!a&&o.return&&o.return()}finally{if(r)throw s}}return i}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Lr=function(t){var e=String(t).match(zr);if(e){var n=Rr(e,3),i=n[1],a=n[2];return new de(i,Dr[oa.indexOf(a||"")])}return new jn(t)},Dr=Object.keys(yt),oa=Object.values(yt),zr=new RegExp(`^([-+]?[0-9]*.?[0-9]+)(${oa.join("|")})?$`),Vr=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function jr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var vi=function(){Vr(t,[{key:"get",value:function(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];if(i.length<1)throw new TypeError(`Failed to execute 'get' on 'StylePropertyMapReadOnly': 1 argument required, but only ${i.length} present.`);var r=i[0],s=this.style[r];return s?Lr(s):null}},{key:"set",value:function(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];if(i.length<2)throw new TypeError(`Failed to execute 'set' on 'StylePropertyMap': 2 arguments required, but only ${i.length} present.`);var r=i[0],s=i[1];this.style[r]=String(s)}}]);function t(){throw jr(this,t),new TypeError("Illegal constructor")}return t}();function Ur(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fr(t){t.CSS||(t.CSS=function n(){Ur(this,n)}),Object.keys(yt).forEach(function(n){n in t.CSS||(t.CSS[n]=function(i){return new de(i,n)})}),e(t.CSSRule.prototype,"styleMap",function(n){return n.style}),e(t.Element.prototype,"attributeStyleMap",function(n){return n.style}),e(t.Element.prototype,"computedStyleMap",function(n){return getComputedStyle(n)}),t.CSSKeywordValue||(t.CSSKeywordValue=jn),t.CSSMathInvert||(t.CSSMathInvert=jt),t.CSSMathMax||(t.CSSMathMax=pn),t.CSSMathMin||(t.CSSMathMin=vn),t.CSSMathProduct||(t.CSSMathProduct=Lt),t.CSSMathSum||(t.CSSMathSum=bn),t.CSSStyleValue||(t.CSSStyleValue=xr),t.CSSUnitValue||(t.CSSUnitValue=de),t.StylePropertyMap||(t.StylePropertyMap=vi);function e(n,i,a){i in n||Object.defineProperty(n,i,{configurable:!0,enumerable:!0,get(){var r=Object.create(vi.prototype);return r.style=a(this),r}})}}const Q=new WeakMap;function bi(t){return t===document.scrollingElement?document:t}function qe(t){yn(t);const n=Q.get(t).animations;if(n.length===0)return;const i=t.currentTime;for(let a=0;a<n.length;a++)n[a].tickAnimation(i)}function sa(t,e){if(!t)return null;const i=getComputedStyle(t).writingMode=="horizontal-tb";let a=t.scrollTop;return(e=="horizontal"||e=="inline"&&i||e=="block"&&!i)&&(a=Math.abs(t.scrollLeft)),a}function $r(t,e){const n=getComputedStyle(t).writingMode=="horizontal-tb";if(e==="block"?e=n?"vertical":"horizontal":e==="inline"&&(e=n?"horizontal":"vertical"),e==="vertical")return t.scrollHeight-t.clientHeight;if(e==="horizontal")return t.scrollWidth-t.clientWidth}function yn(t){if(!(t instanceof Ht)){Wr(t);return}const e=t.subject;if(!e){Qe(t,null);return}if(getComputedStyle(e).display=="none"){Qe(t,null);return}const i=Un(e);Qe(t,i)}function Wr(t){const e=Q.get(t);if(!e.anonymousSource)return;const n=fa(e.anonymousSource,e.anonymousTarget);Qe(t,n)}function Qe(t,e){const n=Q.get(t),i=n.source,a=n.scrollListener;if(i!=e&&(i&&a&&bi(i).removeEventListener("scroll",a),Q.get(t).source=e,e)){const r=()=>{qe(t)};bi(e).addEventListener("scroll",r),n.scrollListener=r}}function on(t,e){const n=Q.get(t).animations;for(let i=0;i<n.length;i++)n[i].animation==e&&n.splice(i,1)}function la(t,e,n){const i=Q.get(t).animations;for(let a=0;a<i.length;a++)if(i[a].animation==e)return;i.push({animation:e,tickAnimation:n}),qe(t)}class Ne{constructor(e){Q.set(this,{source:null,orientation:"block",anonymousSource:e?e.anonymousSource:null,anonymousTarget:e?e.anonymousTarget:null,subject:null,inset:e?e.inset:null,animations:[],scrollListener:null});const n=e&&e.source!==void 0?e.source:document.scrollingElement;Qe(this,n),this.orientation=e&&e.orientation||"block",qe(this)}set source(e){Qe(this,e),qe(this)}get source(){return Q.get(this).source}set orientation(e){if(["block","inline","horizontal","vertical"].indexOf(e)===-1)throw TypeError("Invalid orientation");Q.get(this).orientation=e,qe(this)}get orientation(){return Q.get(this).orientation}get duration(){return CSS.percent(100)}get phase(){const e=this.source;if(!e)return"inactive";const n=getComputedStyle(e);return n.display=="none"||e!=document.scrollingElement&&(n.overflow=="visible"||n.overflow=="clip")?"inactive":"active"}get currentTime(){const n=this.source;if(!n||this.phase=="inactive")return null;const i=this.orientation,a=sa(n,i),r=$r(n,i);return r>0?CSS.percent(100*a/r):CSS.percent(100)}get __polyfill(){return!0}}function sn(t,e){let n=t.parentElement;for(;n!=null;){if(e(n))return n;n=n.parentElement}}function fa(t,e){return t=="root"?document.scrollingElement:Un(e)}function Hr(t){switch(getComputedStyle(t).display){case"block":case"inline-block":case"list-item":case"table":case"table-caption":case"flow-root":case"flex":case"grid":return!0}return!1}function ua(t){const e=getComputedStyle(t);return e.transform!="none"||e.perspective!="none"||e.willChange=="transform"||e.willChange=="perspective"||e.filter!="none"||e.willChange=="filter"||e.backdropFilter!="none"}function Yr(t){return getComputedStyle(t).position!="static"?!0:ua(t)}function Br(t){switch(getComputedStyle(t).position){case"static":case"relative":case"sticky":return sn(t,Hr);case"absolute":return sn(t,Yr);case"fixed":return sn(t,ua)}}function Un(t){if(!!t){for(;t=Br(t);)switch(getComputedStyle(t)["overflow-x"]){case"auto":case"scroll":case"hidden":return t==document.body&&getComputedStyle(document.scrollingElement).overflow=="visible"?document.scrollingElement:t}return document.scrollingElement}}function Sn(t,e){const n=Q.get(t),i=null;if(t.phase==="inactive"||!(t instanceof Ht))return i;const a=t.source,r=t.subject;return wn(e,a,r,n.orientation,n.inset)}function wn(t,e,n,i,a){let r=0,s=0,o=n;const f=e.offsetParent;for(;o&&o!=f;)s+=o.offsetLeft,r+=o.offsetTop,o=o.offsetParent;s-=e.offsetLeft+e.clientLeft,r-=e.offsetTop+e.clientTop;const l=getComputedStyle(e),c=l.writingMode=="horizontal-tb",u=l.direction=="rtl"||l.writingMode=="vertical-rl";let d,m,p;i=="horizontal"||i=="inline"&&c||i=="block"&&!c?(d=n.clientWidth,m=s,u&&(m+=e.scrollWidth-e.clientWidth),p=e.clientWidth):(d=n.clientHeight,m=r,p=e.clientHeight);const w=Xr(a,p),g=m-p+w.end,I=m+d-w.start,P=g+d,k=I-d,v=Math.min(P,k),b=Math.max(P,k);let T,E;switch(t){case"cover":T=g,E=I;break;case"contain":T=v,E=b;break;case"enter":T=g,E=v;break;case"exit":T=b,E=I;break}return{start:T,end:E}}function Xr(t,e){const n={start:0,end:0};if(!t)return n;const i=t.split(" "),a=[];if(i.forEach(r=>{r.endsWith("%")?a.push(e/100*parseFloat(r)):r.endsWith("px")?a.push(parseFloat(r)):r==="auto"&&a.push(0)}),a.length>2)throw TypeError("Invalid inset");return a.length==1?(n.start=a[0],n.end=a[0]):a.length==2&&(n.start=a[0],n.end=a[1]),n}function ca(t,e,n){const i=Sn(t,e),a=Sn(t,"cover");return ma(i,n,a)}function ma(t,e,n){if(!t||!n)return 0;const i=e.value/100;return((t.end-t.start)*i+t.start-n.start)/(n.end-n.start)}class Ht extends Ne{constructor(e){e.axis&&(e.orientation=e.axis),super(e);const n=Q.get(this);n.subject=e&&e.subject?e.subject:void 0,yn(this),qe(this)}get source(){return yn(this),Q.get(this).source}set source(e){throw new Error("Cannot set the source of a view timeline")}get subject(){return Q.get(this).subject}get axis(){return Q.get(this).orientation}get currentTime(){const n=sa(this.source,this.orientation);if(n==null)return null;const i=Sn(this,"cover");if(!i)return null;const a=(n-i.start)/(i.end-i.start);return CSS.percent(100*a)}}const da=globalThis;var ta,na;const Gr=(na=(ta=da.Element)==null?void 0:ta.prototype)==null?void 0:na.animate,yi=da.Animation,ha=["enter","exit","cover","contain"];class Je{constructor(){this.state="pending",this.nativeResolve=this.nativeReject=null,this.promise=new Promise((e,n)=>{this.nativeResolve=e,this.nativeReject=n})}resolve(e){this.state="resolved",this.nativeResolve(e)}reject(e){this.state="rejected",this.promise.catch(()=>{}),this.nativeReject(e)}}function Ut(t){t.readyPromise=new Je,requestAnimationFrame(()=>{t.timeline.currentTime!==null&&ya(t)})}function ga(){return new DOMException("The user aborted a request","AbortError")}function ze(t,e){if(e===null)return e;if(typeof e!="number")throw new DOMException(`Unexpected value: ${e}.  Cannot convert to CssNumberish`,"InvalidStateError");const n=se(t),i=n?100*e/n:0;return CSS.percent(i)}function B(t,e){if(t.timeline){if(e===null)return e;if(e.unit==="percent"){const n=se(t);return e.value*n/100}throw new DOMException("CSSNumericValue must be a percentage for progress based animations.","NotSupportedError")}else{if(e==null||typeof e=="number")return e;const n=e.to("ms");if(n)return n.value;throw new DOMException("CSSNumericValue must be either a number or a time value for time based animations.","InvalidStateError")}}function Kr(t){const e=t.proxy.effect.getTiming();return t.normalizedTiming||e}function qr(t){const e=B(t,t.timeline.currentTime);if(t.holdTime!=null)fe(t),t.animation.playbackRate==0?t.startTime=e:(t.startTime=e-t.holdTime/t.animation.playbackRate,t.holdTime=null);else if(t.startTime!==null&&t.pendingPlaybackRate!==null){const n=(e-t.startTime)*t.animation.playbackRate;fe(t);const i=t.animation.playbackRate;i==0?(t.holdTime=null,t.startTime=e):t.startTime=e-n/i}t.readyPromise&&t.readyPromise.state=="pending"&&t.readyPromise.resolve(t.proxy),ve(t,!1,!1),Ue(t),t.pendingTask=null}function Qr(t){const e=B(t,t.timeline.currentTime);t.startTime!=null&&t.holdTime==null&&(t.holdTime=(e-t.startTime)*t.animation.playbackRate),fe(t),t.startTime=null,t.readyPromise.resolve(t.proxy),ve(t,!1,!1),Ue(t),t.pendingTask=null}function Si(t){if(!t.finishedPromise||t.finishedPromise.state!="pending"||t.proxy.playState!="finished")return;t.finishedPromise.resolve(t.proxy),t.animation.pause();const e=new CustomEvent("finish",{detail:{currentTime:t.proxy.currentTime,timelineTime:t.proxy.timeline.currentTime}});Object.defineProperty(e,"currentTime",{get:function(){return this.detail.currentTime}}),Object.defineProperty(e,"timelineTime",{get:function(){return this.detail.timelineTime}}),requestAnimationFrame(()=>{queueMicrotask(()=>{t.animation.dispatchEvent(e)})})}function Ze(t){return t.pendingPlaybackRate!==null?t.pendingPlaybackRate:t.animation.playbackRate}function fe(t){t.pendingPlaybackRate!==null&&(t.animation.playbackRate=t.pendingPlaybackRate,t.pendingPlaybackRate=null)}function pa(t){if(!t.timeline)return null;const e=B(t,t.timeline.currentTime);if(e===null||t.startTime===null)return null;let n=(e-t.startTime)*t.animation.playbackRate;return n==-0&&(n=0),n}function va(t,e){if(!t.timeline)return null;const n=B(t,t.timeline.currentTime);return n==null?null:n-e/t.animation.playbackRate}function ve(t,e,n){if(!t.timeline)return;const i=e?B(t,t.proxy.currentTime):pa(t);if(i&&t.startTime!=null&&!t.proxy.pending){const r=Ze(t),s=se(t);let o=t.previousCurrentTime;r>0&&i>=s?((o===null||o<s)&&(o=s),t.holdTime=e?i:o):r<0&&i<=0?((o==null||o>0)&&(o=0),t.holdTime=e?i:o):r!=0&&(e&&t.holdTime!==null&&(t.startTime=va(t,t.holdTime)),t.holdTime=null)}Ue(t),t.previousCurrentTime=B(t,t.proxy.currentTime),t.proxy.playState=="finished"?(t.finishedPromise||(t.finishedPromise=new Je),t.finishedPromise.state=="pending"&&(n?Si(t):Promise.resolve().then(()=>{Si(t)}))):(t.finishedPromise&&t.finishedPromise.state=="resolved"&&(t.finishedPromise=new Je),t.animation.playState!="paused"&&t.animation.pause())}function se(t){const e=Kr(t),n=e.delay+e.endDelay+e.iterations*e.duration;return Math.max(0,n)}function Ue(t){if(!!t.timeline)if(t.startTime!==null){const e=t.timeline.currentTime;if(e==null)return;const n=B(t,e);kn(t,(n-t.startTime)*t.animation.playbackRate)}else t.holdTime!==null&&kn(t,t.holdTime)}function kn(t,e){const n=t.timeline,i=t.animation.playbackRate,r=n.currentTime&&n.currentTime.value==(i<0?0:100)?i<0?.001:-.001:0;t.animation.currentTime=e+r}function Jr(t){!t.pendingTask||(t.pendingTask=null,fe(t),t.readyPromise.reject(ga()),Ut(t),t.readyPromise.resolve(t.proxy))}function ln(t,e){if(!t.timeline)return;const n=t.proxy.playState=="paused"&&t.proxy.pending;let i=!1,a=null,r=B(t,t.proxy.currentTime);t.resetCurrentTimeOnResume&&(r=null,t.resetCurrentTimeOnResume=!1);const s=Ze(t),o=se(t);if(s>0&&e&&(r==null||r<0||r>=o))a=0;else if(s<0&&e&&(r==null||r<=0||r>o)){if(o==1/0){t.animation.play();return}a=o}else s==0&&r==null&&(a=0);a!=null&&(t.startTime=a,t.holdTime=null,fe(t)),la(t.timeline,t.animation,ba.bind(t.proxy)),t.holdTime&&(t.startTime=null),t.pendingTask&&(t.pendingTask=null,i=!0),!(t.holdTime===null&&a===null&&!n&&t.pendingPlaybackRate===null)&&(t.readyPromise&&!i&&(t.readyPromise=null),Ue(t),t.readyPromise||Ut(t),t.pendingTask="play",ve(t,!1,!1))}function ba(t){const e=N.get(this);if(t==null){e.animation.playState!="idle"&&e.animation.cancel();return}e.pendingTask&&ya(e);const n=this.playState;if(n=="running"||n=="finished"){const i=B(e,t);kn(e,(i-B(e,this.startTime))*this.playbackRate),n=="finished"&&Ze(e)!=0&&(e.holdTime=null),ve(e,!1,!1)}}function ya(t){t.pendingTask=="pause"?Qr(t):t.pendingTask=="play"&&qr(t)}function Zr(t){const e=t.animation.effect,n=e.updateTiming,i={get:function(f,l){const c=f[l];return typeof c=="function"?c.bind(e):c},set:function(f,l,c){return f[l]=c,!0}},a={apply:function(f){e.getTiming();const l=f.apply(e);if(t.timeline){l.localTime,l.localTime=ze(t,l.localTime),l.endTime=ze(t,l.endTime),l.activeDuration=ze(t,l.activeDuration);const c=se(t),u=l.iterations?(c-l.delay-l.endDelay)/l.iterations:0;l.duration=c?CSS.percent(100*u/c):CSS.percent(0),t.timeline.currentTime===void 0&&(l.localTime=null)}return l}},r={apply:function(f,l){if(t.specifiedTiming)return t.specifiedTiming;t.specifiedTiming=f.apply(e);const u=Object.assign({},t.specifiedTiming),d=t.timeline;let m=!1,p,w;d instanceof ViewTimeline&&(p=eo(t),w=to(t),m=!0);let g;return(u.duration===null||u.duration==="auto"||m)&&t.timeline&&(m?(u.delay=p*1e5,u.endDelay=w*1e5):(u.delay=0,u.endDelay=0),g=u.iterations?1e5:0,u.duration=u.iterations?(g-u.delay-u.endDelay)/u.iterations:0,n.apply(e,[u])),t.normalizedTiming=u,t.specifiedTiming}},s={apply:function(f,l,c){if(t.timeline){const u=c[0];if(u.duration===1/0)throw TypeError("Effect duration cannot be Infinity when used with Scroll Timelines");if(u.iterations===1/0)throw TypeError("Effect iterations cannot be Infinity when used with Scroll Timelines")}t.specifiedTiming&&f.apply(e,[t.specifiedTiming]),f.apply(e,c),t.specifiedTiming=null}},o=new Proxy(e,i);return o.getComputedTiming=new Proxy(e.getComputedTiming,a),o.getTiming=new Proxy(e.getTiming,r),o.updateTiming=new Proxy(e.updateTiming,s),o}function eo(t){if(!(t.timeline instanceof ViewTimeline))return 0;const e=t.timeRange.start;return ca(t.timeline,e.name,e.offset)}function to(t){if(!(t.timeline instanceof ViewTimeline))return 0;const e=t.timeRange.end;return 1-ca(t.timeline,e.name,e.offset)}const N=new WeakMap;class Fn{constructor(e,n,i={}){const a=n instanceof Ne,r=a?void 0:n,s=e instanceof yi?e:new yi(e,r);N.set(this,{animation:s,timeline:a?n:void 0,playState:a?"idle":null,readyPromise:null,finishedPromise:null,startTime:null,holdTime:null,previousCurrentTime:null,resetCurrentTimeOnResume:!1,pendingPlaybackRate:null,pendingTask:null,specifiedTiming:null,normalizedTiming:null,effect:null,timeRange:n instanceof ViewTimeline?no(i):null,proxy:this})}get effect(){const e=N.get(this);return e.timeline?(e.effect||(e.effect=Zr(e)),e.effect):e.animation.effect}set effect(e){const n=N.get(this);N.get(this).animation.effect=e,n.effect=null}get timeline(){const e=N.get(this);return e.timeline||e.animation.timeline}set timeline(e){const n=this.timeline;if(n==e)return;const i=this.playState,a=this.currentTime,r=N.get(this),s=se(r),o=s>0?B(r,a)/s:0,f=n instanceof Ne,l=e instanceof Ne;r.resetCurrentTimeOnResume=!1;const c=this.pending;if(f&&on(r.timeline,r.animation),l){r.timeline=e,fe(r);const u=r.animation.playbackRate>=0?0:se(r);switch(i){case"running":case"finished":r.startTime=u,la(r.timeline,r.animation,ba.bind(this));break;case"paused":r.resetCurrentTimeOnResume=!0,r.startTime=null,r.holdTime=B(r,CSS.percent(100*o));break;default:r.holdTime=null,r.startTime=null}c&&((!r.readyPromise||r.readyPromise.state=="resolved")&&Ut(r),i=="paused"?r.pendingTask="pause":r.pendingTask="play"),r.startTime!==null&&(r.holdTime=null),ve(r,!1,!1);return}if(r.animation.timeline==e){if(on(r.timeline,r.animation),r.timeline=null,f)switch(a!==null&&(r.animation.currentTime=o*se(r)),i){case"paused":r.animation.pause();break;case"running":case"finished":r.animation.play()}}else throw TypeError("Unsupported timeline: "+e)}get startTime(){const e=N.get(this);return e.timeline?ze(e,e.startTime):e.animation.startTime}set startTime(e){const n=N.get(this);if(e=B(n,e),!n.timeline){n.animation.startTime=e;return}B(n,n.timeline.currentTime)==null&&n.startTime!=null&&(n.holdTime=null,Ue(n));const a=B(n,this.currentTime);fe(n),n.startTime=e,n.resetCurrentTimeOnResume=!1,n.startTime!==null&&n.animation.playbackRate!=0?n.holdTime=null:n.holdTime=a,n.pendingTask&&(n.pendingTask=null,n.readyPromise.resolve(this)),ve(n,!0,!1),Ue(n)}get currentTime(){const e=N.get(this);return e.timeline?e.holdTime!=null?ze(e,e.holdTime):ze(e,pa(e)):e.animation.currentTime}set currentTime(e){const n=N.get(this);if(e=B(n,e),!n.timeline||e==null){n.animation.currentTime=e;return}n.startTime,n.holdTime;const i=n.timeline.phase;n.holdTime!==null||n.startTime===null||i=="inactive"||n.animation.playbackRate==0?n.holdTime=e:n.startTime=va(n,e),n.resetCurrentTimeOnResume=!1,i=="inactive"&&(n.startTime=null),n.previousCurrentTime=null,n.pendingTask=="pause"&&(n.holdTime=e,fe(n),n.startTime=null,n.pendingTask=null,n.readyPromise.resolve(this)),ve(n,!0,!1)}get playbackRate(){return N.get(this).animation.playbackRate}set playbackRate(e){const n=N.get(this);if(!n.timeline){n.animation.playbackRate=e;return}n.pendingPlaybackRate=null;const i=this.currentTime;n.animation.playbackRate=e,i!==null&&(this.currentTime=i)}get playState(){const e=N.get(this);if(!e.timeline)return e.animation.playState;const n=B(e,this.currentTime);return n===null&&e.startTime===null&&e.pendingTask==null?"idle":e.pendingTask=="pause"||e.startTime===null&&e.pendingTask!="play"?"paused":n!=null&&(e.animation.playbackRate>0&&n>=se(e)||e.animation.playbackRate<0&&n<=0)?"finished":"running"}get replaceState(){return N.get(this).animation.pending}get pending(){const e=N.get(this);return e.timeline?!!e.readyPromise&&e.readyPromise.state=="pending":e.animation.pending}finish(){const e=N.get(this);if(!e.timeline){e.animation.finish();return}const n=Ze(e),i=se(e);if(n==0)throw new DOMException("Cannot finish Animation with a playbackRate of 0.","InvalidStateError");if(n>0&&i==1/0)throw new DOMException("Cannot finish Animation with an infinite target effect end.","InvalidStateError");fe(e);const a=n<0?0:i;this.currentTime=ze(e,a);const r=B(e,e.timeline.currentTime);e.startTime===null&&r!==null&&(e.startTime=r-a/e.animation.playbackRate),e.pendingTask=="pause"&&e.startTime!==null&&(e.holdTime=null,e.pendingTask=null,e.readyPromise.resolve(this)),e.pendingTask=="play"&&e.startTime!==null&&(e.pendingTask=null,e.readyPromise.resolve(this)),ve(e,!0,!0)}play(){const e=N.get(this);if(!e.timeline){e.animation.play();return}ln(e,!0)}pause(){const e=N.get(this);if(!e.timeline){e.animation.pause();return}if(this.playState=="paused")return;let n=null;const i=e.animation.playbackRate,a=se(e);if(e.animation.currentTime===null)if(i>=0)n=0;else if(a==1/0){e.animation.pause();return}else n=a;n!==null&&(e.startTime=n),e.pendingTask=="play"?e.pendingTask=null:e.readyPromise=null,e.readyPromise||Ut(e),e.pendingTask="pause"}reverse(){const e=N.get(this),n=Ze(e),i=e.resetCurrentTimeOnResume?null:B(e,this.currentTime),a=se(e)==1/0,r=n!=0&&(n<0||i>0||!a);if(!e.timeline||!r){r&&(e.pendingPlaybackRate=-Ze(e)),e.animation.reverse();return}if(e.timeline.phase=="inactive")throw new DOMException("Cannot reverse an animation with no active timeline","InvalidStateError");this.updatePlaybackRate(-n),ln(e,!0)}updatePlaybackRate(e){const n=N.get(this);if(n.pendingPlaybackRate=e,!n.timeline){n.animation.updatePlaybackRate(e);return}const i=this.playState;if(!(n.readyPromise&&n.readyPromise.state=="pending"))switch(i){case"idle":case"paused":fe(n);break;case"finished":const a=B(n,n.timeline.currentTime),r=a!==null?(a-n.startTime)*n.animation.playbackRate:null;e==0?n.startTime=a:n.startTime=a!=null&&r!=null?(a-r)/e:null,fe(n),ve(n,!1,!1),Ue(n);break;default:ln(n,!1)}}persist(){N.get(this).animation.persist()}get id(){return N.get(this).animation.id}cancel(){const e=N.get(this);if(!e.timeline){e.animation.cancel();return}this.playState!="idle"&&(Jr(e),e.finishedPromise&&e.finishedPromise.state=="pending"&&e.finishedPromise.reject(ga()),e.finishedPromise=new Je,e.animation.cancel()),e.startTime=null,e.holdTime=null,on(e.timeline,e.animation)}get onfinish(){return N.get(this).animation.onfinish}set onfinish(e){N.get(this).animation.onfinish=e}get oncancel(){return N.get(this).animation.oncancel}set oncancel(e){N.get(this).animation.oncancel=e}get onremove(){return N.get(this).animation.onremove}set onremove(e){N.get(this).animation.onremove=e}get finished(){const e=N.get(this);return e.timeline?(e.finishedPromise||(e.finishedPromise=new Je),e.finishedPromise.promise):e.animation.finished}get ready(){const e=N.get(this);return e.timeline?(e.readyPromise||(e.readyPromise=new Je,e.readyPromise.resolve(this)),e.readyPromise.promise):e.animation.ready}addEventListener(e,n,i){N.get(this).animation.addEventListener(e,n,i)}removeEventListener(e,n,i){N.get(this).animation.removeEventListener(e,n,i)}dispatchEvent(e){N.get(this).animation.dispatchEvent(e)}}function wi(t,e){if(!t)return null;const n=t.split(" ");if(!ha.includes(n[0])||n.length==2&&!n[1].endsWith("%"))throw TypeError("Invalid animation delay");let i=e;if(n.length==2){const a=parseFloat(n[1]);if(Number.isNaN(a))throw TypeError(`"${n[1]}" is not a valid percentage for animation delay`);i=CSS.percent(a)}return{name:n[0],offset:i}}function Sa(){return{name:"cover",offset:CSS.percent(0)}}function wa(){return{name:"cover",offset:CSS.percent(100)}}function no(t){const e=ka(t["animation-time-range"]);return t["animation-delay"]&&(e.start=wi(t["animation-delay"],Sa().offset)),t["animation-end-delay"]&&(e.end=wi(t["animation-end-delay"],wa().offset)),e}function ka(t){const e={start:Sa(),end:wa()};if(!t)return e;const n=t.split(" "),i=[],a=[];if(n.forEach(r=>{r.endsWith("%")?a.push(parseFloat(r)):i.push(r)}),i.length>2||a.length>2||a.length==1)throw TypeError("Invalid time range");return i.length&&(e.start.name=i[0],e.end.name=i.length>1?i[1]:i[0]),a.length>1&&(e.start.offset=CSS.percent(a[0]),e.end.offset=CSS.percent(a[1])),e}function io(t,e){const n=e.timeline;n instanceof Ne&&delete e.timeline;const i=(l,c)=>{if(c in l){const u=l[c];return typeof u!="number"?(delete l[c],u):null}},a=(l,c)=>{!c||(c.phase&&(l.name=c.phase),c.percent&&(l.offset=c.percent))},r=i(e,"delay"),s=i(e,"endDelay"),o=Gr.apply(this,[t,e]),f=new Fn(o,n);if(n instanceof Ne){if(o.pause(),n instanceof ViewTimeline){const l=N.get(f);l.timeRange=ka(e.timeRange),a(l.timeRange.start,r),a(l.timeRange.end,s)}f.play()}return f}const Y={IDENTIFIER:/[\w\\\@_-]+/g,WHITE_SPACE:/\s*/g,NUMBER:/^[0-9]+/,TIME:/^[0-9]+(s|ms)/,SCROLL_TIMELINE:/scroll-timeline\s*:([^;}]+)/,SCROLL_TIMELINE_NAME:/scroll-timeline-name\s*:([^;}]+)/,SCROLL_TIMELINE_AXIS:/scroll-timeline-axis\s*:([^;}]+)/,VIEW_TIMELINE:/view-timeline\s*:([^;}]+)/,VIEW_TIMELINE_NAME:/view-timeline-name\s*:([^;}]+)/,VIEW_TIMELINE_AXIS:/view-timeline-axis\s*:([^;}]+)/,VIEW_TIMELINE_INSET:/view-timeline-inset\s*:([^;}]+)/,ANIMATION_TIMELINE:/animation-timeline\s*:([^;}]+)/,ANIMATION_DELAY:/animation-delay\s*:([^;}]+)/,ANIMATION_END_DELAY:/animation-end-delay\s*:([^;}]+)/,ANIMATION_TIME_RANGE:/animation-time-range\s*:([^;}]+)/,ANIMATION_NAME:/animation-name\s*:([^;}]+)/,ANIMATION:/animation\s*:([^;}]+)/,ANONYMOUS_SCROLL:/scroll\(([^)]*)\)/},ki=1,xt=0,ft=["block","inline","vertical","horizontal"],ao=["nearest","root"];class ro{constructor(){this.cssRulesWithTimelineName=[],this.nextAnonymousTimelineNameIndex=0,this.anonymousScrollTimelineOptions=new Map,this.sourceSelectorToScrollTimeline=[],this.subjectSelectorToViewTimeline=[],this.keyframeNamesSelectors=new Map}transpileStyleSheet(e,n,i){const a={sheetSrc:e,index:0,name:i};for(;a.index<a.sheetSrc.length&&(this.eatWhitespace(a),!(a.index>=a.sheetSrc.length));){if(this.lookAhead("/*",a)){for(;this.lookAhead("/*",a);)this.eatComment(a),this.eatWhitespace(a);continue}const r=this.parseQualifiedRule(a);!r||(n?this.parseKeyframesAndSaveNameMapping(r,a):this.handleScrollTimelineProps(r,a))}return a.sheetSrc}getAnimationTimelineOptions(e,n){for(let i=this.cssRulesWithTimelineName.length-1;i>=0;i--){const a=this.cssRulesWithTimelineName[i];if(n.matches(a.selector)&&(!a["animation-name"]||a["animation-name"]==e))return{"animation-timeline":a["animation-timeline"],"animation-delay":a["animation-delay"],"animation-end-delay":a["animation-end-delay"],"animation-time-range":a["animation-time-range"]}}return null}getAnonymousScrollTimelineOptions(e,n){const i=this.anonymousScrollTimelineOptions.get(e);return i?{anonymousSource:i.source,anonymousTarget:n,source:fa(i.source,n),orientation:i.orientation?i.orientation:"block"}:null}getScrollTimelineOptions(e,n){const i=this.getAnonymousScrollTimelineOptions(e,n);if(i)return i;for(let a=this.sourceSelectorToScrollTimeline.length-1;a>=0;a--){const r=this.sourceSelectorToScrollTimeline[a];if(r.name==e){const s=this.findPreviousSiblingOrAncestorMatchingSelector(n,r.selector);if(s)return{source:s,...r.axis?{orientation:r.axis}:{}}}}return null}findPreviousSiblingOrAncestorMatchingSelector(e,n){let i=e;for(;i;){if(i.matches(n))return i;i=i.previousElementSibling||i.parentElement}return null}getViewTimelineOptions(e,n){for(let i=this.subjectSelectorToViewTimeline.length-1;i>=0;i--){const a=this.subjectSelectorToViewTimeline[i];if(a.name==e){const r=this.findPreviousSiblingOrAncestorMatchingSelector(n,a.selector);if(r)return{subject:r,axis:a.axis,inset:a.inset}}}return null}parseScrollTimeline(e){const n=e.index;this.assertString(e,"@scroll-timeline"),this.eatWhitespace(e);let i=this.parseIdentifier(e);this.eatWhitespace(e),this.assertString(e,"{"),this.eatWhitespace(e);let a={name:i,source:"auto",orientation:void 0};for(;this.peek(e)!=="}";){const s=this.parseIdentifier(e);this.eatWhitespace(e),this.assertString(e,":"),this.eatWhitespace(e),a[s]=this.removeEnclosingDoubleQuotes(this.eatUntil(";",e)),this.assertString(e,";"),this.eatWhitespace(e)}this.assertString(e,"}");const r=e.index;return this.eatWhitespace(e),{scrollTimeline:a,startIndex:n,endIndex:r}}handleScrollTimelineProps(e,n){if(e.selector.includes("@keyframes"))return;const i=e.block.contents.includes("animation-name:"),a=e.block.contents.includes("animation-timeline:"),r=e.block.contents.includes("animation:");this.saveSourceSelectorToScrollTimeline(e),this.saveSubjectSelectorToViewTimeline(e);let s=[],o=[],f=!1;if(a&&(s=this.extractScrollTimelineNames(e.block.contents)),i&&(o=this.extractMatches(e.block.contents,Y.ANIMATION_NAME)),a&&i){this.saveRelationInList(e,s,o);return}r&&this.extractMatches(e.block.contents,Y.ANIMATION).forEach(l=>{const c=this.extractTimelineName(l);c.timelineName&&s.push(c.timelineName);const u=this.extractAnimationName(l);u&&(c.timelineName||a)&&o.push(u),(c.timelineName||a)&&(this.hasDuration(l)||(e.block.contents=e.block.contents.replace(l," 1s "+l),f=!0)),c.toBeReplaced&&(e.block.contents=e.block.contents.replace(c.toBeReplaced," ".repeat(c.toBeReplaced.length)),f=!0)}),f&&this.replacePart(e.block.startIndex,e.block.endIndex,e.block.contents,n),this.saveRelationInList(e,s,o)}saveSourceSelectorToScrollTimeline(e){const n=e.block.contents.includes("scroll-timeline:"),i=e.block.contents.includes("scroll-timeline-name:"),a=e.block.contents.includes("scroll-timeline-axis:");if(!n&&!i)return;let r=[];if(n){const o=this.extractMatches(e.block.contents,Y.SCROLL_TIMELINE);for(const f of o){parts=this.split(f);let l={selector:e.selector,name:""};parts.length==1?l.name=parts[0]:parts.length==2&&(ft.includes(parts[0])?(l.axis=parts[0],l.name=parts[1]):(l.axis=parts[1],l.name=parts[0])),r.push(l)}}if(i){const o=this.extractMatches(e.block.contents,Y.SCROLL_TIMELINE_NAME);for(let f=0;f<o.length;f++)if(f<r.length)r[f].name=o[f];else{let l={selector:e.selector,name:o[f]};r.push(l)}}let s=[];a&&(s=this.extractMatches(e.block.contents,Y.SCROLL_TIMELINE_AXIS),s=s.filter(o=>ft.includes(o)));for(let o=0;o<r.length;o++)s.length&&(r[o].axis=s[o%r.length]);this.sourceSelectorToScrollTimeline.push(...r)}saveSubjectSelectorToViewTimeline(e){const n=e.block.contents.includes("view-timeline:"),i=e.block.contents.includes("view-timeline-name:"),a=e.block.contents.includes("view-timeline-axis:"),r=e.block.contents.includes("view-timeline-inset:");if(!n&&!i)return;let s=[];if(n){const l=this.extractMatches(e.block.contents,Y.VIEW_TIMELINE);for(let c of l){parts=this.split(c);let u={selector:e.selector,name:"",inset:null};parts.length==1?u.name=parts[0]:parts.length==2&&(ft.includes(parts[0])?(u.axis=parts[0],u.name=parts[1]):(u.axis=parts[1],u.name=parts[0])),s.push(u)}}if(i){const l=this.extractMatches(e.block.contents,Y.VIEW_TIMELINE_NAME);for(let c=0;c<l.length;c++)if(c<s.length)s[c].name=l[c];else{let u={selector:e.selector,name:l[c],inset:null};s.push(u)}}let o=[],f=[];r&&(o=this.extractMatches(e.block.contents,Y.VIEW_TIMELINE_INSET)),a&&(f=this.extractMatches(e.block.contents,Y.VIEW_TIMELINE_AXIS),f=f.filter(l=>ft.includes(l)));for(let l=0;l<s.length;l++)o.length&&(s[l].inset=o[l%s.length]),f.length&&(s[l].axis=f[l%s.length]);this.subjectSelectorToViewTimeline.push(...s)}hasDuration(e){return e.split(" ").filter(n=>so(n)).length>=1}saveRelationInList(e,n,i){const a=e.block.contents.includes("animation-delay:"),r=e.block.contents.includes("animation-end-delay:"),s=e.block.contents.includes("animation-time-range:");let o=[],f=[],l=[];a&&(o=this.extractMatches(e.block.contents,Y.ANIMATION_DELAY)),r&&(f=this.extractMatches(e.block.contents,Y.ANIMATION_END_DELAY)),s&&(l=this.extractMatches(e.block.contents,Y.ANIMATION_TIME_RANGE));const c=Math.max(n.length,i.length,o.length,f.length,l.length);for(let u=0;u<c;u++)this.cssRulesWithTimelineName.push({selector:e.selector,"animation-timeline":n[u%n.length],...i.length?{"animation-name":i[u%i.length]}:{},...o.length?{"animation-delay":o[u%o.length]}:{},...f.length?{"animation-end-delay":f[u%f.length]}:{},...l.length?{"animation-time-range":l[u%l.length]}:{}})}extractScrollTimelineNames(e){const n=Y.ANIMATION_TIMELINE.exec(e)[1].trim(),i=[];return n.split(",").map(a=>a.trim()).forEach(a=>{if(oo(a)){const r=this.saveAnonymousTimelineName(a);i.push(r)}else i.push(a)}),i}saveAnonymousTimelineName(e){const n=`:t${this.nextAnonymousTimelineNameIndex++}`;return this.anonymousScrollTimelineOptions.set(n,this.parseAnonymousTimeline(e)),n}parseAnonymousTimeline(e){const n=Y.ANONYMOUS_SCROLL.exec(e);if(!n)return null;const i=n[ki],a={};return i.split(" ").forEach(r=>{ft.includes(r)?a.orientation=r:ao.includes(r)&&(a.source=r)}),a}extractAnimationName(e){return this.findMatchingEntryInContainer(e,this.keyframeNamesSelectors)}extractTimelineName(e){let n=null,i=null;const a=Y.ANONYMOUS_SCROLL.exec(e);if(!a)n=this.findMatchingEntryInContainer(e,new Set(this.sourceSelectorToScrollTimeline.map(r=>r.name)))||this.findMatchingEntryInContainer(e,new Set(this.subjectSelectorToViewTimeline.map(r=>r.name))),i=n;else{const r=a[xt];n=this.saveAnonymousTimelineName(r),i=r}return{timelineName:n,toBeReplaced:i}}findMatchingEntryInContainer(e,n){const i=e.split(" ").filter(a=>n.has(a));return i?i[0]:null}parseIdentifier(e){Y.IDENTIFIER.lastIndex=e.index;const n=Y.IDENTIFIER.exec(e.sheetSrc);if(!n)throw this.parseError(e,"Expected an identifier");return e.index+=n[xt].length,n[xt]}parseKeyframesAndSaveNameMapping(e,n){if(e.selector.startsWith("@keyframes")){const i=this.replaceKeyframesAndGetMapping(e,n);e.selector.split(" ").forEach((a,r)=>{r>0&&this.keyframeNamesSelectors.set(a,i)})}}replaceKeyframesAndGetMapping(e,n){function i(u){return ha.some(d=>u.startsWith(d))}function a(u){return u.split(" ").map(d=>d.trim()).filter(d=>d!="").join(" ")}function r(u){let d=0,m=-1,p=-1;const w=[];for(let g=0;g<u.length;g++)u[g]=="{"?d++:u[g]=="}"&&d--,d==1&&u[g]!="{"&&u[g]!="}"&&m==-1&&(m=g),d==2&&u[g]=="{"&&(p=g,w.push({start:m,end:p}),m=p=-1);return w}const s=e.block.contents,o=r(s);if(o.length==0)return new Map;const f=new Map;let l=!1;const c=[];c.push(s.substring(0,o[0].start));for(let u=0;u<o.length;u++){const d=s.substring(o[u].start,o[u].end);let m=[];d.split(",").forEach(p=>{const w=a(p),g=f.size;f.set(g,w),m.push(`${g}%`),i(w)&&(l=!0)}),c.push(m.join(",")),u==o.length-1?c.push(s.substring(o[u].end)):c.push(s.substring(o[u].end,o[u+1].start))}return l?(e.block.contents=c.join(""),this.replacePart(e.block.startIndex,e.block.endIndex,e.block.contents,n),f):new Map}parseQualifiedRule(e){const n=e.index,i=this.parseSelector(e).trim();if(!i)return;const a=this.eatBlock(e),r=e.index;return{selector:i,block:a,startIndex:n,endIndex:r}}removeEnclosingDoubleQuotes(e){let n=e[0]=='"'?1:0,i=e[e.length-1]=='"'?e.length-1:e.length;return e.substring(n,i)}assertString(e,n){if(e.sheetSrc.substr(e.index,n.length)!=n)throw this.parseError(e,`Did not find expected sequence ${n}`);e.index+=n.length}replacePart(e,n,i,a){if(a.sheetSrc=a.sheetSrc.slice(0,e)+i+a.sheetSrc.slice(n),a.index>=n){const r=a.index-n;a.index=e+i.length+r}}eatComment(e){this.assertString(e,"/*"),this.eatUntil("*/",e,!0),this.assertString(e,"*/")}eatBlock(e){const n=e.index;this.assertString(e,"{");let i=1;for(;i!=0;){if(this.lookAhead("/*",e)){this.eatComment(e);continue}e.sheetSrc[e.index]==="{"?i++:e.sheetSrc[e.index]==="}"&&i--,this.advance(e)}const a=e.index,r=e.sheetSrc.slice(n,a);return{startIndex:n,endIndex:a,contents:r}}advance(e){if(e.index++,e.index>e.sheetSrc.length)throw this.parseError(e,"Advanced beyond the end")}eatUntil(e,n,i=!1){const a=n.index;for(;!this.lookAhead(e,n);)this.advance(n);return i&&(n.sheetSrc=n.sheetSrc.slice(0,a)+" ".repeat(n.index-a)+n.sheetSrc.slice(n.index)),n.sheetSrc.slice(a,n.index)}parseSelector(e){let n=e.index;if(this.eatUntil("{",e),n===e.index)throw Error("Empty selector");return e.sheetSrc.slice(n,e.index)}eatWhitespace(e){Y.WHITE_SPACE.lastIndex=e.index;const n=Y.WHITE_SPACE.exec(e.sheetSrc);n&&(e.index+=n[xt].length)}lookAhead(e,n){return n.sheetSrc.substr(n.index,e.length)==e}peek(e){return e.sheetSrc[e.index]}extractMatches(e,n,i=","){return n.exec(e)[ki].trim().split(i).map(a=>a.trim())}split(e){return e.split(" ").map(n=>n.trim()).filter(n=>n!="")}}function oo(t){return t.startsWith("scroll")&&t.includes("(")}function so(t){return Y.TIME.exec(t)}const et=new ro;function lo(){new MutationObserver(i=>{for(const a of i)for(const r of a.addedNodes)r instanceof HTMLStyleElement&&e(r)}).observe(document.documentElement,{childList:!0,subtree:!0});function e(i){if(i.innerHTML.trim().length===0)return;let a=et.transpileStyleSheet(i.innerHTML,!0);a=et.transpileStyleSheet(a,!1),i.innerHTML=a}function n(i){}document.querySelectorAll("style").forEach(i=>e(i)),document.querySelectorAll("link").forEach(i=>void 0)}function fo(t,e,n,i,a,r){const s=wn(t,e,n,i,a),o=wn("cover",e,n,i,a);return ma(s,r,o)}function uo(t,e,n){const i=et.getAnimationTimelineOptions(e,n);if(!i)return null;const a=i["animation-timeline"];if(!a)return null;let r=et.getScrollTimelineOptions(a,n)||et.getViewTimelineOptions(a,n);return r?(r.subject&&co(t,r),{timeline:r.source?new Ne(r):new Ht(r),animOptions:i}):null}function co(t,e){const n=Un(e.subject),i=e.axis||e.orientation;function a(s,o){let f=null;for(const[l,c]of s)if(l==o.offset*100){if(c=="from")f=0;else if(c=="to")f=100;else{const u=c.split(" ");u.length==1?f=parseFloat(u[0]):f=fo(u[0],n,e.subject,i,e.inset,CSS.percent(parseFloat(u[1])))*100}break}return f}const r=et.keyframeNamesSelectors.get(t.animationName);if(r&&r.size){const s=[];t.effect.getKeyframes().forEach(f=>{const l=a(r,f);l!==null&&l>=0&&l<=100&&(f.offset=l/100,s.push(f))});const o=s.sort((f,l)=>f.offset<l.offset?-1:f.affset>l.offset?1:0);t.effect.setKeyframes(o)}}function mo(t){if(CSS.supports("animation-timeline: works"))return;lo();const e=new WeakMap;t.addEventListener("animationstart",n=>{n.target.getAnimations().filter(i=>i.animationName===n.animationName).forEach(i=>{e.has(n.target)||e.set(n.target,new Map);const a=e.get(n.target);if(!a.has(i.animationName)){const s=uo(i,i.animationName,n.target);s&&s.timeline&&i.timeline!=s.timeline?a.set(i.animationName,new Fn(i,s.timeline,s.animOptions)):a.set(i.animationName,null)}const r=a.get(i.animationName);r!==null&&(i.pause(),r.play())})})}function ho(t){const e=new WeakMap;function n(o){switch(o){case"percent":return"%";case"number":return"";default:return o.toLowerCase()}}function i(o){return typeof o=="number"?new CSSUnitValue(o,"number"):o}function a(o){const f=[];for(let l=0;l<o.length;l++)f[l]=i(o[l]);return f}class r{constructor(f,l,c,u){e.set(this,{values:a(f),operator:l,name:c||l,delimiter:u||", "})}get operator(){return e.get(this).operator}get values(){return e.get(this).values}toString(){const f=e.get(this);return`${f.name}(${f.values.join(f.delimiter)})`}}const s={CSSUnitValue:class{constructor(o,f){e.set(this,{value:o,unit:f})}get value(){return e.get(this).value}set value(o){e.get(this).value=o}get unit(){return e.get(this).unit}toString(){const o=e.get(this);return`${o.value}${n(o.unit)}`}},CSSKeywordValue:class{constructor(o){ci(this,"value");this.value=o}toString(){return this.value.toString()}},CSSMathSum:class extends r{constructor(o){super(arguments,"sum","calc"," + ")}},CSSMathProduct:class extends r{constructor(o){super(arguments,"product","calc"," * ")}},CSSMathNegate:class extends r{constructor(o){super([arguments[0]],"negate","-")}},CSSMathNegate:class extends r{constructor(o){super([1,arguments[0]],"invert","calc"," / ")}},CSSMathMax:class extends r{constructor(){super(arguments,"max")}},CSSMathMin:class extends r{constructor(){super(arguments,"min")}}};if(!t.CSS&&!Reflect.defineProperty(t,"CSS",{value:{}}))throw Error("Error installing CSSOM support");t.CSSUnitValue||(t.CSSUnitValue={},t.CSSUnitValue.number=o=>new CSSUnitValue(o,"number"),t.CSSUnitValue.percent=o=>new CSSUnitValue(o,"percent"),t.CSSUnitValue.em=o=>new CSSUnitValue(o,"em"),t.CSSUnitValue.ex=o=>new CSSUnitValue(o,"ex"),t.CSSUnitValue.px=o=>new CSSUnitValue(o,"px"),t.CSSUnitValue.cm=o=>new CSSUnitValue(o,"cm"),t.CSSUnitValue.mm=o=>new CSSUnitValue(o,"mm"),t.CSSUnitValue.in=o=>new CSSUnitValue(o,"in"),t.CSSUnitValue.pt=o=>new CSSUnitValue(o,"pt"),t.CSSUnitValue.pc=o=>new CSSUnitValue(o,"pc"),t.CSSUnitValue.Q=o=>new CSSUnitValue(o,"Q"),t.CSSUnitValue.vw=o=>new CSSUnitValue(o,"vw"),t.CSSUnitValue.vh=o=>new CSSUnitValue(o,"vh"),t.CSSUnitValue.vmin=o=>new CSSUnitValue(o,"vmin"),t.CSSUnitValue.vmax=o=>new CSSUnitValue(o,"vmax"),t.CSSUnitValue.rems=o=>new CSSUnitValue(o,"rems"),t.CSSUnitValue.ch=o=>new CSSUnitValue(o,"ch"),t.CSSUnitValue.deg=o=>new CSSUnitValue(o,"deg"),t.CSSUnitValue.rad=o=>new CSSUnitValue(o,"rad"),t.CSSUnitValue.grad=o=>new CSSUnitValue(o,"grad"),t.CSSUnitValue.turn=o=>new CSSUnitValue(o,"turn"),t.CSSUnitValue.ms=o=>new CSSUnitValue(o,"ms"),t.CSSUnitValue.s=o=>new CSSUnitValue(o,"s"),t.CSSUnitValue.Hz=o=>new CSSUnitValue(o,"Hz"),t.CSSUnitValue.kHz=o=>new CSSUnitValue(o,"kHz"),t.CSSUnitValue.dppx=o=>new CSSUnitValue(o,"dppx"),t.CSSUnitValue.dpi=o=>new CSSUnitValue(o,"dpi"),t.CSSUnitValue.dpcm=o=>new CSSUnitValue(o,"dpcm"),t.CSSUnitValue.fr=o=>new CSSUnitValue(o,"fr"));for(const o in s)o in t||(t[o]=s[o])}const go=t=>{if(ho(t),mo(t),[...document.styleSheets].filter(e=>e.href!==null).length&&console.warn("Non-Inline StyleSheets detected: ScrollTimeline polyfill currently only supports inline styles within style tags"),!Reflect.defineProperty(t,"ScrollTimeline",{value:Ne}))throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");if(!Reflect.defineProperty(t,"ViewTimeline",{value:Ht}))throw Error("Error installing ViewTimeline polyfill: could not attach ViewTimeline to window");if(!Reflect.defineProperty(Element.prototype,"animate",{value:io}))throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element");if(!Reflect.defineProperty(t,"Animation",{value:Fn}))throw Error("Error installing Animation constructor.")};function fn(t){return t*t*t}function un(t){const e=t-1;return e*e*e+1}function Z(t,{delay:e=0,duration:n=400,easing:i=ia}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:r=>`opacity: ${r*a}`}}const Ie=t=>{const e=t.match(/(\d+)/);return e&&e.length>0?parseFloat(e[0])*parseFloat(getComputedStyle(document.documentElement).fontSize):0};function Ti(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ti(Object(n),!0).forEach(function(i){X(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ti(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ft(t){return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft(t)}function po(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xi(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function vo(t,e,n){return e&&xi(t.prototype,e),n&&xi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $n(t,e){return yo(t)||wo(t,e)||Ta(t,e)||To()}function St(t){return bo(t)||So(t)||Ta(t)||ko()}function bo(t){if(Array.isArray(t))return Tn(t)}function yo(t){if(Array.isArray(t))return t}function So(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wo(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],a=!0,r=!1,s,o;try{for(n=n.call(t);!(a=(s=n.next()).done)&&(i.push(s.value),!(e&&i.length===e));a=!0);}catch(f){r=!0,o=f}finally{try{!a&&n.return!=null&&n.return()}finally{if(r)throw o}}return i}}function Ta(t,e){if(!!t){if(typeof t=="string")return Tn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tn(t,e)}}function Tn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function ko(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function To(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ei=function(){},Wn={},xa={},Ea=null,Ca={mark:Ei,measure:Ei};try{typeof window<"u"&&(Wn=window),typeof document<"u"&&(xa=document),typeof MutationObserver<"u"&&(Ea=MutationObserver),typeof performance<"u"&&(Ca=performance)}catch{}var xo=Wn.navigator||{},Ci=xo.userAgent,Ai=Ci===void 0?"":Ci,Me=Wn,j=xa,_i=Ea,Et=Ca;Me.document;var Ee=!!j.documentElement&&!!j.head&&typeof j.addEventListener=="function"&&typeof j.createElement=="function",Aa=~Ai.indexOf("MSIE")||~Ai.indexOf("Trident/"),Ct,At,_t,It,Pt,be="___FONT_AWESOME___",xn=16,_a="fa",Ia="svg-inline--fa",We="data-fa-i2svg",En="data-fa-pseudo-element",Eo="data-fa-pseudo-element-pending",Hn="data-prefix",Yn="data-icon",Ii="fontawesome-i2svg",Co="async",Ao=["HTML","HEAD","STYLE","SCRIPT"],Pa=function(){try{return!0}catch{return!1}}(),V="classic",$="sharp",Bn=[V,$];function wt(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[V]}})}var ht=wt((Ct={},X(Ct,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),X(Ct,$,{fa:"solid",fass:"solid","fa-solid":"solid"}),Ct)),gt=wt((At={},X(At,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),X(At,$,{solid:"fass"}),At)),pt=wt((_t={},X(_t,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),X(_t,$,{fass:"fa-solid"}),_t)),_o=wt((It={},X(It,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),X(It,$,{"fa-solid":"fass"}),It)),Io=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Na="fa-layers-text",Po=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,No=wt((Pt={},X(Pt,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),X(Pt,$,{900:"fass"}),Pt)),Ma=[1,2,3,4,5,6,7,8,9,10],Mo=Ma.concat([11,12,13,14,15,16,17,18,19,20]),Oo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ve={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vt=new Set;Object.keys(gt[V]).map(vt.add.bind(vt));Object.keys(gt[$]).map(vt.add.bind(vt));var Ro=[].concat(Bn,St(vt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ve.GROUP,Ve.SWAP_OPACITY,Ve.PRIMARY,Ve.SECONDARY]).concat(Ma.map(function(t){return"".concat(t,"x")})).concat(Mo.map(function(t){return"w-".concat(t)})),ct=Me.FontAwesomeConfig||{};function Lo(t){var e=j.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Do(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(j&&typeof j.querySelector=="function"){var zo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zo.forEach(function(t){var e=$n(t,2),n=e[0],i=e[1],a=Do(Lo(n));a!=null&&(ct[i]=a)})}var Oa={styleDefault:"solid",familyDefault:"classic",cssPrefix:_a,replacementClass:Ia,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ct.familyPrefix&&(ct.cssPrefix=ct.familyPrefix);var nt=y(y({},Oa),ct);nt.autoReplaceSvg||(nt.observeMutations=!1);var S={};Object.keys(Oa).forEach(function(t){Object.defineProperty(S,t,{enumerable:!0,set:function(n){nt[t]=n,mt.forEach(function(i){return i(S)})},get:function(){return nt[t]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(e){nt.cssPrefix=e,mt.forEach(function(n){return n(S)})},get:function(){return nt.cssPrefix}});Me.FontAwesomeConfig=S;var mt=[];function Vo(t){return mt.push(t),function(){mt.splice(mt.indexOf(t),1)}}var Pe=xn,ge={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jo(t){if(!(!t||!Ee)){var e=j.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=j.head.childNodes,i=null,a=n.length-1;a>-1;a--){var r=n[a],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=r)}return j.head.insertBefore(e,i),t}}var Uo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bt(){for(var t=12,e="";t-- >0;)e+=Uo[Math.random()*62|0];return e}function at(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Xn(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ra(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Ra(t[n]),'" ')},"").trim()}function Yt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Gn(t){return t.size!==ge.size||t.x!==ge.x||t.y!==ge.y||t.rotate!==ge.rotate||t.flipX||t.flipY}function $o(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(r," ").concat(s," ").concat(o)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:a,inner:f,path:l}}function Wo(t){var e=t.transform,n=t.width,i=n===void 0?xn:n,a=t.height,r=a===void 0?xn:a,s=t.startCentered,o=s===void 0?!1:s,f="";return o&&Aa?f+="translate(".concat(e.x/Pe-i/2,"em, ").concat(e.y/Pe-r/2,"em) "):o?f+="translate(calc(-50% + ".concat(e.x/Pe,"em), calc(-50% + ").concat(e.y/Pe,"em)) "):f+="translate(".concat(e.x/Pe,"em, ").concat(e.y/Pe,"em) "),f+="scale(".concat(e.size/Pe*(e.flipX?-1:1),", ").concat(e.size/Pe*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Ho=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function La(){var t=_a,e=Ia,n=S.cssPrefix,i=S.replacementClass,a=Ho;if(n!==t||i!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(r,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(i))}return a}var Pi=!1;function cn(){S.autoAddCss&&!Pi&&(jo(La()),Pi=!0)}var Yo={mixout:function(){return{dom:{css:La,insertCss:cn}}},hooks:function(){return{beforeDOMElementCreation:function(){cn()},beforeI2svg:function(){cn()}}}},ye=Me||{};ye[be]||(ye[be]={});ye[be].styles||(ye[be].styles={});ye[be].hooks||(ye[be].hooks={});ye[be].shims||(ye[be].shims=[]);var ue=ye[be],Da=[],Bo=function t(){j.removeEventListener("DOMContentLoaded",t),$t=1,Da.map(function(e){return e()})},$t=!1;Ee&&($t=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),$t||j.addEventListener("DOMContentLoaded",Bo));function Xo(t){!Ee||($t?setTimeout(t,0):Da.push(t))}function kt(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,a=t.children,r=a===void 0?[]:a;return typeof t=="string"?Ra(t):"<".concat(e," ").concat(Fo(i),">").concat(r.map(kt).join(""),"</").concat(e,">")}function Ni(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Go=function(e,n){return function(i,a,r,s){return e.call(n,i,a,r,s)}},mn=function(e,n,i,a){var r=Object.keys(e),s=r.length,o=a!==void 0?Go(n,a):n,f,l,c;for(i===void 0?(f=1,c=e[r[0]]):(f=0,c=i);f<s;f++)l=r[f],c=o(c,e[l],l,e);return c};function Ko(t){for(var e=[],n=0,i=t.length;n<i;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<i){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((a&1023)<<10)+(r&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Cn(t){var e=Ko(t);return e.length===1?e[0].toString(16):null}function qo(t,e){var n=t.length,i=t.charCodeAt(e),a;return i>=55296&&i<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(i-55296)*1024+a-56320+65536:i}function Mi(t){return Object.keys(t).reduce(function(e,n){var i=t[n],a=!!i.icon;return a?e[i.iconName]=i.icon:e[n]=i,e},{})}function An(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,a=i===void 0?!1:i,r=Mi(e);typeof ue.hooks.addPack=="function"&&!a?ue.hooks.addPack(t,Mi(e)):ue.styles[t]=y(y({},ue.styles[t]||{}),r),t==="fas"&&An("fa",e)}var Nt,Mt,Ot,Ge=ue.styles,Qo=ue.shims,Jo=(Nt={},X(Nt,V,Object.values(pt[V])),X(Nt,$,Object.values(pt[$])),Nt),Kn=null,za={},Va={},ja={},Ua={},Fa={},Zo=(Mt={},X(Mt,V,Object.keys(ht[V])),X(Mt,$,Object.keys(ht[$])),Mt);function es(t){return~Ro.indexOf(t)}function ts(t,e){var n=e.split("-"),i=n[0],a=n.slice(1).join("-");return i===t&&a!==""&&!es(a)?a:null}var $a=function(){var e=function(r){return mn(Ge,function(s,o,f){return s[f]=mn(o,r,{}),s},{})};za=e(function(a,r,s){if(r[3]&&(a[r[3]]=s),r[2]){var o=r[2].filter(function(f){return typeof f=="number"});o.forEach(function(f){a[f.toString(16)]=s})}return a}),Va=e(function(a,r,s){if(a[s]=s,r[2]){var o=r[2].filter(function(f){return typeof f=="string"});o.forEach(function(f){a[f]=s})}return a}),Fa=e(function(a,r,s){var o=r[2];return a[s]=s,o.forEach(function(f){a[f]=s}),a});var n="far"in Ge||S.autoFetchSvg,i=mn(Qo,function(a,r){var s=r[0],o=r[1],f=r[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:f}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:f}),a},{names:{},unicodes:{}});ja=i.names,Ua=i.unicodes,Kn=Bt(S.styleDefault,{family:S.familyDefault})};Vo(function(t){Kn=Bt(t.styleDefault,{family:S.familyDefault})});$a();function qn(t,e){return(za[t]||{})[e]}function ns(t,e){return(Va[t]||{})[e]}function je(t,e){return(Fa[t]||{})[e]}function Wa(t){return ja[t]||{prefix:null,iconName:null}}function is(t){var e=Ua[t],n=qn("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Oe(){return Kn}var Qn=function(){return{prefix:null,iconName:null,rest:[]}};function Bt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?V:n,a=ht[i][t],r=gt[i][t]||gt[i][a],s=t in ue.styles?t:null;return r||s||null}var Oi=(Ot={},X(Ot,V,Object.keys(pt[V])),X(Ot,$,Object.keys(pt[$])),Ot);function Xt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,a=i===void 0?!1:i,r=(e={},X(e,V,"".concat(S.cssPrefix,"-").concat(V)),X(e,$,"".concat(S.cssPrefix,"-").concat($)),e),s=null,o=V;(t.includes(r[V])||t.some(function(l){return Oi[V].includes(l)}))&&(o=V),(t.includes(r[$])||t.some(function(l){return Oi[$].includes(l)}))&&(o=$);var f=t.reduce(function(l,c){var u=ts(S.cssPrefix,c);if(Ge[c]?(c=Jo[o].includes(c)?_o[o][c]:c,s=c,l.prefix=c):Zo[o].indexOf(c)>-1?(s=c,l.prefix=Bt(c,{family:o})):u?l.iconName=u:c!==S.replacementClass&&c!==r[V]&&c!==r[$]&&l.rest.push(c),!a&&l.prefix&&l.iconName){var d=s==="fa"?Wa(l.iconName):{},m=je(l.prefix,l.iconName);d.prefix&&(s=null),l.iconName=d.iconName||m||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!Ge.far&&Ge.fas&&!S.autoFetchSvg&&(l.prefix="fas")}return l},Qn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&o===$&&(Ge.fass||S.autoFetchSvg)&&(f.prefix="fass",f.iconName=je(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||s==="fa")&&(f.prefix=Oe()||"fas"),f}var as=function(){function t(){po(this,t),this.definitions={}}return vo(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=y(y({},n.definitions[o]||{}),s[o]),An(o,s[o]);var f=pt[V][o];f&&An(f,s[o]),$a()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var a=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(a).map(function(r){var s=a[r],o=s.prefix,f=s.iconName,l=s.icon,c=l[2];n[o]||(n[o]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[o][u]=l)}),n[o][f]=l}),n}}]),t}(),Ri=[],Ke={},tt={},rs=Object.keys(tt);function os(t,e){var n=e.mixoutsTo;return Ri=t,Ke={},Object.keys(tt).forEach(function(i){rs.indexOf(i)===-1&&delete tt[i]}),Ri.forEach(function(i){var a=i.mixout?i.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Ft(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(s){Ke[s]||(Ke[s]=[]),Ke[s].push(r[s])})}i.provides&&i.provides(tt)}),n}function _n(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var r=Ke[t]||[];return r.forEach(function(s){e=s.apply(null,[e].concat(i))}),e}function He(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var a=Ke[t]||[];a.forEach(function(r){r.apply(null,n)})}function Se(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,e):void 0}function In(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Oe();if(!!e)return e=je(n,e)||e,Ni(Ha.definitions,n,e)||Ni(ue.styles,n,e)}var Ha=new as,ss=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,He("noAuto")},ls={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ee?(He("beforeI2svg",e),Se("pseudoElements2svg",e),Se("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,Xo(function(){us({autoReplaceSvgRoot:n}),He("watch",e)})}},fs={icon:function(e){if(e===null)return null;if(Ft(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:je(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Bt(e[0]);return{prefix:i,iconName:je(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(S.cssPrefix,"-"))>-1||e.match(Io))){var a=Xt(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Oe(),iconName:je(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var r=Oe();return{prefix:r,iconName:je(r,e)||e}}}},ie={noAuto:ss,config:S,dom:ls,parse:fs,library:Ha,findIconDefinition:In,toHtml:kt},us=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?j:n;(Object.keys(ue.styles).length>0||S.autoFetchSvg)&&Ee&&S.autoReplaceSvg&&ie.dom.i2svg({node:i})};function Gt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return kt(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Ee){var i=j.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function cs(t){var e=t.children,n=t.main,i=t.mask,a=t.attributes,r=t.styles,s=t.transform;if(Gn(s)&&n.found&&!i.found){var o=n.width,f=n.height,l={x:o/f/2,y:.5};a.style=Yt(y(y({},r),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function ms(t){var e=t.prefix,n=t.iconName,i=t.children,a=t.attributes,r=t.symbol,s=r===!0?"".concat(e,"-").concat(S.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:y(y({},a),{},{id:s}),children:i}]}]}function Jn(t){var e=t.icons,n=e.main,i=e.mask,a=t.prefix,r=t.iconName,s=t.transform,o=t.symbol,f=t.title,l=t.maskId,c=t.titleId,u=t.extra,d=t.watchable,m=d===void 0?!1:d,p=i.found?i:n,w=p.width,g=p.height,I=a==="fak",P=[S.replacementClass,r?"".concat(S.cssPrefix,"-").concat(r):""].filter(function(K){return u.classes.indexOf(K)===-1}).filter(function(K){return K!==""||!!K}).concat(u.classes).join(" "),k={children:[],attributes:y(y({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:P,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(g)})},v=I&&!~u.classes.indexOf("fa-fw")?{width:"".concat(w/g*16*.0625,"em")}:{};m&&(k.attributes[We]=""),f&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||bt())},children:[f]}),delete k.attributes.title);var b=y(y({},k),{},{prefix:a,iconName:r,main:n,mask:i,maskId:l,transform:s,symbol:o,styles:y(y({},v),u.styles)}),T=i.found&&n.found?Se("generateAbstractMask",b)||{children:[],attributes:{}}:Se("generateAbstractIcon",b)||{children:[],attributes:{}},E=T.children,U=T.attributes;return b.children=E,b.attributes=U,o?ms(b):cs(b)}function Li(t){var e=t.content,n=t.width,i=t.height,a=t.transform,r=t.title,s=t.extra,o=t.watchable,f=o===void 0?!1:o,l=y(y(y({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});f&&(l[We]="");var c=y({},s.styles);Gn(a)&&(c.transform=Wo({transform:a,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);var u=Yt(c);u.length>0&&(l.style=u);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),r&&d.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),d}function ds(t){var e=t.content,n=t.title,i=t.extra,a=y(y(y({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=Yt(i.styles);r.length>0&&(a.style=r);var s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var dn=ue.styles;function Pn(t){var e=t[0],n=t[1],i=t.slice(4),a=$n(i,1),r=a[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(Ve.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(Ve.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(Ve.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}var hs={found:!1,width:512,height:512};function gs(t,e){!Pa&&!S.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Nn(t,e){var n=e;return e==="fa"&&S.styleDefault!==null&&(e=Oe()),new Promise(function(i,a){if(Se("missingIconAbstract"),n==="fa"){var r=Wa(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&dn[e]&&dn[e][t]){var s=dn[e][t];return i(Pn(s))}gs(t,e),i(y(y({},hs),{},{icon:S.showMissingIcons&&t?Se("missingIconAbstract")||{}:{}}))})}var Di=function(){},Mn=S.measurePerformance&&Et&&Et.mark&&Et.measure?Et:{mark:Di,measure:Di},ut='FA "6.2.1"',ps=function(e){return Mn.mark("".concat(ut," ").concat(e," begins")),function(){return Ya(e)}},Ya=function(e){Mn.mark("".concat(ut," ").concat(e," ends")),Mn.measure("".concat(ut," ").concat(e),"".concat(ut," ").concat(e," begins"),"".concat(ut," ").concat(e," ends"))},Zn={begin:ps,end:Ya},Dt=function(){};function zi(t){var e=t.getAttribute?t.getAttribute(We):null;return typeof e=="string"}function vs(t){var e=t.getAttribute?t.getAttribute(Hn):null,n=t.getAttribute?t.getAttribute(Yn):null;return e&&n}function bs(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(S.replacementClass)}function ys(){if(S.autoReplaceSvg===!0)return zt.replace;var t=zt[S.autoReplaceSvg];return t||zt.replace}function Ss(t){return j.createElementNS("http://www.w3.org/2000/svg",t)}function ws(t){return j.createElement(t)}function Ba(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?Ss:ws:n;if(typeof t=="string")return j.createTextNode(t);var a=i(t.tag);Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])});var r=t.children||[];return r.forEach(function(s){a.appendChild(Ba(s,{ceFn:i}))}),a}function ks(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var zt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Ba(a),n)}),n.getAttribute(We)===null&&S.keepOriginalSource){var i=j.createComment(ks(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Xn(n).indexOf(S.replacementClass))return zt.replace(e);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(o,f){return f===S.replacementClass||f.match(a)?o.toSvg.push(f):o.toNode.push(f),o},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var s=i.map(function(o){return kt(o)}).join(`
`);n.setAttribute(We,""),n.innerHTML=s}};function Vi(t){t()}function Xa(t,e){var n=typeof e=="function"?e:Dt;if(t.length===0)n();else{var i=Vi;S.mutateApproach===Co&&(i=Me.requestAnimationFrame||Vi),i(function(){var a=ys(),r=Zn.begin("mutate");t.map(a),r(),n()})}}var ei=!1;function Ga(){ei=!0}function On(){ei=!1}var Wt=null;function ji(t){if(!!_i&&!!S.observeMutations){var e=t.treeCallback,n=e===void 0?Dt:e,i=t.nodeCallback,a=i===void 0?Dt:i,r=t.pseudoElementsCallback,s=r===void 0?Dt:r,o=t.observeMutationsRoot,f=o===void 0?j:o;Wt=new _i(function(l){if(!ei){var c=Oe();at(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!zi(u.addedNodes[0])&&(S.searchPseudoElements&&s(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&S.searchPseudoElements&&s(u.target.parentNode),u.type==="attributes"&&zi(u.target)&&~Oo.indexOf(u.attributeName))if(u.attributeName==="class"&&vs(u.target)){var d=Xt(Xn(u.target)),m=d.prefix,p=d.iconName;u.target.setAttribute(Hn,m||c),p&&u.target.setAttribute(Yn,p)}else bs(u.target)&&a(u.target)})}}),Ee&&Wt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ts(){!Wt||Wt.disconnect()}function xs(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,a){var r=a.split(":"),s=r[0],o=r.slice(1);return s&&o.length>0&&(i[s]=o.join(":").trim()),i},{})),n}function Es(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",a=Xt(Xn(t));return a.prefix||(a.prefix=Oe()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=ns(a.prefix,t.innerText)||qn(a.prefix,Cn(t.innerText))),!a.iconName&&S.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Cs(t){var e=at(t.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return S.autoA11y&&(n?e["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(i||bt()):(e["aria-hidden"]="true",e.focusable="false")),e}function As(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ge,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ui(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Es(t),i=n.iconName,a=n.prefix,r=n.rest,s=Cs(t),o=_n("parseNodeAttributes",{},t),f=e.styleParser?xs(t):[];return y({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:ge,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:f,attributes:s}},o)}var _s=ue.styles;function Ka(t){var e=S.autoReplaceSvg==="nest"?Ui(t,{styleParser:!1}):Ui(t);return~e.extra.classes.indexOf(Na)?Se("generateLayersText",t,e):Se("generateSvgReplacementMutation",t,e)}var Re=new Set;Bn.map(function(t){Re.add("fa-".concat(t))});Object.keys(ht[V]).map(Re.add.bind(Re));Object.keys(ht[$]).map(Re.add.bind(Re));Re=St(Re);function Fi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ee)return Promise.resolve();var n=j.documentElement.classList,i=function(u){return n.add("".concat(Ii,"-").concat(u))},a=function(u){return n.remove("".concat(Ii,"-").concat(u))},r=S.autoFetchSvg?Re:Bn.map(function(c){return"fa-".concat(c)}).concat(Object.keys(_s));r.includes("fa")||r.push("fa");var s=[".".concat(Na,":not([").concat(We,"])")].concat(r.map(function(c){return".".concat(c,":not([").concat(We,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=at(t.querySelectorAll(s))}catch{}if(o.length>0)i("pending"),a("complete");else return Promise.resolve();var f=Zn.begin("onTree"),l=o.reduce(function(c,u){try{var d=Ka(u);d&&c.push(d)}catch(m){Pa||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,u){Promise.all(l).then(function(d){Xa(d,function(){i("active"),i("complete"),a("pending"),typeof e=="function"&&e(),f(),c()})}).catch(function(d){f(),u(d)})})}function Is(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ka(t).then(function(n){n&&Xa([n],e)})}function Ps(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:In(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:In(a||{})),t(i,y(y({},n),{},{mask:a}))}}var Ns=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,a=i===void 0?ge:i,r=n.symbol,s=r===void 0?!1:r,o=n.mask,f=o===void 0?null:o,l=n.maskId,c=l===void 0?null:l,u=n.title,d=u===void 0?null:u,m=n.titleId,p=m===void 0?null:m,w=n.classes,g=w===void 0?[]:w,I=n.attributes,P=I===void 0?{}:I,k=n.styles,v=k===void 0?{}:k;if(!!e){var b=e.prefix,T=e.iconName,E=e.icon;return Gt(y({type:"icon"},e),function(){return He("beforeDOMElementCreation",{iconDefinition:e,params:n}),S.autoA11y&&(d?P["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(p||bt()):(P["aria-hidden"]="true",P.focusable="false")),Jn({icons:{main:Pn(E),mask:f?Pn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:T,transform:y(y({},ge),a),symbol:s,title:d,maskId:c,titleId:p,extra:{attributes:P,styles:v,classes:g}})})}},Ms={mixout:function(){return{icon:Ps(Ns)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fi,n.nodeCallback=Is,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,a=i===void 0?j:i,r=n.callback,s=r===void 0?function(){}:r;return Fi(a,s)},e.generateSvgReplacementMutation=function(n,i){var a=i.iconName,r=i.title,s=i.titleId,o=i.prefix,f=i.transform,l=i.symbol,c=i.mask,u=i.maskId,d=i.extra;return new Promise(function(m,p){Promise.all([Nn(a,o),c.iconName?Nn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var g=$n(w,2),I=g[0],P=g[1];m([n,Jn({icons:{main:I,mask:P},prefix:o,iconName:a,transform:f,symbol:l,maskId:u,title:r,titleId:s,extra:d,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var i=n.children,a=n.attributes,r=n.main,s=n.transform,o=n.styles,f=Yt(o);f.length>0&&(a.style=f);var l;return Gn(s)&&(l=Se("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),i.push(l||r.icon),{children:i,attributes:a}}}},Os={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.classes,r=a===void 0?[]:a;return Gt({type:"layer"},function(){He("beforeDOMElementCreation",{assembler:n,params:i});var s=[];return n(function(o){Array.isArray(o)?o.map(function(f){s=s.concat(f.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(St(r)).join(" ")},children:s}]})}}}},Rs={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.title,r=a===void 0?null:a,s=i.classes,o=s===void 0?[]:s,f=i.attributes,l=f===void 0?{}:f,c=i.styles,u=c===void 0?{}:c;return Gt({type:"counter",content:n},function(){return He("beforeDOMElementCreation",{content:n,params:i}),ds({content:n.toString(),title:r,extra:{attributes:l,styles:u,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(St(o))}})})}}}},Ls={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.transform,r=a===void 0?ge:a,s=i.title,o=s===void 0?null:s,f=i.classes,l=f===void 0?[]:f,c=i.attributes,u=c===void 0?{}:c,d=i.styles,m=d===void 0?{}:d;return Gt({type:"text",content:n},function(){return He("beforeDOMElementCreation",{content:n,params:i}),Li({content:n,transform:y(y({},ge),r),title:o,extra:{attributes:u,styles:m,classes:["".concat(S.cssPrefix,"-layers-text")].concat(St(l))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var a=i.title,r=i.transform,s=i.extra,o=null,f=null;if(Aa){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();o=c.width/l,f=c.height/l}return S.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Li({content:n.innerHTML,width:o,height:f,transform:r,title:a,extra:s,watchable:!0})])}}},Ds=new RegExp('"',"ug"),$i=[1105920,1112319];function zs(t){var e=t.replace(Ds,""),n=qo(e,0),i=n>=$i[0]&&n<=$i[1],a=e.length===2?e[0]===e[1]:!1;return{value:Cn(a?e[0]:e),isSecondary:i||a}}function Wi(t,e){var n="".concat(Eo).concat(e.replace(":","-"));return new Promise(function(i,a){if(t.getAttribute(n)!==null)return i();var r=at(t.children),s=r.filter(function(E){return E.getAttribute(En)===e})[0],o=Me.getComputedStyle(t,e),f=o.getPropertyValue("font-family").match(Po),l=o.getPropertyValue("font-weight"),c=o.getPropertyValue("content");if(s&&!f)return t.removeChild(s),i();if(f&&c!=="none"&&c!==""){var u=o.getPropertyValue("content"),d=~["Sharp"].indexOf(f[2])?$:V,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?gt[d][f[2].toLowerCase()]:No[d][l],p=zs(u),w=p.value,g=p.isSecondary,I=f[0].startsWith("FontAwesome"),P=qn(m,w),k=P;if(I){var v=is(w);v.iconName&&v.prefix&&(P=v.iconName,m=v.prefix)}if(P&&!g&&(!s||s.getAttribute(Hn)!==m||s.getAttribute(Yn)!==k)){t.setAttribute(n,k),s&&t.removeChild(s);var b=As(),T=b.extra;T.attributes[En]=e,Nn(P,m).then(function(E){var U=Jn(y(y({},b),{},{icons:{main:E,mask:Qn()},prefix:m,iconName:k,extra:T,watchable:!0})),K=j.createElement("svg");e==="::before"?t.insertBefore(K,t.firstChild):t.appendChild(K),K.outerHTML=U.map(function(ce){return kt(ce)}).join(`
`),t.removeAttribute(n),i()}).catch(a)}else i()}else i()})}function Vs(t){return Promise.all([Wi(t,"::before"),Wi(t,"::after")])}function js(t){return t.parentNode!==document.head&&!~Ao.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(En)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Hi(t){if(!!Ee)return new Promise(function(e,n){var i=at(t.querySelectorAll("*")).filter(js).map(Vs),a=Zn.begin("searchPseudoElements");Ga(),Promise.all(i).then(function(){a(),On(),e()}).catch(function(){a(),On(),n()})})}var Us={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Hi,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,a=i===void 0?j:i;S.searchPseudoElements&&Hi(a)}}},Yi=!1,Fs={mixout:function(){return{dom:{unwatch:function(){Ga(),Yi=!0}}}},hooks:function(){return{bootstrap:function(){ji(_n("mutationObserverCallbacks",{}))},noAuto:function(){Ts()},watch:function(n){var i=n.observeMutationsRoot;Yi?On():ji(_n("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Bi=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,a){var r=a.toLowerCase().split("-"),s=r[0],o=r.slice(1).join("-");if(s&&o==="h")return i.flipX=!0,i;if(s&&o==="v")return i.flipY=!0,i;if(o=parseFloat(o),isNaN(o))return i;switch(s){case"grow":i.size=i.size+o;break;case"shrink":i.size=i.size-o;break;case"left":i.x=i.x-o;break;case"right":i.x=i.x+o;break;case"up":i.y=i.y-o;break;case"down":i.y=i.y+o;break;case"rotate":i.rotate=i.rotate+o;break}return i},n)},$s={mixout:function(){return{parse:{transform:function(n){return Bi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var a=i.getAttribute("data-fa-transform");return a&&(n.transform=Bi(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,a=n.transform,r=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(r/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(f," ").concat(l," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:u,path:d};return{tag:"g",attributes:y({},m.outer),children:[{tag:"g",attributes:y({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:y(y({},i.icon.attributes),m.path)}]}]}}}},hn={x:0,y:0,width:"100%",height:"100%"};function Xi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ws(t){return t.tag==="g"?t.children:[t]}var Hs={hooks:function(){return{parseNodeAttributes:function(n,i){var a=i.getAttribute("data-fa-mask"),r=a?Xt(a.split(" ").map(function(s){return s.trim()})):Qn();return r.prefix||(r.prefix=Oe()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,a=n.attributes,r=n.main,s=n.mask,o=n.maskId,f=n.transform,l=r.width,c=r.icon,u=s.width,d=s.icon,m=$o({transform:f,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:y(y({},hn),{},{fill:"white"})},w=c.children?{children:c.children.map(Xi)}:{},g={tag:"g",attributes:y({},m.inner),children:[Xi(y({tag:c.tag,attributes:y(y({},c.attributes),m.path)},w))]},I={tag:"g",attributes:y({},m.outer),children:[g]},P="mask-".concat(o||bt()),k="clip-".concat(o||bt()),v={tag:"mask",attributes:y(y({},hn),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,I]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Ws(d)},v]};return i.push(b,{tag:"rect",attributes:y({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(P,")")},hn)}),{children:i,attributes:a}}}},Ys={provides:function(e){var n=!1;Me.matchMedia&&(n=Me.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:y(y({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=y(y({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:y(y({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:y(y({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:y(y({},s),{},{values:"1;0;1;1;0;1;"})}),i.push(o),i.push({tag:"path",attributes:y(y({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:y(y({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:y(y({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:y(y({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},Bs={hooks:function(){return{parseNodeAttributes:function(n,i){var a=i.getAttribute("data-fa-symbol"),r=a===null?!1:a===""?!0:a;return n.symbol=r,n}}}},Xs=[Yo,Ms,Os,Rs,Ls,Us,Fs,$s,Hs,Ys,Bs];os(Xs,{mixoutsTo:ie});ie.noAuto;ie.config;var qa=ie.library;ie.dom;ie.parse;var ti=ie.findIconDefinition;ie.toHtml;ie.icon;ie.layer;ie.text;ie.counter;function Gi(t){return Object.prototype.toString.call(t)==="[object Date]"}function Rn(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const i=e.map((a,r)=>Rn(t[r],a));return a=>i.map(r=>r(a))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(Gi(t)&&Gi(e)){t=t.getTime(),e=e.getTime();const r=e-t;return s=>new Date(t+s*r)}const i=Object.keys(e),a={};return i.forEach(r=>{a[r]=Rn(t[r],e[r])}),r=>{const s={};return i.forEach(o=>{s[o]=a[o](r)}),s}}if(n==="number"){const i=e-t;return a=>t+a*i}throw new Error(`Cannot interpolate ${n} values`)}function gn(t,e={}){const n=ur(t);let i,a=t;function r(s,o){if(t==null)return n.set(t=s),Promise.resolve();a=s;let f=i,l=!1,{delay:c=0,duration:u=400,easing:d=ia,interpolate:m=Rn}=mi(mi({},e),o);if(u===0)return f&&(f.abort(),f=null),n.set(t=a),Promise.resolve();const p=er()+c;let w;return i=tr(g=>{if(g<p)return!0;l||(w=m(t,s),typeof u=="function"&&(u=u(t,s)),l=!0),f&&(f.abort(),f=null);const I=g-p;return I>u?(n.set(t=s),!1):(n.set(t=w(d(I/u))),!0)}),i.promise}return{set:r,update:(s,o)=>r(s(a,t),o),subscribe:n.subscribe}}function Gs(t){let e,n,i,a,r,s,o,f,l,c;return i=new it({props:{data:t[2],scale:5,class:"drop-shadow-lg"}}),{c(){e=R("div"),n=R("div"),we(i.$$.fragment),a=ee(),r=R("div"),s=Fe(t[0]),o=ee(),f=R("div"),l=Fe(t[1]),this.h()},l(u){e=L(u,"DIV",{class:!0});var d=D(e);n=L(d,"DIV",{class:!0});var m=D(n);ke(i.$$.fragment,m),m.forEach(C),a=te(d),r=L(d,"DIV",{class:!0});var p=D(r);s=$e(p,t[0]),p.forEach(C),o=te(d),f=L(d,"DIV",{class:!0});var w=D(f);l=$e(w,t[1]),w.forEach(C),d.forEach(C),this.h()},h(){O(n,"class","flex justify-center items-center gap-8"),O(r,"class","text-3xl font-bold flex justify-center items-center m-4"),O(f,"class","text-ellipsis text-xl max-h-24 overflow-hidden text-center"),O(e,"class","grid [grid-template-rows:_2fr_1fr_2fr] h-72 w-80 justify-center items-center p-4 border border-zinc-700 bg-zinc-300 text-zinc-700 dark:text-zinc-300 dark:border-zinc-600 dark:bg-zinc-500 m-2 rounded-md drop-shadow-md hover:drop-shadow-2xl shadow-zinc-800 dark:shadow-zinc-900")},m(u,d){q(u,e,d),M(e,n),Te(i,n,null),M(e,a),M(e,r),M(r,s),M(e,o),M(e,f),M(f,l),c=!0},p(u,[d]){(!c||d&1)&&Vt(s,u[0]),(!c||d&2)&&Vt(l,u[1])},i(u){c||(z(i.$$.fragment,u),c=!0)},o(u){W(i.$$.fragment,u),c=!1},d(u){u&&C(e),xe(i)}}}function Ks(t,e,n){qa.add(ra);let{title:i}=e,{text:a}=e,{icon:r}=e,{height:s=0}=e,{width:o=0}=e;const f=ti({prefix:"fas",iconName:r});return t.$$set=l=>{"title"in l&&n(0,i=l.title),"text"in l&&n(1,a=l.text),"icon"in l&&n(3,r=l.icon),"height"in l&&n(4,s=l.height),"width"in l&&n(5,o=l.width)},[i,a,f,r,s,o]}class qs extends Ln{constructor(e){super(),Dn(this,e,Ks,Gs,zn,{title:0,text:1,icon:3,height:4,width:5})}}const{window:Qs}=aa;function Ki(t){let e,n,i,a,r,s,o,f,l,c,u,d,m,p,w,g,I,P,k=(t[4]||t[3]&&!t[5])&&qi(t);return l=new it({props:{data:t[13],scale:t[12],class:"drop-shadow-lg"}}),{c(){e=R("div"),i=ee(),a=R("div"),r=R("div"),s=R("div"),k&&k.c(),o=ee(),f=R("div"),we(l.$$.fragment),c=ee(),u=R("div"),d=Fe(t[0]),m=ee(),p=R("div"),w=Fe(t[1]),this.h()},l(v){e=L(v,"DIV",{class:!0}),D(e).forEach(C),i=te(v),a=L(v,"DIV",{class:!0,style:!0});var b=D(a);r=L(b,"DIV",{class:!0});var T=D(r);s=L(T,"DIV",{class:!0});var E=D(s);k&&k.l(E),E.forEach(C),o=te(T),f=L(T,"DIV",{class:!0});var U=D(f);ke(l.$$.fragment,U),U.forEach(C),c=te(T),u=L(T,"DIV",{class:!0});var K=D(u);d=$e(K,t[0]),K.forEach(C),m=te(T),p=L(T,"DIV",{class:!0});var ce=D(p);w=$e(ce,t[1]),ce.forEach(C),T.forEach(C),b.forEach(C),this.h()},h(){O(e,"class","fixed top-0 left-0 w-full h-full bg-zinc-900 opacity-50 blur-2xl z-[999]"),O(s,"class","place-self-end [transition:_height_200ms] overflow-hidden"),_(s,"h-0",t[5]||!t[3]),_(s,"h-8",t[4]||t[3]),O(f,"class","flex justify-center items-center gap-8"),O(u,"class","text-3xl font-bold flex justify-center items-center m-4"),O(p,"class","text-ellipsis text-xl text-center max-w-[calc(var(--card-width)_-_2rem)] [transition:_margin_50ms]"),_(p,"m-8",t[3]&&!t[5]),_(p,"overflow-hidden",t[5]||!t[3]),O(r,"class","grid p-4 lg:p-2 overflow-hidden h-[var(--card-height)] w-[var(--card-width)] border border-zinc-700 bg-zinc-300 text-zinc-700 dark:text-zinc-300 dark:border-zinc-600 dark:bg-zinc-500 rounded-md [transition:_grid-template-rows_200ms] shadow-md hover:shadow-2xl shadow-zinc-800 dark:shadow-zinc-900"),_(r,"m-2",t[5]||!t[3]),_(r,"[grid-template-rows:_0px_2fr_1fr_2fr]",t[5]||!t[3]),_(r,"[grid-template-rows:_2rem_2fr_1fr_2fr]",t[4]||t[3]),O(a,"class","fixed z-[1000] grid items-stretch bg-transparent left-[var(--card-left)] top-[var(--card-top)] "),oe(a,"--card-left",t[10].left+"px"),oe(a,"--card-top",t[10].top+"px"),oe(a,"--card-height",t[11].height+"px"),oe(a,"--card-width",t[11].width+"px")},m(v,b){q(v,e,b),q(v,i,b),q(v,a,b),M(a,r),M(r,s),k&&k.m(s,null),M(r,o),M(r,f),Te(l,f,null),M(r,c),M(r,u),M(u,d),M(r,m),M(r,p),M(p,w),g=!0,I||(P=[he(e,"keypress",t[16]),he(e,"click",t[15])],I=!0)},p(v,b){v[4]||v[3]&&!v[5]?k?(k.p(v,b),b&56&&z(k,1)):(k=qi(v),k.c(),z(k,1),k.m(s,null)):k&&(Be(),W(k,1,1,()=>{k=null}),Xe()),(!g||b&40)&&_(s,"h-0",v[5]||!v[3]),(!g||b&24)&&_(s,"h-8",v[4]||v[3]);const T={};b&4096&&(T.scale=v[12]),l.$set(T),(!g||b&1)&&Vt(d,v[0]),(!g||b&2)&&Vt(w,v[1]),(!g||b&40)&&_(p,"m-8",v[3]&&!v[5]),(!g||b&40)&&_(p,"overflow-hidden",v[5]||!v[3]),(!g||b&40)&&_(r,"m-2",v[5]||!v[3]),(!g||b&40)&&_(r,"[grid-template-rows:_0px_2fr_1fr_2fr]",v[5]||!v[3]),(!g||b&24)&&_(r,"[grid-template-rows:_2rem_2fr_1fr_2fr]",v[4]||v[3]),(!g||b&1024)&&oe(a,"--card-left",v[10].left+"px"),(!g||b&1024)&&oe(a,"--card-top",v[10].top+"px"),(!g||b&2048)&&oe(a,"--card-height",v[11].height+"px"),(!g||b&2048)&&oe(a,"--card-width",v[11].width+"px")},i(v){g||(pe(()=>{n||(n=J(e,Z,{},!0)),n.run(1)}),z(k),z(l.$$.fragment,v),g=!0)},o(v){n||(n=J(e,Z,{},!1)),n.run(0),W(k),W(l.$$.fragment,v),g=!1},d(v){v&&C(e),v&&n&&n.end(),v&&C(i),v&&C(a),k&&k.d(),xe(l),I=!1,Vn(P)}}}function qi(t){let e,n,i,a,r,s;return n=new it({props:{data:ti({prefix:"fas",iconName:"circle-xmark"}),scale:2}}),{c(){e=R("button"),we(n.$$.fragment),this.h()},l(o){e=L(o,"BUTTON",{type:!0});var f=D(e);ke(n.$$.fragment,f),f.forEach(C),this.h()},h(){O(e,"type","button")},m(o,f){q(o,e,f),Te(n,e,null),a=!0,r||(s=he(e,"click",t[15]),r=!0)},p:ne,i(o){a||(z(n.$$.fragment,o),pe(()=>{i||(i=J(e,Z,{duration:200},!0)),i.run(1)}),a=!0)},o(o){W(n.$$.fragment,o),i||(i=J(e,Z,{duration:200},!1)),i.run(0),a=!1},d(o){o&&C(e),xe(n),o&&i&&i.end(),r=!1,s()}}}function Js(t){let e,n,i,a,r,s,o,f;i=new qs({props:{title:t[0],text:t[1],icon:t[2]}});let l=(t[4]||t[3])&&Ki(t);return{c(){e=R("button"),n=R("div"),we(i.$$.fragment),a=ee(),l&&l.c(),r=di(),this.h()},l(c){e=L(c,"BUTTON",{class:!0,type:!0});var u=D(e);n=L(u,"DIV",{class:!0});var d=D(n);ke(i.$$.fragment,d),d.forEach(C),u.forEach(C),a=te(c),l&&l.l(c),r=di(),this.h()},h(){O(n,"class","[grid-column:1/1] [grid-row:1/1] flex justify-center items-center"),O(e,"class","grid grid-cols-1 grid-rows-1 justify-center items-center"),O(e,"type","button")},m(c,u){q(c,e,u),M(e,n),Te(i,n,null),t[20](n),q(c,a,u),l&&l.m(c,u),q(c,r,u),s=!0,o||(f=[he(Qs,"scroll",t[17]),he(e,"click",t[14])],o=!0)},p(c,[u]){const d={};u&1&&(d.title=c[0]),u&2&&(d.text=c[1]),u&4&&(d.icon=c[2]),i.$set(d),c[4]||c[3]?l?(l.p(c,u),u&24&&z(l,1)):(l=Ki(c),l.c(),z(l,1),l.m(r.parentNode,r)):l&&(Be(),W(l,1,1,()=>{l=null}),Xe())},i(c){s||(z(i.$$.fragment,c),z(l),s=!0)},o(c){W(i.$$.fragment,c),W(l),s=!1},d(c){c&&C(e),xe(i),t[20](null),c&&C(a),l&&l.d(c),c&&C(r),o=!1,Vn(f)}}}function Zs(t,e,n){let i,a=ne,r=()=>(a(),a=Qt(T,x=>n(10,i=x)),T),s,o=ne,f=()=>(o(),o=Qt(E,x=>n(11,s=x)),E),l,c=ne,u=()=>(c(),c=Qt(U,x=>n(12,l=x)),U);t.$$.on_destroy.push(()=>a()),t.$$.on_destroy.push(()=>o()),t.$$.on_destroy.push(()=>c()),qa.add(ra);let{title:d}=e,{text:m}=e,{icon:p}=e,{tailwindBreakpoints:w={sm:640,md:768,lg:1024,xl:1280,"2xl":1536}}=e,{tailwindSizing:g={.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"}}=e;const I=()=>{const x=window.innerWidth;return x>=w.lg?{size:{width:w.sm,height:window.innerHeight*.9},position:{left:(window.innerWidth-w.sm)/2,top:(window.innerHeight-window.innerHeight*.9)/2}}:{size:{width:x,height:window.innerHeight},position:{left:0,top:0}}};let P=!1,k=!1,v=!1,b,T,E,U;const K=ti({prefix:"fas",iconName:p}),ce=async()=>{r(n(7,T=gn({left:b.getBoundingClientRect().left-Ie(g[2]),top:b.getBoundingClientRect().top-Ie(g[2])},{duration:200,easing:un}))),f(n(8,E=gn({width:b.getBoundingClientRect().width-Ie(g[4]),height:b.getBoundingClientRect().height-Ie(g[4])},{duration:200,easing:un}))),u(n(9,U=gn(5,{duration:200,easing:un}))),n(3,P=!0),n(4,k=!0),await Promise.allSettled([T.set(I().position),E.set(I().size),U.set(8)]),n(4,k=!1)},Ye=async()=>{n(5,v=!0),await Promise.allSettled([T.set({left:b.getBoundingClientRect().left+Ie(g[2]),top:b.getBoundingClientRect().top-Ie(g[2])},{duration:200,easing:fn}),E.set({width:b.getBoundingClientRect().width-Ie(g[4]),height:b.getBoundingClientRect().height-Ie(g[4])},{duration:200,easing:fn}),U.set(5,{duration:200,easing:fn})]),n(5,v=!1),n(3,P=!1)},ae=async x=>{x.key==="Escape"&&await Ye()},re=x=>{(P||k)&&(x.preventDefault(),x.stopPropagation())};function Tt(x){Rt[x?"unshift":"push"](()=>{b=x,n(6,b)})}return t.$$set=x=>{"title"in x&&n(0,d=x.title),"text"in x&&n(1,m=x.text),"icon"in x&&n(2,p=x.icon),"tailwindBreakpoints"in x&&n(18,w=x.tailwindBreakpoints),"tailwindSizing"in x&&n(19,g=x.tailwindSizing)},[d,m,p,P,k,v,b,T,E,U,i,s,l,K,ce,Ye,ae,re,w,g,Tt]}class el extends Ln{constructor(e){super(),Dn(this,e,Zs,Js,zn,{title:0,text:1,icon:2,tailwindBreakpoints:18,tailwindSizing:19})}}const{document:Qi,window:dt}=aa;function Ji(t,e,n){const i=t.slice();return i[21]=e[n].title,i[22]=e[n].text,i[23]=e[n].icon,i}function tl(t){let e;return{c(){e=Fe("Sign Up!")},l(n){e=$e(n,"Sign Up!")},m(n,i){q(n,e,i)},p:ne,i:ne,o:ne,d(n){n&&C(e)}}}function nl(t){let e,n;return e=new it({props:{data:lr,scale:1.8,label:"sign up button"}}),{c(){we(e.$$.fragment)},l(i){ke(e.$$.fragment,i)},m(i,a){Te(e,i,a),n=!0},p:ne,i(i){n||(z(e.$$.fragment,i),n=!0)},o(i){W(e.$$.fragment,i),n=!1},d(i){xe(e,i)}}}function il(t){let e;return{c(){e=Fe("Login")},l(n){e=$e(n,"Login")},m(n,i){q(n,e,i)},p:ne,i:ne,o:ne,d(n){n&&C(e)}}}function al(t){let e,n;return e=new it({props:{data:fr,scale:1.8,label:"log in button"}}),{c(){we(e.$$.fragment)},l(i){ke(e.$$.fragment,i)},m(i,a){Te(e,i,a),n=!0},p:ne,i(i){n||(z(e.$$.fragment,i),n=!0)},o(i){W(e.$$.fragment,i),n=!1},d(i){xe(e,i)}}}function Zi(t){let e,n,i,a,r,s;return n=new it({props:{data:sr,scale:2}}),{c(){e=R("button"),we(n.$$.fragment),this.h()},l(o){e=L(o,"BUTTON",{class:!0,type:!0});var f=D(e);ke(n.$$.fragment,f),f.forEach(C),this.h()},h(){O(e,"class","grid justify-center items-center text-zinc-800 dark:text-zinc-300 h-8"),O(e,"type","button")},m(o,f){q(o,e,f),Te(n,e,null),a=!0,r||(s=he(e,"click",t[15]),r=!0)},p:ne,i(o){a||(z(n.$$.fragment,o),pe(()=>{i||(i=J(e,Z,{},!0)),i.run(1)}),a=!0)},o(o){W(n.$$.fragment,o),i||(i=J(e,Z,{},!1)),i.run(0),a=!1},d(o){o&&C(e),xe(n),o&&i&&i.end(),r=!1,s()}}}function ea(t){let e,n;return e=new el({props:{title:t[21],text:t[22],icon:t[23],tailwindBreakpoints:t[11],tailwindSizing:t[12]}}),{c(){we(e.$$.fragment)},l(i){ke(e.$$.fragment,i)},m(i,a){Te(e,i,a),n=!0},p(i,a){const r={};a&1&&(r.title=i[21]),a&1&&(r.text=i[22]),a&1&&(r.icon=i[23]),e.$set(r)},i(i){n||(z(e.$$.fragment,i),n=!0)},o(i){W(e.$$.fragment,i),n=!1},d(i){xe(e,i)}}}function rl(t){var si,li,fi;let e,n,i,a,r,s,o,f,l,c,u,d,m,p,w,g,I,P,k,v,b,T,E,U,K,ce=t[3]>350&&((li=((si=t[7])==null?void 0:si.getBoundingClientRect().top)===0?void 0:t[7].getBoundingClientRect().top)!=null?li:t[5])>=t[5],Ye,ae,re,Tt,x,Kt,ni;pe(t[13]),o=new or({props:{height:t[3]>198?((fi=t[3])!=null?fi:t[1])/3:70}});const ii=[nl,tl],Ce=[];function ai(h,A){return h[3]<=265&&hi&&h[11].lg>=h[2]?0:1}g=ai(t),I=Ce[g]=ii[g](t);const ri=[al,il],Ae=[];function oi(h,A){return h[3]<=265&&hi&&h[11].lg>=h[2]?0:1}b=oi(t),T=Ae[b]=ri[b](t);let H=ce&&Zi(t),Le=t[0].features,F=[];for(let h=0;h<Le.length;h+=1)F[h]=ea(Ji(t,Le,h));const Qa=h=>W(F[h],1,1,()=>{F[h]=null});return{c(){e=ee(),n=R("div"),i=ee(),a=R("div"),r=R("div"),s=R("a"),we(o.$$.fragment),f=ee(),l=R("h1"),c=Fe("B\xE0 H\u1ECFa"),d=ee(),m=R("div"),p=R("a"),w=R("button"),I.c(),k=ee(),v=R("a"),T.c(),K=ee(),H&&H.c(),Ye=ee(),ae=R("div"),re=R("div");for(let h=0;h<F.length;h+=1)F[h].c();this.h()},l(h){nr("svelte-1doabpd",Qi.head).forEach(C),e=te(h),n=L(h,"DIV",{class:!0}),D(n).forEach(C),i=te(h),a=L(h,"DIV",{});var le=D(a);r=L(le,"DIV",{class:!0,style:!0});var me=D(r);s=L(me,"A",{class:!0,href:!0});var _e=D(s);ke(o.$$.fragment,_e),f=te(_e),l=L(_e,"H1",{class:!0});var rt=D(l);c=$e(rt,"B\xE0 H\u1ECFa"),rt.forEach(C),_e.forEach(C),d=te(me),m=L(me,"DIV",{class:!0});var De=D(m);p=L(De,"A",{href:!0,title:!0});var ot=D(p);w=L(ot,"BUTTON",{class:!0});var st=D(w);I.l(st),st.forEach(C),ot.forEach(C),k=te(De),v=L(De,"A",{href:!0,class:!0,title:!0});var G=D(v);T.l(G),G.forEach(C),De.forEach(C),K=te(me),H&&H.l(me),me.forEach(C),Ye=te(le),ae=L(le,"DIV",{class:!0,style:!0});var lt=D(ae);re=L(lt,"DIV",{class:!0});var ui=D(re);for(let qt=0;qt<F.length;qt+=1)F[qt].l(ui);ui.forEach(C),lt.forEach(C),le.forEach(C),this.h()},h(){var h;Qi.title="Home | B\xE0 H\u1ECFa Smart Smokers",O(n,"class","fixed inset-y-auto inset-x-0 h-2 bg-slate-700 dark:bg-slate-300 z-[1000] scale-0"),O(l,"class","text-3xl text-zinc-800 dark:text-zinc-300 font-bold font-sans sr-only"),O(s,"class","flex justify-center transition-all"),O(s,"href","/"),_(s,"p-5",t[3]>210),O(w,"class","h-16 lg:w-48 bg-orange-500 text-white text-2xl rounded-full shadow-lg transition-all flex justify-center items-center"),_(w,"w-16",t[3]<=265),_(w,"w-48",t[3]>265),O(p,"href","/signup"),O(p,"title","sign up"),O(v,"href","/login"),O(v,"class","text-orange-500 drop-shadow-sm text-2xl my-2 mx-8 lg:m-4 transition-all"),O(v,"title","log in"),O(m,"class","flex items-center transition-all"),_(m,"justify-center",t[3]>210),_(m,"justify-end",t[3]<=210),_(m,"flex-col",t[3]>265),O(r,"class","w-full p-4 bg-zinc-500 dark:bg-zinc-700 grid mb-8 fixed z-50"),oe(r,"--header-height",((h=t[3])!=null?h:t[1])+"px"),_(r,"grid-cols-1",t[3]>210),_(r,"grid-cols-2",t[3]<=210),_(r,"[grid-template-rows:_2fr_1fr_2rem]",t[3]>210),_(r,"grid-rows-1",t[3]<=210),_(r,"justify-between",t[3]<=210),_(r,"[height:var(--header-height)]",t[3]>210),_(r,"h-24",t[3]<=210),O(re,"class","grid [grid-template-columns:_repeat(auto-fill,_minmax(20rem,_1fr))] items-start justify-center"),pe(()=>t[17].call(re)),O(ae,"class","w-full py-4 grid items-start [margin-top:var(--header-height)] z-0"),oe(ae,"--header-height",t[1]+"px")},m(h,A){q(h,e,A),q(h,n,A),t[14](n),q(h,i,A),q(h,a,A),M(a,r),M(r,s),Te(o,s,null),M(s,f),M(s,l),M(l,c),M(r,d),M(r,m),M(m,p),M(p,w),Ce[g].m(w,null),M(m,k),M(m,v),Ae[b].m(v,null),M(r,K),H&&H.m(r,null),t[16](r),M(a,Ye),M(a,ae),M(ae,re);for(let le=0;le<F.length;le+=1)F[le].m(re,null);Tt=ir(re,t[17].bind(re)),t[18](ae),x=!0,Kt||(ni=[he(dt,"resize",t[10]),he(dt,"scroll",t[9]),he(dt,"resize",t[13]),he(ae,"scroll",t[9])],Kt=!0)},p(h,[A]){var rt,De,ot,st;const le={};A&10&&(le.height=h[3]>198?((rt=h[3])!=null?rt:h[1])/3:70),o.$set(le),(!x||A&8)&&_(s,"p-5",h[3]>210);let me=g;g=ai(h),g===me?Ce[g].p(h,A):(Be(),W(Ce[me],1,1,()=>{Ce[me]=null}),Xe(),I=Ce[g],I?I.p(h,A):(I=Ce[g]=ii[g](h),I.c()),z(I,1),I.m(w,null)),(!x||A&8)&&_(w,"w-16",h[3]<=265),(!x||A&8)&&_(w,"w-48",h[3]>265);let _e=b;if(b=oi(h),b===_e?Ae[b].p(h,A):(Be(),W(Ae[_e],1,1,()=>{Ae[_e]=null}),Xe(),T=Ae[b],T?T.p(h,A):(T=Ae[b]=ri[b](h),T.c()),z(T,1),T.m(v,null)),(!x||A&8)&&_(m,"justify-center",h[3]>210),(!x||A&8)&&_(m,"justify-end",h[3]<=210),(!x||A&8)&&_(m,"flex-col",h[3]>265),A&168&&(ce=h[3]>350&&((ot=((De=h[7])==null?void 0:De.getBoundingClientRect().top)===0?void 0:h[7].getBoundingClientRect().top)!=null?ot:h[5])>=h[5]),ce?H?(H.p(h,A),A&168&&z(H,1)):(H=Zi(h),H.c(),z(H,1),H.m(r,null)):H&&(Be(),W(H,1,1,()=>{H=null}),Xe()),(!x||A&10)&&oe(r,"--header-height",((st=h[3])!=null?st:h[1])+"px"),(!x||A&8)&&_(r,"grid-cols-1",h[3]>210),(!x||A&8)&&_(r,"grid-cols-2",h[3]<=210),(!x||A&8)&&_(r,"[grid-template-rows:_2fr_1fr_2rem]",h[3]>210),(!x||A&8)&&_(r,"grid-rows-1",h[3]<=210),(!x||A&8)&&_(r,"justify-between",h[3]<=210),(!x||A&8)&&_(r,"[height:var(--header-height)]",h[3]>210),(!x||A&8)&&_(r,"h-24",h[3]<=210),A&6145){Le=h[0].features;let G;for(G=0;G<Le.length;G+=1){const lt=Ji(h,Le,G);F[G]?(F[G].p(lt,A),z(F[G],1)):(F[G]=ea(lt),F[G].c(),z(F[G],1),F[G].m(re,null))}for(Be(),G=Le.length;G<F.length;G+=1)Qa(G);Xe()}(!x||A&2)&&oe(ae,"--header-height",h[1]+"px")},i(h){if(!x){z(o.$$.fragment,h),pe(()=>{u||(u=J(s,Z,{},!0)),u.run(1)}),z(I),pe(()=>{P||(P=J(p,Z,{},!0)),P.run(1)}),z(T),pe(()=>{E||(E=J(v,Z,{},!0)),E.run(1)}),pe(()=>{U||(U=J(m,Z,{},!0)),U.run(1)}),z(H);for(let A=0;A<Le.length;A+=1)z(F[A]);x=!0}},o(h){W(o.$$.fragment,h),u||(u=J(s,Z,{},!1)),u.run(0),W(I),P||(P=J(p,Z,{},!1)),P.run(0),W(T),E||(E=J(v,Z,{},!1)),E.run(0),U||(U=J(m,Z,{},!1)),U.run(0),W(H),F=F.filter(Boolean);for(let A=0;A<F.length;A+=1)W(F[A]);x=!1},d(h){h&&C(e),h&&C(n),t[14](null),h&&C(i),h&&C(a),xe(o),h&&u&&u.end(),Ce[g].d(),h&&P&&P.end(),Ae[b].d(),h&&E&&E.end(),h&&U&&U.end(),H&&H.d(),t[16](null),ar(F,h),Tt(),t[18](null),Kt=!1,Vn(ni)}}}function ol(t,e,n){let i,a,r,s,o,f,l,c;rr(()=>{Fr(window),go(window),n(3,r=i)});let u=!0;const d=E=>{u&&requestAnimationFrame(()=>{let U=l.getBoundingClientRect().top;n(3,r=U)}),u=!u},m=()=>{n(1,i=window.innerHeight),window.scrollY===0&&n(3,r=i)};let{data:p}=e;const w=p.tailwindBreakpoints,g=p.tailwindSizing;function I(){n(1,i=dt.innerHeight),n(2,a=dt.innerWidth)}function P(E){Rt[E?"unshift":"push"](()=>{c=E,n(8,c)})}const k=()=>window.scroll({left:0,top:l.getBoundingClientRect().top,behavior:"smooth"});function v(E){Rt[E?"unshift":"push"](()=>{f=E,n(6,f)})}function b(){s=this.clientHeight,n(4,s)}function T(E){Rt[E?"unshift":"push"](()=>{l=E,n(7,l)})}return t.$$set=E=>{"data"in E&&n(0,p=E.data)},n(5,o=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)),[p,i,a,r,s,o,f,l,c,d,m,w,g,I,P,k,v,b,T]}class cl extends Ln{constructor(e){super(),Dn(this,e,ol,rl,zn,{data:0})}}export{cl as default};
