import{r as a}from"./index-f1f749bf.js";var c={},p={get exports(){return c},set exports(t){c=t}},f={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=a;function d(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var v=typeof Object.is=="function"?Object.is:d,S=o.useState,l=o.useEffect,m=o.useLayoutEffect,x=o.useDebugValue;function y(t,e){var r=e(),u=S({inst:{value:r,getSnapshot:e}}),n=u[0].inst,i=u[1];return m(function(){n.value=r,n.getSnapshot=e,s(n)&&i({inst:n})},[t,r,e]),l(function(){return s(n)&&i({inst:n}),t(function(){s(n)&&i({inst:n})})},[t]),x(r),r}function s(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!v(t,r)}catch{return!0}}function E(t,e){return e()}var h=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?E:y;f.useSyncExternalStore=o.useSyncExternalStore!==void 0?o.useSyncExternalStore:h;(function(t){t.exports=f})(p);export{c as s};
//# sourceMappingURL=index-7f2f9e92.js.map
