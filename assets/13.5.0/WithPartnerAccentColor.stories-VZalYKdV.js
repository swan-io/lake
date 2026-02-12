import{j as e,B as n,c as t,V as l,s as i}from"./ScrollView-DByaBlwc.js";import{W as c}from"./WithPartnerAccentColor-CVu_o9w4.js";import{S as p}from"./_StoriesComponents-duxOczes.js";import"./iframe-BovOOO-W.js";import"./preload-helper-D1IIBeq1.js";import"./index-CvrZlHcx.js";import"./Separator-DyMh-TYE.js";import"./commonStyles-BBEkV6IC.js";const s=i.create({container:{flexWrap:"wrap"},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),x={title:"Utilities/WithPartnerAccentColor",component:c},o=({color:a="black"})=>e.jsx(p,{title:"WithPartnerAccentColor",description:["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'","You can edit the color in 'Controls' panel. (Press A to open it)"],children:e.jsx(c,{color:a,children:e.jsx(n,{direction:"row",style:s.container,children:Object.keys(t.partner).map(r=>e.jsx(l,{style:[s.colorBlock,{backgroundColor:t.partner[r]}]},r))})})});o.__docgenInfo={description:"",methods:[],displayName:"Default",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"black"',computed:!1}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,x as default};
//# sourceMappingURL=WithPartnerAccentColor.stories-VZalYKdV.js.map
