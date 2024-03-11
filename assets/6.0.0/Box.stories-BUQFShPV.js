import{B as l,s as y,c as o,a as e,j as g,V as s,S as i}from"./Space-BWccxxFI.js";import{S as m}from"./_StoriesComponents-0t4GGLrq.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";const r=y.create({block1:{width:60,height:60,backgroundColor:o.gray[200],borderRadius:8},block2:{width:130,height:130,backgroundColor:o.gray[200],borderRadius:8},block3:{width:100,height:100,backgroundColor:o.gray[200],borderRadius:8}}),S={title:"Layout/Box",component:l},t=({direction:d,alignItems:p,justifyContent:h})=>e(m,{title:"Box",description:["Box component is a flexbox container configurable with props instead of creating styles each time we need flexbox","You can edit props in 'Controls' panel. (Press A to open it)"],children:g(l,{direction:d,justifyContent:h,alignItems:p,children:[e(s,{style:r.block1}),e(i,{width:16,height:16}),e(s,{style:r.block2}),e(i,{width:16,height:16}),e(s,{style:r.block3})]})});var n,a,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
//# sourceMappingURL=Box.stories-BUQFShPV.js.map
