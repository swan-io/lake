import{c as e,i as t}from"./preload-helper-CxZGalNS.js";import{o as n}from"./iframe-9CQrC-Yq.js";import{U as r,g as i,h as a,i as o,it as s,o as c,r as l,s as u,st as d}from"./ScrollView-DfTIZO05.js";import{n as f,r as p,t as m}from"./_StoriesComponents-BuFC0LuH.js";import{n as h,t as g}from"./Switch-CZH68VFp.js";var _,v,y,b,x;t((()=>{_=e(n()),i(),u(),o(),h(),d(),p(),v=r(),y={title:`Forms/Switch`,component:g},b=()=>{let[e,t]=(0,_.useState)(!0);return(0,v.jsxs)(m,{title:`Switch`,children:[(0,v.jsx)(f,{title:`Default`,children:(0,v.jsxs)(a,{direction:`row`,alignItems:`center`,children:[(0,v.jsx)(g,{value:e,onValueChange:(0,_.useCallback)(()=>{t(e=>!e)},[])}),(0,v.jsx)(l,{width:12}),(0,v.jsx)(c,{color:s.gray[700],children:`Allow physical cards`})]})}),(0,v.jsx)(f,{title:`Disabled`,children:(0,v.jsxs)(a,{direction:`row`,alignItems:`center`,children:[(0,v.jsx)(g,{value:!0,disabled:!0}),(0,v.jsx)(l,{width:12}),(0,v.jsx)(c,{color:s.gray[700],children:`Allow physical cards`})]})})]})},b.__docgenInfo={description:``,methods:[],displayName:`Default`},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x=[`Default`]}))();export{b as Default,x as __namedExportsOrder,y as default};
//# sourceMappingURL=Switch.stories-KFkYXSld.js.map