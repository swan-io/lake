import{S as y,c as k,j as l,a as e,V as c,b as s,p as u,L as r}from"./Space-7ecbd5cc.js";import{r as f}from"./index-ebeaab24.js";import{B as i}from"./index-fe2aef2e.js";import{L as g}from"./LakeLabel-78eec39e.js";import{R as m}from"./ResponsiveContainer-10affc12.js";import{S as x}from"./Switch-04952574.js";import{S as w}from"./_StoriesComponents-8ae03b00.js";import"./extends-98964cd2.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Animated-7df0e18f.js";import"./index-9bec80fa.js";import"./index-fa189d1a.js";import"./index-5435131a.js";import"./index-75f3d074.js";import"./math-57255c71.js";import"./Icon-983993bc.js";import"./Svg-b74da1d8.js";import"./index-6b369e10.js";const t=y.create({container:{width:"100%"},containerMobile:{maxWidth:400},switchContainer:{alignSelf:"flex-start"},block:{width:120,height:60,backgroundColor:k.gray[0],borderRadius:8}}),q={title:"Layout/ResponsiveContainer",component:m},n=()=>{const[a,b]=f.useState(!1);return l(w,{title:"ResponsiveContainer",description:["ResponsiveContainer is a component that allows you to render different content depending on the screen size.",'You can try it by toggling the "Mobile mode" switch'],children:[e(g,{label:"Mobile mode",render:()=>e(c,{style:t.switchContainer,children:e(x,{value:a,onValueChange:b})})}),e(s,{height:16}),e(c,{style:a?t.containerMobile:t.container,children:e(m,{breakpoint:u.tiny,children:({small:o})=>l(i,{direction:o?"column":"row",children:[e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:o?"Mobile size":"Desktop size"})})]})})})]})};var p,h,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=ResponsiveContainer.stories-947657ac.js.map
