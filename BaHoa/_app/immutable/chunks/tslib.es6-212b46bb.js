var c=function(){return c=Object.assign||function(a){for(var t,r=1,e=arguments.length;r<e;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(a[o]=t[o])}return a},c.apply(this,arguments)};function y(n,a){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&a.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,r=Object.getOwnPropertySymbols(n);e<r.length;e++)a.indexOf(r[e])<0&&Object.prototype.propertyIsEnumerable.call(n,r[e])&&(t[r[e]]=n[r[e]]);return t}function i(n,a){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var r=t.call(n),e,o=[],l;try{for(;(a===void 0||a-- >0)&&!(e=r.next()).done;)o.push(e.value)}catch(f){l={error:f}}finally{try{e&&!e.done&&(t=r.return)&&t.call(r)}finally{if(l)throw l.error}}return o}function u(n,a,t){if(t||arguments.length===2)for(var r=0,e=a.length,o;r<e;r++)(o||!(r in a))&&(o||(o=Array.prototype.slice.call(a,0,r)),o[r]=a[r]);return n.concat(o||Array.prototype.slice.call(a))}export{y as _,i as a,c as b,u as c};