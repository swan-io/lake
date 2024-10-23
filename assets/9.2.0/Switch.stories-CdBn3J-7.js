import{j as t}from"./jsx-runtime-BlAj40OV.js";import{r as o}from"./index-Cs7sjTYM.js";import{B as a,S as s,L as l,c}from"./ScrollView-C9Sl8l-9.js";import{S as r}from"./Switch-DxBvT8Q8.js";import{S,a as n}from"./_StoriesComponents--LS6DWDz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./index-HmJNsiCB.js";import"./extends-CF3RwP-h.js";import"./commonStyles-t4XfA7cz.js";const L={title:"Forms/Switch",component:r},e=()=>{const[m,p]=o.useState(!0),x=o.useCallback(()=>{p(h=>!h)},[]);return t.jsxs(S,{title:"Switch",children:[t.jsx(n,{title:"Default",children:t.jsxs(a,{direction:"row",alignItems:"center",children:[t.jsx(r,{value:m,onValueChange:x}),t.jsx(s,{width:12}),t.jsx(l,{color:c.gray[700],children:"Allow physical cards"})]})}),t.jsx(n,{title:"Disabled",children:t.jsxs(a,{direction:"row",alignItems:"center",children:[t.jsx(r,{value:!0,disabled:!0}),t.jsx(s,{width:12}),t.jsx(l,{color:c.gray[700],children:"Allow physical cards"})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,d,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,L as default};
//# sourceMappingURL=Switch.stories-CdBn3J-7.js.map
