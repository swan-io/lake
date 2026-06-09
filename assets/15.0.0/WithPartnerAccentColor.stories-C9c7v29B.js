import{i as e}from"./preload-helper-C6cs2Kqh.js";import{St as t,U as n,bt as r,g as i,h as a,ht as o,it as s,st as c}from"./ScrollView-CsPnIpDJ.js";import{r as l,t as u}from"./_StoriesComponents-BfnQdud_.js";import{n as d,t as f}from"./WithPartnerAccentColor-CGrhSz4Z.js";var p,m,h,g,_;e((()=>{o(),i(),d(),c(),l(),p=n(),m=t.create({container:{flexWrap:`wrap`},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),h={title:`Utilities/WithPartnerAccentColor`,component:f},g=({color:e=`black`})=>(0,p.jsx)(u,{title:`WithPartnerAccentColor`,description:[`This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'`,`You can edit the color in 'Controls' panel. (Press A to open it)`],children:(0,p.jsx)(f,{color:e,children:(0,p.jsx)(a,{direction:`row`,style:m.container,children:Object.keys(s.partner).map(e=>(0,p.jsx)(r,{style:[m.colorBlock,{backgroundColor:s.partner[e]}]},e))})})}),g.__docgenInfo={description:``,methods:[],displayName:`Default`,props:{color:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"black"`,computed:!1}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
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
//# sourceMappingURL=WithPartnerAccentColor.stories-C9c7v29B.js.map