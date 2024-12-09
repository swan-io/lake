import{j as e}from"./jsx-runtime-BlAj40OV.js";import{r as u}from"./index-Cs7sjTYM.js";import{s as d,c as n,B as y,V as s,S as l}from"./ScrollView-C_lwoIgf.js";import{L as g}from"./LakeButton-DnzG22cg.js";import{R as c}from"./RightPanel-Co_ZiARx.js";import{S as b}from"./_StoriesComponents-C-aplp8L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-W_iHORBJ.js";import"./index-CaijTTxg.js";import"./extends-CF3RwP-h.js";import"./useBodyClassName-DMoYUPTW.js";import"./FocusTrap-tt26dmM5.js";import"./array-BfAlyugE.js";import"./Suspendable-D-vBtNRb.js";import"./ResponsiveContainer-CT0OothZ.js";import"./TransitionView-CVLW7WBQ.js";import"./Separator-nprBuSRp.js";const t=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:n.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:n.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:n.gray[200],borderRadius:8}}),T={title:"Layout/RightPanel",component:c},o=()=>{const[h,r]=u.useState(!1),m=()=>{r(!0)};return e.jsxs(b,{title:"RightPanel",description:["RightPanel is a component that allows you to render a panel on the right side of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[e.jsx(g,{onPress:m,size:"small",style:t.button,children:"Open right panel"}),e.jsx(c,{visible:h,onPressClose:()=>r(!1),children:e.jsxs(y,{style:t.panelContent,children:[e.jsx(s,{style:t.block1}),e.jsx(l,{height:16}),e.jsx(s,{style:t.block2}),e.jsx(l,{height:16}),e.jsx(s,{style:t.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,a,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const Y=["Default"];export{o as Default,Y as __namedExportsOrder,T as default};
//# sourceMappingURL=RightPanel.stories-B-rA2Mue.js.map
