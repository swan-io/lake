import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-Bdn14elh.js";import{U as r,g as i,h as a,ht as o,i as s,kt as c,o as l,r as u,s as d}from"./ScrollView-BZAAJkeN.js";import{r as f,t as p}from"./_StoriesComponents-8l3NbSmt.js";import{c as m,t as h}from"./countries-lsU1q_Lj.js";import{n as g,t as _}from"./Flag-DlQPfAXj.js";var v,y,b,x,S,C;t((()=>{i(),d(),s(),v=e(n()),o(),g(),m(),f(),y=r(),b=c.create({container:{flexWrap:`wrap`},flag:{flexBasis:`0%`,flexGrow:1,minWidth:250,padding:16}}),x={title:`Informations/Flag`,component:_},S=()=>{let e=(0,v.useMemo)(()=>[{name:`European Union`,code:`EU`},...h.map(({cca2:e,name:t})=>({name:t,code:e}))],[]);return(0,y.jsx)(p,{title:`Flag`,children:(0,y.jsx)(a,{direction:`row`,style:b.container,children:e.map(e=>(0,y.jsxs)(a,{alignItems:`center`,style:b.flag,children:[(0,y.jsx)(_,{code:e.code,width:18}),(0,y.jsx)(u,{height:4}),(0,y.jsx)(l,{align:`center`,variant:`smallMedium`,numberOfLines:1,children:e.name})]}))})})},S.__docgenInfo={description:``,methods:[],displayName:`Default`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Flag.stories-loQfNW1K.js.map