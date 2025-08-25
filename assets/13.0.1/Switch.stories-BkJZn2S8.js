import{j as t,B as o,S as a,L as s,c as l}from"./ScrollView-C78SkEne.js";import{r as c}from"./iframe-bSWLDtM2.js";import{S as r}from"./Switch-CshkAaFh.js";import{S,a as n}from"./_StoriesComponents-akwUgReX.js";import"./index-BDj4D_R3.js";import"./preload-helper-DrfBMU97.js";import"./index-D-W1HY0_.js";import"./extends-CF3RwP-h.js";import"./Separator-YJI7LZ9S.js";import"./commonStyles-BBEkV6IC.js";const L={title:"Forms/Switch",component:r},e=()=>{const[m,p]=c.useState(!0),x=c.useCallback(()=>{p(h=>!h)},[]);return t.jsxs(S,{title:"Switch",children:[t.jsx(n,{title:"Default",children:t.jsxs(o,{direction:"row",alignItems:"center",children:[t.jsx(r,{value:m,onValueChange:x}),t.jsx(a,{width:12}),t.jsx(s,{color:l.gray[700],children:"Allow physical cards"})]})}),t.jsx(n,{title:"Disabled",children:t.jsxs(o,{direction:"row",alignItems:"center",children:[t.jsx(r,{value:!0,disabled:!0}),t.jsx(a,{width:12}),t.jsx(s,{color:l.gray[700],children:"Allow physical cards"})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,d,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-BkJZn2S8.js.map
