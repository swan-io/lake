import{j as t,V as u,s as p}from"./ScrollView-MekbySN5.js";import{r as P}from"./iframe-DtSoNM3L.js";import{P as n}from"./PhoneCountryPicker-CPWfaji6.js";import{b as i,f as S,p as C}from"./countries-ft6rNfqQ.js";import{S as x,a as r}from"./_StoriesComponents-DKuHuV1R.js";import"./index-C7iaMPW0.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-BHhLAUh8.js";import"./Popover-CrFlDy7V.js";import"./useResponsive-ByrXWIYR.js";import"./function-DUelx21e.js";import"./BottomPanel-Cjsw0JBU.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-BhOqwFK2.js";import"./FocusTrap-ImEOf_5E.js";import"./array-BfAlyugE.js";import"./Suspendable-DgV3aU8o.js";import"./index-CtYBqWfq.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CSY0ajHF.js";import"./index-Bt2BoDkB.js";import"./Pressable-DN1pHPdC.js";import"./Separator-TZ8ihUJF.js";import"./useDisclosure-BGSCSgpe.js";import"./string-QbI2rGDI.js";import"./Flag-9-xmuAXO.js";import"./i18n-5PuG3vgA.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],M={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},e=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:i("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:i("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"Variations"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-Bn9LdHUY.js.map
