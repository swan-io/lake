import{S as p,c as d,a as o,j as t,V as e}from"./Space-357d3b43.js";import{B as n}from"./commonStyles-e9d52da3.js";import{b as l,S,a}from"./_StoriesComponents-9af3c44d.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-f1286426.js";const r=p.create({block:{width:60,height:60,backgroundColor:d.gray[200],borderRadius:8}}),x={title:"Layout/Separator",component:l},i=()=>o(S,{title:"Separator",children:[t(a,{title:"Horizontal",children:o(n,{direction:"row",alignItems:"center",children:[t(e,{style:r.block}),t(l,{horizontal:!0,space:16}),t(e,{style:r.block})]})}),t(a,{title:"Horizontal with text",children:o(n,{direction:"row",alignItems:"center",children:[t(e,{style:r.block}),t(l,{horizontal:!0,space:16,children:"or"}),t(e,{style:r.block})]})}),t(a,{title:"Vertical",children:o(n,{direction:"column",alignItems:"start",children:[t(e,{style:r.block}),t(l,{horizontal:!1,space:16}),t(e,{style:r.block})]})}),t(a,{title:"Vertical with text",children:o(n,{direction:"column",alignItems:"start",children:[t(e,{style:r.block}),t(l,{horizontal:!1,space:16,children:"or"}),t(e,{style:r.block})]})})]});var s,c,y;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <StoryBlock title="Separator">
      <StoryPart title="Horizontal">
        <Box direction="row" alignItems="center">
          <View style={styles.block} />
          <Separator horizontal={true} space={16} />
          <View style={styles.block} />
        </Box>
      </StoryPart>

      <StoryPart title="Horizontal with text">
        <Box direction="row" alignItems="center">
          <View style={styles.block} />

          <Separator horizontal={true} space={16}>
            or
          </Separator>

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

      <StoryPart title="Vertical with text">
        <Box direction="column" alignItems="start">
          <View style={styles.block} />

          <Separator horizontal={false} space={16}>
            or
          </Separator>

          <View style={styles.block} />
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(y=(c=i.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const V=["Directions"];export{i as Directions,V as __namedExportsOrder,x as default};
//# sourceMappingURL=Separator.stories-95df7484.js.map