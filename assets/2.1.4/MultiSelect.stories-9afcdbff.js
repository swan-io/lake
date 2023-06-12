import{S as O,a as e,T as w,b as P,t as I,e as Y,c as o,r as Se,h as X,i as F,j as h,k as ve,F as J,V as K}from"./Space-725d871d.js";import{r as s}from"./index-ebeaab24.js";import{b as xe,o as Ce,v as Q}from"./Boxed-dafb0729.js";import{u as Ie}from"./useDisclosure-f840d913.js";import{a as Pe}from"./array-b3630b94.js";import{B as T}from"./index-fe940b48.js";import{I as k}from"./Icon-b2372a41.js";import{c as we}from"./colors-298625c7.js";import{t as Z}from"./typography-6ad07e3d.js";import{P as Me}from"./Popover-9b193b1e.js";import{b as Ve,a as Ee}from"./Pressable-a70c7aa5.js";import{T as ee}from"./Tag-17454995.js";import{P as G}from"./index-12c9f140.js";import{S as Te}from"./index-16a69f80.js";import{F as ke}from"./index-4a319941.js";import{S as se,a as S}from"./_StoriesComponents-f9561a55.js";import"./extends-98964cd2.js";import"./Svg-8d9692ee.js";import"./useResponsive-0fb619ea.js";import"./BottomPanel-24027103.js";import"./commonStyles-d52fedae.js";import"./useBodyClassName-9a26f8eb.js";import"./math-6b82bd93.js";import"./FocusTrap-618447d5.js";import"./LoadingView-a68ebd98.js";import"./index-d6079894.js";import"./Portal-69b915a1.js";import"./index-9c09ad76.js";import"./WithCurrentColor-89cc9bad.js";import"./TransitionView-5812ef62.js";import"./index-5cdc7876.js";import"./useMergeRefs-57d096ed.js";const Le=(r,i)=>{let n=0;const p=[];for(;n<r.length;){const d=r.indexOf(i,n);if(d===-1)return p.push(r.slice(n)),p;if(d>n){const u=d+i.length;p.push(r.slice(n,d),r.slice(d,u)),n=u;continue}if(d===n){const u=d+i.length;p.push(r.slice(d,u)),n=u;continue}return p}return p},_e=O.create({base:{...Z.bodySmall,color:we.red[100],lineHeight:Z.lineHeights.input,minHeight:32,paddingHorizontal:3,paddingVertical:4}}),B=({message:r="",style:i})=>r!==""?e(w,{style:[_e.base,i],children:r}):e(P,{height:32});try{B.displayName="InputError",B.__docgenInfo={description:"",displayName:"InputError",props:{message:{defaultValue:{value:""},description:"",name:"message",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<TextStyle>"}}}}}catch{}const He=120,Ne=32,Re=10.5,a=O.create({base:{...I.regular,backgroundColor:Y.accented,borderColor:o.gray[100],borderRadius:Se[6],borderWidth:1,cursor:"default",overflow:"hidden",transitionDuration:"150ms",transitionProperty:"border-color, box-shadow"},errored:{borderColor:o.negative[500]},tag:{marginRight:4,marginVertical:2},hovered:{boxShadow:X.tile},focused:{borderColor:o.gray[500],boxShadow:X.tile,outlineStyle:"none"},disabled:{backgroundColor:o.gray[50],borderColor:o.gray[100],cursor:"not-allowed"},actions:{marginVertical:"auto",position:"absolute",bottom:0,top:0,right:20},placeholder:{...I.regular,color:o.gray[300],userSelect:"none"},list:{marginVertical:4,maxHeight:Ne*Re,minHeight:224},filterContainer:{flexGrow:1,flexShrink:1,margin:16},filterInput:{...I.regular,backgroundColor:Y.accented,borderColor:o.gray[100],borderRadius:4,borderWidth:1,flexGrow:1,flexShrink:1,height:40,outlineStyle:"none",paddingHorizontal:12,paddingLeft:40,placeholderTextColor:o.gray[300]},filterfocused:{borderColor:o.gray[200]},searchIcon:{position:"absolute",left:14},tagsList:{flexWrap:"wrap",maxHeight:He,minHeight:40,overflowY:"auto",paddingHorizontal:16,paddingRight:60,paddingVertical:8},groupTitleBase:{alignItems:"center",flexDirection:"row",flexGrow:1,flexShrink:1,justifyContent:"space-between",paddingHorizontal:16,paddingVertical:12,transitionDuration:"200ms",transitionProperty:"background-color"},groupTitle:{...I.semibold,userSelect:"none"},line:{...I.regular,paddingHorizontal:16,paddingVertical:8,transitionDuration:"200ms",transitionProperty:"background-color",userSelect:"none"},lineInGroup:{paddingLeft:24},emptyList:{height:136},emptyListText:{color:o.gray.primary}}),H=s.memo(({color:r="gray",disabled:i=!1,emptyResultText:n,enableGroups:p=!0,filterPlaceholder:d,items:u,onValueChange:m,placeholder:y,renderTagGroup:M,error:V,style:x,values:c,id:C})=>{const[f,z]=s.useState(""),E=s.useRef(!1),N=s.useRef(null),W=s.useRef(null),ue=s.useRef(null),[b,{open:ce,close:de}]=Ie(!1),pe=o[r][50],me=o[r][100];s.useEffect(()=>{b||z("")},[b]),s.useEffect(()=>{var t,l;if(E.current){const g=(t=N.current)==null?void 0:t.scrollHeight;(l=N.current)==null||l.scrollTo({top:g})}E.current=!1},[c]);const j=t=>{E.current=!0,m([...c,t.value])},fe=t=>{m(c.filter(l=>l!==t.value))},ge=()=>{m([])},he=t=>{E.current=!0;const l=t.map(q=>q.value),g=[...new Set([...c,...l])];m(g)},$=s.useMemo(()=>u.reduce((t,l)=>(t[l.value]=l,t),{}),[u]),R=s.useMemo(()=>c.map(t=>$[t]).filter(F),[c,$]),D=s.useMemo(()=>{const t=u.filter(g=>!c.includes(g.value)),l=f.trim().toLowerCase();return l===""?t:t.filter(({label:g})=>g.toLowerCase().includes(l))},[f,u,c]),ye=s.useMemo(()=>xe.filterMap(Ce.entries(Pe(D,({group:t})=>t)),([t,l])=>l===void 0?Q.None():Q.Some({title:t,data:l})),[D]),A=s.useMemo(()=>h(T,{direction:"row",alignItems:"center",style:a.filterContainer,children:[e(Ve,{autoComplete:"off",inputMode:"search",multiline:!1,rows:1,onChangeText:t=>z(t),placeholder:d,value:f,style:({focused:t})=>[a.filterInput,t&&a.filterfocused]}),e(k,{name:"search-filled",color:o[r].primary,size:20,style:a.searchIcon})]}),[f,d,r]),U=s.useMemo(()=>h(T,{justifyContent:"center",alignItems:"center",style:a.emptyList,children:[e(k,{name:"clipboard-search-regular",size:24,color:o.gray.primary}),ve(n)&&h(J,{children:[e(P,{height:8}),e(w,{style:a.emptyListText,children:n})]})]}),[n]);return h(K,{style:x,children:[h(G,{id:C,ref:W,"aria-haspopup":"listbox",role:"button","aria-expanded":b,disabled:i,onPress:ce,style:({hovered:t,focused:l})=>[a.base,t&&a.hovered,(l||b)&&a.focused,i&&a.disabled,F(V)&&a.errored],children:[e(T,{ref:N,alignItems:"center",direction:"row",style:a.tagsList,children:R.length>0?R.map(t=>e(ee,{color:r,onPressRemove:i?void 0:()=>fe(t),style:a.tag,children:t.label},t.value)):y!==""?e(w,{role:"label",numberOfLines:1,style:a.placeholder,children:y}):null}),h(T,{direction:"row",alignItems:"center",style:a.actions,children:[R.length>=1&&!i&&h(J,{children:[e(G,{role:"button",onPress:ge,children:e(k,{name:"dismiss-filled",color:o.gray.primary,size:15})}),e(P,{width:8})]}),e(k,{color:o.gray.primary,name:b?"chevron-up-filled":"chevron-down-filled",size:20})]})]}),e(Me,{role:"listbox",matchReferenceWidth:!0,onDismiss:de,referenceRef:W,returnFocus:!0,visible:b,children:e(K,{style:a.list,children:p?e(Te,{role:"listbox","aria-multiselectable":!0,keyExtractor:(t,l)=>`group-field-${t.value}-${l}`,extraData:f,ListHeaderComponent:A,ListEmptyComponent:U,ListFooterComponent:e(P,{height:16}),sections:ye,renderSectionHeader:({section:{title:t,data:l}})=>h(G,{role:"listitem",onPress:()=>he(l),style:({hovered:g,pressed:q,focused:be})=>[a.groupTitleBase,(g||be)&&{backgroundColor:pe},q&&{backgroundColor:me}],children:[e(w,{numberOfLines:1,style:a.groupTitle,children:t}),F(M)&&e(ee,{color:r,children:M(l)})]}),renderItem:({item:t})=>e(te,{color:r,filter:f,item:t,handleSelectItem:j,style:a.lineInGroup})}):e(ke,{ref:ue,role:"list",data:D,extraData:f,keyExtractor:t=>`field-${t.value}`,ListHeaderComponent:A,ListEmptyComponent:U,ListFooterComponent:e(P,{height:8}),renderItem:({item:t})=>e(te,{color:r,filter:f,item:t,handleSelectItem:j})})})}),e(B,{message:V})]})}),te=({item:r,color:i,filter:n,handleSelectItem:p,style:d})=>{const{label:u,disabled:m=!1}=r,y=n.trim().toLowerCase(),M=o[i][50],V=o[i][100],x=s.useMemo(()=>m||y===""?u:Le(u,y),[u,m,y]);return e(Ee,{role:"listitem",disabled:m,numberOfLines:1,onPress:()=>p(r),style:({hovered:c,pressed:C})=>[a.line,d,c&&{backgroundColor:M},C&&{backgroundColor:V},m&&{backgroundColor:o.gray[50],color:o.gray[100]}],children:typeof x=="string"?x:x.map((c,C)=>c.toLowerCase()===y?e(w,{style:{color:i},children:c},C):c)})};try{H.displayName="MultiSelect",H.__docgenInfo={description:"",displayName:"MultiSelect",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},emptyResultText:{defaultValue:null,description:"",name:"emptyResultText",required:!1,type:{name:"string"}},enableGroups:{defaultValue:null,description:"",name:"enableGroups",required:!1,type:{name:"boolean"}},filterPlaceholder:{defaultValue:null,description:"",name:"filterPlaceholder",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MultiSelectItem[]"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(values: string[]) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},renderTagGroup:{defaultValue:null,description:"",name:"renderTagGroup",required:!1,type:{name:"((items: readonly MultiSelectItem[]) => string)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"string[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const De=O.create({select:{maxWidth:400}}),ht={title:"Forms/MultiSelect",component:H},qe=[{label:"Camille",value:"camille",group:"C"},{label:"Charlotte",value:"charlotte",group:"C"},{label:"Francis",value:"francis",group:"F"},{label:"Émilie",value:"emilie",group:"E"},{label:"François",value:"francois",group:"F"},{label:"Laura",value:"laura",group:"L"},{label:"Marie-Anne",value:"marie_anne",group:"M"},{label:"Natasha",value:"natasha",group:"N",disabled:!0},{label:"Nicolas",value:"nicolas",group:"N"},{label:"Pierre",value:"pierre",group:"P"}],v=({initialValues:r=[],...i})=>{const[n,p]=s.useState(r);return e(H,{placeholder:"Select people...",filterPlaceholder:"Search...",emptyResultText:"No result",values:n,items:qe,onValueChange:p,style:De.select,...i})},L=()=>h(se,{title:"MultiSelect variations",children:[e(S,{title:"Default",children:e(v,{})}),e(S,{title:"Without groups",children:e(v,{enableGroups:!1})}),e(S,{title:"Disabled",children:e(v,{disabled:!0})}),e(S,{title:"Disabled with a value",children:e(v,{disabled:!0,initialValues:["charlotte"]})}),e(S,{title:"Without any option",children:e(v,{items:[]})})]}),_=()=>e(se,{title:"MultiSelect colors",children:Object.keys(o).map(r=>e(S,{title:r,children:e(v,{color:r})},r))});var re,le,oe;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <StoryBlock title="MultiSelect variations">
      <StoryPart title="Default">
        <EditableMultiSelect />
      </StoryPart>

      <StoryPart title="Without groups">
        <EditableMultiSelect enableGroups={false} />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableMultiSelect disabled={true} />
      </StoryPart>

      <StoryPart title="Disabled with a value">
        <EditableMultiSelect disabled={true} initialValues={["charlotte"]} />
      </StoryPart>

      <StoryPart title="Without any option">
        <EditableMultiSelect items={[]} />
      </StoryPart>
    </StoryBlock>;
}`,...(oe=(le=L.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ae,ie,ne;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <StoryBlock title="MultiSelect colors">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableMultiSelect color={(color as ColorVariants)} />
        </StoryPart>)}
    </StoryBlock>;
}`,...(ne=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};const yt=["Variations","Colors"];export{_ as Colors,L as Variations,yt as __namedExportsOrder,ht as default};
//# sourceMappingURL=MultiSelect.stories-9afcdbff.js.map
