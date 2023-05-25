import{S as p,c as m,j as a,a as t,V as r}from"./Space-1224ae57.js";import{B as l}from"./index-d714868b.js";import{b as s,S,a as n}from"./_StoriesComponents-8be52b43.js";import"./extends-98964cd2.js";import"./index-ebeaab24.js";const e=p.create({block:{width:60,height:60,backgroundColor:m.gray[200],borderRadius:8}}),x={title:"Layout/Separator",component:s},o=()=>a(S,{title:"Separator",children:[t(n,{title:"Horizontal",children:a(l,{direction:"row",alignItems:"center",children:[t(r,{style:e.block}),t(s,{horizontal:!0,space:16}),t(r,{style:e.block})]})}),t(n,{title:"Vertical",children:a(l,{direction:"column",alignItems:"start",children:[t(r,{style:e.block}),t(s,{horizontal:!1,space:16}),t(r,{style:e.block})]})})]});var i,c,y;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(y=(c=o.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const B=["Directions"];export{o as Directions,B as __namedExportsOrder,x as default};
//# sourceMappingURL=Separator.stories-a67d46ea.js.map
