import{r as w}from"./index-DXKZGL6g.js";var b={exports:{}},h={},$={exports:{}},V={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=w;function j(e,u){return e===u&&(e!==0||1/e===1/u)||e!==e&&u!==u}var R=typeof Object.is=="function"?Object.is:j,x=i.useState,D=i.useEffect,O=i.useLayoutEffect,z=i.useDebugValue;function I(e,u){var t=u(),a=x({inst:{value:t,getSnapshot:u}}),r=a[0].inst,n=a[1];return O(function(){r.value=t,r.getSnapshot=u,m(r)&&n({inst:r})},[e,t,u]),D(function(){return m(r)&&n({inst:r}),e(function(){m(r)&&n({inst:r})})},[e]),z(t),t}function m(e){var u=e.getSnapshot;e=e.value;try{var t=u();return!R(e,t)}catch{return!0}}function M(e,u){return u()}var _=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?M:I;V.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:_;$.exports=V;var g=$.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=w,G=g;function L(e,u){return e===u&&(e!==0||1/e===1/u)||e!==e&&u!==u}var k=typeof Object.is=="function"?Object.is:L,C=G.useSyncExternalStore,U=v.useRef,W=v.useEffect,A=v.useMemo,B=v.useDebugValue;h.useSyncExternalStoreWithSelector=function(e,u,t,a,r){var n=U(null);if(n.current===null){var f={hasValue:!1,value:null};n.current=f}else f=n.current;n=A(function(){function S(o){if(!E){if(E=!0,l=o,o=a(o),r!==void 0&&f.hasValue){var c=f.value;if(r(c,o))return d=c}return d=o}if(c=d,k(l,o))return c;var y=a(o);return r!==void 0&&r(c,y)?(l=o,c):(l=o,d=y)}var E=!1,l,d,p=t===void 0?null:t;return[function(){return S(u())},p===null?void 0:function(){return S(p())}]},[u,t,a,r]);var s=C(e,n[0],n[1]);return W(function(){f.hasValue=!0,f.value=s},[s]),B(s),s};b.exports=h;var H=b.exports;export{H as w};
//# sourceMappingURL=with-selector-qnrv-mjv.js.map
