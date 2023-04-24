import{j as r,a as t,b as a,L as l,c as i}from"./Space-5c29d500.js";import{r as c}from"./index-f1f749bf.js";import{B as s}from"./index.module-bef243ca.js";import{S as o}from"./Switch-45dcf7b5.js";import{S as g,a as n}from"./_StoriesComponents-bbcd7ec3.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Animated-6594fad5.js";import"./index-37690212.js";import"./index-c86de1d8.js";import"./index-b2b01097.js";import"./math-d8257b44.js";import"./Icon-27bbe041.js";import"./Svg-ff455c54.js";import"./index-37abc2ac.js";const j={title:"Forms/Switch",component:o},e=()=>{const[p,h]=c.useState(!0),S=c.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})})]})};var d,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-8a841663.js.map
