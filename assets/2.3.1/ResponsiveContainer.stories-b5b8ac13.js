import{S as y,c as k,j as l,a as e,V as c,b as s,p as u,L as r}from"./Space-3cf2912f.js";import{r as f}from"./index-ebeaab24.js";import{B as i}from"./index-fb79b7ea.js";import{L as g}from"./LakeLabel-d7e7521d.js";import{R as m}from"./ResponsiveContainer-f66b42f5.js";import{S as x}from"./Switch-251d8b22.js";import{S as w}from"./_StoriesComponents-8ade90ce.js";import"./extends-98964cd2.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Animated-08395a07.js";import"./index-3852e9f5.js";import"./index-f210a78d.js";import"./index-2a36e4dc.js";import"./math-257b0aaf.js";import"./Icon-c4739b11.js";import"./Svg-e2d8fb17.js";import"./index-08284ad2.js";const t=y.create({container:{width:"100%"},containerMobile:{maxWidth:400},switchContainer:{alignSelf:"flex-start"},block:{width:120,height:60,backgroundColor:k.gray[0],borderRadius:8}}),O={title:"Layout/ResponsiveContainer",component:m},n=()=>{const[a,b]=f.useState(!1);return l(w,{title:"ResponsiveContainer",description:["ResponsiveContainer is a component that allows you to render different content depending on the screen size.",'You can try it by toggling the "Mobile mode" switch'],children:[e(g,{label:"Mobile mode",render:()=>e(c,{style:t.switchContainer,children:e(x,{value:a,onValueChange:b})})}),e(s,{height:16}),e(c,{style:a?t.containerMobile:t.container,children:e(m,{breakpoint:u.tiny,children:({small:o})=>l(i,{direction:o?"column":"row",children:[e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})})]})})})]})};var p,h,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(d=(h=n.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const q=["Default"];export{n as Default,q as __namedExportsOrder,O as default};
//# sourceMappingURL=ResponsiveContainer.stories-b5b8ac13.js.map
