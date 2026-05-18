import{c as e,i as t}from"./preload-helper-BnfVW-Vi.js";import{o as n}from"./iframe-Bq2x3Iai.js";import{F as r,H as i,L as a,M as o,N as s,P as c,St as l,U as u,V as d,_ as f,_t as ee,bt as p,dt as m,ft as h,g,h as _,ht as v,i as y,it as b,mt as x,nt as S,o as C,ot as te,pt as w,r as T,s as ne,st as re,tt as E,v as D,yt as ie,z as ae}from"./ScrollView-DcIByLZz.js";import{r as oe,t as O}from"./LakeButton-CpBoi28m.js";import{n as k,r as se,t as ce}from"./_StoriesComponents-BSHgV9ow.js";import{n as le,t as ue}from"./FocusTrap-Dx8tKzzl.js";import{i as de,n as fe,r as pe,t as me}from"./TransitionView-Dr9jZ3hV.js";import{n as he,t as ge}from"./LakeTextInput-BE3tjb_4.js";import{n as _e,t as ve}from"./function-CvLsLsgT.js";import{n as A,t as ye}from"./dist-T5jD_UdS.js";import{n as be,t as j}from"./Link-BctGcN3E.js";import{n as xe,t as Se}from"./LakeLabel-CJQky7Gq.js";var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,Ce,we,J,Te=t((()=>{M=e(n()),v(),s(),ye(),re(),f(),pe(),ve(),r(),g(),le(),i(),ne(),be(),y(),fe(),N=u(),P=l.create({container:{flexDirection:`row`,alignItems:`center`,zIndex:10,transform:`translateZ(0px)`},item:{flexDirection:`row`,alignItems:`center`,borderRadius:m[6],transitionProperty:`opacity`,transitionDuration:`150ms`},itemPressed:{opacity:.2},itemForcedOpen:{backgroundColor:b.gray[50]},chevron:{padding:w[8]},horizontalLink:{paddingVertical:w[8]},horizontalLinkText:{paddingHorizontal:w[8],alignItems:`center`,display:`inline-flex`},horizontalLinkTextHovered:{color:b.gray[900],boxShadow:`0 1px currentColor`},activeHorizontalLinkText:{color:b.gray[800],backgroundColor:te,borderRadius:m[4],boxShadow:`none`},dropdown:{position:`absolute`,left:`50%`,transform:`translateX(-50%)`,top:`100%`,backgroundColor:S.accented,borderRadius:m[8],boxShadow:h.modal,paddingVertical:w[8]},siblingsDropdown:{position:`absolute`,left:`50%`,transform:`translateX(-50%)`,top:`100%`,backgroundColor:S.accented,borderRadius:m[8],boxShadow:h.modal,paddingVertical:w[8],alignItems:`stretch`},dropdownLink:{paddingHorizontal:w[16],paddingVertical:w[8],flexDirection:`row`,alignItems:`center`},dropdownLinkText:{...x.regular,whiteSpace:`nowrap`},dropdownLinkTextHovered:{color:b.gray[500]},dropdownLinkActive:{backgroundColor:b.gray[50]},dropdownContainer:{position:`absolute`,left:`50%`,top:`100%`},dropdownLinkContainer:{display:`flex`,flexDirection:`column`,alignItems:`stretch`},tick:{position:`absolute`,top:`50%`,right:w[16],transform:`translateY(-50%)`}}),F=[],I=[],L=(0,M.createContext)([F,F,_e,{current:-1}]),R=({rootLevelCrumbs:e=I,children:t})=>{let[n,r]=(0,M.useState)(F),i=(0,M.useRef)(!0),a=(0,M.useRef)(-1),[o,s]=(0,M.useState)(()=>e.map(e=>({id:A(),crumb:e,isRootCrumb:!0})));(0,M.useEffect)(()=>{if(i.current){i.current=!1;return}s(e.map(e=>({id:A(),crumb:e,isRootCrumb:!0})))},[e]);let c=(0,M.useMemo)(()=>[...n].sort((e,t)=>(t.index??-1)>(e.index??-1)?-1:1),[n]),l=(0,M.useMemo)(()=>[o,c,r,a],[o,c,r,a]);return(0,N.jsx)(L.Provider,{value:l,children:t})},z=()=>{let[e,t]=(0,M.useContext)(L);return(0,M.useMemo)(()=>[...e,...t],[e,t])},B=e=>{let[,,t,n]=(0,M.useContext)(L),[r]=(0,M.useState)(()=>A()),i=(0,M.useRef)(e),[o]=(0,M.useState)(()=>++n.current);(0,M.useEffect)(()=>(t(e=>e.concat([{id:r,crumb:i.current,isRootCrumb:!1,index:o}])),()=>{t(e=>e.filter(e=>e.id!==r))}),[r,t,o]),(0,M.useEffect)(()=>{t(t=>{let n=t.find(e=>e.id===r);return a(n)&&n.crumb!==e?t.map(t=>t.id===r?{id:r,crumb:e,isRootCrumb:n.isRootCrumb,index:o}:t):t})},[r,e,t,o])},V=(0,N.jsx)(p,{style:P.chevron,children:(0,N.jsx)(d,{name:`chevron-right-filled`,color:b.gray[500],size:16})}),H=({siblings:e,isLast:t,onPress:n})=>(0,N.jsx)(p,{style:P.siblingsDropdown,children:e.map(({url:e,label:r,isMatching:i})=>(0,N.jsx)(j,{to:e,ariaCurrentValue:`location`,onPress:e=>{i&&t&&e.preventDefault(),n()},style:P.dropdownLinkContainer,children:({hovered:e})=>(0,N.jsxs)(p,{style:[P.dropdownLink,i&&P.dropdownLinkActive],children:[(0,N.jsx)(C,{style:[P.dropdownLinkText,e&&P.dropdownLinkTextHovered],children:r}),i&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(T,{width:32}),(0,N.jsx)(d,{color:b.positive[500],name:`checkmark-filled`,size:14,style:P.tick})]})]})},e))}),U=({crumb:e,isFirstItem:t=!1,isLastItem:n=!1,shouldAnimate:r})=>{let[i,a]=(0,M.useState)(()=>!1),o=(0,M.useRef)(null),[s,c]=(0,M.useState)(null);D(o,{onHoverStart:()=>a(!0),onHoverEnd:()=>a(!1)});let l=(0,M.useCallback)(t=>{e.siblings!=null&&(t.preventDefault(),c(e.siblings))},[e.siblings]);return(0,N.jsxs)(p,{style:[P.item,r?E.fadeAndSlideInFromRight.enter:null],children:[t?null:V,(0,N.jsxs)(p,{children:[(0,N.jsx)(j,{to:e.link,ariaCurrentValue:`location`,onPress:l,children:(0,N.jsx)(p,{ref:o,style:[P.horizontalLink,r&&E.fadeAndSlideInFromRight.enter],children:(0,N.jsxs)(C,{color:b.gray[800],style:[P.horizontalLinkText,n&&P.activeHorizontalLinkText],children:[(0,N.jsx)(ie,{style:i&&!n?P.horizontalLinkTextHovered:void 0,children:e.label}),e.siblings==null?null:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(T,{width:4}),(0,N.jsx)(d,{name:`chevron-down-filled`,color:b.gray[500],size:16})]})]})})}),(0,N.jsx)(p,{style:P.dropdownContainer,children:(0,N.jsx)(me,{...E.fadeAndSlideInFromBottom,children:s?(0,N.jsx)(ue,{autoFocus:!0,focusLock:!0,returnFocus:!0,onClickOutside:()=>c(null),onEscapeKey:()=>c(null),children:(0,N.jsx)(H,{siblings:s,isLast:n,onPress:()=>c(null)})}):null})})]})]})},W=({crumbs:e,onHoverStart:t,onHoverEnd:n,onLinkFocus:r,onLinkBlur:i,onLinkPress:a})=>{let o=(0,M.useRef)(null);return D(o,{onHoverStart:t,onHoverEnd:n}),(0,N.jsx)(p,{style:P.dropdown,ref:o,children:e.map(({id:e,crumb:t})=>(0,N.jsx)(j,{to:t.link,onFocus:r,onBlur:i,onPress:a,ariaCurrentValue:`location`,children:({hovered:e})=>(0,N.jsx)(p,{style:P.dropdownLink,children:(0,N.jsx)(C,{style:[P.dropdownLinkText,e&&P.dropdownLinkTextHovered],children:t.label})})},e))})},G=new Set([`ForcedOpen`,`OpenFromFocus`]),K=new Set([`Open`,`ForcedOpen`,`OpenFromFocus`]),q=new Set([`ForcedOpen`]),Ce=({crumbs:e})=>{let[t,n]=(0,M.useReducer)((e,t)=>o([t,e]).returnType().with([`ForceToggle`,`Closed`],[`ForceToggle`,`Open`],[`ForceToggle`,`ForcedClosed`],()=>`ForcedOpen`).with([`ForceToggle`,`OpenFromFocus`],[`ForceToggle`,`ForcedOpen`],()=>`ForcedClosed`).with([`ForceClose`,c._],()=>`ForcedClosed`).with([`FocusHandle`,`ForcedClosed`],()=>`Closed`).with([`Open`,`ForcedOpen`],[`FocusHandle`,`ForcedOpen`],[`Close`,`ForcedOpen`],()=>`ForcedOpen`).with([`Open`,c._],()=>`Open`).with([`FocusHandle`,c._],()=>`OpenFromFocus`).with([`Close`,c._],()=>`Closed`).exhaustive(),`Closed`),r=(0,M.useRef)(void 0),i=(0,M.useRef)(null),s=(0,M.useRef)(null),{onHandleFocus:l,onLinkFocus:u,onAnyBlur:d,onHoverStart:f,onHoverEnd:m,onPress:h,onPressOutside:g,onEscapeKey:v}=(0,M.useMemo)(()=>({onHandleFocus:e=>{if(ae(s.current))return;let t=s.current,i=e;t.contains(i.relatedTarget)||(a(r.current)&&clearTimeout(r.current),n(`FocusHandle`))},onLinkFocus:()=>{a(r.current)&&clearTimeout(r.current),n(`Open`)},onAnyBlur:()=>{a(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{n(`Close`)},300)},onHoverStart:()=>{a(r.current)&&clearTimeout(r.current),n(`Open`)},onHoverEnd:()=>{a(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{n(`Close`)},300)},onPress:()=>{a(r.current)&&clearTimeout(r.current),n(`ForceToggle`)},onPressOutside:e=>{a(i.current)&&i.current.contains(e.target)||(a(r.current)&&clearTimeout(r.current),n(`ForceClose`),r.current=window.setTimeout(()=>{n(`Close`)},300))},onEscapeKey:()=>{a(r.current)&&clearTimeout(r.current),n(`ForceClose`),r.current=window.setTimeout(()=>{n(`Close`)},300)}}),[]);(0,M.useEffect)(()=>()=>{a(r.current)&&clearTimeout(r.current)},[]);let y=K.has(t),b=G.has(t),x=q.has(t);return D(i,{onHoverStart:f,onHoverEnd:m}),(0,N.jsxs)(_,{direction:`row`,alignItems:`center`,children:[V,(0,N.jsxs)(p,{ref:s,children:[(0,N.jsx)(ee,{ref:i,style:({pressed:e})=>[P.item,e&&P.itemPressed,t===`ForcedOpen`&&P.itemForcedOpen],tabIndex:0,onFocus:l,onBlur:d,onPress:h,children:(0,N.jsx)(p,{style:P.horizontalLink,children:(0,N.jsx)(C,{style:[P.horizontalLinkText,P.activeHorizontalLinkText],children:`…`})})}),(0,N.jsx)(me,{...E.fadeAndSlideInFromBottom,children:y?(0,N.jsx)(ue,{autoFocus:b,focusLock:x,returnFocus:x,onClickOutside:g,onEscapeKey:x?v:void 0,children:(0,N.jsx)(W,{crumbs:e,onHoverStart:f,onHoverEnd:m,onLinkFocus:u,onLinkBlur:d,onLinkPress:v})}):null})]})]})},we=e=>e.length<=3?{start:e,collapsed:[],end:[]}:{start:e.slice(0,1),collapsed:e.slice(1,-2),end:e.slice(-2)},J=()=>{let e=z(),t=(0,M.useMemo)(()=>e.filter(e=>a(e.crumb)),[e]),n=de((0,M.useMemo)(()=>new Set(t.map(e=>e.id)),[t])),{start:r,collapsed:i,end:o}=(0,M.useMemo)(()=>we(t.map(({id:e,crumb:n,isRootCrumb:r},i)=>({id:e,crumb:n,isFirst:i===0,isLast:i===t.length-1,isRootCrumb:r}))),[t]);return(0,N.jsxs)(p,{role:`navigation`,style:P.container,children:[r.map(({id:e,crumb:t,isFirst:r,isLast:i,isRootCrumb:a})=>(0,N.jsx)(U,{crumb:t,isFirstItem:r,isLastItem:i,shouldAnimate:!n.has(e)&&!a},e)),i.length>0?(0,N.jsx)(Ce,{crumbs:i}):null,o.map(({id:e,crumb:t,isLast:r,isRootCrumb:i})=>(0,N.jsx)(U,{crumb:t,isLastItem:r,shouldAnimate:!n.has(e)&&!i},e))]})},R.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbsRoot`,props:{rootLevelCrumbs:{required:!1,tsType:{name:`unknown`},description:``,defaultValue:{value:`[]`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},J.__docgenInfo={description:``,methods:[],displayName:`Breadcrumbs`}})),Y,X,Ee,Z,De,Q,$;t((()=>{Y=e(n()),g(),Te(),oe(),xe(),he(),y(),se(),X=u(),Ee={title:`Interactivity/Breadcrumbs`,component:R},Z=()=>(0,X.jsxs)(ce,{title:`Breadcrumbs`,children:[(0,X.jsx)(k,{title:`With 1 element`,children:(0,X.jsx)(R,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`}],children:(0,X.jsx)(J,{})})}),(0,X.jsx)(k,{title:`With 2 elements`,children:(0,X.jsx)(R,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`},{label:`SEPA Credit Transfers`,link:`/simulator/sct`}],children:(0,X.jsx)(J,{})})}),(0,X.jsx)(k,{title:`With siblings`,children:(0,X.jsx)(R,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`},{label:`SEPA Credit Transfers`,link:`/simulator/sct`,siblings:[{label:`SEPA Credit Transfers`,url:`/simulator/sct`,isMatching:!0},{label:`SEPA Direct Debits`,url:`/simulator/sdd`,isMatching:!1},{label:`Cards`,url:`/simulator/cards`,isMatching:!1},{label:`Apple Pay/Google Pay`,url:`/simulator/apple-pay-google-pay`,isMatching:!1},{label:`Account holders`,url:`/simulator/account-holders`,isMatching:!1},{label:`Merchant acquiring`,url:`/simulator/merchant-acquiring`,isMatching:!1}]}],children:(0,X.jsx)(J,{})})})]}),De=({crumb:e})=>(B(e),null),Q=()=>{let[e,t]=(0,Y.useState)(``),[n,r]=(0,Y.useState)([]);return(0,X.jsxs)(ce,{title:`Interactive`,description:`You can add/remove crumbs to see breadcrumbs animations during navigation in apps`,children:[(0,X.jsx)(_,{direction:`row`,children:(0,X.jsx)(Se,{label:`New crumb label`,actions:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(T,{width:8}),(0,X.jsx)(O,{size:`small`,color:`positive`,onPress:()=>{let n={label:e,link:e};r(e=>[...e,n]),t(``)},disabled:!e,children:`Add crumb`}),(0,X.jsx)(T,{width:8}),(0,X.jsx)(O,{size:`small`,color:`gray`,onPress:()=>{let n={label:e,url:e,isMatching:!1};r(e=>{let t=e[e.length-1];if(!t)return e;let r=t?.siblings??[],i={...t,siblings:[...r,n]};return[...e.slice(0,-1),i]}),t(``)},disabled:!e||n.length===0,children:`Add sibling`}),(0,X.jsx)(T,{width:8}),(0,X.jsx)(O,{size:`small`,color:`negative`,onPress:()=>{r(e=>e.slice(0,-1))},disabled:n.length===0,children:`Remove last crumb`})]}),render:n=>(0,X.jsx)(ge,{id:n,value:e,onChange:e=>t(e.currentTarget.value)})})}),(0,X.jsx)(T,{height:16}),(0,X.jsxs)(R,{children:[n.map(e=>(0,X.jsx)(De,{crumb:e})),(0,X.jsx)(J,{})]})]})},Z.__docgenInfo={description:``,methods:[],displayName:`Variations`},Q.__docgenInfo={description:``,methods:[],displayName:`Interactive`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Breadcrumbs.stories-CVdvn86W.js.map