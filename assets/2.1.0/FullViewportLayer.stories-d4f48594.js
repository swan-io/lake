import{S as a,f,a as e,j as n,V as t,c as V,b as u,q as g}from"./Space-10c0535d.js";import{r as c}from"./index-ebeaab24.js";import{B as v}from"./index-33d543aa.js";import{F}from"./FocusTrap-2cf0eb49.js";import{L}from"./LoadingView-0271fff7.js";import{P as S}from"./Portal-a9f36de9.js";import{T as m}from"./TransitionView-1fbfd49f.js";import{G as x}from"./Grid-549a96cd.js";import{L as p}from"./LakeButton-ae494f42.js";import{S as C}from"./_StoriesComponents-95aa232a.js";import"./extends-98964cd2.js";import"./array-b3630b94.js";import"./colors-298625c7.js";import"./index-f297b6da.js";import"./index-9c09ad76.js";import"./WithCurrentColor-96c945ba.js";import"./Icon-a62b9fe2.js";import"./Svg-e4713af8.js";import"./Pressable-d8a27403.js";import"./useMergeRefs-1578fbfc.js";const O="rgba(0, 0, 0, 0.6)",l=a.create({root:{...a.absoluteFillObject,overflow:"hidden"},inert:{pointerEvents:"none"},fill:{...a.absoluteFillObject,animationFillMode:"forwards",overflow:"hidden"},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},overlay:{...a.absoluteFillObject,backgroundColor:O},container:{...a.absoluteFillObject,transform:"translateZ(0px)",flexDirection:"row",alignItems:"stretch",backgroundColor:f.default},contentsEnter:{animationKeyframes:{"0%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsLeave:{animationKeyframes:{"100%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsContainer:{...a.absoluteFillObject,zIndex:2,transform:"translateZ(0px)",maxWidth:"100%"},contents:{...a.absoluteFillObject,maxWidth:"100%"}}),B=document.querySelector("#full-page-layer-root"),y=({visible:s,children:r})=>{const[h,w]=c.useState(s);return c.useEffect(()=>{w(s)},[s]),e(S,{container:B,children:n(t,{style:[l.root,!s&&l.inert],children:[e(m,{style:l.fill,enter:l.overlayEnter,leave:l.overlayLeave,children:s?e(t,{style:l.overlay}):null}),e(c.Suspense,{fallback:e(L,{color:f.accented,delay:0}),children:e(m,{style:l.fill,enter:l.containerEnter,leave:l.containerLeave,children:h?e(F,{focusLock:!0,autoFocus:!0,returnFocus:!0,style:l.container,children:e(m,{style:l.contentsContainer,enter:l.contentsEnter,leave:l.contentsLeave,children:e(t,{style:l.contents,children:e(t,{style:l.contentsContainer,children:r})})})}):null})})]})})};try{y.displayName="FullViewportLayer",y.__docgenInfo={description:"",displayName:"FullViewportLayer",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}}}}}catch{}const o=a.create({block:{height:200,backgroundColor:V.gray[100],borderRadius:5},grid:{padding:20},button:{alignSelf:"flex-start"},buttonClosed:{alignSelf:"flex-end",paddingRight:20}}),$={title:"Layout/FullViewportLayer",component:y},i=()=>{const[s,r]=c.useState(!1);return n(C,{title:"FullViewportLayer",description:["This component creates a new layer over all the page with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[e(p,{color:"shakespear",size:"small",onPress:()=>r(!0),style:o.button,children:"Open"}),n(y,{visible:s,children:[n(v,{style:o.buttonClosed,children:[e(u,{height:8}),e(p,{color:"shakespear",size:"small",onPress:()=>r(!1),children:"Close"})]}),e(u,{height:8}),e(g,{children:n(x,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block})]})})]})]})};var b,d,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FullViewportLayer.stories-d4f48594.js.map
