import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-1OCP3h41.js";import{Bt as r,Dt as i,Et as a,Ft as o,J as s,K as c,St as l,Tt as u,ct as d,g as f,h as p,ht as m,i as h,lt as g,o as _,ot as v,q as y,r as b,s as x,vt as S,wt as C}from"./ScrollView-Un3FR6dt.js";import{n as w,t as T}from"./useBoolean-Cv9cqTTa.js";import{r as E,t as D}from"./Pressable-qkYlBsUQ.js";import{n as O,t as k}from"./Separator-45mzjmgy.js";import{n as A,t as j}from"./Popover-BypcNnbY.js";import{n as M,t as N}from"./FlatList-BFeA74pk.js";import{r as P,t as F}from"./string-BQ_EhQZf.js";import{c as I,o as L}from"./countries-DZQhurt-.js";import{n as R,t as z}from"./Flag-ChCOCoKK.js";var B,V,H=t((()=>{B=e(n()),v(),V=(e,t)=>{let n=(0,B.useRef)(void 0);return(0,B.useCallback)(r=>(d(n.current)&&clearTimeout(n.current),n.current=window.setTimeout(e,t,r),()=>clearTimeout(n.current)),[e,t])}})),U,W,G,K,q,J=t((()=>{f(),M(),y(),x(),A(),E(),O(),h(),S(),T(),H(),v(),P(),U=e(n()),a(),I(),R(),W=s(),G=48,K=r.create({trigger:{alignItems:`center`,backgroundColor:m.gray[50],borderColor:m.gray[100],borderTopLeftRadius:l[4],borderTopRightRadius:l[4],borderBottomLeftRadius:l[4],borderBottomRightRadius:l[4],borderWidth:1,flexDirection:`row`,height:40,justifyContent:`center`,outlineStyle:`none`,paddingLeft:C[16],paddingRight:C[12],transitionDuration:`150ms`,transitionProperty:`background-color`},triggerPressed:{backgroundColor:m.gray[100]},triggerErrored:{borderColor:m.negative[500]},triggerDisabled:{borderColor:m.gray[50]},list:{height:230},listDropdown:{width:360},searchIcon:{position:`absolute`,left:16},searchInput:{...u.regular,color:m.gray[700],flexGrow:1,height:G,outlineStyle:`none`,paddingLeft:44},row:{flexDirection:`row`,alignItems:`center`,height:G,paddingHorizontal:16,transitionProperty:`background-color`,transitionDuration:`150ms`},rowHovered:{backgroundColor:m.gray[50]},rowPressed:{backgroundColor:m.gray[100]},rowName:{flexGrow:1}}),q=({value:e,onValueChange:t,countries:n,style:r,disabled:a=!1,readOnly:s=!1,error:l,ariaLabel:u=`Select country`})=>{let f=(0,U.useRef)(null),h=(0,U.useRef)(null),[v,{on:y,off:x}]=w(!1),S=(0,U.useMemo)(()=>n.filter((e,t,n)=>n.indexOf(e)===t).map(e=>L(e)),[n]),[C,T]=(0,U.useState)(S);(0,U.useEffect)(()=>{T(S)},[S]),(0,U.useEffect)(()=>{v&&setTimeout(()=>h.current?.focus(),250)},[v]);let E=V((0,U.useCallback)(e=>{let t=F(e.trim().toLowerCase());if(t===``){T(S);return}let n=S.filter(e=>e.deburr.includes(t)||e.idd.includes(t)||`+${e.idd}`.includes(t));T(n)},[S]),200);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(D,{ref:f,role:`button`,"aria-label":u,disabled:v||a||s,onPress:y,style:({pressed:e})=>[K.trigger,r,!v&&e&&K.triggerPressed,(a||s)&&K.triggerDisabled,g(l)&&K.triggerErrored],children:[(0,W.jsx)(z,{code:e.cca2,width:16}),(0,W.jsx)(b,{width:8}),(0,W.jsxs)(_,{color:m.gray[600],numberOfLines:1,userSelect:`none`,variant:`smallSemibold`,children:[`+`,e.idd]}),(0,W.jsx)(b,{width:8}),(0,W.jsx)(c,{name:`chevron-down-filled`,color:m.gray[600],size:16})]}),(0,W.jsx)(j,{referenceRef:f,visible:v,onDismiss:x,matchReferenceWidth:!1,children:({mode:n})=>(0,W.jsxs)(o,{style:[K.list,n===`dropdown`&&K.listDropdown],children:[(0,W.jsxs)(p,{direction:`row`,alignItems:`center`,children:[(0,W.jsx)(c,{name:`search-filled`,color:m.gray[300],size:18,style:K.searchIcon}),(0,W.jsx)(i,{ref:h,inputMode:`search`,style:K.searchInput,onChangeText:E,onSubmitEditing:()=>{d(C[0])&&(t(C[0]),x())}})]}),(0,W.jsx)(k,{}),(0,W.jsx)(N,{data:C,ItemSeparatorComponent:(0,W.jsx)(k,{}),keyExtractor:e=>e.uid,renderItem:({item:n})=>(0,W.jsxs)(D,{role:`button`,"aria-label":n.name,style:({hovered:e,pressed:t})=>[K.row,e&&K.rowHovered,t&&K.rowPressed],onPress:()=>{t(n),x()},children:[(0,W.jsx)(z,{code:n.cca2,width:16}),(0,W.jsx)(b,{width:12}),(0,W.jsx)(_,{numberOfLines:1,style:K.rowName,userSelect:`none`,variant:`smallRegular`,children:n.name}),n.uid===e.uid&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(b,{width:12}),(0,W.jsx)(c,{name:`checkmark-filled`,color:m.positive[500],size:16})]}),(0,W.jsx)(b,{width:12}),(0,W.jsxs)(_,{userSelect:`none`,variant:`smallRegular`,children:[`+`,n.idd]})]})})]})})]})},q.__docgenInfo={description:``,methods:[],displayName:`PhoneCountryPicker`,props:{value:{required:!0,tsType:{name:`Simplify`,elements:[{name:`intersection`,raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
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
>`},description:``},onValueChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(country: Country) => void`,signature:{arguments:[{type:{name:`Simplify`,elements:[{name:`intersection`,raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
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
>`},name:`country`}],return:{name:`void`}}},description:``},countries:{required:!0,tsType:{name:`Array`,elements:[{name:`Simplify["cca3"]`,raw:`Country["cca3"]`}],raw:`CountryCCA3[]`},description:``},style:{required:!1,tsType:{name:`StyleProp`,elements:[{name:`ViewStyle`}],raw:`StyleProp<ViewStyle>`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Select country"`,computed:!1}}}}}));export{J as n,q as t};
//# sourceMappingURL=PhoneCountryPicker-CbxTp0V1.js.map