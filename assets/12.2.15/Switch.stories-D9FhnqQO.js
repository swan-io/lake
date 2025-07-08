import{j as e,B as o,S as a,L as s,c as l}from"./ScrollView-BL5TcFHx.js";import{r as c}from"./iframe-DR7W7vfy.js";import{S as r}from"./Switch-CQxcPCXS.js";import{S,a as n}from"./_StoriesComponents-DvxZwpwy.js";import"./index-C4fev7_8.js";import"./index-fhcyh-Nu.js";import"./extends-CF3RwP-h.js";import"./Separator-DaGe8paf.js";import"./commonStyles-BBEkV6IC.js";const D={title:"Forms/Switch",component:r},t=()=>{const[m,p]=c.useState(!0),x=c.useCallback(()=>{p(h=>!h)},[]);return e.jsxs(S,{title:"Switch",children:[e.jsx(n,{title:"Default",children:e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(r,{value:m,onValueChange:x}),e.jsx(a,{width:12}),e.jsx(s,{color:l.gray[700],children:"Allow physical cards"})]})}),e.jsx(n,{title:"Disabled",children:e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(r,{value:!0,disabled:!0}),e.jsx(a,{width:12}),e.jsx(s,{color:l.gray[700],children:"Allow physical cards"})]})})]})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,d,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,D as default};
//# sourceMappingURL=Switch.stories-D9FhnqQO.js.map
