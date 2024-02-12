import{s as le,r as S,c as f,e as C,D as ae,g as W,l as U,t as ce,a as e,V as g,I as z,i as h,j as p,C as M,p as B,L as R,T as ue,F as D,S as k,N as de,q as F,k as me}from"./Space-CK98gG-f.js";import{r as i}from"./index-CBqU2yxZ.js";import{B as Q}from"./commonStyles-BrGcwxhJ.js";import{u as be,T as $}from"./TransitionView-BJQSJfnh.js";import{n as pe}from"./function-DNthd_7Y.js";import{F as ee}from"./FocusTrap-BK5m80NJ.js";import{L as N}from"./Link-k-eIIV3J.js";import{v as H}from"./v4-D8aEg3BZ.js";import{P as he}from"./index-D-ld40uj.js";import{L as A}from"./LakeButton-CayYgXWk.js";import{L as ge}from"./LakeLabel-BikiUs0j.js";import{L as fe}from"./LakeTextInput-BGyOK7U_.js";import{S as re,a as I}from"./_StoriesComponents-BvwlosE-.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Boxed-zu2eTygX.js";import"./a11y-DXvpDVrG.js";import"./array-rjEBP2Ry.js";import"./index-qXo7R5Vv.js";import"./index-CmNHga1A.js";import"./with-selector-D-a6ftZl.js";import"./Pressable-bLRuTZAC.js";import"./index-B0NClWXB.js";import"./Fill-Bpl4Uu83.js";import"./LakeSelect-DzJeZCyW.js";import"./useDisclosure-CS9t68_Y.js";import"./Popover-BbsoUtfw.js";import"./useResponsive-CPIEZQbI.js";import"./BottomPanel-zCPzOVhV.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-B0th0pVG.js";import"./LoadingView-B9DS3VXN.js";import"./index-i7HVzN8C.js";import"./index-BAzPmG_w.js";const c=le.create({container:{flexDirection:"row",alignItems:"center",zIndex:10,transform:"translateZ(0px)"},item:{flexDirection:"row",alignItems:"center",borderRadius:S[6],transitionProperty:"opacity",transitionDuration:"150ms"},itemPressed:{opacity:.2},itemForcedOpen:{backgroundColor:f.gray[50]},chevron:{padding:C[8]},horizontalLink:{paddingVertical:C[8]},horizontalLinkText:{paddingHorizontal:C[8],alignItems:"center",display:"inline-flex"},horizontalLinkTextHovered:{color:f.gray[900],boxShadow:"0 1px currentColor"},activeHorizontalLinkText:{color:f.gray[800],backgroundColor:ae,borderRadius:S[4],boxShadow:"none"},dropdown:{position:"absolute",left:"50%",transform:"translateX(-50%)",top:"100%",backgroundColor:W.accented,borderRadius:S[8],boxShadow:U.modal,paddingVertical:C[8]},siblingsDropdown:{position:"absolute",left:"50%",transform:"translateX(-50%)",top:"100%",backgroundColor:W.accented,borderRadius:S[8],boxShadow:U.modal,paddingVertical:C[8],alignItems:"stretch"},dropdownLink:{paddingHorizontal:C[16],paddingVertical:C[8],flexDirection:"row",alignItems:"center"},dropdownLinkText:{...ce.regular,whiteSpace:"nowrap"},dropdownLinkTextHovered:{color:f.gray[500]},dropdownLinkActive:{backgroundColor:f.gray[50]},dropdownContainer:{position:"absolute",left:"50%",top:"100%"},dropdownLinkContainer:{display:"flex",flexDirection:"column",alignItems:"stretch"},tick:{position:"absolute",top:"50%",right:C[16],transform:"translateY(-50%)"}}),_=[],Ce=[],we=[_,_,pe,{current:-1}],V=i.createContext(we),L=({rootLevelCrumbs:n=Ce,children:l})=>{const[a,r]=i.useState(_),m=i.useRef(!0),u=i.useRef(-1),[t,o]=i.useState(()=>n.map(b=>({id:H(),crumb:b,isRootCrumb:!0})));i.useEffect(()=>{if(m.current){m.current=!1;return}o(n.map(b=>({id:H(),crumb:b,isRootCrumb:!0})))},[n]);const s=i.useMemo(()=>[...a].sort((b,v)=>(v.index??-1)>(b.index??-1)?-1:1),[a]),d=i.useMemo(()=>[t,s,r,u],[t,s,r,u]);return e(V.Provider,{value:d,children:l})},Le=()=>{const[n,l]=i.useContext(V);return i.useMemo(()=>[...n,...l],[n,l])},E=n=>{const[,,l,a]=i.useContext(V),[r]=i.useState(()=>H()),m=i.useRef(n),[u]=i.useState(()=>++a.current);i.useEffect(()=>(l(t=>t.concat([{id:r,crumb:m.current,isRootCrumb:!1,index:u}])),()=>{l(t=>t.filter(o=>o.id!==r))}),[r,l,u]),i.useEffect(()=>{l(t=>{const o=t.find(s=>s.id===r);return h(o)&&o.crumb!==n?t.map(s=>s.id===r?{id:r,crumb:n,isRootCrumb:o.isRootCrumb,index:u}:s):t})},[r,n,l,u])},ne=e(g,{style:c.chevron,children:e(z,{name:"chevron-right-filled",color:f.gray[500],size:16})}),ke=({siblings:n,isLast:l,onPress:a})=>e(g,{style:c.siblingsDropdown,children:n.map(({url:r,label:m,isMatching:u})=>e(N,{to:r,ariaCurrentValue:"location",onPress:t=>{u&&l&&t.preventDefault(),a()},style:c.dropdownLinkContainer,children:({hovered:t})=>p(g,{style:[c.dropdownLink,u&&c.dropdownLinkActive],children:[e(R,{style:[c.dropdownLinkText,t&&c.dropdownLinkTextHovered],children:m}),u&&p(D,{children:[e(k,{width:32}),e(z,{color:f.positive[500],name:"checkmark-filled",size:14,style:c.tick})]})]})},r))}),K=({crumb:n,isFirstItem:l=!1,isLastItem:a=!1,shouldAnimate:r})=>{const[m,u]=i.useState(()=>!1),t=i.useRef(null),[o,s]=i.useState(null);M(t,{onHoverStart:()=>u(!0),onHoverEnd:()=>u(!1)});const d=i.useCallback(b=>{n.siblings!=null&&(b.preventDefault(),s(n.siblings))},[n.siblings]);return p(g,{style:[c.item,r?B.fadeAndSlideInFromRight.enter:null],children:[l?null:ne,p(g,{children:[e(N,{to:n.link,ariaCurrentValue:"location",onPress:d,children:e(g,{ref:t,style:[c.horizontalLink,r&&B.fadeAndSlideInFromRight.enter],children:p(R,{color:f.gray[800],style:[c.horizontalLinkText,a&&c.activeHorizontalLinkText],children:[e(ue,{style:m&&!a?c.horizontalLinkTextHovered:void 0,children:n.label}),n.siblings!=null?p(D,{children:[e(k,{width:4}),e(z,{name:"chevron-down-filled",color:f.gray[500],size:16})]}):null]})})}),e(g,{style:c.dropdownContainer,children:e($,{...B.fadeAndSlideInFromBottom,children:o?e(ee,{autoFocus:!0,focusLock:!0,returnFocus:!0,onClickOutside:()=>s(null),onEscapeKey:()=>s(null),children:e(ke,{siblings:o,isLast:a,onPress:()=>s(null)})}):null})})]})]})},ve=({crumbs:n,onHoverStart:l,onHoverEnd:a,onLinkFocus:r,onLinkBlur:m,onLinkPress:u})=>{const t=i.useRef(null);return M(t,{onHoverStart:l,onHoverEnd:a}),e(g,{style:c.dropdown,ref:t,children:n.map(({id:o,crumb:s})=>e(N,{to:s.link,onFocus:r,onBlur:m,onPress:u,ariaCurrentValue:"location",children:({hovered:d})=>e(g,{style:c.dropdownLink,children:e(R,{style:[c.dropdownLinkText,d&&c.dropdownLinkTextHovered],children:s.label})})},o))})},ye=new Set(["ForcedOpen","OpenFromFocus"]),Se=new Set(["Open","ForcedOpen","OpenFromFocus"]),Fe=new Set(["ForcedOpen"]),Te=({crumbs:n})=>{const[l,a]=i.useReducer((w,y)=>de([y,w]).returnType().with(["ForceToggle","Closed"],["ForceToggle","Open"],["ForceToggle","ForcedClosed"],()=>"ForcedOpen").with(["ForceToggle","OpenFromFocus"],["ForceToggle","ForcedOpen"],()=>"ForcedClosed").with(["ForceClose",F._],()=>"ForcedClosed").with(["FocusHandle","ForcedClosed"],()=>"Closed").with(["Open","ForcedOpen"],["FocusHandle","ForcedOpen"],["Close","ForcedOpen"],()=>"ForcedOpen").with(["Open",F._],()=>"Open").with(["FocusHandle",F._],()=>"OpenFromFocus").with(["Close",F._],()=>"Closed").exhaustive(),"Closed"),r=i.useRef(void 0),m=i.useRef(null),u=i.useRef(null),{onHandleFocus:t,onLinkFocus:o,onAnyBlur:s,onHoverStart:d,onHoverEnd:b,onPress:v,onPressOutside:te,onEscapeKey:q}=i.useMemo(()=>({onHandleFocus:w=>{if(me(u.current))return;const y=u.current,ie=w;y.contains(ie.relatedTarget)||(h(r.current)&&clearTimeout(r.current),a("FocusHandle"))},onLinkFocus:()=>{h(r.current)&&clearTimeout(r.current),a("Open")},onAnyBlur:()=>{h(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{a("Close")},300)},onHoverStart:()=>{h(r.current)&&clearTimeout(r.current),a("Open")},onHoverEnd:()=>{h(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{a("Close")},300)},onPress:()=>{h(r.current)&&clearTimeout(r.current),a("ForceToggle")},onPressOutside:w=>{h(m.current)&&m.current.contains(w.target)||(h(r.current)&&clearTimeout(r.current),a("ForceClose"),r.current=window.setTimeout(()=>{a("Close")},300))},onEscapeKey:()=>{h(r.current)&&clearTimeout(r.current),a("ForceClose"),r.current=window.setTimeout(()=>{a("Close")},300)}}),[]);i.useEffect(()=>()=>{h(r.current)&&clearTimeout(r.current)},[]);const oe=Se.has(l),se=ye.has(l),O=Fe.has(l);return M(m,{onHoverStart:d,onHoverEnd:b}),p(Q,{direction:"row",alignItems:"center",children:[ne,p(g,{ref:u,children:[e(he,{ref:m,style:({pressed:w})=>[c.item,w&&c.itemPressed,l==="ForcedOpen"&&c.itemForcedOpen],tabIndex:0,onFocus:t,onBlur:s,onPress:v,children:e(g,{style:c.horizontalLink,children:e(R,{style:[c.horizontalLinkText,c.activeHorizontalLinkText],children:"…"})})}),e($,{...B.fadeAndSlideInFromBottom,children:oe?e(ee,{autoFocus:se,focusLock:O,returnFocus:O,onClickOutside:te,onEscapeKey:O?q:void 0,children:e(ve,{crumbs:n,onHoverStart:d,onHoverEnd:b,onLinkFocus:o,onLinkBlur:s,onLinkPress:q})}):null})]})]})},xe=n=>n.length<=3?{start:n,collapsed:[],end:[]}:{start:n.slice(0,1),collapsed:n.slice(1,-2),end:n.slice(-2)},P=()=>{const n=Le(),l=i.useMemo(()=>{const t=o=>h(o.crumb);return n.filter(t)},[n]),a=be(i.useMemo(()=>new Set(l.map(t=>t.id)),[l])),{start:r,collapsed:m,end:u}=i.useMemo(()=>xe(l.map(({id:t,crumb:o,isRootCrumb:s},d)=>({id:t,crumb:o,isFirst:d===0,isLast:d===l.length-1,isRootCrumb:s}))),[l]);return p(g,{role:"navigation",style:c.container,children:[r.map(({id:t,crumb:o,isFirst:s,isLast:d,isRootCrumb:b})=>e(K,{crumb:o,isFirstItem:s,isLastItem:d,shouldAnimate:!a.has(t)&&!b},t)),m.length>0?e(Te,{crumbs:m}):null,u.map(({id:t,crumb:o,isLast:s,isRootCrumb:d})=>e(K,{crumb:o,isLastItem:s,shouldAnimate:!a.has(t)&&!d},t))]})};try{L.displayName="BreadcrumbsRoot",L.__docgenInfo={description:"",displayName:"BreadcrumbsRoot",props:{rootLevelCrumbs:{defaultValue:{value:"[]"},description:"",name:"rootLevelCrumbs",required:!1,type:{name:"readonly Crumb[]"}}}}}catch{}try{E.displayName="useCrumb",E.__docgenInfo={description:"",displayName:"useCrumb",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},siblings:{defaultValue:null,description:"",name:"siblings",required:!1,type:{name:"{ label: string; url: string; isMatching: boolean; }[]"}}}}}catch{}const ur={title:"Interactivity/Breadcrumbs",component:L},T=()=>p(re,{title:"Breadcrumbs",children:[e(I,{title:"With 1 element",children:e(L,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"}],children:e(P,{})})}),e(I,{title:"With 2 elements",children:e(L,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"},{label:"SEPA Credit Transfers",link:"/simulator/sct"}],children:e(P,{})})}),e(I,{title:"With siblings",children:e(L,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"},{label:"SEPA Credit Transfers",link:"/simulator/sct",siblings:[{label:"SEPA Credit Transfers",url:"/simulator/sct",isMatching:!0},{label:"SEPA Direct Debits",url:"/simulator/sdd",isMatching:!1},{label:"Cards",url:"/simulator/cards",isMatching:!1},{label:"Apple Pay/Google Pay",url:"/simulator/apple-pay-google-pay",isMatching:!1},{label:"Account holders",url:"/simulator/account-holders",isMatching:!1},{label:"Merchant acquiring",url:"/simulator/merchant-acquiring",isMatching:!1}]}],children:e(P,{})})})]}),Be=({crumb:n})=>(E(n),null),x=()=>{const[n,l]=i.useState(""),[a,r]=i.useState([]),m=()=>{const o={label:n,link:n};r(s=>[...s,o]),l("")},u=()=>{const o={label:n,url:n,isMatching:!1};r(s=>{const d=s[s.length-1];if(!d)return s;const b=(d==null?void 0:d.siblings)??[],v={...d,siblings:[...b,o]};return[...s.slice(0,-1),v]}),l("")},t=()=>{r(o=>o.slice(0,-1))};return p(re,{title:"Interactive",description:"You can add/remove crumbs to see breadcrumbs animations during navigation in apps",children:[e(Q,{direction:"row",children:e(ge,{label:"New crumb label",actions:p(D,{children:[e(k,{width:8}),e(A,{size:"small",color:"positive",onPress:m,disabled:!n,children:"Add crumb"}),e(k,{width:8}),e(A,{size:"small",color:"gray",onPress:u,disabled:!n||a.length===0,children:"Add sibling"}),e(k,{width:8}),e(A,{size:"small",color:"negative",onPress:t,disabled:a.length===0,children:"Remove last crumb"})]}),render:o=>e(fe,{id:o,value:n,onChange:s=>l(s.currentTarget.value)})})}),e(k,{height:16}),p(L,{children:[a.map(o=>e(Be,{crumb:o})),e(P,{})]})]})};var j,Y,G;T.parameters={...T.parameters,docs:{...(j=T.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <StoryBlock title="Breadcrumbs">
      <StoryPart title="With 1 element">
        <BreadcrumbsRoot rootLevelCrumbs={[{
        label: "All simulator events",
        link: "/simulator"
      }]}>
          <Breadcrumbs />
        </BreadcrumbsRoot>
      </StoryPart>

      <StoryPart title="With 2 elements">
        <BreadcrumbsRoot rootLevelCrumbs={[{
        label: "All simulator events",
        link: "/simulator"
      }, {
        label: "SEPA Credit Transfers",
        link: "/simulator/sct"
      }]}>
          <Breadcrumbs />
        </BreadcrumbsRoot>
      </StoryPart>

      <StoryPart title="With siblings">
        <BreadcrumbsRoot rootLevelCrumbs={[{
        label: "All simulator events",
        link: "/simulator"
      }, {
        label: "SEPA Credit Transfers",
        link: "/simulator/sct",
        siblings: [{
          label: "SEPA Credit Transfers",
          url: "/simulator/sct",
          isMatching: true
        }, {
          label: "SEPA Direct Debits",
          url: "/simulator/sdd",
          isMatching: false
        }, {
          label: "Cards",
          url: "/simulator/cards",
          isMatching: false
        }, {
          label: "Apple Pay/Google Pay",
          url: "/simulator/apple-pay-google-pay",
          isMatching: false
        }, {
          label: "Account holders",
          url: "/simulator/account-holders",
          isMatching: false
        }, {
          label: "Merchant acquiring",
          url: "/simulator/merchant-acquiring",
          isMatching: false
        }]
      }]}>
          <Breadcrumbs />
        </BreadcrumbsRoot>
      </StoryPart>
    </StoryBlock>;
}`,...(G=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var X,Z,J;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [newCrumbLabel, setNewCrumbLabel] = useState("");
  const [crumbs, setCrumbs] = useState<Crumb[]>([]);
  const addCrumb = () => {
    const crumb: Crumb = {
      label: newCrumbLabel,
      link: newCrumbLabel
    };
    setCrumbs(crumbs => [...crumbs, crumb]);
    setNewCrumbLabel("");
  };
  const addSibling = () => {
    const sibling: NonNullable<Crumb["siblings"]>[number] = {
      label: newCrumbLabel,
      url: newCrumbLabel,
      isMatching: false
    };
    setCrumbs(crumbs => {
      const lastCrumb = crumbs[crumbs.length - 1];
      if (!lastCrumb) {
        return crumbs;
      }
      const lastCrumbSiblings = lastCrumb?.siblings ?? [];
      const newLastCrumb = {
        ...lastCrumb,
        siblings: [...lastCrumbSiblings, sibling]
      };
      return [...crumbs.slice(0, -1), newLastCrumb];
    });
    setNewCrumbLabel("");
  };
  const removeLastCrumb = () => {
    setCrumbs(crumbs => crumbs.slice(0, -1));
  };
  return <StoryBlock title="Interactive" description="You can add/remove crumbs to see breadcrumbs animations during navigation in apps">
      <Box direction="row">
        <LakeLabel label="New crumb label" actions={<>
              <Space width={8} />

              <LakeButton size="small" color="positive" onPress={addCrumb} disabled={!newCrumbLabel}>
                Add crumb
              </LakeButton>

              <Space width={8} />

              <LakeButton size="small" color="gray" onPress={addSibling} disabled={!newCrumbLabel || crumbs.length === 0}>
                Add sibling
              </LakeButton>

              <Space width={8} />

              <LakeButton size="small" color="negative" onPress={removeLastCrumb} disabled={crumbs.length === 0}>
                Remove last crumb
              </LakeButton>
            </>} render={id => <LakeTextInput id={id} value={newCrumbLabel} onChange={event => setNewCrumbLabel(event.currentTarget.value)} />} />
      </Box>

      <Space height={16} />

      <BreadcrumbsRoot>
        {crumbs.map(crumb => <InteractiveCrumb crumb={crumb} />)}

        <Breadcrumbs />
      </BreadcrumbsRoot>
    </StoryBlock>;
}`,...(J=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};const dr=["Variations","Interactive"];export{x as Interactive,T as Variations,dr as __namedExportsOrder,ur as default};
//# sourceMappingURL=Breadcrumbs.stories-DnhLgHWI.js.map
