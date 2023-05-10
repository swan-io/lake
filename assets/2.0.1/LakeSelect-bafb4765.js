import{S as re,c as r,r as T,s,e as H,t as A,p as ue,j as u,V as N,a,F as g,b as P,i as m,L as h}from"./Space-65f9bfa9.js";import{r as p}from"./index-8db94870.js";import{c as I}from"./commonStyles-d52fedae.js";import{u as ie,P as oe}from"./Popover-c2e3d2c8.js";import{g as te}from"./array-b3630b94.js";import{B as D}from"./index-5dcf0b89.js";import{F as $}from"./Fill-24da9952.js";import{I as E}from"./Icon-4e86e06c.js";import{P as O}from"./Pressable-2163c0dc.js";import{c as ne}from"./_StoriesComponents-9f567819.js";import{F as de}from"./index-2379b1a9.js";const e=re.create({normal:{backgroundColor:r.gray.contrast,borderColor:r.gray[100],borderRadius:T[6],borderWidth:1,justifyContent:"center",minWidth:100,paddingHorizontal:s[16],height:40},borderless:{justifyContent:"center",height:40,paddingHorizontal:s[16]},small:{paddingVertical:5},shadowed:{position:"absolute",opacity:0,left:0,top:0,width:"100%",height:"100%",borderRadius:T[6],boxShadow:H.tile,transitionDuration:"150ms",transitionProperty:"opacity"},hovered:{opacity:1},selectPlaceholder:A.placeholder,selectSmallPlaceholder:A.smallPlaceholder,selected:{color:r.gray[800]},inputDisabled:{backgroundColor:r.gray[50],borderColor:r.gray[50],cursor:"not-allowed"},listContent:{paddingVertical:12},item:{display:"flex",paddingHorizontal:s[24],paddingVertical:s[8],flexDirection:"row",alignItems:"center"},itemHighlighted:{backgroundColor:r.gray[50]},itemFocused:{boxShadow:`inset 0 0 0 1px ${r.gray[500]}`,borderRadius:T[4],outlineStyle:"none"},selectListTitle:{paddingHorizontal:s[24],paddingVertical:s[12]},inputBorderlessDisabled:{backgroundColor:ue.transparent},itemText:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},errorText:{paddingTop:s[4]},focusedInput:{borderColor:r.gray[500],boxShadow:H.tile,outlineStyle:"none"},focusedWithoutShadow:{boxShadow:"none"},errorContainer:{borderColor:r.negative[500]}});function K({title:b,items:c,valueStyle:J,size:F,color:M="current",disabled:y=!1,mode:f="normal",placeholder:U,readOnly:x=!1,id:X,matchReferenceWidth:G=!0,value:w,error:S,hideErrors:Q=!1,icon:L,onValueChange:V,PopoverFooter:Y,style:Z}){const W=p.useRef(null),_=p.useRef(null),C=p.useRef(void 0),R=p.useRef(void 0),z=p.useRef(Array(c.length)),[v,{close:j,toggle:ee}]=ie(!1),le=m(w),q=F==="small",o=c.find(l=>l.value===w),B=p.useCallback(l=>{var i;if(l.nativeEvent.key.length===1){const t=`${R.current??""}${l.nativeEvent.key.toLowerCase()}`;R.current=t;const n=c.findIndex(k=>k.name.toLowerCase().startsWith(t)),d=c[n];d!=null&&(v?_.current!=null&&((i=z.current[n])==null||i.focus()):V(d.value))}C.current!=null&&window.clearTimeout(C.current),C.current=window.setTimeout(()=>{R.current=void 0},300)},[c,V,v]),ae=(o==null?void 0:o.name)??w;return u(N,{style:I.fill,children:[a(O,{id:X,ref:W,"aria-haspopup":"listbox",role:"button","aria-expanded":v,disabled:x||y,style:({focused:l})=>[f==="normal"?e.normal:e.borderless,F==="small"&&e.small,(y||x)&&e.inputDisabled,(v||l)&&e.focusedInput,f==="borderless"&&e.focusedWithoutShadow,f!=="borderless"&&S!=null&&e.errorContainer,(y||x)&&f==="borderless"&&e.inputBorderlessDisabled,Z],onPress:ee,onKeyDown:B,"aria-errormessage":S,children:({hovered:l})=>u(g,{children:[f==="normal"&&a(N,{style:[e.shadowed,l&&e.hovered]}),u(D,{direction:"row",justifyContent:"spaceBetween",alignItems:"center",children:[u(D,{direction:"row",alignItems:"center",style:I.fill,children:[L&&u(g,{children:[a(E,{color:r[M].primary,name:L,size:q?16:18}),a(P,{width:8})]}),le?u(D,{direction:"row",alignItems:"center",style:I.fill,children:[m(o==null?void 0:o.icon)&&u(g,{children:[o==null?void 0:o.icon,a(P,{width:12})]}),a(h,{color:r.gray[900],variant:q?"smallRegular":"regular",style:[e.itemText,J],children:ae})]}):a(h,{style:[e.itemText,e.selectPlaceholder,q&&e.selectSmallPlaceholder],children:U??" "})]}),a($,{minWidth:8}),!y&&a(E,{color:r.gray[900],name:v?"chevron-up-filled":"chevron-down-filled",size:16})]})]})}),!Q&&a(h,{variant:"smallRegular",color:r.negative[500],style:e.errorText,children:S??" "}),u(oe,{role:"listbox",matchReferenceMinWidth:G,onDismiss:j,referenceRef:W,returnFocus:!0,visible:v,children:[m(b)&&u(g,{children:[a(h,{variant:"semibold",color:r.gray[900],style:e.selectListTitle,children:b}),a(ne,{})]}),a(de,{role:"list",data:c,ref:_,contentContainerStyle:e.listContent,onKeyDown:l=>{var t;const{key:i}=l.nativeEvent;if((i==="ArrowDown"||i==="ArrowUp")&&(l.preventDefault(),m(l.currentTarget))){const n=te(l.currentTarget),d=n.indexOf(l.target),k=i==="ArrowDown"?d+1:d-1;(t=n[k])==null||t.focus()}},keyExtractor:(l,i)=>`select-item-${i}`,renderItem:({item:l,index:i})=>{const t=w===l.value;return u(O,{ref:n=>z.current[i]=n,onKeyDown:B,style:({hovered:n,focused:d})=>[e.item,(n||t)&&e.itemHighlighted,d&&e.itemFocused],role:"option","aria-selected":!0,onPress:()=>{V(l.value),j()},children:[m(l.icon)&&u(g,{children:[l.icon,a(P,{width:12})]}),a(h,{color:r.gray[900],numberOfLines:1,style:[e.itemText,t&&e.selected],children:l.name}),a($,{minWidth:12}),t&&a(E,{color:r.positive[500],name:"checkmark-filled",size:14})]})}}),Y]})]})}try{K.displayName="LakeSelect",K.__docgenInfo={description:"",displayName:"LakeSelect",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item<V>[]"}},matchReferenceWidth:{defaultValue:{value:"true"},description:"",name:"matchReferenceWidth",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"normal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"borderless"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},valueStyle:{defaultValue:null,description:"",name:"valueStyle",required:!1,type:{name:"StyleProp<TextStyle>"}},PopoverFooter:{defaultValue:null,description:"",name:"PopoverFooter",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"lake-calendar-arrow-swap"'},{value:'"lake-card"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-regular"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},color:{defaultValue:{value:"current"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"V"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: V) => void"}},hideErrors:{defaultValue:{value:"false"},description:"",name:"hideErrors",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}export{K as L};
//# sourceMappingURL=LakeSelect-bafb4765.js.map
