import{j as r,a as t,b as a,L as l,c as i}from"./Space-7ef2bf1f.js";import{r as c}from"./index-ebeaab24.js";import{B as s}from"./index-afc058e4.js";import{S as o}from"./Switch-dc48cb06.js";import{S as g,a as n}from"./_StoriesComponents-1c8fe2d9.js";import"./extends-98964cd2.js";import"./Animated-9fdb5a0e.js";import"./index-05cf4fc1.js";import"./index-4b1e55e8.js";import"./index-4c3ac64e.js";import"./index-4bd07f54.js";import"./math-fdb0a206.js";import"./Icon-620f8419.js";import"./Svg-3c682173.js";import"./index-18d9be4d.js";const j={title:"Forms/Switch",component:o},e=()=>{const[p,h]=c.useState(!0),S=c.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})})]})};var d,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-c4afec1a.js.map
