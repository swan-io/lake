import{j as t,s as u,B as d,V as a,S as i,c as l}from"./ScrollView-DRMbQjBv.js";import{r as p}from"./iframe-OdvdEG2R.js";import{B as m}from"./BottomPanel-XkLiASwl.js";import{L as h}from"./LakeButton-BwXkIUBw.js";import{L as y}from"./LakeTextInput-CSC0Q5oU.js";import{S as b}from"./_StoriesComponents-WOCjs0a4.js";import"./index-DmuaoBTZ.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-DnL4gyHA.js";import"./FocusTrap-DLxfHRfR.js";import"./array-BfAlyugE.js";import"./Suspendable-BLuk62gb.js";import"./index-U_FfaXe9.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CW1jLKZM.js";import"./index-BFKtvo1k.js";import"./Pressable-4SiCkZ85.js";import"./Fill-DNKWc7Ln.js";import"./LakeSelect-DD2Yb14r.js";import"./useDisclosure-C4f6rUix.js";import"./Popover-DrbcDPyN.js";import"./useResponsive-B7r_lvl7.js";import"./function-CYhX5S2T.js";import"./Separator-CAYVt1Y-.js";import"./index-DVoG6WRi.js";const e=u.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(d,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-BP8xicAe.js.map
