import{S as he,c as g,t as ee,r as oe,f as z,g as ie,s as pe,p as fe,R as Q,H as O,j as e,k as me,i as s,z as ce,a as y,V as j,T as V,b as C,I as Y,n as we,F as G,L as ge}from"./Space-6b47eb46.js";import{P as ye}from"./index-44863370.js";import{r as o}from"./index-1e572255.js";import{u as be}from"./useMergeRefs-d6318480.js";import{n as Fe}from"./function-30fe01e9.js";import{B as ke}from"./Box-0309892b.js";import{F as ve}from"./FocusTrap-0afb9860.js";import{L as Le}from"./Link-6251b30d.js";import{a as ue}from"./Pressable-7f6990ae.js";import{T as Se}from"./TransitionView-c68f70eb.js";import{S as Te}from"./_StoriesComponents-aedb338a.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-98e7bbfc.js";import"./with-selector-b440b8df.js";import"./Boxed-b75d14a5.js";import"./array-a4405b3e.js";const Ce=40,n=he.create({container:{borderBottomWidth:1,borderBottomColor:g.gray[100],zIndex:10},link:{...ee.medium,position:"relative",color:g.gray[700],height:Ce,whiteSpace:"nowrap",display:"flex",flexDirection:"row",alignItems:"center"},activeLink:{color:g.current[500],boxShadow:`inset 0 -2px ${g.gray[700]}`},hoveredLink:{boxShadow:`inset 0 -2px ${g.gray[700]}`},underline:{position:"absolute",bottom:0,height:2,width:1,backgroundColor:g.current[500]},animatedUnderline:{transformOrigin:"0 0",transition:"200ms ease-in-out transform"},placeholder:{position:"absolute",top:0,left:0,right:0,visibility:"hidden",flexDirection:"row",alignItems:"flex-end",overflow:"hidden",pointerEvents:"none"},count:{...ee.smallRegular,color:g.current[500],backgroundColor:g.current[50],borderColor:g.current[100],borderWidth:1,borderRadius:oe[4],paddingHorizontal:z[4],minWidth:z[24],display:"inline-block",textAlign:"center"},dropdownHandleContainer:{alignItems:"center",justifyContent:"center",alignSelf:"stretch"},dropdownPlacement:{position:"absolute",right:0,top:"100%"},dropdown:{position:"absolute",right:0,top:"100%",backgroundColor:ie.accented,borderRadius:oe[8],boxShadow:pe.modal,paddingVertical:z[8]},dropdownLink:{...ee.regular,paddingHorizontal:z[16],paddingVertical:z[8],whiteSpace:"nowrap"},dropdownLinkTextHovered:{backgroundColor:g.gray[50]},dropdownLinkTextActive:{boxShadow:`inset 3px 0 ${g.current.primary}`,color:g.current.primary},separator:{position:"absolute",top:0,left:fe[16],bottom:0,width:1,backgroundColor:g.gray[100]},sticky:{backgroundColor:ie.default,position:"sticky",top:-1}}),te=o.forwardRef(({children:a,style:d,tab:v,onChange:p,activeTabId:R,onBlur:f,onFocus:b,onPress:c},t)=>Q(v).with({url:O.string},({url:h})=>e(Le,{ref:t,to:h,style:d,onFocus:b,onBlur:f,onPress:c,children:a})).with({id:O.string},({id:h})=>{const m=h===R;return e(ue,{ref:t,style:F=>d({...F,active:m}),onPress:()=>{p==null||p(h),c==null||c()},onFocus:b,onBlur:f,children:a})}).exhaustive()),Oe=({tabs:a,onHoverStart:d,onHoverEnd:v,onLinkFocus:p,onLinkBlur:R,onLinkPress:f,activeTabId:b,onChange:c})=>{const t=o.useRef(null);return ce(t,{onHoverStart:d,onHoverEnd:v}),e(j,{role:"menu",style:n.dropdown,ref:t,children:a.map(h=>{const m=K(h);return e(te,{onChange:c,activeTabId:b,tab:h,onFocus:p,onBlur:R,onPress:f,role:"menuitem",ariaCurrentValue:"location",style:({active:F,hovered:_})=>[n.dropdownLink,F&&n.dropdownLinkTextActive,_&&n.dropdownLinkTextHovered],children:h.label},m)})})},Re=new Set(["ForcedOpen","OpenFromFocus"]),xe=new Set(["Open","ForcedOpen","OpenFromFocus"]),He=new Set(["ForcedOpen"]),Ee=o.forwardRef(({tabs:a,otherLabel:d,currentUrl:v,activeTabId:p,onChange:R},f)=>{const[b,c]=o.useReducer((r,u)=>Q([u,r]).returnType().with(["ForceToggle","Closed"],["ForceToggle","Open"],["ForceToggle","ForcedClosed"],()=>"ForcedOpen").with(["ForceToggle","OpenFromFocus"],["ForceToggle","ForcedOpen"],()=>"ForcedClosed").with(["ForceClose",O.any],()=>"ForcedClosed").with(["FocusHandle","ForcedClosed"],()=>"Closed").with(["Open","ForcedOpen"],["FocusHandle","ForcedOpen"],["Close","ForcedOpen"],()=>"ForcedOpen").with(["Open",O.any],()=>"Open").with(["FocusHandle",O.any],()=>"OpenFromFocus").with(["Close",O.any],()=>"Closed").exhaustive(),"Closed"),t=o.useRef(void 0),h=o.useRef(null),m=o.useRef(null),F=o.useRef(null),{onHandleFocus:_,onLinkFocus:B,onAnyBlur:D,onHoverStart:M,onHoverEnd:W,onPress:N,onPressOutside:A,onEscapeKey:q}=o.useMemo(()=>({onHandleFocus:r=>{if(me(m.current))return;F.current=Date.now();const u=m.current,i=r;u.contains(i.relatedTarget)||(s(t.current)&&clearTimeout(t.current),c("FocusHandle"))},onLinkFocus:()=>{s(t.current)&&clearTimeout(t.current),c("Open")},onAnyBlur:()=>{s(t.current)&&clearTimeout(t.current),t.current=window.setTimeout(()=>{c("Close")},300)},onHoverStart:()=>{s(t.current)&&clearTimeout(t.current),c("Open")},onHoverEnd:()=>{s(t.current)&&clearTimeout(t.current),t.current=window.setTimeout(()=>{c("Close")},300)},onPress:()=>{F.current!=null&&Date.now()-F.current<32||(s(t.current)&&clearTimeout(t.current),c("ForceToggle"))},onPressOutside:r=>{s(h.current)&&h.current.contains(r.target)||(s(t.current)&&clearTimeout(t.current),c("ForceClose"),t.current=window.setTimeout(()=>{c("Close")},300))},onEscapeKey:()=>{s(t.current)&&clearTimeout(t.current),c("ForceClose"),t.current=window.setTimeout(()=>{c("Close")},300)}}),[]);o.useEffect(()=>()=>{s(t.current)&&clearTimeout(t.current)},[]);const U=xe.has(b),$=Re.has(b),E=He.has(b);ce(h,{onHoverStart:M,onHoverEnd:W});const I=be(m,f),Z=o.useMemo(()=>a.find(r=>re({activeTabId:p,currentLocationURL:v,tab:r})),[p,v,a]);return y(j,{style:n.dropdownHandleContainer,ref:I,children:[y(ue,{ref:h,role:"button","aria-expanded":U,"aria-haspopup":"true",onFocus:_,onBlur:D,onPress:N,style:({hovered:r})=>[n.link,s(Z)?n.activeLink:r?n.hoveredLink:null],children:[e(V,{children:d}),e(C,{width:8}),e(V,{style:n.count,children:a.length}),e(C,{width:4}),e(Y,{name:"chevron-down-filled",size:12})]}),e(Se,{...we.fadeAndSlideInFromBottom,style:n.dropdownPlacement,children:U?e(ve,{autoFocus:$,focusLock:E,returnFocus:E,onClickOutside:A,onEscapeKey:E?q:void 0,children:e(Oe,{onChange:R,activeTabId:p,tabs:a,onHoverStart:M,onHoverEnd:W,onLinkFocus:B,onLinkBlur:D,onLinkPress:q})}):null})]})}),re=({tab:a,activeTabId:d,currentLocationURL:v})=>Q(a).with({url:O.string},({url:p})=>v.startsWith(p)).with({id:O.string},({id:p})=>s(d)&&p===d).exhaustive(),K=a=>Q(a).with({url:O.string},({url:d})=>d).with({id:O.string},({id:d})=>d).exhaustive(),J=({tabs:a,otherLabel:d,hideIfSingleItem:v=!0,sticky:p=!1,padding:R,activeTabId:f,onChange:b})=>{const c=o.useRef(null),t=o.useRef(null),h=o.useRef(null),m=o.useRef({}),F=o.useRef({}),[{left:_,width:B},D]=o.useState({left:0,width:0}),[M,W]=o.useState(!1),[[N,A],q]=o.useState([[],[]]),U=ye(),{path:$}=U,E=U.toString();o.useEffect(()=>{if(s(m.current)){const r=Object.entries(m.current),u=c.current;for(const[i,w]of r)if((i===f||"/"+$.join("/")===i)&&s(w)&&s(u)){w.measureLayout(u,(k,L,S)=>{D({left:k-(R??0),width:S})},Fe);return}}D({left:0,width:0})},[$,N,A,R,f]),o.useEffect(()=>{W(B>0)},[B]);const I=o.useCallback(({width:r})=>{const u=a.map(l=>{if(F.current){const H=K(l),T=F.current[H];if(s(T)){const P=T.getBoundingClientRect().width;return{tab:l,width:P+32}}else return{tab:l,width:0}}else return{tab:l,width:0}}),i=[],w=[];let k=0;u.forEach(l=>{if(k+=l.width,k<r)i.push({...l.tab,width:l.width});else if(re({activeTabId:f,currentLocationURL:E,tab:l.tab})){for(;i.length!==0&&i.reduce((H,T)=>H+T.width,0)+(l.width+16)>=r;){const H=i.pop();s(H)&&(w.unshift(H),k-=H.width)}i.push({...l.tab,width:l.width})}else w.push({...l.tab,width:l.width})});const L=h.current;let S=100;s(L)&&(S=L.getBoundingClientRect().width);const x=i.findIndex(l=>re({activeTabId:f,currentLocationURL:E,tab:l}));if(x!==-1){const l=i[x],H=(l==null?void 0:l.width)??0,T=[...i.slice(0,x),...i.slice(x+1)];for(;T.length!==0&&T.reduce((P,de)=>P+de.width,0)+H+(w.length>=1?S:0)>=r;){const P=T.pop();s(P)&&w.unshift(P)}const ne=[...T.slice(0,x),...l!=null?[l]:[],...T.slice(x)];q([ne,w])}else q([i,w])},[a,f,E]),Z=o.useCallback(({target:r,nativeEvent:{layout:{width:u}}})=>{I({container:r,width:u})},[I]);return o.useLayoutEffect(()=>{const r=t.current;if(r){const u=r,i=u.getBoundingClientRect().width;I({container:u,width:i})}},[I]),a.length<=1&&v?null:y(ke,{alignItems:"center",direction:"row",role:"tablist",ref:c,style:[n.container,p&&n.sticky,{paddingHorizontal:R}],children:[y(j,{style:n.placeholder,"aria-hidden":!0,ref:t,onLayout:Z,children:[a.map(r=>{const{label:u,icon:i,count:w}=r,k=K(r);return y(o.Fragment,{children:[y(te,{ref:L=>{F.current&&(F.current[k]=L)},activeTabId:f,tab:r,onChange:b,style:({active:L,hovered:S})=>[n.link,L?n.activeLink:S?n.hoveredLink:null],children:[s(i)&&y(G,{children:[e(Y,{name:i,size:16,color:"currentColor"}),e(C,{width:8})]}),e(V,{children:u}),w!=null?y(G,{children:[e(C,{width:8}),e(V,{style:n.count,children:w})]}):null]}),e(C,{width:32})]},k)}),y(ge,{ref:h,style:n.link,children:[e(V,{children:d}),e(C,{width:8}),e(V,{style:n.count,children:a.length}),e(C,{width:4}),e(Y,{name:"chevron-down-filled",size:12})]})]}),N.map(r=>{const{label:u,icon:i,withSeparator:w,count:k}=r,L=K(r);return y(o.Fragment,{children:[y(te,{ref:S=>{m.current&&(m.current[L]=S)},onChange:b,activeTabId:f,tab:r,role:"tab",style:({active:S,hovered:x})=>[n.link,S?n.activeLink:x?n.hoveredLink:null],children:[w===!0&&e(j,{style:n.separator,role:"none"}),s(i)&&y(G,{children:[e(Y,{name:i,size:16,color:"currentColor"}),e(C,{width:8})]}),e(V,{children:u}),k!=null?y(G,{children:[e(C,{width:8}),e(V,{style:n.count,children:k})]}):null]}),e(C,{width:32})]},L)}),A.length>0?e(Ee,{ref:r=>{A.forEach(u=>{if(m.current){const i=K(u);m.current[i]=r}})},onChange:b,tabs:A,currentUrl:E,otherLabel:d,activeTabId:f}):null,M&&e(j,{style:[n.underline,n.animatedUnderline,{transform:`translateX(${_}px) scaleX(${B})`}]})]})};try{J.displayName="TabView",J.__docgenInfo={description:"",displayName:"TabView",props:{activeTabId:{defaultValue:null,description:"",name:"activeTabId",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: string) => void)"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"Tab[]"}},otherLabel:{defaultValue:null,description:"",name:"otherLabel",required:!0,type:{name:"string"}},hideIfSingleItem:{defaultValue:{value:"true"},description:"",name:"hideIfSingleItem",required:!1,type:{name:"boolean"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:"4"},{value:"8"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"72"},{value:"96"}]}},sticky:{defaultValue:{value:"false"},description:"",name:"sticky",required:!1,type:{name:"boolean"}}}}}catch{}const Xe={title:"Interactivity/TabView",component:J},X=()=>e(Te,{title:"TabView",description:"You can reduce window's width to see behavior when there isn't enough space to display all tabs",children:e(J,{tabs:[{label:"SEPA Credit Transfers",url:"/simulator/sct",count:2},{label:"SEPA Direct Debits",url:"/simulator/sdd",icon:"building-regular"},{label:"Cards",url:"/simulator/cards",withSeparator:!0},{label:"Apple Pay/Google Pay",url:"/simulator/apple-pay-google-pay"},{label:"Account holders",url:"/simulator/account-holders"},{label:"Merchant acquiring",url:"/simulator/merchant-acquiring"}],otherLabel:"More"})});var le,se,ae;X.parameters={...X.parameters,docs:{...(le=X.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <StoryBlock title="TabView" description="You can reduce window's width to see behavior when there isn't enough space to display all tabs">
      <TabView tabs={[{
      label: "SEPA Credit Transfers",
      url: "/simulator/sct",
      count: 2
    }, {
      label: "SEPA Direct Debits",
      url: "/simulator/sdd",
      icon: "building-regular"
    }, {
      label: "Cards",
      url: "/simulator/cards",
      withSeparator: true
    }, {
      label: "Apple Pay/Google Pay",
      url: "/simulator/apple-pay-google-pay"
    }, {
      label: "Account holders",
      url: "/simulator/account-holders"
    }, {
      label: "Merchant acquiring",
      url: "/simulator/merchant-acquiring"
    }]} otherLabel="More" />
    </StoryBlock>;
}`,...(ae=(se=X.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const Ye=["Default"];export{X as Default,Ye as __namedExportsOrder,Xe as default};
//# sourceMappingURL=TabView.stories-d335124f.js.map
