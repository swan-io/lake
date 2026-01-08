import{j as t,s as u,B as d,V as a,S as i,c as l}from"./ScrollView-BxtBFVF1.js";import{r as p}from"./iframe-DKDYG3Rz.js";import{B as m}from"./BottomPanel-oNgH0lS-.js";import{L as h}from"./LakeButton-Cu_y-WAQ.js";import{L as y}from"./LakeTextInput-DPvMIrO9.js";import{S as b}from"./_StoriesComponents-D4e6yPMB.js";import"./index-zDXlRz9t.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-CqW7EL8I.js";import"./FocusTrap-DDgz7xwG.js";import"./array-BfAlyugE.js";import"./Suspendable-DytVf_mm.js";import"./index-Dv8WScbi.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CzoH89ea.js";import"./index-ByiCOZcJ.js";import"./Pressable-l73nU7Tg.js";import"./Fill-UIlZzxnO.js";import"./LakeSelect-CMw3i9_z.js";import"./useDisclosure-CAhBHnRf.js";import"./Popover-DXyieZMN.js";import"./useResponsive-MG08eEwv.js";import"./function-C4Yllfl4.js";import"./Separator-BjabA4z5.js";import"./index-B6tCOtE7.js";const e=u.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(d,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-Cg5CdhzB.js.map
