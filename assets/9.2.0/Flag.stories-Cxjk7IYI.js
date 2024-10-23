import{j as n}from"./jsx-runtime-BlAj40OV.js";import{g as x,c as y}from"./countries-DRsvm2Tr.js";import{r as a}from"./index-Cs7sjTYM.js";import{z as _,v as w,U as E,K as S,s as v,B as m,S as B,L as U}from"./ScrollView-C9Sl8l-9.js";import{_ as j}from"./iframe-DLdv0F5L.js";import{g as F}from"./string-TUuhKfoy.js";import{S as k}from"./_StoriesComponents--LS6DWDz.js";import"./i18n-wa0w1hPY.js";import"./rifm-Kh7ohp2j.js";import"./utc-Bb9NEY8r.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array-BfAlyugE.js";import"./index-DJFdew98.js";import"../../sb-preview/runtime.js";import"./commonStyles-t4XfA7cz.js";const d=127397;let s;const C=S(async()=>{const{default:t}=await j(async()=>{const{default:e}=await import("./flags-B8mvNfDa.js");return{default:e}},[]);return s=t,t}),i=t=>{const e="code"in t?t.code:x(t.icon),r=t.width??18,[c,h]=a.useState(s);a.useEffect(()=>{s==null&&C.get().then(h)},[]);const l=a.useMemo(()=>_(e).with("EU",()=>F("🇪🇺")).otherwise(()=>`${(d+e.charCodeAt(0)).toString(16)}-${(d+e.charCodeAt(1)).toString(16)}`),[e]);return n.jsx(w,{viewBox:"0 0 18 18",style:{height:r,width:r},children:c!=null&&l!=null?n.jsx(E,{xlinkHref:`${c}#${l}`}):null})};i.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{width:{required:!1,tsType:{name:"number"},description:""}}};const u=v.create({container:{flexWrap:"wrap"},flag:{flexBasis:"0%",flexGrow:1,minWidth:250,padding:16}}),q={title:"Informations/Flag",component:i},o=()=>{const t=a.useMemo(()=>[{name:"European Union",code:"EU"},...y.map(({cca2:e,name:r})=>({name:r,code:e}))],[]);return n.jsx(k,{title:"Flag",children:n.jsx(m,{direction:"row",style:u.container,children:t.map(e=>n.jsxs(m,{alignItems:"center",style:u.flag,children:[n.jsx(i,{code:e.code,width:18}),n.jsx(B,{height:4}),n.jsx(U,{align:"center",variant:"smallMedium",numberOfLines:1,children:e.name})]}))})})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,g,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,q as default};
//# sourceMappingURL=Flag.stories-Cxjk7IYI.js.map
