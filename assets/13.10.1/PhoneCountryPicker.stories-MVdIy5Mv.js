import{j as t,V as u,s as p}from"./ScrollView-CdHujGCN.js";import{r as P}from"./iframe-Bn10qkjQ.js";import{P as n}from"./PhoneCountryPicker-Br7YW8xH.js";import{b as e,f as S,p as C}from"./countries-CHpzMOr_.js";import{S as x,a as r}from"./_StoriesComponents-D4ovcV5R.js";import"./index-P7K2u9-7.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-1L0-V8fx.js";import"./Popover-CkSa4q2M.js";import"./useResponsive-B3o3qCTj.js";import"./function-BixSqIMc.js";import"./BottomPanel-BDpQiopz.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-5vg3V0wN.js";import"./FocusTrap-TP055Q0t.js";import"./array-BfAlyugE.js";import"./Suspendable-71IjA37W.js";import"./index-FfHvclKN.js";import"./extends-CF3RwP-h.js";import"./TransitionView-ChN8q-Qm.js";import"./index-B0ya5THr.js";import"./Pressable-BiyuqNto.js";import"./Separator-DxUjSylu.js";import"./useDisclosure-Bv2_Fdd9.js";import"./string-B6aRPYrE.js";import"./Flag-DuBYHLs4.js";import"./i18n-CJscpqln.js";import"./rifm-DM50zcV_.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],Q={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},i=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:e("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:e("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
    <StoryPart title="Default (France)">
      <Editable />
    </StoryPart>

    <StoryPart title="Initial country: United States">
      <Editable initialCountry={getCountryByCCA3("USA")} />
    </StoryPart>

    <StoryPart title="Initial country: Portugal (long IDD)">
      <Editable initialCountry={getCountryByCCA3("PRT")} />
    </StoryPart>

    <StoryPart title="Restricted list (6 countries only)">
      <Editable countries={FEW_COUNTRIES} />
    </StoryPart>

    <StoryPart title="Error">
      <Editable error="Required" />
    </StoryPart>

    <StoryPart title="Disabled">
      <Editable disabled={true} />
    </StoryPart>

    <StoryPart title="Readonly">
      <Editable readOnly={true} />
    </StoryPart>
  </StoryBlock>`,...i.parameters?.docs?.source}}};const X=["Variations"];export{i as Variations,X as __namedExportsOrder,Q as default};
//# sourceMappingURL=PhoneCountryPicker.stories-MVdIy5Mv.js.map
