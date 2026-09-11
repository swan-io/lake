import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-CtGZpw-r.js";import{$ as r,Bt as i,Ct as a,Et as o,Ft as s,G as c,J as l,K as u,Nt as d,Q as f,St as p,Tt as ee,U as te,W as m,X as ne,_ as h,_t as g,et as _,ft as v,g as y,h as re,ht as b,i as x,kt as ie,o as S,pt as C,r as w,s as ae,v as T,vt as oe,wt as E}from"./ScrollView-zy8UEe-Q.js";import{r as se,t as D}from"./LakeButton-lVs-Lb3-.js";import{n as O,r as ce,t as le}from"./_StoriesComponents-DKtj2A2D.js";import{n as ue,t as de}from"./function-C7wDeVNA.js";import{n as fe,t as k}from"./FocusTrap-D4A-ydmm.js";import{i as pe,n as me,r as he,t as A}from"./TransitionView-ClkkfPyZ.js";import{n as ge,t as _e}from"./LakeTextInput-Dj2SqERW.js";import{r as j,t as ve}from"./dist-DyNf1Ant.js";import{n as ye,t as M}from"./Link-B3UUmjIL.js";import{n as be,t as xe}from"./LakeLabel-Cca9smH1.js";var N,P,F,I,L,R,z,B,V,H,U,W,G,K,Se,q,Ce,we,J,Te=t((()=>{N=e(n()),o(),m(),ve(),oe(),h(),he(),de(),u(),y(),fe(),r(),ae(),ye(),x(),me(),P=_(),F=i.create({container:{flexDirection:`row`,alignItems:`center`,zIndex:10,transform:`translateZ(0px)`},item:{flexDirection:`row`,alignItems:`center`,borderRadius:p[6],transitionProperty:`opacity`,transitionDuration:`150ms`},itemPressed:{opacity:.2},itemForcedOpen:{backgroundColor:b.gray[50]},chevron:{padding:E[8]},horizontalLink:{paddingVertical:E[8]},horizontalLinkText:{paddingHorizontal:E[8],alignItems:`center`,display:`inline-flex`},horizontalLinkTextHovered:{color:b.gray[900],boxShadow:`0 1px currentColor`},activeHorizontalLinkText:{color:b.gray[800],backgroundColor:g,borderRadius:p[4],boxShadow:`none`},dropdown:{position:`absolute`,left:`50%`,transform:`translateX(-50%)`,top:`100%`,backgroundColor:C.accented,borderRadius:p[8],boxShadow:a.modal,paddingVertical:E[8]},siblingsDropdown:{position:`absolute`,left:`50%`,transform:`translateX(-50%)`,top:`100%`,backgroundColor:C.accented,borderRadius:p[8],boxShadow:a.modal,paddingVertical:E[8],alignItems:`stretch`},dropdownLink:{paddingHorizontal:E[16],paddingVertical:E[8],flexDirection:`row`,alignItems:`center`},dropdownLinkText:{...ee.regular,whiteSpace:`nowrap`},dropdownLinkTextHovered:{color:b.gray[500]},dropdownLinkActive:{backgroundColor:b.gray[50]},dropdownContainer:{position:`absolute`,left:`50%`,top:`100%`},dropdownLinkContainer:{display:`flex`,flexDirection:`column`,alignItems:`stretch`},tick:{position:`absolute`,top:`50%`,right:E[16],transform:`translateY(-50%)`}}),I=[],L=[],R=(0,N.createContext)([I,I,ue,{current:-1}]),z=({rootLevelCrumbs:e=L,children:t})=>{let[n,r]=(0,N.useState)(I),i=(0,N.useRef)(!0),a=(0,N.useRef)(-1),[o,s]=(0,N.useState)(()=>e.map(e=>({id:j(),crumb:e,isRootCrumb:!0})));(0,N.useEffect)(()=>{if(i.current){i.current=!1;return}s(e.map(e=>({id:j(),crumb:e,isRootCrumb:!0})))},[e]);let c=(0,N.useMemo)(()=>n.toSorted((e,t)=>(t.index??-1)>(e.index??-1)?-1:1),[n]),l=(0,N.useMemo)(()=>[o,c,r,a],[o,c]);return(0,P.jsx)(R.Provider,{value:l,children:t})},B=()=>{let[e,t]=(0,N.useContext)(R);return(0,N.useMemo)(()=>[...e,...t],[e,t])},V=e=>{let[,,t,n]=(0,N.useContext)(R),r=(0,N.useId)(),i=(0,N.useRef)(e),[a]=(0,N.useState)(()=>++n.current);(0,N.useEffect)(()=>(t(e=>e.concat([{id:r,crumb:i.current,isRootCrumb:!1,index:a}])),()=>{t(e=>e.filter(e=>e.id!==r))}),[r,t,a]),(0,N.useEffect)(()=>{t(t=>{let n=t.find(e=>e.id===r);return l(n)&&n.crumb!==e?t.map(t=>t.id===r?{id:r,crumb:e,isRootCrumb:n.isRootCrumb,index:a}:t):t})},[r,e,t,a])},H=(0,P.jsx)(s,{style:F.chevron,children:(0,P.jsx)(f,{name:`chevron-right-filled`,color:b.gray[500],size:16})}),U=({siblings:e,isLast:t,onPress:n})=>(0,P.jsx)(s,{style:F.siblingsDropdown,children:e.map(({url:e,label:r,isMatching:i})=>(0,P.jsx)(M,{to:e,ariaCurrentValue:`location`,onPress:e=>{i&&t&&e.preventDefault(),n()},style:F.dropdownLinkContainer,children:({hovered:e})=>(0,P.jsxs)(s,{style:[F.dropdownLink,i&&F.dropdownLinkActive],children:[(0,P.jsx)(S,{style:[F.dropdownLinkText,e&&F.dropdownLinkTextHovered],children:r}),i&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{width:32}),(0,P.jsx)(f,{color:b.positive[500],name:`checkmark-filled`,size:14,style:F.tick})]})]})},e))}),W=({crumb:e,isFirstItem:t=!1,isLastItem:n=!1,shouldAnimate:r})=>{let[i,a]=(0,N.useState)(()=>!1),o=(0,N.useRef)(null),[c,l]=(0,N.useState)(null);T(o,{onHoverStart:()=>a(!0),onHoverEnd:()=>a(!1)});let u=(0,N.useCallback)(t=>{e.siblings!=null&&(t.preventDefault(),l(e.siblings))},[e.siblings]);return(0,P.jsxs)(s,{style:[F.item,r?v.fadeAndSlideInFromRight.enter:null],children:[t?null:H,(0,P.jsxs)(s,{children:[(0,P.jsx)(M,{to:e.link,ariaCurrentValue:`location`,onPress:u,children:(0,P.jsx)(s,{ref:o,style:[F.horizontalLink,r&&v.fadeAndSlideInFromRight.enter],children:(0,P.jsxs)(S,{color:b.gray[800],style:[F.horizontalLinkText,n&&F.activeHorizontalLinkText],children:[(0,P.jsx)(d,{style:i&&!n?F.horizontalLinkTextHovered:void 0,children:e.label}),e.siblings==null?null:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{width:4}),(0,P.jsx)(f,{name:`chevron-down-filled`,color:b.gray[500],size:16})]})]})})}),(0,P.jsx)(s,{style:F.dropdownContainer,children:(0,P.jsx)(A,{...v.fadeAndSlideInFromBottom,children:c?(0,P.jsx)(k,{autoFocus:!0,focusLock:!0,returnFocus:!0,onClickOutside:()=>l(null),onEscapeKey:()=>l(null),children:(0,P.jsx)(U,{siblings:c,isLast:n,onPress:()=>l(null)})}):null})})]})]})},G=({crumbs:e,onHoverStart:t,onHoverEnd:n,onLinkFocus:r,onLinkBlur:i,onLinkPress:a})=>{let o=(0,N.useRef)(null);return T(o,{onHoverStart:t,onHoverEnd:n}),(0,P.jsx)(s,{style:F.dropdown,ref:o,children:e.map(({id:e,crumb:t})=>(0,P.jsx)(M,{to:t.link,onFocus:r,onBlur:i,onPress:a,ariaCurrentValue:`location`,children:({hovered:e})=>(0,P.jsx)(s,{style:F.dropdownLink,children:(0,P.jsx)(S,{style:[F.dropdownLinkText,e&&F.dropdownLinkTextHovered],children:t.label})})},e))})},K=new Set([`ForcedOpen`,`OpenFromFocus`]),Se=new Set([`Open`,`ForcedOpen`,`OpenFromFocus`]),q=new Set([`ForcedOpen`]),Ce=({crumbs:e})=>{let[t,n]=(0,N.useReducer)((e,t)=>te([t,e]).returnType().with([`ForceToggle`,`Closed`],[`ForceToggle`,`Open`],[`ForceToggle`,`ForcedClosed`],()=>`ForcedOpen`).with([`ForceToggle`,`OpenFromFocus`],[`ForceToggle`,`ForcedOpen`],()=>`ForcedClosed`).with([`ForceClose`,c._],()=>`ForcedClosed`).with([`FocusHandle`,`ForcedClosed`],()=>`Closed`).with([`Open`,`ForcedOpen`],[`FocusHandle`,`ForcedOpen`],[`Close`,`ForcedOpen`],()=>`ForcedOpen`).with([`Open`,c._],()=>`Open`).with([`FocusHandle`,c._],()=>`OpenFromFocus`).with([`Close`,c._],()=>`Closed`).exhaustive(),`Closed`),r=(0,N.useRef)(void 0),i=(0,N.useRef)(null),a=(0,N.useRef)(null),{onHandleFocus:o,onLinkFocus:u,onAnyBlur:d,onHoverStart:f,onHoverEnd:p,onPress:ee,onPressOutside:m,onEscapeKey:h}=(0,N.useMemo)(()=>({onHandleFocus:e=>{if(ne(a.current))return;let t=a.current,i=e;t.contains(i.relatedTarget)||(l(r.current)&&clearTimeout(r.current),n(`FocusHandle`))},onLinkFocus:()=>{l(r.current)&&clearTimeout(r.current),n(`Open`)},onAnyBlur:()=>{l(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{n(`Close`)},300)},onHoverStart:()=>{l(r.current)&&clearTimeout(r.current),n(`Open`)},onHoverEnd:()=>{l(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{n(`Close`)},300)},onPress:()=>{l(r.current)&&clearTimeout(r.current),n(`ForceToggle`)},onPressOutside:e=>{l(i.current)&&i.current.contains(e.target)||(l(r.current)&&clearTimeout(r.current),n(`ForceClose`),r.current=window.setTimeout(()=>{n(`Close`)},300))},onEscapeKey:()=>{l(r.current)&&clearTimeout(r.current),n(`ForceClose`),r.current=window.setTimeout(()=>{n(`Close`)},300)}}),[]);(0,N.useEffect)(()=>()=>{l(r.current)&&clearTimeout(r.current)},[]);let g=Se.has(t),_=K.has(t),y=q.has(t);return T(i,{onHoverStart:f,onHoverEnd:p}),(0,P.jsxs)(re,{direction:`row`,alignItems:`center`,children:[H,(0,P.jsxs)(s,{ref:a,children:[(0,P.jsx)(ie,{ref:i,style:({pressed:e})=>[F.item,e&&F.itemPressed,t===`ForcedOpen`&&F.itemForcedOpen],tabIndex:0,onFocus:o,onBlur:d,onPress:ee,children:(0,P.jsx)(s,{style:F.horizontalLink,children:(0,P.jsx)(S,{style:[F.horizontalLinkText,F.activeHorizontalLinkText],children:`…`})})}),(0,P.jsx)(A,{...v.fadeAndSlideInFromBottom,children:g?(0,P.jsx)(k,{autoFocus:_,focusLock:y,returnFocus:y,onClickOutside:m,onEscapeKey:y?h:void 0,children:(0,P.jsx)(G,{crumbs:e,onHoverStart:f,onHoverEnd:p,onLinkFocus:u,onLinkBlur:d,onLinkPress:h})}):null})]})]})},we=e=>e.length<=3?{start:e,collapsed:[],end:[]}:{start:e.slice(0,1),collapsed:e.slice(1,-2),end:e.slice(-2)},J=()=>{let e=B(),t=(0,N.useMemo)(()=>e.filter(e=>l(e.crumb)),[e]),n=pe((0,N.useMemo)(()=>new Set(t.map(e=>e.id)),[t])),{start:r,collapsed:i,end:a}=(0,N.useMemo)(()=>we(t.map(({id:e,crumb:n,isRootCrumb:r},i)=>({id:e,crumb:n,isFirst:i===0,isLast:i===t.length-1,isRootCrumb:r}))),[t]);return(0,P.jsxs)(s,{role:`navigation`,style:F.container,children:[r.map(({id:e,crumb:t,isFirst:r,isLast:i,isRootCrumb:a})=>(0,P.jsx)(W,{crumb:t,isFirstItem:r,isLastItem:i,shouldAnimate:!n.has(e)&&!a},e)),i.length>0?(0,P.jsx)(Ce,{crumbs:i}):null,a.map(({id:e,crumb:t,isLast:r,isRootCrumb:i})=>(0,P.jsx)(W,{crumb:t,isLastItem:r,shouldAnimate:!n.has(e)&&!i},e))]})},z.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbsRoot`,props:{rootLevelCrumbs:{required:!1,tsType:{name:`unknown`},description:``,defaultValue:{value:`[]`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},J.__docgenInfo={description:``,methods:[],displayName:`Breadcrumbs`}})),Y,X,Ee,Z,De,Q,$;t((()=>{Y=e(n()),y(),Te(),se(),be(),ge(),x(),ce(),X=_(),Ee={title:`Interactivity/Breadcrumbs`,component:z},Z=()=>(0,X.jsxs)(le,{title:`Breadcrumbs`,children:[(0,X.jsx)(O,{title:`With 1 element`,children:(0,X.jsx)(z,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`}],children:(0,X.jsx)(J,{})})}),(0,X.jsx)(O,{title:`With 2 elements`,children:(0,X.jsx)(z,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`},{label:`SEPA Credit Transfers`,link:`/simulator/sct`}],children:(0,X.jsx)(J,{})})}),(0,X.jsx)(O,{title:`With siblings`,children:(0,X.jsx)(z,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`},{label:`SEPA Credit Transfers`,link:`/simulator/sct`,siblings:[{label:`SEPA Credit Transfers`,url:`/simulator/sct`,isMatching:!0},{label:`SEPA Direct Debits`,url:`/simulator/sdd`,isMatching:!1},{label:`Cards`,url:`/simulator/cards`,isMatching:!1},{label:`Apple Pay/Google Pay`,url:`/simulator/apple-pay-google-pay`,isMatching:!1},{label:`Account holders`,url:`/simulator/account-holders`,isMatching:!1},{label:`Merchant acquiring`,url:`/simulator/merchant-acquiring`,isMatching:!1}]}],children:(0,X.jsx)(J,{})})})]}),De=({crumb:e})=>(V(e),null),Q=()=>{let[e,t]=(0,Y.useState)(``),[n,r]=(0,Y.useState)([]);return(0,X.jsxs)(le,{title:`Interactive`,description:`You can add/remove crumbs to see breadcrumbs animations during navigation in apps`,children:[(0,X.jsx)(re,{direction:`row`,children:(0,X.jsx)(xe,{label:`New crumb label`,actions:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(w,{width:8}),(0,X.jsx)(D,{size:`small`,color:`positive`,onPress:()=>{let n={label:e,link:e};r(e=>[...e,n]),t(``)},disabled:!e,children:`Add crumb`}),(0,X.jsx)(w,{width:8}),(0,X.jsx)(D,{size:`small`,color:`gray`,onPress:()=>{let n={label:e,url:e,isMatching:!1};r(e=>{let t=e[e.length-1];if(!t)return e;let r=t?.siblings??[],i={...t,siblings:[...r,n]};return[...e.slice(0,-1),i]}),t(``)},disabled:!e||n.length===0,children:`Add sibling`}),(0,X.jsx)(w,{width:8}),(0,X.jsx)(D,{size:`small`,color:`negative`,onPress:()=>{r(e=>e.slice(0,-1))},disabled:n.length===0,children:`Remove last crumb`})]}),render:n=>(0,X.jsx)(_e,{id:n,value:e,onChange:e=>t(e.currentTarget.value)})})}),(0,X.jsx)(w,{height:16}),(0,X.jsxs)(z,{children:[n.map(e=>(0,X.jsx)(De,{crumb:e})),(0,X.jsx)(J,{})]})]})},Z.__docgenInfo={description:``,methods:[],displayName:`Variations`},Q.__docgenInfo={description:``,methods:[],displayName:`Interactive`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Breadcrumbs.stories-DipJg-LF.js.map