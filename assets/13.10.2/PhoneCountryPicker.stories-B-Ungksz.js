import{j as t,V as u,s as p}from"./ScrollView-D62ibAIB.js";import{r as P}from"./iframe-BxiObLlT.js";import{P as n}from"./PhoneCountryPicker-DHkv-5AD.js";import{b as i,f as S,p as C}from"./countries-BUkqG1ou.js";import{S as x,a as r}from"./_StoriesComponents-BQs9RYw8.js";import"./index-CXGbStiX.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-K59-7HEL.js";import"./Popover-CKRxTEUe.js";import"./useResponsive-IDrYkp5e.js";import"./function-B0aMUF-W.js";import"./BottomPanel-B7iD4gNe.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-Dom7l_Fe.js";import"./FocusTrap-DTttPBR6.js";import"./array-BfAlyugE.js";import"./Suspendable-CExqBWGX.js";import"./index-7aTJbVC5.js";import"./extends-CF3RwP-h.js";import"./TransitionView-C3qvf9TQ.js";import"./index-Bgg291J9.js";import"./Pressable-IuiObHup.js";import"./Separator-Bt5trxzM.js";import"./useDisclosure-CExXvzVx.js";import"./string-D-ZtbIgs.js";import"./Flag-D9-Tfjz4.js";import"./i18n-BAHhLTkf.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],M={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},e=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:i("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:i("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"Variations"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-B-Ungksz.js.map
