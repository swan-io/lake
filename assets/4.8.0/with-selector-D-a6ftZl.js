import{r as E}from"./index-CBqU2yxZ.js";import{s as w}from"./index-CmNHga1A.js";var S={exports:{}},d={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=E,V=w;function y(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var j=typeof Object.is=="function"?Object.is:y,O=V.useSyncExternalStore,_=l.useRef,k=l.useEffect,q=l.useMemo,D=l.useDebugValue;d.useSyncExternalStoreWithSelector=function(e,t,v,a,i){var u=_(null);if(u.current===null){var n={hasValue:!1,value:null};u.current=n}else n=u.current;u=q(function(){function p(r){if(!h){if(h=!0,f=r,r=a(r),i!==void 0&&n.hasValue){var o=n.value;if(i(o,r))return s=o}return s=r}if(o=s,j(f,r))return o;var m=a(r);return i!==void 0&&i(o,m)?o:(f=r,s=m)}var h=!1,f,s,x=v===void 0?null:v;return[function(){return p(t())},x===null?void 0:function(){return p(x())}]},[t,v,a,i]);var c=O(e,u[0],u[1]);return k(function(){n.hasValue=!0,n.value=c},[c]),D(c),c};S.exports=d;var W=S.exports;export{W as w};
//# sourceMappingURL=with-selector-D-a6ftZl.js.map
