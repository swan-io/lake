import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-CwRta2uu.js";import{r as p}from"./iframe--f1go8Pa.js";import{B as m}from"./BottomPanel-BQmnotZH.js";import{a as h}from"./LakeButton-YVWrp7lC.js";import{L as y}from"./LakeTextInput-0O_bBayQ.js";import{S as b}from"./_StoriesComponents-DAeCHaJe.js";import"./index-1Ny4tXn4.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-ByytCsni.js";import"./FocusTrap-Xg4aXcdN.js";import"./array-BfAlyugE.js";import"./Suspendable-Bl81yrf9.js";import"./index-BP6TKObu.js";import"./extends-CF3RwP-h.js";import"./TransitionView-3J-zYzMx.js";import"./index-BZSkXHZy.js";import"./Pressable-DsjXsWn7.js";import"./Fill-8jL2C8bE.js";import"./LakeSelect-vicqUR2J.js";import"./i18n-JxmJv1Y7.js";import"./useBoolean-kxrwTIS_.js";import"./useDisclosure-BkwijpDf.js";import"./FlatList-ByvFx_4y.js";import"./Popover-BD8UwXJt.js";import"./useResponsive-Bs30hDw5.js";import"./function-C3rhzPll.js";import"./Separator-SiwiLAfX.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),K={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,K as default};
//# sourceMappingURL=BottomPanel.stories-DmE3yyC7.js.map
