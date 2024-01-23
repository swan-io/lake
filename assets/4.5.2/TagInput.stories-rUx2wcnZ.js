import{s as H,r as J,g as O,c as n,e as u,h as C,C as Q,N as Y,w as P,J as ee,p as q,j as x,V as A,a as e,l as ae,L as R}from"./Space-UKiLa9-i.js";import"./Boxed-X5xMwKRs.js";import"./i18n-f_cw68SN.js";import{r as t}from"./index-4g5l5LRQ.js";import{u as re,P as le,T as te}from"./Pressable-ZB7pLygl.js";import{B as ne}from"./commonStyles-dcsNUru2.js";import{T as ie}from"./Tag-2rqWRxvF.js";import{L as ue}from"./LakeTextInput-aD8eDNST.js";import{S as oe,a as s}from"./_StoriesComponents-VaLthraj.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./rifm-ZdrOEZmE.js";import"./utc-y0zBq2ZQ.js";import"./array-_tkD71ox.js";import"./index-w57Xv2k5.js";import"./Fill-zIBlph3t.js";import"./LakeSelect-sLqpwi7H.js";import"./useDisclosure-Cnlvt24p.js";import"./a11y-2bSo9Xxj.js";import"./Popover-j9yFJRJv.js";import"./useResponsive-92TvZuqI.js";import"./function-dZk570d0.js";import"./BottomPanel-2CwHhvhT.js";import"./useBodyClassName-b5H8Q92H.js";import"./math-OtRCN8eX.js";import"./FocusTrap-z7Cz7GjD.js";import"./LoadingView-2A9KwNs3.js";import"./index-hY1megw8.js";import"./TransitionView-phcFp1Go.js";import"./index-H-v6yeJw.js";import"./index-nKqN2hgb.js";const se=/^[A-Z0-9_+.-]*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,de=p=>se.test(p),pe="transparent",l=H.create({container:{flexGrow:1,flexShrink:1,flexDirection:"row",alignItems:"stretch"},root:{flexDirection:"row",display:"flex",alignItems:"center",flexWrap:"wrap",borderRadius:J[6],backgroundColor:O.accented,borderColor:n.gray[100],borderWidth:1,paddingHorizontal:u[4],paddingTop:u[4],outlineStyle:"none",cursor:"text"},focused:{borderColor:n.gray[500],boxShadow:C.tile},hovered:{boxShadow:C.tile},disabled:{backgroundColor:n.gray[50],borderColor:n.gray[50],color:n.gray[900],cursor:"not-allowed"},readOnly:{backgroundColor:n.gray[50],borderColor:n.gray[50],color:n.gray[900]},readOnlyError:{borderColor:pe,paddingRight:u[32]},error:{borderColor:n.negative[400]},valid:{borderColor:n.positive[500]},input:{height:28,marginBottom:u[4],marginLeft:u[4],outlineStyle:"none",flexGrow:1},tag:{marginRight:u[4],marginBottom:u[4],maxWidth:350},errorContainer:{paddingTop:u[4]}}),ce=/,| /,E=t.forwardRef(({validator:p=()=>!0,onFocus:c,onBlur:m,validateOnBlur:w=!0,values:i,onValuesChanged:g,readOnly:v=!1,disabled:f=!1,valid:L=!1,hideErrors:D=!1,placeholder:z,help:B,error:h},W)=>{const b=t.useRef(null),S=t.useRef(null),[M,k]=t.useState(!1),[Z,I]=t.useState(!1);Q(S,{onHoverStart:()=>I(!0),onHoverEnd:()=>I(!1)});const y=t.useCallback(a=>{var r;g([...i,...a.filter(o=>!i.includes(o))]),(r=b.current)==null||r.clear()},[i,g]),j=t.useCallback(a=>{const r=[...new Set(a.split(ce).filter(o=>o.length))];(r.length>1||r[0]!==a)&&y(r)},[y]),G=t.useCallback(({nativeEvent:a})=>{f||v||Y({key:a.key,input:b.current}).with({key:"Backspace",input:P.instanceOf(HTMLInputElement)},({input:r})=>{ee(r.value)&&g(i.filter(o=>o!==i[i.length-1]))}).with({key:"Enter",input:P.instanceOf(HTMLInputElement)},({input:r})=>{q(r.value)&&y([r.value])})},[g,y,i,f,v]),U=t.useCallback(()=>{var a;(a=b.current)==null||a.focus()},[]),F=t.useCallback(a=>{k(!0),c==null||c(a)},[c]),X=t.useCallback(a=>{const r=b.current;r instanceof HTMLInputElement&&q(r.value)&&w&&y([r.value]),k(!1),m==null||m(a)},[y,m,w]),$=re(b,W),T=q(h);return x(A,{children:[x(le,{style:[l.root,v&&T&&l.readOnlyError,f&&l.disabled,v&&l.readOnly,M&&l.focused,T&&l.error,L&&l.valid,Z&&l.hovered],"aria-errormessage":h,onPress:U,ref:S,children:[i.map((a,r)=>e(ie,{onPressRemove:!v&&!f?()=>g(i.filter(o=>o!==a)):void 0,style:l.tag,color:p(a)?"gray":"negative",children:a},r)),e(te,{ref:$,style:[l.input,f&&l.disabled],onFocus:F,onBlur:X,"aria-disabled":f,onChangeText:j,onKeyPress:G,readOnly:v,placeholder:z})]}),!D&&e(ne,{direction:"row",style:l.errorContainer,children:ae(h)?e(R,{variant:"smallRegular",color:n.negative[500],children:h}):e(R,{variant:"smallRegular",color:n.gray[500],children:B??" "})})]})});try{E.displayName="LakeTagInput",E.__docgenInfo={description:"",displayName:"LakeTagInput",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"string[]"}},onValuesChanged:{defaultValue:null,description:"",name:"onValuesChanged",required:!0,type:{name:"(values: string[]) => void"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"grid"'},{value:'"row"'},{value:'"cell"'},{value:'"alert"'},{value:'"alertdialog"'},{value:'"application"'},{value:'"article"'},{value:'"banner"'},{value:'"button"'},{value:'"checkbox"'},{value:'"columnheader"'},{value:'"combobox"'},{value:'"complementary"'},{value:'"contentinfo"'},{value:'"definition"'},{value:'"dialog"'},{value:'"directory"'},{value:'"document"'},{value:'"feed"'},{value:'"figure"'},{value:'"form"'},{value:'"group"'},{value:'"heading"'},{value:'"img"'},{value:'"link"'},{value:'"list"'},{value:'"listitem"'},{value:'"log"'},{value:'"main"'},{value:'"marquee"'},{value:'"math"'},{value:'"menu"'},{value:'"menubar"'},{value:'"menuitem"'},{value:'"meter"'},{value:'"navigation"'},{value:'"note"'},{value:'"option"'},{value:'"presentation"'},{value:'"progressbar"'},{value:'"radio"'},{value:'"radiogroup"'},{value:'"region"'},{value:'"rowgroup"'},{value:'"rowheader"'},{value:'"scrollbar"'},{value:'"searchbox"'},{value:'"separator"'},{value:'"slider"'},{value:'"spinbutton"'},{value:'"status"'},{value:'"summary"'},{value:'"switch"'},{value:'"tab"'},{value:'"table"'},{value:'"tablist"'},{value:'"tabpanel"'},{value:'"term"'},{value:'"timer"'},{value:'"toolbar"'},{value:'"tooltip"'},{value:'"tree"'},{value:'"treegrid"'},{value:'"treeitem"'},{value:'"blockquote"'},{value:'"code"'},{value:'"deletion"'},{value:'"emphasis"'},{value:'"insertion"'},{value:'"label"'},{value:'"paragraph"'},{value:'"strong"'},{value:'"gridcell"'},{value:'"listbox"'},{value:'"menuitemcheckbox"'},{value:'"menuitemradio"'},{value:'"textbox"'}]}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:'"off"'},{value:'"email"'},{value:'"url"'},{value:'"tel"'},{value:'"additional-name"'},{value:'"address-level1"'},{value:'"address-level2"'},{value:'"address-level3"'},{value:'"address-level4"'},{value:'"address-line1"'},{value:'"address-line2"'},{value:'"address-line3"'},{value:'"bday"'},{value:'"bday-day"'},{value:'"bday-month"'},{value:'"bday-year"'},{value:'"cc-additional-name"'},{value:'"cc-csc"'},{value:'"cc-exp"'},{value:'"cc-exp-month"'},{value:'"cc-exp-year"'},{value:'"cc-family-name"'},{value:'"cc-given-name"'},{value:'"cc-name"'},{value:'"cc-number"'},{value:'"cc-type"'},{value:'"country"'},{value:'"country-name"'},{value:'"current-password"'},{value:'"family-name"'},{value:'"given-name"'},{value:'"honorific-prefix"'},{value:'"honorific-suffix"'},{value:'"impp"'},{value:'"language"'},{value:'"name"'},{value:'"new-password"'},{value:'"nickname"'},{value:'"on"'},{value:'"one-time-code"'},{value:'"organization"'},{value:'"organization-title"'},{value:'"postal-code"'},{value:'"sex"'},{value:'"street-address"'},{value:'"tel-area-code"'},{value:'"tel-country-code"'},{value:'"tel-extension"'},{value:'"tel-local"'},{value:'"tel-national"'},{value:'"transaction-amount"'},{value:'"transaction-currency"'},{value:'"username"'}]}},enterKeyHint:{defaultValue:null,description:"",name:"enterKeyHint",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"done"'},{value:'"go"'},{value:'"next"'},{value:'"send"'},{value:'"previous"'},{value:'"enter"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyDownCapture:{defaultValue:null,description:"",name:"onKeyDownCapture",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyUpCapture:{defaultValue:null,description:"",name:"onKeyUpCapture",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},tabIndex:{defaultValue:null,description:"Additional accessibility props",name:"tabIndex",required:!1,type:{name:"enum",value:[{value:"0"},{value:"-1"}]}},"aria-activedescendant":{defaultValue:null,description:`Aria props (additional, minus existants)
@see https://necolas.github.io/react-native-web/docs/accessibility
@see https://reactnative.dev/docs/accessibility#aria-valuemax`,name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-atomic":{defaultValue:null,description:"",name:"aria-atomic",required:!1,type:{name:"boolean"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"string"}},"aria-colcount":{defaultValue:null,description:"",name:"aria-colcount",required:!1,type:{name:"number"}},"aria-colindex":{defaultValue:null,description:"",name:"aria-colindex",required:!1,type:{name:"number"}},"aria-colspan":{defaultValue:null,description:"",name:"aria-colspan",required:!1,type:{name:"number"}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},"aria-current":{defaultValue:null,description:"",name:"aria-current",required:!1,type:{name:'boolean | "page" | "step" | "location" | "date" | "time"'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}},"aria-errormessage":{defaultValue:null,description:"",name:"aria-errormessage",required:!1,type:{name:"string"}},"aria-flowto":{defaultValue:null,description:"",name:"aria-flowto",required:!1,type:{name:"string"}},"aria-haspopup":{defaultValue:null,description:"",name:"aria-haspopup",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:"boolean"}},"aria-keyshortcuts":{defaultValue:null,description:"",name:"aria-keyshortcuts",required:!1,type:{name:"string"}},"aria-level":{defaultValue:null,description:"",name:"aria-level",required:!1,type:{name:"number"}},"aria-multiline":{defaultValue:null,description:"",name:"aria-multiline",required:!1,type:{name:"boolean"}},"aria-multiselectable":{defaultValue:null,description:"",name:"aria-multiselectable",required:!1,type:{name:"boolean"}},"aria-orientation":{defaultValue:null,description:"",name:"aria-orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},"aria-owns":{defaultValue:null,description:"",name:"aria-owns",required:!1,type:{name:"string"}},"aria-placeholder":{defaultValue:null,description:"",name:"aria-placeholder",required:!1,type:{name:"string"}},"aria-posinset":{defaultValue:null,description:"",name:"aria-posinset",required:!1,type:{name:"number"}},"aria-pressed":{defaultValue:null,description:"",name:"aria-pressed",required:!1,type:{name:"boolean"}},"aria-readonly":{defaultValue:null,description:"",name:"aria-readonly",required:!1,type:{name:"boolean"}},"aria-required":{defaultValue:null,description:"",name:"aria-required",required:!1,type:{name:"boolean"}},"aria-roledescription":{defaultValue:null,description:"",name:"aria-roledescription",required:!1,type:{name:"string"}},"aria-rowcount":{defaultValue:null,description:"",name:"aria-rowcount",required:!1,type:{name:"number"}},"aria-rowindex":{defaultValue:null,description:"",name:"aria-rowindex",required:!1,type:{name:"number"}},"aria-rowspan":{defaultValue:null,description:"",name:"aria-rowspan",required:!1,type:{name:"number"}},"aria-setsize":{defaultValue:null,description:"",name:"aria-setsize",required:!1,type:{name:"number"}},"aria-sort":{defaultValue:null,description:"",name:"aria-sort",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"ascending"'},{value:'"descending"'},{value:'"other"'}]}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"",name:"valid",required:!1,type:{name:"boolean"}},hideErrors:{defaultValue:{value:"false"},description:"",name:"hideErrors",required:!1,type:{name:"boolean"}},validateOnBlur:{defaultValue:{value:"true"},description:"",name:"validateOnBlur",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"string"}},validator:{defaultValue:{value:"() => true"},description:"",name:"validator",required:!1,type:{name:"((value: string) => boolean)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const me=H.create({input:{maxWidth:400}}),Ue={title:"Forms/TagInput",component:ue},d=p=>{const[c,m]=t.useState(["toto","dfghj@iouy.fr"]);return e(A,{style:me.input,children:e(E,{validator:de,onValuesChanged:m,values:c,...p})})},V=()=>x(oe,{title:"Input variations",children:[e(s,{title:"Default",children:e(d,{})}),e(s,{title:"Disabled",children:e(d,{disabled:!0})}),e(s,{title:"Error",children:e(d,{error:"Nop"})}),e(s,{title:"Hidden errors",children:e(d,{error:"Nop",hideErrors:!0})}),e(s,{title:"Valid",children:e(d,{valid:!0})}),e(s,{title:"With help",children:e(d,{help:"Fill me"})}),e(s,{title:"Read only",children:e(d,{readOnly:!0})})]});var N,K,_;V.parameters={...V.parameters,docs:{...(N=V.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(_=(K=V.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};const Fe=["Variations"];export{V as Variations,Fe as __namedExportsOrder,Ue as default};
//# sourceMappingURL=TagInput.stories-rUx2wcnZ.js.map
