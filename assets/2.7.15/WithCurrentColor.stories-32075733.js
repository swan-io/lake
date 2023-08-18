import{W as o,S as c,c as C,j as r,a as y,V as e}from"./Space-f85095f8.js";import{B as u}from"./Box-f4fbfbba.js";import{S as h}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-b9a8c83f.js";const t=c.create({container:{flexWrap:"wrap"},blockContainer:{width:60,height:40,margin:8},currentColorBlock:{width:"100%",height:"100%",borderRadius:4,backgroundColor:C.current[400]}}),m={title:"Utilities/WithCurrentColor",component:o},l=({variant:a,style:k,children:d})=>r(h,{title:"WithCurrentColor",description:"This component change the color of all its children using 'colors.current[shade]'",children:y(u,{direction:"row",style:t.container,children:[r(o,{style:t.blockContainer,variant:a,children:r(e,{style:t.currentColorBlock})}),r(o,{style:t.blockContainer,variant:"gray",children:r(e,{style:t.currentColorBlock})}),r(o,{style:t.blockContainer,variant:"live",children:r(e,{style:t.currentColorBlock})}),r(o,{style:t.blockContainer,variant:"sandbox",children:r(e,{style:t.currentColorBlock})}),r(o,{style:t.blockContainer,variant:"positive",children:r(e,{style:t.currentColorBlock})}),r(o,{style:t.blockContainer,variant:"warning",children:r(e,{style:t.currentColorBlock})}),r(o,{style:t.blockContainer,variant:"negative",children:r(e,{style:t.currentColorBlock})}),r(o,{style:t.blockContainer,variant:"swan",children:r(e,{style:t.currentColorBlock})}),r(o,{style:t.blockContainer,variant:"shakespear",children:r(e,{style:t.currentColorBlock})}),r(o,{style:t.blockContainer,variant:"darkPink",children:r(e,{style:t.currentColorBlock})}),r(o,{style:t.blockContainer,variant:"sunglow",children:r(e,{style:t.currentColorBlock})}),r(o,{style:t.blockContainer,variant:"mediumSladeBlue",children:r(e,{style:t.currentColorBlock})})]})});var n,i,s;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`({
  variant,
  style,
  children
}: StoryArgs) => {
  return <StoryBlock title="WithCurrentColor" description="This component change the color of all its children using 'colors.current[shade]'">
      <Box direction="row" style={styles.container}>
        <WithCurrentColor style={styles.blockContainer} variant={variant}>
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="gray">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="live">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="sandbox">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="positive">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="warning">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="negative">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="swan">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="shakespear">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="darkPink">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="sunglow">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="mediumSladeBlue">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>
      </Box>
    </StoryBlock>;
}`,...(s=(i=l.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const g=["Colors"];export{l as Colors,g as __namedExportsOrder,m as default};
//# sourceMappingURL=WithCurrentColor.stories-32075733.js.map
