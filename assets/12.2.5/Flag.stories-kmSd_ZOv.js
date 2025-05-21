import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{ab as x,z as y,v as w,ac as _,B as m,s as E,S,L as v}from"./ScrollView-CRqCiH49.js";import{r as a}from"./index-D9D9kDko.js";import{_ as U}from"./iframe-DfPwZBlU.js";import{g as B}from"./string-C-5ePvqA.js";import{c as j}from"./countries-BzZmVawf.js";import{S as F}from"./_StoriesComponents-BJjd_5r-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D0hBKHsB.js";import"./i18n-CsW8FKkJ.js";import"./rifm-B2FFccIi.js";import"./utc-JZaFi-_r.js";import"./array-BfAlyugE.js";import"./Separator-Bkm-h-Cw.js";import"./commonStyles-BBEkV6IC.js";const d=127397;let s;const k=x(async()=>{const{default:n}=await U(async()=>{const{default:e}=await import("./flags-CjPysQeI.js");return{default:e}},[]);return s=n,n}),i=n=>{const{code:e}=n,o=n.width??18,[c,h]=a.useState(s);a.useEffect(()=>{s==null&&k.get().then(h)},[]);const l=a.useMemo(()=>y(e).with("EU",()=>B("🇪🇺")).otherwise(()=>`${(d+e.charCodeAt(0)).toString(16)}-${(d+e.charCodeAt(1)).toString(16)}`),[e]);return t.jsx(w,{viewBox:"0 0 18 18",style:{height:o,width:o},children:c!=null&&l!=null?t.jsx(_,{xlinkHref:`${c}#${l}`}):null})};i.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{code:{required:!0,tsType:{name:"union",raw:'CountryCCA2 | "EU"',elements:[{name:'Simplify["cca2"]',raw:'Country["cca2"]'},{name:"literal",value:'"EU"'}]},description:""},width:{required:!1,tsType:{name:"number"},description:""}}};const u=E.create({container:{flexWrap:"wrap"},flag:{flexBasis:"0%",flexGrow:1,minWidth:250,padding:16}}),R={title:"Informations/Flag",component:i},r=()=>{const n=a.useMemo(()=>[{name:"European Union",code:"EU"},...j.map(({cca2:e,name:o})=>({name:o,code:e}))],[]);return t.jsx(F,{title:"Flag",children:t.jsx(m,{direction:"row",style:u.container,children:n.map(e=>t.jsxs(m,{alignItems:"center",style:u.flag,children:[t.jsx(i,{code:e.code,width:18}),t.jsx(S,{height:4}),t.jsx(v,{align:"center",variant:"smallMedium",numberOfLines:1,children:e.name})]}))})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,f,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Flag.stories-kmSd_ZOv.js.map
