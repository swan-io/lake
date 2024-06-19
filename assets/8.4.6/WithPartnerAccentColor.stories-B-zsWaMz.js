import{s as p,j as e,B as d,c as t,V as h}from"./Space-C8PaoKq6.js";import{W as l}from"./WithPartnerAccentColor-DY8mBJ-W.js";import{S as m}from"./_StoriesComponents-Cu7d59Qu.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-uCp2LrAq.js";import"./index-BOkhicXD.js";import"./polished.esm-DVgPY5UW.js";import"./commonStyles-t4XfA7cz.js";const n=p.create({container:{flexWrap:"wrap"},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),P={title:"Utilities/WithPartnerAccentColor",component:l},o=({color:i="black"})=>e.jsx(m,{title:"WithPartnerAccentColor",description:["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'","You can edit the color in 'Controls' panel. (Press A to open it)"],children:e.jsx(l,{color:i,children:e.jsx(d,{direction:"row",style:n.container,children:Object.keys(t.partner).map(r=>e.jsx(h,{style:[n.colorBlock,{backgroundColor:t.partner[r]}]},r))})})});o.__docgenInfo={description:"",methods:[],displayName:"Default",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"black"',computed:!1}}}};var s,c,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,P as default};
//# sourceMappingURL=WithPartnerAccentColor.stories-B-zsWaMz.js.map
