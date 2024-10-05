import{$ as x,j as n,w as y,U as _,K as w,s as E,B as m,S,L as j}from"./ScrollView-DWjQ00nM.js";import{g as v,c as B}from"./countries-1MqhrKNr.js";import{r as a}from"./index-Cs7sjTYM.js";import{_ as U}from"./iframe-DEZaxCfi.js";import{g as F}from"./string-CooJ28LA.js";import{S as k}from"./_StoriesComponents-_jmnnGUR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./i18n-Do51B4A9.js";import"./rifm-CFTOlIhk.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"../../sb-preview/runtime.js";import"./commonStyles-t4XfA7cz.js";const d=127397;let s;const C=w(async()=>{const{default:t}=await U(async()=>{const{default:e}=await import("./flags-DPu5y3ay.js");return{default:e}},[]);return s=t,t}),i=t=>{const e="code"in t?t.code:v(t.icon),r=t.width??18,[c,h]=a.useState(s);a.useEffect(()=>{s==null&&C.get().then(h)},[]);const l=a.useMemo(()=>x(e).with("EU",()=>F("🇪🇺")).otherwise(()=>`${(d+e.charCodeAt(0)).toString(16)}-${(d+e.charCodeAt(1)).toString(16)}`),[e]);return n.jsx(y,{viewBox:"0 0 18 18",style:{height:r,width:r},children:c!=null&&l!=null?n.jsx(_,{xlinkHref:`${c}#${l}`}):null})};i.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{width:{required:!1,tsType:{name:"number"},description:""}}};const u=E.create({container:{flexWrap:"wrap"},flag:{flexBasis:"0%",flexGrow:1,minWidth:250,padding:16}}),q={title:"Informations/Flag",component:i},o=()=>{const t=a.useMemo(()=>[{name:"European Union",code:"EU"},...B.map(({cca2:e,name:r})=>({name:r,code:e}))],[]);return n.jsx(k,{title:"Flag",children:n.jsx(m,{direction:"row",style:u.container,children:t.map(e=>n.jsxs(m,{alignItems:"center",style:u.flag,children:[n.jsx(i,{code:e.code,width:18}),n.jsx(S,{height:4}),n.jsx(j,{align:"center",variant:"smallMedium",numberOfLines:1,children:e.name})]}))})})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,g,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,q as default};
//# sourceMappingURL=Flag.stories-CFphG_Qx.js.map
