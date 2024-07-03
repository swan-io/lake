import{$ as x,j as n,q as y,U as _,K as w,s as E,B as m,S,L as j}from"./ScrollView-cZfhk1oA.js";import{g as B,c as U}from"./countries-D8X5JNnZ.js";import{r as s}from"./index-uCp2LrAq.js";import{_ as v}from"./iframe-B-41WuWP.js";import{g as F}from"./string-BIjx_mpm.js";import{S as k}from"./_StoriesComponents-Betxty6r.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./i18n-C6QZN1uI.js";import"./rifm-CLlDjQZx.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./tslib.es6-UMXCHJY6.js";import"../../sb-preview/runtime.js";import"./commonStyles-t4XfA7cz.js";const d=127397;let a;const C=w(async()=>{const{default:e}=await v(()=>import("./flags-GZZ9qd59.js"),[]);return a=e,e}),i=e=>{const t="code"in e?e.code:B(e.icon),r=e.width??18,[c,h]=s.useState(a);s.useEffect(()=>{a==null&&C.get().then(h)},[]);const l=s.useMemo(()=>x(t).with("EU",()=>F("🇪🇺")).otherwise(()=>`${(d+t.charCodeAt(0)).toString(16)}-${(d+t.charCodeAt(1)).toString(16)}`),[t]);return n.jsx(y,{viewBox:"0 0 18 18",style:{height:r,width:r},children:c!=null&&l!=null?n.jsx(_,{xlinkHref:`${c}#${l}`}):null})};i.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{width:{required:!1,tsType:{name:"number"},description:""}}};const p=E.create({container:{flexWrap:"wrap"},flag:{flexBasis:"0%",flexGrow:1,minWidth:250,padding:16}}),H={title:"Informations/Flag",component:i},o=()=>{const e=s.useMemo(()=>[{name:"European Union",code:"EU"},...U.map(({cca2:t,name:r})=>({name:r,code:t}))],[]);return n.jsx(k,{title:"Flag",children:n.jsx(m,{direction:"row",style:p.container,children:e.map(t=>n.jsxs(m,{alignItems:"center",style:p.flag,children:[n.jsx(i,{code:t.code,width:18}),n.jsx(S,{height:4}),n.jsx(j,{align:"center",variant:"smallMedium",numberOfLines:1,children:t.name})]}))})})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const items = useMemo(() => [{
    name: "European Union",
    code: ("EU" as const)
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const K=["Default"];export{o as Default,K as __namedExportsOrder,H as default};
//# sourceMappingURL=Flag.stories-DV2c8gj1.js.map
