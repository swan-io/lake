import{a5 as Ue,a6 as Be,a7 as We,a8 as Xe,a9 as Je,aa as Qe,ab as Ze,ac as et,ad as X,a3 as tt,ae as at,af as rt,ag as nt,ah as lt,a4 as it,ai as st,n as ot,s as be,aj as ut,ak as De,al as Ce,J as dt,a as ct,N as ft,V as vt,T as pt}from"./Space-BWccxxFI.js";import{r as p}from"./index-CBqU2yxZ.js";import{g as xe}from"./_commonjsHelpers-BosuxZz1.js";var mt=(t,o)=>{var h=t.selectionEnd,v=t.selectionStart,R=o.start,l=o.end;return R!==v||l!==h},Pe=(t,o)=>{if(mt(t,o)){var h=o.start,v=o.end;try{t.setSelectionRange(h,v||h)}catch{}}},ht=Object.assign({},Ue,Be,We,Xe,Je,Qe,Ze,et,{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0}),Et=t=>ut(t,ht);function Rt(t){return t.isComposing||t.keyCode===229}var se=null,me=p.forwardRef((t,o)=>{var h=t.autoCapitalize,v=h===void 0?"sentences":h,R=t.autoComplete,l=t.autoCompleteType,E=t.autoCorrect,S=E===void 0?!0:E,m=t.blurOnSubmit,d=t.caretHidden,C=t.clearTextOnFocus,x=t.dir,L=t.editable,z=t.enterKeyHint,b=t.inputMode,O=t.keyboardType,N=t.multiline,P=N===void 0?!1:N,$=t.numberOfLines,q=t.onBlur,K=t.onChange,w=t.onChangeText,M=t.onContentSizeChange,k=t.onFocus,F=t.onKeyPress,i=t.onLayout,r=t.onMoveShouldSetResponder,f=t.onMoveShouldSetResponderCapture,c=t.onResponderEnd,e=t.onResponderGrant,n=t.onResponderMove,s=t.onResponderReject,u=t.onResponderRelease,y=t.onResponderStart,A=t.onResponderTerminate,I=t.onResponderTerminationRequest,H=t.onScrollShouldSetResponder,Y=t.onScrollShouldSetResponderCapture,B=t.onSelectionChange,Z=t.onSelectionChangeShouldSetResponder,ee=t.onSelectionChangeShouldSetResponderCapture,te=t.onStartShouldSetResponder,ae=t.onStartShouldSetResponderCapture,j=t.onSubmitEditing,T=t.placeholderTextColor,Ee=t.readOnly,Oe=Ee===void 0?!1:Ee,Ne=t.returnKeyType,Re=t.rows,Se=t.secureTextEntry,J=Se===void 0?!1:Se,re=t.selection,Ae=t.selectTextOnFocus,_e=t.spellCheck,D,Q;if(b!=null)Q=b,b==="email"?D="email":b==="tel"?D="tel":b==="search"?D="search":b==="url"?D="url":D="text";else if(O!=null)switch(O){case"email-address":D="email";break;case"number-pad":case"numeric":Q="numeric";break;case"decimal-pad":Q="decimal";break;case"phone-pad":D="tel";break;case"search":case"web-search":D="search";break;case"url":D="url";break;default:D="text"}J&&(D="password");var U=p.useRef({height:null,width:null}),G=p.useRef(null),ne=p.useRef(null),ge=p.useRef(!1);p.useEffect(()=>{G.current&&ne.current&&Pe(G.current,ne.current),ge.current=J},[J]);var le=p.useCallback(a=>{if(P&&M&&a!=null){var g=a.scrollHeight,V=a.scrollWidth;(g!==U.current.height||V!==U.current.width)&&(U.current.height=g,U.current.width=V,M({nativeEvent:{contentSize:{height:U.current.height,width:U.current.width}}}))}},[P,M]),Le=p.useMemo(()=>a=>{a!=null&&(a.clear=function(){a!=null&&(a.value="")},a.isFocused=function(){return a!=null&&X.currentlyFocusedField()===a},le(a))},[le]);function Ve(a){X._currentlyFocusedNode=null,q&&(a.nativeEvent.text=a.target.value,q(a))}function qe(a){var g=a.target,V=g.value;a.nativeEvent.text=V,le(g),K&&K(a),w&&w(V)}function we(a){var g=a.target;k&&(a.nativeEvent.text=g.value,k(a)),g!=null&&(X._currentlyFocusedNode=g,C&&(g.value=""),Ae&&(se!=null&&clearTimeout(se),se=setTimeout(()=>{g!=null&&g.select()},0)))}function Me(a){var g=a.target;a.stopPropagation();var V=!P,ie=m??V,W=a.nativeEvent,ye=Rt(W);F&&F(a),a.key==="Enter"&&!a.shiftKey&&!ye&&!a.isDefaultPrevented()&&((m||!P)&&j&&(a.preventDefault(),W.text=a.target.value,j(a)),ie&&g!=null&&setTimeout(()=>g.blur(),0))}function ke(a){try{var g=a.target,V=g.selectionStart,ie=g.selectionEnd,W={start:V,end:ie};B&&(a.nativeEvent.selection=W,a.nativeEvent.text=a.target.value,B(a)),ge.current===J&&(ne.current=W)}catch{}}tt(()=>{var a=G.current;a!=null&&re!=null&&Pe(a,re),document.activeElement===a&&(X._currentlyFocusedNode=a)},[G,re]);var Ie=P?"textarea":"input";at(G,i),rt(G,{onMoveShouldSetResponder:r,onMoveShouldSetResponderCapture:f,onResponderEnd:c,onResponderGrant:e,onResponderMove:n,onResponderReject:s,onResponderRelease:u,onResponderStart:y,onResponderTerminate:A,onResponderTerminationRequest:I,onScrollShouldSetResponder:H,onScrollShouldSetResponderCapture:Y,onSelectionChangeShouldSetResponder:Z,onSelectionChangeShouldSetResponderCapture:ee,onStartShouldSetResponder:te,onStartShouldSetResponderCapture:ae});var He=nt(),Ke=He.direction,_=Et(t);_.autoCapitalize=v,_.autoComplete=R||l||"on",_.autoCorrect=S?"on":"off",_.dir=x!==void 0?x:"auto",_.enterKeyHint=z||Ne,_.inputMode=Q,_.onBlur=Ve,_.onChange=qe,_.onFocus=we,_.onKeyDown=Me,_.onSelect=ke,_.readOnly=Oe===!0||L===!1,_.rows=P?Re??$:1,_.spellCheck=_e??S,_.style=[{"--placeholderTextColor":T},oe.textinput$raw,oe.placeholder,t.style,d&&oe.caretHidden],_.type=P?void 0:D;var Fe=lt(_),Ge=it(G,Fe,Le,o);_.ref=Ge;var ze=t.lang!=null?st(t.lang):null,$e=t.dir||ze,Ye=$e||Ke,je=ot(Ie,_,{writingDirection:Ye});return je});me.displayName="TextInput";me.State=X;var oe=be.create({textinput$raw:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"},placeholder:{placeholderTextColor:"var(--placeholderTextColor)"},caretHidden:{caretColor:"transparent"}});const St=me,ue=t=>{const[o,h]=p.useState(!1);return[o||t,h]};var de={exports:{}},ce={exports:{}};(function(t,o){var h=De.default;o.__esModule=!0,o.default=v,h(p);function v(){for(var R=arguments.length,l=new Array(R),E=0;E<R;E++)l[E]=arguments[E];return function(m){l.forEach(d=>{if(d!=null){if(typeof d=="function"){d(m);return}if(typeof d=="object"){d.current=m;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(d))}})}}t.exports=o.default})(ce,ce.exports);var _t=ce.exports;(function(t,o){var h=Ce.default,v=De.default;o.__esModule=!0,o.default=E;var R=v(p),l=h(_t);function E(){for(var S=arguments.length,m=new Array(S),d=0;d<S;d++)m[d]=arguments[d];return R.useMemo(()=>(0,l.default)(...m),[...m])}t.exports=o.default})(de,de.exports);var gt=de.exports;const yt=xe(gt),Pt=yt;var fe={exports:{}},ve={exports:{}};(function(t,o){o.__esModule=!0,o.default=void 0;var h="DELAY",v="ERROR",R="LONG_PRESS_DETECTED",l="NOT_RESPONDER",E="RESPONDER_ACTIVE_LONG_PRESS_START",S="RESPONDER_ACTIVE_PRESS_START",m="RESPONDER_INACTIVE_PRESS_START",d="RESPONDER_GRANT",C="RESPONDER_RELEASE",x="RESPONDER_TERMINATED",L=Object.freeze({NOT_RESPONDER:{DELAY:v,RESPONDER_GRANT:m,RESPONDER_RELEASE:v,RESPONDER_TERMINATED:v,LONG_PRESS_DETECTED:v},RESPONDER_INACTIVE_PRESS_START:{DELAY:S,RESPONDER_GRANT:v,RESPONDER_RELEASE:l,RESPONDER_TERMINATED:l,LONG_PRESS_DETECTED:v},RESPONDER_ACTIVE_PRESS_START:{DELAY:v,RESPONDER_GRANT:v,RESPONDER_RELEASE:l,RESPONDER_TERMINATED:l,LONG_PRESS_DETECTED:E},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:v,RESPONDER_GRANT:v,RESPONDER_RELEASE:l,RESPONDER_TERMINATED:l,LONG_PRESS_DETECTED:E},ERROR:{DELAY:l,RESPONDER_GRANT:m,RESPONDER_RELEASE:l,RESPONDER_TERMINATED:l,LONG_PRESS_DETECTED:l}}),z=i=>i.getAttribute("role"),b=i=>i.tagName.toLowerCase(),O=i=>i===S||i===E,N=i=>z(i)==="button",P=i=>i===m||i===S||i===E,$=i=>i===x||i===C,q=i=>{var r=i.key,f=i.target,c=r===" "||r==="Spacebar",e=b(f)==="button"||N(f);return r==="Enter"||c&&e},K=450,w=50;class M{constructor(r){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=l,this.configure(r)}configure(r){this._config=r}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var r=(e,n)=>{e.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=l,this._isPointerTouch=e.nativeEvent.type==="touchstart",this._receiveSignal(d,e);var s=k(this._config.delayPressStart,0,w);n!==!1&&s>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(h,e)},s):this._receiveSignal(h,e);var u=k(this._config.delayLongPress,10,K);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(e)},u+s)},f=e=>{this._receiveSignal(C,e)},c=e=>{var n=this._config.onPress,s=e.target;if(this._touchState!==l&&q(e)){f(e),document.removeEventListener("keyup",c);var u=s.getAttribute("role"),y=b(s),A=u==="link"||y==="a"||y==="button"||y==="input"||y==="select"||y==="textarea";n!=null&&!A&&n(e)}};return{onStartShouldSetResponder:e=>{var n=this._config.disabled;return n&&N(e.currentTarget)&&e.stopPropagation(),n==null?!0:!n},onKeyDown:e=>{var n=this._config.disabled,s=e.key,u=e.target;if(!n&&q(e)){this._touchState===l&&(r(e,!1),document.addEventListener("keyup",c));var y=s===" "||s==="Spacebar",A=z(u),I=A==="button"||A==="menuitem";y&&I&&b(u)!=="button"&&e.preventDefault(),e.stopPropagation()}},onResponderGrant:e=>r(e),onResponderMove:e=>{this._config.onPressMove!=null&&this._config.onPressMove(e);var n=F(e);if(this._touchActivatePosition!=null){var s=this._touchActivatePosition.pageX-n.pageX,u=this._touchActivatePosition.pageY-n.pageY;Math.hypot(s,u)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:e=>f(e),onResponderTerminate:e=>{e.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(x,e)},onResponderTerminationRequest:e=>{var n=this._config,s=n.cancelable,u=n.disabled,y=n.onLongPress;return!u&&y!=null&&this._isPointerTouch&&e.nativeEvent.type==="contextmenu"?!1:s??!0},onClick:e=>{var n=this._config,s=n.disabled,u=n.onPress;s?N(e.currentTarget)&&e.stopPropagation():(e.stopPropagation(),this._longPressDispatched||this._selectionTerminated?e.preventDefault():u!=null&&e.altKey===!1&&u(e))},onContextMenu:e=>{var n=this._config,s=n.disabled,u=n.onLongPress;s?N(e.currentTarget)&&e.stopPropagation():u!=null&&this._isPointerTouch&&!e.defaultPrevented&&(e.preventDefault(),e.stopPropagation())}}}_receiveSignal(r,f){var c=this._touchState,e=null;L[c]!=null&&(e=L[c][r]),!(this._touchState===l&&r===C)&&(e==null||e===v?console.error("PressResponder: Invalid signal "+r+" for state "+c+" on responder"):c!==e&&(this._performTransitionSideEffects(c,e,r,f),this._touchState=e))}_performTransitionSideEffects(r,f,c,e){if($(c)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),P(r)&&c===R){var n=this._config.onLongPress;n!=null&&e.nativeEvent.key==null&&(n(e),this._longPressDispatched=!0)}var s=O(r),u=O(f);if(!s&&u?this._activate(e):s&&!u&&this._deactivate(e),P(r)&&c===C){var y=this._config,A=y.onLongPress,I=y.onPress;if(I!=null){var H=A!=null&&r===E;H||!u&&!s&&(this._activate(e),this._deactivate(e))}}this._cancelPressDelayTimeout()}_activate(r){var f=this._config,c=f.onPressChange,e=f.onPressStart,n=F(r);this._touchActivatePosition={pageX:n.pageX,pageY:n.pageY},e!=null&&e(r),c!=null&&c(!0)}_deactivate(r){var f=this._config,c=f.onPressChange,e=f.onPressEnd;function n(){e!=null&&e(r),c!=null&&c(!1)}var s=k(this._config.delayPressEnd);s>0?this._pressOutDelayTimeout=setTimeout(()=>{n()},s):n()}_handleLongPress(r){(this._touchState===S||this._touchState===E)&&this._receiveSignal(R,r)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}o.default=M;function k(i,r,f){return r===void 0&&(r=0),f===void 0&&(f=0),Math.max(r,i??f)}function F(i){var r=i.nativeEvent,f=r.changedTouches,c=r.touches;return c!=null&&c.length>0?c[0]:f!=null&&f.length>0?f[0]:i.nativeEvent}t.exports=o.default})(ve,ve.exports);var Tt=ve.exports;(function(t,o){var h=Ce.default;o.__esModule=!0,o.default=l;var v=h(Tt),R=p;function l(E,S){var m=(0,R.useRef)(null);m.current==null&&(m.current=new v.default(S));var d=m.current;return(0,R.useEffect)(()=>{d.configure(S)},[S,d]),(0,R.useEffect)(()=>()=>{d.reset()},[d]),(0,R.useDebugValue)(S),d.getEventHandlers()}t.exports=o.default})(fe,fe.exports);var bt=fe.exports;const Dt=xe(bt),Ct=Dt,Te=be.create({active:{cursor:"pointer",touchAction:"manipulation"},disabled:{cursor:"not-allowed"}}),he=(t,o={})=>{const{applyPressStyle:h=!0}=o;return p.forwardRef((v,R)=>{const{children:l,delayLongPress:E,delayPressIn:S,delayPressOut:m,disabled:d=!1,onBlur:C,onContextMenu:x,onFocus:L,onHoverIn:z,onHoverOut:b,onKeyDown:O,onLongPress:N,onPress:P,onPressIn:$,onPressMove:q,onPressOut:K,style:w,tabIndex:M,testOnly_hovered:k,testOnly_pressed:F,...i}=v,[r,f]=ue(k===!0),[c,e]=ue(!1),[n,s]=ue(F===!0),u=p.useRef(null),y=Pt(R,u),A=p.useMemo(()=>({delayLongPress:E,delayPressStart:S,delayPressEnd:m,disabled:d,onLongPress:N,onPress:P,onPressChange:s,onPressStart:$,onPressMove:q,onPressEnd:K}),[E,S,m,d,N,P,$,q,K,s]),I=Ct(u,A),{onContextMenu:H,onKeyDown:Y}=I;dt(u,{disabled:d,onHoverChange:f,onHoverStart:z,onHoverEnd:b});const B={hovered:r,focused:c,pressed:n},Z=p.useCallback(T=>{T.nativeEvent.target===u.current&&(e(!1),C==null||C(T))},[u,e,C]),ee=p.useCallback(T=>{T.nativeEvent.target===u.current&&(e(!0),L==null||L(T))},[u,e,L]),te=p.useCallback(T=>{H==null||H(T),x==null||x(T)},[x,H]),ae=p.useCallback(T=>{Y==null||Y(T),O==null||O(T)},[O,Y]);let j;return M!==void 0?j=M:j=d?-1:0,ct(t,{...i,...I,"aria-disabled":d,onBlur:Z,onContextmenu:te,onFocus:ee,onKeyDown:ae,ref:y,style:[ft({disabled:d,applyPressStyle:h}).with({disabled:!1,applyPressStyle:!0},()=>Te.active).with({disabled:!0},()=>Te.disabled).otherwise(()=>null),typeof w=="function"?w(B):w],tabIndex:j,children:typeof l=="function"?l(B):l})})},Lt=p.memo(he(vt,{applyPressStyle:!0})),pe=p.memo(he(pt,{applyPressStyle:!0})),xt=p.memo(he(St,{applyPressStyle:!1}));pe.displayName="PressableText";xt.displayName="PressableTextInput";try{pe.displayName="PressableText",pe.__docgenInfo={description:"",displayName:"PressableText",props:{role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"grid"'},{value:'"row"'},{value:'"cell"'},{value:'"alert"'},{value:'"alertdialog"'},{value:'"application"'},{value:'"article"'},{value:'"banner"'},{value:'"button"'},{value:'"checkbox"'},{value:'"columnheader"'},{value:'"combobox"'},{value:'"complementary"'},{value:'"contentinfo"'},{value:'"definition"'},{value:'"dialog"'},{value:'"directory"'},{value:'"document"'},{value:'"feed"'},{value:'"figure"'},{value:'"form"'},{value:'"group"'},{value:'"heading"'},{value:'"img"'},{value:'"link"'},{value:'"list"'},{value:'"listitem"'},{value:'"log"'},{value:'"main"'},{value:'"marquee"'},{value:'"math"'},{value:'"menu"'},{value:'"menubar"'},{value:'"menuitem"'},{value:'"meter"'},{value:'"navigation"'},{value:'"note"'},{value:'"option"'},{value:'"presentation"'},{value:'"progressbar"'},{value:'"radio"'},{value:'"radiogroup"'},{value:'"region"'},{value:'"rowgroup"'},{value:'"rowheader"'},{value:'"scrollbar"'},{value:'"searchbox"'},{value:'"separator"'},{value:'"slider"'},{value:'"spinbutton"'},{value:'"status"'},{value:'"summary"'},{value:'"switch"'},{value:'"tab"'},{value:'"table"'},{value:'"tablist"'},{value:'"tabpanel"'},{value:'"term"'},{value:'"timer"'},{value:'"toolbar"'},{value:'"tooltip"'},{value:'"tree"'},{value:'"treegrid"'},{value:'"treeitem"'},{value:'"blockquote"'},{value:'"code"'},{value:'"deletion"'},{value:'"emphasis"'},{value:'"insertion"'},{value:'"label"'},{value:'"paragraph"'},{value:'"strong"'},{value:'"gridcell"'},{value:'"listbox"'},{value:'"menuitemcheckbox"'},{value:'"menuitemradio"'},{value:'"textbox"'}]}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyDownCapture:{defaultValue:null,description:"",name:"onKeyDownCapture",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyUpCapture:{defaultValue:null,description:"",name:"onKeyUpCapture",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},tabIndex:{defaultValue:null,description:"Additional accessibility props",name:"tabIndex",required:!1,type:{name:"enum",value:[{value:"0"},{value:"-1"}]}},"aria-activedescendant":{defaultValue:null,description:`Aria props (additional, minus existants)
@see https://necolas.github.io/react-native-web/docs/accessibility
@see https://reactnative.dev/docs/accessibility#aria-valuemax`,name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-atomic":{defaultValue:null,description:"",name:"aria-atomic",required:!1,type:{name:"boolean"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"string"}},"aria-colcount":{defaultValue:null,description:"",name:"aria-colcount",required:!1,type:{name:"number"}},"aria-colindex":{defaultValue:null,description:"",name:"aria-colindex",required:!1,type:{name:"number"}},"aria-colspan":{defaultValue:null,description:"",name:"aria-colspan",required:!1,type:{name:"number"}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},"aria-current":{defaultValue:null,description:"",name:"aria-current",required:!1,type:{name:'boolean | "page" | "step" | "location" | "date" | "time"'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}},"aria-errormessage":{defaultValue:null,description:"",name:"aria-errormessage",required:!1,type:{name:"string"}},"aria-flowto":{defaultValue:null,description:"",name:"aria-flowto",required:!1,type:{name:"string"}},"aria-haspopup":{defaultValue:null,description:"",name:"aria-haspopup",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:"boolean"}},"aria-keyshortcuts":{defaultValue:null,description:"",name:"aria-keyshortcuts",required:!1,type:{name:"string"}},"aria-level":{defaultValue:null,description:"",name:"aria-level",required:!1,type:{name:"number"}},"aria-multiline":{defaultValue:null,description:"",name:"aria-multiline",required:!1,type:{name:"boolean"}},"aria-multiselectable":{defaultValue:null,description:"",name:"aria-multiselectable",required:!1,type:{name:"boolean"}},"aria-orientation":{defaultValue:null,description:"",name:"aria-orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},"aria-owns":{defaultValue:null,description:"",name:"aria-owns",required:!1,type:{name:"string"}},"aria-placeholder":{defaultValue:null,description:"",name:"aria-placeholder",required:!1,type:{name:"string"}},"aria-posinset":{defaultValue:null,description:"",name:"aria-posinset",required:!1,type:{name:"number"}},"aria-pressed":{defaultValue:null,description:"",name:"aria-pressed",required:!1,type:{name:"boolean"}},"aria-readonly":{defaultValue:null,description:"",name:"aria-readonly",required:!1,type:{name:"boolean"}},"aria-required":{defaultValue:null,description:"",name:"aria-required",required:!1,type:{name:"boolean"}},"aria-roledescription":{defaultValue:null,description:"",name:"aria-roledescription",required:!1,type:{name:"string"}},"aria-rowcount":{defaultValue:null,description:"",name:"aria-rowcount",required:!1,type:{name:"number"}},"aria-rowindex":{defaultValue:null,description:"",name:"aria-rowindex",required:!1,type:{name:"number"}},"aria-rowspan":{defaultValue:null,description:"",name:"aria-rowspan",required:!1,type:{name:"number"}},"aria-setsize":{defaultValue:null,description:"",name:"aria-setsize",required:!1,type:{name:"number"}},"aria-sort":{defaultValue:null,description:"",name:"aria-sort",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"ascending"'},{value:'"descending"'},{value:'"other"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},hrefAttrs:{defaultValue:null,description:"",name:"hrefAttrs",required:!1,type:{name:"HrefAttrs"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<View>"}}}}}catch{}export{Lt as P,St as T,pe as a,xt as b,Pt as u};
//# sourceMappingURL=Pressable-DBhPzfWd.js.map
