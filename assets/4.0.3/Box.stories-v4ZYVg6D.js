import{S as y,c as o,a as e,j as m,V as r,b as s}from"./Space-mRfvjNi5.js";import{B as l}from"./commonStyles-8syA6ICP.js";import{S as b}from"./_StoriesComponents-NDVnze2M.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-4g5l5LRQ.js";import"./index-jmm5gWkb.js";const i=y.create({block1:{width:60,height:60,backgroundColor:o.gray[200],borderRadius:8},block2:{width:130,height:130,backgroundColor:o.gray[200],borderRadius:8},block3:{width:100,height:100,backgroundColor:o.gray[200],borderRadius:8}}),S={title:"Layout/Box",component:l},t=({direction:d,alignItems:p,justifyContent:h})=>e(b,{title:"Box",description:["Box component is a flexbox container configurable with props instead of creating styles each time we need flexbox","You can edit props in 'Controls' panel. (Press A to open it)"],children:m(l,{direction:d,justifyContent:h,alignItems:p,children:[e(r,{style:i.block1}),e(s,{width:16,height:16}),e(r,{style:i.block2}),e(s,{width:16,height:16}),e(r,{style:i.block3})]})});var n,a,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const C=["Interactive"];export{t as Interactive,C as __namedExportsOrder,S as default};
//# sourceMappingURL=Box.stories-v4ZYVg6D.js.map
