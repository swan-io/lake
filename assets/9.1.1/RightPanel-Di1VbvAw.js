import{s as n,d as u,j as t,m as y,V as o,l as m}from"./ScrollView-Dmfs8He9.js";import{r as s}from"./index-Cs7sjTYM.js";import{u as b}from"./useBodyClassName-DMoYUPTW.js";import{F as g}from"./FocusTrap-CyFvuy2Q.js";import{S as j,L as h}from"./Suspendable-cL102Ud7.js";import{P as F}from"./Pressable-CsoCO-Wl.js";import{R as c}from"./ResponsiveContainer-BS8a6ju2.js";import{T as l}from"./TransitionView-CPz4xhYj.js";const v="rgba(0, 0, 0, 0.6)",e=n.create({root:{...n.absoluteFillObject,position:"fixed"},inert:{pointerEvents:"none"},fill:{...n.absoluteFillObject},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(100px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(100px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},overlay:{...n.absoluteFillObject,backgroundColor:v},container:{...n.absoluteFillObject,transform:"translateZ(0px)",flexDirection:"row",alignItems:"stretch",backgroundColor:u.default},fillMax:{position:"absolute",top:0,bottom:0,right:0,width:"100%"},fillMaxLarge:{maxWidth:700},contentsEnter:{animationKeyframes:{"0%":{transform:"translateZ(0px) translateX(25px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsLeave:{animationKeyframes:{"100%":{transform:"translateZ(0px) translateX(25px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsContainer:{...n.absoluteFillObject,zIndex:2,transform:"translateZ(0px)",maxWidth:"100%",flexGrow:1},contents:{...n.absoluteFillObject,maxWidth:"100%",flexGrow:1}}),R=document.querySelector("#full-page-layer-root"),L=s.forwardRef(({visible:a,children:r,onPressClose:i},p)=>{const[d,f]=s.useState(a);return s.useEffect(()=>{f(a)},[a]),b("RightPanelOpen",{enabled:a}),t.jsx(y,{container:R,children:t.jsx(o,{style:[e.root,!a&&e.inert],children:t.jsx(c,{style:e.root,breakpoint:m.small,children:({large:x})=>t.jsxs(t.Fragment,{children:[t.jsx(l,{style:e.fill,enter:e.overlayEnter,leave:e.overlayLeave,children:a?i!=null?t.jsx(F,{style:e.overlay,onPress:i}):t.jsx(o,{style:e.overlay}):null}),t.jsx(j,{fallback:t.jsx(h,{color:u.accented,delay:0}),children:t.jsx(l,{style:[e.fillMax,x&&e.fillMaxLarge],enter:e.containerEnter,leave:e.containerLeave,children:d?t.jsx(g,{onEscapeKey:i,focusLock:!0,autoFocus:!0,returnFocus:!0,ref:p,style:e.container,children:t.jsx(l,{style:e.contentsContainer,enter:e.contentsEnter,leave:e.contentsLeave,children:t.jsx(o,{style:e.contents,children:t.jsx(o,{style:e.contentsContainer,children:typeof r=="function"?t.jsx(c,{style:e.root,breakpoint:m.small,children:r}):r})})})}):null})})]})})})})});L.__docgenInfo={description:"",methods:[],displayName:"RightPanel",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((context: Context) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},onPressClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{L as R};
//# sourceMappingURL=RightPanel-Di1VbvAw.js.map
