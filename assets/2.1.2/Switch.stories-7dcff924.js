import{j as r,a as t,b as a,L as l,c as i}from"./Space-2242fd5e.js";import{r as c}from"./index-ebeaab24.js";import{B as s}from"./index-a8f23f17.js";import{S as o}from"./Switch-a90c5b89.js";import{S as g,a as n}from"./_StoriesComponents-f13956a4.js";import"./extends-98964cd2.js";import"./Animated-a0619c6c.js";import"./index-906384f5.js";import"./index-6a5b2fcc.js";import"./index-ebbf1ea8.js";import"./math-0c833dd5.js";import"./Icon-b31120fb.js";import"./Svg-f92aaa32.js";import"./index-26fa083d.js";const I={title:"Forms/Switch",component:o},e=()=>{const[p,h]=c.useState(!0),S=c.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})})]})};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-7dcff924.js.map
