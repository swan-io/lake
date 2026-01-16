import{j as t,B as o,S as a,L as s,c as l}from"./ScrollView-BQAq8nzQ.js";import{r as c}from"./iframe-C_lp5USv.js";import{S as r}from"./Switch-CInqLtPc.js";import{S as p,a as n}from"./_StoriesComponents-C54K3HMq.js";import"./index-DeMDOuS7.js";import"./preload-helper-D1IIBeq1.js";import"./index-BiO2Aju7.js";import"./extends-CF3RwP-h.js";import"./Separator-DRmJiED4.js";import"./commonStyles-BBEkV6IC.js";const v={title:"Forms/Switch",component:r},e=()=>{const[i,d]=c.useState(!0),u=c.useCallback(()=>{d(m=>!m)},[]);return t.jsxs(p,{title:"Switch",children:[t.jsx(n,{title:"Default",children:t.jsxs(o,{direction:"row",alignItems:"center",children:[t.jsx(r,{value:i,onValueChange:u}),t.jsx(a,{width:12}),t.jsx(s,{color:l.gray[700],children:"Allow physical cards"})]})}),t.jsx(n,{title:"Disabled",children:t.jsxs(o,{direction:"row",alignItems:"center",children:[t.jsx(r,{value:!0,disabled:!0}),t.jsx(a,{width:12}),t.jsx(s,{color:l.gray[700],children:"Allow physical cards"})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Switch.stories-NHjxh8I_.js.map
