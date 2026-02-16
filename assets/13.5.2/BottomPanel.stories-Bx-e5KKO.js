import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-BDrjDWVs.js";import{r as p}from"./iframe-CKC8TFcw.js";import{B as m}from"./BottomPanel-CZRFLU32.js";import{a as h}from"./LakeButton-B3W5_wKz.js";import{L as y}from"./LakeTextInput-Cb6MMcvM.js";import{S as b}from"./_StoriesComponents-tFrAyDA2.js";import"./index-BtxSTZfF.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-xkjxj3WO.js";import"./FocusTrap-SLe-0oQo.js";import"./array-BfAlyugE.js";import"./Suspendable-CB9CQ_7-.js";import"./index-D7dhfXL5.js";import"./extends-CF3RwP-h.js";import"./TransitionView-D1j-uZcJ.js";import"./index-BRHmSvds.js";import"./Pressable-DL1Q9lHB.js";import"./Fill-BnDhUcDH.js";import"./LakeSelect-DBKWOPA5.js";import"./useDisclosure-ee8Veixn.js";import"./Popover-gmI2Oi1I.js";import"./useResponsive-BWm3t3Rd.js";import"./function-BcGf4f-I.js";import"./Separator-CetveP-Y.js";import"./index-DLJmVoRy.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-Bx-e5KKO.js.map
