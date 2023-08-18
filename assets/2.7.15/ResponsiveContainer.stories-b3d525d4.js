import{S as k,c as u,a,j as e,V as c,b as s,L as r}from"./Space-f85095f8.js";import{r as f}from"./index-b9a8c83f.js";import{B as i}from"./Box-f4fbfbba.js";import{L as g}from"./LakeLabel-2fef3f03.js";import{R as m}from"./ResponsiveContainer-46064607.js";import{S as x}from"./Switch-c8cb8abc.js";import{S as w}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Animated-2d9f33ca.js";import"./index-1a82f3cd.js";import"./index-71e0d995.js";import"./index-51399c4b.js";import"./math-57176261.js";import"./index-75f16835.js";const t=k.create({container:{width:"100%"},containerMobile:{maxWidth:400},switchContainer:{alignSelf:"flex-start"},block:{width:120,height:60,backgroundColor:u.gray[0],borderRadius:8}}),A={title:"Layout/ResponsiveContainer",component:m},n=({breakpoint:b,style:C})=>{const[l,y]=f.useState(!1);return a(w,{title:"ResponsiveContainer",description:["ResponsiveContainer is a component that allows you to render different content depending on the screen size.",'You can try it by toggling the "Mobile mode" switch'],children:[e(g,{label:"Mobile mode",render:()=>e(c,{style:t.switchContainer,children:e(x,{value:l,onValueChange:y})})}),e(s,{height:16}),e(c,{style:l?t.containerMobile:t.container,children:e(m,{breakpoint:b,children:({small:o})=>a(i,{direction:o?"column":"row",children:[e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})})]})})})]})};var h,p,d;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
  breakpoint,
  style
}: StoryArgs) => {
  const [forceMobileWidth, setForceMobileWidth] = useState(false);
  return <StoryBlock title="ResponsiveContainer" description={["ResponsiveContainer is a component that allows you to render different content depending on the screen size.", 'You can try it by toggling the "Mobile mode" switch']}>
      <LakeLabel label="Mobile mode" render={() => <View style={styles.switchContainer}>
            <Switch value={forceMobileWidth} onValueChange={setForceMobileWidth} />
          </View>} />

      <Space height={16} />

      <View style={forceMobileWidth ? styles.containerMobile : styles.container}>
        <ResponsiveContainer breakpoint={breakpoint}>
          {({
          small
        }) => <Box direction={small ? "column" : "row"}>
              <Box justifyContent="center" alignItems="center" style={styles.block}>
                <LakeText>{small ? "Mobile size" : "Desktop size"}</LakeText>
              </Box>

              <Space width={16} height={16} />

              <Box justifyContent="center" alignItems="center" style={styles.block}>
                <LakeText>{small ? "Mobile size" : "Desktop size"}</LakeText>
              </Box>

              <Space width={16} height={16} />

              <Box justifyContent="center" alignItems="center" style={styles.block}>
                <LakeText>{small ? "Mobile size" : "Desktop size"}</LakeText>
              </Box>
            </Box>}
        </ResponsiveContainer>
      </View>
    </StoryBlock>;
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const O=["Default"];export{n as Default,O as __namedExportsOrder,A as default};
//# sourceMappingURL=ResponsiveContainer.stories-b3d525d4.js.map
