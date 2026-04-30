import{j as t,V as u,s as p}from"./ScrollView--WheKJHA.js";import{r as P}from"./iframe-xxUmpkKQ.js";import{P as n}from"./PhoneCountryPicker-CqUjM1i2.js";import{b as e,f as S,p as C}from"./countries-CFqn5DWk.js";import{S as x,a as r}from"./_StoriesComponents-CUU72-DH.js";import"./index-BHr7rC5l.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-BndP4mf2.js";import"./Popover-DCIFQri5.js";import"./useResponsive-BJXCjB05.js";import"./function-DZOPYWcp.js";import"./BottomPanel-Ix3Wh2dB.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-LrmBPIV5.js";import"./FocusTrap-DFpknuVc.js";import"./array-BfAlyugE.js";import"./Suspendable-Dt78ol7Q.js";import"./index-dllZPdRg.js";import"./extends-CF3RwP-h.js";import"./TransitionView-D1S7nwL8.js";import"./index-BrbiCmCu.js";import"./Pressable-CV79c5H0.js";import"./Separator-C0ulLd11.js";import"./useDisclosure-C7a-VcDt.js";import"./string-C5dL2Tvh.js";import"./Flag-DOus7Xzr.js";import"./i18n-CEtUHc9c.js";import"./rifm-CeSN7ZrZ.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],Q={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},i=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:e("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:e("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-BzFOU91q.js.map
