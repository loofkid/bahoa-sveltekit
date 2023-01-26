import{S as ua,i as ma,s as da,a1 as Z,q as va,w as pa,a2 as q,m as K,r as ga,h as A,x as ba,n as h,b as $,G as un,y as ha,f as ya,t as ka,z as Ca,a as Lt,c as Rt,P as vt,B as wa,D as xa}from"./index-b7e5ee0b.js";import{m as Aa}from"./browser-925b8dac.js";function Ea(t){const n=t-1;return n*n*n+1}function fr(t,{delay:n=0,duration:a=400,easing:e=Ea,x:r=0,y:o=0,opacity:i=0}={}){const s=getComputedStyle(t),f=+s.opacity,c=s.transform==="none"?"":s.transform,l=f*(1-i);return{delay:n,duration:a,easing:e,css:(u,v)=>`
			transform: ${c} translate(${(1-u)*r}px, ${(1-u)*o}px);
			opacity: ${f-l*v}`}}function Sa(t){let n,a,e,r,o,i,s,f,c;return{c(){n=Z("path"),a=Lt(),e=Z("path"),r=Lt(),o=Z("path"),i=Lt(),s=Z("path"),this.h()},l(l){n=q(l,"path",{d:!0,fill:!0,"fill-opacity":!0,stroke:!0,"stroke-opacity":!0,"stroke-width":!0,"stroke-linecap":!0}),K(n).forEach(A),a=Rt(l),e=q(l,"path",{d:!0,id:!0,class:!0}),K(e).forEach(A),r=Rt(l),o=q(l,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0}),K(o).forEach(A),i=Rt(l),s=q(l,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0}),K(s).forEach(A),this.h()},h(){h(n,"d","M324.928 75.4905C324.342 76.2239 325.566 78.5272 325.668 79.4428C325.315 80.1475 322.181 80.5902 321.422 80.5902C319.473 80.5902 317.764 80.0384 315.851 79.9018C314.984 79.8398 314.138 79.0317 313.276 78.9838C312.682 78.9509 312.015 79.0024 311.669 78.3974C311.365 77.8648 310.977 77.4723 310.7 76.9184C310.384 76.2863 311.274 75.6537 311.427 74.9678C311.664 73.9019 311.939 71.7452 310.751 71.0028C310.256 70.6933 309.736 69.9118 309.374 69.4601C308.627 68.5259 309.653 66.5875 309.323 65.3931C308.812 63.5409 309.374 62.1504 309.374 60.2807C309.374 58.9823 310.564 57.8872 310.279 56.6089C310.097 55.7872 309.137 55.261 308.928 54.5308C308.62 53.451 308.396 53.7045 307.36 53.0519C305.451 51.8499 303.045 52.6549 300.973 52.8351C299.528 52.9608 298.221 53.7967 296.778 53.9571C295.557 54.0927 294.258 53.9698 293.03 53.9698C292.135 53.9698 291.218 53.866 290.352 53.6256C289.829 53.4801 290.065 53.3016 289.753 53.0519C289.36 52.7371 289.215 51.4683 289.001 50.9865C288.633 50.1574 287.762 50.2216 287.114 49.6096C286.439 48.9719 285.799 48.5518 284.921 48.2326C283.574 47.7428 280.871 47.6196 280.472 45.823C280.144 44.35 280 42.952 280 41.348C280 40.4303 280.494 39.7069 281.135 39.0659C281.956 38.2446 282.124 37.8979 283.213 38.1862C284.159 38.4366 285.048 38.6523 285.967 39.0022C287.133 39.4464 289.237 38.6393 290.327 38.25C292.218 37.5747 293.572 36.1866 295.452 35.5599C297.496 34.8787 299.592 34.9156 301.584 35.1647C302.992 35.3405 304.453 35.9898 305.855 36.2993C308.595 36.9041 311.297 36.9878 314.091 36.9878C316.434 36.9878 318.588 36.1555 320.9 36.0699C322.419 36.0136 324.832 36.2791 325.948 37.3958C326.933 38.3808 326.793 40.1361 327.032 41.45C327.231 42.5471 328.422 43.4713 328.422 44.6756C328.422 45.3774 328.881 46.0314 328.881 46.7537V49.3801C328.881 51.1643 328.471 52.5845 328.205 54.314C327.962 55.896 327.697 57.9162 328.881 59.248C329.742 60.2167 330.717 61.5853 330.717 62.9198C330.717 66.2758 329.563 70.0149 327.147 72.4307C326.752 72.8254 326.467 73.342 326.012 73.7056C325.418 74.1807 325.342 74.9736 324.928 75.4905Z"),h(n,"fill","#858585"),h(n,"fill-opacity","0.75"),h(n,"stroke","#858585"),h(n,"stroke-opacity","0.75"),h(n,"stroke-width","3"),h(n,"stroke-linecap","round"),h(e,"d","M10.88 44.4H50.304C59.6907 44.4 66.8587 46.448 71.808 50.544C76.8427 54.64 79.36 60.5707 79.36 68.336C79.36 72.6027 78.08 76.4427 75.52 79.856C72.96 83.2693 69.248 85.616 64.384 86.896C69.6747 87.92 73.9413 90.3947 77.184 94.32C80.4267 98.16 82.048 103.195 82.048 109.424C82.048 117.019 79.36 123.035 73.984 127.472C68.6933 131.824 61.44 134 52.224 134H10.88V44.4ZM49.92 80.496C53.3333 80.496 56.064 79.5147 58.112 77.552C60.2453 75.504 61.312 72.816 61.312 69.488C61.312 66.16 60.2453 63.5147 58.112 61.552C56.064 59.504 53.3333 58.48 49.92 58.48H28.928V80.496H49.92ZM48.384 119.92C53.6747 119.92 57.6 118.896 60.16 116.848C62.72 114.715 64 111.515 64 107.248C64 102.981 62.72 99.824 60.16 97.776C57.6 95.6427 53.6747 94.576 48.384 94.576H28.928V119.92H48.384ZM147.398 115.44C147.398 117.744 147.825 119.621 148.678 121.072C149.617 122.523 151.238 124.101 153.542 125.808L142.406 135.536C137.542 133.061 134.214 129.947 132.422 126.192C130.545 128.837 127.985 131.056 124.742 132.848C121.499 134.64 117.489 135.536 112.71 135.536C106.651 135.536 101.83 134 98.246 130.928C94.662 127.771 92.87 123.333 92.87 117.616C92.87 112.496 94.1927 108.571 96.838 105.84C99.5687 103.024 102.683 101.104 106.182 100.08C109.681 99.056 113.563 98.3307 117.83 97.904L123.974 97.264C126.449 97.008 128.155 96.5813 129.094 95.984C130.118 95.3867 130.673 94.4053 130.758 93.04C130.587 90.48 129.734 88.304 128.198 86.512C126.747 84.72 123.931 83.824 119.75 83.824C117.019 83.824 114.63 84.336 112.582 85.36C110.534 86.384 108.443 88.048 106.31 90.352L94.918 82.416C97.3927 79.1733 100.507 76.6987 104.262 74.992C108.017 73.2 113.179 72.304 119.75 72.304C138.182 72.304 147.398 79.7707 147.398 94.704V115.44ZM116.934 123.632C121.371 123.632 124.785 122.565 127.174 120.432C129.563 118.213 130.758 115.525 130.758 112.368V106.992C129.393 107.504 126.79 107.973 122.95 108.4L119.11 108.784C116.209 109.04 113.777 109.723 111.814 110.832C109.851 111.856 108.87 113.819 108.87 116.72C108.87 118.939 109.595 120.645 111.046 121.84C112.497 123.035 114.459 123.632 116.934 123.632ZM202.505 44.4H220.553V82.032H255.369V44.4H273.417V134H255.369V96.112H220.553V134H202.505V44.4ZM317.658 135.536C308.783 135.536 301.957 133.488 297.178 129.392C292.399 125.296 290.01 119.451 290.01 111.856V95.984C290.01 88.3893 292.399 82.544 297.178 78.448C301.957 74.352 308.783 72.304 317.658 72.304C326.533 72.304 333.359 74.352 338.138 78.448C342.917 82.544 345.306 88.3893 345.306 95.984V111.856C345.306 119.451 342.917 125.296 338.138 129.392C333.359 133.488 326.533 135.536 317.658 135.536ZM317.658 122.736C321.157 122.736 323.845 121.797 325.722 119.92C327.685 118.043 328.666 115.355 328.666 111.856V95.984C328.666 92.4853 327.685 89.7973 325.722 87.92C323.845 86.0427 321.157 85.104 317.658 85.104C314.159 85.104 311.429 86.0427 309.466 87.92C307.589 89.7973 306.65 92.4853 306.65 95.984V111.856C306.65 115.355 307.589 118.043 309.466 119.92C311.429 121.797 314.159 122.736 317.658 122.736ZM409.523 115.44C409.523 117.744 409.95 119.621 410.803 121.072C411.742 122.523 413.363 124.101 415.667 125.808L404.531 135.536C399.667 133.061 396.339 129.947 394.547 126.192C392.67 128.837 390.11 131.056 386.867 132.848C383.624 134.64 379.614 135.536 374.835 135.536C368.776 135.536 363.955 134 360.371 130.928C356.787 127.771 354.995 123.333 354.995 117.616C354.995 112.496 356.318 108.571 358.963 105.84C361.694 103.024 364.808 101.104 368.307 100.08C371.806 99.056 375.688 98.3307 379.955 97.904L386.099 97.264C388.574 97.008 390.28 96.5813 391.219 95.984C392.243 95.3867 392.798 94.4053 392.883 93.04C392.712 90.48 391.859 88.304 390.323 86.512C388.872 84.72 386.056 83.824 381.875 83.824C379.144 83.824 376.755 84.336 374.707 85.36C372.659 86.384 370.568 88.048 368.435 90.352L357.043 82.416C359.518 79.1733 362.632 76.6987 366.387 74.992C370.142 73.2 375.304 72.304 381.875 72.304C400.307 72.304 409.523 79.7707 409.523 94.704V115.44ZM379.059 123.632C383.496 123.632 386.91 122.565 389.299 120.432C391.688 118.213 392.883 115.525 392.883 112.368V106.992C391.518 107.504 388.915 107.973 385.075 108.4L381.235 108.784C378.334 109.04 375.902 109.723 373.939 110.832C371.976 111.856 370.995 113.819 370.995 116.72C370.995 118.939 371.72 120.645 373.171 121.84C374.622 123.035 376.584 123.632 379.059 123.632Z"),h(e,"id","logo-text"),h(e,"class","svelte-15bqg1r"),h(o,"d","M80.3708 38.2936C79.6123 38.2731 78.7304 38.5432 78 38.5432C78.231 38.1967 78.6518 38.0092 78.8735 37.7321C79.0198 37.5492 79.8141 37.5969 80.0658 37.4825C80.4054 37.3282 81.2924 37.1706 81.681 37.1706C82.2735 37.1706 83.043 36.79 83.622 36.6091C86.0748 35.8426 88.206 34.7376 90.9147 35.0563C95.3667 35.58 100.342 35.3022 104.453 37.3578C105.814 38.038 106.946 39.1716 108.134 40.096C109.26 40.9718 110.728 41.7649 111.69 42.8481C112.02 43.2189 112.659 43.5118 113.091 43.7839C113.766 44.2087 114.537 44.6182 115.254 44.9762C116.882 45.7902 118.541 46.5577 120.175 47.3748C120.559 47.5663 121.035 47.55 121.396 47.7769C121.737 47.9921 122.068 48.1676 122.449 48.3037C123.156 48.5563 123.851 48.7409 124.543 49.0524C125.972 49.6954 127.244 50.1583 128.536 51.1182C129.659 51.9524 130.94 52.8682 131.78 53.9881C132.161 54.4965 132.635 55.0228 133.056 55.4855C133.399 55.8628 133.476 56.682 133.624 57.163C134.004 58.3972 133.199 59.6989 133.153 60.851C133.132 61.3731 132.726 61.9252 132.501 62.3761C132.319 62.7394 132.186 63.2095 131.933 63.5268C131.697 63.8209 131.532 64.3452 131.343 64.6845C131.097 65.1285 130.795 65.2693 130.352 65.551C129.306 66.2165 128.147 66.5531 127.031 67.0553C125.58 67.7083 123.845 68.0532 122.29 68.2476C121.477 68.3493 120.674 68.4903 119.85 68.4903C118.965 68.4903 118.101 68.2407 117.222 68.2407C115.355 68.2407 113.445 67.9414 111.621 67.6099C110.653 67.4338 109.537 66.8579 108.626 66.4938C107.409 66.0069 106.172 65.5742 104.945 65.1143C103.491 64.569 102.994 63.2656 101.84 62.3275C100.995 61.641 100.463 60.6314 99.6978 59.8666C99.0299 59.1987 98.661 58.1811 97.9093 57.6344C97.4689 57.3141 97.4024 56.7132 97.119 56.3589C96.7402 55.8854 96.9622 55.134 96.7863 54.5843C96.431 53.4742 95.9164 52.491 95.4969 51.4232C95.0945 50.399 94.3724 49.4945 93.6252 48.7474C92.585 47.7072 91.8879 46.2295 91.2266 44.9069C90.735 43.9237 89.9383 43.0071 89.2024 42.1895C88.5263 41.4382 87.8639 40.5056 87.0119 39.9157C85.8033 39.079 84.2175 39.1071 82.8109 38.765C82.0604 38.5824 81.1438 38.3145 80.3708 38.2936Z"),h(o,"fill","#E8B95E"),h(o,"stroke","#F18446"),h(o,"stroke-width","3"),h(o,"stroke-linecap","round"),h(s,"d","M119.387 64.8013C120.723 65.6518 122.576 66.376 124.102 66.1853C124.102 66.2141 126.523 64.5532 126.741 64.3346C126.741 63.6638 126.509 62.6536 125.985 62.1299C125.115 61.2599 124.137 60.3673 123.442 59.3459C122.845 58.4676 122.028 57.4415 120.98 57.0607C120.491 56.8827 119.801 56.4429 119.395 56.1273C118.705 55.5902 117.469 55.2128 116.651 54.8962C115.547 54.4688 114.76 53.589 113.738 53.0053C112.834 52.4884 111.807 52.1434 110.987 51.6214C110.602 51.3764 108.385 50.1962 109.152 51.1547C109.687 51.823 110.027 52.8684 110.488 53.6169C111.108 54.6241 111.74 55.6332 112.371 56.6584C113.296 58.1628 114.359 59.7898 115.774 60.8908C117.161 61.9694 117.79 63.785 119.387 64.8013Z"),h(s,"fill","#F2DACC"),h(s,"stroke","#F2DACC"),h(s,"stroke-width","3"),h(s,"stroke-linecap","round")},m(l,u){$(l,n,u),$(l,a,u),$(l,e,u),$(l,r,u),$(l,o,u),$(l,i,u),$(l,s,u),f||(c=[vt(t[0].call(null,n)),vt(t[0].call(null,e)),vt(t[0].call(null,o)),vt(t[0].call(null,s))],f=!0)},p:wa,d(l){l&&A(n),l&&A(a),l&&A(e),l&&A(r),l&&A(o),l&&A(i),l&&A(s),f=!1,xa(c)}}}function Oa(t){let n,a,e,r,o;return r=new Aa({props:{isSVG:!0,$$slots:{default:[Sa,({motion:i})=>({0:i}),({motion:i})=>i?1:0]},$$scope:{ctx:t}}}),{c(){n=Z("svg"),a=Z("title"),e=va("Ba Hoa Logo"),pa(r.$$.fragment),this.h()},l(i){n=q(i,"svg",{viewBox:!0,fill:!0,xmlns:!0,class:!0});var s=K(n);a=q(s,"title",{});var f=K(a);e=ga(f,"Ba Hoa Logo"),f.forEach(A),ba(r.$$.fragment,s),s.forEach(A),this.h()},h(){h(n,"viewBox","0 0 418 166"),h(n,"fill","none"),h(n,"xmlns","http://www.w3.org/2000/svg"),h(n,"class","drop-shadow-lg max-h-[100vh] max-w-[100vh] h-full w-full")},m(i,s){$(i,n,s),un(n,a),un(a,e),ha(r,n,null),o=!0},p(i,[s]){const f={};s&2&&(f.$$scope={dirty:s,ctx:i}),r.$set(f)},i(i){o||(ya(r.$$.fragment,i),o=!0)},o(i){ka(r.$$.fragment,i),o=!1},d(i){i&&A(n),Ca(r)}}}class lr extends ua{constructor(n){super(),ma(this,n,null,Oa,da,{})}}function mn(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function m(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?mn(Object(a),!0).forEach(function(e){k(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):mn(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function St(t){return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},St(t)}function Pa(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function dn(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _a(t,n,a){return n&&dn(t.prototype,n),a&&dn(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function k(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function Kt(t,n){return Na(t)||Ma(t,n)||Dn(t,n)||Ra()}function ut(t){return Ia(t)||Ta(t)||Dn(t)||La()}function Ia(t){if(Array.isArray(t))return jt(t)}function Na(t){if(Array.isArray(t))return t}function Ta(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ma(t,n){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var e=[],r=!0,o=!1,i,s;try{for(a=a.call(t);!(r=(i=a.next()).done)&&(e.push(i.value),!(n&&e.length===n));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(o)throw s}}return e}}function Dn(t,n){if(t){if(typeof t=="string")return jt(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return jt(t,n)}}function jt(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function La(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ra(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vn=function(){},Qt={},zn={},$n=null,jn={mark:vn,measure:vn};try{typeof window<"u"&&(Qt=window),typeof document<"u"&&(zn=document),typeof MutationObserver<"u"&&($n=MutationObserver),typeof performance<"u"&&(jn=performance)}catch{}var Fa=Qt.navigator||{},pn=Fa.userAgent,gn=pn===void 0?"":pn,j=Qt,b=zn,bn=$n,pt=jn;j.document;var F=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",Yn=~gn.indexOf("MSIE")||~gn.indexOf("Trident/"),gt,bt,ht,yt,kt,M="___FONT_AWESOME___",Yt=16,Hn="fa",Un="svg-inline--fa",G="data-fa-i2svg",Ht="data-fa-pseudo-element",Da="data-fa-pseudo-element-pending",Jt="data-prefix",tn="data-icon",hn="fontawesome-i2svg",za="async",$a=["HTML","HEAD","STYLE","SCRIPT"],Vn=function(){try{return!0}catch{return!1}}(),g="classic",y="sharp",nn=[g,y];function mt(t){return new Proxy(t,{get:function(a,e){return e in a?a[e]:a[g]}})}var ot=mt((gt={},k(gt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),k(gt,y,{fa:"solid",fass:"solid","fa-solid":"solid"}),gt)),st=mt((bt={},k(bt,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),k(bt,y,{solid:"fass"}),bt)),ft=mt((ht={},k(ht,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),k(ht,y,{fass:"fa-solid"}),ht)),ja=mt((yt={},k(yt,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),k(yt,y,{"fa-solid":"fass"}),yt)),Ya=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Wn="fa-layers-text",Ha=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ua=mt((kt={},k(kt,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),k(kt,y,{900:"fass"}),kt)),Bn=[1,2,3,4,5,6,7,8,9,10],Va=Bn.concat([11,12,13,14,15,16,17,18,19,20]),Wa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lt=new Set;Object.keys(st[g]).map(lt.add.bind(lt));Object.keys(st[y]).map(lt.add.bind(lt));var Ba=[].concat(nn,ut(lt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(Bn.map(function(t){return"".concat(t,"x")})).concat(Va.map(function(t){return"w-".concat(t)})),rt=j.FontAwesomeConfig||{};function Ga(t){var n=b.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Xa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(b&&typeof b.querySelector=="function"){var Za=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Za.forEach(function(t){var n=Kt(t,2),a=n[0],e=n[1],r=Xa(Ga(a));r!=null&&(rt[e]=r)})}var Gn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Hn,replacementClass:Un,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);var nt=m(m({},Gn),rt);nt.autoReplaceSvg||(nt.observeMutations=!1);var d={};Object.keys(Gn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(a){nt[t]=a,it.forEach(function(e){return e(d)})},get:function(){return nt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){nt.cssPrefix=n,it.forEach(function(a){return a(d)})},get:function(){return nt.cssPrefix}});j.FontAwesomeConfig=d;var it=[];function qa(t){return it.push(t),function(){it.splice(it.indexOf(t),1)}}var z=Yt,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ka(t){if(!(!t||!F)){var n=b.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var a=b.head.childNodes,e=null,r=a.length-1;r>-1;r--){var o=a[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=o)}return b.head.insertBefore(n,e),t}}var Qa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){for(var t=12,n="";t-- >0;)n+=Qa[Math.random()*62|0];return n}function at(t){for(var n=[],a=(t||[]).length>>>0;a--;)n[a]=t[a];return n}function an(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Xn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ja(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,'="').concat(Xn(t[a]),'" ')},"").trim()}function _t(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,": ").concat(t[a].trim(),";")},"")}function en(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function te(t){var n=t.transform,a=t.containerWidth,e=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:c}}function ne(t){var n=t.transform,a=t.width,e=a===void 0?Yt:a,r=t.height,o=r===void 0?Yt:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&Yn?f+="translate(".concat(n.x/z-e/2,"em, ").concat(n.y/z-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/z,"em), calc(-50% + ").concat(n.y/z,"em)) "):f+="translate(".concat(n.x/z,"em, ").concat(n.y/z,"em) "),f+="scale(".concat(n.size/z*(n.flipX?-1:1),", ").concat(n.size/z*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var ae=`:root, :host {
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
}`;function Zn(){var t=Hn,n=Un,a=d.cssPrefix,e=d.replacementClass,r=ae;if(a!==t||e!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var yn=!1;function Ft(){d.autoAddCss&&!yn&&(Ka(Zn()),yn=!0)}var ee={mixout:function(){return{dom:{css:Zn,insertCss:Ft}}},hooks:function(){return{beforeDOMElementCreation:function(){Ft()},beforeI2svg:function(){Ft()}}}},L=j||{};L[M]||(L[M]={});L[M].styles||(L[M].styles={});L[M].hooks||(L[M].hooks={});L[M].shims||(L[M].shims=[]);var _=L[M],qn=[],re=function t(){b.removeEventListener("DOMContentLoaded",t),Ot=1,qn.map(function(n){return n()})},Ot=!1;F&&(Ot=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),Ot||b.addEventListener("DOMContentLoaded",re));function ie(t){F&&(Ot?setTimeout(t,0):qn.push(t))}function dt(t){var n=t.tag,a=t.attributes,e=a===void 0?{}:a,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?Xn(t):"<".concat(n," ").concat(Ja(e),">").concat(o.map(dt).join(""),"</").concat(n,">")}function kn(t,n,a){if(t&&t[n]&&t[n][a])return{prefix:n,iconName:a,icon:t[n][a]}}var oe=function(n,a){return function(e,r,o,i){return n.call(a,e,r,o,i)}},Dt=function(n,a,e,r){var o=Object.keys(n),i=o.length,s=r!==void 0?oe(a,r):a,f,c,l;for(e===void 0?(f=1,l=n[o[0]]):(f=0,l=e);f<i;f++)c=o[f],l=s(l,n[c],c,n);return l};function se(t){for(var n=[],a=0,e=t.length;a<e;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var o=t.charCodeAt(a++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),a--)}else n.push(r)}return n}function Ut(t){var n=se(t);return n.length===1?n[0].toString(16):null}function fe(t,n){var a=t.length,e=t.charCodeAt(n),r;return e>=55296&&e<=56319&&a>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function Cn(t){return Object.keys(t).reduce(function(n,a){var e=t[a],r=!!e.icon;return r?n[e.iconName]=e.icon:n[a]=e,n},{})}function Vt(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,o=Cn(n);typeof _.hooks.addPack=="function"&&!r?_.hooks.addPack(t,Cn(n)):_.styles[t]=m(m({},_.styles[t]||{}),o),t==="fas"&&Vt("fa",n)}var Ct,wt,xt,Q=_.styles,le=_.shims,ce=(Ct={},k(Ct,g,Object.values(ft[g])),k(Ct,y,Object.values(ft[y])),Ct),rn=null,Kn={},Qn={},Jn={},ta={},na={},ue=(wt={},k(wt,g,Object.keys(ot[g])),k(wt,y,Object.keys(ot[y])),wt);function me(t){return~Ba.indexOf(t)}function de(t,n){var a=n.split("-"),e=a[0],r=a.slice(1).join("-");return e===t&&r!==""&&!me(r)?r:null}var aa=function(){var n=function(o){return Dt(Q,function(i,s,f){return i[f]=Dt(s,o,{}),i},{})};Kn=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Qn=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),na=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var a="far"in Q||d.autoFetchSvg,e=Dt(le,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Jn=e.names,ta=e.unicodes,rn=It(d.styleDefault,{family:d.familyDefault})};qa(function(t){rn=It(t.styleDefault,{family:d.familyDefault})});aa();function on(t,n){return(Kn[t]||{})[n]}function ve(t,n){return(Qn[t]||{})[n]}function B(t,n){return(na[t]||{})[n]}function ea(t){return Jn[t]||{prefix:null,iconName:null}}function pe(t){var n=ta[t],a=on("fas",t);return n||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Y(){return rn}var sn=function(){return{prefix:null,iconName:null,rest:[]}};function It(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.family,e=a===void 0?g:a,r=ot[e][t],o=st[e][t]||st[e][r],i=t in _.styles?t:null;return o||i||null}var wn=(xt={},k(xt,g,Object.keys(ft[g])),k(xt,y,Object.keys(ft[y])),xt);function Nt(t){var n,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,o=(n={},k(n,g,"".concat(d.cssPrefix,"-").concat(g)),k(n,y,"".concat(d.cssPrefix,"-").concat(y)),n),i=null,s=g;(t.includes(o[g])||t.some(function(c){return wn[g].includes(c)}))&&(s=g),(t.includes(o[y])||t.some(function(c){return wn[y].includes(c)}))&&(s=y);var f=t.reduce(function(c,l){var u=de(d.cssPrefix,l);if(Q[l]?(l=ce[s].includes(l)?ja[s][l]:l,i=l,c.prefix=l):ue[s].indexOf(l)>-1?(i=l,c.prefix=It(l,{family:s})):u?c.iconName=u:l!==d.replacementClass&&l!==o[g]&&l!==o[y]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var v=i==="fa"?ea(c.iconName):{},p=B(c.prefix,c.iconName);v.prefix&&(i=null),c.iconName=v.iconName||p||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!Q.far&&Q.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},sn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(Q.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=B(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=Y()||"fas"),f}var ge=function(){function t(){Pa(this,t),this.definitions={}}return _a(t,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=m(m({},a.definitions[s]||{}),i[s]),Vt(s,i[s]);var f=ft[g][s];f&&Vt(f,i[s]),aa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,c=i.icon,l=c[2];a[s]||(a[s]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(a[s][u]=c)}),a[s][f]=c}),a}}]),t}(),xn=[],J={},tt={},be=Object.keys(tt);function he(t,n){var a=n.mixoutsTo;return xn=t,J={},Object.keys(tt).forEach(function(e){be.indexOf(e)===-1&&delete tt[e]}),xn.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),St(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=r[i][s]})}),e.hooks){var o=e.hooks();Object.keys(o).forEach(function(i){J[i]||(J[i]=[]),J[i].push(o[i])})}e.provides&&e.provides(tt)}),a}function Wt(t,n){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var o=J[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(e))}),n}function X(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),e=1;e<n;e++)a[e-1]=arguments[e];var r=J[t]||[];r.forEach(function(o){o.apply(null,a)})}function R(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,n):void 0}function Bt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,a=t.prefix||Y();if(n)return n=B(a,n)||n,kn(ra.definitions,a,n)||kn(_.styles,a,n)}var ra=new ge,ye=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,X("noAuto")},ke={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(X("beforeI2svg",n),R("pseudoElements2svg",n),R("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ie(function(){we({autoReplaceSvgRoot:a}),X("watch",n)})}},Ce={icon:function(n){if(n===null)return null;if(St(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:B(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var a=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=It(n[0]);return{prefix:e,iconName:B(e,a)||a}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Ya))){var r=Nt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:B(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=Y();return{prefix:o,iconName:B(o,n)||n}}}},S={noAuto:ye,config:d,dom:ke,parse:Ce,library:ra,findIconDefinition:Bt,toHtml:dt},we=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot,e=a===void 0?b:a;(Object.keys(_.styles).length>0||d.autoFetchSvg)&&F&&d.autoReplaceSvg&&S.dom.i2svg({node:e})};function Tt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return dt(e)})}}),Object.defineProperty(t,"node",{get:function(){if(F){var e=b.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function xe(t){var n=t.children,a=t.main,e=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(en(i)&&a.found&&!e.found){var s=a.width,f=a.height,c={x:s/f/2,y:.5};r.style=_t(m(m({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Ae(t){var n=t.prefix,a=t.iconName,e=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:i}),children:e}]}]}function fn(t){var n=t.icons,a=n.main,e=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,u=t.extra,v=t.watchable,p=v===void 0?!1:v,w=e.found?e:a,O=w.width,P=w.height,I=r==="fak",C=[d.replacementClass,o?"".concat(d.cssPrefix,"-").concat(o):""].filter(function(D){return u.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(u.classes).join(" "),x={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":r,"data-icon":o,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(P)})},N=I&&!~u.classes.indexOf("fa-fw")?{width:"".concat(O/P*16*.0625,"em")}:{};p&&(x.attributes[G]=""),f&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||ct())},children:[f]}),delete x.attributes.title);var E=m(m({},x),{},{prefix:r,iconName:o,main:a,mask:e,maskId:c,transform:i,symbol:s,styles:m(m({},N),u.styles)}),U=e.found&&a.found?R("generateAbstractMask",E)||{children:[],attributes:{}}:R("generateAbstractIcon",E)||{children:[],attributes:{}},V=U.children,Mt=U.attributes;return E.children=V,E.attributes=Mt,s?Ae(E):xe(E)}function An(t){var n=t.content,a=t.width,e=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,c=m(m(m({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(c[G]="");var l=m({},i.styles);en(r)&&(l.transform=ne({transform:r,startCentered:!0,width:a,height:e}),l["-webkit-transform"]=l.transform);var u=_t(l);u.length>0&&(c.style=u);var v=[];return v.push({tag:"span",attributes:c,children:[n]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function Ee(t){var n=t.content,a=t.title,e=t.extra,r=m(m(m({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),o=_t(e.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var zt=_.styles;function Gt(t){var n=t[0],a=t[1],e=t.slice(4),r=Kt(e,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:a,icon:i}}var Se={found:!1,width:512,height:512};function Oe(t,n){!Vn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Xt(t,n){var a=n;return n==="fa"&&d.styleDefault!==null&&(n=Y()),new Promise(function(e,r){if(R("missingIconAbstract"),a==="fa"){var o=ea(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&zt[n]&&zt[n][t]){var i=zt[n][t];return e(Gt(i))}Oe(t,n),e(m(m({},Se),{},{icon:d.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var En=function(){},Zt=d.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:En,measure:En},et='FA "6.2.1"',Pe=function(n){return Zt.mark("".concat(et," ").concat(n," begins")),function(){return ia(n)}},ia=function(n){Zt.mark("".concat(et," ").concat(n," ends")),Zt.measure("".concat(et," ").concat(n),"".concat(et," ").concat(n," begins"),"".concat(et," ").concat(n," ends"))},ln={begin:Pe,end:ia},At=function(){};function Sn(t){var n=t.getAttribute?t.getAttribute(G):null;return typeof n=="string"}function _e(t){var n=t.getAttribute?t.getAttribute(Jt):null,a=t.getAttribute?t.getAttribute(tn):null;return n&&a}function Ie(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ne(){if(d.autoReplaceSvg===!0)return Et.replace;var t=Et[d.autoReplaceSvg];return t||Et.replace}function Te(t){return b.createElementNS("http://www.w3.org/2000/svg",t)}function Me(t){return b.createElement(t)}function oa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.ceFn,e=a===void 0?t.tag==="svg"?Te:Me:a;if(typeof t=="string")return b.createTextNode(t);var r=e(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(oa(i,{ceFn:e}))}),r}function Le(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Et={replace:function(n){var a=n[0];if(a.parentNode)if(n[1].forEach(function(r){a.parentNode.insertBefore(oa(r),a)}),a.getAttribute(G)===null&&d.keepOriginalSource){var e=b.createComment(Le(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(n){var a=n[0],e=n[1];if(~an(a).indexOf(d.replacementClass))return Et.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var o=e[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=e.map(function(s){return dt(s)}).join(`
`);a.setAttribute(G,""),a.innerHTML=i}};function On(t){t()}function sa(t,n){var a=typeof n=="function"?n:At;if(t.length===0)a();else{var e=On;d.mutateApproach===za&&(e=j.requestAnimationFrame||On),e(function(){var r=Ne(),o=ln.begin("mutate");t.map(r),o(),a()})}}var cn=!1;function fa(){cn=!0}function qt(){cn=!1}var Pt=null;function Pn(t){if(bn&&d.observeMutations){var n=t.treeCallback,a=n===void 0?At:n,e=t.nodeCallback,r=e===void 0?At:e,o=t.pseudoElementsCallback,i=o===void 0?At:o,s=t.observeMutationsRoot,f=s===void 0?b:s;Pt=new bn(function(c){if(!cn){var l=Y();at(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Sn(u.addedNodes[0])&&(d.searchPseudoElements&&i(u.target),a(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&Sn(u.target)&&~Wa.indexOf(u.attributeName))if(u.attributeName==="class"&&_e(u.target)){var v=Nt(an(u.target)),p=v.prefix,w=v.iconName;u.target.setAttribute(Jt,p||l),w&&u.target.setAttribute(tn,w)}else Ie(u.target)&&r(u.target)})}}),F&&Pt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Re(){Pt&&Pt.disconnect()}function Fe(t){var n=t.getAttribute("style"),a=[];return n&&(a=n.split(";").reduce(function(e,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(e[i]=s.join(":").trim()),e},{})),a}function De(t){var n=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),e=t.innerText!==void 0?t.innerText.trim():"",r=Nt(an(t));return r.prefix||(r.prefix=Y()),n&&a&&(r.prefix=n,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=ve(r.prefix,t.innerText)||on(r.prefix,Ut(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ze(t){var n=at(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),a=t.getAttribute("title"),e=t.getAttribute("data-fa-title-id");return d.autoA11y&&(a?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(e||ct()):(n["aria-hidden"]="true",n.focusable="false")),n}function $e(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _n(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=De(t),e=a.iconName,r=a.prefix,o=a.rest,i=ze(t),s=Wt("parseNodeAttributes",{},t),f=n.styleParser?Fe(t):[];return m({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var je=_.styles;function la(t){var n=d.autoReplaceSvg==="nest"?_n(t,{styleParser:!1}):_n(t);return~n.extra.classes.indexOf(Wn)?R("generateLayersText",t,n):R("generateSvgReplacementMutation",t,n)}var H=new Set;nn.map(function(t){H.add("fa-".concat(t))});Object.keys(ot[g]).map(H.add.bind(H));Object.keys(ot[y]).map(H.add.bind(H));H=ut(H);function In(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var a=b.documentElement.classList,e=function(u){return a.add("".concat(hn,"-").concat(u))},r=function(u){return a.remove("".concat(hn,"-").concat(u))},o=d.autoFetchSvg?H:nn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(je));o.includes("fa")||o.push("fa");var i=[".".concat(Wn,":not([").concat(G,"])")].concat(o.map(function(l){return".".concat(l,":not([").concat(G,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=at(t.querySelectorAll(i))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=ln.begin("onTree"),c=s.reduce(function(l,u){try{var v=la(u);v&&l.push(v)}catch(p){Vn||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,u){Promise.all(c).then(function(v){sa(v,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(v){f(),u(v)})})}function Ye(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;la(t).then(function(a){a&&sa([a],n)})}function He(t){return function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Bt(n||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Bt(r||{})),t(e,m(m({},a),{},{mask:r}))}}var Ue=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?T:e,o=a.symbol,i=o===void 0?!1:o,s=a.mask,f=s===void 0?null:s,c=a.maskId,l=c===void 0?null:c,u=a.title,v=u===void 0?null:u,p=a.titleId,w=p===void 0?null:p,O=a.classes,P=O===void 0?[]:O,I=a.attributes,C=I===void 0?{}:I,x=a.styles,N=x===void 0?{}:x;if(n){var E=n.prefix,U=n.iconName,V=n.icon;return Tt(m({type:"icon"},n),function(){return X("beforeDOMElementCreation",{iconDefinition:n,params:a}),d.autoA11y&&(v?C["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(w||ct()):(C["aria-hidden"]="true",C.focusable="false")),fn({icons:{main:Gt(V),mask:f?Gt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:U,transform:m(m({},T),r),symbol:i,title:v,maskId:l,titleId:w,extra:{attributes:C,styles:N,classes:P}})})}},Ve={mixout:function(){return{icon:He(Ue)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=In,a.nodeCallback=Ye,a}}},provides:function(n){n.i2svg=function(a){var e=a.node,r=e===void 0?b:e,o=a.callback,i=o===void 0?function(){}:o;return In(r,i)},n.generateSvgReplacementMutation=function(a,e){var r=e.iconName,o=e.title,i=e.titleId,s=e.prefix,f=e.transform,c=e.symbol,l=e.mask,u=e.maskId,v=e.extra;return new Promise(function(p,w){Promise.all([Xt(r,s),l.iconName?Xt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var P=Kt(O,2),I=P[0],C=P[1];p([a,fn({icons:{main:I,mask:C},prefix:s,iconName:r,transform:f,symbol:c,maskId:u,title:o,titleId:i,extra:v,watchable:!0})])}).catch(w)})},n.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,o=a.main,i=a.transform,s=a.styles,f=_t(s);f.length>0&&(r.style=f);var c;return en(i)&&(c=R("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),e.push(c||o.icon),{children:e,attributes:r}}}},We={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,o=r===void 0?[]:r;return Tt({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:a,params:e});var i=[];return a(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ut(o)).join(" ")},children:i}]})}}}},Be={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,o=r===void 0?null:r,i=e.classes,s=i===void 0?[]:i,f=e.attributes,c=f===void 0?{}:f,l=e.styles,u=l===void 0?{}:l;return Tt({type:"counter",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:e}),Ee({content:a.toString(),title:o,extra:{attributes:c,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ut(s))}})})}}}},Ge={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,o=r===void 0?T:r,i=e.title,s=i===void 0?null:i,f=e.classes,c=f===void 0?[]:f,l=e.attributes,u=l===void 0?{}:l,v=e.styles,p=v===void 0?{}:v;return Tt({type:"text",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:e}),An({content:a,transform:m(m({},T),o),title:s,extra:{attributes:u,styles:p,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ut(c))}})})}}},provides:function(n){n.generateLayersText=function(a,e){var r=e.title,o=e.transform,i=e.extra,s=null,f=null;if(Yn){var c=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,An({content:a.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},Xe=new RegExp('"',"ug"),Nn=[1105920,1112319];function Ze(t){var n=t.replace(Xe,""),a=fe(n,0),e=a>=Nn[0]&&a<=Nn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Ut(r?n[0]:n),isSecondary:e||r}}function Tn(t,n){var a="".concat(Da).concat(n.replace(":","-"));return new Promise(function(e,r){if(t.getAttribute(a)!==null)return e();var o=at(t.children),i=o.filter(function(V){return V.getAttribute(Ht)===n})[0],s=j.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Ha),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),e();if(f&&l!=="none"&&l!==""){var u=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?y:g,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?st[v][f[2].toLowerCase()]:Ua[v][c],w=Ze(u),O=w.value,P=w.isSecondary,I=f[0].startsWith("FontAwesome"),C=on(p,O),x=C;if(I){var N=pe(O);N.iconName&&N.prefix&&(C=N.iconName,p=N.prefix)}if(C&&!P&&(!i||i.getAttribute(Jt)!==p||i.getAttribute(tn)!==x)){t.setAttribute(a,x),i&&t.removeChild(i);var E=$e(),U=E.extra;U.attributes[Ht]=n,Xt(C,p).then(function(V){var Mt=fn(m(m({},E),{},{icons:{main:V,mask:sn()},prefix:p,iconName:x,extra:U,watchable:!0})),D=b.createElement("svg");n==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=Mt.map(function(ca){return dt(ca)}).join(`
`),t.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function qe(t){return Promise.all([Tn(t,"::before"),Tn(t,"::after")])}function Ke(t){return t.parentNode!==document.head&&!~$a.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ht)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Mn(t){if(F)return new Promise(function(n,a){var e=at(t.querySelectorAll("*")).filter(Ke).map(qe),r=ln.begin("searchPseudoElements");fa(),Promise.all(e).then(function(){r(),qt(),n()}).catch(function(){r(),qt(),a()})})}var Qe={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Mn,a}}},provides:function(n){n.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?b:e;d.searchPseudoElements&&Mn(r)}}},Ln=!1,Je={mixout:function(){return{dom:{unwatch:function(){fa(),Ln=!0}}}},hooks:function(){return{bootstrap:function(){Pn(Wt("mutationObserverCallbacks",{}))},noAuto:function(){Re()},watch:function(a){var e=a.observeMutationsRoot;Ln?qt():Pn(Wt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Rn=function(n){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return e.flipX=!0,e;if(i&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(i){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},tr={mixout:function(){return{parse:{transform:function(a){return Rn(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=Rn(r)),a}}},provides:function(n){n.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(f," ").concat(c," ").concat(l)},v={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:u,path:v};return{tag:"g",attributes:m({},p.outer),children:[{tag:"g",attributes:m({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:m(m({},e.icon.attributes),p.path)}]}]}}}},$t={x:0,y:0,width:"100%",height:"100%"};function Fn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function nr(t){return t.tag==="g"?t.children:[t]}var ar={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),o=r?Nt(r.split(" ").map(function(i){return i.trim()})):sn();return o.prefix||(o.prefix=Y()),a.mask=o,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(n){n.generateAbstractMask=function(a){var e=a.children,r=a.attributes,o=a.main,i=a.mask,s=a.maskId,f=a.transform,c=o.width,l=o.icon,u=i.width,v=i.icon,p=te({transform:f,containerWidth:u,iconWidth:c}),w={tag:"rect",attributes:m(m({},$t),{},{fill:"white"})},O=l.children?{children:l.children.map(Fn)}:{},P={tag:"g",attributes:m({},p.inner),children:[Fn(m({tag:l.tag,attributes:m(m({},l.attributes),p.path)},O))]},I={tag:"g",attributes:m({},p.outer),children:[P]},C="mask-".concat(s||ct()),x="clip-".concat(s||ct()),N={tag:"mask",attributes:m(m({},$t),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,I]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:nr(v)},N]};return e.push(E,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(C,")")},$t)}),{children:e,attributes:r}}}},er={provides:function(n){var a=!1;j.matchMedia&&(a=j.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=m(m({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:m(m({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:m(m({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},rr={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return a.symbol=o,a}}}},ir=[ee,Ve,We,Be,Ge,Qe,Je,tr,ar,er,rr];he(ir,{mixoutsTo:S});S.noAuto;S.config;var cr=S.library;S.dom;S.parse;var ur=S.findIconDefinition;S.toHtml;S.icon;S.layer;S.text;S.counter;export{lr as L,fr as a,ur as f,cr as l};
