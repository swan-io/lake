import{r as k,g as He}from"./index-ebeaab24.js";import{G as gt,H as xt,I as Rt,J as Ct,K as bt,M as Lt,N as _t,O as Mt,Q as X,C as Tt,R as wt,U as Ot,W as Pt,X as Dt,E as Ut,Y as kt,u as Ht,S as qt,Z as Ft}from"./Space-a702eced.js";var It=(e,t)=>{var a=e.selectionEnd,o=e.selectionStart,n=t.start,l=t.end;return n!==o||l!==a},Wt=(e,t)=>{if(It(e,t)){var a=t.start,o=t.end;try{e.setSelectionRange(a,o||a)}catch{}}},$t=Object.assign({},gt,xt,Rt,Ct,bt,Lt,_t,Mt,{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0}),Kt=e=>Ft(e,$t);function At(e){return e.isComposing||e.keyCode===229}var ye=null,Le=k.forwardRef((e,t)=>{var a=e.autoCapitalize,o=a===void 0?"sentences":a,n=e.autoComplete,l=e.autoCompleteType,i=e.autoCorrect,s=i===void 0?!0:i,c=e.blurOnSubmit,u=e.clearTextOnFocus,R=e.dir,C=e.editable,P=e.enterKeyHint,b=e.inputMode,m=e.keyboardType,E=e.multiline,h=E===void 0?!1:E,L=e.numberOfLines,w=e.onBlur,_=e.onChange,D=e.onChangeText,O=e.onContentSizeChange,H=e.onFocus,q=e.onKeyPress,Q=e.onLayout,B=e.onMoveShouldSetResponder,j=e.onMoveShouldSetResponderCapture,ee=e.onResponderEnd,F=e.onResponderGrant,te=e.onResponderMove,ue=e.onResponderReject,ie=e.onResponderRelease,re=e.onResponderStart,le=e.onResponderTerminate,$=e.onResponderTerminationRequest,d=e.onScrollShouldSetResponder,M=e.onScrollShouldSetResponderCapture,ne=e.onSelectionChange,se=e.onSelectionChangeShouldSetResponder,de=e.onSelectionChangeShouldSetResponderCapture,V=e.onStartShouldSetResponder,Qe=e.onStartShouldSetResponderCapture,Te=e.onSubmitEditing,je=e.placeholderTextColor,we=e.readOnly,et=we===void 0?!1:we,tt=e.returnKeyType,Oe=e.rows,Pe=e.secureTextEntry,rt=Pe===void 0?!1:Pe,ce=e.selection,nt=e.selectTextOnFocus,De=e.spellCheck,x,ae;if(b!=null)ae=b,b==="email"?x="email":b==="tel"?x="tel":b==="search"?x="search":b==="url"?x="url":x="text";else if(m!=null)switch(m){case"email-address":x="email";break;case"number-pad":case"numeric":ae="numeric";break;case"decimal-pad":ae="decimal";break;case"phone-pad":x="tel";break;case"search":case"web-search":x="search";break;case"url":x="url";break;default:x="text"}rt&&(x="password");var K=k.useRef({height:null,width:null}),G=k.useRef(null),fe=k.useCallback(r=>{if(h&&O&&r!=null){var v=r.scrollHeight,U=r.scrollWidth;(v!==K.current.height||U!==K.current.width)&&(K.current.height=v,K.current.width=U,O({nativeEvent:{contentSize:{height:K.current.height,width:K.current.width}}}))}},[h,O]),at=k.useMemo(()=>r=>{r!=null&&(r.clear=function(){r!=null&&(r.value="")},r.isFocused=function(){return r!=null&&X.currentlyFocusedField()===r},fe(r))},[fe]);function ot(r){X._currentlyFocusedNode=null,w&&(r.nativeEvent.text=r.target.value,w(r))}function ut(r){var v=r.target,U=v.value;r.nativeEvent.text=U,fe(v),_&&_(r),D&&D(U)}function it(r){var v=r.target;H&&(r.nativeEvent.text=v.value,H(r)),v!=null&&(X._currentlyFocusedNode=v,u&&(v.value=""),nt&&(ye!=null&&clearTimeout(ye),ye=setTimeout(()=>{v!=null&&v.select()},0)))}function lt(r){var v=r.target;r.stopPropagation();var U=!h,ve=c??U,pe=r.nativeEvent,St=At(pe);q&&q(r),r.key==="Enter"&&!r.shiftKey&&!St&&!r.isDefaultPrevented()&&((c||!h)&&Te&&(r.preventDefault(),pe.text=r.target.value,Te(r)),ve&&v!=null&&setTimeout(()=>v.blur(),0))}function st(r){if(ne)try{var v=r.target,U=v.selectionStart,ve=v.selectionEnd;r.nativeEvent.selection={start:U,end:ve},r.nativeEvent.text=r.target.value,ne(r)}catch{}}Tt(()=>{var r=G.current;r!=null&&ce!=null&&Wt(r,ce),document.activeElement===r&&(X._currentlyFocusedNode=r)},[G,ce]);var dt=h?"textarea":"input";wt(G,Q),Ot(G,{onMoveShouldSetResponder:B,onMoveShouldSetResponderCapture:j,onResponderEnd:ee,onResponderGrant:F,onResponderMove:te,onResponderReject:ue,onResponderRelease:ie,onResponderStart:re,onResponderTerminate:le,onResponderTerminationRequest:$,onScrollShouldSetResponder:d,onScrollShouldSetResponderCapture:M,onSelectionChangeShouldSetResponder:se,onSelectionChangeShouldSetResponderCapture:de,onStartShouldSetResponder:V,onStartShouldSetResponderCapture:Qe});var ct=Pt(),ft=ct.direction,f=Kt(e);f.autoCapitalize=o,f.autoComplete=n||l||"on",f.autoCorrect=s?"on":"off",f.dir=R!==void 0?R:"auto",f.enterKeyHint=P||tt,f.inputMode=ae,f.onBlur=ot,f.onChange=ut,f.onFocus=it,f.onKeyDown=lt,f.onSelect=st,f.readOnly=et===!0||C===!1,f.rows=h?Oe??L:1,f.spellCheck=De??s,f.style=[{"--placeholderTextColor":je},Ue.textinput$raw,Ue.placeholder,e.style],f.type=h?void 0:x;var vt=Dt(f),pt=Ut(G,vt,at,t);f.ref=pt;var yt=e.lang!=null?kt(e.lang):null,mt=e.dir||yt,Et=mt||ft,ht=Ht(dt,f,{writingDirection:Et});return ht});Le.displayName="TextInput";Le.State=X;var Ue=qt.create({textinput$raw:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"},placeholder:{placeholderTextColor:"var(--placeholderTextColor)"}});const br=Le;var Ee={exports:{}},qe={exports:{}};(function(e){function t(a){return a&&a.__esModule?a:{default:a}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(qe);var z=qe.exports,N={},oe={},he={exports:{}};(function(e,t){t.__esModule=!0,t.default=void 0;var a=!!(typeof window<"u"&&window.document&&window.document.createElement),o=a;t.default=o,e.exports=t.default})(he,he.exports);var _e=he.exports,zt=z.default;oe.__esModule=!0;oe.addEventListener=Qt;var Nt=zt(_e),Bt=()=>{};function Vt(){var e=!1;if(Nt.default)try{var t={};Object.defineProperty(t,"passive",{get(){return e=!0,!1}}),window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e}var Gt=Vt();function Yt(e){return e==null?!1:Gt?e:!!e.capture}function Xt(){return this.cancelBubble}function Zt(){return this.defaultPrevented}function Jt(e){return e.nativeEvent=e,e.persist=Bt,e.isDefaultPrevented=Zt,e.isPropagationStopped=Xt,e}function Qt(e,t,a,o){var n=Yt(o),l=i=>a(Jt(i));return e.addEventListener(t,l,n),function(){e!=null&&e.removeEventListener(t,l,n)}}var jt=z.default;N.__esModule=!0;N.addModalityListener=fr;N.getActiveModality=dr;N.getModality=cr;N.testOnly_resetActiveModality=vr;var p=oe,er=jt(_e),tr=()=>typeof window<"u"&&window.PointerEvent!=null,g="keyboard",y="keyboard",Z,J,A=!1,Se=new Set,W="keyboard",Y="mouse",me="touch",rr="blur",Fe="contextmenu",nr="focus",ar="keydown",Ie="mousedown",We="mousemove",$e="mouseup",Ke="pointerdown",Ae="pointermove",ze="scroll",Ne="selectionchange",Be="touchcancel",Ve="touchmove",Ge="touchstart",or="visibilitychange",ke={passive:!0},S={capture:!0,passive:!0};function Ye(){(Z!=null||J!=null)&&(Z!=null&&(y=Z,Z=null),J!=null&&(g=J,J=null),I())}function ur(){Z=y,J=g,g=W,y=W,I(),A=!1}function ir(){Ye()}function lr(e){e.metaKey||e.altKey||e.ctrlKey||y!==W&&(y=W,g=W,I())}function sr(){document.visibilityState!=="hidden"&&Ye()}function T(e){var t=e.type;if(tr()){if(t===Ke){g!==e.pointerType&&(y=e.pointerType,g=e.pointerType,I());return}if(t===Ae){y!==e.pointerType&&(y=e.pointerType,I());return}}else{if(A||(t===Ie&&g!==Y&&(y=Y,g=Y,I()),t===We&&y!==Y&&(y=Y,I())),t===Ge){A=!0,e.touches&&e.touches.length>1&&(A=!1),g!==me&&(y=me,g=me,I());return}(t===Fe||t===$e||t===Ne||t===ze||t===Be||t===Ve)&&(A=!1)}}er.default&&((0,p.addEventListener)(window,rr,ur,ke),(0,p.addEventListener)(window,nr,ir,ke),(0,p.addEventListener)(document,ar,lr,S),(0,p.addEventListener)(document,or,sr,S),(0,p.addEventListener)(document,Ke,T,S),(0,p.addEventListener)(document,Ae,T,S),(0,p.addEventListener)(document,Fe,T,S),(0,p.addEventListener)(document,Ie,T,S),(0,p.addEventListener)(document,We,T,S),(0,p.addEventListener)(document,$e,T,S),(0,p.addEventListener)(document,Be,T,S),(0,p.addEventListener)(document,Ve,T,S),(0,p.addEventListener)(document,Ge,T,S),(0,p.addEventListener)(document,Ne,T,S),(0,p.addEventListener)(document,ze,T,S));function I(){var e={activeModality:g,modality:y};Se.forEach(t=>{t(e)})}function dr(){return g}function cr(){return y}function fr(e){return Se.add(e),()=>{Se.delete(e)}}function vr(){A=!1,g=W,y=W}var ge={exports:{}},xe={exports:{}};(function(e,t){var a=z.default;t.__esModule=!0,t.default=void 0;var o=k,n=a(_e),l=n.default?o.useLayoutEffect:o.useEffect,i=l;t.default=i,e.exports=t.default})(xe,xe.exports);var Xe=xe.exports,Re={exports:{}},Ze={exports:{}},Je={exports:{}};(function(e){function t(a){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},e.exports.__esModule=!0,e.exports.default=e.exports,t(a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Je);var pr=Je.exports;(function(e){var t=pr.default;function a(n){if(typeof WeakMap!="function")return null;var l=new WeakMap,i=new WeakMap;return(a=function(c){return c?i:l})(n)}function o(n,l){if(!l&&n&&n.__esModule)return n;if(n===null||t(n)!=="object"&&typeof n!="function")return{default:n};var i=a(l);if(i&&i.has(n))return i.get(n);var s={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in n)if(u!=="default"&&Object.prototype.hasOwnProperty.call(n,u)){var R=c?Object.getOwnPropertyDescriptor(n,u):null;R&&(R.get||R.set)?Object.defineProperty(s,u,R):s[u]=n[u]}return s.default=n,i&&i.set(n,s),s}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports})(Ze);var Me=Ze.exports;(function(e,t){var a=Me.default;t.__esModule=!0,t.default=l;var o=a(k),n=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():Object.freeze({});function l(i){var s=o.useRef(n);return s.current===n&&(s.current=i()),s.current}e.exports=t.default})(Re,Re.exports);var yr=Re.exports;(function(e,t){var a=z.default;t.__esModule=!0,t.default=i;var o=oe,n=a(Xe),l=a(yr);function i(s,c){var u=(0,l.default)(()=>new Map),R=(0,l.default)(()=>(C,P)=>{var b=u.get(C);b!=null&&b(),P==null&&(u.delete(C),P=()=>{});var m=(0,o.addEventListener)(C,s,P,c);return u.set(C,m),m});return(0,n.default)(()=>()=>{u.forEach(C=>{C()}),u.clear()},[u]),R}e.exports=t.default})(ge,ge.exports);var mr=ge.exports;(function(e,t){var a=z.default;t.__esModule=!0,t.default=b;var o=N,n=a(mr),l=a(Xe),i={},s={passive:!0},c="react-gui:hover:lock",u="react-gui:hover:unlock",R=()=>typeof window<"u"&&window.PointerEvent!=null;function C(m,E,h){var L=document.createEvent("CustomEvent"),w=h||i,_=w.bubbles,D=_===void 0?!0:_,O=w.cancelable,H=O===void 0?!0:O,q=w.detail;L.initCustomEvent(E,D,H,q),m.dispatchEvent(L)}function P(m){var E=m.pointerType;return E??(0,o.getModality)()}function b(m,E){var h=E.contain,L=E.disabled,w=E.onHoverStart,_=E.onHoverChange,D=E.onHoverUpdate,O=E.onHoverEnd,H=R(),q=(0,n.default)(H?"pointermove":"mousemove",s),Q=(0,n.default)(H?"pointerenter":"mouseenter",s),B=(0,n.default)(H?"pointerleave":"mouseleave",s),j=(0,n.default)(c,s),ee=(0,n.default)(u,s);(0,l.default)(()=>{var F=m.current;if(F!==null){var te=function(d){O!=null&&O(d),_!=null&&_(!1),q(F,null),B(F,null)},ue=function(d){var M=m.current;M!=null&&P(d)!=="touch"&&(h&&C(M,u),te(d))},ie=function(d){P(d)!=="touch"&&D!=null&&(d.x==null&&(d.x=d.clientX),d.y==null&&(d.y=d.clientY),D(d))},re=function(d){w!=null&&w(d),_!=null&&_(!0),D!=null&&q(F,L?null:ie),B(F,L?null:ue)},le=function(d){var M=m.current;if(M!=null&&P(d)!=="touch"){h&&C(M,c),re(d);var ne=function(V){V.target!==M&&te(d)},se=function(V){V.target!==M&&re(d)};j(M,L?null:ne),ee(M,L?null:se)}};Q(F,L?null:le)}},[Q,q,B,j,ee,h,L,w,_,D,O,m])}e.exports=t.default})(Ee,Ee.exports);var Er=Ee.exports;const hr=He(Er),Lr=hr;var Ce={exports:{}},be={exports:{}};(function(e,t){var a=Me.default;t.__esModule=!0,t.default=o,a(k);function o(){for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return function(c){l.forEach(u=>{if(u!=null){if(typeof u=="function"){u(c);return}if(typeof u=="object"){u.current=c;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(u))}})}}e.exports=t.default})(be,be.exports);var Sr=be.exports;(function(e,t){var a=z.default,o=Me.default;t.__esModule=!0,t.default=i;var n=o(k),l=a(Sr);function i(){for(var s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];return n.useMemo(()=>(0,l.default)(...c),[...c])}e.exports=t.default})(Ce,Ce.exports);var gr=Ce.exports;const xr=He(gr),_r=xr;export{br as T,_r as a,z as i,Lr as u};
//# sourceMappingURL=useMergeRefs-af5bcba9.js.map
