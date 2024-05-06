import{s as se,r as j,c as g,b as f,M as oe,d as D,g as _,t as ie,j as e,V as h,I as H,i as p,F as E,p as T,L as B,T as le,S as C,$ as ae,q as F,f as ce,B as X}from"./Space-D2q7n8S5.js";import{r as i}from"./index-CBqU2yxZ.js";import{u as ue,T as Z}from"./TransitionView-nGFg5jNw.js";import{n as de}from"./function-Boo_PdCt.js";import{F as $}from"./FocusTrap--cpABAW0.js";import{L as z}from"./Link-Ccwh2JIy.js";import{v as A}from"./v4-D8aEg3BZ.js";import{P as me}from"./index-DFlzu1JJ.js";import{L as P}from"./LakeButton-BNRBDyBQ.js";import{L as be}from"./LakeLabel-o8lWACwe.js";import{L as pe}from"./LakeTextInput-CKwo6iX_.js";import{S as J,a as O}from"./_StoriesComponents-CS-ilBhq.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./a11y-DXvpDVrG.js";import"./array-rjEBP2Ry.js";import"./index-C_dviApc.js";import"./with-selector-D-Y2eL2T.js";import"./Pressable-CWb70MP5.js";import"./commonStyles-t4XfA7cz.js";import"./index-Dm7YbrF-.js";import"./Fill-BDdVvi8T.js";import"./LakeSelect-BM215d_k.js";import"./useDisclosure-CS9t68_Y.js";import"./Popover-DrhmPyd1.js";import"./useResponsive-B9tn_ZUC.js";import"./BottomPanel-tO9YjSET.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-DcmIatoB.js";import"./Suspendable-PaZKQb4x.js";import"./index-BcAlVOME.js";import"./index-2gMGMzvj.js";const c=se.create({container:{flexDirection:"row",alignItems:"center",zIndex:10,transform:"translateZ(0px)"},item:{flexDirection:"row",alignItems:"center",borderRadius:j[6],transitionProperty:"opacity",transitionDuration:"150ms"},itemPressed:{opacity:.2},itemForcedOpen:{backgroundColor:g.gray[50]},chevron:{padding:f[8]},horizontalLink:{paddingVertical:f[8]},horizontalLinkText:{paddingHorizontal:f[8],alignItems:"center",display:"inline-flex"},horizontalLinkTextHovered:{color:g.gray[900],boxShadow:"0 1px currentColor"},activeHorizontalLinkText:{color:g.gray[800],backgroundColor:oe,borderRadius:j[4],boxShadow:"none"},dropdown:{position:"absolute",left:"50%",transform:"translateX(-50%)",top:"100%",backgroundColor:D.accented,borderRadius:j[8],boxShadow:_.modal,paddingVertical:f[8]},siblingsDropdown:{position:"absolute",left:"50%",transform:"translateX(-50%)",top:"100%",backgroundColor:D.accented,borderRadius:j[8],boxShadow:_.modal,paddingVertical:f[8],alignItems:"stretch"},dropdownLink:{paddingHorizontal:f[16],paddingVertical:f[8],flexDirection:"row",alignItems:"center"},dropdownLinkText:{...ie.regular,whiteSpace:"nowrap"},dropdownLinkTextHovered:{color:g.gray[500]},dropdownLinkActive:{backgroundColor:g.gray[50]},dropdownContainer:{position:"absolute",left:"50%",top:"100%"},dropdownLinkContainer:{display:"flex",flexDirection:"column",alignItems:"stretch"},tick:{position:"absolute",top:"50%",right:f[16],transform:"translateY(-50%)"}}),I=[],he=[],ge=[I,I,de,{current:-1}],M=i.createContext(ge),w=({rootLevelCrumbs:n=he,children:l})=>{const[a,r]=i.useState(I),m=i.useRef(!0),u=i.useRef(-1),[t,s]=i.useState(()=>n.map(b=>({id:A(),crumb:b,isRootCrumb:!0})));i.useEffect(()=>{if(m.current){m.current=!1;return}s(n.map(b=>({id:A(),crumb:b,isRootCrumb:!0})))},[n]);const o=i.useMemo(()=>[...a].sort((b,L)=>(L.index??-1)>(b.index??-1)?-1:1),[a]),d=i.useMemo(()=>[t,o,r,u],[t,o,r,u]);return e.jsx(M.Provider,{value:d,children:l})},fe=()=>{const[n,l]=i.useContext(M);return i.useMemo(()=>[...n,...l],[n,l])},xe=n=>{const[,,l,a]=i.useContext(M),[r]=i.useState(()=>A()),m=i.useRef(n),[u]=i.useState(()=>++a.current);i.useEffect(()=>(l(t=>t.concat([{id:r,crumb:m.current,isRootCrumb:!1,index:u}])),()=>{l(t=>t.filter(s=>s.id!==r))}),[r,l,u]),i.useEffect(()=>{l(t=>{const s=t.find(o=>o.id===r);return p(s)&&s.crumb!==n?t.map(o=>o.id===r?{id:r,crumb:n,isRootCrumb:s.isRootCrumb,index:u}:o):t})},[r,n,l,u])},Q=e.jsx(h,{style:c.chevron,children:e.jsx(H,{name:"chevron-right-filled",color:g.gray[500],size:16})}),Ce=({siblings:n,isLast:l,onPress:a})=>e.jsx(h,{style:c.siblingsDropdown,children:n.map(({url:r,label:m,isMatching:u})=>e.jsx(z,{to:r,ariaCurrentValue:"location",onPress:t=>{u&&l&&t.preventDefault(),a()},style:c.dropdownLinkContainer,children:({hovered:t})=>e.jsxs(h,{style:[c.dropdownLink,u&&c.dropdownLinkActive],children:[e.jsx(B,{style:[c.dropdownLinkText,t&&c.dropdownLinkTextHovered],children:m}),u&&e.jsxs(e.Fragment,{children:[e.jsx(C,{width:32}),e.jsx(H,{color:g.positive[500],name:"checkmark-filled",size:14,style:c.tick})]})]})},r))}),V=({crumb:n,isFirstItem:l=!1,isLastItem:a=!1,shouldAnimate:r})=>{const[m,u]=i.useState(()=>!1),t=i.useRef(null),[s,o]=i.useState(null);E(t,{onHoverStart:()=>u(!0),onHoverEnd:()=>u(!1)});const d=i.useCallback(b=>{n.siblings!=null&&(b.preventDefault(),o(n.siblings))},[n.siblings]);return e.jsxs(h,{style:[c.item,r?T.fadeAndSlideInFromRight.enter:null],children:[l?null:Q,e.jsxs(h,{children:[e.jsx(z,{to:n.link,ariaCurrentValue:"location",onPress:d,children:e.jsx(h,{ref:t,style:[c.horizontalLink,r&&T.fadeAndSlideInFromRight.enter],children:e.jsxs(B,{color:g.gray[800],style:[c.horizontalLinkText,a&&c.activeHorizontalLinkText],children:[e.jsx(le,{style:m&&!a?c.horizontalLinkTextHovered:void 0,children:n.label}),n.siblings!=null?e.jsxs(e.Fragment,{children:[e.jsx(C,{width:4}),e.jsx(H,{name:"chevron-down-filled",color:g.gray[500],size:16})]}):null]})})}),e.jsx(h,{style:c.dropdownContainer,children:e.jsx(Z,{...T.fadeAndSlideInFromBottom,children:s?e.jsx($,{autoFocus:!0,focusLock:!0,returnFocus:!0,onClickOutside:()=>o(null),onEscapeKey:()=>o(null),children:e.jsx(Ce,{siblings:s,isLast:a,onPress:()=>o(null)})}):null})})]})]})},we=({crumbs:n,onHoverStart:l,onHoverEnd:a,onLinkFocus:r,onLinkBlur:m,onLinkPress:u})=>{const t=i.useRef(null);return E(t,{onHoverStart:l,onHoverEnd:a}),e.jsx(h,{style:c.dropdown,ref:t,children:n.map(({id:s,crumb:o})=>e.jsx(z,{to:o.link,onFocus:r,onBlur:m,onPress:u,ariaCurrentValue:"location",children:({hovered:d})=>e.jsx(h,{style:c.dropdownLink,children:e.jsx(B,{style:[c.dropdownLinkText,d&&c.dropdownLinkTextHovered],children:o.label})})},s))})},Le=new Set(["ForcedOpen","OpenFromFocus"]),ve=new Set(["Open","ForcedOpen","OpenFromFocus"]),ke=new Set(["ForcedOpen"]),ye=({crumbs:n})=>{const[l,a]=i.useReducer((x,S)=>ae([S,x]).returnType().with(["ForceToggle","Closed"],["ForceToggle","Open"],["ForceToggle","ForcedClosed"],()=>"ForcedOpen").with(["ForceToggle","OpenFromFocus"],["ForceToggle","ForcedOpen"],()=>"ForcedClosed").with(["ForceClose",F._],()=>"ForcedClosed").with(["FocusHandle","ForcedClosed"],()=>"Closed").with(["Open","ForcedOpen"],["FocusHandle","ForcedOpen"],["Close","ForcedOpen"],()=>"ForcedOpen").with(["Open",F._],()=>"Open").with(["FocusHandle",F._],()=>"OpenFromFocus").with(["Close",F._],()=>"Closed").exhaustive(),"Closed"),r=i.useRef(void 0),m=i.useRef(null),u=i.useRef(null),{onHandleFocus:t,onLinkFocus:s,onAnyBlur:o,onHoverStart:d,onHoverEnd:b,onPress:L,onPressOutside:ee,onEscapeKey:N}=i.useMemo(()=>({onHandleFocus:x=>{if(ce(u.current))return;const S=u.current,te=x;S.contains(te.relatedTarget)||(p(r.current)&&clearTimeout(r.current),a("FocusHandle"))},onLinkFocus:()=>{p(r.current)&&clearTimeout(r.current),a("Open")},onAnyBlur:()=>{p(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{a("Close")},300)},onHoverStart:()=>{p(r.current)&&clearTimeout(r.current),a("Open")},onHoverEnd:()=>{p(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{a("Close")},300)},onPress:()=>{p(r.current)&&clearTimeout(r.current),a("ForceToggle")},onPressOutside:x=>{p(m.current)&&m.current.contains(x.target)||(p(r.current)&&clearTimeout(r.current),a("ForceClose"),r.current=window.setTimeout(()=>{a("Close")},300))},onEscapeKey:()=>{p(r.current)&&clearTimeout(r.current),a("ForceClose"),r.current=window.setTimeout(()=>{a("Close")},300)}}),[]);i.useEffect(()=>()=>{p(r.current)&&clearTimeout(r.current)},[]);const re=ve.has(l),ne=Le.has(l),R=ke.has(l);return E(m,{onHoverStart:d,onHoverEnd:b}),e.jsxs(X,{direction:"row",alignItems:"center",children:[Q,e.jsxs(h,{ref:u,children:[e.jsx(me,{ref:m,style:({pressed:x})=>[c.item,x&&c.itemPressed,l==="ForcedOpen"&&c.itemForcedOpen],tabIndex:0,onFocus:t,onBlur:o,onPress:L,children:e.jsx(h,{style:c.horizontalLink,children:e.jsx(B,{style:[c.horizontalLinkText,c.activeHorizontalLinkText],children:"…"})})}),e.jsx(Z,{...T.fadeAndSlideInFromBottom,children:re?e.jsx($,{autoFocus:ne,focusLock:R,returnFocus:R,onClickOutside:ee,onEscapeKey:R?N:void 0,children:e.jsx(we,{crumbs:n,onHoverStart:d,onHoverEnd:b,onLinkFocus:s,onLinkBlur:o,onLinkPress:N})}):null})]})]})},Se=n=>n.length<=3?{start:n,collapsed:[],end:[]}:{start:n.slice(0,1),collapsed:n.slice(1,-2),end:n.slice(-2)},y=()=>{const n=fe(),l=i.useMemo(()=>{const t=s=>p(s.crumb);return n.filter(t)},[n]),a=ue(i.useMemo(()=>new Set(l.map(t=>t.id)),[l])),{start:r,collapsed:m,end:u}=i.useMemo(()=>Se(l.map(({id:t,crumb:s,isRootCrumb:o},d)=>({id:t,crumb:s,isFirst:d===0,isLast:d===l.length-1,isRootCrumb:o}))),[l]);return e.jsxs(h,{role:"navigation",style:c.container,children:[r.map(({id:t,crumb:s,isFirst:o,isLast:d,isRootCrumb:b})=>e.jsx(V,{crumb:s,isFirstItem:o,isLastItem:d,shouldAnimate:!a.has(t)&&!b},t)),m.length>0?e.jsx(ye,{crumbs:m}):null,u.map(({id:t,crumb:s,isLast:o,isRootCrumb:d})=>e.jsx(V,{crumb:s,isLastItem:o,shouldAnimate:!a.has(t)&&!d},t))]})};w.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsRoot",props:{rootLevelCrumbs:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"[]",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs"};const ir={title:"Interactivity/Breadcrumbs",component:w},v=()=>e.jsxs(J,{title:"Breadcrumbs",children:[e.jsx(O,{title:"With 1 element",children:e.jsx(w,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"}],children:e.jsx(y,{})})}),e.jsx(O,{title:"With 2 elements",children:e.jsx(w,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"},{label:"SEPA Credit Transfers",link:"/simulator/sct"}],children:e.jsx(y,{})})}),e.jsx(O,{title:"With siblings",children:e.jsx(w,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"},{label:"SEPA Credit Transfers",link:"/simulator/sct",siblings:[{label:"SEPA Credit Transfers",url:"/simulator/sct",isMatching:!0},{label:"SEPA Direct Debits",url:"/simulator/sdd",isMatching:!1},{label:"Cards",url:"/simulator/cards",isMatching:!1},{label:"Apple Pay/Google Pay",url:"/simulator/apple-pay-google-pay",isMatching:!1},{label:"Account holders",url:"/simulator/account-holders",isMatching:!1},{label:"Merchant acquiring",url:"/simulator/merchant-acquiring",isMatching:!1}]}],children:e.jsx(y,{})})})]}),je=({crumb:n})=>(xe(n),null),k=()=>{const[n,l]=i.useState(""),[a,r]=i.useState([]),m=()=>{const s={label:n,link:n};r(o=>[...o,s]),l("")},u=()=>{const s={label:n,url:n,isMatching:!1};r(o=>{const d=o[o.length-1];if(!d)return o;const b=(d==null?void 0:d.siblings)??[],L={...d,siblings:[...b,s]};return[...o.slice(0,-1),L]}),l("")},t=()=>{r(s=>s.slice(0,-1))};return e.jsxs(J,{title:"Interactive",description:"You can add/remove crumbs to see breadcrumbs animations during navigation in apps",children:[e.jsx(X,{direction:"row",children:e.jsx(be,{label:"New crumb label",actions:e.jsxs(e.Fragment,{children:[e.jsx(C,{width:8}),e.jsx(P,{size:"small",color:"positive",onPress:m,disabled:!n,children:"Add crumb"}),e.jsx(C,{width:8}),e.jsx(P,{size:"small",color:"gray",onPress:u,disabled:!n||a.length===0,children:"Add sibling"}),e.jsx(C,{width:8}),e.jsx(P,{size:"small",color:"negative",onPress:t,disabled:a.length===0,children:"Remove last crumb"})]}),render:s=>e.jsx(pe,{id:s,value:n,onChange:o=>l(o.currentTarget.value)})})}),e.jsx(C,{height:16}),e.jsxs(w,{children:[a.map(s=>e.jsx(je,{crumb:s})),e.jsx(y,{})]})]})};v.__docgenInfo={description:"",methods:[],displayName:"Variations"};k.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var q,W,U;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(U=(W=v.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var K,Y,G;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...(G=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};const lr=["Variations","Interactive"];export{k as Interactive,v as Variations,lr as __namedExportsOrder,ir as default};
//# sourceMappingURL=Breadcrumbs.stories-B6Kr4Q1o.js.map
