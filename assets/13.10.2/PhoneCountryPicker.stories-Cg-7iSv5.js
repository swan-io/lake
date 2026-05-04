import{j as t,V as u,s as p}from"./ScrollView-SDdqIOjG.js";import{r as P}from"./iframe-D1duQp2Q.js";import{P as n}from"./PhoneCountryPicker-Cr4ZCRmW.js";import{b as e,f as S,p as C}from"./countries-BM4NRJhs.js";import{S as x,a as r}from"./_StoriesComponents-BKqBt6LL.js";import"./index-CoghPqk4.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-E6T6YxzF.js";import"./Popover-CIY6hkFn.js";import"./useResponsive-B1jxFPrI.js";import"./function-B0Qs1cNd.js";import"./BottomPanel-BDhDkoZe.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-CwVo92do.js";import"./FocusTrap-ChDM9kaO.js";import"./array-BfAlyugE.js";import"./Suspendable-BAg_Tsnt.js";import"./index-CROAzjyK.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CP4urHtg.js";import"./index-BXHitgjZ.js";import"./Pressable-BXC_w4K0.js";import"./Separator-PPSvpwsX.js";import"./useDisclosure-CK85EONc.js";import"./string-zHlS45FS.js";import"./Flag-CagU6YvR.js";import"./i18n-BC6NtV_f.js";import"./rifm-DDCet3-J.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],Q={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},i=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:e("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:e("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-Cg-7iSv5.js.map
