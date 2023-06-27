import{S as y,c as k,j as l,a as e,V as c,b as s,g as u,L as r}from"./Space-57107f4e.js";import{r as f}from"./index-8db94870.js";import{B as i}from"./index-73e1d3ab.js";import{L as g}from"./LakeLabel-c92a8f20.js";import{R as m}from"./ResponsiveContainer-20d0b720.js";import{S as x}from"./Switch-85943987.js";import{S as w}from"./_StoriesComponents-152d52c7.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Animated-232f86a6.js";import"./index-58bb7859.js";import"./index-6e5c097a.js";import"./index-b1dbc5b8.js";import"./math-b9695d7b.js";import"./Icon-26b2c7d1.js";import"./Svg-c3c146c4.js";import"./index-ab60b850.js";const t=y.create({container:{width:"100%"},containerMobile:{maxWidth:400},switchContainer:{alignSelf:"flex-start"},block:{width:120,height:60,backgroundColor:k.gray[0],borderRadius:8}}),q={title:"Layout/ResponsiveContainer",component:m},n=()=>{const[a,b]=f.useState(!1);return l(w,{title:"ResponsiveContainer",description:["ResponsiveContainer is a component that allows you to render different content depending on the screen size.",'You can try it by toggling the "Mobile mode" switch'],children:[e(g,{label:"Mobile mode",render:()=>e(c,{style:t.switchContainer,children:e(x,{value:a,onValueChange:b})})}),e(s,{height:16}),e(c,{style:a?t.containerMobile:t.container,children:e(m,{breakpoint:u.tiny,children:({small:o})=>l(i,{direction:o?"column":"row",children:[e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})})]})})})]})};var p,h,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=ResponsiveContainer.stories-125d0256.js.map
