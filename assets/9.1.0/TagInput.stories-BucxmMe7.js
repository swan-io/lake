import{s as L,r as Q,d as U,c as s,b as i,k as R,E as Y,$ as Z,g as C,p as O,l as S,j as e,V as _,B as ee,i as te,L as w}from"./ScrollView-DWjQ00nM.js";import{i as re}from"./validation-C9RIl0Lg.js";import{r as o}from"./index-Cs7sjTYM.js";import{u as oe,P as ae,T as se}from"./Pressable-CMe_F2_9.js";import{T as ne}from"./Tag-CN2d3BfY.js";import{L as le}from"./LakeTextInput-RVwTHeH7.js";import{S as ie,a as d}from"./_StoriesComponents-_jmnnGUR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./utc-DJvBpWoA.js";import"./iban-DC8cy8qB.js";import"./i18n-B4KUJV-9.js";import"./rifm-CFTOlIhk.js";import"./array-BfAlyugE.js";import"./index-CCMTQrND.js";import"./extends-CF3RwP-h.js";import"./commonStyles-t4XfA7cz.js";import"./Fill-CJ2tm9Hu.js";import"./LakeSelect-BCceW-go.js";import"./useDisclosure-DLkMFUa4.js";import"./FocusTrap-BmeT9-In.js";import"./Popover-CdPSbsOC.js";import"./useResponsive-CzIqCC5v.js";import"./function-c-Au7wom.js";import"./BottomPanel-DIUwAyP4.js";import"./useBodyClassName-DMoYUPTW.js";import"./Suspendable-Di1_g3U1.js";import"./index-BJ6ZNIxC.js";import"./TransitionView-cETjUupd.js";const ue="transparent",a=L.create({container:{flexGrow:1,flexShrink:1,flexDirection:"row",alignItems:"stretch"},root:{flexDirection:"row",display:"flex",alignItems:"center",flexWrap:"wrap",borderRadius:Q[6],backgroundColor:U.accented,borderColor:s.gray[100],borderWidth:1,paddingHorizontal:i[4],paddingTop:i[4],outlineStyle:"none",cursor:"text"},focused:{borderColor:s.gray[500],boxShadow:R.tile},hovered:{boxShadow:R.tile},disabled:{backgroundColor:s.gray[50],borderColor:s.gray[50],color:s.gray[900],cursor:"not-allowed"},readOnly:{backgroundColor:s.gray[50],borderColor:s.gray[50],color:s.gray[900]},readOnlyError:{borderColor:ue,paddingRight:i[32]},error:{borderColor:s.negative[400]},valid:{borderColor:s.positive[500]},input:{height:28,marginBottom:i[4],marginLeft:i[4],outlineStyle:"none",flexGrow:1},tag:{marginRight:i[4],marginBottom:i[4],maxWidth:350},errorContainer:{paddingTop:i[4]}}),de=/,| /,q=o.forwardRef(({validator:T=()=>!0,onFocus:c,onBlur:m,validateOnBlur:b=!0,values:n,onValuesChanged:g,readOnly:f=!1,disabled:y=!1,valid:D=!1,hideErrors:W=!1,placeholder:M,help:A,error:E},I)=>{const h=o.useRef(null),j=o.useRef(null),[B,v]=o.useState(!1),[F,k]=o.useState(!1),G=oe(h,I);Y(j,{onHoverStart:()=>k(!0),onHoverEnd:()=>k(!1)});const l=o.useCallback(t=>{var r;g([...n,...t.filter(u=>!n.includes(u))]),(r=h.current)==null||r.clear()},[n,g]),K=o.useCallback(t=>{const r=[...new Set(t.split(de).filter(u=>u.length))];(r.length>1||r[0]!==t)&&l(r)},[l]),$=o.useCallback(({nativeEvent:t})=>{y||f||Z({key:t.key,input:h.current}).with({key:"Backspace",input:C.instanceOf(HTMLInputElement)},({input:r})=>{O(r.value)&&g(n.filter(u=>u!==n[n.length-1]))}).with({key:"Enter",input:C.instanceOf(HTMLInputElement)},({input:r})=>{S(r.value)&&l([r.value])})},[g,l,n,y,f]),z=o.useCallback(()=>{var t;(t=h.current)==null||t.focus()},[]),X=o.useCallback(t=>{v(!0),c==null||c(t)},[c]),J=o.useCallback(t=>{const r=h.current;r instanceof HTMLInputElement&&S(r.value)&&b&&l([r.value]),v(!1),m==null||m(t)},[l,m,b]);o.useImperativeHandle(I,()=>({pushPendingValue:()=>{const t=h.current;t instanceof HTMLInputElement&&S(t.value)&&b&&l([t.value])}}),[l,b]);const P=S(E);return e.jsxs(_,{children:[e.jsxs(ae,{style:[a.root,f&&P&&a.readOnlyError,y&&a.disabled,f&&a.readOnly,B&&a.focused,P&&a.error,D&&a.valid,F&&a.hovered],"aria-errormessage":E,onPress:z,ref:j,children:[n.map((t,r)=>e.jsx(ne,{onPressRemove:!f&&!y?()=>g(n.filter(u=>u!==t)):void 0,style:a.tag,color:T(t)?"gray":"negative",children:t},r)),e.jsx(se,{ref:G,style:[a.input,y&&a.disabled],onFocus:X,onBlur:J,"aria-disabled":y,onChangeText:K,onKeyPress:$,readOnly:f,placeholder:M})]}),!W&&e.jsx(ee,{direction:"row",style:a.errorContainer,children:te(E)?e.jsx(w,{variant:"smallRegular",color:s.negative[500],children:E}):e.jsx(w,{variant:"smallRegular",color:s.gray[500],children:A??" "})})]})});q.__docgenInfo={description:"",methods:[{name:"pushPendingValue",docblock:null,modifiers:[],params:[],returns:null}],displayName:"LakeTagInput",props:{validator:{defaultValue:{value:"() => true",computed:!1},required:!1},validateOnBlur:{defaultValue:{value:"true",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},valid:{defaultValue:{value:"false",computed:!1},required:!1},hideErrors:{defaultValue:{value:"false",computed:!1},required:!1}}};const pe=L.create({input:{maxWidth:400}}),Be={title:"Forms/TagInput",component:le},p=T=>{const[c,m]=o.useState(["toto","dfghj@iouy.fr"]);return e.jsx(_,{style:pe.input,children:e.jsx(q,{validator:re,onValuesChanged:m,values:c,...T})})},x=()=>e.jsxs(ie,{title:"Input variations",children:[e.jsx(d,{title:"Default",children:e.jsx(p,{})}),e.jsx(d,{title:"Disabled",children:e.jsx(p,{disabled:!0})}),e.jsx(d,{title:"Error",children:e.jsx(p,{error:"Nop"})}),e.jsx(d,{title:"Hidden errors",children:e.jsx(p,{error:"Nop",hideErrors:!0})}),e.jsx(d,{title:"Valid",children:e.jsx(p,{valid:!0})}),e.jsx(d,{title:"With help",children:e.jsx(p,{help:"Fill me"})}),e.jsx(d,{title:"Read only",children:e.jsx(p,{readOnly:!0})})]});x.__docgenInfo={description:"",methods:[],displayName:"Variations"};var N,V,H;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(H=(V=x.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const Fe=["Variations"];export{x as Variations,Fe as __namedExportsOrder,Be as default};
//# sourceMappingURL=TagInput.stories-BucxmMe7.js.map