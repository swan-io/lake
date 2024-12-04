import{j as t}from"./jsx-runtime-BlAj40OV.js";import{z as x,v as y,ab as w,ac as _,s as E,B as m,S,L as v}from"./ScrollView-C_lwoIgf.js";import{r as a}from"./index-Cs7sjTYM.js";import{_ as U}from"./iframe-gXAvBm2i.js";import{g as B}from"./string-DzDMYgTT.js";import{c as j}from"./countries-BaPFFDOt.js";import{S as F}from"./_StoriesComponents-CC5vQLxw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"../../sb-preview/runtime.js";import"./i18n-DNpbU2sO.js";import"./rifm-B8WXo291.js";import"./utc-Bb9NEY8r.js";import"./array-BfAlyugE.js";import"./Separator-nprBuSRp.js";import"./commonStyles-CWvHnKRn.js";const d=127397;let s;const k=_(async()=>{const{default:n}=await U(async()=>{const{default:e}=await import("./flags-CSifK5gb.js");return{default:e}},[]);return s=n,n}),i=n=>{const{code:e}=n,o=n.width??18,[c,h]=a.useState(s);a.useEffect(()=>{s==null&&k.get().then(h)},[]);const l=a.useMemo(()=>x(e).with("EU",()=>B("🇪🇺")).otherwise(()=>`${(d+e.charCodeAt(0)).toString(16)}-${(d+e.charCodeAt(1)).toString(16)}`),[e]);return t.jsx(y,{viewBox:"0 0 18 18",style:{height:o,width:o},children:c!=null&&l!=null?t.jsx(w,{xlinkHref:`${c}#${l}`}):null})};i.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{code:{required:!0,tsType:{name:"union",raw:'CountryCCA2 | "EU"',elements:[{name:'Simplify["cca2"]',raw:'Country["cca2"]'},{name:"literal",value:'"EU"'}]},description:""},width:{required:!1,tsType:{name:"number"},description:""}}};const u=E.create({container:{flexWrap:"wrap"},flag:{flexBasis:"0%",flexGrow:1,minWidth:250,padding:16}}),W={title:"Informations/Flag",component:i},r=()=>{const n=a.useMemo(()=>[{name:"European Union",code:"EU"},...j.map(({cca2:e,name:o})=>({name:o,code:e}))],[]);return t.jsx(F,{title:"Flag",children:t.jsx(m,{direction:"row",style:u.container,children:n.map(e=>t.jsxs(m,{alignItems:"center",style:u.flag,children:[t.jsx(i,{code:e.code,width:18}),t.jsx(S,{height:4}),t.jsx(v,{align:"center",variant:"smallMedium",numberOfLines:1,children:e.name})]}))})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,f,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const H=["Default"];export{r as Default,H as __namedExportsOrder,W as default};
//# sourceMappingURL=Flag.stories-Ci4OnBMJ.js.map
