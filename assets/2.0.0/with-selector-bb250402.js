import{r as E}from"./index-f1f749bf.js";import{s as w}from"./index-7f2f9e92.js";var S={},V={get exports(){return S},set exports(r){S=r}},d={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=E,y=w;function j(r,t){return r===t&&(r!==0||1/r===1/t)||r!==r&&t!==t}var O=typeof Object.is=="function"?Object.is:j,_=y.useSyncExternalStore,k=l.useRef,q=l.useEffect,D=l.useMemo,M=l.useDebugValue;d.useSyncExternalStoreWithSelector=function(r,t,v,a,i){var n=k(null);if(n.current===null){var u={hasValue:!1,value:null};n.current=u}else u=n.current;n=D(function(){function p(e){if(!h){if(h=!0,f=e,e=a(e),i!==void 0&&u.hasValue){var o=u.value;if(i(o,e))return s=o}return s=e}if(o=s,O(f,e))return o;var m=a(e);return i!==void 0&&i(o,m)?o:(f=e,s=m)}var h=!1,f,s,x=v===void 0?null:v;return[function(){return p(t())},x===null?void 0:function(){return p(x())}]},[t,v,a,i]);var c=_(r,n[0],n[1]);return q(function(){u.hasValue=!0,u.value=c},[c]),M(c),c};(function(r){r.exports=d})(V);export{S as w};
//# sourceMappingURL=with-selector-bb250402.js.map
