import{j as t,V as u,s as p}from"./ScrollView-Bjp_o0Jl.js";import{r as P}from"./iframe-O2G6jaRt.js";import{P as n}from"./PhoneCountryPicker-Ddqk2FBX.js";import{b as i,f as S,p as C}from"./countries-G9Sn4rYh.js";import{S as x,a as r}from"./_StoriesComponents-kqWH07iq.js";import"./index-B4dRzUr4.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-DggpKu2-.js";import"./Popover-DCZI5GdD.js";import"./useResponsive-rfOiTQvm.js";import"./function-CVvuBDzU.js";import"./BottomPanel-rdC6XNGn.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-Csc9M94C.js";import"./FocusTrap-BilYHpq2.js";import"./array-BfAlyugE.js";import"./Suspendable-gY8OP0h1.js";import"./index-CByhFuwP.js";import"./extends-CF3RwP-h.js";import"./TransitionView-TSVKuSVc.js";import"./index-B6FV_2X5.js";import"./Pressable-IUlg904L.js";import"./Separator-CwbDx60X.js";import"./useDisclosure-B38fwBs5.js";import"./string-D8xU5c4q.js";import"./Flag-Boa05neq.js";import"./i18n-CdFoWKp1.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],M={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},e=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:i("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:i("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"Variations"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-pEialNSQ.js.map
