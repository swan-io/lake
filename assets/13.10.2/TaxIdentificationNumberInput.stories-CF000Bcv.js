import{j as e,V as x,s as I}from"./ScrollView-D62ibAIB.js";import{r as g}from"./iframe-BxiObLlT.js";import{L as T}from"./LakeLabel-BIJxdTnD.js";import{L as b}from"./LakeTextInput-Bpj-pEP2.js";import{t as C}from"./i18n-BAHhLTkf.js";import{g as h,b as q,c as N,d as S,h as P}from"./validation-BLBrdxT9.js";import{S as j,a as i}from"./_StoriesComponents-BQs9RYw8.js";import"./index-CXGbStiX.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./v4-EwEgHOG0.js";import"./Pressable-IuiObHup.js";import"./Fill-B5oZAGif.js";import"./LakeSelect-79P_dD7R.js";import"./useBoolean-IZ-pDfSv.js";import"./useDisclosure-CExXvzVx.js";import"./FocusTrap-DTttPBR6.js";import"./array-BfAlyugE.js";import"./FlatList-K59-7HEL.js";import"./Popover-CKRxTEUe.js";import"./useResponsive-IDrYkp5e.js";import"./function-B0aMUF-W.js";import"./BottomPanel-B7iD4gNe.js";import"./useBodyClassName-Dom7l_Fe.js";import"./Suspendable-CExqBWGX.js";import"./index-7aTJbVC5.js";import"./extends-CF3RwP-h.js";import"./TransitionView-C3qvf9TQ.js";import"./index-Bgg291J9.js";import"./Separator-Bt5trxzM.js";import"./iban-CbeTv-9a.js";const a=({ref:t,value:n,error:r,valid:d,disabled:l,onChange:m,onBlur:p,country:u,isCompany:s,required:c,label:y=N(s),placeholder:f=s?S(u):P(u)})=>e.jsx(T,{label:y,optionalLabel:c===!0?void 0:C("common.optional"),render:v=>e.jsx(b,{id:v,ref:t,placeholder:f,help:s?h(u):q(u),value:n,error:r,valid:d,disabled:l,onChangeText:m,onBlur:p})});a.__docgenInfo={description:"",methods:[],displayName:"TaxIdentificationNumberInput",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"TextInput"}],raw:"Ref<TextInput>"},description:""},value:{required:!0,tsType:{name:"string"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},valid:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},country:{required:!0,tsType:{name:"union",raw:"IndividualCountryCCA3 | CompanyCountryCCA3",elements:[{name:"unknown[number]",raw:"(typeof individualCountries)[number]"},{name:"unknown[number]",raw:"(typeof companyCountries)[number]"}]},description:""},isCompany:{required:!0,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"getTaxNumberLabel(isCompany)",computed:!0}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:`isCompany
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
//# sourceMappingURL=TaxIdentificationNumberInput.stories-CF000Bcv.js.map
