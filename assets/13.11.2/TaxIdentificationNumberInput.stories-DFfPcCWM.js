import{j as e,V as x,s as I}from"./ScrollView-2xhZ79Jo.js";import{r as g}from"./iframe-6Cz0xUxr.js";import{L as T}from"./LakeLabel-DdfMoFZF.js";import{L as b}from"./LakeTextInput-CXEJ08Rq.js";import{t as C}from"./i18n-DblhPVHl.js";import{g as h,b as q,c as N,d as S,h as P}from"./validation-B2fX2bDa.js";import{S as j,a as i}from"./_StoriesComponents-Cm_ABdCl.js";import"./index-CPeLFKYT.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./v4-EwEgHOG0.js";import"./Pressable-B8NN80MC.js";import"./Fill-D87rRCZB.js";import"./LakeSelect-CKMks7Ea.js";import"./useBoolean-CLekn-nO.js";import"./useDisclosure-C9yhQDCE.js";import"./FocusTrap-DrinZoPG.js";import"./array-BfAlyugE.js";import"./FlatList-Fq_C6ke6.js";import"./Popover-Bvm8G0kp.js";import"./useResponsive-DNsNc3fk.js";import"./function-BLX-rFak.js";import"./BottomPanel-B65yKyTK.js";import"./useBodyClassName-BZt5f3Ah.js";import"./Suspendable-DZeVFC46.js";import"./index-D0mbFrR9.js";import"./extends-CF3RwP-h.js";import"./TransitionView-zVoD7Fgi.js";import"./index-BvFFThNg.js";import"./Separator-Do9AB7sg.js";import"./iban-B8R6OyNF.js";const a=({ref:t,value:n,error:r,valid:d,disabled:l,onChange:m,onBlur:p,country:u,isCompany:s,required:c,label:y=N(s),placeholder:f=s?S(u):P(u)})=>e.jsx(T,{label:y,optionalLabel:c===!0?void 0:C("common.optional"),render:v=>e.jsx(b,{id:v,ref:t,placeholder:f,help:s?h(u):q(u),value:n,error:r,valid:d,disabled:l,onChangeText:m,onBlur:p})});a.__docgenInfo={description:"",methods:[],displayName:"TaxIdentificationNumberInput",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"TextInput"}],raw:"Ref<TextInput>"},description:""},value:{required:!0,tsType:{name:"string"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},valid:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},country:{required:!0,tsType:{name:"union",raw:"IndividualCountryCCA3 | CompanyCountryCCA3",elements:[{name:"unknown[number]",raw:"(typeof individualCountries)[number]"},{name:"unknown[number]",raw:"(typeof companyCountries)[number]"}]},description:""},isCompany:{required:!0,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"getTaxNumberLabel(isCompany)",computed:!0}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:`isCompany
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
//# sourceMappingURL=TaxIdentificationNumberInput.stories-DFfPcCWM.js.map
