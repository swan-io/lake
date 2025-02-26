import{j as t}from"./jsx-runtime-8P-18mTY.js";import{r as u}from"./index-Cs7sjTYM.js";import{B as d}from"./BottomPanel-Cj-5haL3.js";import{s as y,B as b,V as a,S as i,c as l}from"./ScrollView-BWWoymUH.js";import{L as k}from"./LakeButton-QK9d5GcI.js";import{L as f}from"./LakeTextInput-BCuf9KYa.js";import{S as g}from"./_StoriesComponents-ibsCaX4_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-DMoYUPTW.js";import"./FocusTrap-DK_mB3LC.js";import"./array-BfAlyugE.js";import"./Suspendable-CoeGDO2w.js";import"./index-DqWyeXnr.js";import"./extends-CF3RwP-h.js";import"./TransitionView-B1c2XDjk.js";import"./index-B8wx1jqD.js";import"./index-BKZjgRaT.js";import"./Pressable-DrFTz465.js";import"./Fill-odO9hDIK.js";import"./LakeSelect-D4dULipd.js";import"./useDisclosure-DLkMFUa4.js";import"./Popover-DKuIPo6R.js";import"./useResponsive-CzIqCC5v.js";import"./function-CD1BwOSf.js";import"./Separator-Cg2ZriTe.js";import"./index-GCP-BzoM.js";const e=y.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),Q={title:"Layout/BottomPanel",component:d},x=n=>{const[s,r]=u.useState(n.defaultValue??"");return t.jsx(f,{...n,value:s,onChange:h=>r(h.currentTarget.value)})},o=()=>{const[n,s]=u.useState(!1),r=()=>{s(!0)};return t.jsxs(g,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(k,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(d,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(b,{style:e.panelContent,children:[t.jsx(x,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=BottomPanel.stories-DClqdZ4g.js.map
