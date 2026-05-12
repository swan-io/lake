import{j as e,V as x,s as I}from"./ScrollView-MekbySN5.js";import{r as g}from"./iframe-DtSoNM3L.js";import{L as T}from"./LakeLabel-K_AX2Y2j.js";import{L as b}from"./LakeTextInput-DS0hXeES.js";import{t as C}from"./i18n-5PuG3vgA.js";import{g as h,b as q,c as N,d as S,h as P}from"./validation-k7ex1KqS.js";import{S as j,a as i}from"./_StoriesComponents-DKuHuV1R.js";import"./index-C7iaMPW0.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./v4-EwEgHOG0.js";import"./Pressable-DN1pHPdC.js";import"./Fill-B_-1SZH6.js";import"./LakeSelect-C8_YtGO2.js";import"./useBoolean-BfWIjLUt.js";import"./useDisclosure-BGSCSgpe.js";import"./FocusTrap-ImEOf_5E.js";import"./array-BfAlyugE.js";import"./FlatList-BHhLAUh8.js";import"./Popover-CrFlDy7V.js";import"./useResponsive-ByrXWIYR.js";import"./function-DUelx21e.js";import"./BottomPanel-Cjsw0JBU.js";import"./useBodyClassName-BhOqwFK2.js";import"./Suspendable-DgV3aU8o.js";import"./index-CtYBqWfq.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CSY0ajHF.js";import"./index-Bt2BoDkB.js";import"./Separator-TZ8ihUJF.js";import"./iban-BUpMkOU9.js";const a=({ref:t,value:n,error:r,valid:d,disabled:l,onChange:m,onBlur:p,country:u,isCompany:s,required:c,label:y=N(s),placeholder:f=s?S(u):P(u)})=>e.jsx(T,{label:y,optionalLabel:c===!0?void 0:C("common.optional"),render:v=>e.jsx(b,{id:v,ref:t,placeholder:f,help:s?h(u):q(u),value:n,error:r,valid:d,disabled:l,onChangeText:m,onBlur:p})});a.__docgenInfo={description:"",methods:[],displayName:"TaxIdentificationNumberInput",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"TextInput"}],raw:"Ref<TextInput>"},description:""},value:{required:!0,tsType:{name:"string"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},valid:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},country:{required:!0,tsType:{name:"union",raw:"IndividualCountryCCA3 | CompanyCountryCCA3",elements:[{name:"unknown[number]",raw:"(typeof individualCountries)[number]"},{name:"unknown[number]",raw:"(typeof companyCountries)[number]"}]},description:""},isCompany:{required:!0,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"getTaxNumberLabel(isCompany)",computed:!0}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:`isCompany
? getCompanyTaxNumberPlaceholder(country)
: getIndividualTaxNumberPlaceholder(country)`,computed:!1}}}};const V=I.create({input:{maxWidth:400}}),ue={title:"Onboarding/TaxIdentificationNumber",component:a},o=()=>{const[t,n]=g.useState("");return e.jsx(j,{title:"Variations",children:e.jsxs(x,{style:V.input,children:[e.jsx(i,{title:"German company tax ID",children:e.jsx(a,{required:!0,country:"DEU",isCompany:!0,valid:!1,error:void 0,value:t,onChange:r=>n(r)})}),e.jsx(i,{title:"German individual tax ID",children:e.jsx(a,{required:!0,country:"DEU",isCompany:!1,valid:!1,error:void 0,value:t,onChange:r=>n(r)})}),e.jsx(i,{title:"Spanish tax ID",children:e.jsx(a,{required:!0,country:"ESP",isCompany:!0,valid:!1,error:void 0,value:t,onChange:r=>n(r)})}),e.jsx(i,{title:"Italian tax ID",children:e.jsx(a,{required:!0,country:"ITA",isCompany:!0,valid:!1,error:void 0,value:t,onChange:r=>n(r)})}),e.jsx(i,{title:"French company tax ID",children:e.jsx(a,{required:!0,country:"FRA",isCompany:!0,valid:!1,error:void 0,value:t,onChange:r=>n(r)})})]})})};o.__docgenInfo={description:"",methods:[],displayName:"TaxIdentificationNumber"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <StoryBlock title="Variations">
      <View style={styles.input}>
        <StoryPart title="German company tax ID">
          <TaxIdentificationNumberInput required={true} country={"DEU"} isCompany={true} valid={false} error={undefined} value={value} onChange={event => setValue(event)} />
        </StoryPart>

        <StoryPart title="German individual tax ID">
          <TaxIdentificationNumberInput required={true} country={"DEU"} isCompany={false} valid={false} error={undefined} value={value} onChange={event => setValue(event)} />
        </StoryPart>

        <StoryPart title="Spanish tax ID">
          <TaxIdentificationNumberInput required={true} country={"ESP"} isCompany={true} valid={false} error={undefined} value={value} onChange={event => setValue(event)} />
        </StoryPart>

        <StoryPart title="Italian tax ID">
          <TaxIdentificationNumberInput required={true} country={"ITA"} isCompany={true} valid={false} error={undefined} value={value} onChange={event => setValue(event)} />
        </StoryPart>

        <StoryPart title="French company tax ID">
          <TaxIdentificationNumberInput required={true} country={"FRA"} isCompany={true} valid={false} error={undefined} value={value} onChange={event => setValue(event)} />
        </StoryPart>
      </View>
    </StoryBlock>;
}`,...o.parameters?.docs?.source}}};const se=["TaxIdentificationNumber"];export{o as TaxIdentificationNumber,se as __namedExportsOrder,ue as default};
//# sourceMappingURL=TaxIdentificationNumberInput.stories-DZVeC07z.js.map
