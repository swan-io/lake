import{S as p,a as o,c as t,V as d}from"./Space-457d5e60.js";import{B as h}from"./index-025129cc.js";import{W as s}from"./WithPartnerAccentColor-a80db185.js";import{S as m}from"./_StoriesComponents-58922741.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8db94870.js";import"./polished.esm-77d64d09.js";const c=p.create({container:{flexWrap:"wrap"},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),B={title:"Utilities/WithPartnerAccentColor",component:s},r=({color:i="black"})=>o(m,{title:"WithPartnerAccentColor",description:["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'","You can edit the color in 'Controls' panel. (Press A to open it)"],children:o(s,{color:i,children:o(h,{direction:"row",style:c.container,children:Object.keys(t.partner).map(e=>o(d,{style:[c.colorBlock,{backgroundColor:t.partner[e]}]},e))})})});var a,n,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`({
  color = "black"
}: StoryArgs) => {
  return <StoryBlock title="WithPartnerAccentColor" description={["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'", "You can edit the color in 'Controls' panel. (Press A to open it)"]}>
      <WithPartnerAccentColor color={color}>
        <Box direction="row" style={styles.container}>
          {Object.keys(colors.partner).map(colorShade => <View key={colorShade} style={[styles.colorBlock, {
          backgroundColor: colors.partner[(colorShade as keyof typeof colors.partner)]
        }]} />)}
        </Box>
      </WithPartnerAccentColor>
    </StoryBlock>;
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,B as default};
//# sourceMappingURL=WithPartnerAccentColor.stories-9d274032.js.map
