import{j as t,V as u,s as p}from"./ScrollView-Dj73aJVM.js";import{r as P}from"./iframe-CzDiwJr_.js";import{P as n}from"./PhoneCountryPicker-tKmB9oe3.js";import{b as e,f as S,p as C}from"./countries-DWp3oawl.js";import{S as x,a as r}from"./_StoriesComponents-B3SeHZcS.js";import"./index-CVRaEAzb.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-BfTsMyB-.js";import"./Popover-a2GHD-XU.js";import"./useResponsive-C2HX7pIR.js";import"./function-0Jx22Iey.js";import"./BottomPanel-CZKYFWhF.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-DSVud3TW.js";import"./FocusTrap-Dt5tR8if.js";import"./array-BfAlyugE.js";import"./Suspendable-BbSCbu_S.js";import"./index-C1ydCzYj.js";import"./extends-CF3RwP-h.js";import"./TransitionView-Dbye67lv.js";import"./index-BC0ALlKF.js";import"./Pressable-Bg9p4Qo1.js";import"./Separator-DWARDRsH.js";import"./useDisclosure-bWRLnLOR.js";import"./string-DU2VEpmr.js";import"./Flag-Cek3jQpP.js";import"./i18n-BejMt7no.js";import"./rifm-ByCTM13F.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],Q={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},i=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:e("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:e("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-CoLsrZZH.js.map
