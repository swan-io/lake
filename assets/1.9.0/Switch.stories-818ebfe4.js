import{j as r,a as t,b as a,L as l,c as i}from"./Space-1183c930.js";import{r as c}from"./index-f1f749bf.js";import{B as s}from"./index.module-23df9772.js";import{S as o}from"./Switch-f1e85a9f.js";import{S as g,a as n}from"./_StoriesComponents-c72b37c9.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Animated-364d5b32.js";import"./index-97e7b465.js";import"./index-5dc6d681.js";import"./index-1166d4e4.js";import"./math-d91e968a.js";import"./Icon-c406a2d7.js";import"./Svg-7b7aeb95.js";import"./index-f44a27cd.js";const j={title:"Forms/Switch",component:o},e=()=>{const[p,h]=c.useState(!0),S=c.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:i.gray[700],children:"Allow physical cards"})]})})]})};var d,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-818ebfe4.js.map
