import{j as t}from"./jsx-runtime-DT09rT5F.js";import{r as u}from"./index-DXKZGL6g.js";import{B as d}from"./BottomPanel-D4EPn_06.js";import{s as y,c as a,B as b,V as l,S as i}from"./ScrollView-C1yxRy16.js";import{L as k}from"./LakeButton-r-Uybfm2.js";import{L as f}from"./LakeTextInput-CEY2eHwV.js";import{S as g}from"./_StoriesComponents-CKgElVW5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./commonStyles-CWvHnKRn.js";import"./useBodyClassName-CYzM7DM-.js";import"./FocusTrap-Cq0HuauR.js";import"./array-BfAlyugE.js";import"./Suspendable-CKuscA2L.js";import"./index-BpljNV4n.js";import"./extends-CF3RwP-h.js";import"./TransitionView-Cm_7ViIn.js";import"./index-VNGmZ7GH.js";import"./index-BeFrmAzh.js";import"./Pressable-to27AyJA.js";import"./Fill-CPmWVm4i.js";import"./LakeSelect-CKFvqJMY.js";import"./useDisclosure-CwHJfrsH.js";import"./Popover-DDdajSsf.js";import"./useResponsive-6iDeDSbQ.js";import"./function-DXO-3Yjx.js";import"./Separator-DMQr2iVh.js";import"./index-BAVjSphd.js";const e=y.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:a.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:a.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:a.gray[200],borderRadius:8}}),Q={title:"Layout/BottomPanel",component:d},x=n=>{const[s,r]=u.useState(n.defaultValue??"");return t.jsx(f,{...n,value:s,onChange:h=>r(h.currentTarget.value)})},o=()=>{const[n,s]=u.useState(!1),r=()=>{s(!0)};return t.jsxs(g,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(k,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(d,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(b,{style:e.panelContent,children:[t.jsx(x,{}),t.jsx(l,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(l,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(l,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-B8D5Ec-d.js.map