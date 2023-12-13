import{S as p,c as d,j as o,a as t,V as e}from"./Space-DbGufgjO.js";import{B as n}from"./commonStyles-mTEPZlIY.js";import{b as l,S as m,a}from"./_StoriesComponents-LK0Hv-SW.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-4g5l5LRQ.js";import"./index-jmm5gWkb.js";const r=p.create({block:{width:60,height:60,backgroundColor:d.gray[200],borderRadius:8}}),V={title:"Layout/Separator",component:l},i=()=>o(m,{title:"Separator",children:[t(a,{title:"Horizontal",children:o(n,{direction:"row",alignItems:"center",children:[t(e,{style:r.block}),t(l,{horizontal:!0,space:16}),t(e,{style:r.block})]})}),t(a,{title:"Horizontal with text",children:o(n,{direction:"row",alignItems:"center",children:[t(e,{style:r.block}),t(l,{horizontal:!0,space:16,children:"or"}),t(e,{style:r.block})]})}),t(a,{title:"Vertical",children:o(n,{direction:"column",alignItems:"start",children:[t(e,{style:r.block}),t(l,{horizontal:!1,space:16}),t(e,{style:r.block})]})}),t(a,{title:"Vertical with text",children:o(n,{direction:"column",alignItems:"start",children:[t(e,{style:r.block}),t(l,{horizontal:!1,space:16,children:"or"}),t(e,{style:r.block})]})})]});var s,c,y;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(y=(c=i.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const B=["Directions"];export{i as Directions,B as __namedExportsOrder,V as default};
//# sourceMappingURL=Separator.stories-7aWxKwPA.js.map
