import{j as t}from"./jsx-runtime-BlAj40OV.js";import{r as i}from"./index-Cs7sjTYM.js";import{c as u}from"./commonStyles-t4XfA7cz.js";import{s as o,e as p,r as c,k as v,P as x,V as s,j}from"./ScrollView-DAMcnhPN.js";import{u as g}from"./useBodyClassName-DMoYUPTW.js";import{F as h}from"./FocusTrap-HMOsJfWh.js";import{S as F,L as T}from"./Suspendable-Bl-Qq_g-.js";import{T as d}from"./TransitionView-_995VKea.js";import{M as C}from"./index-Cp2lnEJT.js";const E="rgba(0, 0, 0, 0.6)",e=o.create({fill:{...o.absoluteFillObject,position:"absolute",animationFillMode:"forwards",visibility:"visible"},overlay:{...o.absoluteFillObject,backgroundColor:E},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},modalEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateY(20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},modalLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateY(20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},container:{...o.absoluteFillObject,transitionDuration:"300ms",transitionProperty:"transform"},modalContainer:{...o.absoluteFillObject},modalContentContainer:{justifyContent:"flex-end",flexGrow:1},trap:{...u.fill},modal:{backgroundColor:p.accented,borderTopLeftRadius:c[8],borderTopRightRadius:c[8],boxShadow:v.modal,alignSelf:"stretch"},pressableOverlay:{...u.fill,outlineWidth:0,opacity:0,order:-1}}),O=({visible:n,onPressClose:a,children:y,returnFocus:f=!0})=>{const[l,m]=i.useState(()=>{}),b=i.useRef(null);return i.useEffect(()=>{const r=document.createElement("div");return document.body.append(r),m(r),()=>{r.remove(),m(void 0)}},[]),g("BottomPanelOpen",{enabled:n}),l==null?null:t.jsxs(x,{container:l,children:[t.jsx(d,{style:e.fill,enter:e.overlayEnter,leave:e.overlayLeave,children:n?t.jsx(s,{style:e.overlay}):null}),t.jsx(F,{fallback:t.jsx(T,{color:p.accented,delay:0}),children:t.jsx(d,{style:e.fill,enter:e.modalEnter,leave:e.modalLeave,children:n?t.jsx(s,{ref:b,style:e.container,children:t.jsx(j,{style:e.modalContainer,contentContainerStyle:e.modalContentContainer,children:t.jsxs(h,{autoFocus:!0,focusLock:!0,returnFocus:f,onEscapeKey:()=>{a!=null&&a()},style:e.trap,children:[t.jsx(s,{style:e.modal,children:y}),a!=null?t.jsx(C,{onPress:a,style:e.pressableOverlay}):null]})})}):null})})]})};O.__docgenInfo={description:"",methods:[],displayName:"BottomPanel",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},onPressClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},returnFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{O as B};
//# sourceMappingURL=BottomPanel-DvLAyyFQ.js.map