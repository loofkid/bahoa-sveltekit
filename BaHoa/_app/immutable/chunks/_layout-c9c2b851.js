import{r as b,_ as T,C as A,E as K,a as U,F as H,o as we,g as Ie,L as be,i as ye,c as $,b as Te,v as Ae,d as ve,e as Se,f as ke,h as Ce}from"./index-c6def6da-b19778cf.js";var Ee="firebase",Re="9.15.0";/**
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
 */b(Ee,Re,"app");const Y="@firebase/installations",D="0.6.0";/**
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
 */const W=1e4,J=`w:${D}`,Q="FIS_v2",_e="https://firebaseinstallations.googleapis.com/v1",De=60*60*1e3,Oe="installations",Fe="Installations";/**
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
 */const Me={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},m=new K(Oe,Fe,Me);function X(e){return e instanceof H&&e.code.includes("request-failed")}/**
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
 */function Z({projectId:e}){return`${_e}/projects/${e}/installations`}function ee(e){return{token:e.token,requestStatus:2,expiresIn:$e(e.expiresIn),creationTime:Date.now()}}async function te(e,t){const a=(await t.json()).error;return m.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function ne({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Pe(e,{refreshToken:t}){const n=ne(e);return n.append("Authorization",je(t)),n}async function ae(e){const t=await e();return t.status>=500&&t.status<600?e():t}function $e(e){return Number(e.replace("s","000"))}function je(e){return`${Q} ${e}`}/**
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
 */async function Ne({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=Z(e),i=ne(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Q,appId:e.appId,sdkVersion:J},r={method:"POST",headers:i,body:JSON.stringify(o)},c=await ae(()=>fetch(a,r));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ee(l.authToken)}}else throw await te("Create Installation",c)}/**
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
 */function ie(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function xe(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qe=/^[cdef][\w-]{21}$/,_="";function Le(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Be(e);return qe.test(n)?n:_}catch{return _}}function Be(e){return xe(e).substr(0,22)}/**
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
 */function S(e){return`${e.appName}!${e.appId}`}/**
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
 */const se=new Map;function oe(e,t){const n=S(e);re(n,t),Ve(n,t)}function re(e,t){const n=se.get(e);if(!!n)for(const a of n)a(t)}function Ve(e,t){const n=ze();n&&n.postMessage({key:e,fid:t}),Ge()}let g=null;function ze(){return!g&&"BroadcastChannel"in self&&(g=new BroadcastChannel("[Firebase] FID Change"),g.onmessage=e=>{re(e.data.key,e.data.fid)}),g}function Ge(){se.size===0&&g&&(g.close(),g=null)}/**
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
 */const Ke="firebase-installations-database",Ue=1,w="firebase-installations-store";let C=null;function O(){return C||(C=we(Ke,Ue,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(w)}}})),C}async function v(e,t){const n=S(e),i=(await O()).transaction(w,"readwrite"),s=i.objectStore(w),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&oe(e,t.fid),t}async function ce(e){const t=S(e),a=(await O()).transaction(w,"readwrite");await a.objectStore(w).delete(t),await a.done}async function k(e,t){const n=S(e),i=(await O()).transaction(w,"readwrite"),s=i.objectStore(w),o=await s.get(n),r=t(o);return r===void 0?await s.delete(n):await s.put(r,n),await i.done,r&&(!o||o.fid!==r.fid)&&oe(e,r.fid),r}/**
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
 */async function F(e){let t;const n=await k(e.appConfig,a=>{const i=He(a),s=Ye(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===_?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function He(e){const t=e||{fid:Le(),registrationStatus:0};return le(t)}function Ye(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(m.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=We(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Je(e)}:{installationEntry:t}}async function We(e,t){try{const n=await Ne(e,t);return v(e.appConfig,n)}catch(n){throw X(n)&&n.customData.serverCode===409?await ce(e.appConfig):await v(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Je(e){let t=await j(e.appConfig);for(;t.registrationStatus===1;)await ie(100),t=await j(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await F(e);return a||n}return t}function j(e){return k(e,t=>{if(!t)throw m.create("installation-not-found");return le(t)})}function le(e){return Qe(e)?{fid:e.fid,registrationStatus:0}:e}function Qe(e){return e.registrationStatus===1&&e.registrationTime+W<Date.now()}/**
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
 */async function Xe({appConfig:e,heartbeatServiceProvider:t},n){const a=Ze(e,n),i=Pe(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:J,appId:e.appId}},r={method:"POST",headers:i,body:JSON.stringify(o)},c=await ae(()=>fetch(a,r));if(c.ok){const l=await c.json();return ee(l)}else throw await te("Generate Auth Token",c)}function Ze(e,{fid:t}){return`${Z(e)}/${t}/authTokens:generate`}/**
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
 */async function M(e,t=!1){let n;const a=await k(e.appConfig,s=>{if(!ue(s))throw m.create("not-registered");const o=s.authToken;if(!t&&nt(o))return s;if(o.requestStatus===1)return n=et(e,t),s;{if(!navigator.onLine)throw m.create("app-offline");const r=it(s);return n=tt(e,r),r}});return n?await n:a.authToken}async function et(e,t){let n=await N(e.appConfig);for(;n.authToken.requestStatus===1;)await ie(100),n=await N(e.appConfig);const a=n.authToken;return a.requestStatus===0?M(e,t):a}function N(e){return k(e,t=>{if(!ue(t))throw m.create("not-registered");const n=t.authToken;return st(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function tt(e,t){try{const n=await Xe(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await v(e.appConfig,a),n}catch(n){if(X(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ce(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await v(e.appConfig,a)}throw n}}function ue(e){return e!==void 0&&e.registrationStatus===2}function nt(e){return e.requestStatus===2&&!at(e)}function at(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+De}function it(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function st(e){return e.requestStatus===1&&e.requestTime+W<Date.now()}/**
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
 */async function ot(e){const t=e,{installationEntry:n,registrationPromise:a}=await F(t);return a?a.catch(console.error):M(t).catch(console.error),n.fid}/**
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
 */async function rt(e,t=!1){const n=e;return await ct(n),(await M(n,t)).token}async function ct(e){const{registrationPromise:t}=await F(e);t&&await t}/**
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
 */function lt(e){if(!e||!e.options)throw E("App Configuration");if(!e.name)throw E("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw E(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function E(e){return m.create("missing-app-config-values",{valueName:e})}/**
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
 */const de="installations",ut="installations-internal",dt=e=>{const t=e.getProvider("app").getImmediate(),n=lt(t),a=U(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},ft=e=>{const t=e.getProvider("app").getImmediate(),n=U(t,de).getImmediate();return{getId:()=>ot(n),getToken:i=>rt(n,i)}};function pt(){T(new A(de,dt,"PUBLIC")),T(new A(ut,ft,"PRIVATE"))}pt();b(Y,D);b(Y,D,"esm2017");/**
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
 */const x="analytics",ht="firebase_id",gt="origin",mt=60*1e3,wt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fe="https://www.googletagmanager.com/gtag/js";/**
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
 */const u=new be("@firebase/analytics");/**
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
 */function pe(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function It(e,t){const n=document.createElement("script");n.src=`${fe}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function bt(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function yt(e,t,n,a,i,s){const o=a[i];try{if(o)await t[o];else{const c=(await pe(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(r){u.error(r)}e("config",i,s)}async function Tt(e,t,n,a,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const r=await pe(n);for(const c of o){const l=r.find(h=>h.measurementId===c),d=l&&t[l.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",a,i||{})}catch(s){u.error(s)}}function At(e,t,n,a){async function i(s,o,r){try{s==="event"?await Tt(e,t,n,o,r):s==="config"?await yt(e,t,n,a,o,r):s==="consent"?e("consent","update",r):e("set",o)}catch(c){u.error(c)}}return i}function vt(e,t,n,a,i){let s=function(...o){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=At(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function St(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(fe)&&n.src.includes(e))return n;return null}/**
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
 */const kt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},f=new K("analytics","Analytics",kt);/**
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
 */const Ct=30,Et=1e3;class Rt{constructor(t={},n=Et){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const he=new Rt;function _t(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Dt(e){var t;const{appId:n,apiKey:a}=e,i={method:"GET",headers:_t(a)},s=wt.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let r="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(r=c.error.message)}catch{}throw f.create("config-fetch-failed",{httpStatus:o.status,responseMessage:r})}return o.json()}async function Ot(e,t=he,n){const{appId:a,apiKey:i,measurementId:s}=e.options;if(!a)throw f.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:a};throw f.create("no-api-key")}const o=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},r=new Pt;return setTimeout(async()=>{r.abort()},n!==void 0?n:mt),ge({appId:a,apiKey:i,measurementId:s},o,r,t)}async function ge(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=he){var s;const{appId:o,measurementId:r}=e;try{await Ft(a,t)}catch(c){if(r)return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:r};throw c}try{const c=await Dt(e);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Mt(l)){if(i.deleteThrottleMetadata(o),r)return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:r};throw c}const d=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?$(n,i.intervalMillis,Ct):$(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,h),u.debug(`Calling attemptFetch again in ${d} millis`),ge(e,h,a,i)}}function Ft(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),a(f.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Mt(e){if(!(e instanceof H)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Pt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function $t(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const s=await t,o=Object.assign(Object.assign({},a),{send_to:s});e("event",n,o)}}/**
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
 */async function jt(){if(Te())try{await Ae()}catch(e){return u.warn(f.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return u.warn(f.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Nt(e,t,n,a,i,s,o){var r;const c=Ot(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>u.error(p)),t.push(c);const l=jt().then(p=>{if(p)return a.getId()}),[d,h]=await Promise.all([c,l]);St(s)||It(s,d.measurementId),i("js",new Date);const y=(r=o==null?void 0:o.config)!==null&&r!==void 0?r:{};return y[gt]="firebase",y.update=!0,h!=null&&(y[ht]=h),i("config",d.measurementId,y),d.measurementId}/**
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
 */class xt{constructor(t){this.app=t}_delete(){return delete I[this.app.options.appId],Promise.resolve()}}let I={},q=[];const L={};let R="dataLayer",qt="gtag",B,me,V=!1;function Lt(){const e=[];if(ye()&&e.push("This is a browser extension environment."),ve()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=f.create("invalid-analytics-context",{errorInfo:t});u.warn(n.message)}}function Bt(e,t,n){Lt();const a=e.options.appId;if(!a)throw f.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw f.create("no-api-key");if(I[a]!=null)throw f.create("already-exists",{id:a});if(!V){bt(R);const{wrappedGtag:s,gtagCore:o}=vt(I,q,L,R,qt);me=s,B=o,V=!0}return I[a]=Nt(e,q,L,t,B,R,n),new xt(e)}function Vt(e,t,n,a){e=Ie(e),$t(me,I[e.app.options.appId],t,n,a).catch(i=>u.error(i))}const z="@firebase/analytics",G="0.9.0";function zt(){T(new A(x,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Bt(a,i,n)},"PUBLIC")),T(new A("analytics-internal",e,"PRIVATE")),b(z,G),b(z,G,"esm2017");function e(t){try{const n=t.getProvider(x).getImmediate();return{logEvent:(a,i,s)=>Vt(n,a,i,s)}}catch(n){throw f.create("interop-component-reg-failed",{reason:n})}}}zt();const Gt={apiKey:"AIzaSyAFqiZQzA1mSKDTlTcww-o_hBTEVNE1k_g",authDomain:"bahoa-cddd9.firebaseapp.com",databaseURL:"https://bahoa-cddd9-default-rtdb.firebaseio.com",projectId:"bahoa-cddd9",storageBucket:"bahoa-cddd9.appspot.com",messagingSenderId:"792879932944",appId:"1:792879932944:web:2a94bed6179448ca8a4c95",measurementId:"G-DRYVYL20LT"},P=Se(Gt),Kt=ke(P),Ut=Ce(P),Ht=({data:e})=>({...e,firebaseApp:P,firestoreDatabase:Kt,firebaseAuth:Ut}),Wt=Object.freeze(Object.defineProperty({__proto__:null,load:Ht},Symbol.toStringTag,{value:"Module"}));export{Wt as _,Ht as l};
