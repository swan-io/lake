import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-CWYrxhKF.js";import{r as p}from"./iframe-BUbFFmyd.js";import{B as m}from"./BottomPanel-DKAB7ZNz.js";import{a as h}from"./LakeButton-eX4I6PGg.js";import{L as y}from"./LakeTextInput-DKLsLBj-.js";import{S as b}from"./_StoriesComponents-BVab1V5O.js";import"./index-DjkQ_e3e.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-DmP-BP4O.js";import"./FocusTrap-DEzWi3mf.js";import"./array-BfAlyugE.js";import"./Suspendable-cRkLJxLD.js";import"./index-DY4FZFMp.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CIwdulAF.js";import"./index-_qL_jy9O.js";import"./Pressable-ZZspeDLx.js";import"./Fill-DQzQnVLJ.js";import"./LakeSelect-BzMHqoPE.js";import"./i18n-Cj4cEqVq.js";import"./useBoolean-D1qtuYsc.js";import"./useDisclosure-DSbhgxqh.js";import"./FlatList-D-3E3xZA.js";import"./Popover-CUuezzym.js";import"./useResponsive-DxmBvMXc.js";import"./function-D0g3yAfj.js";import"./Separator-E3tiNE9g.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),K={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-ZXihlMV8.js.map
