import{S as a,e as f,a as e,j as n,V as t,c as V,b as u,d as g}from"./Space-aa12f50f.js";import{r as c}from"./index-8db94870.js";import{B as v}from"./index-16e654d9.js";import{F}from"./FocusTrap-5aa1af2d.js";import{L}from"./LoadingView-dcf4cc30.js";import{P as S}from"./Portal-d34e01ab.js";import{T as m}from"./TransitionView-e2f237a9.js";import{G as x}from"./Grid-1886a3aa.js";import{L as p}from"./LakeButton-b48b9104.js";import{S as C}from"./_StoriesComponents-9e7a188c.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./array-b3630b94.js";import"./colors-298625c7.js";import"./index-05836526.js";import"./index-8ce4a492.js";import"./WithCurrentColor-14d3a0e7.js";import"./Icon-ac26427e.js";import"./Svg-9d68b501.js";import"./Pressable-ca0a1f68.js";import"./useMergeRefs-d36e775e.js";const O="rgba(0, 0, 0, 0.6)",l=a.create({root:{...a.absoluteFillObject,overflow:"hidden"},inert:{pointerEvents:"none"},fill:{...a.absoluteFillObject,animationFillMode:"forwards",overflow:"hidden"},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},overlay:{...a.absoluteFillObject,backgroundColor:O},container:{...a.absoluteFillObject,transform:"translateZ(0px)",flexDirection:"row",alignItems:"stretch",backgroundColor:f.default},contentsEnter:{animationKeyframes:{"0%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsLeave:{animationKeyframes:{"100%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsContainer:{...a.absoluteFillObject,zIndex:2,transform:"translateZ(0px)",maxWidth:"100%"},contents:{...a.absoluteFillObject,maxWidth:"100%"}}),B=document.querySelector("#full-page-layer-root"),y=({visible:s,children:r})=>{const[h,w]=c.useState(s);return c.useEffect(()=>{w(s)},[s]),e(S,{container:B,children:n(t,{style:[l.root,!s&&l.inert],children:[e(m,{style:l.fill,enter:l.overlayEnter,leave:l.overlayLeave,children:s?e(t,{style:l.overlay}):null}),e(c.Suspense,{fallback:e(L,{color:f.accented,delay:0}),children:e(m,{style:l.fill,enter:l.containerEnter,leave:l.containerLeave,children:h?e(F,{focusLock:!0,autoFocus:!0,returnFocus:!0,style:l.container,children:e(m,{style:l.contentsContainer,enter:l.contentsEnter,leave:l.contentsLeave,children:e(t,{style:l.contents,children:e(t,{style:l.contentsContainer,children:r})})})}):null})})]})})};try{y.displayName="FullViewportLayer",y.__docgenInfo={description:"",displayName:"FullViewportLayer",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}}}}}catch{}const o=a.create({block:{height:200,backgroundColor:V.gray[100],borderRadius:5},grid:{padding:20},button:{alignSelf:"flex-start"},buttonClosed:{alignSelf:"flex-end",paddingRight:20}}),H={title:"Layout/FullViewportLayer",component:y},i=()=>{const[s,r]=c.useState(!1);return n(C,{title:"FullViewportLayer",description:["This component creates a new layer over all the page with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[e(p,{color:"shakespear",size:"small",onPress:()=>r(!0),style:o.button,children:"Open"}),n(y,{visible:s,children:[n(v,{style:o.buttonClosed,children:[e(u,{height:8}),e(p,{color:"shakespear",size:"small",onPress:()=>r(!1),children:"Close"})]}),e(u,{height:8}),e(g,{children:n(x,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block})]})})]})]})};var d,b,k;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const J=["Default"];export{i as Default,J as __namedExportsOrder,H as default};
//# sourceMappingURL=FullViewportLayer.stories-6b987b8e.js.map
