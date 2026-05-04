import{j as t,V as u,s as p}from"./ScrollView-Bd0ePppY.js";import{r as P}from"./iframe-BtrrGmPJ.js";import{P as n}from"./PhoneCountryPicker-DfEPmziZ.js";import{b as i,f as S,p as C}from"./countries-u5adWZ10.js";import{S as x,a as r}from"./_StoriesComponents-DCjKIWb0.js";import"./index-Dsa7eREZ.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-ADcUDgIy.js";import"./Popover-GjxRHZXd.js";import"./useResponsive-3_V_difT.js";import"./function-CGdxU6dm.js";import"./BottomPanel-D4c8KAzh.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-BcfyFQU2.js";import"./FocusTrap-BdhT87pd.js";import"./array-BfAlyugE.js";import"./Suspendable-DcThaAbT.js";import"./index-CqhfhOm1.js";import"./extends-CF3RwP-h.js";import"./TransitionView-D-HYJaux.js";import"./index-B09ogw1V.js";import"./Pressable-C-KOCohL.js";import"./Separator-DWEu2Q06.js";import"./useDisclosure-thVYyJh6.js";import"./string-B5tPI4HR.js";import"./Flag-CSwZOz9A.js";import"./i18n-jznXFVdt.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],M={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},e=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:i("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:i("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"Variations"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
  </StoryBlock>`,...e.parameters?.docs?.source}}};const Q=["Variations"];export{e as Variations,Q as __namedExportsOrder,M as default};
//# sourceMappingURL=PhoneCountryPicker.stories-7L0iyLb7.js.map
