import{u as Q,z as U,N as R,v as Y,n as T,j as e,V as L,s as _,B as Z,i as O,L as C,c as s,a as i,d as w,b as ee,r as te}from"./ScrollView-BR9I8tSV.js";import{r as a}from"./iframe-DyDskLZi.js";import{u as re,P as oe}from"./Pressable-CTLyY7X_.js";import{T as ae}from"./Tag-DojGbpSM.js";import{T as se}from"./index-BUcpExxf.js";import{L as ne}from"./LakeTextInput-BPHtNmfK.js";import{i as le}from"./validation-DAZUW-Hn.js";import{S as ie,a as d}from"./_StoriesComponents-Cb4nYUfB.js";import"./index-DRnbMwXI.js";import"./index-CputReDV.js";import"./extends-CF3RwP-h.js";import"./commonStyles-BBEkV6IC.js";import"./Fill-CUVYnUqf.js";import"./LakeSelect-Cp6pIAz_.js";import"./useDisclosure-Du7hTGT3.js";import"./FocusTrap-CJSGY4jc.js";import"./array-BfAlyugE.js";import"./Popover-CKJdUF4P.js";import"./useResponsive-DLBO7OSq.js";import"./function-DD6Jg5St.js";import"./BottomPanel-6Y4qhzye.js";import"./useBodyClassName-DNdHXT9g.js";import"./Suspendable-DlTmIbyn.js";import"./index-CkaMVXON.js";import"./TransitionView-fIiojl5e.js";import"./Separator-BBg7kb5j.js";import"./iban-BIV3G219.js";import"./i18n-BDTyx5sb.js";import"./rifm-Bv38KF45.js";const ue="transparent",o=_.create({container:{flexGrow:1,flexShrink:1,flexDirection:"row",alignItems:"stretch"},root:{flexDirection:"row",display:"flex",alignItems:"center",flexWrap:"wrap",borderRadius:te[6],backgroundColor:ee.accented,borderColor:s.gray[100],borderWidth:1,paddingHorizontal:i[4],paddingTop:i[4],outlineStyle:"none",cursor:"text"},focused:{borderColor:s.gray[500],boxShadow:w.tile},hovered:{boxShadow:w.tile},disabled:{backgroundColor:s.gray[50],borderColor:s.gray[50],color:s.gray[900],cursor:"not-allowed"},readOnly:{backgroundColor:s.gray[50],borderColor:s.gray[50],color:s.gray[900]},readOnlyError:{borderColor:ue,paddingRight:i[32]},error:{borderColor:s.negative[400]},valid:{borderColor:s.positive[500]},input:{height:28,marginBottom:i[4],marginLeft:i[4],outlineStyle:"none",flexGrow:1},tag:{marginRight:i[4],marginBottom:i[4],maxWidth:350},errorContainer:{paddingTop:i[4]}}),de=/,| /,q=({ref:x,validator:I=()=>!0,onFocus:c,onBlur:b,validateOnBlur:S=!0,values:n,onValuesChanged:h,readOnly:m=!1,disabled:f=!1,valid:D=!1,hideErrors:W=!1,placeholder:M,help:A,error:E})=>{const y=a.useRef(null),j=a.useRef(null),[B,v]=a.useState(!1),[F,P]=a.useState(!1),G=re(y,x);Q(j,{onHoverStart:()=>P(!0),onHoverEnd:()=>P(!1)});const l=a.useCallback(t=>{var r;h([...n,...t.filter(u=>!n.includes(u))]),(r=y.current)==null||r.clear()},[n,h]),z=a.useCallback(t=>{const r=[...new Set(t.split(de).filter(u=>u.length>0))];(r.length>1||r[0]!==t)&&l(r)},[l]),K=a.useCallback(({nativeEvent:t})=>{f||m||U({key:t.key,input:y.current}).with({key:"Backspace",input:R.instanceOf(HTMLInputElement)},({input:r})=>{Y(r.value)&&h(n.filter(u=>u!==n[n.length-1]))}).with({key:"Enter",input:R.instanceOf(HTMLInputElement)},({input:r})=>{T(r.value)&&l([r.value])})},[h,l,n,f,m]),X=a.useCallback(()=>{var t;(t=y.current)==null||t.focus()},[]),$=a.useCallback(t=>{v(!0),c==null||c(t)},[c]),J=a.useCallback(t=>{const r=y.current;r instanceof HTMLInputElement&&T(r.value)&&S&&l([r.value]),v(!1),b==null||b(t)},[l,b,S]);a.useImperativeHandle(x,()=>({pushPendingValue:()=>{const t=y.current;t instanceof HTMLInputElement&&T(t.value)&&S&&l([t.value])}}),[l,S]);const k=T(E);return e.jsxs(L,{children:[e.jsxs(oe,{style:[o.root,m&&k&&o.readOnlyError,f&&o.disabled,m&&o.readOnly,B&&o.focused,k&&o.error,D&&o.valid,F&&o.hovered],"aria-errormessage":E,onPress:X,ref:j,children:[n.map((t,r)=>e.jsx(ae,{onPressRemove:!m&&!f?()=>h(n.filter(u=>u!==t)):void 0,style:o.tag,color:I(t)?"gray":"negative",children:t},r)),e.jsx(se,{ref:G,style:[o.input,f&&o.disabled],onFocus:$,onBlur:J,"aria-disabled":f,onChangeText:z,onKeyPress:K,readOnly:m,placeholder:M})]}),!W&&e.jsx(Z,{direction:"row",style:o.errorContainer,children:O(E)?e.jsx(C,{variant:"smallRegular",color:s.negative[500],children:E}):e.jsx(C,{variant:"smallRegular",color:s.gray[500],children:A??" "})})]})};q.__docgenInfo={description:"",methods:[{name:"pushPendingValue",docblock:null,modifiers:[],params:[],returns:null}],displayName:"LakeTagInput",props:{validator:{defaultValue:{value:"() => true",computed:!1},required:!1},validateOnBlur:{defaultValue:{value:"true",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},valid:{defaultValue:{value:"false",computed:!1},required:!1},hideErrors:{defaultValue:{value:"false",computed:!1},required:!1}}};const pe=_.create({input:{maxWidth:400}}),Be={title:"Forms/TagInput",component:ne},p=x=>{const[I,c]=a.useState(["toto","dfghj@iouy.fr"]);return e.jsx(L,{style:pe.input,children:e.jsx(q,{validator:le,onValuesChanged:c,values:I,...x})})},g=()=>e.jsxs(ie,{title:"Input variations",children:[e.jsx(d,{title:"Default",children:e.jsx(p,{})}),e.jsx(d,{title:"Disabled",children:e.jsx(p,{disabled:!0})}),e.jsx(d,{title:"Error",children:e.jsx(p,{error:"Nop"})}),e.jsx(d,{title:"Hidden errors",children:e.jsx(p,{error:"Nop",hideErrors:!0})}),e.jsx(d,{title:"Valid",children:e.jsx(p,{valid:!0})}),e.jsx(d,{title:"With help",children:e.jsx(p,{help:"Fill me"})}),e.jsx(d,{title:"Read only",children:e.jsx(p,{readOnly:!0})})]});g.__docgenInfo={description:"",methods:[],displayName:"Variations"};var N,V,H;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <StoryBlock title="Input variations">
      <StoryPart title="Default">
        <EditableTagInput />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableTagInput disabled={true} />
      </StoryPart>

      <StoryPart title="Error">
        <EditableTagInput error="Nop" />
      </StoryPart>

      <StoryPart title="Hidden errors">
        <EditableTagInput error="Nop" hideErrors={true} />
      </StoryPart>

      <StoryPart title="Valid">
        <EditableTagInput valid={true} />
      </StoryPart>

      <StoryPart title="With help">
        <EditableTagInput help="Fill me" />
      </StoryPart>

      <StoryPart title="Read only">
        <EditableTagInput readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(H=(V=g.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const Fe=["Variations"];export{g as Variations,Fe as __namedExportsOrder,Be as default};
//# sourceMappingURL=TagInput.stories-DtVCXYux.js.map
