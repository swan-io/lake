import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-CEkK9Hd6.js";import{r as p}from"./iframe-BMPSa_nH.js";import{B as m}from"./BottomPanel-DdXacmU9.js";import{a as h}from"./LakeButton-BdruaVz3.js";import{L as y}from"./LakeTextInput-B4cbwjKl.js";import{S as b}from"./_StoriesComponents-C9KGsWsz.js";import"./index-DtsbNqQk.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-DP1kmiaP.js";import"./FocusTrap-BPI7e37h.js";import"./array-BfAlyugE.js";import"./Suspendable-CkaWaAoY.js";import"./index-DunI5Tmz.js";import"./extends-CF3RwP-h.js";import"./TransitionView-D8TKJhjg.js";import"./index-DyAO2k44.js";import"./Pressable-NCInIZh9.js";import"./Fill-CBVagzPo.js";import"./LakeSelect-C4CNElf7.js";import"./useDisclosure-BowS14xA.js";import"./Popover-BLkTygP9.js";import"./useResponsive-Cj3w86GI.js";import"./function-BzKDd819.js";import"./Separator--VsLgKIp.js";import"./index-Ba2uqmhy.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-C1BnSiXx.js.map
