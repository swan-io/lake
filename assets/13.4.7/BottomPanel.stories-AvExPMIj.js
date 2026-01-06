import{j as t,s as u,B as d,V as a,S as i,c as l}from"./ScrollView-DfyS9ucJ.js";import{r as p}from"./iframe-CcQs_VWI.js";import{B as m}from"./BottomPanel-CTMdEKrS.js";import{L as h}from"./LakeButton-CG4hAngE.js";import{L as y}from"./LakeTextInput-BbOqzCLx.js";import{S as b}from"./_StoriesComponents-O028LfDx.js";import"./index-CyCHMDaJ.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-shafRUHo.js";import"./FocusTrap-ijanWpcX.js";import"./array-BfAlyugE.js";import"./Suspendable-CpEz0SYV.js";import"./index-D5ko-dqD.js";import"./extends-CF3RwP-h.js";import"./TransitionView-i1KDYdX0.js";import"./index-xS3JbwCT.js";import"./Pressable-BLETj3Ik.js";import"./Fill-Di015s6d.js";import"./LakeSelect-DGG6nqEw.js";import"./useDisclosure-CQeUUBi2.js";import"./Popover-Hae6IXf3.js";import"./useResponsive-C7y3qPda.js";import"./function-hHJqVagI.js";import"./Separator-BceX3T1M.js";import"./index-DXHggsI8.js";const e=u.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(d,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-AvExPMIj.js.map
