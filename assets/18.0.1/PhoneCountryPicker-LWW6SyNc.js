import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-Bly9V7vg.js";import{$ as r,Bt as i,Dt as a,Et as o,Ft as s,J as c,K as l,Q as u,St as d,Tt as f,Y as p,et as m,g as h,h as g,ht as _,i as v,o as y,r as b,s as x,vt as S,wt as C}from"./ScrollView-D2KFvAq1.js";import{n as w,t as T}from"./useBoolean-Bw20UB8U.js";import{r as E,t as D}from"./Pressable-DnZ6AfWb.js";import{n as O,t as k}from"./Separator-CJnqX3iS.js";import{n as A,t as j}from"./Popover-DLsNeL_I.js";import{n as M,t as N}from"./FlatList-D7_YrTt4.js";import{r as P,t as F}from"./string-ocbJXMfu.js";import{c as I,o as L}from"./countries-BveaG0TG.js";import{n as R,t as z}from"./Flag-Cf43ikme.js";var B,V,H=t((()=>{B=e(n()),l(),V=(e,t)=>{let n=(0,B.useRef)(void 0);return(0,B.useCallback)(r=>(c(n.current)&&clearTimeout(n.current),n.current=window.setTimeout(e,t,r),()=>clearTimeout(n.current)),[e,t])}})),U,W,G,K,q,J=t((()=>{h(),M(),r(),x(),A(),E(),O(),v(),S(),T(),H(),l(),P(),U=e(n()),o(),I(),R(),W=m(),G=48,K=i.create({trigger:{alignItems:`center`,backgroundColor:_.gray[50],borderColor:_.gray[100],borderTopLeftRadius:d[4],borderTopRightRadius:d[4],borderBottomLeftRadius:d[4],borderBottomRightRadius:d[4],borderWidth:1,flexDirection:`row`,height:40,justifyContent:`center`,outlineStyle:`none`,paddingLeft:C[16],paddingRight:C[12],transitionDuration:`150ms`,transitionProperty:`background-color`},triggerPressed:{backgroundColor:_.gray[100]},triggerErrored:{borderColor:_.negative[500]},triggerDisabled:{borderColor:_.gray[50]},list:{height:230},listDropdown:{width:360},searchIcon:{position:`absolute`,left:16},searchInput:{...f.regular,color:_.gray[700],flexGrow:1,height:G,outlineStyle:`none`,paddingLeft:44},row:{flexDirection:`row`,alignItems:`center`,height:G,paddingHorizontal:16,transitionProperty:`background-color`,transitionDuration:`150ms`},rowHovered:{backgroundColor:_.gray[50]},rowPressed:{backgroundColor:_.gray[100]},rowName:{flexGrow:1}}),q=({value:e,onValueChange:t,countries:n,style:r,disabled:i=!1,readOnly:o=!1,error:l,ariaLabel:d=`Select country`})=>{let f=(0,U.useRef)(null),m=(0,U.useRef)(null),[h,{on:v,off:x}]=w(!1),S=(0,U.useMemo)(()=>n.filter((e,t,n)=>n.indexOf(e)===t).map(e=>L(e)),[n]),[C,T]=(0,U.useState)(S);(0,U.useEffect)(()=>{T(S)},[S]),(0,U.useEffect)(()=>{h&&setTimeout(()=>m.current?.focus(),250)},[h]);let E=V((0,U.useCallback)(e=>{let t=F(e.trim().toLowerCase());if(t===``){T(S);return}let n=S.filter(e=>e.deburr.includes(t)||e.idd.includes(t)||`+${e.idd}`.includes(t));T(n)},[S]),200);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(D,{ref:f,role:`button`,"aria-label":d,disabled:h||i||o,onPress:v,style:({pressed:e})=>[K.trigger,r,!h&&e&&K.triggerPressed,(i||o)&&K.triggerDisabled,p(l)&&K.triggerErrored],children:[(0,W.jsx)(z,{code:e.cca2,width:16}),(0,W.jsx)(b,{width:8}),(0,W.jsxs)(y,{color:_.gray[600],numberOfLines:1,userSelect:`none`,variant:`smallSemibold`,children:[`+`,e.idd]}),(0,W.jsx)(b,{width:8}),(0,W.jsx)(u,{name:`chevron-down-filled`,color:_.gray[600],size:16})]}),(0,W.jsx)(j,{referenceRef:f,visible:h,onDismiss:x,matchReferenceWidth:!1,children:({mode:n})=>(0,W.jsxs)(s,{style:[K.list,n===`dropdown`&&K.listDropdown],children:[(0,W.jsxs)(g,{direction:`row`,alignItems:`center`,children:[(0,W.jsx)(u,{name:`search-filled`,color:_.gray[300],size:18,style:K.searchIcon}),(0,W.jsx)(a,{ref:m,inputMode:`search`,style:K.searchInput,onChangeText:E,onSubmitEditing:()=>{c(C[0])&&(t(C[0]),x())}})]}),(0,W.jsx)(k,{}),(0,W.jsx)(N,{data:C,ItemSeparatorComponent:(0,W.jsx)(k,{}),keyExtractor:e=>e.uid,renderItem:({item:n})=>(0,W.jsxs)(D,{role:`button`,"aria-label":n.name,style:({hovered:e,pressed:t})=>[K.row,e&&K.rowHovered,t&&K.rowPressed],onPress:()=>{t(n),x()},children:[(0,W.jsx)(z,{code:n.cca2,width:16}),(0,W.jsx)(b,{width:12}),(0,W.jsx)(y,{numberOfLines:1,style:K.rowName,userSelect:`none`,variant:`smallRegular`,children:n.name}),n.uid===e.uid&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(b,{width:12}),(0,W.jsx)(u,{name:`checkmark-filled`,color:_.positive[500],size:16})]}),(0,W.jsx)(b,{width:12}),(0,W.jsxs)(y,{userSelect:`none`,variant:`smallRegular`,children:[`+`,n.idd]})]})})]})})]})},q.__docgenInfo={description:``,methods:[],displayName:`PhoneCountryPicker`,props:{value:{required:!0,tsType:{name:`Simplify`,elements:[{name:`intersection`,raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
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
//# sourceMappingURL=PhoneCountryPicker-LWW6SyNc.js.map