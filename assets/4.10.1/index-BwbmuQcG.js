import{r as c}from"./index-CBqU2yxZ.js";import{s as U}from"./index-CmNHga1A.js";function b(){return b=Object.assign?Object.assign.bind():function(o){for(var y=1;y<arguments.length;y++){var h=arguments[y];for(var l in h)Object.prototype.hasOwnProperty.call(h,l)&&(o[l]=h[l])}return o},b.apply(this,arguments)}var Z=typeof window>"u"?c.useEffect:c.useLayoutEffect,_=function(o){return o},W=function(){},X=function(o){return typeof o=="function"?o():o},T=function(o){return!!o&&(typeof o=="object"||typeof o=="function")&&typeof o.then=="function"},te=function(o,y){return y.every(function(h){return o[h]!==void 0})},re=function(o){var y=c.useReducer(function(){return[]},[])[1],h=c.useRef(!1),l=c.useRef(o),g=c.useRef("untouched");Z(function(){l.current=o}),c.useEffect(function(){return h.current=!0,function(){h.current=!1}},[]);var F=c.useRef(),S=c.useRef(),O=c.useRef(),P=c.useRef(),M=c.useRef(),q=c.useRef(),A=c.useRef(),s=c.useMemo(function(){var j=function(e){return X(l.current[e].initialValue)},u=function(e){var t;return(t=l.current[e].sanitize)!=null?t:_},w=function(e){var t;return(t=l.current[e].validate)!=null?t:W},k=function(e){return O.current[e]},d=function(e,t){var r=F.current[e],n=typeof t=="function"?t({value:r.exposed.value,talkative:r.talkative,validity:r.validity}):t,i=n.talkative&&n.validity.tag!=="unknown"?{validating:n.validity.tag==="validating",valid:n.validity.tag==="valid",error:n.validity.tag==="invalid"?n.validity.error:void 0}:{validating:!1,valid:!w(e),error:void 0};F.current[e]={talkative:n.talkative,validity:n.validity,exposed:b({},i,{value:n.value})}},a=function(e){var t=M.current[e],r=t!==void 0;return r&&(clearTimeout(t),M.current[e]=void 0),r},v=function(e){S.current[e].forEach(function(t){return t()})},E=function(e,t){var r=function(n){var i;return(i=l.current[n].strategy)!=null?i:"onSuccessOrBlur"}(e);t&&!t.some(function(n){return r===n})||d(e,function(n){return b({},n,{talkative:!0})})},H=function(e){d(e,function(t){return b({},t,{validity:{tag:"validating"}})})},J=function(e,t){d(e,function(r){return b({},r,{validity:t!==void 0?{tag:"invalid",error:t}:{tag:"valid"}})})},V=function(e,t){t===void 0&&(t={});var r=F.current[e].exposed;return t.sanitize?b({},r,{value:u(e)(r.value)}):r},N=function(e){var t=a(e),r=u(e),n=w(e),i=r(F.current[e].exposed.value),B=n(i,{getFieldState:V,focusField:C});if(!T(B)){var x=B;return x===void 0&&E(e,["onSuccess","onSuccessOrBlur"]),J(e,x),v(e),x}return t||(H(e),v(e)),B.then(function(m){var L=function(p){var z;return(z=l.current[p].equalityFn)!=null?z:Object.is}(e),f=r(F.current[e].exposed.value);if(L(i,f))return m===void 0&&E(e,["onSuccess","onSuccessOrBlur"]),J(e,m),v(e),m}).catch(function(m){})},C=function(e){var t=P.current[e];t.current&&typeof t.current.focus=="function"&&t.current.focus()},K=function(e,t){t===void 0&&(t={}),a(e),d(e,function(r){return{value:t.feedbackOnly?r.value:j(e),talkative:!1,validity:{tag:"unknown"}}}),v(e)},Q=function(e,t){var r=e[t.findIndex(function(n){return n!==void 0})];r!==void 0&&C(r)},I=function(e,t){T(e)?(y(),e.finally(function(){g.current="submitted",h.current&&y()})):(g.current="submitted",t&&y())};return{getFieldState:V,setFieldValue:function(e,t,r){r===void 0&&(r={}),d(e,function(n){return b({},n,{value:t})}),r.validate&&E(e),N(e)},setFieldError:function(e,t){J(e,t),E(e),v(e)},focusField:C,resetField:K,sanitizeField:function(e){var t=u(e);d(e,function(r){var n=r.talkative,i=r.validity;return{value:t(r.value),talkative:n,validity:i}}),v(e)},validateField:function(e){return k(e)?(E(e),Promise.resolve(N(e))):Promise.resolve(void 0)},listenFields:function(e,t){var r=function(){t(e.reduce(function(n,i){return n[i]=V(i),n},{}))};return e.forEach(function(n){return S.current[n].add(r)}),function(){e.forEach(function(n){return S.current[n].delete(r)})}},resetForm:function(e){e===void 0&&(e={}),Object.keys(l.current).forEach(function(t){return K(t,e)}),e.feedbackOnly||(g.current="untouched"),y()},submitForm:function(e,t,r){if(t===void 0&&(t=W),r===void 0&&(r={}),g.current!=="submitting"){var n=g.current==="editing";g.current="submitting";var i=Object.keys(O.current).filter(function(f){return O.current[f]}),B={},x={},m=[],L=!r.avoidFocusOnError;if(i.forEach(function(f,p){E(f),B[f]=V(f,{sanitize:!0}).value,m[p]=N(f)}),function(f){return f.every(function(p){return!T(p)})}(m))return m.every(function(f){return f===void 0})?I(e(B),n):(L&&Q(i,m),i.forEach(function(f,p){x[f]=m[p]}),I(t(x),n));y(),Promise.all(m.map(function(f){return Promise.resolve(f)})).then(function(f){var p=f;return p.every(function(z){return z===void 0})?I(e(B),n):(L&&Q(i,p),i.forEach(function(z,Y){x[z]=p[Y]}),I(t(x),n))}).finally(function(){g.current="submitted",h.current&&y()})}},setState:d,getOnChange:function(e){return function(t){var r=function(n){var i;return(i=l.current[n].debounceInterval)!=null?i:0}(e);d(e,function(n){return b({},n,{value:t})}),E(e,["onChange"]),a(e),g.current!=="untouched"&&g.current!=="submitted"||(g.current="editing",y()),r!==0?(H(e),v(e),M.current[e]=setTimeout(function(){k(e)?N(e):a(e)},r)):N(e)}},getOnBlur:function(e){return function(){F.current[e].validity.tag==="unknown"||function(t){return F.current[t].talkative}(e)||(E(e,["onBlur","onSuccessOrBlur"]),N(e))}},getFocusNextField:function(e){return function(){var t=Object.keys(l.current),r=t.findIndex(function(i){return i===e});if(r!==void 0){var n=t[r+1];n!==void 0&&C(n)}}}}},[]);if(!F.current){for(var R in F.current={},S.current={},O.current={},P.current={},M.current={},l.current)Object.prototype.hasOwnProperty.call(l.current,R)&&(s.setState(R,{value:X(l.current[R].initialValue),talkative:!1,validity:{tag:"unknown"}}),S.current[R]=new Set,O.current[R]=!1,P.current[R]={current:null},M.current[R]=void 0);var D=function(j){var u=j.name,w=j.children,k=c.useMemo(function(){return{getSnapshot:function(){return F.current[u]},subscribe:function(a){return S.current[u].add(a),function(){S.current[u].delete(a)}}}},[u]),d=k.getSnapshot;return U.useSyncExternalStore(k.subscribe,d,d),c.useEffect(function(){var a=!O.current[u];return a&&(O.current[u]=!0),function(){a&&(O.current[u]=!1)}},[u]),w(b({},s.getFieldState(u),{ref:P.current[u],focusNextField:c.useMemo(function(){return s.getFocusNextField(u)},[u]),onBlur:c.useMemo(function(){return s.getOnBlur(u)},[u]),onChange:c.useMemo(function(){return s.getOnChange(u)},[u])}))};D.displayName="Field",q.current=D;var G=function(j){var u=j.names,w=j.children,k=c.useMemo(function(){return{getSnapshot:function(){return JSON.stringify(u.map(function(a){return F.current[a]}))},subscribe:function(a){return u.forEach(function(v){return S.current[v].add(a)}),function(){u.forEach(function(v){return S.current[v].delete(a)})}}}},[JSON.stringify(u)]),d=k.getSnapshot;return U.useSyncExternalStore(k.subscribe,d,d),w(u.reduce(function(a,v){return a[v]=s.getFieldState(v),a},{}))};G.displayName="FieldsListener",A.current=G}return{formStatus:g.current,Field:q.current,FieldsListener:A.current,getFieldState:s.getFieldState,setFieldValue:s.setFieldValue,setFieldError:s.setFieldError,focusField:s.focusField,resetField:s.resetField,sanitizeField:s.sanitizeField,validateField:s.validateField,listenFields:s.listenFields,resetForm:s.resetForm,submitForm:s.submitForm}};export{re as F,te as y};
//# sourceMappingURL=index-BwbmuQcG.js.map