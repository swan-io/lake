import{s as J,c as T,j as e,B as G,V as F,l as X,L as B,S as D,I as K,k as Z,T as M,$ as E,g as P,i as H,h as ee,W as te}from"./ScrollView-DWjQ00nM.js";import{r as h}from"./index-Cs7sjTYM.js";import{u as C}from"./useDisclosure-DLkMFUa4.js";import{P as L,F as O}from"./Popover-CdPSbsOC.js";import{L as re}from"./LakeButton-B6sbG4pD.js";import{M as A}from"./index-CCMTQrND.js";import{D as ne}from"./DatePicker-DIWs_sGK.js";import{d as q}from"./utc-DJvBpWoA.js";import{u as se}from"./Pressable-CMe_F2_9.js";import{u as oe}from"./TransitionView-cETjUupd.js";import{L as ie}from"./LakeCheckbox-BWeaii5R.js";import{L as ae}from"./LakeLabel-BlQ3b0Ot.js";import{L as le}from"./LakeRadio-DzCqQjHn.js";import{L as ce}from"./LakeTextInput-RVwTHeH7.js";import{S as de}from"./Stack-lIuE6A9g.js";import{T as N}from"./Tag-CN2d3BfY.js";import{S as ue}from"./_StoriesComponents-_jmnnGUR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./useResponsive-CzIqCC5v.js";import"./function-c-Au7wom.js";import"./BottomPanel-DIUwAyP4.js";import"./commonStyles-t4XfA7cz.js";import"./useBodyClassName-DMoYUPTW.js";import"./FocusTrap-BmeT9-In.js";import"./array-BfAlyugE.js";import"./Suspendable-Di1_g3U1.js";import"./index-BJ6ZNIxC.js";import"./extends-CF3RwP-h.js";import"./Fill-CJ2tm9Hu.js";import"./LakeSelect-BCceW-go.js";import"./rifm-CFTOlIhk.js";import"./rifm.esm-FZJd-_Wa.js";import"./i18n-CV4-0aDM.js";import"./LakeModal-DwHNW6FB.js";import"./LakeHeading-Devxa2jE.js";import"./ResponsiveContainer-BdaVvCuB.js";import"./v4-DvF23Exx.js";const S=J.create({selected:{color:T.gray[500]},list:{paddingVertical:20,marginVertical:4,minWidth:250,overflow:"hidden"},item:{display:"flex",paddingHorizontal:24,flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingVertical:8},itemHovered:{backgroundColor:T.gray[50]},availableFiltersTitle:{paddingHorizontal:24}});function _({filters:n,openFilters:t,label:u,title:o,availableFilters:a,large:i=!0,onAddFilter:x}){const r=h.useRef(null),[v,{close:c,toggle:p}]=C(!1);return e.jsxs(e.Fragment,{children:[e.jsx(G,{direction:"row",justifyContent:"start",alignItems:"center",children:e.jsx(re,{size:"small",mode:"secondary",color:"gray",onPress:p,ref:r,icon:i?"chevron-down-filled":"filter-filled",iconPosition:"end",ariaLabel:u,children:i?u:null})}),e.jsx(L,{role:"listbox",matchReferenceMinWidth:!0,onDismiss:c,referenceRef:r,returnFocus:!1,visible:v,children:e.jsxs(F,{style:S.list,children:[X(o)?e.jsxs(e.Fragment,{children:[e.jsx(B,{style:S.availableFiltersTitle,children:o}),e.jsx(D,{height:8})]}):null,e.jsx(O,{role:"list",data:a,keyExtractor:(l,s)=>`filter-item-${s}`,renderItem:({item:l})=>{const s=!!n[l.name]||t.includes(l.name);return e.jsxs(A,{style:({hovered:d})=>[S.item,d&&S.itemHovered],role:"button",disabled:s,onPress:()=>{x(l.name),c()},children:[e.jsx(B,{variant:"smallRegular",style:s&&S.selected,children:l.label}),s&&e.jsx(K,{color:T.positive[500],name:"checkmark-filled",size:14})]})}})]})})]})}_.__docgenInfo={description:"",methods:[],displayName:"FilterChooser",props:{filters:{required:!0,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"FilterName"},{name:"unknown"}],raw:"Record<FilterName, unknown>"}],raw:"Partial<Record<FilterName, unknown>>"},description:""},openFilters:{required:!0,tsType:{name:"Array",elements:[{name:"FilterName"}],raw:"FilterName[]"},description:""},label:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},availableFilters:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; name: FilterName }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"FilterName",required:!0}}]}}],raw:"{ label: string; name: FilterName }[]"},description:""},large:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onAddFilter:{required:!0,tsType:{name:"signature",type:"function",raw:"(filterName: FilterName) => void",signature:{arguments:[{type:{name:"FilterName"},name:"filterName"}],return:{name:"void"}}},description:""}}};const m=J.create({container:{paddingRight:12,paddingBottom:8},shadowed:{position:"absolute",opacity:0,width:"100%",height:"100%",borderRadius:4,boxShadow:Z.tile,transitionDuration:"150ms",transitionProperty:"opacity"},hovered:{opacity:1},dropdown:{maxHeight:400,minWidth:200},itemHovered:{backgroundColor:T.gray[50]},content:{paddingVertical:12},inputContent:{paddingHorizontal:24,paddingTop:24,paddingBottom:16},radio:{display:"flex",flexDirection:"row",alignItems:"center",height:32,paddingHorizontal:24},itemLabel:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},input:{width:250},value:{maxWidth:130,whiteSpace:"nowrap"}}),V=h.forwardRef(({onPress:n,onPressRemove:t,label:u,value:o="",isActive:a},i)=>{const x=h.useRef(null),r=se(x,i);return e.jsx(A,{ref:r,onPress:n,children:({hovered:v})=>e.jsxs(e.Fragment,{children:[e.jsx(F,{style:[m.shadowed,v&&m.hovered]}),e.jsx(N,{label:u,color:"current",onPressRemove:t,children:e.jsxs(G,{direction:"row",alignItems:"center",children:[e.jsx(M,{numberOfLines:1,style:m.value,children:o}),e.jsx(D,{width:4}),e.jsx(K,{color:T.current.primary,name:a?"chevron-up-filled":"chevron-down-filled",size:16})]})})]})})});function me({label:n,items:t,width:u,value:o,onValueChange:a,onPressRemove:i,autoOpen:x=!1}){const r=h.useRef(null),[v,{close:c,toggle:p}]=C(x),l=h.useMemo(()=>t.find(s=>s.value===o),[t,o]);return e.jsxs(F,{style:m.container,children:[e.jsx(V,{label:n,onPress:p,ref:r,onPressRemove:i,isActive:v,value:l==null?void 0:l.label}),e.jsx(L,{role:"listbox",matchReferenceWidth:!1,onDismiss:c,referenceRef:r,returnFocus:!1,visible:v,children:e.jsx(O,{role:"list",data:t,style:[m.dropdown,{width:u}],contentContainerStyle:m.content,keyExtractor:(s,d)=>`filter-item-${d}`,renderItem:({item:s})=>{const d=o===s.value;return e.jsxs(A,{role:"radio","aria-checked":d,style:({hovered:g})=>[m.radio,g&&m.itemHovered],onPress:()=>{a(s.value),c()},children:[e.jsx(le,{value:d}),e.jsx(D,{width:12}),e.jsx(M,{style:m.itemLabel,children:s.label})]})}})})]})}function pe({label:n,items:t,width:u,checkAllLabel:o,value:a,onValueChange:i,onPressRemove:x,autoOpen:r=!1}){const v=h.useRef(null),[c,{close:p,toggle:l}]=C(r),s=h.useMemo(()=>new Set(a),[a]),d=h.useMemo(()=>t.filter(y=>s.has(y.value)),[t,s]),g=o!=null&&s.size===t.length,b=h.useMemo(()=>{if(o==null)return t;const y=s.size===0?!1:s.size===t.length?!0:"mixed";return[{label:o,checked:y},...t]},[t,o,s]);return e.jsxs(F,{style:m.container,children:[e.jsx(V,{label:n,onPress:l,ref:v,onPressRemove:x,isActive:c,value:g?o:d.map(y=>y.label).join(", ")}),e.jsx(L,{role:"listbox",matchReferenceWidth:!1,onDismiss:p,referenceRef:v,returnFocus:!1,visible:c,children:e.jsx(O,{role:"list",data:b,style:[m.dropdown,{width:u}],contentContainerStyle:m.content,keyExtractor:(y,f)=>`filter-item-${f}`,renderItem:({item:y})=>{const f=E(y).with({checked:P.any},({checked:j})=>j).with({value:P.any},({value:j})=>s.has(j)).exhaustive(),k=E(y).with({checked:P.any},({checked:j})=>()=>{i(j===!0?void 0:t.map(w=>w.value))}).with({value:P.any},({value:j})=>()=>{const w=new Set([...s]);f===!0?w.delete(j):w.add(j),w.size===0?i(void 0):i([...w])}).exhaustive();return e.jsxs(A,{role:"radio","aria-checked":f,style:({hovered:j})=>[m.radio,j&&m.itemHovered],onPress:k,children:[e.jsx(ie,{value:f}),e.jsx(D,{width:12}),e.jsx(M,{style:m.itemLabel,children:y.label})]})}})})]})}function fe({label:n,initialValue:t,noValueText:u,cancelText:o,submitText:a,dateFormat:i,isSelectable:x,validate:r,onValueChange:v,onPressRemove:c,autoOpen:p=!1}){const l=h.useRef(null),[s,{close:d,toggle:g}]=C(p),b=h.useMemo(()=>H(t)?q(t).format(i):"",[t,i]);return e.jsxs(F,{style:m.container,children:[e.jsx(V,{label:n,onPress:g,ref:l,onPressRemove:c,isActive:s,value:H(t)?q(t).format(i):u}),e.jsx(ne,{visible:s,format:i,firstWeekDay:"monday",label:n,cancelLabel:o,confirmLabel:a,value:b,isSelectable:x,validate:r,onChange:y=>{const f=q(y,i,!0).toJSON();v(f)},onDismiss:d})]})}function he({label:n,initialValue:t="",noValueText:u,autoOpen:o=!1,placeholder:a,validate:i,onValueChange:x,onPressRemove:r}){const[v,{close:c,toggle:p}]=C(o),l=h.useRef(null),s=h.useCallback((k,j)=>{const w=k.trim(),W=(i==null?void 0:i(w))??void 0,z=ee(W)?w:void 0;return j||x(z),{inputValue:k,validValue:z,error:j?void 0:W}},[i,x]),[{inputValue:d,validValue:g,error:b},y]=h.useState(()=>s(t,!0)),f=h.useCallback(k=>y(s(k,!1)),[s]);return e.jsxs(F,{style:m.container,children:[e.jsx(V,{label:n,onPress:p,ref:l,onPressRemove:r,isActive:v,value:g??u}),e.jsx(L,{role:"listbox",matchReferenceWidth:!1,onDismiss:c,referenceRef:l,returnFocus:!1,visible:v,children:e.jsx(F,{style:[m.dropdown,m.inputContent],children:e.jsx(ae,{label:n,render:k=>e.jsx(ce,{id:k,value:d,error:b,style:m.input,placeholder:a,onChangeText:f})})})})]})}function xe({children:n,onAdd:t,onPressRemove:u}){return h.useEffect(t,[]),e.jsx(N,{color:"current",onPressRemove:u,children:n})}const I=(n,t,u)=>t[u],U=({filters:n,openedFilters:t,definition:u,onChangeOpened:o,onChangeFilters:a})=>{const i=oe(t),x=t.length>i.length?t[t.length-1]:void 0;return t.length===0?null:e.jsx(de,{direction:"row",wrap:"wrap",children:t.map(r=>{const v=u[r];return typeof r!="string"||v==null?null:e.jsx(F,{children:E(v).with({type:"radio"},({type:c,label:p,items:l,width:s})=>e.jsx(me,{label:p,items:l,width:s,autoOpen:x===r,onPressRemove:()=>{a({...n,[r]:void 0}),o(t.filter(d=>d!==r))},value:I(c,n,r),onValueChange:d=>a({...n,[r]:d})})).with({type:"checkbox"},({type:c,label:p,items:l,width:s,checkAllLabel:d})=>e.jsx(pe,{label:p,items:l,width:s,checkAllLabel:d,autoOpen:x===r,value:I(c,n,r),onValueChange:g=>a({...n,[r]:g}),onPressRemove:()=>{a({...n,[r]:void 0}),o(t.filter(g=>g!==r))}})).with({type:"date"},({type:c,label:p,noValueText:l,cancelText:s,submitText:d,dateFormat:g,isSelectable:b,validate:y})=>e.jsx(fe,{label:p,noValueText:l,cancelText:s,submitText:d,dateFormat:g,autoOpen:x===r,isSelectable:b?f=>b(f,n):void 0,validate:y?f=>y(f,n):void 0,initialValue:I(c,n,r),onValueChange:f=>a({...n,[r]:f}),onPressRemove:()=>{a({...n,[r]:void 0}),o(t.filter(f=>f!==r))}})).with({type:"input"},({type:c,label:p,placeholder:l,noValueText:s,submitText:d,validate:g})=>e.jsx(he,{label:p,placeholder:l,noValueText:s,submitText:d,autoOpen:x===r,validate:g,initialValue:I(c,n,r),onValueChange:b=>a({...n,[r]:b}),onPressRemove:()=>{a({...n,[r]:void 0}),o(t.filter(b=>b!==r))}})).with({type:"boolean"},({label:c})=>e.jsx(xe,{onAdd:()=>{a({...n,[r]:!0})},onPressRemove:()=>{a({...n,[r]:void 0}),o(t.filter(p=>p!==r))},children:c})).exhaustive()},r)})})};U.__docgenInfo={description:"",methods:[],displayName:"FiltersStack",props:{definition:{required:!0,tsType:{name:"Definition"},description:""},filters:{required:!0,tsType:{name:"State"},description:""},openedFilters:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Definition)[]"},description:""},onChangeOpened:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: (keyof Definition)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Definition)[]"},name:"value"}],return:{name:"void"}}},description:""},onChangeFilters:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: State) => void",signature:{arguments:[{type:{name:"State"},name:"value"}],return:{name:"void"}}},description:""}}};const ve={type:"radio",label:"Mode",items:[{label:"QES",value:"QES"},{label:"Expert",value:"Expert"}]},ye={type:"checkbox",label:"Status",checkAllLabel:"All",items:[{label:"Accepted",value:"Accepted"},{label:"Canceled",value:"Canceled"},{label:"Failed",value:"Failed"},{label:"Expired",value:"Expired"},{label:"CustomerRefused",value:"CustomerRefused"}]},ge={type:"date",label:"Start Date",cancelText:"Cancel",submitText:"Save",noValueText:"None",dateFormat:"DD/MM/YYYY"},je={type:"input",label:"Resource ID",noValueText:"None",submitText:"Save",placeholder:"Placeholder...",validate:n=>{if(n.length<3)return"Not long enough"}},be={mode:ve,status:ye,startDate:ge,resourceId:je},we=[{name:"mode",label:"Mode"},{name:"status",label:"Status"},{name:"startDate",label:"Start date"},{name:"resourceId",label:"Ressource ID"}],at={title:"Forms/Filter",component:_},R=()=>{const[n,t]=h.useState([]),[u,o]=h.useState({mode:void 0,status:void 0,resourceId:void 0,startDate:void 0});return e.jsx(ue,{title:"Filter",children:e.jsx(te,{variant:"live",children:e.jsxs(F,{children:[e.jsx(_,{filters:u,label:"Choose filters",title:"Filters",onAddFilter:a=>t(i=>[...i,a]),availableFilters:we,openFilters:n}),e.jsx(D,{height:8}),e.jsx(U,{definition:be,filters:u,openedFilters:n,onChangeFilters:o,onChangeOpened:t})]})})})};R.__docgenInfo={description:"",methods:[],displayName:"All"};var $,Y,Q;R.parameters={...R.parameters,docs:{...($=R.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [openFilters, setOpenFilters] = useState<(keyof State)[]>([]);
  const [filters, setFilters] = useState<State>({
    mode: undefined,
    status: undefined,
    resourceId: undefined,
    startDate: undefined
  });
  return <StoryBlock title="Filter">
      <WithCurrentColor variant="live">
        <View>
          <FilterChooser filters={filters} label="Choose filters" title="Filters" onAddFilter={filter => setOpenFilters(filters => [...filters, filter])} availableFilters={availableFilters} openFilters={openFilters} />

          <Space height={8} />

          <FiltersStack definition={definition} filters={filters} openedFilters={openFilters} onChangeFilters={setFilters} onChangeOpened={setOpenFilters} />
        </View>
      </WithCurrentColor>
    </StoryBlock>;
}`,...(Q=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};const lt=["All"];export{R as All,lt as __namedExportsOrder,at as default};
//# sourceMappingURL=Filter.stories-C7v4JWo3.js.map
