import{j as e,P as x,V as t,s as l,b as p,B as k,S as m,h,c as f}from"./ScrollView-_8KYWiBf.js";import{r as c}from"./iframe-B6yiAHCJ.js";import{F as j}from"./FocusTrap-DVDjFLSF.js";import{S as w,L as V}from"./Suspendable-DO3RcyCz.js";import{T as r}from"./TransitionView-AmSyOQdS.js";import{G as g}from"./Grid-DLZ3Wmwn.js";import{L as u}from"./LakeButton-jIbtwXL1.js";import{S as F}from"./_StoriesComponents-9cFfX7wv.js";import"./index-BCgZZqfb.js";import"./preload-helper-D1IIBeq1.js";import"./array-BfAlyugE.js";import"./index-B_UXp7Ng.js";import"./extends-CF3RwP-h.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-D59uze9x.js";import"./Separator-CrOyoMki.js";const L="rgba(0, 0, 0, 0.6)",o=l.create({root:{...l.absoluteFillObject,position:"fixed"},inert:{pointerEvents:"none"},fill:{...l.absoluteFillObject,animationFillMode:"forwards",overflow:"hidden"},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},overlay:{...l.absoluteFillObject,backgroundColor:L},container:{...l.absoluteFillObject,flexDirection:"row",alignItems:"stretch",backgroundColor:p.default},contentsEnter:{animationKeyframes:{"0%":{transform:"translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsLeave:{animationKeyframes:{"100%":{transform:"translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsContainer:{...l.absoluteFillObject,zIndex:2,maxWidth:"100%"},contents:{...l.absoluteFillObject,maxWidth:"100%"}}),v=document.querySelector("#full-page-layer-root"),y=({visible:n,children:a})=>{const[d,b]=c.useState(n);return c.useEffect(()=>{b(n)},[n]),e.jsx(x,{container:v,children:e.jsxs(t,{style:[o.root,!n&&o.inert],children:[e.jsx(r,{style:o.fill,enter:o.overlayEnter,leave:o.overlayLeave,children:n?e.jsx(t,{style:o.overlay}):null}),e.jsx(w,{fallback:e.jsx(V,{color:p.accented,delay:0}),children:e.jsx(r,{style:o.fill,enter:o.containerEnter,leave:o.containerLeave,children:d?e.jsx(j,{focusLock:!0,autoFocus:!0,returnFocus:!0,style:o.container,children:e.jsx(r,{style:o.contentsContainer,enter:o.contentsEnter,leave:o.contentsLeave,children:e.jsx(t,{style:o.contents,children:e.jsx(t,{style:o.contentsContainer,children:a})})})}):null})})]})})};y.__docgenInfo={description:"",methods:[],displayName:"FullViewportLayer",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const s=l.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{padding:20},button:{alignSelf:"flex-start"},buttonClosed:{alignSelf:"flex-end",paddingRight:20}}),q={title:"Layout/FullViewportLayer",component:y},i=()=>{const[n,a]=c.useState(!1);return e.jsxs(F,{title:"FullViewportLayer",description:["This component creates a new layer over all the page with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[e.jsx(u,{color:"shakespear",size:"small",onPress:()=>a(!0),style:s.button,children:"Open"}),e.jsxs(y,{visible:n,children:[e.jsxs(k,{style:s.buttonClosed,children:[e.jsx(m,{height:8}),e.jsx(u,{color:"shakespear",size:"small",onPress:()=>a(!1),children:"Close"})]}),e.jsx(m,{height:8}),e.jsx(h,{children:e.jsxs(g,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:s.grid,children:[e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block})]})})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const W=["Default"];export{i as Default,W as __namedExportsOrder,q as default};
//# sourceMappingURL=FullViewportLayer.stories-Dd0GQdkv.js.map
