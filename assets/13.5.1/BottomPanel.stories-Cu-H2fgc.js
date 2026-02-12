import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-BOOgCflj.js";import{r as p}from"./iframe-Cf56-Csl.js";import{B as m}from"./BottomPanel-CxcvK4O4.js";import{a as h}from"./LakeButton-CtLESi3p.js";import{L as y}from"./LakeTextInput-CFHtW8cr.js";import{S as b}from"./_StoriesComponents-BUWPQaF4.js";import"./index-BvOMuphx.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-BKGS4jEd.js";import"./FocusTrap-BuYa0RkW.js";import"./array-BfAlyugE.js";import"./Suspendable-BmE0DfFq.js";import"./index-zlNNV_Do.js";import"./extends-CF3RwP-h.js";import"./TransitionView-DsYJ76ty.js";import"./index-B7NF9p1r.js";import"./Pressable-BZNJWkOs.js";import"./Fill-B9QqPzq9.js";import"./LakeSelect-BmsAR0e_.js";import"./useDisclosure-Bs_0jhTX.js";import"./Popover-BbDZ_obj.js";import"./useResponsive-CyZf78Oi.js";import"./function-BGFOQKFF.js";import"./Separator-DEbpTTam.js";import"./index-DnWfsTTy.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-Cu-H2fgc.js.map
