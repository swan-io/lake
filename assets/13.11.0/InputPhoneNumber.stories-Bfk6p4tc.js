import{j as e,B,S,L as I,c as C,h as L,s as w,V as D}from"./ScrollView-CWYrxhKF.js";import{a as A}from"./LakeButton-eX4I6PGg.js";import{L as E}from"./LakeLabel-DWxRhTah.js";import{u as W}from"./index-D9raQClo.js";import{L as _}from"./LakeTextInput-DKLsLBj-.js";import{r as k}from"./iframe-BUbFFmyd.js";import{p as O,b as N}from"./countries-CIxGNzWm.js";import{P as z}from"./PhoneCountryPicker-C_uY9Bu6.js";import{S as G,a as t}from"./_StoriesComponents-BAyHtIsQ.js";import"./index-DjkQ_e3e.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-ZZspeDLx.js";import"./index-DY4FZFMp.js";import"./extends-CF3RwP-h.js";import"./v4-EwEgHOG0.js";import"./Fill-DQzQnVLJ.js";import"./LakeSelect-BzMHqoPE.js";import"./i18n-Cj4cEqVq.js";import"./array-BfAlyugE.js";import"./useBoolean-D1qtuYsc.js";import"./useDisclosure-DSbhgxqh.js";import"./FocusTrap-DEzWi3mf.js";import"./FlatList-D-3E3xZA.js";import"./Popover-CUuezzym.js";import"./useResponsive-DxmBvMXc.js";import"./function-D0g3yAfj.js";import"./BottomPanel-DKAB7ZNz.js";import"./useBodyClassName-DmP-BP4O.js";import"./Suspendable-cRkLJxLD.js";import"./TransitionView-CIwdulAF.js";import"./index-_qL_jy9O.js";import"./Separator-E3tiNE9g.js";import"./preload-helper-D1IIBeq1.js";import"./string-6y22fVP8.js";import"./Flag-D9HT4ems.js";const j=w.create({picker:{borderTopRightRadius:0,borderBottomRightRadius:0,borderRightWidth:0},pickerDisabled:{borderRightWidth:1,borderRightColor:C.gray[100]},input:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}),q=({ref:c,id:d,country:m,value:p,countries:y,error:a,help:g,valid:f=!1,autofocus:r=!1,disabled:n=!1,readOnly:o=!1,countryAriaLabel:b,hideErrors:h=!1,onCountryChange:v,onChangeText:P,onSubmitEditing:s,onBlur:T})=>{const u=k.useRef(null),R=x=>{const F=x.replace(/[^ +0-9-()]/g,"");x===F&&P(x)};k.useEffect(()=>{r&&u.current&&setTimeout(()=>u.current?.focus(),250)},[r,m]),k.useImperativeHandle(c,()=>({focus:()=>u.current?.focus(),blur:()=>u.current?.blur()}),[]);const V=[j.picker,(n||o)&&j.pickerDisabled];return e.jsxs(e.Fragment,{children:[e.jsxs(B,{direction:"row",children:[e.jsx(z,{value:m,countries:y??O,onValueChange:v,disabled:n,readOnly:o,error:a,ariaLabel:b,style:V}),e.jsx(_,{id:d,ref:u,autoComplete:"tel",inputMode:"tel",rows:1,hideErrors:!0,value:p,valid:f,error:a,disabled:n,readOnly:o,onChangeText:R,onSubmitEditing:s,onBlur:T,style:j.input})]}),!h&&e.jsxs(e.Fragment,{children:[e.jsx(S,{height:4}),e.jsx(I,{variant:"smallRegular",color:L(a)?C.negative[500]:C.gray[500],children:a??g??" "})]})]})};q.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"InputPhoneNumber",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:`{
  focus: () => void;
  blur: () => void;
}`,signature:{properties:[{key:"focus",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"blur",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"Ref<InputPhoneNumberRef>"},description:""},id:{required:!1,tsType:{name:"string"},description:""},country:{required:!0,tsType:{name:"Simplify",elements:[{name:"intersection",raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
}`,elements:[{name:"Pick",elements:[{name:"unknown[number]",raw:"(typeof readonlyCountries)[number]"},{name:"union",raw:'"cca2" | "cca3"',elements:[{name:"literal",value:'"cca2"'},{name:"literal",value:'"cca3"'}]}],raw:'Pick<(typeof readonlyCountries)[number], "cca2" | "cca3">'},{name:"signature",type:"object",raw:`{
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"deburr",value:{name:"string",required:!0}},{key:"idd",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"flag",value:{name:"string",required:!0}}]}}]}],raw:`Simplify<
  Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
    name: string;
    deburr: string;
    idd: string;
    uid: string;
    flag: string;
  }
>`},description:""},value:{required:!0,tsType:{name:"string"},description:""},countries:{required:!1,tsType:{name:"Array",elements:[{name:'Simplify["cca3"]',raw:'Country["cca3"]'}],raw:"CountryCCA3[]"},description:""},error:{required:!1,tsType:{name:"string"},description:""},help:{required:!1,tsType:{name:"string"},description:""},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autofocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},countryAriaLabel:{required:!1,tsType:{name:"string"},description:""},hideErrors:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCountryChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(country: Country) => void",signature:{arguments:[{type:{name:"Simplify",elements:[{name:"intersection",raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
}`,elements:[{name:"Pick",elements:[{name:"unknown[number]",raw:"(typeof readonlyCountries)[number]"},{name:"union",raw:'"cca2" | "cca3"',elements:[{name:"literal",value:'"cca2"'},{name:"literal",value:'"cca3"'}]}],raw:'Pick<(typeof readonlyCountries)[number], "cca2" | "cca3">'},{name:"signature",type:"object",raw:`{
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"deburr",value:{name:"string",required:!0}},{key:"idd",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"flag",value:{name:"string",required:!0}}]}}]}],raw:`Simplify<
  Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
    name: string;
    deburr: string;
    idd: string;
    uid: string;
    flag: string;
  }
>`},name:"country"}],return:{name:"void"}}},description:""},onChangeText:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onSubmitEditing:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const K=w.create({container:{maxWidth:400}}),Se={title:"Forms/InputPhoneNumber",component:q},i=({initialCountry:c=N("FRA"),initialValue:d="",help:m,disabled:p,readOnly:y,autofocus:a})=>{const{Field:g,submitForm:f}=W({phoneNumber:{initialValue:{country:c,nationalNumber:d},sanitize:({country:r,nationalNumber:n})=>({country:r,nationalNumber:n.trim()}),validate:({nationalNumber:r})=>{if(r.trim()==="")return"Phone number is required";if(r.replace(/\D/g,"").length<6)return"Invalid phone number"}}});return e.jsxs(D,{style:K.container,children:[e.jsx(g,{name:"phoneNumber",children:({value:r,onBlur:n,onChange:o,valid:b,error:h,ref:v})=>e.jsx(E,{label:"Phone number",render:P=>e.jsx(q,{id:P,ref:v,autofocus:a,country:r.country,value:r.nationalNumber,valid:b,error:h,help:m,disabled:p,readOnly:y,onCountryChange:s=>o({country:s,nationalNumber:r.nationalNumber}),onChangeText:s=>o({country:r.country,nationalNumber:s}),onBlur:n})})}),e.jsx(S,{height:8}),e.jsx(A,{size:"small",color:"current",onPress:()=>f({onSuccess:r=>console.log(r)}),children:"Submit"})]})},l=()=>e.jsxs(G,{title:"InputPhoneNumber variations",children:[e.jsx(t,{title:"Default (France)",children:e.jsx(i,{})}),e.jsx(t,{title:"With initial value",children:e.jsx(i,{initialValue:"06 12 34 56 78"})}),e.jsx(t,{title:"Different initial country (UK)",children:e.jsx(i,{initialCountry:N("GBR"),initialValue:"07 1234 5678"})}),e.jsx(t,{title:"With help",children:e.jsx(i,{help:"Required for permissions"})}),e.jsx(t,{title:"Disabled",children:e.jsx(i,{initialValue:"06 12 34 56 78",disabled:!0})}),e.jsx(t,{title:"Readonly",children:e.jsx(i,{initialValue:"06 12 34 56 78",readOnly:!0})}),e.jsx(t,{title:"Autofocus (refocuses on country change)",children:e.jsx(i,{autofocus:!0})})]});l.__docgenInfo={description:"",methods:[],displayName:"Variations"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <StoryBlock title="InputPhoneNumber variations">
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
  </StoryBlock>`,...l.parameters?.docs?.source}}};const we=["Variations"];export{l as Variations,we as __namedExportsOrder,Se as default};
//# sourceMappingURL=InputPhoneNumber.stories-Bfk6p4tc.js.map
