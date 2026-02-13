import{u as K,M as X,z as R,l as $,g as E,j as e,V,B as J,f as Q,L as C,c as s,s as N,d as l,o as w,m as U,r as Y}from"./ScrollView-BgLPe5gl.js";import{r as a}from"./iframe-ngjqEMqC.js";import{u as Z,P as ee}from"./Pressable-BDDPqJMq.js";import{T as re}from"./Tag-BeVid17A.js";import{T as te}from"./index-BjVJCAfz.js";import{L as oe}from"./LakeTextInput-CsHwtEVE.js";import{i as ae}from"./validation-BfafWgZ2.js";import{S as se,a as u}from"./_StoriesComponents-BcNDBbeg.js";import"./index-D9fjzRNm.js";import"./preload-helper-D1IIBeq1.js";import"./index-BgdALbfX.js";import"./extends-CF3RwP-h.js";import"./commonStyles-BBEkV6IC.js";import"./Fill-CQCjw36B.js";import"./LakeSelect-inhSWvsm.js";import"./useDisclosure-UsMSNxwM.js";import"./FocusTrap-CyCE4a0N.js";import"./array-BfAlyugE.js";import"./Popover-XqoUOrmP.js";import"./useResponsive-C_gSHRwq.js";import"./function-Di8iSVDm.js";import"./BottomPanel-BbW7GzM1.js";import"./useBodyClassName-D6r0C4YT.js";import"./Suspendable-COvRMUvY.js";import"./index-C_J9C14u.js";import"./TransitionView-D-VivBTI.js";import"./Separator-B7i4NH44.js";import"./iban-CrGnWwP9.js";import"./i18n-H1CddC6P.js";import"./rifm-MUJawLsm.js";const ne="transparent",o=N.create({container:{flexGrow:1,flexShrink:1,flexDirection:"row",alignItems:"stretch"},root:{flexDirection:"row",display:"flex",alignItems:"center",flexWrap:"wrap",borderRadius:Y[6],backgroundColor:U.accented,borderColor:s.gray[100],borderWidth:1,paddingHorizontal:l[4],paddingTop:l[4],outlineStyle:"none",cursor:"text"},focused:{borderColor:s.gray[500],boxShadow:w.tile},hovered:{boxShadow:w.tile},disabled:{backgroundColor:s.gray[50],borderColor:s.gray[50],color:s.gray[900],cursor:"not-allowed"},readOnly:{backgroundColor:s.gray[50],borderColor:s.gray[50],color:s.gray[900]},readOnlyError:{borderColor:ne,paddingRight:l[32]},error:{borderColor:s.negative[400]},valid:{borderColor:s.positive[500]},input:{height:28,marginBottom:l[4],marginLeft:l[4],outlineStyle:"none",flexGrow:1},tag:{marginRight:l[4],marginBottom:l[4],maxWidth:350},errorContainer:{paddingTop:l[4]}}),ie=/,| /,H=({ref:h,validator:T=()=>!0,onFocus:x,onBlur:I,validateOnBlur:b=!0,values:n,onValuesChanged:f,readOnly:c=!1,disabled:p=!1,valid:L=!1,hideErrors:_=!1,placeholder:B,help:F,error:S})=>{const m=a.useRef(null),j=a.useRef(null),[q,v]=a.useState(!1),[D,P]=a.useState(!1),M=Z(m,h);K(j,{onHoverStart:()=>P(!0),onHoverEnd:()=>P(!1)});const i=a.useCallback(r=>{f([...n,...r.filter(t=>!n.includes(t))]),m.current?.clear()},[n,f]),W=a.useCallback(r=>{const t=[...new Set(r.split(ie).filter(g=>g.length>0))];(t.length>1||t[0]!==r)&&i(t)},[i]),A=a.useCallback(({nativeEvent:r})=>{p||c||X({key:r.key,input:m.current}).with({key:"Backspace",input:R.instanceOf(HTMLInputElement)},({input:t})=>{$(t.value)&&f(n.filter(g=>g!==n[n.length-1]))}).with({key:"Enter",input:R.instanceOf(HTMLInputElement)},({input:t})=>{E(t.value)&&i([t.value])})},[f,i,n,p,c]),O=a.useCallback(()=>{m.current?.focus()},[]),G=a.useCallback(r=>{v(!0),x?.(r)},[x]),z=a.useCallback(r=>{const t=m.current;t instanceof HTMLInputElement&&E(t.value)&&b&&i([t.value]),v(!1),I?.(r)},[i,I,b]);a.useImperativeHandle(h,()=>({pushPendingValue:()=>{const r=m.current;r instanceof HTMLInputElement&&E(r.value)&&b&&i([r.value])}}),[i,b]);const k=E(S);return e.jsxs(V,{children:[e.jsxs(ee,{style:[o.root,c&&k&&o.readOnlyError,p&&o.disabled,c&&o.readOnly,q&&o.focused,k&&o.error,L&&o.valid,D&&o.hovered],"aria-errormessage":S,onPress:O,ref:j,children:[n.map((r,t)=>e.jsx(re,{onPressRemove:!c&&!p?()=>f(n.filter(g=>g!==r)):void 0,style:o.tag,color:T(r)?"gray":"negative",children:r},t)),e.jsx(te,{ref:M,style:[o.input,p&&o.disabled],onFocus:G,onBlur:z,"aria-disabled":p,onChangeText:W,onKeyPress:A,readOnly:c,placeholder:B})]}),!_&&e.jsx(J,{direction:"row",style:o.errorContainer,children:Q(S)?e.jsx(C,{variant:"smallRegular",color:s.negative[500],children:S}):e.jsx(C,{variant:"smallRegular",color:s.gray[500],children:F??" "})})]})};H.__docgenInfo={description:"",methods:[{name:"pushPendingValue",docblock:null,modifiers:[],params:[],returns:null}],displayName:"LakeTagInput",props:{validator:{defaultValue:{value:"() => true",computed:!1},required:!1},validateOnBlur:{defaultValue:{value:"true",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},valid:{defaultValue:{value:"false",computed:!1},required:!1},hideErrors:{defaultValue:{value:"false",computed:!1},required:!1}}};const le=N.create({input:{maxWidth:400}}),De={title:"Forms/TagInput",component:oe},d=h=>{const[T,x]=a.useState(["toto","dfghj@iouy.fr"]);return e.jsx(V,{style:le.input,children:e.jsx(H,{validator:ae,onValuesChanged:x,values:T,...h})})},y=()=>e.jsxs(se,{title:"Input variations",children:[e.jsx(u,{title:"Default",children:e.jsx(d,{})}),e.jsx(u,{title:"Disabled",children:e.jsx(d,{disabled:!0})}),e.jsx(u,{title:"Error",children:e.jsx(d,{error:"Nop"})}),e.jsx(u,{title:"Hidden errors",children:e.jsx(d,{error:"Nop",hideErrors:!0})}),e.jsx(u,{title:"Valid",children:e.jsx(d,{valid:!0})}),e.jsx(u,{title:"With help",children:e.jsx(d,{help:"Fill me"})}),e.jsx(u,{title:"Read only",children:e.jsx(d,{readOnly:!0})})]});y.__docgenInfo={description:"",methods:[],displayName:"Variations"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};const Me=["Variations"];export{y as Variations,Me as __namedExportsOrder,De as default};
//# sourceMappingURL=TagInput.stories-Ckn5VR-M.js.map
