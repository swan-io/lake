import{j as e,B as o,S as c,L as m,s as l}from"./ScrollView-Q9GFQRiB.js";import{r as p}from"./iframe-C2Zcgyff.js";import{F as a}from"./Flag-eHS3e_0f.js";import{e as d}from"./countries-Cd-TddPq.js";import{S as u}from"./_StoriesComponents-DmDthpUV.js";import"./index-DomKN1r3.js";import"./preload-helper-D1IIBeq1.js";import"./string-DRs-QNhi.js";import"./i18n-Cc_FVLAI.js";import"./array-BfAlyugE.js";import"./Separator-CfXdNjVo.js";import"./commonStyles-BBEkV6IC.js";const r=l.create({container:{flexWrap:"wrap"},flag:{flexBasis:"0%",flexGrow:1,minWidth:250,padding:16}}),L={title:"Informations/Flag",component:a},t=()=>{const s=p.useMemo(()=>[{name:"European Union",code:"EU"},...d.map(({cca2:n,name:i})=>({name:i,code:n}))],[]);return e.jsx(u,{title:"Flag",children:e.jsx(o,{direction:"row",style:r.container,children:s.map(n=>e.jsxs(o,{alignItems:"center",style:r.flag,children:[e.jsx(a,{code:n.code,width:18}),e.jsx(c,{height:4}),e.jsx(m,{align:"center",variant:"smallMedium",numberOfLines:1,children:n.name})]}))})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,L as default};
//# sourceMappingURL=Flag.stories-BSIq6Ttr.js.map
