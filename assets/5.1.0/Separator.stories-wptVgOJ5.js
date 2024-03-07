import{s as p,c as d,j as o,a as t,V as e}from"./Space-C8KErHfL.js";import{B as n}from"./commonStyles-V4Zp-5Mf.js";import{b as l,S as m,a}from"./_StoriesComponents-BxMReXIB.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";const r=p.create({block:{width:60,height:60,backgroundColor:d.gray[200],borderRadius:8}}),V={title:"Layout/Separator",component:l},s=()=>o(m,{title:"Separator",children:[t(a,{title:"Horizontal",children:o(n,{direction:"row",alignItems:"center",children:[t(e,{style:r.block}),t(l,{horizontal:!0,space:16}),t(e,{style:r.block})]})}),t(a,{title:"Horizontal with text",children:o(n,{direction:"row",alignItems:"center",children:[t(e,{style:r.block}),t(l,{horizontal:!0,space:16,children:"or"}),t(e,{style:r.block})]})}),t(a,{title:"Vertical",children:o(n,{direction:"column",alignItems:"start",children:[t(e,{style:r.block}),t(l,{horizontal:!1,space:16}),t(e,{style:r.block})]})}),t(a,{title:"Vertical with text",children:o(n,{direction:"column",alignItems:"start",children:[t(e,{style:r.block}),t(l,{horizontal:!1,space:16,children:"or"}),t(e,{style:r.block})]})})]});var i,c,y;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(y=(c=s.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const B=["Directions"];export{s as Directions,B as __namedExportsOrder,V as default};
//# sourceMappingURL=Separator.stories-wptVgOJ5.js.map
