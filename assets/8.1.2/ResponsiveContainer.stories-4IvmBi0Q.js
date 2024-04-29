import{s as b,c as x,j as e,V as l,S as s,k as y,B as i,L as r}from"./Space-DwfUYIjw.js";import{r as k}from"./index-CBqU2yxZ.js";import{L as u}from"./LakeLabel-CCeRol2L.js";import{R as h}from"./ResponsiveContainer-BFkNPuEU.js";import{S as f}from"./Switch-tvnjcZRH.js";import{S as g}from"./_StoriesComponents-DjOscnYS.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./v4-D8aEg3BZ.js";import"./Animated-CkL2SVKX.js";import"./index-BYAXyTX-.js";import"./index-BkDwnl7x.js";import"./index-BLD_uEcv.js";import"./math-Doq_lv8F.js";import"./index-DNZKa5vc.js";const t=b.create({container:{width:"100%"},containerMobile:{maxWidth:400},switchContainer:{alignSelf:"flex-start"},block:{width:120,height:60,backgroundColor:x.gray[0],borderRadius:8}}),F={title:"Layout/ResponsiveContainer",component:h},n=()=>{const[a,m]=k.useState(!1);return e.jsxs(g,{title:"ResponsiveContainer",description:["ResponsiveContainer is a component that allows you to render different content depending on the screen size.",'You can try it by toggling the "Mobile mode" switch'],children:[e.jsx(u,{label:"Mobile mode",render:()=>e.jsx(l,{style:t.switchContainer,children:e.jsx(f,{value:a,onValueChange:m})})}),e.jsx(s,{height:16}),e.jsx(l,{style:a?t.containerMobile:t.container,children:e.jsx(h,{breakpoint:y.tiny,children:({small:o})=>e.jsxs(i,{direction:o?"column":"row",children:[e.jsx(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:o?"Mobile size":"Desktop size"})}),e.jsx(s,{width:16,height:16}),e.jsx(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:o?"Mobile size":"Desktop size"})}),e.jsx(s,{width:16,height:16}),e.jsx(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:o?"Mobile size":"Desktop size"})})]})})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Y=["Default"];export{n as Default,Y as __namedExportsOrder,F as default};
//# sourceMappingURL=ResponsiveContainer.stories-4IvmBi0Q.js.map