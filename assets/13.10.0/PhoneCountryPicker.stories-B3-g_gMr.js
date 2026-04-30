import{j as t,V as u,s as p}from"./ScrollView-Dv8w-9OV.js";import{r as P}from"./iframe-ys0c0jGh.js";import{P as n}from"./PhoneCountryPicker-CRBdWdos.js";import{b as e,f as S,p as C}from"./countries-DJHnWsnC.js";import{S as x,a as r}from"./_StoriesComponents-B18HSXdP.js";import"./index-Ca8rk5YK.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-DJvhNvTp.js";import"./Popover-DVfW8JXY.js";import"./useResponsive-lMfpn9_7.js";import"./function-BrqrfTII.js";import"./BottomPanel-HozJar-1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-BOe57oWI.js";import"./FocusTrap-BsZTMoeN.js";import"./array-BfAlyugE.js";import"./Suspendable-CsYhlDS3.js";import"./index-CJ8JkiBE.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CXyx_QB0.js";import"./index-dVJHGmBV.js";import"./Pressable-D-OgD9fY.js";import"./Separator-C6FrzW4V.js";import"./useDisclosure-COXEQIXb.js";import"./string-D5lUEKSQ.js";import"./Flag-BVACNEHN.js";import"./i18n-DS5tOdzk.js";import"./rifm-e2fdROZS.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],Q={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},i=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:e("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:e("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-B3-g_gMr.js.map
