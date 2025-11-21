import{j as e,i as p,V as h,s as Q,a as f,c as g,t as $,d as D,r as j,b as _,g as ee,u as H,e as T,L as B,T as re,S as x,I as E,z as ne,N as F,f as te,B as W}from"./ScrollView-Cx-_2_qZ.js";import{r as i}from"./iframe-D2N-27y_.js";import{u as se,T as q}from"./TransitionView-whHwE2l0.js";import{n as oe}from"./function-D6GwSmTz.js";import{F as U}from"./FocusTrap-BIlErJi3.js";import{L as z}from"./Link-DSsZIKdl.js";import{v as A}from"./v4-BKrj-4V8.js";import{M as ie}from"./index-yhx6ja_f.js";import{L as P}from"./LakeButton-DdsVLmd-.js";import{L as le}from"./LakeLabel-Bcm9o45R.js";import{L as ae}from"./LakeTextInput-wp9gY_dn.js";import{S as K,a as O}from"./_StoriesComponents-DErrwUNY.js";import"./index-8RuiGR6E.js";import"./preload-helper-D1IIBeq1.js";import"./array-BfAlyugE.js";import"./index-C0rQ3iba.js";import"./with-selector-D2fsoJlH.js";import"./Pressable-CuMb02U5.js";import"./extends-CF3RwP-h.js";import"./commonStyles-BBEkV6IC.js";import"./index-B67Yjf_9.js";import"./Fill-Cd3-dhW6.js";import"./LakeSelect-CALooc9s.js";import"./useDisclosure-C8iaUgOA.js";import"./Popover-D4pAzXvW.js";import"./useResponsive-DGyYVoC0.js";import"./BottomPanel-CIeedgS_.js";import"./useBodyClassName-Dc0qfvfc.js";import"./Suspendable-BMBRmXTf.js";import"./Separator-rzjehLGw.js";import"./index-q1sBAsTz.js";const c=Q.create({container:{flexDirection:"row",alignItems:"center",zIndex:10,transform:"translateZ(0px)"},item:{flexDirection:"row",alignItems:"center",borderRadius:j[6],transitionProperty:"opacity",transitionDuration:"150ms"},itemPressed:{opacity:.2},itemForcedOpen:{backgroundColor:g.gray[50]},chevron:{padding:f[8]},horizontalLink:{paddingVertical:f[8]},horizontalLinkText:{paddingHorizontal:f[8],alignItems:"center",display:"inline-flex"},horizontalLinkTextHovered:{color:g.gray[900],boxShadow:"0 1px currentColor"},activeHorizontalLinkText:{color:g.gray[800],backgroundColor:ee,borderRadius:j[4],boxShadow:"none"},dropdown:{position:"absolute",left:"50%",transform:"translateX(-50%)",top:"100%",backgroundColor:_.accented,borderRadius:j[8],boxShadow:D.modal,paddingVertical:f[8]},siblingsDropdown:{position:"absolute",left:"50%",transform:"translateX(-50%)",top:"100%",backgroundColor:_.accented,borderRadius:j[8],boxShadow:D.modal,paddingVertical:f[8],alignItems:"stretch"},dropdownLink:{paddingHorizontal:f[16],paddingVertical:f[8],flexDirection:"row",alignItems:"center"},dropdownLinkText:{...$.regular,whiteSpace:"nowrap"},dropdownLinkTextHovered:{color:g.gray[500]},dropdownLinkActive:{backgroundColor:g.gray[50]},dropdownContainer:{position:"absolute",left:"50%",top:"100%"},dropdownLinkContainer:{display:"flex",flexDirection:"column",alignItems:"stretch"},tick:{position:"absolute",top:"50%",right:f[16],transform:"translateY(-50%)"}}),I=[],ce=[],ue=[I,I,oe,{current:-1}],M=i.createContext(ue),w=({rootLevelCrumbs:n=ce,children:l})=>{const[a,r]=i.useState(I),d=i.useRef(!0),u=i.useRef(-1),[t,s]=i.useState(()=>n.map(b=>({id:A(),crumb:b,isRootCrumb:!0})));i.useEffect(()=>{if(d.current){d.current=!1;return}s(n.map(b=>({id:A(),crumb:b,isRootCrumb:!0})))},[n]);const o=i.useMemo(()=>[...a].sort((b,L)=>(L.index??-1)>(b.index??-1)?-1:1),[a]),m=i.useMemo(()=>[t,o,r,u],[t,o,r,u]);return e.jsx(M.Provider,{value:m,children:l})},de=()=>{const[n,l]=i.useContext(M);return i.useMemo(()=>[...n,...l],[n,l])},me=n=>{const[,,l,a]=i.useContext(M),[r]=i.useState(()=>A()),d=i.useRef(n),[u]=i.useState(()=>++a.current);i.useEffect(()=>(l(t=>t.concat([{id:r,crumb:d.current,isRootCrumb:!1,index:u}])),()=>{l(t=>t.filter(s=>s.id!==r))}),[r,l,u]),i.useEffect(()=>{l(t=>{const s=t.find(o=>o.id===r);return p(s)&&s.crumb!==n?t.map(o=>o.id===r?{id:r,crumb:n,isRootCrumb:s.isRootCrumb,index:u}:o):t})},[r,n,l,u])},Y=e.jsx(h,{style:c.chevron,children:e.jsx(E,{name:"chevron-right-filled",color:g.gray[500],size:16})}),be=({siblings:n,isLast:l,onPress:a})=>e.jsx(h,{style:c.siblingsDropdown,children:n.map(({url:r,label:d,isMatching:u})=>e.jsx(z,{to:r,ariaCurrentValue:"location",onPress:t=>{u&&l&&t.preventDefault(),a()},style:c.dropdownLinkContainer,children:({hovered:t})=>e.jsxs(h,{style:[c.dropdownLink,u&&c.dropdownLinkActive],children:[e.jsx(B,{style:[c.dropdownLinkText,t&&c.dropdownLinkTextHovered],children:d}),u&&e.jsxs(e.Fragment,{children:[e.jsx(x,{width:32}),e.jsx(E,{color:g.positive[500],name:"checkmark-filled",size:14,style:c.tick})]})]})},r))}),V=({crumb:n,isFirstItem:l=!1,isLastItem:a=!1,shouldAnimate:r})=>{const[d,u]=i.useState(()=>!1),t=i.useRef(null),[s,o]=i.useState(null);H(t,{onHoverStart:()=>u(!0),onHoverEnd:()=>u(!1)});const m=i.useCallback(b=>{n.siblings!=null&&(b.preventDefault(),o(n.siblings))},[n.siblings]);return e.jsxs(h,{style:[c.item,r?T.fadeAndSlideInFromRight.enter:null],children:[l?null:Y,e.jsxs(h,{children:[e.jsx(z,{to:n.link,ariaCurrentValue:"location",onPress:m,children:e.jsx(h,{ref:t,style:[c.horizontalLink,r&&T.fadeAndSlideInFromRight.enter],children:e.jsxs(B,{color:g.gray[800],style:[c.horizontalLinkText,a&&c.activeHorizontalLinkText],children:[e.jsx(re,{style:d&&!a?c.horizontalLinkTextHovered:void 0,children:n.label}),n.siblings!=null?e.jsxs(e.Fragment,{children:[e.jsx(x,{width:4}),e.jsx(E,{name:"chevron-down-filled",color:g.gray[500],size:16})]}):null]})})}),e.jsx(h,{style:c.dropdownContainer,children:e.jsx(q,{...T.fadeAndSlideInFromBottom,children:s?e.jsx(U,{autoFocus:!0,focusLock:!0,returnFocus:!0,onClickOutside:()=>o(null),onEscapeKey:()=>o(null),children:e.jsx(be,{siblings:s,isLast:a,onPress:()=>o(null)})}):null})})]})]})},pe=({crumbs:n,onHoverStart:l,onHoverEnd:a,onLinkFocus:r,onLinkBlur:d,onLinkPress:u})=>{const t=i.useRef(null);return H(t,{onHoverStart:l,onHoverEnd:a}),e.jsx(h,{style:c.dropdown,ref:t,children:n.map(({id:s,crumb:o})=>e.jsx(z,{to:o.link,onFocus:r,onBlur:d,onPress:u,ariaCurrentValue:"location",children:({hovered:m})=>e.jsx(h,{style:c.dropdownLink,children:e.jsx(B,{style:[c.dropdownLinkText,m&&c.dropdownLinkTextHovered],children:o.label})})},s))})},he=new Set(["ForcedOpen","OpenFromFocus"]),ge=new Set(["Open","ForcedOpen","OpenFromFocus"]),fe=new Set(["ForcedOpen"]),Ce=({crumbs:n})=>{const[l,a]=i.useReducer((C,S)=>ne([S,C]).returnType().with(["ForceToggle","Closed"],["ForceToggle","Open"],["ForceToggle","ForcedClosed"],()=>"ForcedOpen").with(["ForceToggle","OpenFromFocus"],["ForceToggle","ForcedOpen"],()=>"ForcedClosed").with(["ForceClose",F._],()=>"ForcedClosed").with(["FocusHandle","ForcedClosed"],()=>"Closed").with(["Open","ForcedOpen"],["FocusHandle","ForcedOpen"],["Close","ForcedOpen"],()=>"ForcedOpen").with(["Open",F._],()=>"Open").with(["FocusHandle",F._],()=>"OpenFromFocus").with(["Close",F._],()=>"Closed").exhaustive(),"Closed"),r=i.useRef(void 0),d=i.useRef(null),u=i.useRef(null),{onHandleFocus:t,onLinkFocus:s,onAnyBlur:o,onHoverStart:m,onHoverEnd:b,onPress:L,onPressOutside:G,onEscapeKey:N}=i.useMemo(()=>({onHandleFocus:C=>{if(te(u.current))return;const S=u.current,J=C;S.contains(J.relatedTarget)||(p(r.current)&&clearTimeout(r.current),a("FocusHandle"))},onLinkFocus:()=>{p(r.current)&&clearTimeout(r.current),a("Open")},onAnyBlur:()=>{p(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{a("Close")},300)},onHoverStart:()=>{p(r.current)&&clearTimeout(r.current),a("Open")},onHoverEnd:()=>{p(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{a("Close")},300)},onPress:()=>{p(r.current)&&clearTimeout(r.current),a("ForceToggle")},onPressOutside:C=>{p(d.current)&&d.current.contains(C.target)||(p(r.current)&&clearTimeout(r.current),a("ForceClose"),r.current=window.setTimeout(()=>{a("Close")},300))},onEscapeKey:()=>{p(r.current)&&clearTimeout(r.current),a("ForceClose"),r.current=window.setTimeout(()=>{a("Close")},300)}}),[]);i.useEffect(()=>()=>{p(r.current)&&clearTimeout(r.current)},[]);const X=ge.has(l),Z=he.has(l),R=fe.has(l);return H(d,{onHoverStart:m,onHoverEnd:b}),e.jsxs(W,{direction:"row",alignItems:"center",children:[Y,e.jsxs(h,{ref:u,children:[e.jsx(ie,{ref:d,style:({pressed:C})=>[c.item,C&&c.itemPressed,l==="ForcedOpen"&&c.itemForcedOpen],tabIndex:0,onFocus:t,onBlur:o,onPress:L,children:e.jsx(h,{style:c.horizontalLink,children:e.jsx(B,{style:[c.horizontalLinkText,c.activeHorizontalLinkText],children:"…"})})}),e.jsx(q,{...T.fadeAndSlideInFromBottom,children:X?e.jsx(U,{autoFocus:Z,focusLock:R,returnFocus:R,onClickOutside:G,onEscapeKey:R?N:void 0,children:e.jsx(pe,{crumbs:n,onHoverStart:m,onHoverEnd:b,onLinkFocus:s,onLinkBlur:o,onLinkPress:N})}):null})]})]})},xe=n=>n.length<=3?{start:n,collapsed:[],end:[]}:{start:n.slice(0,1),collapsed:n.slice(1,-2),end:n.slice(-2)},y=()=>{const n=de(),l=i.useMemo(()=>{const t=s=>p(s.crumb);return n.filter(t)},[n]),a=se(i.useMemo(()=>new Set(l.map(t=>t.id)),[l])),{start:r,collapsed:d,end:u}=i.useMemo(()=>xe(l.map(({id:t,crumb:s,isRootCrumb:o},m)=>({id:t,crumb:s,isFirst:m===0,isLast:m===l.length-1,isRootCrumb:o}))),[l]);return e.jsxs(h,{role:"navigation",style:c.container,children:[r.map(({id:t,crumb:s,isFirst:o,isLast:m,isRootCrumb:b})=>e.jsx(V,{crumb:s,isFirstItem:o,isLastItem:m,shouldAnimate:!a.has(t)&&!b},t)),d.length>0?e.jsx(Ce,{crumbs:d}):null,u.map(({id:t,crumb:s,isLast:o,isRootCrumb:m})=>e.jsx(V,{crumb:s,isLastItem:o,shouldAnimate:!a.has(t)&&!m},t))]})};w.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsRoot",props:{rootLevelCrumbs:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"[]",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs"};const Qe={title:"Interactivity/Breadcrumbs",component:w},v=()=>e.jsxs(K,{title:"Breadcrumbs",children:[e.jsx(O,{title:"With 1 element",children:e.jsx(w,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"}],children:e.jsx(y,{})})}),e.jsx(O,{title:"With 2 elements",children:e.jsx(w,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"},{label:"SEPA Credit Transfers",link:"/simulator/sct"}],children:e.jsx(y,{})})}),e.jsx(O,{title:"With siblings",children:e.jsx(w,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"},{label:"SEPA Credit Transfers",link:"/simulator/sct",siblings:[{label:"SEPA Credit Transfers",url:"/simulator/sct",isMatching:!0},{label:"SEPA Direct Debits",url:"/simulator/sdd",isMatching:!1},{label:"Cards",url:"/simulator/cards",isMatching:!1},{label:"Apple Pay/Google Pay",url:"/simulator/apple-pay-google-pay",isMatching:!1},{label:"Account holders",url:"/simulator/account-holders",isMatching:!1},{label:"Merchant acquiring",url:"/simulator/merchant-acquiring",isMatching:!1}]}],children:e.jsx(y,{})})})]}),we=({crumb:n})=>(me(n),null),k=()=>{const[n,l]=i.useState(""),[a,r]=i.useState([]),d=()=>{const s={label:n,link:n};r(o=>[...o,s]),l("")},u=()=>{const s={label:n,url:n,isMatching:!1};r(o=>{const m=o[o.length-1];if(!m)return o;const b=m?.siblings??[],L={...m,siblings:[...b,s]};return[...o.slice(0,-1),L]}),l("")},t=()=>{r(s=>s.slice(0,-1))};return e.jsxs(K,{title:"Interactive",description:"You can add/remove crumbs to see breadcrumbs animations during navigation in apps",children:[e.jsx(W,{direction:"row",children:e.jsx(le,{label:"New crumb label",actions:e.jsxs(e.Fragment,{children:[e.jsx(x,{width:8}),e.jsx(P,{size:"small",color:"positive",onPress:d,disabled:!n,children:"Add crumb"}),e.jsx(x,{width:8}),e.jsx(P,{size:"small",color:"gray",onPress:u,disabled:!n||a.length===0,children:"Add sibling"}),e.jsx(x,{width:8}),e.jsx(P,{size:"small",color:"negative",onPress:t,disabled:a.length===0,children:"Remove last crumb"})]}),render:s=>e.jsx(ae,{id:s,value:n,onChange:o=>l(o.currentTarget.value)})})}),e.jsx(x,{height:16}),e.jsxs(w,{children:[a.map(s=>e.jsx(we,{crumb:s})),e.jsx(y,{})]})]})};v.__docgenInfo={description:"",methods:[],displayName:"Variations"};k.__docgenInfo={description:"",methods:[],displayName:"Interactive"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};const $e=["Variations","Interactive"];export{k as Interactive,v as Variations,$e as __namedExportsOrder,Qe as default};
//# sourceMappingURL=Breadcrumbs.stories-BeLlj-4u.js.map
