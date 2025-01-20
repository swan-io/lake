import{j as e}from"./jsx-runtime-DT09rT5F.js";import{r as c}from"./index-DXKZGL6g.js";import{s as l,e as x,P as h,V as t,c as j,B as w,S as m,j as V}from"./ScrollView-uRWD7sHo.js";import{F as g}from"./FocusTrap-BTtxEFod.js";import{S as F,L}from"./Suspendable-DcBC6Bz-.js";import{T as r}from"./TransitionView-CHCst6-1.js";import{G as v}from"./Grid-D_uIS_Xt.js";import{L as u}from"./LakeButton-DOM2fx1m.js";import{S}from"./_StoriesComponents-BTk4MJDM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CKeW-Qoz.js";import"./array-BfAlyugE.js";import"./index-oSnkc6z1.js";import"./extends-CF3RwP-h.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-DcSKb_Ww.js";import"./Separator-Bs5w-fAv.js";const C="rgba(0, 0, 0, 0.6)",o=l.create({root:{...l.absoluteFillObject,position:"fixed"},inert:{pointerEvents:"none"},fill:{...l.absoluteFillObject,animationFillMode:"forwards",overflow:"hidden"},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateX(200px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},overlay:{...l.absoluteFillObject,backgroundColor:C},container:{...l.absoluteFillObject,flexDirection:"row",alignItems:"stretch",backgroundColor:x.default},contentsEnter:{animationKeyframes:{"0%":{transform:"translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsLeave:{animationKeyframes:{"100%":{transform:"translateX(50px)"}},animationDuration:"500ms",animationTimingFunction:"ease-in-out"},contentsContainer:{...l.absoluteFillObject,zIndex:2,maxWidth:"100%"},contents:{...l.absoluteFillObject,maxWidth:"100%"}}),O=document.querySelector("#full-page-layer-root"),y=({visible:n,children:a})=>{const[k,f]=c.useState(n);return c.useEffect(()=>{f(n)},[n]),e.jsx(h,{container:O,children:e.jsxs(t,{style:[o.root,!n&&o.inert],children:[e.jsx(r,{style:o.fill,enter:o.overlayEnter,leave:o.overlayLeave,children:n?e.jsx(t,{style:o.overlay}):null}),e.jsx(F,{fallback:e.jsx(L,{color:x.accented,delay:0}),children:e.jsx(r,{style:o.fill,enter:o.containerEnter,leave:o.containerLeave,children:k?e.jsx(g,{focusLock:!0,autoFocus:!0,returnFocus:!0,style:o.container,children:e.jsx(r,{style:o.contentsContainer,enter:o.contentsEnter,leave:o.contentsLeave,children:e.jsx(t,{style:o.contents,children:e.jsx(t,{style:o.contentsContainer,children:a})})})}):null})})]})})};y.__docgenInfo={description:"",methods:[],displayName:"FullViewportLayer",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const s=l.create({block:{height:200,backgroundColor:j.gray[100],borderRadius:5},grid:{padding:20},button:{alignSelf:"flex-start"},buttonClosed:{alignSelf:"flex-end",paddingRight:20}}),M={title:"Layout/FullViewportLayer",component:y},i=()=>{const[n,a]=c.useState(!1);return e.jsxs(S,{title:"FullViewportLayer",description:["This component creates a new layer over all the page with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[e.jsx(u,{color:"shakespear",size:"small",onPress:()=>a(!0),style:s.button,children:"Open"}),e.jsxs(y,{visible:n,children:[e.jsxs(w,{style:s.buttonClosed,children:[e.jsx(m,{height:8}),e.jsx(u,{color:"shakespear",size:"small",onPress:()=>a(!1),children:"Close"})]}),e.jsx(m,{height:8}),e.jsx(V,{children:e.jsxs(v,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:s.grid,children:[e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block}),e.jsx(t,{style:s.block})]})})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,d,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(b=(d=i.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const U=["Default"];export{i as Default,U as __namedExportsOrder,M as default};
//# sourceMappingURL=FullViewportLayer.stories-BMae12ej.js.map
