import{j as t,V as u,s as p}from"./ScrollView-BpeAY3ob.js";import{r as P}from"./iframe-CFr_DuzS.js";import{P as n}from"./PhoneCountryPicker-BqcgEy4r.js";import{b as e,f as S,p as C}from"./countries-DZ0bhcXE.js";import{S as x,a as r}from"./_StoriesComponents-CcL0TIE_.js";import"./index-DveTQ5nR.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-CLPNqcTl.js";import"./Popover-CmzPf30f.js";import"./useResponsive-9cXnxolf.js";import"./function-CUxVzwCp.js";import"./BottomPanel-Dq01Y29J.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-Cy9sPfB6.js";import"./FocusTrap-CBgoejsP.js";import"./array-BfAlyugE.js";import"./Suspendable-Bi338HkI.js";import"./index-Ct-rhQ6g.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BRNXKH16.js";import"./index-B1XZtg8G.js";import"./Pressable-C8QMiSm9.js";import"./Separator-CEDchzP1.js";import"./useDisclosure-ClP6V62X.js";import"./string-tqPoZkFE.js";import"./Flag-Kg4fmhQZ.js";import"./i18n-CJsSsTci.js";import"./rifm-CQQUlfbt.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],Q={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},i=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:e("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:e("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-CJG7pNxn.js.map
