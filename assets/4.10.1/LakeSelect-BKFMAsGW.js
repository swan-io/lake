import{s as te,c as r,r as b,e as s,l as H,t as N,h as M,j as n,V as A,a,F as h,I as P,S as T,i as c,L as y,p as ne,q as de}from"./Space-D-8LYWdG.js";import{r as v}from"./index-CBqU2yxZ.js";import{c as D,B as E}from"./commonStyles-eL7lPPQ9.js";import{u as se}from"./useDisclosure-CS9t68_Y.js";import{u as ce,P as O}from"./Pressable-T6P0vImJ.js";import{g as ve}from"./a11y-DXvpDVrG.js";import{F as $}from"./Fill-CcdqLXJG.js";import{P as fe}from"./Popover-CTguqiUa.js";import{b as pe}from"./_StoriesComponents-B4nu2aGF.js";import{F as ge}from"./index-RkcIufZq.js";const l=te.create({normal:{backgroundColor:r.gray.contrast,borderColor:r.gray[100],borderRadius:b[6],borderWidth:1,justifyContent:"center",minWidth:100,paddingHorizontal:s[16],height:40},borderless:{justifyContent:"center",height:40,paddingHorizontal:s[16],borderRadius:b[6],transitionProperty:"background-color",transitionDuration:"150ms"},small:{paddingVertical:5},shadowed:{position:"absolute",opacity:0,left:0,top:0,width:"100%",height:"100%",borderRadius:b[6],boxShadow:H.tile,transitionDuration:"150ms",transitionProperty:"opacity"},hovered:{opacity:1},selectPlaceholder:N.placeholder,selectSmallPlaceholder:N.smallPlaceholder,selected:{color:r.gray[800]},inputDisabled:{backgroundColor:r.gray[50],borderColor:r.gray[50],cursor:"not-allowed"},listContent:{paddingVertical:12},item:{display:"flex",paddingHorizontal:s[24],paddingVertical:s[8],flexDirection:"row",alignItems:"center"},itemHighlighted:{backgroundColor:r.gray[50]},itemFocused:{boxShadow:`inset 0 0 0 1px ${r.gray[500]}`,borderRadius:b[4],outlineStyle:"none"},itemDisabled:{opacity:.5},selectListTitle:{paddingHorizontal:s[24],paddingVertical:s[12]},inputBorderlessDisabled:{backgroundColor:M.transparent},itemText:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},errorText:{paddingTop:s[4]},focusedInput:{borderColor:r.gray[500],boxShadow:H.tile,outlineStyle:"none"},focusedWithoutShadow:{boxShadow:"none"},errorContainer:{borderColor:r.negative[500]}}),me=({title:x,items:f,valueStyle:J,size:L,color:U="current",disabled:k=!1,mode:m="normal",placeholder:X,readOnly:S=!1,id:G,matchReferenceWidth:Q=!0,value:w,error:R,hideErrors:Y=!1,icon:F,onValueChange:q,disabledItems:Z=[],PopoverFooter:ee,style:le},ae)=>{const W=v.useRef(null),z=v.useRef(null),V=v.useRef(void 0),C=v.useRef(void 0),_=v.useRef(Array(f.length)),re=ce(W,ae),[p,{close:j,open:ue}]=se(!1),ie=c(w),I=L==="small",d=f.find(e=>e.value===w),B=v.useCallback(e=>{var i;if(e.nativeEvent.key.length===1){e.nativeEvent.stopPropagation();const o=`${C.current??""}${e.nativeEvent.key.toLowerCase()}`;C.current=o;const u=f.findIndex(g=>g.name.toLowerCase().startsWith(o)),t=f[u];t!=null&&(p?z.current!=null&&((i=_.current[u])==null||i.focus()):q(t.value))}V.current!=null&&window.clearTimeout(V.current),V.current=window.setTimeout(()=>{C.current=void 0},300)},[f,q,p]),oe=(d==null?void 0:d.name)??w;return n(A,{style:D.fill,children:[a(O,{id:G,ref:re,"aria-haspopup":"listbox",role:"button","aria-expanded":p,disabled:S||k,style:({focused:e,hovered:i,pressed:o})=>[m==="normal"?l.normal:l.borderless,L==="small"&&l.small,(k||S)&&l.inputDisabled,(p||e)&&l.focusedInput,m==="borderless"&&[{backgroundColor:o?r.gray[200]:i?r.gray[100]:M.transparent},l.focusedWithoutShadow],m!=="borderless"&&R!=null&&l.errorContainer,(k||S)&&m==="borderless"&&l.inputBorderlessDisabled,le],onPress:ue,onKeyDown:B,"aria-errormessage":R,children:({hovered:e})=>n(h,{children:[m==="normal"&&a(A,{style:[l.shadowed,e&&l.hovered]}),n(E,{direction:"row",justifyContent:"spaceBetween",alignItems:"center",children:[n(E,{direction:"row",alignItems:"center",style:D.fill,children:[F&&n(h,{children:[a(P,{color:r[U].primary,name:F,size:I?16:18}),a(T,{width:8})]}),ie?n(E,{direction:"row",alignItems:"center",style:D.fill,children:[c(d==null?void 0:d.icon)&&n(h,{children:[d==null?void 0:d.icon,a(T,{width:12})]}),a(y,{color:r.gray[900],variant:I?"smallRegular":"regular",style:[l.itemText,J],children:oe})]}):a(y,{style:[l.itemText,l.selectPlaceholder,I&&l.selectSmallPlaceholder],children:X??" "})]}),a($,{minWidth:8}),!k&&a(P,{color:r.gray[900],name:p?"chevron-up-filled":"chevron-down-filled",size:16})]})]})}),!Y&&a(y,{variant:"smallRegular",color:r.negative[500],style:l.errorText,children:R??" "}),n(fe,{role:"listbox",matchReferenceMinWidth:Q,onDismiss:j,referenceRef:W,returnFocus:!0,visible:p,children:[c(x)&&n(h,{children:[a(y,{variant:"semibold",color:r.gray[900],style:l.selectListTitle,children:x}),a(pe,{})]}),a(ge,{role:"list",data:f,ref:z,contentContainerStyle:l.listContent,onKeyDown:e=>{var o;const{key:i}=e.nativeEvent;if((i==="ArrowDown"||i==="ArrowUp")&&(e.preventDefault(),c(e.currentTarget))){const u=ve(e.currentTarget),t=u.indexOf(e.target),g=i==="ArrowDown"?t+1:t-1;(o=u[g])==null||o.focus()}},keyExtractor:(e,i)=>`select-item-${i}`,renderItem:({item:e,index:i})=>{const o=w===e.value,u=Z.find(({value:t})=>t===e.value);return a(ne,{placement:"right",content:u==null?void 0:u.message,disabled:de(u==null?void 0:u.message),children:n(O,{ref:t=>_.current[i]=t,onKeyDown:B,disabled:c(u),style:({hovered:t,focused:g})=>[l.item,(t||o)&&l.itemHighlighted,g&&l.itemFocused,c(u)&&l.itemDisabled],role:"option","aria-selected":!0,onPress:()=>{q(e.value),j()},children:[c(e.icon)&&n(h,{children:[e.icon,a(T,{width:12})]}),a(y,{color:r.gray[900],numberOfLines:1,style:[l.itemText,o&&l.selected],children:e.name}),a($,{minWidth:12}),o&&a(P,{color:r.positive[500],name:"checkmark-filled",size:14})]})})}}),ee]})]})},K=v.forwardRef(me);try{K.displayName="LakeSelect",K.__docgenInfo={description:"",displayName:"LakeSelect",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item<I>[]"}},matchReferenceWidth:{defaultValue:{value:"true"},description:"",name:"matchReferenceWidth",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"normal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"borderless"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},valueStyle:{defaultValue:null,description:"",name:"valueStyle",required:!1,type:{name:"StyleProp<TextStyle>"}},PopoverFooter:{defaultValue:null,description:"",name:"PopoverFooter",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"lake-building-bank"'},{value:'"lake-calendar-arrow-swap"'},{value:'"lake-call"'},{value:'"lake-card"'},{value:'"lake-card-add"'},{value:'"lake-card-filled"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-check"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-compass"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-denied"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-eraser"'},{value:'"lake-error"'},{value:'"lake-face-id"'},{value:'"lake-fingerprint"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-key"'},{value:'"lake-lock-closed"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-person-support"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-shield"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-warning"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-clockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-filled"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"check-filled"'},{value:'"check-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"eye-off-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-calculator-regular"'},{value:'"money-calculator-filled"'},{value:'"money-regular"'},{value:'"money-filled"'},{value:'"more-horizontal-filled"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"qr-code-regular"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"task-list-square-ltr-filled"'},{value:'"task-list-square-ltr-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},color:{defaultValue:{value:"current"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"I"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: I) => void"}},disabledItems:{defaultValue:{value:"[]"},description:"",name:"disabledItems",required:!1,type:{name:"{ value: I; message?: string; }[]"}},hideErrors:{defaultValue:{value:"false"},description:"",name:"hideErrors",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"ForwardedRef<View>"}}}}}catch{}export{K as L};
//# sourceMappingURL=LakeSelect-BKFMAsGW.js.map
