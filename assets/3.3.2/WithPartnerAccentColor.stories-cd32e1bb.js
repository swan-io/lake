import{S as p,j as o,c as t,V as d}from"./Space-357d3b43.js";import{B as h}from"./commonStyles-e9d52da3.js";import{W as s}from"./WithPartnerAccentColor-29d80d65.js";import{S as m}from"./_StoriesComponents-9af3c44d.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-f1286426.js";import"./polished.esm-4b461cc4.js";const c=p.create({container:{flexWrap:"wrap"},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),B={title:"Utilities/WithPartnerAccentColor",component:s},r=({color:i="black"})=>o(m,{title:"WithPartnerAccentColor",description:["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'","You can edit the color in 'Controls' panel. (Press A to open it)"],children:o(s,{color:i,children:o(h,{direction:"row",style:c.container,children:Object.keys(t.partner).map(e=>o(d,{style:[c.colorBlock,{backgroundColor:t.partner[e]}]},e))})})});var n,a,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,B as default};
//# sourceMappingURL=WithPartnerAccentColor.stories-cd32e1bb.js.map