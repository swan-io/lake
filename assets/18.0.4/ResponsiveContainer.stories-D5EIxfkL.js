import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-xecgKmXw.js";import{Bt as r,Et as i,Ft as a,et as o,g as s,h as c,ht as l,i as u,mt as d,o as f,r as p,s as m,vt as h}from"./ScrollView-CIA5lAtq.js";import{r as g,t as _}from"./_StoriesComponents-CpAt8giV.js";import{n as v,t as y}from"./LakeLabel-CT3Mfu01.js";import{n as b,t as x}from"./ResponsiveContainer-fLl4W2di.js";import{n as S,t as C}from"./Switch-DD1dhDkI.js";var w,T,E,D,O,k;t((()=>{w=e(n()),i(),s(),v(),m(),b(),u(),S(),h(),g(),T=o(),E=r.create({container:{width:`100%`},containerMobile:{maxWidth:400},switchContainer:{alignSelf:`flex-start`},block:{width:120,height:60,backgroundColor:l.gray[0],borderRadius:8}}),D={title:`Layout/ResponsiveContainer`,component:x},O=()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(_,{title:`ResponsiveContainer`,description:[`ResponsiveContainer is a component that allows you to render different content depending on the screen size.`,`You can try it by toggling the "Mobile mode" switch`],children:[(0,T.jsx)(y,{label:`Mobile mode`,render:()=>(0,T.jsx)(a,{style:E.switchContainer,children:(0,T.jsx)(C,{value:e,onValueChange:t})})}),(0,T.jsx)(p,{height:16}),(0,T.jsx)(a,{style:e?E.containerMobile:E.container,children:(0,T.jsx)(x,{breakpoint:d.tiny,children:({small:e})=>(0,T.jsxs)(c,{direction:e?`column`:`row`,children:[(0,T.jsx)(c,{justifyContent:`center`,alignItems:`center`,style:E.block,children:(0,T.jsx)(f,{children:e?`Mobile size`:`Desktop size`})}),(0,T.jsx)(p,{width:16,height:16}),(0,T.jsx)(c,{justifyContent:`center`,alignItems:`center`,style:E.block,children:(0,T.jsx)(f,{children:e?`Mobile size`:`Desktop size`})}),(0,T.jsx)(p,{width:16,height:16}),(0,T.jsx)(c,{justifyContent:`center`,alignItems:`center`,style:E.block,children:(0,T.jsx)(f,{children:e?`Mobile size`:`Desktop size`})})]})})})]})},O.__docgenInfo={description:``,methods:[],displayName:`Default`},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k=[`Default`]}))();export{O as Default,k as __namedExportsOrder,D as default};
//# sourceMappingURL=ResponsiveContainer.stories-D5EIxfkL.js.map