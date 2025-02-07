import{j as t}from"./jsx-runtime-DT09rT5F.js";import{r}from"./index-DXKZGL6g.js";import{j as L,V as E,s as j,a8 as D,z as k,N,P as B,C as I,l as O,h as W,r as _,e as H}from"./ScrollView-DmQfgLfc.js";import{u as K}from"./useResponsive-6iDeDSbQ.js";import{n as A}from"./function-CEqjUwAs.js";import{B as M}from"./BottomPanel-BUH_mbnv.js";import{F as z}from"./FocusTrap-DNHrld98.js";import{T as G}from"./TransitionView-B8hXHfhO.js";import{M as F}from"./index-BwY4x6i0.js";const U=j.create({scrollTracker:{position:"absolute",pointerEvents:"none",right:0,bottom:0}}),$=({ItemSeparatorComponent:o,ListEmptyComponent:T,ListFooterComponent:g,ListHeaderComponent:x,contentContainerStyle:b,data:c,horizontal:m=!1,keyExtractor:n,onEndReached:p,onEndReachedThresholdPx:i=200,onKeyDown:q,onScroll:S,renderItem:l,role:f,scrollEventThrottle:V=16,showsScrollIndicators:y=!0,style:v},w)=>{const h=r.useRef(null),u=m?{top:0,width:i}:{left:0,height:i};return r.useEffect(()=>{const a=h.current;if(a!=null){const s=new IntersectionObserver(C=>{C.forEach(R=>{R.isIntersecting&&(p==null||p())})});return s.observe(a),()=>{s.unobserve(a)}}},[c.length]),t.jsxs(L,{contentContainerStyle:b,horizontal:m,onKeyDown:q,onScroll:S,ref:w,role:f,scrollEventThrottle:V,showsScrollIndicators:y,style:v,children:[x,c.length<=0?T:c.map((a,s)=>t.jsxs(r.Fragment,{children:[s!==0&&o,l({item:a,index:s})]},n(a,s))),g,t.jsx(E,{role:"none",ref:h,style:[U.scrollTracker,u]})]})},J=r.forwardRef($);J.__docgenInfo={description:"",methods:[],displayName:"FlatList",props:{ItemSeparatorComponent:{required:!1,tsType:{name:"ReactNode"},description:""},ListEmptyComponent:{required:!1,tsType:{name:"ReactNode"},description:""},ListFooterComponent:{required:!1,tsType:{name:"ReactNode"},description:""},ListHeaderComponent:{required:!1,tsType:{name:"ReactNode"},description:""},contentContainerStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},horizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},keyExtractor:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => string",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""},onEndReached:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEndReachedThresholdPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},onKeyDown:{required:!1,tsType:{name:'intersection["onKeyDown"]',raw:'ScrollViewProps["onKeyDown"]'},description:""},onScroll:{required:!1,tsType:{name:'intersection["onScroll"]',raw:'ScrollViewProps["onScroll"]'},description:""},renderItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(info: ListRenderItemInfo<T>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  item: T;
  index: number;
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}}]}},name:"info"}],return:{name:"ReactNode"}}},description:""},role:{required:!1,tsType:{name:"WebRole"},description:""},scrollEventThrottle:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},showsScrollIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};const d=j.create({container:{...j.absoluteFillObject,pointerEvents:"none"},defaultCursor:{cursor:"default"},underlay:{pointerEvents:"auto",cursor:"default",position:"fixed",left:0,top:0,bottom:0,right:0},popoverContainer:{position:"absolute",display:"flex"},popover:{pointerEvents:"auto",display:"flex",flexDirection:"column",backgroundColor:H.accented,borderRadius:_[8],marginVertical:W[8],overflow:"hidden",boxShadow:O.modal,flexGrow:1,alignSelf:"stretch"},popoverContents:{alignItems:"stretch"}}),Q={...I.fadeAndSlideInFromBottom,leave:[I.fadeAndSlideInFromBottom.leave,{animationDuration:"100ms"}]},X=600,Y=r.memo(({children:o,id:T,label:g,role:x="dialog",describedBy:b,matchReferenceWidth:c=!1,matchReferenceMinWidth:m=!1,onDismiss:n=A,onEscapeKey:p=n,referenceRef:i,returnFocus:q=!0,autoFocus:S=!0,visible:l,underlay:f=!0,forcedMode:V})=>{const[y,v]=r.useState(null),w=r.useRef(null),{desktop:h}=K(X),{position:u}=D({referenceRef:i,visible:l,matchReferenceWidth:c,matchReferenceMinWidth:m});r.useEffect(()=>{const e=w.current;!l&&e!=null&&(e.style.pointerEvents="none")},[l]),r.useEffect(()=>{const e=document.createElement("div");return document.body.append(e),v(e),()=>{v(null),e.remove()}},[]);const a=r.useCallback(e=>{e.preventDefault(),n()},[n]),s=r.useCallback(({target:e})=>{const P=i.current;(!(P instanceof Element)||!(e instanceof Element)||P!==e&&!P.contains(e))&&n()},[i,n]),C=r.useCallback(e=>{e.preventDefault()},[]);return y==null?null:k(V).with(N.nullish,()=>h?"Dropdown":"BottomPanel").with("BottomPanel",()=>"BottomPanel").with("Dropdown",()=>"Dropdown").exhaustive()==="BottomPanel"?t.jsx(M,{visible:l,onPressClose:n,returnFocus:!1,children:typeof o=="function"?o({mode:"panel"}):o}):t.jsxs(B,{container:y,children:[l&&f?t.jsx(F,{ref:w,style:d.underlay,onPress:a,"aria-label":"Close"}):null,t.jsx(G,{style:d.container,...Q,children:u.isSome()?t.jsx(E,{style:u.get().rootStyle,children:t.jsx(E,{style:[d.popoverContainer,u.get().style,{alignItems:k(u.get().horizontalPosition).with("left",()=>"flex-start").with("center",()=>"center").with("right",()=>"flex-end").exhaustive()}],children:t.jsx(L,{style:d.popover,contentContainerStyle:d.popoverContents,id:T,role:x,"aria-describedby":b,"aria-label":g,children:t.jsx(z,{focusLock:!0,returnFocus:q,autoFocus:S,onEscapeKey:p,onClickOutside:f?void 0:s,children:t.jsx(F,{tabIndex:-1,onPress:C,style:d.defaultCursor,children:typeof o=="function"?o({mode:"dropdown"}):o})})})})}):null})]})});Y.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{role:{defaultValue:{value:'"dialog"',computed:!1},required:!1},matchReferenceWidth:{defaultValue:{value:"false",computed:!1},required:!1},matchReferenceMinWidth:{defaultValue:{value:"false",computed:!1},required:!1},onDismiss:{defaultValue:{value:"() => {}",computed:!1},required:!1},onEscapeKey:{defaultValue:{value:"onDismiss = noop",computed:!1},required:!1},returnFocus:{defaultValue:{value:"true",computed:!1},required:!1},autoFocus:{defaultValue:{value:"true",computed:!1},required:!1},underlay:{defaultValue:{value:"true",computed:!1},required:!1}}};export{J as F,Y as P};
//# sourceMappingURL=Popover-D6DUAftz.js.map
