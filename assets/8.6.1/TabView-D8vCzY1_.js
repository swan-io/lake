import{s as se,c as g,t as J,r as ee,b as z,d as ne,g as ie,x as le,$ as G,D as v,j as e,f as ce,i as l,E as te,u as ae,V as N,T as H,S as T,I as M,F as ue,B as de,L as he}from"./ScrollView-CouMEPyK.js";import{a as pe}from"./index-5B1gXGMn.js";import{r as o}from"./index-uCp2LrAq.js";import{n as fe}from"./function-BHIpw5Jd.js";import{F as we}from"./FocusTrap-Dqfzx5pd.js";import{L as me}from"./Link-DYZBT2_-.js";import{a as re}from"./Pressable-XeZGT766.js";import{T as ge}from"./TransitionView-DifTnmGJ.js";const xe=40,r=se.create({container:{borderBottomWidth:1,borderBottomColor:g.gray[100],zIndex:10},link:{...J.medium,position:"relative",color:g.gray[700],height:xe,whiteSpace:"nowrap",display:"flex",flexDirection:"row",alignItems:"center"},activeLink:{color:g.current[500],boxShadow:`inset 0 -2px ${g.gray[700]}`},hoveredLink:{boxShadow:`inset 0 -2px ${g.gray[700]}`},underline:{position:"absolute",bottom:0,height:2,width:1,backgroundColor:g.current[500]},animatedUnderline:{transformOrigin:"0 0",transition:"200ms ease-in-out transform"},placeholder:{position:"absolute",top:0,left:0,right:0,visibility:"hidden",flexDirection:"row",alignItems:"flex-end",overflow:"hidden",pointerEvents:"none"},count:{...J.smallRegular,color:g.current[500],backgroundColor:g.current[50],borderColor:g.current[100],borderWidth:1,borderRadius:ee[4],paddingHorizontal:z[4],minWidth:z[24],display:"inline-block",textAlign:"center"},dropdownHandleContainer:{alignItems:"center",justifyContent:"center",alignSelf:"stretch"},dropdownPlacement:{position:"absolute",right:0,top:"100%"},dropdown:{position:"absolute",right:0,top:"100%",backgroundColor:ne.accented,borderRadius:ee[8],boxShadow:ie.modal,paddingVertical:z[8]},dropdownLink:{...J.regular,paddingHorizontal:z[16],paddingVertical:z[8],whiteSpace:"nowrap"},dropdownLinkTextHovered:{backgroundColor:g.gray[50]},dropdownLinkTextActive:{boxShadow:`inset 3px 0 ${g.current.primary}`,color:g.current.primary},separator:{position:"absolute",top:0,left:le[16],bottom:0,width:1,backgroundColor:g.gray[100]},sticky:{backgroundColor:ne.default,position:"sticky",top:-1}}),Q=o.forwardRef(({children:u,style:d,tab:k,onChange:p,activeTabId:C,onBlur:f,onFocus:x,onPress:c},n)=>G(k).with({url:v.string},({url:h})=>e.jsx(me,{ref:n,to:h,style:d,onFocus:x,onBlur:f,onPress:c,children:u})).with({id:v.string},({id:h})=>{const w=h===C;return e.jsx(re,{ref:n,style:y=>d({...y,active:w}),onPress:()=>{p==null||p(h),c==null||c()},onFocus:x,onBlur:f,children:u})}).exhaustive()),ye=({tabs:u,onHoverStart:d,onHoverEnd:k,onLinkFocus:p,onLinkBlur:C,onLinkPress:f,activeTabId:x,onChange:c})=>{const n=o.useRef(null);return te(n,{onHoverStart:d,onHoverEnd:k}),e.jsx(N,{role:"menu",style:r.dropdown,ref:n,children:u.map(h=>{const w=K(h);return e.jsx(Q,{onChange:c,activeTabId:x,tab:h,onFocus:p,onBlur:C,onPress:f,role:"menuitem",ariaCurrentValue:"location",style:({active:y,hovered:A})=>[r.dropdownLink,y&&r.dropdownLinkTextActive,A&&r.dropdownLinkTextHovered],children:h.label},w)})})},Fe=new Set(["ForcedOpen","OpenFromFocus"]),ke=new Set(["Open","ForcedOpen","OpenFromFocus"]),je=new Set(["ForcedOpen"]),be=o.forwardRef(({tabs:u,otherLabel:d,currentUrl:k,activeTabId:p,onChange:C},f)=>{const[x,c]=o.useReducer((t,a)=>G([a,t]).returnType().with(["ForceToggle","Closed"],["ForceToggle","Open"],["ForceToggle","ForcedClosed"],()=>"ForcedOpen").with(["ForceToggle","OpenFromFocus"],["ForceToggle","ForcedOpen"],()=>"ForcedClosed").with(["ForceClose",v.any],()=>"ForcedClosed").with(["FocusHandle","ForcedClosed"],()=>"Closed").with(["Open","ForcedOpen"],["FocusHandle","ForcedOpen"],["Close","ForcedOpen"],()=>"ForcedOpen").with(["Open",v.any],()=>"Open").with(["FocusHandle",v.any],()=>"OpenFromFocus").with(["Close",v.any],()=>"Closed").exhaustive(),"Closed"),n=o.useRef(void 0),h=o.useRef(null),w=o.useRef(null),y=o.useRef(null),{onHandleFocus:A,onLinkFocus:V,onAnyBlur:q,onHoverStart:P,onHoverEnd:_,onPress:W,onPressOutside:E,onEscapeKey:U}=o.useMemo(()=>({onHandleFocus:t=>{if(ce(w.current))return;y.current=Date.now();const a=w.current,s=t;a.contains(s.relatedTarget)||(l(n.current)&&clearTimeout(n.current),c("FocusHandle"))},onLinkFocus:()=>{l(n.current)&&clearTimeout(n.current),c("Open")},onAnyBlur:()=>{l(n.current)&&clearTimeout(n.current),n.current=window.setTimeout(()=>{c("Close")},300)},onHoverStart:()=>{l(n.current)&&clearTimeout(n.current),c("Open")},onHoverEnd:()=>{l(n.current)&&clearTimeout(n.current),n.current=window.setTimeout(()=>{c("Close")},300)},onPress:()=>{y.current!=null&&Date.now()-y.current<32||(l(n.current)&&clearTimeout(n.current),c("ForceToggle"))},onPressOutside:t=>{l(h.current)&&h.current.contains(t.target)||(l(n.current)&&clearTimeout(n.current),c("ForceClose"),n.current=window.setTimeout(()=>{c("Close")},300))},onEscapeKey:()=>{l(n.current)&&clearTimeout(n.current),c("ForceClose"),n.current=window.setTimeout(()=>{c("Close")},300)}}),[]);o.useEffect(()=>()=>{l(n.current)&&clearTimeout(n.current)},[]);const D=ke.has(x),$=Fe.has(x),S=je.has(x);te(h,{onHoverStart:P,onHoverEnd:_});const I=ae(w,f),X=o.useMemo(()=>u.find(t=>Y({activeTabId:p,currentLocationURL:k,tab:t})),[p,k,u]);return e.jsxs(N,{style:r.dropdownHandleContainer,ref:I,children:[e.jsxs(re,{ref:h,role:"button","aria-expanded":D,"aria-haspopup":"true",onFocus:A,onBlur:q,onPress:W,style:({hovered:t})=>[r.link,l(X)?r.activeLink:t?r.hoveredLink:null],children:[e.jsx(H,{children:d}),e.jsx(T,{width:8}),e.jsx(H,{style:r.count,children:u.length}),e.jsx(T,{width:4}),e.jsx(M,{name:"chevron-down-filled",size:12})]}),e.jsx(ge,{...ue.fadeAndSlideInFromBottom,style:r.dropdownPlacement,children:D?e.jsx(we,{autoFocus:$,focusLock:S,returnFocus:S,onClickOutside:E,onEscapeKey:S?U:void 0,children:e.jsx(ye,{onChange:C,activeTabId:p,tabs:u,onHoverStart:P,onHoverEnd:_,onLinkFocus:V,onLinkBlur:q,onLinkPress:U})}):null})]})}),Y=({tab:u,activeTabId:d,currentLocationURL:k})=>G(u).with({url:v.string},({url:p})=>k.startsWith(p)).with({id:v.string},({id:p})=>l(d)&&p===d).exhaustive(),K=u=>G(u).with({url:v.string},({url:d})=>d).with({id:v.string},({id:d})=>d).exhaustive(),Le=({tabs:u,otherLabel:d,hideIfSingleItem:k=!0,sticky:p=!1,padding:C,activeTabId:f,onChange:x})=>{const c=o.useRef(null),n=o.useRef(null),h=o.useRef(null),w=o.useRef({}),y=o.useRef({}),[{left:A,width:V},q]=o.useState({left:0,width:0}),[P,_]=o.useState(!1),[[W,E],U]=o.useState([[],[]]),D=pe(),{path:$}=D,S=D.toString();o.useEffect(()=>{if(l(w.current)){const t=Object.entries(w.current),a=c.current;for(const[s,m]of t)if((s===f||"/"+$.join("/")===s)&&l(m)&&l(a)){m.measureLayout(a,(F,j,b)=>{q({left:F-(C??0),width:b})},fe);return}}q({left:0,width:0})},[$,W,E,C,f]),o.useEffect(()=>{_(V>0)},[V]);const I=o.useCallback(({width:t})=>{const a=u.map(i=>{if(y.current){const R=K(i),L=y.current[R];if(l(L)){const B=L.getBoundingClientRect().width;return{tab:i,width:B+32}}else return{tab:i,width:0}}else return{tab:i,width:0}}),s=[],m=[];let F=0;a.forEach(i=>{if(F+=i.width,F<t)s.push({...i.tab,width:i.width});else if(Y({activeTabId:f,currentLocationURL:S,tab:i.tab})){for(;s.length!==0&&s.reduce((R,L)=>R+L.width,0)+(i.width+16)>=t;){const R=s.pop();l(R)&&(m.unshift(R),F-=R.width)}s.push({...i.tab,width:i.width})}else m.push({...i.tab,width:i.width})});const j=h.current;let b=100;l(j)&&(b=j.getBoundingClientRect().width);const O=s.findIndex(i=>Y({activeTabId:f,currentLocationURL:S,tab:i}));if(O!==-1){const i=s[O],R=(i==null?void 0:i.width)??0,L=[...s.slice(0,O),...s.slice(O+1)];for(;L.length!==0&&L.reduce((B,oe)=>B+oe.width,0)+R+(m.length>=1?b:0)>=t;){const B=L.pop();l(B)&&m.unshift(B)}const Z=[...L.slice(0,O),...i!=null?[i]:[],...L.slice(O)];U([Z,m])}else U([s,m])},[u,f,S]),X=o.useCallback(({target:t,nativeEvent:{layout:{width:a}}})=>{I({container:t,width:a})},[I]);return o.useLayoutEffect(()=>{const t=n.current;if(t){const a=t,s=a.getBoundingClientRect().width;I({container:a,width:s})}},[I]),u.length<=1&&k?null:e.jsxs(de,{alignItems:"center",direction:"row",role:"tablist",ref:c,style:[r.container,p&&r.sticky,{paddingHorizontal:C}],children:[e.jsxs(N,{style:r.placeholder,"aria-hidden":!0,ref:n,onLayout:X,children:[u.map(t=>{const{label:a,icon:s,count:m}=t,F=K(t);return e.jsxs(o.Fragment,{children:[e.jsxs(Q,{ref:j=>{y.current&&(y.current[F]=j)},activeTabId:f,tab:t,onChange:x,style:({active:j,hovered:b})=>[r.link,j?r.activeLink:b?r.hoveredLink:null],children:[l(s)&&e.jsxs(e.Fragment,{children:[e.jsx(M,{name:s,size:16,color:"currentColor"}),e.jsx(T,{width:8})]}),e.jsx(H,{children:a}),m!=null?e.jsxs(e.Fragment,{children:[e.jsx(T,{width:8}),e.jsx(H,{style:r.count,children:m})]}):null]}),e.jsx(T,{width:32})]},F)}),e.jsxs(he,{ref:h,style:r.link,children:[e.jsx(H,{children:d}),e.jsx(T,{width:8}),e.jsx(H,{style:r.count,children:u.length}),e.jsx(T,{width:4}),e.jsx(M,{name:"chevron-down-filled",size:12})]})]}),W.map(t=>{const{label:a,icon:s,withSeparator:m,count:F}=t,j=K(t);return e.jsxs(o.Fragment,{children:[e.jsxs(Q,{ref:b=>{w.current&&(w.current[j]=b)},onChange:x,activeTabId:f,tab:t,role:"tab",style:({active:b,hovered:O})=>[r.link,b?r.activeLink:O?r.hoveredLink:null],children:[m===!0&&e.jsx(N,{style:r.separator,role:"none"}),l(s)&&e.jsxs(e.Fragment,{children:[e.jsx(M,{name:s,size:16,color:"currentColor"}),e.jsx(T,{width:8})]}),e.jsx(H,{children:a}),F!=null?e.jsxs(e.Fragment,{children:[e.jsx(T,{width:8}),e.jsx(H,{style:r.count,children:F})]}):null]}),e.jsx(T,{width:32})]},j)}),E.length>0?e.jsx(be,{ref:t=>{E.forEach(a=>{if(w.current){const s=K(a);w.current[s]=t}})},onChange:x,tabs:E,currentUrl:S,otherLabel:d,activeTabId:f}):null,P&&e.jsx(N,{style:[r.underline,r.animatedUnderline,{transform:`translateX(${A}px)`,width:V}]})]})};Le.__docgenInfo={description:"",methods:[],displayName:"TabView",props:{activeTabId:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`({ id: string } | { url: string }) & {
  count?: number;
  icon?: IconName;
  label: string;
  withSeparator?: boolean;
}`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  count?: number;
  icon?: IconName;
  label: string;
  withSeparator?: boolean;
}`,signature:{properties:[{key:"count",value:{name:"number",required:!1}},{key:"icon",value:{name:"unknown",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"withSeparator",value:{name:"boolean",required:!1}}]}}]}],raw:"Tab[]"},description:""},otherLabel:{required:!0,tsType:{name:"string"},description:""},hideIfSingleItem:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},padding:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof spacingValues)[number]"},description:""},sticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{Le as T};
//# sourceMappingURL=TabView-D8vCzY1_.js.map
