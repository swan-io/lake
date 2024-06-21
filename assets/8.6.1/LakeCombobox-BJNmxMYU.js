import{s as h,b as w,c as l,d as se,u as oe,y as q,j as e,V as d,I as A,B as ae,S as ie,T as le,L as ue}from"./ScrollView-CouMEPyK.js";import{r as n}from"./index-uCp2LrAq.js";import{g as D}from"./a11y-DXvpDVrG.js";import{P as ce,F as de}from"./Popover-BuO4Z_0-.js";import{L as me}from"./LakeTextInput-BkR2nW5o.js";import{L as F}from"./Suspendable-BDNGDgDB.js";import{b as pe}from"./_StoriesComponents-6fKCaPm5.js";import{M as fe}from"./index-_raWLUMJ.js";const ye=64,ge=3.5,r=h.create({list:{marginVertical:w[8]},flatList:{scrollBehavior:"smooth"},item:{flexShrink:1,flexGrow:1,justifyContent:"center",paddingHorizontal:w[24],paddingVertical:0,transitionProperty:"background-color",transitionDuration:"200ms",outlineStyle:"none",justifyContents:"center"},hoveredItem:{backgroundColor:l.gray[0]},focusedItem:{backgroundColor:l.gray[0]},pressedItem:{backgroundColor:l.gray[100]},itemText:{userSelect:"none"},loader:{padding:w[24]},listContainer:{flexGrow:1,flexShrink:1},loaderAdditional:{...h.absoluteFillObject,alignItems:"center",justifyContent:"center"},loaderAdditionalUnderlay:{...h.absoluteFillObject,backgroundColor:se.accented,opacity:.8},emptyList:{height:136},emptyListText:{color:l.gray.primary},input:{width:1,flexGrow:1}}),xe=({inputRef:P,value:p,items:T,itemHeight:k=ye,nbItemsDisplayed:S=ge,ListFooterComponent:N,onChange:O,onValueChange:I,onSelectItem:V,renderItem:_,keyExtractor:B,icon:G,placeholder:H,disabled:K=!1,emptyResultText:U,readOnly:M,id:z,error:W,hideErrors:Y},J)=>{const f=n.useRef(null),Q=oe(f,P),y=n.useRef(null),u=n.useRef(void 0),[X,C]=n.useState(!1),[g,i]=n.useState("closed"),Z=n.useCallback(()=>i("opened"),[]),$=n.useCallback(()=>i("closed"),[]),j=n.useCallback(()=>i("dismissed"),[]);n.useImperativeHandle(J,()=>({open:Z,close:$}));const E=n.useId(),ee=n.useCallback(t=>{var s;if(t.nativeEvent.key==="ArrowDown"){const o=y.current;o!=null&&((s=D(o,!1)[0])==null||s.focus(),t.preventDefault())}},[]),te=n.useCallback(t=>{var s,o;if(t.nativeEvent.key==="ArrowDown"||t.nativeEvent.key==="ArrowUp"){const a=y.current;if(a!=null){const m=a,x=t.currentTarget,c=D(m,!1),R=c.indexOf(x),re=t.nativeEvent.key==="ArrowDown"?1:-1;if(R===-1)return;const b=R+re;t.preventDefault(),b===-1?(s=f.current)==null||s.focus():(o=c[b===c.length?0:b])==null||o.focus()}}},[]),ne=n.useCallback(t=>{I(t),i(q(t)?"opened":"closed")},[I]),L=n.useCallback(()=>{q(p)&&(window.clearTimeout(u.current),u.current=window.setTimeout(()=>{i(t=>t==="closed"?"opened":t)},100))},[p]),v=n.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>{i("dismissed")},100)},[]);return e.jsxs(d,{children:[e.jsx(me,{containerRef:Q,style:r.input,ariaExpanded:g==="opened",ariaControls:g==="opened"?E:"",enterKeyHint:"search",icon:G,role:"combobox",placeholder:H,value:p,disabled:K,error:W,hideErrors:Y,onChangeText:ne,onChange:O,onFocus:L,onBlur:v,onKeyPress:ee,id:z,readOnly:M}),e.jsx(ce,{id:E,role:"listbox",matchReferenceWidth:!0,onEscapeKey:j,referenceRef:f,autoFocus:!1,returnFocus:!0,visible:g==="opened"&&!T.isNotAsked(),underlay:!1,forcedMode:"Dropdown",children:e.jsx(d,{style:[r.list,{maxHeight:k*S}],children:T.match({NotAsked:()=>null,Loading:()=>e.jsx(F,{style:r.loader}),Done:t=>t.match({Error:s=>e.jsx(A,{name:"error-circle-regular",size:22,color:l.negative[500]}),Ok:s=>e.jsxs(d,{ref:y,style:r.listContainer,children:[s.length===0?e.jsxs(ae,{justifyContent:"center",alignItems:"center",style:r.emptyList,children:[e.jsx(A,{name:"clipboard-search-regular",size:24,color:l.gray.primary}),e.jsx(ie,{height:8}),e.jsx(le,{style:r.emptyListText,children:U})]}):e.jsx(de,{keyExtractor:B,role:"list",data:s,style:r.flatList,ItemSeparatorComponent:e.jsx(pe,{}),renderItem:({item:o})=>{const a=_(o);return e.jsx(fe,{onFocus:L,onBlur:v,role:"listitem",onKeyDown:te,style:({hovered:m,pressed:x,focused:c})=>[r.item,m&&r.hoveredItem,c&&r.focusedItem,x&&r.pressedItem,{height:k}],onPress:()=>{window.clearTimeout(u.current),C(!0),Promise.resolve(V(o)).finally(()=>{C(!1),j()})},children:typeof a=="string"||typeof a=="number"?e.jsx(ue,{numberOfLines:1,style:r.itemText,children:a}):a})}}),N,X?e.jsxs(d,{style:r.loaderAdditional,children:[e.jsx(d,{style:r.loaderAdditionalUnderlay}),e.jsx(F,{})]}):null]})})})})})]})},be=n.forwardRef(xe);be.__docgenInfo={description:"",methods:[],displayName:"LakeCombobox",props:{inputRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"unknown"}],raw:"RefObject<unknown>"},description:""},value:{required:!0,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"AsyncData",elements:[{name:"Result",elements:[{name:"Array",elements:[{name:"I"}],raw:"I[]"},{name:"unknown"}],raw:"Result<I[], unknown>"}],raw:"AsyncData<Result<I[], unknown>>"},description:""},itemHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"64",computed:!1}},nbItemsDisplayed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3.5",computed:!1}},ListFooterComponent:{required:!1,tsType:{name:"ReactNode"},description:""},onChange:{required:!1,tsType:{name:'intersection["onChange"]',raw:'LakeTextInputProps["onChange"]'},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSelectItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: I) => void | Promise<unknown>",signature:{arguments:[{type:{name:"I"},name:"value"}],return:{name:"union",raw:"void | Promise<unknown>",elements:[{name:"void"},{name:"Promise",elements:[{name:"unknown"}],raw:"Promise<unknown>"}]}}},description:""},renderItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: I) => ReactNode | null",signature:{arguments:[{type:{name:"I"},name:"item"}],return:{name:"union",raw:"ReactNode | null",elements:[{name:"ReactNode"},{name:"null"}]}}},description:""},keyExtractor:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: I) => string",signature:{arguments:[{type:{name:"I"},name:"item"}],return:{name:"string"}}},description:""},icon:{required:!1,tsType:{name:"unknown"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emptyResultText:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},hideErrors:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};export{be as L};
//# sourceMappingURL=LakeCombobox-BJNmxMYU.js.map
