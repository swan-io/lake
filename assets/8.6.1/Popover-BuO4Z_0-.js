import{s as E,j as t,l as D,V as R,d as L,r as N,b as B,g as O,F as k,M as W,$ as I,D as _,P as H}from"./ScrollView-CouMEPyK.js";import{r}from"./index-uCp2LrAq.js";import{u as K}from"./useResponsive-CWYKQO6x.js";import{n as M}from"./function-BHIpw5Jd.js";import{B as A}from"./BottomPanel-KZEZbmpv.js";import{F as $}from"./FocusTrap-Dqfzx5pd.js";import{T as z}from"./TransitionView-DifTnmGJ.js";import{M as F}from"./index-_raWLUMJ.js";const G=E.create({scrollTracker:{position:"absolute",pointerEvents:"none",right:0,bottom:0}}),U=({ItemSeparatorComponent:o,ListEmptyComponent:T,ListFooterComponent:g,ListHeaderComponent:b,contentContainerStyle:x,data:c,horizontal:m=!1,keyExtractor:n,onEndReached:p,onEndReachedThresholdPx:i=200,onKeyDown:q,onScroll:S,renderItem:l,role:f,scrollEventThrottle:V=16,showsScrollIndicators:y=!0,style:v},w)=>{const h=r.useRef(null),u=m?{top:0,width:i}:{left:0,height:i};return r.useEffect(()=>{const a=h.current;if(a!=null){const s=new IntersectionObserver(P=>{P.forEach(j=>{j.isIntersecting&&(p==null||p())})});return s.observe(a),()=>{s.unobserve(a)}}},[c.length]),t.jsxs(D,{contentContainerStyle:x,horizontal:m,onKeyDown:q,onScroll:S,ref:w,role:f,scrollEventThrottle:V,showsScrollIndicators:y,style:v,children:[b,c.length<=0?T:c.map((a,s)=>t.jsxs(r.Fragment,{children:[s!==0&&o,l({item:a,index:s})]},n(a,s))),g,t.jsx(R,{role:"none",ref:h,style:[G.scrollTracker,u]})]})},J=r.forwardRef(U);J.__docgenInfo={description:"",methods:[],displayName:"FlatList",props:{ItemSeparatorComponent:{required:!1,tsType:{name:"ReactNode"},description:""},ListEmptyComponent:{required:!1,tsType:{name:"ReactNode"},description:""},ListFooterComponent:{required:!1,tsType:{name:"ReactNode"},description:""},ListHeaderComponent:{required:!1,tsType:{name:"ReactNode"},description:""},contentContainerStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},horizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},keyExtractor:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => string",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""},onEndReached:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEndReachedThresholdPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},onKeyDown:{required:!1,tsType:{name:'intersection["onKeyDown"]',raw:'ScrollViewProps["onKeyDown"]'},description:""},onScroll:{required:!1,tsType:{name:'intersection["onScroll"]',raw:'ScrollViewProps["onScroll"]'},description:""},renderItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(info: ListRenderItemInfo<T>) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  item: T;
  index: number;
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}}]}},name:"info"}],return:{name:"ReactNode"}}},description:""},role:{required:!1,tsType:{name:"WebRole"},description:""},scrollEventThrottle:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},showsScrollIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};const d=E.create({container:{...E.absoluteFillObject,pointerEvents:"none"},defaultCursor:{cursor:"default"},underlay:{pointerEvents:"auto",cursor:"default",position:"fixed",left:0,top:0,bottom:0,right:0},popoverContainer:{position:"absolute",display:"flex"},popover:{pointerEvents:"auto",display:"flex",flexDirection:"column",backgroundColor:L.accented,borderRadius:N[8],marginVertical:B[8],overflow:"hidden",boxShadow:O.modal,flexGrow:1,alignSelf:"stretch"},popoverContents:{alignItems:"stretch"}}),Q={...k.fadeAndSlideInFromBottom,leave:[k.fadeAndSlideInFromBottom.leave,{animationDuration:"100ms"}]},X=600,Y=r.memo(({children:o,id:T,label:g,role:b="dialog",describedBy:x,matchReferenceWidth:c=!1,matchReferenceMinWidth:m=!1,onDismiss:n=M,onEscapeKey:p=n,referenceRef:i,returnFocus:q=!0,autoFocus:S=!0,visible:l,underlay:f=!0,forcedMode:V})=>{const[y,v]=r.useState(null),w=r.useRef(null),{desktop:h}=K(X),{position:u}=W({referenceRef:i,visible:l,matchReferenceWidth:c,matchReferenceMinWidth:m});r.useEffect(()=>{const e=w.current;!l&&e!=null&&(e.style.pointerEvents="none")},[l]),r.useEffect(()=>{const e=document.createElement("div");return document.body.append(e),v(e),()=>{v(null),e.remove()}},[]);const a=r.useCallback(e=>{e.preventDefault(),n()},[n]),s=r.useCallback(({target:e})=>{const C=i.current;(!(C instanceof Element)||!(e instanceof Element)||C!==e&&!C.contains(e))&&n()},[i,n]),P=r.useCallback(e=>{e.preventDefault()},[]);return y==null?null:I(V).with(_.nullish,()=>h?"Dropdown":"BottomPanel").with("BottomPanel",()=>"BottomPanel").with("Dropdown",()=>"Dropdown").exhaustive()==="BottomPanel"?t.jsx(A,{visible:l,onPressClose:n,returnFocus:!1,children:typeof o=="function"?o({mode:"panel"}):o}):t.jsxs(H,{container:y,children:[l&&f?t.jsx(F,{ref:w,style:d.underlay,onPress:a,"aria-label":"Close"}):null,t.jsx(z,{style:d.container,...Q,children:u.isSome()?t.jsx(R,{style:u.get().rootStyle,children:t.jsx(R,{style:[d.popoverContainer,u.get().style,{alignItems:I(u.get().horizontalPosition).with("left",()=>"flex-start").with("center",()=>"center").with("right",()=>"flex-end").exhaustive()}],children:t.jsx(D,{style:d.popover,contentContainerStyle:d.popoverContents,id:T,role:b,"aria-describedby":x,"aria-label":g,children:t.jsx($,{focusLock:!0,returnFocus:q,autoFocus:S,onEscapeKey:p,onClickOutside:f?void 0:s,children:t.jsx(F,{tabIndex:-1,onPress:P,style:d.defaultCursor,children:typeof o=="function"?o({mode:"dropdown"}):o})})})})}):null})]})});Y.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{role:{defaultValue:{value:'"dialog"',computed:!1},required:!1},matchReferenceWidth:{defaultValue:{value:"false",computed:!1},required:!1},matchReferenceMinWidth:{defaultValue:{value:"false",computed:!1},required:!1},onDismiss:{defaultValue:{value:"() => {}",computed:!1},required:!1},onEscapeKey:{defaultValue:{value:"onDismiss = noop",computed:!1},required:!1},returnFocus:{defaultValue:{value:"true",computed:!1},required:!1},autoFocus:{defaultValue:{value:"true",computed:!1},required:!1},underlay:{defaultValue:{value:"true",computed:!1},required:!1}}};export{J as F,Y as P};
//# sourceMappingURL=Popover-BuO4Z_0-.js.map
