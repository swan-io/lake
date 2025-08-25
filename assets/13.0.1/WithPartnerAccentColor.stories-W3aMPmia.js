import{j as e,B as p,s as d,c as t,V as h}from"./ScrollView-C78SkEne.js";import{W as l}from"./WithPartnerAccentColor-Cqc4OOLQ.js";import{S as m}from"./_StoriesComponents-akwUgReX.js";import"./iframe-bSWLDtM2.js";import"./preload-helper-DrfBMU97.js";import"./index-BDj4D_R3.js";import"./extends-CF3RwP-h.js";import"./Separator-YJI7LZ9S.js";import"./commonStyles-BBEkV6IC.js";const s=d.create({container:{flexWrap:"wrap"},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),P={title:"Utilities/WithPartnerAccentColor",component:l},o=({color:i="black"})=>e.jsx(m,{title:"WithPartnerAccentColor",description:["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'","You can edit the color in 'Controls' panel. (Press A to open it)"],children:e.jsx(l,{color:i,children:e.jsx(p,{direction:"row",style:s.container,children:Object.keys(t.partner).map(r=>e.jsx(h,{style:[s.colorBlock,{backgroundColor:t.partner[r]}]},r))})})});o.__docgenInfo={description:"",methods:[],displayName:"Default",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"black"',computed:!1}}}};var c,a,n;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,P as default};
//# sourceMappingURL=WithPartnerAccentColor.stories-W3aMPmia.js.map
