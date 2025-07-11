import{ai as x,z as y,j as t,C as w,aj as _,B as m,s as E,S,L as v}from"./ScrollView-BNJjsVbb.js";import{r as o,_ as U}from"./iframe-CuZagxU8.js";import{g as j}from"./string-BqbiE5n0.js";import{d as B}from"./countries-D1W6VdZ1.js";import{S as F}from"./_StoriesComponents-Byddshd2.js";import"./index-CEmKwnqL.js";import"./i18n-CHvG1T1S.js";import"./rifm-CrPuatJ5.js";import"./array-BfAlyugE.js";import"./Separator-33v2Y9wI.js";import"./commonStyles-BBEkV6IC.js";const d=127397;let s;const C=x(async()=>{const{default:n}=await U(async()=>{const{default:e}=await import("./flags-BOBeqjG_.js");return{default:e}},[]);return s=n,n}),i=n=>{const{code:e}=n,r=n.width??18,[c,h]=o.useState(s);o.useEffect(()=>{s==null&&C.get().then(h)},[]);const l=o.useMemo(()=>y(e).with("EU",()=>j("🇪🇺")).otherwise(()=>`${(d+e.charCodeAt(0)).toString(16)}-${(d+e.charCodeAt(1)).toString(16)}`),[e]);return t.jsx(w,{viewBox:"0 0 18 18",style:{height:r,width:r},children:c!=null&&l!=null?t.jsx(_,{xlinkHref:`${c}#${l}`}):null})};i.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{code:{required:!0,tsType:{name:"union",raw:'CountryCCA2 | "EU"',elements:[{name:'Simplify["cca2"]',raw:'Country["cca2"]'},{name:"literal",value:'"EU"'}]},description:""},width:{required:!1,tsType:{name:"number"},description:""}}};const u=E.create({container:{flexWrap:"wrap"},flag:{flexBasis:"0%",flexGrow:1,minWidth:250,padding:16}}),z={title:"Informations/Flag",component:i},a=()=>{const n=o.useMemo(()=>[{name:"European Union",code:"EU"},...B.map(({cca2:e,name:r})=>({name:r,code:e}))],[]);return t.jsx(F,{title:"Flag",children:t.jsx(m,{direction:"row",style:u.container,children:n.map(e=>t.jsxs(m,{alignItems:"center",style:u.flag,children:[t.jsx(i,{code:e.code,width:18}),t.jsx(S,{height:4}),t.jsx(v,{align:"center",variant:"smallMedium",numberOfLines:1,children:e.name})]}))})})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,g,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const G=["Default"];export{a as Default,G as __namedExportsOrder,z as default};
//# sourceMappingURL=Flag.stories-DpXNooEc.js.map
