import{j as t,s as y,B as b,V as a,S as i,c as l}from"./ScrollView-UkR5D8O1.js";import{r as u}from"./iframe-CqW0uoGa.js";import{B as d}from"./BottomPanel-Ci1dGpxF.js";import{L as k}from"./LakeButton-DigtY27C.js";import{L as g}from"./LakeTextInput-B_J7Wo5D.js";import{S as x}from"./_StoriesComponents-C27zPkAW.js";import"./index-DdkWdUu5.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-irTHR5gU.js";import"./FocusTrap-DXrJ-VzW.js";import"./array-BfAlyugE.js";import"./Suspendable-y_Rjtgnw.js";import"./index-BBCbnnHl.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BHJ7r2QL.js";import"./index-C7TqLgWl.js";import"./Pressable-Cs1x4Rry.js";import"./Fill-CnJHI-Oj.js";import"./LakeSelect-DWmcAOAA.js";import"./useDisclosure-CyOHRZMr.js";import"./Popover-DeFaEkUe.js";import"./useResponsive-HnCOhJDW.js";import"./function-CP9F_cTt.js";import"./Separator-CJjrcLE4.js";import"./index-Cr6RdgpR.js";const e=y.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),K={title:"Layout/BottomPanel",component:d},f=n=>{const[s,r]=u.useState(n.defaultValue??"");return t.jsx(g,{...n,value:s,onChange:h=>r(h.currentTarget.value)})},o=()=>{const[n,s]=u.useState(!1),r=()=>{s(!0)};return t.jsxs(x,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(k,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(d,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(b,{style:e.panelContent,children:[t.jsx(f,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  return <StoryBlock title="BottomPanel" description={["BottomPanel is a component that allows you to render a panel on the bottom of the screen.", "To make this component work, you need a root element with the id \`full-page-layer-root\` below your #root-app element", "You can open it by clicking on the button below."]}>
      <LakeButton onPress={open} size="small" style={styles.button}>
        Open bottom panel
      </LakeButton>

      <BottomPanel visible={isOpen} onPressClose={() => setIsOpen(false)}>
        <Box style={styles.panelContent}>
          <EditableInputText />
          <View style={styles.block1} />
          <Space height={16} />
          <View style={styles.block2} />
          <Space height={16} />
          <View style={styles.block3} />
        </Box>
      </BottomPanel>
    </StoryBlock>;
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,K as default};
//# sourceMappingURL=BottomPanel.stories-vYE_0DqF.js.map
