import{S as t,d as v,e as k,h as _,n as x,a as e,j as a,V as r,p as D,o as T,c as M,b,F as j}from"./Space-41bd3998.js";import{r as f}from"./index-ebeaab24.js";import{G as R}from"./Grid-b487d4a6.js";import{L as w}from"./LakeButton-43487ff7.js";import{c as F}from"./commonStyles-d52fedae.js";import{u as q}from"./useBodyClassName-9a26f8eb.js";import{F as z}from"./FocusTrap-4df19e1b.js";import{I as K}from"./Icon-87ba90db.js";import{L as W}from"./LakeHeading-6fffe5c1.js";import{L as A}from"./LoadingView-b874798a.js";import{P as G}from"./Portal-1a393d67.js";import{P as H}from"./Pressable-c81fd613.js";import{R as I}from"./ResponsiveContainer-75e27bf3.js";import{T as P}from"./TransitionView-8ba25b9e.js";import{S as N,a as m}from"./_StoriesComponents-93843df2.js";import"./extends-98964cd2.js";import"./index-0a3ba52b.js";import"./index-6a01b2ee.js";import"./array-b3630b94.js";import"./Svg-e0d6af97.js";import"./colors-298625c7.js";import"./index-9c09ad76.js";import"./WithCurrentColor-de36a601.js";import"./useMergeRefs-484cb318.js";const Y="rgba(0, 0, 0, 0.6)",l=t.create({root:{...t.absoluteFillObject},container:{...t.absoluteFillObject},inert:{pointerEvents:"none"},fill:{...t.absoluteFillObject,animationFillMode:"forwards"},overlay:{...t.absoluteFillObject,backgroundColor:Y},overlayEnter:{animationKeyframes:{"0%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},overlayLeave:{animationKeyframes:{"100%":{opacity:0}},animationDuration:"200ms",animationTimingFunction:"ease-in-out"},modalEnter:{animationKeyframes:{"0%":{opacity:0,transform:"translateY(-20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},modalLeave:{animationKeyframes:{"100%":{opacity:0,transform:"translateY(-20px)"}},animationDuration:"300ms",animationTimingFunction:"ease-in-out"},modalContainer:{...t.absoluteFillObject},modalContentContainer:{padding:v[24],justifyContent:"center",flexGrow:1},modalContentContainerSmall:{padding:v[8],flexGrow:1,justifyContent:"center"},modal:{backgroundColor:k.default,borderRadius:24,padding:v[48],boxShadow:_.modal,alignSelf:"stretch",width:"100%",marginHorizontal:"auto"},modalSmall:{borderRadius:16,backgroundColor:k.default,width:"100%",padding:v[24],alignSelf:"stretch",marginHorizontal:"auto"},modalHeader:{display:"flex",flexDirection:"row",justifyContent:"space-between"},modalIconTitle:{...F.fill},trap:{...F.fill},pressableOverlay:{...t.absoluteFillObject},closeButton:{top:x[16],right:x[16]}}),y=({visible:i,icon:n,title:d,color:s="current",children:h,maxWidth:E=570,onPressClose:c})=>{const[S,C]=f.useState(()=>{});return f.useEffect(()=>{const o=document.createElement("div");return document.body.append(o),C(o),()=>{o.remove(),C(void 0)}},[]),q("ModalOpen",{enabled:i}),S==null?null:e(G,{container:S,children:a(r,{"aria-modal":!0,style:[l.container,!i&&l.inert],children:[e(P,{style:l.fill,enter:l.overlayEnter,leave:l.overlayLeave,children:i?e(r,{style:l.overlay}):null}),e(f.Suspense,{fallback:e(A,{color:k.accented,delay:0}),children:e(P,{style:l.fill,enter:l.modalEnter,leave:l.modalLeave,children:i?e(I,{style:l.root,breakpoint:D.tiny,children:({large:o,small:V})=>e(z,{autoFocus:!0,focusLock:!0,returnFocus:!0,onEscapeKey:c,style:l.trap,children:a(T,{style:l.modalContainer,contentContainerStyle:o?l.modalContentContainer:l.modalContentContainerSmall,children:[c!=null?e(H,{onPress:c,style:l.pressableOverlay}):null,a(r,{style:[o?l.modal:l.modalSmall,{maxWidth:E}],children:[a(r,{style:l.modalHeader,children:[a(r,{style:l.modalIconTitle,children:[n!=null?e(K,{name:n,size:o?40:32,color:M[s][500]}):null,n!=null&&d!=null?e(b,{height:12}):null,d!=null?a(j,{children:[e(W,{level:2,variant:"h3",children:d}),e(b,{height:12})]}):null]}),c!=null?e(w,{style:l.closeButton,mode:"tertiary",onPress:c,icon:"lake-close"}):null]}),typeof h=="function"?h({large:o,small:V}):h]})]})})}):null})})]})})};try{y.displayName="LakeModal",y.__docgenInfo={description:"",displayName:"LakeModal",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"lake-calendar-arrow-swap"'},{value:'"lake-card"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-regular"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},color:{defaultValue:{value:"current"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}},maxWidth:{defaultValue:{value:"570"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},onPressClose:{defaultValue:null,description:"",name:"onPressClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const u=t.create({block:{height:200,backgroundColor:M.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),he={title:"Layout/Modal",component:y},p=({withCloseCross:i=!1,...n})=>{const[d,s]=f.useState(!1);return a(j,{children:[e(w,{color:"live",size:"small",onPress:()=>s(!0),style:u.button,children:"Open"}),a(y,{...n,visible:d,onPressClose:i?()=>s(!1):void 0,children:[e(b,{height:8}),e(T,{children:a(R,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:u.grid,children:[e(r,{style:u.block}),e(r,{style:u.block}),e(r,{style:u.block}),e(r,{style:u.block})]})}),e(w,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},g=()=>a(N,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[e(m,{title:"Default",children:e(p,{})}),e(m,{title:"With title",children:e(p,{title:"A title"})}),e(m,{title:"With title and icon",children:e(p,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),e(m,{title:"Closable with click outside and top right cross",children:e(p,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});var L,O,B;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <StoryBlock title="Modal" description={["This component creates a modal with enter and leave animation. ", 'You can try it by clicking on "Open" button.']}>
      <StoryPart title="Default">
        <ButtonModal />
      </StoryPart>

      <StoryPart title="With title">
        <ButtonModal title="A title" />
      </StoryPart>

      <StoryPart title="With title and icon">
        <ButtonModal title="Title and icon" icon="add-circle-filled" color="live" />
      </StoryPart>

      <StoryPart title="Closable with click outside and top right cross">
        <ButtonModal title="Title and icon" icon="add-circle-filled" color="live" withCloseCross={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(B=(O=g.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const ke=["All"];export{g as All,ke as __namedExportsOrder,he as default};
//# sourceMappingURL=Modal.stories-3cfa383c.js.map
