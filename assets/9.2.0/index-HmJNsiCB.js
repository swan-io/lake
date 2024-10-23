import{_ as We}from"./extends-CF3RwP-h.js";import{Z as ye,$ as ue,a0 as me,s as Xe,_ as je,a1 as ze,V as qe}from"./ScrollView-C9Sl8l-9.js";import{r as d}from"./index-Cs7sjTYM.js";var ce="DELAY",S="ERROR",ve="LONG_PRESS_DETECTED",E="NOT_RESPONDER",A="RESPONDER_ACTIVE_LONG_PRESS_START",X="RESPONDER_ACTIVE_PRESS_START",se="RESPONDER_INACTIVE_PRESS_START",Ze="RESPONDER_GRANT",$="RESPONDER_RELEASE",ge="RESPONDER_TERMINATED",Ee=Object.freeze({NOT_RESPONDER:{DELAY:S,RESPONDER_GRANT:se,RESPONDER_RELEASE:S,RESPONDER_TERMINATED:S,LONG_PRESS_DETECTED:S},RESPONDER_INACTIVE_PRESS_START:{DELAY:X,RESPONDER_GRANT:S,RESPONDER_RELEASE:E,RESPONDER_TERMINATED:E,LONG_PRESS_DETECTED:S},RESPONDER_ACTIVE_PRESS_START:{DELAY:S,RESPONDER_GRANT:S,RESPONDER_RELEASE:E,RESPONDER_TERMINATED:E,LONG_PRESS_DETECTED:A},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:S,RESPONDER_GRANT:S,RESPONDER_RELEASE:E,RESPONDER_TERMINATED:E,LONG_PRESS_DETECTED:A},ERROR:{DELAY:E,RESPONDER_GRANT:se,RESPONDER_RELEASE:E,RESPONDER_TERMINATED:E,LONG_PRESS_DETECTED:E}}),pe=e=>e.getAttribute("role"),ie=e=>e.tagName.toLowerCase(),de=e=>e===X||e===A,W=e=>pe(e)==="button",fe=e=>e===se||e===X||e===A,Je=e=>e===ge||e===$,_e=e=>{var n=e.key,i=e.target,s=n===" "||n==="Spacebar",t=ie(i)==="button"||W(i);return n==="Enter"||s&&t},Qe=450,et=50;class tt{constructor(n){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=E,this._responderElement=null,this.configure(n)}configure(n){this._config=n}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var n=(t,r)=>{t.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=E,this._isPointerTouch=t.nativeEvent.type==="touchstart",this._receiveSignal(Ze,t);var a=ee(this._config.delayPressStart,0,et);r!==!1&&a>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(ce,t)},a):this._receiveSignal(ce,t);var o=ee(this._config.delayLongPress,10,Qe);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(t)},o+a)},i=t=>{this._receiveSignal($,t)},s=t=>{var r=this._config.onPress,a=t.target;if(this._touchState!==E&&_e(t)){i(t),document.removeEventListener("keyup",s);var o=a.getAttribute("role"),l=ie(a),c=o==="link"||l==="a"||l==="button"||l==="input"||l==="select"||l==="textarea",D=this._responderElement===a;r!=null&&!c&&D&&r(t),this._responderElement=null}};return{onStartShouldSetResponder:t=>{var r=this._config.disabled;return r&&W(t.currentTarget)&&t.stopPropagation(),r==null?!0:!r},onKeyDown:t=>{var r=this._config.disabled,a=t.key,o=t.target;if(!r&&_e(t)){this._touchState===E&&(n(t,!1),this._responderElement=o,document.addEventListener("keyup",s));var l=a===" "||a==="Spacebar",c=pe(o),D=c==="button"||c==="menuitem";l&&D&&ie(o)!=="button"&&t.preventDefault(),t.stopPropagation()}},onResponderGrant:t=>n(t),onResponderMove:t=>{this._config.onPressMove!=null&&this._config.onPressMove(t);var r=he(t);if(this._touchActivatePosition!=null){var a=this._touchActivatePosition.pageX-r.pageX,o=this._touchActivatePosition.pageY-r.pageY;Math.hypot(a,o)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:t=>i(t),onResponderTerminate:t=>{t.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(ge,t)},onResponderTerminationRequest:t=>{var r=this._config,a=r.cancelable,o=r.disabled,l=r.onLongPress;return!o&&l!=null&&this._isPointerTouch&&t.nativeEvent.type==="contextmenu"?!1:a??!0},onClick:t=>{var r=this._config,a=r.disabled,o=r.onPress;a?W(t.currentTarget)&&t.stopPropagation():(t.stopPropagation(),this._longPressDispatched||this._selectionTerminated?t.preventDefault():o!=null&&t.altKey===!1&&o(t))},onContextMenu:t=>{var r=this._config,a=r.disabled,o=r.onLongPress;a?W(t.currentTarget)&&t.stopPropagation():o!=null&&this._isPointerTouch&&!t.defaultPrevented&&(t.preventDefault(),t.stopPropagation())}}}_receiveSignal(n,i){var s=this._touchState,t=null;Ee[s]!=null&&(t=Ee[s][n]),!(this._touchState===E&&n===$)&&(t==null||t===S?console.error("PressResponder: Invalid signal "+n+" for state "+s+" on responder"):s!==t&&(this._performTransitionSideEffects(s,t,n,i),this._touchState=t))}_performTransitionSideEffects(n,i,s,t){if(Je(s)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),fe(n)&&s===ve){var r=this._config.onLongPress;r!=null&&t.nativeEvent.key==null&&(r(t),this._longPressDispatched=!0)}var a=de(n),o=de(i);if(!a&&o?this._activate(t):a&&!o&&this._deactivate(t),fe(n)&&s===$){var l=this._config,c=l.onLongPress,D=l.onPress;if(D!=null){var g=c!=null&&n===A;g||!o&&!a&&(this._activate(t),this._deactivate(t))}}this._cancelPressDelayTimeout()}_activate(n){var i=this._config,s=i.onPressChange,t=i.onPressStart,r=he(n);this._touchActivatePosition={pageX:r.pageX,pageY:r.pageY},t!=null&&t(n),s!=null&&s(!0)}_deactivate(n){var i=this._config,s=i.onPressChange,t=i.onPressEnd;function r(){t!=null&&t(n),s!=null&&s(!1)}var a=ee(this._config.delayPressEnd);a>0?this._pressOutDelayTimeout=setTimeout(()=>{r()},a):r()}_handleLongPress(n){(this._touchState===X||this._touchState===A)&&this._receiveSignal(ve,n)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}function ee(e,n,i){return n===void 0&&(n=0),i===void 0&&(i=0),Math.max(n,e??i)}function he(e){var n=e.nativeEvent,i=n.changedTouches,s=n.touches;return s!=null&&s.length>0?s[0]:i!=null&&i.length>0?i[0]:e.nativeEvent}function nt(e,n){var i=d.useRef(null);i.current==null&&(i.current=new tt(n));var s=i.current;return d.useEffect(()=>{s.configure(n)},[n,s]),d.useEffect(()=>()=>{s.reset()},[s]),d.useDebugValue(n),s.getEventHandlers()}var rt=()=>{};function st(){var e=!1;if(ye)try{var n={};Object.defineProperty(n,"passive",{get(){return e=!0,!1}}),window.addEventListener("test",null,n),window.removeEventListener("test",null,n)}catch{}return e}var it=st();function at(e){return e==null?!1:it?e:!!e.capture}function ot(){return this.cancelBubble}function lt(){return this.defaultPrevented}function ut(e){return e.nativeEvent=e,e.persist=rt,e.isDefaultPrevented=lt,e.isPropagationStopped=ot,e}function v(e,n,i,s){var t=at(s),r=a=>i(ut(a));return e.addEventListener(n,r,t),function(){e!=null&&e.removeEventListener(n,r,t)}}var ct=()=>typeof window<"u"&&window.PointerEvent!=null,T="keyboard",f="keyboard",x,k,G=!1,vt=new Set,U="keyboard",I="mouse",te="touch",Et="blur",Oe="contextmenu",dt="focus",ft="keydown",Le="mousedown",Ne="mousemove",be="mouseup",Ae="pointerdown",Ce="pointermove",Me="scroll",Ie="selectionchange",He="touchcancel",we="touchmove",xe="touchstart",_t="visibilitychange",Pe={passive:!0},_={capture:!0,passive:!0};function ke(){(x!=null||k!=null)&&(x!=null&&(f=x,x=null),k!=null&&(T=k,k=null),m())}function ht(){x=f,k=T,T=U,f=U,m(),G=!1}function Pt(){ke()}function Rt(e){e.metaKey||e.altKey||e.ctrlKey||f!==U&&(f=U,T=U,m())}function St(){document.visibilityState!=="hidden"&&ke()}function R(e){var n=e.type;if(ct()){if(n===Ae){T!==e.pointerType&&(f=e.pointerType,T=e.pointerType,m());return}if(n===Ce){f!==e.pointerType&&(f=e.pointerType,m());return}}else{if(G||(n===Le&&T!==I&&(f=I,T=I,m()),n===Ne&&f!==I&&(f=I,m())),n===xe){G=!0,e.touches&&e.touches.length>1&&(G=!1),T!==te&&(f=te,T=te,m());return}(n===Oe||n===be||n===Ie||n===Me||n===He||n===we)&&(G=!1)}}ye&&(v(window,Et,ht,Pe),v(window,dt,Pt,Pe),v(document,ft,Rt,_),v(document,_t,St,_),v(document,Ae,R,_),v(document,Ce,R,_),v(document,Oe,R,_),v(document,Le,R,_),v(document,Ne,R,_),v(document,be,R,_),v(document,He,R,_),v(document,we,R,_),v(document,xe,R,_),v(document,Ie,R,_),v(document,Me,R,_));function m(){var e={activeModality:T,modality:f};vt.forEach(n=>{n(e)})}function Tt(){return f}function H(e,n){var i=ue(()=>new Map),s=ue(()=>(t,r)=>{var a=i.get(t);a!=null&&a(),r==null&&(i.delete(t),r=()=>{});var o=v(t,e,r,n);return i.set(t,o),o});return me(()=>()=>{i.forEach(t=>{t()}),i.clear()},[i]),s}var Dt={},w={passive:!0},Re="react-gui:hover:lock",Se="react-gui:hover:unlock",yt=()=>typeof window<"u"&&window.PointerEvent!=null;function Te(e,n,i){var s=document.createEvent("CustomEvent"),t=Dt,r=t.bubbles,a=r===void 0?!0:r,o=t.cancelable,l=o===void 0?!0:o,c=t.detail;s.initCustomEvent(n,a,l,c),e.dispatchEvent(s)}function ne(e){var n=e.pointerType;return n??Tt()}function mt(e,n){var i=n.contain,s=n.disabled,t=n.onHoverStart,r=n.onHoverChange,a=n.onHoverUpdate,o=n.onHoverEnd,l=yt(),c=H(l?"pointermove":"mousemove",w),D=H(l?"pointerenter":"mouseenter",w),g=H(l?"pointerleave":"mouseleave",w),O=H(Re,w),C=H(Se,w);me(()=>{var y=e.current;if(y!==null){var M=function(u){o!=null&&o(u),r!=null&&r(!1),c(y,null),g(y,null)},V=function(u){var h=e.current;h!=null&&ne(u)!=="touch"&&(i&&Te(h,Se),M(u))},Y=function(u){ne(u)!=="touch"&&a!=null&&(u.x==null&&(u.x=u.clientX),u.y==null&&(u.y=u.clientY),a(u))},L=function(u){t!=null&&t(u),r!=null&&r(!0),a!=null&&c(y,s?null:Y),g(y,s?null:V)},F=function(u){var h=e.current;if(h!=null&&ne(u)!=="touch"){i&&Te(h,Re),L(u);var K=function(b){b.target!==h&&M(u)},j=function(b){b.target!==h&&L(u)};O(h,s?null:K),C(h,s?null:j)}};D(y,s?null:F)}},[D,c,g,O,C,i,s,t,r,a,o,e])}var gt=["children","delayLongPress","delayPressIn","delayPressOut","disabled","onBlur","onContextMenu","onFocus","onHoverIn","onHoverOut","onKeyDown","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","tabIndex","testOnly_hovered","testOnly_pressed"];function pt(e,n){var i=e.children,s=e.delayLongPress,t=e.delayPressIn,r=e.delayPressOut,a=e.disabled,o=e.onBlur,l=e.onContextMenu,c=e.onFocus,D=e.onHoverIn,g=e.onHoverOut,O=e.onKeyDown,C=e.onLongPress,y=e.onPress,M=e.onPressMove,V=e.onPressIn,Y=e.onPressOut,L=e.style,F=e.tabIndex,N=e.testOnly_hovered,u=e.testOnly_pressed,h=je(e,gt),K=re(N===!0),j=K[0],z=K[1],b=re(!1),Ge=b[0],B=b[1],ae=re(u===!0),Ue=ae[0],oe=ae[1],p=d.useRef(null),Ve=ze(n,p),Ye=d.useMemo(()=>({delayLongPress:s,delayPressStart:t,delayPressEnd:r,disabled:a,onLongPress:C,onPress:y,onPressChange:oe,onPressStart:V,onPressMove:M,onPressEnd:Y}),[s,t,r,a,C,y,V,M,Y,oe]),q=nt(p,Ye),Z=q.onContextMenu,J=q.onKeyDown;mt(p,{contain:!0,disabled:a,onHoverChange:z,onHoverStart:D,onHoverEnd:g});var le={hovered:j,focused:Ge,pressed:Ue},Fe=d.useCallback(P=>{P.nativeEvent.target===p.current&&(B(!1),o!=null&&o(P))},[p,B,o]),Ke=d.useCallback(P=>{P.nativeEvent.target===p.current&&(B(!0),c!=null&&c(P))},[p,B,c]),Be=d.useCallback(P=>{Z!=null&&Z(P),l!=null&&l(P)},[l,Z]),$e=d.useCallback(P=>{J!=null&&J(P),O!=null&&O(P)},[O,J]),Q;return F!==void 0?Q=F:Q=a?-1:0,d.createElement(qe,We({},h,q,{"aria-disabled":a,onBlur:Fe,onContextMenu:Be,onFocus:Ke,onKeyDown:$e,ref:Ve,style:[a?De.disabled:De.active,typeof L=="function"?L(le):L],tabIndex:Q}),typeof i=="function"?i(le):i)}function re(e){var n=d.useState(!1),i=n[0],s=n[1];return[i||e,s]}var De=Xe.create({active:{cursor:"pointer",touchAction:"manipulation"},disabled:{pointerEvents:"box-none"}}),Ot=d.memo(d.forwardRef(pt));Ot.displayName="Pressable";export{Ot as M};
//# sourceMappingURL=index-HmJNsiCB.js.map
