import{j as r,a as t,b as a,L as l,c as i}from"./Space-708a304c.js";import{r as c}from"./index-ebeaab24.js";import{B as s}from"./index-4c3a1169.js";import{S as o}from"./Switch-6b346017.js";import{S as g,a as n}from"./_StoriesComponents-23115955.js";import"./extends-98964cd2.js";import"./Animated-3b9386a0.js";import"./index-115f188b.js";import"./index-8ab78b54.js";import"./index-1de52687.js";import"./math-6a2a8073.js";import"./Icon-69866ba7.js";import"./Svg-cf1a96e0.js";import"./index-b7c82715.js";const I={title:"Forms/Switch",component:o},e=()=>{const[p,h]=c.useState(!0),S=c.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})})]})};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-3c45d221.js.map
