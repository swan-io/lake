import{S as W,p as P,f as D,a as T,V as S,j as r,o as F,F as q,b as U,w as j,R as k}from"./Space-6b47eb46.js";import{r as g}from"./index-1e572255.js";import{u as G}from"./useResponsive-5353f49b.js";import{c as H}from"./math-89907732.js";import{P as N}from"./Boxed-b75d14a5.js";import{a as L}from"./LakeButton-a7290519.js";import{L as $}from"./LakeRadio-cfbc4d60.js";import{P as Z}from"./Pressable-7f6990ae.js";import{T as z}from"./Tile-ae19b945.js";import{T as p}from"./Tag-29e93e04.js";import{S as X,a as C}from"./_StoriesComponents-aedb338a.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-7e1d54b4.js";import"./useMergeRefs-d6318480.js";import"./Box-0309892b.js";import"./index-58506d05.js";const b=t=>{let c=t.scrollTop,m=t.scrollLeft;return N.make(f=>{let o;const u=setTimeout(()=>{const s=()=>{o=requestAnimationFrame(()=>{c!==t.scrollTop||m!==t.scrollLeft?(c=t.scrollTop,m=t.scrollLeft,s()):f()})};s()},50);return()=>{clearTimeout(u),o!=null&&cancelAnimationFrame(o)}})},l=W.create({root:{alignSelf:"stretch",alignItems:"stretch",flexGrow:1,overflow:"hidden",marginHorizontal:P[12]},scrollSnap:{scrollSnapType:"x mandatory"},container:{alignSelf:"stretch",flexDirection:"row",flexWrap:"wrap",alignItems:"stretch",justifyContent:"center"},mobileContainer:{flexWrap:"nowrap",justifyContent:"flex-start",transitionProperty:"transform",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},item:{flexGrow:0,flexBasis:"33.333%",maxWidth:300,padding:D[12]},itemAnimation:{transform:"translateZ(0px)",animationKeyframes:{from:{opacity:0,transform:"translateZ(0px) translateX(50px)"},to:{opacity:1,transform:"translateZ(0px) translateX(0px)"}},animationDuration:"200ms",animationFillMode:"backwards",animationTimingFunction:"ease-in-out"},itemLarge:{flexBasis:"50%",maxWidth:"none"},itemSmallViewport:{width:"100%",flexBasis:"auto",maxWidth:"none",scrollSnapAlign:"center"},tileContents:{alignItems:"center",alignSelf:"stretch",flexGrow:1},tileRenderedContents:{alignItems:"center",alignSelf:"stretch",flexGrow:1},leftButton:{position:"absolute",top:"50%",left:P[24],transform:"translateY(-50%)",borderTopLeftRadius:0,borderBottomLeftRadius:0,borderWidth:1,borderLeftWidth:0},rightButton:{position:"absolute",top:"50%",right:P[24],transform:"translateY(-50%)",borderTopRightRadius:0,borderBottomRightRadius:0,borderWidth:1,borderRightWidth:0}}),Y=t=>t,y=({items:t,getId:c=Y,large:m=!1,renderItem:f,value:o,onChange:u})=>{const s=g.useRef(null),{desktop:n}=G(j.medium),[v,x]=g.useState("start");g.useEffect(()=>{if(n)return;const e=s.current,a=t.findIndex(i=>o===i);if(a!==-1&&e instanceof HTMLDivElement){const i=e.offsetWidth;e.scrollTo({x:a*i,animated:!1})}o==null&&t[0]!=null&&u(t[0])},[n]);const M=()=>{if(n)return;const e=s.current;if(e instanceof HTMLDivElement){const a=e.scrollLeft,i=e.offsetWidth,d=H(0,t.length-1)(Math.round(a/i)),h=t[d];h!=null&&u(h),k(d).with(0,()=>x("start")).with(t.length-1,()=>x("end")).otherwise(()=>x("middle"))}},_=()=>{var a;const e=s.current;if(e instanceof HTMLDivElement){const i=e.scrollLeft,d=e.offsetWidth,h=Math.round(i/d),w=Math.max(0,h-1);e.style.scrollSnapType="none",(a=s.current)==null||a.scrollTo({x:w*d,animated:!0}),b(e).onResolve(()=>{e.style.scrollSnapType=null})}},E=()=>{var a;const e=s.current;if(e instanceof HTMLDivElement){const i=e.scrollLeft,d=e.offsetWidth,h=Math.round(i/d),w=Math.min(t.length-1,h+1);e.style.scrollSnapType="none",(a=s.current)==null||a.scrollTo({x:w*d,animated:!0}),b(e).onResolve(()=>{e.style.scrollSnapType=null})}};return T(S,{children:[r(S,{style:l.root,children:r(F,{ref:s,horizontal:!n,onScroll:M,scrollEventThrottle:200,style:l.scrollSnap,contentContainerStyle:[l.container,!n&&l.mobileContainer,!n&&{width:`${t.length*100}%`}],children:t.map((e,a)=>r(Z,{style:[l.item,n&&l.itemAnimation,n&&{animationDelay:`${200+100*a}ms`},m&&l.itemLarge,!n&&l.itemSmallViewport,!n&&{width:`${100/t.length}%`}],onPress:()=>u(e),children:({hovered:i})=>r(z,{hovered:i,selected:o!=null&&c(e)===c(o),flexGrow:1,children:T(S,{style:l.tileContents,children:[r(S,{style:l.tileRenderedContents,children:f(e)}),n&&T(q,{children:[r(U,{height:24}),r($,{value:o!=null&&c(e)===c(o)})]})]})})},String(a)))})}),!n&&r(L,{icon:"chevron-left-filled",mode:"secondary",forceBackground:!0,onPress:_,disabled:v==="start",style:l.leftButton}),!n&&r(L,{icon:"chevron-right-filled",mode:"secondary",forceBackground:!0,onPress:E,disabled:v==="end",style:l.rightButton})]})};try{y.displayName="ChoicePicker",y.__docgenInfo={description:"",displayName:"ChoicePicker",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},large:{defaultValue:{value:"false"},description:"",name:"large",required:!1,type:{name:"boolean"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"(value: T) => ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T"}},getId:{defaultValue:{value:"<T,>(x: T) => x"},description:"",name:"getId",required:!1,type:{name:"((item: T) => unknown)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: T) => void"}}}}}catch{}const B=W.create({part:{padding:D[32]}}),he={title:"Forms/ChoicePicker",component:y},V=()=>{const t=["Virtual","VirtualAndPhysical","SingleUseVirtual"],[c,m]=g.useState(),[f,o]=g.useState();return T(X,{title:"Choice Picker",children:[r(C,{title:"Default",style:B.part,children:r(y,{items:t,value:c,onChange:m,renderItem:u=>k(u).with("Virtual",()=>r(p,{icon:"phone-regular",color:"mediumSladeBlue",children:"Virtual"})).with("VirtualAndPhysical",()=>r(p,{icon:"payment-regular",color:"shakespear",children:"Virtual & physical"})).with("SingleUseVirtual",()=>r(p,{icon:"phone-regular",color:"darkPink",children:"Single use"})).exhaustive()})}),r(C,{title:"Large",style:B.part,children:r(y,{items:t,value:f,large:!0,onChange:o,renderItem:u=>k(u).with("Virtual",()=>r(p,{icon:"phone-regular",color:"mediumSladeBlue",children:"Virtual"})).with("VirtualAndPhysical",()=>r(p,{icon:"payment-regular",color:"shakespear",children:"Virtual & physical"})).with("SingleUseVirtual",()=>r(p,{icon:"phone-regular",color:"darkPink",children:"Single use"})).exhaustive()})})]})};var R,A,I;V.parameters={...V.parameters,docs:{...(R=V.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(I=(A=V.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const pe=["Default"];export{V as Default,pe as __namedExportsOrder,he as default};
//# sourceMappingURL=ChoicePicker.stories-33ddf67d.js.map
