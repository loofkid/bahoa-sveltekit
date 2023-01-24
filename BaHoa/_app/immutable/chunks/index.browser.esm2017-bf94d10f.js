import{_ as xe,C as qe,r as ue,F as $e,a as Be,b as je,c as Me,d as ze,L as ne,e as Ge,S as Ke,f as He}from"./index-c6def6da-76b86d29.js";/**
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
 */class w{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}w.UNAUTHENTICATED=new w(null),w.GOOGLE_CREDENTIALS=new w("google-credentials-uid"),w.FIRST_PARTY=new w("first-party-uid"),w.MOCK_USER=new w("mock-user");/**
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
 */let R="9.15.0";/**
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
 */const O=new He("@firebase/firestore");function Q(n,...e){if(O.logLevel<=ne.DEBUG){const t=e.map(se);O.debug(`Firestore (${R}): ${n}`,...t)}}function re(n,...e){if(O.logLevel<=ne.ERROR){const t=e.map(se);O.error(`Firestore (${R}): ${n}`,...t)}}function Ee(n,...e){if(O.logLevel<=ne.WARN){const t=e.map(se);O.warn(`Firestore (${R}): ${n}`,...t)}}function se(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function T(n="Unexpected state"){const e=`FIRESTORE (${R}) INTERNAL ASSERTION FAILED: `+n;throw re(e),new Error(e)}function E(n,e){n||T()}function ie(n,e){return n}/**
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
 */const le="ok",Qe="cancelled",x="unknown",d="invalid-argument",Ye="deadline-exceeded",We="not-found",Xe="permission-denied",te="unauthenticated",Je="resource-exhausted",L="failed-precondition",Ze="aborted",et="out-of-range",Ae="unimplemented",tt="internal",nt="unavailable";class l extends $e{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ie{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rt{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(w.UNAUTHENTICATED))}shutdown(){}}class st{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class it{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(E(typeof e.accessToken=="string"),new Ie(e.accessToken,new w(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class at{constructor(e,t,r,s){this.t=e,this.i=t,this.o=r,this.u=s,this.type="FirstParty",this.user=w.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(E(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class ot{constructor(e,t,r,s){this.t=e,this.i=t,this.o=r,this.u=s}getToken(){return Promise.resolve(new at(this.t,this.i,this.o,this.u))}start(e,t){e.enqueueRetryable(()=>t(w.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ut{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lt{constructor(e){this.m=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(E(typeof e.token=="string"),new ut(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class ct{constructor(e,t,r,s,i,a,o,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.useFetchStreams=u}}class B{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new B("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof B&&e.projectId===this.projectId&&e.database===this.database}}class j{constructor(e,t,r){t===void 0?t=0:t>e.length&&T(),r===void 0?r=e.length-t:r>e.length-t&&T(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return j.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof j?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class g extends j{construct(e,t,r){return new g(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new l(d,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new g(t)}static emptyPath(){return new g([])}}const ht=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _ extends j{construct(e,t,r){return new _(e,t,r)}static isValidIdentifier(e){return ht.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new l(d,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new l(d,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new l(d,"Path has invalid escape sequence: "+e);r+=u,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(r+=o,s++):(i(),s++)}if(i(),a)throw new l(d,"Unterminated ` in path: "+e);return new _(t)}static emptyPath(){return new _([])}}/**
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
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(g.fromString(e))}static fromName(e){return new v(g.fromString(e).popFirst(5))}static empty(){return new v(g.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&g.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return g.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new g(e.slice()))}}/**
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
 */function dt(n,e,t){if(!t)throw new l(d,`Function ${n}() cannot be called with an empty ${e}.`)}function ce(n){if(v.isDocumentKey(n))throw new l(d,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ft(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":T()}function Fe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new l(d,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ft(n);throw new l(d,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function pt(n){return n==null}function he(n){return n===0&&1/n==-1/0}/**
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
 */const mt={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var de,c;function fe(n){if(n===void 0)return re("RPC_ERROR","HTTP error has no status"),x;switch(n){case 200:return le;case 400:return L;case 401:return te;case 403:return Xe;case 404:return We;case 409:return Ze;case 416:return et;case 429:return Je;case 499:return Qe;case 500:return x;case 501:return Ae;case 503:return nt;case 504:return Ye;default:return n>=200&&n<300?le:n>=400&&n<500?L:n>=500&&n<600?tt:x}}/**
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
 */(c=de||(de={}))[c.OK=0]="OK",c[c.CANCELLED=1]="CANCELLED",c[c.UNKNOWN=2]="UNKNOWN",c[c.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",c[c.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",c[c.NOT_FOUND=5]="NOT_FOUND",c[c.ALREADY_EXISTS=6]="ALREADY_EXISTS",c[c.PERMISSION_DENIED=7]="PERMISSION_DENIED",c[c.UNAUTHENTICATED=16]="UNAUTHENTICATED",c[c.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",c[c.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",c[c.ABORTED=10]="ABORTED",c[c.OUT_OF_RANGE=11]="OUT_OF_RANGE",c[c.UNIMPLEMENTED=12]="UNIMPLEMENTED",c[c.INTERNAL=13]="INTERNAL",c[c.UNAVAILABLE=14]="UNAVAILABLE",c[c.DATA_LOSS=15]="DATA_LOSS";class gt extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.p=t+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,t,r,s,i){const a=this.T(e,t);Q("RestConnection","Sending: ",a,r);const o={};return this.A(o,s,i),this.R(e,a,o,r).then(u=>(Q("RestConnection","Received: ",u),u),u=>{throw Ee("RestConnection",`${e} failed with error: `,u,"url: ",a,"request:",r),u})}P(e,t,r,s,i,a){return this.I(e,t,r,s,i)}A(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+R,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,t){const r=mt[e];return`${this.p}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.V=t}$(e,t){throw new Error("Not supported by FetchConnection")}async R(e,t,r,s){var i;const a=JSON.stringify(s);let o;try{o=await this.V(t,{method:"POST",headers:r,body:a})}catch(u){const h=u;throw new l(fe(h.status),"Request failed with error: "+h.statusText)}if(!o.ok){let u=await o.json();Array.isArray(u)&&(u=u[0]);const h=(i=u==null?void 0:u.error)===null||i===void 0?void 0:i.message;throw new l(fe(o.status),`Request failed with error: ${h!=null?h:o.statusText}`)}return o.json()}}function p(n,e){return n<e?-1:n>e?1:0}function yt(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */function pe(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ae(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class A{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new A(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new A(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return p(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}A.EMPTY_BYTE_STRING=new A("");const wt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function F(n){if(E(!!n),typeof n=="string"){let e=0;const t=wt.exec(n);if(E(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:f(n.seconds),nanos:f(n.nanos)}}function f(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function M(n){return typeof n=="string"?A.fromBase64String(n):A.fromUint8Array(n)}/**
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
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new l(d,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new l(d,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new l(d,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new l(d,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new V(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?p(this.nanoseconds,e.nanoseconds):p(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Ne(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ke(n){const e=n.mapValue.fields.__previous_value__;return Ne(e)?ke(e):e}function z(n){const e=F(n.mapValue.fields.__local_write_time__.timestampValue);return new V(e.seconds,e.nanos)}/**
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
 */const K={fields:{__type__:{stringValue:"__max__"}}};function N(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ne(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:T()}function Y(n,e){if(n===e)return!0;const t=N(n);if(t!==N(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return z(n).isEqual(z(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=F(r.timestampValue),a=F(s.timestampValue);return i.seconds===a.seconds&&i.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return M(r.bytesValue).isEqual(M(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return f(r.geoPointValue.latitude)===f(s.geoPointValue.latitude)&&f(r.geoPointValue.longitude)===f(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return f(r.integerValue)===f(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=f(r.doubleValue),a=f(s.doubleValue);return i===a?he(i)===he(a):isNaN(i)&&isNaN(a)}return!1}(n,e);case 9:return yt(n.arrayValue.values||[],e.arrayValue.values||[],Y);case 10:return function(r,s){const i=r.mapValue.fields||{},a=s.mapValue.fields||{};if(pe(i)!==pe(a))return!1;for(const o in i)if(i.hasOwnProperty(o)&&(a[o]===void 0||!Y(i[o],a[o])))return!1;return!0}(n,e);default:return T()}}function G(n,e){return(n.values||[]).find(t=>Y(t,e))!==void 0}function W(n,e){if(n===e)return 0;const t=N(n),r=N(e);if(t!==r)return p(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return p(n.booleanValue,e.booleanValue);case 2:return function(s,i){const a=f(s.integerValue||s.doubleValue),o=f(i.integerValue||i.doubleValue);return a<o?-1:a>o?1:a===o?0:isNaN(a)?isNaN(o)?0:-1:1}(n,e);case 3:return me(n.timestampValue,e.timestampValue);case 4:return me(z(n),z(e));case 5:return p(n.stringValue,e.stringValue);case 6:return function(s,i){const a=M(s),o=M(i);return a.compareTo(o)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const a=s.split("/"),o=i.split("/");for(let u=0;u<a.length&&u<o.length;u++){const h=p(a[u],o[u]);if(h!==0)return h}return p(a.length,o.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const a=p(f(s.latitude),f(i.latitude));return a!==0?a:p(f(s.longitude),f(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const a=s.values||[],o=i.values||[];for(let u=0;u<a.length&&u<o.length;++u){const h=W(a[u],o[u]);if(h)return h}return p(a.length,o.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===K&&i===K)return 0;if(s===K)return 1;if(i===K)return-1;const a=s.fields||{},o=Object.keys(a),u=i.fields||{},h=Object.keys(u);o.sort(),h.sort();for(let y=0;y<o.length&&y<h.length;++y){const k=p(o[y],h[y]);if(k!==0)return k;const P=W(a[o[y]],u[h[y]]);if(P!==0)return P}return p(o.length,h.length)}(n.mapValue,e.mapValue);default:throw T()}}function me(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return p(n,e);const t=F(n),r=F(e),s=p(t.seconds,r.seconds);return s!==0?s:p(t.nanos,r.nanos)}function Pe(n){return!!n&&"arrayValue"in n}function ge(n){return!!n&&"nullValue"in n}function ye(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ee(n){return!!n&&"mapValue"in n}function q(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ae(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=q(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=q(n.arrayValue.values[t]);return e}return Object.assign({},n)}class we{constructor(e,t){this.position=e,this.inclusive=t}}/**
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
 */class De{}class b extends De{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new vt(e,t,r):t==="array-contains"?new bt(e,r):t==="in"?new St(e,r):t==="not-in"?new Vt(e,r):t==="array-contains-any"?new Et(e,r):new b(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new _t(e,r):new Tt(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(W(t,this.value)):t!==null&&N(this.value)===N(t)&&this.matchesComparison(W(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class J extends De{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new J(e,t)}matches(e){return this.op==="and"?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(t=>t.isInequality());return e!==null?e.field:null}F(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}class vt extends b{constructor(e,t,r){super(e,t,r),this.key=v.fromName(r.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.matchesComparison(t)}}class _t extends b{constructor(e,t){super(e,"in",t),this.keys=Ce("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Tt extends b{constructor(e,t){super(e,"not-in",t),this.keys=Ce("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ce(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>v.fromName(r.referenceValue))}class bt extends b{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Pe(t)&&G(t.arrayValue,this.value)}}class St extends b{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&G(this.value.arrayValue,t)}}class Vt extends b{constructor(e,t){super(e,"not-in",t)}matches(e){if(G(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!G(this.value.arrayValue,t)}}class Et extends b{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Pe(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>G(this.value.arrayValue,r))}}/**
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
 */class H{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class m{constructor(e){this.timestamp=e}static fromTimestamp(e){return new m(e)}static min(){return new m(new V(0,0))}static max(){return new m(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class S{constructor(e){this.value=e}static empty(){return new S({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ee(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=q(t)}setAll(e){let t=_.emptyPath(),r={},s=[];e.forEach((a,o)=>{if(!t.isImmediateParentOf(o)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=o.popLast()}a?r[o.lastSegment()]=q(a):s.push(o.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ee(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Y(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ee(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ae(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new S(q(this.value))}}/**
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
 */class I{constructor(e,t,r,s,i,a,o){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(e){return new I(e,0,m.min(),m.min(),m.min(),S.empty(),0)}static newFoundDocument(e,t,r,s){return new I(e,1,t,m.min(),r,s,0)}static newNoDocument(e,t){return new I(e,2,t,m.min(),m.min(),S.empty(),0)}static newUnknownDocument(e,t){return new I(e,3,t,m.min(),m.min(),S.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(m.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=S.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=S.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=m.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof I&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new I(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class At{constructor(e,t=null,r=[],s=[],i=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=o,this.S=null}}function ve(n,e=null,t=[],r=[],s=null,i=null,a=null){return new At(n,e,t,r,s,i,a)}/**
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
 */class It{constructor(e,t=null,r=[],s=[],i=null,a="F",o=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=u,this.q=null,this.O=null,this.startAt,this.endAt}}function Ft(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Nt(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function _e(n){const e=ie(n);if(e.q===null){e.q=[];const t=Nt(e),r=Ft(e);if(t!==null&&r===null)t.isKeyField()||e.q.push(new H(t)),e.q.push(new H(_.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new H(_.keyField(),i))}}}return e.q}function kt(n){const e=ie(n);if(!e.O)if(e.limitType==="F")e.O=ve(e.path,e.collectionGroup,_e(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of _e(e)){const a=i.dir==="desc"?"asc":"desc";t.push(new H(i.field,a))}const r=e.endAt?new we(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new we(e.startAt.position,e.startAt.inclusive):null;e.O=ve(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.O}/**
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
 */const Pt=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Dt=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ct=(()=>({and:"AND",or:"OR"}))();class Ot{constructor(e,t){this.databaseId=e,this.k=t}}function Te(n){return E(!!n),m.fromTimestamp(function(e){const t=F(e);return new V(t.seconds,t.nanos)}(n))}function Lt(n,e){return function(t){return new g(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Rt(n,e){const t=function(s){const i=g.fromString(s);return E(Le(i)),i}(e);if(t.get(1)!==n.databaseId.projectId)throw new l(d,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new l(d,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v((E((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function be(n,e){return Lt(n.databaseId,e)}function Ut(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=be(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=be(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length!==0)return Oe(J.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(h=>function(y){return{field:D(y.field),direction:xt(y.dir)}}(h))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const a=function(u,h){return u.k||pt(h)?h:{value:h}}(n,e.limit);var o;return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt={before:(o=e.startAt).inclusive,values:o.position}),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),t}function xt(n){return Pt[n]}function qt(n){return Dt[n]}function $t(n){return Ct[n]}function D(n){return{fieldPath:n.canonicalString()}}function Oe(n){return n instanceof b?function(e){if(e.op==="=="){if(ye(e.value))return{unaryFilter:{field:D(e.field),op:"IS_NAN"}};if(ge(e.value))return{unaryFilter:{field:D(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ye(e.value))return{unaryFilter:{field:D(e.field),op:"IS_NOT_NAN"}};if(ge(e.value))return{unaryFilter:{field:D(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:D(e.field),op:qt(e.op),value:e.value}}}(n):n instanceof J?function(e){const t=e.getFilters().map(r=>Oe(r));return t.length===1?t[0]:{compositeFilter:{op:$t(e.op),filters:t}}}(n):T()}function Le(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Bt(n){return new Ot(n,!0)}/**
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
 */class jt extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.C=s,this.Z=!1}tt(){if(this.Z)throw new l(L,"The client has already been terminated.")}I(e,t,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.I(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===te&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new l(x,s.toString())})}P(e,t,r,s){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.P(e,t,r,i,a,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===te&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new l(x,i.toString())})}terminate(){this.Z=!0}}async function Mt(n,e){const t=ie(n),r=Ut(t.C,kt(e));return(await t.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,a,o){const u=Rt(i,a.name),h=Te(a.updateTime),y=a.createTime?Te(a.createTime):m.min(),k=new S({mapValue:{fields:a.fields}}),P=I.newFoundDocument(u,h,y,k);return o&&P.setHasCommittedMutations(),o?P.setHasCommittedMutations():P}(t.C,s.document,void 0))}/**
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
 */const $=new Map;function zt(n){if(n._terminated)throw new l(L,"The client has already been terminated.");if(!$.has(n)){Q("ComponentProvider","Initializing Datastore");const i=function(u){return new gt(u,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new ct(e,t,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),a=Bt(n._databaseId),o=function(u,h,y,k){return new jt(u,h,y,k)}(n._authCredentials,n._appCheckCredentials,i,a);$.set(n,o)}var e,t,r,s;/**
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
*/return $.get(n)}class Se{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new l(d,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new l(d,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,a){if(s===!0&&a===!0)throw new l(d,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class oe{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Se({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new l(L,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new l(L,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Se(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new rt;switch(t.type){case"gapi":const r=t.client;return new ot(r,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new l(d,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=$.get(e);t&&(Q("ComponentProvider","Removing Datastore"),$.delete(e),t.terminate())}(this),Promise.resolve()}}function en(n,e){const t=typeof n=="object"?n:Be(),r=typeof n=="string"?n:e||"(default)",s=je(t,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Me("firestore");i&&Gt(s,...i)}return s}function Gt(n,e,t,r={}){var s;const i=(n=Fe(n,oe))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ee("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let a,o;if(typeof r.mockUserToken=="string")a=r.mockUserToken,o=w.MOCK_USER;else{a=ze(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new l(d,"mockUserToken must contain 'sub' or 'user_id' field!");o=new w(u)}n._authCredentials=new st(new Ie(a,o))}}/**
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
 */class U{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new C(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new U(this.firestore,e,this._key)}}class Z{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Z(this.firestore,e,this._query)}}class C extends Z{constructor(e,t,r){super(e,t,new It(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new U(this.firestore,null,new v(e))}withConverter(e){return new C(this.firestore,e,this._path)}}function tn(n,e,...t){if(n=Ge(n),dt("collection","path",e),n instanceof oe){const r=g.fromString(e,...t);return ce(r),new C(n,null,r)}{if(!(n instanceof U||n instanceof C))throw new l(d,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(g.fromString(e,...t));return ce(r),new C(n.firestore,null,r)}}/**
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
 */class X{constructor(e){this._byteString=e}static fromBase64String(e){try{return new X(A.fromBase64String(e))}catch(t){throw new l(d,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new X(A.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Re{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new l(d,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Kt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new l(d,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new l(d,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return p(this._lat,e._lat)||p(this._long,e._long)}}const Ht=new RegExp("[~\\*/\\[\\]]");function Qt(n,e,t){if(e.search(Ht)>=0)throw Ve(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Re(...e.split("."))._internalPath}catch{throw Ve(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ve(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new l(d,o+n+u)}/**
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
 */class Yt{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new U(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ue(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ue extends Yt{data(){return super.data()}}class Wt{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Xt(n,e){return typeof e=="string"?Qt(n,e):e instanceof Re?e._internalPath:e._delegate._internalPath}class Jt extends class{convertValue(e,t="none"){switch(N(e)){case 0:return null;case 1:return e.booleanValue;case 2:return f(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(M(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){const r={};return ae(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Kt(f(e.latitude),f(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ke(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(z(e));default:return null}}convertTimestamp(e){const t=F(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=g.fromString(e);E(Le(r));const s=new B(r.get(1),r.get(3)),i=new v(r.popFirst(5));return s.isEqual(t)||re(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new X(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new U(this.firestore,null,t)}}function nn(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new l(Ae,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Fe(n,Z))._query);const e=zt(n.firestore),t=new Jt(n.firestore);return Mt(e,n._query).then(r=>{const s=r.map(i=>new Ue(n.firestore,t,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new Wt(n,s)})}(function(n){R=n})(`${Ke}_lite`),xe(new qe("firestore/lite",(n,{instanceIdentifier:e,options:t})=>{const r=n.getProvider("app").getImmediate(),s=new oe(new it(n.getProvider("auth-internal")),new lt(n.getProvider("app-check-internal")),function(i,a){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new l(d,'"projectId" not provided in firebase.initializeApp.');return new B(i.options.projectId,a)}(r,e),r);return t&&s._setSettings(t),s},"PUBLIC").setMultipleInstances(!0)),ue("firestore-lite","3.8.0",""),ue("firestore-lite","3.8.0","esm2017");export{tn as N,en as b,nn as z};
