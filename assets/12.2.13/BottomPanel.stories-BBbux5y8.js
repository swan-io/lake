import{j as t,s as y,B as b,V as a,S as i,c as l}from"./ScrollView-rpcy4Ntm.js";import{r as u}from"./iframe-CZb_pTm6.js";import{B as d}from"./BottomPanel-DZ0TTqNO.js";import{L as k}from"./LakeButton-DMDRt9HC.js";import{L as g}from"./LakeTextInput-7FCi86Jy.js";import{S as x}from"./_StoriesComponents-CCUyW6Y9.js";import"./index-DWBrKOLN.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-KxObRAPR.js";import"./FocusTrap-B7dAfXh9.js";import"./array-BfAlyugE.js";import"./Suspendable-B4RLw8_w.js";import"./index-Bnd0Vzw-.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BUujvhX0.js";import"./index-Cvhf7Voo.js";import"./Pressable-dLj5GzUO.js";import"./Fill-D9W8kb53.js";import"./LakeSelect-BCWse8Qq.js";import"./useDisclosure-DkYJ2D3f.js";import"./Popover-c7bhfqjn.js";import"./useResponsive-BvdZnFNX.js";import"./function-BY67aOD3.js";import"./Separator-CW0xnE3Z.js";import"./index-Ca8nC3gY.js";const e=y.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),K={title:"Layout/BottomPanel",component:d},f=n=>{const[s,r]=u.useState(n.defaultValue??"");return t.jsx(g,{...n,value:s,onChange:h=>r(h.currentTarget.value)})},o=()=>{const[n,s]=u.useState(!1),r=()=>{s(!0)};return t.jsxs(x,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(k,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(d,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(b,{style:e.panelContent,children:[t.jsx(f,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-BBbux5y8.js.map
