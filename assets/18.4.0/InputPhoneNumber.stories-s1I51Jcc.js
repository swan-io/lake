import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-DvQnMLAd.js";import{Bt as r,C as i,Et as a,Ft as o,J as s,L as c,R as l,g as u,h as d,ht as f,i as p,lt as m,o as h,ot as g,r as _,s as v,vt as y}from"./ScrollView-ChBvlOEV.js";import{r as b,t as x}from"./LakeButton-Dsod1ZO7.js";import{n as S,t as C}from"./LakeTextInput-QZ5erPp-.js";import{n as w,t as T}from"./LakeLabel-JuifbLbz.js";import{n as E,r as D,t as O}from"./_StoriesComponents-YlLPzTrC.js";import{a as k,c as A,d as j,f as M,m as N,p as P,s as F}from"./countries-yQv4BAgA.js";import{n as I,t as L}from"./dist-Baj0-cgv.js";import{n as R,t as ee}from"./PhoneCountryPicker-DlE7vmr8.js";var z,B,V,H,U=t((()=>{u(),v(),S(),p(),y(),g(),z=e(n()),a(),j(),R(),B=s(),V=r.create({picker:{borderTopRightRadius:0,borderBottomRightRadius:0,borderRightWidth:0},pickerDisabled:{borderRightWidth:1,borderRightColor:f.gray[100]},input:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}),H=({ref:e,id:t,country:n,value:r,countries:i,error:a,help:o,valid:s=!1,autofocus:c=!1,disabled:l=!1,readOnly:u=!1,countryAriaLabel:p,hideErrors:g=!1,onCountryChange:v,onChangeText:y,onSubmitEditing:b,onBlur:x})=>{let S=(0,z.useRef)(null),w=e=>{e===e.replace(/[^ +0-9-()]/g,``)&&y(e)};(0,z.useEffect)(()=>{c&&S.current&&setTimeout(()=>S.current?.focus(),250)},[c,n]),(0,z.useImperativeHandle)(e,()=>({focus:()=>S.current?.focus(),blur:()=>S.current?.blur()}),[]);let T=[V.picker,(l||u)&&V.pickerDisabled];return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(d,{direction:`row`,children:[(0,B.jsx)(ee,{value:n,countries:i??P,onValueChange:v,disabled:l,readOnly:u,error:a,ariaLabel:p,style:T}),(0,B.jsx)(C,{id:t,ref:S,autoComplete:`tel`,inputMode:`tel`,rows:1,hideErrors:!0,value:r,valid:s,error:a,disabled:l,readOnly:u,onChangeText:w,onSubmitEditing:b,onBlur:x,style:V.input})]}),!g&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(_,{height:4}),(0,B.jsx)(h,{variant:`smallRegular`,color:m(a)?f.negative[500]:f.gray[500],children:a??o??` `})]})]})},H.__docgenInfo={description:``,methods:[{name:`focus`,docblock:null,modifiers:[],params:[],returns:null},{name:`blur`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`InputPhoneNumber`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`signature`,type:`object`,raw:`{
  focus: () => void;
  blur: () => void;
}`,signature:{properties:[{key:`focus`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}},{key:`blur`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}}],raw:`Ref<InputPhoneNumberRef>`},description:``},id:{required:!1,tsType:{name:`string`},description:``},country:{required:!0,tsType:{name:`Simplify`,elements:[{name:`intersection`,raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
  isNationality: boolean;
}`,elements:[{name:`Pick`,elements:[{name:`unknown[number]`,raw:`(typeof readonlyCountries)[number]`},{name:`union`,raw:`"cca2" | "cca3"`,elements:[{name:`literal`,value:`"cca2"`},{name:`literal`,value:`"cca3"`}]}],raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3">`},{name:`signature`,type:`object`,raw:`{
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
  isNationality: boolean;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`deburr`,value:{name:`string`,required:!0}},{key:`idd`,value:{name:`string`,required:!0}},{key:`uid`,value:{name:`string`,required:!0}},{key:`flag`,value:{name:`string`,required:!0}},{key:`isNationality`,value:{name:`boolean`,required:!0}}]}}]}],raw:`Simplify<
  Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
    name: string;
    deburr: string;
    idd: string;
    uid: string;
    flag: string;
    isNationality: boolean;
  }
>`},description:``},value:{required:!0,tsType:{name:`string`},description:``},countries:{required:!1,tsType:{name:`Array`,elements:[{name:`Simplify["cca3"]`,raw:`Country["cca3"]`}],raw:`CountryCCA3[]`},description:``},error:{required:!1,tsType:{name:`string`},description:``},help:{required:!1,tsType:{name:`string`},description:``},valid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},autofocus:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},countryAriaLabel:{required:!1,tsType:{name:`string`},description:``},hideErrors:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onCountryChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(country: Country) => void`,signature:{arguments:[{type:{name:`Simplify`,elements:[{name:`intersection`,raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
  isNationality: boolean;
}`,elements:[{name:`Pick`,elements:[{name:`unknown[number]`,raw:`(typeof readonlyCountries)[number]`},{name:`union`,raw:`"cca2" | "cca3"`,elements:[{name:`literal`,value:`"cca2"`},{name:`literal`,value:`"cca3"`}]}],raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3">`},{name:`signature`,type:`object`,raw:`{
  name: string;
  deburr: string;
  idd: string;
  uid: string;
  flag: string;
  isNationality: boolean;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`deburr`,value:{name:`string`,required:!0}},{key:`idd`,value:{name:`string`,required:!0}},{key:`uid`,value:{name:`string`,required:!0}},{key:`flag`,value:{name:`string`,required:!0}},{key:`isNationality`,value:{name:`boolean`,required:!0}}]}}]}],raw:`Simplify<
  Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
    name: string;
    deburr: string;
    idd: string;
    uid: string;
    flag: string;
    isNationality: boolean;
  }
>`},name:`country`}],return:{name:`void`}}},description:``},onChangeText:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(text: string) => void`,signature:{arguments:[{type:{name:`string`},name:`text`}],return:{name:`void`}}},description:``},onSubmitEditing:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),W,G,K,q=t((()=>{i(),j(),W={fr:`FRA`,de:`DEU`,es:`ESP`,it:`ITA`,nl:`NLD`,pt:`PRT`},G=e=>l.fromExecution(()=>new Intl.Locale(e)).toOption().flatMap(({language:e,region:t})=>c.fromNullable(t).filter(M).map(F).filter(e=>N.includes(e.cca3)).orElse(c.fromNullable(W[e]).map(A))),K=(e=navigator.languages)=>{for(let t of e){let e=G(t);if(e.isSome())return e.get()}return k}})),J,Y,X,Z,Q,$;t((()=>{b(),w(),p(),L(),a(),U(),j(),q(),D(),J=s(),Y=r.create({container:{maxWidth:400}}),X={title:`Forms/InputPhoneNumber`,component:H},Z=({initialCountry:e=A(`FRA`),initialValue:t=``,help:n,disabled:r,readOnly:i,autofocus:a})=>{let{Field:s,submitForm:c}=I({phoneNumber:{initialValue:{country:e,nationalNumber:t},sanitize:({country:e,nationalNumber:t})=>({country:e,nationalNumber:t.trim()}),validate:({nationalNumber:e})=>{if(e.trim()===``)return`Phone number is required`;if(e.replace(/\D/g,``).length<6)return`Invalid phone number`}}});return(0,J.jsxs)(o,{style:Y.container,children:[(0,J.jsx)(s,{name:`phoneNumber`,children:({value:e,onBlur:t,onChange:o,valid:s,error:c,ref:l})=>(0,J.jsx)(T,{label:`Phone number`,render:u=>(0,J.jsx)(H,{id:u,ref:l,autofocus:a,country:e.country,value:e.nationalNumber,valid:s,error:c,help:n,disabled:r,readOnly:i,onCountryChange:t=>o({country:t,nationalNumber:e.nationalNumber}),onChangeText:t=>o({country:e.country,nationalNumber:t}),onBlur:t})})}),(0,J.jsx)(_,{height:8}),(0,J.jsx)(x,{size:`small`,color:`current`,onPress:()=>c({onSuccess:e=>console.log(e)}),children:`Submit`})]})},Q=()=>(0,J.jsxs)(O,{title:`InputPhoneNumber variations`,children:[(0,J.jsx)(E,{title:`Default (France)`,children:(0,J.jsx)(Z,{})}),(0,J.jsx)(E,{title:`Default from the browser language`,children:(0,J.jsx)(Z,{initialCountry:K(),help:`Browser languages: ${navigator.languages.join(`, `)}`})}),(0,J.jsx)(E,{title:`With initial value`,children:(0,J.jsx)(Z,{initialValue:`06 12 34 56 78`})}),(0,J.jsx)(E,{title:`Different initial country (UK)`,children:(0,J.jsx)(Z,{initialCountry:A(`GBR`),initialValue:`07 1234 5678`})}),(0,J.jsx)(E,{title:`With help`,children:(0,J.jsx)(Z,{help:`Required for permissions`})}),(0,J.jsx)(E,{title:`Disabled`,children:(0,J.jsx)(Z,{initialValue:`06 12 34 56 78`,disabled:!0})}),(0,J.jsx)(E,{title:`Readonly`,children:(0,J.jsx)(Z,{initialValue:`06 12 34 56 78`,readOnly:!0})}),(0,J.jsx)(E,{title:`Autofocus (refocuses on country change)`,children:(0,J.jsx)(Z,{autofocus:!0})})]}),Q.__docgenInfo={description:``,methods:[],displayName:`Variations`},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => <StoryBlock title="InputPhoneNumber variations">
    <StoryPart title="Default (France)">
      <PhoneNumberForm />
    </StoryPart>

    <StoryPart title="Default from the browser language">
      <PhoneNumberForm initialCountry={getDefaultPhoneCountry()} help={\`Browser languages: \${navigator.languages.join(", ")}\`} />
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
  </StoryBlock>`,...Q.parameters?.docs?.source}}},$=[`Variations`]}))();export{Q as Variations,$ as __namedExportsOrder,X as default};
//# sourceMappingURL=InputPhoneNumber.stories-s1I51Jcc.js.map