import{c as e,i as t}from"./preload-helper-C6cs2Kqh.js";import{o as n}from"./iframe-PLcdovXH.js";import{St as r,U as i,g as a,h as o,ht as s,i as c,o as l,r as u,s as d}from"./ScrollView-Bhi9nHhc.js";import{r as f,t as p}from"./_StoriesComponents-DnrlZjA4.js";import{c as m,t as h}from"./countries-QFsX93oC.js";import{n as g,t as _}from"./Flag-DYtzoY7x.js";var v,y,b,x,S,C;t((()=>{a(),d(),c(),v=e(n()),s(),g(),m(),f(),y=i(),b=r.create({container:{flexWrap:`wrap`},flag:{flexBasis:`0%`,flexGrow:1,minWidth:250,padding:16}}),x={title:`Informations/Flag`,component:_},S=()=>{let e=(0,v.useMemo)(()=>[{name:`European Union`,code:`EU`},...h.map(({cca2:e,name:t})=>({name:t,code:e}))],[]);return(0,y.jsx)(p,{title:`Flag`,children:(0,y.jsx)(o,{direction:`row`,style:b.container,children:e.map(e=>(0,y.jsxs)(o,{alignItems:`center`,style:b.flag,children:[(0,y.jsx)(_,{code:e.code,width:18}),(0,y.jsx)(u,{height:4}),(0,y.jsx)(l,{align:`center`,variant:`smallMedium`,numberOfLines:1,children:e.name})]}))})})},S.__docgenInfo={description:``,methods:[],displayName:`Default`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => [{
    name: "European Union",
    code: "EU" as const
  }, ...countries.map(({
    cca2,
    name
  }) => ({
    name,
    code: cca2
  }))], []);
  return <StoryBlock title="Flag">
      <Box direction="row" style={styles.container}>
        {items.map(country => <Box alignItems="center" style={styles.flag}>
            <Flag code={country.code} width={18} />
            <Space height={4} />

            <LakeText align="center" variant="smallMedium" numberOfLines={1}>
              {country.name}
            </LakeText>
          </Box>)}
      </Box>
    </StoryBlock>;
}`,...S.parameters?.docs?.source}}},C=[`Default`]}))();export{S as Default,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Flag.stories-BelS_FZa.js.map