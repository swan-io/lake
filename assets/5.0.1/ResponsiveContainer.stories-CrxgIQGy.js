import{s as y,c as k,j as l,a as e,V as c,S as s,C as u,L as r}from"./Space-9yQWBa1K.js";import{r as f}from"./index-CBqU2yxZ.js";import{B as o}from"./commonStyles-Cy2mopxz.js";import{L as g}from"./LakeLabel-CMr7LHaX.js";import{R as m}from"./ResponsiveContainer-B7X2g9yV.js";import{S as x}from"./Switch-BpmpVIuz.js";import{S as w}from"./_StoriesComponents-SEttthGg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./v4-D8aEg3BZ.js";import"./Animated-C-EIfxmt.js";import"./index-DeE2YFp2.js";import"./index-c7DTqyoj.js";import"./index-ku8aT5BP.js";import"./math-BU1VNIy5.js";import"./index-BnbCUlN6.js";const t=y.create({container:{width:"100%"},containerMobile:{maxWidth:400},switchContainer:{alignSelf:"flex-start"},block:{width:120,height:60,backgroundColor:k.gray[0],borderRadius:8}}),Y={title:"Layout/ResponsiveContainer",component:m},i=()=>{const[a,b]=f.useState(!1);return l(w,{title:"ResponsiveContainer",description:["ResponsiveContainer is a component that allows you to render different content depending on the screen size.",'You can try it by toggling the "Mobile mode" switch'],children:[e(g,{label:"Mobile mode",render:()=>e(c,{style:t.switchContainer,children:e(x,{value:a,onValueChange:b})})}),e(s,{height:16}),e(c,{style:a?t.containerMobile:t.container,children:e(m,{breakpoint:u.tiny,children:({small:n})=>l(o,{direction:n?"column":"row",children:[e(o,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:n?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(o,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:n?"Mobile size":"Desktop size"})}),e(s,{width:16,height:16}),e(o,{justifyContent:"center",alignItems:"center",style:t.block,children:e(r,{children:n?"Mobile size":"Desktop size"})})]})})})]})};var h,p,d;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const O=["Default"];export{i as Default,O as __namedExportsOrder,Y as default};
//# sourceMappingURL=ResponsiveContainer.stories-CrxgIQGy.js.map