import{s as o,d as p,r as u,g as v,j as t,P as x,V as i,l as j}from"./ScrollView-CouMEPyK.js";import{r as l}from"./index-uCp2LrAq.js";import{c as d}from"./commonStyles-t4XfA7cz.js";import{u as g}from"./useBodyClassName-CiTylq2A.js";import{F as h}from"./FocusTrap-Dqfzx5pd.js";import{S as F,L as T}from"./Suspendable-BDNGDgDB.js";import{T as c}from"./TransitionView-DifTnmGJ.js";import{M as C}from"./index-_raWLUMJ.js";const E="rgba(0, 0, 0, 0.6)",e=o.create({fill:{...o.absoluteFillObject,position:"absolute",animationFillMode:"forwards",visibility:"visible"},overlay:{...o.absoluteFillObject,backgroundColor:E},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},modalEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateY(20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},modalLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateY(20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},container:{...o.absoluteFillObject,transitionDuration:"300ms",transitionProperty:"transform"},modalContainer:{...o.absoluteFillObject},modalContentContainer:{justifyContent:"flex-end",flexGrow:1},trap:{...d.fill},modal:{backgroundColor:p.accented,borderTopLeftRadius:u[8],borderTopRightRadius:u[8],boxShadow:v.modal,alignSelf:"stretch"},pressableOverlay:{...d.fill,outlineWidth:0,opacity:0,order:-1}}),O=({visible:n,onPressClose:a,children:y,returnFocus:f=!0})=>{const[s,m]=l.useState(()=>{}),b=l.useRef(null);return l.useEffect(()=>{const r=document.createElement("div");return document.body.append(r),m(r),()=>{r.remove(),m(void 0)}},[]),g("BottomPanelOpen",{enabled:n}),s==null?null:t.jsxs(x,{container:s,children:[t.jsx(c,{style:e.fill,enter:e.overlayEnter,leave:e.overlayLeave,children:n?t.jsx(i,{style:e.overlay}):null}),t.jsx(F,{fallback:t.jsx(T,{color:p.accented,delay:0}),children:t.jsx(c,{style:e.fill,enter:e.modalEnter,leave:e.modalLeave,children:n?t.jsx(i,{ref:b,style:e.container,children:t.jsx(j,{style:e.modalContainer,contentContainerStyle:e.modalContentContainer,children:t.jsxs(h,{autoFocus:!0,focusLock:!0,returnFocus:f,onEscapeKey:()=>{a!=null&&a()},style:e.trap,children:[t.jsx(i,{style:e.modal,children:y}),a!=null?t.jsx(C,{onPress:a,style:e.pressableOverlay}):null]})})}):null})})]})};O.__docgenInfo={description:"",methods:[],displayName:"BottomPanel",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},onPressClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},returnFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{O as B};
//# sourceMappingURL=BottomPanel-KZEZbmpv.js.map
