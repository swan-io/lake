import{j as t}from"./jsx-runtime-BlAj40OV.js";import{c as x}from"./countries-D8iYSX7X.js";import{r as a}from"./index-Cs7sjTYM.js";import{z as y,v as w,U as _,K as E,s as S,B as m,S as v,L as U}from"./ScrollView-CdeN2c90.js";import{_ as B}from"./iframe-DpFLDfOQ.js";import{g as j}from"./string-uJzpV6a0.js";import{S as F}from"./_StoriesComponents-DlaK0P1a.js";import"./i18n-Fuk8P8l9.js";import"./rifm-CS9mxFk2.js";import"./utc-Bb9NEY8r.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array-BfAlyugE.js";import"./index-DJFdew98.js";import"../../sb-preview/runtime.js";import"./commonStyles-t4XfA7cz.js";const d=127397;let s;const k=E(async()=>{const{default:n}=await B(async()=>{const{default:e}=await import("./flags-c1mFOaCo.js");return{default:e}},[]);return s=n,n}),i=n=>{const{code:e}=n,o=n.width??18,[c,h]=a.useState(s);a.useEffect(()=>{s==null&&k.get().then(h)},[]);const l=a.useMemo(()=>y(e).with("EU",()=>j("🇪🇺")).otherwise(()=>`${(d+e.charCodeAt(0)).toString(16)}-${(d+e.charCodeAt(1)).toString(16)}`),[e]);return t.jsx(w,{viewBox:"0 0 18 18",style:{height:o,width:o},children:c!=null&&l!=null?t.jsx(_,{xlinkHref:`${c}#${l}`}):null})};i.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{code:{required:!0,tsType:{name:"union",raw:'CountryCCA2 | "EU"',elements:[{name:'Simplify["cca2"]',raw:'Country["cca2"]'},{name:"literal",value:'"EU"'}]},description:""},width:{required:!1,tsType:{name:"number"},description:""}}};const u=S.create({container:{flexWrap:"wrap"},flag:{flexBasis:"0%",flexGrow:1,minWidth:250,padding:16}}),R={title:"Informations/Flag",component:i},r=()=>{const n=a.useMemo(()=>[{name:"European Union",code:"EU"},...x.map(({cca2:e,name:o})=>({name:o,code:e}))],[]);return t.jsx(F,{title:"Flag",children:t.jsx(m,{direction:"row",style:u.container,children:n.map(e=>t.jsxs(m,{alignItems:"center",style:u.flag,children:[t.jsx(i,{code:e.code,width:18}),t.jsx(v,{height:4}),t.jsx(U,{align:"center",variant:"smallMedium",numberOfLines:1,children:e.name})]}))})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,f,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const W=["Default"];export{r as Default,W as __namedExportsOrder,R as default};
//# sourceMappingURL=Flag.stories-BgSDF0Uv.js.map
