import{j as t,q as h,U as y,K as _,s as S,B as m,S as j,L as w}from"./ScrollView-cZfhk1oA.js";import{g as B,c as v}from"./countries-3AVL4CbZ.js";import{_ as F}from"./iframe-0RSTcdDO.js";import{r as a}from"./index-uCp2LrAq.js";import{S as E}from"./_StoriesComponents-Betxty6r.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./string-B5ib6v02.js";import"./i18n-C6QZN1uI.js";import"./rifm-CLlDjQZx.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./tslib.es6-UMXCHJY6.js";import"../../sb-preview/runtime.js";import"./commonStyles-t4XfA7cz.js";const d=127397;let o;const k=_(async()=>{const{default:e}=await F(()=>import("./flags-GZZ9qd59.js"),[]);return o=e,e}),s=e=>{const n="cca2"in e?e.cca2:B(e.icon),i=e.width??18,[c,x]=a.useState(o);a.useEffect(()=>{o==null&&k.get().then(x)},[]);const l=a.useMemo(()=>`${(d+n.charCodeAt(0)).toString(16)}-${(d+n.charCodeAt(1)).toString(16)}`,[n]);return t.jsx(h,{viewBox:"0 0 18 18",style:{height:i,width:i},children:c!=null&&l!=null?t.jsx(y,{xlinkHref:`${c}#${l}`}):null})};s.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{width:{required:!1,tsType:{name:"number"},description:""}}};const p=S.create({container:{flexWrap:"wrap"},flag:{flexBasis:"0%",flexGrow:1,minWidth:250,padding:16}}),R={title:"Informations/Flag",component:s},r=()=>t.jsx(E,{title:"Flag",children:t.jsx(m,{direction:"row",style:p.container,children:v.map(e=>t.jsxs(m,{alignItems:"center",style:p.flag,children:[t.jsx(s,{cca2:e.cca2,width:18}),t.jsx(j,{height:4}),t.jsx(w,{align:"center",variant:"smallMedium",numberOfLines:1,children:e.name})]}))})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <StoryBlock title="Flag">
      <Box direction="row" style={styles.container}>
        {countries.map(country => <Box alignItems="center" style={styles.flag}>
            <Flag cca2={country.cca2} width={18} />
            <Space height={4} />

            <LakeText align="center" variant="smallMedium" numberOfLines={1}>
              {country.name}
            </LakeText>
          </Box>)}
      </Box>
    </StoryBlock>;
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const W=["Default"];export{r as Default,W as __namedExportsOrder,R as default};
//# sourceMappingURL=Flag.stories-_Le8uCjK.js.map
