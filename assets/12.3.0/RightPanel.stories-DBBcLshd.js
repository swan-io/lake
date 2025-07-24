import{j as e,s as u,B as d,V as n,S as l,c as s}from"./ScrollView-CNOmGs5E.js";import{r as y}from"./iframe-B3hrjXl6.js";import{L as g}from"./LakeButton-CyYtgN8k.js";import{R as c}from"./RightPanel-5MlacFFY.js";import{S as b}from"./_StoriesComponents-CLKjTLC9.js";import"./index-BtPrENgL.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DUBN6rxF.js";import"./index-DSK6E9N3.js";import"./extends-CF3RwP-h.js";import"./useBodyClassName-DK863gaS.js";import"./FocusTrap-Di7-PLzB.js";import"./array-BfAlyugE.js";import"./Suspendable-CHqqFYig.js";import"./ResponsiveContainer-9IFyc32Q.js";import"./TransitionView-C4k9yIWH.js";import"./Separator-haCf0K29.js";const t=u.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:s.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:s.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:s.gray[200],borderRadius:8}}),v={title:"Layout/RightPanel",component:c},o=()=>{const[h,r]=y.useState(!1),m=()=>{r(!0)};return e.jsxs(b,{title:"RightPanel",description:["RightPanel is a component that allows you to render a panel on the right side of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[e.jsx(g,{onPress:m,size:"small",style:t.button,children:"Open right panel"}),e.jsx(c,{visible:h,onPressClose:()=>r(!1),children:e.jsxs(d,{style:t.panelContent,children:[e.jsx(n,{style:t.block1}),e.jsx(l,{height:16}),e.jsx(n,{style:t.block2}),e.jsx(l,{height:16}),e.jsx(n,{style:t.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=RightPanel.stories-DBBcLshd.js.map
