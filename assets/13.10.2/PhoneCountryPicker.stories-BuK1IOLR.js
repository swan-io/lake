import{j as t,V as u,s as p}from"./ScrollView-Be2uaeG1.js";import{r as P}from"./iframe-CM3RFg6E.js";import{P as n}from"./PhoneCountryPicker-DWk7CVAD.js";import{b as e,f as S,p as C}from"./countries-Bs9Pkqso.js";import{S as x,a as r}from"./_StoriesComponents-BJZcRnz1.js";import"./index-uExSJENR.js";import"./preload-helper-D1IIBeq1.js";import"./FlatList-sXjnMw5p.js";import"./Popover-pUrGJMLy.js";import"./useResponsive-BMK3LEh9.js";import"./function-zvU19JR4.js";import"./BottomPanel-BMMDum8M.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-DvGTgE7N.js";import"./FocusTrap-o5qWQcdJ.js";import"./array-BfAlyugE.js";import"./Suspendable-BkabwyAO.js";import"./index-Cy5rO2Vu.js";import"./extends-CF3RwP-h.js";import"./TransitionView-Dg4VrjO0.js";import"./index-TBlMkm3Q.js";import"./Pressable-B-CjcGuW.js";import"./Separator-CadOK1O6.js";import"./useDisclosure-D-IvSYYN.js";import"./string-BLyFbIJo.js";import"./Flag-CB69Wjok.js";import"./i18n-gPeGekTT.js";import"./rifm-C-t_evdA.js";const h=p.create({container:{width:120}}),j=["FRA","DEU","ESP","ITA","GBR","USA"],Q={title:"Forms/PhoneCountryPicker",component:n},o=({initialCountry:a=S,countries:s=C,disabled:l,readOnly:c,error:y})=>{const[d,m]=P.useState(a);return t.jsx(u,{style:h.container,children:t.jsx(n,{value:d,countries:s,onValueChange:m,disabled:l,readOnly:c,error:y})})},i=()=>t.jsxs(x,{title:"PhoneCountryPicker variations",children:[t.jsx(r,{title:"Default (France)",children:t.jsx(o,{})}),t.jsx(r,{title:"Initial country: United States",children:t.jsx(o,{initialCountry:e("USA")})}),t.jsx(r,{title:"Initial country: Portugal (long IDD)",children:t.jsx(o,{initialCountry:e("PRT")})}),t.jsx(r,{title:"Restricted list (6 countries only)",children:t.jsx(o,{countries:j})}),t.jsx(r,{title:"Error",children:t.jsx(o,{error:"Required"})}),t.jsx(r,{title:"Disabled",children:t.jsx(o,{disabled:!0})}),t.jsx(r,{title:"Readonly",children:t.jsx(o,{readOnly:!0})})]});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <StoryBlock title="PhoneCountryPicker variations">
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
//# sourceMappingURL=PhoneCountryPicker.stories-BuK1IOLR.js.map
