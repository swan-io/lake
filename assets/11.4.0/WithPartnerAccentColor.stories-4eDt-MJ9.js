import{j as r}from"./jsx-runtime-8P-18mTY.js";import{B as p,s as d,c as t,V as h}from"./ScrollView-OW9YrWpj.js";import{W as l}from"./WithPartnerAccentColor-BFS4p7y9.js";import{S as m}from"./_StoriesComponents-BzsKLpLG.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BKZjgRaT.js";import"./extends-CF3RwP-h.js";import"./Separator-B2blNt6N.js";import"./commonStyles-BBEkV6IC.js";const s=d.create({container:{flexWrap:"wrap"},colorBlock:{width:60,height:40,margin:8,borderRadius:4}}),W={title:"Utilities/WithPartnerAccentColor",component:l},o=({color:i="black"})=>r.jsx(m,{title:"WithPartnerAccentColor",description:["This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'","You can edit the color in 'Controls' panel. (Press A to open it)"],children:r.jsx(l,{color:i,children:r.jsx(p,{direction:"row",style:s.container,children:Object.keys(t.partner).map(e=>r.jsx(h,{style:[s.colorBlock,{backgroundColor:t.partner[e]}]},e))})})});o.__docgenInfo={description:"",methods:[],displayName:"Default",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"black"',computed:!1}}}};var c,a,n;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const b=["Default"];export{o as Default,b as __namedExportsOrder,W as default};
//# sourceMappingURL=WithPartnerAccentColor.stories-4eDt-MJ9.js.map
