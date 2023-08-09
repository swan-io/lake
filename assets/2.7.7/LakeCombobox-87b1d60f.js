import{S as w,f as x,c as s,g as se,o as F,a as m,V as f,j as r,I as S,b as de,T as _}from"./Space-ce802739.js";import{r as l}from"./index-b9a8c83f.js";import{t as ce}from"./typography-6ad07e3d.js";import{u as ve}from"./useMergeRefs-41a8c6fd.js";import{g as j}from"./array-a4405b3e.js";import{B as fe}from"./Box-5f1640c8.js";import{L as pe}from"./LakeTextInput-2b8898c0.js";import{L as P}from"./LoadingView-1b4a3fa1.js";import{P as me}from"./Popover-35810e3f.js";import{b as ge}from"./_StoriesComponents-f14574fa.js";import{F as ye}from"./index-26bee075.js";import{P as ke}from"./index-0cdfd6d7.js";const I=64,he=3.5,a=w.create({list:{marginVertical:x[8]},flatList:{scrollBehavior:"smooth"},item:{flexShrink:1,flexGrow:1,justifyContent:"center",paddingHorizontal:x[24],paddingVertical:0,transitionProperty:"background-color",transitionDuration:"200ms",outlineStyle:"none",justifyContents:"center"},hoveredItem:{backgroundColor:s.gray[0]},focusedItem:{backgroundColor:s.gray[0]},pressedItem:{backgroundColor:s.gray[100]},itemText:{...ce.bodyLarge,userSelect:"none"},loader:{padding:x[24]},listContainer:{flexGrow:1,flexShrink:1},loaderAdditional:{...w.absoluteFillObject,alignItems:"center",justifyContent:"center"},loaderAdditionalUnderlay:{...w.absoluteFillObject,backgroundColor:se.accented,opacity:.8},emptyList:{height:136},emptyListText:{color:s.gray.primary},input:{width:1,flexGrow:1}}),be=d=>["string","number"].includes(typeof d),we=(d,o)=>({length:I,offset:I*o,index:o}),xe=({inputRef:d,value:o,items:C,itemHeight:L=I,nbItemsDisplayed:O=he,ListFooterComponent:H,onChange:B,onValueChange:E,onSelectItem:G,renderItem:U,keyExtractor:K,icon:M,placeholder:z,disabled:W=!1,emptyResultText:Y,readOnly:J,id:Q,error:X,hideErrors:Z},$)=>{const g=l.useRef(null),ee=ve(g,d),le=l.useRef(null),y=l.useRef(null),c=l.useRef(void 0),[ae,T]=l.useState(!1),[k,i]=l.useState("closed"),re=l.useCallback(()=>i("opened"),[]),ue=l.useCallback(()=>i("closed"),[]),V=l.useCallback(()=>i("dismissed"),[]);l.useImperativeHandle($,()=>({open:re,close:ue}));const R=l.useId(),te=l.useCallback(e=>{var u;if(e.nativeEvent.key==="ArrowDown"){const t=y.current;t!=null&&((u=j(t,!1)[0])==null||u.focus(),e.preventDefault())}},[]),ne=l.useCallback(e=>{var u,t;if(e.nativeEvent.key==="ArrowDown"||e.nativeEvent.key==="ArrowUp"){const n=y.current;if(n!=null){const p=n,h=e.currentTarget,v=j(p,!1),A=v.indexOf(h),ie=e.nativeEvent.key==="ArrowDown"?1:-1;if(A===-1)return;const b=A+ie;e.preventDefault(),b===-1?(u=g.current)==null||u.focus():(t=v[b===v.length?0:b])==null||t.focus()}}},[]),oe=l.useCallback(e=>{E(e),i(F(e)?"opened":"closed")},[E]),q=l.useCallback(()=>{F(o)&&(window.clearTimeout(c.current),c.current=window.setTimeout(()=>{i(e=>e==="closed"?"opened":e)},100))},[o]),D=l.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>{i(e=>e==="opened"?"closed":e)},100)},[]);return m(f,{children:[r(pe,{containerRef:ee,style:a.input,ariaExpanded:k==="opened",ariaControls:k==="opened"?R:"",enterKeyHint:"search",icon:M,role:"combobox",placeholder:z,value:o,disabled:W,error:X,hideErrors:Z,onChangeText:oe,onChange:B,onFocus:q,onBlur:D,onKeyPress:te,id:Q,readOnly:J}),r(me,{id:R,role:"listbox",matchReferenceWidth:!0,onDismiss:V,referenceRef:g,autoFocus:!1,returnFocus:!0,visible:k==="opened"&&!C.isNotAsked(),underlay:!1,forcedMode:"Dropdown",children:r(f,{style:[a.list,{maxHeight:L*O}],children:C.match({NotAsked:()=>null,Loading:()=>r(P,{style:a.loader}),Done:e=>e.match({Error:u=>r(S,{name:"error-circle-regular",size:22,color:s.negative[500]}),Ok:u=>m(f,{ref:y,style:a.listContainer,children:[u.length===0?m(fe,{justifyContent:"center",alignItems:"center",style:a.emptyList,children:[r(S,{name:"clipboard-search-regular",size:24,color:s.gray.primary}),r(de,{height:8}),r(_,{style:a.emptyListText,children:Y})]}):r(ye,{ref:le,keyExtractor:K,getItemLayout:we,role:"list",data:u,style:a.flatList,ItemSeparatorComponent:ge,renderItem:({item:t})=>{const n=U(t);return r(ke,{onFocus:q,onBlur:D,role:"listitem",onKeyDown:ne,style:({hovered:p,pressed:h,focused:v})=>[a.item,p&&a.hoveredItem,v&&a.focusedItem,h&&a.pressedItem,{height:L}],onPress:()=>{window.clearTimeout(c.current),T(!0),Promise.resolve(G(t)).finally(()=>{T(!1),V()})},children:be(n)?r(_,{numberOfLines:1,style:a.itemText,children:n}):n})}}),H,ae?m(f,{style:a.loaderAdditional,children:[r(f,{style:a.loaderAdditionalUnderlay}),r(P,{})]}):null]})})})})})]})},N=l.forwardRef(xe);try{N.displayName="LakeCombobox",N.__docgenInfo={description:"",displayName:"LakeCombobox",props:{inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<unknown>"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AsyncData<Result<I[], unknown>>"}},itemHeight:{defaultValue:{value:"64"},description:"",name:"itemHeight",required:!1,type:{name:"number"}},nbItemsDisplayed:{defaultValue:{value:"3.5"},description:"",name:"nbItemsDisplayed",required:!1,type:{name:"number"}},ListFooterComponent:{defaultValue:null,description:"",name:"ListFooterComponent",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}},onSelectItem:{defaultValue:null,description:"",name:"onSelectItem",required:!0,type:{name:"(value: I) => void | Promise<unknown>"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"(item: I) => ReactNode"}},keyExtractor:{defaultValue:null,description:"",name:"keyExtractor",required:!0,type:{name:"(item: I) => string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"lake-building-bank"'},{value:'"lake-calendar-arrow-swap"'},{value:'"lake-card"'},{value:'"lake-card-filled"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"check-filled"'},{value:'"check-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-regular"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},emptyResultText:{defaultValue:null,description:"",name:"emptyResultText",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},hideErrors:{defaultValue:null,description:"",name:"hideErrors",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<LakeComboboxRef>"}}}}}catch{}export{N as L};
//# sourceMappingURL=LakeCombobox-87b1d60f.js.map
