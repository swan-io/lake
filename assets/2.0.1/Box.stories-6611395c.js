import{S as y,c as o,a as e,j as b,V as r,b as s}from"./Space-65f9bfa9.js";import{B as l}from"./index-5dcf0b89.js";import{S as g}from"./_StoriesComponents-9f567819.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8db94870.js";const i=y.create({block1:{width:60,height:60,backgroundColor:o.gray[200],borderRadius:8},block2:{width:130,height:130,backgroundColor:o.gray[200],borderRadius:8},block3:{width:100,height:100,backgroundColor:o.gray[200],borderRadius:8}}),B={title:"Layout/Box",component:l},t=({direction:d,alignItems:p,justifyContent:h})=>e(g,{title:"Box",description:["Box component is a flexbox container configurable with props instead of creating styles each time we need flexbox","You can edit props in 'Controls' panel. (Press A to open it)"],children:b(l,{direction:d,justifyContent:h,alignItems:p,children:[e(r,{style:i.block1}),e(s,{width:16,height:16}),e(r,{style:i.block2}),e(s,{width:16,height:16}),e(r,{style:i.block3})]})});var n,a,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  direction,
  alignItems,
  justifyContent
}: StoryArgs) => {
  return <StoryBlock title="Box" description={["Box component is a flexbox container configurable with props instead of creating styles each time we need flexbox", "You can edit props in 'Controls' panel. (Press A to open it)"]}>
      <Box direction={direction} justifyContent={justifyContent} alignItems={alignItems}>
        <View style={styles.block1} />
        <Space width={16} height={16} />
        <View style={styles.block2} />
        <Space width={16} height={16} />
        <View style={styles.block3} />
      </Box>
    </StoryBlock>;
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const S=["Interactive"];export{t as Interactive,S as __namedExportsOrder,B as default};
//# sourceMappingURL=Box.stories-6611395c.js.map
