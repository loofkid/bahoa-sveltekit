import{_ as fa,C as ga,r as oi,F as ma,a as pa,b as ya,c as va,L as oe,d as wa,e as ae,S as Ta,f as Ea}from"./index-e5b3cc81-00185210.js";var Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,ms=ms||{},E=Ia||self;function ze(){}function hn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function we(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Sa(e){return Object.prototype.hasOwnProperty.call(e,Fn)&&e[Fn]||(e[Fn]=++Ca)}var Fn="closure_uid_"+(1e9*Math.random()>>>0),Ca=0;function Aa(e,t,n){return e.call.apply(e.bind,arguments)}function ka(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function W(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W=Aa:W=ka,W.apply(null,arguments)}function Fe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function wt(){this.s=this.s,this.o=this.o}var Da=0;wt.prototype.s=!1;wt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Da!=0)&&Sa(this)};wt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ps(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function ai(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(hn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var Na=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",ze,t),E.removeEventListener("test",ze,t)}catch{}return e}();function He(e){return/^[\s\xa0]*$/.test(e)}var ui=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Vn(e,t){return e<t?-1:e>t?1:0}function ln(){var e=E.navigator;return e&&(e=e.userAgent)?e:""}function it(e){return ln().indexOf(e)!=-1}function ys(e){return ys[" "](e),e}ys[" "]=ze;function ba(e){var t=_a;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Ra=it("Opera"),Vt=it("Trident")||it("MSIE"),Yi=it("Edge"),Qn=Yi||Vt,Ji=it("Gecko")&&!(ln().toLowerCase().indexOf("webkit")!=-1&&!it("Edge"))&&!(it("Trident")||it("MSIE"))&&!it("Edge"),xa=ln().toLowerCase().indexOf("webkit")!=-1&&!it("Edge");function Zi(){var e=E.document;return e?e.documentMode:void 0}var We;t:{var Pn="",Un=function(){var e=ln();if(Ji)return/rv:([^\);]+)(\)|;)/.exec(e);if(Yi)return/Edge\/([\d\.]+)/.exec(e);if(Vt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(xa)return/WebKit\/(\S+)/.exec(e);if(Ra)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Un&&(Pn=Un?Un[1]:""),Vt){var qn=Zi();if(qn!=null&&qn>parseFloat(Pn)){We=String(qn);break t}}We=Pn}var _a={};function La(){return ba(function(){let e=0;const t=ui(String(We)).split("."),n=ui("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Vn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Vn(i[2].length==0,r[2].length==0)||Vn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var zn;if(E.document&&Vt){var ci=Zi();zn=ci||parseInt(We,10)||void 0}else zn=void 0;var Ma=zn;function ue(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ji){t:{try{ys(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Oa[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ue.X.h.call(this)}}K(ue,X);var Oa={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Te="closure_listenable_"+(1e6*Math.random()|0),Fa=0;function Va(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++Fa,this.ba=this.ea=!1}function dn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function vs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function tr(e){const t={};for(const n in e)t[n]=e[n];return t}const hi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function er(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<hi.length;r++)n=hi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function fn(e){this.src=e,this.g={},this.h=0}fn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Wn(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Va(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function Hn(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Xi(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(dn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Wn(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var ws="closure_lm_"+(1e6*Math.random()|0),$n={};function nr(e,t,n,s,i){if(s&&s.once)return ir(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)nr(e,t[r],n,s,i);return null}return n=Is(n),e&&e[Te]?e.N(t,n,we(s)?!!s.capture:!!s,i):sr(e,t,n,!1,s,i)}function sr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=we(i)?!!i.capture:!!i,a=Es(e);if(a||(e[ws]=a=new fn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Pa(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Na||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(or(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Pa(){function e(n){return t.call(e.src,e.listener,n)}const t=Ua;return e}function ir(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)ir(e,t[r],n,s,i);return null}return n=Is(n),e&&e[Te]?e.O(t,n,we(s)?!!s.capture:!!s,i):sr(e,t,n,!0,s,i)}function rr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)rr(e,t[r],n,s,i);else s=we(s)?!!s.capture:!!s,n=Is(n),e&&e[Te]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Wn(r,n,s,i),-1<n&&(dn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Es(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Wn(t,n,s,i)),(n=-1<e?t[e]:null)&&Ts(n))}function Ts(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Te])Hn(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(or(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Es(t))?(Hn(n,e),n.h==0&&(n.src=null,t[ws]=null)):dn(e)}}}function or(e){return e in $n?$n[e]:$n[e]="on"+e}function Ua(e,t){if(e.ba)e=!0;else{t=new ue(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Ts(e),e=n.call(s,t)}return e}function Es(e){return e=e[ws],e instanceof fn?e:null}var Bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Is(e){return typeof e=="function"?e:(e[Bn]||(e[Bn]=function(t){return e.handleEvent(t)}),e[Bn])}function $(){wt.call(this),this.i=new fn(this),this.P=this,this.I=null}K($,wt);$.prototype[Te]=!0;$.prototype.removeEventListener=function(e,t,n,s){rr(this,e,t,n,s)};function j(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var i=t;t=new X(s,e),er(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ve(o,s,!0,t)&&i}if(o=t.g=e,i=Ve(o,s,!0,t)&&i,i=Ve(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ve(o,s,!1,t)&&i}$.prototype.M=function(){if($.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)dn(n[s]);delete e.g[t],e.h--}}this.I=null};$.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};$.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ve(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&Hn(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ss=E.JSON.stringify;function qa(){var e=cr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class $a{constructor(){this.h=this.g=null}add(t,n){const s=ar.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ar=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Ba,e=>e.reset());class Ba{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ja(e){E.setTimeout(()=>{throw e},0)}function ur(e,t){Xn||Ka(),Yn||(Xn(),Yn=!0),cr.add(e,t)}var Xn;function Ka(){var e=E.Promise.resolve(void 0);Xn=function(){e.then(Ga)}}var Yn=!1,cr=new $a;function Ga(){for(var e;e=qa();){try{e.h.call(e.g)}catch(n){ja(n)}var t=ar;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Yn=!1}function gn(e,t){$.call(this),this.h=e||1,this.g=t||E,this.j=W(this.lb,this),this.l=Date.now()}K(gn,$);m=gn.prototype;m.ca=!1;m.R=null;m.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),j(this,"tick"),this.ca&&(Cs(this),this.start()))}};m.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cs(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}m.M=function(){gn.X.M.call(this),Cs(this),delete this.g};function As(e,t,n){if(typeof e=="function")n&&(e=W(e,n));else if(e&&typeof e.handleEvent=="function")e=W(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function hr(e){e.g=As(()=>{e.g=null,e.i&&(e.i=!1,hr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Qa extends wt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:hr(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(e){wt.call(this),this.h=e,this.g={}}K(ce,wt);var li=[];function lr(e,t,n,s){Array.isArray(n)||(n&&(li[0]=n.toString()),n=li);for(var i=0;i<n.length;i++){var r=nr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function dr(e){vs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ts(t)},e),e.g={}}ce.prototype.M=function(){ce.X.M.call(this),dr(this)};ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mn(){this.g=!0}mn.prototype.Aa=function(){this.g=!1};function za(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Ha(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Mt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Xa(e,n)+(s?" "+s:"")})}function Wa(e,t){e.info(function(){return"TIMEOUT: "+t})}mn.prototype.info=function(){};function Xa(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ss(n)}catch{return t}}var Nt={},di=null;function pn(){return di=di||new $}Nt.Pa="serverreachability";function fr(e){X.call(this,Nt.Pa,e)}K(fr,X);function he(e){const t=pn();j(t,new fr(t))}Nt.STAT_EVENT="statevent";function gr(e,t){X.call(this,Nt.STAT_EVENT,e),this.stat=t}K(gr,X);function J(e){const t=pn();j(t,new gr(t,e))}Nt.Qa="timingevent";function mr(e,t){X.call(this,Nt.Qa,e),this.size=t}K(mr,X);function Ee(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var yn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},pr={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ks(){}ks.prototype.h=null;function fi(e){return e.h||(e.h=e.i())}function yr(){}var Ie={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ds(){X.call(this,"d")}K(Ds,X);function Ns(){X.call(this,"c")}K(Ns,X);var Jn;function vn(){}K(vn,ks);vn.prototype.g=function(){return new XMLHttpRequest};vn.prototype.i=function(){return{}};Jn=new vn;function Se(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new ce(this),this.O=Ya,e=Qn?125:void 0,this.T=new gn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new vr}function vr(){this.i=null,this.g="",this.h=!1}var Ya=45e3,Zn={},Xe={};m=Se.prototype;m.setTimeout=function(e){this.O=e};function ts(e,t,n){e.K=1,e.v=Tn(ht(t)),e.s=n,e.P=!0,wr(e,null)}function wr(e,t){e.F=Date.now(),Ce(e),e.A=ht(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Dr(n.i,"t",s),e.C=0,n=e.l.H,e.h=new vr,e.g=Hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Qa(W(e.La,e,e.g),e.N)),lr(e.S,e.g,"readystatechange",e.ib),t=e.H?tr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),he(),za(e.j,e.u,e.A,e.m,e.U,e.s)}m.ib=function(e){e=e.target;const t=this.L;t&&ut(e)==3?t.l():this.La(e)};m.La=function(e){try{if(e==this.g)t:{const h=ut(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||Qn||this.g&&(this.h.h||this.g.fa()||yi(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?he(3):he(2)),wn(this);var n=this.g.aa();this.Y=n;e:if(Tr(this)){var s=yi(this.g);e="";var i=s.length,r=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Et(this),ee(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Ha(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!He(a)){var c=a;break e}}c=null}if(n=c)Mt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,es(this,n);else{this.i=!1,this.o=3,J(12),Et(this),ee(this);break t}}this.P?(Er(this,h,o),Qn&&this.i&&h==3&&(lr(this.S,this.T,"tick",this.hb),this.T.start())):(Mt(this.j,this.m,o,null),es(this,o)),h==4&&Et(this),this.i&&!this.I&&(h==4?Kr(this.l,this):(this.i=!1,Ce(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,J(12)):(this.o=0,J(13)),Et(this),ee(this)}}}catch{}finally{}};function Tr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Er(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Ja(e,n),i==Xe){t==4&&(e.o=4,J(14),s=!1),Mt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Zn){e.o=4,J(15),Mt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Mt(e.j,e.m,i,null),es(e,i);Tr(e)&&i!=Xe&&i!=Zn&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,J(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Os(t),t.K=!0,J(11))):(Mt(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),ee(e))}m.hb=function(){if(this.g){var e=ut(this.g),t=this.g.fa();this.C<t.length&&(wn(this),Er(this,e,t),this.i&&e!=4&&Ce(this))}};function Ja(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Xe:(n=Number(t.substring(n,s)),isNaN(n)?Zn:(s+=1,s+n>t.length?Xe:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,Et(this)};function Ce(e){e.V=Date.now()+e.O,Ir(e,e.O)}function Ir(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ee(W(e.gb,e),t)}function wn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}m.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Wa(this.j,this.A),this.K!=2&&(he(),J(17)),Et(this),this.o=2,ee(this)):Ir(this,this.V-e)};function ee(e){e.l.G==0||e.I||Kr(e.l,e)}function Et(e){wn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Cs(e.T),dr(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function es(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ns(n.h,e))){if(!e.J&&ns(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Ze(n),Sn(n);else break t;Ms(n),J(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ee(W(n.cb,n),6e3));if(1>=Rr(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else It(n,11)}else if((e.J||n.g==e)&&Ze(n),!He(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const l=c[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=e.g;if(p){const S=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var r=s.h;r.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(bs(r,r.h),r.h=null))}if(s.D){const k=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(s.za=k,x(s.F,s.D,k))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=zr(s,s.H?s.ka:null,s.V),o.J){xr(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(wn(a),Ce(a)),s.g=o}else Br(s);0<n.i.length&&Cn(n)}else c[0]!="stop"&&c[0]!="close"||It(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?It(n,7):Ls(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}he(4)}catch{}}function Za(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(hn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function tu(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(hn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Sr(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(hn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=tu(e),s=Za(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Cr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ct(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ct){this.h=t!==void 0?t:e.h,Ye(this,e.j),this.s=e.s,this.g=e.g,Je(this,e.m),this.l=e.l,t=e.i;var n=new le;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),gi(this,n),this.o=e.o}else e&&(n=String(e).match(Cr))?(this.h=!!t,Ye(this,n[1]||"",!0),this.s=Jt(n[2]||""),this.g=Jt(n[3]||"",!0),Je(this,n[4]),this.l=Jt(n[5]||"",!0),gi(this,n[6]||"",!0),this.o=Jt(n[7]||"")):(this.h=!!t,this.i=new le(null,this.h))}Ct.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Zt(t,mi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Zt(t,mi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Zt(n,n.charAt(0)=="/"?iu:su,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Zt(n,ou)),e.join("")};function ht(e){return new Ct(e)}function Ye(e,t,n){e.j=n?Jt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Je(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function gi(e,t,n){t instanceof le?(e.i=t,au(e.i,e.h)):(n||(t=Zt(t,ru)),e.i=new le(t,e.h))}function x(e,t,n){e.i.set(t,n)}function Tn(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Jt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Zt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,nu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var mi=/[#\/\?@]/g,su=/[#\?:]/g,iu=/[#\?]/g,ru=/[#\?@]/g,ou=/#/g;function le(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Tt(e){e.g||(e.g=new Map,e.h=0,e.i&&eu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=le.prototype;m.add=function(e,t){Tt(this),this.i=null,e=Gt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ar(e,t){Tt(e),t=Gt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function kr(e,t){return Tt(e),t=Gt(e,t),e.g.has(t)}m.forEach=function(e,t){Tt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};m.oa=function(){Tt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};m.W=function(e){Tt(this);let t=[];if(typeof e=="string")kr(this,e)&&(t=t.concat(this.g.get(Gt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Tt(this),this.i=null,e=Gt(this,e),kr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Dr(e,t,n){Ar(e,t),0<n.length&&(e.i=null,e.g.set(Gt(e,t),ps(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Gt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function au(e,t){t&&!e.j&&(Tt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ar(this,s),Dr(this,i,n))},e)),e.j=t}var uu=class{constructor(t,n){this.h=t,this.g=n}};function Nr(e){this.l=e||cu,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ga&&E.g.Ga()&&E.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cu=10;function br(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Rr(e){return e.h?1:e.g?e.g.size:0}function ns(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function bs(e,t){e.g?e.g.add(t):e.h=t}function xr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Nr.prototype.cancel=function(){if(this.i=_r(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function _r(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ps(e.i)}function Rs(){}Rs.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};Rs.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function hu(){this.g=new Rs}function lu(e,t,n){const s=n||"";try{Sr(e,function(i,r){let o=i;we(i)&&(o=Ss(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function du(e,t){const n=new mn;if(E.Image){const s=new Image;s.onload=Fe(Pe,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Fe(Pe,n,s,"TestLoadImage: error",!1,t),s.onabort=Fe(Pe,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Fe(Pe,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Pe(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ae(e){this.l=e.ac||null,this.j=e.jb||!1}K(Ae,ks);Ae.prototype.g=function(){return new En(this.l,this.j)};Ae.prototype.i=function(e){return function(){return e}}({});function En(e,t){$.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=xs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(En,$);var xs=0;m=En.prototype;m.open=function(e,t){if(this.readyState!=xs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,de(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||E).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ke(this)),this.readyState=xs};m.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,de(this)),this.g&&(this.readyState=3,de(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lr(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Lr(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}m.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ke(this):de(this),this.readyState==3&&Lr(this)}};m.Va=function(e){this.g&&(this.response=this.responseText=e,ke(this))};m.Ua=function(e){this.g&&(this.response=e,ke(this))};m.ga=function(){this.g&&ke(this)};function ke(e){e.readyState=4,e.l=null,e.j=null,e.A=null,de(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function de(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(En.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var fu=E.JSON.parse;function L(e){$.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Mr,this.K=this.L=!1}K(L,$);var Mr="",gu=/^https?$/i,mu=["POST","PUT"];m=L.prototype;m.Ka=function(e){this.L=e};m.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Jn.g(),this.C=this.u?fi(this.u):fi(Jn),this.g.onreadystatechange=W(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){pi(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=E.FormData&&e instanceof E.FormData,!(0<=Xi(mu,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vr(this),0<this.B&&((this.K=pu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W(this.qa,this)):this.A=As(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){pi(this,r)}};function pu(e){return Vt&&La()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.qa=function(){typeof ms<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,j(this,"timeout"),this.abort(8))};function pi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Or(e),In(e)}function Or(e){e.D||(e.D=!0,j(e,"complete"),j(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,j(this,"complete"),j(this,"abort"),In(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),In(this,!0)),L.X.M.call(this)};m.Ha=function(){this.s||(this.F||this.v||this.l?Fr(this):this.fb())};m.fb=function(){Fr(this)};function Fr(e){if(e.h&&typeof ms<"u"&&(!e.C[1]||ut(e)!=4||e.aa()!=2)){if(e.v&&ut(e)==4)As(e.Ha,0,e);else if(j(e,"readystatechange"),ut(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Cr)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!gu.test(i?i.toLowerCase():"")}n=s}if(n)j(e,"complete"),j(e,"success");else{e.m=6;try{var o=2<ut(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Or(e)}}finally{In(e)}}}}function In(e,t){if(e.g){Vr(e);const n=e.g,s=e.C[0]?ze:null;e.g=null,e.C=null,t||j(e,"ready");try{n.onreadystatechange=s}catch{}}}function Vr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function ut(e){return e.g?e.g.readyState:0}m.aa=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};m.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),fu(t)}};function yi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Mr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ea=function(){return this.m};m.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pr(e){let t="";return vs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function _s(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Pr(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function Yt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ur(e){this.Ca=0,this.i=[],this.j=new mn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Yt("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Yt("baseRetryDelayMs",5e3,e),this.bb=Yt("retryDelaySeedMs",1e4,e),this.$a=Yt("forwardChannelMaxRetries",2,e),this.ta=Yt("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Nr(e&&e.concurrentRequestLimit),this.Fa=new hu,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}m=Ur.prototype;m.ma=8;m.G=1;function Ls(e){if(qr(e),e.G==3){var t=e.U++,n=ht(e.F);x(n,"SID",e.I),x(n,"RID",t),x(n,"TYPE","terminate"),De(e,n),t=new Se(e,e.j,t,void 0),t.K=2,t.v=Tn(ht(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=Hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ce(t)}Qr(e)}function Sn(e){e.g&&(Os(e),e.g.cancel(),e.g=null)}function qr(e){Sn(e),e.u&&(E.clearTimeout(e.u),e.u=null),Ze(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function Cn(e){br(e.h)||e.m||(e.m=!0,ur(e.Ja,e),e.C=0)}function yu(e,t){return Rr(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Ee(W(e.Ja,e,t),Gr(e,e.C)),e.C++,!0)}m.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Se(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=tr(r),er(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=$r(this,i,t),n=ht(this.F),x(n,"RID",e),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),De(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Pr(r)))+"&"+t:this.o&&_s(n,this.o,r)),bs(this.h,i),this.Ya&&x(n,"TYPE","init"),this.O?(x(n,"$req",t),x(n,"SID","null"),i.Z=!0,ts(i,n,null)):ts(i,n,t),this.G=2}}else this.G==3&&(e?vi(this,e):this.i.length==0||br(this.h)||vi(this))};function vi(e,t){var n;t?n=t.m:n=e.U++;const s=ht(e.F);x(s,"SID",e.I),x(s,"RID",n),x(s,"AID",e.T),De(e,s),e.o&&e.s&&_s(s,e.o,e.s),n=new Se(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=$r(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),bs(e.h,n),ts(n,s,t)}function De(e,t){e.ia&&vs(e.ia,function(n,s){x(t,s,n)}),e.l&&Sr({},function(n,s){x(t,s,n)})}function $r(e,t,n){n=Math.min(e.i.length,n);var s=e.l?W(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const h=i[u].g;if(c-=r,0>c)r=Math.max(0,i[u].h-100),a=!1;else try{lu(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Br(e){e.g||e.u||(e.Z=1,ur(e.Ia,e),e.A=0)}function Ms(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Ee(W(e.Ia,e),Gr(e,e.A)),e.A++,!0)}m.Ia=function(){if(this.u=null,jr(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ee(W(this.eb,this),e)}};m.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,J(10),Sn(this),jr(this))};function Os(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function jr(e){e.g=new Se(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=ht(e.sa);x(t,"RID","rpc"),x(t,"SID",e.I),x(t,"CI",e.L?"0":"1"),x(t,"AID",e.T),x(t,"TYPE","xmlhttp"),De(e,t),e.o&&e.s&&_s(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Tn(ht(t)),n.s=null,n.P=!0,wr(n,e)}m.cb=function(){this.v!=null&&(this.v=null,Sn(this),Ms(this),J(19))};function Ze(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function Kr(e,t){var n=null;if(e.g==t){Ze(e),Os(e),e.g=null;var s=2}else if(ns(e.h,t))n=t.D,xr(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=pn(),j(s,new mr(s,n)),Cn(e)}else Br(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&yu(e,t)||s==2&&Ms(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:It(e,5);break;case 4:It(e,10);break;case 3:It(e,6);break;default:It(e,2)}}}function Gr(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function It(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=W(e.kb,e);n||(n=new Ct("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||Ye(n,"https"),Tn(n)),du(n.toString(),s)}else J(2);e.G=0,e.l&&e.l.va(t),Qr(e),qr(e)}m.kb=function(e){e?(this.j.info("Successfully pinged google.com"),J(2)):(this.j.info("Failed to ping google.com"),J(1))};function Qr(e){if(e.G=0,e.la=[],e.l){const t=_r(e.h);(t.length!=0||e.i.length!=0)&&(ai(e.la,t),ai(e.la,e.i),e.h.i.length=0,ps(e.i),e.i.length=0),e.l.ua()}}function zr(e,t,n){var s=n instanceof Ct?ht(n):new Ct(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Je(s,s.m);else{var i=E.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Ct(null,void 0);s&&Ye(r,s),t&&(r.g=t),i&&Je(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&x(s,n,t),x(s,"VER",e.ma),De(e,s),s}function Hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new L(new Ae({jb:!0})):new L(e.ra),t.Ka(e.H),t}function Wr(){}m=Wr.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Ra=function(){};function tn(){if(Vt&&!(10<=Number(Ma)))throw Error("Environmental error: no available transport.")}tn.prototype.g=function(e,t){return new tt(e,t)};function tt(e,t){$.call(this),this.g=new Ur(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!He(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!He(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Qt(this)}K(tt,$);tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;J(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=zr(e,null,e.V),Cn(e)};tt.prototype.close=function(){Ls(this.g)};tt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ss(e),e=n);t.i.push(new uu(t.ab++,e)),t.G==3&&Cn(t)};tt.prototype.M=function(){this.g.l=null,delete this.j,Ls(this.g),delete this.g,tt.X.M.call(this)};function Xr(e){Ds.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(Xr,Ds);function Yr(){Ns.call(this),this.status=1}K(Yr,Ns);function Qt(e){this.g=e}K(Qt,Wr);Qt.prototype.xa=function(){j(this.g,"a")};Qt.prototype.wa=function(e){j(this.g,new Xr(e))};Qt.prototype.va=function(e){j(this.g,new Yr)};Qt.prototype.ua=function(){j(this.g,"b")};tn.prototype.createWebChannel=tn.prototype.g;tt.prototype.send=tt.prototype.u;tt.prototype.open=tt.prototype.m;tt.prototype.close=tt.prototype.close;yn.NO_ERROR=0;yn.TIMEOUT=8;yn.HTTP_ERROR=6;pr.COMPLETE="complete";yr.EventType=Ie;Ie.OPEN="a";Ie.CLOSE="b";Ie.ERROR="c";Ie.MESSAGE="d";$.prototype.listen=$.prototype.N;L.prototype.listenOnce=L.prototype.O;L.prototype.getLastError=L.prototype.Oa;L.prototype.getLastErrorCode=L.prototype.Ea;L.prototype.getStatus=L.prototype.aa;L.prototype.getResponseJson=L.prototype.Sa;L.prototype.getResponseText=L.prototype.fa;L.prototype.send=L.prototype.da;L.prototype.setWithCredentials=L.prototype.Ka;var vu=function(){return new tn},wu=function(){return pn()},jn=yn,Tu=pr,Eu=Nt,wi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Iu=Ae,Ue=yr,Su=L;const Ti="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Ea("@firebase/firestore");function Ei(){return kt.logLevel}function y(e,...t){if(kt.logLevel<=oe.DEBUG){const n=t.map(Fs);kt.debug(`Firestore (${zt}): ${e}`,...n)}}function lt(e,...t){if(kt.logLevel<=oe.ERROR){const n=t.map(Fs);kt.error(`Firestore (${zt}): ${e}`,...n)}}function ss(e,...t){if(kt.logLevel<=oe.WARN){const n=t.map(Fs);kt.warn(`Firestore (${zt}): ${e}`,...n)}}function Fs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${zt}) INTERNAL ASSERTION FAILED: `+e;throw lt(t),new Error(t)}function b(e,t){e||T()}function C(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends ma{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Q.UNAUTHENTICATED))}shutdown(){}}class Au{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ku{constructor(t){this.t=t,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new gt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new gt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(b(typeof s.accessToken=="string"),new Jr(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(t===null||typeof t=="string"),new Q(t)}}class Du{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(b(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Nu{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Du(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ru{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(b(typeof n.token=="string"),this.A=n.token,new bu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=xu(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function Pt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return V.fromMillis(Date.now())}static fromDate(t){return V.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new V(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new V(0,0))}static max(){return new I(new V(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return fe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof fe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class _ extends fe{construct(t,n,s){return new _(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new _(n)}static emptyPath(){return new _([])}}const _u=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends fe{construct(t,n,s){return new H(t,n,s)}static isValidIdentifier(t){return _u.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new H(n)}static emptyPath(){return new H([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(_.fromString(t))}static fromName(t){return new v(_.fromString(t).popFirst(5))}static empty(){return new v(_.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&_.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return _.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new _(t.slice()))}}function Lu(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=I.fromTimestamp(s===1e9?new V(n+1,0):new V(n,s));return new pt(i,v.empty(),t)}function Mu(e){return new pt(e.readTime,e.key,-1)}class pt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new pt(I.min(),v.empty(),-1)}static max(){return new pt(I.max(),v.empty(),-1)}}function Ou(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Fu)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new f((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new f((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function be(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}Vs.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class ge{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ge("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ge&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ht(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function to(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e){return e==null}function en(e){return e===0&&1/e==-1/0}function Uu(e){return typeof e=="number"&&Number.isInteger(e)&&!en(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Y(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new Y(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Y.EMPTY_BYTE_STRING=new Y("");const qu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yt(e){if(b(!!e),typeof e=="string"){let t=0;const n=qu.exec(e);if(b(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:O(e.seconds),nanos:O(e.nanos)}}function O(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ut(e){return typeof e=="string"?Y.fromBase64String(e):Y.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function no(e){const t=e.mapValue.fields.__previous_value__;return eo(t)?no(t):t}function me(e){const t=yt(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Dt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eo(e)?4:$u(e)?9007199254740991:10:T()}function ot(e,t){if(e===t)return!0;const n=Dt(e);if(n!==Dt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return me(e).isEqual(me(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=yt(s.timestampValue),o=yt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ut(s.bytesValue).isEqual(Ut(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return O(s.geoPointValue.latitude)===O(i.geoPointValue.latitude)&&O(s.geoPointValue.longitude)===O(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return O(s.integerValue)===O(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=O(s.doubleValue),o=O(i.doubleValue);return r===o?en(r)===en(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Pt(e.arrayValue.values||[],t.arrayValue.values||[],ot);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ii(r)!==Ii(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ot(r[a],o[a])))return!1;return!0}(e,t);default:return T()}}function pe(e,t){return(e.values||[]).find(n=>ot(n,t))!==void 0}function qt(e,t){if(e===t)return 0;const n=Dt(e),s=Dt(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=O(i.integerValue||i.doubleValue),a=O(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Si(e.timestampValue,t.timestampValue);case 4:return Si(me(e),me(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Ut(i),a=Ut(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=N(o[u],a[u]);if(c!==0)return c}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=N(O(i.latitude),O(r.latitude));return o!==0?o:N(O(i.longitude),O(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=qt(o[u],a[u]);if(c)return c}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===qe.mapValue&&r===qe.mapValue)return 0;if(i===qe.mapValue)return 1;if(r===qe.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=N(a[h],c[h]);if(l!==0)return l;const g=qt(o[a[h]],u[c[h]]);if(g!==0)return g}return N(a.length,c.length)}(e.mapValue,t.mapValue);default:throw T()}}function Si(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=yt(e),s=yt(t),i=N(n.seconds,s.seconds);return i!==0?i:N(n.nanos,s.nanos)}function $t(e){return is(e)}function is(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=yt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ut(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,v.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=is(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${is(s.fields[a])}`;return r+"}"}(e.mapValue):T();var t,n}function rs(e){return!!e&&"integerValue"in e}function Ps(e){return!!e&&"arrayValue"in e}function Ci(e){return!!e&&"nullValue"in e}function Ai(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function je(e){return!!e&&"mapValue"in e}function ne(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ht(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ne(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ne(e.arrayValue.values[n]);return t}return Object.assign({},e)}function $u(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,n){this.position=t,this.inclusive=n}}function ki(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=qt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Di(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ot(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{}class F extends so{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new ju(t,n,s):n==="array-contains"?new Qu(t,s):n==="in"?new zu(t,s):n==="not-in"?new Hu(t,s):n==="array-contains-any"?new Wu(t,s):new F(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Ku(t,s):new Gu(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qt(n,this.value)):n!==null&&Dt(this.value)===Dt(n)&&this.matchesComparison(qt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class at extends so{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new at(t,n)}matches(t){return io(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function io(e){return e.op==="and"}function ro(e){return Bu(e)&&io(e)}function Bu(e){for(const t of e.filters)if(t instanceof at)return!1;return!0}function os(e){if(e instanceof F)return e.field.canonicalString()+e.op.toString()+$t(e.value);if(ro(e))return e.filters.map(t=>os(t)).join(",");{const t=e.filters.map(n=>os(n)).join(",");return`${e.op}(${t})`}}function oo(e,t){return e instanceof F?function(n,s){return s instanceof F&&n.op===s.op&&n.field.isEqual(s.field)&&ot(n.value,s.value)}(e,t):e instanceof at?function(n,s){return s instanceof at&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&oo(r,s.filters[o]),!0):!1}(e,t):void T()}function ao(e){return e instanceof F?function(t){return`${t.field.canonicalString()} ${t.op} ${$t(t.value)}`}(e):e instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map(ao).join(" ,")+"}"}(e):"Filter"}class ju extends F{constructor(t,n,s){super(t,n,s),this.key=v.fromName(s.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.matchesComparison(n)}}class Ku extends F{constructor(t,n){super(t,"in",n),this.keys=uo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Gu extends F{constructor(t,n){super(t,"not-in",n),this.keys=uo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function uo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class Qu extends F{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ps(n)&&pe(n.arrayValue,this.value)}}class zu extends F{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&pe(this.value.arrayValue,n)}}class Hu extends F{constructor(t,n){super(t,"not-in",n)}matches(t){if(pe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!pe(this.value.arrayValue,n)}}class Wu extends F{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ps(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>pe(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n="asc"){this.field=t,this.dir=n}}function Xu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new U(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new U(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $e(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $e(this.root,t,this.comparator,!1)}getReverseIterator(){return new $e(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $e(this.root,t,this.comparator,!0)}}class $e{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??B.RED,this.left=i??B.EMPTY,this.right=r??B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new B(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return B.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,i){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.comparator=t,this.data=new U(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ni(this.data.getIterator())}getIteratorFrom(t){return new Ni(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof P)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new P(this.comparator);return n.data=t,n}}class Ni{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.fields=t,t.sort(H.comparator)}static empty(){return new nt([])}unionWith(t){let n=new P(H.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new nt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Pt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.value=t}static empty(){return new et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!je(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ne(n)}setAll(t){let n=H.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ne(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());je(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];je(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Ht(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new et(ne(this.value))}}function co(e){const t=[];return Ht(e.fields,(n,s)=>{const i=new H([n]);if(je(s)){const r=co(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new nt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new z(t,0,I.min(),I.min(),I.min(),et.empty(),0)}static newFoundDocument(t,n,s,i){return new z(t,1,n,I.min(),s,i,0)}static newNoDocument(t,n){return new z(t,2,n,I.min(),I.min(),et.empty(),0)}static newUnknownDocument(t,n){return new z(t,3,n,I.min(),I.min(),et.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function bi(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Yu(e,t,n,s,i,r,o)}function Us(e){const t=C(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>os(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),An(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>$t(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>$t(s)).join(",")),t.ft=n}return t.ft}function qs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Xu(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!oo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Di(e.startAt,t.startAt)&&Di(e.endAt,t.endAt)}function as(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function Ju(e,t,n,s,i,r,o,a){return new kn(e,t,n,s,i,r,o,a)}function ho(e){return new kn(e)}function Ri(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Zu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function tc(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function ec(e){return e.collectionGroup!==null}function Ot(e){const t=C(e);if(t.dt===null){t.dt=[];const n=tc(t),s=Zu(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new se(n)),t.dt.push(new se(H.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new se(H.keyField(),r))}}}return t.dt}function dt(e){const t=C(e);if(!t._t)if(t.limitType==="F")t._t=bi(t.path,t.collectionGroup,Ot(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Ot(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new se(r.field,o))}const s=t.endAt?new nn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new nn(t.startAt.position,t.startAt.inclusive):null;t._t=bi(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function us(e,t,n){return new kn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Dn(e,t){return qs(dt(e),dt(t))&&e.limitType===t.limitType}function lo(e){return`${Us(dt(e))}|lt:${e.limitType}`}function cs(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>ao(s)).join(", ")}]`),An(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>$t(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>$t(s)).join(",")),`Target(${n})`}(dt(e))}; limitType=${e.limitType})`}function $s(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):v.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Ot(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ki(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ot(n),s)||n.endAt&&!function(i,r,o){const a=ki(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ot(n),s))}(e,t)}function nc(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function fo(e){return(t,n)=>{let s=!1;for(const i of Ot(e)){const r=sc(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function sc(e,t,n){const s=e.field.isKeyField()?v.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?qt(a,u):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:en(t)?"-0":t}}function mo(e){return{integerValue:""+e}}function ic(e,t){return Uu(t)?mo(t):go(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this._=void 0}}function rc(e,t,n){return e instanceof sn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof ye?yo(e,t):e instanceof ve?vo(e,t):function(s,i){const r=po(s,i),o=xi(r)+xi(s.gt);return rs(r)&&rs(s.gt)?mo(o):go(s.yt,o)}(e,t)}function oc(e,t,n){return e instanceof ye?yo(e,t):e instanceof ve?vo(e,t):n}function po(e,t){return e instanceof rn?rs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class sn extends Nn{}class ye extends Nn{constructor(t){super(),this.elements=t}}function yo(e,t){const n=wo(t);for(const s of e.elements)n.some(i=>ot(i,s))||n.push(s);return{arrayValue:{values:n}}}class ve extends Nn{constructor(t){super(),this.elements=t}}function vo(e,t){let n=wo(t);for(const s of e.elements)n=n.filter(i=>!ot(i,s));return{arrayValue:{values:n}}}class rn extends Nn{constructor(t,n){super(),this.yt=t,this.gt=n}}function xi(e){return O(e.integerValue||e.doubleValue)}function wo(e){return Ps(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function ac(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof ye&&s instanceof ye||n instanceof ve&&s instanceof ve?Pt(n.elements,s.elements,ot):n instanceof rn&&s instanceof rn?ot(n.gt,s.gt):n instanceof sn&&s instanceof sn}(e.transform,t.transform)}class uc{constructor(t,n){this.version=t,this.transformResults=n}}class ct{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ct}static exists(t){return new ct(void 0,t)}static updateTime(t){return new ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ke(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class bn{}function To(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Io(e.key,ct.none()):new Re(e.key,e.data,ct.none());{const n=e.data,s=et.empty();let i=new P(H.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new bt(e.key,s,new nt(i.toArray()),ct.none())}}function cc(e,t,n){e instanceof Re?function(s,i,r){const o=s.value.clone(),a=Li(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof bt?function(s,i,r){if(!Ke(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Li(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Eo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ie(e,t,n,s){return e instanceof Re?function(i,r,o,a){if(!Ke(i.precondition,r))return o;const u=i.value.clone(),c=Mi(i.fieldTransforms,a,r);return u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof bt?function(i,r,o,a){if(!Ke(i.precondition,r))return o;const u=Mi(i.fieldTransforms,a,r),c=r.data;return c.setAll(Eo(i)),c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return Ke(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function hc(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=po(s.transform,i||null);r!=null&&(n===null&&(n=et.empty()),n.set(s.field,r))}return n||null}function _i(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pt(n,s,(i,r)=>ac(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Re extends bn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bt extends bn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Eo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Li(e,t,n){const s=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,oc(o,a,n[i]))}return s}function Mi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,rc(r,o,t))}return s}class Io extends bn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lc extends bn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,D;function fc(e){switch(e){default:return T();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function So(e){if(e===void 0)return lt("GRPC error has no .code"),d.UNKNOWN;switch(e){case M.OK:return d.OK;case M.CANCELLED:return d.CANCELLED;case M.UNKNOWN:return d.UNKNOWN;case M.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case M.INTERNAL:return d.INTERNAL;case M.UNAVAILABLE:return d.UNAVAILABLE;case M.UNAUTHENTICATED:return d.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case M.NOT_FOUND:return d.NOT_FOUND;case M.ALREADY_EXISTS:return d.ALREADY_EXISTS;case M.PERMISSION_DENIED:return d.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case M.ABORTED:return d.ABORTED;case M.OUT_OF_RANGE:return d.OUT_OF_RANGE;case M.UNIMPLEMENTED:return d.UNIMPLEMENTED;case M.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(D=M||(M={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ht(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return to(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new U(v.comparator);function ft(){return gc}const Co=new U(v.comparator);function te(...e){let t=Co;for(const n of e)t=t.insert(n.key,n);return t}function Ao(e){let t=Co;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function St(){return re()}function ko(){return re()}function re(){return new Wt(e=>e.toString(),(e,t)=>e.isEqual(t))}const mc=new U(v.comparator),pc=new P(v.comparator);function A(...e){let t=pc;for(const n of e)t=t.add(n);return t}const yc=new P(N);function Do(){return yc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,xe.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Rn(I.min(),i,Do(),ft(),A())}}class xe{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new xe(s,n,A(),A(),A())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,n,s,i){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=i}}class No{constructor(t,n){this.targetId=t,this.Et=n}}class bo{constructor(t,n,s=Y.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Oi{constructor(){this.At=0,this.Rt=Vi(),this.bt=Y.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=A(),n=A(),s=A();return this.Rt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:T()}}),new xe(this.bt,this.Pt,t,n,s)}xt(){this.vt=!1,this.Rt=Vi()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class vc{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=ft(),this.qt=Fi(),this.Ut=new P(N)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const s=this.Wt(n);switch(t.state){case 0:this.zt(n)&&s.Dt(t.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(t){const n=t.targetId,s=t.Et.count,i=this.Yt(n);if(i){const r=i.target;if(as(r))if(s===0){const o=new v(r.path);this.Qt(n,o,z.newNoDocument(o,I.min()))}else b(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&as(a.target)){const u=new v(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,z.newNoDocument(u,t))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=A();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Yt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(t));const i=new Rn(t,n,this.Ut,this.Lt,s);return this.Lt=ft(),this.qt=Fi(),this.Ut=new P(N),i}Gt(t,n){if(!this.zt(t))return;const s=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.zt(t))return;const i=this.Wt(t);this.te(t,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new Oi,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new P(N),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Oi),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function Fi(){return new U(v.comparator)}function Vi(){return new U(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Tc=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ec=(()=>({and:"AND",or:"OR"}))();class Ic{constructor(t,n){this.databaseId=t,this.wt=n}}function on(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ro(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Sc(e,t){return on(e,t.toTimestamp())}function rt(e){return b(!!e),I.fromTimestamp(function(t){const n=yt(t);return new V(n.seconds,n.nanos)}(e))}function Bs(e,t){return function(n){return new _(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function xo(e){const t=_.fromString(e);return b(Oo(t)),t}function hs(e,t){return Bs(e.databaseId,t.path)}function Kn(e,t){const n=xo(t);if(n.get(1)!==e.databaseId.projectId)throw new w(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(_o(n))}function ls(e,t){return Bs(e.databaseId,t)}function Cc(e){const t=xo(e);return t.length===4?_.emptyPath():_o(t)}function ds(e){return new _(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function _o(e){return b(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Pi(e,t,n){return{name:hs(e,t),fields:n.value.mapValue.fields}}function Ac(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,c){return u.wt?(b(c===void 0||typeof c=="string"),Y.fromBase64String(c||"")):(b(c===void 0||c instanceof Uint8Array),Y.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?d.UNKNOWN:So(u.code);return new w(c,u.message||"")}(o);n=new bo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Kn(e,s.document.name),r=rt(s.document.updateTime),o=s.document.createTime?rt(s.document.createTime):I.min(),a=new et({mapValue:{fields:s.document.fields}}),u=z.newFoundDocument(i,r,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];n=new Ge(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Kn(e,s.document),r=s.readTime?rt(s.readTime):I.min(),o=z.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ge([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Kn(e,s.document),r=s.removedTargetIds||[];n=new Ge([],r,i,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new dc(i),o=s.targetId;n=new No(o,r)}}return n}function kc(e,t){let n;if(t instanceof Re)n={update:Pi(e,t.key,t.value)};else if(t instanceof Io)n={delete:hs(e,t.key)};else if(t instanceof bt)n={update:Pi(e,t.key,t.data),updateMask:Oc(t.fieldMask)};else{if(!(t instanceof lc))return T();n={verify:hs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof sn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ye)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ve)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof rn)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw T()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sc(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(e,t.precondition)),n}function Dc(e,t){return e&&e.length>0?(b(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?rt(s.updateTime):rt(i);return r.isEqual(I.min())&&(r=rt(i)),new uc(r,s.transformResults||[])}(n,t))):[]}function Nc(e,t){return{documents:[ls(e,t.path)]}}function bc(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ls(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ls(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return Mo(at.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:_t(h.field),direction:_c(h.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,c){return u.wt||An(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Rc(e){let t=Cc(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){b(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=function(h){const l=Lo(h);return l instanceof at&&ro(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new se(Lt(l.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,An(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(h){const l=!!h.before,g=h.values||[];return new nn(g,l)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const l=!h.before,g=h.values||[];return new nn(g,l)}(n.endAt)),Ju(t,i,o,r,a,"F",u,c)}function xc(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Lo(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Lt(t.unaryFilter.field);return F.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Lt(t.unaryFilter.field);return F.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Lt(t.unaryFilter.field);return F.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Lt(t.unaryFilter.field);return F.create(r,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(t){return F.create(Lt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(n=>Lo(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return T()}}(t.compositeFilter.op))}(e):T()}function _c(e){return wc[e]}function Lc(e){return Tc[e]}function Mc(e){return Ec[e]}function _t(e){return{fieldPath:e.canonicalString()}}function Lt(e){return H.fromServerFormat(e.fieldPath)}function Mo(e){return e instanceof F?function(t){if(t.op==="=="){if(Ai(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NAN"}};if(Ci(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ai(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NOT_NAN"}};if(Ci(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_t(t.field),op:Lc(t.op),value:t.value}}}(e):e instanceof at?function(t){const n=t.getFilters().map(s=>Mo(s));return n.length===1?n[0]:{compositeFilter:{op:Mc(t.op),filters:n}}}(e):T()}function Oc(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Oo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&cc(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ie(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ie(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=ko();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=To(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),A())}isEqual(t){return this.batchId===t.batchId&&Pt(this.mutations,t.mutations,(n,s)=>_i(n,s))&&Pt(this.baseMutations,t.baseMutations,(n,s)=>_i(n,s))}}class js{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){b(t.mutations.length===s.length);let i=mc;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new js(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,n,s,i,r=I.min(),o=I.min(),a=Y.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new At(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t){this.ie=t}}function Uc(e){const t=Rc({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?us(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.Je=new $c}addToCollectionParentIndex(t,n){return this.Je.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(pt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(pt.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class $c{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new P(_.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new P(_.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Bt(0)}static vn(){return new Bt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.changes=new Wt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,z.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&ie(s.mutation,i,nt.empty(),V.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,A()).next(()=>s))}getLocalViewOfDocuments(t,n,s=A()){const i=St();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=te();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=St();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,A()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=ft();const o=re(),a=re();return n.forEach((u,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof bt)?r=r.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ie(h.mutation,c,h.mutation.getFieldMask(),V.now())):o.set(c.key,nt.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new jc(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=re();let i=new U((o,a)=>o-a),r=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=s.get(u)||nt.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(i.get(a.batchId)||A()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=ko();h.forEach(g=>{if(!r.has(g)){const p=To(n.get(g),s.get(g));p!==null&&l.set(g,p),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return v.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ec(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):f.resolve(St());let a=-1,u=r;return o.next(c=>f.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(h)?f.resolve():this.remoteDocumentCache.getEntry(t,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,u,c,A())).next(h=>({batchId:a,changes:Ao(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(s=>{let i=te();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=te();return this.indexManager.getCollectionParents(t,i).next(o=>f.forEach(o,a=>{const u=function(c,h){return new kn(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,z.newInvalidDocument(c)))});let o=te();return i.forEach((a,u)=>{const c=r.get(a);c!==void 0&&ie(c.mutation,u,nt.empty(),V.now()),$s(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return f.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:rt(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Uc(s.bundledQuery),readTime:rt(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.overlays=new U(v.comparator),this.es=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const s=St();return f.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.oe(t,n,r)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const i=St(),r=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new U((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=St(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=St(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return f.resolve(a)}oe(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Vc(n,s));let r=this.es.get(n);r===void 0&&(r=A(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.ns=new P(q.ss),this.rs=new P(q.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new q(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new q(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new v(new _([])),s=new q(n,t),i=new q(n,t+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new v(new _([])),s=new q(n,t),i=new q(n,t+1);let r=A();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new q(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class q{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return v.comparator(t.key,n.key)||N(t._s,n._s)}static os(t,n){return N(t._s,n._s)||v.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new P(q.ss)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fc(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new q(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return f.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new q(n,0),i=new q(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new P(N);return n.forEach(i=>{const r=new q(i,0),o=new q(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),f.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;v.isDocumentKey(r)||(r=r.child(""));const o=new q(new v(r),0);let a=new P(N);return this.gs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(u._s)),!0)},o),f.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){b(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return f.forEach(n.mutations,i=>{const r=new q(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new q(n,0),i=this.gs.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t){this.Es=t,this.docs=new U(v.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():z.newInvalidDocument(n))}getEntries(t,n){let s=ft();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():z.newInvalidDocument(i))}),f.resolve(s)}getAllFromCollection(t,n,s){let i=ft();const r=new v(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Ou(Mu(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(t,n,s,i){T()}As(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Wc(this)}getSize(t){return f.resolve(this.size)}}class Wc extends Bc{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t){this.persistence=t,this.Rs=new Wt(n=>Us(n),qs),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ks,this.targetCount=0,this.vs=Bt.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),f.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Bt(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.Dn(n),f.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Vs(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Xc(this),this.indexManager=new qc,this.remoteDocumentCache=function(s){return new Hc(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Pc(n),this.Ns=new Gc(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Qc,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new zc(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new Jc(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(t,n){return f.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Jc extends Vu{constructor(t){super(),this.currentSequenceNumber=t}}class Gs{constructor(t){this.persistence=t,this.Fs=new Ks,this.$s=null}static Bs(t){return new Gs(t)}get Ls(){if(this.$s)return this.$s;throw T()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),f.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ls,s=>{const i=v.fromPath(s);return this.qs(t,i).next(r=>{r||n.removeEntry(i,I.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return f.or([()=>f.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=i}static Ci(t,n){let s=A(),i=A();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Qs(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.ki(t,n).next(r=>r||this.Oi(t,n,i,s)).next(r=>r||this.Mi(t,n))}ki(t,n){if(Ri(n))return f.resolve(null);let s=dt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=us(n,null,"F"),s=dt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=A(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.Fi(n,a);return this.$i(n,c,o,u.readTime)?this.ki(t,us(n,null,"F")):this.Bi(t,c,n,u)}))})))}Oi(t,n,s,i){return Ri(n)||i.isEqual(I.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(t,n):(Ei()<=oe.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cs(n)),this.Bi(t,o,n,Lu(i,-1)))})}Fi(t,n){let s=new P(fo(t));return n.forEach((i,r)=>{$s(t,r)&&(s=s.add(r))}),s}$i(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(t,n){return Ei()<=oe.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",cs(n)),this.Ni.getDocumentsMatchingQuery(t,n,pt.min())}Bi(t,n,s,i){return this.Ni.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,n,s,i){this.persistence=t,this.Li=n,this.yt=i,this.qi=new U(N),this.Ui=new Wt(r=>Us(r),qs),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kc(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function eh(e,t,n,s){return new th(e,t,n,s)}async function Fo(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=A();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function nh(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,l=h.keys();let g=f.resolve();return l.forEach(p=>{g=g.next(()=>c.getEntry(a,p)).next(S=>{const k=u.docVersions.get(p);b(k!==null),S.version.compareTo(k)<0&&(h.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),c.addEntry(S)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=A();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Vo(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function sh(e,t){const n=C(e),s=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];t.targetChanges.forEach((h,l)=>{const g=i.get(l);if(!g)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,l).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,l)));let p=g.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(l)?p=p.withResumeToken(Y.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),i=i.insert(l,p),function(S,k,R){return S.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(g,p,h)&&a.push(n.Cs.updateTargetData(r,p))});let u=ft(),c=A();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(ih(r,o,t.documentUpdates).next(h=>{u=h.Wi,c=h.zi})),!s.isEqual(I.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(l=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(r=>(n.qi=i,r))}function ih(e,t,n){let s=A(),i=A();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=ft();return n.forEach((a,u)=>{const c=r.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function rh(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function oh(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,t).next(r=>r?(i=r,f.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new At(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(t,s.targetId)),s})}async function fs(e,t,n){const s=C(e),i=s.qi.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!be(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qi=s.qi.remove(t),s.Ui.delete(i.target)}function Ui(e,t,n){const s=C(e);let i=I.min(),r=A();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=C(a),l=h.Ui.get(c);return l!==void 0?f.resolve(h.qi.get(l)):h.Cs.getTargetData(u,c)}(s,o,dt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?i:I.min(),n?r:A())).next(a=>(ah(s,nc(t),a),{documents:a,Hi:r})))}function ah(e,t,n){let s=e.Ki.get(t)||I.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ki.set(t,s)}class qi{constructor(){this.activeTargetIds=Do()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class uh{constructor(){this.Lr=new qi,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new qi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{Ur(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,i,r){const o=this.ho(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(t,o,a,s).then(u=>(y("RestConnection","Received: ",u),u),u=>{throw ss("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}_o(t,n,s,i,r,o){return this.ao(t,n,s,i,r)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+zt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ho(t,n){const s=hh[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,i){return new Promise((r,o)=>{const a=new Su;a.setWithCredentials(!0),a.listenOnce(Tu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case jn.NO_ERROR:const c=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(c)),r(c);break;case jn.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new w(d.DEADLINE_EXCEEDED,"Request time out"));break;case jn.HTTP_ERROR:const h=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let l=a.getResponseJson();Array.isArray(l)&&(l=l[0]);const g=l==null?void 0:l.error;if(g&&g.status&&g.message){const p=function(S){const k=S.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(k)>=0?k:d.UNKNOWN}(g.status);o(new w(p,g.message))}else o(new w(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}wo(t,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=vu(),o=wu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Iu({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const u=i.join("");y("Connection","Creating WebChannel: "+u,a);const c=r.createWebChannel(u,a);let h=!1,l=!1;const g=new lh({Hr:S=>{l?y("Connection","Not sending because WebChannel is closed:",S):(h||(y("Connection","Opening WebChannel transport."),c.open(),h=!0),y("Connection","WebChannel sending:",S),c.send(S))},Jr:()=>c.close()}),p=(S,k,R)=>{S.listen(k,Z=>{try{R(Z)}catch(G){setTimeout(()=>{throw G},0)}})};return p(c,Ue.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),p(c,Ue.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),g.io())}),p(c,Ue.EventType.ERROR,S=>{l||(l=!0,ss("Connection","WebChannel transport errored:",S),g.io(new w(d.UNAVAILABLE,"The operation could not be completed")))}),p(c,Ue.EventType.MESSAGE,S=>{var k;if(!l){const R=S.data[0];b(!!R);const Z=R,G=Z.error||((k=Z[0])===null||k===void 0?void 0:k.error);if(G){y("Connection","WebChannel received error:",G);const Me=G.status;let xt=function(da){const ri=M[da];if(ri!==void 0)return So(ri)}(Me),Oe=G.message;xt===void 0&&(xt=d.INTERNAL,Oe="Unknown error status: "+Me+" with message "+G.message),l=!0,g.io(new w(xt,Oe)),c.close()}else y("Connection","WebChannel received:",R),g.ro(R)}}),p(o,Eu.STAT_EVENT,S=>{S.stat===wi.PROXY?y("Connection","Detected buffering proxy"):S.stat===wi.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.so()},0),g}}function Gn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(e){return new Ic(e,!0)}class Po{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t,n,s,i,r,o,a,u){this.Hs=t,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Po(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(lt(n.toString()),lt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{t(()=>{const i=new w(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fh extends Uo{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=Ac(this.yt,t),s=function(i){if(!("targetChange"in i))return I.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?I.min():r.readTime?rt(r.readTime):I.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=ds(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=as(a)?{documents:Nc(i,a)}:{query:bc(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Ro(i,r.resumeToken):r.snapshotVersion.compareTo(I.min())>0&&(o.readTime=on(i,r.snapshotVersion.toTimestamp())),o}(this.yt,t);const s=xc(this.yt,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=ds(this.yt),n.removeTarget=t,this.Bo(n)}}class gh extends Uo{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Dc(t.writeResults,t.commitTime),s=rt(t.commitTime);return this.listener.Zo(s,n)}return b(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=ds(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>kc(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(d.UNKNOWN,i.toString())})}_o(t,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(d.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class ph{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(lt(n),this.ou=!1):y("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Rt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=C(a);u._u.add(4),await _e(u),u.gu.set("Unknown"),u._u.delete(4),await _n(u)}(this))})}),this.gu=new ph(s,i)}}async function _n(e){if(Rt(e))for(const t of e.wu)await t(!0)}async function _e(e){for(const t of e.wu)await t(!1)}function qo(e,t){const n=C(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Ws(n)?Hs(n):Xt(n).ko()&&zs(n,t))}function $o(e,t){const n=C(e),s=Xt(n);n.du.delete(t),s.ko()&&Bo(n,t),n.du.size===0&&(s.ko()?s.Fo():Rt(n)&&n.gu.set("Unknown"))}function zs(e,t){e.yu.Ot(t.targetId),Xt(e).zo(t)}function Bo(e,t){e.yu.Ot(t),Xt(e).Ho(t)}function Hs(e){e.yu=new vc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),Xt(e).start(),e.gu.uu()}function Ws(e){return Rt(e)&&!Xt(e).No()&&e.du.size>0}function Rt(e){return C(e)._u.size===0}function jo(e){e.yu=void 0}async function vh(e){e.du.forEach((t,n)=>{zs(e,t)})}async function wh(e,t){jo(e),Ws(e)?(e.gu.hu(t),Hs(e)):e.gu.set("Unknown")}async function Th(e,t,n){if(e.gu.set("Online"),t instanceof bo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await an(e,s)}else if(t instanceof Ge?e.yu.Kt(t):t instanceof No?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(I.min()))try{const s=await Vo(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.du.get(u);c&&i.du.set(u,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(Y.EMPTY_BYTE_STRING,u.snapshotVersion)),Bo(i,a);const c=new At(u.target,a,1,u.sequenceNumber);zs(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await an(e,s)}}async function an(e,t,n){if(!be(t))throw t;e._u.add(1),await _e(e),e.gu.set("Offline"),n||(n=()=>Vo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await _n(e)})}function Ko(e,t){return t().catch(n=>an(e,n,t))}async function Ln(e){const t=C(e),n=vt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Eh(t);)try{const i=await rh(t.localStore,s);if(i===null){t.fu.length===0&&n.Fo();break}s=i.batchId,Ih(t,i)}catch(i){await an(t,i)}Go(t)&&Qo(t)}function Eh(e){return Rt(e)&&e.fu.length<10}function Ih(e,t){e.fu.push(t);const n=vt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Go(e){return Rt(e)&&!vt(e).No()&&e.fu.length>0}function Qo(e){vt(e).start()}async function Sh(e){vt(e).eu()}async function Ch(e){const t=vt(e);for(const n of e.fu)t.Xo(n.mutations)}async function Ah(e,t,n){const s=e.fu.shift(),i=js.from(s,t,n);await Ko(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ln(e)}async function kh(e,t){t&&vt(e).Yo&&await async function(n,s){if(i=s.code,fc(i)&&i!==d.ABORTED){const r=n.fu.shift();vt(n).Mo(),await Ko(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ln(n)}var i}(e,t),Go(e)&&Qo(e)}async function Bi(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Rt(n);n._u.add(3),await _e(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await _n(n)}async function Dh(e,t){const n=C(e);t?(n._u.delete(2),await _n(n)):t||(n._u.add(2),await _e(n),n.gu.set("Unknown"))}function Xt(e){return e.pu||(e.pu=function(t,n,s){const i=C(t);return i.su(),new fh(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(e.datastore,e.asyncQueue,{Yr:vh.bind(null,e),Zr:wh.bind(null,e),Wo:Th.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Ws(e)?Hs(e):e.gu.set("Unknown")):(await e.pu.stop(),jo(e))})),e.pu}function vt(e){return e.Iu||(e.Iu=function(t,n,s){const i=C(t);return i.su(),new gh(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(e.datastore,e.asyncQueue,{Yr:Sh.bind(null,e),Zr:kh.bind(null,e),tu:Ch.bind(null,e),Zo:Ah.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Ln(e)):(await e.Iu.stop(),e.fu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Xs(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ys(e,t){if(lt("AsyncQueue",`${t}: ${e}`),be(e))return new w(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this.comparator=t?(n,s)=>t(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=te(),this.sortedSet=new U(this.comparator)}static emptySet(t){return new Ft(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ft)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ft;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.Tu=new U(v.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):T():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class jt{constructor(t,n,s,i,r,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new jt(t,n,Ft.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Dn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.Au=void 0,this.listeners=[]}}class bh{constructor(){this.queries=new Wt(t=>lo(t),Dn),this.onlineState="Unknown",this.Ru=new Set}}async function Rh(e,t){const n=C(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Nh),i)try{r.Au=await n.onListen(s)}catch(o){const a=Ys(o,`Initialization of query '${cs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.bu(n.onlineState),r.Au&&t.Pu(r.Au)&&Js(n)}async function xh(e,t){const n=C(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function _h(e,t){const n=C(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Js(n)}function Lh(e,t,n){const s=C(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Js(e){e.Ru.forEach(t=>{t.next()})}class Mh{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new jt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=jt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t){this.key=t}}class Ho{constructor(t){this.key=t}}class Oh{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=A(),this.mutatedKeys=A(),this.Gu=fo(t),this.Qu=new Ft(this.Gu)}get ju(){return this.qu}Wu(t,n){const s=n?n.zu:new ji,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const g=i.get(h),p=$s(this.query,l)?l:null,S=!!g&&this.mutatedKeys.has(g.key),k=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let R=!1;g&&p?g.data.isEqual(p.data)?S!==k&&(s.track({type:3,doc:p}),R=!0):this.Hu(g,p)||(s.track({type:2,doc:p}),R=!0,(u&&this.Gu(p,u)>0||c&&this.Gu(p,c)<0)&&(a=!0)):!g&&p?(s.track({type:0,doc:p}),R=!0):g&&!p&&(s.track({type:1,doc:g}),R=!0,(u||c)&&(a=!0)),R&&(p?(o=o.add(p),r=k?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Eu();r.sort((c,h)=>function(l,g){const p=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return p(l)-p(g)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,r.length!==0||u?{snapshot:new jt(this.query,t.Qu,i,r,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ji,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=A(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new Ho(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new zo(s))}),n}tc(t){this.qu=t.Hi,this.Ku=A();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return jt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Fh{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Vh{constructor(t){this.key=t,this.nc=!1}}class Ph{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Wt(a=>lo(a),Dn),this.rc=new Map,this.oc=new Set,this.uc=new U(v.comparator),this.cc=new Map,this.ac=new Ks,this.hc={},this.lc=new Map,this.fc=Bt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Uh(e,t){const n=Wh(e);let s,i;const r=n.ic.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await oh(n.localStore,dt(t));n.isPrimaryClient&&qo(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await qh(n,t,s,a==="current",o.resumeToken)}return i}async function qh(e,t,n,s,i){e._c=(l,g,p)=>async function(S,k,R,Z){let G=k.view.Wu(R);G.$i&&(G=await Ui(S.localStore,k.query,!1).then(({documents:Oe})=>k.view.Wu(Oe,G)));const Me=Z&&Z.targetChanges.get(k.targetId),xt=k.view.applyChanges(G,S.isPrimaryClient,Me);return Gi(S,k.targetId,xt.Xu),xt.snapshot}(e,l,g,p);const r=await Ui(e.localStore,t,!0),o=new Oh(t,r.Hi),a=o.Wu(r.documents),u=xe.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);Gi(e,n,c.Xu);const h=new Fh(t,n,o);return e.ic.set(t,h),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),c.snapshot}async function $h(e,t){const n=C(e),s=n.ic.get(t),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!Dn(r,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await fs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),$o(n.remoteStore,s.targetId),gs(n,s.targetId)}).catch(Ne)):(gs(n,s.targetId),await fs(n.localStore,s.targetId,!0))}async function Bh(e,t,n){const s=Xh(e);try{const i=await function(r,o){const a=C(r),u=V.now(),c=o.reduce((g,p)=>g.add(p.key),A());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let p=ft(),S=A();return a.Gi.getEntries(g,c).next(k=>{p=k,p.forEach((R,Z)=>{Z.isValidDocument()||(S=S.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,p)).next(k=>{h=k;const R=[];for(const Z of o){const G=hc(Z,h.get(Z.key).overlayedDocument);G!=null&&R.push(new bt(Z.key,G,co(G.value.mapValue),ct.exists(!0)))}return a.mutationQueue.addMutationBatch(g,u,R,o)}).next(k=>{l=k;const R=k.applyToLocalDocumentSet(h,S);return a.documentOverlayCache.saveOverlays(g,k.batchId,R)})}).then(()=>({batchId:l.batchId,changes:Ao(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.hc[r.currentUser.toKey()];u||(u=new U(N)),u=u.insert(o,a),r.hc[r.currentUser.toKey()]=u}(s,i.batchId,n),await Le(s,i.changes),await Ln(s.remoteStore)}catch(i){const r=Ys(i,"Failed to persist write");n.reject(r)}}async function Wo(e,t){const n=C(e);try{const s=await sh(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(b(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?b(o.nc):i.removedDocuments.size>0&&(b(o.nc),o.nc=!1))}),await Le(n,s,t)}catch(s){await Ne(s)}}function Ki(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=C(r);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.bu(o)&&(u=!0)}),u&&Js(a)}(s.eventManager,t),i.length&&s.sc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function jh(e,t,n){const s=C(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.cc.get(t),r=i&&i.key;if(r){let o=new U(v.comparator);o=o.insert(r,z.newNoDocument(r,I.min()));const a=A().add(r),u=new Rn(I.min(),new Map,new P(N),o,a);await Wo(s,u),s.uc=s.uc.remove(r),s.cc.delete(t),Zs(s)}else await fs(s.localStore,t,!1).then(()=>gs(s,t,n)).catch(Ne)}async function Kh(e,t){const n=C(e),s=t.batch.batchId;try{const i=await nh(n.localStore,t);Yo(n,s,null),Xo(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Le(n,i)}catch(i){await Ne(i)}}async function Gh(e,t,n){const s=C(e);try{const i=await function(r,o){const a=C(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(b(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,t);Yo(s,t,n),Xo(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Le(s,i)}catch(i){await Ne(i)}}function Xo(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function Yo(e,t,n){const s=C(e);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.hc[s.currentUser.toKey()]=i}}function gs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||Jo(e,s)})}function Jo(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&($o(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Zs(e))}function Gi(e,t,n){for(const s of n)s instanceof zo?(e.ac.addReference(s.key,t),Qh(e,s)):s instanceof Ho?(y("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||Jo(e,s.key)):T()}function Qh(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.oc.add(s),Zs(e))}function Zs(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new v(_.fromString(t)),s=e.fc.next();e.cc.set(s,new Vh(n)),e.uc=e.uc.insert(n,s),qo(e.remoteStore,new At(dt(ho(n.path)),s,2,Vs.at))}}async function Le(e,t,n){const s=C(e),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,u)=>{o.push(s._c(u,t,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Qs.Ci(u.targetId,c);r.push(h)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,u){const c=C(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(u,l=>f.forEach(l.Si,g=>c.persistence.referenceDelegate.addReference(h,l.targetId,g)).next(()=>f.forEach(l.Di,g=>c.persistence.referenceDelegate.removeReference(h,l.targetId,g)))))}catch(h){if(!be(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const g=c.qi.get(l),p=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(p);c.qi=c.qi.insert(l,S)}}}(s.localStore,r))}async function zh(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Fo(n.localStore,t);n.currentUser=t,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new w(d.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Le(n,s.ji)}}function Hh(e,t){const n=C(e),s=n.cc.get(t);if(s&&s.nc)return A().add(s.key);{let i=A();const r=n.rc.get(t);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Wh(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jh.bind(null,t),t.sc.Wo=_h.bind(null,t.eventManager),t.sc.wc=Lh.bind(null,t.eventManager),t}function Xh(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Kh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Gh.bind(null,t),t}class Yh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=xn(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return eh(this.persistence,new Zc,t.initialUser,this.yt)}yc(t){return new Yc(Gs.Bs,this.yt)}gc(t){return new uh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Jh{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ki(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zh.bind(null,this.syncEngine),await Dh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new bh}createDatastore(t){const n=xn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new dh(i));var i;return function(r,o,a,u){return new mh(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Ki(this.syncEngine,a,0),o=$i.C()?new $i:new ch,new yh(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,c){const h=new Ph(s,i,r,o,a,u);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);y("RemoteStore","RemoteStore shutting down."),n._u.add(5),await _e(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(e,t,n){if(!n)throw new w(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Zh(e,t,n,s){if(t===!0&&s===!0)throw new w(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Qi(e){if(!v.isDocumentKey(e))throw new w(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function zi(e){if(v.isDocumentKey(e))throw new w(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ti(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function un(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ti(e);throw new w(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Map;class Wi{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Zh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wi(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Cu;switch(n.type){case"gapi":const s=n.client;return new Nu(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Hi.get(t);n&&(y("ComponentProvider","Removing Datastore"),Hi.delete(t),n.terminate())}(this),Promise.resolve()}}function tl(e,t,n,s={}){var i;const r=(e=un(e,Mn))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&ss("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Q.MOCK_USER;else{o=wa(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new w(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Q(u)}e._authCredentials=new Au(new Jr(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new st(this.firestore,t,this._key)}}class On{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new On(this.firestore,t,this._query)}}class mt extends On{constructor(t,n,s){super(t,n,ho(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new st(this.firestore,null,new v(t))}withConverter(t){return new mt(this.firestore,t,this._path)}}function Rl(e,t,...n){if(e=ae(e),Zo("collection","path",t),e instanceof Mn){const s=_.fromString(t,...n);return zi(s),new mt(e,null,s)}{if(!(e instanceof st||e instanceof mt))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(_.fromString(t,...n));return zi(s),new mt(e.firestore,null,s)}}function el(e,t,...n){if(e=ae(e),arguments.length===1&&(t=Zr.R()),Zo("doc","path",t),e instanceof Mn){const s=_.fromString(t,...n);return Qi(s),new st(e,null,new v(s))}{if(!(e instanceof st||e instanceof mt))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(_.fromString(t,...n));return Qi(s),new st(e.firestore,e instanceof mt?e.converter:null,new v(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):lt("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Q.UNAUTHENTICATED,this.clientId=Zr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Ys(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function il(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Fo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function rl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ol(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Bi(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Bi(t.remoteStore,r)),e.onlineComponents=t}async function ol(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await il(e,new Yh)),e.offlineComponents}async function ta(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await rl(e,new Jh)),e.onlineComponents}function al(e){return ta(e).then(t=>t.syncEngine)}async function ul(e){const t=await ta(e),n=t.eventManager;return n.onListen=Uh.bind(null,t.syncEngine),n.onUnlisten=$h.bind(null,t.syncEngine),n}function cl(e,t,n={}){const s=new gt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const c=new nl({next:l=>{r.enqueueAndForget(()=>xh(i,h)),l.fromCache&&a.source==="server"?u.reject(new w(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new Mh(o,c,{includeMetadataChanges:!0,Nu:!0});return Rh(i,h)}(await ul(e),e.asyncQueue,t,n,s)),s.promise}class hl{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Po(this,"async_queue_retry"),this.Wc=()=>{const n=Gn();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Gn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Gn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new gt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!be(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw lt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Xs.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&T()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class ei extends Mn{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new hl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||na(this),this._firestoreClient.terminate()}}function xl(e,t){const n=typeof e=="object"?e:pa(),s=typeof e=="string"?e:t||"(default)",i=ya(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=va("firestore");r&&tl(i,...r)}return i}function ea(e){return e._firestoreClient||na(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function na(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Pu(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new sl(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Kt(Y.fromBase64String(t))}catch(n){throw new w(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Kt(Y.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=/^__.*__$/;class dl{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new bt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Re(t,this.data,n,this.fieldTransforms)}}function ia(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class ii{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.ua(t),i}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return cn(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(ia(this.sa)&&ll.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class fl{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||xn(t)}da(t,n,s,i=!1){return new ii({sa:t,methodName:n,fa:s,path:H.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function gl(e){const t=e._freezeSettings(),n=xn(e._databaseId);return new fl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ml(e,t,n,s,i,r={}){const o=e.da(r.merge||r.mergeFields?2:0,t,n,i);ua("Data must be an object, but it was:",o,s);const a=oa(s,o);let u,c;if(r.merge)u=new nt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const l of r.mergeFields){const g=pl(t,l,n);if(!o.contains(g))throw new w(d.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);vl(h,g)||h.push(g)}u=new nt(h),c=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,c=o.fieldTransforms;return new dl(new et(a),u,c)}function ra(e,t){if(aa(e=ae(e)))return ua("Unsupported field value:",t,e),oa(e,t);if(e instanceof sa)return function(n,s){if(!ia(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ra(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ic(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=V.fromDate(n);return{timestampValue:on(s.yt,i)}}if(n instanceof V){const i=new V(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:on(s.yt,i)}}if(n instanceof si)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kt)return{bytesValue:Ro(s.yt,n._byteString)};if(n instanceof st){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bs(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${ti(n)}`)}(e,t)}function oa(e,t){const n={};return to(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ht(e,(s,i)=>{const r=ra(i,t.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function aa(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof V||e instanceof si||e instanceof Kt||e instanceof st||e instanceof sa)}function ua(e,t,n){if(!aa(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ti(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function pl(e,t,n){if((t=ae(t))instanceof ni)return t._internalPath;if(typeof t=="string")return ca(e,t);throw cn("Field path arguments must be of type string or ",e,!1,void 0,n)}const yl=new RegExp("[~\\*/\\[\\]]");function ca(e,t,n){if(t.search(yl)>=0)throw cn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ni(...t.split("."))._internalPath}catch{throw cn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function cn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new w(d.INVALID_ARGUMENT,a+e+u)}function vl(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new wl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(la("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wl extends ha{data(){return super.data()}}function la(e,t){return typeof t=="string"?ca(e,t):t instanceof ni?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class El{convertValue(t,n="none"){switch(Dt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return O(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ut(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){const s={};return Ht(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new si(O(t.latitude),O(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=no(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(me(t));default:return null}}convertTimestamp(t){const n=yt(t);return new V(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=_.fromString(t);b(Oo(s));const i=new ge(s.get(1),s.get(3)),r=new v(s.popFirst(5));return i.isEqual(n)||lt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Sl extends ha{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Qe(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(la("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Qe extends Sl{data(t={}){return super.data(t)}}class Cl{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Be(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Qe(this._firestore,this._userDataWriter,s.key,s,new Be(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Qe(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Qe(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Al(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Al(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class kl extends El{constructor(t){super(),this.firestore=t}convertBytes(t){return new Kt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new st(this.firestore,null,n)}}function _l(e){e=un(e,On);const t=un(e.firestore,ei),n=ea(t),s=new kl(t);return Tl(e._query),cl(n,e._query).then(i=>new Cl(t,s,e,i))}function Ll(e,t){const n=un(e.firestore,ei),s=el(e),i=Il(e.converter,t);return Dl(n,[ml(gl(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,ct.exists(!1))]).then(()=>s)}function Dl(e,t){return function(n,s){const i=new gt;return n.asyncQueue.enqueueAndForget(async()=>Bh(await al(n),s,i)),i.promise}(ea(e),t)}(function(e,t=!0){(function(n){zt=n})(Ta),fa(new ga("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new ei(new ku(n.getProvider("auth-internal")),new Ru(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ge(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),oi(Ti,"3.8.1",e),oi(Ti,"3.8.1","esm2017")})();export{_l as B,Ll as Q,Rl as T,xl as o};
