import{j as t,V as u,s as p}from"./ScrollView-CwRta2uu.js";import{r as P}from"./iframe--f1go8Pa.js";import{P as n}from"./PhoneCountryPicker-CyK3LwcX.js";import{b as i,f as S,p as C}from"./countries-Dh4MefTo.js";import{S as x,a as r}from"./_StoriesComponents-CLyBSWgF.js";import"./index-1Ny4tXn4.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-ByvFx_4y.js";import"./Popover-BD8UwXJt.js";import"./useResponsive-Bs30hDw5.js";import"./function-C3rhzPll.js";import"./BottomPanel-BQmnotZH.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-ByytCsni.js";import"./FocusTrap-Xg4aXcdN.js";import"./array-BfAlyugE.js";import"./Suspendable-Bl81yrf9.js";import"./index-BP6TKObu.js";import"./extends-CF3RwP-h.js";import"./TransitionView-3J-zYzMx.js";import"./index-BZSkXHZy.js";import"./Pressable-DsjXsWn7.js";import"./Separator-SiwiLAfX.js";import"./useDisclosure-BkwijpDf.js";import"./string-vWOQI9cl.js";import"./Flag-ebZ3IShX.js";import"./i18n-JxmJv1Y7.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],M={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},e=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:i("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:i("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"Variations"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-PJlOw-Oz.js.map
