import{S as d,c as m,a as o,j as t,V as e}from"./Space-f85095f8.js";import{B as s}from"./Box-f4fbfbba.js";import{b as l,S as h,a as n}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-b9a8c83f.js";const r=d.create({block:{width:60,height:60,backgroundColor:m.gray[200],borderRadius:8}}),B={title:"Layout/Separator",component:l},a=({horizontal:p,space:S})=>o(h,{title:"Separator",children:[t(n,{title:"Default",children:o(s,{direction:"row",alignItems:"center",children:[t(e,{style:r.block}),t(l,{horizontal:p,space:S}),t(e,{style:r.block})]})}),t(n,{title:"Horizontal",children:o(s,{direction:"row",alignItems:"center",children:[t(e,{style:r.block}),t(l,{horizontal:!0,space:16}),t(e,{style:r.block})]})}),t(n,{title:"Vertical",children:o(s,{direction:"column",alignItems:"start",children:[t(e,{style:r.block}),t(l,{horizontal:!1,space:16}),t(e,{style:r.block})]})})]});var i,c,y;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
  horizontal,
  space
}: StoryArgs) => {
  return <StoryBlock title="Separator">
      <StoryPart title="Default">
        <Box direction="row" alignItems="center">
          <View style={styles.block} />
          <Separator horizontal={horizontal} space={space} />
          <View style={styles.block} />
        </Box>
      </StoryPart>

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
}`,...(y=(c=a.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const V=["Directions"];export{a as Directions,V as __namedExportsOrder,B as default};
//# sourceMappingURL=Separator.stories-d2a046bf.js.map
