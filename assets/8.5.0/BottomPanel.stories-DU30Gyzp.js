import{s as y,c as a,j as t,B as b,V as l,S as i}from"./Space-C8PaoKq6.js";import{r as u}from"./index-uCp2LrAq.js";import{B as d}from"./BottomPanel-HwTLdWd3.js";import{L as k}from"./LakeButton-C_qK95RO.js";import{L as g}from"./LakeTextInput-ruZO2VyO.js";import{S as x}from"./_StoriesComponents-Cu7d59Qu.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./commonStyles-t4XfA7cz.js";import"./useBodyClassName-CiTylq2A.js";import"./FocusTrap-BMN6lUBt.js";import"./a11y-DXvpDVrG.js";import"./array-rjEBP2Ry.js";import"./Suspendable-D3bTCPhd.js";import"./index-B6v66OSr.js";import"./TransitionView-DaIvFxGo.js";import"./index-Bs20sl9n.js";import"./Pressable-Cnn322Ch.js";import"./Fill-k_ReIz2M.js";import"./LakeSelect-ChwZm51I.js";import"./useDisclosure-X_l1NENI.js";import"./Popover-TioPbMSZ.js";import"./useResponsive-CJhtzVQ4.js";import"./function-BaGKQV0a.js";const e=y.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:a.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:a.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:a.gray[200],borderRadius:8}}),K={title:"Layout/BottomPanel",component:d},f=n=>{const[s,r]=u.useState(n.defaultValue??"");return t.jsx(g,{...n,value:s,onChange:h=>r(h.currentTarget.value)})},o=()=>{const[n,s]=u.useState(!1),r=()=>{s(!0)};return t.jsxs(x,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(k,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(d,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(b,{style:e.panelContent,children:[t.jsx(f,{}),t.jsx(l,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(l,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(l,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-DU30Gyzp.js.map
