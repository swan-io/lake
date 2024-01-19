import{s as w,e as x,c as s,g as ie,z as F,j as m,V as f,a as r,I as S,S as se,T as de,L as ce}from"./Space-UKiLa9-i.js";import{r as e}from"./index-4g5l5LRQ.js";import{u as ve}from"./Pressable-ZB7pLygl.js";import{g as _}from"./a11y-2bSo9Xxj.js";import{B as fe}from"./commonStyles-dcsNUru2.js";import{L as pe}from"./LakeTextInput-at79W9Zy.js";import{L as j}from"./LoadingView-2A9KwNs3.js";import{P as me}from"./Popover-j9yFJRJv.js";import{b as ge}from"./_StoriesComponents-VaLthraj.js";import{F as ke}from"./index-nKqN2hgb.js";import{P as ye}from"./index-w57Xv2k5.js";const I=64,he=3.5,a=w.create({list:{marginVertical:x[8]},flatList:{scrollBehavior:"smooth"},item:{flexShrink:1,flexGrow:1,justifyContent:"center",paddingHorizontal:x[24],paddingVertical:0,transitionProperty:"background-color",transitionDuration:"200ms",outlineStyle:"none",justifyContents:"center"},hoveredItem:{backgroundColor:s.gray[0]},focusedItem:{backgroundColor:s.gray[0]},pressedItem:{backgroundColor:s.gray[100]},itemText:{userSelect:"none"},loader:{padding:x[24]},listContainer:{flexGrow:1,flexShrink:1},loaderAdditional:{...w.absoluteFillObject,alignItems:"center",justifyContent:"center"},loaderAdditionalUnderlay:{...w.absoluteFillObject,backgroundColor:ie.accented,opacity:.8},emptyList:{height:136},emptyListText:{color:s.gray.primary},input:{width:1,flexGrow:1}}),be=d=>["string","number"].includes(typeof d),we=(d,n)=>({length:I,offset:I*n,index:n}),xe=({inputRef:d,value:n,items:C,itemHeight:L=I,nbItemsDisplayed:N=he,ListFooterComponent:O,onChange:H,onValueChange:E,onSelectItem:B,renderItem:G,keyExtractor:K,icon:U,placeholder:z,disabled:M=!1,emptyResultText:W,readOnly:Y,id:J,error:Q,hideErrors:X},Z)=>{const g=e.useRef(null),$=ve(g,d),ee=e.useRef(null),k=e.useRef(null),c=e.useRef(void 0),[le,T]=e.useState(!1),[y,i]=e.useState("closed"),ae=e.useCallback(()=>i("opened"),[]),re=e.useCallback(()=>i("closed"),[]),V=e.useCallback(()=>i("dismissed"),[]);e.useImperativeHandle(Z,()=>({open:ae,close:re}));const q=e.useId(),ue=e.useCallback(l=>{var u;if(l.nativeEvent.key==="ArrowDown"){const t=k.current;t!=null&&((u=_(t,!1)[0])==null||u.focus(),l.preventDefault())}},[]),te=e.useCallback(l=>{var u,t;if(l.nativeEvent.key==="ArrowDown"||l.nativeEvent.key==="ArrowUp"){const o=k.current;if(o!=null){const p=o,h=l.currentTarget,v=_(p,!1),D=v.indexOf(h),ne=l.nativeEvent.key==="ArrowDown"?1:-1;if(D===-1)return;const b=D+ne;l.preventDefault(),b===-1?(u=g.current)==null||u.focus():(t=v[b===v.length?0:b])==null||t.focus()}}},[]),oe=e.useCallback(l=>{E(l),i(F(l)?"opened":"closed")},[E]),R=e.useCallback(()=>{F(n)&&(window.clearTimeout(c.current),c.current=window.setTimeout(()=>{i(l=>l==="closed"?"opened":l)},100))},[n]),A=e.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>{i("dismissed")},100)},[]);return m(f,{children:[r(pe,{containerRef:$,style:a.input,ariaExpanded:y==="opened",ariaControls:y==="opened"?q:"",enterKeyHint:"search",icon:U,role:"combobox",placeholder:z,value:n,disabled:M,error:Q,hideErrors:X,onChangeText:oe,onChange:H,onFocus:R,onBlur:A,onKeyPress:ue,id:J,readOnly:Y}),r(me,{id:q,role:"listbox",matchReferenceWidth:!0,onEscapeKey:V,referenceRef:g,autoFocus:!1,returnFocus:!0,visible:y==="opened"&&!C.isNotAsked(),underlay:!1,forcedMode:"Dropdown",field:!0,children:r(f,{style:[a.list,{maxHeight:L*N}],children:C.match({NotAsked:()=>null,Loading:()=>r(j,{style:a.loader}),Done:l=>l.match({Error:u=>r(S,{name:"error-circle-regular",size:22,color:s.negative[500]}),Ok:u=>m(f,{ref:k,style:a.listContainer,children:[u.length===0?m(fe,{justifyContent:"center",alignItems:"center",style:a.emptyList,children:[r(S,{name:"clipboard-search-regular",size:24,color:s.gray.primary}),r(se,{height:8}),r(de,{style:a.emptyListText,children:W})]}):r(ke,{ref:ee,keyExtractor:K,getItemLayout:we,role:"list",data:u,style:a.flatList,ItemSeparatorComponent:ge,renderItem:({item:t})=>{const o=G(t);return r(ye,{onFocus:R,onBlur:A,role:"listitem",onKeyDown:te,style:({hovered:p,pressed:h,focused:v})=>[a.item,p&&a.hoveredItem,v&&a.focusedItem,h&&a.pressedItem,{height:L}],onPress:()=>{window.clearTimeout(c.current),T(!0),Promise.resolve(B(t)).finally(()=>{T(!1),V()})},children:be(o)?r(ce,{numberOfLines:1,style:a.itemText,children:o}):o})}}),O,le?m(f,{style:a.loaderAdditional,children:[r(f,{style:a.loaderAdditionalUnderlay}),r(j,{})]}):null]})})})})})]})},P=e.forwardRef(xe);try{P.displayName="LakeCombobox",P.__docgenInfo={description:"",displayName:"LakeCombobox",props:{inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<unknown>"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AsyncData<Result<I[], unknown>>"}},itemHeight:{defaultValue:{value:"64"},description:"",name:"itemHeight",required:!1,type:{name:"number"}},nbItemsDisplayed:{defaultValue:{value:"3.5"},description:"",name:"nbItemsDisplayed",required:!1,type:{name:"number"}},ListFooterComponent:{defaultValue:null,description:"",name:"ListFooterComponent",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}},onSelectItem:{defaultValue:null,description:"",name:"onSelectItem",required:!0,type:{name:"(value: I) => void | Promise<unknown>"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"(item: I) => ReactNode"}},keyExtractor:{defaultValue:null,description:"",name:"keyExtractor",required:!0,type:{name:"(item: I) => string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"lake-building-bank"'},{value:'"lake-calendar-arrow-swap"'},{value:'"lake-call"'},{value:'"lake-card"'},{value:'"lake-card-add"'},{value:'"lake-card-filled"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-check"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-compass"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-denied"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-eraser"'},{value:'"lake-error"'},{value:'"lake-face-id"'},{value:'"lake-fingerprint"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-key"'},{value:'"lake-lock-closed"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-person-support"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-shield"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-warning"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-clockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-filled"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"check-filled"'},{value:'"check-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"eye-off-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-regular"'},{value:'"money-filled"'},{value:'"more-horizontal-filled"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"qr-code-regular"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"task-list-square-ltr-filled"'},{value:'"task-list-square-ltr-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},emptyResultText:{defaultValue:null,description:"",name:"emptyResultText",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},hideErrors:{defaultValue:null,description:"",name:"hideErrors",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<LakeComboboxRef>"}}}}}catch{}export{P as L};
//# sourceMappingURL=LakeCombobox-la8qdkaH.js.map
