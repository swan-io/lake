import{S as a,e as f,a as e,j as n,V as t,c as V,b as u,o as g}from"./Space-40db50f8.js";import{r as c}from"./index-ebeaab24.js";import{B as v}from"./index-ba19cc6d.js";import{F}from"./FocusTrap-5b455df8.js";import{L}from"./LoadingView-adbe4538.js";import{P as S}from"./Portal-9f89f151.js";import{T as m}from"./TransitionView-35cdf7b1.js";import{G as x}from"./Grid-c4e5dc24.js";import{L as p}from"./LakeButton-323b3f10.js";import{S as C}from"./_StoriesComponents-bdf01449.js";import"./extends-98964cd2.js";import"./array-b3630b94.js";import"./colors-298625c7.js";import"./index-e2deb62e.js";import"./index-9c09ad76.js";import"./WithCurrentColor-8892ee00.js";import"./Icon-c462f19b.js";import"./Svg-a73958cb.js";import"./Pressable-8fde3226.js";import"./useMergeRefs-419c3822.js";const O="rgba(0, 0, 0, 0.6)",l=a.create({root:{...a.absoluteFillObject,overflow:"hidden"},inert:{pointerEvents:"none"},fill:{...a.absoluteFillObject,animationFillMode:"forwards",overflow:"hidden"},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},overlay:{...a.absoluteFillObject,backgroundColor:O},container:{...a.absoluteFillObject,transform:"translateZ(0px)",flexDirection:"row",alignItems:"stretch",backgroundColor:f.default},contentsEnter:{animationKeyframes:{"0%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsLeave:{animationKeyframes:{"100%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsContainer:{...a.absoluteFillObject,zIndex:2,transform:"translateZ(0px)",maxWidth:"100%"},contents:{...a.absoluteFillObject,maxWidth:"100%"}}),B=document.querySelector("#full-page-layer-root"),y=({visible:s,children:r})=>{const[h,w]=c.useState(s);return c.useEffect(()=>{w(s)},[s]),e(S,{container:B,children:n(t,{style:[l.root,!s&&l.inert],children:[e(m,{style:l.fill,enter:l.overlayEnter,leave:l.overlayLeave,children:s?e(t,{style:l.overlay}):null}),e(c.Suspense,{fallback:e(L,{color:f.accented,delay:0}),children:e(m,{style:l.fill,enter:l.containerEnter,leave:l.containerLeave,children:h?e(F,{focusLock:!0,autoFocus:!0,returnFocus:!0,style:l.container,children:e(m,{style:l.contentsContainer,enter:l.contentsEnter,leave:l.contentsLeave,children:e(t,{style:l.contents,children:e(t,{style:l.contentsContainer,children:r})})})}):null})})]})})};try{y.displayName="FullViewportLayer",y.__docgenInfo={description:"",displayName:"FullViewportLayer",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}}}}}catch{}const o=a.create({block:{height:200,backgroundColor:V.gray[100],borderRadius:5},grid:{padding:20},button:{alignSelf:"flex-start"},buttonClosed:{alignSelf:"flex-end",paddingRight:20}}),$={title:"Layout/FullViewportLayer",component:y},i=()=>{const[s,r]=c.useState(!1);return n(C,{title:"FullViewportLayer",description:["This component creates a new layer over all the page with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[e(p,{color:"shakespear",size:"small",onPress:()=>r(!0),style:o.button,children:"Open"}),n(y,{visible:s,children:[n(v,{style:o.buttonClosed,children:[e(u,{height:8}),e(p,{color:"shakespear",size:"small",onPress:()=>r(!1),children:"Close"})]}),e(u,{height:8}),e(g,{children:n(x,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block})]})})]})]})};var b,d,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(k=(d=i.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};const H=["Default"];export{i as Default,H as __namedExportsOrder,$ as default};
//# sourceMappingURL=FullViewportLayer.stories-04058619.js.map
