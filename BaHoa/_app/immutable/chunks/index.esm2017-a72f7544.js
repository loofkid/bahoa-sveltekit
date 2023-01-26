import{e as I,b as ge,c as _e,a as me,_ as be,C as we,r as z,d as ye,S as Re,F as ke,h as Te}from"./index-e5b3cc81-00185210.js";/**
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
 */const Y="firebasestorage.googleapis.com",J="storageBucket",Se=2*60*1e3,Ce=10*60*1e3;/**
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
 */class l extends ke{constructor(e,n,r=0){super(D(e),`Firebase Storage: ${n} (${D(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return D(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function D(t){return"storage/"+t}function $(){const t="An unknown error occurred, please check the error payload for server response.";return new l("unknown",t)}function xe(t){return new l("object-not-found","Object '"+t+"' does not exist.")}function Ae(t){return new l("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Pe(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",t)}function Ee(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function ve(t){return new l("unauthorized","User does not have permission to access '"+t+"'.")}function Ue(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Oe(){return new l("canceled","User canceled the upload/download.")}function Ie(t){return new l("invalid-url","Invalid URL '"+t+"'.")}function Be(t){return new l("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Le(){return new l("no-default-bucket","No default bucket found. Did you set the '"+J+"' property when initializing the app?")}function De(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Fe(){return new l("no-download-url","The given file does not have any download URLs.")}function Me(t){return new l("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function M(t){return new l("invalid-argument",t)}function Z(){return new l("app-deleted","The Firebase app was deleted.")}function $e(t){return new l("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function E(t,e){return new l("invalid-format","String does not match format '"+t+"': "+e)}function P(t){throw new l("internal-error","Internal error: "+t)}/**
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
 */class p{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=p.makeFromUrl(e,n)}catch{return new p(e,"")}if(r.path==="")return r;throw Be(e)}static makeFromUrl(e,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function s(f){f.path.charAt(f.path.length-1)==="/"&&(f.path_=f.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+o+i,"i"),u={bucket:1,path:3};function c(f){f.path_=decodeURIComponent(f.path)}const g="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",w=new RegExp(`^https?://${m}/${g}/b/${o}/o${_}`,"i"),y={bucket:1,path:3},x=n===Y?"(?:storage.googleapis.com|storage.cloud.google.com)":n,d="([^?#]*)",A=new RegExp(`^https?://${x}/${o}/${d}`,"i"),R=[{regex:a,indices:u,postModify:s},{regex:w,indices:y,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let f=0;f<R.length;f++){const v=R[f],B=v.regex.exec(e);if(B){const pe=B[v.indices.bucket];let L=B[v.indices.path];L||(L=""),r=new p(pe,L),v.postModify(r);break}}if(r==null)throw Ie(e);return r}}class Ne{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function je(t,e,n){let r=1,o=null,s=null,i=!1,a=0;function u(){return a===2}let c=!1;function g(...d){c||(c=!0,e.apply(null,d))}function m(d){o=setTimeout(()=>{o=null,t(w,u())},d)}function _(){s&&clearTimeout(s)}function w(d,...A){if(c){_();return}if(d){_(),g.call(null,d,...A);return}if(u()||i){_(),g.call(null,d,...A);return}r<64&&(r*=2);let R;a===1?(a=2,R=0):R=(r+Math.random())*1e3,m(R)}let y=!1;function x(d){y||(y=!0,_(),!c&&(o!==null?(d||(a=2),clearTimeout(o),m(0)):d||(a=1)))}return m(0),s=setTimeout(()=>{i=!0,x(!0)},n),x}function He(t){t(!1)}/**
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
 */function qe(t){return t!==void 0}function ze(t){return typeof t=="object"&&!Array.isArray(t)}function N(t){return typeof t=="string"||t instanceof String}function W(t){return j()&&t instanceof Blob}function j(){return typeof Blob<"u"&&!Te()}function X(t,e,n,r){if(r<e)throw M(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw M(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function H(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Q(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const o=e(r)+"="+e(t[r]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
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
 */var S;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(S||(S={}));/**
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
 */function We(t,e){const n=t>=500&&t<600,o=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||o||s}/**
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
 */class Xe{constructor(e,n,r,o,s,i,a,u,c,g,m,_=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=g,this.connectionFactory_=m,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,y)=>{this.resolve_=w,this.reject_=y,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new U(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const i=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(i),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(i),this.pendingConnection_=null;const a=s.getErrorCode()===S.NO_ERROR,u=s.getStatus();if(!a||We(u,this.additionalRetryCodes_)&&this.retry){const g=s.getErrorCode()===S.ABORT;r(!1,new U(!1,null,g));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new U(c,s))})},n=(r,o)=>{const s=this.resolve_,i=this.reject_,a=o.connection;if(o.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());qe(u)?s(u):s()}catch(u){i(u)}else if(a!==null){const u=$();u.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,u)):i(u)}else if(o.canceled){const u=this.appDelete_?Z():Oe();i(u)}else{const u=Ue();i(u)}};this.canceled_?n(!1,new U(!1,null,!0)):this.backoffId_=je(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&He(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class U{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Ge(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ke(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ve(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ye(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Je(t,e,n,r,o,s,i=!0){const a=Q(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return Ve(c,e),Ge(c,n),Ke(c,s),Ye(c,r),new Xe(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,i)}/**
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
 */function Ze(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Qe(...t){const e=Ze();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(j())return new Blob(t);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function tt(t){if(typeof atob>"u")throw Me("base-64");return atob(t)}/**
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
 */const b={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class F{constructor(e,n){this.data=e,this.contentType=n||null}}function ee(t,e){switch(t){case b.RAW:return new F(te(e));case b.BASE64:case b.BASE64URL:return new F(ne(t,e));case b.DATA_URL:return new F(rt(e),ot(e))}throw $()}function te(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,i=t.charCodeAt(++n);r=65536|(s&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nt(t){let e;try{e=decodeURIComponent(t)}catch{throw E(b.DATA_URL,"Malformed data URL.")}return te(e)}function ne(t,e){switch(t){case b.BASE64:{const o=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(o||s)throw E(t,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case b.BASE64URL:{const o=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(o||s)throw E(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tt(e)}catch(o){throw o.message.includes("polyfill")?o:E(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class re{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw E(b.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=st(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function rt(t){const e=new re(t);return e.base64?ne(b.BASE64,e.rest):nt(e.rest)}function ot(t){return new re(t).contentType}function st(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class k{constructor(e,n){let r=0,o="";W(e)?(this.data_=e,r=e.size,o=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,n){if(W(this.data_)){const r=this.data_,o=et(r,e,n);return o===null?null:new k(o)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new k(r,!0)}}static getBlob(...e){if(j()){const n=e.map(r=>r instanceof k?r.data_:r);return new k(Qe.apply(null,n))}else{const n=e.map(i=>N(i)?ee(b.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const o=new Uint8Array(r);let s=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)o[s++]=i[a]}),new k(o,!0)}}uploadData(){return this.data_}}/**
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
 */function oe(t){let e;try{e=JSON.parse(t)}catch{return null}return ze(e)?e:null}/**
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
 */function it(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function at(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function se(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function ut(t,e){return e}class h{constructor(e,n,r,o){this.server=e,this.local=n||e,this.writable=!!r,this.xform=o||ut}}let O=null;function ct(t){return!N(t)||t.length<2?t:se(t)}function ie(){if(O)return O;const t=[];t.push(new h("bucket")),t.push(new h("generation")),t.push(new h("metageneration")),t.push(new h("name","fullPath",!0));function e(s,i){return ct(i)}const n=new h("name");n.xform=e,t.push(n);function r(s,i){return i!==void 0?Number(i):i}const o=new h("size");return o.xform=r,t.push(o),t.push(new h("timeCreated")),t.push(new h("updated")),t.push(new h("md5Hash",null,!0)),t.push(new h("cacheControl",null,!0)),t.push(new h("contentDisposition",null,!0)),t.push(new h("contentEncoding",null,!0)),t.push(new h("contentLanguage",null,!0)),t.push(new h("contentType",null,!0)),t.push(new h("metadata","customMetadata",!0)),O=t,O}function lt(t,e){function n(){const r=t.bucket,o=t.fullPath,s=new p(r,o);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function ht(t,e,n){const r={};r.type="file";const o=n.length;for(let s=0;s<o;s++){const i=n[s];r[i.local]=i.xform(r,e[i.server])}return lt(r,t),r}function ae(t,e,n){const r=oe(e);return r===null?null:ht(t,r,n)}function dt(t,e,n,r){const o=oe(e);if(o===null||!N(o.downloadTokens))return null;const s=o.downloadTokens;if(s.length===0)return null;const i=encodeURIComponent;return s.split(",").map(c=>{const g=t.bucket,m=t.fullPath,_="/b/"+i(g)+"/o/"+i(m),w=H(_,n,r),y=Q({alt:"media",token:c});return w+y})[0]}function ft(t,e){const n={},r=e.length;for(let o=0;o<r;o++){const s=e[o];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ue{constructor(e,n,r,o){this.url=e,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ce(t){if(!t)throw $()}function pt(t,e){function n(r,o){const s=ae(t,o,e);return ce(s!==null),s}return n}function gt(t,e){function n(r,o){const s=ae(t,o,e);return ce(s!==null),dt(s,o,t.host,t._protocol)}return n}function le(t){function e(n,r){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=Ee():o=Pe():n.getStatus()===402?o=Ae(t.bucket):n.getStatus()===403?o=ve(t.path):o=r,o.status=n.getStatus(),o.serverResponse=r.serverResponse,o}return e}function _t(t){const e=le(t);function n(r,o){let s=e(r,o);return r.getStatus()===404&&(s=xe(t.path)),s.serverResponse=o.serverResponse,s}return n}function mt(t,e,n){const r=e.fullServerUrl(),o=H(r,t.host,t._protocol),s="GET",i=t.maxOperationRetryTime,a=new ue(o,s,gt(t,n),i);return a.errorHandler=_t(e),a}function bt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function wt(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=bt(null,e)),r}function yt(t,e,n,r,o){const s=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let f=0;f<2;f++)R=R+Math.random().toString().slice(2);return R}const u=a();i["Content-Type"]="multipart/related; boundary="+u;const c=wt(e,r,o),g=ft(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,_=`\r
--`+u+"--",w=k.getBlob(m,r,_);if(w===null)throw De();const y={name:c.fullPath},x=H(s,t.host,t._protocol),d="POST",A=t.maxUploadRetryTime,T=new ue(x,d,pt(t,n),A);return T.urlParams=y,T.headers=i,T.body=w.uploadData(),T.errorHandler=le(e),T}class Rt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=S.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=S.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=S.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,o){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),o!==void 0)for(const s in o)o.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,o[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kt extends Rt{initXhr(){this.xhr_.responseType="text"}}function he(){return new kt}/**
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
 */class C{constructor(e,n){this._service=e,n instanceof p?this._location=n:this._location=p.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new C(e,n)}get root(){const e=new p(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return se(this._location.path)}get storage(){return this._service}get parent(){const e=it(this._location.path);if(e===null)return null;const n=new p(this._location.bucket,e);return new C(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $e(e)}}function Tt(t,e,n){t._throwIfRoot("uploadBytes");const r=yt(t.storage,t._location,ie(),new k(e,!0),n);return t.storage.makeRequestWithTokens(r,he).then(o=>({metadata:o,ref:t}))}function St(t,e,n=b.RAW,r){t._throwIfRoot("uploadString");const o=ee(n,e),s=Object.assign({},r);return s.contentType==null&&o.contentType!=null&&(s.contentType=o.contentType),Tt(t,o.data,s)}function Ct(t){t._throwIfRoot("getDownloadURL");const e=mt(t.storage,t._location,ie());return t.storage.makeRequestWithTokens(e,he).then(n=>{if(n===null)throw Fe();return n})}function xt(t,e){const n=at(t._location.path,e),r=new p(t._location.bucket,n);return new C(t.storage,r)}/**
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
 */function At(t){return/^[A-Za-z]+:\/\//.test(t)}function Pt(t,e){return new C(t,e)}function de(t,e){if(t instanceof q){const n=t;if(n._bucket==null)throw Le();const r=new C(n,n._bucket);return e!=null?de(r,e):r}else return e!==void 0?xt(t,e):t}function Et(t,e){if(e&&At(e)){if(t instanceof q)return Pt(t,e);throw M("To use ref(service, url), the first argument must be a Storage instance.")}else return de(t,e)}function G(t,e){const n=e==null?void 0:e[J];return n==null?null:p.makeFromBucketSpec(n,t)}function vt(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:o}=r;o&&(t._overrideAuthToken=typeof o=="string"?o:ye(o,t.app.options.projectId))}class q{constructor(e,n,r,o,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=s,this._bucket=null,this._host=Y,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Se,this._maxUploadRetryTime=Ce,this._requests=new Set,o!=null?this._bucket=p.makeFromBucketSpec(o,this._host):this._bucket=G(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=p.makeFromBucketSpec(this._url,e):this._bucket=G(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){X("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){X("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new C(this,e)}_makeRequest(e,n,r,o,s=!0){if(this._deleted)return new Ne(Z());{const i=Je(e,this._appId,r,o,n,this._firebaseVersion,s);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,o).getPromise()}}const K="@firebase/storage",V="0.10.1";/**
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
 */const fe="storage";function Lt(t,e,n,r){return t=I(t),St(t,e,n,r)}function Dt(t){return t=I(t),Ct(t)}function Ft(t,e){return t=I(t),Et(t,e)}function Mt(t=me(),e){t=I(t);const r=ge(t,fe).getImmediate({identifier:e}),o=_e("storage");return o&&Ut(r,...o),r}function Ut(t,e,n,r={}){vt(t,e,n,r)}function Ot(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new q(n,r,o,e,Re)}function It(){be(new we(fe,Ot,"PUBLIC").setMultipleInstances(!0)),z(K,V,""),z(K,V,"esm2017")}It();export{Dt as a,Mt as g,Ft as r,Lt as u};
