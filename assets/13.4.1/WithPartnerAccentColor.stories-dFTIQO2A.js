import{j as e,B as n,s as l,c as t,V as i}from"./ScrollView-DuFsiSOq.js";import{W as c}from"./WithPartnerAccentColor-lKQnzIHo.js";import{S as p}from"./_StoriesComponents-Cnq1vvR_.js";import"./iframe-rm_iVELC.js";import"./preload-helper-D1IIBeq1.js";import"./index-BNPLrEdd.js";import"./extends-CF3RwP-h.js";import"./Separator-DTdE0POY.js";import"./commonStyles-BBEkV6IC.js";const s=l.create({container:{flexWrap:"wrap"},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),C={title:"Utilities/WithPartnerAccentColor",component:c},o=({color:a="black"})=>e.jsx(p,{title:"WithPartnerAccentColor",description:["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'","You can edit the color in 'Controls' panel. (Press A to open it)"],children:e.jsx(c,{color:a,children:e.jsx(n,{direction:"row",style:s.container,children:Object.keys(t.partner).map(r=>e.jsx(i,{style:[s.colorBlock,{backgroundColor:t.partner[r]}]},r))})})});o.__docgenInfo={description:"",methods:[],displayName:"Default",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"black"',computed:!1}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,C as default};
//# sourceMappingURL=WithPartnerAccentColor.stories-dFTIQO2A.js.map
