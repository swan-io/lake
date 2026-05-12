import{g as I,j as e,S as m,L as w,c as n,I as x,h as N,V,B as O,s as B,t as H,e as P,r as g}from"./ScrollView-MekbySN5.js";import{T as z,F as A}from"./FlatList-BHhLAUh8.js";import{P as G}from"./Popover-CrFlDy7V.js";import{P as S}from"./Pressable-DN1pHPdC.js";import{S as T}from"./Separator-TZ8ihUJF.js";import{r as i}from"./iframe-DtSoNM3L.js";import{u as W}from"./useDisclosure-BGSCSgpe.js";import{d as _}from"./string-QbI2rGDI.js";import{b as M}from"./countries-ft6rNfqQ.js";import{F as q}from"./Flag-9-xmuAXO.js";const $=(o,u)=>{const s=i.useRef(void 0);return i.useCallback(f=>(I(s.current)&&clearTimeout(s.current),s.current=window.setTimeout(o,u,f),()=>clearTimeout(s.current)),[o,u])},R=48,t=B.create({trigger:{alignItems:"center",backgroundColor:n.gray[50],borderColor:n.gray[100],borderTopLeftRadius:g[4],borderTopRightRadius:g[4],borderBottomLeftRadius:g[4],borderBottomRightRadius:g[4],borderWidth:1,flexDirection:"row",height:40,justifyContent:"center",outlineStyle:"none",paddingLeft:P[16],paddingRight:P[12],transitionDuration:"150ms",transitionProperty:"background-color"},triggerPressed:{backgroundColor:n.gray[100]},triggerErrored:{borderColor:n.negative[500]},triggerDisabled:{borderColor:n.gray[50]},list:{height:230},searchIcon:{position:"absolute",left:16},searchInput:{...H.regular,color:n.gray[700],flexGrow:1,height:R,outlineStyle:"none",paddingLeft:44},row:{flexDirection:"row",alignItems:"center",height:R,paddingHorizontal:16,transitionProperty:"background-color",transitionDuration:"150ms"},rowHovered:{backgroundColor:n.gray[50]},rowPressed:{backgroundColor:n.gray[100]},rowName:{flexGrow:1}}),J=({value:o,onValueChange:u,countries:s,style:f,disabled:C=!1,readOnly:k=!1,error:L,ariaLabel:E="Select country"})=>{const j=i.useRef(null),v=i.useRef(null),[d,{open:D,close:y}]=W(!1),l=i.useMemo(()=>s.filter((r,a,c)=>c.indexOf(r)===a).map(r=>M(r)),[s]),[p,b]=i.useState(l);i.useEffect(()=>{b(l)},[l]),i.useEffect(()=>{d&&setTimeout(()=>v.current?.focus(),250)},[d]);const F=$(i.useCallback(r=>{const a=_(r.trim().toLowerCase());if(a===""){b(l);return}const c=l.filter(h=>h.deburr.includes(a)||h.idd.includes(a)||`+${h.idd}`.includes(a));b(c)},[l]),200);return e.jsxs(e.Fragment,{children:[e.jsxs(S,{ref:j,role:"button","aria-label":E,disabled:d||C||k,onPress:D,style:({pressed:r})=>[t.trigger,f,!d&&r&&t.triggerPressed,(C||k)&&t.triggerDisabled,N(L)&&t.triggerErrored],children:[e.jsx(q,{code:o.cca2,width:16}),e.jsx(m,{width:8}),e.jsxs(w,{color:n.gray[600],numberOfLines:1,userSelect:"none",variant:"smallSemibold",children:["+",o.idd]}),e.jsx(m,{width:8}),e.jsx(x,{name:"chevron-down-filled",color:n.gray[600],size:16})]}),e.jsx(G,{referenceRef:j,visible:d,onDismiss:y,matchReferenceWidth:!1,children:e.jsxs(V,{style:t.list,children:[e.jsxs(O,{direction:"row",alignItems:"center",children:[e.jsx(x,{name:"search-filled",color:n.gray[300],size:18,style:t.searchIcon}),e.jsx(z,{ref:v,inputMode:"search",style:t.searchInput,onChangeText:F,onSubmitEditing:()=>{I(p[0])&&(u(p[0]),y())}})]}),e.jsx(T,{}),e.jsx(A,{data:p,ItemSeparatorComponent:e.jsx(T,{}),keyExtractor:r=>r.uid,renderItem:({item:r})=>e.jsxs(S,{role:"button","aria-label":r.name,style:({hovered:a,pressed:c})=>[t.row,a&&t.rowHovered,c&&t.rowPressed],onPress:()=>{u(r),y()},children:[e.jsx(q,{code:r.cca2,width:16}),e.jsx(m,{width:12}),e.jsx(w,{numberOfLines:1,style:t.rowName,userSelect:"none",variant:"smallRegular",children:r.name}),r.uid===o.uid&&e.jsxs(e.Fragment,{children:[e.jsx(m,{width:12}),e.jsx(x,{name:"checkmark-filled",color:n.positive[500],size:16})]}),e.jsx(m,{width:12}),e.jsxs(w,{userSelect:"none",variant:"smallRegular",children:["+",r.idd]})]})})]})})]})};J.__docgenInfo={description:"",methods:[],displayName:"PhoneCountryPicker",props:{value:{required:!0,tsType:{name:"Simplify",elements:[{name:"intersection",raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
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
>`},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(country: Country) => void",signature:{arguments:[{type:{name:"Simplify",elements:[{name:"intersection",raw:`Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
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
>`},name:"country"}],return:{name:"void"}}},description:""},countries:{required:!0,tsType:{name:"Array",elements:[{name:'Simplify["cca3"]',raw:'Country["cca3"]'}],raw:"CountryCCA3[]"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select country"',computed:!1}}}};export{J as P};
//# sourceMappingURL=PhoneCountryPicker-CPWfaji6.js.map
