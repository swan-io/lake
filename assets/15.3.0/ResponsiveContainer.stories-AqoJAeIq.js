import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-Dh5tXkHM.js";import{U as r,g as i,h as a,ht as o,i as s,it as c,kt as l,o as u,r as d,rt as f,s as p,st as m,wt as h}from"./ScrollView-CEguXzeH.js";import{r as g,t as _}from"./_StoriesComponents-Dbl6gwt6.js";import{n as v,t as y}from"./LakeLabel-BARPW2ZA.js";import{n as b,t as x}from"./ResponsiveContainer-DbSqtxmq.js";import{n as S,t as C}from"./Switch-DKTpVtxr.js";var w,T,E,D,O,k;t((()=>{w=e(n()),o(),i(),v(),p(),b(),s(),S(),m(),g(),T=r(),E=l.create({container:{width:`100%`},containerMobile:{maxWidth:400},switchContainer:{alignSelf:`flex-start`},block:{width:120,height:60,backgroundColor:c.gray[0],borderRadius:8}}),D={title:`Layout/ResponsiveContainer`,component:x},O=()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(_,{title:`ResponsiveContainer`,description:[`ResponsiveContainer is a component that allows you to render different content depending on the screen size.`,`You can try it by toggling the "Mobile mode" switch`],children:[(0,T.jsx)(y,{label:`Mobile mode`,render:()=>(0,T.jsx)(h,{style:E.switchContainer,children:(0,T.jsx)(C,{value:e,onValueChange:t})})}),(0,T.jsx)(d,{height:16}),(0,T.jsx)(h,{style:e?E.containerMobile:E.container,children:(0,T.jsx)(x,{breakpoint:f.tiny,children:({small:e})=>(0,T.jsxs)(a,{direction:e?`column`:`row`,children:[(0,T.jsx)(a,{justifyContent:`center`,alignItems:`center`,style:E.block,children:(0,T.jsx)(u,{children:e?`Mobile size`:`Desktop size`})}),(0,T.jsx)(d,{width:16,height:16}),(0,T.jsx)(a,{justifyContent:`center`,alignItems:`center`,style:E.block,children:(0,T.jsx)(u,{children:e?`Mobile size`:`Desktop size`})}),(0,T.jsx)(d,{width:16,height:16}),(0,T.jsx)(a,{justifyContent:`center`,alignItems:`center`,style:E.block,children:(0,T.jsx)(u,{children:e?`Mobile size`:`Desktop size`})})]})})})]})},O.__docgenInfo={description:``,methods:[],displayName:`Default`},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=ResponsiveContainer.stories-AqoJAeIq.js.map