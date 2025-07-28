import{j as e,B as o,S as a,L as s,c as l}from"./ScrollView-DT3HtkBC.js";import{r as c}from"./iframe-DAQ-8aNh.js";import{S as r}from"./Switch-Y27xBfzk.js";import{S,a as n}from"./_StoriesComponents-CqPJhs2L.js";import"./index-DAPfDb75.js";import"./index-Dk_k63-D.js";import"./extends-CF3RwP-h.js";import"./Separator-BWHnF_9r.js";import"./commonStyles-BBEkV6IC.js";const D={title:"Forms/Switch",component:r},t=()=>{const[m,p]=c.useState(!0),x=c.useCallback(()=>{p(h=>!h)},[]);return e.jsxs(S,{title:"Switch",children:[e.jsx(n,{title:"Default",children:e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(r,{value:m,onValueChange:x}),e.jsx(a,{width:12}),e.jsx(s,{color:l.gray[700],children:"Allow physical cards"})]})}),e.jsx(n,{title:"Disabled",children:e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(r,{value:!0,disabled:!0}),e.jsx(a,{width:12}),e.jsx(s,{color:l.gray[700],children:"Allow physical cards"})]})})]})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,d,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Switch.stories-CawW8oK3.js.map
