import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-Bv-7W10i.js";import{r as p}from"./iframe-BKB4-Op6.js";import{B as m}from"./BottomPanel-BUgCgrT5.js";import{a as h}from"./LakeButton-CqExPVWx.js";import{L as y}from"./LakeTextInput-D82OFWgH.js";import{S as b}from"./_StoriesComponents-Ccxy1Ulb.js";import"./index-BHsVyq_1.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-DtsDaodd.js";import"./FocusTrap-blqXazbA.js";import"./array-BfAlyugE.js";import"./Suspendable-DYHm4Rq6.js";import"./index-yLlqwiCv.js";import"./extends-CF3RwP-h.js";import"./TransitionView-D6zOxtOH.js";import"./index-DdAnXd7R.js";import"./Pressable-T_sLIwf1.js";import"./Fill-ecBfUHK4.js";import"./LakeSelect-BdiAmEVn.js";import"./useDisclosure-CpsOVZ6M.js";import"./Popover-fIQ-6Nux.js";import"./useResponsive-BP81PQqS.js";import"./function-CFa9ef8k.js";import"./Separator-DCCnFssJ.js";import"./index-Dn64gGH8.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-jxDsAHkA.js.map
