import{s as C,e as P,r as b,h as x,d as D,c as F,j as y,P as G,a as m,V as v,w as H}from"./Space-DOX6gAiW.js";import{r as T}from"./index-CBqU2yxZ.js";import{c as O}from"./commonStyles-t4XfA7cz.js";import{u as X}from"./useBodyClassName-FAgY5CgW.js";import{l as I}from"./math-CFJAJ_z4.js";import{F as B}from"./FocusTrap-CyJ2F0CF.js";import{L as g}from"./LoadingView-wLlEeANw.js";import{T as _}from"./TransitionView-C5ov7vs9.js";import{I as L}from"./index-CwW3skvS.js";import{P as j}from"./index-B_iTb5FH.js";var d={centroidDimension:function(n,o,l,r){var t=n.touchBank,s=0,p=0,a=n.numberActiveTouches===1?n.touchBank[n.indexOfSingleActiveTouch]:null;if(a!==null)a.touchActive&&a.currentTimeStamp>o&&(s+=r&&l?a.currentPageX:r&&!l?a.currentPageY:!r&&l?a.previousPageX:a.previousPageY,p=1);else for(var u=0;u<t.length;u++){var c=t[u];if(c!=null&&c.touchActive&&c.currentTimeStamp>=o){var h=void 0;r&&l?h=c.currentPageX:r&&!l?h=c.currentPageY:!r&&l?h=c.previousPageX:h=c.previousPageY,s+=h,p++}}return p>0?s/p:d.noCentroid},currentCentroidXOfTouchesChangedAfter:function(n,o){return d.centroidDimension(n,o,!0,!0)},currentCentroidYOfTouchesChangedAfter:function(n,o){return d.centroidDimension(n,o,!1,!0)},previousCentroidXOfTouchesChangedAfter:function(n,o){return d.centroidDimension(n,o,!0,!1)},previousCentroidYOfTouchesChangedAfter:function(n,o){return d.centroidDimension(n,o,!1,!1)},currentCentroidX:function(n){return d.centroidDimension(n,0,!0,!0)},currentCentroidY:function(n){return d.centroidDimension(n,0,!1,!0)},noCentroid:-1},M=d.currentCentroidXOfTouchesChangedAfter,E=d.currentCentroidYOfTouchesChangedAfter,w=d.previousCentroidXOfTouchesChangedAfter,U=d.previousCentroidYOfTouchesChangedAfter,V=d.currentCentroidX,k=d.currentCentroidY,f={_initializeGestureState(e){e.moveX=0,e.moveY=0,e.x0=0,e.y0=0,e.dx=0,e.dy=0,e.vx=0,e.vy=0,e.numberActiveTouches=0,e._accountsForMovesUpTo=0},_updateGestureStateOnMove(e,n){e.numberActiveTouches=n.numberActiveTouches,e.moveX=M(n,e._accountsForMovesUpTo),e.moveY=E(n,e._accountsForMovesUpTo);var o=e._accountsForMovesUpTo,l=w(n,o),r=M(n,o),t=U(n,o),s=E(n,o),p=e.dx+(r-l),a=e.dy+(s-t),u=n.mostRecentTimeStamp-e._accountsForMovesUpTo;e.vx=(p-e.dx)/u,e.vy=(a-e.dy)/u,e.dx=p,e.dy=a,e._accountsForMovesUpTo=n.mostRecentTimeStamp},create(e){var n={handle:null,shouldCancelClick:!1,timeout:null},o={stateID:Math.random(),moveX:0,moveY:0,x0:0,y0:0,dx:0,dy:0,vx:0,vy:0,numberActiveTouches:0,_accountsForMovesUpTo:0},l={onStartShouldSetResponder(r){return e.onStartShouldSetPanResponder==null?!1:e.onStartShouldSetPanResponder(r,o)},onMoveShouldSetResponder(r){return e.onMoveShouldSetPanResponder==null?!1:e.onMoveShouldSetPanResponder(r,o)},onStartShouldSetResponderCapture(r){return r.nativeEvent.touches.length===1&&f._initializeGestureState(o),o.numberActiveTouches=r.touchHistory.numberActiveTouches,e.onStartShouldSetPanResponderCapture!=null?e.onStartShouldSetPanResponderCapture(r,o):!1},onMoveShouldSetResponderCapture(r){var t=r.touchHistory;return o._accountsForMovesUpTo===t.mostRecentTimeStamp?!1:(f._updateGestureStateOnMove(o,t),e.onMoveShouldSetPanResponderCapture?e.onMoveShouldSetPanResponderCapture(r,o):!1)},onResponderGrant(r){return n.handle||(n.handle=L.createInteractionHandle()),n.timeout&&N(n),n.shouldCancelClick=!0,o.x0=V(r.touchHistory),o.y0=k(r.touchHistory),o.dx=0,o.dy=0,e.onPanResponderGrant&&e.onPanResponderGrant(r,o),e.onShouldBlockNativeResponder==null?!0:e.onShouldBlockNativeResponder(r,o)},onResponderReject(r){R(n,e.onPanResponderReject,r,o)},onResponderRelease(r){R(n,e.onPanResponderRelease,r,o),Y(n),f._initializeGestureState(o)},onResponderStart(r){var t=r.touchHistory;o.numberActiveTouches=t.numberActiveTouches,e.onPanResponderStart&&e.onPanResponderStart(r,o)},onResponderMove(r){var t=r.touchHistory;o._accountsForMovesUpTo!==t.mostRecentTimeStamp&&(f._updateGestureStateOnMove(o,t),e.onPanResponderMove&&e.onPanResponderMove(r,o))},onResponderEnd(r){var t=r.touchHistory;o.numberActiveTouches=t.numberActiveTouches,R(n,e.onPanResponderEnd,r,o)},onResponderTerminate(r){R(n,e.onPanResponderTerminate,r,o),Y(n),f._initializeGestureState(o)},onResponderTerminationRequest(r){return e.onPanResponderTerminationRequest==null?!0:e.onPanResponderTerminationRequest(r,o)},onClickCapture:r=>{n.shouldCancelClick===!0&&(r.stopPropagation(),r.preventDefault())}};return{panHandlers:l,getInteractionHandle(){return n.handle}}}};function R(e,n,o,l){e.handle&&(L.clearInteractionHandle(e.handle),e.handle=null),n&&n(o,l)}function N(e){clearTimeout(e.timeout)}function Y(e){e.timeout=setTimeout(()=>{e.shouldCancelClick=!1},250)}const S=100,q=.008,z=I({elasticLength:S,elasticStrength:q}),K=100,W=.5,$="rgba(0, 0, 0, 0.6)",i=C.create({fill:{...C.absoluteFillObject,position:"fixed",animationFillMode:"forwards",visibility:"visible"},overlay:{...C.absoluteFillObject,backgroundColor:$},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},modalEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateY(20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},modalLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateY(20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},container:{...C.absoluteFillObject,transitionDuration:"300ms",transitionProperty:"transform"},bottomCache:{position:"absolute",bottom:-S+1,width:"100%",height:S,backgroundColor:P.accented},modalContainer:{...C.absoluteFillObject},modalContentContainer:{justifyContent:"flex-end",flexGrow:1},trap:{...O.fill},modal:{backgroundColor:P.accented,borderTopLeftRadius:b[8],borderTopRightRadius:b[8],boxShadow:x.modal,alignSelf:"stretch"},pressableOverlay:{...O.fill,outlineWidth:0,opacity:0},grabContainer:{paddingHorizontal:128,paddingVertical:D[12]},grabLine:{backgroundColor:F.gray[100],height:5,borderRadius:b[4]}}),A=({visible:e,onPressClose:n,children:o,returnFocus:l=!0})=>{const[r,t]=T.useState(()=>{}),s=T.useRef(null);T.useEffect(()=>{const a=document.createElement("div");return document.body.append(a),t(a),()=>{a.remove(),t(void 0)}},[]);const p=T.useMemo(()=>f.create({onMoveShouldSetPanResponder:()=>!0,onPanResponderGrant:()=>{s.current instanceof HTMLElement&&(s.current.style.transitionDuration="0ms")},onPanResponderMove:(a,{dy:u})=>{const c=u>0?u:-z(-u);s.current instanceof HTMLElement&&(s.current.style.transform=`translateY(${c}px)`)},onPanResponderRelease:(a,u)=>{s.current instanceof HTMLElement&&(s.current.style.transitionDuration=null),u.dy>K||u.vy>W?n():s.current instanceof HTMLElement&&(s.current.style.transform="translateY(0px)")}}),[n]);return X("BottomPanelOpen",{enabled:e}),r==null?null:y(G,{container:r,children:[m(_,{style:i.fill,enter:i.overlayEnter,leave:i.overlayLeave,children:e?m(v,{style:i.overlay}):null}),m(T.Suspense,{fallback:m(g,{color:P.accented,delay:0}),children:m(_,{style:i.fill,enter:i.modalEnter,leave:i.modalLeave,children:e?y(v,{ref:s,style:i.container,children:[m(H,{style:i.modalContainer,contentContainerStyle:i.modalContentContainer,children:y(B,{autoFocus:!0,focusLock:!0,returnFocus:l,style:i.trap,children:[n!=null?m(j,{onPress:n,style:i.pressableOverlay}):null,y(v,{style:i.modal,children:[m(v,{style:i.grabContainer,...p.panHandlers,children:m(v,{style:i.grabLine})}),o]})]})}),m(v,{style:i.bottomCache})]}):null})})]})};try{A.displayName="BottomPanel",A.__docgenInfo={description:"",displayName:"BottomPanel",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},onPressClose:{defaultValue:null,description:"",name:"onPressClose",required:!0,type:{name:"() => void"}},returnFocus:{defaultValue:{value:"true"},description:"",name:"returnFocus",required:!1,type:{name:"boolean"}}}}}catch{}export{A as B};
//# sourceMappingURL=BottomPanel-DjfuvqTf.js.map