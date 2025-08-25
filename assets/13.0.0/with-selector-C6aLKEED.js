import{r as w}from"./iframe-B-8A2VXd.js";var b={exports:{}},h={},$={exports:{}},V={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=w;function j(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var R=typeof Object.is=="function"?Object.is:j,x=i.useState,D=i.useEffect,O=i.useLayoutEffect,z=i.useDebugValue;function I(e,r){var u=r(),a=x({inst:{value:u,getSnapshot:r}}),t=a[0].inst,n=a[1];return O(function(){t.value=u,t.getSnapshot=r,m(t)&&n({inst:t})},[e,u,r]),D(function(){return m(t)&&n({inst:t}),e(function(){m(t)&&n({inst:t})})},[e]),z(u),u}function m(e){var r=e.getSnapshot;e=e.value;try{var u=r();return!R(e,u)}catch{return!0}}function M(e,r){return r()}var _=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?M:I;V.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:_;$.exports=V;var g=$.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=w,G=g;function L(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var k=typeof Object.is=="function"?Object.is:L,C=G.useSyncExternalStore,U=d.useRef,W=d.useEffect,A=d.useMemo,B=d.useDebugValue;h.useSyncExternalStoreWithSelector=function(e,r,u,a,t){var n=U(null);if(n.current===null){var f={hasValue:!1,value:null};n.current=f}else f=n.current;n=A(function(){function S(o){if(!E){if(E=!0,l=o,o=a(o),t!==void 0&&f.hasValue){var c=f.value;if(t(c,o))return v=c}return v=o}if(c=v,k(l,o))return c;var y=a(o);return t!==void 0&&t(c,y)?(l=o,c):(l=o,v=y)}var E=!1,l,v,p=u===void 0?null:u;return[function(){return S(r())},p===null?void 0:function(){return S(p())}]},[r,u,a,t]);var s=C(e,n[0],n[1]);return W(function(){f.hasValue=!0,f.value=s},[s]),B(s),s};b.exports=h;var H=b.exports;export{H as w};
//# sourceMappingURL=with-selector-C6aLKEED.js.map
