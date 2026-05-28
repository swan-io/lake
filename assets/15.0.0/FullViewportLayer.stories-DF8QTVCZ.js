import{c as e,i as t}from"./preload-helper-LFDnojF3.js";import{o as n}from"./iframe-CWV9VqtY.js";import{St as r,U as i,bt as a,d as o,f as s,g as c,h as l,ht as u,i as d,it as f,n as p,nt as m,r as h,st as g,t as _}from"./ScrollView-CNViPbhS.js";import{r as v,t as y}from"./LakeButton-Bua_X1Uv.js";import{r as b,t as x}from"./_StoriesComponents-DIGHRwqt.js";import{n as S,t as C}from"./FocusTrap-DOm46sPJ.js";import{i as w,n as T,r as E,t as D}from"./Suspendable-BKQfVzNw.js";import{n as O,t as k}from"./TransitionView-DG7PjUEQ.js";import{n as A,t as j}from"./Grid-B1H88bW-.js";var M,N,P,F,I,L,R=t((()=>{M=e(n()),u(),g(),S(),w(),s(),T(),O(),N=i(),P=`rgba(0, 0, 0, 0.6)`,F=r.create({root:{...r.absoluteFillObject,position:`fixed`},inert:{pointerEvents:`none`},fill:{...r.absoluteFillObject,animationFillMode:`forwards`,overflow:`hidden`},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:`200ms`,animationTimingFunction:`ease-in-out`},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:`200ms`,animationTimingFunction:`ease-in-out`},containerEnter:{animationKeyframes:{"0%":{opacity:0,transform:`translateX(200px)`}},animationDuration:`500ms`,animationTimingFunction:`ease-in-out`},containerLeave:{animationKeyframes:{"100%":{opacity:0,transform:`translateX(200px)`}},animationDuration:`500ms`,animationTimingFunction:`ease-in-out`},overlay:{...r.absoluteFillObject,backgroundColor:P},container:{...r.absoluteFillObject,flexDirection:`row`,alignItems:`stretch`,backgroundColor:m.default},contentsEnter:{animationKeyframes:{"0%":{transform:`translateX(50px)`}},animationDuration:`500ms`,animationTimingFunction:`ease-in-out`},contentsLeave:{animationKeyframes:{"100%":{transform:`translateX(50px)`}},animationDuration:`500ms`,animationTimingFunction:`ease-in-out`},contentsContainer:{...r.absoluteFillObject,zIndex:2,maxWidth:`100%`},contents:{...r.absoluteFillObject,maxWidth:`100%`}}),I=document.querySelector(`#full-page-layer-root`),L=({visible:e,children:t})=>{let[n,r]=(0,M.useState)(e);return(0,M.useEffect)(()=>{r(e)},[e]),(0,N.jsx)(o,{container:I,children:(0,N.jsxs)(a,{style:[F.root,!e&&F.inert],children:[(0,N.jsx)(k,{style:F.fill,enter:F.overlayEnter,leave:F.overlayLeave,children:e?(0,N.jsx)(a,{style:F.overlay}):null}),(0,N.jsx)(D,{fallback:(0,N.jsx)(E,{color:m.accented,delay:0}),children:(0,N.jsx)(k,{style:F.fill,enter:F.containerEnter,leave:F.containerLeave,children:n?(0,N.jsx)(C,{focusLock:!0,autoFocus:!0,returnFocus:!0,style:F.container,children:(0,N.jsx)(k,{style:F.contentsContainer,enter:F.contentsEnter,leave:F.contentsLeave,children:(0,N.jsx)(a,{style:F.contents,children:(0,N.jsx)(a,{style:F.contentsContainer,children:t})})})}):null})})]})})},L.__docgenInfo={description:``,methods:[],displayName:`FullViewportLayer`,props:{visible:{required:!0,tsType:{name:`boolean`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),z,B,V,H,U,W;t((()=>{z=e(n()),u(),c(),R(),A(),v(),p(),d(),g(),b(),B=i(),V=r.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{padding:20},button:{alignSelf:`flex-start`},buttonClosed:{alignSelf:`flex-end`,paddingRight:20}}),H={title:`Layout/FullViewportLayer`,component:L},U=()=>{let[e,t]=(0,z.useState)(!1);return(0,B.jsxs)(x,{title:`FullViewportLayer`,description:[`This component creates a new layer over all the page with enter and leave animation. `,`You can try it by clicking on "Open" button.`],children:[(0,B.jsx)(y,{color:`shakespear`,size:`small`,onPress:()=>t(!0),style:V.button,children:`Open`}),(0,B.jsxs)(L,{visible:e,children:[(0,B.jsxs)(l,{style:V.buttonClosed,children:[(0,B.jsx)(h,{height:8}),(0,B.jsx)(y,{color:`shakespear`,size:`small`,onPress:()=>t(!1),children:`Close`})]}),(0,B.jsx)(h,{height:8}),(0,B.jsx)(_,{children:(0,B.jsxs)(j,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:V.grid,children:[(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block}),(0,B.jsx)(a,{style:V.block})]})})]})]})},U.__docgenInfo={description:``,methods:[],displayName:`Default`},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FullViewportLayer.stories-DF8QTVCZ.js.map