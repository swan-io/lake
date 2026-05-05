import{j as t,V as u,s as p}from"./ScrollView-Q9GFQRiB.js";import{r as P}from"./iframe-C2Zcgyff.js";import{P as n}from"./PhoneCountryPicker-D0oyoxcU.js";import{b as i,f as S,p as C}from"./countries-Cd-TddPq.js";import{S as x,a as r}from"./_StoriesComponents-DmDthpUV.js";import"./index-DomKN1r3.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-Bbo2TItJ.js";import"./Popover-C9Zyb4T-.js";import"./useResponsive-BxHL_W8V.js";import"./function-BGq0lvIy.js";import"./BottomPanel-Blp0mmEs.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-C48FDLrh.js";import"./FocusTrap-BOl1qvhJ.js";import"./array-BfAlyugE.js";import"./Suspendable-Bl1OcQz-.js";import"./index-A4roKQVn.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CAnXmr_N.js";import"./index-DHx2PN2E.js";import"./Pressable-D0LLCX_O.js";import"./Separator-CfXdNjVo.js";import"./useDisclosure-C9Gycvq7.js";import"./string-DRs-QNhi.js";import"./Flag-eHS3e_0f.js";import"./i18n-Cc_FVLAI.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],M={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},e=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:i("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:i("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"Variations"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-C4_Xq5_i.js.map
