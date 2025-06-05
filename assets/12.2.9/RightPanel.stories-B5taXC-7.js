import{j as e,s as u,B as d,V as n,S as l,c as s}from"./ScrollView-sI9q1Hi-.js";import{r as y}from"./iframe-D2cWRokJ.js";import{L as g}from"./LakeButton-2WgxBwi5.js";import{R as c}from"./RightPanel-C59sTTg0.js";import{S as b}from"./_StoriesComponents-5z-jYrQh.js";import"./index-nZb-kHcz.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DKVnCsyt.js";import"./index-BPFVi3Sk.js";import"./extends-CF3RwP-h.js";import"./useBodyClassName-C2JBTyV7.js";import"./FocusTrap-DYfClpzl.js";import"./array-BfAlyugE.js";import"./Suspendable-BZObsUGM.js";import"./ResponsiveContainer-D9Pzp4BX.js";import"./TransitionView-CY4WTdT5.js";import"./Separator-t7kBWJo4.js";const t=u.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:s.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:s.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:s.gray[200],borderRadius:8}}),v={title:"Layout/RightPanel",component:c},o=()=>{const[h,r]=y.useState(!1),m=()=>{r(!0)};return e.jsxs(b,{title:"RightPanel",description:["RightPanel is a component that allows you to render a panel on the right side of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[e.jsx(g,{onPress:m,size:"small",style:t.button,children:"Open right panel"}),e.jsx(c,{visible:h,onPressClose:()=>r(!1),children:e.jsxs(d,{style:t.panelContent,children:[e.jsx(n,{style:t.block1}),e.jsx(l,{height:16}),e.jsx(n,{style:t.block2}),e.jsx(l,{height:16}),e.jsx(n,{style:t.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const z=["Default"];export{o as Default,z as __namedExportsOrder,v as default};
//# sourceMappingURL=RightPanel.stories-B5taXC-7.js.map
