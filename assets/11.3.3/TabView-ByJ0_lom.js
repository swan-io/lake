import{j as e}from"./jsx-runtime-DT09rT5F.js";import{a as se}from"./index-DDvspEct.js";import{r as o}from"./index-DXKZGL6g.js";import{s as ie,c as x,t as J,r as ee,d as z,e as ne,k as le,x as ce,z as G,N as R,h as ae,i as l,y as te,V as K,T as H,S as j,I as M,C as ue,B as de,L as he}from"./ScrollView-uRWD7sHo.js";import{a as re,u as pe}from"./Pressable-DcSKb_Ww.js";import{n as fe}from"./function-C-7S2jwM.js";import{F as me}from"./FocusTrap-BTtxEFod.js";import{L as we}from"./Link-BQ6NHtMO.js";import{T as ge}from"./TransitionView-CHCst6-1.js";const xe=40,r=ie.create({container:{borderBottomWidth:1,borderBottomColor:x.gray[100],zIndex:10},link:{...J.medium,position:"relative",color:x.gray[700],height:xe,whiteSpace:"nowrap",display:"flex",flexDirection:"row",alignItems:"center"},activeLink:{color:x.current[500],boxShadow:`inset 0 -2px ${x.gray[700]}`},hoveredLink:{boxShadow:`inset 0 -2px ${x.gray[700]}`},underline:{position:"absolute",bottom:0,height:2,width:1,backgroundColor:x.current[500]},animatedUnderline:{transformOrigin:"0 0",transition:"200ms ease-in-out transform"},placeholder:{position:"absolute",top:0,left:0,right:0,visibility:"hidden",flexDirection:"row",alignItems:"flex-end",overflow:"hidden",pointerEvents:"none"},count:{...J.smallRegular,color:x.current[500],backgroundColor:x.current[50],borderColor:x.current[100],borderWidth:1,borderRadius:ee[4],paddingHorizontal:z[4],minWidth:z[24],display:"inline-block",textAlign:"center"},dropdownHandleContainer:{alignItems:"center",justifyContent:"center",alignSelf:"stretch"},dropdownPlacement:{position:"absolute",right:0,top:"100%"},dropdown:{position:"absolute",right:0,top:"100%",backgroundColor:ne.accented,borderRadius:ee[8],boxShadow:le.modal,paddingVertical:z[8]},dropdownLink:{...J.regular,paddingHorizontal:z[16],paddingVertical:z[8],whiteSpace:"nowrap"},dropdownLinkTextHovered:{backgroundColor:x.gray[50]},dropdownLinkTextActive:{boxShadow:`inset 3px 0 ${x.current.primary}`,color:x.current.primary},separator:{position:"absolute",top:0,left:ce[16],bottom:0,width:1,backgroundColor:x.gray[100]},sticky:{backgroundColor:ne.default,position:"sticky",top:-1}}),Q=o.forwardRef(({children:u,style:d,tab:L,onChange:p,activeTabId:C,onBlur:f,onFocus:y,onPress:c},n)=>G(L).with({url:R.string},({url:h})=>e.jsx(we,{ref:n,to:h,style:d,onFocus:y,onBlur:f,onPress:c,children:u})).with({id:R.string},({id:h})=>{const m=h===C;return e.jsx(re,{ref:n,style:F=>d({...F,active:m}),onPress:()=>{p==null||p(h),c==null||c()},onFocus:y,onBlur:f,children:u})}).exhaustive()),ye=({tabs:u,onHoverStart:d,onHoverEnd:L,onLinkFocus:p,onLinkBlur:C,onLinkPress:f,activeTabId:y,onChange:c})=>{const n=o.useRef(null);return te(n,{onHoverStart:d,onHoverEnd:L}),e.jsx(K,{role:"menu",style:r.dropdown,ref:n,children:u.map(h=>{const m=D(h);return e.jsx(Q,{onChange:c,activeTabId:y,tab:h,onFocus:p,onBlur:C,onPress:f,role:"menuitem",ariaCurrentValue:"location",style:({active:F,hovered:q})=>[r.dropdownLink,F&&r.dropdownLinkTextActive,q&&r.dropdownLinkTextHovered],children:h.label},m)})})},Fe=new Set(["ForcedOpen","OpenFromFocus"]),je=new Set(["Open","ForcedOpen","OpenFromFocus"]),ke=new Set(["ForcedOpen"]),be=o.forwardRef(({tabs:u,otherLabel:d,currentUrl:L,activeTabId:p,onChange:C},f)=>{const[y,c]=o.useReducer((t,a)=>G([a,t]).returnType().with(["ForceToggle","Closed"],["ForceToggle","Open"],["ForceToggle","ForcedClosed"],()=>"ForcedOpen").with(["ForceToggle","OpenFromFocus"],["ForceToggle","ForcedOpen"],()=>"ForcedClosed").with(["ForceClose",R.any],()=>"ForcedClosed").with(["FocusHandle","ForcedClosed"],()=>"Closed").with(["Open","ForcedOpen"],["FocusHandle","ForcedOpen"],["Close","ForcedOpen"],()=>"ForcedOpen").with(["Open",R.any],()=>"Open").with(["FocusHandle",R.any],()=>"OpenFromFocus").with(["Close",R.any],()=>"Closed").exhaustive(),"Closed"),n=o.useRef(void 0),h=o.useRef(null),m=o.useRef(null),F=o.useRef(null),{onHandleFocus:q,onLinkFocus:A,onAnyBlur:V,onHoverStart:P,onHoverEnd:_,onPress:W,onPressOutside:E,onEscapeKey:N}=o.useMemo(()=>({onHandleFocus:t=>{if(ae(m.current))return;F.current=Date.now();const a=m.current,s=t;a.contains(s.relatedTarget)||(l(n.current)&&clearTimeout(n.current),c("FocusHandle"))},onLinkFocus:()=>{l(n.current)&&clearTimeout(n.current),c("Open")},onAnyBlur:()=>{l(n.current)&&clearTimeout(n.current),n.current=window.setTimeout(()=>{c("Close")},300)},onHoverStart:()=>{l(n.current)&&clearTimeout(n.current),c("Open")},onHoverEnd:()=>{l(n.current)&&clearTimeout(n.current),n.current=window.setTimeout(()=>{c("Close")},300)},onPress:()=>{F.current!=null&&Date.now()-F.current<32||(l(n.current)&&clearTimeout(n.current),c("ForceToggle"))},onPressOutside:t=>{l(h.current)&&h.current.contains(t.target)||(l(n.current)&&clearTimeout(n.current),c("ForceClose"),n.current=window.setTimeout(()=>{c("Close")},300))},onEscapeKey:()=>{l(n.current)&&clearTimeout(n.current),c("ForceClose"),n.current=window.setTimeout(()=>{c("Close")},300)}}),[]);o.useEffect(()=>()=>{l(n.current)&&clearTimeout(n.current)},[]);const U=je.has(y),$=Fe.has(y),S=ke.has(y);te(h,{onHoverStart:P,onHoverEnd:_});const I=pe(m,f),X=o.useMemo(()=>u.find(t=>Y({activeTabId:p,currentLocationURL:L,tab:t})),[p,L,u]);return e.jsxs(K,{style:r.dropdownHandleContainer,ref:I,children:[e.jsxs(re,{ref:h,role:"button","aria-expanded":U,"aria-haspopup":"true",onFocus:q,onBlur:V,onPress:W,style:({hovered:t})=>[r.link,l(X)?r.activeLink:t?r.hoveredLink:null],children:[e.jsx(H,{children:d}),e.jsx(j,{width:8}),e.jsx(H,{style:r.count,children:u.length}),e.jsx(j,{width:4}),e.jsx(M,{name:"chevron-down-filled",size:12})]}),e.jsx(ge,{...ue.fadeAndSlideInFromBottom,style:r.dropdownPlacement,children:U?e.jsx(me,{autoFocus:$,focusLock:S,returnFocus:S,onClickOutside:E,onEscapeKey:S?N:void 0,children:e.jsx(ye,{onChange:C,activeTabId:p,tabs:u,onHoverStart:P,onHoverEnd:_,onLinkFocus:A,onLinkBlur:V,onLinkPress:N})}):null})]})}),Y=({tab:u,activeTabId:d,currentLocationURL:L})=>G(u).with({url:R.string},({url:p})=>L.startsWith(p)).with({id:R.string},({id:p})=>l(d)&&p===d).exhaustive(),D=u=>G(u).with({url:R.string},({url:d})=>d).with({id:R.string},({id:d})=>d).exhaustive(),Le=({tabs:u,otherLabel:d,hideIfSingleItem:L=!0,sticky:p=!1,padding:C,activeTabId:f,onChange:y})=>{const c=o.useRef(null),n=o.useRef(null),h=o.useRef(null),m=o.useRef({}),F=o.useRef({}),[{left:q,width:A},V]=o.useState({left:0,width:0}),[P,_]=o.useState(!1),[[W,E],N]=o.useState([[],[]]),U=se(),{path:$}=U,S=U.toString();o.useEffect(()=>{if(l(m.current)){const t=Object.entries(m.current),a=c.current;for(const[s,w]of t)if((s===f||"/"+$.join("/")===s)&&l(w)&&l(a)){w.measureLayout(a,(k,v,b)=>{V({left:k-(C??0),width:b})},fe);return}}V({left:0,width:0})},[$,W,E,C,f]),o.useEffect(()=>{_(A>0)},[A]);const I=o.useCallback(({width:t})=>{const a=u.map(i=>{if(F.current){const O=D(i),T=F.current[O];if(l(T)){const B=T.getBoundingClientRect().width;return{tab:i,width:B+32}}else return{tab:i,width:0}}else return{tab:i,width:0}}),s=[],w=[];let k=0;a.forEach(i=>{if(k+=i.width,k<t)s.push({...i.tab,width:i.width});else if(Y({activeTabId:f,currentLocationURL:S,tab:i.tab})){for(;s.length!==0&&s.reduce((O,T)=>O+T.width,0)+(i.width+16)>=t;){const O=s.pop();l(O)&&(w.unshift(O),k-=O.width)}s.push({...i.tab,width:i.width})}else w.push({...i.tab,width:i.width})});const v=h.current;let b=100;l(v)&&(b=v.getBoundingClientRect().width);const g=s.findIndex(i=>Y({activeTabId:f,currentLocationURL:S,tab:i}));if(g!==-1){const i=s[g],O=(i==null?void 0:i.width)??0,T=[...s.slice(0,g),...s.slice(g+1)];for(;T.length!==0&&T.reduce((B,oe)=>B+oe.width,0)+O+(w.length>=1?b:0)>=t;){const B=T.pop();l(B)&&w.unshift(B)}const Z=[...T.slice(0,g),...i!=null?[i]:[],...T.slice(g)];N([Z,w])}else N([s,w])},[u,f,S]),X=o.useCallback(({target:t,nativeEvent:{layout:{width:a}}})=>{I({container:t,width:a})},[I]);return o.useLayoutEffect(()=>{const t=n.current;if(t){const a=t,s=a.getBoundingClientRect().width;I({container:a,width:s})}},[I]),u.length<=1&&L?null:e.jsxs(de,{alignItems:"center",direction:"row",role:"tablist",ref:c,style:[r.container,p&&r.sticky,{paddingHorizontal:C}],children:[e.jsxs(K,{style:r.placeholder,"aria-hidden":!0,ref:n,onLayout:X,children:[u.map(t=>{const{label:a,icon:s,count:w,endElement:k}=t,v=D(t);return e.jsxs(o.Fragment,{children:[e.jsxs(Q,{ref:b=>{F.current&&(F.current[v]=b)},activeTabId:f,tab:t,onChange:y,style:({active:b,hovered:g})=>[r.link,b?r.activeLink:g?r.hoveredLink:null],children:[l(s)&&e.jsxs(e.Fragment,{children:[e.jsx(M,{name:s,size:16,color:"currentColor"}),e.jsx(j,{width:8})]}),e.jsx(H,{children:a}),l(k)&&e.jsxs(e.Fragment,{children:[e.jsx(j,{width:8}),k]}),w!=null?e.jsxs(e.Fragment,{children:[e.jsx(j,{width:8}),e.jsx(H,{style:r.count,children:w})]}):null]}),e.jsx(j,{width:32})]},v)}),e.jsxs(he,{ref:h,style:r.link,children:[e.jsx(H,{children:d}),e.jsx(j,{width:8}),e.jsx(H,{style:r.count,children:u.length}),e.jsx(j,{width:4}),e.jsx(M,{name:"chevron-down-filled",size:12})]})]}),W.map(t=>{const{label:a,icon:s,withSeparator:w,count:k,endElement:v}=t,b=D(t);return e.jsxs(o.Fragment,{children:[e.jsxs(Q,{ref:g=>{m.current&&(m.current[b]=g)},onChange:y,activeTabId:f,tab:t,role:"tab",style:({active:g,hovered:i})=>[r.link,g?r.activeLink:i?r.hoveredLink:null],children:[w===!0&&e.jsx(K,{style:r.separator,role:"none"}),l(s)&&e.jsxs(e.Fragment,{children:[e.jsx(M,{name:s,size:16,color:"currentColor"}),e.jsx(j,{width:8})]}),e.jsx(H,{children:a}),l(v)&&e.jsxs(e.Fragment,{children:[e.jsx(j,{width:8}),v]}),k!=null?e.jsxs(e.Fragment,{children:[e.jsx(j,{width:8}),e.jsx(H,{style:r.count,children:k})]}):null]}),e.jsx(j,{width:32})]},b)}),E.length>0?e.jsx(be,{ref:t=>{E.forEach(a=>{if(m.current){const s=D(a);m.current[s]=t}})},onChange:y,tabs:E,currentUrl:S,otherLabel:d,activeTabId:f}):null,P&&e.jsx(K,{style:[r.underline,r.animatedUnderline,{transform:`translateX(${q}px)`,width:A}]})]})};Le.__docgenInfo={description:"",methods:[],displayName:"TabView",props:{activeTabId:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`({ id: string } | { url: string }) & {
  count?: number;
  icon?: IconName;
  endElement?: ReactNode;
  label: string;
  withSeparator?: boolean;
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  count?: number;
  icon?: IconName;
  endElement?: ReactNode;
  label: string;
  withSeparator?: boolean;
}`,signature:{properties:[{key:"count",value:{name:"number",required:!1}},{key:"icon",value:{name:"unknown",required:!1}},{key:"endElement",value:{name:"ReactNode",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"withSeparator",value:{name:"boolean",required:!1}}]}}]}],raw:"Tab[]"},description:""},otherLabel:{required:!0,tsType:{name:"string"},description:""},hideIfSingleItem:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},padding:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof spacingValues)[number]"},description:""},sticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{Le as T};
//# sourceMappingURL=TabView-ByJ0_lom.js.map
