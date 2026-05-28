import{c as e,i as t}from"./preload-helper-LFDnojF3.js";import{o as n}from"./iframe-CWV9VqtY.js";import{F as r,R as i,St as a,U as o,bt as s,g as c,h as l,ht as u,i as d,it as f,o as p,r as m,s as h,st as g}from"./ScrollView-CNViPbhS.js";import{r as _,t as v}from"./LakeButton-Bua_X1Uv.js";import{n as y,t as b}from"./LakeTextInput-CDwHhCLb.js";import{n as x,t as S}from"./LakeLabel-CAjU_zzr.js";import{n as C,r as w,t as T}from"./_StoriesComponents-ZvzDCoHs.js";import{c as E,o as D,u as O}from"./countries-MJayw5GG.js";import{n as k,t as A}from"./dist-DZe1CULj.js";import{n as j,t as M}from"./PhoneCountryPicker-ufY895SG.js";var N,P,F,I,L=t((()=>{c(),h(),y(),d(),g(),r(),N=e(n()),u(),E(),j(),P=o(),F=a.create({picker:{borderTopRightRadius:0,borderBottomRightRadius:0,borderRightWidth:0},pickerDisabled:{borderRightWidth:1,borderRightColor:f.gray[100]},input:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}),I=({ref:e,id:t,country:n,value:r,countries:a,error:o,help:s,valid:c=!1,autofocus:u=!1,disabled:d=!1,readOnly:h=!1,countryAriaLabel:g,hideErrors:_=!1,onCountryChange:v,onChangeText:y,onSubmitEditing:x,onBlur:S})=>{let C=(0,N.useRef)(null),w=e=>{e===e.replace(/[^ +0-9-()]/g,``)&&y(e)};(0,N.useEffect)(()=>{u&&C.current&&setTimeout(()=>C.current?.focus(),250)},[u,n]),(0,N.useImperativeHandle)(e,()=>({focus:()=>C.current?.focus(),blur:()=>C.current?.blur()}),[]);let T=[F.picker,(d||h)&&F.pickerDisabled];return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(l,{direction:`row`,children:[(0,P.jsx)(M,{value:n,countries:a??O,onValueChange:v,disabled:d,readOnly:h,error:o,ariaLabel:g,style:T}),(0,P.jsx)(b,{id:t,ref:C,autoComplete:`tel`,inputMode:`tel`,rows:1,hideErrors:!0,value:r,valid:c,error:o,disabled:d,readOnly:h,onChangeText:w,onSubmitEditing:x,onBlur:S,style:F.input})]}),!_&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(m,{height:4}),(0,P.jsx)(p,{variant:`smallRegular`,color:i(o)?f.negative[500]:f.gray[500],children:o??s??` `})]})]})},I.__docgenInfo={description:``,methods:[{name:`focus`,docblock:null,modifiers:[],params:[],returns:null},{name:`blur`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`InputPhoneNumber`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`signature`,type:`object`,raw:`{
  focus: () => void;
  blur: () => void;
}`,signature:{properties:[{key:`focus`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}},{key:`blur`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}}],raw:`Ref<InputPhoneNumberRef>`},description:``},id:{required:!1,tsType:{name:`string`},description:``},country:{required:!0,tsType:{name:`Simplify`,elements:[{name:`intersection`,raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
}`,elements:[{name:`Pick`,elements:[{name:`unknown[number]`,raw:`(typeof readonlyCountries)[number]`},{name:`union`,raw:`"cca2" | "cca3"`,elements:[{name:`literal`,value:`"cca2"`},{name:`literal`,value:`"cca3"`}]}],raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3">`},{name:`signature`,type:`object`,raw:`{
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`deburr`,value:{name:`string`,required:!0}},{key:`idd`,value:{name:`string`,required:!0}},{key:`uid`,value:{name:`string`,required:!0}},{key:`flag`,value:{name:`string`,required:!0}}]}}]}],raw:`Simplify<
  Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
    name: string;
    deburr: string;
    idd: string;
    uid: string;
    flag: string;
  }
>`},description:``},value:{required:!0,tsType:{name:`string`},description:``},countries:{required:!1,tsType:{name:`Array`,elements:[{name:`Simplify["cca3"]`,raw:`Country["cca3"]`}],raw:`CountryCCA3[]`},description:``},error:{required:!1,tsType:{name:`string`},description:``},help:{required:!1,tsType:{name:`string`},description:``},valid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},autofocus:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},countryAriaLabel:{required:!1,tsType:{name:`string`},description:``},hideErrors:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onCountryChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(country: Country) => void`,signature:{arguments:[{type:{name:`Simplify`,elements:[{name:`intersection`,raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
}`,elements:[{name:`Pick`,elements:[{name:`unknown[number]`,raw:`(typeof readonlyCountries)[number]`},{name:`union`,raw:`"cca2" | "cca3"`,elements:[{name:`literal`,value:`"cca2"`},{name:`literal`,value:`"cca3"`}]}],raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3">`},{name:`signature`,type:`object`,raw:`{
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`deburr`,value:{name:`string`,required:!0}},{key:`idd`,value:{name:`string`,required:!0}},{key:`uid`,value:{name:`string`,required:!0}},{key:`flag`,value:{name:`string`,required:!0}}]}}]}],raw:`Simplify<
  Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
    name: string;
    deburr: string;
    idd: string;
    uid: string;
    flag: string;
  }
>`},name:`country`}],return:{name:`void`}}},description:``},onChangeText:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(text: string) => void`,signature:{arguments:[{type:{name:`string`},name:`text`}],return:{name:`void`}}},description:``},onSubmitEditing:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),R,z,B,V,H,U;t((()=>{_(),x(),d(),A(),u(),L(),E(),w(),R=o(),z=a.create({container:{maxWidth:400}}),B={title:`Forms/InputPhoneNumber`,component:I},V=({initialCountry:e=D(`FRA`),initialValue:t=``,help:n,disabled:r,readOnly:i,autofocus:a})=>{let{Field:o,submitForm:c}=k({phoneNumber:{initialValue:{country:e,nationalNumber:t},sanitize:({country:e,nationalNumber:t})=>({country:e,nationalNumber:t.trim()}),validate:({nationalNumber:e})=>{if(e.trim()===``)return`Phone number is required`;if(e.replace(/\D/g,``).length<6)return`Invalid phone number`}}});return(0,R.jsxs)(s,{style:z.container,children:[(0,R.jsx)(o,{name:`phoneNumber`,children:({value:e,onBlur:t,onChange:o,valid:s,error:c,ref:l})=>(0,R.jsx)(S,{label:`Phone number`,render:u=>(0,R.jsx)(I,{id:u,ref:l,autofocus:a,country:e.country,value:e.nationalNumber,valid:s,error:c,help:n,disabled:r,readOnly:i,onCountryChange:t=>o({country:t,nationalNumber:e.nationalNumber}),onChangeText:t=>o({country:e.country,nationalNumber:t}),onBlur:t})})}),(0,R.jsx)(m,{height:8}),(0,R.jsx)(v,{size:`small`,color:`current`,onPress:()=>c({onSuccess:e=>console.log(e)}),children:`Submit`})]})},H=()=>(0,R.jsxs)(T,{title:`InputPhoneNumber variations`,children:[(0,R.jsx)(C,{title:`Default (France)`,children:(0,R.jsx)(V,{})}),(0,R.jsx)(C,{title:`With initial value`,children:(0,R.jsx)(V,{initialValue:`06 12 34 56 78`})}),(0,R.jsx)(C,{title:`Different initial country (UK)`,children:(0,R.jsx)(V,{initialCountry:D(`GBR`),initialValue:`07 1234 5678`})}),(0,R.jsx)(C,{title:`With help`,children:(0,R.jsx)(V,{help:`Required for permissions`})}),(0,R.jsx)(C,{title:`Disabled`,children:(0,R.jsx)(V,{initialValue:`06 12 34 56 78`,disabled:!0})}),(0,R.jsx)(C,{title:`Readonly`,children:(0,R.jsx)(V,{initialValue:`06 12 34 56 78`,readOnly:!0})}),(0,R.jsx)(C,{title:`Autofocus (refocuses on country change)`,children:(0,R.jsx)(V,{autofocus:!0})})]}),H.__docgenInfo={description:``,methods:[],displayName:`Variations`},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => <StoryBlock title="InputPhoneNumber variations">
    <StoryPart title="Default (France)">
      <PhoneNumberForm />
    </StoryPart>

    <StoryPart title="With initial value">
      <PhoneNumberForm initialValue="06 12 34 56 78" />
    </StoryPart>

    <StoryPart title="Different initial country (UK)">
      <PhoneNumberForm initialCountry={getCountryByCCA3("GBR")} initialValue="07 1234 5678" />
    </StoryPart>

    <StoryPart title="With help">
      <PhoneNumberForm help="Required for permissions" />
    </StoryPart>

    <StoryPart title="Disabled">
      <PhoneNumberForm initialValue="06 12 34 56 78" disabled={true} />
    </StoryPart>

    <StoryPart title="Readonly">
      <PhoneNumberForm initialValue="06 12 34 56 78" readOnly={true} />
    </StoryPart>

    <StoryPart title="Autofocus (refocuses on country change)">
      <PhoneNumberForm autofocus={true} />
    </StoryPart>
  </StoryBlock>`,...H.parameters?.docs?.source}}},U=[`Variations`]}))();export{H as Variations,U as __namedExportsOrder,B as default};
//# sourceMappingURL=InputPhoneNumber.stories-6FBgDxWi.js.map