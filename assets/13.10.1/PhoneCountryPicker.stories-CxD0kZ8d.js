import{j as t,V as u,s as p}from"./ScrollView-nAzk27PR.js";import{r as P}from"./iframe-CSzXdMh9.js";import{P as n}from"./PhoneCountryPicker-B33plYVg.js";import{b as e,f as S,p as C}from"./countries-DGqRSL6g.js";import{S as x,a as r}from"./_StoriesComponents-B_VgL5b2.js";import"./index-WmaQOYK0.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-BfSJgJHs.js";import"./Popover-Bu1M5NuH.js";import"./useResponsive-D17v4i08.js";import"./function-BY-EIyPk.js";import"./BottomPanel-CD2CDooO.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-Bfp2ronz.js";import"./FocusTrap-Cxy86Y0n.js";import"./array-BfAlyugE.js";import"./Suspendable-CUivg5H7.js";import"./index-BAaTd4f2.js";import"./extends-CF3RwP-h.js";import"./TransitionView-MAgofKtv.js";import"./index-CvCW1Tr-.js";import"./Pressable-fGbZTreu.js";import"./Separator-BiX1HhaC.js";import"./useDisclosure-CVozx3gt.js";import"./string-gpDT38nW.js";import"./Flag-Np0ouU7M.js";import"./i18n-BussqZwQ.js";import"./rifm-CdrA0kvL.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],Q={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},i=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:e("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:e("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-CxD0kZ8d.js.map
