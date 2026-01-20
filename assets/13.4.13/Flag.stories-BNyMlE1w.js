import{ai as f,z as g,j as t,A as h,aj as x,B as m,s as y,S as w,L as _}from"./ScrollView-PJwS-dfq.js";import{r as o}from"./iframe-Df87Xc9F.js";import{_ as E}from"./preload-helper-D1IIBeq1.js";import{g as S}from"./string-BO5gXKm-.js";import{d as v}from"./countries-C-lD49JK.js";import{S as U}from"./_StoriesComponents-Dp4kaMj_.js";import"./index-DyFlOLrd.js";import"./i18n-BmZbHARP.js";import"./rifm-DvFEoDQ_.js";import"./array-BfAlyugE.js";import"./Separator-BpzfiYH_.js";import"./commonStyles-BBEkV6IC.js";const d=127397;let s;const j=f(async()=>{const{default:n}=await E(async()=>{const{default:e}=await import("./flags-DdO3omPw.js");return{default:e}},[]);return s=n,n}),i=n=>{const{code:e}=n,a=n.width??18,[c,p]=o.useState(s);o.useEffect(()=>{s==null&&j.get().then(p)},[]);const l=o.useMemo(()=>g(e).with("EU",()=>S("🇪🇺")).otherwise(()=>`${(d+e.charCodeAt(0)).toString(16)}-${(d+e.charCodeAt(1)).toString(16)}`),[e]);return t.jsx(h,{viewBox:"0 0 18 18",style:{height:a,width:a},children:c!=null&&l!=null?t.jsx(x,{xlinkHref:`${c}#${l}`}):null})};i.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{code:{required:!0,tsType:{name:"union",raw:'CountryCCA2 | "EU"',elements:[{name:'Simplify["cca2"]',raw:'Country["cca2"]'},{name:"literal",value:'"EU"'}]},description:""},width:{required:!1,tsType:{name:"number"},description:""}}};const u=y.create({container:{flexWrap:"wrap"},flag:{flexBasis:"0%",flexGrow:1,minWidth:250,padding:16}}),N={title:"Informations/Flag",component:i},r=()=>{const n=o.useMemo(()=>[{name:"European Union",code:"EU"},...v.map(({cca2:e,name:a})=>({name:a,code:e}))],[]);return t.jsx(U,{title:"Flag",children:t.jsx(m,{direction:"row",style:u.container,children:n.map(e=>t.jsxs(m,{alignItems:"center",style:u.flag,children:[t.jsx(i,{code:e.code,width:18}),t.jsx(w,{height:4}),t.jsx(_,{align:"center",variant:"smallMedium",numberOfLines:1,children:e.name})]}))})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const b=["Default"];export{r as Default,b as __namedExportsOrder,N as default};
//# sourceMappingURL=Flag.stories-BNyMlE1w.js.map
