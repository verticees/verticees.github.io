(self["webpackChunkhelium"]=self["webpackChunkhelium"]||[]).push([[736],{7458:(e,t,n)=>{"use strict";n.d(t,{Jn:()=>W,qX:()=>U,Xd:()=>j,Mq:()=>K,ZF:()=>Z,KN:()=>J});var r=n(7429),i=n(2920),o=n(2849);
/**
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
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const l="@firebase/app",c="0.7.0",u=new i.Yd("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",h="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",g="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",S="@firebase/installations",k="@firebase/installations-compat",x="@firebase/messaging",E="@firebase/messaging-compat",T="@firebase/performance",I="@firebase/performance-compat",O="@firebase/remote-config",C="@firebase/remote-config-compat",A="@firebase/storage",R="@firebase/storage-compat",P="@firebase/firestore",F="@firebase/firestore-compat",N="firebase",L="9.0.0",M="[DEFAULT]",D={[l]:"fire-core",[d]:"fire-core-compat",[h]:"fire-analytics",[f]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[g]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[S]:"fire-iid",[k]:"fire-iid-compat",[x]:"fire-fcm",[E]:"fire-fcm-compat",[T]:"fire-perf",[I]:"fire-perf-compat",[O]:"fire-rc",[C]:"fire-rc-compat",[A]:"fire-gcs",[R]:"fire-gcs-compat",[P]:"fire-fst",[F]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},$=new Map,q=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function j(e){const t=e.name;if(q.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;q.set(t,e);for(const n of $.values())V(n,e);return!0}function U(e,t){return e.container.getProvider(t)}
/**
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
 */
const B={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},z=new o.LL("app","Firebase",B);
/**
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
 */
class H{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}
/**
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
 */const W=L;function Z(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw z.create("bad-app-name",{appName:String(i)});const s=$.get(i);if(s){if((0,o.vZ)(e,s.options)&&(0,o.vZ)(n,s.config))return s;throw z.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of q.values())a.addComponent(r);const l=new H(e,n,a);return $.set(i,l),l}function K(e=M){const t=$.get(e);if(!t)throw z.create("no-app",{appName:e});return t}function J(e,t,n){var i;let o=null!==(i=D[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}j(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
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
 */
function Y(e){j(new r.wA("platform-logger",(e=>new s(e)),"PRIVATE")),J(l,c,e),J("fire-js","")}Y()},7429:(e,t,n)=>{"use strict";n.d(t,{wA:()=>o,H0:()=>u});var r=n(8430),i=n(2849),o=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),s="[DEFAULT]",a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new i.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(h){}try{for(var i=(0,r.XA)(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=(0,r.CR)(o.value,2),l=a[0],u=a[1],d=this.normalizeInstanceIdentifier(l);try{var f=this.getOrInitializeService({instanceIdentifier:d});u.resolve(f)}catch(h){}}}catch(p){t={error:p}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=s),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return(0,r.mG)(this,void 0,void 0,(function(){var e;return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all((0,r.ev)((0,r.ev)([],(0,r.CR)(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),(0,r.CR)(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=s),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=s),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.options,o=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var l=(0,r.XA)(this.instancesDeferred.entries()),c=l.next();!c.done;c=l.next()){var u=(0,r.CR)(c.value,2),d=u[0],f=u[1],h=this.normalizeInstanceIdentifier(d);s===h&&f.resolve(a)}}catch(p){t={error:p}}finally{try{c&&!c.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return a},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,o=this.onInitCallbacks.get(t);if(o)try{for(var s=(0,r.XA)(o),a=s.next();!a.done;a=s.next()){var l=a.value;try{l(e,t)}catch(c){}}}catch(u){n={error:u}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,n=e.options,r=void 0===n?{}:n,i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:l(t),options:r}),this.instances.set(t,i),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(o){}return i||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=s),this.component?this.component.multipleInstances?e:s:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();function l(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */var u=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},2920:(e,t,n)=>{"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}
/**
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
 */var i;n.d(t,{in:()=>o,Yd:()=>d});var o,s=[];(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));var a={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},l=o.INFO,c=(i={},i[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i),u=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var o=(new Date).toISOString(),s=c[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,r(["["+o+"]  "+e.name+":"],n))}},d=function(){function e(e){this.name=e,this._logLevel=l,this._logHandler=u,this._userLogHandler=null,s.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in o))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"===typeof e?a[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.DEBUG],e)),this._logHandler.apply(this,r([this,o.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.VERBOSE],e)),this._logHandler.apply(this,r([this,o.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.INFO],e)),this._logHandler.apply(this,r([this,o.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.WARN],e)),this._logHandler.apply(this,r([this,o.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.ERROR],e)),this._logHandler.apply(this,r([this,o.ERROR],e))},e}()},2849:(e,t,n)=>{"use strict";n.d(t,{BH:()=>l,LL:()=>m,ZR:()=>v,tV:()=>a,ne:()=>E,vZ:()=>w,pd:()=>x,m9:()=>C,z$:()=>c,ru:()=>d,xb:()=>b,w1:()=>h,uI:()=>u,b$:()=>f,xO:()=>S,zd:()=>k});var r=n(8430),i=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o=function(e){var t=[],n=0,r=0;while(n<e.length){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){o=e[n++];var s=e[n++],a=e[n++],l=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=o>>2,d=(3&o)<<4|a>>4,f=(15&a)<<2|c>>6,h=63&c;l||(h=64,s||(f=64)),r.push(n[u],n[d],n[f],n[h])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;var l=i<e.length,c=l?n[e.charAt(i)]:64;++i;var u=i<e.length,d=u?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==c||null==d)throw Error();var f=o<<2|a>>4;if(r.push(f),64!==c){var h=a<<4&240|c>>2;if(r.push(h),64!==d){var p=c<<6&192|d;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
/**
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
 */
var l=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"===typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
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
 */
/**
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
 */
function c(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function d(){var e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function h(){var e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
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
 */
var p="FirebaseError",v=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name=p,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,m.prototype.create),o}return(0,r.ZT)(t,e),t}(Error),m=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],s=o?g(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",l=new v(i,a,r);return l},e}();function g(e,t){return e.replace(y,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var y=/\{\$([^}]+)}/g;
/**
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
 */function b(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function w(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,o=n;i<o.length;i++){var s=o[i];if(!r.includes(s))return!1;var a=e[s],l=t[s];if(_(a)&&_(l)){if(!w(a,l))return!1}else if(a!==l)return!1}for(var c=0,u=r;c<u.length;c++){s=u[c];if(!n.includes(s))return!1}return!0}function _(e){return null!==e&&"object"===typeof e}
/**
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
 */function S(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r],s=o[0],a=o[1];n(s,a)}return t.length?"&"+t.join("&"):""}function k(e){var t={},n=e.replace(/^\?/,"").split("&");return n.forEach((function(e){if(e){var n=e.split("="),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function x(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */(function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"===typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],u=this.chain_[3],d=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=u^l&(c^u),s=1518500249):(o=l^c^u,s=1859775393):r<60?(o=l&c|u&(l|c),s=2400959708):(o=l^c^u,s=3395469782);i=(a<<5|a>>>27)+o+d+s+n[r]&4294967295;d=u,u=c,c=4294967295&(l<<30|l>>>2),l=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}})();function E(e,t){var n=new T(e,t);return n.subscribe.bind(n)}var T=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=I(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=O),void 0===r.error&&(r.error=O),void 0===r.complete&&(r.complete=O);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function I(e,t){if("object"!==typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"===typeof e[i])return!0}return!1}function O(){}
/**
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
 */
/**
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
 */
function C(e){return e&&e._delegate?e._delegate:e}},7518:e=>{e.exports=function(e,t,n){const r=void 0!==e.__vccOpts?e.__vccOpts:e,i=r[t];if(void 0===i)r[t]=n;else for(const o in n)void 0===i[o]&&(i[o]=n[o])}},1959:(e,t,n)=>{"use strict";n.d(t,{Bj:()=>s,qq:()=>_,Fl:()=>We,X3:()=>Re,PG:()=>Ce,dq:()=>De,Xl:()=>Fe,Jd:()=>E,WL:()=>ze,qj:()=>Ee,iH:()=>$e,lk:()=>I,Um:()=>Te,XI:()=>qe,IU:()=>Pe,j:()=>O,X$:()=>R,SU:()=>Ue});var r=n(2323);let i;const o=[];class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&v)>0,u=e=>(e.n&v)>0,d=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~v,i.n&=~v}t.length=n}},h=new WeakMap;let p=0,v=1;const m=30,g=[];let y;const b=Symbol(""),w=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!g.includes(this))try{return g.push(y=this),T(),v=1<<++p,p<=m?d(this):S(this),this.fn()}finally{p<=m&&f(this),v=1<<--p,I(),g.pop();const e=g.length;y=e>0?g[e-1]:void 0}}stop(){this.active&&(S(this),this.onStop&&this.onStop(),this.active=!1)}}function S(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let k=!0;const x=[];function E(){x.push(k),k=!1}function T(){x.push(k),k=!0}function I(){const e=x.pop();k=void 0===e||e}function O(e,t,n){if(!C())return;let r=h.get(e);r||h.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=l());const o=void 0;A(i,o)}function C(){return k&&void 0!==y}function A(e,t){let n=!1;p<=m?u(e)||(e.n|=v,n=!c(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function R(e,t,n,i,o,s){const a=h.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.kJ)(e))a.forEach(((e,t)=>{("length"===t||t>=i)&&c.push(e)}));else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(b)),(0,r._N)(e)&&c.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(c.push(a.get(b)),(0,r._N)(e)&&c.push(a.get(w)));break;case"set":(0,r._N)(e)&&c.push(a.get(b));break}if(1===c.length)c[0]&&P(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);P(l(e))}}function P(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const F=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),L=V(),M=V(!1,!0),D=V(!0),$=q();function q(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Pe(this);for(let t=0,i=this.length;t<i;t++)O(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Pe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){E();const n=Pe(this)[t].apply(this,e);return I(),n}})),e}function V(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&o===(e?t?Se:_e:t?we:be).get(n))return n;const s=(0,r.kJ)(n);if(!e&&s&&(0,r.RI)($,i))return Reflect.get($,i,o);const a=Reflect.get(n,i,o);if((0,r.yk)(i)?N.has(i):F(i))return a;if(e||O(n,"get",i),t)return a;if(De(a)){const e=!s||!(0,r.S0)(i);return e?a.value:a}return(0,r.Kn)(a)?e?Ie(a):Ee(a):a}}const j=B(),U=B(!0);function B(e=!1){return function(t,n,i,o){let s=t[n];if(!e&&(i=Pe(i),s=Pe(s),!(0,r.kJ)(t)&&De(s)&&!De(i)))return s.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),l=Reflect.set(t,n,i,o);return t===Pe(o)&&(a?(0,r.aU)(i,s)&&R(t,"set",n,i,s):R(t,"add",n,i)),l}}function z(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&R(e,"delete",t,void 0,i),o}function H(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&N.has(t)||O(e,"has",t),n}function W(e){return O(e,"iterate",(0,r.kJ)(e)?"length":b),Reflect.ownKeys(e)}const Z={get:L,set:j,deleteProperty:z,has:H,ownKeys:W},K={get:D,set(e,t){return!0},deleteProperty(e,t){return!0}},J=(0,r.l7)({},Z,{get:M,set:U}),Y=e=>(0,r.Kn)(e)?Ee(e):e,G=e=>(0,r.Kn)(e)?Ie(e):e,X=e=>e,Q=e=>Reflect.getPrototypeOf(e);function ee(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Pe(e),o=Pe(t);t!==o&&!n&&O(i,"get",t),!n&&O(i,"get",o);const{has:s}=Q(i),a=r?X:n?G:Y;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function te(e,t=!1){const n=this["__v_raw"],r=Pe(n),i=Pe(e);return e!==i&&!t&&O(r,"has",e),!t&&O(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ne(e,t=!1){return e=e["__v_raw"],!t&&O(Pe(e),"iterate",b),Reflect.get(e,"size",e)}function re(e){e=Pe(e);const t=Pe(this),n=Q(t),r=n.has.call(t,e);return r||(t.add(e),R(t,"add",e,e)),this}function ie(e,t){t=Pe(t);const n=Pe(this),{has:i,get:o}=Q(n);let s=i.call(n,e);s||(e=Pe(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&R(n,"set",e,t,a):R(n,"add",e,t),this}function oe(e){const t=Pe(this),{has:n,get:r}=Q(t);let i=n.call(t,e);i||(e=Pe(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&R(t,"delete",e,void 0,o),s}function se(){const e=Pe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&R(e,"clear",void 0,void 0,n),r}function ae(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Pe(o),a=t?X:e?G:Y;return!e&&O(s,"iterate",b),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function le(e,t,n){return function(...i){const o=this["__v_raw"],s=Pe(o),a=(0,r._N)(s),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=o[e](...i),d=n?X:t?G:Y;return!t&&O(s,"iterate",c?w:b),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ce(e){return function(...t){return"delete"!==e&&this}}function ue(){const e={get(e){return ee(this,e)},get size(){return ne(this)},has:te,add:re,set:ie,delete:oe,clear:se,forEach:ae(!1,!1)},t={get(e){return ee(this,e,!1,!0)},get size(){return ne(this)},has:te,add:re,set:ie,delete:oe,clear:se,forEach:ae(!1,!0)},n={get(e){return ee(this,e,!0)},get size(){return ne(this,!0)},has(e){return te.call(this,e,!0)},add:ce("add"),set:ce("set"),delete:ce("delete"),clear:ce("clear"),forEach:ae(!0,!1)},r={get(e){return ee(this,e,!0,!0)},get size(){return ne(this,!0)},has(e){return te.call(this,e,!0)},add:ce("add"),set:ce("set"),delete:ce("delete"),clear:ce("clear"),forEach:ae(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=le(i,!1,!1),n[i]=le(i,!0,!1),t[i]=le(i,!1,!0),r[i]=le(i,!0,!0)})),[e,n,t,r]}const[de,fe,he,pe]=ue();function ve(e,t){const n=t?e?pe:he:e?fe:de;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const me={get:ve(!1,!1)},ge={get:ve(!1,!0)},ye={get:ve(!0,!1)};const be=new WeakMap,we=new WeakMap,_e=new WeakMap,Se=new WeakMap;function ke(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ke((0,r.W7)(e))}function Ee(e){return e&&e["__v_isReadonly"]?e:Oe(e,!1,Z,me,be)}function Te(e){return Oe(e,!1,J,ge,we)}function Ie(e){return Oe(e,!0,K,ye,_e)}function Oe(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=xe(e);if(0===a)return e;const l=new Proxy(e,2===a?i:n);return o.set(e,l),l}function Ce(e){return Ae(e)?Ce(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function Re(e){return Ce(e)||Ae(e)}function Pe(e){const t=e&&e["__v_raw"];return t?Pe(t):e}function Fe(e){return(0,r.Nj)(e,"__v_skip",!0),e}function Ne(e){C()&&(e=Pe(e),e.dep||(e.dep=l()),A(e.dep))}function Le(e,t){e=Pe(e),e.dep&&P(e.dep)}const Me=e=>(0,r.Kn)(e)?Ee(e):e;function De(e){return Boolean(e&&!0===e.__v_isRef)}function $e(e){return je(e)}function qe(e){return je(e,!0)}class Ve{constructor(e,t=!1){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Pe(e),this._value=t?e:Me(e)}get value(){return Ne(this),this._value}set value(e){e=this._shallow?e:Pe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Me(e),Le(this,e))}}function je(e,t=!1){return De(e)?e:new Ve(e,t)}function Ue(e){return De(e)?e.value:e}const Be={get:(e,t,n)=>Ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ze(e){return Ce(e)?e:new Proxy(e,Be)}class He{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this["__v_isReadonly"]=n}get value(){const e=Pe(this);return Ne(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function We(e,t){let n,i;(0,r.mf)(e)?(n=e,i=r.dG):(n=e.get,i=e.set);const o=new He(n,i,(0,r.mf)(e)||!e.set);return o}Promise.resolve()},3673:(e,t,n)=>{"use strict";n.d(t,{P$:()=>E,HY:()=>it,lR:()=>Ye,$d:()=>on,j4:()=>mt,kq:()=>Ot,iD:()=>vt,_:()=>St,Us:()=>De,Uk:()=>It,Wm:()=>kt,aZ:()=>P,FN:()=>jt,Q6:()=>R,h:()=>qn,f3:()=>_,Y3:()=>_n,Jd:()=>K,Xn:()=>W,bv:()=>H,Ah:()=>J,ic:()=>Z,wg:()=>ut,JJ:()=>w,Ko:()=>Ft,up:()=>Qe,Q2:()=>tt,U2:()=>I,nK:()=>A,Y8:()=>S,YP:()=>Nn,w5:()=>d,wy:()=>Ae});var r=n(1959),i=n(2323);new Set;new Map;Object.create(null),Object.create(null);function o(e,t,...n){const r=e.vnode.props||i.kT;let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:t,trim:s}=r[e]||i.kT;s?o=n.map((e=>e.trim())):t&&(o=n.map(i.He))}let l;let c=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!c&&s&&(c=r[l=(0,i.hR)((0,i.rs)(t))]),c&&on(c,e,6,o);const u=r[l+"Once"];if(u){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,on(u,e,6,o)}}function s(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const a=e.emits;let l={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=s(e,t,!0);n&&(c=!0,(0,i.l7)(l,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return a||c?((0,i.kJ)(a)?a.forEach((e=>l[e]=null)):(0,i.l7)(l,a),r.set(e,l),l):(r.set(e,null),null)}function a(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let l=null,c=null;function u(e){const t=l;return l=e,c=e&&e.type.__scopeId||null,t}function d(e,t=l,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&ht(-1);const i=u(t),o=e(...n);return u(i),r._d&&ht(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function f(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[a],slots:l,attrs:c,emit:d,render:f,renderCache:v,data:m,setupState:g,ctx:y,inheritAttrs:b}=e;let w;const _=u(e);try{let e;if(4&n.shapeFlag){const t=o||r;w=Ct(f.call(t,t,v,s,g,m,y)),e=c}else{const n=t;0,w=Ct(n.length>1?n(s,{attrs:c,slots:l,emit:d}):n(s,null)),e=t.props?c:h(c)}let u=w;if(e&&!1!==b){const t=Object.keys(e),{shapeFlag:n}=u;t.length&&7&n&&(a&&t.some(i.tR)&&(e=p(e,a)),u=Tt(u,e))}0,n.dirs&&(u.dirs=u.dirs?u.dirs.concat(n.dirs):n.dirs),n.transition&&(u.transition=n.transition),w=u}catch(S){lt.length=0,sn(S,e,1),w=kt(st)}return u(_),w}const h=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},p=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function v(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:l,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!l||l&&l.$stable)||r!==s&&(r?!s||m(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?m(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!a(u,n))return!0}}return!1}function m(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!a(n,o))return!0}return!1}function g({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const y=e=>e.__isSuspense;function b(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):On(e)}function w(e,t){if(Vt){let n=Vt.provides;const r=Vt.parent&&Vt.parent.provides;r===n&&(n=Vt.provides=Object.create(r)),n[e]=t}else 0}function _(e,t,n=!1){const r=Vt||l;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}function S(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return H((()=>{e.isMounted=!0})),K((()=>{e.isUnmounting=!0})),e}const k=[Function,Array],x={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:k,onEnter:k,onAfterEnter:k,onEnterCancelled:k,onBeforeLeave:k,onLeave:k,onAfterLeave:k,onLeaveCancelled:k,onBeforeAppear:k,onAppear:k,onAfterAppear:k,onAppearCancelled:k},setup(e,{slots:t}){const n=jt(),i=S();let o;return()=>{const s=t.default&&R(t.default(),!0);if(!s||!s.length)return;const a=(0,r.IU)(e),{mode:l}=a;const c=s[0];if(i.isLeaving)return O(c);const u=C(c);if(!u)return O(c);const d=I(u,a,i,n);A(u,d);const f=n.subTree,h=f&&C(f);let p=!1;const{getTransitionKey:v}=u.type;if(v){const e=v();void 0===o?o=e:e!==o&&(o=e,p=!0)}if(h&&h.type!==st&&(!yt(u,h)||p)){const e=I(h,a,i,n);if(A(h,e),"out-in"===l)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},O(c);"in-out"===l&&u.type!==st&&(e.delayLeave=(e,t,n)=>{const r=T(i,h);r[String(h.key)]=h,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=n})}return c}}},E=x;function T(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function I(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:v,onAppear:m,onAfterAppear:g,onAppearCancelled:y}=t,b=String(e.key),w=T(n,e),_=(e,t)=>{e&&on(e,r,9,t)},S={mode:o,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=v||a}t._leaveCb&&t._leaveCb(!0);const o=w[b];o&&yt(e,o)&&o.el._leaveCb&&o.el._leaveCb(),_(r,[t])},enter(e){let t=l,r=c,o=u;if(!n.isMounted){if(!i)return;t=m||l,r=g||c,o=y||u}let s=!1;const a=e._enterCb=t=>{s||(s=!0,_(t?o:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();_(d,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),_(n?p:h,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,f?(f(t,s),f.length<=1&&s()):s()},clone(e){return I(e,t,n,r)}};return S}function O(e){if(N(e))return e=Tt(e),e.children=null,e}function C(e){return N(e)?e.children?e.children[0]:void 0:e}function A(e,t){6&e.shapeFlag&&e.component?A(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function R(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const o=e[i];o.type===it?(128&o.patchFlag&&r++,n=n.concat(R(o.children,t))):(t||o.type!==st)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function P(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const F=e=>!!e.type.__asyncLoader;const N=e=>e.type.__isKeepAlive;RegExp,RegExp;function L(e,t){return(0,i.kJ)(e)?e.some((e=>L(e,t))):(0,i.HD)(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function M(e,t){$(e,"a",t)}function D(e,t){$(e,"da",t)}function $(e,t,n=Vt){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}e()});if(U(t,r,n),n){let e=n.parent;while(e&&e.parent)N(e.parent.vnode)&&q(r,t,n,e),e=e.parent}}function q(e,t,n,r){const o=U(t,e,r,!0);J((()=>{(0,i.Od)(r[t],o)}),n)}function V(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function j(e){return 128&e.shapeFlag?e.ssContent:e}function U(e,t,n=Vt,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Ut(n);const o=on(t,n,e,i);return Bt(),(0,r.lk)(),o});return i?o.unshift(s):o.push(s),s}}const B=e=>(t,n=Vt)=>(!Zt||"sp"===e)&&U(e,t,n),z=B("bm"),H=B("m"),W=B("bu"),Z=B("u"),K=B("bum"),J=B("um"),Y=B("sp"),G=B("rtg"),X=B("rtc");function Q(e,t=Vt){U("ec",e,t)}let ee=!0;function te(e){const t=oe(e),n=e.proxy,o=e.ctx;ee=!1,t.beforeCreate&&re(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:l,watch:c,provide:u,inject:d,created:f,beforeMount:h,mounted:p,beforeUpdate:v,updated:m,activated:g,deactivated:y,beforeDestroy:b,beforeUnmount:_,destroyed:S,unmounted:k,render:x,renderTracked:E,renderTriggered:T,errorCaptured:I,serverPrefetch:O,expose:C,inheritAttrs:A,components:R,directives:P,filters:F}=t,N=null;if(d&&ne(d,o,N,e.appContext.config.unwrapInjectedRef),l)for(const r in l){const e=l[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(ee=!0,a)for(const w in a){const e=a[w],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,l=(0,r.Fl)({get:t,set:s});Object.defineProperty(o,w,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const r in c)ie(c[r],o,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{w(t,e[t])}))}function L(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(f&&re(f,e,"c"),L(z,h),L(H,p),L(W,v),L(Z,m),L(M,g),L(D,y),L(Q,I),L(X,E),L(G,T),L(K,_),L(J,k),L(Y,O),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});x&&e.render===i.dG&&(e.render=x),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),P&&(e.directives=P)}function ne(e,t,n=i.dG,o=!1){(0,i.kJ)(e)&&(e=ue(e));for(const s in e){const n=e[s];let a;a=(0,i.Kn)(n)?"default"in n?_(n.from||s,n.default,!0):_(n.from||s):_(n),(0,r.dq)(a)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[s]=a}}function re(e,t,n){on((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function ie(e,t,n,r){const o=r.includes(".")?Dn(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&Nn(o,n)}else if((0,i.mf)(e))Nn(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>ie(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&Nn(o,r,e)}else 0}function oe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let l;return a?l=a:i.length||n||r?(l={},i.length&&i.forEach((e=>se(l,e,s,!0))),se(l,t,s)):l=t,o.set(t,l),l}function se(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&se(e,o,n,!0),i&&i.forEach((t=>se(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=ae[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const ae={data:le,props:fe,emits:fe,methods:fe,computed:fe,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,destroyed:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:fe,directives:fe,watch:he,provide:le,inject:ce};function le(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function ce(e,t){return fe(ue(e),ue(t))}function ue(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function fe(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function he(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function pe(e,t,n,o=!1){const s={},a={};(0,i.Nj)(a,bt,1),e.propsDefaults=Object.create(null),me(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function ve(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:l}}=e,c=(0,r.IU)(s),[u]=e.propsOptions;let d=!1;if(!(o||l>0)||16&l){let r;me(e,t,s,a)&&(d=!0);for(const o in c)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(u?!n||void 0===n[o]&&void 0===n[r]||(s[o]=ge(u,c,o,void 0,e,!0)):delete s[o]);if(a!==c)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],d=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const l=t[o];if(u)if((0,i.RI)(a,o))l!==a[o]&&(a[o]=l,d=!0);else{const t=(0,i._A)(o);s[t]=ge(u,c,t,l,e,!1)}else l!==a[o]&&(a[o]=l,d=!0)}}d&&(0,r.X$)(e,"set","$attrs")}function me(e,t,n,o){const[s,l]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const d=t[r];let f;s&&(0,i.RI)(s,f=(0,i._A)(r))?l&&l.includes(f)?(c||(c={}))[f]=d:n[f]=d:a(e.emitsOptions,r)||d!==o[r]&&(o[r]=d,u=!0)}if(l){const t=(0,r.IU)(n),o=c||i.kT;for(let r=0;r<l.length;r++){const a=l[r];n[a]=ge(s,t,a,o[a],e,!(0,i.RI)(o,a))}}return u}function ge(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(Ut(o),r=i[n]=e.call(null,t),Bt())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ye(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},l=[];let c=!1;if(!(0,i.mf)(e)){const r=e=>{c=!0;const[n,r]=ye(e,t,!0);(0,i.l7)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!c)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let d=0;d<s.length;d++){0;const e=(0,i._A)(s[d]);be(e)&&(a[e]=i.kT)}else if(s){0;for(const e in s){const t=(0,i._A)(e);if(be(t)){const n=s[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=Se(Boolean,r.type),n=Se(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&l.push(t)}}}}const u=[a,l];return r.set(e,u),u}function be(e){return"$"!==e[0]}function we(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function _e(e,t){return we(e)===we(t)}function Se(e,t){return(0,i.kJ)(t)?t.findIndex((t=>_e(t,e))):(0,i.mf)(t)&&_e(t,e)?0:-1}const ke=e=>"_"===e[0]||"$stable"===e,xe=e=>(0,i.kJ)(e)?e.map(Ct):[Ct(e)],Ee=(e,t,n)=>{const r=d(((...e)=>xe(t(...e))),n);return r._c=!1,r},Te=(e,t,n)=>{const r=e._ctx;for(const o in e){if(ke(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=Ee(o,n,r);else if(null!=n){0;const e=xe(n);t[o]=()=>e}}},Ie=(e,t)=>{const n=xe(t);e.slots.default=()=>n},Oe=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Te(t,e.slots={})}else e.slots={},t&&Ie(e,t);(0,i.Nj)(e.slots,bt,1)},Ce=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(s=!t.$stable,Te(t,o)),a=t}else t&&(Ie(e,t),a={default:1});if(s)for(const i in o)ke(i)||i in a||delete o[i]};function Ae(e,t){const n=l;if(null===n)return e;const r=n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,l=i.kT]=t[s];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&$n(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l})}return e}function Re(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let a=0;a<o.length;a++){const l=o[a];s&&(l.oldValue=s[a].value);let c=l.dir[i];c&&((0,r.Jd)(),on(c,n,8,[e.el,l,e,t]),(0,r.lk)())}}function Pe(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fe=0;function Ne(e,t){return function(n,r=null){null==r||(0,i.Kn)(r)||(r=null);const o=Pe(),s=new Set;let a=!1;const l=o.app={_uid:Fe++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Vn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(l,...t)):(0,i.mf)(e)&&(s.add(e),e(l,...t))),l},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),l},component(e,t){return t?(o.components[e]=t,l):o.components[e]},directive(e,t){return t?(o.directives[e]=t,l):o.directives[e]},mount(i,s,c){if(!a){const u=kt(n,r);return u.appContext=o,s&&t?t(u,i):e(u,i,c),a=!0,l._container=i,i.__vue_app__=l,u.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return o.provides[e]=t,l}};return l}}function Le(){}const Me=b;function De(e){return $e(e)}function $e(e,t){Le();const{insert:n,remove:o,patchProp:s,createElement:a,createText:l,createComment:c,setText:u,setElementText:d,parentNode:h,nextSibling:p,setScopeId:m=i.dG,cloneNode:y,insertStaticContent:b}=e,w=(e,t,n,r=null,i=null,o=null,s=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!yt(e,t)&&(r=Y(e),H(e,i,o,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:d}=t;switch(c){case ot:_(e,t,n,r);break;case st:S(e,t,n,r);break;case at:null==e&&k(t,n,r,s);break;case it:L(e,t,n,r,i,o,s,a,l);break;default:1&d?T(e,t,n,r,i,o,s,a,l):6&d?M(e,t,n,r,i,o,s,a,l):(64&d||128&d)&&c.process(e,t,n,r,i,o,s,a,l,X)}null!=u&&i&&qe(u,e&&e.ref,o,t||e,!t)},_=(e,t,r,i)=>{if(null==e)n(t.el=l(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},S=(e,t,r,i)=>{null==e?n(t.el=c(t.children||""),r,i):t.el=e.el},k=(e,t,n,r)=>{[e.el,e.anchor]=b(e.children,t,n,r)},x=({el:e,anchor:t},r,i)=>{let o;while(e&&e!==t)o=p(e),n(e,r,i),e=o;n(t,r,i)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},T=(e,t,n,r,i,o,s,a,l)=>{s=s||"svg"===t.type,null==e?I(t,n,r,i,o,s,a,l):A(e,t,i,o,s,a,l)},I=(e,t,r,o,l,c,u,f)=>{let h,p;const{type:v,props:m,shapeFlag:g,transition:b,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==y&&-1===w)h=e.el=y(e.el);else{if(h=e.el=a(e.type,c,m&&m.is,m),8&g?d(h,e.children):16&g&&C(e.children,h,null,o,l,c&&"foreignObject"!==v,u,f),_&&Re(e,null,o,"created"),m){for(const t in m)"value"===t||(0,i.Gg)(t)||s(h,t,null,m[t],c,e.children,o,l,J);"value"in m&&s(h,"value",null,m.value),(p=m.onVnodeBeforeMount)&&Ve(p,o,e)}O(h,e,e.scopeId,u,o)}_&&Re(e,null,o,"beforeMount");const S=(!l||l&&!l.pendingBranch)&&b&&!b.persisted;S&&b.beforeEnter(h),n(h,t,r),((p=m&&m.onVnodeMounted)||S||_)&&Me((()=>{p&&Ve(p,o,e),S&&b.enter(h),_&&Re(e,null,o,"mounted")}),l)},O=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let o=0;o<r.length;o++)m(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;O(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,o,s,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?At(e[c]):Ct(e[c]);w(null,l,t,n,r,i,o,s,a)}},A=(e,t,n,r,o,a,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:f,dirs:h}=t;u|=16&e.patchFlag;const p=e.props||i.kT,v=t.props||i.kT;let m;(m=v.onVnodeBeforeUpdate)&&Ve(m,n,t,e),h&&Re(t,e,n,"beforeUpdate");const g=o&&"foreignObject"!==t.type;if(f?R(e.dynamicChildren,f,c,n,r,g,a):l||j(e,t,c,null,n,r,g,a,!1),u>0){if(16&u)P(c,t,p,v,n,r,o);else if(2&u&&p.class!==v.class&&s(c,"class",null,v.class,o),4&u&&s(c,"style",p.style,v.style,o),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const a=i[t],l=p[a],u=v[a];u===l&&"value"!==a||s(c,a,l,u,o,e.children,n,r,J)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=f||P(c,t,p,v,n,r,o);((m=v.onVnodeUpdated)||h)&&Me((()=>{m&&Ve(m,n,t,e),h&&Re(t,e,n,"updated")}),r)},R=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===it||!yt(l,c)||70&l.shapeFlag)?h(l.el):n;w(l,c,u,null,r,i,o,s,!0)}},P=(e,t,n,r,o,a,l)=>{if(n!==r){for(const c in r){if((0,i.Gg)(c))continue;const u=r[c],d=n[c];u!==d&&"value"!==c&&s(e,c,d,u,l,t.children,o,a,J)}if(n!==i.kT)for(const c in n)(0,i.Gg)(c)||c in r||s(e,c,n[c],null,l,t.children,o,a,J);"value"in r&&s(e,"value",n.value,r.value)}},L=(e,t,r,i,o,s,a,c,u)=>{const d=t.el=e?e.el:l(""),f=t.anchor=e?e.anchor:l("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:v}=t;v&&(c=c?c.concat(v):v),null==e?(n(d,r,i),n(f,r,i),C(t.children,r,f,o,s,a,c,u)):h>0&&64&h&&p&&e.dynamicChildren?(R(e.dynamicChildren,p,r,o,s,a,c),(null!=t.key||o&&t===o.subTree)&&je(e,t,!0)):j(e,t,r,f,o,s,a,c,u)},M=(e,t,n,r,i,o,s,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,l):D(t,n,r,i,o,s,l):$(e,t,l)},D=(e,t,n,r,i,o,s)=>{const a=e.component=qt(e,r,i);if(N(e)&&(a.ctx.renderer=X),Kt(a),a.asyncDep){if(i&&i.registerDep(a,q),!e.el){const e=a.subTree=kt(st);S(null,e,t,n)}}else q(a,e,t,n,i,o,s)},$=(e,t,n)=>{const r=t.component=e.component;if(v(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,En(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},q=(e,t,n,o,s,a,l)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:c,vnode:d}=e,p=n;0,u.allowRecurse=!1,n?(n.el=d.el,V(e,n,l)):n=d,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Ve(t,c,n,d),u.allowRecurse=!0;const v=f(e);0;const m=e.subTree;e.subTree=v,w(m,v,h(m.el),Y(m),e,s,a),n.el=v.el,null===p&&g(e,v.el),o&&Me(o,s),(t=n.props&&n.props.onVnodeUpdated)&&Me((()=>Ve(t,c,n,d)),s)}else{let r;const{el:l,props:c}=t,{bm:d,m:h,parent:p}=e,v=F(t);if(u.allowRecurse=!1,d&&(0,i.ir)(d),!v&&(r=c&&c.onVnodeBeforeMount)&&Ve(r,p,t),u.allowRecurse=!0,l&&ee){const n=()=>{e.subTree=f(e),ee(l,e.subTree,e,s,null)};v?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=f(e);0,w(null,r,n,o,e,s,a),t.el=r.el}if(h&&Me(h,s),!v&&(r=c&&c.onVnodeMounted)){const e=t;Me((()=>Ve(r,p,e)),s)}256&t.shapeFlag&&e.a&&Me(e.a,s),e.isMounted=!0,t=n=o=null}},u=new r.qq(c,(()=>kn(e.update)),e.scope),d=e.update=u.run.bind(u);d.id=e.uid,u.allowRecurse=d.allowRecurse=!0,d()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ve(e,t.props,i,n),Ce(e,t.children,n),(0,r.Jd)(),Cn(void 0,e.update),(0,r.lk)()},j=(e,t,n,r,i,o,s,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,f=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void B(c,f,n,r,i,o,s,a,l);if(256&h)return void U(c,f,n,r,i,o,s,a,l)}8&p?(16&u&&J(c,i,o),f!==c&&d(n,f)):16&u?16&p?B(c,f,n,r,i,o,s,a,l):J(c,i,o,!0):(8&u&&d(n,""),16&p&&C(f,n,r,i,o,s,a,l))},U=(e,t,n,r,o,s,a,l,c)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,d=t.length,f=Math.min(u,d);let h;for(h=0;h<f;h++){const r=t[h]=c?At(t[h]):Ct(t[h]);w(e[h],r,n,null,o,s,a,l,c)}u>d?J(e,o,s,!0,!1,f):C(t,n,r,o,s,a,l,c,f)},B=(e,t,n,r,o,s,a,l,c)=>{let u=0;const d=t.length;let f=e.length-1,h=d-1;while(u<=f&&u<=h){const r=e[u],i=t[u]=c?At(t[u]):Ct(t[u]);if(!yt(r,i))break;w(r,i,n,null,o,s,a,l,c),u++}while(u<=f&&u<=h){const r=e[f],i=t[h]=c?At(t[h]):Ct(t[h]);if(!yt(r,i))break;w(r,i,n,null,o,s,a,l,c),f--,h--}if(u>f){if(u<=h){const e=h+1,i=e<d?t[e].el:r;while(u<=h)w(null,t[u]=c?At(t[u]):Ct(t[u]),n,i,o,s,a,l,c),u++}}else if(u>h)while(u<=f)H(e[u],o,s,!0),u++;else{const p=u,v=u,m=new Map;for(u=v;u<=h;u++){const e=t[u]=c?At(t[u]):Ct(t[u]);null!=e.key&&m.set(e.key,u)}let g,y=0;const b=h-v+1;let _=!1,S=0;const k=new Array(b);for(u=0;u<b;u++)k[u]=0;for(u=p;u<=f;u++){const r=e[u];if(y>=b){H(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(g=v;g<=h;g++)if(0===k[g-v]&&yt(r,t[g])){i=g;break}void 0===i?H(r,o,s,!0):(k[i-v]=u+1,i>=S?S=i:_=!0,w(r,t[i],n,null,o,s,a,l,c),y++)}const x=_?Ue(k):i.Z6;for(g=x.length-1,u=b-1;u>=0;u--){const e=v+u,i=t[e],f=e+1<d?t[e+1].el:r;0===k[u]?w(null,i,n,f,o,s,a,l,c):_&&(g<0||u!==x[g]?z(i,n,f,2):g--)}}},z=(e,t,r,i,o=null)=>{const{el:s,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void z(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,X);if(a===it){n(s,t,r);for(let e=0;e<c.length;e++)z(c[e],t,r,i);return void n(e.anchor,t,r)}if(a===at)return void x(e,t,r);const d=2!==i&&1&u&&l;if(d)if(0===i)l.beforeEnter(s),n(s,t,r),Me((()=>l.enter(s)),o);else{const{leave:e,delayLeave:i,afterLeave:o}=l,a=()=>n(s,t,r),c=()=>{e(s,(()=>{a(),o&&o()}))};i?i(s,a,c):c()}else n(s,t,r)},H=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:d,dirs:f}=e;if(null!=a&&qe(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const h=1&u&&f,p=!F(e);let v;if(p&&(v=s&&s.onVnodeBeforeUnmount)&&Ve(v,t,e),6&u)K(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);h&&Re(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,X,r):c&&(o!==it||d>0&&64&d)?J(c,t,n,!1,!0):(o===it&&384&d||!i&&16&u)&&J(l,t,n),r&&W(e)}(p&&(v=s&&s.onVnodeUnmounted)||h)&&Me((()=>{v&&Ve(v,t,e),h&&Re(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===it)return void Z(n,r);if(t===at)return void E(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Z=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},K=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:l}=e;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,H(a,e,t,n)),l&&Me(l,t),Me((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)H(e[s],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),G=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):w(t._vnode||null,e,t,null,null,null,n),An(),t._vnode=e},X={p:w,um:H,m:z,r:W,mt:D,mc:C,pc:j,pbc:R,n:Y,o:e};let Q,ee;return t&&([Q,ee]=t(X)),{render:G,hydrate:Q,createApp:Ne(G,Q)}}function qe(e,t,n,o,s=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>qe(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,s)));if(F(o)&&!s)return;const a=4&o.shapeFlag?en(o.component)||o.component.proxy:o.el,l=s?null:a,{i:c,r:u}=e;const d=t&&t.r,f=c.refs===i.kT?c.refs={}:c.refs,h=c.setupState;if(null!=d&&d!==u&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(h,d)&&(h[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.HD)(u)){const e=()=>{f[u]=l,(0,i.RI)(h,u)&&(h[u]=l)};l?(e.id=-1,Me(e,n)):e()}else if((0,r.dq)(u)){const e=()=>{u.value=l};l?(e.id=-1,Me(e,n)):e()}else(0,i.mf)(u)&&rn(u,c,12,[l,f])}function Ve(e,t,n,r=null){on(e,t,7,[n,r])}function je(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=At(o[i]),t.el=e.el),n||je(e,t))}}function Ue(e){const t=e.slice(),n=[0];let r,i,o,s,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<l?o=a+1:s=a;l<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Be=e=>e.__isTeleport,ze=e=>e&&(e.disabled||""===e.disabled),He=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,We=(e,t)=>{const n=e&&e.to;if((0,i.HD)(n)){if(t){const e=t(n);return e}return null}return n},Ze={__isTeleport:!0,process(e,t,n,r,i,o,s,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:p,createText:v,createComment:m}}=c,g=ze(t.props);let{shapeFlag:y,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=v(""),c=t.anchor=v("");h(e,n,r),h(c,n,r);const d=t.target=We(t.props,p),f=t.targetAnchor=v("");d&&(h(f,d),s=s||He(d));const m=(e,t)=>{16&y&&u(b,e,t,i,o,s,a,l)};g?m(n,c):d&&m(d,f)}else{t.el=e.el;const r=t.anchor=e.anchor,u=t.target=e.target,h=t.targetAnchor=e.targetAnchor,v=ze(e.props),m=v?n:u,y=v?r:h;if(s=s||He(u),w?(f(e.dynamicChildren,w,m,i,o,s,a),je(e,t,!0)):l||d(e,t,m,y,i,o,s,a,!1),g)v||Ke(t,n,r,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=We(t.props,p);e&&Ke(t,e,null,c,0)}else v&&Ke(t,u,h,c,1)}},remove(e,t,n,r,{um:i,o:{remove:o}},s){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:f}=e;if(d&&o(u),(s||!ze(f))&&(o(c),16&a))for(let h=0;h<l.length;h++){const e=l[h];i(e,t,n,!0,!!e.dynamicChildren)}},move:Ke,hydrate:Je};function Ke(e,t,n,{o:{insert:r},m:i},o=2){0===o&&r(e.targetAnchor,t,n);const{el:s,anchor:a,shapeFlag:l,children:c,props:u}=e,d=2===o;if(d&&r(s,t,n),(!d||ze(u))&&16&l)for(let f=0;f<c.length;f++)i(c[f],t,n,2);d&&r(a,t,n)}function Je(e,t,n,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:l}},c){const u=t.target=We(t.props,l);if(u){const l=u._lpa||u.firstChild;16&t.shapeFlag&&(ze(t.props)?(t.anchor=c(s(e),t,a(e),n,r,i,o),t.targetAnchor=l):(t.anchor=s(e),t.targetAnchor=c(l,t,u,n,r,i,o)),u._lpa=t.targetAnchor&&s(t.targetAnchor))}return t.anchor&&s(t.anchor)}const Ye=Ze,Ge="components",Xe="directives";function Qe(e,t){return nt(Ge,e,!0,t)||e}const et=Symbol();function tt(e){return nt(Xe,e)}function nt(e,t,n=!0,r=!1){const o=l||Vt;if(o){const n=o.type;if(e===Ge){const e=tn(n);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const s=rt(o[e]||n[e],t)||rt(o.appContext[e],t);return!s&&r?n:s}}function rt(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const it=Symbol(void 0),ot=Symbol(void 0),st=Symbol(void 0),at=Symbol(void 0),lt=[];let ct=null;function ut(e=!1){lt.push(ct=e?null:[])}function dt(){lt.pop(),ct=lt[lt.length-1]||null}let ft=1;function ht(e){ft+=e}function pt(e){return e.dynamicChildren=ft>0?ct||i.Z6:null,dt(),ft>0&&ct&&ct.push(e),e}function vt(e,t,n,r,i,o){return pt(St(e,t,n,r,i,o,!0))}function mt(e,t,n,r,i){return pt(kt(e,t,n,r,i,!0))}function gt(e){return!!e&&!0===e.__v_isVNode}function yt(e,t){return e.type===t.type&&e.key===t.key}const bt="__vInternal",wt=({key:e})=>null!=e?e:null,_t=({ref:e})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:l,r:e}:e:null;function St(e,t=null,n=null,r=0,o=null,s=(e===it?0:1),a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wt(t),ref:t&&_t(t),scopeId:c,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return l?(Rt(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),ft>0&&!a&&ct&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&ct.push(u),u}const kt=xt;function xt(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==et||(e=st),gt(e)){const r=Tt(e,t,!0);return n&&Rt(r,n),r}if(nn(e)&&(e=e.__vccOpts),t){t=Et(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const l=(0,i.HD)(e)?1:y(e)?128:Be(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return St(e,t,n,o,s,l,a,!0)}function Et(e){return e?(0,r.X3)(e)||bt in e?(0,i.l7)({},e):e:null}function Tt(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,l=t?Pt(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&wt(l),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(_t(t)):[o,_t(t)]:_t(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==it?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),el:e.el,anchor:e.anchor};return c}function It(e=" ",t=0){return kt(ot,null,e,t)}function Ot(e="",t=!1){return t?(ut(),mt(st,null,e)):kt(st,null,e)}function Ct(e){return null==e||"boolean"===typeof e?kt(st):(0,i.kJ)(e)?kt(it,null,e.slice()):"object"===typeof e?At(e):kt(ot,null,String(e))}function At(e){return null===e.el||e.memo?e:Tt(e)}function Rt(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Rt(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||bt in t?3===r&&l&&(1===l.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=l}}else(0,i.mf)(t)?(t={default:t,_ctx:l},n=32):(t=String(t),64&r?(n=16,t=[It(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pt(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],i=r[e];n!==i&&(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function Ft(e,t,n,r){let o;const s=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const Nt=e=>e?zt(e)?en(e)||e.proxy:Nt(e.parent):null,Lt=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nt(e.parent),$root:e=>Nt(e.root),$emit:e=>e.emit,$options:e=>oe(e),$forceUpdate:e=>()=>kn(e.update),$nextTick:e=>_n.bind(e.proxy),$watch:e=>Mn.bind(e)}),Mt={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:l,type:c,appContext:u}=e;let d;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 0:return o[t];case 1:return s[t];case 3:return n[t];case 2:return a[t]}else{if(o!==i.kT&&(0,i.RI)(o,t))return l[t]=0,o[t];if(s!==i.kT&&(0,i.RI)(s,t))return l[t]=1,s[t];if((d=e.propsOptions[0])&&(0,i.RI)(d,t))return l[t]=2,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return l[t]=3,n[t];ee&&(l[t]=4)}}const f=Lt[t];let h,p;return f?("$attrs"===t&&(0,r.j)(e,"get",t),f(e)):(h=c.__cssModules)&&(h=h[t])?h:n!==i.kT&&(0,i.RI)(n,t)?(l[t]=3,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;if(o!==i.kT&&(0,i.RI)(o,t))o[t]=n;else if(r!==i.kT&&(0,i.RI)(r,t))r[t]=n;else if((0,i.RI)(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let l;return void 0!==n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(l=s[0])&&(0,i.RI)(l,a)||(0,i.RI)(r,a)||(0,i.RI)(Lt,a)||(0,i.RI)(o.config.globalProperties,a)}};const Dt=Pe();let $t=0;function qt(e,t,n){const a=e.type,l=(t?t.appContext:e.appContext)||Dt,c={uid:$t++,vnode:e,type:a,parent:t,appContext:l,root:null,next:null,subTree:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ye(a,l),emitsOptions:s(a,l),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:a.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=t?t.root:c,c.emit=o.bind(null,c),e.ce&&e.ce(c),c}let Vt=null;const jt=()=>Vt||l,Ut=e=>{Vt=e,e.scope.on()},Bt=()=>{Vt&&Vt.scope.off(),Vt=null};function zt(e){return 4&e.vnode.shapeFlag}let Ht,Wt,Zt=!1;function Kt(e,t=!1){Zt=t;const{props:n,children:r}=e.vnode,i=zt(e);pe(e,n,i,t),Oe(e,r);const o=i?Jt(e,t):void 0;return Zt=!1,o}function Jt(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Mt));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Qt(e):null;Ut(e),(0,r.Jd)();const s=rn(o,e,0,[e.props,n]);if((0,r.lk)(),Bt(),(0,i.tI)(s)){if(s.then(Bt,Bt),t)return s.then((n=>{Yt(e,n,t)})).catch((t=>{sn(t,e,0)}));e.asyncDep=s}else Yt(e,s,t)}else Gt(e,t)}function Yt(e,t,n){(0,i.mf)(t)?e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Gt(e,n)}function Gt(e,t,n){const o=e.type;if(!e.render){if(Ht&&!o.render){const t=o.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,l=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=Ht(t,l)}}e.render=o.render||i.dG,Wt&&Wt(e)}Ut(e),(0,r.Jd)(),te(e),(0,r.lk)(),Bt()}function Xt(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Qt(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Xt(e))},slots:e.slots,emit:e.emit,expose:t}}function en(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Lt?Lt[n](e):void 0}}))}function tn(e){return(0,i.mf)(e)&&e.displayName||e.name}function nn(e){return(0,i.mf)(e)&&"__vccOpts"in e}function rn(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){sn(o,t,n)}return i}function on(e,t,n,r){if((0,i.mf)(e)){const o=rn(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{sn(e,t,n)})),o}const o=[];for(let i=0;i<e.length;i++)o.push(on(e[i],t,n,r));return o}function sn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void rn(s,null,10,[e,i,o])}an(e,n,i,r)}function an(e,t,n,r=!0){console.error(e)}let ln=!1,cn=!1;const un=[];let dn=0;const fn=[];let hn=null,pn=0;const vn=[];let mn=null,gn=0;const yn=Promise.resolve();let bn=null,wn=null;function _n(e){const t=bn||yn;return e?t.then(this?e.bind(this):e):t}function Sn(e){let t=dn+1,n=un.length;while(t<n){const r=t+n>>>1,i=Rn(un[r]);i<e?t=r+1:n=r}return t}function kn(e){un.length&&un.includes(e,ln&&e.allowRecurse?dn+1:dn)||e===wn||(null==e.id?un.push(e):un.splice(Sn(e.id),0,e),xn())}function xn(){ln||cn||(cn=!0,bn=yn.then(Pn))}function En(e){const t=un.indexOf(e);t>dn&&un.splice(t,1)}function Tn(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),xn()}function In(e){Tn(e,hn,fn,pn)}function On(e){Tn(e,mn,vn,gn)}function Cn(e,t=null){if(fn.length){for(wn=t,hn=[...new Set(fn)],fn.length=0,pn=0;pn<hn.length;pn++)hn[pn]();hn=null,pn=0,wn=null,Cn(e,t)}}function An(e){if(vn.length){const e=[...new Set(vn)];if(vn.length=0,mn)return void mn.push(...e);for(mn=e,mn.sort(((e,t)=>Rn(e)-Rn(t))),gn=0;gn<mn.length;gn++)mn[gn]();mn=null,gn=0}}const Rn=e=>null==e.id?1/0:e.id;function Pn(e){cn=!1,ln=!0,Cn(e),un.sort(((e,t)=>Rn(e)-Rn(t)));try{for(dn=0;dn<un.length;dn++){const e=un[dn];e&&!1!==e.active&&rn(e,null,14)}}finally{dn=0,un.length=0,An(e),ln=!1,bn=null,(un.length||fn.length||vn.length)&&Pn(e)}}const Fn={};function Nn(e,t,n){return Ln(e,t,n)}function Ln(e,t,{immediate:n,deep:o,flush:s,onTrack:a,onTrigger:l}=i.kT){const c=Vt;let u,d,f=!1,h=!1;if((0,r.dq)(e)?(u=()=>e.value,f=!!e._shallow):(0,r.PG)(e)?(u=()=>e,o=!0):(0,i.kJ)(e)?(h=!0,f=e.some(r.PG),u=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?$n(e):(0,i.mf)(e)?rn(e,c,2):void 0))):u=(0,i.mf)(e)?t?()=>rn(e,c,2):()=>{if(!c||!c.isUnmounted)return d&&d(),on(e,c,3,[p])}:i.dG,t&&o){const e=u;u=()=>$n(e())}let p=e=>{d=y.onStop=()=>{rn(e,c,4)}},v=h?[]:Fn;const m=()=>{if(y.active)if(t){const e=y.run();(o||f||(h?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(d&&d(),on(t,c,3,[e,v===Fn?void 0:v,p]),v=e)}else y.run()};let g;m.allowRecurse=!!t,g="sync"===s?m:"post"===s?()=>Me(m,c&&c.suspense):()=>{!c||c.isMounted?In(m):m()};const y=new r.qq(u,g);return t?n?m():v=y.run():"post"===s?Me(y.run.bind(y),c&&c.suspense):y.run(),()=>{y.stop(),c&&c.scope&&(0,i.Od)(c.scope.effects,y)}}function Mn(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?Dn(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.mf)(t)?s=t:(s=t.handler,n=t);const a=Vt;Ut(this);const l=Ln(o,s.bind(r),n);return a?Ut(a):Bt(),l}function Dn(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function $n(e,t=new Set){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))$n(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)$n(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{$n(e,t)}));else if((0,i.PO)(e))for(const n in e)$n(e[n],t);return e}function qn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?gt(t)?kt(e,null,[t]):kt(e,t):kt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&gt(n)&&(n=[n]),kt(e,t,n))}Symbol("");const Vn="3.2.4"},8880:(e,t,n)=>{"use strict";n.d(t,{uT:()=>$,W3:()=>ie,ri:()=>fe});var r=n(2323),i=n(3673),o=n(1959);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,l=new Map,c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(s,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let o=l.get(e);if(!o){const t=a.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,o=t.content,r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}l.set(e,o)}return t.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function d(e,t,n){const i=e.style;if(n)if((0,r.HD)(n)){if(t!==n){const t=i.display;i.cssText=n,"_vod"in e&&(i.display=t)}}else{for(const e in n)h(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&h(i,e,"")}else e.removeAttribute("style")}const f=/\s*!important$/;function h(e,t,n){if((0,r.kJ)(n))n.forEach((n=>h(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);f.test(n)?e.setProperty((0,r.rs)(i),n.replace(f,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],v={};function m(e,t){const n=v[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return v[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return v[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function b(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const r=null==n?"":n;return e.value!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=(0,r.yA)(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(l){}return void e.removeAttribute(t)}}try{e[t]=n}catch(c){0}}let w=Date.now,_=!1;if("undefined"!==typeof window){w()>document.createEvent("Event").timeStamp&&(w=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);_=!!(e&&Number(e[1])<=53)}let S=0;const k=Promise.resolve(),x=()=>{S=0},E=()=>S||(k.then(x),S=w());function T(e,t,n,r){e.addEventListener(t,n,r)}function I(e,t,n,r){e.removeEventListener(t,n,r)}function O(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=A(t);if(r){const s=o[t]=R(r,i);T(e,n,s,a)}else s&&(I(e,n,s,a),o[t]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function A(e){let t;if(C.test(e)){let n;t={};while(n=e.match(C))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function R(e,t){const n=e=>{const r=e.timeStamp||w();(_||r>=n.attached-1)&&(0,i.$d)(P(e,n.value),t,5,[e])};return n.value=e,n.attached=E(),n}function P(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}const F=/^on[a-z]/,N=(e,t,n,i,o=!1,s,a,l,c)=>{"class"===t?u(e,i,o):"style"===t?d(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||O(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):L(e,t,i,o))?b(e,t,i,s,a,l,c):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,o))};function L(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&F.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!F.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",D="animation",$=(e,{slots:t})=>(0,i.h)(i.P$,B(e),t);$.displayName="Transition";const q={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=$.props=(0,r.l7)({},i.P$.props,q),j=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},U=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function B(e){const t={};for(const r in e)r in q||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=a,appearToClass:d=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=z(o),m=v&&v[0],g=v&&v[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:S,onBeforeAppear:k=y,onAppear:x=b,onAppearCancelled:E=w}=t,T=(e,t,n)=>{Z(e,t?d:l),Z(e,t?u:a),n&&n()},I=(e,t)=>{Z(e,p),Z(e,h),t&&t()},O=e=>(t,n)=>{const r=e?x:b,o=()=>T(t,e,n);j(r,[t,o]),K((()=>{Z(t,e?c:s),W(t,e?d:l),U(r)||Y(t,i,m,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){j(y,[e]),W(e,s),W(e,a)},onBeforeAppear(e){j(k,[e]),W(e,c),W(e,u)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){const n=()=>I(e,t);W(e,f),ee(),W(e,h),K((()=>{Z(e,f),W(e,p),U(_)||Y(e,i,g,n)})),j(_,[e,n])},onEnterCancelled(e){T(e,!1),j(w,[e])},onAppearCancelled(e){T(e,!0),j(E,[e])},onLeaveCancelled(e){I(e),j(S,[e])}})}function z(e){if(null==e)return null;if((0,r.Kn)(e))return[H(e.enter),H(e.leave)];{const t=H(e);return[t,t]}}function H(e){const t=(0,r.He)(e);return t}function W(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function Z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function K(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let J=0;function Y(e,t,n,r){const i=e._endId=++J,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=G(e,t);if(!s)return r();const c=s+"end";let u=0;const d=()=>{e.removeEventListener(c,f),o()},f=t=>{t.target===e&&++u>=l&&d()};setTimeout((()=>{u<l&&d()}),a+1),e.addEventListener(c,f)}function G(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(M+"Delay"),o=r(M+"Duration"),s=X(i,o),a=r(D+"Delay"),l=r(D+"Duration"),c=X(a,l);let u=null,d=0,f=0;t===M?s>0&&(u=M,d=s,f=o.length):t===D?c>0&&(u=D,d=c,f=l.length):(d=Math.max(s,c),u=d>0?s>c?M:D:null,f=u?u===M?o.length:l.length:0);const h=u===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:u,timeout:d,propCount:f,hasTransform:h}}function X(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Q(t)+Q(e[n]))))}function Q(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ee(){return document.body.offsetHeight}const te=new WeakMap,ne=new WeakMap,re={name:"TransitionGroup",props:(0,r.l7)({},V,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let s,a;return(0,i.ic)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!le(s[0].el,n.vnode.el,t))return;s.forEach(oe),s.forEach(se);const r=s.filter(ae);ee(),r.forEach((e=>{const n=e.el,r=n.style;W(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,Z(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const l=(0,o.IU)(e),c=B(l);let u=l.tag||i.HY;s=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,c,r,n))}if(s)for(let e=0;e<s.length;e++){const t=s[e];(0,i.nK)(t,(0,i.U2)(t,c,r,n)),te.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(u,null,a)}}},ie=re;function oe(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function se(e){ne.set(e,e.el.getBoundingClientRect())}function ae(e){const t=te.get(e),n=ne.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function le(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=G(r);return i.removeChild(r),o}const ce=(0,r.l7)({patchProp:N},c);let ue;function de(){return ue||(ue=(0,i.Us)(ce))}const fe=(...e)=>{const t=de().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=he(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function he(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},2323:(e,t,n)=>{"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{Z6:()=>w,kT:()=>b,NO:()=>S,dG:()=>_,_A:()=>Z,kC:()=>Y,Nj:()=>ee,l7:()=>T,aU:()=>X,RI:()=>C,rs:()=>J,yA:()=>l,ir:()=>Q,kJ:()=>A,mf:()=>N,e1:()=>o,S0:()=>B,_N:()=>R,tR:()=>E,Kn:()=>D,F7:()=>x,PO:()=>U,tI:()=>$,Gg:()=>z,DM:()=>P,Pq:()=>a,HD:()=>L,yk:()=>M,WV:()=>v,hq:()=>m,fY:()=>r,C_:()=>h,j5:()=>c,Od:()=>I,zw:()=>g,hR:()=>G,He:()=>te,W7:()=>j});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function l(e){return!!e||""===e}function c(e){if(A(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=L(r)?f(r):c(r);if(i)for(const e in i)t[e]=i[e]}return t}return L(e)||D(e)?e:void 0}const u=/;(?![^(]*\))/g,d=/:(.+)/;function f(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(d);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function h(e){let t="";if(L(e))t=e;else if(A(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if(D(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=v(e[r],t[r]);return n}function v(e,t){if(e===t)return!0;let n=F(e),r=F(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=A(e),r=A(t),n||r)return!(!n||!r)&&p(e,t);if(n=D(e),r=D(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!v(e[n],t[n]))return!1}}return String(e)===String(t)}function m(e,t){return e.findIndex((e=>v(e,t)))}const g=e=>null==e?"":A(e)||D(e)&&(e.toString===q||!N(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):R(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:P(t)?{[`Set(${t.size})`]:[...t.values()]}:!D(t)||A(t)||U(t)?t:String(t),b={},w=[],_=()=>{},S=()=>!1,k=/^on[^a-z]/,x=e=>k.test(e),E=e=>e.startsWith("onUpdate:"),T=Object.assign,I=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},O=Object.prototype.hasOwnProperty,C=(e,t)=>O.call(e,t),A=Array.isArray,R=e=>"[object Map]"===V(e),P=e=>"[object Set]"===V(e),F=e=>e instanceof Date,N=e=>"function"===typeof e,L=e=>"string"===typeof e,M=e=>"symbol"===typeof e,D=e=>null!==e&&"object"===typeof e,$=e=>D(e)&&N(e.then)&&N(e.catch),q=Object.prototype.toString,V=e=>q.call(e),j=e=>V(e).slice(8,-1),U=e=>"[object Object]"===V(e),B=e=>L(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,z=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},W=/-(\w)/g,Z=H((e=>e.replace(W,((e,t)=>t?t.toUpperCase():"")))),K=/\B([A-Z])/g,J=H((e=>e.replace(K,"-$1").toLowerCase())),Y=H((e=>e.charAt(0).toUpperCase()+e.slice(1))),G=H((e=>e?`on${Y(e)}`:"")),X=(e,t)=>!Object.is(e,t),Q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t}},5429:e=>{function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=t,e.exports["default"]=e.exports,e.exports.__esModule=!0},515:(e,t,n)=>{var r=n(5429);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e.exports=o,e.exports["default"]=e.exports,e.exports.__esModule=!0},9119:(e,t,n)=>{var r=n(2094);function i(e,t){if(null==e)return{};var n,i,o=r(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}e.exports=i,e.exports["default"]=e.exports,e.exports.__esModule=!0},2094:e=>{function t(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}e.exports=t,e.exports["default"]=e.exports,e.exports.__esModule=!0},3187:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var r=n(515),i=n.n(r),o=n(3673),s=n(1959),a=n(8880),l=n(4554),c=n(9754),u=n(2012),d=n(4716),f=n(1436);function h(e,t=250){let n,r=!1;return function(){return!1===r&&(r=!0,setTimeout((()=>{r=!1}),t),n=e.apply(this,arguments)),n}}function p(e,t,n,r){!0===n.modifiers.stop&&(0,d.sT)(e);const i=n.modifiers.color;let o=n.modifiers.center;o=!0===o||!0===r;const s=document.createElement("span"),a=document.createElement("span"),l=(0,d.FK)(e),{left:c,top:f,width:h,height:p}=t.getBoundingClientRect(),v=Math.sqrt(h*h+p*p),m=v/2,g=(h-v)/2+"px",y=o?g:l.left-c-m+"px",b=(p-v)/2+"px",w=o?b:l.top-f-m+"px";a.className="q-ripple__inner",(0,u.iv)(a,{height:`${v}px`,width:`${v}px`,transform:`translate3d(${y},${w},0) scale3d(.2,.2,1)`,opacity:0}),s.className="q-ripple"+(i?" text-"+i:""),s.setAttribute("dir","ltr"),s.appendChild(a),t.appendChild(s);const _=()=>{s.remove(),clearTimeout(S)};n.abort.push(_);let S=setTimeout((()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${g},${b},0) scale3d(1,1,1)`,a.style.opacity=.2,S=setTimeout((()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,S=setTimeout((()=>{s.remove(),n.abort.splice(n.abort.indexOf(_),1)}),275)}),250)}),50)}function v(e,{modifiers:t,value:n,arg:r,instance:i}){const o=Object.assign({},i.$q.config.ripple,t,n);e.modifiers={early:!0===o.early,stop:!0===o.stop,center:!0===o.center,color:o.color||r,keyCodes:[].concat(o.keyCodes||13)}}const m={name:"ripple",beforeMount(e,t){const n={enabled:!1!==t.value,modifiers:{},abort:[],start(t){!0===n.enabled&&!0!==t.qSkipRipple&&(!0===n.modifiers.early?!0===["mousedown","touchstart"].includes(t.type):"click"===t.type)&&p(t,e,n,!0===t.qKeyEvent)},keystart:h((t=>{!0===n.enabled&&!0!==t.qSkipRipple&&!0===(0,f.So)(t,n.modifiers.keyCodes)&&t.type==="key"+(!0===n.modifiers.early?"down":"up")&&p(t,e,n,!0)}),300)};v(n,t),e.__qripple=n,(0,d.M0)(n,"main",[[e,"mousedown","start","passive"],[e,"touchstart","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n.enabled=!1!==t.value,!0===n.enabled&&Object(t.value)===t.value&&v(n,t)}},beforeUnmount(e){const t=e.__qripple;t.abort.forEach((e=>{e()})),(0,d.ul)(t,"main"),delete e._qripple}};n(7280),n(9377);var g=n(9992),y=n(2417),b=(n(5363),n(7445));function w(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function _(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function S(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!1===Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}const k={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},disable:Boolean};function x(){const e=(0,o.FN)(),{props:t,attrs:n,proxy:r}=e,i=(0,b.Rb)(e),a=(0,s.Fl)((()=>!0===i&&!0!==t.disable&&void 0!==t.to&&null!==t.to&&""!==t.to)),l=(0,s.Fl)((()=>!0===a.value?"a":t.tag||"div")),c=(0,s.Fl)((()=>!0===a.value?r.$router.resolve(t.to):null)),u=(0,s.Fl)((()=>{if(!1===a.value)return null;const{matched:e}=c.value,{length:t}=e,n=e[t-1];if(void 0===n)return-1;const i=r.$route.matched;if(0===i.length)return-1;const o=i.findIndex(_.bind(null,n));if(o>-1)return o;const s=w(e[t-2]);return t>1&&w(n)===s&&i[i.length-1].path!==s?i.findIndex(_.bind(null,e[t-2])):o})),f=(0,s.Fl)((()=>!0===a.value&&u.value>-1&&S(r.$route.params,c.value.params))),h=(0,s.Fl)((()=>!0===f.value&&u.value===r.$route.matched.length-1)),p=(0,s.Fl)((()=>!0===a.value?!0===h.value?` ${t.exactActiveClass} ${t.activeClass}`:!0===t.exact?"":!0===f.value?` ${t.activeClass}`:"":"")),v=(0,s.Fl)((()=>!0===a.value?{href:c.value.href,target:n.target,role:"link"}:{}));function m(e){return!(!0===t.disable||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||!0!==e.__qNavigate&&!0===e.defaultPrevented||void 0!==e.button&&0!==e.button||"_blank"===n.target)&&((0,d.X$)(e),r.$router[!0===t.replace?"replace":"push"](t.to).catch((()=>{})),!0)}return{hasLink:a,linkTag:l,linkRoute:c,linkIsActive:f,linkIsExactActive:h,linkClass:p,linkProps:v,navigateToLink:m}}const E={none:0,xs:4,sm:8,md:16,lg:24,xl:32},T={xs:8,sm:10,md:14,lg:20,xl:24},I=i()(i()(i()({},y.LU),k),{},{type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:i()(i()({},g.jO.align),{},{default:"center"}),stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean});function O(e){const t=(0,y.ZP)(e,T),n=(0,g.ZP)(e),{hasLink:r,linkProps:i,navigateToLink:o}=x(),a=(0,s.Fl)((()=>{const n=!1===e.fab&&!1===e.fabMini?t.value:{};return void 0!==e.padding?Object.assign({},n,{padding:e.padding.split(/\s+/).map((e=>e in E?E[e]+"px":e)).join(" "),minWidth:"0",minHeight:"0"}):n})),l=(0,s.Fl)((()=>!0===e.rounded||!0===e.fab||!0===e.fabMini)),c=(0,s.Fl)((()=>!0!==e.disable&&!0!==e.loading)),u=(0,s.Fl)((()=>!0===c.value?e.tabindex||0:-1)),d=(0,s.Fl)((()=>"a"===e.type||!0===r.value)),f=(0,s.Fl)((()=>!0===e.flat?"flat":!0===e.outline?"outline":!0===e.push?"push":!0===e.unelevated?"unelevated":"standard")),h=(0,s.Fl)((()=>{const t={tabindex:u.value};return"a"!==e.type&&(t.type=e.type),!0===r.value?Object.assign(t,i.value):t.role="a"===e.type?"link":"button",!0===e.loading&&void 0!==e.percentage&&Object.assign(t,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),!0===e.disable&&(t.disabled="",t["aria-disabled"]="true"),t})),p=(0,s.Fl)((()=>{let t;return void 0!==e.color?t=!0===e.flat||!0===e.outline?`text-${e.textColor||e.color}`:`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(t=`text-${e.textColor}`),`q-btn--${f.value} q-btn--`+(!0===e.round?"round":"rectangle"+(!0===l.value?" q-btn--rounded":""))+(void 0!==t?" "+t:"")+(!0===c.value?" q-btn--actionable q-focusable q-hoverable":!0===e.disable?" disabled":"")+(!0===e.fab?" q-btn--fab":!0===e.fabMini?" q-btn--fab-mini":"")+(!0===e.noCaps?" q-btn--no-uppercase":"")+(!0===e.dense?" q-btn--dense":"")+(!0===e.stretch?" no-border-radius self-stretch":"")+(!0===e.glossy?" glossy":"")})),v=(0,s.Fl)((()=>n.value+(!0===e.stack?" column":" row")+(!0===e.noWrap?" no-wrap text-no-wrap":"")+(!0===e.loading?" q-btn__content--hidden":"")));return{classes:p,style:a,innerClasses:v,attributes:h,hasLink:r,isLink:d,navigateToLink:o,isActionable:c}}var C=n(7657);const{passiveCapture:A}=d.rU;let R=null,P=null,F=null;const N=(0,o.aZ)({name:"QBtn",props:i()(i()({},I),{},{percentage:Number,darkPercentage:Boolean}),emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:r}=(0,o.FN)(),{classes:u,style:h,innerClasses:p,attributes:v,hasLink:g,isLink:y,navigateToLink:b,isActionable:w}=O(e),_=(0,s.iH)(null),S=(0,s.iH)(null);let k,x,E=null;const T=(0,s.Fl)((()=>void 0!==e.label&&null!==e.label&&""!==e.label)),I=(0,s.Fl)((()=>!1!==e.ripple&&i()({keyCodes:!0===y.value?[13,32]:[13]},!0===e.ripple?{}:e.ripple))),N=(0,s.Fl)((()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}})),L=(0,s.Fl)((()=>!0===e.loading?{onMousedown:z,onTouchstartPassive:z,onClick:z,onKeydown:z,onKeyup:z}:!0===w.value?{onClick:$,onKeydown:q,onMousedown:j,onTouchstartPassive:V}:{onClick:d.NS})),M=(0,s.Fl)((()=>[[m,I.value,void 0,{center:e.round}]])),D=(0,s.Fl)((()=>i()(i()({ref:_,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:h.value},v.value),L.value)));function $(t){if(void 0!==t){if(!0===t.defaultPrevented)return;const n=document.activeElement;if("submit"===e.type&&n!==document.body&&!1===_.value.contains(n)&&!1===n.contains(_.value)){_.value.focus();const e=()=>{document.removeEventListener("keydown",d.NS,!0),document.removeEventListener("keyup",e,A),null!==_.value&&_.value.removeEventListener("blur",e,A)};document.addEventListener("keydown",d.NS,!0),document.addEventListener("keyup",e,A),_.value.addEventListener("blur",e,A)}}if(!0===g.value){const e=()=>{t.__qNavigate=!0,b(t)};n("click",t,e),!0!==t.defaultPrevented&&e()}else n("click",t)}function q(e){!0===(0,f.So)(e,[13,32])&&((0,d.NS)(e),P!==_.value&&(null!==P&&B(),_.value.focus(),P=_.value,_.value.classList.add("q-btn--active"),document.addEventListener("keyup",U,!0),_.value.addEventListener("blur",U,A))),n("keydown",e)}function V(e){R!==_.value&&(null!==R&&B(),R=_.value,E=e.target,E.addEventListener("touchcancel",U,A),E.addEventListener("touchend",U,A)),k=!0,clearTimeout(x),x=setTimeout((()=>{k=!1}),200),n("touchstart",e)}function j(e){F!==_.value&&(null!==F&&B(),F=_.value,_.value.classList.add("q-btn--active"),document.addEventListener("mouseup",U,A)),e.qSkipRipple=!0===k,n("mousedown",e)}function U(e){if(void 0===e||"blur"!==e.type||document.activeElement!==_.value){if(void 0!==e&&"keyup"===e.type){if(P===_.value&&!0===(0,f.So)(e,[13,32])){const t=new MouseEvent("click",e);t.qKeyEvent=!0,!0===e.defaultPrevented&&(0,d.X$)(t),!0===e.cancelBubble&&(0,d.sT)(t),_.value.dispatchEvent(t),(0,d.NS)(e),e.qKeyEvent=!0}n("keyup",e)}B()}}function B(e){const t=S.value;!0===e||R!==_.value&&F!==_.value||null===t||t===document.activeElement||(t.setAttribute("tabindex",-1),t.focus()),R===_.value&&(null!==E&&(E.removeEventListener("touchcancel",U,A),E.removeEventListener("touchend",U,A)),R=E=null),F===_.value&&(document.removeEventListener("mouseup",U,A),F=null),P===_.value&&(document.removeEventListener("keyup",U,!0),null!==_.value&&_.value.removeEventListener("blur",U,A),P=null),null!==_.value&&_.value.classList.remove("q-btn--active")}function z(e){e.qSkipRipple=!0}return(0,o.Jd)((()=>{B(!0)})),Object.assign(r,{click:$}),()=>{let n=[];void 0!==e.icon&&n.push((0,o.h)(l.Z,{name:e.icon,left:!1===e.stack&&!0===T.value,role:"img","aria-hidden":"true"})),!0===T.value&&n.push((0,o.h)("span",{class:"block"},[e.label])),n=(0,C.vs)(t.default,n),void 0!==e.iconRight&&!1===e.round&&n.push((0,o.h)(l.Z,{name:e.iconRight,right:!1===e.stack&&!0===T.value,role:"img","aria-hidden":"true"}));const r=[(0,o.h)("span",{class:"q-focus-helper",ref:S})];return!0===e.loading&&void 0!==e.percentage&&r.push((0,o.h)("span",{class:"q-btn__progress absolute-full overflow-hidden"},[(0,o.h)("span",{class:"q-btn__progress-indicator fit block"+(!0===e.darkPercentage?" q-btn__progress--dark":""),style:N.value})])),r.push((0,o.h)("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+p.value},n)),null!==e.loading&&r.push((0,o.h)(a.uT,{name:"q-transition--fade"},(()=>!0===e.loading?[(0,o.h)("span",{key:"loading",class:"absolute-full flex flex-center"},void 0!==t.loading?t.loading():[(0,o.h)(c.Z)])]:null))),(0,C.Jl)(!0===y.value?"a":"button",D.value,r,"ripple",!0!==e.disable&&!1!==e.ripple,(()=>M.value))}}})},151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(515),i=n.n(r),o=(n(9377),n(3673)),s=n(1959),a=n(2236),l=n(7657);const c=(0,o.aZ)({name:"QCard",props:i()(i()({},a.S),{},{tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean}),setup(e,{slots:t}){const n=(0,o.FN)(),r=(0,a.Z)(e,n.proxy.$q),i=(0,s.Fl)((()=>"q-card"+(!0===r.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,o.h)(e.tag,{class:i.value},(0,l.KR)(t.default))}})},9367:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(515),i=n.n(r),o=n(3673),s=n(1959),a=n(9992),l=n(7657);const c=(0,o.aZ)({name:"QCardActions",props:i()(i()({},a.jO),{},{vertical:Boolean}),setup(e,{slots:t}){const n=(0,a.ZP)(e),r=(0,s.Fl)((()=>`q-card__actions ${n.value} q-card__actions--`+(!0===e.vertical?"vert column":"horiz row")));return()=>(0,o.h)("div",{class:r.value},(0,l.KR)(t.default))}})},5589:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(3673),i=n(1959),o=n(7657);const s=(0,r.aZ)({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=(0,i.Fl)((()=>"q-card__section q-card__section--"+(!0===e.horizontal?"horiz row no-wrap":"vert")));return()=>(0,r.h)(e.tag,{class:n.value},(0,o.KR)(t.default))}})},1420:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(3673),i=n(515),o=n.n(i),s=n(1959),a=n(2236),l=n(2417);function c(e,t){const n=(0,s.iH)(null),i=(0,s.Fl)((()=>!0!==e.disable?null:(0,r.h)("span",{ref:n,class:"no-outline",tabindex:-1})));function o(e){void 0!==e&&0===e.type.indexOf("key")?document.activeElement!==t.value&&!0===t.value.contains(document.activeElement)&&t.value.focus():void 0!==e&&!0!==t.value.contains(e.target)||null===n.value||n.value.focus()}return{refocusTargetEl:i,refocusTarget:o}}var u=n(9550);const d={xs:30,sm:35,md:40,lg:50,xl:60};var f=n(4716),h=n(7657);const p=o()(o()(o()(o()({},a.S),l.LU),u.Fz),{},{modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},toggleOrder:{type:String,validator:e=>"tf"===e||"ft"===e},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]}),v=["update:modelValue"];function m(e,t){const{props:n,slots:i,emit:p,proxy:v}=(0,r.FN)(),{$q:m}=v,g=(0,a.Z)(n,m),y=(0,s.iH)(null),{refocusTargetEl:b,refocusTarget:w}=c(n,y),_=(0,l.ZP)(n,d),S=(0,s.Fl)((()=>void 0!==n.val&&Array.isArray(n.modelValue))),k=(0,s.Fl)((()=>!0===S.value?n.modelValue.indexOf(n.val):-1)),x=(0,s.Fl)((()=>!0===S.value?k.value>-1:n.modelValue===n.trueValue)),E=(0,s.Fl)((()=>!0===S.value?-1===k.value:n.modelValue===n.falseValue)),T=(0,s.Fl)((()=>!1===x.value&&!1===E.value)),I=(0,s.Fl)((()=>!0===n.disable?-1:n.tabindex||0)),O=(0,s.Fl)((()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(!0===n.disable?" disabled":"")+(!0===g.value?` q-${e}--dark`:"")+(!0===n.dense?` q-${e}--dense`:"")+(!0===n.leftLabel?" reverse":""))),C=(0,s.Fl)((()=>{const t=!0===x.value?"truthy":!0===E.value?"falsy":"indet",r=void 0===n.color||!0!==n.keepColor&&("toggle"===e?!0!==x.value:!0===E.value)?"":` text-${n.color}`;return`q-${e}__inner relative-position non-selectable q-${e}__inner--${t}${r}`})),A=(0,s.Fl)((()=>{const e={type:"checkbox"};return void 0!==n.name&&Object.assign(e,{checked:x.value,name:n.name,value:!0===S.value?n.val:n.trueValue}),e})),R=(0,u.eX)(A),P=(0,s.Fl)((()=>{const e={tabindex:I.value,role:"checkbox","aria-label":n.label,"aria-checked":!0===T.value?"mixed":!0===x.value?"true":"false"};return!0===n.disable&&(e["aria-disabled"]="true"),e}));function F(e){void 0!==e&&((0,f.NS)(e),w(e)),!0!==n.disable&&p("update:modelValue",N(),e)}function N(){if(!0===S.value){if(!0===x.value){const e=n.modelValue.slice();return e.splice(k.value,1),e}return n.modelValue.concat([n.val])}if(!0===x.value){if("ft"!==n.toggleOrder||!1===n.toggleIndeterminate)return n.falseValue}else{if(!0!==E.value)return"ft"!==n.toggleOrder?n.trueValue:n.falseValue;if("ft"===n.toggleOrder||!1===n.toggleIndeterminate)return n.trueValue}return n.indeterminateValue}function L(e){13!==e.keyCode&&32!==e.keyCode||(0,f.NS)(e)}function M(e){13!==e.keyCode&&32!==e.keyCode||F(e)}const D=t(x,T);return Object.assign(v,{toggle:F}),()=>{const t=D();!0!==n.disable&&R(t,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const s=[(0,r.h)("div",{class:C.value,style:_.value},t)];null!==b.value&&s.push(b.value);const a=void 0!==n.label?(0,h.vs)(i.default,[n.label]):(0,h.KR)(i.default);return void 0!==a&&s.push((0,r.h)("div",{class:`q-${e}__label q-anchor--skip`},a)),(0,r.h)("div",o()(o()({ref:y,class:O.value},P.value),{},{onClick:F,onKeydown:L,onKeyup:M}),s)}}const g=(0,r.h)("div",{class:"q-checkbox__bg absolute"},[(0,r.h)("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24","aria-hidden":"true"},[(0,r.h)("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),(0,r.h)("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),y=(0,r.aZ)({name:"QCheckbox",props:p,emits:v,setup(){return m("checkbox",(()=>()=>[g]))}})},3379:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$});var r=n(515),i=n.n(r),o=(n(71),n(3673)),s=n(1959),a=n(8880),l=n(69),c=n(4955);function u(){let e;return(0,o.Jd)((()=>{e=void 0})),{registerTick(t){e=t},removeTick(){e=void 0},prepareTick(){if(void 0!==e){const t=e;(0,o.Y3)((()=>{e===t&&(e(),e=void 0)}))}}}}var d=n(3628);const f={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};n(4716);var h=n(230),p=n(8144),v=n(4312);function m(e){e=e.parent;while(void 0!==e&&null!==e){if("QGlobalDialog"===e.type.name)return!0;if("QDialog"===e.type.name||"QMenu"===e.type.name)return!1;e=e.parent}return!1}function g(e,t,n,r){const i=(0,s.iH)(!1);let a=null;const l={},c=!0===r&&m(e);function u(t){!0!==t?(!1===c&&null===a&&(a=(0,p.q_)()),i.value=!0,v.wN.push(e.proxy),(0,h.YX)(l)):(0,h.xF)(l)}function d(){(0,h.xF)(l),i.value=!1;const t=v.wN.indexOf(e.proxy);t>-1&&v.wN.splice(t,1),null!==a&&((0,p.pB)(a),a=null)}return(0,o.Ah)(d),Object.assign(e.proxy,{__qPortalInnerRef:t}),{showPortal:u,hidePortal:d,portalIsActive:i,renderPortal:()=>!0===c?n():!0===i.value?[(0,o.h)(o.lR,{to:a},n())]:void 0}}var y=n(405),b=n(2012),w=n(7657),_=n(4688),S=n(1436);const k=[];let x;function E(e){x=27===e.keyCode}function T(){!0===x&&(x=!1)}function I(e){!0===x&&(x=!1,!0===(0,S.So)(e,27)&&k[k.length-1](e))}function O(e){window[e]("keydown",E),window[e]("blur",T),window[e]("keyup",I),x=!1}function C(e){!0===_.Lp.is.desktop&&(k.push(e),1===k.length&&O("addEventListener"))}function A(e){const t=k.indexOf(e);t>-1&&(k.splice(t,1),0===k.length&&O("removeEventListener"))}const R=[];function P(e){R[R.length-1](e)}function F(e){!0===_.Lp.is.desktop&&(R.push(e),1===R.length&&document.body.addEventListener("focusin",P))}function N(e){const t=R.indexOf(e);t>-1&&(R.splice(t,1),0===R.length&&document.body.removeEventListener("focusin",P))}let L=0;const M={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},D={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},$=(0,o.aZ)({name:"QDialog",inheritAttrs:!1,props:i()(i()(i()({},d.vr),f),{},{transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>"standard"===e||["top","bottom","left","right"].includes(e)}}),emits:[...d.gH,"shake","click","escape-key"],setup(e,{slots:t,emit:n,attrs:r}){const f=(0,o.FN)(),p=(0,s.iH)(null),v=(0,s.iH)(!1),m=(0,s.iH)(!1),_=(0,s.iH)(!1);let S,k,x,E=null;const T=(0,s.Fl)((()=>!0!==e.persistent&&!0!==e.noRouteDismiss&&!0!==e.seamless)),{preventBodyScroll:I}=(0,y.Z)(),{registerTimeout:O,removeTimeout:R}=(0,c.Z)(),{registerTick:P,removeTick:$,prepareTick:q}=u(),{showPortal:V,hidePortal:j,portalIsActive:U,renderPortal:B}=g(f,p,ue,!0),{hide:z}=(0,d.ZP)({showing:v,hideOnRouteChange:T,handleShow:ee,handleHide:te,processOnMount:!0}),{addToHistory:H,removeFromHistory:W}=(0,l.Z)(v,z,T),Z=(0,s.Fl)((()=>"q-dialog__inner flex no-pointer-events q-dialog__inner--"+(!0===e.maximized?"maximized":"minimized")+` q-dialog__inner--${e.position} ${M[e.position]}`+(!0===_.value?" q-dialog__inner--animating":"")+(!0===e.fullWidth?" q-dialog__inner--fullwidth":"")+(!0===e.fullHeight?" q-dialog__inner--fullheight":"")+(!0===e.square?" q-dialog__inner--square":""))),K=(0,s.Fl)((()=>"q-transition--"+(void 0===e.transitionShow?D[e.position][0]:e.transitionShow))),J=(0,s.Fl)((()=>"q-transition--"+(void 0===e.transitionHide?D[e.position][1]:e.transitionHide))),Y=(0,s.Fl)((()=>!0===m.value?J.value:K.value)),G=(0,s.Fl)((()=>!0===v.value&&!0!==e.seamless)),X=(0,s.Fl)((()=>!0===e.autoClose?{onClick:ae}:{})),Q=(0,s.Fl)((()=>["q-dialog fullscreen no-pointer-events q-dialog--"+(!0===G.value?"modal":"seamless"),r.class]));function ee(t){R(),$(),H(),E=!1===e.noRefocus&&null!==document.activeElement?document.activeElement:null,se(e.maximized),V(),_.value=!0,!0!==e.noFocus&&(null!==document.activeElement&&document.activeElement.blur(),P(ne),q()),O((()=>{if(!0===f.proxy.$q.platform.is.ios){if(!0!==e.seamless&&document.activeElement){const{top:e,bottom:t}=document.activeElement.getBoundingClientRect(),{innerHeight:n}=window,r=void 0!==window.visualViewport?window.visualViewport.height:n;e>0&&t>r/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-r,t>=n?1/0:Math.ceil(document.scrollingElement.scrollTop+t-r/2))),document.activeElement.scrollIntoView()}x=!0,p.value.click(),x=!1}V(!0),_.value=!1,n("show",t)}),e.transitionDuration)}function te(t){R(),$(),W(),oe(!0),_.value=!0,null!==E&&E.focus(),O((()=>{j(),_.value=!1,n("hide",t)}),e.transitionDuration)}function ne(){(0,h.jd)((()=>{let e=p.value;null!==e&&!0!==e.contains(document.activeElement)&&(e=e.querySelector("[autofocus], [data-autofocus]")||e,e.focus())}))}function re(){ne(),n("shake");const e=p.value;null!==e&&(e.classList.remove("q-animate--scale"),e.classList.add("q-animate--scale"),clearTimeout(S),S=setTimeout((()=>{null!==p.value&&(e.classList.remove("q-animate--scale"),ne())}),170))}function ie(){!0!==e.seamless&&(!0===e.persistent||!0===e.noEscDismiss?!0!==e.maximized&&re():(n("escape-key"),z()))}function oe(t){clearTimeout(S),!0!==t&&!0!==v.value||(se(!1),!0!==e.seamless&&(I(!1),N(ce),A(ie)))}function se(e){!0===e?!0!==k&&(L<1&&document.body.classList.add("q-body--dialog"),L++,k=!0):!0===k&&(L<2&&document.body.classList.remove("q-body--dialog"),L--,k=!1)}function ae(e){!0!==x&&(z(e),n("click",e))}function le(t){!0!==e.persistent&&!0!==e.noBackdropDismiss?z(t):re()}function ce(e){!0===v.value&&!0===U.value&&!0!==(0,b.mY)(p.value,e.target)&&ne()}function ue(){return(0,o.h)("div",i()(i()({},r),{},{class:Q.value}),[(0,o.h)(a.uT,{name:"q-transition--fade",appear:!0},(()=>!0===G.value?(0,o.h)("div",{class:"q-dialog__backdrop fixed-full","aria-hidden":"true",onMousedown:le}):null)),(0,o.h)(a.uT,{name:Y.value,appear:!0},(()=>!0===v.value?(0,o.h)("div",i()({ref:p,class:Z.value,tabindex:-1},X.value),(0,w.KR)(t.default)):null))])}return(0,o.YP)(v,(e=>{(0,o.Y3)((()=>{m.value=e}))})),(0,o.YP)((()=>e.maximized),(e=>{!0===v.value&&se(e)})),(0,o.YP)(G,(e=>{I(e),!0===e?(F(ce),C(ie)):(N(ce),A(ie))})),Object.assign(f.proxy,{focus:ne,shake:re,__updateRefocusTarget(e){E=e||null}}),(0,o.Jd)((()=>{oe()})),B}})},7317:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var r=n(515),i=n.n(r),o=(n(71),n(3673)),s=n(1959),a=n(69),l=n(3628),c=n(405),u=n(4955),d=n(2236),f=n(4688);const h={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},p=Object.keys(h);function v(e){const t={};for(const n of p)!0===e[n]&&(t[n]=!0);return 0===Object.keys(t).length?h:(!0===t.horizontal?t.left=t.right=!0:!0===t.left&&!0===t.right&&(t.horizontal=!0),!0===t.vertical?t.up=t.down=!0:!0===t.up&&!0===t.down&&(t.vertical=!0),!0===t.horizontal&&!0===t.vertical&&(t.all=!0),t)}function m(e,t){return void 0===t.event&&void 0!==e.target&&!0!==e.target.draggable&&"function"===typeof t.handler&&"INPUT"!==e.target.nodeName.toUpperCase()&&(void 0===e.qClonedBy||-1===e.qClonedBy.indexOf(t.uid))}h.all=!0;var g=n(4716);function y(){if(void 0!==window.getSelection){const e=window.getSelection();void 0!==e.empty?e.empty():void 0!==e.removeAllRanges&&(e.removeAllRanges(),!0!==f.ZP.is.mobile&&e.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}function b(e,t,n){const r=(0,g.FK)(e);let i,o=r.left-t.event.x,s=r.top-t.event.y,a=Math.abs(o),l=Math.abs(s);const c=t.direction;!0===c.horizontal&&!0!==c.vertical?i=o<0?"left":"right":!0!==c.horizontal&&!0===c.vertical?i=s<0?"up":"down":!0===c.up&&s<0?(i="up",a>l&&(!0===c.left&&o<0?i="left":!0===c.right&&o>0&&(i="right"))):!0===c.down&&s>0?(i="down",a>l&&(!0===c.left&&o<0?i="left":!0===c.right&&o>0&&(i="right"))):!0===c.left&&o<0?(i="left",a<l&&(!0===c.up&&s<0?i="up":!0===c.down&&s>0&&(i="down"))):!0===c.right&&o>0&&(i="right",a<l&&(!0===c.up&&s<0?i="up":!0===c.down&&s>0&&(i="down")));let u=!1;if(void 0===i&&!1===n){if(!0===t.event.isFirst||void 0===t.event.lastDir)return{};i=t.event.lastDir,u=!0,"left"===i||"right"===i?(r.left-=o,a=0,o=0):(r.top-=s,l=0,s=0)}return{synthetic:u,payload:{evt:e,touch:!0!==t.event.mouse,mouse:!0===t.event.mouse,position:r,direction:i,isFirst:t.event.isFirst,isFinal:!0===n,duration:Date.now()-t.event.time,distance:{x:a,y:l},offset:{x:o,y:s},delta:{x:r.left-t.event.lastX,y:r.top-t.event.lastY}}}}let w=0;const _={name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(!0!==n.mouse&&!0!==f.Lp.has.touch)return;function r(e,t){!0===n.mouse&&!0===t?(0,g.NS)(e):(!0===n.stop&&(0,g.sT)(e),!0===n.prevent&&(0,g.X$)(e))}const i={uid:"qvtp_"+w++,handler:t,modifiers:n,direction:v(n),noop:g.ZT,mouseStart(e){m(e,i)&&(0,g.du)(e)&&((0,g.M0)(i,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),i.start(e,!0))},touchStart(e){if(m(e,i)){const t=e.target;(0,g.M0)(i,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","passiveCapture"],[t,"touchend","end","passiveCapture"]]),i.start(e)}},start(t,r){!0===f.Lp.is.firefox&&(0,g.Jf)(e,!0),i.lastEvt=t;const o=(0,g.FK)(t);if(!0===r||!0===n.stop){if(!0!==i.direction.all&&(!0!==r||!0!==i.direction.mouseAllDir)){const e=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);!0===t.defaultPrevented&&(0,g.X$)(e),!0===t.cancelBubble&&(0,g.sT)(e),e.qClonedBy=void 0===t.qClonedBy?[i.uid]:t.qClonedBy.concat(i.uid),e.qKeyEvent=t.qKeyEvent,e.qClickOutside=t.qClickOutside,i.initialEvent={target:t.target,event:e}}(0,g.sT)(t)}i.event={x:o.left,y:o.top,time:Date.now(),mouse:!0===r,detected:!1,isFirst:!0,isFinal:!1,lastX:o.left,lastY:o.top}},move(e){if(void 0===i.event)return;i.lastEvt=e;const t=!0===i.event.mouse,o=()=>{r(e,t),!0!==n.preserveCursor&&(document.documentElement.style.cursor="grabbing"),!0===t&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),y(),i.styleCleanup=e=>{if(i.styleCleanup=void 0,!0!==n.preserveCursor&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),!0===t){const t=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==e?setTimeout((()=>{t(),e()}),50):t()}else void 0!==e&&e()}};if(!0===i.event.detected){!0!==i.event.isFirst&&r(e,i.event.mouse);const{payload:t,synthetic:n}=b(e,i,!1);return void(void 0!==t&&(!1===i.handler(t)?i.end(e):(void 0===i.styleCleanup&&!0===i.event.isFirst&&o(),i.event.lastX=t.position.left,i.event.lastY=t.position.top,i.event.lastDir=!0===n?void 0:t.direction,i.event.isFirst=!1)))}if(!0===i.direction.all||!0===t&&!0===i.modifiers.mouseAllDir)return o(),i.event.detected=!0,void i.move(e);const s=(0,g.FK)(e),a=s.left-i.event.x,l=s.top-i.event.y,c=Math.abs(a),u=Math.abs(l);c!==u&&(!0===i.direction.horizontal&&c>u||!0===i.direction.vertical&&c<u||!0===i.direction.up&&c<u&&l<0||!0===i.direction.down&&c<u&&l>0||!0===i.direction.left&&c>u&&a<0||!0===i.direction.right&&c>u&&a>0?(i.event.detected=!0,i.move(e)):i.end(e,!0))},end(t,n){if(void 0!==i.event){if((0,g.ul)(i,"temp"),!0===f.Lp.is.firefox&&(0,g.Jf)(e,!1),!0===n)void 0!==i.styleCleanup&&i.styleCleanup(),!0!==i.event.detected&&void 0!==i.initialEvent&&i.initialEvent.target.dispatchEvent(i.initialEvent.event);else if(!0===i.event.detected){!0===i.event.isFirst&&i.handler(b(void 0===t?i.lastEvt:t,i).payload);const{payload:e}=b(void 0===t?i.lastEvt:t,i,!0),n=()=>{i.handler(e)};void 0!==i.styleCleanup?i.styleCleanup(n):n()}i.event=void 0,i.initialEvent=void 0,i.lastEvt=void 0}}};e.__qtouchpan=i,!0===n.mouse&&(0,g.M0)(i,"main",[[e,"mousedown","mouseStart","passive"+(!0===n.mouseCapture?"Capture":"")]]),!0===f.Lp.has.touch&&(0,g.M0)(i,"main",[[e,"touchstart","touchStart","passive"+(!0===n.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;void 0!==n&&(t.oldValue!==t.value&&("function"!==typeof value&&n.end(),n.handler=t.value),n.direction=v(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;void 0!==t&&(void 0!==t.event&&t.end(),(0,g.ul)(t,"main"),(0,g.ul)(t,"temp"),!0===f.Lp.is.firefox&&(0,g.Jf)(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchpan)}};function S(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}var k=n(7657),x=n(2547);const E=150,T=(0,o.aZ)({name:"QDrawer",inheritAttrs:!1,props:i()(i()(i()({},l.vr),d.S),{},{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...l.gH,"on-layout","mini-state"],setup(e,{slots:t,emit:n,attrs:r}){const f=(0,o.FN)(),{proxy:{$q:h}}=f,p=(0,d.Z)(e,h),{preventBodyScroll:v}=(0,c.Z)(),{registerTimeout:m}=(0,u.Z)(),g=(0,o.f3)(x.YE,(()=>{console.error("QDrawer needs to be child of QLayout")}));let y,b,w;const T=(0,s.iH)("mobile"===e.behavior||"desktop"!==e.behavior&&g.totalWidth.value<=e.breakpoint),I=(0,s.Fl)((()=>!0===e.mini&&!0!==T.value)),O=(0,s.Fl)((()=>!0===I.value?e.miniWidth:e.width)),C=(0,s.iH)(!0===e.showIfAbove&&!1===T.value||!0===e.modelValue),A=(0,s.Fl)((()=>!0!==e.persistent&&(!0===T.value||!0===K.value)));function R(e,t){if(L(),!1!==e&&g.animate(),se(0),!0===T.value){const e=g.instances[z.value];void 0!==e&&!0===e.belowBreakpoint&&e.hide(!1),le(1),!0!==g.isContainer.value&&v(!0)}else le(0),!1!==e&&ce(!1);m((()=>{!1!==e&&ce(!0),!0!==t&&n("show",e)}),E)}function P(e,t){M(),!1!==e&&g.animate(),le(0),se(q.value*O.value),he(),!0!==t&&m((()=>{n("hide",e)}),E)}const{show:F,hide:N}=(0,l.ZP)({showing:C,hideOnRouteChange:A,handleShow:R,handleHide:P}),{addToHistory:L,removeFromHistory:M}=(0,a.Z)(C,N,A),D={belowBreakpoint:T,hide:N},$=(0,s.Fl)((()=>"right"===e.side)),q=(0,s.Fl)((()=>(!0===h.lang.rtl?-1:1)*(!0===$.value?1:-1))),V=(0,s.iH)(0),j=(0,s.iH)(!1),U=(0,s.iH)(!1),B=(0,s.iH)(O.value*q.value),z=(0,s.Fl)((()=>!0===$.value?"left":"right")),H=(0,s.Fl)((()=>!0===C.value&&!1===T.value&&!1===e.overlay?!0===e.miniToOverlay?e.miniWidth:O.value:0)),W=(0,s.Fl)((()=>!0===e.overlay||!0===e.miniToOverlay||g.view.value.indexOf($.value?"R":"L")>-1||!0===h.platform.is.ios&&!0===g.isContainer.value)),Z=(0,s.Fl)((()=>!1===e.overlay&&!0===C.value&&!1===T.value)),K=(0,s.Fl)((()=>!0===e.overlay&&!0===C.value&&!1===T.value)),J=(0,s.Fl)((()=>"fullscreen q-drawer__backdrop"+(!1===C.value&&!1===j.value?" hidden":""))),Y=(0,s.Fl)((()=>({backgroundColor:`rgba(0,0,0,${.4*V.value})`}))),G=(0,s.Fl)((()=>!0===$.value?"r"===g.rows.value.top[2]:"l"===g.rows.value.top[0])),X=(0,s.Fl)((()=>!0===$.value?"r"===g.rows.value.bottom[2]:"l"===g.rows.value.bottom[0])),Q=(0,s.Fl)((()=>{const e={};return!0===g.header.space&&!1===G.value&&(!0===W.value?e.top=`${g.header.offset}px`:!0===g.header.space&&(e.top=`${g.header.size}px`)),!0===g.footer.space&&!1===X.value&&(!0===W.value?e.bottom=`${g.footer.offset}px`:!0===g.footer.space&&(e.bottom=`${g.footer.size}px`)),e})),ee=(0,s.Fl)((()=>{const e={width:`${O.value}px`,transform:`translateX(${B.value}px)`};return!0===T.value?e:Object.assign(e,Q.value)})),te=(0,s.Fl)((()=>"q-drawer__content fit "+(!0!==g.isContainer.value?"scroll":"overflow-auto"))),ne=(0,s.Fl)((()=>`q-drawer q-drawer--${e.side}`+(!0===U.value?" q-drawer--mini-animate":"")+(!0===e.bordered?" q-drawer--bordered":"")+(!0===p.value?" q-drawer--dark q-dark":"")+(!0===j.value?" no-transition":!0===C.value?"":" q-layout--prevent-focus")+(!0===T.value?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":" q-drawer--"+(!0===I.value?"mini":"standard")+(!0===W.value||!0!==Z.value?" fixed":"")+(!0===e.overlay||!0===e.miniToOverlay?" q-drawer--on-top":"")+(!0===G.value?" q-drawer--top-padding":"")))),re=(0,s.Fl)((()=>{const t=!0===h.lang.rtl?e.side:z.value;return[[_,de,void 0,{[t]:!0,mouse:!0}]]})),ie=(0,s.Fl)((()=>{const t=!0===h.lang.rtl?z.value:e.side;return[[_,fe,void 0,{[t]:!0,mouse:!0}]]})),oe=(0,s.Fl)((()=>{const t=!0===h.lang.rtl?z.value:e.side;return[[_,fe,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]}));function se(e){void 0===e?(0,o.Y3)((()=>{e=!0===C.value?0:O.value,se(q.value*e)})):(!0!==g.isContainer.value||!0!==$.value||!0!==T.value&&Math.abs(e)!==O.value||(e+=q.value*g.scrollbarWidth.value),B.value=e)}function ae(){ve(T,"mobile"===e.behavior||"desktop"!==e.behavior&&g.totalWidth.value<=e.breakpoint)}function le(e){V.value=e}function ce(e){const t=!0===e?"remove":!0!==g.isContainer.value?"add":"";""!==t&&document.body.classList[t]("q-body--drawer-toggle")}function ue(){clearTimeout(b),f.proxy&&f.proxy.$el&&f.proxy.$el.classList.add("q-drawer--mini-animate"),U.value=!0,b=setTimeout((()=>{U.value=!1}),150)}function de(e){if(!1!==C.value)return;const t=O.value,n=S(e.distance.x,0,t);if(!0===e.isFinal){const e=n>=Math.min(75,t);return!0===e?F():(g.animate(),le(0),se(q.value*t)),void(j.value=!1)}se((!0===h.lang.rtl?!0!==$.value:$.value)?Math.max(t-n,0):Math.min(0,n-t)),le(S(n/t,0,1)),!0===e.isFirst&&(j.value=!0)}function fe(t){if(!0!==C.value)return;const n=O.value,r=t.direction===e.side,i=(!0===h.lang.rtl?!0!==r:r)?S(t.distance.x,0,n):0;if(!0===t.isFinal){const e=Math.abs(i)<Math.min(75,n);return!0===e?(g.animate(),le(1),se(0)):N(),void(j.value=!1)}se(q.value*i),le(S(1-i/n,0,1)),!0===t.isFirst&&(j.value=!0)}function he(){v(!1),ce(!0)}function pe(t,n){g.update(e.side,t,n)}function ve(e,t){e.value!==t&&(e.value=t)}function me(t,n){pe("size",!0===t?e.miniWidth:n)}return(0,o.YP)(T,(t=>{!0===t?(y=C.value,!0===C.value&&N(!1)):!1===e.overlay&&"mobile"!==e.behavior&&!1!==y&&(!0===C.value?(se(0),le(0),he()):F(!1))})),(0,o.YP)(g.totalWidth,(t=>{ve(T,"mobile"===e.behavior||"desktop"!==e.behavior&&t<=e.breakpoint)})),(0,o.YP)((()=>e.side),((e,t)=>{g.instances[t]===D&&(g.instances[t]=void 0,g[t].space=!1,g[t].offset=0),g.instances[e]=D,g[e].size=O.value,g[e].space=Z.value,g[e].offset=H.value})),(0,o.YP)((()=>e.behavior+e.breakpoint),ae),(0,o.YP)(g.isContainer,(e=>{!0===C.value&&v(!0!==e)})),(0,o.YP)(g.scrollbarWidth,(()=>{se(!0===C.value?0:void 0)})),(0,o.YP)(H,(e=>{pe("offset",e)})),(0,o.YP)(Z,(e=>{n("on-layout",e),pe("space",e)})),(0,o.YP)($,(()=>{se()})),(0,o.YP)(O,(t=>{se(),me(e.miniToOverlay,t)})),(0,o.YP)((()=>e.miniToOverlay),(e=>{me(e,O.value)})),(0,o.YP)((()=>h.lang.rtl),(()=>{se()})),(0,o.YP)((()=>e.mini),(()=>{!0===e.modelValue&&(ue(),g.animate())})),(0,o.YP)(I,(e=>{n("mini-state",e)})),g.instances[e.side]=D,me(e.miniToOverlay,O.value),pe("space",Z.value),pe("offset",H.value),!0===e.showIfAbove&&!0!==e.modelValue&&!0===C.value&&void 0!==e["onUpdate:modelValue"]&&n("update:modelValue",!0),(0,o.bv)((()=>{n("on-layout",Z.value),n("mini-state",I.value),y=!0===e.showIfAbove;const t=()=>{const e=!0===C.value?R:P;e(!1,!0)};0===g.totalWidth.value?w=(0,o.YP)(g.totalWidth,(()=>{w(),w=void 0,!1===C.value&&!0===e.showIfAbove&&!1===T.value?F(!1):t()})):(0,o.Y3)(t)})),(0,o.Jd)((()=>{void 0!==w&&w(),clearTimeout(b),!0===C.value&&he(),g.instances[e.side]===D&&(g.instances[e.side]=void 0,pe("size",0),pe("offset",0),pe("space",!1))})),()=>{const n=[];!0===T.value&&(!1===e.noSwipeOpen&&n.push((0,o.wy)((0,o.h)("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),re.value)),n.push((0,k.Jl)("div",{ref:"backdrop",class:J.value,style:Y.value,"aria-hidden":"true",onClick:N},void 0,"backdrop",!0!==e.noSwipeBackdrop&&!0===C.value,(()=>oe.value))));const s=!0===I.value&&void 0!==t.mini,a=[(0,o.h)("div",i()(i()({},r),{},{key:""+s,class:[te.value,r.class]}),!0===s?t.mini():(0,k.KR)(t.default))];return!0===e.elevated&&!0===C.value&&a.push((0,o.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,k.Jl)("aside",{ref:"content",class:ne.value,style:ee.value},a,"contentclose",!0!==e.noSwipeClose&&!0===T.value,(()=>ie.value))),(0,o.h)("div",{class:"q-drawer-container"},n)}}})},5269:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(71);var r=n(3673),i=n(1959),o=n(4716),s=n(230),a=n(7657),l=n(2547);const c=(0,r.aZ)({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:t,emit:n}){const c=(0,r.FN)(),u=(0,i.iH)(null);let d=0;const f=[];function h(t){const r=[],i="boolean"===typeof t?t:!0!==e.noErrorFocus;d++;const o=(e,t)=>{n("validation-"+(!0===e?"success":"error"),t)};for(let n=0;n<f.length;n++){const t=f[n],s=t.validate();if("function"===typeof s.then)r.push(s.then((e=>({valid:e,comp:t})),(e=>({valid:!1,comp:t,error:e}))));else if(!0!==s){if(!1===e.greedy)return o(!1,t),!0===i&&"function"===typeof t.focus&&t.focus(),Promise.resolve(!1);r.push({valid:!1,comp:t})}}if(0===r.length)return o(!0),Promise.resolve(!0);const s=d;return Promise.all(r).then((e=>{if(s===d){const t=e.filter((e=>!0!==e.valid));if(0===t.length)return o(!0),!0;const{valid:n,comp:r}=t[0];return o(!1,r),!0===i&&!0!==n&&"function"===typeof r.focus&&r.focus(),!1}}))}function p(){d++,f.forEach((e=>{"function"===typeof e.resetValidation&&e.resetValidation()}))}function v(t){void 0!==t&&(0,o.NS)(t),h().then((r=>{!0===r&&(void 0!==e.onSubmit?n("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))}function m(t){void 0!==t&&(0,o.NS)(t),n("reset"),(0,r.Y3)((()=>{p(),!0===e.autofocus&&!0!==e.noResetFocus&&g()}))}function g(){(0,s.jd)((()=>{if(null===u.value)return;const e=u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),(e=>e.tabIndex>-1));null!==e&&void 0!==e&&e.focus()}))}return(0,r.JJ)(l.vh,{bindComponent(e){f.push(e)},unbindComponent(e){const t=f.indexOf(e);t>-1&&f.splice(t,1)}}),(0,r.bv)((()=>{!0===e.autofocus&&g()})),Object.assign(c.proxy,{validate:h,resetValidation:p,submit:v,reset:m,focus:g,getValidationComponents:()=>f}),()=>(0,r.h)("form",{class:"q-form",ref:u,onSubmit:v,onReset:m},(0,a.KR)(t.default))}})},3812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3673),i=n(1959),o=n(5151),s=n(7657),a=n(2547);const l=(0,r.aZ)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=(0,r.FN)(),c=(0,r.f3)(a.YE,(()=>{console.error("QHeader needs to be child of QLayout")})),u=(0,i.iH)(parseInt(e.heightHint,10)),d=(0,i.iH)(!0),f=(0,i.Fl)((()=>!0===e.reveal||c.view.value.indexOf("H")>-1||!0===c.isContainer.value)),h=(0,i.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===f.value)return!0===d.value?u.value:0;const t=u.value-c.scroll.value.position;return t>0?t:0})),p=(0,i.Fl)((()=>!0!==e.modelValue||!0===f.value&&!0!==d.value)),v=(0,i.Fl)((()=>!0===e.modelValue&&!0===p.value&&!0===e.reveal)),m=(0,i.Fl)((()=>"q-header q-layout__section--marginal "+(!0===f.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===p.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),g=(0,i.Fl)((()=>{const e=c.rows.value.top,t={};return"l"===e[0]&&!0===c.left.space&&(t[!0===l.lang.rtl?"right":"left"]=`${c.left.size}px`),"r"===e[2]&&!0===c.right.space&&(t[!0===l.lang.rtl?"left":"right"]=`${c.right.size}px`),t}));function y(e,t){c.update("header",e,t)}function b(e,t){e.value!==t&&(e.value=t)}function w({height:e}){b(u,e),y("size",e)}function _(e){!0===v.value&&b(d,!0),n("focusin",e)}(0,r.YP)((()=>e.modelValue),(e=>{y("space",e),b(d,!0),c.animate()})),(0,r.YP)(h,(e=>{y("offset",e)})),(0,r.YP)((()=>e.reveal),(t=>{!1===t&&b(d,e.modelValue)})),(0,r.YP)(d,(e=>{c.animate(),n("reveal",e)})),(0,r.YP)(c.scroll,(t=>{!0===e.reveal&&b(d,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const S={};return c.instances.header=S,!0===e.modelValue&&y("size",u.value),y("space",e.modelValue),y("offset",h.value),(0,r.Jd)((()=>{c.instances.header===S&&(c.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))})),()=>{const n=(0,s.Bl)(t.default,[]);return!0===e.elevated&&n.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,r.h)(o.Z,{debounce:0,onResize:w})),(0,r.h)("header",{class:m.value,style:g.value,onFocusin:_},n)}}})},4554:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(515),i=n.n(r),o=(n(4303),n(7280),n(71),n(3673)),s=n(1959),a=n(2417),l=n(7657);const c=e=>e,u=e=>`ionicons ${e}`,d={"icon-":c,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":u,"ion-ios":u,"ion-logo":u,"mdi-":e=>`mdi ${e}`,"iconfont ":c,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},f={o_:"-outlined",r_:"-round",s_:"-sharp"},h=new RegExp("^("+Object.keys(d).join("|")+")"),p=new RegExp("^("+Object.keys(f).join("|")+")"),v=/^M/,m=/^img:/,g=/^svguse:/,y=/^ion-/,b=/^[l|f]a[s|r|l|b|d]? /,w=(0,o.aZ)({name:"QIcon",props:i()(i()({},a.LU),{},{tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean}),setup(e,{slots:t}){const{proxy:{$q:n}}=(0,o.FN)(),r=(0,a.ZP)(e),i=(0,s.Fl)((()=>"q-icon"+(!0===e.left?" on-left":"")+(!0===e.right?" on-right":"")+(void 0!==e.color?` text-${e.color}`:""))),c=(0,s.Fl)((()=>{let t,r=e.name;if(!r)return{none:!0,cls:i.value};if(null!==n.iconMapFn){const e=n.iconMapFn(r);if(void 0!==e){if(void 0===e.icon)return{cls:e.cls+" "+i.value,content:void 0!==e.content?e.content:" "};r=e.icon}}if(!0===v.test(r)){const[e,t]=r.split("|");return{svg:!0,cls:i.value,nodes:e.split("&&").map((e=>{const[t,n,r]=e.split("@@");return(0,o.h)("path",{style:n,d:t,transform:r})})),viewBox:void 0!==t?t:"0 0 24 24"}}if(!0===m.test(r))return{img:!0,cls:i.value,src:r.substring(4)};if(!0===g.test(r)){const[e,t]=r.split("|");return{svguse:!0,cls:i.value,src:e.substring(7),viewBox:void 0!==t?t:"0 0 24 24"}}let s=" ";const a=r.match(h);if(null!==a)t=d[a[1]](r);else if(!0===b.test(r))t=r;else if(!0===y.test(r))t=`ionicons ion-${!0===n.platform.is.ios?"ios":"md"}${r.substr(3)}`;else{t="notranslate material-icons";const e=r.match(p);null!==e&&(r=r.substring(2),t+=f[e[1]]),s=r}return{cls:t+" "+i.value,content:s}}));return()=>{const n={class:c.value.cls,style:r.value,"aria-hidden":"true",role:"presentation"};return!0===c.value.none?(0,o.h)(e.tag,n,(0,l.KR)(t.default)):!0===c.value.img?(n.src=c.value.src,(0,o.h)("img",n)):!0===c.value.svg?(n.viewBox=c.value.viewBox,(0,o.h)("svg",n,(0,l.vs)(t.default,c.value.nodes))):!0===c.value.svguse?(n.viewBox=c.value.viewBox,(0,o.h)("svg",n,(0,l.vs)(t.default,[(0,o.h)("use",{"xlink:href":c.value.src})]))):(0,o.h)(e.tag,n,(0,l.vs)(t.default,[c.value.content]))}}})},7815:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Y});var r=n(515),i=n.n(r),o=(n(71),n(3673)),s=n(1959),a=n(8880),l=n(4688),c=n(4554),u=n(9754),d=n(2236),f=n(2547);function h({validate:e,resetValidation:t,requiresQForm:n}){const r=(0,o.f3)(f.vh,!1);if(!1!==r){const{props:n,proxy:i}=(0,o.FN)();Object.assign(i,{validate:e,resetValidation:t}),(0,o.YP)((()=>n.disable),(e=>{!0===e?("function"===typeof t&&t(),r.unbindComponent(i)):r.bindComponent(i)})),!0!==n.disable&&r.bindComponent(i),(0,o.Jd)((()=>{!0!==n.disable&&r.unbindComponent(i)}))}else!0!==n&&console.error("Parent QForm not found on useFormChild()!")}const p=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,v=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,m=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,g=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,y=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,b={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),hexColor:e=>p.test(e),hexaColor:e=>v.test(e),hexOrHexaColor:e=>m.test(e),rgbColor:e=>g.test(e),rgbaColor:e=>y.test(e),rgbOrRgbaColor:e=>g.test(e)||y.test(e),hexOrRgbColor:e=>p.test(e)||g.test(e),hexaOrRgbaColor:e=>v.test(e)||y.test(e),anyColor:e=>m.test(e)||g.test(e)||y.test(e)},w=[!0,!1,"ondemand"],_={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>w.includes(e)}};function S(e,t){const{props:n,proxy:r}=(0,o.FN)(),i=(0,s.iH)(!1),a=(0,s.iH)(null),l=(0,s.iH)(null);h({validate:m,resetValidation:v,requiresQForm:!0});let c,u=0;const d=(0,s.Fl)((()=>void 0!==n.rules&&null!==n.rules&&n.rules.length>0)),f=(0,s.Fl)((()=>!0===n.error||!0===i.value)),p=(0,s.Fl)((()=>"string"===typeof n.errorMessage&&n.errorMessage.length>0?n.errorMessage:a.value));function v(){u++,t.value=!1,l.value=null,i.value=!1,a.value=null}function m(e=n.modelValue){if(!0!==d.value)return!0;u++,!0!==t.value&&!0!==n.lazyRules&&(l.value=!0);const r=(e,n)=>{i.value!==e&&(i.value=e);const r=n||void 0;a.value!==r&&(a.value=r),!1!==t.value&&(t.value=!1)},o=[];for(let t=0;t<n.rules.length;t++){const i=n.rules[t];let s;if("function"===typeof i?s=i(e):"string"===typeof i&&void 0!==b[i]&&(s=b[i](e)),!1===s||"string"===typeof s)return r(!0,s),!1;!0!==s&&void 0!==s&&o.push(s)}if(0===o.length)return r(!1),!0;!0!==t.value&&(t.value=!0);const s=u;return Promise.all(o).then((e=>{if(s!==u)return!0;if(void 0===e||!1===Array.isArray(e)||0===e.length)return r(!1),!0;const t=e.find((e=>!1===e||"string"===typeof e));return r(void 0!==t,t),void 0===t}),(e=>s!==u||(console.error(e),r(!0),!1)))}function g(e){!0===d.value&&"ondemand"!==n.lazyRules&&(!0===l.value||!0!==n.lazyRules&&!0!==e)&&m()}return(0,o.YP)((()=>n.modelValue),(()=>{g()})),(0,o.YP)((()=>n.reactiveRules),(e=>{!0===e?void 0===c&&(c=(0,o.YP)((()=>n.rules),(()=>{g(!0)}))):void 0!==c&&(c(),c=void 0)}),{immediate:!0}),(0,o.YP)(e,(e=>{"ondemand"!==n.lazyRules&&(!0===e?null===l.value&&(l.value=!1):!1===l.value&&!0===d.value&&(l.value=!0,m()))})),(0,o.Jd)((()=>{void 0!==c&&c()})),Object.assign(r,{resetValidation:v,validate:m}),Object.defineProperty(r,"hasError",{get:()=>f.value}),{isDirtyModel:l,hasRules:d,hasError:f,computedErrorMessage:p,validate:m,resetValidation:v}}const k=/^on[A-Z]/;function x(e){const t={listeners:(0,s.iH)({}),attributes:(0,s.iH)({})};function n(){const n={},r={};Object.keys(e).forEach((t=>{!0===k.test(t)?n[t]=e[t]:"class"!==t&&"style"!==t&&(r[t]=e[t])})),t.listeners.value=n,t.attributes.value=r}return(0,o.Xn)(n),n(),t}var E=n(7657),T=n(1185),I=n(4716),O=n(230);function C(e){return void 0===e?`f_${(0,T.Z)()}`:e}function A(e){return void 0!==e&&null!==e&&(""+e).length>0}const R=i()(i()(i()({},d.S),_),{},{label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]}),P=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function F(){const{props:e,attrs:t,proxy:n}=(0,o.FN)(),r=(0,d.Z)(e,n.$q);return{isDark:r,editable:(0,s.Fl)((()=>!0!==e.disable&&!0!==e.readonly)),innerLoading:(0,s.iH)(!1),focused:(0,s.iH)(!1),hasPopupOpen:(0,s.iH)(!1),splitAttrs:x(t),targetUid:(0,s.iH)(C(e.for)),rootRef:(0,s.iH)(null),targetRef:(0,s.iH)(null),controlRef:(0,s.iH)(null)}}function N(e){const{props:t,emit:n,slots:r,attrs:d,proxy:f}=(0,o.FN)(),{$q:h}=f;let p;void 0===e.hasValue&&(e.hasValue=(0,s.Fl)((()=>A(t.modelValue)))),void 0===e.emitValue&&(e.emitValue=e=>{n("update:modelValue",e)}),void 0===e.controlEvents&&(e.controlEvents={onFocusin:$,onFocusout:q}),Object.assign(e,{clearValue:V,onControlFocusin:$,onControlFocusout:q,focus:M}),void 0===e.computedCounter&&(e.computedCounter=(0,s.Fl)((()=>{if(!1!==t.counter){const e="string"===typeof t.modelValue||"number"===typeof t.modelValue?(""+t.modelValue).length:!0===Array.isArray(t.modelValue)?t.modelValue.length:0,n=void 0!==t.maxlength?t.maxlength:t.maxValues;return e+(void 0!==n?" / "+n:"")}})));const{isDirtyModel:v,hasRules:m,hasError:g,computedErrorMessage:y,resetValidation:b}=S(e.focused,e.innerLoading),w=void 0!==e.floatingLabel?(0,s.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.floatingLabel.value)):(0,s.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.hasValue.value)),_=(0,s.Fl)((()=>!0===t.bottomSlots||void 0!==t.hint||!0===m.value||!0===t.counter||null!==t.error)),k=(0,s.Fl)((()=>!0===t.filled?"filled":!0===t.outlined?"outlined":!0===t.borderless?"borderless":t.standout?"standout":"standard")),x=(0,s.Fl)((()=>`q-field row no-wrap items-start q-field--${k.value}`+(void 0!==e.fieldClass?` ${e.fieldClass.value}`:"")+(!0===t.rounded?" q-field--rounded":"")+(!0===t.square?" q-field--square":"")+(!0===w.value?" q-field--float":"")+(!0===R.value?" q-field--labeled":"")+(!0===t.dense?" q-field--dense":"")+(!0===t.itemAligned?" q-field--item-aligned q-item-type":"")+(!0===e.isDark.value?" q-field--dark":"")+(void 0===e.getControl?" q-field--auto-height":"")+(!0===e.focused.value?" q-field--focused":"")+(!0===g.value?" q-field--error":"")+(!0===g.value||!0===e.focused.value?" q-field--highlighted":"")+(!0!==t.hideBottomSpace&&!0===_.value?" q-field--with-bottom":"")+(!0===t.disable?" q-field--disabled":!0===t.readonly?" q-field--readonly":""))),T=(0,s.Fl)((()=>"q-field__control relative-position row no-wrap"+(void 0!==t.bgColor?` bg-${t.bgColor}`:"")+(!0===g.value?" text-negative":"string"===typeof t.standout&&t.standout.length>0&&!0===e.focused.value?` ${t.standout}`:void 0!==t.color?` text-${t.color}`:""))),R=(0,s.Fl)((()=>!0===t.labelSlot||void 0!==t.label)),P=(0,s.Fl)((()=>"q-field__label no-pointer-events absolute ellipsis"+(void 0!==t.labelColor&&!0!==g.value?` text-${t.labelColor}`:""))),F=(0,s.Fl)((()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:w.value,modelValue:t.modelValue,emitValue:e.emitValue}))),N=(0,s.Fl)((()=>{const n={for:e.targetUid.value};return!0===t.disable?n["aria-disabled"]="true":!0===t.readonly&&(n["aria-readonly"]="true"),n}));let L;function M(){void 0!==L&&(0,O.fP)(L),L=(0,O.jd)((()=>{L=void 0;const t=document.activeElement;let n=void 0!==e.targetRef&&e.targetRef.value;!n||null!==t&&t.id===e.targetUid.value||(!0===n.hasAttribute("tabindex")||(n=n.querySelector("[tabindex]")),n&&n!==t&&n.focus())}))}function D(){void 0!==L&&(0,O.fP)(L);const t=document.activeElement;null!==t&&e.rootRef.value.contains(t)&&t.blur()}function $(t){!0===e.editable.value&&!1===e.focused.value&&(e.focused.value=!0,n("focus",t))}function q(t,r){clearTimeout(p),p=setTimeout((()=>{(!0!==document.hasFocus()||!0!==e.hasPopupOpen.value&&(void 0===e.controlRef||null!==e.controlRef.value&&!1===e.controlRef.value.contains(document.activeElement)))&&(!0===e.focused.value&&(e.focused.value=!1,n("blur",t)),void 0!==r&&r())}))}function V(r){if((0,I.NS)(r),!0!==h.platform.is.mobile){const t=void 0!==e.targetRef&&e.targetRef.value||e.rootRef.value;t.focus()}else!0===e.rootRef.value.contains(document.activeElement)&&document.activeElement.blur();"file"===t.type&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),(0,o.Y3)((()=>{b(),"ondemand"!==t.lazyRules&&!0!==h.platform.is.mobile&&(v.value=!1)}))}function j(){const n=[];return void 0!==r.prepend&&n.push((0,o.h)("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:I.X$},r.prepend())),n.push((0,o.h)("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},U())),void 0!==r.append&&n.push((0,o.h)("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:I.X$},r.append())),!0===g.value&&!1===t.noErrorIcon&&n.push(z("error",[(0,o.h)(c.Z,{name:h.iconSet.field.error,color:"negative"})])),!0===t.loading||!0===e.innerLoading.value?n.push(z("inner-loading-append",void 0!==r.loading?r.loading():[(0,o.h)(u.Z,{color:t.color})])):!0===t.clearable&&!0===e.hasValue.value&&!0===e.editable.value&&n.push(z("inner-clearable-append",[(0,o.h)(c.Z,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||h.iconSet.field.clear,tabindex:0,type:"button",onClick:V})])),void 0!==e.getInnerAppend&&n.push(z("inner-append",e.getInnerAppend())),void 0!==e.getControlChild&&n.push(e.getControlChild()),n}function U(){const n=[];return void 0!==t.prefix&&null!==t.prefix&&n.push((0,o.h)("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),void 0!==e.getShadowControl&&!0===e.hasShadow.value&&n.push(e.getShadowControl()),void 0!==e.getControl?n.push(e.getControl()):void 0!==r.rawControl?n.push(r.rawControl()):void 0!==r.control&&n.push((0,o.h)("div",i()(i()({ref:e.targetRef,class:"q-field__native row"},e.splitAttrs.attributes.value),{},{"data-autofocus":!0===t.autofocus||void 0}),r.control(F.value))),!0===R.value&&n.push((0,o.h)("div",{class:P.value},(0,E.KR)(r.label,t.label))),void 0!==t.suffix&&null!==t.suffix&&n.push((0,o.h)("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat((0,E.KR)(r.default))}function B(){let n,i;!0===g.value?null!==y.value?(n=[(0,o.h)("div",{role:"alert"},y.value)],i=`q--slot-error-${y.value}`):(n=(0,E.KR)(r.error),i="q--slot-error"):!0===t.hideHint&&!0!==e.focused.value||(void 0!==t.hint?(n=[(0,o.h)("div",t.hint)],i=`q--slot-hint-${t.hint}`):(n=(0,E.KR)(r.hint),i="q--slot-hint"));const s=!0===t.counter||void 0!==r.counter;if(!0===t.hideBottomSpace&&!1===s&&void 0===n)return;const l=(0,o.h)("div",{key:i,class:"q-field__messages col"},n);return(0,o.h)("div",{class:"q-field__bottom row items-start q-field__bottom--"+(!0!==t.hideBottomSpace?"animated":"stale")},[!0===t.hideBottomSpace?l:(0,o.h)(a.uT,{name:"q-transition--field-message"},(()=>l)),!0===s?(0,o.h)("div",{class:"q-field__counter"},void 0!==r.counter?r.counter():e.computedCounter.value):null])}function z(e,t){return null===t?null:(0,o.h)("div",{key:e,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},t)}return(0,o.YP)((()=>t.for),(t=>{e.targetUid.value=C(t)})),Object.assign(f,{focus:M,blur:D}),(0,o.bv)((()=>{!0===l.uX.value&&void 0===t.for&&(e.targetUid.value=C()),!0===t.autofocus&&f.focus()})),(0,o.Jd)((()=>{clearTimeout(p)})),function(){return(0,o.h)("label",i()({ref:e.rootRef,class:!0!==e.inheritAttrs?[x.value,d.class]:x.value,style:d.style},N.value),[void 0!==r.before?(0,o.h)("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:I.X$},r.before()):null,(0,o.h)("div",{class:"q-field__inner relative-position col self-stretch"},[(0,o.h)("div",i()({ref:e.controlRef,class:T.value,tabindex:-1},e.controlEvents),j()),!0===_.value?B():null]),void 0!==r.after?(0,o.h)("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:I.X$},r.after()):null])}}n(4303),n(7280),n(5363);var L=n(1436);const M={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},D={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},$=Object.keys(D);$.forEach((e=>{D[e].regex=new RegExp(D[e].pattern)}));const q=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+$.join("")+"])|(.)","g"),V=/[.*+?^${}()|[\]\\]/g,j=String.fromCharCode(1),U={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function B(e,t,n,r){let i,a,l,c;const u=(0,s.iH)(null),d=(0,s.iH)(h());function f(){return!0===e.autogrow||["textarea","text","search","url","tel","password"].includes(e.type)}function h(){if(v(),!0===u.value){const t=w(S(e.modelValue));return!1!==e.fillMask?k(t):t}return e.modelValue}function p(e){if(e<i.length)return i.slice(-e);let t="",n=i;const r=n.indexOf(j);if(r>-1){for(let r=e-n.length;r>0;r--)t+=j;n=n.slice(0,r)+t+n.slice(r)}return n}function v(){if(u.value=void 0!==e.mask&&e.mask.length>0&&f(),!1===u.value)return c=void 0,i="",void(a="");const t=void 0===M[e.mask]?e.mask:M[e.mask],n="string"===typeof e.fillMask&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace(V,"\\$&"),o=[],s=[],d=[];let h=!0===e.reverseFillMask,p="",v="";t.replace(q,((e,t,n,r,i)=>{if(void 0!==r){const e=D[r];d.push(e),v=e.negate,!0===h&&(s.push("(?:"+v+"+)?("+e.pattern+"+)?(?:"+v+"+)?("+e.pattern+"+)?"),h=!1),s.push("(?:"+v+"+)?("+e.pattern+")?")}else if(void 0!==n)p="\\"+("\\"===n?"":n),d.push(n),o.push("([^"+p+"]+)?"+p+"?");else{const e=void 0!==t?t:i;p="\\"===e?"\\\\\\\\":e.replace(V,"\\\\$&"),d.push(e),o.push("([^"+p+"]+)?"+p+"?")}}));const m=new RegExp("^"+o.join("")+"("+(""===p?".":"[^"+p+"]")+"+)?$"),g=s.length-1,y=s.map(((t,n)=>0===n&&!0===e.reverseFillMask?new RegExp("^"+r+"*"+t):n===g?new RegExp("^"+t+"("+(""===v?".":v)+"+)?"+(!0===e.reverseFillMask?"$":r+"*")):new RegExp("^"+t)));l=d,c=e=>{const t=m.exec(e);null!==t&&(e=t.slice(1).join(""));const n=[],r=y.length;for(let i=0,o=e;i<r;i++){const e=y[i].exec(o);if(null===e)break;o=o.slice(e.shift().length),n.push(...e)}return n.length>0?n.join(""):e},i=d.map((e=>"string"===typeof e?e:j)).join(""),a=i.split(j).join(n)}function m(t,s,l){const c=r.value,u=c.selectionEnd,f=c.value.length-u,h=S(t);!0===s&&v();const p=w(h),m=!1!==e.fillMask?k(p):p,g=d.value!==m;c.value!==m&&(c.value=m),!0===g&&(d.value=m),document.activeElement===c&&(0,o.Y3)((()=>{if(m!==a)if("insertFromPaste"!==l||!0===e.reverseFillMask)if(["deleteContentBackward","deleteContentForward"].indexOf(l)>-1){const t=!0===e.reverseFillMask?0===u?m.length>p.length?1:0:Math.max(0,m.length-(m===a?0:Math.min(p.length,f)+1))+1:u;c.setSelectionRange(t,t,"forward")}else if(!0===e.reverseFillMask)if(!0===g){const e=Math.max(0,m.length-(m===a?0:Math.min(p.length,f+1)));1===e&&1===u?c.setSelectionRange(e,e,"forward"):y.rightReverse(c,e,e)}else{const e=m.length-f;c.setSelectionRange(e,e,"backward")}else if(!0===g){const e=Math.max(0,i.indexOf(j),Math.min(p.length,u)-1);y.right(c,e,e)}else{const e=u-1;y.right(c,e,e)}else{const e=u-1;y.right(c,e,e)}else{const t=!0===e.reverseFillMask?a.length:0;c.setSelectionRange(t,t,"forward")}}));const b=!0===e.unmaskedValue?S(m):m;e.modelValue!==b&&n(b,!0)}function g(e,t,n){const r=w(S(e.value));t=Math.max(0,i.indexOf(j),Math.min(r.length,t)),e.setSelectionRange(t,n,"forward")}(0,o.YP)((()=>e.type+e.autogrow),v),(0,o.YP)((()=>e.mask),(n=>{if(void 0!==n)m(d.value,!0);else{const n=S(d.value);v(),e.modelValue!==n&&t("update:modelValue",n)}})),(0,o.YP)((()=>e.fillMask+e.reverseFillMask),(()=>{!0===u.value&&m(d.value,!0)})),(0,o.YP)((()=>e.unmaskedValue),(()=>{!0===u.value&&m(d.value)}));const y={left(e,t,n,r){const o=-1===i.slice(t-1).indexOf(j);let s=Math.max(0,t-1);for(;s>=0;s--)if(i[s]===j){t=s,!0===o&&t++;break}if(s<0&&void 0!==i[t]&&i[t]!==j)return y.right(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},right(e,t,n,r){const o=e.value.length;let s=Math.min(o,n+1);for(;s<=o;s++){if(i[s]===j){n=s;break}i[s-1]===j&&(n=s)}if(s>o&&void 0!==i[n-1]&&i[n-1]!==j)return y.left(e,o,o);e.setSelectionRange(r?t:n,n,"forward")},leftReverse(e,t,n,r){const i=p(e.value.length);let o=Math.max(0,t-1);for(;o>=0;o--){if(i[o-1]===j){t=o;break}if(i[o]===j&&(t=o,0===o))break}if(o<0&&void 0!==i[t]&&i[t]!==j)return y.rightReverse(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},rightReverse(e,t,n,r){const i=e.value.length,o=p(i),s=-1===o.slice(0,n+1).indexOf(j);let a=Math.min(i,n+1);for(;a<=i;a++)if(o[a-1]===j){n=a,n>0&&!0===s&&n--;break}if(a>i&&void 0!==o[n-1]&&o[n-1]!==j)return y.leftReverse(e,i,i);e.setSelectionRange(!0===r?t:n,n,"forward")}};function b(t){if(!0===(0,L.Wm)(t))return;const n=r.value,i=n.selectionStart,o=n.selectionEnd;if(37===t.keyCode||39===t.keyCode){const r=y[(39===t.keyCode?"right":"left")+(!0===e.reverseFillMask?"Reverse":"")];t.preventDefault(),r(n,i,o,t.shiftKey)}else 8===t.keyCode&&!0!==e.reverseFillMask&&i===o?y.left(n,i,o,!0):46===t.keyCode&&!0===e.reverseFillMask&&i===o&&y.rightReverse(n,i,o,!0)}function w(t){if(void 0===t||null===t||""===t)return"";if(!0===e.reverseFillMask)return _(t);const n=l;let r=0,i="";for(let e=0;e<n.length;e++){const o=t[r],s=n[e];if("string"===typeof s)i+=s,o===s&&r++;else{if(void 0===o||!s.regex.test(o))return i;i+=void 0!==s.transform?s.transform(o):o,r++}}return i}function _(e){const t=l,n=i.indexOf(j);let r=e.length-1,o="";for(let i=t.length-1;i>=0&&r>-1;i--){const s=t[i];let a=e[r];if("string"===typeof s)o=s+o,a===s&&r--;else{if(void 0===a||!s.regex.test(a))return o;do{o=(void 0!==s.transform?s.transform(a):a)+o,r--,a=e[r]}while(n===i&&void 0!==a&&s.regex.test(a))}}return o}function S(e){return"string"!==typeof e||void 0===c?"number"===typeof e?c(""+e):e:c(e)}function k(t){return a.length-t.length<=0?t:!0===e.reverseFillMask&&t.length>0?a.slice(0,-t.length)+t:t+a.slice(t.length)}return{innerValue:d,hasMask:u,moveCursorForPaste:g,updateMaskValue:m,onMaskedKeydown:b}}var z=n(9550);function H(e,t){function n(){const t=e.modelValue;try{const e="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(t)===t&&("length"in t?Array.from(t):[t]).forEach((t=>{e.items.add(t)})),{files:e.files}}catch(n){return{files:void 0}}}return!0===t?(0,s.Fl)((()=>{if("file"===e.type)return n()})):(0,s.Fl)(n)}const W=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Z=/(?:[\u3300-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFE30-\uFE4F]|[\uD840-\uD868\uD86A-\uD872][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD873[\uDC00-\uDEAF]|\uD87E[\uDC00-\uDE1F])/,K=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;function J(e){return function(t){if("compositionend"===t.type||"change"===t.type){if(!0!==t.target.composing)return;t.target.composing=!1,e(t)}else"compositionupdate"===t.type?"string"===typeof t.data&&!1===W.test(t.data)&&!1===Z.test(t.data)&&!1===K.test(t.data)&&(t.target.composing=!1):t.target.composing=!0}}const Y=(0,o.aZ)({name:"QInput",inheritAttrs:!1,props:i()(i()(i()(i()({},R),U),z.Fz),{},{modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]}),emits:[...P,"paste","change"],setup(e,{emit:t,attrs:n}){const r={};let a,l,c,u,d=NaN;const f=(0,s.iH)(null),h=(0,z.Do)(e),{innerValue:p,hasMask:v,moveCursorForPaste:m,updateMaskValue:g,onMaskedKeydown:y}=B(e,t,M,f),b=H(e,!0),w=(0,s.Fl)((()=>A(p.value))),_=J(L),S=F(),k=(0,s.Fl)((()=>"textarea"===e.type||!0===e.autogrow)),x=(0,s.Fl)((()=>!0===k.value||["text","search","url","tel","password"].includes(e.type))),E=(0,s.Fl)((()=>{const t=i()(i()({},S.splitAttrs.listeners.value),{},{onInput:L,onPaste:P,onChange:$,onBlur:q,onFocus:I.sT});return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=_,!0===v.value&&(t.onKeydown=y),!0===e.autogrow&&(t.onAnimationend=D),t})),T=(0,s.Fl)((()=>{const t=i()(i()({tabindex:0,"data-autofocus":!0===e.autofocus||void 0,rows:"textarea"===e.type?6:void 0,"aria-label":e.label,name:h.value},S.splitAttrs.attributes.value),{},{id:S.targetUid.value,maxlength:e.maxlength,disabled:!0===e.disable,readonly:!0===e.readonly});return!1===k.value&&(t.type=e.type),!0===e.autogrow&&(t.rows=1),t}));function C(){(0,O.jd)((()=>{const e=document.activeElement;null===f.value||f.value===e||null!==e&&e.id===S.targetUid.value||f.value.focus()}))}function R(){null!==f.value&&f.value.select()}function P(n){if(!0===v.value&&!0!==e.reverseFillMask){const e=n.target;m(e,e.selectionStart,e.selectionEnd)}t("paste",n)}function L(n){if(!n||!n.target||!0===n.target.composing)return;if("file"===e.type)return void t("update:modelValue",n.target.files);const r=n.target.value;if(!0===v.value)g(r,!1,n.inputType);else if(M(r),!0===x.value&&n.target===document.activeElement){const{selectionStart:e,selectionEnd:t}=n.target;void 0!==e&&void 0!==t&&(0,o.Y3)((()=>{n.target===document.activeElement&&0===r.indexOf(n.target.value)&&n.target.setSelectionRange(e,t)}))}!0===e.autogrow&&D()}function M(n,i){u=()=>{"number"!==e.type&&!0===r.hasOwnProperty("value")&&delete r.value,e.modelValue!==n&&d!==n&&(!0===i&&(l=!0),t("update:modelValue",n),(0,o.Y3)((()=>{d===n&&(d=NaN)}))),u=void 0},"number"===e.type&&(a=!0,r.value=n),void 0!==e.debounce?(clearTimeout(c),r.value=n,c=setTimeout(u,e.debounce)):u()}function D(){const e=f.value;if(null!==e){const t=e.parentNode.style;t.marginBottom=e.scrollHeight-1+"px",e.style.height="1px",e.style.height=e.scrollHeight+"px",t.marginBottom=""}}function $(e){_(e),clearTimeout(c),void 0!==u&&u(),t("change",e.target.value)}function q(t){void 0!==t&&(0,I.sT)(t),clearTimeout(c),void 0!==u&&u(),a=!1,l=!1,delete r.value,"file"!==e.type&&setTimeout((()=>{null!==f.value&&(f.value.value=void 0!==p.value?p.value:"")}))}function V(){return!0===r.hasOwnProperty("value")?r.value:void 0!==p.value?p.value:""}(0,o.YP)((()=>e.modelValue),(t=>{if(!0===v.value){if(!0===l)return void(l=!1);g(t)}else p.value!==t&&(p.value=t,"number"===e.type&&!0===r.hasOwnProperty("value")&&(!0===a?a=!1:delete r.value));!0===e.autogrow&&(0,o.Y3)(D)})),(0,o.YP)((()=>e.autogrow),(e=>{!0===e?(0,o.Y3)(D):null!==f.value&&n.rows>0&&(f.value.style.height="auto")})),(0,o.YP)((()=>e.dense),(()=>{!0===e.autogrow&&(0,o.Y3)(D)})),(0,o.Jd)((()=>{q()})),(0,o.bv)((()=>{!0===e.autogrow&&D()})),Object.assign(S,{innerValue:p,fieldClass:(0,s.Fl)((()=>"q-"+(!0===k.value?"textarea":"input")+(!0===e.autogrow?" q-textarea--autogrow":""))),hasShadow:(0,s.Fl)((()=>"file"!==e.type&&"string"===typeof e.shadowText&&e.shadowText.length>0)),inputRef:f,emitValue:M,hasValue:w,floatingLabel:(0,s.Fl)((()=>!0===w.value||A(e.displayValue))),getControl:()=>(0,o.h)(!0===k.value?"textarea":"input",i()(i()(i()({ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle},T.value),E.value),"file"!==e.type?{value:V()}:b.value)),getShadowControl:()=>(0,o.h)("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(!0===k.value?"":" text-no-wrap")},[(0,o.h)("span",{class:"invisible"},V()),(0,o.h)("span",e.shadowText)])});const j=N(S),U=(0,o.FN)();return Object.assign(U.proxy,{focus:C,select:R,getNativeElement:()=>f.value}),j}})},3066:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});n(7280);var r=n(3673),i=n(1959),o=n(4688),s=n(515),a=n.n(s),l=n(8400),c=n(4716);const{passive:u}=c.rU,d=["both","horizontal","vertical"],f=(0,r.aZ)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>d.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i,o,s=null;function d(){s=null;const r=Math.max(0,(0,l.u3)(i)),o=(0,l.OI)(i),c={top:r-n.position.top,left:o-n.position.left};if("vertical"===e.axis&&0===c.top||"horizontal"===e.axis&&0===c.left)return;const u=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:r,left:o},n.directionChanged=n.direction!==u,n.delta=c,!0===n.directionChanged&&(n.direction=u,n.inflectionPoint=n.position),t("scroll",a()({},n))}function f(){i=(0,l.b0)(o,e.scrollTarget),i.addEventListener("scroll",p,u),p(!0)}function h(){void 0!==i&&(i.removeEventListener("scroll",p,u),i=void 0)}function p(t){!0===t||0===e.debounce||"0"===e.debounce?d():null===s&&(s=e.debounce?setTimeout(d,e.debounce):requestAnimationFrame(d))}(0,r.YP)((()=>e.scrollTarget),(()=>{h(),f()}));const v=(0,r.FN)();return(0,r.bv)((()=>{o=v.proxy.$el.parentNode,f()})),(0,r.Jd)((()=>{clearTimeout(s),cancelAnimationFrame(s),h()})),Object.assign(v.proxy,{trigger:p,getPosition:()=>n}),c.ZT}});var h=n(5151),p=n(7657),v=n(2547);const m=(0,r.aZ)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:s}}=(0,r.FN)(),a=(0,i.iH)(null),c=(0,i.iH)(s.screen.height),u=(0,i.iH)(!0===e.container?0:s.screen.width),d=(0,i.iH)({position:0,direction:"down",inflectionPoint:0}),m=(0,i.iH)(0),g=(0,i.iH)(!0===o.uX.value?0:(0,l.np)()),y=(0,i.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),b=(0,i.Fl)((()=>!1===e.container?{minHeight:s.screen.height+"px"}:null)),w=(0,i.Fl)((()=>0!==g.value?{[!0===s.lang.rtl?"left":"right"]:`${g.value}px`}:null)),_=(0,i.Fl)((()=>0!==g.value?{[!0===s.lang.rtl?"right":"left"]:0,[!0===s.lang.rtl?"left":"right"]:`-${g.value}px`,width:`calc(100% + ${g.value}px)`}:null));function S(t){if(!0===e.container||!0!==document.qScrollPrevented){const r={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};d.value=r,void 0!==e.onScroll&&n("scroll",r)}}function k(t){const{height:r,width:i}=t;let o=!1;c.value!==r&&(o=!0,c.value=r,void 0!==e.onScrollHeight&&n("scroll-height",r),E()),u.value!==i&&(o=!0,u.value=i),!0===o&&void 0!==e.onResize&&n("resize",t)}function x({height:e}){m.value!==e&&(m.value=e,E())}function E(){if(!0===e.container){const e=c.value>m.value?(0,l.np)():0;g.value!==e&&(g.value=e)}}let T;const I={instances:{},view:(0,i.Fl)((()=>e.view)),isContainer:(0,i.Fl)((()=>e.container)),rootRef:a,height:c,containerHeight:m,scrollbarWidth:g,totalWidth:(0,i.Fl)((()=>u.value+g.value)),rows:(0,i.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,i.qj)({size:0,offset:0,space:!1}),right:(0,i.qj)({size:300,offset:0,space:!1}),footer:(0,i.qj)({size:0,offset:0,space:!1}),left:(0,i.qj)({size:300,offset:0,space:!1}),scroll:d,animate(){void 0!==T?clearTimeout(T):document.body.classList.add("q-body--layout-animate"),T=setTimeout((()=>{document.body.classList.remove("q-body--layout-animate"),T=void 0}),155)},update(e,t,n){I[e][t]=n}};return(0,r.JJ)(v.YE,I),()=>{const n=(0,p.vs)(t.default,[(0,r.h)(f,{onScroll:S}),(0,r.h)(h.Z,{onResize:k})]),i=(0,r.h)("div",{class:y.value,style:b.value,ref:!0===e.container?void 0:a},n);return!0===e.container?(0,r.h)("div",{class:"q-layout-container overflow-hidden",ref:a},[(0,r.h)(h.Z,{onResize:x}),(0,r.h)("div",{class:"absolute-full",style:w.value},[(0,r.h)("div",{class:"scroll",style:_.value},[i])])]):i}}})},1007:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(3673),i=n(1959),o=n(7657),s=n(2547);const a={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>2===e.length},expand:Boolean};function l(){const{props:e,proxy:t}=(0,r.FN)(),{$q:n}=t,a=(0,r.f3)(s.YE,(()=>{console.error("QPageSticky needs to be child of QLayout")})),l=(0,i.Fl)((()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:"top"===t||"bottom"===t,horizontal:"left"===t||"right"===t}})),c=(0,i.Fl)((()=>a.header.offset)),u=(0,i.Fl)((()=>a.right.offset)),d=(0,i.Fl)((()=>a.footer.offset)),f=(0,i.Fl)((()=>a.left.offset)),h=(0,i.Fl)((()=>{let t=0,r=0;const i=l.value,o=!0===n.lang.rtl?-1:1;!0===i.top&&0!==c.value?r=`${c.value}px`:!0===i.bottom&&0!==d.value&&(r=-d.value+"px"),!0===i.left&&0!==f.value?t=o*f.value+"px":!0===i.right&&0!==u.value&&(t=-o*u.value+"px");const s={transform:`translate(${t}, ${r})`};return e.offset&&(s.margin=`${e.offset[1]}px ${e.offset[0]}px`),!0===i.vertical?(0!==f.value&&(s[!0===n.lang.rtl?"right":"left"]=`${f.value}px`),0!==u.value&&(s[!0===n.lang.rtl?"left":"right"]=`${u.value}px`)):!0===i.horizontal&&(0!==c.value&&(s.top=`${c.value}px`),0!==d.value&&(s.bottom=`${d.value}px`)),s})),p=(0,i.Fl)((()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--`+(!0===e.expand?"expand":"shrink")));function v(t){const n=(0,o.KR)(t.default);return(0,r.h)("div",{class:p.value,style:h.value},!0===e.expand?n:[(0,r.h)("div",n)])}return{$layout:a,getStickyContent:v}}const c=(0,r.aZ)({name:"QPageSticky",props:a,setup(e,{slots:t}){const{getStickyContent:n}=l();return()=>n(t)}})},4379:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(1959),o=n(7657),s=n(2547);const a=(0,r.aZ)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),a=(0,r.f3)(s.YE);(0,r.f3)(s.Mw,(()=>{console.error("QPage needs to be child of QPageContainer")}));const l=(0,i.Fl)((()=>{const t=(!0===a.header.space?a.header.size:0)+(!0===a.footer.space?a.footer.size:0);if("function"===typeof e.styleFn){const r=!0===a.isContainer.value?a.containerHeight.value:n.screen.height;return e.styleFn(t,r)}return{minHeight:!0===a.isContainer.value?a.containerHeight.value-t+"px":0===n.screen.height?0!==t?`calc(100vh - ${t}px)`:"100vh":n.screen.height-t+"px"}})),c=(0,i.Fl)((()=>"q-page "+(!0===e.padding?" q-layout-padding":"")));return()=>(0,r.h)("main",{class:c.value,style:l.value},(0,o.KR)(t.default))}})},2652:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(1959),o=n(7657),s=n(2547);const a=(0,r.aZ)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),a=(0,r.f3)(s.YE,(()=>{console.error("QPageContainer needs to be child of QLayout")}));(0,r.JJ)(s.Mw,!0);const l=(0,i.Fl)((()=>{const e={};return!0===a.header.space&&(e.paddingTop=`${a.header.size}px`),!0===a.right.space&&(e["padding"+(!0===n.lang.rtl?"Left":"Right")]=`${a.right.size}px`),!0===a.footer.space&&(e.paddingBottom=`${a.footer.size}px`),!0===a.left.space&&(e["padding"+(!0===n.lang.rtl?"Right":"Left")]=`${a.left.size}px`),e}));return()=>(0,r.h)("div",{class:"q-page-container",style:l.value},(0,o.KR)(t.default))}})},5151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(3673),i=n(1959),o=n(4688);function s(){const e=(0,i.iH)(!o.uX.value);return!1===e.value&&(0,r.bv)((()=>{e.value=!0})),e}var a=n(4716);const l="undefined"!==typeof ResizeObserver,c=!0===l?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},u=(0,r.aZ)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n,i,o={width:-1,height:-1};function u(t){!0===t||0===e.debounce||"0"===e.debounce?d():n||(n=setTimeout(d,e.debounce))}function d(){if(n=void 0,i){const{offsetWidth:e,offsetHeight:n}=i;e===o.width&&n===o.height||(o={width:e,height:n},t("resize",o))}}const f=(0,r.FN)();if(Object.assign(f.proxy,{trigger:u}),!0===l){let e;return(0,r.bv)((()=>{(0,r.Y3)((()=>{i=f.proxy.$el.parentNode,i&&(e=new ResizeObserver(u),e.observe(i),d())}))})),(0,r.Jd)((()=>{clearTimeout(n),void 0!==e&&(void 0!==e.disconnect?e.disconnect():i&&e.unobserve(i))})),a.ZT}{const e=s();let t;function o(){clearTimeout(n),void 0!==t&&(void 0!==t.removeEventListener&&t.removeEventListener("resize",u,a.rU.passive),t=void 0)}function l(){o(),i&&i.contentDocument&&(t=i.contentDocument.defaultView,t.addEventListener("resize",u,a.rU.passive),d())}return(0,r.bv)((()=>{(0,r.Y3)((()=>{i=f.proxy.$el,i&&l()}))})),(0,r.Jd)(o),()=>{if(!0===e.value)return(0,r.h)("object",{style:c.style,tabindex:-1,type:"text/html",data:c.url,"aria-hidden":"true",onLoad:l})}}}})},5869:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(515),i=n.n(r),o=n(3673),s=n(1959),a=n(2236);const l={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},c={xs:2,sm:4,md:8,lg:16,xl:24},u=(0,o.aZ)({name:"QSeparator",props:i()(i()({},a.S),{},{spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String}),setup(e){const t=(0,o.FN)(),n=(0,a.Z)(e,t.proxy.$q),r=(0,s.Fl)((()=>!0===e.vertical?"vertical":"horizontal")),i=(0,s.Fl)((()=>` q-separator--${r.value}`)),u=(0,s.Fl)((()=>!1!==e.inset?`${i.value}-${l[e.inset]}`:"")),d=(0,s.Fl)((()=>`q-separator${i.value}${u.value}`+(void 0!==e.color?` bg-${e.color}`:"")+(!0===n.value?" q-separator--dark":""))),f=(0,s.Fl)((()=>{const t={};if(void 0!==e.size&&(t[!0===e.vertical?"width":"height"]=e.size),!1!==e.spaced){const n=!0===e.spaced?`${c.md}px`:e.spaced in c?`${c[e.spaced]}px`:e.spaced,r=!0===e.vertical?["Left","Right"]:["Top","Bottom"];t[`margin${r[0]}`]=t[`margin${r[1]}`]=n}return t}));return()=>(0,o.h)("hr",{class:d.value,style:f.value,role:"separator","aria-orientation":r.value})}})},2025:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673);const i=(0,r.h)("div",{class:"q-space"}),o=(0,r.aZ)({name:"QSpace",setup(){return()=>i}})},9754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(515),i=n.n(r),o=n(3673),s=n(1959),a=n(2417);const l={size:{type:[Number,String],default:"1em"},color:String};function c(e){return{cSize:(0,s.Fl)((()=>e.size in a.Ok?`${a.Ok[e.size]}px`:e.size)),classes:(0,s.Fl)((()=>"q-spinner"+(e.color?` text-${e.color}`:"")))}}const u=(0,o.aZ)({name:"QSpinner",props:i()(i()({},l),{},{thickness:{type:Number,default:5}}),setup(e){const{cSize:t,classes:n}=c(e);return()=>(0,o.h)("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[(0,o.h)("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}})},9570:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(3673),i=n(1959),o=n(7657);const s=(0,r.aZ)({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const n=(0,i.Fl)((()=>"q-toolbar row no-wrap items-center"+(!0===e.inset?" q-toolbar--inset":"")));return()=>(0,r.h)("div",{class:n.value},(0,o.KR)(t.default))}})},3747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(3673),i=n(1959),o=n(7657);const s=(0,r.aZ)({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const n=(0,i.Fl)((()=>"q-toolbar__title ellipsis"+(!0===e.shrink?" col-shrink":"")));return()=>(0,r.h)("div",{class:n.value},(0,o.KR)(t.default))}})},9992:(e,t,n)=>{"use strict";n.d(t,{jO:()=>s,ZP:()=>a});var r=n(1959);const i={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},o=Object.keys(i),s={align:{type:String,validator:e=>o.includes(e)}};function a(e){return(0,r.Fl)((()=>{const t=void 0===e.align?!0===e.vertical?"stretch":"left":e.align;return`${!0===e.vertical?"items":"justify"}-${i[t]}`}))}},2236:(e,t,n)=>{"use strict";n.d(t,{S:()=>i,Z:()=>o});var r=n(1959);const i={dark:{type:Boolean,default:null}};function o(e,t){return(0,r.Fl)((()=>null===e.dark?t.dark.isActive:e.dark))}},9550:(e,t,n)=>{"use strict";n.d(t,{Fz:()=>a,eX:()=>l,Do:()=>c});var r=n(515),i=n.n(r),o=n(3673),s=n(1959);const a={name:String};function l(e={},t={}){return(n,r,s)=>{n[r]((0,o.h)("input",i()(i()({class:"hidden"+(s||"")},e.value),t.value)))}}function c(e){return(0,s.Fl)((()=>e.name||e.for))}},69:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(6583);function o(e,t,n){let o;function s(){void 0!==o&&(i.Z.remove(o),o=void 0)}return(0,r.Jd)((()=>{!0===e.value&&s()})),{removeFromHistory:s,addToHistory(){o={condition:()=>!0===n.value,handler:t},i.Z.add(o)}}}},3628:(e,t,n)=>{"use strict";n.d(t,{vr:()=>o,gH:()=>s,ZP:()=>a});var r=n(3673),i=n(7445);const o={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":Function},s=["before-show","show","before-hide","hide"];function a({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:s,processOnMount:a}){const l=(0,r.FN)(),{props:c,emit:u,proxy:d}=l;let f;function h(t){!0===e.value?m(t):p(t)}function p(e){if(!0===c.disable||void 0!==t&&!0!==t(e))return;const n=void 0!==c["onUpdate:modelValue"];!0===n&&(u("update:modelValue",!0),f=e,(0,r.Y3)((()=>{f===e&&(f=void 0)}))),null!==c.modelValue&&!1!==n||v(e)}function v(t){!0!==e.value&&(e.value=!0,u("before-show",t),void 0!==o?o(t):u("show",t))}function m(e){if(!0===c.disable)return;const t=void 0!==c["onUpdate:modelValue"];!0===t&&(u("update:modelValue",!1),f=e,(0,r.Y3)((()=>{f===e&&(f=void 0)}))),null!==c.modelValue&&!1!==t||g(e)}function g(t){!1!==e.value&&(e.value=!1,u("before-hide",t),void 0!==s?s(t):u("hide",t))}function y(t){if(!0===c.disable&&!0===t)void 0!==c["onUpdate:modelValue"]&&u("update:modelValue",!1);else if(!0===t!==e.value){const e=!0===t?v:g;e(f)}}(0,r.YP)((()=>c.modelValue),y),void 0!==n&&!0===(0,i.Rb)(l)&&(0,r.YP)((()=>d.$route),(()=>{!0===n.value&&!0===e.value&&m()})),!0===a&&(0,r.bv)((()=>{y(c.modelValue)}));const b={show:p,hide:m,toggle:h};return Object.assign(d,b),b}},405:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(4716),i=n(8400),o=n(4688);let s,a,l,c,u,d,f=0,h=!1;function p(e){v(e)&&(0,r.NS)(e)}function v(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=(0,r.AZ)(e),n=e.shiftKey&&!e.deltaX,o=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),s=n||o?e.deltaY:e.deltaX;for(let r=0;r<t.length;r++){const e=t[r];if((0,i.QA)(e,o))return o?s<0&&0===e.scrollTop||s>0&&e.scrollTop+e.clientHeight===e.scrollHeight:s<0&&0===e.scrollLeft||s>0&&e.scrollLeft+e.clientWidth===e.scrollWidth}return!0}function m(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function g(e){!0!==h&&(h=!0,requestAnimationFrame((()=>{h=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;void 0!==l&&t===window.innerHeight||(l=n-t,document.scrollingElement.scrollTop=r),r>l&&(document.scrollingElement.scrollTop-=Math.ceil((r-l)/8))})))}function y(e){const t=document.body,n=void 0!==window.visualViewport;if("add"===e){const{overflowY:e,overflowX:l}=window.getComputedStyle(t);s=(0,i.OI)(window),a=(0,i.u3)(window),c=t.style.left,u=t.style.top,t.style.left=`-${s}px`,t.style.top=`-${a}px`,"hidden"!==l&&("scroll"===l||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),"hidden"!==e&&("scroll"===e||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,!0===o.Lp.is.ios&&(!0===n?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",g,r.rU.passiveCapture),window.visualViewport.addEventListener("scroll",g,r.rU.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",m,r.rU.passiveCapture))}!0===o.Lp.is.desktop&&!0===o.Lp.is.mac&&window[`${e}EventListener`]("wheel",p,r.rU.notPassive),"remove"===e&&(!0===o.Lp.is.ios&&(!0===n?(window.visualViewport.removeEventListener("resize",g,r.rU.passiveCapture),window.visualViewport.removeEventListener("scroll",g,r.rU.passiveCapture)):window.removeEventListener("scroll",m,r.rU.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=c,t.style.top=u,window.scrollTo(s,a),l=void 0)}function b(e){let t="add";if(!0===e){if(f++,void 0!==d)return clearTimeout(d),void(d=void 0);if(f>1)return}else{if(0===f)return;if(f--,f>0)return;if(t="remove",!0===o.Lp.is.ios&&!0===o.Lp.is.nativeMobile)return clearTimeout(d),void(d=setTimeout((()=>{y(t),d=void 0}),100))}y(t)}function w(){let e;return{preventBodyScroll(t){t===e||void 0===e&&!0!==t||(e=t,b(t))}}}},2417:(e,t,n)=>{"use strict";n.d(t,{Ok:()=>i,LU:()=>o,ZP:()=>s});var r=n(1959);const i={xs:18,sm:24,md:32,lg:38,xl:46},o={size:String};function s(e,t=i){return(0,r.Fl)((()=>void 0!==e.size?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null))}},4955:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3673);function i(){let e;return(0,r.Jd)((()=>{clearTimeout(e)})),{registerTimeout(t,n){clearTimeout(e),e=setTimeout(t,n)},removeTimeout(){clearTimeout(e)}}}},677:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(4312),i=n(1436);function o(e){if(!1===e)return 0;if(!0===e||void 0===e)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const s={name:"close-popup",beforeMount(e,{value:t}){const n={depth:o(t),handler(t){0!==n.depth&&setTimeout((()=>{const i=(0,r.HW)(e);void 0!==i&&(0,r.S7)(i,t,n.depth)}))},handlerKey(e){!0===(0,i.So)(e,13)&&n.handler(e)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=o(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}}},6583:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(71);var r=n(4688),i=n(4716);const o=()=>!0;function s(e){return"string"===typeof e&&""!==e&&"/"!==e&&"#/"!==e}function a(e){return!0===e.startsWith("#")&&(e=e.substr(1)),!1===e.startsWith("/")&&(e="/"+e),!0===e.endsWith("/")&&(e=e.substr(0,e.length-1)),"#"+e}function l(e){if(!1===e.backButtonExit)return()=>!1;if("*"===e.backButtonExit)return o;const t=["#/"];return!0===Array.isArray(e.backButtonExit)&&t.push(...e.backButtonExit.filter(s).map(a)),()=>t.includes(window.location.hash)}const c={__history:[],add:i.ZT,remove:i.ZT,install({$q:e}){if(!0===this.__installed)return;const{cordova:t,capacitor:n}=r.Lp.is;if(!0!==t&&!0!==n)return;const i=e.config[!0===t?"cordova":"capacitor"];if(void 0!==i&&!1===i.backButton)return;if(!0===n&&(void 0===window.Capacitor||void 0===window.Capacitor.Plugins.App))return;this.add=e=>{void 0===e.condition&&(e.condition=o),this.__history.push(e)},this.remove=e=>{const t=this.__history.indexOf(e);t>=0&&this.__history.splice(t,1)};const s=l(Object.assign({backButtonExit:!0},i)),a=()=>{if(this.__history.length){const e=this.__history[this.__history.length-1];!0===e.condition()&&(this.__history.pop(),e.handler())}else!0===s()?navigator.app.exitApp():window.history.back()};!0===t?document.addEventListener("deviceready",(()=>{document.addEventListener("backbutton",a,!1)})):window.Capacitor.Plugins.App.addListener("backButton",a)}}},4705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(515),i=n.n(r),o=n(2002);const s={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},a=(0,o.Z)({iconMapFn:null,__icons:{}},{set(e,t){const n=i()(i()({},e),{},{rtl:!0===e.rtl});n.set=a.set,Object.assign(a.__icons,n)},install({$q:e,iconSet:t,ssrContext:n}){void 0!==e.config.iconMapFn&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__icons,Object.defineProperty(e,"iconMapFn",{get:()=>this.iconMapFn,set:e=>{this.iconMapFn=e}}),!0===this.__installed?void 0!==t&&this.set(t):this.set(t||s)}}),l=a},762:(e,t,n)=>{"use strict";n.d(t,{$:()=>R,Z:()=>N});var r=n(515),i=n.n(r),o=n(9119),s=n.n(o),a=n(8880),l=n(4688),c=n(2002),u=n(4716);function d(e,t=250,n){let r;function i(){const i=arguments,o=()=>{r=void 0,!0!==n&&e.apply(this,i)};clearTimeout(r),!0===n&&void 0===r&&e.apply(this,i),r=setTimeout(o,t)}return i.cancel=()=>{clearTimeout(r)},i}const f=["sm","md","lg","xl"],{passive:h}=u.rU,p=(0,c.Z)({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:u.ZT,setDebounce:u.ZT,install({$q:e,onSSRHydrated:t}){if(e.screen=this,!0===this.__installed)return void(void 0!==e.config.screen&&(!1===e.config.screen.bodyClasses?document.body.classList.remove(`screen--${this.name}`):this.__update(!0)));const n=void 0!==e.config.screen&&!0===e.config.screen.bodyClasses;this.__update=e=>{const t=window.innerWidth,r=window.innerHeight;if(r!==this.height&&(this.height=r),t!==this.width)this.width=t;else if(!0!==e)return;let i=this.sizes;this.gt.xs=t>=i.sm,this.gt.sm=t>=i.md,this.gt.md=t>=i.lg,this.gt.lg=t>=i.xl,this.lt.sm=t<i.sm,this.lt.md=t<i.md,this.lt.lg=t<i.lg,this.lt.xl=t<i.xl,this.xs=this.lt.sm,this.sm=!0===this.gt.xs&&!0===this.lt.md,this.md=!0===this.gt.sm&&!0===this.lt.lg,this.lg=!0===this.gt.md&&!0===this.lt.xl,this.xl=this.gt.lg,i=(!0===this.xs?"xs":!0===this.sm&&"sm")||!0===this.md&&"md"||!0===this.lg&&"lg"||"xl",i!==this.name&&(!0===n&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${i}`)),this.name=i)};let r,i={},o=16;this.setSizes=e=>{f.forEach((t=>{void 0!==e[t]&&(i[t]=e[t])}))},this.setDebounce=e=>{o=e};const s=()=>{const e=getComputedStyle(document.body),t=void 0!==window.visualViewport?window.visualViewport:window;e.getPropertyValue("--q-size-sm")&&f.forEach((t=>{this.sizes[t]=parseInt(e.getPropertyValue(`--q-size-${t}`),10)})),this.setSizes=e=>{f.forEach((t=>{e[t]&&(this.sizes[t]=e[t])})),this.__update(!0)},this.setDebounce=e=>{void 0!==r&&t.removeEventListener("resize",r,h),r=e>0?d(this.__update,e):this.__update,t.addEventListener("resize",r,h)},this.setDebounce(o),Object.keys(i).length>0?(this.setSizes(i),i=void 0):this.__update(),!0===n&&"xs"===this.name&&document.body.classList.add("screen--xs")};!0===l.uX.value?t.push(s):s()}});n(7280),n(5363);const v=(0,c.Z)({isActive:!1,mode:!1},{__media:void 0,set(e){v.mode=e,"auto"===e?(void 0===v.__media&&(v.__media=window.matchMedia("(prefers-color-scheme: dark)"),v.__updateMedia=()=>{v.set("auto")},v.__media.addListener(v.__updateMedia)),e=v.__media.matches):void 0!==v.__media&&(v.__media.removeListener(v.__updateMedia),v.__media=void 0),v.isActive=!0===e,document.body.classList.remove("body--"+(!0===e?"light":"dark")),document.body.classList.add("body--"+(!0===e?"dark":"light"))},toggle(){v.set(!1===v.isActive)},install({$q:e,onSSRHydrated:t,ssrContext:n}){const{dark:r}=e.config;if(e.dark=this,!0===this.__installed&&void 0===r)return;this.isActive=!0===r;const i=void 0!==r&&r;if(!0===l.uX.value){const e=e=>{this.__fromSSR=e},n=this.set;this.set=e,e(i),t.push((()=>{this.set=n,this.set(this.__fromSSR)}))}else this.set(i)}}),m=v;var g=n(6583),y=n(1845);function b(e,t,n=document.body){if("string"!==typeof e)throw new TypeError("Expected a string as propName");if("string"!==typeof t)throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}var w=n(1436);function _(e){return!0===e.ios?"ios":!0===e.android?"android":void 0}function S({is:e,has:t,within:n},r){const i=[!0===e.desktop?"desktop":"mobile",(!1===t.touch?"no-":"")+"touch"];if(!0===e.mobile){const t=_(e);void 0!==t&&i.push("platform-"+t)}if(!0===e.nativeMobile){const t=e.nativeMobileWrapper;i.push(t),i.push("native-mobile"),!0!==e.ios||void 0!==r[t]&&!1===r[t].iosStatusBarPadding||i.push("q-ios-padding")}else!0===e.electron?i.push("electron"):!0===e.bex&&i.push("bex");return!0===n.iframe&&i.push("within-iframe"),i}function k(){const e=document.body.className;let t=e;void 0!==l.aG&&(t=t.replace("desktop","platform-ios mobile")),!0===l.Lp.has.touch&&(t=t.replace("no-touch","touch")),!0===l.Lp.within.iframe&&(t+=" within-iframe"),e!==t&&(document.body.className=t)}function x(e){for(const t in e)b(t,e[t])}const E={install(e){const{$q:t}=e;if(void 0!==t.config.brand&&x(t.config.brand),!0!==this.__installed){if(!0===l.uX.value)k();else{const e=S(l.Lp,t.config);document.body.classList.add.apply(document.body.classList,e)}!0===l.Lp.is.ios&&document.body.addEventListener("touchstart",u.ZT),window.addEventListener("keydown",w.ZK,!0)}}};var T=n(4705),I=n(2547),O=n(5578);const C=["reload"],A=[l.ZP,E,m,p,g.Z,y.Z,T.Z];function R(e,t){const n=(0,a.ri)(e);n.config.globalProperties=t.config.globalProperties;const r=t._context,{reload:i}=r,o=s()(r,C);return Object.assign(n._context,o),n}function P(e,t){t.forEach((t=>{t.install(e),t.__installed=!0}))}function F(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(I.Ng,n.$q),P(n,A),void 0!==t.components&&Object.values(t.components).forEach((t=>{Object(t)===t&&void 0!==t.name&&e.component(t.name,t)})),void 0!==t.directives&&Object.values(t.directives).forEach((t=>{Object(t)===t&&void 0!==t.name&&e.directive(t.name,t)})),void 0!==t.plugins&&P(n,Object.values(t.plugins).filter((e=>"function"===typeof e.install&&!1===A.includes(e)))),!0===l.uX.value&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach((e=>{e()})),n.$q.onSSRHydrated=()=>{}})}const N=function(e,t={}){const n={version:"2.0.4"};!1===O.Uf?(void 0!==t.config&&Object.assign(O.w6,t.config),n.config=i()({},O.w6),(0,O.tP)()):n.config=t.config||{},F(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})}},1845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(515),i=n.n(r),o=(n(7280),n(5363),n(2002));const s={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>1===e?"1 record selected.":(0===e?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function a(){const e=!0===Array.isArray(navigator.languages)&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if("string"===typeof e)return e.split(/[-_]/).map(((e,t)=>0===t?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase())).join("-")}const l=(0,o.Z)({__langPack:{}},{getLocale:a,set(e=s,t){const n=i()(i()({},e),{},{rtl:!0===e.rtl,getLocale:a});{const e=document.documentElement;e.setAttribute("dir",!0===n.rtl?"rtl":"ltr"),e.setAttribute("lang",n.isoName),n.set=l.set,Object.assign(l.__langPack,n),l.props=n,l.isoName=n.isoName,l.nativeName=n.nativeName}},install({$q:e,lang:t,ssrContext:n}){e.lang=l.__langPack,!0===this.__installed?void 0!==t&&this.set(t):this.set(t||s)}}),c=l},6417:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var r=n(515),i=n.n(r),o=n(9119),s=n.n(o),a=n(3673),l=n(1959),c=n(8880),u=n(4554),d=n(2417),f=n(7657);const h=(0,a.aZ)({name:"QAvatar",props:i()(i()({},d.LU),{},{fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean}),setup(e,{slots:t}){const n=(0,d.ZP)(e),r=(0,l.Fl)((()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(!0===e.square?" q-avatar--square":!0===e.rounded?" rounded-borders":""))),i=(0,l.Fl)((()=>e.fontSize?{fontSize:e.fontSize}:null));return()=>{const o=void 0!==e.icon?[(0,a.h)(u.Z,{name:e.icon})]:void 0;return(0,a.h)("div",{class:r.value,style:n.value},[(0,a.h)("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},(0,f.pf)(t.default,o))])}}});var p=n(3187),v=n(9754),m=(n(4716),n(8144)),g=n(762);const y=["handler","noDismiss"];let b,w=0;const _={},S=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],k=["top-left","top-right","bottom-left","bottom-right"],x={positive:{icon:e=>e.iconSet.type.positive,color:"positive"},negative:{icon:e=>e.iconSet.type.negative,color:"negative"},warning:{icon:e=>e.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:e=>e.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}},E={},T={};function I(e,t){return console.error(`Notify: ${e}`,t),!1}function O(e){return(0,a.aZ)({name:"QNotifications",setup(){const t={},n=[];function r(e){clearTimeout(e.meta.timer);const r=t[e.position].value.indexOf(e);if(-1!==r){void 0!==e.group&&delete E[e.meta.group];const i=n[""+e.meta.uid];if(i){const{width:e,height:t}=getComputedStyle(i);i.style.left=`${i.offsetLeft}px`,i.style.width=e,i.style.height=t}t[e.position].value.splice(r,1),"function"===typeof e.onDismiss&&e.onDismiss()}}return S.forEach((e=>{t[e]=(0,l.iH)([]);const n=!0===["left","center","right"].includes(e)?"center":e.indexOf("top")>-1?"top":"bottom",r=e.indexOf("left")>-1?"start":e.indexOf("right")>-1?"end":"center",i=["left","right"].includes(e)?`items-${"left"===e?"start":"end"} justify-center`:"center"===e?"flex-center":`items-${r}`;T[e]=`q-notifications__list q-notifications__list--${n} fixed column no-wrap ${i}`})),b=(n,o)=>{if(!n)return I("parameter required");let a;const c={textColor:"white"};if(!0!==n.ignoreDefaults&&Object.assign(c,_),Object(n)!==n&&(c.type&&Object.assign(c,x[c.type]),n={message:n}),Object.assign(c,x[n.type||c.type],n),"function"===typeof c.icon&&(c.icon=c.icon(e)),c.spinner?(!0===c.spinner&&(c.spinner=v.Z),c.spinner=(0,l.Xl)(c.spinner)):c.spinner=!1,c.meta={hasMedia:Boolean(!1!==c.spinner||c.icon||c.avatar)},c.position){if(!1===S.includes(c.position))return I("wrong position",n)}else c.position="bottom";if(void 0===c.timeout)c.timeout=5e3;else{const e=parseInt(c.timeout,10);if(isNaN(e)||e<0)return I("wrong timeout",n);c.timeout=e}0===c.timeout?c.progress=!1:!0===c.progress&&(c.meta.progressClass="q-notification__progress"+(c.progressClass?` ${c.progressClass}`:""),c.meta.progressStyle={animationDuration:`${c.timeout+1e3}ms`});const u=(!0===Array.isArray(n.actions)?n.actions:[]).concat(!0!==n.ignoreDefaults&&!0===Array.isArray(_.actions)?_.actions:[]).concat(void 0!==x[n.type]&&!0===Array.isArray(x[n.type].actions)?x[n.type].actions:[]);if(c.closeBtn&&u.push({label:"string"===typeof c.closeBtn?c.closeBtn:e.lang.label.close}),c.actions=u.map((e=>{let{handler:t,noDismiss:n}=e,r=s()(e,y);return i()(i()({flat:!0},r),{},{onClick:"function"===typeof t?()=>{t(),!0!==n&&d()}:()=>{d()}})})),void 0===c.multiLine&&(c.multiLine=c.actions.length>1),Object.assign(c.meta,{class:"q-notification row items-stretch q-notification--"+(!0===c.multiLine?"multi-line":"standard")+(void 0!==c.color?` bg-${c.color}`:"")+(void 0!==c.textColor?` text-${c.textColor}`:"")+(void 0!==c.classes?` ${c.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(!0===c.multiLine?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(!0===c.multiLine?"":" col"),attrs:i()({role:"alert"},c.attrs)}),!1===c.group?(c.group=void 0,c.meta.group=void 0):(void 0!==c.group&&!0!==c.group||(c.group=[c.message,c.caption,c.multiline].concat(c.actions.map((e=>`${e.label}*${e.icon}`))).join("|")),c.meta.group=c.group+"|"+c.position),0===c.actions.length?c.actions=void 0:c.meta.actionsClass="q-notification__actions row items-center "+(!0===c.multiLine?"justify-end":"col-auto")+(!0===c.meta.hasMedia?" q-notification__actions--with-media":""),void 0!==o){clearTimeout(o.notif.meta.timer),c.meta.uid=o.notif.meta.uid;const e=t[c.position].value.indexOf(o.notif);t[c.position].value[e]=c}else{const e=E[c.meta.group];if(void 0===e){if(c.meta.uid=w++,c.meta.badge=1,-1!==["left","right","center"].indexOf(c.position))t[c.position].value.splice(Math.floor(t[c.position].value.length/2),0,c);else{const e=c.position.indexOf("top")>-1?"unshift":"push";t[c.position].value[e](c)}void 0!==c.group&&(E[c.meta.group]=c)}else{if(clearTimeout(e.meta.timer),void 0!==c.badgePosition){if(!1===k.includes(c.badgePosition))return I("wrong badgePosition",n)}else c.badgePosition="top-"+(c.position.indexOf("left")>-1?"right":"left");c.meta.uid=e.meta.uid,c.meta.badge=e.meta.badge+1,c.meta.badgeClass=`q-notification__badge q-notification__badge--${c.badgePosition}`+(void 0!==c.badgeColor?` bg-${c.badgeColor}`:"")+(void 0!==c.badgeTextColor?` text-${c.badgeTextColor}`:"")+(c.badgeClass?` ${c.badgeClass}`:"");const r=t[c.position].value.indexOf(e);t[c.position].value[r]=E[c.meta.group]=c}}const d=()=>{r(c),a=void 0};return c.timeout>0&&(c.meta.timer=setTimeout((()=>{d()}),c.timeout+1e3)),void 0!==c.group?e=>{void 0!==e?I("trying to update a grouped one which is forbidden",n):d()}:(a={dismiss:d,config:n,notif:c},void 0===o?e=>{if(void 0!==a)if(void 0===e)a.dismiss();else{const t=Object.assign({},a.config,e,{group:!1,position:c.position});b(t,a)}}:void Object.assign(o,a))},()=>(0,a.h)("div",{class:"q-notifications"},S.map((e=>(0,a.h)(c.W3,{key:e,class:T[e],tag:"div",name:`q-notification--${e}`},(()=>t[e].value.map((e=>{let t;const r=e.meta,o={class:"q-notification__message col"};if(!0===e.html)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const n=[e.message];t=e.caption?[(0,a.h)("div",n),(0,a.h)("div",{class:"q-notification__caption"},[e.caption])]:n}const s=[];!0===r.hasMedia&&(!1!==e.spinner?s.push((0,a.h)(e.spinner,{class:"q-notification__spinner"})):e.icon?s.push((0,a.h)(u.Z,{class:"q-notification__icon",name:e.icon,role:"img"})):e.avatar&&s.push((0,a.h)(h,{class:"q-notification__avatar"},(()=>(0,a.h)("img",{src:e.avatar,"aria-hidden":"true"}))))),s.push((0,a.h)("div",o,t));const l=[(0,a.h)("div",{class:r.contentClass},s)];return!0===e.progress&&l.push((0,a.h)("div",{key:`${r.uid}|p|${r.badge}`,class:r.progressClass,style:r.progressStyle})),void 0!==e.actions&&l.push((0,a.h)("div",{class:r.actionsClass},e.actions.map((e=>(0,a.h)(p.Z,e))))),r.badge>1&&l.push((0,a.h)("div",{key:`${r.uid}|${r.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[r.badge])),(0,a.h)("div",i()({ref:e=>{n[""+r.uid]=e},key:r.uid,class:r.class},r.attrs),[(0,a.h)("div",{class:r.wrapperClass},l)])})))))))}})}const C={create(e){return b(e)},setDefaults(e){e===Object(e)&&Object.assign(_,e)},registerType(e,t){t===Object(t)&&(x[e]=t)},install({$q:e,parentApp:t}){if(e.notify=this.create,e.notify.setDefaults=this.setDefaults,e.notify.registerType=this.registerType,void 0!==e.config.notify&&this.setDefaults(e.config.notify),!0!==this.__installed){const n=(0,m.q_)("q-notify");(0,g.$)(O(e),t).mount(n)}}}},4688:(e,t,n)=>{"use strict";n.d(t,{uX:()=>s,aG:()=>a,Lp:()=>m,ZP:()=>y});var r=n(515),i=n.n(r),o=(n(7280),n(1959));const s=(0,o.iH)(!1);let a,l=!1;function c(e,t){const n=/(edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:t[0]||""}}function u(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const d="ontouchstart"in window||window.navigator.maxTouchPoints>0;function f(e){a={is:i()({},e)},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function h(e){const t=e.toLowerCase(),n=u(t),r=c(t,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const o=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return!0===o||t.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||!0===i.mobile&&!0!==i.ios&&!0!==o)&&(i.webkit=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,t.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(void 0!==window.Capacitor?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):void 0===window._cordovaNative&&void 0===window.cordova||(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),!0===d&&!0===i.mac&&(!0===i.desktop&&!0===i.safari||!0===i.nativeMobile&&!0!==i.android&&!0!==i.ios&&!0!==i.ipad)&&f(i)),i}const p=navigator.userAgent||navigator.vendor||window.opera,v={has:{touch:!1,webStorage:!1},within:{iframe:!1}},m={userAgent:p,is:h(p),has:{touch:d},within:{iframe:window.self!==window.top}},g={install(e){const{$q:t}=e;!0===s.value?(e.onSSRHydrated.push((()=>{s.value=!1,Object.assign(t.platform,m),a=void 0})),t.platform=(0,o.qj)(this)):t.platform=this}};{let e;Object.defineProperty(m.has,"webStorage",{get:()=>{if(void 0!==e)return e;try{if(window.localStorage)return e=!0,!0}catch(t){}return e=!1,!1}}),l=!0===m.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple"),!0===s.value?Object.assign(g,m,a,v):Object.assign(g,m)}const y=g},2012:(e,t,n)=>{"use strict";n.d(t,{iv:()=>i,sb:()=>o,mY:()=>s});var r=n(1959);function i(e,t){const n=e.style;Object.keys(t).forEach((e=>{n[e]=t[e]}))}function o(e){if(void 0===e||null===e)return;if("string"===typeof e)try{return document.querySelector(e)||void 0}catch(n){return}const t=!0===(0,r.dq)(e)?e.value:e;return t?t.$el||t:void 0}function s(e,t){if(void 0===e||!0===e.contains(t))return!0;for(let n=e.nextElementSibling;null!==n;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}},4716:(e,t,n)=>{"use strict";n.d(t,{rU:()=>r,ZT:()=>i,du:()=>o,FK:()=>s,AZ:()=>a,sT:()=>l,X$:()=>c,NS:()=>u,Jf:()=>d,M0:()=>f,ul:()=>h});n(71);const r={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(r,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(p){}function i(){}function o(e){return 0===e.button}function s(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function a(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}}function l(e){e.stopPropagation()}function c(e){!1!==e.cancelable&&e.preventDefault()}function u(e){!1!==e.cancelable&&e.preventDefault(),e.stopPropagation()}function d(e,t){if(void 0===e||!0===t&&!0===e.__dragPrevented)return;const n=!0===t?e=>{e.__dragPrevented=!0,e.addEventListener("dragstart",c,r.notPassiveCapture)}:e=>{delete e.__dragPrevented,e.removeEventListener("dragstart",c,r.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function f(e,t,n){const i=`__q_${t}_evt`;e[i]=void 0!==e[i]?e[i].concat(n):n,n.forEach((t=>{t[0].addEventListener(t[1],e[t[2]],r[t[3]])}))}function h(e,t){const n=`__q_${t}_evt`;void 0!==e[n]&&(e[n].forEach((t=>{t[0].removeEventListener(t[1],e[t[2]],r[t[3]])})),e[n]=void 0)}},2002:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(1959);const i=(e,t)=>{const n={},i=(0,r.qj)(e);return Object.keys(e).forEach((e=>{n[e]={get:()=>i[e],set:t=>{i[e]=t}}})),Object.defineProperties(t,n),t}},230:(e,t,n)=>{"use strict";n.d(t,{YX:()=>o,xF:()=>s,jd:()=>a,fP:()=>l});let r=[];const i=[];function o(e){i.push(e)}function s(e){const t=i.indexOf(e);-1!==t&&i.splice(t,1),0===i.length&&r.length>0&&(r[r.length-1](),r=[])}function a(e){if(0!==i.length)return r.push(e),e;e()}function l(e){const t=r.indexOf(e);-1!==t&&r.splice(t,1)}},5578:(e,t,n)=>{"use strict";n.d(t,{w6:()=>r,Uf:()=>i,tP:()=>o});const r={};let i=!1;function o(){i=!0}},8144:(e,t,n)=>{"use strict";n.d(t,{q_:()=>s,pB:()=>a});var r=n(5578);const i=[];let o=document.body;function s(e){const t=document.createElement("div");if(void 0!==e&&(t.id=e),void 0!==r.w6.globalNodes){const e=r.w6.globalNodes["class"];void 0!==e&&(t.className=e)}return o.appendChild(t),i.push(t),t}function a(e){i.splice(i.indexOf(e),1),e.remove()}},1436:(e,t,n)=>{"use strict";n.d(t,{ZK:()=>i,Wm:()=>o,So:()=>s});let r=!1;function i(e){r=!0===e.isComposing}function o(e){return!0===r||e!==Object(e)||!0===e.isComposing||!0===e.qKeyEvent}function s(e,t){return!0!==o(e)&&[].concat(t).includes(e.keyCode)}},4312:(e,t,n)=>{"use strict";n.d(t,{wN:()=>i,HW:()=>o,S7:()=>a});var r=n(7445);const i=[];function o(e){return i.find((t=>null!==t.__qPortalInnerRef.value&&t.__qPortalInnerRef.value.contains(e)))}function s(e,t){do{if("QMenu"===e.$options.name){if(e.hide(t),!0===e.$props.separateClosePopup)return(0,r.Kq)(e)}else if(void 0!==e.__qPortalInnerRef){const n=(0,r.Kq)(e);return void 0!==n&&"QPopupProxy"===n.$options.name?(e.hide(t),n):e}e=(0,r.Kq)(e)}while(void 0!==e&&null!==e)}function a(e,t,n){while(0!==n&&void 0!==e&&null!==e){if(void 0!==e.__qPortalInnerRef){if(n--,"QMenu"===e.$options.name){e=s(e,t);continue}e.hide(t)}e=(0,r.Kq)(e)}}},7657:(e,t,n)=>{"use strict";n.d(t,{KR:()=>i,Bl:()=>o,vs:()=>s,pf:()=>a,Jl:()=>l});var r=n(3673);function i(e,t){return void 0!==e&&e()||t}function o(e,t){if(void 0!==e){const t=e();if(void 0!==t&&null!==t)return t.slice()}return t}function s(e,t){return void 0!==e?t.concat(e()):t}function a(e,t){return void 0===e?t:void 0!==t?t.concat(e()):e()}function l(e,t,n,i,o,s){t.key=i+o;const a=(0,r.h)(e,t,n);return!0===o?(0,r.wy)(a,s()):a}},2547:(e,t,n)=>{"use strict";n.d(t,{Ng:()=>r,YE:()=>i,Mw:()=>o,vh:()=>s});const r="_q_",i="_q_l_",o="_q_pc_",s="_q_fo_"},7445:(e,t,n)=>{"use strict";n.d(t,{Kq:()=>r,Rb:()=>i});n(71);function r(e){if(void 0!==e.$parent&&null!==e.$parent)return e.$parent;e=e.$.parent;while(void 0!==e&&null!==e){if(void 0!==e.proxy&&null!==e.proxy)return e.proxy;e=e.parent}}function i(e){return void 0!==e.appContext.config.globalProperties.$router}},8400:(e,t,n)=>{"use strict";n.d(t,{b0:()=>o,u3:()=>s,OI:()=>a,np:()=>c,QA:()=>u});var r=n(2012);const i=[null,document,document.body,document.scrollingElement,document.documentElement];function o(e,t){let n=(0,r.sb)(t);if(void 0===n){if(void 0===e||null===e)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return i.includes(n)?window:n}function s(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function a(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let l;function c(){if(void 0!==l)return l;const e=document.createElement("p"),t=document.createElement("div");(0,r.iv)(e,{width:"100%",height:"200px"}),(0,r.iv)(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=t.clientWidth),t.remove(),l=n-i,l}function u(e,t=!0){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"])))}},1185:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});n(979),n(6105),n(2396);let r,i=0;const o=new Array(256);for(let c=0;c<256;c++)o[c]=(c+256).toString(16).substr(1);const s=(()=>{const e="undefined"!==typeof crypto?crypto:"undefined"!==typeof window?window.crypto||window.msCrypto:void 0;if(void 0!==e){if(void 0!==e.randomBytes)return e.randomBytes;if(void 0!==e.getRandomValues)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return e=>{const t=[];for(let n=e;n>0;n--)t.push(Math.floor(256*Math.random()));return t}})(),a=4096;function l(){(void 0===r||i+16>a)&&(i=0,r=s(a));const e=Array.prototype.slice.call(r,i,i+=16);return e[6]=15&e[6]|64,e[8]=63&e[8]|128,o[e[0]]+o[e[1]]+o[e[2]]+o[e[3]]+"-"+o[e[4]]+o[e[5]]+"-"+o[e[6]]+o[e[7]]+"-"+o[e[8]]+o[e[9]]+"-"+o[e[10]]+o[e[11]]+o[e[12]]+o[e[13]]+o[e[14]]+o[e[15]]}},9592:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(762),i=n(1845),o=n(4705);const s={version:"2.0.4",install:r.Z,lang:i.Z,iconSet:o.Z}},7083:e=>{e.exports.BC=function(e){return e}},8231:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},8248:(e,t,n)=>{var r=n(776);e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},2852:(e,t,n)=>{var r=n(854),i=n(1074),o=n(928),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},6412:(e,t,n)=>{"use strict";var r=n(1021).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},2827:e=>{e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},7950:(e,t,n)=>{var r=n(776);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},6257:e=>{e.exports="undefined"!==typeof ArrayBuffer&&"undefined"!==typeof DataView},683:(e,t,n)=>{"use strict";var r,i,o,s=n(6257),a=n(9631),l=n(7358),c=n(776),u=n(8752),d=n(5976),f=n(1904),h=n(298),p=n(928).f,v=n(4945),m=n(6184),g=n(854),y=n(6862),b=l.Int8Array,w=b&&b.prototype,_=l.Uint8ClampedArray,S=_&&_.prototype,k=b&&v(b),x=w&&v(w),E=Object.prototype,T=E.isPrototypeOf,I=g("toStringTag"),O=y("TYPED_ARRAY_TAG"),C=y("TYPED_ARRAY_CONSTRUCTOR"),A=s&&!!m&&"Opera"!==d(l.opera),R=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},N=function(e){if(!c(e))return!1;var t=d(e);return"DataView"===t||u(P,t)||u(F,t)},L=function(e){if(!c(e))return!1;var t=d(e);return u(P,t)||u(F,t)},M=function(e){if(L(e))return e;throw TypeError("Target is not a typed array")},D=function(e){if(m&&!T.call(k,e))throw TypeError("Target is not a typed array constructor");return e},$=function(e,t,n){if(a){if(n)for(var r in P){var i=l[r];if(i&&u(i.prototype,e))try{delete i.prototype[e]}catch(o){}}x[e]&&!n||h(x,e,n?t:A&&w[e]||t)}},q=function(e,t,n){var r,i;if(a){if(m){if(n)for(r in P)if(i=l[r],i&&u(i,e))try{delete i[e]}catch(o){}if(k[e]&&!n)return;try{return h(k,e,n?t:A&&k[e]||t)}catch(o){}}for(r in P)i=l[r],!i||i[e]&&!n||h(i,e,t)}};for(r in P)i=l[r],o=i&&i.prototype,o?f(o,C,i):A=!1;for(r in F)i=l[r],o=i&&i.prototype,o&&f(o,C,i);if((!A||"function"!=typeof k||k===Function.prototype)&&(k=function(){throw TypeError("Incorrect invocation")},A))for(r in P)l[r]&&m(l[r],k);if((!A||!x||x===E)&&(x=k.prototype,A))for(r in P)l[r]&&m(l[r].prototype,x);if(A&&v(S)!==x&&m(S,x),a&&!u(x,I))for(r in R=!0,p(x,I,{get:function(){return c(this)?this[O]:void 0}}),P)l[r]&&f(l[r],O,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:A,TYPED_ARRAY_CONSTRUCTOR:C,TYPED_ARRAY_TAG:R&&O,aTypedArray:M,aTypedArrayConstructor:D,exportTypedArrayMethod:$,exportTypedArrayStaticMethod:q,isView:N,isTypedArray:L,TypedArray:k,TypedArrayPrototype:x}},62:(e,t,n)=>{"use strict";var r=n(7358),i=n(9631),o=n(6257),s=n(1904),a=n(9833),l=n(6400),c=n(2827),u=n(3814),d=n(4068),f=n(833),h=n(8830),p=n(4945),v=n(6184),m=n(1454).f,g=n(928).f,y=n(5786),b=n(1061),w=n(7624),_=w.get,S=w.set,k="ArrayBuffer",x="DataView",E="prototype",T="Wrong length",I="Wrong index",O=r[k],C=O,A=r[x],R=A&&A[E],P=Object.prototype,F=r.RangeError,N=h.pack,L=h.unpack,M=function(e){return[255&e]},D=function(e){return[255&e,e>>8&255]},$=function(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]},q=function(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]},V=function(e){return N(e,23,4)},j=function(e){return N(e,52,8)},U=function(e,t){g(e[E],t,{get:function(){return _(this)[t]}})},B=function(e,t,n,r){var i=f(n),o=_(e);if(i+t>o.byteLength)throw F(I);var s=_(o.buffer).bytes,a=i+o.byteOffset,l=s.slice(a,a+t);return r?l:l.reverse()},z=function(e,t,n,r,i,o){var s=f(n),a=_(e);if(s+t>a.byteLength)throw F(I);for(var l=_(a.buffer).bytes,c=s+a.byteOffset,u=r(+i),d=0;d<t;d++)l[c+d]=u[o?d:t-d-1]};if(o){if(!l((function(){O(1)}))||!l((function(){new O(-1)}))||l((function(){return new O,new O(1.5),new O(NaN),O.name!=k}))){C=function(e){return c(this,C),new O(f(e))};for(var H,W=C[E]=O[E],Z=m(O),K=0;Z.length>K;)(H=Z[K++])in C||s(C,H,O[H]);W.constructor=C}v&&p(R)!==P&&v(R,P);var J=new A(new C(2)),Y=R.setInt8;J.setInt8(0,2147483648),J.setInt8(1,2147483649),!J.getInt8(0)&&J.getInt8(1)||a(R,{setInt8:function(e,t){Y.call(this,e,t<<24>>24)},setUint8:function(e,t){Y.call(this,e,t<<24>>24)}},{unsafe:!0})}else C=function(e){c(this,C,k);var t=f(e);S(this,{bytes:y.call(new Array(t),0),byteLength:t}),i||(this.byteLength=t)},A=function(e,t,n){c(this,A,x),c(e,C,x);var r=_(e).byteLength,o=u(t);if(o<0||o>r)throw F("Wrong offset");if(n=void 0===n?r-o:d(n),o+n>r)throw F(T);S(this,{buffer:e,byteLength:n,byteOffset:o}),i||(this.buffer=e,this.byteLength=n,this.byteOffset=o)},i&&(U(C,"byteLength"),U(A,"buffer"),U(A,"byteLength"),U(A,"byteOffset")),a(A[E],{getInt8:function(e){return B(this,1,e)[0]<<24>>24},getUint8:function(e){return B(this,1,e)[0]},getInt16:function(e){var t=B(this,2,e,arguments.length>1?arguments[1]:void 0);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=B(this,2,e,arguments.length>1?arguments[1]:void 0);return t[1]<<8|t[0]},getInt32:function(e){return q(B(this,4,e,arguments.length>1?arguments[1]:void 0))},getUint32:function(e){return q(B(this,4,e,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(e){return L(B(this,4,e,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(e){return L(B(this,8,e,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(e,t){z(this,1,e,M,t)},setUint8:function(e,t){z(this,1,e,M,t)},setInt16:function(e,t){z(this,2,e,D,t,arguments.length>2?arguments[2]:void 0)},setUint16:function(e,t){z(this,2,e,D,t,arguments.length>2?arguments[2]:void 0)},setInt32:function(e,t){z(this,4,e,$,t,arguments.length>2?arguments[2]:void 0)},setUint32:function(e,t){z(this,4,e,$,t,arguments.length>2?arguments[2]:void 0)},setFloat32:function(e,t){z(this,4,e,V,t,arguments.length>2?arguments[2]:void 0)},setFloat64:function(e,t){z(this,8,e,j,t,arguments.length>2?arguments[2]:void 0)}});b(C,k),b(A,x),e.exports={ArrayBuffer:C,DataView:A}},5786:(e,t,n)=>{"use strict";var r=n(7475),i=n(1801),o=n(4068);e.exports=function(e){var t=r(this),n=o(t.length),s=arguments.length,a=i(s>1?arguments[1]:void 0,n),l=s>2?arguments[2]:void 0,c=void 0===l?n:i(l,n);while(c>a)t[a++]=e;return t}},6963:(e,t,n)=>{var r=n(7120),i=n(4068),o=n(1801),s=function(e){return function(t,n,s){var a,l=r(t),c=i(l.length),u=o(s,c);if(e&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},2099:(e,t,n)=>{var r=n(422),i=n(2985),o=n(7475),s=n(4068),a=n(6340),l=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,u=4==e,d=6==e,f=7==e,h=5==e||d;return function(p,v,m,g){for(var y,b,w=o(p),_=i(w),S=r(v,m,3),k=s(_.length),x=0,E=g||a,T=t?E(p,k):n||f?E(p,0):void 0;k>x;x++)if((h||x in _)&&(y=_[x],b=S(y,x,w),e))if(t)T[x]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return x;case 2:l.call(T,y)}else switch(e){case 4:return!1;case 7:l.call(T,y)}return d?-1:c||u?u:T}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},2828:(e,t,n)=>{"use strict";var r=n(6400);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},6534:e=>{var t=Math.floor,n=function(e,o){var s=e.length,a=t(s/2);return s<8?r(e,o):i(n(e.slice(0,a),o),n(e.slice(a),o),o)},r=function(e,t){var n,r,i=e.length,o=1;while(o<i){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},i=function(e,t,n){var r=e.length,i=t.length,o=0,s=0,a=[];while(o<r||s<i)o<r&&s<i?a.push(n(e[o],t[s])<=0?e[o++]:t[s++]):a.push(o<r?e[o++]:t[s++]);return a};e.exports=n},330:(e,t,n)=>{var r=n(776),i=n(6894),o=n(854),s=o("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)?r(t)&&(t=t[s],null===t&&(t=void 0)):t=void 0),void 0===t?Array:t}},6340:(e,t,n)=>{var r=n(330);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},8047:(e,t,n)=>{var r=n(854),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(l){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(l){}return n}},5173:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},5976:(e,t,n)=>{var r=n(5705),i=n(5173),o=n(854),s=o("toStringTag"),a="Arguments"==i(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=Object(e),s))?n:a?i(t):"Object"==(r=i(t))&&"function"==typeof t.callee?"Arguments":r}},8438:(e,t,n)=>{var r=n(8752),i=n(7764),o=n(2404),s=n(928);e.exports=function(e,t){for(var n=i(t),a=s.f,l=o.f,c=0;c<n.length;c++){var u=n[c];r(e,u)||a(e,u,l(t,u))}}},123:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},5912:(e,t,n)=>{"use strict";var r=n(4848).IteratorPrototype,i=n(1074),o=n(5442),s=n(1061),a=n(2184),l=function(){return this};e.exports=function(e,t,n){var c=t+" Iterator";return e.prototype=i(r,{next:o(1,n)}),s(e,c,!1,!0),a[c]=l,e}},1904:(e,t,n)=>{var r=n(9631),i=n(928),o=n(5442);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},5442:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8810:(e,t,n)=>{"use strict";var r=n(8934),i=n(5912),o=n(4945),s=n(6184),a=n(1061),l=n(1904),c=n(298),u=n(854),d=n(6692),f=n(2184),h=n(4848),p=h.IteratorPrototype,v=h.BUGGY_SAFARI_ITERATORS,m=u("iterator"),g="keys",y="values",b="entries",w=function(){return this};e.exports=function(e,t,n,u,h,_,S){i(n,t,u);var k,x,E,T=function(e){if(e===h&&R)return R;if(!v&&e in C)return C[e];switch(e){case g:return function(){return new n(this,e)};case y:return function(){return new n(this,e)};case b:return function(){return new n(this,e)}}return function(){return new n(this)}},I=t+" Iterator",O=!1,C=e.prototype,A=C[m]||C["@@iterator"]||h&&C[h],R=!v&&A||T(h),P="Array"==t&&C.entries||A;if(P&&(k=o(P.call(new e)),k!==Object.prototype&&k.next&&(d||o(k)===p||(s?s(k,p):"function"!=typeof k[m]&&l(k,m,w)),a(k,I,!0,!0),d&&(f[I]=w))),h==y&&A&&A.name!==y&&(O=!0,R=function(){return A.call(this)}),d&&!S||C[m]===R||l(C,m,R),f[t]=R,h)if(x={values:T(y),keys:_?R:T(g),entries:T(b)},S)for(E in x)(v||O||!(E in C))&&c(C,E,x[E]);else r({target:t,proto:!0,forced:v||O},x);return x}},9631:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},5354:(e,t,n)=>{var r=n(7358),i=n(776),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},4296:e=>{e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8753:(e,t,n)=>{var r=n(5354),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},1544:(e,t,n)=>{var r=n(9173),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},8979:(e,t,n)=>{var r=n(9173);e.exports=/MSIE|Trident/.test(r)},9173:(e,t,n)=>{var r=n(9694);e.exports=r("navigator","userAgent")||""},5068:(e,t,n)=>{var r,i,o=n(7358),s=n(9173),a=o.process,l=o.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u?(r=u.split("."),i=r[0]<4?1:r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),e.exports=i&&+i},1513:(e,t,n)=>{var r=n(9173),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},2875:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8934:(e,t,n)=>{var r=n(7358),i=n(2404).f,o=n(1904),s=n(298),a=n(3534),l=n(8438),c=n(4389);e.exports=function(e,t){var n,u,d,f,h,p,v=e.target,m=e.global,g=e.stat;if(u=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,u)for(d in t){if(h=t[d],e.noTargetGet?(p=i(u,d),f=p&&p.value):f=u[d],n=c(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof h===typeof f)continue;l(h,f)}(e.sham||f&&f.sham)&&o(h,"sham",!0),s(u,d,h,e)}}},6400:e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},9529:(e,t,n)=>{"use strict";n(7280);var r=n(298),i=n(4348),o=n(6400),s=n(854),a=n(1904),l=s("species"),c=RegExp.prototype;e.exports=function(e,t,n,u){var d=s(e),f=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),h=f&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!h||n){var p=/./[d],v=t(d,""[e],(function(e,t,n,r,o){var s=t.exec;return s===i||s===c.exec?f&&!o?{done:!0,value:p.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,v[0]),r(c,d,v[1])}u&&a(c[d],"sham",!0)}},4817:(e,t,n)=>{"use strict";var r=n(6894),i=n(4068),o=n(422),s=function(e,t,n,a,l,c,u,d){var f,h=l,p=0,v=!!u&&o(u,d,3);while(p<a){if(p in n){if(f=v?v(n[p],p,t):n[p],c>0&&r(f))h=s(e,t,f,i(f.length),h,c-1)-1;else{if(h>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[h]=f}h++}p++}return h};e.exports=s},422:(e,t,n)=>{var r=n(8231);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},9694:(e,t,n)=>{var r=n(7358),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},7143:(e,t,n)=>{var r=n(5976),i=n(2184),o=n(854),s=o("iterator");e.exports=function(e){if(void 0!=e)return e[s]||e["@@iterator"]||i[r(e)]}},2151:(e,t,n)=>{var r=n(7950),i=n(7143);e.exports=function(e,t){var n=arguments.length<2?i(e):t;if("function"!=typeof n)throw TypeError(String(e)+" is not iterable");return r(n.call(e))}},8716:(e,t,n)=>{var r=n(7475),i=Math.floor,o="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,l,c,u){var d=n+e.length,f=l.length,h=a;return void 0!==c&&(c=r(c),h=s),o.call(u,h,(function(r,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(d);case"<":s=c[o.slice(1,-1)];break;default:var a=+o;if(0===a)return r;if(a>f){var u=i(a/10);return 0===u?r:u<=f?void 0===l[u-1]?o.charAt(1):l[u-1]+o.charAt(1):r}s=l[a-1]}return void 0===s?"":s}))}},7358:(e,t,n)=>{var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},8752:(e,t,n)=>{var r=n(7475),i={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return i.call(r(e),t)}},600:e=>{e.exports={}},9970:(e,t,n)=>{var r=n(9694);e.exports=r("document","documentElement")},7021:(e,t,n)=>{var r=n(9631),i=n(6400),o=n(5354);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8830:e=>{var t=Math.abs,n=Math.pow,r=Math.floor,i=Math.log,o=Math.LN2,s=function(e,s,a){var l,c,u,d=new Array(a),f=8*a-s-1,h=(1<<f)-1,p=h>>1,v=23===s?n(2,-24)-n(2,-77):0,m=e<0||0===e&&1/e<0?1:0,g=0;for(e=t(e),e!=e||e===1/0?(c=e!=e?1:0,l=h):(l=r(i(e)/o),e*(u=n(2,-l))<1&&(l--,u*=2),e+=l+p>=1?v/u:v*n(2,1-p),e*u>=2&&(l++,u/=2),l+p>=h?(c=0,l=h):l+p>=1?(c=(e*u-1)*n(2,s),l+=p):(c=e*n(2,p-1)*n(2,s),l=0));s>=8;d[g++]=255&c,c/=256,s-=8);for(l=l<<s|c,f+=s;f>0;d[g++]=255&l,l/=256,f-=8);return d[--g]|=128*m,d},a=function(e,t){var r,i=e.length,o=8*i-t-1,s=(1<<o)-1,a=s>>1,l=o-7,c=i-1,u=e[c--],d=127&u;for(u>>=7;l>0;d=256*d+e[c],c--,l-=8);for(r=d&(1<<-l)-1,d>>=-l,l+=t;l>0;r=256*r+e[c],c--,l-=8);if(0===d)d=1-a;else{if(d===s)return r?NaN:u?-1/0:1/0;r+=n(2,t),d-=a}return(u?-1:1)*r*n(2,d-t)};e.exports={pack:s,unpack:a}},2985:(e,t,n)=>{var r=n(6400),i=n(5173),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},9941:(e,t,n)=>{var r=n(776),i=n(6184);e.exports=function(e,t,n){var o,s;return i&&"function"==typeof(o=t.constructor)&&o!==n&&r(s=o.prototype)&&s!==n.prototype&&i(e,s),e}},3725:(e,t,n)=>{var r=n(1089),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},7624:(e,t,n)=>{var r,i,o,s=n(9262),a=n(7358),l=n(776),c=n(1904),u=n(8752),d=n(1089),f=n(203),h=n(600),p="Object already initialized",v=a.WeakMap,m=function(e){return o(e)?i(e):r(e,{})},g=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var y=d.state||(d.state=new v),b=y.get,w=y.has,_=y.set;r=function(e,t){if(w.call(y,e))throw new TypeError(p);return t.facade=e,_.call(y,e,t),t},i=function(e){return b.call(y,e)||{}},o=function(e){return w.call(y,e)}}else{var S=f("state");h[S]=!0,r=function(e,t){if(u(e,S))throw new TypeError(p);return t.facade=e,c(e,S,t),t},i=function(e){return u(e,S)?e[S]:{}},o=function(e){return u(e,S)}}e.exports={set:r,get:i,has:o,enforce:m,getterFor:g}},1558:(e,t,n)=>{var r=n(854),i=n(2184),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},6894:(e,t,n)=>{var r=n(5173);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4389:(e,t,n)=>{var r=n(6400),i=/#|\.prototype\./,o=function(e,t){var n=a[s(e)];return n==c||n!=l&&("function"==typeof t?r(t):!!t)},s=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},a=o.data={},l=o.NATIVE="N",c=o.POLYFILL="P";e.exports=o},9184:(e,t,n)=>{var r=n(776),i=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&i(e)===e}},776:e=>{e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},6692:e=>{e.exports=!1},6491:(e,t,n)=>{var r=n(776),i=n(5173),o=n(854),s=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},410:(e,t,n)=>{var r=n(9694),i=n(8476);e.exports=i?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return"function"==typeof t&&Object(e)instanceof t}},4848:(e,t,n)=>{"use strict";var r,i,o,s=n(6400),a=n(1074),l=n(4945),c=n(1904),u=n(854),d=n(6692),f=u("iterator"),h=!1;[].keys&&(o=[].keys(),"next"in o?(i=l(l(o)),i!==Object.prototype&&(r=i)):h=!0);var p=void 0==r||s((function(){var e={};return r[f].call(e)!==e}));p?r={}:d&&(r=a(r)),"function"!==typeof r[f]&&c(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:h}},2184:e=>{e.exports={}},7529:(e,t,n)=>{var r=n(5068),i=n(6400);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},9262:(e,t,n)=>{var r=n(7358),i=n(3725),o=r.WeakMap;e.exports="function"===typeof o&&/native code/.test(i(o))},1074:(e,t,n)=>{var r,i=n(7950),o=n(3605),s=n(2875),a=n(600),l=n(9970),c=n(5354),u=n(203),d=">",f="<",h="prototype",p="script",v=u("IE_PROTO"),m=function(){},g=function(e){return f+p+d+e+f+"/"+p+d},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=c("iframe"),n="java"+p+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=s.length;while(e--)delete w[h][s[e]];return w()};a[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[h]=i(e),n=new m,m[h]=null,n[v]=e):n=w(),void 0===t?n:o(n,t)}},3605:(e,t,n)=>{var r=n(9631),i=n(928),o=n(7950),s=n(9158);e.exports=r?Object.defineProperties:function(e,t){o(e);var n,r=s(t),a=r.length,l=0;while(a>l)i.f(e,n=r[l++],t[n]);return e}},928:(e,t,n)=>{var r=n(9631),i=n(7021),o=n(7950),s=n(8618),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(o(e),t=s(t),o(n),i)try{return a(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},2404:(e,t,n)=>{var r=n(9631),i=n(5604),o=n(5442),s=n(7120),a=n(8618),l=n(8752),c=n(7021),u=Object.getOwnPropertyDescriptor;t.f=r?u:function(e,t){if(e=s(e),t=a(t),c)try{return u(e,t)}catch(n){}if(l(e,t))return o(!i.f.call(e,t),e[t])}},1454:(e,t,n)=>{var r=n(1587),i=n(2875),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},3353:(e,t)=>{t.f=Object.getOwnPropertySymbols},4945:(e,t,n)=>{var r=n(8752),i=n(7475),o=n(203),s=n(123),a=o("IE_PROTO"),l=Object.prototype;e.exports=s?Object.getPrototypeOf:function(e){return e=i(e),r(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null}},1587:(e,t,n)=>{var r=n(8752),i=n(7120),o=n(6963).indexOf,s=n(600);e.exports=function(e,t){var n,a=i(e),l=0,c=[];for(n in a)!r(s,n)&&r(a,n)&&c.push(n);while(t.length>l)r(a,n=t[l++])&&(~o(c,n)||c.push(n));return c}},9158:(e,t,n)=>{var r=n(1587),i=n(2875);e.exports=Object.keys||function(e){return r(e,i)}},5604:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},6184:(e,t,n)=>{var r=n(7950),i=n(8248);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},9308:(e,t,n)=>{var r=n(776);e.exports=function(e,t){var n,i;if("string"===t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if("string"!==t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},7764:(e,t,n)=>{var r=n(9694),i=n(1454),o=n(3353),s=n(7950);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(s(e)),n=o.f;return n?t.concat(n(e)):t}},9833:(e,t,n)=>{var r=n(298);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},298:(e,t,n)=>{var r=n(7358),i=n(1904),o=n(8752),s=n(3534),a=n(3725),l=n(7624),c=l.get,u=l.enforce,d=String(String).split("String");(e.exports=function(e,t,n,a){var l,c=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||i(n,"name",t),l=u(n),l.source||(l.source=d.join("string"==typeof t?t:""))),e!==r?(c?!h&&e[t]&&(f=!0):delete e[t],f?e[t]=n:i(e,t,n)):f?e[t]=n:s(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||a(this)}))},9395:(e,t,n)=>{var r=n(5173),i=n(4348);e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},4348:(e,t,n)=>{"use strict";var r=n(4481),i=n(136),o=n(2351),s=n(1586),a=n(1074),l=n(7624).get,c=n(5337),u=n(1442),d=RegExp.prototype.exec,f=s("native-string-replace",String.prototype.replace),h=d,p=function(){var e=/a/,t=/b*/g;return d.call(e,"a"),d.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),v=o.UNSUPPORTED_Y||o.BROKEN_CARET,m=void 0!==/()??/.exec("")[1],g=p||m||v||c||u;g&&(h=function(e){var t,n,o,s,c,u,g,y=this,b=l(y),w=r(e),_=b.raw;if(_)return _.lastIndex=y.lastIndex,t=h.call(_,w),y.lastIndex=_.lastIndex,t;var S=b.groups,k=v&&y.sticky,x=i.call(y),E=y.source,T=0,I=w;if(k&&(x=x.replace("y",""),-1===x.indexOf("g")&&(x+="g"),I=w.slice(y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==w.charAt(y.lastIndex-1))&&(E="(?: "+E+")",I=" "+I,T++),n=new RegExp("^(?:"+E+")",x)),m&&(n=new RegExp("^"+E+"$(?!\\s)",x)),p&&(o=y.lastIndex),s=d.call(k?n:y,I),k?s?(s.input=s.input.slice(T),s[0]=s[0].slice(T),s.index=y.lastIndex,y.lastIndex+=s[0].length):y.lastIndex=0:p&&s&&(y.lastIndex=y.global?s.index+s[0].length:o),m&&s&&s.length>1&&f.call(s[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(s[c]=void 0)})),s&&S)for(s.groups=u=a(null),c=0;c<S.length;c++)g=S[c],u[g[0]]=s[g[1]];return s}),e.exports=h},136:(e,t,n)=>{"use strict";var r=n(7950);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2351:(e,t,n)=>{var r=n(6400),i=n(7358),o=i.RegExp;t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},5337:(e,t,n)=>{var r=n(6400),i=n(7358),o=i.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},1442:(e,t,n)=>{var r=n(6400),i=n(7358),o=i.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},7933:e=>{e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},3534:(e,t,n)=>{var r=n(7358);e.exports=function(e,t){try{Object.defineProperty(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},4114:(e,t,n)=>{"use strict";var r=n(9694),i=n(928),o=n(854),s=n(9631),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},1061:(e,t,n)=>{var r=n(928).f,i=n(8752),o=n(854),s=o("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,s)&&r(e,s,{configurable:!0,value:t})}},203:(e,t,n)=>{var r=n(1586),i=n(6862),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},1089:(e,t,n)=>{var r=n(7358),i=n(3534),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},1586:(e,t,n)=>{var r=n(6692),i=n(1089);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.17.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},7440:(e,t,n)=>{var r=n(7950),i=n(8231),o=n(854),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},1021:(e,t,n)=>{var r=n(3814),i=n(4481),o=n(7933),s=function(e){return function(t,n){var s,a,l=i(o(t)),c=r(n),u=l.length;return c<0||c>=u?e?"":void 0:(s=l.charCodeAt(c),s<55296||s>56319||c+1===u||(a=l.charCodeAt(c+1))<56320||a>57343?e?l.charAt(c):s:e?l.slice(c,c+2):a-56320+(s-55296<<10)+65536)}};e.exports={codeAt:s(!1),charAt:s(!0)}},1801:(e,t,n)=>{var r=n(3814),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},833:(e,t,n)=>{var r=n(3814),i=n(4068);e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw RangeError("Wrong length or index");return n}},7120:(e,t,n)=>{var r=n(2985),i=n(7933);e.exports=function(e){return r(i(e))}},3814:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},4068:(e,t,n)=>{var r=n(3814),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7475:(e,t,n)=>{var r=n(7933);e.exports=function(e){return Object(r(e))}},701:(e,t,n)=>{var r=n(1443);e.exports=function(e,t){var n=r(e);if(n%t)throw RangeError("Wrong offset");return n}},1443:(e,t,n)=>{var r=n(3814);e.exports=function(e){var t=r(e);if(t<0)throw RangeError("The argument can't be less than 0");return t}},2181:(e,t,n)=>{var r=n(776),i=n(410),o=n(9308),s=n(854),a=s("toPrimitive");e.exports=function(e,t){if(!r(e)||i(e))return e;var n,s=e[a];if(void 0!==s){if(void 0===t&&(t="default"),n=s.call(e,t),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),o(e,t)}},8618:(e,t,n)=>{var r=n(2181),i=n(410);e.exports=function(e){var t=r(e,"string");return i(t)?t:String(t)}},5705:(e,t,n)=>{var r=n(854),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},4481:(e,t,n)=>{var r=n(410);e.exports=function(e){if(r(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)}},6968:(e,t,n)=>{"use strict";var r=n(8934),i=n(7358),o=n(9631),s=n(8689),a=n(683),l=n(62),c=n(2827),u=n(5442),d=n(1904),f=n(9184),h=n(4068),p=n(833),v=n(701),m=n(8618),g=n(8752),y=n(5976),b=n(776),w=n(410),_=n(1074),S=n(6184),k=n(1454).f,x=n(9401),E=n(2099).forEach,T=n(4114),I=n(928),O=n(2404),C=n(7624),A=n(9941),R=C.get,P=C.set,F=I.f,N=O.f,L=Math.round,M=i.RangeError,D=l.ArrayBuffer,$=l.DataView,q=a.NATIVE_ARRAY_BUFFER_VIEWS,V=a.TYPED_ARRAY_CONSTRUCTOR,j=a.TYPED_ARRAY_TAG,U=a.TypedArray,B=a.TypedArrayPrototype,z=a.aTypedArrayConstructor,H=a.isTypedArray,W="BYTES_PER_ELEMENT",Z="Wrong length",K=function(e,t){var n=0,r=t.length,i=new(z(e))(r);while(r>n)i[n]=t[n++];return i},J=function(e,t){F(e,t,{get:function(){return R(this)[t]}})},Y=function(e){var t;return e instanceof D||"ArrayBuffer"==(t=y(e))||"SharedArrayBuffer"==t},G=function(e,t){return H(e)&&!w(t)&&t in e&&f(+t)&&t>=0},X=function(e,t){return t=m(t),G(e,t)?u(2,e[t]):N(e,t)},Q=function(e,t,n){return t=m(t),!(G(e,t)&&b(n)&&g(n,"value"))||g(n,"get")||g(n,"set")||n.configurable||g(n,"writable")&&!n.writable||g(n,"enumerable")&&!n.enumerable?F(e,t,n):(e[t]=n.value,e)};o?(q||(O.f=X,I.f=Q,J(B,"buffer"),J(B,"byteOffset"),J(B,"byteLength"),J(B,"length")),r({target:"Object",stat:!0,forced:!q},{getOwnPropertyDescriptor:X,defineProperty:Q}),e.exports=function(e,t,n){var o=e.match(/\d+$/)[0]/8,a=e+(n?"Clamped":"")+"Array",l="get"+e,u="set"+e,f=i[a],m=f,g=m&&m.prototype,y={},w=function(e,t){var n=R(e);return n.view[l](t*o+n.byteOffset,!0)},I=function(e,t,r){var i=R(e);n&&(r=(r=L(r))<0?0:r>255?255:255&r),i.view[u](t*o+i.byteOffset,r,!0)},O=function(e,t){F(e,t,{get:function(){return w(this,t)},set:function(e){return I(this,t,e)},enumerable:!0})};q?s&&(m=t((function(e,t,n,r){return c(e,m,a),A(function(){return b(t)?Y(t)?void 0!==r?new f(t,v(n,o),r):void 0!==n?new f(t,v(n,o)):new f(t):H(t)?K(m,t):x.call(m,t):new f(p(t))}(),e,m)})),S&&S(m,U),E(k(f),(function(e){e in m||d(m,e,f[e])})),m.prototype=g):(m=t((function(e,t,n,r){c(e,m,a);var i,s,l,u=0,d=0;if(b(t)){if(!Y(t))return H(t)?K(m,t):x.call(m,t);i=t,d=v(n,o);var f=t.byteLength;if(void 0===r){if(f%o)throw M(Z);if(s=f-d,s<0)throw M(Z)}else if(s=h(r)*o,s+d>f)throw M(Z);l=s/o}else l=p(t),s=l*o,i=new D(s);P(e,{buffer:i,byteOffset:d,byteLength:s,length:l,view:new $(i)});while(u<l)O(e,u++)})),S&&S(m,U),g=m.prototype=_(B)),g.constructor!==m&&d(g,"constructor",m),d(g,V,m),j&&d(g,j,a),y[a]=m,r({global:!0,forced:m!=f,sham:!q},y),W in m||d(m,W,o),W in g||d(g,W,o),T(a)}):e.exports=function(){}},8689:(e,t,n)=>{var r=n(7358),i=n(6400),o=n(8047),s=n(683).NATIVE_ARRAY_BUFFER_VIEWS,a=r.ArrayBuffer,l=r.Int8Array;e.exports=!s||!i((function(){l(1)}))||!i((function(){new l(-1)}))||!o((function(e){new l,new l(null),new l(1.5),new l(e)}),!0)||i((function(){return 1!==new l(new a(2),1,void 0).length}))},9401:(e,t,n)=>{var r=n(7475),i=n(4068),o=n(2151),s=n(7143),a=n(1558),l=n(422),c=n(683).aTypedArrayConstructor;e.exports=function(e){var t,n,u,d,f,h,p=r(e),v=arguments.length,m=v>1?arguments[1]:void 0,g=void 0!==m,y=s(p);if(void 0!=y&&!a(y)){f=o(p,y),h=f.next,p=[];while(!(d=h.call(f)).done)p.push(d.value)}for(g&&v>2&&(m=l(m,arguments[2],2)),n=i(p.length),u=new(c(this))(n),t=0;n>t;t++)u[t]=g?m(p[t],t):p[t];return u}},6862:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+n).toString(36)}},8476:(e,t,n)=>{var r=n(7529);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},854:(e,t,n)=>{var r=n(7358),i=n(1586),o=n(8752),s=n(6862),a=n(7529),l=n(8476),c=i("wks"),u=r.Symbol,d=l?u:u&&u.withoutSetter||s;e.exports=function(e){return o(c,e)&&(a||"string"==typeof c[e])||(a&&o(u,e)?c[e]=u[e]:c[e]=d("Symbol."+e)),c[e]}},979:(e,t,n)=>{"use strict";var r=n(8934),i=n(6400),o=n(62),s=n(7950),a=n(1801),l=n(4068),c=n(7440),u=o.ArrayBuffer,d=o.DataView,f=u.prototype.slice,h=i((function(){return!new u(2).slice(1,void 0).byteLength}));r({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:h},{slice:function(e,t){if(void 0!==f&&void 0===t)return f.call(s(this),e);var n=s(this).byteLength,r=a(e,n),i=a(void 0===t?n:t,n),o=new(c(this,u))(l(i-r)),h=new d(this),p=new d(o),v=0;while(r<i)p.setUint8(v++,h.getUint8(r++));return o}})},9377:(e,t,n)=>{"use strict";var r=n(8934),i=n(4817),o=n(7475),s=n(4068),a=n(3814),l=n(6340);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=o(this),n=s(t.length),r=l(t,0);return r.length=i(r,t,t,n,0,void 0===e?1:a(e)),r}})},6843:(e,t,n)=>{"use strict";var r=n(7120),i=n(2852),o=n(2184),s=n(7624),a=n(8810),l="Array Iterator",c=s.set,u=s.getterFor(l);e.exports=a(Array,"Array",(function(e,t){c(this,{type:l,target:r(e),index:0,kind:t})}),(function(){var e=u(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},7070:(e,t,n)=>{"use strict";var r=n(8934),i=n(6894),o=[].reverse,s=[1,2];r({target:"Array",proto:!0,forced:String(s)===String(s.reverse())},{reverse:function(){return i(this)&&(this.length=this.length),o.call(this)}})},7098:(e,t,n)=>{"use strict";var r=n(8934),i=n(8231),o=n(7475),s=n(4068),a=n(4481),l=n(6400),c=n(6534),u=n(2828),d=n(1544),f=n(8979),h=n(5068),p=n(1513),v=[],m=v.sort,g=l((function(){v.sort(void 0)})),y=l((function(){v.sort(null)})),b=u("sort"),w=!l((function(){if(h)return h<70;if(!(d&&d>3)){if(f)return!0;if(p)return p<603;var e,t,n,r,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)v.push({k:t+r,v:n})}for(v.sort((function(e,t){return t.v-e.v})),r=0;r<v.length;r++)t=v[r].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),_=g||!y||!b||!w,S=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:a(t)>a(n)?1:-1}};r({target:"Array",proto:!0,forced:_},{sort:function(e){void 0!==e&&i(e);var t=o(this);if(w)return void 0===e?m.call(t):m.call(t,e);var n,r,a=[],l=s(t.length);for(r=0;r<l;r++)r in t&&a.push(t[r]);a=c(a,S(e)),n=a.length,r=0;while(r<n)t[r]=a[r++];while(r<l)delete t[r++];return t}})},4303:(e,t,n)=>{var r=n(9631),i=n(7358),o=n(4389),s=n(9941),a=n(1904),l=n(928).f,c=n(1454).f,u=n(6491),d=n(4481),f=n(136),h=n(2351),p=n(298),v=n(6400),m=n(8752),g=n(7624).enforce,y=n(4114),b=n(854),w=n(5337),_=n(1442),S=b("match"),k=i.RegExp,x=k.prototype,E=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,T=/a/g,I=/a/g,O=new k(T)!==T,C=h.UNSUPPORTED_Y,A=r&&(!O||C||w||_||v((function(){return I[S]=!1,k(T)!=T||k(I)==I||"/a/i"!=k(T,"i")}))),R=function(e){for(var t,n=e.length,r=0,i="",o=!1;r<=n;r++)t=e.charAt(r),"\\"!==t?o||"."!==t?("["===t?o=!0:"]"===t&&(o=!1),i+=t):i+="[\\s\\S]":i+=t+e.charAt(++r);return i},P=function(e){for(var t,n=e.length,r=0,i="",o=[],s={},a=!1,l=!1,c=0,u="";r<=n;r++){if(t=e.charAt(r),"\\"===t)t+=e.charAt(++r);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:E.test(e.slice(r+1))&&(r+=2,l=!0),i+=t,c++;continue;case">"===t&&l:if(""===u||m(s,u))throw new SyntaxError("Invalid capture group name");s[u]=!0,o.push([u,c]),l=!1,u="";continue}l?u+=t:i+=t}return[i,o]};if(o("RegExp",A)){for(var F=function(e,t){var n,r,i,o,l,c,h=this instanceof F,p=u(e),v=void 0===t,m=[],y=e;if(!h&&p&&v&&e.constructor===F)return e;if((p||e instanceof F)&&(e=e.source,v&&(t="flags"in y?y.flags:f.call(y))),e=void 0===e?"":d(e),t=void 0===t?"":d(t),y=e,w&&"dotAll"in T&&(r=!!t&&t.indexOf("s")>-1,r&&(t=t.replace(/s/g,""))),n=t,C&&"sticky"in T&&(i=!!t&&t.indexOf("y")>-1,i&&(t=t.replace(/y/g,""))),_&&(o=P(e),e=o[0],m=o[1]),l=s(k(e,t),h?this:x,F),(r||i||m.length)&&(c=g(l),r&&(c.dotAll=!0,c.raw=F(R(e),n)),i&&(c.sticky=!0),m.length&&(c.groups=m)),e!==y)try{a(l,"source",""===y?"(?:)":y)}catch(b){}return l},N=function(e){e in F||l(F,e,{configurable:!0,get:function(){return k[e]},set:function(t){k[e]=t}})},L=c(k),M=0;L.length>M;)N(L[M++]);x.constructor=F,F.prototype=x,p(i,"RegExp",F)}y("RegExp")},7280:(e,t,n)=>{"use strict";var r=n(8934),i=n(4348);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},5363:(e,t,n)=>{"use strict";var r=n(9529),i=n(6400),o=n(7950),s=n(3814),a=n(4068),l=n(4481),c=n(7933),u=n(6412),d=n(8716),f=n(9395),h=n(854),p=h("replace"),v=Math.max,m=Math.min,g=function(e){return void 0===e?e:String(e)},y=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),w=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,t,n){var r=b?"$":"$0";return[function(e,n){var r=c(this),i=void 0==e?void 0:e[p];return void 0!==i?i.call(e,r,n):t.call(l(r),e,n)},function(e,i){var c=o(this),h=l(e);if("string"===typeof i&&-1===i.indexOf(r)&&-1===i.indexOf("$<")){var p=n(t,c,h,i);if(p.done)return p.value}var y="function"===typeof i;y||(i=l(i));var b=c.global;if(b){var w=c.unicode;c.lastIndex=0}var _=[];while(1){var S=f(c,h);if(null===S)break;if(_.push(S),!b)break;var k=l(S[0]);""===k&&(c.lastIndex=u(h,a(c.lastIndex),w))}for(var x="",E=0,T=0;T<_.length;T++){S=_[T];for(var I=l(S[0]),O=v(m(s(S.index),h.length),0),C=[],A=1;A<S.length;A++)C.push(g(S[A]));var R=S.groups;if(y){var P=[I].concat(C,O,h);void 0!==R&&P.push(R);var F=l(i.apply(void 0,P))}else F=d(I,h,O,C,R,i);O>=E&&(x+=h.slice(E,O)+F,E=O+I.length)}return x+h.slice(E)}]}),!w||!y||b)},246:(e,t,n)=>{"use strict";var r=n(8934),i=n(9631),o=n(7358),s=n(8752),a=n(776),l=n(928).f,c=n(8438),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(f,u);var h=f.prototype=u.prototype;h.constructor=f;var p=h.toString,v="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;l(h,"description",{configurable:!0,get:function(){var e=a(this)?this.valueOf():this,t=p.call(e);if(s(d,e))return"";var n=v?t.slice(7,-1):t.replace(m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},2396:(e,t,n)=>{"use strict";var r=n(683),i=n(7358),o=n(6400),s=n(8231),a=n(4068),l=n(6534),c=n(1544),u=n(8979),d=n(5068),f=n(1513),h=r.aTypedArray,p=r.exportTypedArrayMethod,v=i.Uint16Array,m=v&&v.prototype.sort,g=!!m&&!o((function(){var e=new v(2);e.sort(null),e.sort({})})),y=!!m&&!o((function(){if(d)return d<74;if(c)return c<67;if(u)return!0;if(f)return f<602;var e,t,n=new v(516),r=Array(516);for(e=0;e<516;e++)t=e%4,n[e]=515-e,r[e]=e-2*t+3;for(n.sort((function(e,t){return(e/4|0)-(t/4|0)})),e=0;e<516;e++)if(n[e]!==r[e])return!0})),b=function(e){return function(t,n){return void 0!==e?+e(t,n)||0:n!==n?-1:t!==t?1:0===t&&0===n?1/t>0&&1/n<0?1:-1:t>n}};p("sort",(function(e){var t=this;if(void 0!==e&&s(e),y)return m.call(t,e);h(t);var n,r=a(t.length),i=Array(r);for(n=0;n<r;n++)i[n]=t[n];for(i=l(t,b(e)),n=0;n<r;n++)t[n]=i[n];return t}),!y||g)},6105:(e,t,n)=>{var r=n(6968);r("Uint8",(function(e){return function(t,n,r){return e(this,t,n,r)}}))},71:(e,t,n)=>{var r=n(7358),i=n(4296),o=n(8753),s=n(6843),a=n(1904),l=n(854),c=l("iterator"),u=l("toStringTag"),d=s.values,f=function(e,t){if(e){if(e[c]!==d)try{a(e,c,d)}catch(r){e[c]=d}if(e[u]||a(e,u,t),i[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var h in i)f(r[h]&&r[h].prototype,h);f(o,"DOMTokenList")},120:function(e){!function(t,n){e.exports=n()}(0,(function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",s="hour",a="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,s=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:a,D:f,h:s,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var _=function(e){return e instanceof E},S=function(e,t,n){var r;if(!e)return b;if("string"==typeof e)w[e]&&(r=e),t&&(w[e]=t,r=e);else{var i=e.name;w[i]=e,r=i}return!n&&r&&(b=r),r||!n&&b},k=function(e,t){if(_(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new E(n)},x=y;x.l=S,x.i=_,x.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var g=m.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return x},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return k(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<k(e)},g.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,r=!!x.u(t)||t,u=x.p(e),h=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(a)},p=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,m=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case l:var b=this.$locale().weekStart||0,w=(v<b?v+7:v)-b;return h(r?g-w:g+(6-w),m);case a:case f:return p(y+"Hours",0);case s:return p(y+"Minutes",1);case o:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var n,l=x.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[a]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[s]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===a?this.$D+(t-this.$W):t;if(l===c||l===d){var v=this.clone().set(f,1);v.$d[h](p),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[x.p(e)]()},g.add=function(r,u){var f,h=this;r=Number(r);var p=x.p(u),v=function(e){var t=k(h);return x.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===a)return v(1);if(p===l)return v(7);var m=(f={},f[o]=t,f[s]=n,f[i]=e,f)[p]||1,g=this.$d.getTime()+r*m;return x.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),o=this.$H,s=this.$m,a=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].substr(0,o)},d=function(e){return x.s(o%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:x.s(a+1,2,"0"),MMM:u(n.monthsShort,a,c,3),MMMM:u(c,a),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:x.s(o,2,"0"),h:d(1),hh:d(2),a:f(o,s,!0),A:f(o,s,!1),m:String(s),mm:x.s(s,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(e,t){return t||p[e]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,f,h){var p,v=x.p(f),m=k(r),g=(m.utcOffset()-this.utcOffset())*t,y=this-m,b=x.m(this,m);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(y-g)/6048e5,p[a]=(y-g)/864e5,p[s]=y/n,p[o]=y/t,p[i]=y/e,p)[v]||y,h?b:x.a(b)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return w[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},g.clone=function(){return x.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),T=E.prototype;return k.prototype=T,[["$ms",r],["$s",i],["$m",o],["$H",s],["$W",a],["$M",c],["$y",d],["$D",f]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,E,k),e.$i=!0),k},k.locale=S,k.isDayjs=_,k.unix=function(e){return k(1e3*e)},k.en=w[b],k.Ls=w,k.p={},k}))},5720:(e,t,n)=>{"use strict";n.d(t,{ZF:()=>r.ZF});var r=n(7458),i="firebase",o="9.0.2";
/**
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
 */
(0,r.KN)(i,o,"app")},6944:(e,t,n)=>{"use strict";n.d(t,{a$:()=>bt,Xb:()=>at,v0:()=>ir,Aj:()=>ut,Fb:()=>ct,e5:()=>lt,w7:()=>dt});var r=n(2849),i=n(7458),o=n(8430),s=n(2920),a=n(7429);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new r.LL("auth","Firebase",l()),d=new s.Yd("@firebase/auth");function f(e,...t){d.logLevel<=s["in"].ERROR&&d.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
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
 */function h(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function v(e,t,n){const i=Object.assign(Object.assign({},c()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function g(e,t,...n){if(!e)throw m(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function b(e,t){e||y(t)}
/**
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
 */const w=new Map;function _(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
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
 */function S(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const o=n.initialize({options:t});return o}function k(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
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
 */function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function O(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function A(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},F=new C(3e4,6e4);
/**
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
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return M(e,o,(()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),l=new(R.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&l.set("X-Firebase-Locale",e.languageCode),R.fetch()($(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},P),t);try{const t=new q(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw V(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw v(e,a,s);h(e,a)}}catch(o){if(o instanceof r.ZR)throw o;h(e,"network-request-failed")}}async function D(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&h(e,"multi-factor-auth-required",{serverResponse:o}),o}function $(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?A(e.config,i):`${e.config.apiScheme}://${i}`}class q{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"timeout"))),F.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function j(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function U(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function B(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function z(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=W(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:B(H(o.auth_time)),issuedAtTime:B(H(o.iat)),expirationTime:B(H(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function W(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",o),null}}function Z(e){const t=W(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class G{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,U(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),l=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new G(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function Q(e){const t=(0,r.m9)(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=(0,o._T)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function ne(e,t){const n=await M(e,{},(()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=$(e,i,"/v1/token",`key=${o}`);return R.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
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
 */function ie(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,o._T)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new G(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,j(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:S,stsTokenManager:k}=t;g(b&&k,e,"internal-error");const x=re.fromJSON(this.name,k);g("string"===typeof b,e,"internal-error"),ie(u,e.name),ie(d,e.name),g("boolean"===typeof w,e,"internal-error"),g("boolean"===typeof _,e,"internal-error"),ie(f,e.name),ie(h,e.name),ie(p,e.name),ie(v,e.name),ie(m,e.name),ie(y,e.name);const E=new oe({uid:b,auth:e,email:d,emailVerified:w,displayName:u,isAnonymous:_,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:x,createdAt:m,lastLoginAt:y});return S&&Array.isArray(S)&&(E.providerData=S.map((e=>Object.assign({},e)))),v&&(E._redirectEventId=v),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
/**
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
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
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
 */function le(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=le(this.userKey,r.apiKey,i),this.fullPersistenceKey=le("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(_(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||_(ae);const o=le(n,e.config.apiKey,e.name);let s=null;for(const c of t)try{const t=await c._get(o);if(t){const n=oe._fromJSON(e,t);c!==i&&(s=n),i=c;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(l){}}))),new ce(i,e,n)):new ce(i,e,n)}}
/**
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
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function ve(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)}function be(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return ye(e)||ve(e)||ge(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Se(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function ke(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.z$)());break;case"Worker":n=`${ue((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
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
 */class xe{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Te(this),this.idTokenSubscription=new Te(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await ce.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ee(e){return(0,r.m9)(e)}class Te{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */
class Ie{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
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
 */async function Oe(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function Ce(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}
/**
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
 */
async function Ae(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function Re(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
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
 */class Pe extends Ie{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Pe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ce(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ae(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Oe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Fe(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
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
 */const Ne="http://localhost";class Le extends Ie{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,o._T)(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Le(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){const t=this.buildRequest();return Fe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fe(e,t)}buildRequest(){const e={requestUri:Ne,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
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
 */async function Me(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function De(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function $e(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const qe={["USER_NOT_FOUND"]:"user-not-found"};async function Ve(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),qe)}
/**
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
 */class je extends Ie{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new je({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new je({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return De(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return $e(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ve(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new je({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */function Ue(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Be(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class ze{constructor(e){var t,n,i,o,s,a;const l=(0,r.zd)((0,r.pd)(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,d=Ue(null!==(i=l["mode"])&&void 0!==i?i:null);g(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=null!==(o=l["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=l["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Be(e);try{return new ze(t)}catch(n){return null}}}
/**
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
 */
class He{constructor(){this.providerId=He.PROVIDER_ID}static credential(e,t){return Pe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ze.parseLink(t);return g(n,"argument-error"),Pe._fromEmailAndCode(e,n.code,n.tenantId)}}He.PROVIDER_ID="password",He.EMAIL_PASSWORD_SIGN_IN_METHOD="password",He.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class We{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Ze extends We{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class Ke extends Ze{constructor(){super("facebook.com")}static credential(e){return Le._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
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
 */
class Je extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Le._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com",Je.PROVIDER_ID="google.com";
/**
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
 */
class Ye extends Ze{constructor(){super("github.com")}static credential(e){return Le._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch(t){return null}}}Ye.GITHUB_SIGN_IN_METHOD="github.com",Ye.PROVIDER_ID="github.com";
/**
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
 */
class Ge extends Ze{constructor(){super("twitter.com")}static credential(e,t){return Le._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ge.credential(t,n)}catch(r){return null}}}
/**
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
 */
async function Xe(e,t){return D(e,"POST","/v1/accounts:signUp",N(e,t))}
/**
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
 */Ge.TWITTER_SIGN_IN_METHOD="twitter.com",Ge.PROVIDER_ID="twitter.com";class Qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=et(n),s=new Qe({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Qe({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class tt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,tt.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */async function rt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qe._forOperation(e,"link",r)}
/**
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
 */
async function it(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await K(e,nt(r,i,t,e),n);g(o.idToken,r,"internal-error");const s=W(o.idToken);g(s,r,"internal-error");const{sub:a}=s;return g(e.uid===a,r,"user-mismatch"),Qe._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&h(r,"user-mismatch"),o}}
/**
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
 */async function ot(e,t,n=!1){const r="signIn",i=await nt(e,r,t),o=await Qe._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function st(e,t){return ot(Ee(e),t)}async function at(e,t,n){const r=Ee(e),i=await Xe(r,{returnSecureToken:!0,email:t,password:n}),o=await Qe._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function lt(e,t,n){return st((0,r.m9)(e),He.credential(t,n))}
/**
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
 */
/**
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
 */
function ct(e,t){return(0,r.m9)(e).setPersistence(t)}function ut(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function dt(e){return(0,r.m9)(e).signOut()}
/**
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
 */
function ft(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:e.tenantId},t))}new WeakMap;const ht="__sak";
/**
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
 */class pt{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ht,"1"),this.storage.removeItem(ht),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
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
 */function vt(){const e=(0,r.z$)();return fe(e)||ye(e)}const mt=1e3,gt=10;class yt extends pt{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vt()&&Se(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,gt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),mt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yt.type="LOCAL";const bt=yt;
/**
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
 */class wt extends pt{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wt.type="SESSION";const _t=wt;
/**
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
 */function St(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class kt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new kt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await St(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function xt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */kt.receivers=[];class Et{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const l=xt("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
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
 */function Tt(){return window}function It(e){Tt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Ot(){return"undefined"!==typeof Tt()["WorkerGlobalScope"]&&"function"===typeof Tt()["importScripts"]}async function Ct(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function At(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Rt(){return Ot()?self:null}
/**
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
 */const Pt="firebaseLocalStorageDb",Ft=1,Nt="firebaseLocalStorage",Lt="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Dt(e,t){return e.transaction([Nt],t?"readwrite":"readonly").objectStore(Nt)}function $t(){const e=indexedDB.deleteDatabase(Pt);return new Mt(e).toPromise()}function qt(){const e=indexedDB.open(Pt,Ft);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Nt,{keyPath:Lt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Nt)?t(n):(n.close(),await $t(),t(await qt()))}))}))}async function Vt(e,t,n){const r=Dt(e,!0).put({[Lt]:t,value:n});return new Mt(r).toPromise()}async function jt(e,t){const n=Dt(e,!1).get(t),r=await new Mt(n).toPromise();return void 0===r?null:r.value}function Ut(e,t){const n=Dt(e,!0).delete(t);return new Mt(n).toPromise()}const Bt=800,zt=3;class Ht{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await qt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>zt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ot()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kt._getInstance(Rt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ct(),!this.activeServiceWorker)return;this.sender=new Et(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&At()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qt();return await Vt(e,ht,"1"),await Ut(e,ht),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Vt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>jt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ut(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Dt(e,!1).getAll();return new Mt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Bt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ht.type="LOCAL";const Wt=Ht;
/**
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
 */function Zt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:e.tenantId},t))}
/**
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
 */
function Kt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Jt(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Kt().appendChild(r)}))}function Yt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
Yt("rcb"),new C(3e4,6e4);
/**
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
 */
const Gt="recaptcha";async function Xt(e,t,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,e,"argument-error"),g(n.type===Gt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){g("enroll"===t.type,e,"internal-error");const n=await ft(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await Zt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Me(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
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
 */
class Qt{constructor(e){this.providerId=Qt.PROVIDER_ID,this.auth=Ee(e)}verifyPhoneNumber(e,t){return Xt(this.auth,e,(0,r.m9)(t))}static credential(e,t){return je._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Qt.credentialFromTaggedObject(t)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?je._fromTokenResponse(t,n):null}}
/**
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
 */
function en(e,t){return t?_(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Qt.PROVIDER_ID="phone",Qt.PHONE_SIGN_IN_METHOD="phone";class tn extends Ie{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nn(e){return ot(e.auth,new tn(e),e.bypassAuthState)}function rn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),it(n,new tn(e),e.bypassAuthState)}async function on(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),rt(n,new tn(e),e.bypassAuthState)}
/**
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
 */class sn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nn;case"linkViaPopup":case"linkViaRedirect":return on;case"reauthViaPopup":case"reauthViaRedirect":return rn;default:h(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const an=new C(2e3,1e4);class ln extends sn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=xt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,an.get())};e()}}ln.currentPopupAction=null;
/**
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
 */
const cn="pendingRedirect",un=new Map;class dn extends sn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=un.get(this.auth._key());if(!e){try{const t=await fn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}un.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fn(e,t){const n=pn(t),r="true"===await hn(e)._get(n);return await hn(e)._remove(n),r}function hn(e){return _(e._redirectPersistence)}function pn(e){return le(cn,e.config.apiKey,e.name)}
/**
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
 */async function vn(e,t,n=!1){const r=Ee(e),i=en(r,t),o=new dn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
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
 */
const mn=6e5;class gn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!wn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!bn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mn&&this.cachedEventUids.clear(),this.cachedEventUids.has(yn(e))}saveEventToCache(e){this.cachedEventUids.add(yn(e)),this.lastProcessedEventTime=Date.now()}}function yn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function bn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function wn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bn(e);default:return!1}}
/**
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
 */async function _n(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
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
 */const Sn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kn=/^https?/;async function xn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await _n(e);for(const r of t)try{if(En(r))return}catch(n){}h(e,"unauthorized-domain")}function En(e){const t=x(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!kn.test(n))return!1;if(Sn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Tn=new C(3e4,6e4);function In(){const e=Tt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function On(e){return new Promise(((t,n)=>{var r,i,o;function s(){In(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{In(),n(p(e,"network-request-failed"))},timeout:Tn.get()})}if(null===(i=null===(r=Tt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Tt().gapi)||void 0===o?void 0:o.load)){const t=Yt("iframefcb");return Tt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Jt(`https://apis.google.com/js/api.js?onload=${t}`)}s()}})).catch((e=>{throw Cn=null,e}))}let Cn=null;function An(e){return Cn=Cn||On(e),Cn}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Rn=new C(5e3,15e3),Pn="__/auth/iframe",Fn="emulator/auth/iframe",Nn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Ln=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,Fn):`https://${e.config.authDomain}/${Pn}`,o={apiKey:t.apiKey,appName:e.name,v:i.Jn},s=Ln.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Dn(e){const t=await An(e),n=Tt().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Mn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=Tt().setTimeout((()=>{r(i)}),Rn.get());function s(){Tt().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $n={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qn=500,Vn=600,jn="_blank",Un="http://localhost";class Bn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function zn(e,t,n,i=qn,o=Vn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},$n),{width:i.toString(),height:o.toString(),top:s,left:a}),u=(0,r.z$)().toLowerCase();n&&(l=he(u)?jn:n),de(u)&&(t=t||Un,c.scrollbars="yes");const d=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(u)&&"_self"!==l)return Hn(t||"",l),new Bn(null);const f=window.open(t||"",l,d);g(f,e,"popup-blocked");try{f.focus()}catch(h){}return new Bn(f)}function Hn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const Wn="__/auth/handler",Zn="emulator/auth/handler";function Kn(e,t,n,o,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(t instanceof We){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Ze){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];return`${Jn(e)}?${(0,r.xO)(c).slice(1)}`}function Jn({config:e}){return e.emulator?A(e,Zn):`https://${e.authDomain}/${Wn}`}
/**
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
 */const Yn="webStorageSupport";class Gn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_t,this._completeRedirectFn=vn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Kn(e,t,n,x(),r);return zn(e,o,xt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),It(Kn(e,t,n,x(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Dn(e),n=new gn(e);return t.register("authEvent",(t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Yn,{type:Yn},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Yn];void 0!==i&&t(!!i),h(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||fe()||ye()}}const Xn=Gn;var Qn="@firebase/auth",er="0.17.2";
/**
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
 */
class tr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function nr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ke(e)},s=new xe(t,r);return k(s,n),s})(r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Ee(e.getProvider("auth").getImmediate());return(e=>new tr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Qn,er,nr(e))}
/**
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
 */function ir(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");return t.isInitialized()?t.getImmediate():S(e,{popupRedirectResolver:Xn,persistence:[Wt,bt,_t]})}rr("Browser")},9535:(e,t,n)=>{"use strict";n.d(t,{hJ:()=>Ct,oe:()=>sn,JU:()=>At,PL:()=>rn,ad:()=>Et,pl:()=>on});var r=n(7458),i=n(7429),o=n(2920),s=n(2849);
/**
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
 */
class a{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
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
 */
let l="9.0.2";
/**
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
 */const c=new o.Yd("@firebase/firestore");function u(e,...t){if(c.logLevel<=o["in"].DEBUG){const n=t.map(h);c.debug(`Firestore (${l}): ${e}`,...n)}}function d(e,...t){if(c.logLevel<=o["in"].ERROR){const n=t.map(h);c.error(`Firestore (${l}): ${e}`,...n)}}function f(e,...t){if(c.logLevel<=o["in"].WARN){const n=t.map(h);c.warn(`Firestore (${l}): ${e}`,...n)}}function h(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
/**
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
 */function p(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw d(t),new Error(t)}function v(e,t){e||p()}function m(e,t){return e}
/**
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
 */const g="ok",y="cancelled",b="unknown",w="invalid-argument",_="deadline-exceeded",S="not-found",k="permission-denied",x="unauthenticated",E="resource-exhausted",T="failed-precondition",I="aborted",O="out-of-range",C="unimplemented",A="internal",R="unavailable";class P extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */
/**
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
 */
class F{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(a.UNAUTHENTICATED)))}shutdown(){}}class L{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(v("string"==typeof e.accessToken),new F(e.accessToken,new a(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class M{constructor(e,t,n){this.t=e,this.i=t,this.o=n,this.type="FirstParty",this.user=a.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.i},t=this.t.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.o&&(e["X-Goog-Iam-Authorization-Token"]=this.o),e}}class D{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new M(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(a.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
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
 */class ${constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class q{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof q&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */class V{constructor(e,t,n){void 0===t?t=0:t>e.length&&p(),void 0===n?n=e.length-t:n>e.length-t&&p(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===V.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof V?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class j extends V{construct(e,t,n){return new j(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new P(w,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new j(t)}static emptyPath(){return new j([])}}const U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class B extends V{construct(e,t,n){return new B(e,t,n)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),B.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new B(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new P(w,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new P(w,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new P(w,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new P(w,"Unterminated ` in path: "+e);return new B(t)}static emptyPath(){return new B([])}}
/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(j.fromString(e))}static fromName(e){return new z(j.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===j.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return j.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new j(e.slice()))}}
/**
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
 */function H(e,t,n){if(!n)throw new P(w,`Function ${e}() cannot be called with an empty ${t}.`)}function W(e){if(!z.isDocumentKey(e))throw new P(w,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Z(e){if(z.isDocumentKey(e))throw new P(w,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function K(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){if(e.constructor){const t=/function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());if(t&&t.length>1)return t[1]}return null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":p()}function J(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new P(w,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=K(e);throw new P(w,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */
function Y(e){return null==e}function G(e){return 0===e&&1/e==-1/0}
/**
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
 */const X={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
 */var Q,ee;function te(e){if(void 0===e)return d("RPC_ERROR","HTTP error has no status"),b;switch(e){case 200:return g;case 400:return T;case 401:return x;case 403:return k;case 404:return S;case 409:return I;case 416:return O;case 429:return E;case 499:return y;case 500:return b;case 501:return C;case 503:return R;case 504:return _;default:return e>=200&&e<300?g:e>=400&&e<500?T:e>=500&&e<600?A:b}}
/**
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
 */(ee=Q||(Q={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";class ne extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.u=t+"://"+e.host,this.h="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}l(e,t,n,r){const i=this.m(e,t);u("RestConnection","Sending: ",i,n);const o={};return this.p(o,r),this.g(e,i,o,n).then((e=>(u("RestConnection","Received: ",e),e)),(t=>{throw f("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}v(e,t,n,r){return this.l(e,t,n,r)}p(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}m(e,t){const n=X[e];return`${this.u}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.I=t}T(e,t){throw new Error("Not supported by FetchConnection")}async g(e,t,n,r){const i=JSON.stringify(r);let o;try{o=await this.I(t,{method:"POST",headers:n,body:i})}catch(e){throw new P(te(e.status),"Request failed with error: "+e.statusText)}if(!o.ok)throw new P(te(o.status),"Request failed with error: "+o.statusText);return o.json()}}
/**
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
 */
/**
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
 */function re(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class ie{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=re(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function oe(e,t){return e<t?-1:e>t?1:0}function se(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
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
 */class ae{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new P(w,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new P(w,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new P(w,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(w,"Timestamp seconds out of range: "+e)}static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ae(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new ae(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function ce(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ue(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
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
 */class de{constructor(e){this.fields=e,e.sort(B.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return se(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */
/**
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
 */class fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new fe(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new fe(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fe.EMPTY_BYTE_STRING=new fe("");const he=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pe(e){if(v(!!e),"string"==typeof e){let t=0;const n=he.exec(e);if(v(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ve(e.seconds),nanos:ve(e.nanos)}}function ve(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function me(e){return"string"==typeof e?fe.fromBase64String(e):fe.fromUint8Array(e)}
/**
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
 */function ge(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ye(e){const t=e.mapValue.fields.__previous_value__;return ge(t)?ye(t):t}function be(e){const t=pe(e.mapValue.fields.__local_write_time__.timestampValue);return new ae(t.seconds,t.nanos)}
/**
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
 */function we(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ge(e)?4:10:p()}function _e(e,t){const n=we(e);if(n!==we(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return be(e).isEqual(be(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=pe(e.timestampValue),r=pe(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return me(e.bytesValue).isEqual(me(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ve(e.geoPointValue.latitude)===ve(t.geoPointValue.latitude)&&ve(e.geoPointValue.longitude)===ve(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ve(e.integerValue)===ve(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ve(e.doubleValue),r=ve(t.doubleValue);return n===r?G(n)===G(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return se(e.arrayValue.values||[],t.arrayValue.values||[],_e);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ce(n)!==ce(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!_e(n[i],r[i])))return!1;return!0}(e,t);default:return p()}}function Se(e){return!!e&&"nullValue"in e}function ke(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function xe(e){return!!e&&"mapValue"in e}function Ee(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ue(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ee(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ee(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
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
 */class Te{constructor(e){this.value=e}static empty(){return new Te({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!xe(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ee(t)}setAll(e){let t=B.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ee(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());xe(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _e(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];xe(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){ue(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Te(Ee(this.value))}}
/**
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
 */class Ie{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Ie(e,0,le.min(),Te.empty(),0)}static newFoundDocument(e,t,n){return new Ie(e,1,t,n,0)}static newNoDocument(e,t){return new Ie(e,2,t,Te.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,Te.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Te.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ie(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Oe{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.P=null}}function Ce(e,t=null,n=[],r=[],i=null,o=null,s=null){return new Oe(e,t,n,r,i,o,s)}class Ae{constructor(e,t){this.position=e,this.before=t}}class Re{constructor(e,t="asc"){this.field=e,this.dir=t}}
/**
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
 */
class Pe{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.D=null,this.$=null,this.startAt,this.endAt}}function Fe(e){return!Y(e.limit)&&"L"===e.limitType}function Ne(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Le(e){for(const t of e.filters)if(t.N())return t.field;return null}function Me(e){const t=m(e);if(null===t.D){t.D=[];const e=Le(t),n=Ne(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new Re(e)),t.D.push(new Re(B.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Re(B.keyField(),e))}}}return t.D}function De(e){const t=m(e);if(!t.$)if("F"===t.limitType)t.$=Ce(t.path,t.collectionGroup,Me(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Me(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Re(i.field,t))}const n=t.endAt?new Ae(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Ae(t.startAt.position,!t.startAt.before):null;t.$=Ce(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.$}
/**
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
 */
function $e(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!G(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.F){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:G(t)?"-0":t}}(e,t)}
/**
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
 */class qe{constructor(){this._=void 0}}class Ve extends qe{}class je extends qe{constructor(e){super(),this.elements=e}}class Ue extends qe{constructor(e){super(),this.elements=e}}class Be extends qe{constructor(e,t){super(),this.S=e,this.q=t}}
/**
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
 */class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class He{}class We extends He{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ze extends He{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}class Ke extends He{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Je extends He{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
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
 */const Ye=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Ge=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Xe{constructor(e,t){this.databaseId=e,this.F=t}}function Qe(e,t){return e.F?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function et(e,t){return e.F?t.toBase64():t.toUint8Array()}function tt(e,t){return Qe(e,t.toTimestamp())}function nt(e){return v(!!e),le.fromTimestamp(function(e){const t=pe(e);return new ae(t.seconds,t.nanos)}(e))}function rt(e,t){return function(e){return new j(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function it(e,t){return rt(e.databaseId,t.path)}function ot(e,t){const n=function(e){const t=j.fromString(e);return v(mt(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new P(w,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new P(w,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new z((v((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)));var r}function st(e,t){return rt(e.databaseId,t)}function at(e){return new j(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function lt(e,t,n){return{name:it(e,t),fields:n.value.mapValue.fields}}function ct(e,t){let n;if(t instanceof We)n={update:lt(e,t.key,t.value)};else if(t instanceof Ke)n={delete:it(e,t.key)};else if(t instanceof Ze)n={update:lt(e,t.key,t.data),updateMask:vt(t.fieldMask)};else{if(!(t instanceof Je))return p();n={verify:it(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ve)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof je)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ue)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Be)return{fieldPath:t.field.canonicalString(),increment:n.q};throw p()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:tt(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:p()}(e,t.precondition)),n}function ut(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=st(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=st(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(ke(e.value))return{unaryFilter:{field:pt(e.field),op:"IS_NAN"}};if(Se(e.value))return{unaryFilter:{field:pt(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ke(e.value))return{unaryFilter:{field:pt(e.field),op:"IS_NOT_NAN"}};if(Se(e.value))return{unaryFilter:{field:pt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pt(e.field),op:ht(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:pt(e.field),direction:ft(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(e,t){return e.F||Y(t)?t:{value:t}}(e,t.limit);return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=dt(t.startAt)),t.endAt&&(n.structuredQuery.endAt=dt(t.endAt)),n}function dt(e){return{before:e.before,values:e.position}}function ft(e){return Ye[e]}function ht(e){return Ge[e]}function pt(e){return{fieldPath:e.canonicalString()}}function vt(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function mt(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */function gt(e){return new Xe(e,!0)}
/**
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
 */
/**
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
 */
class yt extends class{}{constructor(e,t,n){super(),this.credentials=e,this.Y=t,this.S=n,this.K=!1}J(){if(this.K)throw new P(T,"The client has already been terminated.")}l(e,t,n){return this.J(),this.credentials.getToken().then((r=>this.Y.l(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===x&&this.credentials.invalidateToken(),e):new P(b,e.toString())}))}v(e,t,n){return this.J(),this.credentials.getToken().then((r=>this.Y.v(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===x&&this.credentials.invalidateToken(),e):new P(b,e.toString())}))}terminate(){this.K=!0}}async function bt(e,t){const n=m(e),r=at(n.S)+"/documents",i={writes:t.map((e=>ct(n.S,e)))};await n.l("Commit",r,i)}async function wt(e,t){const n=m(e),r=ut(n.S,De(t));return(await n.v("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,t,n){const r=ot(e,t.name),i=nt(t.updateTime),o=new Te({mapValue:{fields:t.fields}}),s=Ie.newFoundDocument(r,i,o);return n&&s.setHasCommittedMutations(),n?s.setHasCommittedMutations():s}(n.S,e.document,void 0)))}
/**
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
 */const _t=new Map;function St(e){if(e._terminated)throw new P(T,"The client has already been terminated.");if(!_t.has(e)){u("ComponentProvider","Initializing Datastore");const o=function(e){return new ne(e,fetch.bind(null))}((t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),new $(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),s=gt(e._databaseId),a=function(e,t,n){return new yt(e,t,n)}(e._credentials,o,s);_t.set(e,a)}var t,n,r,i;
/**
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
 */return _t.get(e)}class kt{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new P(w,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new P(w,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new P(w,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
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
 */class xt{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kt({}),this._settingsFrozen=!1,e instanceof q?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new P(w,'"projectId" not provided in firebase.initializeApp.');return new q(e.options.projectId)}(e))}get app(){if(!this._app)throw new P(T,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new P(T,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kt(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new N;switch(e.type){case"gapi":const t=e.client;return v(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new D(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new P(w,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=_t.get(e);t&&(u("ComponentProvider","Removing Datastore"),_t.delete(e),t.terminate())}(this),Promise.resolve()}}function Et(e=(0,r.Mq)()){return(0,r.qX)(e,"firestore/lite").getImmediate()}
/**
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
 */
/**
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
 */
class Tt{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class It{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new It(this.firestore,e,this._query)}}class Ot extends It{constructor(e,t,n){super(e,t,new Pe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new z(e))}withConverter(e){return new Ot(this.firestore,e,this._path)}}function Ct(e,t,...n){if(e=(0,s.m9)(e),H("collection","path",t),e instanceof xt){const r=j.fromString(t,...n);return Z(r),new Ot(e,null,r)}{if(!(e instanceof Tt||e instanceof Ot))throw new P(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return Z(r),new Ot(e.firestore,null,r)}}function At(e,t,...n){if(e=(0,s.m9)(e),1===arguments.length&&(t=ie.A()),H("doc","path",t),e instanceof xt){const r=j.fromString(t,...n);return W(r),new Tt(e,null,new z(r))}{if(!(e instanceof Tt||e instanceof Ot))throw new P(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return W(r),new Tt(e.firestore,e instanceof Ot?e.converter:null,new z(r))}}
/**
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
 */
class Rt{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new P(w,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new B(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(fe.fromBase64String(e))}catch(e){throw new P(w,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Pt(fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class Ft{constructor(e){this._methodName=e}}
/**
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
 */class Nt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new P(w,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new P(w,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}
/**
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
 */const Lt=/^__.*__$/;class Mt{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ze(e,this.data,this.fieldMask,t,this.fieldTransforms):new We(e,this.data,t,this.fieldTransforms)}}function Dt(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class $t{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.S=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Z(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get X(){return this.settings.X}tt(e){return new $t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.S,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.tt({path:n,et:!1});return r.rt(e),r}st(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.tt({path:n,et:!1});return r.Z(),r}it(e){return this.tt({path:void 0,et:!0})}ot(e){return Jt(e,this.settings.methodName,this.settings.ut||!1,this.path,this.settings.ct)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.rt(this.path.get(e))}rt(e){if(0===e.length)throw this.ot("Document fields must not be empty");if(Dt(this.X)&&Lt.test(e))throw this.ot('Document fields cannot begin and end with "__"')}}class qt{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.S=n||gt(e)}at(e,t,n,r=!1){return new $t({X:e,methodName:t,ct:n,path:B.emptyPath(),et:!1,ut:r},this.databaseId,this.S,this.ignoreUndefinedProperties)}}function Vt(e){const t=e._freezeSettings(),n=gt(e._databaseId);return new qt(e._databaseId,!!t.ignoreUndefinedProperties,n)}function jt(e,t,n,r,i,o={}){const s=e.at(o.merge||o.mergeFields?2:0,t,n,i);Ht("Data must be an object, but it was:",s,r);const a=Bt(r,s);let l,c;if(o.merge)l=new de(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=Wt(t,r,n);if(!s.contains(i))throw new P(w,`Field '${i}' is specified in your field mask but missing from your input data.`);Yt(e,i)||e.push(i)}l=new de(e),c=s.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=s.fieldTransforms;return new Mt(new Te(a),l,c)}function Ut(e,t){if(zt(e=(0,s.m9)(e)))return Ht("Unsupported field value:",t,e),Bt(e,t);if(e instanceof Ft)return function(e,t){if(!Dt(t.X))throw t.ot(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ot(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.et&&4!==t.X)throw t.ot("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Ut(i,t.it(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,s.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return $e(t.S,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ae.fromDate(e);return{timestampValue:Qe(t.S,n)}}if(e instanceof ae){const n=new ae(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Qe(t.S,n)}}if(e instanceof Nt)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Pt)return{bytesValue:et(t.S,e._byteString)};if(e instanceof Tt){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ot(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:rt(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ot(`Unsupported field value: ${K(e)}`)}(e,t)}function Bt(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ue(e,((e,r)=>{const i=Ut(r,t.nt(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function zt(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ae||e instanceof Nt||e instanceof Pt||e instanceof Tt||e instanceof Ft)}function Ht(e,t,n){if(!zt(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=K(n);throw"an object"===r?t.ot(e+" a custom object"):t.ot(e+" "+r)}}function Wt(e,t,n){if((t=(0,s.m9)(t))instanceof Rt)return t._internalPath;if("string"==typeof t)return Kt(e,t);throw Jt("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Zt=new RegExp("[~\\*/\\[\\]]");function Kt(e,t,n){if(t.search(Zt)>=0)throw Jt(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Rt(...t.split("."))._internalPath}catch(r){throw Jt(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Jt(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new P(w,a+e+l)}function Yt(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class Gt{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Xt(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(en("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Xt extends Gt{data(){return super.data()}}class Qt{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function en(e,t){return"string"==typeof t?Kt(e,t):t instanceof Rt?t._internalPath:t._delegate._internalPath}
/**
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
 */
/**
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
 */
/**
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
 */
function tn(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class nn extends class{convertValue(e,t="none"){switch(we(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(me(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw p()}}convertObject(e,t){const n={};return ue(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Nt(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ye(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(be(e));default:return null}}convertTimestamp(e){const t=pe(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=j.fromString(e);v(mt(n));const r=new q(n.get(1),n.get(3)),i=new z(n.popFirst(5));return r.isEqual(t)||d(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function rn(e){!function(e){if(Fe(e)&&0===e.explicitOrderBy.length)throw new P(C,"limitToLast() queries require specifying at least one orderBy() clause")}((e=J(e,It))._query);const t=St(e.firestore),n=new nn(e.firestore);return wt(t,e._query).then((t=>{const r=t.map((t=>new Xt(e.firestore,n,t.key,t,e.converter)));return Fe(e._query)&&r.reverse(),new Qt(e,r)}))}function on(e,t,n){const r=tn((e=J(e,Tt)).converter,t,n),i=jt(Vt(e.firestore),"setDoc",e._key,r,null!==e.converter,n);return bt(St(e.firestore),[i.toMutation(e._key,ze.none())])}function sn(e){return bt(St((e=J(e,Tt)).firestore),[new Ke(e._key,ze.none())])}!function(e){l=e}(`${r.Jn}_lite`),(0,r.Xd)(new i.wA("firestore/lite",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new xt(n,new L(e.getProvider("auth-internal")));return t&&r._setSettings(t),r}),"PUBLIC")),(0,r.KN)("firestore-lite","3.0.2","node")},8430:(e,t,n)=>{"use strict";n.d(t,{ZT:()=>i,_T:()=>o,mG:()=>s,Jh:()=>a,XA:()=>l,CR:()=>c,ev:()=>u});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function s(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(r.next(e))}catch(t){o(t)}}function a(e){try{l(r["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):i(e.value).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function a(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function l(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function u(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e}Object.create},9582:(e,t,n)=>{"use strict";n.d(t,{p7:()=>tt,r5:()=>W});var r=n(3673),i=n(1959);
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=e=>o?Symbol(e):"_vr_"+e,a=s("rvlm"),l=s("rvd"),c=s("r"),u=s("rl"),d=s("rvl"),f="undefined"!==typeof window;function h(e){return e.__esModule||o&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function v(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const m=()=>{};const g=/\/$/,y=e=>e.replace(g,"");function b(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,l>-1?l:t.length),i=e(o)),l>-1&&(r=r||t.slice(0,l),s=t.slice(l,t.length)),r=I(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function w(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function S(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&k(t.matched[r],n.matched[i])&&x(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function k(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function x(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?T(e,t):Array.isArray(t)?T(t,e):e===t}function T(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function I(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var O,C;(function(e){e["pop"]="pop",e["push"]="push"})(O||(O={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(C||(C={}));function A(e){if(!e)if(f){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const R=/^[^#]+#/;function P(e,t){return e.replace(R,"#")+t}function F(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const N=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=F(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function M(e,t){const n=history.state?history.state.position-t:-1;return n+e}const D=new Map;function $(e,t){D.set(e,t)}function q(e){const t=D.get(e);return D.delete(e),t}let V=()=>location.protocol+"//"+location.host;function j(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,e);return s+r+i}function U(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=j(e,location),l=n.value,c=t.value;let u=0;if(o){if(n.value=a,t.value=o,s&&s===l)return void(s=null);u=c?o.position-c.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:u,type:O.pop,direction:u?u>0?C.forward:C.back:C.unknown})}))};function l(){s=n.value}function c(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:N()}),"")}function d(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function B(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?N():null}}function z(e){const{history:t,location:n}=window,r={value:j(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:V()+e+r;try{t[s?"replaceState":"pushState"](o,"",l),i.value=o}catch(c){console.error(c),n[s?"replace":"assign"](l)}}function s(e,n){const s=p({},t.state,B(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=p({},i.value,t.state,{forward:e,scroll:N()});o(s.current,s,!0);const a=p({},B(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function H(e){e=A(e);const t=z(e),n=U(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=p({location:"",base:e,go:r,createHref:P.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function W(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),H(e)}function Z(e){return"string"===typeof e||e&&"object"===typeof e}function K(e){return"string"===typeof e||"symbol"===typeof e}const J={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y=s("nf");var G;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(G||(G={}));function X(e,t){return p(new Error,{type:e,[Y]:!0},t)}function Q(e,t){return e instanceof Error&&Y in e&&(null==t||!!(e.type&t))}const ee="[^/]+?",te={sensitive:!1,strict:!1,start:!0,end:!0},ne=/[.+*?^${}()[\]/\\]/g;function re(e,t){const n=p({},te,t),r=[];let i=n.start?"^":"";const o=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let t=0;t<u.length;t++){const r=u[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ne,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:l}=r;o.push({name:e,repeatable:n,optional:a});const d=l||ee;if(d!==ee){s+=10;try{new RegExp(`(${d})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+c.message)}}let f=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(f=a&&u.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===d&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,l=o in t?t[o]:"";if(Array.isArray(l)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n}return{re:s,score:r,keys:o,parse:a,stringify:l}}function ie(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function oe(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ie(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const se={type:0,value:""},ae=/[a-zA-Z0-9_]/;function le(e){if(!e)return[[]];if("/"===e)return[[se]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,l=0,c="",u="";function d(){c&&(0===n?o.push({type:0,value:c}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function f(){c+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&d(),s()):":"===a?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ae.test(a)?f():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),d(),s(),i}function ce(e,t,n){const r=re(le(e.path),n);const i=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=fe(e);a.aliasOf=r&&r.record;const c=me(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let d,f;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(d=ce(t,n,c),r?r.alias.push(d):(f=f||d,f!==d&&f.alias.push(d),i&&e.name&&!pe(d)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],d,r&&r.children[t])}r=r||d,l(d)}return f?()=>{s(f)}:m}function s(e){if(K(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function l(e){let t=0;while(t<n.length&&oe(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!pe(e)&&r.set(e.record.name,e)}function c(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw X(1,{location:e});s=i.record.name,a=p(de(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),o=i.stringify(a)}else if("path"in e)o=e.path,i=n.find((e=>e.re.test(o))),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw X(1,{location:e,currentLocation:t});s=i.record.name,a=p({},t.params,e.params),o=i.stringify(a)}const l=[];let c=i;while(c)l.unshift(c.record),c=c.parent;return{name:s,path:o,params:a,matched:l,meta:ve(l)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:c,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function de(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function fe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function pe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ve(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ge=/#/g,ye=/&/g,be=/\//g,we=/=/g,_e=/\?/g,Se=/\+/g,ke=/%5B/g,xe=/%5D/g,Ee=/%5E/g,Te=/%60/g,Ie=/%7B/g,Oe=/%7C/g,Ce=/%7D/g,Ae=/%20/g;function Re(e){return encodeURI(""+e).replace(Oe,"|").replace(ke,"[").replace(xe,"]")}function Pe(e){return Re(e).replace(Ie,"{").replace(Ce,"}").replace(Ee,"^")}function Fe(e){return Re(e).replace(Se,"%2B").replace(Ae,"+").replace(ge,"%23").replace(ye,"%26").replace(Te,"`").replace(Ie,"{").replace(Ce,"}").replace(Ee,"^")}function Ne(e){return Fe(e).replace(we,"%3D")}function Le(e){return Re(e).replace(ge,"%23").replace(_e,"%3F")}function Me(e){return null==e?"":Le(e).replace(be,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function $e(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(Se," "),n=e.indexOf("="),o=De(n<0?e:e.slice(0,n)),s=n<0?null:De(e.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function qe(e){let t="";for(let n in e){const r=e[n];if(n=Ne(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((e=>e&&Fe(e))):[r&&Fe(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ve(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function je(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ue(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((s,a)=>{const l=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):Z(e)?a(X(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function Be(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let s=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(ze(s)){const a=s.__vccOpts||s,l=a[t];l&&i.push(Ue(l,n,r,o,e))}else{let a=s();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=h(i)?i.default:i;o.components[e]=s;const a=s.__vccOpts||s,l=a[t];return l&&Ue(l,n,r,o,e)()}))))}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,r.f3)(c),n=(0,r.f3)(u),o=(0,i.Fl)((()=>t.resolve((0,i.SU)(e.to)))),s=(0,i.Fl)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(k.bind(null,r));if(s>-1)return s;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&i[i.length-1].path!==a?i.findIndex(k.bind(null,e[t-2])):s})),a=(0,i.Fl)((()=>s.value>-1&&Je(n.params,o.value.params))),l=(0,i.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&x(n.params,o.value.params)));function d(n={}){return Ke(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(m):Promise.resolve()}return{route:o,href:(0,i.Fl)((()=>o.value.href)),isActive:a,isExactActive:l,navigate:d}}const We=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,i.qj)(He(e)),{options:o}=(0,r.f3)(c),s=(0,i.Fl)((()=>({[Ge(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ge(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ze=We;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ge=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=(0,r.f3)(d),s=(0,i.Fl)((()=>e.route||o.value)),c=(0,r.f3)(l,0),u=(0,i.Fl)((()=>s.value.matched[c]));(0,r.JJ)(l,c+1),(0,r.JJ)(a,u),(0,r.JJ)(d,s);const f=(0,i.iH)();return(0,r.YP)((()=>[f.value,u.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&k(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=u.value,a=o&&o.components[e.name],l=e.name;if(!a)return Qe(n.default,{Component:a,route:i});const c=o.props[e.name],d=c?!0===c?i.params:"function"===typeof c?c(i):c:null,h=e=>{e.component.isUnmounted&&(o.instances[l]=null)},v=(0,r.h)(a,p({},d,t,{onVnodeUnmounted:h,ref:f}));return Qe(n.default,{Component:v,route:i})||v}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=ue(e.routes,e),n=e.parseQuery||$e,o=e.stringifyQuery||qe,s=e.history;const a=je(),l=je(),h=je(),g=(0,i.XI)(J);let y=J;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=v.bind(null,(e=>""+e)),k=v.bind(null,Me),x=v.bind(null,De);function E(e,n){let r,i;return K(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function T(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function I(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function A(e,r){if(r=p({},r||g.value),"string"===typeof e){const i=b(n,e,r.path),o=t.resolve({path:i.path},r),a=s.createHref(i.fullPath);return p(i,o,{params:x(o.params),hash:De(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=p({},e,{path:b(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];i=p({},e,{params:k(e.params)}),r.params=k(r.params)}const a=t.resolve(i,r),l=e.hash||"";a.params=_(x(a.params));const c=w(o,p({},e,{hash:Pe(l),path:a.path})),u=s.createHref(c);return p({fullPath:c,hash:l,query:o===qe?Ve(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function R(e){return"string"===typeof e?b(n,e,g.value.path):p({},e)}function P(e,t){if(y!==e)return X(8,{from:t,to:e})}function F(e){return j(e)}function D(e){return F(p(R(e),{replace:!0}))}function V(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=R(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function j(e,t){const n=y=A(e),r=g.value,i=e.state,s=e.force,a=!0===e.replace,l=V(n);if(l)return j(p(R(l),{state:i,force:s,replace:a}),t||n);const c=n;let u;return c.redirectedFrom=t,!s&&S(o,r,n)&&(u=X(16,{to:c,from:r}),ie(r,r,!0,!1)),(u?Promise.resolve(u):B(c,r)).catch((e=>Q(e)?e:te(e,c,r))).then((e=>{if(e){if(Q(e,2))return j(p(R(e.to),{state:i,force:s,replace:a}),t||c)}else e=H(c,r,!0,a,i);return z(c,r,e),e}))}function U(e,t){const n=P(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,i,o]=rt(e,t);n=Be(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Ue(r,e,t))}));const s=U.bind(null,e,t);return n.push(s),nt(n).then((()=>{n=[];for(const r of a.list())n.push(Ue(r,e,t));return n.push(s),nt(n)})).then((()=>{n=Be(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Ue(r,e,t))}));return n.push(s),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ue(i,e,t));else n.push(Ue(r.beforeEnter,e,t));return n.push(s),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Be(o,"beforeRouteEnter",e,t),n.push(s),nt(n)))).then((()=>{n=[];for(const r of l.list())n.push(Ue(r,e,t));return n.push(s),nt(n)})).catch((e=>Q(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of h.list())r(e,t,n)}function H(e,t,n,r,i){const o=P(e,t);if(o)return o;const a=t===J,l=f?history.state:{};n&&(r||a?s.replace(e.fullPath,p({scroll:a&&l&&l.scroll},i)):s.push(e.fullPath,i)),g.value=e,ie(e,t,n,a),re()}let W;function Z(){W=s.listen(((e,t,n)=>{const r=A(e),i=V(r);if(i)return void j(p(i,{replace:!0}),r).catch(m);y=r;const o=g.value;f&&$(M(o.fullPath,n.delta),N()),B(r,o).catch((e=>Q(e,12)?e:Q(e,2)?(j(e.to,r).then((e=>{Q(e,20)&&!n.delta&&n.type===O.pop&&s.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&s.go(-n.delta,!1),te(e,r,o)))).then((e=>{e=e||H(r,o,!1),e&&(n.delta?s.go(-n.delta,!1):n.type===O.pop&&Q(e,20)&&s.go(-1,!1)),z(r,o,e)})).catch(m)}))}let Y,G=je(),ee=je();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return Y&&g.value!==J?Promise.resolve():new Promise(((e,t)=>{G.add([e,t])}))}function re(e){Y||(Y=!0,Z(),G.list().forEach((([t,n])=>e?n(e):t())),G.reset())}function ie(t,n,i,o){const{scrollBehavior:s}=e;if(!f||!s)return Promise.resolve();const a=!i&&q(M(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>s(t,n,a))).then((e=>e&&L(e))).catch((e=>te(e,t,n)))}const oe=e=>s.go(e);let se;const ae=new Set,le={currentRoute:g,addRoute:E,removeRoute:T,hasRoute:C,getRoutes:I,resolve:A,options:e,push:F,replace:D,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:a.add,beforeResolve:l.add,afterEach:h.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",Ze),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(g)}),f&&!se&&g.value===J&&(se=!0,F(s.location).catch((e=>{0})));const n={};for(const o in J)n[o]=(0,i.Fl)((()=>g.value[o]));e.provide(c,t),e.provide(u,(0,i.qj)(n)),e.provide(d,g);const r=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(y=J,W&&W(),g.value=J,se=!1,Y=!1),r()}}};return le}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>k(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>k(e,a)))||i.push(a))}return[n,r,i]}}}]);