import{j as t}from"./jsx-runtime-BlAj40OV.js";import{T as m}from"./Tag-BsNIDiwk.js";import{H as _,s as q,x as j,d as D,V as T,j as E,S as G,m as N,z as V}from"./ScrollView-DAMcnhPN.js";import{r as x}from"./index-Cs7sjTYM.js";import{L as C}from"./LakeButton-ByCQ9xNi.js";import{L as $}from"./LakeRadio-Dea-STzN.js";import{P as z}from"./Pressable-8N6ahZPW.js";import{T as Z}from"./Tile-BIYssuKn.js";import{c as H}from"./commonStyles-t4XfA7cz.js";import{u as X}from"./useResponsive-CzIqCC5v.js";import{t as B}from"./i18n-txGMRmwr.js";import{S as Y,a as v}from"./_StoriesComponents-Bs-HXw4X.js";import"./index-Cp2lnEJT.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./index-CJghV6hQ.js";import"./ResponsiveContainer-BcpmGxdZ.js";import"./rifm-D9VipfZA.js";import"./utc-Bb9NEY8r.js";import"./array-BfAlyugE.js";import"./Separator-qitoqTAJ.js";const K=(n,r)=>s=>Math.max(Math.min(s,r),n),R=n=>{let r=n.scrollTop,s=n.scrollLeft;return _.make(f=>{let d;const a=setTimeout(()=>{const h=()=>{d=requestAnimationFrame(()=>{r!==n.scrollTop||s!==n.scrollLeft?(r=n.scrollTop,s=n.scrollLeft,h()):f()})};h()},50);return()=>{clearTimeout(a),d!=null&&cancelAnimationFrame(d)}})},o=q.create({root:{alignSelf:"stretch",alignItems:"stretch",flexGrow:1,overflow:"hidden",marginHorizontal:j[12]},scrollSnap:{scrollSnapType:"x mandatory"},container:{alignSelf:"stretch",flexDirection:"row",flexWrap:"wrap",alignItems:"stretch",justifyContent:"center"},mobileContainer:{flexWrap:"nowrap",justifyContent:"flex-start",transitionProperty:"transform",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},item:{flexGrow:0,flexBasis:"33.333%",maxWidth:300,padding:D[12]},itemAnimation:{transform:"translateZ(0px)",animationKeyframes:{from:{opacity:0,transform:"translateZ(0px) translateX(50px)"},to:{opacity:1,transform:"translateZ(0px) translateX(0px)"}},animationDuration:"200ms",animationFillMode:"backwards",animationTimingFunction:"ease-in-out"},itemLarge:{flexBasis:"50%",maxWidth:"none"},itemSmallViewport:{width:"100%",flexBasis:"auto",maxWidth:"none",scrollSnapAlign:"center"},tileContents:{alignItems:"center",alignSelf:"stretch",flexGrow:1},tileRenderedContents:{alignItems:"center",alignSelf:"stretch",flexGrow:1},leftButton:{position:"absolute",top:"50%",left:j[24],transform:"translateY(-50%)",borderTopLeftRadius:0,borderBottomLeftRadius:0,borderWidth:1,borderLeftWidth:0},rightButton:{position:"absolute",top:"50%",right:j[24],transform:"translateY(-50%)",borderTopRightRadius:0,borderBottomRightRadius:0,borderWidth:1,borderRightWidth:0}}),O=n=>n,S=({tile:n=!0,items:r,getId:s=O,large:f=!1,renderItem:d,value:a,disabled:h=!1,onChange:w})=>{const p=x.useRef(null),{desktop:l}=X(N.medium),[b,P]=x.useState("start");x.useEffect(()=>{if(l)return;const e=p.current;if(e==null)return;const i=r.findIndex(c=>a===c);if(i!==-1&&e.element!=null){const c=e.element.offsetWidth;e.scrollTo({x:i*c,animated:!1})}a==null&&r[0]!=null&&w(r[0])},[l]);const M=()=>{if(l)return;const e=p.current;if(e!=null&&e.element!=null){const i=e.element.scrollLeft,c=e.element.offsetWidth,u=K(0,r.length-1)(Math.round(i/c)),g=r[u];g!=null&&w(g),V(u).with(0,()=>P("start")).with(r.length-1,()=>P("end")).otherwise(()=>P("middle"))}},U=()=>{var i;const e=p.current;if(e!=null&&e.element!=null){const c=e.element.scrollLeft,u=e.element.offsetWidth,g=Math.round(c/u),k=Math.max(0,g-1);e.element.style.scrollSnapType="none",(i=p.current)==null||i.scrollTo({x:k*u,animated:!0}),R(e.element).onResolve(()=>{e.element.style.scrollSnapType=null})}},F=()=>{var i;const e=p.current;if(e!=null&&e.element!=null){const c=e.element.scrollLeft,u=e.element.offsetWidth,g=Math.round(c/u),k=Math.min(r.length-1,g+1);e.element.style.scrollSnapType="none",(i=p.current)==null||i.scrollTo({x:k*u,animated:!0}),R(e.element).onResolve(()=>{e.element.style.scrollSnapType=null})}};return t.jsxs(T,{children:[t.jsx(T,{style:o.root,children:t.jsx(E,{ref:p,horizontal:!l,onScroll:M,scrollEventThrottle:200,style:o.scrollSnap,contentContainerStyle:[o.container,!l&&o.mobileContainer,!l&&{width:`${r.length*100}%`}],children:r.map((e,i)=>t.jsx(z,{disabled:h,style:[o.item,h&&H.disabled,l&&o.itemAnimation,l&&{animationDelay:`${200+100*i}ms`},f&&o.itemLarge,!l&&o.itemSmallViewport,!l&&{width:`${100/r.length}%`}],onPress:()=>w(e),children:({hovered:c})=>{const u=t.jsxs(T,{style:o.tileContents,children:[t.jsx(T,{style:o.tileRenderedContents,children:d(e)}),l&&t.jsxs(t.Fragment,{children:[t.jsx(G,{height:24}),t.jsx($,{value:a!=null&&s(e)===s(a)})]})]});return n?t.jsx(Z,{hovered:c,selected:a!=null&&s(e)===s(a),flexGrow:1,children:u}):u}},String(i)))})}),!l&&t.jsx(C,{icon:"chevron-left-filled",mode:"secondary",forceBackground:!0,onPress:U,disabled:b==="start"||h,style:o.leftButton,ariaLabel:B("common.previous")}),!l&&t.jsx(C,{icon:"chevron-right-filled",mode:"secondary",forceBackground:!0,onPress:F,disabled:b==="end"||h,style:o.rightButton,ariaLabel:B("common.next")})]})};S.__docgenInfo={description:"",methods:[],displayName:"ChoicePicker",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},large:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},renderItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"ReactNode"}}},description:""},value:{required:!1,tsType:{name:"T"},description:""},getId:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => unknown",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"unknown"}}},description:"",defaultValue:{value:"<T,>(x: T) => x",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tile:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const L=q.create({part:{padding:D[32]}}),Te={title:"Forms/ChoicePicker",component:S},y=()=>{const n=["Virtual","VirtualAndPhysical","SingleUseVirtual"],[r,s]=x.useState(),[f,d]=x.useState();return t.jsxs(Y,{title:"Choice Picker",children:[t.jsx(v,{title:"Default",style:L.part,children:t.jsx(S,{items:n,value:r,onChange:s,renderItem:a=>V(a).with("Virtual",()=>t.jsx(m,{icon:"phone-regular",color:"mediumSladeBlue",children:"Virtual"})).with("VirtualAndPhysical",()=>t.jsx(m,{icon:"payment-regular",color:"shakespear",children:"Virtual & physical"})).with("SingleUseVirtual",()=>t.jsx(m,{icon:"phone-regular",color:"darkPink",children:"Single use"})).exhaustive()})}),t.jsx(v,{title:"Large",style:L.part,children:t.jsx(S,{items:n,value:f,large:!0,onChange:d,renderItem:a=>V(a).with("Virtual",()=>t.jsx(m,{icon:"phone-regular",color:"mediumSladeBlue",children:"Virtual"})).with("VirtualAndPhysical",()=>t.jsx(m,{icon:"payment-regular",color:"shakespear",children:"Virtual & physical"})).with("SingleUseVirtual",()=>t.jsx(m,{icon:"phone-regular",color:"darkPink",children:"Single use"})).exhaustive()})}),t.jsx(v,{title:"Without tile",style:L.part,children:t.jsx(S,{tile:!1,items:n,value:f,onChange:d,renderItem:a=>V(a).with("Virtual",()=>t.jsx(m,{icon:"phone-regular",color:"mediumSladeBlue",children:"Virtual"})).with("VirtualAndPhysical",()=>t.jsx(m,{icon:"payment-regular",color:"shakespear",children:"Virtual & physical"})).with("SingleUseVirtual",()=>t.jsx(m,{icon:"phone-regular",color:"darkPink",children:"Single use"})).exhaustive()})})]})};y.__docgenInfo={description:"",methods:[],displayName:"Default"};var A,W,I;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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

      <StoryPart title="Without tile" style={styles.part}>
        <ChoicePicker tile={false} items={items} value={largeValue} onChange={setLargeValue} renderItem={item => match(item).with("Virtual", () => <Tag icon="phone-regular" color="mediumSladeBlue">
                  Virtual
                </Tag>).with("VirtualAndPhysical", () => <Tag icon="payment-regular" color="shakespear">
                  Virtual & physical
                </Tag>).with("SingleUseVirtual", () => <Tag icon="phone-regular" color="darkPink">
                  Single use
                </Tag>).exhaustive()} />
      </StoryPart>
    </StoryBlock>;
}`,...(I=(W=y.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const Ve=["Default"];export{y as Default,Ve as __namedExportsOrder,Te as default};
//# sourceMappingURL=ChoicePicker.stories-DCl8CsaZ.js.map