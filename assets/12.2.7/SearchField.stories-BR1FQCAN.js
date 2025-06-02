import{i as E,j as e,s as q,r as S,b as _,a as z,c as V,n as M,I as v,V as y,e as O,S as g,L as j,B as b}from"./ScrollView-CS_ryOlU.js";import{r as l}from"./iframe-snBXDk_T.js";import{F}from"./Fill-CW7GJacW.js";import{u as A}from"./useBoolean-B2AuI8Ap.js";import{L as G}from"./LakeButton-CYP7e0EF.js";import{L as K}from"./LakeTextInput-CgXvGmgz.js";import{R as $}from"./ResponsiveContainer-BH8oNQyl.js";import{T as H}from"./TransitionView-D6t2cDPu.js";import{M as J}from"./index-B06S_85o.js";import{T as Q}from"./Tag-D7wJ4ayr.js";import{T as U}from"./Toggle-TV9uQaV9.js";import{n as X}from"./function-BrBjMHiD.js";import{S as Y,a as f}from"./_StoriesComponents-CT6kQDTl.js";import"./index-kJDUINeT.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DGTHYRjV.js";import"./index-BsDS4oB9.js";import"./extends-CF3RwP-h.js";import"./LakeSelect-zCQ81D56.js";import"./useDisclosure-xDakqg26.js";import"./FocusTrap-C4wFzH1D.js";import"./array-BfAlyugE.js";import"./Popover-B7eTNKWc.js";import"./useResponsive-CMeUMmlU.js";import"./BottomPanel-SFHb78DT.js";import"./useBodyClassName-sSPbskeV.js";import"./Suspendable-D2lIu6Y2.js";import"./Separator-QzjiGiL6.js";import"./index-CICnwYFR.js";const Z=(r,n)=>{const t=l.useRef(void 0);return l.useCallback(i=>(E(t.current)&&clearTimeout(t.current),t.current=window.setTimeout(r,n,i),()=>clearTimeout(t.current)),[r,n])},k=350,u=q.create({container:{flexDirection:"row",alignItems:"center",justifyContent:"flex-end",flexGrow:1,flexShrink:1},input:{transition:"300ms ease-in-out border-color",justifyContent:"flex-end"},focus:{outlineStyle:"none",borderColor:V.current.primary},clearButton:{padding:z[8],borderRadius:S[4]},openSearchFieldContainer:{position:"absolute",right:0,top:0,bottom:0},openSearchField:{position:"absolute",right:0,top:0,bottom:0,boxShadow:`0 0 20px 20px ${_.default}`,borderRadius:S[6]}}),ee=({inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:s,hasFocus:c,clear:m,currentValue:a,renderEnd:p})=>e.jsxs(y,{children:[e.jsx(G,{mode:"secondary",size:"small",ariaLabel:n,icon:"search-filled",onPress:s.on,pill:a!==""}),e.jsx(H,{style:u.openSearchFieldContainer,...O.fadeAndSlideInFromRight,children:c?e.jsx(y,{style:u.openSearchField,children:e.jsx(w,{inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:s,hasFocus:c,clear:m,currentValue:a,renderEnd:p})}):null})]}),w=({inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:s,hasFocus:c,clear:m,renderEnd:a,currentValue:p})=>{const o=l.useRef(null);return e.jsx(K,{ref:r,autoFocus:c,icon:"search-filled",placeholder:n,defaultValue:t,inputMode:"search",onChangeText:i,hideErrors:!0,renderEnd:()=>e.jsxs(e.Fragment,{children:[M(p)&&e.jsx(J,{role:"button",style:u.clearButton,onPress:()=>{o.current!=null&&clearTimeout(o.current),m()},children:e.jsx(v,{name:"dismiss-filled",size:12,color:V.gray[500]})}),a==null?void 0:a()]}),onFocus:()=>{o.current!=null&&clearTimeout(o.current),s.on()},onBlur:()=>{o.current=window.setTimeout(()=>{s.off()},300)},style:[u.input,c&&u.focus]})},d=({initialValue:r,placeholder:n,onChangeText:t,debounceDuration:i=500,maxWidth:s=350,renderEnd:c,children:m})=>{const[a,p]=A(!1),o=l.useRef(null),[I,T]=l.useState(r),R=Z(x=>{t(x),T(x.trim())},i),B=l.useCallback(()=>{o.current!=null&&(o.current.clear(),o.current.focus(),t(""),T(""))},[t]),W={inputRef:o,placeholder:n,initialValue:r,onChange:R,setFocused:p,hasFocus:a,clear:B,currentValue:I,renderEnd:c},D=Math.max(s,k);return e.jsx($,{breakpoint:k,style:[u.container,{maxWidth:D}],children:({large:x})=>{const N=x?w:ee;return e.jsxs(e.Fragment,{children:[m,e.jsx(N,{...W})]})}})};d.__docgenInfo={description:"",methods:[],displayName:"LakeSearchField",props:{initialValue:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChangeText:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},debounceDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"350",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},renderEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""}}};const we={title:"Forms/SearchField",component:d},h=()=>{const[r,n]=l.useState(),[t,i]=l.useState();return e.jsxs(Y,{title:"SearchField",children:[e.jsxs(f,{title:"Default",children:[e.jsx(d,{initialValue:"",placeholder:"Placeholder",onChangeText:n}),e.jsx(g,{height:12}),e.jsxs(j,{children:["Debounced value: ",r]})]}),e.jsxs(f,{title:"With initialValue",children:[e.jsxs(b,{direction:"row",children:[e.jsx(v,{name:"add-circle-filled",size:32}),e.jsx(F,{minWidth:96}),e.jsx(d,{initialValue:"Initial value",placeholder:"Placeholder",onChangeText:i})]}),e.jsx(g,{height:12}),e.jsxs(j,{children:["Debounced value: ",t]})]}),e.jsx(f,{title:"With counter",children:e.jsx(d,{initialValue:"Initial value",placeholder:"Placeholder",onChangeText:i,renderEnd:()=>e.jsx(Q,{children:"44"})})}),e.jsx(f,{title:"With toggle",children:e.jsxs(b,{direction:"row",alignItems:"center",children:[e.jsx(F,{minWidth:8}),e.jsxs(d,{initialValue:"Initial value",placeholder:"Placeholder",maxWidth:500,onChangeText:i,children:[e.jsx(U,{value:!0,onLabel:"Enabled",offLabel:"Disabled",onToggle:X}),e.jsx(g,{width:8})]})]})})]})};h.__docgenInfo={description:"",methods:[],displayName:"Variations"};var L,C,P;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [text1, setText1] = useState<string>();
  const [text2, setText2] = useState<string>();
  return <StoryBlock title="SearchField">
      <StoryPart title="Default">
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

      <StoryPart title="With toggle">
        <Box direction="row" alignItems="center">
          <Fill minWidth={8} />

          <LakeSearchField initialValue="Initial value" placeholder="Placeholder" maxWidth={500} onChangeText={setText2}>
            <Toggle value={true} onLabel="Enabled" offLabel="Disabled" onToggle={noop} />
            <Space width={8} />
          </LakeSearchField>
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(P=(C=h.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const Ie=["Variations"];export{h as Variations,Ie as __namedExportsOrder,we as default};
//# sourceMappingURL=SearchField.stories-BR1FQCAN.js.map
