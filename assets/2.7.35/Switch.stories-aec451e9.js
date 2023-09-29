import{a as r,j as t,b as a,L as l,c}from"./Space-aafc5038.js";import{r as i}from"./index-1e572255.js";import{B as s}from"./commonStyles-9ad3dce1.js";import{S as o}from"./Switch-c5cbbdcd.js";import{S as g,a as n}from"./_StoriesComponents-46022e23.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Animated-d548432b.js";import"./index-a6f78e17.js";import"./index-9a99da50.js";import"./index-cbe36dfe.js";import"./math-d103abbb.js";import"./index-12237723.js";const C={title:"Forms/Switch",component:o},e=()=>{const[p,h]=i.useState(!0),S=i.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:c.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:c.gray[700],children:"Allow physical cards"})]})})]})};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-aec451e9.js.map
