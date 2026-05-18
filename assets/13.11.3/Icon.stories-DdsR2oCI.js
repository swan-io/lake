import{c as e,i as t}from"./preload-helper-BnfVW-Vi.js";import{o as n}from"./iframe-OEE-UdGg.js";import{G as r,H as i,J as a,K as o,St as s,U as c,V as l,W as u,Y as d,g as f,h as p,ht as m,i as h,it as g,o as _,q as v,r as y,s as b,st as x}from"./ScrollView-Ck6m83EM.js";import{n as S,t as C}from"./BorderedIcon-C4X0J9mf.js";import{n as w,r as T,t as E}from"./_StoriesComponents-jAIs1NO9.js";import{n as D,t as O}from"./LakeTextInput-CGZTayde.js";import{n as k,t as A}from"./LakeLabel-BMIOLI5N.js";var j,M,N,P,F,I,L,R;t((()=>{j=e(n()),m(),S(),f(),i(),k(),b(),D(),h(),x(),d(),v(),r(),T(),M=c(),N=s.create({container:{flexWrap:`wrap`},icon:{flexBasis:`0%`,flexGrow:1,minWidth:250,paddingVertical:16}}),P={title:`Informations/Icon`,component:C},F=e=>Object.keys(e),I=()=>{let[e,t]=(0,j.useState)(``);return(0,M.jsxs)(E,{title:`Icon`,children:[(0,M.jsx)(A,{label:`Search`,render:()=>(0,M.jsx)(O,{icon:`search-filled`,value:e,onChangeText:t})}),(0,M.jsx)(w,{title:`Fluent icons`,children:(0,M.jsx)(p,{direction:`row`,alignItems:`center`,style:N.container,children:F({...o,...u}).filter(t=>t.includes(e)).map(e=>(0,M.jsxs)(p,{alignItems:`center`,style:N.icon,children:[(0,M.jsx)(l,{name:e,size:30,color:g.gray[800]}),(0,M.jsx)(y,{height:8}),(0,M.jsx)(_,{align:`center`,numberOfLines:1,children:e})]},e))})}),(0,M.jsx)(w,{title:`Custom icons`,children:(0,M.jsx)(p,{direction:`row`,alignItems:`center`,style:N.container,children:F(a).filter(t=>t.includes(e)).map(e=>(0,M.jsxs)(p,{alignItems:`center`,style:N.icon,children:[(0,M.jsx)(l,{name:e,size:30,color:g.gray[800]}),(0,M.jsx)(y,{height:8}),(0,M.jsx)(_,{align:`center`,numberOfLines:1,children:e})]},e))})})]})},L=({color:e})=>{let[t,n]=(0,j.useState)(``);return(0,M.jsxs)(E,{title:`BorderedIcon`,description:`You can change the color in 'Controls' panel (Press A to open it)`,children:[(0,M.jsx)(A,{label:`Search`,render:()=>(0,M.jsx)(O,{icon:`search-filled`,value:t,onChangeText:n})}),(0,M.jsx)(w,{title:`Fluent icons`,children:(0,M.jsx)(p,{direction:`row`,alignItems:`center`,style:N.container,children:F(o).filter(e=>e.includes(t)).map(t=>(0,M.jsxs)(p,{alignItems:`center`,style:N.icon,children:[(0,M.jsx)(C,{name:t,color:e,size:40,padding:8}),(0,M.jsx)(y,{height:8}),(0,M.jsx)(_,{align:`center`,numberOfLines:1,children:t})]},t))})}),(0,M.jsx)(w,{title:`Custom icons`,children:(0,M.jsx)(p,{direction:`row`,alignItems:`center`,style:N.container,children:F(a).filter(e=>e.includes(t)).map(t=>(0,M.jsxs)(p,{alignItems:`center`,style:N.icon,children:[(0,M.jsx)(C,{name:t,color:e,size:100,padding:8}),(0,M.jsx)(y,{height:8}),(0,M.jsx)(_,{align:`center`,numberOfLines:1,children:t})]},t))})})]})},I.__docgenInfo={description:``,methods:[],displayName:`Default`},L.__docgenInfo={description:``,methods:[],displayName:`Bordered`,props:{color:{required:!1,tsType:{name:`union`,raw:`keyof typeof colors`,elements:[{name:`literal`,value:`gray`},{name:`literal`,value:`live`},{name:`literal`,value:`sandbox`},{name:`literal`,value:`positive`},{name:`literal`,value:`warning`},{name:`literal`,value:`negative`},{name:`literal`,value:`current`},{name:`literal`,value:`partner`},{name:`literal`,value:`swan`},{name:`literal`,value:`shakespear`},{name:`literal`,value:`darkPink`},{name:`literal`,value:`sunglow`},{name:`literal`,value:`mediumSladeBlue`}]},description:``}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="Icon">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys({
          ...fluentIcons,
          ...fluentResizedIcons
        }).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`({
  color
}: BorderedArgs) => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="BorderedIcon" description="You can change the color in 'Controls' panel (Press A to open it)">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <BorderedIcon name={name} color={color} size={40} padding={8} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <BorderedIcon name={name} color={color} size={100} padding={8} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...L.parameters?.docs?.source}}},R=[`Default`,`Bordered`]}))();export{L as Bordered,I as Default,R as __namedExportsOrder,P as default};
//# sourceMappingURL=Icon.stories-DdsR2oCI.js.map