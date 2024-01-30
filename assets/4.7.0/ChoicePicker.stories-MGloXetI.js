import{s as M,y as k,e as _,j as x,V,a as r,u as U,F as j,S as G,v as H,N as v}from"./Space-fpWcly8i.js";import{L as C}from"./LakeButton-27caHm9W.js";import{L as N}from"./LakeRadio-k9nHIbP4.js";import{P as $}from"./Pressable-PpSTCurn.js";import{T as Z}from"./Tile-6X5pyRn5.js";import{c as z}from"./commonStyles-9xZlVg2d.js";import{u as X}from"./useResponsive-hntHafLu.js";import{c as Y}from"./math-r2gZ9Oo3.js";import{P as K}from"./Boxed-X5xMwKRs.js";import{r as y}from"./index-4g5l5LRQ.js";import{t as b}from"./i18n-UmTKCFz_.js";import{T as f}from"./Tag-hcHuxTxG.js";import{S as O,a as B}from"./_StoriesComponents-50vo5dIe.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./index-v0Q5volT.js";import"./rifm-MSdWk3oU.js";import"./utc-y0zBq2ZQ.js";import"./array-_tkD71ox.js";import"./index-iDWbphE6.js";const R=t=>{let c=t.scrollTop,m=t.scrollLeft;return K.make(g=>{let o;const s=setTimeout(()=>{const p=()=>{o=requestAnimationFrame(()=>{c!==t.scrollTop||m!==t.scrollLeft?(c=t.scrollTop,m=t.scrollLeft,p()):g()})};p()},50);return()=>{clearTimeout(s),o!=null&&cancelAnimationFrame(o)}})},l=M.create({root:{alignSelf:"stretch",alignItems:"stretch",flexGrow:1,overflow:"hidden",marginHorizontal:k[12]},scrollSnap:{scrollSnapType:"x mandatory"},container:{alignSelf:"stretch",flexDirection:"row",flexWrap:"wrap",alignItems:"stretch",justifyContent:"center"},mobileContainer:{flexWrap:"nowrap",justifyContent:"flex-start",transitionProperty:"transform",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},item:{flexGrow:0,flexBasis:"33.333%",maxWidth:300,padding:_[12]},itemAnimation:{transform:"translateZ(0px)",animationKeyframes:{from:{opacity:0,transform:"translateZ(0px) translateX(50px)"},to:{opacity:1,transform:"translateZ(0px) translateX(0px)"}},animationDuration:"200ms",animationFillMode:"backwards",animationTimingFunction:"ease-in-out"},itemLarge:{flexBasis:"50%",maxWidth:"none"},itemSmallViewport:{width:"100%",flexBasis:"auto",maxWidth:"none",scrollSnapAlign:"center"},tileContents:{alignItems:"center",alignSelf:"stretch",flexGrow:1},tileRenderedContents:{alignItems:"center",alignSelf:"stretch",flexGrow:1},leftButton:{position:"absolute",top:"50%",left:k[24],transform:"translateY(-50%)",borderTopLeftRadius:0,borderBottomLeftRadius:0,borderWidth:1,borderLeftWidth:0},rightButton:{position:"absolute",top:"50%",right:k[24],transform:"translateY(-50%)",borderTopRightRadius:0,borderBottomRightRadius:0,borderWidth:1,borderRightWidth:0}}),J=t=>t,S=({items:t,getId:c=J,large:m=!1,renderItem:g,value:o,disabled:s=!1,onChange:p})=>{const d=y.useRef(null),{desktop:n}=X(H.medium),[L,w]=y.useState("start");y.useEffect(()=>{if(n)return;const e=d.current,a=t.findIndex(i=>o===i);if(a!==-1&&e instanceof HTMLDivElement){const i=e.offsetWidth;e.scrollTo({x:a*i,animated:!1})}o==null&&t[0]!=null&&p(t[0])},[n]);const E=()=>{if(n)return;const e=d.current;if(e instanceof HTMLDivElement){const a=e.scrollLeft,i=e.offsetWidth,u=Y(0,t.length-1)(Math.round(a/i)),h=t[u];h!=null&&p(h),v(u).with(0,()=>w("start")).with(t.length-1,()=>w("end")).otherwise(()=>w("middle"))}},q=()=>{var a;const e=d.current;if(e instanceof HTMLDivElement){const i=e.scrollLeft,u=e.offsetWidth,h=Math.round(i/u),P=Math.max(0,h-1);e.style.scrollSnapType="none",(a=d.current)==null||a.scrollTo({x:P*u,animated:!0}),R(e).onResolve(()=>{e.style.scrollSnapType=null})}},F=()=>{var a;const e=d.current;if(e instanceof HTMLDivElement){const i=e.scrollLeft,u=e.offsetWidth,h=Math.round(i/u),P=Math.min(t.length-1,h+1);e.style.scrollSnapType="none",(a=d.current)==null||a.scrollTo({x:P*u,animated:!0}),R(e).onResolve(()=>{e.style.scrollSnapType=null})}};return x(V,{children:[r(V,{style:l.root,children:r(U,{ref:d,horizontal:!n,onScroll:E,scrollEventThrottle:200,style:l.scrollSnap,contentContainerStyle:[l.container,!n&&l.mobileContainer,!n&&{width:`${t.length*100}%`}],children:t.map((e,a)=>r($,{disabled:s,style:[l.item,s&&z.disabled,n&&l.itemAnimation,n&&{animationDelay:`${200+100*a}ms`},m&&l.itemLarge,!n&&l.itemSmallViewport,!n&&{width:`${100/t.length}%`}],onPress:()=>p(e),children:({hovered:i})=>r(Z,{hovered:i,selected:o!=null&&c(e)===c(o),flexGrow:1,children:x(V,{style:l.tileContents,children:[r(V,{style:l.tileRenderedContents,children:g(e)}),n&&x(j,{children:[r(G,{height:24}),r(N,{value:o!=null&&c(e)===c(o)})]})]})})},String(a)))})}),!n&&r(C,{icon:"chevron-left-filled",mode:"secondary",forceBackground:!0,onPress:q,disabled:L==="start"||s,style:l.leftButton,ariaLabel:b("common.previous")}),!n&&r(C,{icon:"chevron-right-filled",mode:"secondary",forceBackground:!0,onPress:F,disabled:L==="end"||s,style:l.rightButton,ariaLabel:b("common.next")})]})};try{S.displayName="ChoicePicker",S.__docgenInfo={description:"",displayName:"ChoicePicker",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},large:{defaultValue:{value:"false"},description:"",name:"large",required:!1,type:{name:"boolean"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"(value: T) => ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T"}},getId:{defaultValue:{value:"<T,>(x: T) => x"},description:"",name:"getId",required:!1,type:{name:"((item: T) => unknown)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: T) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const A=M.create({part:{padding:_[32]}}),Te={title:"Forms/ChoicePicker",component:S},T=()=>{const t=["Virtual","VirtualAndPhysical","SingleUseVirtual"],[c,m]=y.useState(),[g,o]=y.useState();return x(O,{title:"Choice Picker",children:[r(B,{title:"Default",style:A.part,children:r(S,{items:t,value:c,onChange:m,renderItem:s=>v(s).with("Virtual",()=>r(f,{icon:"phone-regular",color:"mediumSladeBlue",children:"Virtual"})).with("VirtualAndPhysical",()=>r(f,{icon:"payment-regular",color:"shakespear",children:"Virtual & physical"})).with("SingleUseVirtual",()=>r(f,{icon:"phone-regular",color:"darkPink",children:"Single use"})).exhaustive()})}),r(B,{title:"Large",style:A.part,children:r(S,{items:t,value:g,large:!0,onChange:o,renderItem:s=>v(s).with("Virtual",()=>r(f,{icon:"phone-regular",color:"mediumSladeBlue",children:"Virtual"})).with("VirtualAndPhysical",()=>r(f,{icon:"payment-regular",color:"shakespear",children:"Virtual & physical"})).with("SingleUseVirtual",()=>r(f,{icon:"phone-regular",color:"darkPink",children:"Single use"})).exhaustive()})})]})};var I,W,D;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const items: ["Virtual", "VirtualAndPhysical", "SingleUseVirtual"] = ["Virtual", "VirtualAndPhysical", "SingleUseVirtual"];
  const [value, setValue] = useState<(typeof items)[number]>();
  const [largeValue, setLargeValue] = useState<(typeof items)[number]>();
  return <StoryBlock title="Choice Picker">
      <StoryPart title="Default" style={styles.part}>
        <ChoicePicker items={items} value={value} onChange={setValue} renderItem={item => match(item).with("Virtual", () => <Tag icon="phone-regular" color="mediumSladeBlue">
                  Virtual
                </Tag>).with("VirtualAndPhysical", () => <Tag icon="payment-regular" color="shakespear">
                  Virtual & physical
                </Tag>).with("SingleUseVirtual", () => <Tag icon="phone-regular" color="darkPink">
                  Single use
                </Tag>).exhaustive()} />
      </StoryPart>

      <StoryPart title="Large" style={styles.part}>
        <ChoicePicker items={items} value={largeValue} large={true} onChange={setLargeValue} renderItem={item => match(item).with("Virtual", () => <Tag icon="phone-regular" color="mediumSladeBlue">
                  Virtual
                </Tag>).with("VirtualAndPhysical", () => <Tag icon="payment-regular" color="shakespear">
                  Virtual & physical
                </Tag>).with("SingleUseVirtual", () => <Tag icon="phone-regular" color="darkPink">
                  Single use
                </Tag>).exhaustive()} />
      </StoryPart>
    </StoryBlock>;
}`,...(D=(W=T.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const xe=["Default"];export{T as Default,xe as __namedExportsOrder,Te as default};
//# sourceMappingURL=ChoicePicker.stories-MGloXetI.js.map