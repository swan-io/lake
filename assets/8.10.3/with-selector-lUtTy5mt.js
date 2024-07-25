import{r as y}from"./index-Cs7sjTYM.js";var E={exports:{}},w={},$={exports:{}},V={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=y;function j(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O=typeof Object.is=="function"?Object.is:j,_=f.useState,g=f.useEffect,k=f.useLayoutEffect,q=f.useDebugValue;function D(e,t){var r=t(),i=_({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return k(function(){n.value=r,n.getSnapshot=t,d(n)&&u({inst:n})},[e,r,t]),g(function(){return d(n)&&u({inst:n}),e(function(){d(n)&&u({inst:n})})},[e]),q(r),r}function d(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!O(e,r)}catch{return!0}}function L(e,t){return t()}var M=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?L:D;V.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:M;$.exports=V;var R=$.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=y,W=R;function z(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var A=typeof Object.is=="function"?Object.is:z,B=W.useSyncExternalStore,C=v.useRef,F=v.useEffect,G=v.useMemo,H=v.useDebugValue;w.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var u=C(null);if(u.current===null){var c={hasValue:!1,value:null};u.current=c}else c=u.current;u=G(function(){function S(o){if(!h){if(h=!0,p=o,o=i(o),n!==void 0&&c.hasValue){var s=c.value;if(n(s,o))return l=s}return l=o}if(s=l,A(p,o))return s;var m=i(o);return n!==void 0&&n(s,m)?s:(p=o,l=m)}var h=!1,p,l,x=r===void 0?null:r;return[function(){return S(t())},x===null?void 0:function(){return S(x())}]},[t,r,i,n]);var a=B(e,u[0],u[1]);return F(function(){c.hasValue=!0,c.value=a},[a]),H(a),a};E.exports=w;var J=E.exports;export{J as w};
//# sourceMappingURL=with-selector-lUtTy5mt.js.map
