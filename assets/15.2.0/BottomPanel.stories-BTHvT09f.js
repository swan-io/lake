import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-BcHuJ41D.js";import{U as r,g as i,h as a,ht as o,i as s,it as c,kt as l,r as u,st as d,wt as f}from"./ScrollView-CrsrYS2O.js";import{r as p,t as m}from"./LakeButton-CfcGvfCb.js";import{r as h,t as g}from"./_StoriesComponents-BfslKxnP.js";import{n as _,t as v}from"./BottomPanel-D3EFH3BP.js";import{n as y,t as b}from"./LakeTextInput-BEIjr2-0.js";var x,S,C,w,T,E,D;t((()=>{x=e(n()),o(),_(),i(),p(),y(),s(),d(),h(),S=r(),C=l.create({button:{alignSelf:`flex-start`},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:c.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:c.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:c.gray[200],borderRadius:8}}),w={title:`Layout/BottomPanel`,component:v},T=e=>{let[t,n]=(0,x.useState)(e.defaultValue??``);return(0,S.jsx)(b,{...e,value:t,onChange:e=>n(e.currentTarget.value)})},E=()=>{let[e,t]=(0,x.useState)(!1);return(0,S.jsxs)(g,{title:`BottomPanel`,description:[`BottomPanel is a component that allows you to render a panel on the bottom of the screen.`,"To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element",`You can open it by clicking on the button below.`],children:[(0,S.jsx)(m,{onPress:()=>{t(!0)},size:`small`,style:C.button,children:`Open bottom panel`}),(0,S.jsx)(v,{visible:e,onPressClose:()=>t(!1),children:(0,S.jsxs)(a,{style:C.panelContent,children:[(0,S.jsx)(T,{}),(0,S.jsx)(f,{style:C.block1}),(0,S.jsx)(u,{height:16}),(0,S.jsx)(f,{style:C.block2}),(0,S.jsx)(u,{height:16}),(0,S.jsx)(f,{style:C.block3})]})})]})},E.__docgenInfo={description:``,methods:[],displayName:`Default`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D=[`Default`]}))();export{E as Default,D as __namedExportsOrder,w as default};
//# sourceMappingURL=BottomPanel.stories-BTHvT09f.js.map