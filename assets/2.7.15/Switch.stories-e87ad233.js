import{a as r,j as t,b as a,L as l,c as s}from"./Space-f85095f8.js";import{r as i}from"./index-b9a8c83f.js";import{B as c}from"./Box-f4fbfbba.js";import{S as o}from"./Switch-c8cb8abc.js";import{S as y,a as n}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Animated-2d9f33ca.js";import"./index-1a82f3cd.js";import"./index-71e0d995.js";import"./index-51399c4b.js";import"./math-57176261.js";import"./index-75f16835.js";const I={title:"Forms/Switch",component:o},e=({disabled:p})=>{const[h,S]=i.useState(!0),w=i.useCallback(()=>{S(g=>!g)},[]);return r(y,{title:"Switch",children:[t(n,{title:"Default",children:r(c,{direction:"row",alignItems:"center",children:[t(o,{value:h,onValueChange:w,disabled:p}),t(a,{width:12}),t(l,{color:s.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(c,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:s.gray[700],children:"Allow physical cards"})]})})]})};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
  disabled
}: StoryArgs) => {
  const [value, setValue] = useState<boolean>(true);
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  return <StoryBlock title="Switch">
      <StoryPart title="Default">
        <Box direction="row" alignItems="center">
          <Switch value={value} onValueChange={toggle} disabled={disabled} />
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
//# sourceMappingURL=Switch.stories-e87ad233.js.map
