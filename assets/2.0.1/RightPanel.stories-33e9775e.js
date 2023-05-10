import{S as o,d as x,a as e,V as a,l as y,j as d,F as v,c as p,b as h}from"./Space-65f9bfa9.js";import{r as s}from"./index-8db94870.js";import{B as C}from"./index-5dcf0b89.js";import{L as F}from"./LakeButton-bed23784.js";import{u as L}from"./useBodyClassName-27d97f40.js";import{F as S}from"./FocusTrap-269094b2.js";import{L as B}from"./LoadingView-a1303365.js";import{P as _}from"./Portal-e966a77e.js";import{P as D}from"./Pressable-2163c0dc.js";import{R as f}from"./ResponsiveContainer-eb20e0c2.js";import{T as u}from"./TransitionView-e9c85895.js";import{S as E}from"./_StoriesComponents-9f567819.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Icon-4e86e06c.js";import"./Svg-7871e2fb.js";import"./index-2930334e.js";import"./array-b3630b94.js";import"./colors-298625c7.js";import"./index-8ce4a492.js";import"./WithCurrentColor-41bea5ae.js";import"./useMergeRefs-5d4c6491.js";const T="rgba(0, 0, 0, 0.6)",t=o.create({root:{...o.absoluteFillObject},inert:{pointerEvents:"none"},fill:{...o.absoluteFillObject},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(100px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(100px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},overlay:{...o.absoluteFillObject,backgroundColor:T},container:{...o.absoluteFillObject,transform:"translateZ(0px)",flexDirection:"row",alignItems:"stretch",backgroundColor:x.default},fillMax:{position:"absolute",top:0,bottom:0,right:0,width:"100%"},fillMaxLarge:{maxWidth:700},contentsEnter:{animationKeyframes:{"0%":{transform:"translateZ(0px) translateX(25px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsLeave:{animationKeyframes:{"100%":{transform:"translateZ(0px) translateX(25px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsContainer:{...o.absoluteFillObject,zIndex:2,transform:"translateZ(0px)",maxWidth:"100%",flexGrow:1},contents:{...o.absoluteFillObject,maxWidth:"100%",flexGrow:1}}),V=document.querySelector("#full-page-layer-root"),m=s.forwardRef(({visible:n,children:r,onPressClose:l},w)=>{const[P,O]=s.useState(n);return s.useEffect(()=>{O(n)},[n]),L("RightPanelOpen",{enabled:n}),e(_,{container:V,children:e(a,{style:[t.root,!n&&t.inert],children:e(f,{style:t.root,breakpoint:y.small,children:({large:R})=>d(v,{children:[e(u,{style:t.fill,enter:t.overlayEnter,leave:t.overlayLeave,children:n?l!=null?e(D,{style:t.overlay,onPress:l}):e(a,{style:t.overlay}):null}),e(s.Suspense,{fallback:e(B,{color:x.accented,delay:0}),children:e(u,{style:[t.fillMax,R&&t.fillMaxLarge],enter:t.containerEnter,leave:t.containerLeave,children:P?e(S,{onEscapeKey:l,focusLock:!0,autoFocus:!0,returnFocus:!0,ref:w,style:t.container,children:e(u,{style:t.contentsContainer,enter:t.contentsEnter,leave:t.contentsLeave,children:e(a,{style:t.contents,children:e(a,{style:t.contentsContainer,children:typeof r=="function"?e(f,{style:t.root,breakpoint:y.small,children:r}):r})})})}):null})})]})})})})});try{m.displayName="RightPanel",m.__docgenInfo={description:"",displayName:"RightPanel",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},onPressClose:{defaultValue:null,description:"",name:"onPressClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const i=o.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:p.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:p.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:p.gray[200],borderRadius:8}}),ae={title:"Layout/RightPanel",component:m},c=()=>{const[n,r]=s.useState(!1);return d(E,{title:"RightPanel",description:["RightPanel is a component that allows you to render a panel on the right side of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[e(F,{onPress:()=>{r(!0)},size:"small",style:i.button,children:"Open right panel"}),e(m,{visible:n,onPressClose:()=>r(!1),children:d(C,{style:i.panelContent,children:[e(a,{style:i.block1}),e(h,{height:16}),e(a,{style:i.block2}),e(h,{height:16}),e(a,{style:i.block3})]})})]})};var g,b,k;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  return <StoryBlock title="RightPanel" description={["RightPanel is a component that allows you to render a panel on the right side of the screen.", "To make this component work, you need a root element with the id \`full-page-layer-root\` below your #root-app element", "You can open it by clicking on the button below."]}>
      <LakeButton onPress={open} size="small" style={styles.button}>
        Open right panel
      </LakeButton>

      <RightPanel visible={isOpen} onPressClose={() => setIsOpen(false)}>
        <Box style={styles.panelContent}>
          <View style={styles.block1} />
          <Space height={16} />
          <View style={styles.block2} />
          <Space height={16} />
          <View style={styles.block3} />
        </Box>
      </RightPanel>
    </StoryBlock>;
}`,...(k=(b=c.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const re=["Default"];export{c as Default,re as __namedExportsOrder,ae as default};
//# sourceMappingURL=RightPanel.stories-33e9775e.js.map
