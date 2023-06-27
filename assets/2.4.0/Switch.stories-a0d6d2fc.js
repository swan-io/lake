import{j as r,a as t,b as a,L as l,c as i}from"./Space-57107f4e.js";import{r as c}from"./index-8db94870.js";import{B as s}from"./index-73e1d3ab.js";import{S as o}from"./Switch-85943987.js";import{S as g,a as n}from"./_StoriesComponents-152d52c7.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Animated-232f86a6.js";import"./index-58bb7859.js";import"./index-6e5c097a.js";import"./index-b1dbc5b8.js";import"./math-b9695d7b.js";import"./Icon-26b2c7d1.js";import"./Svg-c3c146c4.js";import"./index-ab60b850.js";const j={title:"Forms/Switch",component:o},e=()=>{const[p,h]=c.useState(!0),S=c.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})})]})};var d,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,j as default};
//# sourceMappingURL=Switch.stories-a0d6d2fc.js.map
