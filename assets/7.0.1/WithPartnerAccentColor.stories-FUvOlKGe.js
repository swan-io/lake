import{s as p,a as o,B as d,c as t,V as h}from"./Space-CO5JyqEy.js";import{W as l}from"./WithPartnerAccentColor-K8U4--Qx.js";import{S as m}from"./_StoriesComponents-qADnHaId.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./polished.esm-1TDmsf3v.js";import"./commonStyles-t4XfA7cz.js";const n=p.create({container:{flexWrap:"wrap"},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),W={title:"Utilities/WithPartnerAccentColor",component:l},r=({color:i="black"})=>o(m,{title:"WithPartnerAccentColor",description:["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'","You can edit the color in 'Controls' panel. (Press A to open it)"],children:o(l,{color:i,children:o(d,{direction:"row",style:n.container,children:Object.keys(t.partner).map(e=>o(h,{style:[n.colorBlock,{backgroundColor:t.partner[e]}]},e))})})});var c,a,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
//# sourceMappingURL=WithPartnerAccentColor.stories-FUvOlKGe.js.map