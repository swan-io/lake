import{a as r,j as t,b as a,L as l,c}from"./Space-699872b3.js";import{r as i}from"./index-b9a8c83f.js";import{B as s}from"./Box-2158a4c8.js";import{S as o}from"./Switch-d709d6df.js";import{S as g,a as n}from"./_StoriesComponents-bfa6bed9.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Animated-9b40f6e8.js";import"./index-df706ef6.js";import"./index-098d9d95.js";import"./index-9bf69aa5.js";import"./math-a57320bc.js";import"./index-84739abb.js";const C={title:"Forms/Switch",component:o},e=()=>{const[p,h]=i.useState(!0),S=i.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:c.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:c.gray[700],children:"Allow physical cards"})]})})]})};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-b1be7572.js.map
