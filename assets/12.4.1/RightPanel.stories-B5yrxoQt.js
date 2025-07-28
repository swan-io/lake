import{j as e,s as u,B as d,V as n,S as l,c as s}from"./ScrollView-CSzuTdb6.js";import{r as y}from"./iframe-Cqc6nQYF.js";import{L as g}from"./LakeButton-Bs2Zkdk0.js";import{R as c}from"./RightPanel-CcMSa49v.js";import{S as b}from"./_StoriesComponents-DJu_Bffw.js";import"./index-D6HG0m1x.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-C3HXEfzL.js";import"./index-aRz-Tv_i.js";import"./extends-CF3RwP-h.js";import"./useBodyClassName-B0pxYN8d.js";import"./FocusTrap-DcWrWBR8.js";import"./array-BfAlyugE.js";import"./Suspendable-B0p_6l5k.js";import"./ResponsiveContainer-DqQHefeA.js";import"./TransitionView-BNAJ1Ge0.js";import"./Separator-Kv91zN3v.js";const t=u.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:s.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:s.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:s.gray[200],borderRadius:8}}),v={title:"Layout/RightPanel",component:c},o=()=>{const[h,r]=y.useState(!1),m=()=>{r(!0)};return e.jsxs(b,{title:"RightPanel",description:["RightPanel is a component that allows you to render a panel on the right side of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[e.jsx(g,{onPress:m,size:"small",style:t.button,children:"Open right panel"}),e.jsx(c,{visible:h,onPressClose:()=>r(!1),children:e.jsxs(d,{style:t.panelContent,children:[e.jsx(n,{style:t.block1}),e.jsx(l,{height:16}),e.jsx(n,{style:t.block2}),e.jsx(l,{height:16}),e.jsx(n,{style:t.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=RightPanel.stories-B5yrxoQt.js.map
