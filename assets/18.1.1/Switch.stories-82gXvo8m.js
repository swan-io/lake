import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-Ci4EyS06.js";import{J as r,g as i,h as a,ht as o,i as s,o as c,r as l,s as u,vt as d}from"./ScrollView-C9wrb0ax.js";import{n as f,r as p,t as m}from"./_StoriesComponents-CWcu3-PH.js";import{n as h,t as g}from"./Switch-DDEM5Z4D.js";var _,v,y,b,x;t((()=>{_=e(n()),i(),u(),s(),h(),d(),p(),v=r(),y={title:`Forms/Switch`,component:g},b=()=>{let[e,t]=(0,_.useState)(!0),n=(0,_.useId)(),r=(0,_.useId)();return(0,v.jsxs)(m,{title:`Switch`,children:[(0,v.jsx)(f,{title:`Default`,children:(0,v.jsxs)(a,{direction:`row`,alignItems:`center`,children:[(0,v.jsx)(g,{value:e,onValueChange:(0,_.useCallback)(()=>{t(e=>!e)},[]),labelledBy:n}),(0,v.jsx)(l,{width:12}),(0,v.jsx)(c,{id:n,color:o.gray[700],children:`Allow physical cards`})]})}),(0,v.jsx)(f,{title:`Disabled`,children:(0,v.jsxs)(a,{direction:`row`,alignItems:`center`,children:[(0,v.jsx)(g,{value:!0,disabled:!0,labelledBy:r}),(0,v.jsx)(l,{width:12}),(0,v.jsx)(c,{id:r,color:o.gray[700],children:`Allow physical cards`})]})})]})},b.__docgenInfo={description:``,methods:[],displayName:`Default`},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<boolean>(true);
  const defaultLabelId = useId();
  const disabledLabelId = useId();
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  return <StoryBlock title="Switch">
      <StoryPart title="Default">
        <Box direction="row" alignItems="center">
          <Switch value={value} onValueChange={toggle} labelledBy={defaultLabelId} />
          <Space width={12} />
          <LakeText id={defaultLabelId} color={colors.gray[700]}>
            Allow physical cards
          </LakeText>
        </Box>
      </StoryPart>

      <StoryPart title="Disabled">
        <Box direction="row" alignItems="center">
          <Switch value={true} disabled={true} labelledBy={disabledLabelId} />
          <Space width={12} />
          <LakeText id={disabledLabelId} color={colors.gray[700]}>
            Allow physical cards
          </LakeText>
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...b.parameters?.docs?.source}}},x=[`Default`]}))();export{b as Default,x as __namedExportsOrder,y as default};
//# sourceMappingURL=Switch.stories-82gXvo8m.js.map