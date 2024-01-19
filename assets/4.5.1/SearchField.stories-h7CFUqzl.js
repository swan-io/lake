import{l as W,s as P,c as y,e as D,g as _,r as j,a as e,j as i,V as g,v as q,F as T,x as E,M as k,S as C,L as b,I as N}from"./Space-UKiLa9-i.js";import{r as u}from"./index-4g5l5LRQ.js";import{B as z}from"./commonStyles-dcsNUru2.js";import{F as G}from"./Fill-zIBlph3t.js";import{u as M}from"./useBoolean-FxwQhC0M.js";import{L as $}from"./LakeButton-WT3L9v79.js";import{L as A}from"./LakeTextInput-at79W9Zy.js";import{R as H}from"./ResponsiveContainer-veqTt1-n.js";import{T as O}from"./TransitionView-phcFp1Go.js";import{P as J}from"./index-w57Xv2k5.js";import{T as K}from"./Tag-2rqWRxvF.js";import{S as Q,a as x}from"./_StoriesComponents-VaLthraj.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./Pressable-ZB7pLygl.js";import"./index-hY1megw8.js";import"./LakeSelect-sLqpwi7H.js";import"./useDisclosure-Cnlvt24p.js";import"./a11y-2bSo9Xxj.js";import"./Popover-j9yFJRJv.js";import"./useResponsive-92TvZuqI.js";import"./function-dZk570d0.js";import"./Boxed-X5xMwKRs.js";import"./BottomPanel-2CwHhvhT.js";import"./useBodyClassName-b5H8Q92H.js";import"./math-OtRCN8eX.js";import"./FocusTrap-z7Cz7GjD.js";import"./array-_tkD71ox.js";import"./LoadingView-2A9KwNs3.js";import"./index-H-v6yeJw.js";import"./index-nKqN2hgb.js";const U=(r,o)=>{const t=u.useRef(void 0);return u.useCallback(a=>(W(t.current)&&clearTimeout(t.current),t.current=window.setTimeout(r,o,a),()=>clearTimeout(t.current)),[r,o])},l=P.create({container:{flexGrow:1,flexShrink:1},input:{transition:"300ms ease-in-out border-color",maxWidth:202,minWidth:38,justifyContent:"flex-end"},focus:{outlineStyle:"none",borderColor:y.current.primary},clearButton:{marginRight:D[8]},clear:{width:8,height:8},smallButtonContainer:{flexDirection:"row",justifyContent:"flex-end",flexGrow:1},largeInputContainer:{flexDirection:"row",justifyContent:"flex-end",flexGrow:1},openSearchFieldContainer:{position:"absolute",right:0,top:0,bottom:0},openSearchField:{position:"absolute",right:0,top:0,bottom:0,boxShadow:`0 0 20px 20px ${_.default}`,borderRadius:j[6]}}),X=({inputRef:r,placeholder:o,initialValue:t,onChange:a,setFocused:s,hasFocus:d,clear:m,currentValue:c,renderEnd:n})=>i(g,{style:l.smallButtonContainer,children:[e($,{mode:"secondary",size:"small",ariaLabel:o,icon:"search-filled",onPress:()=>{s.on()},pill:c!==""}),e(O,{style:l.openSearchFieldContainer,...q.fadeAndSlideInFromRight,children:d?e(g,{style:l.openSearchField,children:e(w,{inputRef:r,placeholder:o,initialValue:t,onChange:a,setFocused:s,hasFocus:d,clear:m,currentValue:c,renderEnd:n})}):null})]}),w=({inputRef:r,placeholder:o,initialValue:t,onChange:a,setFocused:s,hasFocus:d,clear:m,renderEnd:c})=>{const n=u.useRef(null);return e(A,{ref:r,autoFocus:d,icon:"search-filled",placeholder:o,defaultValue:t,inputMode:"search",onChangeText:a,hideErrors:!0,renderEnd:()=>i(T,{children:[e(J,{onPress:()=>{n.current!=null&&clearTimeout(n.current),m()},style:l.clearButton,children:e(E,{viewBox:"0 0 16 16",style:l.clear,children:i(T,{children:[e(k,{x1:"0",x2:"16",y1:"0",y2:"16",strokeLinecap:"round",stroke:y.gray[500],strokeWidth:2}),e(k,{x1:"0",x2:"16",y1:"16",y2:"0",strokeLinecap:"round",stroke:y.gray[500],strokeWidth:2})]})})}),c==null?void 0:c()]}),onFocus:()=>{n.current!=null&&clearTimeout(n.current),s.on()},onBlur:()=>{n.current=window.setTimeout(()=>{s.off()},300)},containerStyle:l.largeInputContainer,style:[l.input,d?l.focus:null]})},p=({initialValue:r,placeholder:o,onChangeText:t,debounceDuration:a=500,maxWidth:s,renderEnd:d})=>{const[m,c]=M(!1),n=u.useRef(null),[B,S]=u.useState(r),v=U(h=>{t(h),S(h.trim())},a),I=u.useCallback(()=>{n.current instanceof HTMLInputElement&&(n.current.clear(),n.current.focus(),t(""),S(""))},[t]),R={inputRef:n,placeholder:o,initialValue:r,onChange:v,setFocused:c,hasFocus:m,clear:I,currentValue:B,renderEnd:d};return e(H,{breakpoint:200,style:[l.container,s!=null&&{maxWidth:s}],children:({large:h})=>e(h?w:X,{...R})})};try{p.displayName="LakeSearchField",p.__docgenInfo={description:"",displayName:"LakeSearchField",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},onChangeText:{defaultValue:null,description:"",name:"onChangeText",required:!0,type:{name:"(text: string) => void"}},debounceDuration:{defaultValue:{value:"500"},description:"",name:"debounceDuration",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},renderEnd:{defaultValue:null,description:"",name:"renderEnd",required:!1,type:{name:"(() => ReactNode)"}}}}}catch{}const Y=P.create({container:{maxWidth:600}}),Re={title:"Forms/SearchField",component:p},f=()=>{const[r,o]=u.useState(),[t,a]=u.useState();return i(Q,{title:"SearchField",children:[i(x,{title:"Default",style:Y.container,children:[e(p,{initialValue:"",placeholder:"Placeholder",onChangeText:o}),e(C,{height:12}),i(b,{children:["Debounced value: ",r]})]}),i(x,{title:"With initialValue",children:[i(z,{direction:"row",children:[e(N,{name:"add-circle-filled",size:32}),e(G,{minWidth:96}),e(p,{initialValue:"Initial value",placeholder:"Placeholder",onChangeText:a})]}),e(C,{height:12}),i(b,{children:["Debounced value: ",t]})]}),e(x,{title:"With counter",children:e(p,{initialValue:"Initial value",placeholder:"Placeholder",onChangeText:a,renderEnd:()=>e(K,{children:"44"})})})]})};var F,V,L;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(L=(V=f.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const We=["Variations"];export{f as Variations,We as __namedExportsOrder,Re as default};
//# sourceMappingURL=SearchField.stories-h7CFUqzl.js.map
