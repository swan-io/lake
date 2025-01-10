import{j as t}from"./jsx-runtime-DT09rT5F.js";import{r as u}from"./index-DXKZGL6g.js";import{B as d}from"./BottomPanel-Cda-5Nad.js";import{s as y,c as a,B as b,V as l,S as i}from"./ScrollView-BoCrTkEc.js";import{L as k}from"./LakeButton-Cs5zZhbT.js";import{L as f}from"./LakeTextInput-ChOFC3zq.js";import{S as g}from"./_StoriesComponents-DloRyvw6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./commonStyles-CWvHnKRn.js";import"./useBodyClassName-CYzM7DM-.js";import"./FocusTrap-DDvJOAtm.js";import"./array-BfAlyugE.js";import"./Suspendable-DRG3ow7X.js";import"./index-B9iOX7Yo.js";import"./extends-CF3RwP-h.js";import"./TransitionView-C4NXOBjL.js";import"./index-BH51n4Hn.js";import"./index-BeFrmAzh.js";import"./Pressable-F4uuO-P3.js";import"./Fill-k23jBRLa.js";import"./LakeSelect-BT6Q7B7e.js";import"./useDisclosure-CwHJfrsH.js";import"./Popover-__n1yfwm.js";import"./useResponsive-6iDeDSbQ.js";import"./function-BYwUOg0j.js";import"./Separator-BCHPcwA4.js";import"./index-BKK4bcui.js";const e=y.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:a.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:a.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:a.gray[200],borderRadius:8}}),Q={title:"Layout/BottomPanel",component:d},x=n=>{const[s,r]=u.useState(n.defaultValue??"");return t.jsx(f,{...n,value:s,onChange:h=>r(h.currentTarget.value)})},o=()=>{const[n,s]=u.useState(!1),r=()=>{s(!0)};return t.jsxs(g,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(k,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(d,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(b,{style:e.panelContent,children:[t.jsx(x,{}),t.jsx(l,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(l,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(l,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-B4ovhSaG.js.map
