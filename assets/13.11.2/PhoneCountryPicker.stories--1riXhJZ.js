import{j as t,V as u,s as p}from"./ScrollView-2xhZ79Jo.js";import{r as P}from"./iframe-6Cz0xUxr.js";import{P as n}from"./PhoneCountryPicker-D1WYhlwu.js";import{b as i,f as S,p as C}from"./countries-SHQPnnhP.js";import{S as x,a as r}from"./_StoriesComponents-Cm_ABdCl.js";import"./index-CPeLFKYT.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-Fq_C6ke6.js";import"./Popover-Bvm8G0kp.js";import"./useResponsive-DNsNc3fk.js";import"./function-BLX-rFak.js";import"./BottomPanel-B65yKyTK.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-BZt5f3Ah.js";import"./FocusTrap-DrinZoPG.js";import"./array-BfAlyugE.js";import"./Suspendable-DZeVFC46.js";import"./index-D0mbFrR9.js";import"./extends-CF3RwP-h.js";import"./TransitionView-zVoD7Fgi.js";import"./index-BvFFThNg.js";import"./Pressable-B8NN80MC.js";import"./Separator-Do9AB7sg.js";import"./useDisclosure-C9yhQDCE.js";import"./string-_k888HHG.js";import"./Flag-CiC5T5qn.js";import"./i18n-DblhPVHl.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],M={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},e=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:i("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:i("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"Variations"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories--1riXhJZ.js.map
