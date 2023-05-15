import{j as r,a as t,d as a,L as l,c as i}from"./Space-866c6d2d.js";import{r as c}from"./index-ebeaab24.js";import{B as s}from"./index-9b96a6d6.js";import{S as o}from"./Switch-87221633.js";import{S as g,a as n}from"./_StoriesComponents-143445d5.js";import"./extends-98964cd2.js";import"./Animated-0043f253.js";import"./index-29353d3f.js";import"./index-1573ab06.js";import"./index-0dd25834.js";import"./math-d32b57c3.js";import"./Icon-3493efb8.js";import"./Svg-36b671a5.js";import"./index-b75cb4fd.js";const I={title:"Forms/Switch",component:o},e=()=>{const[p,h]=c.useState(!0),S=c.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})})]})};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-662a930a.js.map
