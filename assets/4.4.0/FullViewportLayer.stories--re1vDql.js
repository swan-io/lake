import{s,g as f,a as e,P as V,j as a,V as t,c as g,S as u,d as v}from"./Space--CJhh2ls.js";import{r as c}from"./index-4g5l5LRQ.js";import{B as F}from"./commonStyles-gexsPAu8.js";import{F as L}from"./FocusTrap-G4wee94l.js";import{L as x}from"./LoadingView-8j_bzQji.js";import{T as m}from"./TransitionView-29rueTr1.js";import{G as S}from"./Grid-hVONCKVC.js";import{L as p}from"./LakeButton-m1qcEnsM.js";import{S as C}from"./_StoriesComponents-hyTb82fQ.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./a11y-2bSo9Xxj.js";import"./array-_tkD71ox.js";import"./colors-34oHE9gw.js";import"./index-Tlcri4W-.js";import"./Pressable-ooU0pyI3.js";const O="rgba(0, 0, 0, 0.6)",o=s.create({root:{...s.absoluteFillObject,overflow:"hidden"},inert:{pointerEvents:"none"},fill:{...s.absoluteFillObject,animationFillMode:"forwards",overflow:"hidden"},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},overlay:{...s.absoluteFillObject,backgroundColor:O},container:{...s.absoluteFillObject,transform:"translateZ(0px)",flexDirection:"row",alignItems:"stretch",backgroundColor:f.default},contentsEnter:{animationKeyframes:{"0%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsLeave:{animationKeyframes:{"100%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsContainer:{...s.absoluteFillObject,zIndex:2,transform:"translateZ(0px)",maxWidth:"100%"},contents:{...s.absoluteFillObject,maxWidth:"100%"}}),B=document.querySelector("#full-page-layer-root"),y=({visible:l,children:i})=>{const[h,w]=c.useState(l);return c.useEffect(()=>{w(l)},[l]),e(V,{container:B,children:a(t,{style:[o.root,!l&&o.inert],children:[e(m,{style:o.fill,enter:o.overlayEnter,leave:o.overlayLeave,children:l?e(t,{style:o.overlay}):null}),e(c.Suspense,{fallback:e(x,{color:f.accented,delay:0}),children:e(m,{style:o.fill,enter:o.containerEnter,leave:o.containerLeave,children:h?e(L,{focusLock:!0,autoFocus:!0,returnFocus:!0,style:o.container,children:e(m,{style:o.contentsContainer,enter:o.contentsEnter,leave:o.contentsLeave,children:e(t,{style:o.contents,children:e(t,{style:o.contentsContainer,children:i})})})}):null})})]})})};try{y.displayName="FullViewportLayer",y.__docgenInfo={description:"",displayName:"FullViewportLayer",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}}}}}catch{}const n=s.create({block:{height:200,backgroundColor:g.gray[100],borderRadius:5},grid:{padding:20},button:{alignSelf:"flex-start"},buttonClosed:{alignSelf:"flex-end",paddingRight:20}}),A={title:"Layout/FullViewportLayer",component:y},r=()=>{const[l,i]=c.useState(!1);return a(C,{title:"FullViewportLayer",description:["This component creates a new layer over all the page with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[e(p,{color:"shakespear",size:"small",onPress:()=>i(!0),style:n.button,children:"Open"}),a(y,{visible:l,children:[a(F,{style:n.buttonClosed,children:[e(u,{height:8}),e(p,{color:"shakespear",size:"small",onPress:()=>i(!1),children:"Close"})]}),e(u,{height:8}),e(v,{children:a(S,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:n.grid,children:[e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block}),e(t,{style:n.block})]})})]})]})};var d,b,k;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  return <StoryBlock title="FullViewportLayer" description={["This component creates a new layer over all the page with enter and leave animation. ", 'You can try it by clicking on "Open" button.']}>
      <LakeButton color="shakespear" size="small" onPress={() => setVisible(true)} style={styles.button}>
        Open
      </LakeButton>

      <FullViewportLayer visible={visible}>
        <Box style={styles.buttonClosed}>
          <Space height={8} />

          <LakeButton color="shakespear" size="small" onPress={() => setVisible(false)}>
            Close
          </LakeButton>
        </Box>

        <Space height={8} />

        <ScrollView>
          <Grid horizontalSpace={4} verticalSpace={4} numColumns={4} style={styles.grid}>
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
          </Grid>
        </ScrollView>
      </FullViewportLayer>
    </StoryBlock>;
}`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const M=["Default"];export{r as Default,M as __namedExportsOrder,A as default};
//# sourceMappingURL=FullViewportLayer.stories--re1vDql.js.map
