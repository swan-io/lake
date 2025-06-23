import{j as e,V as l,s as b,S as n,o as x,B as s,L as r,c as y}from"./ScrollView-rpcy4Ntm.js";import{r as u}from"./iframe-CZb_pTm6.js";import{L as k}from"./LakeLabel-ENzKVgrL.js";import{R as p}from"./ResponsiveContainer-DJ4MQnBu.js";import{S as f}from"./Switch-B-jbA8y1.js";import{S as g}from"./_StoriesComponents-CCUyW6Y9.js";import"./index-DWBrKOLN.js";import"./commonStyles-BBEkV6IC.js";import"./v4-C6aID195.js";import"./index-Cvhf7Voo.js";import"./extends-CF3RwP-h.js";import"./Separator-CW0xnE3Z.js";const t=b.create({container:{width:"100%"},containerMobile:{maxWidth:400},switchContainer:{alignSelf:"flex-start"},block:{width:120,height:60,backgroundColor:y.gray[0],borderRadius:8}}),W={title:"Layout/ResponsiveContainer",component:p},o=()=>{const[a,m]=u.useState(!1);return e.jsxs(g,{title:"ResponsiveContainer",description:["ResponsiveContainer is a component that allows you to render different content depending on the screen size.",'You can try it by toggling the "Mobile mode" switch'],children:[e.jsx(k,{label:"Mobile mode",render:()=>e.jsx(l,{style:t.switchContainer,children:e.jsx(f,{value:a,onValueChange:m})})}),e.jsx(n,{height:16}),e.jsx(l,{style:a?t.containerMobile:t.container,children:e.jsx(p,{breakpoint:x.tiny,children:({small:i})=>e.jsxs(s,{direction:i?"column":"row",children:[e.jsx(s,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:i?"Mobile size":"Desktop size"})}),e.jsx(n,{width:16,height:16}),e.jsx(s,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:i?"Mobile size":"Desktop size"})}),e.jsx(n,{width:16,height:16}),e.jsx(s,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:i?"Mobile size":"Desktop size"})})]})})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,d,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const I=["Default"];export{o as Default,I as __namedExportsOrder,W as default};
//# sourceMappingURL=ResponsiveContainer.stories-BNhZ_PjJ.js.map
