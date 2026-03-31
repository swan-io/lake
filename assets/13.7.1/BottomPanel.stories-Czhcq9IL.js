import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-DKhkmJ9r.js";import{r as p}from"./iframe-BDZ7czIn.js";import{B as m}from"./BottomPanel-BQTA6qVC.js";import{a as h}from"./LakeButton-vaH8-N13.js";import{L as y}from"./LakeTextInput-DgBGyNlO.js";import{S as b}from"./_StoriesComponents-CiKeQ8pH.js";import"./index-CYdohqqv.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-CkOULXBG.js";import"./FocusTrap-BzaosUFE.js";import"./array-BfAlyugE.js";import"./Suspendable-BftoAXq9.js";import"./index-5pWXkuNN.js";import"./extends-CF3RwP-h.js";import"./TransitionView-C-Fs-yju.js";import"./index-DIZDhswf.js";import"./Pressable-f9NgnVo1.js";import"./Fill-Cho29yXc.js";import"./LakeSelect-DxrextUn.js";import"./useBoolean-DGzOyuLH.js";import"./useDisclosure-Dr2Pc_iZ.js";import"./Popover-BM6jmRyd.js";import"./useResponsive-DxZckg37.js";import"./function-BlgEKRMq.js";import"./Separator-BfGg27BJ.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-Czhcq9IL.js.map
