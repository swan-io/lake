import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-Bdn14elh.js";import{F as r,H as i,L as a,M as o,N as s,P as c,U as l,V as u,_ as d,bt as ee,dt as f,ft as p,g as m,h as te,ht as h,i as g,it as _,kt as v,mt as y,nt as b,o as x,ot as ne,pt as S,r as C,s as re,st as ie,tt as w,v as T,vt as ae,wt as E,z as oe}from"./ScrollView-BZAAJkeN.js";import{r as se,t as D}from"./LakeButton-9DpPyak9.js";import{n as O,r as ce,t as le}from"./_StoriesComponents-DANNEV0x.js";import{n as ue,t as de}from"./FocusTrap-Cl5NDNUn.js";import{i as fe,n as pe,r as me,t as k}from"./TransitionView-lB2Mx6-1.js";import{n as he,t as ge}from"./LakeTextInput-BIRPHbZU.js";import{n as _e,t as ve}from"./function-DmG_ra2c.js";import{r as A,t as ye}from"./dist-DzH8jend.js";import{n as be,t as j}from"./Link-DD6KRvZA.js";import{n as xe,t as Se}from"./LakeLabel-BqCNPQPb.js";var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,Ce,we,J,Te=t((()=>{M=e(n()),h(),s(),ye(),ie(),d(),me(),ve(),r(),m(),ue(),i(),re(),be(),g(),pe(),N=l(),P=v.create({container:{flexDirection:`row`,alignItems:`center`,zIndex:10,transform:`translateZ(0px)`},item:{flexDirection:`row`,alignItems:`center`,borderRadius:f[6],transitionProperty:`opacity`,transitionDuration:`150ms`},itemPressed:{opacity:.2},itemForcedOpen:{backgroundColor:_.gray[50]},chevron:{padding:S[8]},horizontalLink:{paddingVertical:S[8]},horizontalLinkText:{paddingHorizontal:S[8],alignItems:`center`,display:`inline-flex`},horizontalLinkTextHovered:{color:_.gray[900],boxShadow:`0 1px currentColor`},activeHorizontalLinkText:{color:_.gray[800],backgroundColor:ne,borderRadius:f[4],boxShadow:`none`},dropdown:{position:`absolute`,left:`50%`,transform:`translateX(-50%)`,top:`100%`,backgroundColor:b.accented,borderRadius:f[8],boxShadow:p.modal,paddingVertical:S[8]},siblingsDropdown:{position:`absolute`,left:`50%`,transform:`translateX(-50%)`,top:`100%`,backgroundColor:b.accented,borderRadius:f[8],boxShadow:p.modal,paddingVertical:S[8],alignItems:`stretch`},dropdownLink:{paddingHorizontal:S[16],paddingVertical:S[8],flexDirection:`row`,alignItems:`center`},dropdownLinkText:{...y.regular,whiteSpace:`nowrap`},dropdownLinkTextHovered:{color:_.gray[500]},dropdownLinkActive:{backgroundColor:_.gray[50]},dropdownContainer:{position:`absolute`,left:`50%`,top:`100%`},dropdownLinkContainer:{display:`flex`,flexDirection:`column`,alignItems:`stretch`},tick:{position:`absolute`,top:`50%`,right:S[16],transform:`translateY(-50%)`}}),F=[],I=[],L=(0,M.createContext)([F,F,_e,{current:-1}]),R=({rootLevelCrumbs:e=I,children:t})=>{let[n,r]=(0,M.useState)(F),i=(0,M.useRef)(!0),a=(0,M.useRef)(-1),[o,s]=(0,M.useState)(()=>e.map(e=>({id:A(),crumb:e,isRootCrumb:!0})));(0,M.useEffect)(()=>{if(i.current){i.current=!1;return}s(e.map(e=>({id:A(),crumb:e,isRootCrumb:!0})))},[e]);let c=(0,M.useMemo)(()=>[...n].sort((e,t)=>(t.index??-1)>(e.index??-1)?-1:1),[n]),l=(0,M.useMemo)(()=>[o,c,r,a],[o,c,r,a]);return(0,N.jsx)(L.Provider,{value:l,children:t})},z=()=>{let[e,t]=(0,M.useContext)(L);return(0,M.useMemo)(()=>[...e,...t],[e,t])},B=e=>{let[,,t,n]=(0,M.useContext)(L),r=(0,M.useId)(),i=(0,M.useRef)(e),[o]=(0,M.useState)(()=>++n.current);(0,M.useEffect)(()=>(t(e=>e.concat([{id:r,crumb:i.current,isRootCrumb:!1,index:o}])),()=>{t(e=>e.filter(e=>e.id!==r))}),[r,t,o]),(0,M.useEffect)(()=>{t(t=>{let n=t.find(e=>e.id===r);return a(n)&&n.crumb!==e?t.map(t=>t.id===r?{id:r,crumb:e,isRootCrumb:n.isRootCrumb,index:o}:t):t})},[r,e,t,o])},V=(0,N.jsx)(E,{style:P.chevron,children:(0,N.jsx)(u,{name:`chevron-right-filled`,color:_.gray[500],size:16})}),H=({siblings:e,isLast:t,onPress:n})=>(0,N.jsx)(E,{style:P.siblingsDropdown,children:e.map(({url:e,label:r,isMatching:i})=>(0,N.jsx)(j,{to:e,ariaCurrentValue:`location`,onPress:e=>{i&&t&&e.preventDefault(),n()},style:P.dropdownLinkContainer,children:({hovered:e})=>(0,N.jsxs)(E,{style:[P.dropdownLink,i&&P.dropdownLinkActive],children:[(0,N.jsx)(x,{style:[P.dropdownLinkText,e&&P.dropdownLinkTextHovered],children:r}),i&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(C,{width:32}),(0,N.jsx)(u,{color:_.positive[500],name:`checkmark-filled`,size:14,style:P.tick})]})]})},e))}),U=({crumb:e,isFirstItem:t=!1,isLastItem:n=!1,shouldAnimate:r})=>{let[i,a]=(0,M.useState)(()=>!1),o=(0,M.useRef)(null),[s,c]=(0,M.useState)(null);T(o,{onHoverStart:()=>a(!0),onHoverEnd:()=>a(!1)});let l=(0,M.useCallback)(t=>{e.siblings!=null&&(t.preventDefault(),c(e.siblings))},[e.siblings]);return(0,N.jsxs)(E,{style:[P.item,r?w.fadeAndSlideInFromRight.enter:null],children:[t?null:V,(0,N.jsxs)(E,{children:[(0,N.jsx)(j,{to:e.link,ariaCurrentValue:`location`,onPress:l,children:(0,N.jsx)(E,{ref:o,style:[P.horizontalLink,r&&w.fadeAndSlideInFromRight.enter],children:(0,N.jsxs)(x,{color:_.gray[800],style:[P.horizontalLinkText,n&&P.activeHorizontalLinkText],children:[(0,N.jsx)(ae,{style:i&&!n?P.horizontalLinkTextHovered:void 0,children:e.label}),e.siblings==null?null:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(C,{width:4}),(0,N.jsx)(u,{name:`chevron-down-filled`,color:_.gray[500],size:16})]})]})})}),(0,N.jsx)(E,{style:P.dropdownContainer,children:(0,N.jsx)(k,{...w.fadeAndSlideInFromBottom,children:s?(0,N.jsx)(de,{autoFocus:!0,focusLock:!0,returnFocus:!0,onClickOutside:()=>c(null),onEscapeKey:()=>c(null),children:(0,N.jsx)(H,{siblings:s,isLast:n,onPress:()=>c(null)})}):null})})]})]})},W=({crumbs:e,onHoverStart:t,onHoverEnd:n,onLinkFocus:r,onLinkBlur:i,onLinkPress:a})=>{let o=(0,M.useRef)(null);return T(o,{onHoverStart:t,onHoverEnd:n}),(0,N.jsx)(E,{style:P.dropdown,ref:o,children:e.map(({id:e,crumb:t})=>(0,N.jsx)(j,{to:t.link,onFocus:r,onBlur:i,onPress:a,ariaCurrentValue:`location`,children:({hovered:e})=>(0,N.jsx)(E,{style:P.dropdownLink,children:(0,N.jsx)(x,{style:[P.dropdownLinkText,e&&P.dropdownLinkTextHovered],children:t.label})})},e))})},G=new Set([`ForcedOpen`,`OpenFromFocus`]),K=new Set([`Open`,`ForcedOpen`,`OpenFromFocus`]),q=new Set([`ForcedOpen`]),Ce=({crumbs:e})=>{let[t,n]=(0,M.useReducer)((e,t)=>o([t,e]).returnType().with([`ForceToggle`,`Closed`],[`ForceToggle`,`Open`],[`ForceToggle`,`ForcedClosed`],()=>`ForcedOpen`).with([`ForceToggle`,`OpenFromFocus`],[`ForceToggle`,`ForcedOpen`],()=>`ForcedClosed`).with([`ForceClose`,c._],()=>`ForcedClosed`).with([`FocusHandle`,`ForcedClosed`],()=>`Closed`).with([`Open`,`ForcedOpen`],[`FocusHandle`,`ForcedOpen`],[`Close`,`ForcedOpen`],()=>`ForcedOpen`).with([`Open`,c._],()=>`Open`).with([`FocusHandle`,c._],()=>`OpenFromFocus`).with([`Close`,c._],()=>`Closed`).exhaustive(),`Closed`),r=(0,M.useRef)(void 0),i=(0,M.useRef)(null),s=(0,M.useRef)(null),{onHandleFocus:l,onLinkFocus:u,onAnyBlur:d,onHoverStart:f,onHoverEnd:p,onPress:m,onPressOutside:h,onEscapeKey:g}=(0,M.useMemo)(()=>({onHandleFocus:e=>{if(oe(s.current))return;let t=s.current,i=e;t.contains(i.relatedTarget)||(a(r.current)&&clearTimeout(r.current),n(`FocusHandle`))},onLinkFocus:()=>{a(r.current)&&clearTimeout(r.current),n(`Open`)},onAnyBlur:()=>{a(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{n(`Close`)},300)},onHoverStart:()=>{a(r.current)&&clearTimeout(r.current),n(`Open`)},onHoverEnd:()=>{a(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{n(`Close`)},300)},onPress:()=>{a(r.current)&&clearTimeout(r.current),n(`ForceToggle`)},onPressOutside:e=>{a(i.current)&&i.current.contains(e.target)||(a(r.current)&&clearTimeout(r.current),n(`ForceClose`),r.current=window.setTimeout(()=>{n(`Close`)},300))},onEscapeKey:()=>{a(r.current)&&clearTimeout(r.current),n(`ForceClose`),r.current=window.setTimeout(()=>{n(`Close`)},300)}}),[]);(0,M.useEffect)(()=>()=>{a(r.current)&&clearTimeout(r.current)},[]);let _=K.has(t),v=G.has(t),y=q.has(t);return T(i,{onHoverStart:f,onHoverEnd:p}),(0,N.jsxs)(te,{direction:`row`,alignItems:`center`,children:[V,(0,N.jsxs)(E,{ref:s,children:[(0,N.jsx)(ee,{ref:i,style:({pressed:e})=>[P.item,e&&P.itemPressed,t===`ForcedOpen`&&P.itemForcedOpen],tabIndex:0,onFocus:l,onBlur:d,onPress:m,children:(0,N.jsx)(E,{style:P.horizontalLink,children:(0,N.jsx)(x,{style:[P.horizontalLinkText,P.activeHorizontalLinkText],children:`…`})})}),(0,N.jsx)(k,{...w.fadeAndSlideInFromBottom,children:_?(0,N.jsx)(de,{autoFocus:v,focusLock:y,returnFocus:y,onClickOutside:h,onEscapeKey:y?g:void 0,children:(0,N.jsx)(W,{crumbs:e,onHoverStart:f,onHoverEnd:p,onLinkFocus:u,onLinkBlur:d,onLinkPress:g})}):null})]})]})},we=e=>e.length<=3?{start:e,collapsed:[],end:[]}:{start:e.slice(0,1),collapsed:e.slice(1,-2),end:e.slice(-2)},J=()=>{let e=z(),t=(0,M.useMemo)(()=>e.filter(e=>a(e.crumb)),[e]),n=fe((0,M.useMemo)(()=>new Set(t.map(e=>e.id)),[t])),{start:r,collapsed:i,end:o}=(0,M.useMemo)(()=>we(t.map(({id:e,crumb:n,isRootCrumb:r},i)=>({id:e,crumb:n,isFirst:i===0,isLast:i===t.length-1,isRootCrumb:r}))),[t]);return(0,N.jsxs)(E,{role:`navigation`,style:P.container,children:[r.map(({id:e,crumb:t,isFirst:r,isLast:i,isRootCrumb:a})=>(0,N.jsx)(U,{crumb:t,isFirstItem:r,isLastItem:i,shouldAnimate:!n.has(e)&&!a},e)),i.length>0?(0,N.jsx)(Ce,{crumbs:i}):null,o.map(({id:e,crumb:t,isLast:r,isRootCrumb:i})=>(0,N.jsx)(U,{crumb:t,isLastItem:r,shouldAnimate:!n.has(e)&&!i},e))]})},R.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbsRoot`,props:{rootLevelCrumbs:{required:!1,tsType:{name:`unknown`},description:``,defaultValue:{value:`[]`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},J.__docgenInfo={description:``,methods:[],displayName:`Breadcrumbs`}})),Y,X,Ee,Z,De,Q,$;t((()=>{Y=e(n()),m(),Te(),se(),xe(),he(),g(),ce(),X=l(),Ee={title:`Interactivity/Breadcrumbs`,component:R},Z=()=>(0,X.jsxs)(le,{title:`Breadcrumbs`,children:[(0,X.jsx)(O,{title:`With 1 element`,children:(0,X.jsx)(R,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`}],children:(0,X.jsx)(J,{})})}),(0,X.jsx)(O,{title:`With 2 elements`,children:(0,X.jsx)(R,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`},{label:`SEPA Credit Transfers`,link:`/simulator/sct`}],children:(0,X.jsx)(J,{})})}),(0,X.jsx)(O,{title:`With siblings`,children:(0,X.jsx)(R,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`},{label:`SEPA Credit Transfers`,link:`/simulator/sct`,siblings:[{label:`SEPA Credit Transfers`,url:`/simulator/sct`,isMatching:!0},{label:`SEPA Direct Debits`,url:`/simulator/sdd`,isMatching:!1},{label:`Cards`,url:`/simulator/cards`,isMatching:!1},{label:`Apple Pay/Google Pay`,url:`/simulator/apple-pay-google-pay`,isMatching:!1},{label:`Account holders`,url:`/simulator/account-holders`,isMatching:!1},{label:`Merchant acquiring`,url:`/simulator/merchant-acquiring`,isMatching:!1}]}],children:(0,X.jsx)(J,{})})})]}),De=({crumb:e})=>(B(e),null),Q=()=>{let[e,t]=(0,Y.useState)(``),[n,r]=(0,Y.useState)([]);return(0,X.jsxs)(le,{title:`Interactive`,description:`You can add/remove crumbs to see breadcrumbs animations during navigation in apps`,children:[(0,X.jsx)(te,{direction:`row`,children:(0,X.jsx)(Se,{label:`New crumb label`,actions:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(C,{width:8}),(0,X.jsx)(D,{size:`small`,color:`positive`,onPress:()=>{let n={label:e,link:e};r(e=>[...e,n]),t(``)},disabled:!e,children:`Add crumb`}),(0,X.jsx)(C,{width:8}),(0,X.jsx)(D,{size:`small`,color:`gray`,onPress:()=>{let n={label:e,url:e,isMatching:!1};r(e=>{let t=e[e.length-1];if(!t)return e;let r=t?.siblings??[],i={...t,siblings:[...r,n]};return[...e.slice(0,-1),i]}),t(``)},disabled:!e||n.length===0,children:`Add sibling`}),(0,X.jsx)(C,{width:8}),(0,X.jsx)(D,{size:`small`,color:`negative`,onPress:()=>{r(e=>e.slice(0,-1))},disabled:n.length===0,children:`Remove last crumb`})]}),render:n=>(0,X.jsx)(ge,{id:n,value:e,onChange:e=>t(e.currentTarget.value)})})}),(0,X.jsx)(C,{height:16}),(0,X.jsxs)(R,{children:[n.map(e=>(0,X.jsx)(De,{crumb:e})),(0,X.jsx)(J,{})]})]})},Z.__docgenInfo={description:``,methods:[],displayName:`Variations`},Q.__docgenInfo={description:``,methods:[],displayName:`Interactive`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$=[`Variations`,`Interactive`]}))();export{Q as Interactive,Z as Variations,$ as __namedExportsOrder,Ee as default};
//# sourceMappingURL=Breadcrumbs.stories-BfsRj9kq.js.map