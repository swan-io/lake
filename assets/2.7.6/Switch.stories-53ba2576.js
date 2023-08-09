import{a as r,j as t,b as a,L as l,c}from"./Space-b00f4761.js";import{r as i}from"./index-b9a8c83f.js";import{B as s}from"./Box-c05190bc.js";import{S as o}from"./Switch-33abfad3.js";import{S as g,a as n}from"./_StoriesComponents-71b51adf.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Animated-7dc9a179.js";import"./index-dcf1c4df.js";import"./index-29ccbe2a.js";import"./index-929d65f2.js";import"./math-aa7be787.js";import"./index-d81de39e.js";const C={title:"Forms/Switch",component:o},e=()=>{const[p,h]=i.useState(!0),S=i.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:c.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:c.gray[700],children:"Allow physical cards"})]})})]})};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,C as default};
//# sourceMappingURL=Switch.stories-53ba2576.js.map
