import{b as I,g as M}from"./iframe-snBXDk_T.js";var w={exports:{}},R={},x={exports:{}},j={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W;function U(){if(W)return j;W=1;var n=I();function S(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var m=typeof Object.is=="function"?Object.is:S,h=n.useState,p=n.useEffect,E=n.useLayoutEffect,y=n.useDebugValue;function b(e,r){var u=r(),o=h({inst:{value:u,getSnapshot:r}}),t=o[0].inst,f=o[1];return E(function(){t.value=u,t.getSnapshot=r,l(t)&&f({inst:t})},[e,u,r]),p(function(){return l(t)&&f({inst:t}),e(function(){l(t)&&f({inst:t})})},[e]),y(u),u}function l(e){var r=e.getSnapshot;e=e.value;try{var u=r();return!m(e,u)}catch{return!0}}function i(e,r){return r()}var a=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?i:b;return j.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:a,j}var g;function C(){return g||(g=1,x.exports=U()),x.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function G(){if(O)return R;O=1;var n=I(),S=C();function m(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var h=typeof Object.is=="function"?Object.is:m,p=S.useSyncExternalStore,E=n.useRef,y=n.useEffect,b=n.useMemo,l=n.useDebugValue;return R.useSyncExternalStoreWithSelector=function(i,a,e,r,u){var o=E(null);if(o.current===null){var t={hasValue:!1,value:null};o.current=t}else t=o.current;o=b(function(){function V(c){if(!_){if(_=!0,v=c,c=r(c),u!==void 0&&t.hasValue){var s=t.value;if(u(s,c))return d=s}return d=c}if(s=d,h(v,c))return s;var D=r(c);return u!==void 0&&u(s,D)?(v=c,s):(v=c,d=D)}var _=!1,v,d,q=e===void 0?null:e;return[function(){return V(a())},q===null?void 0:function(){return V(q())}]},[a,e,r,u]);var f=p(i,o[0],o[1]);return y(function(){t.hasValue=!0,t.value=f},[f]),l(f),f},R}var z;function L(){return z||(z=1,w.exports=G()),w.exports}var $=L();const F=M($);export{F as u,$ as w};
//# sourceMappingURL=with-selector-B8tvG2TH.js.map
