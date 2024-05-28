import{Y as D,X as F,Z as H,s as T,d as k,r as E,g as X,b as G,c as U,j as l,w as B,V as v,F as N}from"./Space-Bx5QDxXb.js";import{r as y}from"./index-BwDkhjyp.js";import{c as Y}from"./commonStyles-t4XfA7cz.js";import{u as Q}from"./useBodyClassName-Ds2flwH7.js";import{l as z}from"./math-CMPBFgTl.js";import{F as V}from"./FocusTrap-aGNEhBTL.js";import{S as K,L as W}from"./Suspendable-B5EH3QQQ.js";import{T as A}from"./TransitionView-oHMWxRhX.js";import{M as J}from"./index-COed5YRa.js";class Z{constructor(t){var e=t.onMoreTasks;this._onMoreTasks=e,this._queueStack=[{tasks:[],popable:!0}]}enqueue(t){this._getCurrentQueue().push(t)}enqueueTasks(t){t.forEach(e=>this.enqueue(e))}cancelTasks(t){this._queueStack=this._queueStack.map(e=>D(D({},e),{},{tasks:e.tasks.filter(o=>t.indexOf(o)===-1)})).filter((e,o)=>e.tasks.length>0||o===0)}hasTasksToProcess(){return this._getCurrentQueue().length>0}processNext(){var t=this._getCurrentQueue();if(t.length){var e=t.shift();try{typeof e=="object"&&e.gen?this._genPromise(e):typeof e=="object"&&e.run?e.run():(F(typeof e=="function",`Expected Function, SimpleTask, or PromiseTask, but got:
`+JSON.stringify(e,null,2)),e())}catch(o){throw o.message="TaskQueue: Error with task "+(e.name||"")+": "+o.message,o}}}_getCurrentQueue(){var t=this._queueStack.length-1,e=this._queueStack[t];return e.popable&&e.tasks.length===0&&t>0?(this._queueStack.pop(),this._getCurrentQueue()):e.tasks}_genPromise(t){var e=this._queueStack.push({tasks:[],popable:!1}),o=e-1,r=this._queueStack[o];t.gen().then(()=>{r.popable=!0,this.hasTasksToProcess()&&this._onMoreTasks()}).catch(a=>{setTimeout(()=>{throw a.message="TaskQueue: Error resolving Promise in task "+t.name+": "+a.message,a},0)})}}class ${constructor(){this._registry={}}addListener(t,e,o){var r=ee(this._registry,t),a={context:o,listener:e,remove(){r.delete(a)}};return r.add(a),a}emit(t){var e=this._registry[t];if(e!=null){for(var o=arguments.length,r=new Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];for(var s=0,m=[...e];s<m.length;s++){var i=m[s];i.listener.apply(i.context,r)}}}removeAllListeners(t){t==null?this._registry={}:delete this._registry[t]}listenerCount(t){var e=this._registry[t];return e==null?0:e.size}}function ee(n,t){var e=n[t];return e==null&&(e=new Set,n[t]=e),e}var ne=function(t,e){return setTimeout(()=>{var o=Date.now();t({didTimeout:!1,timeRemaining(){return Math.max(0,50-(Date.now()-o))}})},1)},te=H&&typeof window.requestIdleCallback<"u",re=te?window.requestIdleCallback:ne,_=new $,g={Events:{interactionStart:"interactionStart",interactionComplete:"interactionComplete"},runAfterInteractions(n){var t=[],e=new Promise(o=>{C(),n&&t.push(n),t.push({run:o,name:"resolve "+(n&&n.name||"?")}),x.enqueueTasks(t)});return{then:e.then.bind(e),done:e.then.bind(e),cancel:()=>{x.cancelTasks(t)}}},createInteractionHandle(){C();var n=++oe;return P.add(n),n},clearInteractionHandle(n){F(!!n,"Must provide a handle to clear."),C(),P.delete(n),O.add(n)},addListener:_.addListener.bind(_),setDeadline(n){M=n}},b=new Set,P=new Set,O=new Set,x=new Z({onMoreTasks:C}),S=0,oe=0,M=-1;function C(){S||(M>0?S=setTimeout(I):S=re(I))}function I(){S=0;var n=b.size;P.forEach(o=>b.add(o)),O.forEach(o=>b.delete(o));var t=b.size;if(n!==0&&t===0?_.emit(g.Events.interactionComplete):n===0&&t!==0&&_.emit(g.Events.interactionStart),t===0){for(var e=Date.now();x.hasTasksToProcess();)if(x.processNext(),M>0&&Date.now()-e>=M){C();break}}P.clear(),O.clear()}var d={centroidDimension:function(t,e,o,r){var a=t.touchBank,s=0,m=0,i=t.numberActiveTouches===1?t.touchBank[t.indexOfSingleActiveTouch]:null;if(i!==null)i.touchActive&&i.currentTimeStamp>e&&(s+=r&&o?i.currentPageX:r&&!o?i.currentPageY:!r&&o?i.previousPageX:i.previousPageY,m=1);else for(var c=0;c<a.length;c++){var p=a[c];if(p!=null&&p.touchActive&&p.currentTimeStamp>=e){var f=void 0;r&&o?f=p.currentPageX:r&&!o?f=p.currentPageY:!r&&o?f=p.previousPageX:f=p.previousPageY,s+=f,m++}}return m>0?s/m:d.noCentroid},currentCentroidXOfTouchesChangedAfter:function(t,e){return d.centroidDimension(t,e,!0,!0)},currentCentroidYOfTouchesChangedAfter:function(t,e){return d.centroidDimension(t,e,!1,!0)},previousCentroidXOfTouchesChangedAfter:function(t,e){return d.centroidDimension(t,e,!0,!1)},previousCentroidYOfTouchesChangedAfter:function(t,e){return d.centroidDimension(t,e,!1,!1)},currentCentroidX:function(t){return d.centroidDimension(t,0,!0,!0)},currentCentroidY:function(t){return d.centroidDimension(t,0,!1,!0)},noCentroid:-1},L=d.currentCentroidXOfTouchesChangedAfter,j=d.currentCentroidYOfTouchesChangedAfter,ae=d.previousCentroidXOfTouchesChangedAfter,se=d.previousCentroidYOfTouchesChangedAfter,ie=d.currentCentroidX,ue=d.currentCentroidY,h={_initializeGestureState(n){n.moveX=0,n.moveY=0,n.x0=0,n.y0=0,n.dx=0,n.dy=0,n.vx=0,n.vy=0,n.numberActiveTouches=0,n._accountsForMovesUpTo=0},_updateGestureStateOnMove(n,t){n.numberActiveTouches=t.numberActiveTouches,n.moveX=L(t,n._accountsForMovesUpTo),n.moveY=j(t,n._accountsForMovesUpTo);var e=n._accountsForMovesUpTo,o=ae(t,e),r=L(t,e),a=se(t,e),s=j(t,e),m=n.dx+(r-o),i=n.dy+(s-a),c=t.mostRecentTimeStamp-n._accountsForMovesUpTo;n.vx=(m-n.dx)/c,n.vy=(i-n.dy)/c,n.dx=m,n.dy=i,n._accountsForMovesUpTo=t.mostRecentTimeStamp},create(n){var t={handle:null,shouldCancelClick:!1,timeout:null},e={stateID:Math.random(),moveX:0,moveY:0,x0:0,y0:0,dx:0,dy:0,vx:0,vy:0,numberActiveTouches:0,_accountsForMovesUpTo:0},o={onStartShouldSetResponder(r){return n.onStartShouldSetPanResponder==null?!1:n.onStartShouldSetPanResponder(r,e)},onMoveShouldSetResponder(r){return n.onMoveShouldSetPanResponder==null?!1:n.onMoveShouldSetPanResponder(r,e)},onStartShouldSetResponderCapture(r){return r.nativeEvent.touches.length===1&&h._initializeGestureState(e),e.numberActiveTouches=r.touchHistory.numberActiveTouches,n.onStartShouldSetPanResponderCapture!=null?n.onStartShouldSetPanResponderCapture(r,e):!1},onMoveShouldSetResponderCapture(r){var a=r.touchHistory;return e._accountsForMovesUpTo===a.mostRecentTimeStamp?!1:(h._updateGestureStateOnMove(e,a),n.onMoveShouldSetPanResponderCapture?n.onMoveShouldSetPanResponderCapture(r,e):!1)},onResponderGrant(r){return t.handle||(t.handle=g.createInteractionHandle()),t.timeout&&le(t),t.shouldCancelClick=!0,e.x0=ie(r.touchHistory),e.y0=ue(r.touchHistory),e.dx=0,e.dy=0,n.onPanResponderGrant&&n.onPanResponderGrant(r,e),n.onShouldBlockNativeResponder==null?!0:n.onShouldBlockNativeResponder(r,e)},onResponderReject(r){R(t,n.onPanResponderReject,r,e)},onResponderRelease(r){R(t,n.onPanResponderRelease,r,e),q(t),h._initializeGestureState(e)},onResponderStart(r){var a=r.touchHistory;e.numberActiveTouches=a.numberActiveTouches,n.onPanResponderStart&&n.onPanResponderStart(r,e)},onResponderMove(r){var a=r.touchHistory;e._accountsForMovesUpTo!==a.mostRecentTimeStamp&&(h._updateGestureStateOnMove(e,a),n.onPanResponderMove&&n.onPanResponderMove(r,e))},onResponderEnd(r){var a=r.touchHistory;e.numberActiveTouches=a.numberActiveTouches,R(t,n.onPanResponderEnd,r,e)},onResponderTerminate(r){R(t,n.onPanResponderTerminate,r,e),q(t),h._initializeGestureState(e)},onResponderTerminationRequest(r){return n.onPanResponderTerminationRequest==null?!0:n.onPanResponderTerminationRequest(r,e)},onClickCapture:r=>{t.shouldCancelClick===!0&&(r.stopPropagation(),r.preventDefault())}};return{panHandlers:o,getInteractionHandle(){return t.handle}}}};function R(n,t,e,o){n.handle&&(g.clearInteractionHandle(n.handle),n.handle=null),t&&t(e,o)}function le(n){clearTimeout(n.timeout)}function q(n){n.timeout=setTimeout(()=>{n.shouldCancelClick=!1},250)}const w=100,ce=.008,de=z({elasticLength:w,elasticStrength:ce}),me=100,pe=.5,ve="rgba(0, 0, 0, 0.6)",u=T.create({fill:{...T.absoluteFillObject,position:"fixed",animationFillMode:"forwards",visibility:"visible"},overlay:{...T.absoluteFillObject,backgroundColor:ve},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},modalEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateY(20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},modalLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateY(20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},container:{...T.absoluteFillObject,transitionDuration:"300ms",transitionProperty:"transform"},bottomCache:{position:"absolute",bottom:-w+1,width:"100%",height:w,backgroundColor:k.accented},modalContainer:{...T.absoluteFillObject},modalContentContainer:{justifyContent:"flex-end",flexGrow:1},trap:{...Y.fill},modal:{backgroundColor:k.accented,borderTopLeftRadius:E[8],borderTopRightRadius:E[8],boxShadow:X.modal,alignSelf:"stretch"},pressableOverlay:{...Y.fill,outlineWidth:0,opacity:0},grabContainer:{paddingHorizontal:128,paddingVertical:G[12]},grabLine:{backgroundColor:U.gray[100],height:5,borderRadius:E[4]}}),he=({visible:n,onPressClose:t,children:e,returnFocus:o=!0})=>{const[r,a]=y.useState(()=>{}),s=y.useRef(null);y.useEffect(()=>{const i=document.createElement("div");return document.body.append(i),a(i),()=>{i.remove(),a(void 0)}},[]);const m=y.useMemo(()=>h.create({onMoveShouldSetPanResponder:()=>!0,onPanResponderGrant:()=>{s.current instanceof HTMLElement&&(s.current.style.transitionDuration="0ms")},onPanResponderMove:(i,{dy:c})=>{const p=c>0?c:-de(-c);s.current instanceof HTMLElement&&(s.current.style.transform=`translateY(${p}px)`)},onPanResponderRelease:(i,c)=>{s.current instanceof HTMLElement&&(s.current.style.transitionDuration=null),c.dy>me||c.vy>pe?t():s.current instanceof HTMLElement&&(s.current.style.transform="translateY(0px)")}}),[t]);return Q("BottomPanelOpen",{enabled:n}),r==null?null:l.jsxs(B,{container:r,children:[l.jsx(A,{style:u.fill,enter:u.overlayEnter,leave:u.overlayLeave,children:n?l.jsx(v,{style:u.overlay}):null}),l.jsx(K,{fallback:l.jsx(W,{color:k.accented,delay:0}),children:l.jsx(A,{style:u.fill,enter:u.modalEnter,leave:u.modalLeave,children:n?l.jsxs(v,{ref:s,style:u.container,children:[l.jsx(N,{style:u.modalContainer,contentContainerStyle:u.modalContentContainer,children:l.jsxs(V,{autoFocus:!0,focusLock:!0,returnFocus:o,style:u.trap,children:[t!=null?l.jsx(J,{onPress:t,style:u.pressableOverlay}):null,l.jsxs(v,{style:u.modal,children:[l.jsx(v,{style:u.grabContainer,...m.panHandlers,children:l.jsx(v,{style:u.grabLine})}),e]})]})}),l.jsx(v,{style:u.bottomCache})]}):null})})]})};he.__docgenInfo={description:"",methods:[],displayName:"BottomPanel",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},onPressClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},returnFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{he as B,g as I};
//# sourceMappingURL=BottomPanel-C6LweyEn.js.map
