import{S as ve,c as U,j as K,F as ke,a,V as O,T as Y,d as z,h as Ke,e as Oe,s as Ie,i as oe}from"./Space-866c6d2d.js";import{r as u}from"./index-ebeaab24.js";import{t as ge}from"./typography-6ad07e3d.js";import{u as J}from"./useDisclosure-f840d913.js";import{B as pe,K as ce,S as ee}from"./index-9b96a6d6.js";import{I as Ee}from"./Icon-3493efb8.js";import{L as ie}from"./LakeButton-8fafd98b.js";import{P as Q}from"./Popover-9810256f.js";import{F as me}from"./index-29353d3f.js";import{P as le}from"./index-b75cb4fd.js";import{d as te,g as _e}from"./rifm-98d27cea.js";import{s as be}from"./index-1cb3eff1.js";import{a as Be}from"./useMergeRefs-f233a2be.js";import{u as Le}from"./TransitionView-3cdd81bf.js";import{L as ze}from"./LakeCheckbox-c82a5919.js";import{L as Re}from"./LakeLabel-2a8f3c0c.js";import{L as je}from"./LakeRadio-44cba0d1.js";import{L as qe}from"./LakeTextInput-940a68b6.js";import{T as Ce}from"./Tag-9b4c9700.js";import{W as Ae}from"./WithCurrentColor-cfe5d31c.js";import{S as Me}from"./_StoriesComponents-143445d5.js";import"./extends-98964cd2.js";import"./colors-298625c7.js";import"./Svg-36b671a5.js";import"./Pressable-4fafd1ef.js";import"./index-deb1010d.js";import"./useResponsive-ef76c96a.js";import"./BottomPanel-d725ff2d.js";import"./commonStyles-d52fedae.js";import"./useBodyClassName-9a26f8eb.js";import"./math-d32b57c3.js";import"./FocusTrap-56467b63.js";import"./array-b3630b94.js";import"./LoadingView-54104e73.js";import"./Portal-0e36c32f.js";import"./index-9c09ad76.js";import"./index-1573ab06.js";import"./v4-a960c1f4.js";import"./Fill-6bd9df79.js";const $=ve.create({selected:{color:U.gray[500]},list:{paddingVertical:20,marginVertical:4,minWidth:250,overflow:"hidden"},item:{display:"flex",paddingHorizontal:24,flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingVertical:8},itemHovered:{backgroundColor:U.gray[50]},availableFiltersTitle:{...ge.bodyLarge,color:U.current[500],paddingHorizontal:24},filterName:{...ge.bodySmall}});function ae({filters:t,openFilters:r,label:o,title:c,availableFilters:s,large:h=!0,onAddFilter:S}){const i=u.useRef(null),[f,{close:d,toggle:g}]=J(!1);return K(ke,{children:[a(pe,{direction:"row",justifyContent:"start",alignItems:"center",children:a(ie,{size:"small",mode:"secondary",color:"gray",onPress:g,ref:i,icon:h?"chevron-down-filled":"filter-filled",iconPosition:"end",ariaLabel:o,children:h?o:null})}),a(Q,{role:"listbox",matchReferenceMinWidth:!0,onDismiss:d,referenceRef:i,returnFocus:!1,visible:f,children:K(O,{style:$.list,children:[a(Y,{style:$.availableFiltersTitle,children:c}),a(z,{height:8}),a(me,{role:"list",data:s,keyExtractor:(F,l)=>`filter-item-${l}`,renderItem:({item:F})=>{const l=!!t[F.name]||r.includes(F.name);return K(le,{style:({hovered:w})=>[$.item,w&&$.itemHovered],role:"button",disabled:l,onPress:()=>{S(F.name),d()},children:[a(Y,{style:[$.filterName,l&&$.selected],children:F.label}),l&&a(Ee,{color:U.positive[500],name:"checkmark-filled",size:14})]})}})]})})]})}try{ae.displayName="FilterChooser",ae.__docgenInfo={description:"",displayName:"FilterChooser",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"Partial<Record<FilterName, unknown>>"}},openFilters:{defaultValue:null,description:"",name:"openFilters",required:!0,type:{name:"FilterName[]"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},availableFilters:{defaultValue:null,description:"",name:"availableFilters",required:!0,type:{name:"{ label: string; name: FilterName; }[]"}},large:{defaultValue:{value:"true"},description:"",name:"large",required:!1,type:{name:"boolean"}},onAddFilter:{defaultValue:null,description:"",name:"onAddFilter",required:!0,type:{name:"(filterName: FilterName) => void"}}}}}catch{}function L(){return L=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c])}return t},L.apply(this,arguments)}var We=typeof window>"u"?u.useEffect:u.useLayoutEffect,He=function(t){return t},Fe=function(){},Se=function(t){return typeof t=="function"?t():t},se=function(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"},Te=function(t,r){return r.every(function(o){return t[o]!==void 0})},Pe=function(t){var r=u.useReducer(function(){return[]},[])[1],o=u.useRef(!1),c=u.useRef(t),s=u.useRef("untouched");We(function(){c.current=t}),u.useEffect(function(){return o.current=!0,function(){o.current=!1}},[]);var h=u.useRef(),S=u.useRef(),i=u.useRef(),f=u.useRef(),d=u.useRef(),g=u.useRef(),F=u.useRef(),l=u.useMemo(function(){var T=function(e){return Se(c.current[e].initialValue)},y=function(e){var n;return(n=c.current[e].sanitize)!=null?n:He},R=function(e){var n;return(n=c.current[e].validate)!=null?n:Fe},x=function(e){return i.current[e]},b=function(e,n){var m=h.current[e],p=typeof n=="function"?n({value:m.exposed.value,talkative:m.talkative,validity:m.validity}):n,C=p.talkative&&p.validity.tag!=="unknown"?{validating:p.validity.tag==="validating",valid:p.validity.tag==="valid",error:p.validity.tag==="invalid"?p.validity.error:void 0}:{validating:!1,valid:!R(e),error:void 0};h.current[e]={talkative:p.talkative,validity:p.validity,exposed:L({},C,{value:p.value})}},V=function(e){var n=d.current[e],m=n!==void 0;return m&&(clearTimeout(n),d.current[e]=void 0),m},v=function(e){S.current[e].forEach(function(n){return n()})},k=function(e,n){var m=function(p){var C;return(C=c.current[p].strategy)!=null?C:"onSuccessOrBlur"}(e);n&&!n.some(function(p){return m===p})||b(e,function(p){return L({},p,{talkative:!0})})},j=function(e){b(e,function(n){return L({},n,{validity:{tag:"validating"}})})},A=function(e,n){b(e,function(m){return L({},m,{validity:n!==void 0?{tag:"invalid",error:n}:{tag:"valid"}})})},W=function(e,n){n===void 0&&(n={});var m=h.current[e].exposed;return n.sanitize?L({},m,{value:y(e)(m.value)}):m},B=function(e){var n=V(e),m=y(e),p=R(e),C=m(h.current[e].exposed.value),H=p(C,{getFieldState:W,focusField:G});if(!se(H)){var M=H;return M===void 0&&k(e,["onSuccess","onSuccessOrBlur"]),A(e,M),v(e),M}return n||(j(e),v(e)),H.then(function(I){var Z=function(_){var N;return(N=c.current[_].equalityFn)!=null?N:Object.is}(e),P=m(h.current[e].exposed.value);if(Z(C,P))return I===void 0&&k(e,["onSuccess","onSuccessOrBlur"]),A(e,I),v(e),I}).catch(function(I){})},G=function(e){var n=f.current[e];n.current&&typeof n.current.focus=="function"&&n.current.focus()},ye=function(e,n){n===void 0&&(n={}),V(e),b(e,function(m){return{value:n.feedbackOnly?m.value:T(e),talkative:!1,validity:{tag:"unknown"}}}),v(e)},he=function(e,n){var m=e[n.findIndex(function(p){return p!==void 0})];m!==void 0&&G(m)},X=function(e,n){se(e)?(r(),e.finally(function(){s.current="submitted",o.current&&r()})):(s.current="submitted",n&&r())};return{getFieldState:W,setFieldValue:function(e,n,m){m===void 0&&(m={}),b(e,function(p){return L({},p,{value:n})}),m.validate&&k(e),B(e)},setFieldError:function(e,n){A(e,n),k(e),v(e)},focusField:G,resetField:ye,validateField:function(e){return x(e)?(k(e),Promise.resolve(B(e))):Promise.resolve(void 0)},listenFields:function(e,n){var m=function(){n(e.reduce(function(p,C){return p[C]=W(C),p},{}))};return e.forEach(function(p){return S.current[p].add(m)}),function(){e.forEach(function(p){return S.current[p].delete(m)})}},resetForm:function(e){e===void 0&&(e={}),Object.keys(c.current).forEach(function(n){return ye(n,e)}),e.feedbackOnly||(s.current="untouched"),r()},submitForm:function(e,n,m){if(n===void 0&&(n=Fe),m===void 0&&(m={}),s.current!=="submitting"){var p=s.current==="editing";s.current="submitting";var C=Object.keys(i.current).filter(function(P){return i.current[P]}),H={},M={},I=[],Z=!m.avoidFocusOnError;if(C.forEach(function(P,_){k(P),H[P]=W(P,{sanitize:!0}).value,I[_]=B(P)}),function(P){return P.every(function(_){return!se(_)})}(I))return I.every(function(P){return P===void 0})?X(e(H),p):(Z&&he(C,I),C.forEach(function(P,_){M[P]=I[_]}),X(n(M),p));r(),Promise.all(I.map(function(P){return Promise.resolve(P)})).then(function(P){var _=P;return _.every(function(N){return N===void 0})?X(e(H),p):(Z&&he(C,_),C.forEach(function(N,De){M[N]=_[De]}),X(n(M),p))}).finally(function(){s.current="submitted",o.current&&r()})}},setState:b,getOnChange:function(e){return function(n){var m=function(p){var C;return(C=c.current[p].debounceInterval)!=null?C:0}(e);b(e,function(p){return L({},p,{value:n})}),k(e,["onChange"]),V(e),s.current!=="untouched"&&s.current!=="submitted"||(s.current="editing",r()),m!==0?(j(e),v(e),d.current[e]=setTimeout(function(){x(e)?B(e):V(e)},m)):B(e)}},getOnBlur:function(e){return function(){h.current[e].validity.tag==="unknown"||function(n){return h.current[n].talkative}(e)||(k(e,["onBlur","onSuccessOrBlur"]),B(e))}},getFocusNextField:function(e){return function(){var n=Object.keys(c.current),m=n.findIndex(function(C){return C===e});if(m!==void 0){var p=n[m+1];p!==void 0&&G(p)}}}}},[]);if(!h.current){for(var w in h.current={},S.current={},i.current={},f.current={},d.current={},c.current)Object.prototype.hasOwnProperty.call(c.current,w)&&(l.setState(w,{value:Se(c.current[w].initialValue),talkative:!1,validity:{tag:"unknown"}}),S.current[w]=new Set,i.current[w]=!1,f.current[w]={current:null},d.current[w]=void 0);var E=function(T){var y=T.name,R=T.children,x=u.useMemo(function(){return{getSnapshot:function(){return h.current[y]},subscribe:function(V){return S.current[y].add(V),function(){S.current[y].delete(V)}}}},[y]),b=x.getSnapshot;return be.useSyncExternalStore(x.subscribe,b,b),u.useEffect(function(){var V=!i.current[y];return V&&(i.current[y]=!0),function(){V&&(i.current[y]=!1)}},[y]),R(L({},l.getFieldState(y),{ref:f.current[y],focusNextField:u.useMemo(function(){return l.getFocusNextField(y)},[y]),onBlur:u.useMemo(function(){return l.getOnBlur(y)},[y]),onChange:u.useMemo(function(){return l.getOnChange(y)},[y])}))};E.displayName="Field",g.current=E;var D=function(T){var y=T.names,R=T.children,x=u.useMemo(function(){return{getSnapshot:function(){return JSON.stringify(y.map(function(V){return h.current[V]}))},subscribe:function(V){return y.forEach(function(v){return S.current[v].add(V)}),function(){y.forEach(function(v){return S.current[v].delete(V)})}}}},[JSON.stringify(y)]),b=x.getSnapshot;return be.useSyncExternalStore(x.subscribe,b,b),R(y.reduce(function(V,v){return V[v]=l.getFieldState(v),V},{}))};D.displayName="FieldsListener",F.current=D}return{formStatus:s.current,Field:g.current,FieldsListener:F.current,getFieldState:l.getFieldState,setFieldValue:l.setFieldValue,setFieldError:l.setFieldError,focusField:l.focusField,resetField:l.resetField,validateField:l.validateField,listenFields:l.listenFields,resetForm:l.resetForm,submitForm:l.submitForm}};const Ne=t=>{const[,r]=u.useReducer(f=>f+1,0),o=u.useRef(null),{replace:c,append:s}=t,h=c?c(t.format(t.value)):t.format(t.value),S=u.useRef(!1),i=f=>{const d=f.target.value;o.current=[d,f.target,d.length>h.length,S.current,h===t.format(d)],r()};return u.useLayoutEffect(()=>{if(o.current==null)return;let[f,d,g,F,l]=o.current;o.current=null;const w=F&&l,D=f.slice(d.selectionStart).search(t.accept||/\d/g),T=D!==-1?D:0,y=v=>(v.match(t.accept||/\d/g)||[]).join(""),R=y(f.substr(0,d.selectionStart)),x=v=>{let k=0,j=0;for(let A=0;A!==R.length;++A){let W=v.indexOf(R[A],k)+1,B=y(v).indexOf(R[A],j)+1;B-j>1&&(W=k,B=j),j=Math.max(B,j),k=Math.max(k,W)}return k};if(t.mask===!0&&g&&!l){let v=x(f);const k=y(f.substr(v))[0];v=f.indexOf(k,v),f=`${f.substr(0,v)}${f.substr(v+1)}`}let b=t.format(f);s!=null&&d.selectionStart===f.length&&!l&&(g?b=s(b):y(b.slice(-1))===""&&(b=b.slice(0,-1)));const V=c?c(b):b;return h===V?r():t.onChange(V),()=>{let v=x(b);if(t.mask!=null&&(g||F&&!w))for(;b[v]&&y(b[v])==="";)v+=1;d.selectionStart=d.selectionEnd=v+(w?1+T:0)}}),u.useEffect(()=>{const f=g=>{g.code==="Delete"&&(S.current=!0)},d=g=>{g.code==="Delete"&&(S.current=!1)};return document.addEventListener("keydown",f),document.addEventListener("keyup",d),()=>{document.removeEventListener("keydown",f),document.removeEventListener("keyup",d)}},[]),{value:o.current!=null?o.current[0]:h,onChange:i}},$e=t=>{const r=Ne(t);return t.children(r)},Ue=ve.create({wrap:{flexWrap:"wrap"}}),de=u.forwardRef(({children:t,space:r,wrap:o=!1,...c},s)=>{const{direction:h="column"}=c,S=h==="row"||h==="rowReverse";return a(pe,{style:o&&Ue.wrap,ref:s,...c,children:u.Children.map(t,(i,f)=>Ke(i)?i:K(u.Fragment,{children:[f!==0&&(S?a(z,{width:r}):a(z,{height:r})),i]}))})});try{de.displayName="Stack",de.__docgenInfo={description:"",displayName:"Stack",props:{role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"label"'},{value:'"form"'},{value:'"none"'},{value:'"grid"'},{value:'"cell"'},{value:'"alert"'},{value:'"alertdialog"'},{value:'"application"'},{value:'"article"'},{value:'"banner"'},{value:'"button"'},{value:'"checkbox"'},{value:'"columnheader"'},{value:'"combobox"'},{value:'"complementary"'},{value:'"contentinfo"'},{value:'"definition"'},{value:'"dialog"'},{value:'"directory"'},{value:'"document"'},{value:'"feed"'},{value:'"figure"'},{value:'"group"'},{value:'"heading"'},{value:'"img"'},{value:'"link"'},{value:'"list"'},{value:'"listitem"'},{value:'"log"'},{value:'"main"'},{value:'"marquee"'},{value:'"math"'},{value:'"menu"'},{value:'"menubar"'},{value:'"menuitem"'},{value:'"meter"'},{value:'"navigation"'},{value:'"note"'},{value:'"option"'},{value:'"presentation"'},{value:'"progressbar"'},{value:'"radio"'},{value:'"radiogroup"'},{value:'"region"'},{value:'"rowgroup"'},{value:'"rowheader"'},{value:'"scrollbar"'},{value:'"searchbox"'},{value:'"separator"'},{value:'"slider"'},{value:'"spinbutton"'},{value:'"status"'},{value:'"summary"'},{value:'"switch"'},{value:'"tab"'},{value:'"table"'},{value:'"tablist"'},{value:'"tabpanel"'},{value:'"term"'},{value:'"timer"'},{value:'"toolbar"'},{value:'"tooltip"'},{value:'"tree"'},{value:'"treegrid"'},{value:'"treeitem"'},{value:'"blockquote"'},{value:'"code"'},{value:'"deletion"'},{value:'"emphasis"'},{value:'"insertion"'},{value:'"paragraph"'},{value:'"strong"'},{value:'"gridcell"'},{value:'"listbox"'},{value:'"menuitemcheckbox"'},{value:'"menuitemradio"'},{value:'"textbox"'}]}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyDownCapture:{defaultValue:null,description:"",name:"onKeyDownCapture",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyUpCapture:{defaultValue:null,description:"",name:"onKeyUpCapture",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},tabIndex:{defaultValue:null,description:"Additional accessibility props",name:"tabIndex",required:!1,type:{name:"enum",value:[{value:"0"},{value:"-1"}]}},"aria-activedescendant":{defaultValue:null,description:`Aria props (additional, minus existants)
@see https://necolas.github.io/react-native-web/docs/accessibility
@see https://reactnative.dev/docs/accessibility#aria-valuemax`,name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-atomic":{defaultValue:null,description:"",name:"aria-atomic",required:!1,type:{name:"boolean"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"string"}},"aria-colcount":{defaultValue:null,description:"",name:"aria-colcount",required:!1,type:{name:"number"}},"aria-colindex":{defaultValue:null,description:"",name:"aria-colindex",required:!1,type:{name:"number"}},"aria-colspan":{defaultValue:null,description:"",name:"aria-colspan",required:!1,type:{name:"number"}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},"aria-current":{defaultValue:null,description:"",name:"aria-current",required:!1,type:{name:'boolean | "page" | "step" | "location" | "date" | "time"'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}},"aria-errormessage":{defaultValue:null,description:"",name:"aria-errormessage",required:!1,type:{name:"string"}},"aria-flowto":{defaultValue:null,description:"",name:"aria-flowto",required:!1,type:{name:"string"}},"aria-haspopup":{defaultValue:null,description:"",name:"aria-haspopup",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:"boolean"}},"aria-keyshortcuts":{defaultValue:null,description:"",name:"aria-keyshortcuts",required:!1,type:{name:"string"}},"aria-level":{defaultValue:null,description:"",name:"aria-level",required:!1,type:{name:"number"}},"aria-multiline":{defaultValue:null,description:"",name:"aria-multiline",required:!1,type:{name:"boolean"}},"aria-multiselectable":{defaultValue:null,description:"",name:"aria-multiselectable",required:!1,type:{name:"boolean"}},"aria-orientation":{defaultValue:null,description:"",name:"aria-orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},"aria-owns":{defaultValue:null,description:"",name:"aria-owns",required:!1,type:{name:"string"}},"aria-placeholder":{defaultValue:null,description:"",name:"aria-placeholder",required:!1,type:{name:"string"}},"aria-posinset":{defaultValue:null,description:"",name:"aria-posinset",required:!1,type:{name:"number"}},"aria-pressed":{defaultValue:null,description:"",name:"aria-pressed",required:!1,type:{name:"boolean"}},"aria-readonly":{defaultValue:null,description:"",name:"aria-readonly",required:!1,type:{name:"boolean"}},"aria-required":{defaultValue:null,description:"",name:"aria-required",required:!1,type:{name:"boolean"}},"aria-roledescription":{defaultValue:null,description:"",name:"aria-roledescription",required:!1,type:{name:"string"}},"aria-rowcount":{defaultValue:null,description:"",name:"aria-rowcount",required:!1,type:{name:"number"}},"aria-rowindex":{defaultValue:null,description:"",name:"aria-rowindex",required:!1,type:{name:"number"}},"aria-rowspan":{defaultValue:null,description:"",name:"aria-rowspan",required:!1,type:{name:"number"}},"aria-setsize":{defaultValue:null,description:"",name:"aria-setsize",required:!1,type:{name:"number"}},"aria-sort":{defaultValue:null,description:"",name:"aria-sort",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"ascending"'},{value:'"descending"'},{value:'"other"'}]}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"stretch"'},{value:'"baseline"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"columnReverse"'},{value:'"rowReverse"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"normal"'},{value:'"spaceBetween"'},{value:'"spaceAround"'},{value:'"spaceEvenly"'}]}},space:{defaultValue:null,description:"",name:"space",required:!1,type:{name:"enum",value:[{value:"16"},{value:"4"},{value:"8"},{value:"12"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"72"},{value:"96"}]}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const q=ve.create({container:{paddingRight:12,paddingBottom:8},shadowed:{position:"absolute",opacity:0,width:"100%",height:"100%",borderRadius:4,boxShadow:Oe.tile,transitionDuration:"150ms",transitionProperty:"opacity"},hovered:{opacity:1},dropdown:{maxHeight:400,minWidth:200},itemHovered:{backgroundColor:U.gray[50]},content:{paddingVertical:12},inputContent:{padding:24},radio:{display:"flex",flexDirection:"row",alignItems:"center",height:32,paddingHorizontal:24},input:{minWidth:200},value:{maxWidth:130,whiteSpace:"nowrap"},buttonContainer:{paddingHorizontal:Ie[24]}}),ue=u.forwardRef(({onPress:t,onPressRemove:r,label:o,value:c="",isActive:s},h)=>{const S=u.useRef(null),i=Be(S,h);return a(le,{ref:i,onPress:t,children:({hovered:f})=>K(ke,{children:[a(O,{style:[q.shadowed,f&&q.hovered]}),a(Ce,{label:o,color:"current",onPressRemove:r,children:K(pe,{direction:"row",alignItems:"center",children:[a(Y,{numberOfLines:1,style:q.value,children:c}),a(z,{width:4}),a(Ee,{color:U.current.primary,name:s?"chevron-up-filled":"chevron-down-filled",size:16})]})})]})})});function Ye({label:t,items:r,value:o,onValueChange:c,onPressRemove:s,autoOpen:h=!1}){const S=u.useRef(null),[i,{close:f,toggle:d}]=J(h),g=u.useMemo(()=>r.find(F=>F.value===o),[r,o]);return K(O,{style:q.container,children:[a(ue,{label:t,onPress:d,ref:S,onPressRemove:s,isActive:i,value:g==null?void 0:g.label}),a(Q,{role:"listbox",matchReferenceWidth:!1,onDismiss:f,referenceRef:S,returnFocus:!1,visible:i,children:a(O,{style:q.dropdown,children:a(me,{role:"list",data:r,contentContainerStyle:q.content,keyExtractor:(F,l)=>`filter-item-${l}`,renderItem:({item:F})=>{const l=o===F.value;return K(le,{role:"radio","aria-checked":l,style:({hovered:w})=>[q.radio,w&&q.itemHovered],onPress:()=>{c(F.value),f()},children:[a(je,{value:l}),a(z,{width:12}),a(Y,{children:F.label})]})}})})})]})}function Je({label:t,items:r,checkAllLabel:o,value:c,onValueChange:s,applyButtonLabel:h,onPressRemove:S,autoOpen:i=!1}){const f=u.useRef(null),[d,{close:g,toggle:F}]=J(i),[l,w]=u.useState(c),E=u.useMemo(()=>new Set(l),[l]),D=u.useMemo(()=>r.filter(x=>E.has(x.value)),[r,E]),T=o!=null&&E.size===r.length,y=u.useMemo(()=>{if(o==null)return r;const x=E.size===0?!1:E.size===r.length?!0:"mixed";return[{label:o,checked:x},...r]},[r,o,E]),R=u.useCallback(()=>{s(l),g()},[s,l,g]);return u.useEffect(()=>{d||w(c)},[d,c]),K(O,{style:q.container,children:[a(ue,{label:t,onPress:F,ref:f,onPressRemove:S,isActive:d,value:T?o:D.map(x=>x.label).join(", ")}),a(Q,{role:"listbox",matchReferenceWidth:!1,onDismiss:g,referenceRef:f,returnFocus:!1,visible:d,children:K(O,{style:q.dropdown,children:[a(me,{role:"list",data:y,contentContainerStyle:q.content,keyExtractor:(x,b)=>`filter-item-${b}`,renderItem:({item:x})=>{const b=ce(x).with({checked:ee.any},({checked:v})=>v).with({value:ee.any},({value:v})=>E.has(v)).exhaustive(),V=ce(x).with({checked:ee.any},({checked:v})=>()=>{w(v===!0?void 0:r.map(k=>k.value))}).with({value:ee.any},({value:v})=>()=>{const k=new Set([...E]);b===!0?k.delete(v):k.add(v),k.size===0?w(void 0):w([...k])}).exhaustive();return K(le,{role:"radio","aria-checked":b,style:({hovered:v})=>[q.radio,v&&q.itemHovered],onPress:V,children:[a(ze,{value:b}),a(z,{width:12}),a(Y,{children:x.label})]})}}),a(z,{height:8}),a(O,{style:q.buttonContainer,children:a(ie,{color:"current",onPress:R,children:h})}),a(z,{height:24})]})})]})}function Qe({label:t,initialValue:r,noValueText:o,submitText:c,dateFormat:s,rifmProps:h,validate:S,onSave:i,onPressRemove:f,autoOpen:d=!1}){const g=u.useRef(null),[F,{close:l,toggle:w}]=J(d),{Field:E,submitForm:D,setFieldValue:T}=Pe({date:{initialValue:oe(r)?te(r).format(s):"",validate:S}});u.useEffect(()=>{T("date",oe(r)?te(r).format(s):"")},[r,s,T]);const y=()=>{D(R=>{if(Te(R,["date"])){const x=te(R.date,s,!0).toJSON();i(x),l()}})};return K(O,{style:q.container,children:[a(ue,{label:t,onPress:w,ref:g,onPressRemove:f,isActive:F,value:oe(r)?te(r).format(s):o}),a(Q,{role:"listbox",matchReferenceWidth:!1,onDismiss:l,referenceRef:g,returnFocus:!1,visible:F,children:K(O,{style:[q.dropdown,q.inputContent],children:[a(E,{name:"date",children:({value:R,onChange:x,error:b})=>a($e,{value:R,onChange:x,...h,children:({value:V,onChange:v})=>a(Re,{label:t,render:k=>a(qe,{nativeID:k,error:b,style:q.input,placeholder:s,value:V,onChange:v})})})}),a(ie,{color:"current",size:"small",onPress:y,children:c})]})})]})}function Ge({label:t,initialValue:r="",noValueText:o,submitText:c,autoOpen:s=!1,placeholder:h,validate:S,onSave:i,onPressRemove:f}){const d=u.useRef(null),[g,{close:F,toggle:l}]=J(s),[w,E]=u.useState(r),{Field:D,submitForm:T}=Pe({input:{initialValue:r,validate:S}}),y=()=>{T(R=>{Te(R,["input"])&&(E(R.input),i(R.input),F())})};return K(O,{style:q.container,children:[a(ue,{label:t,onPress:l,ref:d,onPressRemove:f,isActive:g,value:w===""?o:w}),a(Q,{role:"listbox",matchReferenceWidth:!1,onDismiss:F,referenceRef:d,returnFocus:!1,visible:g,children:K(O,{style:[q.dropdown,q.inputContent],children:[a(D,{name:"input",children:({error:R,value:x,onChange:b})=>a(Re,{label:t,render:V=>a(qe,{nativeID:V,error:R,style:q.input,placeholder:h,value:x,onChangeText:b})})}),a(ie,{size:"small",color:"current",onPress:y,children:c})]})})]})}function Xe({children:t,onAdd:r,onPressRemove:o}){return u.useEffect(r,[]),a(Ce,{color:"current",onPressRemove:o,children:t})}const re=(t,r,o)=>r[o],fe=({filters:t,openedFilters:r,definition:o,onChangeOpened:c,onChangeFilters:s})=>{const h=Le(r),S=r.length>h.length?r[r.length-1]:void 0;return r.length===0?null:a(de,{direction:"row",wrap:!0,children:r.map(i=>{const f=o[i];return typeof i!="string"||f==null?null:a(O,{children:ce(f).with({type:"radio"},({type:d,label:g,items:F})=>a(Ye,{label:g,items:F,autoOpen:S===i,onPressRemove:()=>{s({...t,[i]:void 0}),c(r.filter(l=>l!==i))},value:re(d,t,i),onValueChange:l=>s({...t,[i]:l})})).with({type:"checkbox"},({type:d,label:g,items:F,checkAllLabel:l,submitText:w})=>a(Je,{label:g,items:F,checkAllLabel:l,autoOpen:S===i,applyButtonLabel:w,value:re(d,t,i),onValueChange:E=>s({...t,[i]:E}),onPressRemove:()=>{s({...t,[i]:void 0}),c(r.filter(E=>E!==i))}})).with({type:"date"},({type:d,label:g,noValueText:F,submitText:l,dateFormat:w,rifmProps:E,validate:D})=>a(Qe,{label:g,noValueText:F,submitText:l,autoOpen:S===i,dateFormat:w,rifmProps:E,validate:D,initialValue:re(d,t,i),onSave:T=>s({...t,[i]:T}),onPressRemove:()=>{s({...t,[i]:void 0}),c(r.filter(T=>T!==i))}})).with({type:"input"},({type:d,label:g,placeholder:F,noValueText:l,submitText:w,validate:E})=>a(Ge,{label:g,placeholder:F,noValueText:l,submitText:w,autoOpen:S===i,validate:E,initialValue:re(d,t,i),onSave:D=>s({...t,[i]:D}),onPressRemove:()=>{s({...t,[i]:void 0}),c(r.filter(D=>D!==i))}})).with({type:"boolean"},({label:d})=>a(Xe,{onAdd:()=>{s({...t,[i]:!0})},onPressRemove:()=>{s({...t,[i]:void 0}),c(r.filter(g=>g!==i))},children:d})).exhaustive()},i)})})};try{fe.displayName="FiltersStack",fe.__docgenInfo={description:"",displayName:"FiltersStack",props:{definition:{defaultValue:null,description:"",name:"definition",required:!0,type:{name:"FiltersDefinition"}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"{ [KeyType in keyof { [K in keyof T]: { [KeyType in keyof ExtractFilterValue<T[K]>]: ExtractFilterValue<T[K]>[KeyType]; }; }]: { [K in keyof T]: { [KeyType in keyof ExtractFilterValue<T[K]>]: ExtractFilterValue<...>[KeyType]; }; }[KeyType]; }"}},openedFilters:{defaultValue:null,description:"",name:"openedFilters",required:!0,type:{name:"(keyof T)[]"}},onChangeOpened:{defaultValue:null,description:"",name:"onChangeOpened",required:!0,type:{name:"(value: (keyof T)[]) => void"}},onChangeFilters:{defaultValue:null,description:"",name:"onChangeFilters",required:!0,type:{name:"(value: { [KeyType in keyof { [K in keyof T]: { [KeyType in keyof ExtractFilterValue<T[K]>]: ExtractFilterValue<T[K]>[KeyType]; }; }]: { [K in keyof T]: { [KeyType in keyof ExtractFilterValue<T[K]>]: ExtractFilterValue<...>[KeyType]; }; }[KeyType]; }) => void"}}}}}catch{}const Ze=_e({accept:"numeric",charMap:{2:"/",4:"/"},maxLength:8}),et={type:"radio",label:"Mode",items:[{label:"QES",value:"QES"},{label:"Expert",value:"Expert"}]},tt={type:"checkbox",label:"Status",submitText:"Apply",items:[{label:"Accepted",value:"Accepted"},{label:"Canceled",value:"Canceled"},{label:"Failed",value:"Failed"},{label:"Expired",value:"Expired"},{label:"CustomerRefused",value:"CustomerRefused"}]},rt={type:"date",label:"Start Date",submitText:"Save",noValueText:"None",dateFormat:"DD/MM/YYYY",rifmProps:Ze},nt={type:"input",label:"Resource ID",noValueText:"None",submitText:"Save",placeholder:"Placeholder..."},at={mode:et,status:tt,startDate:rt,resourceId:nt},it=[{name:"mode",label:"Mode"},{name:"status",label:"Status"},{name:"startDate",label:"Start date"},{name:"resourceId",label:"Ressource ID"}],Nt={title:"Forms/Filter",component:ae},ne=()=>{const[t,r]=u.useState([]),[o,c]=u.useState({mode:void 0,status:void 0,resourceId:void 0,startDate:void 0});return a(Me,{title:"Filter",children:a(Ae,{variant:"live",children:K(O,{children:[a(ae,{filters:o,label:"Choose filters",title:"Filters",onAddFilter:s=>r(h=>[...h,s]),availableFilters:it,openFilters:t}),a(z,{height:8}),a(fe,{definition:at,filters:o,openedFilters:t,onChangeFilters:c,onChangeOpened:r})]})})})};var we,xe,Ve;ne.parameters={...ne.parameters,docs:{...(we=ne.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [openFilters, setOpenFilters] = useState<(keyof State)[]>([]);
  const [filters, setFilters] = useState<State>({
    mode: undefined,
    status: undefined,
    resourceId: undefined,
    startDate: undefined
  });
  return <StoryBlock title="Filter">
      <WithCurrentColor variant="live">
        <View>
          <FilterChooser filters={filters} label="Choose filters" title="Filters" onAddFilter={filter => setOpenFilters(filters => [...filters, filter])} availableFilters={availableFilters} openFilters={openFilters} />

          <Space height={8} />

          <FiltersStack definition={definition} filters={filters} openedFilters={openFilters} onChangeFilters={setFilters} onChangeOpened={setOpenFilters} />
        </View>
      </WithCurrentColor>
    </StoryBlock>;
}`,...(Ve=(xe=ne.parameters)==null?void 0:xe.docs)==null?void 0:Ve.source}}};const $t=["All"];export{ne as All,$t as __namedExportsOrder,Nt as default};
//# sourceMappingURL=Filter.stories-64817b78.js.map
