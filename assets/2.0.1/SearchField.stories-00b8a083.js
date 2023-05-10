import{i as R,S as v,c as x,d as _,r as D,a as e,V as f,j as c,f as W,F as I,b,L as T}from"./Space-65f9bfa9.js";import{r as u}from"./index-8db94870.js";import{u as q}from"./useBoolean-2c9e9a66.js";import{L as E}from"./LakeButton-bed23784.js";import{L as j}from"./LakeTextInput-494abc41.js";import{R as N}from"./ResponsiveContainer-eb20e0c2.js";import{S as G,L}from"./Svg-7871e2fb.js";import{T as M}from"./TransitionView-e9c85895.js";import{P as $}from"./index-da7d3046.js";import{S as z,a as F}from"./_StoriesComponents-9f567819.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5dcf0b89.js";import"./Icon-4e86e06c.js";import"./Pressable-2163c0dc.js";import"./useMergeRefs-5d4c6491.js";import"./index-2930334e.js";import"./commonStyles-d52fedae.js";import"./Fill-24da9952.js";const A=(n,a)=>{const t=u.useRef(void 0);return u.useCallback(o=>(R(t.current)&&clearTimeout(t.current),t.current=window.setTimeout(n,a,o),()=>clearTimeout(t.current)),[n,a])},i=v.create({root:{flexGrow:1,flexShrink:1,maxWidth:202,minWidth:38},container:{width:"100%",flexGrow:1,flexShrink:0,alignSelf:"flex-end"},input:{paddingRight:50,minWidth:200,width:1,flexGrow:1,transition:"300ms ease-in-out border-color"},focus:{outlineStyle:"none",borderColor:x.current.primary},clearButton:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",padding:16},clear:{width:8,height:8,display:"flex"},smallButtonContainer:{flexDirection:"row",justifyContent:"flex-end"},openSearchFieldContainer:{position:"absolute",right:0,top:0,bottom:0},openSearchField:{position:"absolute",right:0,top:0,bottom:0,boxShadow:`0 0 20px 20px ${_.default}`,borderRadius:D[6]}}),H=({inputRef:n,placeholder:a,initialValue:t,onChange:o,setFocused:l,hasFocus:s,clear:d,currentValue:r})=>c(f,{children:[e(E,{mode:"secondary",size:"small",ariaLabel:a,icon:"search-filled",onPress:()=>{l.on()},pill:r!==""}),e(M,{style:i.openSearchFieldContainer,...W.fadeAndSlideInFromRight,children:s?e(f,{style:i.openSearchField,children:e(B,{inputRef:n,placeholder:a,initialValue:t,onChange:o,setFocused:l,hasFocus:s,clear:d,currentValue:r})}):null})]}),B=({inputRef:n,placeholder:a,initialValue:t,onChange:o,setFocused:l,hasFocus:s,clear:d})=>{const r=u.useRef(null);return c(f,{style:i.container,children:[e(j,{ref:n,autoFocus:s,icon:"search-filled",placeholder:a,defaultValue:t,inputMode:"search",onChangeText:o,hideErrors:!0,onFocus:()=>{r.current!=null&&clearTimeout(r.current),l.on()},onBlur:()=>{r.current=window.setTimeout(()=>{l.off()},300)},style:[i.input,s?i.focus:null]}),e($,{onPress:()=>{r.current!=null&&clearTimeout(r.current),d()},style:i.clearButton,children:e(G,{viewBox:"0 0 16 16",style:i.clear,children:c(I,{children:[e(L,{x1:"0",x2:"16",y1:"0",y2:"16",strokeLinecap:"round",stroke:x.gray[500],strokeWidth:2}),e(L,{x1:"0",x2:"16",y1:"16",y2:"0",strokeLinecap:"round",stroke:x.gray[500],strokeWidth:2})]})})})]})},p=({initialValue:n,placeholder:a,onChangeText:t,debounceDuration:o=500,maxWidth:l})=>{const[s,d]=q(!1),r=u.useRef(null),[y,S]=u.useState(n),g=A(h=>{t(h),S(h.trim())},o),k=u.useCallback(()=>{r.current instanceof HTMLInputElement&&(r.current.clear(),r.current.focus(),t(""),S(""))},[t]);return e(N,{breakpoint:200,style:[i.root,l!=null&&{maxWidth:l}],children:({large:h})=>h?e(B,{inputRef:r,placeholder:a,initialValue:n,onChange:g,setFocused:d,hasFocus:s,clear:k,currentValue:y}):e(f,{style:i.smallButtonContainer,children:e(H,{inputRef:r,placeholder:a,initialValue:n,onChange:g,setFocused:d,hasFocus:s,clear:k,currentValue:y})})})};try{p.displayName="LakeSearchField",p.__docgenInfo={description:"",displayName:"LakeSearchField",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},onChangeText:{defaultValue:null,description:"",name:"onChangeText",required:!0,type:{name:"(text: string) => void"}},debounceDuration:{defaultValue:{value:"500"},description:"",name:"debounceDuration",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}}}}}catch{}const C=v.create({container:{maxWidth:600}}),de={title:"Forms/SearchField",component:p},m=()=>{const[n,a]=u.useState(),[t,o]=u.useState();return c(z,{title:"SearchField",children:[c(F,{title:"Default",style:C.container,children:[e(p,{initialValue:"",placeholder:"Placeholder",onChangeText:a}),e(b,{height:12}),c(T,{children:["Debounced value: ",n]})]}),c(F,{title:"With initialValue",style:C.container,children:[e(p,{initialValue:"Initial value",placeholder:"Placeholder",onChangeText:o}),e(b,{height:12}),c(T,{children:["Debounced value: ",t]})]})]})};var V,w,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [text1, setText1] = useState<string>();
  const [text2, setText2] = useState<string>();
  return <StoryBlock title="SearchField">
      <StoryPart title="Default" style={styles.container}>
        <LakeSearchField initialValue="" placeholder="Placeholder" onChangeText={setText1} />
        <Space height={12} />
        <LakeText>Debounced value: {text1}</LakeText>
      </StoryPart>

      <StoryPart title="With initialValue" style={styles.container}>
        <LakeSearchField initialValue="Initial value" placeholder="Placeholder" onChangeText={setText2} />

        <Space height={12} />
        <LakeText>Debounced value: {text2}</LakeText>
      </StoryPart>
    </StoryBlock>;
}`,...(P=(w=m.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const pe=["Variations"];export{m as Variations,pe as __namedExportsOrder,de as default};
//# sourceMappingURL=SearchField.stories-00b8a083.js.map
