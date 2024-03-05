import{s as o,g as x,a as e,P as v,V as a,x as d,j as y,F as C,c as p,S as h}from"./Space-BgCYS1JP.js";import{r as s}from"./index-CBqU2yxZ.js";import{B as F}from"./commonStyles-CuveE6mM.js";import{L}from"./LakeButton-Cu5YTFET.js";import{u as S}from"./useBodyClassName-FAgY5CgW.js";import{F as B}from"./FocusTrap-BXZFcvTe.js";import{L as _}from"./LoadingView-BHocveJP.js";import{P as D}from"./Pressable-BGiiIFv7.js";import{R as f}from"./ResponsiveContainer-BHh-ijdN.js";import{T as u}from"./TransitionView-BppKIn2-.js";import{S as E}from"./_StoriesComponents-CDAqobYJ.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./index-CBOdIruW.js";import"./a11y-DXvpDVrG.js";import"./array-rjEBP2Ry.js";const T="rgba(0, 0, 0, 0.6)",t=o.create({root:{...o.absoluteFillObject},inert:{pointerEvents:"none"},fill:{...o.absoluteFillObject},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(100px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(100px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},overlay:{...o.absoluteFillObject,backgroundColor:T},container:{...o.absoluteFillObject,transform:"translateZ(0px)",flexDirection:"row",alignItems:"stretch",backgroundColor:x.default},fillMax:{position:"absolute",top:0,bottom:0,right:0,width:"100%"},fillMaxLarge:{maxWidth:700},contentsEnter:{animationKeyframes:{"0%":{transform:"translateZ(0px) translateX(25px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsLeave:{animationKeyframes:{"100%":{transform:"translateZ(0px) translateX(25px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsContainer:{...o.absoluteFillObject,zIndex:2,transform:"translateZ(0px)",maxWidth:"100%",flexGrow:1},contents:{...o.absoluteFillObject,maxWidth:"100%",flexGrow:1}}),V=document.querySelector("#full-page-layer-root"),m=s.forwardRef(({visible:n,children:r,onPressClose:l},w)=>{const[P,O]=s.useState(n);return s.useEffect(()=>{O(n)},[n]),S("RightPanelOpen",{enabled:n}),e(v,{container:V,children:e(a,{style:[t.root,!n&&t.inert],children:e(f,{style:t.root,breakpoint:d.small,children:({large:R})=>y(C,{children:[e(u,{style:t.fill,enter:t.overlayEnter,leave:t.overlayLeave,children:n?l!=null?e(D,{style:t.overlay,onPress:l}):e(a,{style:t.overlay}):null}),e(s.Suspense,{fallback:e(_,{color:x.accented,delay:0}),children:e(u,{style:[t.fillMax,R&&t.fillMaxLarge],enter:t.containerEnter,leave:t.containerLeave,children:P?e(B,{onEscapeKey:l,focusLock:!0,autoFocus:!0,returnFocus:!0,ref:w,style:t.container,children:e(u,{style:t.contentsContainer,enter:t.contentsEnter,leave:t.contentsLeave,children:e(a,{style:t.contents,children:e(a,{style:t.contentsContainer,children:typeof r=="function"?e(f,{style:t.root,breakpoint:d.small,children:r}):r})})})}):null})})]})})})})});try{m.displayName="RightPanel",m.__docgenInfo={description:"",displayName:"RightPanel",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},onPressClose:{defaultValue:null,description:"",name:"onPressClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const i=o.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:p.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:p.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:p.gray[200],borderRadius:8}}),Q={title:"Layout/RightPanel",component:m},c=()=>{const[n,r]=s.useState(!1);return y(E,{title:"RightPanel",description:["RightPanel is a component that allows you to render a panel on the right side of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[e(L,{onPress:()=>{r(!0)},size:"small",style:i.button,children:"Open right panel"}),e(m,{visible:n,onPressClose:()=>r(!1),children:y(F,{style:i.panelContent,children:[e(a,{style:i.block1}),e(h,{height:16}),e(a,{style:i.block2}),e(h,{height:16}),e(a,{style:i.block3})]})})]})};var g,b,k;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(k=(b=c.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const ee=["Default"];export{c as Default,ee as __namedExportsOrder,Q as default};
//# sourceMappingURL=RightPanel.stories-DL04Dsbd.js.map