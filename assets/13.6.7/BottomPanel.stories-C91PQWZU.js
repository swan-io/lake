import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-DfRU4JIV.js";import{r as p}from"./iframe-DCPmmiVR.js";import{B as m}from"./BottomPanel-D5vNzYd8.js";import{a as h}from"./LakeButton-Cg7sA7oH.js";import{L as y}from"./LakeTextInput-CoGRXkPI.js";import{S as b}from"./_StoriesComponents-B09iAAuS.js";import"./index-DGw0Gvdw.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-DZdTN0SV.js";import"./FocusTrap-JecJckfA.js";import"./array-BfAlyugE.js";import"./Suspendable-X8oSpv-U.js";import"./index-D1Uh3Mql.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CpOVuaP9.js";import"./index-BXxiWdsg.js";import"./Pressable-V1kaQHol.js";import"./Fill-DjsrgE-p.js";import"./LakeSelect-nitVtJjg.js";import"./useDisclosure-BUAHMw5l.js";import"./Popover-BcQFcp3n.js";import"./useResponsive-B37_RA1a.js";import"./function-DKqoDENV.js";import"./Separator-BsRbrYVE.js";import"./index-BA2xb3wG.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-C91PQWZU.js.map
