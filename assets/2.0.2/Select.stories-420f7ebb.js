import{S as re,c as r,r as I,s as m,e as J,t as K,o as ge,j as t,V as U,a as e,F as b,b as B,i as k,L as h}from"./Space-d8a3a2fb.js";import{r as f}from"./index-ebeaab24.js";import{c as _}from"./commonStyles-d52fedae.js";import{u as he,P as ye}from"./Popover-1c1f966e.js";import{g as be}from"./array-b3630b94.js";import{B as z}from"./index-792e89f6.js";import{F as X}from"./Fill-1cd895f0.js";import{I as j}from"./Icon-b1271a47.js";import{P as Y}from"./Pressable-f145b70b.js";import{c as ke,S as te,a as d}from"./_StoriesComponents-209aaa6f.js";import{F as we}from"./index-a06d815a.js";import"./extends-98964cd2.js";import"./useResponsive-39fc4a3e.js";import"./BottomPanel-0adebb7a.js";import"./useBodyClassName-9a26f8eb.js";import"./math-4698041f.js";import"./FocusTrap-d95ab812.js";import"./LoadingView-4de206f5.js";import"./colors-298625c7.js";import"./index-e69b7e8d.js";import"./Portal-7eda4751.js";import"./index-9c09ad76.js";import"./WithCurrentColor-c06016a8.js";import"./TransitionView-12824d5b.js";import"./index-da6f378b.js";import"./index-ead250ae.js";import"./Svg-e0dc1839.js";import"./useMergeRefs-c81cc1be.js";const l=re.create({normal:{backgroundColor:r.gray.contrast,borderColor:r.gray[100],borderRadius:I[6],borderWidth:1,justifyContent:"center",minWidth:100,paddingHorizontal:m[16],height:40},borderless:{justifyContent:"center",height:40,paddingHorizontal:m[16]},small:{paddingVertical:5},shadowed:{position:"absolute",opacity:0,left:0,top:0,width:"100%",height:"100%",borderRadius:I[6],boxShadow:J.tile,transitionDuration:"150ms",transitionProperty:"opacity"},hovered:{opacity:1},selectPlaceholder:K.placeholder,selectSmallPlaceholder:K.smallPlaceholder,selected:{color:r.gray[800]},inputDisabled:{backgroundColor:r.gray[50],borderColor:r.gray[50],cursor:"not-allowed"},listContent:{paddingVertical:12},item:{display:"flex",paddingHorizontal:m[24],paddingVertical:m[8],flexDirection:"row",alignItems:"center"},itemHighlighted:{backgroundColor:r.gray[50]},itemFocused:{boxShadow:`inset 0 0 0 1px ${r.gray[500]}`,borderRadius:I[4],outlineStyle:"none"},selectListTitle:{paddingHorizontal:m[24],paddingVertical:m[12]},inputBorderlessDisabled:{backgroundColor:ge.transparent},itemText:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},errorText:{paddingTop:m[4]},focusedInput:{borderColor:r.gray[500],boxShadow:J.tile,outlineStyle:"none"},focusedWithoutShadow:{boxShadow:"none"},errorContainer:{borderColor:r.negative[500]}});function E({title:i,items:v,valueStyle:R,size:w,color:ie="current",disabled:S=!1,mode:y="normal",placeholder:ue,readOnly:T=!1,id:ne,matchReferenceWidth:se=!0,value:x,error:q,hideErrors:de=!1,icon:H,onValueChange:D,PopoverFooter:ce,style:ve}){const N=f.useRef(null),O=f.useRef(null),F=f.useRef(void 0),L=f.useRef(void 0),A=f.useRef(Array(v.length)),[g,{close:$,toggle:pe}]=he(!1),me=k(x),W=w==="small",u=v.find(a=>a.value===x),M=f.useCallback(a=>{var o;if(a.nativeEvent.key.length===1){const n=`${L.current??""}${a.nativeEvent.key.toLowerCase()}`;L.current=n;const s=v.findIndex(P=>P.name.toLowerCase().startsWith(n)),p=v[s];p!=null&&(g?O.current!=null&&((o=A.current[s])==null||o.focus()):D(p.value))}F.current!=null&&window.clearTimeout(F.current),F.current=window.setTimeout(()=>{L.current=void 0},300)},[v,D,g]),fe=(u==null?void 0:u.name)??x;return t(U,{style:_.fill,children:[e(Y,{id:ne,ref:N,"aria-haspopup":"listbox",role:"button","aria-expanded":g,disabled:T||S,style:({focused:a})=>[y==="normal"?l.normal:l.borderless,w==="small"&&l.small,(S||T)&&l.inputDisabled,(g||a)&&l.focusedInput,y==="borderless"&&l.focusedWithoutShadow,y!=="borderless"&&q!=null&&l.errorContainer,(S||T)&&y==="borderless"&&l.inputBorderlessDisabled,ve],onPress:pe,onKeyDown:M,"aria-errormessage":q,children:({hovered:a})=>t(b,{children:[y==="normal"&&e(U,{style:[l.shadowed,a&&l.hovered]}),t(z,{direction:"row",justifyContent:"spaceBetween",alignItems:"center",children:[t(z,{direction:"row",alignItems:"center",style:_.fill,children:[H&&t(b,{children:[e(j,{color:r[ie].primary,name:H,size:W?16:18}),e(B,{width:8})]}),me?t(z,{direction:"row",alignItems:"center",style:_.fill,children:[k(u==null?void 0:u.icon)&&t(b,{children:[u==null?void 0:u.icon,e(B,{width:12})]}),e(h,{color:r.gray[900],variant:W?"smallRegular":"regular",style:[l.itemText,R],children:fe})]}):e(h,{style:[l.itemText,l.selectPlaceholder,W&&l.selectSmallPlaceholder],children:ue??" "})]}),e(X,{minWidth:8}),!S&&e(j,{color:r.gray[900],name:g?"chevron-up-filled":"chevron-down-filled",size:16})]})]})}),!de&&e(h,{variant:"smallRegular",color:r.negative[500],style:l.errorText,children:q??" "}),t(ye,{role:"listbox",matchReferenceMinWidth:se,onDismiss:$,referenceRef:N,returnFocus:!0,visible:g,children:[k(i)&&t(b,{children:[e(h,{variant:"semibold",color:r.gray[900],style:l.selectListTitle,children:i}),e(ke,{})]}),e(we,{role:"list",data:v,ref:O,contentContainerStyle:l.listContent,onKeyDown:a=>{var n;const{key:o}=a.nativeEvent;if((o==="ArrowDown"||o==="ArrowUp")&&(a.preventDefault(),k(a.currentTarget))){const s=be(a.currentTarget),p=s.indexOf(a.target),P=o==="ArrowDown"?p+1:p-1;(n=s[P])==null||n.focus()}},keyExtractor:(a,o)=>`select-item-${o}`,renderItem:({item:a,index:o})=>{const n=x===a.value;return t(Y,{ref:s=>A.current[o]=s,onKeyDown:M,style:({hovered:s,focused:p})=>[l.item,(s||n)&&l.itemHighlighted,p&&l.itemFocused],role:"option","aria-selected":!0,onPress:()=>{D(a.value),$()},children:[k(a.icon)&&t(b,{children:[a.icon,e(B,{width:12})]}),e(h,{color:r.gray[900],numberOfLines:1,style:[l.itemText,n&&l.selected],children:a.name}),e(X,{minWidth:12}),n&&e(j,{color:r.positive[500],name:"checkmark-filled",size:14})]})}}),ce]})]})}try{E.displayName="LakeSelect",E.__docgenInfo={description:"",displayName:"LakeSelect",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item<V>[]"}},matchReferenceWidth:{defaultValue:{value:"true"},description:"",name:"matchReferenceWidth",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"normal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"borderless"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},valueStyle:{defaultValue:null,description:"",name:"valueStyle",required:!1,type:{name:"StyleProp<TextStyle>"}},PopoverFooter:{defaultValue:null,description:"",name:"PopoverFooter",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"lake-calendar-arrow-swap"'},{value:'"lake-card"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-regular"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},color:{defaultValue:{value:"current"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"V"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: V) => void"}},hideErrors:{defaultValue:{value:"false"},description:"",name:"hideErrors",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}const oe=re.create({select:{maxWidth:250},footer:{paddingHorizontal:24,paddingVertical:8,backgroundColor:r.gray[0]}}),Ze={title:"Forms/Select",component:E},Se=[{name:"Camille",value:1},{name:"Charlotte",value:2},{name:"Francis",value:3},{name:"Émilie",value:4},{name:"Marie-Laure-Natasha-Valérie-Émilie",value:17},{name:"François",value:5},{name:"Laura",value:6},{name:"Marie-Anne",value:7},{name:"Natasha",value:8},{name:"Nicolas",value:9},{name:"Pierre",value:10},{name:"Thomas",value:11},{name:"Valérie",value:12},{name:"Yann",value:13},{name:"Zoé",value:14},{name:"Jérôme",value:15},{name:"Thomas",value:16}],c=({initialValue:i,...v})=>{const[R,w]=f.useState(i);return e(E,{placeholder:"Select someone...",value:R,onValueChange:w,items:Se,style:oe.select,...v})},V=()=>t(te,{title:"Select variations",children:[e(d,{title:"Default",children:e(c,{})}),e(d,{title:"Small",children:e(c,{size:"small"})}),e(d,{title:"Borderless",children:e(c,{mode:"borderless",initialValue:1})}),e(d,{title:"With icon",children:e(c,{icon:"building-bank-regular"})}),e(d,{title:"With footer",children:e(c,{PopoverFooter:e(h,{style:oe.footer,children:"List of random people"})})}),e(d,{title:"With error",children:e(c,{error:"Required field"})}),e(d,{title:"Disabled",children:e(c,{disabled:!0})}),e(d,{title:"Disabled with value",children:e(c,{disabled:!0,initialValue:2})})]}),C=()=>e(te,{title:"Select colors",description:"Color prop change only icon color",children:Object.keys(r).map(i=>e(d,{title:i,children:e(c,{icon:"building-bank-filled",color:i})},i))});var Z,G,Q;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select variations">
      <StoryPart title="Default">
        <EditableSelect />
      </StoryPart>

      <StoryPart title="Small">
        <EditableSelect size="small" />
      </StoryPart>

      <StoryPart title="Borderless">
        <EditableSelect mode="borderless" initialValue={1} />
      </StoryPart>

      <StoryPart title="With icon">
        <EditableSelect icon="building-bank-regular" />
      </StoryPart>

      <StoryPart title="With footer">
        <EditableSelect PopoverFooter={<LakeText style={styles.footer}>List of random people</LakeText>} />
      </StoryPart>

      <StoryPart title="With error">
        <EditableSelect error="Required field" />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableSelect disabled={true} />
      </StoryPart>

      <StoryPart title="Disabled with value">
        <EditableSelect disabled={true} initialValue={2} />
      </StoryPart>
    </StoryBlock>;
}`,...(Q=(G=V.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var ee,le,ae;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <StoryBlock title="Select colors" description="Color prop change only icon color">
      {Object.keys(colors).map(color => <StoryPart key={color} title={color}>
          <EditableSelect icon="building-bank-filled" color={(color as ColorVariants)} />
        </StoryPart>)}
    </StoryBlock>;
}`,...(ae=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};const Ge=["Variations","Colors"];export{C as Colors,V as Variations,Ge as __namedExportsOrder,Ze as default};
//# sourceMappingURL=Select.stories-420f7ebb.js.map
