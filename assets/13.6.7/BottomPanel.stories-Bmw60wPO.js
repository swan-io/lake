import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-CR0xP2C_.js";import{r as p}from"./iframe-B64OliAP.js";import{B as m}from"./BottomPanel-CngoIP2h.js";import{a as h}from"./LakeButton-BlbGo9sC.js";import{L as y}from"./LakeTextInput-Boozu-T0.js";import{S as b}from"./_StoriesComponents-C1vdR6eP.js";import"./index-BlJVQ3u9.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-AL3_9qaR.js";import"./FocusTrap-C7lZL-2L.js";import"./array-BfAlyugE.js";import"./Suspendable-CcRPvGhx.js";import"./index-C7cEzhGX.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BlH71kcG.js";import"./index-B9RfsWit.js";import"./Pressable-BcMfU-ue.js";import"./Fill-DvwIKkwV.js";import"./LakeSelect-DAWR5JLO.js";import"./useBoolean-DEx0DJCh.js";import"./useDisclosure-BNruEpGP.js";import"./Popover-BaJZpGjG.js";import"./useResponsive-Cr6Ipi1r.js";import"./function-BUf-_0Rr.js";import"./Separator-OUjKaFxj.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-Bmw60wPO.js.map
