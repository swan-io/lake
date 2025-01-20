import{j as e}from"./jsx-runtime-DT09rT5F.js";import{r as c}from"./index-DXKZGL6g.js";import{i as I,s as L,c as y,d as R,e as W,r as D,V as S,C as N,l as E,v as _,ae as T,S as j,L as k,B as q,I as M}from"./ScrollView-uRWD7sHo.js";import{F as z}from"./Fill-GPC7nny0.js";import{u as G}from"./useBoolean-hauE57I1.js";import{L as O}from"./LakeButton-DOM2fx1m.js";import{L as $}from"./LakeTextInput-XJSW9w35.js";import{R as A}from"./ResponsiveContainer-CE4Syk9F.js";import{T as H}from"./TransitionView-CHCst6-1.js";import{M as J}from"./index-CMb-yCnL.js";import{T as K}from"./Tag-C2ZZ_Ijz.js";import{S as Q,a as f}from"./_StoriesComponents-BTk4MJDM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CKeW-Qoz.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-DcSKb_Ww.js";import"./index-oSnkc6z1.js";import"./extends-CF3RwP-h.js";import"./LakeSelect-DokBy7Yu.js";import"./useDisclosure-CwHJfrsH.js";import"./FocusTrap-BTtxEFod.js";import"./array-BfAlyugE.js";import"./Popover-D5DWe0Uw.js";import"./useResponsive-6iDeDSbQ.js";import"./function-C-7S2jwM.js";import"./BottomPanel-BgxlA1Mc.js";import"./useBodyClassName-CYzM7DM-.js";import"./Suspendable-DcBC6Bz-.js";import"./Separator-Bs5w-fAv.js";import"./index-BVbxhsSD.js";const U=(r,n)=>{const t=c.useRef(void 0);return c.useCallback(i=>(I(t.current)&&clearTimeout(t.current),t.current=window.setTimeout(r,n,i),()=>clearTimeout(t.current)),[r,n])},o=L.create({container:{flexGrow:1,flexShrink:1},input:{transition:"300ms ease-in-out border-color",maxWidth:202,minWidth:38,justifyContent:"flex-end"},focus:{outlineStyle:"none",borderColor:y.current.primary},clearButton:{marginRight:R[8]},clear:{width:8,height:8},smallButtonContainer:{flexDirection:"row",justifyContent:"flex-end",flexGrow:1},largeInputContainer:{flexDirection:"row",justifyContent:"flex-end",flexGrow:1},openSearchFieldContainer:{position:"absolute",right:0,top:0,bottom:0},openSearchField:{position:"absolute",right:0,top:0,bottom:0,boxShadow:`0 0 20px 20px ${W.default}`,borderRadius:D[6]}}),X=({inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:a,hasFocus:u,clear:m,currentValue:s,renderEnd:l})=>e.jsxs(S,{style:o.smallButtonContainer,children:[e.jsx(O,{mode:"secondary",size:"small",ariaLabel:n,icon:"search-filled",onPress:()=>{a.on()},pill:s!==""}),e.jsx(H,{style:o.openSearchFieldContainer,...N.fadeAndSlideInFromRight,children:u?e.jsx(S,{style:o.openSearchField,children:e.jsx(w,{inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:a,hasFocus:u,clear:m,currentValue:s,renderEnd:l})}):null})]}),w=({inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:a,hasFocus:u,clear:m,renderEnd:s,currentValue:l})=>{const d=c.useRef(null);return e.jsx($,{ref:r,autoFocus:u,icon:"search-filled",placeholder:n,defaultValue:t,inputMode:"search",onChangeText:i,hideErrors:!0,renderEnd:()=>e.jsxs(e.Fragment,{children:[E(l)&&e.jsx(J,{onPress:()=>{d.current!=null&&clearTimeout(d.current),m()},style:o.clearButton,children:e.jsx(_,{viewBox:"0 0 16 16",style:o.clear,children:e.jsxs(e.Fragment,{children:[e.jsx(T,{x1:"0",x2:"16",y1:"0",y2:"16",strokeLinecap:"round",stroke:y.gray[500],strokeWidth:2}),e.jsx(T,{x1:"0",x2:"16",y1:"16",y2:"0",strokeLinecap:"round",stroke:y.gray[500],strokeWidth:2})]})})}),s==null?void 0:s()]}),onFocus:()=>{d.current!=null&&clearTimeout(d.current),a.on()},onBlur:()=>{d.current=window.setTimeout(()=>{a.off()},300)},containerStyle:o.largeInputContainer,style:[o.input,u?o.focus:null]})},h=({initialValue:r,placeholder:n,onChangeText:t,debounceDuration:i=500,maxWidth:a,renderEnd:u})=>{const[m,s]=G(!1),l=c.useRef(null),[d,g]=c.useState(r),V=U(x=>{t(x),g(x.trim())},i),P=c.useCallback(()=>{l.current instanceof HTMLInputElement&&(l.current.clear(),l.current.focus(),t(""),g(""))},[t]),B={inputRef:l,placeholder:n,initialValue:r,onChange:V,setFocused:s,hasFocus:m,clear:P,currentValue:d,renderEnd:u};return e.jsx(A,{breakpoint:200,style:[o.container,a!=null&&{maxWidth:a}],children:({large:x})=>{const v=x?w:X;return e.jsx(v,{...B})}})};h.__docgenInfo={description:"",methods:[],displayName:"LakeSearchField",props:{initialValue:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChangeText:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},debounceDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:""},renderEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""}}};const Y=L.create({container:{maxWidth:600}}),Pe={title:"Forms/SearchField",component:h},p=()=>{const[r,n]=c.useState(),[t,i]=c.useState();return e.jsxs(Q,{title:"SearchField",children:[e.jsxs(f,{title:"Default",style:Y.container,children:[e.jsx(h,{initialValue:"",placeholder:"Placeholder",onChangeText:n}),e.jsx(j,{height:12}),e.jsxs(k,{children:["Debounced value: ",r]})]}),e.jsxs(f,{title:"With initialValue",children:[e.jsxs(q,{direction:"row",children:[e.jsx(M,{name:"add-circle-filled",size:32}),e.jsx(z,{minWidth:96}),e.jsx(h,{initialValue:"Initial value",placeholder:"Placeholder",onChangeText:i})]}),e.jsx(j,{height:12}),e.jsxs(k,{children:["Debounced value: ",t]})]}),e.jsx(f,{title:"With counter",children:e.jsx(h,{initialValue:"Initial value",placeholder:"Placeholder",onChangeText:i,renderEnd:()=>e.jsx(K,{children:"44"})})})]})};p.__docgenInfo={description:"",methods:[],displayName:"Variations"};var C,b,F;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(F=(b=p.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const Be=["Variations"];export{p as Variations,Be as __namedExportsOrder,Pe as default};
//# sourceMappingURL=SearchField.stories-C1o16BJz.js.map
