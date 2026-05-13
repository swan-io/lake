import{j as t,V as u,s as p}from"./ScrollView-BFTe3NUs.js";import{r as P}from"./iframe-DgAaViVc.js";import{P as n}from"./PhoneCountryPicker-Br3MYB2S.js";import{b as i,f as S,p as C}from"./countries-BkcXMwYK.js";import{S as x,a as r}from"./_StoriesComponents-BnU3qKiC.js";import"./index-BAAQiwsw.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-fU5uFXlh.js";import"./Popover-C-t6NXu2.js";import"./useResponsive-COoCDTYK.js";import"./function-VwuJLJSp.js";import"./BottomPanel-i_n2HwFS.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-BLP68U00.js";import"./FocusTrap-3fW7XPjR.js";import"./array-BfAlyugE.js";import"./Suspendable-jY3Y2eU_.js";import"./index-LA1RMurX.js";import"./extends-CF3RwP-h.js";import"./TransitionView-j0JnRKln.js";import"./index-ByBJbYnQ.js";import"./Pressable-Cyr_eKr3.js";import"./Separator-OzvEz0ZT.js";import"./useDisclosure-Gc9hAebV.js";import"./string-DUDiXCY5.js";import"./Flag-dKSIIQhH.js";import"./i18n-Ci6qpPDI.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],M={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},e=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:i("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:i("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"Variations"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-B5y5VhWD.js.map
