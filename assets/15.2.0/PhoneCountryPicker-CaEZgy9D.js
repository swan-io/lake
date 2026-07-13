import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-BcHuJ41D.js";import{F as r,H as i,L as a,R as o,U as s,V as c,dt as l,g as u,gt as d,h as f,ht as p,i as m,it as h,kt as g,mt as _,o as v,pt as y,r as b,s as x,st as S,wt as C}from"./ScrollView-CrsrYS2O.js";import{n as w,t as T}from"./useDisclosure-5JRzDWvz.js";import{r as E,t as D}from"./Pressable-Cuv2c-Xr.js";import{n as O,t as k}from"./Separator-CqL3kQP_.js";import{n as A,t as j}from"./FlatList-25HFNza0.js";import{n as M,t as N}from"./Popover-BOl0P31Q.js";import{r as P,t as F}from"./string-Cu1E96JC.js";import{c as I,o as L}from"./countries-CvBrodRn.js";import{n as R,t as z}from"./Flag-DNYsZ1Qa.js";var B,V,H=t((()=>{B=e(n()),r(),V=(e,t)=>{let n=(0,B.useRef)(void 0);return(0,B.useCallback)(r=>(a(n.current)&&clearTimeout(n.current),n.current=window.setTimeout(e,t,r),()=>clearTimeout(n.current)),[e,t])}})),U,W,G,K,q,J=t((()=>{u(),A(),i(),x(),M(),E(),O(),m(),S(),H(),T(),r(),P(),U=e(n()),p(),I(),R(),W=s(),G=48,K=g.create({trigger:{alignItems:`center`,backgroundColor:h.gray[50],borderColor:h.gray[100],borderTopLeftRadius:l[4],borderTopRightRadius:l[4],borderBottomLeftRadius:l[4],borderBottomRightRadius:l[4],borderWidth:1,flexDirection:`row`,height:40,justifyContent:`center`,outlineStyle:`none`,paddingLeft:y[16],paddingRight:y[12],transitionDuration:`150ms`,transitionProperty:`background-color`},triggerPressed:{backgroundColor:h.gray[100]},triggerErrored:{borderColor:h.negative[500]},triggerDisabled:{borderColor:h.gray[50]},list:{height:230},searchIcon:{position:`absolute`,left:16},searchInput:{..._.regular,color:h.gray[700],flexGrow:1,height:G,outlineStyle:`none`,paddingLeft:44},row:{flexDirection:`row`,alignItems:`center`,height:G,paddingHorizontal:16,transitionProperty:`background-color`,transitionDuration:`150ms`},rowHovered:{backgroundColor:h.gray[50]},rowPressed:{backgroundColor:h.gray[100]},rowName:{flexGrow:1}}),q=({value:e,onValueChange:t,countries:n,style:r,disabled:i=!1,readOnly:s=!1,error:l,ariaLabel:u=`Select country`})=>{let p=(0,U.useRef)(null),m=(0,U.useRef)(null),[g,{open:_,close:y}]=w(!1),x=(0,U.useMemo)(()=>n.filter((e,t,n)=>n.indexOf(e)===t).map(e=>L(e)),[n]),[S,T]=(0,U.useState)(x);(0,U.useEffect)(()=>{T(x)},[x]),(0,U.useEffect)(()=>{g&&setTimeout(()=>m.current?.focus(),250)},[g]);let E=V((0,U.useCallback)(e=>{let t=F(e.trim().toLowerCase());if(t===``){T(x);return}T(x.filter(e=>e.deburr.includes(t)||e.idd.includes(t)||`+${e.idd}`.includes(t)))},[x]),200);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(D,{ref:p,role:`button`,"aria-label":u,disabled:g||i||s,onPress:_,style:({pressed:e})=>[K.trigger,r,!g&&e&&K.triggerPressed,(i||s)&&K.triggerDisabled,o(l)&&K.triggerErrored],children:[(0,W.jsx)(z,{code:e.cca2,width:16}),(0,W.jsx)(b,{width:8}),(0,W.jsxs)(v,{color:h.gray[600],numberOfLines:1,userSelect:`none`,variant:`smallSemibold`,children:[`+`,e.idd]}),(0,W.jsx)(b,{width:8}),(0,W.jsx)(c,{name:`chevron-down-filled`,color:h.gray[600],size:16})]}),(0,W.jsx)(N,{referenceRef:p,visible:g,onDismiss:y,matchReferenceWidth:!1,children:(0,W.jsxs)(C,{style:K.list,children:[(0,W.jsxs)(f,{direction:`row`,alignItems:`center`,children:[(0,W.jsx)(c,{name:`search-filled`,color:h.gray[300],size:18,style:K.searchIcon}),(0,W.jsx)(d,{ref:m,inputMode:`search`,style:K.searchInput,onChangeText:E,onSubmitEditing:()=>{a(S[0])&&(t(S[0]),y())}})]}),(0,W.jsx)(k,{}),(0,W.jsx)(j,{data:S,ItemSeparatorComponent:(0,W.jsx)(k,{}),keyExtractor:e=>e.uid,renderItem:({item:n})=>(0,W.jsxs)(D,{role:`button`,"aria-label":n.name,style:({hovered:e,pressed:t})=>[K.row,e&&K.rowHovered,t&&K.rowPressed],onPress:()=>{t(n),y()},children:[(0,W.jsx)(z,{code:n.cca2,width:16}),(0,W.jsx)(b,{width:12}),(0,W.jsx)(v,{numberOfLines:1,style:K.rowName,userSelect:`none`,variant:`smallRegular`,children:n.name}),n.uid===e.uid&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(b,{width:12}),(0,W.jsx)(c,{name:`checkmark-filled`,color:h.positive[500],size:16})]}),(0,W.jsx)(b,{width:12}),(0,W.jsxs)(v,{userSelect:`none`,variant:`smallRegular`,children:[`+`,n.idd]})]})})]})})]})},q.__docgenInfo={description:``,methods:[],displayName:`PhoneCountryPicker`,props:{value:{required:!0,tsType:{name:`Simplify`,elements:[{name:`intersection`,raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
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
//# sourceMappingURL=PhoneCountryPicker-CaEZgy9D.js.map