import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-Ci4EyS06.js";import{Bt as r,Et as i,J as a,K as o,at as s,et as c,g as l,h as u,ht as d,i as f,it as p,nt as m,o as h,q as g,r as _,rt as v,s as y,tt as b,vt as x}from"./ScrollView-C9wrb0ax.js";import{n as S,t as C}from"./BorderedIcon-t1t3rafE.js";import{n as w,r as T,t as E}from"./_StoriesComponents-CWcu3-PH.js";import{n as D,t as O}from"./LakeTextInput-CCz-c0t1.js";import{n as k,t as A}from"./LakeLabel-C8fMwDVQ.js";var j,M,N,P,F,I,L,R;t((()=>{j=e(n()),i(),S(),l(),g(),k(),y(),D(),f(),x(),s(),v(),b(),T(),M=a(),N=r.create({container:{flexWrap:`wrap`},icon:{flexBasis:`0%`,flexGrow:1,minWidth:250,paddingVertical:16}}),P={title:`Informations/Icon`,component:C},F=e=>Object.keys(e),I=()=>{let[e,t]=(0,j.useState)(``);return(0,M.jsxs)(E,{title:`Icon`,children:[(0,M.jsx)(A,{label:`Search`,render:n=>(0,M.jsx)(O,{id:n,icon:`search-filled`,value:e,onChangeText:t})}),(0,M.jsx)(w,{title:`Fluent icons`,children:(0,M.jsx)(u,{direction:`row`,alignItems:`center`,style:N.container,children:F({...m,...c}).filter(t=>t.includes(e)).map(e=>(0,M.jsxs)(u,{alignItems:`center`,style:N.icon,children:[(0,M.jsx)(o,{name:e,size:30,color:d.gray[800]}),(0,M.jsx)(_,{height:8}),(0,M.jsx)(h,{align:`center`,numberOfLines:1,children:e})]},e))})}),(0,M.jsx)(w,{title:`Custom icons`,children:(0,M.jsx)(u,{direction:`row`,alignItems:`center`,style:N.container,children:F(p).filter(t=>t.includes(e)).map(e=>(0,M.jsxs)(u,{alignItems:`center`,style:N.icon,children:[(0,M.jsx)(o,{name:e,size:30,color:d.gray[800]}),(0,M.jsx)(_,{height:8}),(0,M.jsx)(h,{align:`center`,numberOfLines:1,children:e})]},e))})})]})},L=({color:e})=>{let[t,n]=(0,j.useState)(``);return(0,M.jsxs)(E,{title:`BorderedIcon`,description:`You can change the color in 'Controls' panel (Press A to open it)`,children:[(0,M.jsx)(A,{label:`Search`,render:e=>(0,M.jsx)(O,{id:e,icon:`search-filled`,value:t,onChangeText:n})}),(0,M.jsx)(w,{title:`Fluent icons`,children:(0,M.jsx)(u,{direction:`row`,alignItems:`center`,style:N.container,children:F(m).filter(e=>e.includes(t)).map(t=>(0,M.jsxs)(u,{alignItems:`center`,style:N.icon,children:[(0,M.jsx)(C,{name:t,color:e,size:40,padding:8}),(0,M.jsx)(_,{height:8}),(0,M.jsx)(h,{align:`center`,numberOfLines:1,children:t})]},t))})}),(0,M.jsx)(w,{title:`Custom icons`,children:(0,M.jsx)(u,{direction:`row`,alignItems:`center`,style:N.container,children:F(p).filter(e=>e.includes(t)).map(t=>(0,M.jsxs)(u,{alignItems:`center`,style:N.icon,children:[(0,M.jsx)(C,{name:t,color:e,size:100,padding:8}),(0,M.jsx)(_,{height:8}),(0,M.jsx)(h,{align:`center`,numberOfLines:1,children:t})]},t))})})]})},I.__docgenInfo={description:``,methods:[],displayName:`Default`},L.__docgenInfo={description:``,methods:[],displayName:`Bordered`,props:{color:{required:!1,tsType:{name:`union`,raw:`keyof typeof colors`,elements:[{name:`literal`,value:`gray`},{name:`literal`,value:`live`},{name:`literal`,value:`sandbox`},{name:`literal`,value:`positive`},{name:`literal`,value:`warning`},{name:`literal`,value:`negative`},{name:`literal`,value:`current`},{name:`literal`,value:`partner`},{name:`literal`,value:`swan`},{name:`literal`,value:`shakespear`},{name:`literal`,value:`darkPink`},{name:`literal`,value:`sunglow`},{name:`literal`,value:`mediumSladeBlue`}]},description:``}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="Icon">
      <LakeLabel label="Search" render={id => <LakeTextInput id={id} icon="search-filled" value={search} onChangeText={setSearch} />} />

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
      <LakeLabel label="Search" render={id => <LakeTextInput id={id} icon="search-filled" value={search} onChangeText={setSearch} />} />

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
//# sourceMappingURL=Icon.stories-DcPH077p.js.map