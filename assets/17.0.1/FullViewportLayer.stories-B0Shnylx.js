import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-BEfGCJNn.js";import{$ as r,Pt as i,Tt as a,_t as o,d as s,f as c,ft as l,g as u,h as d,i as f,mt as p,n as m,r as h,t as g,zt as _}from"./ScrollView-Bti_909s.js";import{r as v,t as y}from"./LakeButton-D1ZZ0wPa.js";import{r as b,t as x}from"./_StoriesComponents-zlbAi_Kf.js";import{n as S,t as C}from"./FocusTrap-DQwvBTmy.js";import{i as w,n as T,r as E,t as D}from"./Suspendable-F60elUOD.js";import{n as O,t as k}from"./TransitionView-DZNtmfmf.js";import{n as A,t as j}from"./Grid-D6neW2oP.js";var M,N,P,F,I,L,R=t((()=>{M=e(n()),a(),o(),S(),w(),c(),T(),O(),N=r(),P=`rgba(0, 0, 0, 0.6)`,F=_.create({root:{..._.absoluteFillObject,position:`fixed`},inert:{pointerEvents:`none`},fill:{..._.absoluteFillObject,animationFillMode:`forwards`,overflow:`hidden`},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:`200ms`,animationTimingFunction:`ease-in-out`},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:`200ms`,animationTimingFunction:`ease-in-out`},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:`translateX(200px)`}},animationDuration:`500ms`,animationTimingFunction:`ease-in-out`},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:`translateX(200px)`}},animationDuration:`500ms`,animationTimingFunction:`ease-in-out`},overlay:{..._.absoluteFillObject,backgroundColor:P},container:{..._.absoluteFillObject,flexDirection:`row`,alignItems:`stretch`,backgroundColor:l.default},contentsEnter:{animationKeyframes:{"0%":{transform:`translateX(50px)`}},animationDuration:`500ms`,animationTimingFunction:`ease-in-out`},contentsLeave:{animationKeyframes:{"100%":{transform:`translateX(50px)`}},animationDuration:`500ms`,animationTimingFunction:`ease-in-out`},contentsContainer:{..._.absoluteFillObject,zIndex:2,maxWidth:`100%`},contents:{..._.absoluteFillObject,maxWidth:`100%`}}),I=document.querySelector(`#full-page-layer-root`),L=({visible:e,children:t})=>{let[n,r]=(0,M.useState)(e);return(0,M.useEffect)(()=>{r(e)},[e]),(0,N.jsx)(s,{container:I,children:(0,N.jsxs)(i,{style:[F.root,!e&&F.inert],children:[(0,N.jsx)(k,{style:F.fill,enter:F.overlayEnter,leave:F.overlayLeave,children:e?(0,N.jsx)(i,{style:F.overlay}):null}),(0,N.jsx)(D,{fallback:(0,N.jsx)(E,{color:l.accented,delay:0}),children:(0,N.jsx)(k,{style:F.fill,enter:F.containerEnter,leave:F.containerLeave,children:n?(0,N.jsx)(C,{focusLock:!0,autoFocus:!0,returnFocus:!0,style:F.container,children:(0,N.jsx)(k,{style:F.contentsContainer,enter:F.contentsEnter,leave:F.contentsLeave,children:(0,N.jsx)(i,{style:F.contents,children:(0,N.jsx)(i,{style:F.contentsContainer,children:t})})})}):null})})]})})},L.__docgenInfo={description:``,methods:[],displayName:`FullViewportLayer`,props:{visible:{required:!0,tsType:{name:`boolean`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),z,B,V,H,U,W;t((()=>{z=e(n()),a(),u(),R(),A(),v(),m(),f(),o(),b(),B=r(),V=_.create({block:{height:200,backgroundColor:p.gray[100],borderRadius:5},grid:{padding:20},button:{alignSelf:`flex-start`},buttonClosed:{alignSelf:`flex-end`,paddingRight:20}}),H={title:`Layout/FullViewportLayer`,component:L},U=()=>{let[e,t]=(0,z.useState)(!1);return(0,B.jsxs)(x,{title:`FullViewportLayer`,description:[`This component creates a new layer over all the page with enter and leave animation. `,`You can try it by clicking on "Open" button.`],children:[(0,B.jsx)(y,{color:`shakespear`,size:`small`,onPress:()=>t(!0),style:V.button,children:`Open`}),(0,B.jsxs)(L,{visible:e,children:[(0,B.jsxs)(d,{style:V.buttonClosed,children:[(0,B.jsx)(h,{height:8}),(0,B.jsx)(y,{color:`shakespear`,size:`small`,onPress:()=>t(!1),children:`Close`})]}),(0,B.jsx)(h,{height:8}),(0,B.jsx)(g,{children:(0,B.jsxs)(j,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:V.grid,children:[(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block}),(0,B.jsx)(i,{style:V.block})]})})]})]})},U.__docgenInfo={description:``,methods:[],displayName:`Default`},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}},W=[`Default`]}))();export{U as Default,W as __namedExportsOrder,H as default};
//# sourceMappingURL=FullViewportLayer.stories-B0Shnylx.js.map