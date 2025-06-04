import{j as t,s as y,B as b,V as a,S as i,c as l}from"./ScrollView-DtPNT8nM.js";import{r as u}from"./iframe-ijtiKDEj.js";import{B as d}from"./BottomPanel-Cbab6btJ.js";import{L as k}from"./LakeButton-D6BlYzCm.js";import{L as g}from"./LakeTextInput-C1peqT4V.js";import{S as x}from"./_StoriesComponents-Dkyx5m_d.js";import"./index-DxkgtVbE.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-xRSW2l1X.js";import"./FocusTrap-BkwUYccf.js";import"./array-BfAlyugE.js";import"./Suspendable-CpmH6Wnk.js";import"./index-XEH9nHRP.js";import"./extends-CF3RwP-h.js";import"./TransitionView-DZrfPVrp.js";import"./index-DVduKobj.js";import"./Pressable-CijMCktm.js";import"./Fill-DHB1b3bJ.js";import"./LakeSelect-CFumvIGf.js";import"./useDisclosure-kpcXpxqp.js";import"./Popover-CgGWc1Ua.js";import"./useResponsive-D6_Sf6-N.js";import"./function-DeDY2Z6B.js";import"./Separator-DGa5cqb3.js";import"./index-BG-cUz_q.js";const e=y.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),K={title:"Layout/BottomPanel",component:d},f=n=>{const[s,r]=u.useState(n.defaultValue??"");return t.jsx(g,{...n,value:s,onChange:h=>r(h.currentTarget.value)})},o=()=>{const[n,s]=u.useState(!1),r=()=>{s(!0)};return t.jsxs(x,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(k,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(d,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(b,{style:e.panelContent,children:[t.jsx(f,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,K as default};
//# sourceMappingURL=BottomPanel.stories-CC8jIsoJ.js.map
