import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-Bd0ePppY.js";import{r as p}from"./iframe-BtrrGmPJ.js";import{B as m}from"./BottomPanel-D4c8KAzh.js";import{a as h}from"./LakeButton-5K9kc9GK.js";import{L as y}from"./LakeTextInput-DwuU48H4.js";import{S as b}from"./_StoriesComponents-C52RQDmj.js";import"./index-Dsa7eREZ.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-BcfyFQU2.js";import"./FocusTrap-BdhT87pd.js";import"./array-BfAlyugE.js";import"./Suspendable-DcThaAbT.js";import"./index-CqhfhOm1.js";import"./extends-CF3RwP-h.js";import"./TransitionView-D-HYJaux.js";import"./index-B09ogw1V.js";import"./Pressable-C-KOCohL.js";import"./Fill-IEtZm86j.js";import"./LakeSelect-m_lsBlHw.js";import"./i18n-jznXFVdt.js";import"./useBoolean-Dvof1oWP.js";import"./useDisclosure-thVYyJh6.js";import"./FlatList-ADcUDgIy.js";import"./Popover-GjxRHZXd.js";import"./useResponsive-3_V_difT.js";import"./function-CGdxU6dm.js";import"./Separator-DWEu2Q06.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),K={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-DdJahcZa.js.map
