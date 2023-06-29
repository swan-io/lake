import{S as I,d as _,c as v,e as de,j as w,V as b,a as e,b as ce,T as G,L as J}from"./Space-a702eced.js";import{A as k,P as me}from"./Boxed-dafb0729.js";import{r as l}from"./index-ebeaab24.js";import{B as Q}from"./index-ac9179ac.js";import{t as ve}from"./typography-6ad07e3d.js";import{u as pe}from"./useDisclosure-f840d913.js";import{a as fe}from"./useMergeRefs-af5bcba9.js";import{g as K}from"./array-b3630b94.js";import{I as z}from"./Icon-deaf2458.js";import{L as ge}from"./LakeTextInput-9cf6a185.js";import{L as U}from"./LoadingView-9a4e1c04.js";import{P as ye}from"./Popover-57bbb2c0.js";import{F as he}from"./index-7b4c282e.js";import{P as be}from"./index-a55ccc10.js";import{S as ke,a as c}from"./_StoriesComponents-97d37cc1.js";import"./extends-98964cd2.js";import"./colors-298625c7.js";import"./Svg-fe3a1521.js";import"./commonStyles-d52fedae.js";import"./Fill-edc8a5e3.js";import"./index-bc6e6125.js";import"./useResponsive-eb73f379.js";import"./BottomPanel-2052d4f2.js";import"./useBodyClassName-9a26f8eb.js";import"./math-43552fe0.js";import"./FocusTrap-b2d8485b.js";import"./Portal-2164713e.js";import"./index-9c09ad76.js";import"./WithCurrentColor-083d77eb.js";import"./TransitionView-4539ece9.js";import"./index-81df9716.js";const E=64,we=3.5,r=I.create({list:{maxHeight:E*we,marginVertical:_[8]},flatList:{scrollBehavior:"smooth"},item:{flexShrink:1,flexGrow:1,height:E,justifyContent:"center",paddingHorizontal:_[24],paddingVertical:0,transitionProperty:"background-color",transitionDuration:"200ms",outlineStyle:"none",borderColor:v.gray[100],borderStyle:"solid",borderBottomWidth:1,justifyContents:"center"},hoveredItem:{backgroundColor:v.gray[0]},focusedItem:{backgroundColor:v.gray[0]},pressedItem:{backgroundColor:v.gray[100]},itemText:{...ve.bodyLarge,userSelect:"none"},loader:{padding:_[24]},listContainer:{flexGrow:1,flexShrink:1},loaderAdditional:{...I.absoluteFillObject,alignItems:"center",justifyContent:"center"},loaderAdditionalUnderlay:{...I.absoluteFillObject,backgroundColor:de.accented,opacity:.8},emptyList:{height:136},emptyListText:{color:v.gray.primary},input:{width:1,flexGrow:1}}),xe=o=>["string","number"].includes(typeof o),Ce=(o,u)=>({length:E,offset:E*u,index:u}),Se=({inputRef:o,value:u,items:n,ListFooterComponent:x,onValueChange:p,onSelectItem:f,renderItem:P,keyExtractor:V,icon:a,placeholder:T,disabled:X=!1,emptyResultText:Z,readOnly:ee,id:le,error:re},ae)=>{const R=l.useRef(null),te=fe(R,o),oe=l.useRef(null),F=l.useRef(null),g=l.useRef(void 0),[A,{open:q,close:y}]=pe(!1),[ue,B]=l.useState(!1);l.useImperativeHandle(ae,()=>({open:q,close:y}));const O=l.useId(),ne=l.useCallback(t=>{var i;if(t.nativeEvent.key==="ArrowDown"){const s=F.current;s!=null&&((i=K(s,!1)[0])==null||i.focus(),t.preventDefault())}},[]),ie=l.useCallback(t=>{var i,s;if(t.nativeEvent.key==="ArrowDown"||t.nativeEvent.key==="ArrowUp"){const d=F.current;if(d!=null){const C=d,j=t.currentTarget,h=K(C,!1),H=h.indexOf(j),se=t.nativeEvent.key==="ArrowDown"?1:-1;if(H===-1)return;const D=H+se;t.preventDefault(),D===-1?(i=R.current)==null||i.focus():(s=h[D===h.length?0:D])==null||s.focus()}}},[]),N=l.useCallback(()=>{window.clearTimeout(g.current),g.current=window.setTimeout(()=>{q()},100)},[q]),W=l.useCallback(()=>{window.clearTimeout(g.current),g.current=window.setTimeout(()=>{y()},100)},[y]);return w(b,{children:[e(ge,{ref:te,style:r.input,ariaExpanded:A,ariaControls:A?O:"",enterKeyHint:"search",icon:a,role:"combobox",placeholder:T,value:u,disabled:X,error:re,onChangeText:p,onFocus:N,onBlur:W,onKeyPress:ne,id:le,readOnly:ee}),e(ye,{id:O,role:"listbox",matchReferenceWidth:!0,onDismiss:y,referenceRef:R,autoFocus:!0,returnFocus:!1,visible:A&&!n.isNotAsked(),underlay:!1,forcedMode:"Dropdown",children:e(b,{style:r.list,children:n.match({NotAsked:()=>null,Loading:()=>e(U,{style:r.loader}),Done:t=>t.match({Error:i=>e(z,{name:"error-circle-regular",size:22,color:v.negative[500]}),Ok:i=>w(b,{ref:F,style:r.listContainer,children:[i.length===0?w(Q,{justifyContent:"center",alignItems:"center",style:r.emptyList,children:[e(z,{name:"clipboard-search-regular",size:24,color:v.gray.primary}),e(ce,{height:8}),e(G,{style:r.emptyListText,children:Z})]}):e(he,{ref:oe,keyExtractor:V,getItemLayout:Ce,role:"list",data:i,style:r.flatList,renderItem:({item:s})=>{const d=P(s);return e(be,{onFocus:N,onBlur:W,role:"listitem",onKeyDown:ie,style:({hovered:C,pressed:j,focused:h})=>[r.item,C&&r.hoveredItem,h&&r.focusedItem,j&&r.pressedItem],onPress:()=>{window.clearTimeout(g.current),B(!0),Promise.resolve(f(s)).finally(()=>{B(!1),y()})},children:xe(d)?e(G,{numberOfLines:1,style:r.itemText,children:d}):d})}}),x,ue?w(b,{style:r.loaderAdditional,children:[e(b,{style:r.loaderAdditionalUnderlay}),e(U,{})]}):null]})})})})})]})},L=l.forwardRef(Se);try{L.displayName="LakeCombobox",L.__docgenInfo={description:"",displayName:"LakeCombobox",props:{inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<unknown>"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AsyncData<Result<I[], unknown>>"}},ListFooterComponent:{defaultValue:null,description:"",name:"ListFooterComponent",required:!1,type:{name:"ReactNode"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}},onSelectItem:{defaultValue:null,description:"",name:"onSelectItem",required:!0,type:{name:"(value: I) => void | Promise<unknown>"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"(item: I) => ReactNode"}},keyExtractor:{defaultValue:null,description:"",name:"keyExtractor",required:!0,type:{name:"(item: I) => string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"lake-calendar-arrow-swap"'},{value:'"lake-card"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-regular"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},emptyResultText:{defaultValue:null,description:"",name:"emptyResultText",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<LakeComboboxRef>"}}}}}catch{}const Ie=I.create({footer:{paddingHorizontal:12}}),tl={title:"Forms/Combobox",component:L},Ee=o=>{const u=fetch(`https://dummyjson.com/products/search?limit=10&q=${o}`).then(n=>n.json()).then(n=>n.products);return me.fromPromise(u)},m=o=>{const[u,n]=l.useState(null),[x,p]=l.useState(()=>k.NotAsked()),[f,P]=l.useState(""),V=u?u.title:f;return l.useEffect(()=>{if(!f){p(k.NotAsked());return}p(k.Loading());const a=Ee(f);return a.onResolve(T=>{p(k.Done(T))}),()=>{a.cancel()}},[f]),e(L,{value:V,items:x,onValueChange:a=>{n(null),P(a)},onSelectItem:a=>{p(k.NotAsked()),n(a)},keyExtractor:a=>a.id.toString(),renderItem:a=>e(J,{children:a.title}),emptyResultText:"No result",...o})},S=()=>w(ke,{title:"Combobox",children:[e(c,{title:"By default",children:e(m,{})}),e(c,{title:"Is disabled",children:e(m,{disabled:!0})}),e(c,{title:"Is readOnly",children:e(m,{readOnly:!0})}),e(c,{title:"With icon",children:e(m,{icon:"add-circle-regular"})}),e(c,{title:"With placeholder",children:e(m,{placeholder:"Enter a product"})}),e(c,{title:"With error",children:e(m,{placeholder:"An error occurred"})}),e(c,{title:"With Footer Component",children:e(m,{ListFooterComponent:e(Q,{direction:"row",justifyContent:"end",style:Ie.footer,children:e(J,{children:"With footer component"})})})})]});var M,$,Y;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <StoryBlock title="Combobox">
      <StoryPart title="By default">
        <EditableCombobox />
      </StoryPart>

      <StoryPart title="Is disabled">
        <EditableCombobox disabled={true} />
      </StoryPart>

      <StoryPart title="Is readOnly">
        <EditableCombobox readOnly={true} />
      </StoryPart>

      <StoryPart title="With icon">
        <EditableCombobox icon={"add-circle-regular"} />
      </StoryPart>

      <StoryPart title="With placeholder">
        <EditableCombobox placeholder={"Enter a product"} />
      </StoryPart>

      <StoryPart title="With error">
        <EditableCombobox placeholder={"An error occurred"} />
      </StoryPart>

      <StoryPart title="With Footer Component">
        <EditableCombobox ListFooterComponent={<Box direction="row" justifyContent="end" style={styles.footer}>
              <LakeText>With footer component</LakeText>
            </Box>} />
      </StoryPart>
    </StoryBlock>;
}`,...(Y=($=S.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};const ol=["Variations"];export{S as Variations,ol as __namedExportsOrder,tl as default};
//# sourceMappingURL=Combobox.stories-a22eef18.js.map
