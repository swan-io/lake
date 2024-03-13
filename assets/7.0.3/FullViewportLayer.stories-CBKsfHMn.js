import{s as o,d as x,j as e,P as h,V as t,c as j,B as w,S as m,v as V}from"./Space-ChRvaji1.js";import{r}from"./index-CBqU2yxZ.js";import{F as g}from"./FocusTrap-C4GXdqkW.js";import{L as v}from"./LoadingView-DwJWTgnl.js";import{T as c}from"./TransitionView-3jE9ifvD.js";import{G as F}from"./Grid-BcxNostp.js";import{L as u}from"./LakeButton-DtHKm00B.js";import{S as L}from"./_StoriesComponents-DuIeS3XV.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./a11y-DXvpDVrG.js";import"./array-rjEBP2Ry.js";import"./index-BkhpigpK.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-DD_-8IPu.js";const S="rgba(0, 0, 0, 0.6)",n=o.create({root:{...o.absoluteFillObject,overflow:"hidden"},inert:{pointerEvents:"none"},fill:{...o.absoluteFillObject,animationFillMode:"forwards",overflow:"hidden"},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},overlay:{...o.absoluteFillObject,backgroundColor:S},container:{...o.absoluteFillObject,transform:"translateZ(0px)",flexDirection:"row",alignItems:"stretch",backgroundColor:x.default},contentsEnter:{animationKeyframes:{"0%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsLeave:{animationKeyframes:{"100%":{transform:"translateZ(0px) translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsContainer:{...o.absoluteFillObject,zIndex:2,transform:"translateZ(0px)",maxWidth:"100%"},contents:{...o.absoluteFillObject,maxWidth:"100%"}}),C=document.querySelector("#full-page-layer-root"),y=({visible:l,children:i})=>{const[k,f]=r.useState(l);return r.useEffect(()=>{f(l)},[l]),e.jsx(h,{container:C,children:e.jsxs(t,{style:[n.root,!l&&n.inert],children:[e.jsx(c,{style:n.fill,enter:n.overlayEnter,leave:n.overlayLeave,children:l?e.jsx(t,{style:n.overlay}):null}),e.jsx(r.Suspense,{fallback:e.jsx(v,{color:x.accented,delay:0}),children:e.jsx(c,{style:n.fill,enter:n.containerEnter,leave:n.containerLeave,children:k?e.jsx(g,{focusLock:!0,autoFocus:!0,returnFocus:!0,style:n.container,children:e.jsx(c,{style:n.contentsContainer,enter:n.contentsEnter,leave:n.contentsLeave,children:e.jsx(t,{style:n.contents,children:e.jsx(t,{style:n.contentsContainer,children:i})})})}):null})})]})})};y.__docgenInfo={description:"",methods:[],displayName:"FullViewportLayer",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const s=o.create({block:{height:200,backgroundColor:j.gray[100],borderRadius:5},grid:{padding:20},button:{alignSelf:"flex-start"},buttonClosed:{alignSelf:"flex-end",paddingRight:20}}),W={title:"Layout/FullViewportLayer",component:y},a=()=>{const[l,i]=r.useState(!1);return e.jsxs(L,{title:"FullViewportLayer",description:["This component creates a new layer over all the page with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[e.jsx(u,{color:"shakespear",size:"small",onPress:()=>i(!0),style:s.button,children:"Open"}),e.jsxs(y,{visible:l,children:[e.jsxs(w,{style:s.buttonClosed,children:[e.jsx(m,{height:8}),e.jsx(u,{color:"shakespear",size:"small",onPress:()=>i(!1),children:"Close"})]}),e.jsx(m,{height:8}),e.jsx(V,{children:e.jsxs(F,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:s.grid,children:[e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block})]})})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,d,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(b=(d=a.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const Y=["Default"];export{a as Default,Y as __namedExportsOrder,W as default};
//# sourceMappingURL=FullViewportLayer.stories-CBKsfHMn.js.map
