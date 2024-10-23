import{j as e}from"./jsx-runtime-BlAj40OV.js";import{i as Q}from"./validation-BAzW4p9L.js";import{r as o}from"./index-Cs7sjTYM.js";import{s as L,r as U,d as Y,c as s,b as l,g as R,E as Z,z as O,N as C,o as ee,h as S,V as _,B as te,i as re,L as w}from"./ScrollView-CdeN2c90.js";import{u as oe,P as ae}from"./Pressable-Cm7BIrql.js";import{T as se}from"./Tag-Cz2aSnPn.js";import{T as ne}from"./index-9wgo8SO9.js";import{L as ie}from"./LakeTextInput-DcfmN3Ux.js";import{S as le,a as d}from"./_StoriesComponents-DlaK0P1a.js";import"./utc-Bb9NEY8r.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iban-DC8cy8qB.js";import"./i18n-Fuk8P8l9.js";import"./rifm-CS9mxFk2.js";import"./array-BfAlyugE.js";import"./index-DJFdew98.js";import"./index-B-e40BQY.js";import"./extends-CF3RwP-h.js";import"./commonStyles-t4XfA7cz.js";import"./Fill-C1Xrh8KL.js";import"./LakeSelect-Y_I7aE6k.js";import"./useDisclosure-DLkMFUa4.js";import"./FocusTrap-CkiMevqq.js";import"./Popover-BGCmf6kz.js";import"./useResponsive-CzIqCC5v.js";import"./function-DqanX5uB.js";import"./BottomPanel-DFGNGfH6.js";import"./useBodyClassName-DMoYUPTW.js";import"./Suspendable-RLtE4NdL.js";import"./index-BaFjtvWz.js";import"./TransitionView-CDS0x0T_.js";const ue="transparent",a=L.create({container:{flexGrow:1,flexShrink:1,flexDirection:"row",alignItems:"stretch"},root:{flexDirection:"row",display:"flex",alignItems:"center",flexWrap:"wrap",borderRadius:U[6],backgroundColor:Y.accented,borderColor:s.gray[100],borderWidth:1,paddingHorizontal:l[4],paddingTop:l[4],outlineStyle:"none",cursor:"text"},focused:{borderColor:s.gray[500],boxShadow:R.tile},hovered:{boxShadow:R.tile},disabled:{backgroundColor:s.gray[50],borderColor:s.gray[50],color:s.gray[900],cursor:"not-allowed"},readOnly:{backgroundColor:s.gray[50],borderColor:s.gray[50],color:s.gray[900]},readOnlyError:{borderColor:ue,paddingRight:l[32]},error:{borderColor:s.negative[400]},valid:{borderColor:s.positive[500]},input:{height:28,marginBottom:l[4],marginLeft:l[4],outlineStyle:"none",flexGrow:1},tag:{marginRight:l[4],marginBottom:l[4],maxWidth:350},errorContainer:{paddingTop:l[4]}}),de=/,| /,q=o.forwardRef(({validator:T=()=>!0,onFocus:c,onBlur:m,validateOnBlur:b=!0,values:n,onValuesChanged:g,readOnly:f=!1,disabled:h=!1,valid:D=!1,hideErrors:W=!1,placeholder:M,help:A,error:E},I)=>{const y=o.useRef(null),j=o.useRef(null),[B,v]=o.useState(!1),[F,P]=o.useState(!1),G=oe(y,I);Z(j,{onHoverStart:()=>P(!0),onHoverEnd:()=>P(!1)});const i=o.useCallback(t=>{var r;g([...n,...t.filter(u=>!n.includes(u))]),(r=y.current)==null||r.clear()},[n,g]),z=o.useCallback(t=>{const r=[...new Set(t.split(de).filter(u=>u.length))];(r.length>1||r[0]!==t)&&i(r)},[i]),K=o.useCallback(({nativeEvent:t})=>{h||f||O({key:t.key,input:y.current}).with({key:"Backspace",input:C.instanceOf(HTMLInputElement)},({input:r})=>{ee(r.value)&&g(n.filter(u=>u!==n[n.length-1]))}).with({key:"Enter",input:C.instanceOf(HTMLInputElement)},({input:r})=>{S(r.value)&&i([r.value])})},[g,i,n,h,f]),X=o.useCallback(()=>{var t;(t=y.current)==null||t.focus()},[]),$=o.useCallback(t=>{v(!0),c==null||c(t)},[c]),J=o.useCallback(t=>{const r=y.current;r instanceof HTMLInputElement&&S(r.value)&&b&&i([r.value]),v(!1),m==null||m(t)},[i,m,b]);o.useImperativeHandle(I,()=>({pushPendingValue:()=>{const t=y.current;t instanceof HTMLInputElement&&S(t.value)&&b&&i([t.value])}}),[i,b]);const k=S(E);return e.jsxs(_,{children:[e.jsxs(ae,{style:[a.root,f&&k&&a.readOnlyError,h&&a.disabled,f&&a.readOnly,B&&a.focused,k&&a.error,D&&a.valid,F&&a.hovered],"aria-errormessage":E,onPress:X,ref:j,children:[n.map((t,r)=>e.jsx(se,{onPressRemove:!f&&!h?()=>g(n.filter(u=>u!==t)):void 0,style:a.tag,color:T(t)?"gray":"negative",children:t},r)),e.jsx(ne,{ref:G,style:[a.input,h&&a.disabled],onFocus:$,onBlur:J,"aria-disabled":h,onChangeText:z,onKeyPress:K,readOnly:f,placeholder:M})]}),!W&&e.jsx(te,{direction:"row",style:a.errorContainer,children:re(E)?e.jsx(w,{variant:"smallRegular",color:s.negative[500],children:E}):e.jsx(w,{variant:"smallRegular",color:s.gray[500],children:A??" "})})]})});q.__docgenInfo={description:"",methods:[{name:"pushPendingValue",docblock:null,modifiers:[],params:[],returns:null}],displayName:"LakeTagInput",props:{validator:{defaultValue:{value:"() => true",computed:!1},required:!1},validateOnBlur:{defaultValue:{value:"true",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},valid:{defaultValue:{value:"false",computed:!1},required:!1},hideErrors:{defaultValue:{value:"false",computed:!1},required:!1}}};const pe=L.create({input:{maxWidth:400}}),Ge={title:"Forms/TagInput",component:ie},p=T=>{const[c,m]=o.useState(["toto","dfghj@iouy.fr"]);return e.jsx(_,{style:pe.input,children:e.jsx(q,{validator:Q,onValuesChanged:m,values:c,...T})})},x=()=>e.jsxs(le,{title:"Input variations",children:[e.jsx(d,{title:"Default",children:e.jsx(p,{})}),e.jsx(d,{title:"Disabled",children:e.jsx(p,{disabled:!0})}),e.jsx(d,{title:"Error",children:e.jsx(p,{error:"Nop"})}),e.jsx(d,{title:"Hidden errors",children:e.jsx(p,{error:"Nop",hideErrors:!0})}),e.jsx(d,{title:"Valid",children:e.jsx(p,{valid:!0})}),e.jsx(d,{title:"With help",children:e.jsx(p,{help:"Fill me"})}),e.jsx(d,{title:"Read only",children:e.jsx(p,{readOnly:!0})})]});x.__docgenInfo={description:"",methods:[],displayName:"Variations"};var N,V,H;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(H=(V=x.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const ze=["Variations"];export{x as Variations,ze as __namedExportsOrder,Ge as default};
//# sourceMappingURL=TagInput.stories-CvcdHUhd.js.map
