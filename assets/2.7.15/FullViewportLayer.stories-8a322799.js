import{S as n,g as k,j as e,P as g,a as r,V as t,c as V,b as m,q as F}from"./Space-f85095f8.js";import{B as v}from"./Box-f4fbfbba.js";import{r as c}from"./index-b9a8c83f.js";import{F as L}from"./FocusTrap-758e437a.js";import{L as x}from"./LoadingView-406d6625.js";import{T as y}from"./TransitionView-5833e7af.js";import{G as S}from"./Grid-5aa0270a.js";import{a as u}from"./LakeButton-e8594097.js";import{S as C}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./array-a4405b3e.js";import"./colors-298625c7.js";import"./index-4daf2301.js";import"./Pressable-7e9fd84c.js";import"./useMergeRefs-56399732.js";const O="rgba(0, 0, 0, 0.6)",l=n.create({root:{...n.absoluteFillObject,overflow:"hidden"},inert:{pointerEvents:"none"},fill:{...n.absoluteFillObject,animationFillMode:"forwards",overflow:"hidden"},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},overlay:{...n.absoluteFillObject,backgroundColor:O},container:{...n.absoluteFillObject,transform:"translateZ(0px)",flexDirection:"row",alignItems:"stretch",backgroundColor:k.default},contentsEnter:{animationKeyframes:{"0%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsLeave:{animationKeyframes:{"100%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsContainer:{...n.absoluteFillObject,zIndex:2,transform:"translateZ(0px)",maxWidth:"100%"},contents:{...n.absoluteFillObject,maxWidth:"100%"}}),B=document.querySelector("#full-page-layer-root"),i=({visible:a,children:h})=>{const[f,w]=c.useState(a);return c.useEffect(()=>{w(a)},[a]),e(g,{container:B,children:r(t,{style:[l.root,!a&&l.inert],children:[e(y,{style:l.fill,enter:l.overlayEnter,leave:l.overlayLeave,children:a?e(t,{style:l.overlay}):null}),e(c.Suspense,{fallback:e(x,{color:k.accented,delay:0}),children:e(y,{style:l.fill,enter:l.containerEnter,leave:l.containerLeave,children:f?e(L,{focusLock:!0,autoFocus:!0,returnFocus:!0,style:l.container,children:e(y,{style:l.contentsContainer,enter:l.contentsEnter,leave:l.contentsLeave,children:e(t,{style:l.contents,children:e(t,{style:l.contentsContainer,children:h})})})}):null})})]})})};try{i.displayName="FullViewportLayer",i.__docgenInfo={description:"",displayName:"FullViewportLayer",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}}}}}catch{}const o=n.create({block:{height:200,backgroundColor:V.gray[100],borderRadius:5},grid:{padding:20},button:{alignSelf:"flex-start"},buttonClosed:{alignSelf:"flex-end",paddingRight:20}}),W={title:"Layout/FullViewportLayer",component:i},s=({visible:a})=>r(C,{title:"FullViewportLayer",description:["This component creates a new layer over all the page with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[e(u,{color:"shakespear",size:"small",style:o.button,children:"Open"}),r(i,{visible:a,children:[r(v,{style:o.buttonClosed,children:[e(m,{height:8}),e(u,{color:"shakespear",size:"small",children:"Close"})]}),e(m,{height:8}),e(F,{children:r(S,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block}),e(t,{style:o.block})]})})]})]});var p,d,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`({
  visible
}: StoryArgs) => {
  return <StoryBlock title="FullViewportLayer" description={["This component creates a new layer over all the page with enter and leave animation. ", 'You can try it by clicking on "Open" button.']}>
      <LakeButton color="shakespear" size="small" style={styles.button}>
        Open
      </LakeButton>

      <FullViewportLayer visible={visible}>
        <Box style={styles.buttonClosed}>
          <Space height={8} />

          <LakeButton color="shakespear" size="small">
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
}`,...(b=(d=s.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const Y=["Default"];export{s as Default,Y as __namedExportsOrder,W as default};
//# sourceMappingURL=FullViewportLayer.stories-8a322799.js.map
