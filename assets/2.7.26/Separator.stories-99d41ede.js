import{S as y,c as m,a,j as t,V as r}from"./Space-89c18de2.js";import{B as l}from"./Box-72ffce84.js";import{b as s,S,a as n}from"./_StoriesComponents-fa9bcd10.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-b9a8c83f.js";const e=y.create({block:{width:60,height:60,backgroundColor:m.gray[200],borderRadius:8}}),B={title:"Layout/Separator",component:s},o=()=>a(S,{title:"Separator",children:[t(n,{title:"Horizontal",children:a(l,{direction:"row",alignItems:"center",children:[t(r,{style:e.block}),t(s,{horizontal:!0,space:16}),t(r,{style:e.block})]})}),t(n,{title:"Vertical",children:a(l,{direction:"column",alignItems:"start",children:[t(r,{style:e.block}),t(s,{horizontal:!1,space:16}),t(r,{style:e.block})]})})]});var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <StoryBlock title="Separator">
      <StoryPart title="Horizontal">
        <Box direction="row" alignItems="center">
          <View style={styles.block} />
          <Separator horizontal={true} space={16} />
          <View style={styles.block} />
        </Box>
      </StoryPart>

      <StoryPart title="Vertical">
        <Box direction="column" alignItems="start">
          <View style={styles.block} />
          <Separator horizontal={false} space={16} />
          <View style={styles.block} />
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const g=["Directions"];export{o as Directions,g as __namedExportsOrder,B as default};
//# sourceMappingURL=Separator.stories-99d41ede.js.map
