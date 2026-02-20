import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-CYpcBaN0.js";import{r as p}from"./iframe-B4c1kK7a.js";import{B as m}from"./BottomPanel-D75_dLBA.js";import{a as h}from"./LakeButton-kJQCbzpZ.js";import{L as y}from"./LakeTextInput-CQcsbYI8.js";import{S as b}from"./_StoriesComponents-BvdZnswL.js";import"./index-1mR2vlNb.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-D-w59rlL.js";import"./FocusTrap-QgfnKNXy.js";import"./array-BfAlyugE.js";import"./Suspendable-DBWkmkrc.js";import"./index-DerzI2Od.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BDccuThO.js";import"./index-BQmfUWvL.js";import"./Pressable-Lv86KY_9.js";import"./Fill-C4W5Lnp8.js";import"./LakeSelect-ikT6lkBy.js";import"./useDisclosure-B6fTDeKg.js";import"./Popover-BRyY6b4l.js";import"./useResponsive-BJ-tml38.js";import"./function-tihies97.js";import"./Separator-Dga6BNnZ.js";import"./index-BitBq6oq.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-Z-vIe58q.js.map
