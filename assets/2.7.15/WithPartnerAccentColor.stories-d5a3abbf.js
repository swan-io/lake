import{S as d,j as o,c as t,V as h}from"./Space-f85095f8.js";import{B as m}from"./Box-f4fbfbba.js";import{W as l}from"./WithPartnerAccentColor-178004c1.js";import{S as f}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-b9a8c83f.js";import"./polished.esm-77d64d09.js";const c=d.create({container:{flexWrap:"wrap"},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),P={title:"Utilities/WithPartnerAccentColor",component:l},r=({color:i="black",scoped:p})=>o(f,{title:"WithPartnerAccentColor",description:["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'","You can edit the color in 'Controls' panel. (Press A to open it)"],children:o(l,{color:i,scoped:p,children:o(m,{direction:"row",style:c.container,children:Object.keys(t.partner).map(e=>o(h,{style:[c.colorBlock,{backgroundColor:t.partner[e]}]},e))})})});var n,a,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`({
  color = "black",
  scoped
}: StoryArgs) => {
  return <StoryBlock title="WithPartnerAccentColor" description={["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'", "You can edit the color in 'Controls' panel. (Press A to open it)"]}>
      <WithPartnerAccentColor color={color} scoped={scoped}>
        <Box direction="row" style={styles.container}>
          {Object.keys(colors.partner).map(colorShade => <View key={colorShade} style={[styles.colorBlock, {
          backgroundColor: colors.partner[(colorShade as keyof typeof colors.partner)]
        }]} />)}
        </Box>
      </WithPartnerAccentColor>
    </StoryBlock>;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const W=["Default"];export{r as Default,W as __namedExportsOrder,P as default};
//# sourceMappingURL=WithPartnerAccentColor.stories-d5a3abbf.js.map
