import{j as e,B as c,V as n,S as l,s as h,c as s}from"./ScrollView-DyAWC5hk.js";import{r as m}from"./iframe-mG9qwCeg.js";import{a as u}from"./LakeButton-BqdhGzRk.js";import{R as a}from"./RightPanel-Bo3ZV2sc.js";import{S as d}from"./_StoriesComponents-D3w01lJZ.js";import"./index-C2j6Xcq-.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-D2RMR3Qp.js";import"./index-DYUa0c_w.js";import"./extends-CF3RwP-h.js";import"./useBodyClassName-DMeQHYEU.js";import"./FocusTrap-C4gPB5WS.js";import"./array-BfAlyugE.js";import"./Suspendable-KOquHltP.js";import"./ResponsiveContainer-E8FlboYv.js";import"./TransitionView-DYLKAvse.js";import"./Separator-Cx0ZvMdv.js";const t=h.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:s.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:s.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:s.gray[200],borderRadius:8}}),D={title:"Layout/RightPanel",component:a},o=()=>{const[i,r]=m.useState(!1),p=()=>{r(!0)};return e.jsxs(d,{title:"RightPanel",description:["RightPanel is a component that allows you to render a panel on the right side of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[e.jsx(u,{onPress:p,size:"small",style:t.button,children:"Open right panel"}),e.jsx(a,{visible:i,onPressClose:()=>r(!1),children:e.jsxs(c,{style:t.panelContent,children:[e.jsx(n,{style:t.block1}),e.jsx(l,{height:16}),e.jsx(n,{style:t.block2}),e.jsx(l,{height:16}),e.jsx(n,{style:t.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,D as default};
//# sourceMappingURL=RightPanel.stories-CPTT3gWw.js.map
