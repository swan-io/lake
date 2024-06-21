import{s as b,c as x,j as e,V as l,S as s,k as y,B as i,L as r}from"./Space-vOSkumTC.js";import{r as k}from"./index-uCp2LrAq.js";import{L as u}from"./LakeLabel-BFvpiBvO.js";import{R as p}from"./ResponsiveContainer-COTGejVM.js";import{S as f}from"./Switch-CKgcjXoN.js";import{S as g}from"./_StoriesComponents-jOR6vAMI.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./commonStyles-t4XfA7cz.js";import"./v4-CQkTLCs1.js";import"./index-ByctqrIc.js";const t=b.create({container:{width:"100%"},containerMobile:{maxWidth:400},switchContainer:{alignSelf:"flex-start"},block:{width:120,height:60,backgroundColor:x.gray[0],borderRadius:8}}),W={title:"Layout/ResponsiveContainer",component:p},n=()=>{const[a,m]=k.useState(!1);return e.jsxs(g,{title:"ResponsiveContainer",description:["ResponsiveContainer is a component that allows you to render different content depending on the screen size.",'You can try it by toggling the "Mobile mode" switch'],children:[e.jsx(u,{label:"Mobile mode",render:()=>e.jsx(l,{style:t.switchContainer,children:e.jsx(f,{value:a,onValueChange:m})})}),e.jsx(s,{height:16}),e.jsx(l,{style:a?t.containerMobile:t.container,children:e.jsx(p,{breakpoint:y.tiny,children:({small:o})=>e.jsxs(i,{direction:o?"column":"row",children:[e.jsx(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:o?"Mobile size":"Desktop size"})}),e.jsx(s,{width:16,height:16}),e.jsx(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:o?"Mobile size":"Desktop size"})}),e.jsx(s,{width:16,height:16}),e.jsx(i,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:o?"Mobile size":"Desktop size"})})]})})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,d,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,W as default};
//# sourceMappingURL=ResponsiveContainer.stories-DJaTl1Tt.js.map
