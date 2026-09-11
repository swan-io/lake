import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-Dfd2BKQF.js";import{$ as r,Pt as i,Tt as a,_t as o,g as s,h as c,i as l,mt as u,r as d,zt as f}from"./ScrollView-B6KTtxSY.js";import{r as p,t as m}from"./LakeButton-Cvz4WPwM.js";import{r as h,t as g}from"./_StoriesComponents-CoRU051E.js";import{n as _,t as v}from"./BottomPanel-CIct4b9p.js";import{n as y,t as b}from"./LakeTextInput-Cv8xVJbx.js";var x,S,C,w,T,E,D;t((()=>{x=e(n()),a(),_(),s(),p(),y(),l(),o(),h(),S=r(),C=f.create({button:{alignSelf:`flex-start`},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:u.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:u.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:u.gray[200],borderRadius:8}}),w={title:`Layout/BottomPanel`,component:v},T=e=>{let[t,n]=(0,x.useState)(e.defaultValue??``);return(0,S.jsx)(b,{...e,value:t,onChange:e=>n(e.currentTarget.value)})},E=()=>{let[e,t]=(0,x.useState)(!1);return(0,S.jsxs)(g,{title:`BottomPanel`,description:[`BottomPanel is a component that allows you to render a panel on the bottom of the screen.`,"To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element",`You can open it by clicking on the button below.`],children:[(0,S.jsx)(m,{onPress:()=>{t(!0)},size:`small`,style:C.button,children:`Open bottom panel`}),(0,S.jsx)(v,{visible:e,onPressClose:()=>t(!1),children:(0,S.jsxs)(c,{style:C.panelContent,children:[(0,S.jsx)(T,{}),(0,S.jsx)(i,{style:C.block1}),(0,S.jsx)(d,{height:16}),(0,S.jsx)(i,{style:C.block2}),(0,S.jsx)(d,{height:16}),(0,S.jsx)(i,{style:C.block3})]})})]})},E.__docgenInfo={description:``,methods:[],displayName:`Default`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-SXrl4uv5.js.map