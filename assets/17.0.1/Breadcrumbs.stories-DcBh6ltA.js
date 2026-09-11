import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-BEfGCJNn.js";import{$ as r,Ct as i,G as a,H as o,Mt as s,Ot as c,Pt as l,Q as u,St as d,Tt as f,U as p,W as m,Y as ee,Z as h,_ as g,_t as _,dt as v,ft as y,g as b,gt as x,h as S,i as C,mt as w,o as T,q as E,r as D,s as te,v as O,wt as ne,xt as k,zt as re}from"./ScrollView-Bti_909s.js";import{r as ie,t as A}from"./LakeButton-D1ZZ0wPa.js";import{n as j,r as ae,t as oe}from"./_StoriesComponents-zlbAi_Kf.js";import{n as se,t as ce}from"./function-DtMgGsDc.js";import{n as le,t as ue}from"./FocusTrap-DQwvBTmy.js";import{i as de,n as fe,r as pe,t as M}from"./TransitionView-DZNtmfmf.js";import{n as me,t as he}from"./LakeTextInput-4oYkv4I4.js";import{r as N,t as ge}from"./dist-DyNf1Ant.js";import{n as _e,t as P}from"./Link-CvQb1y1N.js";import{n as ve,t as ye}from"./LakeLabel-ByuFRcyc.js";var F,I,L,R,z,B,V,H,U,W,G,K,be,xe,Se,q,Ce,we,J,Te=t((()=>{F=e(n()),f(),p(),ge(),_(),g(),pe(),ce(),a(),b(),le(),u(),te(),_e(),C(),fe(),I=r(),L=re.create({container:{flexDirection:`row`,alignItems:`center`,zIndex:10,transform:`translateZ(0px)`},item:{flexDirection:`row`,alignItems:`center`,borderRadius:k[6],transitionProperty:`opacity`,transitionDuration:`150ms`},itemPressed:{opacity:.2},itemForcedOpen:{backgroundColor:w.gray[50]},chevron:{padding:i[8]},horizontalLink:{paddingVertical:i[8]},horizontalLinkText:{paddingHorizontal:i[8],alignItems:`center`,display:`inline-flex`},horizontalLinkTextHovered:{color:w.gray[900],boxShadow:`0 1px currentColor`},activeHorizontalLinkText:{color:w.gray[800],backgroundColor:x,borderRadius:k[4],boxShadow:`none`},dropdown:{position:`absolute`,left:`50%`,transform:`translateX(-50%)`,top:`100%`,backgroundColor:y.accented,borderRadius:k[8],boxShadow:d.modal,paddingVertical:i[8]},siblingsDropdown:{position:`absolute`,left:`50%`,transform:`translateX(-50%)`,top:`100%`,backgroundColor:y.accented,borderRadius:k[8],boxShadow:d.modal,paddingVertical:i[8],alignItems:`stretch`},dropdownLink:{paddingHorizontal:i[16],paddingVertical:i[8],flexDirection:`row`,alignItems:`center`},dropdownLinkText:{...ne.regular,whiteSpace:`nowrap`},dropdownLinkTextHovered:{color:w.gray[500]},dropdownLinkActive:{backgroundColor:w.gray[50]},dropdownContainer:{position:`absolute`,left:`50%`,top:`100%`},dropdownLinkContainer:{display:`flex`,flexDirection:`column`,alignItems:`stretch`},tick:{position:`absolute`,top:`50%`,right:i[16],transform:`translateY(-50%)`}}),R=[],z=[],B=(0,F.createContext)([R,R,se,{current:-1}]),V=({rootLevelCrumbs:e=z,children:t})=>{let[n,r]=(0,F.useState)(R),i=(0,F.useRef)(!0),a=(0,F.useRef)(-1),[o,s]=(0,F.useState)(()=>e.map(e=>({id:N(),crumb:e,isRootCrumb:!0})));(0,F.useEffect)(()=>{if(i.current){i.current=!1;return}s(e.map(e=>({id:N(),crumb:e,isRootCrumb:!0})))},[e]);let c=(0,F.useMemo)(()=>n.toSorted((e,t)=>(t.index??-1)>(e.index??-1)?-1:1),[n]),l=(0,F.useMemo)(()=>[o,c,r,a],[o,c]);return(0,I.jsx)(B.Provider,{value:l,children:t})},H=()=>{let[e,t]=(0,F.useContext)(B);return(0,F.useMemo)(()=>[...e,...t],[e,t])},U=e=>{let[,,t,n]=(0,F.useContext)(B),r=(0,F.useId)(),i=(0,F.useRef)(e),[a]=(0,F.useState)(()=>++n.current);(0,F.useEffect)(()=>(t(e=>e.concat([{id:r,crumb:i.current,isRootCrumb:!1,index:a}])),()=>{t(e=>e.filter(e=>e.id!==r))}),[r,t,a]),(0,F.useEffect)(()=>{t(t=>{let n=t.find(e=>e.id===r);return E(n)&&n.crumb!==e?t.map(t=>t.id===r?{id:r,crumb:e,isRootCrumb:n.isRootCrumb,index:a}:t):t})},[r,e,t,a])},W=(0,I.jsx)(l,{style:L.chevron,children:(0,I.jsx)(h,{name:`chevron-right-filled`,color:w.gray[500],size:16})}),G=({siblings:e,isLast:t,onPress:n})=>(0,I.jsx)(l,{style:L.siblingsDropdown,children:e.map(({url:e,label:r,isMatching:i})=>(0,I.jsx)(P,{to:e,ariaCurrentValue:`location`,onPress:e=>{i&&t&&e.preventDefault(),n()},style:L.dropdownLinkContainer,children:({hovered:e})=>(0,I.jsxs)(l,{style:[L.dropdownLink,i&&L.dropdownLinkActive],children:[(0,I.jsx)(T,{style:[L.dropdownLinkText,e&&L.dropdownLinkTextHovered],children:r}),i&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(D,{width:32}),(0,I.jsx)(h,{color:w.positive[500],name:`checkmark-filled`,size:14,style:L.tick})]})]})},e))}),K=({crumb:e,isFirstItem:t=!1,isLastItem:n=!1,shouldAnimate:r})=>{let[i,a]=(0,F.useState)(()=>!1),o=(0,F.useRef)(null),[c,u]=(0,F.useState)(null);O(o,{onHoverStart:()=>a(!0),onHoverEnd:()=>a(!1)});let d=(0,F.useCallback)(t=>{e.siblings!=null&&(t.preventDefault(),u(e.siblings))},[e.siblings]);return(0,I.jsxs)(l,{style:[L.item,r?v.fadeAndSlideInFromRight.enter:null],children:[t?null:W,(0,I.jsxs)(l,{children:[(0,I.jsx)(P,{to:e.link,ariaCurrentValue:`location`,onPress:d,children:(0,I.jsx)(l,{ref:o,style:[L.horizontalLink,r&&v.fadeAndSlideInFromRight.enter],children:(0,I.jsxs)(T,{color:w.gray[800],style:[L.horizontalLinkText,n&&L.activeHorizontalLinkText],children:[(0,I.jsx)(s,{style:i&&!n?L.horizontalLinkTextHovered:void 0,children:e.label}),e.siblings==null?null:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(D,{width:4}),(0,I.jsx)(h,{name:`chevron-down-filled`,color:w.gray[500],size:16})]})]})})}),(0,I.jsx)(l,{style:L.dropdownContainer,children:(0,I.jsx)(M,{...v.fadeAndSlideInFromBottom,children:c?(0,I.jsx)(ue,{autoFocus:!0,focusLock:!0,returnFocus:!0,onClickOutside:()=>u(null),onEscapeKey:()=>u(null),children:(0,I.jsx)(G,{siblings:c,isLast:n,onPress:()=>u(null)})}):null})})]})]})},be=({crumbs:e,onHoverStart:t,onHoverEnd:n,onLinkFocus:r,onLinkBlur:i,onLinkPress:a})=>{let o=(0,F.useRef)(null);return O(o,{onHoverStart:t,onHoverEnd:n}),(0,I.jsx)(l,{style:L.dropdown,ref:o,children:e.map(({id:e,crumb:t})=>(0,I.jsx)(P,{to:t.link,onFocus:r,onBlur:i,onPress:a,ariaCurrentValue:`location`,children:({hovered:e})=>(0,I.jsx)(l,{style:L.dropdownLink,children:(0,I.jsx)(T,{style:[L.dropdownLinkText,e&&L.dropdownLinkTextHovered],children:t.label})})},e))})},xe=new Set([`ForcedOpen`,`OpenFromFocus`]),Se=new Set([`Open`,`ForcedOpen`,`OpenFromFocus`]),q=new Set([`ForcedOpen`]),Ce=({crumbs:e})=>{let[t,n]=(0,F.useReducer)((e,t)=>o([t,e]).returnType().with([`ForceToggle`,`Closed`],[`ForceToggle`,`Open`],[`ForceToggle`,`ForcedClosed`],()=>`ForcedOpen`).with([`ForceToggle`,`OpenFromFocus`],[`ForceToggle`,`ForcedOpen`],()=>`ForcedClosed`).with([`ForceClose`,m._],()=>`ForcedClosed`).with([`FocusHandle`,`ForcedClosed`],()=>`Closed`).with([`Open`,`ForcedOpen`],[`FocusHandle`,`ForcedOpen`],[`Close`,`ForcedOpen`],()=>`ForcedOpen`).with([`Open`,m._],()=>`Open`).with([`FocusHandle`,m._],()=>`OpenFromFocus`).with([`Close`,m._],()=>`Closed`).exhaustive(),`Closed`),r=(0,F.useRef)(void 0),i=(0,F.useRef)(null),a=(0,F.useRef)(null),{onHandleFocus:s,onLinkFocus:u,onAnyBlur:d,onHoverStart:f,onHoverEnd:p,onPress:h,onPressOutside:g,onEscapeKey:_}=(0,F.useMemo)(()=>({onHandleFocus:e=>{if(ee(a.current))return;let t=a.current,i=e;t.contains(i.relatedTarget)||(E(r.current)&&clearTimeout(r.current),n(`FocusHandle`))},onLinkFocus:()=>{E(r.current)&&clearTimeout(r.current),n(`Open`)},onAnyBlur:()=>{E(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{n(`Close`)},300)},onHoverStart:()=>{E(r.current)&&clearTimeout(r.current),n(`Open`)},onHoverEnd:()=>{E(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{n(`Close`)},300)},onPress:()=>{E(r.current)&&clearTimeout(r.current),n(`ForceToggle`)},onPressOutside:e=>{E(i.current)&&i.current.contains(e.target)||(E(r.current)&&clearTimeout(r.current),n(`ForceClose`),r.current=window.setTimeout(()=>{n(`Close`)},300))},onEscapeKey:()=>{E(r.current)&&clearTimeout(r.current),n(`ForceClose`),r.current=window.setTimeout(()=>{n(`Close`)},300)}}),[]);(0,F.useEffect)(()=>()=>{E(r.current)&&clearTimeout(r.current)},[]);let y=Se.has(t),b=xe.has(t),x=q.has(t);return O(i,{onHoverStart:f,onHoverEnd:p}),(0,I.jsxs)(S,{direction:`row`,alignItems:`center`,children:[W,(0,I.jsxs)(l,{ref:a,children:[(0,I.jsx)(c,{ref:i,style:({pressed:e})=>[L.item,e&&L.itemPressed,t===`ForcedOpen`&&L.itemForcedOpen],tabIndex:0,onFocus:s,onBlur:d,onPress:h,children:(0,I.jsx)(l,{style:L.horizontalLink,children:(0,I.jsx)(T,{style:[L.horizontalLinkText,L.activeHorizontalLinkText],children:`…`})})}),(0,I.jsx)(M,{...v.fadeAndSlideInFromBottom,children:y?(0,I.jsx)(ue,{autoFocus:b,focusLock:x,returnFocus:x,onClickOutside:g,onEscapeKey:x?_:void 0,children:(0,I.jsx)(be,{crumbs:e,onHoverStart:f,onHoverEnd:p,onLinkFocus:u,onLinkBlur:d,onLinkPress:_})}):null})]})]})},we=e=>e.length<=3?{start:e,collapsed:[],end:[]}:{start:e.slice(0,1),collapsed:e.slice(1,-2),end:e.slice(-2)},J=()=>{let e=H(),t=(0,F.useMemo)(()=>e.filter(e=>E(e.crumb)),[e]),n=de((0,F.useMemo)(()=>new Set(t.map(e=>e.id)),[t])),{start:r,collapsed:i,end:a}=(0,F.useMemo)(()=>we(t.map(({id:e,crumb:n,isRootCrumb:r},i)=>({id:e,crumb:n,isFirst:i===0,isLast:i===t.length-1,isRootCrumb:r}))),[t]);return(0,I.jsxs)(l,{role:`navigation`,style:L.container,children:[r.map(({id:e,crumb:t,isFirst:r,isLast:i,isRootCrumb:a})=>(0,I.jsx)(K,{crumb:t,isFirstItem:r,isLastItem:i,shouldAnimate:!n.has(e)&&!a},e)),i.length>0?(0,I.jsx)(Ce,{crumbs:i}):null,a.map(({id:e,crumb:t,isLast:r,isRootCrumb:i})=>(0,I.jsx)(K,{crumb:t,isLastItem:r,shouldAnimate:!n.has(e)&&!i},e))]})},V.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbsRoot`,props:{rootLevelCrumbs:{required:!1,tsType:{name:`unknown`},description:``,defaultValue:{value:`[]`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},J.__docgenInfo={description:``,methods:[],displayName:`Breadcrumbs`}})),Y,X,Ee,Z,De,Q,$;t((()=>{Y=e(n()),b(),Te(),ie(),ve(),me(),C(),ae(),X=r(),Ee={title:`Interactivity/Breadcrumbs`,component:V},Z=()=>(0,X.jsxs)(oe,{title:`Breadcrumbs`,children:[(0,X.jsx)(j,{title:`With 1 element`,children:(0,X.jsx)(V,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`}],children:(0,X.jsx)(J,{})})}),(0,X.jsx)(j,{title:`With 2 elements`,children:(0,X.jsx)(V,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`},{label:`SEPA Credit Transfers`,link:`/simulator/sct`}],children:(0,X.jsx)(J,{})})}),(0,X.jsx)(j,{title:`With siblings`,children:(0,X.jsx)(V,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`},{label:`SEPA Credit Transfers`,link:`/simulator/sct`,siblings:[{label:`SEPA Credit Transfers`,url:`/simulator/sct`,isMatching:!0},{label:`SEPA Direct Debits`,url:`/simulator/sdd`,isMatching:!1},{label:`Cards`,url:`/simulator/cards`,isMatching:!1},{label:`Apple Pay/Google Pay`,url:`/simulator/apple-pay-google-pay`,isMatching:!1},{label:`Account holders`,url:`/simulator/account-holders`,isMatching:!1},{label:`Merchant acquiring`,url:`/simulator/merchant-acquiring`,isMatching:!1}]}],children:(0,X.jsx)(J,{})})})]}),De=({crumb:e})=>(U(e),null),Q=()=>{let[e,t]=(0,Y.useState)(``),[n,r]=(0,Y.useState)([]);return(0,X.jsxs)(oe,{title:`Interactive`,description:`You can add/remove crumbs to see breadcrumbs animations during navigation in apps`,children:[(0,X.jsx)(S,{direction:`row`,children:(0,X.jsx)(ye,{label:`New crumb label`,actions:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(D,{width:8}),(0,X.jsx)(A,{size:`small`,color:`positive`,onPress:()=>{let n={label:e,link:e};r(e=>[...e,n]),t(``)},disabled:!e,children:`Add crumb`}),(0,X.jsx)(D,{width:8}),(0,X.jsx)(A,{size:`small`,color:`gray`,onPress:()=>{let n={label:e,url:e,isMatching:!1};r(e=>{let t=e[e.length-1];if(!t)return e;let r=t?.siblings??[],i={...t,siblings:[...r,n]};return[...e.slice(0,-1),i]}),t(``)},disabled:!e||n.length===0,children:`Add sibling`}),(0,X.jsx)(D,{width:8}),(0,X.jsx)(A,{size:`small`,color:`negative`,onPress:()=>{r(e=>e.slice(0,-1))},disabled:n.length===0,children:`Remove last crumb`})]}),render:n=>(0,X.jsx)(he,{id:n,value:e,onChange:e=>t(e.currentTarget.value)})})}),(0,X.jsx)(D,{height:16}),(0,X.jsxs)(V,{children:[n.map(e=>(0,X.jsx)(De,{crumb:e})),(0,X.jsx)(J,{})]})]})},Z.__docgenInfo={description:``,methods:[],displayName:`Variations`},Q.__docgenInfo={description:``,methods:[],displayName:`Interactive`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Breadcrumbs.stories-DcBh6ltA.js.map