import{S as r,s as t,d as m,e as x,n as f,a as l,j as u,V as n,l as F,k as L,c as j,b as k,F as E}from"./Space-65f9bfa9.js";import{r as c}from"./index-8db94870.js";import{c as y}from"./commonStyles-d52fedae.js";import{u as O}from"./useBodyClassName-27d97f40.js";import{F as V}from"./FocusTrap-269094b2.js";import{I as T}from"./Icon-4e86e06c.js";import{L as _}from"./LakeButton-bed23784.js";import{L as q}from"./LakeHeading-627b7829.js";import{L as R}from"./LoadingView-a1303365.js";import{P as B}from"./Portal-e966a77e.js";import{P as D}from"./Pressable-2163c0dc.js";import{R as K}from"./ResponsiveContainer-eb20e0c2.js";import{T as h}from"./TransitionView-e9c85895.js";const H="rgba(0, 0, 0, 0.6)",e=r.create({root:{...r.absoluteFillObject},container:{...r.absoluteFillObject},inert:{pointerEvents:"none"},fill:{...r.absoluteFillObject,animationFillMode:"forwards"},overlay:{...r.absoluteFillObject,backgroundColor:H},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},modalEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateY(-20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},modalLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateY(-20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},modalContainer:{...r.absoluteFillObject},modalContentContainer:{padding:t[24],justifyContent:"center",flexGrow:1},modalContentContainerSmall:{padding:t[8],flexGrow:1,justifyContent:"center"},modal:{backgroundColor:m.default,borderRadius:24,padding:t[48],boxShadow:x.modal,alignSelf:"stretch",width:"100%",marginHorizontal:"auto"},modalSmall:{borderRadius:16,backgroundColor:m.default,width:"100%",padding:t[24],alignSelf:"stretch",marginHorizontal:"auto"},modalHeader:{display:"flex",flexDirection:"row",justifyContent:"space-between"},modalIconTitle:{...y.fill},trap:{...y.fill},pressableOverlay:{...r.absoluteFillObject},closeButton:{top:f[16],right:f[16]}}),b=({visible:o,icon:d,title:v,color:w="current",children:s,maxWidth:C=570,onPressClose:i})=>{const[p,g]=c.useState(()=>{});return c.useEffect(()=>{const a=document.createElement("div");return document.body.append(a),g(a),()=>{a.remove(),g(void 0)}},[]),O("ModalOpen",{enabled:o}),p==null?null:l(B,{container:p,children:u(n,{"aria-modal":!0,style:[e.container,!o&&e.inert],children:[l(h,{style:e.fill,enter:e.overlayEnter,leave:e.overlayLeave,children:o?l(n,{style:e.overlay}):null}),l(c.Suspense,{fallback:l(R,{color:m.accented,delay:0}),children:l(h,{style:e.fill,enter:e.modalEnter,leave:e.modalLeave,children:o?l(K,{style:e.root,breakpoint:F.tiny,children:({large:a,small:S})=>l(V,{autoFocus:!0,focusLock:!0,returnFocus:!0,onEscapeKey:i,style:e.trap,children:u(L,{style:e.modalContainer,contentContainerStyle:a?e.modalContentContainer:e.modalContentContainerSmall,children:[i!=null?l(D,{onPress:i,style:e.pressableOverlay}):null,u(n,{style:[a?e.modal:e.modalSmall,{maxWidth:C}],children:[u(n,{style:e.modalHeader,children:[u(n,{style:e.modalIconTitle,children:[d!=null?l(T,{name:d,size:a?40:32,color:j[w][500]}):null,d!=null&&v!=null?l(k,{height:12}):null,v!=null?u(E,{children:[l(q,{level:2,variant:"h3",children:v}),l(k,{height:12})]}):null]}),i!=null?l(_,{style:e.closeButton,mode:"tertiary",onPress:i,icon:"lake-close"}):null]}),typeof s=="function"?s({large:a,small:S}):s]})]})})}):null})})]})})};try{b.displayName="LakeModal",b.__docgenInfo={description:"",displayName:"LakeModal",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"lake-calendar-arrow-swap"'},{value:'"lake-card"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-regular"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},color:{defaultValue:{value:"current"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}},maxWidth:{defaultValue:{value:"570"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},onPressClose:{defaultValue:null,description:"",name:"onPressClose",required:!1,type:{name:"(() => void)"}}}}}catch{}export{b as L};
//# sourceMappingURL=LakeModal-32dccbca.js.map
