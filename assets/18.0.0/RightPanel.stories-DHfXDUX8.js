import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-Dfd2BKQF.js";import{$ as r,Pt as i,Tt as a,_t as o,g as s,h as c,i as l,mt as u,r as d,zt as f}from"./ScrollView-B6KTtxSY.js";import{r as p,t as m}from"./LakeButton-Cvz4WPwM.js";import{r as h,t as g}from"./_StoriesComponents-CoRU051E.js";import{n as _,t as v}from"./RightPanel-mheQqMaO.js";var y,b,x,S,C,w;t((()=>{y=e(n()),a(),s(),p(),_(),l(),o(),h(),b=r(),x=f.create({button:{alignSelf:`flex-start`},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:u.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:u.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:u.gray[200],borderRadius:8}}),S={title:`Layout/RightPanel`,component:v},C=()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(g,{title:`RightPanel`,description:[`RightPanel is a component that allows you to render a panel on the right side of the screen.`,"To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element",`You can open it by clicking on the button below.`],children:[(0,b.jsx)(m,{onPress:()=>{t(!0)},size:`small`,style:x.button,children:`Open right panel`}),(0,b.jsx)(v,{visible:e,onPressClose:()=>t(!1),children:(0,b.jsxs)(c,{style:x.panelContent,children:[(0,b.jsx)(i,{style:x.block1}),(0,b.jsx)(d,{height:16}),(0,b.jsx)(i,{style:x.block2}),(0,b.jsx)(d,{height:16}),(0,b.jsx)(i,{style:x.block3})]})})]})},C.__docgenInfo={description:``,methods:[],displayName:`Default`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  return <StoryBlock title="RightPanel" description={["RightPanel is a component that allows you to render a panel on the right side of the screen.", "To make this component work, you need a root element with the id \`full-page-layer-root\` below your #root-app element", "You can open it by clicking on the button below."]}>
      <LakeButton onPress={open} size="small" style={styles.button}>
        Open right panel
      </LakeButton>

      <RightPanel visible={isOpen} onPressClose={() => setIsOpen(false)}>
        <Box style={styles.panelContent}>
          <View style={styles.block1} />
          <Space height={16} />
          <View style={styles.block2} />
          <Space height={16} />
          <View style={styles.block3} />
        </Box>
      </RightPanel>
    </StoryBlock>;
}`,...C.parameters?.docs?.source}}},w=[`Default`]}))();export{C as Default,w as __namedExportsOrder,S as default};
//# sourceMappingURL=RightPanel.stories-DHfXDUX8.js.map