import{j as r}from"./jsx-runtime-DT09rT5F.js";import{r as h}from"./index-DXKZGL6g.js";import{z as s,n as N,I as w,c as C,s as S,V as D}from"./ScrollView-uRWD7sHo.js";import{L as E}from"./LakeLabel-ZoBjJAoq.js";import{L as q}from"./LakeTextInput-XJSW9w35.js";import{t as e}from"./i18n-DF9xeZGk.js";import{S as P,a as l}from"./_StoriesComponents-CfpM1uf7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CKeW-Qoz.js";import"./commonStyles-CWvHnKRn.js";import"./v4-C6aID195.js";import"./Pressable-DcSKb_Ww.js";import"./Fill-GPC7nny0.js";import"./LakeSelect-DokBy7Yu.js";import"./useDisclosure-CwHJfrsH.js";import"./FocusTrap-BTtxEFod.js";import"./array-BfAlyugE.js";import"./Popover-D5DWe0Uw.js";import"./useResponsive-6iDeDSbQ.js";import"./function-C-7S2jwM.js";import"./BottomPanel-BgxlA1Mc.js";import"./useBodyClassName-CYzM7DM-.js";import"./Suspendable-DcBC6Bz-.js";import"./index-oSnkc6z1.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CHCst6-1.js";import"./index-CMb-yCnL.js";import"./Separator-Bs5w-fAv.js";import"./index-BVbxhsSD.js";import"./rifm-nPAvXYlH.js";import"./utc-BdCcOVEk.js";const j=t=>s(t).with("DEU",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Steueridentifikationsnummer)`).with("ESP",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Número de Identificación Fiscal)`).with("ITA",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Codice fiscale)`).otherwise(()=>e("common.form.taxIdentificationNumber.placeholder")),V=t=>s(t).with("DEU",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Steuer-Nummer)`).with("ESP",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Número de Identificación Fiscal)`).with("ITA",()=>`${e("common.form.taxIdentificationNumber.placeholder")} (Codice fiscale)`).otherwise(()=>e("common.form.taxIdentificationNumber.placeholder")),A=t=>s(t).with("DEU",()=>e("common.form.taxIdentificationNumber.tooltip.deu")).with("ESP",()=>"Número de Identificación Fiscal").with("ITA",()=>e("common.form.taxIdentificationNumber.tooltip.ita")).otherwise(()=>{}),U=t=>s(t).with("DEU",()=>e("common.form.help.nbDigits",{nbDigits:"10-11"})).with("ESP",()=>e("common.form.help.nbCharacters",{nbCharacters:"9"})).with("ITA",()=>e("common.form.help.nbCharacters",{nbCharacters:"16"})).otherwise(()=>""),L=t=>s(t).with("DEU",()=>e("common.form.help.nbDigits",{nbDigits:"11"})).with("ESP",()=>e("common.form.help.nbCharacters",{nbCharacters:"9"})).with("ITA",()=>e("common.form.help.nbCharacters",{nbCharacters:"16"})).otherwise(()=>""),m=h.forwardRef(({value:t,error:a,valid:i,disabled:I,onChange:x,onBlur:b,accountCountry:n,isCompany:u,required:y,label:T=e("taxIdentificationNumber.label")},g)=>{const d=A(n);return r.jsx(E,{label:T,optionalLabel:y===!0?void 0:e("common.optional"),help:d!=null?r.jsx(N,{content:d,placement:"right",width:n==="DEU"?800:void 0,children:r.jsx(w,{name:"question-circle-regular",size:16,color:C.gray[600]})}):null,render:v=>r.jsx(q,{id:v,ref:g,placeholder:u?V(n):j(n),help:u?U(n):L(n),value:t,error:a,valid:i,disabled:I,onChangeText:x,onBlur:b})})});m.__docgenInfo={description:"",methods:[],displayName:"TaxIdentificationNumberInput",props:{value:{required:!0,tsType:{name:"string"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},valid:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},accountCountry:{required:!0,tsType:{name:"union",raw:'"DEU" | "ESP" | "FRA" | "NLD" | "ITA"',elements:[{name:"literal",value:'"DEU"'},{name:"literal",value:'"ESP"'},{name:"literal",value:'"FRA"'},{name:"literal",value:'"NLD"'},{name:"literal",value:'"ITA"'}]},description:""},isCompany:{required:!0,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'t("taxIdentificationNumber.label")',computed:!0}}}};const k=S.create({input:{maxWidth:400}}),fe={title:"Onboarding/TaxIdentificationNumber",component:m},o=()=>{const[t,a]=h.useState("");return r.jsx(P,{title:"Variations",children:r.jsxs(D,{style:k.input,children:[r.jsx(l,{title:"German tax ID",children:r.jsx(m,{required:!0,accountCountry:"DEU",isCompany:!0,valid:!1,error:void 0,value:t,onChange:i=>a(i)})}),r.jsx(l,{title:"Spanish tax ID",children:r.jsx(m,{required:!0,accountCountry:"ESP",isCompany:!0,valid:!1,error:void 0,value:t,onChange:i=>a(i)})}),r.jsx(l,{title:"Italian tax ID",children:r.jsx(m,{required:!0,accountCountry:"ITA",isCompany:!1,valid:!1,error:void 0,value:t,onChange:i=>a(i)})})]})})};o.__docgenInfo={description:"",methods:[],displayName:"TaxIdentificationNumber"};var c,p,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const he=["TaxIdentificationNumber"];export{o as TaxIdentificationNumber,he as __namedExportsOrder,fe as default};
//# sourceMappingURL=TaxIdentificationNumberInput.stories-C0D1Jagy.js.map
