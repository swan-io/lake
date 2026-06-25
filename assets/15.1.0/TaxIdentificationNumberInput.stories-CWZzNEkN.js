import{c as e,i as t}from"./preload-helper-CxZGalNS.js";import{o as n}from"./iframe-DnfaSU5L.js";import{St as r,U as i,bt as a,ht as o}from"./ScrollView-DPbqI7Vg.js";import{n as s,t as c}from"./LakeTextInput-DLDbrZuk.js";import{i as l,o as u}from"./i18n-Cem4xGf4.js";import{n as d,t as f}from"./LakeLabel-C1ArclfD.js";import{n as p,r as m,t as h}from"./_StoriesComponents-h2oiBUII.js";import{a as g,i as _,n as v,o as y,r as b,t as x}from"./validation-BO73wJ0H.js";var S,C,w=t((()=>{d(),s(),l(),y(),S=i(),C=({ref:e,value:t,error:n,valid:r,disabled:i,onChange:a,onBlur:o,country:s,isCompany:l,required:d,label:p=g(l),placeholder:m=l?v(s):_(s)})=>(0,S.jsx)(f,{label:p,optionalLabel:d===!0?void 0:u(`common.optional`),render:u=>(0,S.jsx)(c,{id:u,ref:e,placeholder:m,help:l?x(s):b(s),value:t,error:n,valid:r,disabled:i,onChangeText:a,onBlur:o})}),C.__docgenInfo={description:``,methods:[],displayName:`TaxIdentificationNumberInput`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`TextInput`}],raw:`Ref<TextInput>`},description:``},value:{required:!0,tsType:{name:`string`},description:``},error:{required:!0,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},valid:{required:!0,tsType:{name:`boolean`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},country:{required:!0,tsType:{name:`union`,raw:`IndividualCountryCCA3 | CompanyCountryCCA3`,elements:[{name:`unknown[number]`,raw:`(typeof individualCountries)[number]`},{name:`unknown[number]`,raw:`(typeof companyCountries)[number]`}]},description:``},isCompany:{required:!0,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`getTaxNumberLabel(isCompany)`,computed:!0}},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`isCompany
? getCompanyTaxNumberPlaceholder(country)
: getIndividualTaxNumberPlaceholder(country)`,computed:!1}}}}})),T,E,D,O,k,A;t((()=>{T=e(n()),o(),w(),m(),E=i(),D=r.create({input:{maxWidth:400}}),O={title:`Onboarding/TaxIdentificationNumber`,component:C},k=()=>{let[e,t]=(0,T.useState)(``);return(0,E.jsx)(h,{title:`Variations`,children:(0,E.jsxs)(a,{style:D.input,children:[(0,E.jsx)(p,{title:`German company tax ID`,children:(0,E.jsx)(C,{required:!0,country:`DEU`,isCompany:!0,valid:!1,error:void 0,value:e,onChange:e=>t(e)})}),(0,E.jsx)(p,{title:`German individual tax ID`,children:(0,E.jsx)(C,{required:!0,country:`DEU`,isCompany:!1,valid:!1,error:void 0,value:e,onChange:e=>t(e)})}),(0,E.jsx)(p,{title:`Spanish tax ID`,children:(0,E.jsx)(C,{required:!0,country:`ESP`,isCompany:!0,valid:!1,error:void 0,value:e,onChange:e=>t(e)})}),(0,E.jsx)(p,{title:`Italian tax ID`,children:(0,E.jsx)(C,{required:!0,country:`ITA`,isCompany:!0,valid:!1,error:void 0,value:e,onChange:e=>t(e)})}),(0,E.jsx)(p,{title:`French company tax ID`,children:(0,E.jsx)(C,{required:!0,country:`FRA`,isCompany:!0,valid:!1,error:void 0,value:e,onChange:e=>t(e)})})]})})},k.__docgenInfo={description:``,methods:[],displayName:`TaxIdentificationNumber`},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}},A=[`TaxIdentificationNumber`]}))();export{k as TaxIdentificationNumber,A as __namedExportsOrder,O as default};
//# sourceMappingURL=TaxIdentificationNumberInput.stories-CWZzNEkN.js.map