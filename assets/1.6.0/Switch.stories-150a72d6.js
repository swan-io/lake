import{j as r,a as t,b as a,L as l,c}from"./Space-3f6d0824.js";import{r as i}from"./index-f1f749bf.js";import{B as s}from"./index.module-4cf3baed.js";import{S as o}from"./Switch-c32a42cd.js";import{S as g,a as n}from"./_StoriesComponents-a9fb8652.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Animated-5531df90.js";import"./index-eadc0664.js";import"./index-ebe792ce.js";import"./Icon-72df5746.js";import"./Svg-83739516.js";import"./index-38b75d36.js";const C={title:"Forms/Switch",component:o},e=()=>{const[p,h]=i.useState(!0),S=i.useCallback(()=>{h(w=>!w)},[]);return r(g,{title:"Switch",children:[t(n,{title:"Default",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:p,onValueChange:S}),t(a,{width:12}),t(l,{color:c.gray[700],children:"Allow physical cards"})]})}),t(n,{title:"Disabled",children:r(s,{direction:"row",alignItems:"center",children:[t(o,{value:!0,disabled:!0}),t(a,{width:12}),t(l,{color:c.gray[700],children:"Allow physical cards"})]})})]})};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-150a72d6.js.map
