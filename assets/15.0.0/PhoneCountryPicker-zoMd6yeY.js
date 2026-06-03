import{c as e,i as t}from"./preload-helper-C6cs2Kqh.js";import{o as n}from"./iframe-PLcdovXH.js";import{F as r,H as i,L as a,R as o,St as s,U as c,V as l,bt as u,dt as d,g as f,gt as p,h as m,ht as h,i as g,it as _,mt as v,o as y,pt as b,r as x,s as S,st as C}from"./ScrollView-Bhi9nHhc.js";import{n as w,t as T}from"./useDisclosure-C94ULJA2.js";import{r as E,t as D}from"./Pressable-vzX9orjj.js";import{n as O,t as k}from"./Separator-BswgtBGt.js";import{n as A,t as j}from"./FlatList-BSjFMoWG.js";import{n as M,t as N}from"./Popover-kn_AYhzj.js";import{r as P,t as F}from"./string-4tf9qCSV.js";import{c as I,o as L}from"./countries-QFsX93oC.js";import{n as R,t as z}from"./Flag-DYtzoY7x.js";var B,V,H=t((()=>{B=e(n()),r(),V=(e,t)=>{let n=(0,B.useRef)(void 0);return(0,B.useCallback)(r=>(a(n.current)&&clearTimeout(n.current),n.current=window.setTimeout(e,t,r),()=>clearTimeout(n.current)),[e,t])}})),U,W,G,K,q,J=t((()=>{f(),A(),i(),S(),M(),E(),O(),g(),C(),H(),T(),r(),P(),U=e(n()),h(),I(),R(),W=c(),G=48,K=s.create({trigger:{alignItems:`center`,backgroundColor:_.gray[50],borderColor:_.gray[100],borderTopLeftRadius:d[4],borderTopRightRadius:d[4],borderBottomLeftRadius:d[4],borderBottomRightRadius:d[4],borderWidth:1,flexDirection:`row`,height:40,justifyContent:`center`,outlineStyle:`none`,paddingLeft:b[16],paddingRight:b[12],transitionDuration:`150ms`,transitionProperty:`background-color`},triggerPressed:{backgroundColor:_.gray[100]},triggerErrored:{borderColor:_.negative[500]},triggerDisabled:{borderColor:_.gray[50]},list:{height:230},searchIcon:{position:`absolute`,left:16},searchInput:{...v.regular,color:_.gray[700],flexGrow:1,height:G,outlineStyle:`none`,paddingLeft:44},row:{flexDirection:`row`,alignItems:`center`,height:G,paddingHorizontal:16,transitionProperty:`background-color`,transitionDuration:`150ms`},rowHovered:{backgroundColor:_.gray[50]},rowPressed:{backgroundColor:_.gray[100]},rowName:{flexGrow:1}}),q=({value:e,onValueChange:t,countries:n,style:r,disabled:i=!1,readOnly:s=!1,error:c,ariaLabel:d=`Select country`})=>{let f=(0,U.useRef)(null),h=(0,U.useRef)(null),[g,{open:v,close:b}]=w(!1),S=(0,U.useMemo)(()=>n.filter((e,t,n)=>n.indexOf(e)===t).map(e=>L(e)),[n]),[C,T]=(0,U.useState)(S);(0,U.useEffect)(()=>{T(S)},[S]),(0,U.useEffect)(()=>{g&&setTimeout(()=>h.current?.focus(),250)},[g]);let E=V((0,U.useCallback)(e=>{let t=F(e.trim().toLowerCase());if(t===``){T(S);return}T(S.filter(e=>e.deburr.includes(t)||e.idd.includes(t)||`+${e.idd}`.includes(t)))},[S]),200);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(D,{ref:f,role:`button`,"aria-label":d,disabled:g||i||s,onPress:v,style:({pressed:e})=>[K.trigger,r,!g&&e&&K.triggerPressed,(i||s)&&K.triggerDisabled,o(c)&&K.triggerErrored],children:[(0,W.jsx)(z,{code:e.cca2,width:16}),(0,W.jsx)(x,{width:8}),(0,W.jsxs)(y,{color:_.gray[600],numberOfLines:1,userSelect:`none`,variant:`smallSemibold`,children:[`+`,e.idd]}),(0,W.jsx)(x,{width:8}),(0,W.jsx)(l,{name:`chevron-down-filled`,color:_.gray[600],size:16})]}),(0,W.jsx)(N,{referenceRef:f,visible:g,onDismiss:b,matchReferenceWidth:!1,children:(0,W.jsxs)(u,{style:K.list,children:[(0,W.jsxs)(m,{direction:`row`,alignItems:`center`,children:[(0,W.jsx)(l,{name:`search-filled`,color:_.gray[300],size:18,style:K.searchIcon}),(0,W.jsx)(p,{ref:h,inputMode:`search`,style:K.searchInput,onChangeText:E,onSubmitEditing:()=>{a(C[0])&&(t(C[0]),b())}})]}),(0,W.jsx)(k,{}),(0,W.jsx)(j,{data:C,ItemSeparatorComponent:(0,W.jsx)(k,{}),keyExtractor:e=>e.uid,renderItem:({item:n})=>(0,W.jsxs)(D,{role:`button`,"aria-label":n.name,style:({hovered:e,pressed:t})=>[K.row,e&&K.rowHovered,t&&K.rowPressed],onPress:()=>{t(n),b()},children:[(0,W.jsx)(z,{code:n.cca2,width:16}),(0,W.jsx)(x,{width:12}),(0,W.jsx)(y,{numberOfLines:1,style:K.rowName,userSelect:`none`,variant:`smallRegular`,children:n.name}),n.uid===e.uid&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(x,{width:12}),(0,W.jsx)(l,{name:`checkmark-filled`,color:_.positive[500],size:16})]}),(0,W.jsx)(x,{width:12}),(0,W.jsxs)(y,{userSelect:`none`,variant:`smallRegular`,children:[`+`,n.idd]})]})})]})})]})},q.__docgenInfo={description:``,methods:[],displayName:`PhoneCountryPicker`,props:{value:{required:!0,tsType:{name:`Simplify`,elements:[{name:`intersection`,raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
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
>`},description:``},onValueChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(country: Country) => void`,signature:{arguments:[{type:{name:`Simplify`,elements:[{name:`intersection`,raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
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
>`},name:`country`}],return:{name:`void`}}},description:``},countries:{required:!0,tsType:{name:`Array`,elements:[{name:`Simplify["cca3"]`,raw:`Country["cca3"]`}],raw:`CountryCCA3[]`},description:``},style:{required:!1,tsType:{name:`StyleProp`,elements:[{name:`ViewStyle`}],raw:`StyleProp<ViewStyle>`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Select country"`,computed:!1}}}}}));export{J as n,q as t};
//# sourceMappingURL=PhoneCountryPicker-zoMd6yeY.js.map