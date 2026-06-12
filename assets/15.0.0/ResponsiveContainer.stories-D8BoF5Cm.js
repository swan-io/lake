import{c as e,i as t}from"./preload-helper-C6cs2Kqh.js";import{o as n}from"./iframe-CLSIj5Jn.js";import{St as r,U as i,bt as a,g as o,h as s,ht as c,i as l,it as u,o as d,r as f,rt as p,s as m,st as h}from"./ScrollView-DMnF1DL7.js";import{r as g,t as _}from"./_StoriesComponents-CNQzlzKu.js";import{n as v,t as y}from"./LakeLabel-DgwjmWdA.js";import{n as b,t as x}from"./ResponsiveContainer-BxhaqhCd.js";import{n as S,t as C}from"./Switch-DI4eavde.js";var w,T,E,D,O,k;t((()=>{w=e(n()),c(),o(),v(),m(),b(),l(),S(),h(),g(),T=i(),E=r.create({container:{width:`100%`},containerMobile:{maxWidth:400},switchContainer:{alignSelf:`flex-start`},block:{width:120,height:60,backgroundColor:u.gray[0],borderRadius:8}}),D={title:`Layout/ResponsiveContainer`,component:x},O=()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(_,{title:`ResponsiveContainer`,description:[`ResponsiveContainer is a component that allows you to render different content depending on the screen size.`,`You can try it by toggling the "Mobile mode" switch`],children:[(0,T.jsx)(y,{label:`Mobile mode`,render:()=>(0,T.jsx)(a,{style:E.switchContainer,children:(0,T.jsx)(C,{value:e,onValueChange:t})})}),(0,T.jsx)(f,{height:16}),(0,T.jsx)(a,{style:e?E.containerMobile:E.container,children:(0,T.jsx)(x,{breakpoint:p.tiny,children:({small:e})=>(0,T.jsxs)(s,{direction:e?`column`:`row`,children:[(0,T.jsx)(s,{justifyContent:`center`,alignItems:`center`,style:E.block,children:(0,T.jsx)(d,{children:e?`Mobile size`:`Desktop size`})}),(0,T.jsx)(f,{width:16,height:16}),(0,T.jsx)(s,{justifyContent:`center`,alignItems:`center`,style:E.block,children:(0,T.jsx)(d,{children:e?`Mobile size`:`Desktop size`})}),(0,T.jsx)(f,{width:16,height:16}),(0,T.jsx)(s,{justifyContent:`center`,alignItems:`center`,style:E.block,children:(0,T.jsx)(d,{children:e?`Mobile size`:`Desktop size`})})]})})})]})},O.__docgenInfo={description:``,methods:[],displayName:`Default`},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=ResponsiveContainer.stories-D8BoF5Cm.js.map