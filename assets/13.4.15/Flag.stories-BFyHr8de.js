import{M as f,j as t,A as g,ai as h,aj as x,B as m,S as y,L as w,s as _}from"./ScrollView-DpZndJD-.js";import{r as o}from"./iframe-Cp82pBYH.js";import{_ as E}from"./preload-helper-D1IIBeq1.js";import{g as S}from"./string-DvT5PWf4.js";import{d as v}from"./countries-B8Hx-Z1Z.js";import{S as U}from"./_StoriesComponents-oERC9Nal.js";import"./index-CuigAy1F.js";import"./i18n-BN4OiD4B.js";import"./rifm-DktdQebj.js";import"./array-BfAlyugE.js";import"./Separator-05rWY6s-.js";import"./commonStyles-BBEkV6IC.js";const d=127397;let s;const j=x(async()=>{const{default:n}=await E(async()=>{const{default:e}=await import("./flags-Bz1YReBn.js");return{default:e}},[]);return s=n,n}),i=n=>{const{code:e}=n,a=n.width??18,[c,p]=o.useState(s);o.useEffect(()=>{s==null&&j.get().then(p)},[]);const l=o.useMemo(()=>f(e).with("EU",()=>S("🇪🇺")).otherwise(()=>`${(d+e.charCodeAt(0)).toString(16)}-${(d+e.charCodeAt(1)).toString(16)}`),[e]);return t.jsx(g,{viewBox:"0 0 18 18",style:{height:a,width:a},children:c!=null&&l!=null?t.jsx(h,{xlinkHref:`${c}#${l}`}):null})};i.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{code:{required:!0,tsType:{name:"union",raw:'CountryCCA2 | "EU"',elements:[{name:'Simplify["cca2"]',raw:'Country["cca2"]'},{name:"literal",value:'"EU"'}]},description:""},width:{required:!1,tsType:{name:"number"},description:""}}};const u=_.create({container:{flexWrap:"wrap"},flag:{flexBasis:"0%",flexGrow:1,minWidth:250,padding:16}}),$={title:"Informations/Flag",component:i},r=()=>{const n=o.useMemo(()=>[{name:"European Union",code:"EU"},...v.map(({cca2:e,name:a})=>({name:a,code:e}))],[]);return t.jsx(U,{title:"Flag",children:t.jsx(m,{direction:"row",style:u.container,children:n.map(e=>t.jsxs(m,{alignItems:"center",style:u.flag,children:[t.jsx(i,{code:e.code,width:18}),t.jsx(y,{height:4}),t.jsx(w,{align:"center",variant:"smallMedium",numberOfLines:1,children:e.name})]}))})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const b=["Default"];export{r as Default,b as __namedExportsOrder,$ as default};
//# sourceMappingURL=Flag.stories-BFyHr8de.js.map
