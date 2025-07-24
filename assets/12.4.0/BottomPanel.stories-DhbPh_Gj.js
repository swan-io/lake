import{j as t,s as y,B as b,V as a,S as i,c as l}from"./ScrollView-BpKeoyda.js";import{r as u}from"./iframe-CWMeKguf.js";import{B as d}from"./BottomPanel-ClNWlkg9.js";import{L as k}from"./LakeButton-Cu3RNR1Y.js";import{L as g}from"./LakeTextInput-Ptku1sK0.js";import{S as x}from"./_StoriesComponents-BbXAWNsc.js";import"./index-_R99N2X5.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-CxFxWH1C.js";import"./FocusTrap-BeNiwDGz.js";import"./array-BfAlyugE.js";import"./Suspendable-DjB7jrBQ.js";import"./index-DzoyOb2H.js";import"./extends-CF3RwP-h.js";import"./TransitionView-DlQECTzQ.js";import"./index-BvxE-heN.js";import"./Pressable-Csb97OQu.js";import"./Fill-COR-yn6v.js";import"./LakeSelect-5V57O1zg.js";import"./useDisclosure-q1vyz9_t.js";import"./Popover-kpoNNWw6.js";import"./useResponsive-D5PLgf19.js";import"./function-DNc7Nyzl.js";import"./Separator-D7cqcYwv.js";import"./index-RKf_sDRT.js";const e=y.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),K={title:"Layout/BottomPanel",component:d},f=n=>{const[s,r]=u.useState(n.defaultValue??"");return t.jsx(g,{...n,value:s,onChange:h=>r(h.currentTarget.value)})},o=()=>{const[n,s]=u.useState(!1),r=()=>{s(!0)};return t.jsxs(x,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(k,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(d,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(b,{style:e.panelContent,children:[t.jsx(f,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-DhbPh_Gj.js.map
