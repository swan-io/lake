import{j as t}from"./jsx-runtime-DT09rT5F.js";import{r as i}from"./index-DXKZGL6g.js";import{c as u}from"./commonStyles-BBEkV6IC.js";import{P as v,s as o,V as l,j as x,e as p,l as j,r as d}from"./ScrollView-DmQfgLfc.js";import{u as g}from"./useBodyClassName-CYzM7DM-.js";import{F as h}from"./FocusTrap-DNHrld98.js";import{S as F,L as T}from"./Suspendable-BjksFpPY.js";import{T as c}from"./TransitionView-B8hXHfhO.js";import{M as C}from"./index-BwY4x6i0.js";const E="rgba(0, 0, 0, 0.6)",e=o.create({fill:{...o.absoluteFillObject,position:"absolute",animationFillMode:"forwards",visibility:"visible"},overlay:{...o.absoluteFillObject,backgroundColor:E},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},modalEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateY(20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},modalLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateY(20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},container:{...o.absoluteFillObject,transitionDuration:"300ms",transitionProperty:"transform"},modalContainer:{...o.absoluteFillObject},modalContentContainer:{justifyContent:"flex-end",flexGrow:1},trap:{...u.fill},modal:{backgroundColor:p.accented,borderTopLeftRadius:d[8],borderTopRightRadius:d[8],boxShadow:j.modal,alignSelf:"stretch"},pressableOverlay:{...u.fill,outlineWidth:0,opacity:0,order:-1}}),O=({visible:n,onPressClose:a,children:f,returnFocus:y=!0})=>{const[s,m]=i.useState(()=>{}),b=i.useRef(null);return i.useEffect(()=>{const r=document.createElement("div");return document.body.append(r),m(r),()=>{r.remove(),m(void 0)}},[]),g("BottomPanelOpen",{enabled:n}),s==null?null:t.jsxs(v,{container:s,children:[t.jsx(c,{style:e.fill,enter:e.overlayEnter,leave:e.overlayLeave,children:n?t.jsx(l,{style:e.overlay}):null}),t.jsx(F,{fallback:t.jsx(T,{color:p.accented,delay:0}),children:t.jsx(c,{style:e.fill,enter:e.modalEnter,leave:e.modalLeave,children:n?t.jsx(l,{ref:b,style:e.container,children:t.jsx(x,{style:e.modalContainer,contentContainerStyle:e.modalContentContainer,children:t.jsxs(h,{autoFocus:!0,focusLock:!0,returnFocus:y,onEscapeKey:()=>{a!=null&&a()},style:e.trap,children:[t.jsx(l,{style:e.modal,children:f}),a!=null?t.jsx(C,{onPress:a,style:e.pressableOverlay}):null]})})}):null})})]})};O.__docgenInfo={description:"",methods:[],displayName:"BottomPanel",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},onPressClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},returnFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{O as B};
//# sourceMappingURL=BottomPanel-BUH_mbnv.js.map
