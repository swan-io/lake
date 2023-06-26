import{j as r,a as t,b as a,L as l,c as i}from"./Space-b7c957fc.js";import{r as c}from"./index-ebeaab24.js";import{B as s}from"./index-993549f2.js";import{S as o}from"./Switch-b554c0b9.js";import{S as g,a as n}from"./_StoriesComponents-da5094b9.js";import"./extends-98964cd2.js";import"./Animated-06fa7eec.js";import"./index-dea4af3a.js";import"./index-f680788d.js";import"./index-1a068426.js";import"./math-32d0df26.js";import"./Icon-f9c5daa3.js";import"./Svg-8852b273.js";import"./index-068f1d0c.js";const I={title:"Forms/Switch",component:o},e=()=>{const[p,h]=c.useState(!0),S=c.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})})]})};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-c9cc5dff.js.map
