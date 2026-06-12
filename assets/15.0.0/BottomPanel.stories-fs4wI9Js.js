import{c as e,i as t}from"./preload-helper-C6cs2Kqh.js";import{o as n}from"./iframe-DaLHZq-5.js";import{St as r,U as i,bt as a,g as o,h as s,ht as c,i as l,it as u,r as d,st as f}from"./ScrollView-DrpkPocT.js";import{r as p,t as m}from"./LakeButton-DqeKUTzN.js";import{r as h,t as g}from"./_StoriesComponents-DAmgQRmw.js";import{n as _,t as v}from"./BottomPanel-D1ZLvLTN.js";import{n as y,t as b}from"./LakeTextInput-DFa9MnyN.js";var x,S,C,w,T,E,D;t((()=>{x=e(n()),c(),_(),o(),p(),y(),l(),f(),h(),S=i(),C=r.create({button:{alignSelf:`flex-start`},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:u.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:u.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:u.gray[200],borderRadius:8}}),w={title:`Layout/BottomPanel`,component:v},T=e=>{let[t,n]=(0,x.useState)(e.defaultValue??``);return(0,S.jsx)(b,{...e,value:t,onChange:e=>n(e.currentTarget.value)})},E=()=>{let[e,t]=(0,x.useState)(!1);return(0,S.jsxs)(g,{title:`BottomPanel`,description:[`BottomPanel is a component that allows you to render a panel on the bottom of the screen.`,"To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element",`You can open it by clicking on the button below.`],children:[(0,S.jsx)(m,{onPress:()=>{t(!0)},size:`small`,style:C.button,children:`Open bottom panel`}),(0,S.jsx)(v,{visible:e,onPressClose:()=>t(!1),children:(0,S.jsxs)(s,{style:C.panelContent,children:[(0,S.jsx)(T,{}),(0,S.jsx)(a,{style:C.block1}),(0,S.jsx)(d,{height:16}),(0,S.jsx)(a,{style:C.block2}),(0,S.jsx)(d,{height:16}),(0,S.jsx)(a,{style:C.block3})]})})]})},E.__docgenInfo={description:``,methods:[],displayName:`Default`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-fs4wI9Js.js.map