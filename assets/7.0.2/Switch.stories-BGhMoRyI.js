import{j as t,B as o,S as a,L as s,c as l}from"./Space-Bfex_hJx.js";import{r as i}from"./index-CBqU2yxZ.js";import{S as r}from"./Switch-3SnVclh4.js";import{S,a as c}from"./_StoriesComponents-BGHZFReg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Animated-iOMc0azd.js";import"./index-C2BwA3tx.js";import"./index-CAUOOh5b.js";import"./index-CZpPLWdc.js";import"./math-C8ZpH5Ud.js";import"./index-D1EpuBSR.js";import"./commonStyles-t4XfA7cz.js";const V={title:"Forms/Switch",component:r},e=()=>{const[m,p]=i.useState(!0),x=i.useCallback(()=>{p(h=>!h)},[]);return t.jsxs(S,{title:"Switch",children:[t.jsx(c,{title:"Default",children:t.jsxs(o,{direction:"row",alignItems:"center",children:[t.jsx(r,{value:m,onValueChange:x}),t.jsx(a,{width:12}),t.jsx(s,{color:l.gray[700],children:"Allow physical cards"})]})}),t.jsx(c,{title:"Disabled",children:t.jsxs(o,{direction:"row",alignItems:"center",children:[t.jsx(r,{value:!0,disabled:!0}),t.jsx(a,{width:12}),t.jsx(s,{color:l.gray[700],children:"Allow physical cards"})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var n,d,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,V as default};
//# sourceMappingURL=Switch.stories-BGhMoRyI.js.map
