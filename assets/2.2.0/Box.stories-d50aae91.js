import{S as y,c as o,a as e,j as b,V as r,b as i}from"./Space-3d0382a9.js";import{B as l}from"./index-815116d7.js";import{S as g}from"./_StoriesComponents-a672907b.js";import"./extends-98964cd2.js";import"./index-ebeaab24.js";const s=y.create({block1:{width:60,height:60,backgroundColor:o.gray[200],borderRadius:8},block2:{width:130,height:130,backgroundColor:o.gray[200],borderRadius:8},block3:{width:100,height:100,backgroundColor:o.gray[200],borderRadius:8}}),w={title:"Layout/Box",component:l},t=({direction:d,alignItems:p,justifyContent:h})=>e(g,{title:"Box",description:["Box component is a flexbox container configurable with props instead of creating styles each time we need flexbox","You can edit props in 'Controls' panel. (Press A to open it)"],children:b(l,{direction:d,justifyContent:h,alignItems:p,children:[e(r,{style:s.block1}),e(i,{width:16,height:16}),e(r,{style:s.block2}),e(i,{width:16,height:16}),e(r,{style:s.block3})]})});var n,a,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const B=["Interactive"];export{t as Interactive,B as __namedExportsOrder,w as default};
//# sourceMappingURL=Box.stories-d50aae91.js.map
