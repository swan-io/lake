import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-B4zFc7lt.js";import{Bt as r,Et as i,Ft as a,J as o}from"./ScrollView-in3nPqsV.js";import{n as s,t as c}from"./LakeSelect-DF6XBKtq.js";import{n as l,t as u}from"./LakeLabel-rOmQbGgq.js";import{n as d,r as f,t as p}from"./_StoriesComponents-D1MrjgX2.js";import{c as m,d as h,m as g,n as _,t as v,u as y}from"./countries-Dwiobxrc.js";import{n as b,t as x}from"./Flag-x8SOIJvJ.js";var S,C,w,T=t((()=>{s(),S=e(n()),b(),h(),C=o(),w=({ref:e,onValueChange:t,value:n,countries:r,readOnly:i,id:a,error:o,placeholder:s,disabled:l,hideErrors:u})=>(0,C.jsx)(c,{readOnly:i,id:a,ref:e,error:o,items:(0,S.useMemo)(()=>r.filter((e,t,n)=>n.indexOf(e)===t).map(e=>{let t=m(e);return{name:t.name,icon:(0,C.jsx)(x,{width:14,code:t.cca2}),value:e}}).toSorted((e,t)=>e.name.localeCompare(t.name)),[r]),placeholder:s,value:n,onValueChange:t,disabled:l,hideErrors:u}),w.__docgenInfo={description:``,methods:[],displayName:`CountryPicker`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`View`}],raw:`Ref<View>`},description:``},onValueChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(country: T) => void`,signature:{arguments:[{type:{name:`T`},name:`country`}],return:{name:`void`}}},description:``},value:{required:!0,tsType:{name:`union`,raw:`T | undefined`,elements:[{name:`T`},{name:`undefined`}]},description:``},countries:{required:!0,tsType:{name:`Array`,elements:[{name:`T`}],raw:`T[]`},description:``},error:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},hideErrors:{required:!1,tsType:{name:`boolean`},description:``}}}})),E,D,O,k,A,j,M,N;t((()=>{l(),E=e(n()),i(),T(),h(),f(),D=o(),O=r.create({container:{maxWidth:300}}),k=[`FRA`,`DEU`,`ESP`,`ITA`,`GBR`,`USA`],A={title:`Forms/CountryPicker`,component:w},j=({label:e=`Country or territory`,initialValue:t,countries:n=v,placeholder:r,disabled:i,readOnly:o,error:s})=>{let[c,l]=(0,E.useState)(t);return(0,D.jsx)(a,{style:O.container,children:(0,D.jsx)(u,{label:e,readOnly:o,render:e=>(0,D.jsx)(w,{id:e,value:c,countries:n,onValueChange:l,placeholder:r,disabled:i,readOnly:o,error:s})})})},M=()=>(0,D.jsxs)(p,{title:`CountryPicker variations`,children:[(0,D.jsx)(d,{title:`Empty with placeholder`,children:(0,D.jsx)(j,{placeholder:`Select a country or territory`})}),(0,D.jsx)(d,{title:`Initial value: France`,children:(0,D.jsx)(j,{initialValue:`FRA`})}),(0,D.jsx)(d,{title:`Sovereign countries only (no territories)`,children:(0,D.jsx)(j,{label:`Country`,placeholder:`Select a country`,countries:g})}),(0,D.jsx)(d,{title:`Individual countries`,children:(0,D.jsx)(j,{label:`Country`,initialValue:`FRA`,countries:[...y]})}),(0,D.jsx)(d,{title:`Company countries`,children:(0,D.jsx)(j,{label:`Country`,initialValue:`FRA`,countries:[..._]})}),(0,D.jsx)(d,{title:`Restricted list (6 countries only)`,children:(0,D.jsx)(j,{label:`Country`,countries:k,placeholder:`Select a country`})}),(0,D.jsx)(d,{title:`Error`,children:(0,D.jsx)(j,{placeholder:`Select a country or territory`,error:`Required`})}),(0,D.jsx)(d,{title:`Disabled`,children:(0,D.jsx)(j,{initialValue:`FRA`,disabled:!0})}),(0,D.jsx)(d,{title:`Readonly`,children:(0,D.jsx)(j,{initialValue:`FRA`,readOnly:!0})})]}),M.__docgenInfo={description:``,methods:[],displayName:`Variations`},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => <StoryBlock title="CountryPicker variations">
    <StoryPart title="Empty with placeholder">
      <Editable placeholder="Select a country or territory" />
    </StoryPart>

    <StoryPart title="Initial value: France">
      <Editable initialValue="FRA" />
    </StoryPart>

    <StoryPart title="Sovereign countries only (no territories)">
      <Editable label="Country" placeholder="Select a country" countries={sovereignCountries} />
    </StoryPart>

    <StoryPart title="Individual countries">
      <Editable label="Country" initialValue="FRA" countries={[...individualCountries]} />
    </StoryPart>

    <StoryPart title="Company countries">
      <Editable label="Country" initialValue="FRA" countries={[...companyCountries]} />
    </StoryPart>

    <StoryPart title="Restricted list (6 countries only)">
      <Editable label="Country" countries={FEW_COUNTRIES} placeholder="Select a country" />
    </StoryPart>

    <StoryPart title="Error">
      <Editable placeholder="Select a country or territory" error="Required" />
    </StoryPart>

    <StoryPart title="Disabled">
      <Editable initialValue="FRA" disabled={true} />
    </StoryPart>

    <StoryPart title="Readonly">
      <Editable initialValue="FRA" readOnly={true} />
    </StoryPart>
  </StoryBlock>`,...M.parameters?.docs?.source}}},N=[`Variations`]}))();export{M as Variations,N as __namedExportsOrder,A as default};
//# sourceMappingURL=CountryPicker.stories-BXrfU-4G.js.map