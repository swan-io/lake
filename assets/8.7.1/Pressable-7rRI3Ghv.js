import{a1 as pe,a2 as Ue,a3 as We,a4 as Xe,a5 as Ze,a6 as Je,a7 as Qe,a8 as et,a9 as tt,Z as rt,aa as nt,ab as at,ac as st,ad as ot,a0 as it,ae as lt,p as ut,s as De,af as ct,ag as Ce,ah as be,D as dt,j as ft,$ as Et,V as ht,T as Rt}from"./ScrollView-D_yl_r2G.js";import{r as h}from"./index-uCp2LrAq.js";import{g as Oe}from"./_commonjsHelpers-BosuxZz1.js";var X={_currentlyFocusedNode:null,currentlyFocusedField(){return document.activeElement!==this._currentlyFocusedNode&&(this._currentlyFocusedNode=null),this._currentlyFocusedNode},focusTextInput(e){e!==null&&(this._currentlyFocusedNode=e,document.activeElement!==e&&pe.focus(e))},blurTextInput(e){e!==null&&(this._currentlyFocusedNode=null,document.activeElement===e&&pe.blur(e))}},vt=(e,u)=>{var v=e.selectionEnd,E=e.selectionStart,P=u.start,o=u.end;return P!==E||o!==v},me=(e,u)=>{if(vt(e,u)){var v=u.start,E=u.end;try{e.setSelectionRange(v,E||v)}catch{}}},St=Object.assign({},Ue,We,Xe,Ze,Je,Qe,et,tt,{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0}),_t=e=>ct(e,St);function Pt(e){return e.isComposing||e.keyCode===229}var ie=null,he=h.forwardRef((e,u)=>{var v=e.autoCapitalize,E=v===void 0?"sentences":v,P=e.autoComplete,o=e.autoCompleteType,S=e.autoCorrect,g=S===void 0?!0:S,R=e.blurOnSubmit,c=e.caretHidden,b=e.clearTextOnFocus,O=e.dir,M=e.editable,K=e.enterKeyHint,D=e.inputMode,x=e.keyboardType,N=e.multiline,m=N===void 0?!1:N,Y=e.numberOfLines,w=e.onBlur,$=e.onChange,k=e.onChangeText,H=e.onContentSizeChange,F=e.onFocus,V=e.onKeyPress,i=e.onLayout,n=e.onMoveShouldSetResponder,f=e.onMoveShouldSetResponderCapture,d=e.onResponderEnd,t=e.onResponderGrant,a=e.onResponderMove,s=e.onResponderReject,l=e.onResponderRelease,p=e.onResponderStart,A=e.onResponderTerminate,L=e.onResponderTerminationRequest,G=e.onScrollShouldSetResponder,j=e.onScrollShouldSetResponderCapture,U=e.onSelectionChange,Q=e.onSelectionChangeShouldSetResponder,ee=e.onSelectionChangeShouldSetResponderCapture,te=e.onStartShouldSetResponder,re=e.onStartShouldSetResponderCapture,q=e.onSubmitEditing,y=e.placeholderTextColor,ve=e.readOnly,xe=ve===void 0?!1:ve,Ne=e.returnKeyType,Se=e.rows,_e=e.secureTextEntry,Z=_e===void 0?!1:_e,ne=e.selection,Ae=e.selectTextOnFocus,Le=e.showSoftInputOnFocus,Pe=e.spellCheck,C,J;if(D!=null)J=D,D==="email"?C="email":D==="tel"?C="tel":D==="search"?C="search":D==="url"?C="url":C="text";else if(x!=null)switch(x){case"email-address":C="email";break;case"number-pad":case"numeric":J="numeric";break;case"decimal-pad":J="decimal";break;case"phone-pad":C="tel";break;case"search":case"web-search":C="search";break;case"url":C="url";break;default:C="text"}Z&&(C="password");var B=h.useRef({height:null,width:null}),z=h.useRef(null),ae=h.useRef(null),ge=h.useRef(!1);h.useEffect(()=>{z.current&&ae.current&&me(z.current,ae.current),ge.current=Z},[Z]);var se=h.useCallback(r=>{if(m&&H&&r!=null){var T=r.scrollHeight,I=r.scrollWidth;(T!==B.current.height||I!==B.current.width)&&(B.current.height=T,B.current.width=I,H({nativeEvent:{contentSize:{height:B.current.height,width:B.current.width}}}))}},[m,H]),Me=h.useMemo(()=>r=>{r!=null&&(r.clear=function(){r!=null&&(r.value="")},r.isFocused=function(){return r!=null&&X.currentlyFocusedField()===r},se(r))},[se]);function Ie(r){X._currentlyFocusedNode=null,w&&(r.nativeEvent.text=r.target.value,w(r))}function we(r){var T=r.target,I=T.value;r.nativeEvent.text=I,se(T),$&&$(r),k&&k(I)}function ke(r){var T=r.target;F&&(r.nativeEvent.text=T.value,F(r)),T!=null&&(X._currentlyFocusedNode=T,b&&(T.value=""),Ae&&(ie!=null&&clearTimeout(ie),ie=setTimeout(()=>{T!=null&&T.select()},0)))}function He(r){var T=r.target;r.stopPropagation();var I=!m,oe=R??I,W=r.nativeEvent,Te=Pt(W);V&&V(r),r.key==="Enter"&&!r.shiftKey&&!Te&&!r.isDefaultPrevented()&&((R||!m)&&q&&(r.preventDefault(),W.text=r.target.value,q(r)),oe&&T!=null&&setTimeout(()=>T.blur(),0))}function Fe(r){try{var T=r.target,I=T.selectionStart,oe=T.selectionEnd,W={start:I,end:oe};U&&(r.nativeEvent.selection=W,r.nativeEvent.text=r.target.value,U(r)),ge.current===Z&&(ae.current=W)}catch{}}rt(()=>{var r=z.current;r!=null&&ne!=null&&me(r,ne),document.activeElement===r&&(X._currentlyFocusedNode=r)},[z,ne]);var Ge=m?"textarea":"input";nt(z,i),at(z,{onMoveShouldSetResponder:n,onMoveShouldSetResponderCapture:f,onResponderEnd:d,onResponderGrant:t,onResponderMove:a,onResponderReject:s,onResponderRelease:l,onResponderStart:p,onResponderTerminate:A,onResponderTerminationRequest:L,onScrollShouldSetResponder:G,onScrollShouldSetResponderCapture:j,onSelectionChangeShouldSetResponder:Q,onSelectionChangeShouldSetResponderCapture:ee,onStartShouldSetResponder:te,onStartShouldSetResponderCapture:re});var $e=st(),Ve=$e.direction,_=_t(e);_.autoCapitalize=E,_.autoComplete=P||o||"on",_.autoCorrect=g?"on":"off",_.dir=O!==void 0?O:"auto",_.enterKeyHint=K||Ne,_.inputMode=J,_.onBlur=Ie,_.onChange=we,_.onFocus=ke,_.onKeyDown=He,_.onSelect=Fe,_.readOnly=xe===!0||M===!1,_.rows=m?Se??Y:1,_.spellCheck=Pe??g,_.style=[{"--placeholderTextColor":y},le.textinput$raw,le.placeholder,e.style,c&&le.caretHidden],_.type=m?void 0:C,_.virtualkeyboardpolicy=Le===!1?"manual":"auto";var ze=ot(_),Ke=it(z,ze,Me,u);_.ref=Ke;var Ye=e.lang!=null?lt(e.lang):null,je=e.dir||Ye,qe=je||Ve,Be=ut(Ge,_,{writingDirection:qe});return Be});he.displayName="TextInput";he.State=X;var le=De.create({textinput$raw:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"},placeholder:{placeholderTextColor:"var(--placeholderTextColor)"},caretHidden:{caretColor:"transparent"}});const ue=e=>{const[u,v]=h.useState(!1);return[u||e,v]};var ce={exports:{}},de={exports:{}};(function(e,u){var v=Ce.default;u.__esModule=!0,u.default=E,v(h);function E(){for(var P=arguments.length,o=new Array(P),S=0;S<P;S++)o[S]=arguments[S];return function(R){o.forEach(c=>{if(c!=null){if(typeof c=="function"){c(R);return}if(typeof c=="object"){c.current=R;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(c))}})}}e.exports=u.default})(de,de.exports);var gt=de.exports;(function(e,u){var v=be.default,E=Ce.default;u.__esModule=!0,u.default=S;var P=E(h),o=v(gt);function S(){for(var g=arguments.length,R=new Array(g),c=0;c<g;c++)R[c]=arguments[c];return P.useMemo(()=>(0,o.default)(...R),[...R])}e.exports=u.default})(ce,ce.exports);var Tt=ce.exports;const pt=Oe(Tt),mt=pt;var fe={exports:{}},Ee={exports:{}};(function(e,u){u.__esModule=!0,u.default=void 0;var v="DELAY",E="ERROR",P="LONG_PRESS_DETECTED",o="NOT_RESPONDER",S="RESPONDER_ACTIVE_LONG_PRESS_START",g="RESPONDER_ACTIVE_PRESS_START",R="RESPONDER_INACTIVE_PRESS_START",c="RESPONDER_GRANT",b="RESPONDER_RELEASE",O="RESPONDER_TERMINATED",M=Object.freeze({NOT_RESPONDER:{DELAY:E,RESPONDER_GRANT:R,RESPONDER_RELEASE:E,RESPONDER_TERMINATED:E,LONG_PRESS_DETECTED:E},RESPONDER_INACTIVE_PRESS_START:{DELAY:g,RESPONDER_GRANT:E,RESPONDER_RELEASE:o,RESPONDER_TERMINATED:o,LONG_PRESS_DETECTED:E},RESPONDER_ACTIVE_PRESS_START:{DELAY:E,RESPONDER_GRANT:E,RESPONDER_RELEASE:o,RESPONDER_TERMINATED:o,LONG_PRESS_DETECTED:S},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:E,RESPONDER_GRANT:E,RESPONDER_RELEASE:o,RESPONDER_TERMINATED:o,LONG_PRESS_DETECTED:S},ERROR:{DELAY:o,RESPONDER_GRANT:R,RESPONDER_RELEASE:o,RESPONDER_TERMINATED:o,LONG_PRESS_DETECTED:o}}),K=i=>i.getAttribute("role"),D=i=>i.tagName.toLowerCase(),x=i=>i===g||i===S,N=i=>K(i)==="button",m=i=>i===R||i===g||i===S,Y=i=>i===O||i===b,w=i=>{var n=i.key,f=i.target,d=n===" "||n==="Spacebar",t=D(f)==="button"||N(f);return n==="Enter"||d&&t},$=450,k=50;class H{constructor(n){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=o,this._responderElement=null,this.configure(n)}configure(n){this._config=n}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var n=(t,a)=>{t.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=o,this._isPointerTouch=t.nativeEvent.type==="touchstart",this._receiveSignal(c,t);var s=F(this._config.delayPressStart,0,k);a!==!1&&s>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(v,t)},s):this._receiveSignal(v,t);var l=F(this._config.delayLongPress,10,$);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(t)},l+s)},f=t=>{this._receiveSignal(b,t)},d=t=>{var a=this._config.onPress,s=t.target;if(this._touchState!==o&&w(t)){f(t),document.removeEventListener("keyup",d);var l=s.getAttribute("role"),p=D(s),A=l==="link"||p==="a"||p==="button"||p==="input"||p==="select"||p==="textarea",L=this._responderElement===s;a!=null&&!A&&L&&a(t),this._responderElement=null}};return{onStartShouldSetResponder:t=>{var a=this._config.disabled;return a&&N(t.currentTarget)&&t.stopPropagation(),a==null?!0:!a},onKeyDown:t=>{var a=this._config.disabled,s=t.key,l=t.target;if(!a&&w(t)){this._touchState===o&&(n(t,!1),this._responderElement=l,document.addEventListener("keyup",d));var p=s===" "||s==="Spacebar",A=K(l),L=A==="button"||A==="menuitem";p&&L&&D(l)!=="button"&&t.preventDefault(),t.stopPropagation()}},onResponderGrant:t=>n(t),onResponderMove:t=>{this._config.onPressMove!=null&&this._config.onPressMove(t);var a=V(t);if(this._touchActivatePosition!=null){var s=this._touchActivatePosition.pageX-a.pageX,l=this._touchActivatePosition.pageY-a.pageY;Math.hypot(s,l)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:t=>f(t),onResponderTerminate:t=>{t.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(O,t)},onResponderTerminationRequest:t=>{var a=this._config,s=a.cancelable,l=a.disabled,p=a.onLongPress;return!l&&p!=null&&this._isPointerTouch&&t.nativeEvent.type==="contextmenu"?!1:s??!0},onClick:t=>{var a=this._config,s=a.disabled,l=a.onPress;s?N(t.currentTarget)&&t.stopPropagation():(t.stopPropagation(),this._longPressDispatched||this._selectionTerminated?t.preventDefault():l!=null&&t.altKey===!1&&l(t))},onContextMenu:t=>{var a=this._config,s=a.disabled,l=a.onLongPress;s?N(t.currentTarget)&&t.stopPropagation():l!=null&&this._isPointerTouch&&!t.defaultPrevented&&(t.preventDefault(),t.stopPropagation())}}}_receiveSignal(n,f){var d=this._touchState,t=null;M[d]!=null&&(t=M[d][n]),!(this._touchState===o&&n===b)&&(t==null||t===E?console.error("PressResponder: Invalid signal "+n+" for state "+d+" on responder"):d!==t&&(this._performTransitionSideEffects(d,t,n,f),this._touchState=t))}_performTransitionSideEffects(n,f,d,t){if(Y(d)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),m(n)&&d===P){var a=this._config.onLongPress;a!=null&&t.nativeEvent.key==null&&(a(t),this._longPressDispatched=!0)}var s=x(n),l=x(f);if(!s&&l?this._activate(t):s&&!l&&this._deactivate(t),m(n)&&d===b){var p=this._config,A=p.onLongPress,L=p.onPress;if(L!=null){var G=A!=null&&n===S;G||!l&&!s&&(this._activate(t),this._deactivate(t))}}this._cancelPressDelayTimeout()}_activate(n){var f=this._config,d=f.onPressChange,t=f.onPressStart,a=V(n);this._touchActivatePosition={pageX:a.pageX,pageY:a.pageY},t!=null&&t(n),d!=null&&d(!0)}_deactivate(n){var f=this._config,d=f.onPressChange,t=f.onPressEnd;function a(){t!=null&&t(n),d!=null&&d(!1)}var s=F(this._config.delayPressEnd);s>0?this._pressOutDelayTimeout=setTimeout(()=>{a()},s):a()}_handleLongPress(n){(this._touchState===g||this._touchState===S)&&this._receiveSignal(P,n)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}u.default=H;function F(i,n,f){return n===void 0&&(n=0),f===void 0&&(f=0),Math.max(n,i??f)}function V(i){var n=i.nativeEvent,f=n.changedTouches,d=n.touches;return d!=null&&d.length>0?d[0]:f!=null&&f.length>0?f[0]:i.nativeEvent}e.exports=u.default})(Ee,Ee.exports);var yt=Ee.exports;(function(e,u){var v=be.default;u.__esModule=!0,u.default=o;var E=v(yt),P=h;function o(S,g){var R=(0,P.useRef)(null);R.current==null&&(R.current=new E.default(g));var c=R.current;return(0,P.useEffect)(()=>{c.configure(g)},[g,c]),(0,P.useEffect)(()=>()=>{c.reset()},[c]),(0,P.useDebugValue)(g),c.getEventHandlers()}e.exports=u.default})(fe,fe.exports);var Dt=fe.exports;const Ct=Oe(Dt),bt=Ct,ye=De.create({active:{cursor:"pointer",touchAction:"manipulation"},disabled:{cursor:"not-allowed"}}),Re=(e,u={})=>{const{applyPressStyle:v=!0}=u;return h.forwardRef((E,P)=>{const{children:o,delayLongPress:S,delayPressIn:g,delayPressOut:R,disabled:c=!1,onBlur:b,onContextMenu:O,onFocus:M,onHoverIn:K,onHoverOut:D,onKeyDown:x,onLongPress:N,onPress:m,onPressIn:Y,onPressMove:w,onPressOut:$,style:k,tabIndex:H,testOnly_hovered:F,testOnly_pressed:V,...i}=E,[n,f]=ue(F===!0),[d,t]=ue(!1),[a,s]=ue(V===!0),l=h.useRef(null),p=mt(P,l),A=h.useMemo(()=>({delayLongPress:S,delayPressStart:g,delayPressEnd:R,disabled:c,onLongPress:N,onPress:m,onPressChange:s,onPressStart:Y,onPressMove:w,onPressEnd:$}),[S,g,R,c,N,m,Y,w,$,s]),L=bt(l,A),{onContextMenu:G,onKeyDown:j}=L;dt(l,{disabled:c,onHoverChange:f,onHoverStart:K,onHoverEnd:D});const U={hovered:n,focused:d,pressed:a},Q=h.useCallback(y=>{y.nativeEvent.target===l.current&&(t(!1),b==null||b(y))},[l,t,b]),ee=h.useCallback(y=>{y.nativeEvent.target===l.current&&(t(!0),M==null||M(y))},[l,t,M]),te=h.useCallback(y=>{G==null||G(y),O==null||O(y)},[O,G]),re=h.useCallback(y=>{j==null||j(y),x==null||x(y)},[x,j]);let q;return H!==void 0?q=H:q=c?-1:0,ft.jsx(e,{...i,...L,"aria-disabled":c,onBlur:Q,onContextmenu:te,onFocus:ee,onKeyDown:re,ref:p,style:[Et({disabled:c,applyPressStyle:v}).with({disabled:!1,applyPressStyle:!0},()=>ye.active).with({disabled:!0},()=>ye.disabled).otherwise(()=>null),typeof k=="function"?k(U):k],tabIndex:q,children:typeof o=="function"?o(U):o})})},Mt=h.memo(Re(ht,{applyPressStyle:!0})),Ot=h.memo(Re(Rt,{applyPressStyle:!0})),xt=h.memo(Re(he,{applyPressStyle:!1}));Ot.displayName="PressableText";xt.displayName="PressableTextInput";export{Mt as P,he as T,Ot as a,mt as u};
//# sourceMappingURL=Pressable-7rRI3Ghv.js.map
