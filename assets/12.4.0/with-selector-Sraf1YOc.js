import{r as w,g as x}from"./iframe-CWMeKguf.js";var b={exports:{}},h={},$={exports:{}},j={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=w;function V(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var D=typeof Object.is=="function"?Object.is:V,R=s.useState,g=s.useEffect,O=s.useLayoutEffect,z=s.useDebugValue;function I(e,r){var u=r(),a=R({inst:{value:u,getSnapshot:r}}),t=a[0].inst,n=a[1];return O(function(){t.value=u,t.getSnapshot=r,m(t)&&n({inst:t})},[e,u,r]),g(function(){return m(t)&&n({inst:t}),e(function(){m(t)&&n({inst:t})})},[e]),z(u),u}function m(e){var r=e.getSnapshot;e=e.value;try{var u=r();return!D(e,u)}catch{return!0}}function M(e,r){return r()}var _=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?M:I;j.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:_;$.exports=j;var C=$.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=w,G=C;function L(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var k=typeof Object.is=="function"?Object.is:L,F=G.useSyncExternalStore,U=d.useRef,W=d.useEffect,A=d.useMemo,B=d.useDebugValue;h.useSyncExternalStoreWithSelector=function(e,r,u,a,t){var n=U(null);if(n.current===null){var f={hasValue:!1,value:null};n.current=f}else f=n.current;n=A(function(){function E(o){if(!S){if(S=!0,l=o,o=a(o),t!==void 0&&f.hasValue){var c=f.value;if(t(c,o))return v=c}return v=o}if(c=v,k(l,o))return c;var y=a(o);return t!==void 0&&t(c,y)?(l=o,c):(l=o,v=y)}var S=!1,l,v,p=u===void 0?null:u;return[function(){return E(r())},p===null?void 0:function(){return E(p())}]},[r,u,a,t]);var i=F(e,n[0],n[1]);return W(function(){f.hasValue=!0,f.value=i},[i]),B(i),i};b.exports=h;var H=b.exports;const K=x(H);export{K as u,H as w};
//# sourceMappingURL=with-selector-Sraf1YOc.js.map
