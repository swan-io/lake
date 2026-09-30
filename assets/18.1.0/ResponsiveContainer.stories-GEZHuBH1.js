import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-Bp7n9_Wj.js";import{Bt as r,Et as i,Ft as a,J as o,g as s,h as c,ht as l,i as u,mt as d,o as f,r as p,s as m,vt as h}from"./ScrollView-CaaTTa8S.js";import{r as g,t as _}from"./_StoriesComponents-Be3ypVil.js";import{n as v,t as y}from"./ResponsiveContainer-Chbs9Ko_.js";import{n as b,t as x}from"./Switch-IGmE1ThU.js";var S,C,w,T,E,D;t((()=>{S=e(n()),i(),s(),m(),v(),u(),b(),h(),g(),C=o(),w=r.create({container:{width:`100%`},containerMobile:{maxWidth:400},block:{width:120,height:60,backgroundColor:l.gray[0],borderRadius:8}}),T={title:`Layout/ResponsiveContainer`,component:y},E=()=>{let[e,t]=(0,S.useState)(!1),n=(0,S.useId)();return(0,C.jsxs)(_,{title:`ResponsiveContainer`,description:[`ResponsiveContainer is a component that allows you to render different content depending on the screen size.`,`You can try it by toggling the "Mobile mode" switch`],children:[(0,C.jsxs)(c,{direction:`row`,alignItems:`center`,children:[(0,C.jsx)(x,{value:e,onValueChange:t,labelledBy:n}),(0,C.jsx)(p,{width:12}),(0,C.jsx)(f,{id:n,color:l.gray[700],children:`Mobile mode`})]}),(0,C.jsx)(p,{height:16}),(0,C.jsx)(a,{style:e?w.containerMobile:w.container,children:(0,C.jsx)(y,{breakpoint:d.tiny,children:({small:e})=>(0,C.jsxs)(c,{direction:e?`column`:`row`,children:[(0,C.jsx)(c,{justifyContent:`center`,alignItems:`center`,style:w.block,children:(0,C.jsx)(f,{children:e?`Mobile size`:`Desktop size`})}),(0,C.jsx)(p,{width:16,height:16}),(0,C.jsx)(c,{justifyContent:`center`,alignItems:`center`,style:w.block,children:(0,C.jsx)(f,{children:e?`Mobile size`:`Desktop size`})}),(0,C.jsx)(p,{width:16,height:16}),(0,C.jsx)(c,{justifyContent:`center`,alignItems:`center`,style:w.block,children:(0,C.jsx)(f,{children:e?`Mobile size`:`Desktop size`})})]})})})]})},E.__docgenInfo={description:``,methods:[],displayName:`Default`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [forceMobileWidth, setForceMobileWidth] = useState(false);
  const switchLabelId = useId();
  return <StoryBlock title="ResponsiveContainer" description={["ResponsiveContainer is a component that allows you to render different content depending on the screen size.", 'You can try it by toggling the "Mobile mode" switch']}>
      <Box direction="row" alignItems="center">
        <Switch value={forceMobileWidth} onValueChange={setForceMobileWidth} labelledBy={switchLabelId} />
        <Space width={12} />
        <LakeText id={switchLabelId} color={colors.gray[700]}>
          Mobile mode
        </LakeText>
      </Box>

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
}`,...E.parameters?.docs?.source}}},D=[`Default`]}))();export{E as Default,D as __namedExportsOrder,T as default};
//# sourceMappingURL=ResponsiveContainer.stories-GEZHuBH1.js.map