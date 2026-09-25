import{i as e}from"./preload-helper-CCSz8wUY.js";import{Bt as t,Et as n,Ft as r,et as i,g as a,h as o,ht as s,vt as c}from"./ScrollView-BpRevQ4p.js";import{r as l,t as u}from"./_StoriesComponents-BfG2G5KR.js";import{n as d,t as f}from"./WithPartnerAccentColor-C4kQtdlS.js";var p,m,h,g,_;e((()=>{n(),a(),d(),c(),l(),p=i(),m=t.create({container:{flexWrap:`wrap`},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),h={title:`Utilities/WithPartnerAccentColor`,component:f},g=({color:e=`black`})=>(0,p.jsx)(u,{title:`WithPartnerAccentColor`,description:[`This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'`,`You can edit the color in 'Controls' panel. (Press A to open it)`],children:(0,p.jsx)(f,{color:e,children:(0,p.jsx)(o,{direction:`row`,style:m.container,children:Object.keys(s.partner).map(e=>(0,p.jsx)(r,{style:[m.colorBlock,{backgroundColor:s.partner[e]}]},e))})})}),g.__docgenInfo={description:``,methods:[],displayName:`Default`,props:{color:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"black"`,computed:!1}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  color = "black"
}: StoryArgs) => {
  return <StoryBlock title="WithPartnerAccentColor" description={["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'", "You can edit the color in 'Controls' panel. (Press A to open it)"]}>
      <WithPartnerAccentColor color={color}>
        <Box direction="row" style={styles.container}>
          {Object.keys(colors.partner).map(colorShade => <View key={colorShade} style={[styles.colorBlock, {
          backgroundColor: colors.partner[colorShade as keyof typeof colors.partner]
        }]} />)}
        </Box>
      </WithPartnerAccentColor>
    </StoryBlock>;
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=WithPartnerAccentColor.stories-mVnLAN8n.js.map