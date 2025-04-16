import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-D9D9kDko.js";import{B as a,S as s,L as l,c}from"./ScrollView-BXYY5pE1.js";import{S as r}from"./Switch-rmnFGPSO.js";import{S,a as i}from"./_StoriesComponents-J340Bf-T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D0hBKHsB.js";import"./index-CmAykTSy.js";import"./extends-CF3RwP-h.js";import"./Separator-C6_iuU14.js";import"./commonStyles-BBEkV6IC.js";const I={title:"Forms/Switch",component:r},e=()=>{const[m,p]=o.useState(!0),x=o.useCallback(()=>{p(h=>!h)},[]);return t.jsxs(S,{title:"Switch",children:[t.jsx(i,{title:"Default",children:t.jsxs(a,{direction:"row",alignItems:"center",children:[t.jsx(r,{value:m,onValueChange:x}),t.jsx(s,{width:12}),t.jsx(l,{color:c.gray[700],children:"Allow physical cards"})]})}),t.jsx(i,{title:"Disabled",children:t.jsxs(a,{direction:"row",alignItems:"center",children:[t.jsx(r,{value:!0,disabled:!0}),t.jsx(s,{width:12}),t.jsx(l,{color:c.gray[700],children:"Allow physical cards"})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var n,d,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,I as default};
//# sourceMappingURL=Switch.stories-Es9aYdud.js.map
