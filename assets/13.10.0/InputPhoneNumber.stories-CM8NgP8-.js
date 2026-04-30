import{j as e,B,S as j,L as I,c as C,h as L,s as S,V as D}from"./ScrollView-Dv8w-9OV.js";import{a as E}from"./LakeButton-BIom3IYe.js";import{L as W}from"./LakeLabel-B_YUSCMS.js";import{u as _}from"./index-CcR7NU5m.js";import{L as A}from"./LakeTextInput-C5nG-nzJ.js";import{r as x}from"./iframe-ys0c0jGh.js";import{p as O,b as w}from"./countries-DJHnWsnC.js";import{P as z}from"./PhoneCountryPicker-CRBdWdos.js";import{S as G,a}from"./_StoriesComponents-B18HSXdP.js";import"./index-Ca8rk5YK.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-D-OgD9fY.js";import"./index-CJ8JkiBE.js";import"./extends-CF3RwP-h.js";import"./v4-EwEgHOG0.js";import"./Fill-CeTsVsNF.js";import"./LakeSelect-Rx9YG9Jf.js";import"./useBoolean-hrYveTXR.js";import"./useDisclosure-COXEQIXb.js";import"./FocusTrap-BsZTMoeN.js";import"./array-BfAlyugE.js";import"./FlatList-DJvhNvTp.js";import"./Popover-DVfW8JXY.js";import"./useResponsive-lMfpn9_7.js";import"./function-BrqrfTII.js";import"./BottomPanel-HozJar-1.js";import"./useBodyClassName-BOe57oWI.js";import"./Suspendable-CsYhlDS3.js";import"./TransitionView-CXyx_QB0.js";import"./index-dVJHGmBV.js";import"./Separator-C6FrzW4V.js";import"./preload-helper-D1IIBeq1.js";import"./string-D5lUEKSQ.js";import"./i18n-DS5tOdzk.js";import"./rifm-e2fdROZS.js";import"./Flag-BVACNEHN.js";const k=S.create({picker:{borderTopRightRadius:0,borderBottomRightRadius:0,borderRightWidth:0},pickerDisabled:{borderRightWidth:1,borderRightColor:C.gray[100]},input:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}),q=({ref:d,id:c,country:p,value:y,countries:g,error:n,help:f,valid:r=!1,autofocus:t=!1,disabled:i=!1,readOnly:s=!1,countryAriaLabel:b,hideErrors:h=!1,onCountryChange:v,onChangeText:u,onSubmitEditing:T,onBlur:N})=>{const l=x.useRef(null),R=P=>{const F=P.replace(/[^ +0-9-()]/g,"");P===F&&u(P)};x.useEffect(()=>{t&&l.current&&setTimeout(()=>l.current?.focus(),250)},[t]),x.useImperativeHandle(d,()=>({focus:()=>l.current?.focus(),blur:()=>l.current?.blur()}),[]);const V=[k.picker,(i||s)&&k.pickerDisabled];return e.jsxs(e.Fragment,{children:[e.jsxs(B,{direction:"row",children:[e.jsx(z,{value:p,countries:g??O,onValueChange:v,disabled:i,readOnly:s,error:n,ariaLabel:b,style:V}),e.jsx(A,{id:c,ref:l,autoComplete:"tel",inputMode:"tel",rows:1,hideErrors:!0,value:y,valid:r,error:n,disabled:i,readOnly:s,onChangeText:R,onSubmitEditing:T,onBlur:N,style:k.input})]}),!h&&e.jsxs(e.Fragment,{children:[e.jsx(j,{height:4}),e.jsx(I,{variant:"smallRegular",color:L(n)?C.negative[500]:C.gray[500],children:n??f??" "})]})]})};q.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"InputPhoneNumber",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:`{
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
>`},name:"country"}],return:{name:"void"}}},description:""},onChangeText:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onSubmitEditing:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const K=S.create({container:{maxWidth:400}}),we={title:"Forms/InputPhoneNumber",component:q},o=({initialCountry:d=w("FRA"),initialValue:c="",help:p,disabled:y,readOnly:g})=>{const{Field:n,submitForm:f}=_({phoneNumber:{initialValue:{country:d,nationalNumber:c},sanitize:({country:r,nationalNumber:t})=>({country:r,nationalNumber:t.trim()}),validate:({nationalNumber:r})=>{if(r.trim()==="")return"Phone number is required";if(r.replace(/\D/g,"").length<6)return"Invalid phone number"}}});return e.jsxs(D,{style:K.container,children:[e.jsx(n,{name:"phoneNumber",children:({value:r,onBlur:t,onChange:i,valid:s,error:b,ref:h})=>e.jsx(W,{label:"Phone number",render:v=>e.jsx(q,{id:v,ref:h,country:r.country,value:r.nationalNumber,valid:s,error:b,help:p,disabled:y,readOnly:g,onCountryChange:u=>i({country:u,nationalNumber:r.nationalNumber}),onChangeText:u=>i({country:r.country,nationalNumber:u}),onBlur:t})})}),e.jsx(j,{height:8}),e.jsx(E,{size:"small",color:"current",onPress:()=>f({onSuccess:r=>console.log(r)}),children:"Submit"})]})},m=()=>e.jsxs(G,{title:"InputPhoneNumber variations",children:[e.jsx(a,{title:"Default (France)",children:e.jsx(o,{})}),e.jsx(a,{title:"With initial value",children:e.jsx(o,{initialValue:"06 12 34 56 78"})}),e.jsx(a,{title:"Different initial country (UK)",children:e.jsx(o,{initialCountry:w("GBR"),initialValue:"07 1234 5678"})}),e.jsx(a,{title:"With help",children:e.jsx(o,{help:"Required for permissions"})}),e.jsx(a,{title:"Disabled",children:e.jsx(o,{initialValue:"06 12 34 56 78",disabled:!0})}),e.jsx(a,{title:"Readonly",children:e.jsx(o,{initialValue:"06 12 34 56 78",readOnly:!0})})]});m.__docgenInfo={description:"",methods:[],displayName:"Variations"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <StoryBlock title="InputPhoneNumber variations">
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
  </StoryBlock>`,...m.parameters?.docs?.source}}};const Te=["Variations"];export{m as Variations,Te as __namedExportsOrder,we as default};
//# sourceMappingURL=InputPhoneNumber.stories-CM8NgP8-.js.map
