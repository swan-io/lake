import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-2xhZ79Jo.js";import{r as p}from"./iframe-6Cz0xUxr.js";import{B as m}from"./BottomPanel-B65yKyTK.js";import{a as h}from"./LakeButton-Bt_Pp0RC.js";import{L as y}from"./LakeTextInput-CXEJ08Rq.js";import{S as b}from"./_StoriesComponents-B5jelegm.js";import"./index-CPeLFKYT.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-BZt5f3Ah.js";import"./FocusTrap-DrinZoPG.js";import"./array-BfAlyugE.js";import"./Suspendable-DZeVFC46.js";import"./index-D0mbFrR9.js";import"./extends-CF3RwP-h.js";import"./TransitionView-zVoD7Fgi.js";import"./index-BvFFThNg.js";import"./Pressable-B8NN80MC.js";import"./Fill-D87rRCZB.js";import"./LakeSelect-CKMks7Ea.js";import"./i18n-DblhPVHl.js";import"./useBoolean-CLekn-nO.js";import"./useDisclosure-C9yhQDCE.js";import"./FlatList-Fq_C6ke6.js";import"./Popover-Bvm8G0kp.js";import"./useResponsive-DNsNc3fk.js";import"./function-BLX-rFak.js";import"./Separator-Do9AB7sg.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),K={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-5IMuIhJL.js.map
