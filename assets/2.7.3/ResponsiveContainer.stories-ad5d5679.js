import{S as y,c as k,a as l,j as e,V as c,b as s,p as u,L as r}from"./Space-cf4dfeb4.js";import{r as f}from"./index-76fb7be0.js";import{B as i}from"./index-5b9f7f54.js";import{L as g}from"./LakeLabel-0729881a.js";import{R as m}from"./ResponsiveContainer-5db25790.js";import{S as x}from"./Switch-d60e653b.js";import{S as w}from"./_StoriesComponents-2a4b9755.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Animated-c5b63493.js";import"./index-9ac18d78.js";import"./index-a0f89b0a.js";import"./index-b9eefd24.js";import"./math-e1c1a3b5.js";import"./Icon-6f7a1461.js";import"./Svg-b1e67ad2.js";import"./index-af3f1da0.js";const t=y.create({container:{width:"100%"},containerMobile:{maxWidth:400},switchContainer:{alignSelf:"flex-start"},block:{width:120,height:60,backgroundColor:k.gray[0],borderRadius:8}}),q={title:"Layout/ResponsiveContainer",component:m},n=()=>{const[a,b]=f.useState(!1);return l(w,{title:"ResponsiveContainer",description:["ResponsiveContainer is a component that allows you to render different content depending on the screen size.",'You can try it by toggling the "Mobile mode" switch'],children:[e(g,{label:"Mobile mode",render:()=>e(c,{style:t.switchContainer,children:e(x,{value:a,onValueChange:b})})}),e(s,{height:16}),e(c,{style:a?t.containerMobile:t.container,children:e(m,{breakpoint:u.tiny,children:({small:o})=>l(i,{direction:o?"column":"row",children:[e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})})]})})})]})};var p,h,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [forceMobileWidth, setForceMobileWidth] = useState(false);
  return <StoryBlock title="ResponsiveContainer" description={["ResponsiveContainer is a component that allows you to render different content depending on the screen size.", 'You can try it by toggling the "Mobile mode" switch']}>
      <LakeLabel label="Mobile mode" render={() => <View style={styles.switchContainer}>
            <Switch value={forceMobileWidth} onValueChange={setForceMobileWidth} />
          </View>} />

      <Space height={16} />

      <View style={forceMobileWidth ? styles.containerMobile : styles.container}>
        <ResponsiveContainer breakpoint={breakpoints.tiny}>
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
}`,...(d=(h=n.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const A=["Default"];export{n as Default,A as __namedExportsOrder,q as default};
//# sourceMappingURL=ResponsiveContainer.stories-ad5d5679.js.map
