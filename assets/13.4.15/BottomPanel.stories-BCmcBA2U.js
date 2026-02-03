import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-DpZndJD-.js";import{r as p}from"./iframe-Cp82pBYH.js";import{B as m}from"./BottomPanel-DdjxgRIF.js";import{L as h}from"./LakeButton-TvFbC0iG.js";import{L as y}from"./LakeTextInput-Ctd6dcVE.js";import{S as b}from"./_StoriesComponents-BJiVLgzc.js";import"./index-CuigAy1F.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-BCtOORZp.js";import"./FocusTrap-_ogcdL10.js";import"./array-BfAlyugE.js";import"./Suspendable-61VLsZ4U.js";import"./index-B22isQOs.js";import"./extends-CF3RwP-h.js";import"./TransitionView-DI99MCD-.js";import"./index-B1fjDH9L.js";import"./Pressable-CBE7Rh5t.js";import"./Fill-C_gnV34j.js";import"./LakeSelect-DEckpDaM.js";import"./useDisclosure-Dn9xmk1m.js";import"./Popover-D7SJc5-6.js";import"./useResponsive-y9KA2PWp.js";import"./function-BxLYGdlH.js";import"./Separator-05rWY6s-.js";import"./index-CTFnU8JN.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const J=["Default"];export{o as Default,J as __namedExportsOrder,H as default};
//# sourceMappingURL=BottomPanel.stories-BCmcBA2U.js.map
