import{s as p,a as o,c as t,V as d}from"./Space-JJ6M6GgY.js";import{B as h}from"./commonStyles-OnNy6GEI.js";import{W as l}from"./WithPartnerAccentColor-97XWGnHs.js";import{S as m}from"./_StoriesComponents-km_N9ysr.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-4g5l5LRQ.js";import"./index-jmm5gWkb.js";import"./polished.esm-SyeXkIL0.js";const n=p.create({container:{flexWrap:"wrap"},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),W={title:"Utilities/WithPartnerAccentColor",component:l},r=({color:i="black"})=>o(m,{title:"WithPartnerAccentColor",description:["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'","You can edit the color in 'Controls' panel. (Press A to open it)"],children:o(l,{color:i,children:o(h,{direction:"row",style:n.container,children:Object.keys(t.partner).map(e=>o(d,{style:[n.colorBlock,{backgroundColor:t.partner[e]}]},e))})})});var c,a,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,W as default};
//# sourceMappingURL=WithPartnerAccentColor.stories-sjShNOMt.js.map
