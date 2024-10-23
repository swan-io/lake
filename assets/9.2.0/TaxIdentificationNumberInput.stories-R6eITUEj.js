import{j as r}from"./jsx-runtime-BlAj40OV.js";import{z as s,n as N,I as w,c as C,s as S,V as D}from"./ScrollView-C9Sl8l-9.js";import{L as E}from"./LakeLabel-85UDJ90I.js";import{L as q}from"./LakeTextInput-DJ5dStww.js";import{r as h}from"./index-Cs7sjTYM.js";import{t as e}from"./i18n-wa0w1hPY.js";import{S as P,a as l}from"./_StoriesComponents--LS6DWDz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./commonStyles-t4XfA7cz.js";import"./v4-DvF23Exx.js";import"./Pressable-B-ndY5ns.js";import"./Fill-ICVCYpoF.js";import"./LakeSelect-ROSCWCgY.js";import"./useDisclosure-DLkMFUa4.js";import"./FocusTrap-B09dygKp.js";import"./array-BfAlyugE.js";import"./Popover-DUphcz07.js";import"./useResponsive-CzIqCC5v.js";import"./function-BvcByoDa.js";import"./BottomPanel-CoFv0YFr.js";import"./useBodyClassName-DMoYUPTW.js";import"./Suspendable-DMtC6jeg.js";import"./index-D9GDMxJ-.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BaZ6uvKi.js";import"./index-HmJNsiCB.js";import"./rifm-Kh7ohp2j.js";import"./utc-Bb9NEY8r.js";const j=t=>s(t).with("DEU",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Steueridentifikationsnummer)`).with("ESP",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Número de Identificación Fiscal)`).with("ITA",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Codice fiscale)`).otherwise(()=>e("common.form.taxIdentificationNumber.placeholder")),V=t=>s(t).with("DEU",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Steuer-Nummer)`).with("ESP",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Número de Identificación Fiscal)`).with("ITA",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Codice fiscale)`).otherwise(()=>e("common.form.taxIdentificationNumber.placeholder")),A=t=>s(t).with("DEU",()=>e("common.form.taxIdentificationNumber.tooltip.deu")).with("ESP",()=>"Número de Identificación Fiscal").with("ITA",()=>e("common.form.taxIdentificationNumber.tooltip.ita")).otherwise(()=>{}),U=t=>s(t).with("DEU",()=>e("common.form.help.nbDigits",{nbDigits:"10-11"})).with("ESP",()=>e("common.form.help.nbCharacters",{nbCharacters:"9"})).with("ITA",()=>e("common.form.help.nbCharacters",{nbCharacters:"16"})).otherwise(()=>""),L=t=>s(t).with("DEU",()=>e("common.form.help.nbDigits",{nbDigits:"11"})).with("ESP",()=>e("common.form.help.nbCharacters",{nbCharacters:"9"})).with("ITA",()=>e("common.form.help.nbCharacters",{nbCharacters:"16"})).otherwise(()=>""),m=h.forwardRef(({value:t,error:o,valid:i,disabled:I,onChange:x,onBlur:b,accountCountry:n,isCompany:u,required:v,label:y=e("taxIdentificationNumber.label")},T)=>{const c=A(n);return r.jsx(E,{label:y,optionalLabel:v===!0?void 0:e("common.optional"),help:c!=null?r.jsx(N,{content:c,placement:"right",width:n==="DEU"?800:void 0,children:r.jsx(w,{name:"question-circle-regular",size:16,color:C.gray[600]})}):null,render:g=>r.jsx(q,{id:g,ref:T,placeholder:u?V(n):j(n),help:u?U(n):L(n),value:t,error:o,valid:i,disabled:I,onChangeText:x,onBlur:b})})});m.__docgenInfo={description:"",methods:[],displayName:"TaxIdentificationNumberInput",props:{value:{required:!0,tsType:{name:"string"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},valid:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},accountCountry:{required:!0,tsType:{name:"union",raw:'"DEU" | "ESP" | "FRA" | "NLD" | "ITA"',elements:[{name:"literal",value:'"DEU"'},{name:"literal",value:'"ESP"'},{name:"literal",value:'"FRA"'},{name:"literal",value:'"NLD"'},{name:"literal",value:'"ITA"'}]},description:""},isCompany:{required:!0,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("taxIdentificationNumber.label")',computed:!0}}}};const k=S.create({input:{maxWidth:400}}),de={title:"Onboarding/TaxIdentificationNumber",component:m},a=()=>{const[t,o]=h.useState("");return r.jsx(P,{title:"Variations",children:r.jsxs(D,{style:k.input,children:[r.jsx(l,{title:"German tax ID",children:r.jsx(m,{required:!0,accountCountry:"DEU",isCompany:!0,valid:!1,error:void 0,value:t,onChange:i=>o(i)})}),r.jsx(l,{title:"Spanish tax ID",children:r.jsx(m,{required:!0,accountCountry:"ESP",isCompany:!0,valid:!1,error:void 0,value:t,onChange:i=>o(i)})}),r.jsx(l,{title:"Italian tax ID",children:r.jsx(m,{required:!0,accountCountry:"ITA",isCompany:!1,valid:!1,error:void 0,value:t,onChange:i=>o(i)})})]})})};a.__docgenInfo={description:"",methods:[],displayName:"TaxIdentificationNumber"};var d,p,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <StoryBlock title="Variations">
      <View style={styles.input}>
        <StoryPart title="German tax ID">
          <TaxIdentificationNumberInput required={true} accountCountry={"DEU"} isCompany={true} valid={false} error={undefined} value={value} onChange={event => setValue(event)} />
        </StoryPart>

        <StoryPart title="Spanish tax ID">
          <TaxIdentificationNumberInput required={true} accountCountry={"ESP"} isCompany={true} valid={false} error={undefined} value={value} onChange={event => setValue(event)} />
        </StoryPart>

        <StoryPart title="Italian tax ID">
          <TaxIdentificationNumberInput required={true} accountCountry={"ITA"} isCompany={false} valid={false} error={undefined} value={value} onChange={event => setValue(event)} />
        </StoryPart>
      </View>
    </StoryBlock>;
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const pe=["TaxIdentificationNumber"];export{a as TaxIdentificationNumber,pe as __namedExportsOrder,de as default};
//# sourceMappingURL=TaxIdentificationNumberInput.stories-R6eITUEj.js.map
