import{a as M}from"./index-t2oEqn7n.js";var R={exports:{}},b={},V={exports:{}},_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D;function U(){if(D)return _;D=1;var n=M();function S(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var m=typeof Object.is=="function"?Object.is:S,h=n.useState,p=n.useEffect,E=n.useLayoutEffect,y=n.useDebugValue;function w(e,r){var u=r(),o=h({inst:{value:u,getSnapshot:r}}),t=o[0].inst,c=o[1];return E(function(){t.value=u,t.getSnapshot=r,l(t)&&c({inst:t})},[e,u,r]),p(function(){return l(t)&&c({inst:t}),e(function(){l(t)&&c({inst:t})})},[e]),y(u),u}function l(e){var r=e.getSnapshot;e=e.value;try{var u=r();return!m(e,u)}catch{return!0}}function i(e,r){return r()}var a=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?i:w;return _.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:a,_}var O;function g(){return O||(O=1,V.exports=U()),V.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z;function G(){if(z)return b;z=1;var n=M(),S=g();function m(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var h=typeof Object.is=="function"?Object.is:m,p=S.useSyncExternalStore,E=n.useRef,y=n.useEffect,w=n.useMemo,l=n.useDebugValue;return b.useSyncExternalStoreWithSelector=function(i,a,e,r,u){var o=E(null);if(o.current===null){var t={hasValue:!1,value:null};o.current=t}else t=o.current;o=w(function(){function j(f){if(!x){if(x=!0,d=f,f=r(f),u!==void 0&&t.hasValue){var s=t.value;if(u(s,f))return v=s}return v=f}if(s=v,h(d,f))return s;var W=r(f);return u!==void 0&&u(s,W)?(d=f,s):(d=f,v=W)}var x=!1,d,v,q=e===void 0?null:e;return[function(){return j(a())},q===null?void 0:function(){return j(q())}]},[a,e,r,u]);var c=p(i,o[0],o[1]);return y(function(){t.hasValue=!0,t.value=c},[c]),l(c),c},b}var I;function L(){return I||(I=1,R.exports=G()),R.exports}var k=L();export{k as w};
//# sourceMappingURL=with-selector-BkJ7fhJM.js.map
