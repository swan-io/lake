import{i as D,S as w,c as y,f as I,g as _,r as j,j as e,a as s,V as g,p as q,F as T,w as E,O as k,b as C,L as b,I as N}from"./Space-f85095f8.js";import{r as m}from"./index-b9a8c83f.js";import{B as z}from"./Box-f4fbfbba.js";import{F as G}from"./Fill-0c0bad9d.js";import{u as A}from"./useBoolean-2d821b14.js";import{a as M}from"./LakeButton-e8594097.js";import{L as O}from"./LakeTextInput-221c8734.js";import{R as $}from"./ResponsiveContainer-46064607.js";import{T as H}from"./TransitionView-5833e7af.js";import{P as J}from"./index-75f16835.js";import{T as K}from"./Tag-8a96fdf5.js";import{S as Q,a as x}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-7e9fd84c.js";import"./useMergeRefs-56399732.js";import"./index-4daf2301.js";import"./commonStyles-d52fedae.js";const U=(r,n)=>{const t=m.useRef(void 0);return m.useCallback(i=>(D(t.current)&&clearTimeout(t.current),t.current=window.setTimeout(r,n,i),()=>clearTimeout(t.current)),[r,n])},c=w.create({container:{flexGrow:1,flexShrink:1},input:{transition:"300ms ease-in-out border-color",maxWidth:202,minWidth:38,justifyContent:"flex-end"},focus:{outlineStyle:"none",borderColor:y.current.primary},clearButton:{marginRight:I[8]},clear:{width:8,height:8},smallButtonContainer:{flexDirection:"row",justifyContent:"flex-end",flexGrow:1},largeInputContainer:{flexDirection:"row",justifyContent:"flex-end",flexGrow:1},openSearchFieldContainer:{position:"absolute",right:0,top:0,bottom:0},openSearchField:{position:"absolute",right:0,top:0,bottom:0,boxShadow:`0 0 20px 20px ${_.default}`,borderRadius:j[6]}}),X=({inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:o,hasFocus:l,clear:u,currentValue:d,renderEnd:a})=>s(g,{style:c.smallButtonContainer,children:[e(M,{mode:"secondary",size:"small",ariaLabel:n,icon:"search-filled",onPress:()=>{o.on()},pill:d!==""}),e(H,{style:c.openSearchFieldContainer,...q.fadeAndSlideInFromRight,children:l?e(g,{style:c.openSearchField,children:e(W,{inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:o,hasFocus:l,clear:u,currentValue:d,renderEnd:a})}):null})]}),W=({inputRef:r,placeholder:n,initialValue:t,onChange:i,setFocused:o,hasFocus:l,clear:u,renderEnd:d})=>{const a=m.useRef(null);return e(O,{ref:r,autoFocus:l,icon:"search-filled",placeholder:n,defaultValue:t,inputMode:"search",onChangeText:i,hideErrors:!0,renderEnd:()=>s(T,{children:[e(J,{onPress:()=>{a.current!=null&&clearTimeout(a.current),u()},style:c.clearButton,children:e(E,{viewBox:"0 0 16 16",style:c.clear,children:s(T,{children:[e(k,{x1:"0",x2:"16",y1:"0",y2:"16",strokeLinecap:"round",stroke:y.gray[500],strokeWidth:2}),e(k,{x1:"0",x2:"16",y1:"16",y2:"0",strokeLinecap:"round",stroke:y.gray[500],strokeWidth:2})]})})}),d==null?void 0:d()]}),onFocus:()=>{a.current!=null&&clearTimeout(a.current),o.on()},onBlur:()=>{a.current=window.setTimeout(()=>{o.off()},300)},containerStyle:c.largeInputContainer,style:[c.input,l?c.focus:null]})},h=({initialValue:r,placeholder:n,onChangeText:t,debounceDuration:i=500,maxWidth:o,renderEnd:l})=>{const[u,d]=A(!1),a=m.useRef(null),[B,S]=m.useState(r),P=U(p=>{t(p),S(p.trim())},i),R=m.useCallback(()=>{a.current instanceof HTMLInputElement&&(a.current.clear(),a.current.focus(),t(""),S(""))},[t]),v={inputRef:a,placeholder:n,initialValue:r,onChange:P,setFocused:d,hasFocus:u,clear:R,currentValue:B,renderEnd:l};return e($,{breakpoint:200,style:[c.container,o!=null&&{maxWidth:o}],children:({large:p})=>e(p?W:X,{...v})})};try{h.displayName="LakeSearchField",h.__docgenInfo={description:"",displayName:"LakeSearchField",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},onChangeText:{defaultValue:null,description:"",name:"onChangeText",required:!0,type:{name:"(text: string) => void"}},debounceDuration:{defaultValue:{value:"500"},description:"",name:"debounceDuration",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},renderEnd:{defaultValue:null,description:"",name:"renderEnd",required:!1,type:{name:"(() => ReactNode)"}}}}}catch{}const Y=w.create({container:{maxWidth:600}}),Se={title:"Forms/SearchField",component:h},f=({initialValue:r,placeholder:n,maxWidth:t})=>{const[i,o]=m.useState(),[l,u]=m.useState();return console.log(r),s(Q,{title:"SearchField",children:[s(x,{title:"Default",style:Y.container,children:[e(h,{initialValue:r,placeholder:n,maxWidth:t,onChangeText:o}),e(C,{height:12}),s(b,{children:["Debounced value: ",i]})]}),s(x,{title:"With initialValue",children:[s(z,{direction:"row",children:[e(N,{name:"add-circle-filled",size:32}),e(G,{minWidth:96}),e(h,{initialValue:r,placeholder:n,maxWidth:t,onChangeText:u})]}),e(C,{height:12}),s(b,{children:["Debounced value: ",l]})]}),e(x,{title:"With counter",children:e(h,{initialValue:"Initial value",placeholder:"Placeholder",onChangeText:u,renderEnd:()=>e(K,{children:"44"})})})]})};var F,V,L;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`({
  initialValue,
  placeholder,
  maxWidth
}: StoryArgs) => {
  const [text1, setText1] = useState<string>();
  const [text2, setText2] = useState<string>();
  console.log(initialValue);
  return <StoryBlock title="SearchField">
      <StoryPart title="Default" style={styles.container}>
        <LakeSearchField initialValue={initialValue} placeholder={placeholder} maxWidth={maxWidth} onChangeText={setText1} />
        <Space height={12} />
        <LakeText>Debounced value: {text1}</LakeText>
      </StoryPart>

      <StoryPart title="With initialValue">
        <Box direction="row">
          <Icon name="add-circle-filled" size={32} />
          <Fill minWidth={96} />

          <LakeSearchField initialValue={initialValue} placeholder={placeholder} maxWidth={maxWidth} onChangeText={setText2} />
        </Box>

        <Space height={12} />
        <LakeText>Debounced value: {text2}</LakeText>
      </StoryPart>

      <StoryPart title="With counter">
        <LakeSearchField initialValue="Initial value" placeholder="Placeholder" onChangeText={setText2} renderEnd={() => <Tag>44</Tag>} />
      </StoryPart>
    </StoryBlock>;
}`,...(L=(V=f.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const ge=["Variations"];export{f as Variations,ge as __namedExportsOrder,Se as default};
//# sourceMappingURL=SearchField.stories-ca1004fe.js.map
