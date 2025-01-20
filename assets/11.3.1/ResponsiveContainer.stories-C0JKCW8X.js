import{j as e}from"./index-DNTRjB4V.js";import{r as b}from"./index-t2oEqn7n.js";import{s as x,c as y,V as l,S as n,m as u,B as s,L as r}from"./ScrollView-DZFasRfs.js";import{L as f}from"./LakeLabel-C-vWF8vw.js";import{R as p}from"./ResponsiveContainer-5HGfLSfi.js";import{S as k}from"./Switch-DN_4ZUNk.js";import{S as g}from"./_StoriesComponents-CxsebG8Y.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-BJPDY9Ks.js";import"./commonStyles-CWvHnKRn.js";import"./v4-C6aID195.js";import"./index-DVtii38k.js";import"./extends-CF3RwP-h.js";import"./Separator-BoTw3Vhn.js";const t=x.create({container:{width:"100%"},containerMobile:{maxWidth:400},switchContainer:{alignSelf:"flex-start"},block:{width:120,height:60,backgroundColor:y.gray[0],borderRadius:8}}),T={title:"Layout/ResponsiveContainer",component:p},o=()=>{const[a,m]=b.useState(!1);return e.jsxs(g,{title:"ResponsiveContainer",description:["ResponsiveContainer is a component that allows you to render different content depending on the screen size.",'You can try it by toggling the "Mobile mode" switch'],children:[e.jsx(f,{label:"Mobile mode",render:()=>e.jsx(l,{style:t.switchContainer,children:e.jsx(k,{value:a,onValueChange:m})})}),e.jsx(n,{height:16}),e.jsx(l,{style:a?t.containerMobile:t.container,children:e.jsx(p,{breakpoint:u.tiny,children:({small:i})=>e.jsxs(s,{direction:i?"column":"row",children:[e.jsx(s,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:i?"Mobile size":"Desktop size"})}),e.jsx(n,{width:16,height:16}),e.jsx(s,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:i?"Mobile size":"Desktop size"})}),e.jsx(n,{width:16,height:16}),e.jsx(s,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:i?"Mobile size":"Desktop size"})})]})})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,d,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,T as default};
//# sourceMappingURL=ResponsiveContainer.stories-C0JKCW8X.js.map
