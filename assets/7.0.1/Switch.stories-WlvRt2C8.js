import{j as r,a as t,B as a,S as l,L as i,c}from"./Space-CO5JyqEy.js";import{r as s}from"./index-CBqU2yxZ.js";import{S as o}from"./Switch-DxhDzv_B.js";import{S as g,a as n}from"./_StoriesComponents-qADnHaId.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Animated-BQQTzm_q.js";import"./index-yZFEjxg6.js";import"./index-PvzZ9cCU.js";import"./index-rln_T46e.js";import"./math-PxmrqO7s.js";import"./index-_Qlcd9NO.js";import"./commonStyles-t4XfA7cz.js";const I={title:"Forms/Switch",component:o},e=()=>{const[p,h]=s.useState(!0),S=s.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(a,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(l,{width:12}),t(i,{color:c.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(a,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(l,{width:12}),t(i,{color:c.gray[700],children:"Allow physical cards"})]})})]})};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<boolean>(true);
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  return <StoryBlock title="Switch">
      <StoryPart title="Default">
        <Box direction="row" alignItems="center">
          <Switch value={value} onValueChange={toggle} />
          <Space width={12} />
          <LakeText color={colors.gray[700]}>Allow physical cards</LakeText>
        </Box>
      </StoryPart>

      <StoryPart title="Disabled">
        <Box direction="row" alignItems="center">
          <Switch value={true} disabled={true} />
          <Space width={12} />
          <LakeText color={colors.gray[700]}>Allow physical cards</LakeText>
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,I as default};
//# sourceMappingURL=Switch.stories-WlvRt2C8.js.map