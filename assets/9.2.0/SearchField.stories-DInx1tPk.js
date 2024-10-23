import{j as e}from"./jsx-runtime-BlAj40OV.js";import{r as c}from"./index-Cs7sjTYM.js";import{i as I,s as L,c as y,b as R,d as W,r as D,V as S,F as N,h as E,v as _,Y as T,S as j,L as k,B as q,I as M}from"./ScrollView-C9Sl8l-9.js";import{F as z}from"./Fill-ICVCYpoF.js";import{u as G}from"./useBoolean-DHW5baxv.js";import{L as O}from"./LakeButton-92bu12CU.js";import{L as $}from"./LakeTextInput-DJ5dStww.js";import{R as A}from"./ResponsiveContainer-CZKIyyuy.js";import{T as H}from"./TransitionView-BaZ6uvKi.js";import{M as Y}from"./index-HmJNsiCB.js";import{T as J}from"./Tag-CIRiX2WR.js";import{S as K,a as f}from"./_StoriesComponents--LS6DWDz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-B-ndY5ns.js";import"./index-D9GDMxJ-.js";import"./extends-CF3RwP-h.js";import"./LakeSelect-ROSCWCgY.js";import"./useDisclosure-DLkMFUa4.js";import"./FocusTrap-B09dygKp.js";import"./array-BfAlyugE.js";import"./Popover-DUphcz07.js";import"./useResponsive-CzIqCC5v.js";import"./function-BvcByoDa.js";import"./BottomPanel-CoFv0YFr.js";import"./useBodyClassName-DMoYUPTW.js";import"./Suspendable-DMtC6jeg.js";const Q=(r,n)=>{const t=c.useRef(void 0);return c.useCallback(i=>(I(t.current)&&clearTimeout(t.current),t.current=window.setTimeout(r,n,i),()=>clearTimeout(t.current)),[r,n])},o=L.create({container:{flexGrow:1,flexShrink:1},input:{transition:"300ms ease-in-out border-color",maxWidth:202,minWidth:38,justifyContent:"flex-end"},focus:{outlineStyle:"none",borderColor:y.current.primary},clearButton:{marginRight:R[8]},clear:{width:8,height:8},smallButtonContainer:{flexDirection:"row",justifyContent:"flex-end",flexGrow:1},largeInputContainer:{flexDirection:"row",justifyContent:"flex-end",flexGrow:1},openSearchFieldContainer:{position:"absolute",right:0,top:0,bottom:0},openSearchField:{position:"absolute",right:0,top:0,bottom:0,boxShadow:`0 0 20px 20px ${W.default}`,borderRadius:D[6]}}),U=({inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:a,hasFocus:u,clear:m,currentValue:s,renderEnd:l})=>e.jsxs(S,{style:o.smallButtonContainer,children:[e.jsx(O,{mode:"secondary",size:"small",ariaLabel:n,icon:"search-filled",onPress:()=>{a.on()},pill:s!==""}),e.jsx(H,{style:o.openSearchFieldContainer,...N.fadeAndSlideInFromRight,children:u?e.jsx(S,{style:o.openSearchField,children:e.jsx(w,{inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:a,hasFocus:u,clear:m,currentValue:s,renderEnd:l})}):null})]}),w=({inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:a,hasFocus:u,clear:m,renderEnd:s,currentValue:l})=>{const d=c.useRef(null);return e.jsx($,{ref:r,autoFocus:u,icon:"search-filled",placeholder:n,defaultValue:t,inputMode:"search",onChangeText:i,hideErrors:!0,renderEnd:()=>e.jsxs(e.Fragment,{children:[E(l)&&e.jsx(Y,{onPress:()=>{d.current!=null&&clearTimeout(d.current),m()},style:o.clearButton,children:e.jsx(_,{viewBox:"0 0 16 16",style:o.clear,children:e.jsxs(e.Fragment,{children:[e.jsx(T,{x1:"0",x2:"16",y1:"0",y2:"16",strokeLinecap:"round",stroke:y.gray[500],strokeWidth:2}),e.jsx(T,{x1:"0",x2:"16",y1:"16",y2:"0",strokeLinecap:"round",stroke:y.gray[500],strokeWidth:2})]})})}),s==null?void 0:s()]}),onFocus:()=>{d.current!=null&&clearTimeout(d.current),a.on()},onBlur:()=>{d.current=window.setTimeout(()=>{a.off()},300)},containerStyle:o.largeInputContainer,style:[o.input,u?o.focus:null]})},h=({initialValue:r,placeholder:n,onChangeText:t,debounceDuration:i=500,maxWidth:a,renderEnd:u})=>{const[m,s]=G(!1),l=c.useRef(null),[d,g]=c.useState(r),V=Q(x=>{t(x),g(x.trim())},i),P=c.useCallback(()=>{l.current instanceof HTMLInputElement&&(l.current.clear(),l.current.focus(),t(""),g(""))},[t]),v={inputRef:l,placeholder:n,initialValue:r,onChange:V,setFocused:s,hasFocus:m,clear:P,currentValue:d,renderEnd:u};return e.jsx(A,{breakpoint:200,style:[o.container,a!=null&&{maxWidth:a}],children:({large:x})=>{const B=x?w:U;return e.jsx(B,{...v})}})};h.__docgenInfo={description:"",methods:[],displayName:"LakeSearchField",props:{initialValue:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChangeText:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},debounceDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:""},renderEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""}}};const X=L.create({container:{maxWidth:600}}),we={title:"Forms/SearchField",component:h},p=()=>{const[r,n]=c.useState(),[t,i]=c.useState();return e.jsxs(K,{title:"SearchField",children:[e.jsxs(f,{title:"Default",style:X.container,children:[e.jsx(h,{initialValue:"",placeholder:"Placeholder",onChangeText:n}),e.jsx(j,{height:12}),e.jsxs(k,{children:["Debounced value: ",r]})]}),e.jsxs(f,{title:"With initialValue",children:[e.jsxs(q,{direction:"row",children:[e.jsx(M,{name:"add-circle-filled",size:32}),e.jsx(z,{minWidth:96}),e.jsx(h,{initialValue:"Initial value",placeholder:"Placeholder",onChangeText:i})]}),e.jsx(j,{height:12}),e.jsxs(k,{children:["Debounced value: ",t]})]}),e.jsx(f,{title:"With counter",children:e.jsx(h,{initialValue:"Initial value",placeholder:"Placeholder",onChangeText:i,renderEnd:()=>e.jsx(J,{children:"44"})})})]})};p.__docgenInfo={description:"",methods:[],displayName:"Variations"};var b,C,F;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [text1, setText1] = useState<string>();
  const [text2, setText2] = useState<string>();
  return <StoryBlock title="SearchField">
      <StoryPart title="Default" style={styles.container}>
        <LakeSearchField initialValue="" placeholder="Placeholder" onChangeText={setText1} />
        <Space height={12} />
        <LakeText>Debounced value: {text1}</LakeText>
      </StoryPart>

      <StoryPart title="With initialValue">
        <Box direction="row">
          <Icon name="add-circle-filled" size={32} />
          <Fill minWidth={96} />

          <LakeSearchField initialValue="Initial value" placeholder="Placeholder" onChangeText={setText2} />
        </Box>

        <Space height={12} />
        <LakeText>Debounced value: {text2}</LakeText>
      </StoryPart>

      <StoryPart title="With counter">
        <LakeSearchField initialValue="Initial value" placeholder="Placeholder" onChangeText={setText2} renderEnd={() => <Tag>44</Tag>} />
      </StoryPart>
    </StoryBlock>;
}`,...(F=(C=p.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const Ve=["Variations"];export{p as Variations,Ve as __namedExportsOrder,we as default};
//# sourceMappingURL=SearchField.stories-DInx1tPk.js.map
