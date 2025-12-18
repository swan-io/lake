import{j as t,s as u,B as d,V as a,S as i,c as l}from"./ScrollView-CUryR2xr.js";import{r as p}from"./iframe-zvoR18h7.js";import{B as m}from"./BottomPanel-Dz3WPqol.js";import{L as h}from"./LakeButton-DLZ1ybGP.js";import{L as y}from"./LakeTextInput-CZm0_s5b.js";import{S as b}from"./_StoriesComponents-DkKMpquy.js";import"./index-Dz2Rj8ZI.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-DCwOqV8d.js";import"./FocusTrap-DaqGzONW.js";import"./array-BfAlyugE.js";import"./Suspendable-DpW2Z585.js";import"./index-p6kpJ1SM.js";import"./extends-CF3RwP-h.js";import"./TransitionView-zpmRff8Q.js";import"./index-E_L4QJ96.js";import"./Pressable-DVwD0PX9.js";import"./Fill-C5qiVJqu.js";import"./LakeSelect-Dr8V-9q6.js";import"./useDisclosure-DUrPm3wL.js";import"./Popover-BucgDixh.js";import"./useResponsive-C71AKpwH.js";import"./function-pzKFsgT3.js";import"./Separator-D9sJF_3B.js";import"./index-BFZpe4ry.js";const e=u.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(d,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-cCmt_rJQ.js.map
