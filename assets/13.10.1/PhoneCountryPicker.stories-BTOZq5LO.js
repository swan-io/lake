import{j as t,V as u,s as p}from"./ScrollView-B_kzmstI.js";import{r as P}from"./iframe-B3r-NWKe.js";import{P as n}from"./PhoneCountryPicker-QOEiQkYR.js";import{b as e,f as S,p as C}from"./countries-Bl473DwT.js";import{S as x,a as r}from"./_StoriesComponents-DsIs_6cg.js";import"./index-DxBrmxAR.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-wywkGL9p.js";import"./Popover-CFaVueAf.js";import"./useResponsive-BpQW5kDe.js";import"./function-DE0Nw6wx.js";import"./BottomPanel-5wiiripv.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-CC7lXYNq.js";import"./FocusTrap-TWTp47qL.js";import"./array-BfAlyugE.js";import"./Suspendable-D-8F0SwY.js";import"./index-WKfvk9_u.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CtnEOdbi.js";import"./index-CBsLD2t-.js";import"./Pressable-gFrFR2xW.js";import"./Separator-CbOUYcQV.js";import"./useDisclosure-EgQOYqHP.js";import"./string-nsNHmo5j.js";import"./Flag-BtC7w_1a.js";import"./i18n-DpM30V0a.js";import"./rifm-DacaHC_H.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],Q={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},i=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:e("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:e("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-BTOZq5LO.js.map
