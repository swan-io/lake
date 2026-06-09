import{c as e,i as t}from"./preload-helper-C6cs2Kqh.js";import{o as n}from"./iframe-UDKbJ_or.js";import{F as r,H as i,L as a,M as o,N as s,P as c,St as l,U as u,V as d,_ as f,_t as ee,bt as p,dt as m,ft as h,g,h as _,ht as v,i as y,it as b,mt as x,nt as S,o as C,ot as te,pt as w,r as T,s as ne,st as re,tt as E,v as D,yt as ie,z as ae}from"./ScrollView-CsPnIpDJ.js";import{r as oe,t as O}from"./LakeButton-DUcKzuG6.js";import{n as k,r as se,t as ce}from"./_StoriesComponents-BfnQdud_.js";import{n as le,t as ue}from"./FocusTrap-8gfB49A9.js";import{i as de,n as fe,r as pe,t as A}from"./TransitionView-BV942zhu.js";import{n as me,t as he}from"./LakeTextInput-DD7tVvKd.js";import{n as ge,t as _e}from"./function-AGLPGvu4.js";import{n as j,t as ve}from"./dist-__3R7dOP.js";import{n as ye,t as M}from"./Link-sKaCNUwL.js";import{n as be,t as xe}from"./LakeLabel-BwwDvRNk.js";var N,P,F,I,Se,L,R,z,B,V,H,U,W,G,K,q,J,Ce,Y,we=t((()=>{N=e(n()),v(),s(),ve(),re(),f(),pe(),_e(),r(),g(),le(),i(),ne(),ye(),y(),fe(),P=u(),F=l.create({container:{flexDirection:`row`,alignItems:`center`,zIndex:10,transform:`translateZ(0px)`},item:{flexDirection:`row`,alignItems:`center`,borderRadius:m[6],transitionProperty:`opacity`,transitionDuration:`150ms`},itemPressed:{opacity:.2},itemForcedOpen:{backgroundColor:b.gray[50]},chevron:{padding:w[8]},horizontalLink:{paddingVertical:w[8]},horizontalLinkText:{paddingHorizontal:w[8],alignItems:`center`,display:`inline-flex`},horizontalLinkTextHovered:{color:b.gray[900],boxShadow:`0 1px currentColor`},activeHorizontalLinkText:{color:b.gray[800],backgroundColor:te,borderRadius:m[4],boxShadow:`none`},dropdown:{position:`absolute`,left:`50%`,transform:`translateX(-50%)`,top:`100%`,backgroundColor:S.accented,borderRadius:m[8],boxShadow:h.modal,paddingVertical:w[8]},siblingsDropdown:{position:`absolute`,left:`50%`,transform:`translateX(-50%)`,top:`100%`,backgroundColor:S.accented,borderRadius:m[8],boxShadow:h.modal,paddingVertical:w[8],alignItems:`stretch`},dropdownLink:{paddingHorizontal:w[16],paddingVertical:w[8],flexDirection:`row`,alignItems:`center`},dropdownLinkText:{...x.regular,whiteSpace:`nowrap`},dropdownLinkTextHovered:{color:b.gray[500]},dropdownLinkActive:{backgroundColor:b.gray[50]},dropdownContainer:{position:`absolute`,left:`50%`,top:`100%`},dropdownLinkContainer:{display:`flex`,flexDirection:`column`,alignItems:`stretch`},tick:{position:`absolute`,top:`50%`,right:w[16],transform:`translateY(-50%)`}}),I=[],Se=[],L=(0,N.createContext)([I,I,ge,{current:-1}]),R=({rootLevelCrumbs:e=Se,children:t})=>{let[n,r]=(0,N.useState)(I),i=(0,N.useRef)(!0),a=(0,N.useRef)(-1),[o,s]=(0,N.useState)(()=>e.map(e=>({id:j(),crumb:e,isRootCrumb:!0})));(0,N.useEffect)(()=>{if(i.current){i.current=!1;return}s(e.map(e=>({id:j(),crumb:e,isRootCrumb:!0})))},[e]);let c=(0,N.useMemo)(()=>[...n].sort((e,t)=>(t.index??-1)>(e.index??-1)?-1:1),[n]),l=(0,N.useMemo)(()=>[o,c,r,a],[o,c,r,a]);return(0,P.jsx)(L.Provider,{value:l,children:t})},z=()=>{let[e,t]=(0,N.useContext)(L);return(0,N.useMemo)(()=>[...e,...t],[e,t])},B=e=>{let[,,t,n]=(0,N.useContext)(L),r=(0,N.useId)(),i=(0,N.useRef)(e),[o]=(0,N.useState)(()=>++n.current);(0,N.useEffect)(()=>(t(e=>e.concat([{id:r,crumb:i.current,isRootCrumb:!1,index:o}])),()=>{t(e=>e.filter(e=>e.id!==r))}),[r,t,o]),(0,N.useEffect)(()=>{t(t=>{let n=t.find(e=>e.id===r);return a(n)&&n.crumb!==e?t.map(t=>t.id===r?{id:r,crumb:e,isRootCrumb:n.isRootCrumb,index:o}:t):t})},[r,e,t,o])},V=(0,P.jsx)(p,{style:F.chevron,children:(0,P.jsx)(d,{name:`chevron-right-filled`,color:b.gray[500],size:16})}),H=({siblings:e,isLast:t,onPress:n})=>(0,P.jsx)(p,{style:F.siblingsDropdown,children:e.map(({url:e,label:r,isMatching:i})=>(0,P.jsx)(M,{to:e,ariaCurrentValue:`location`,onPress:e=>{i&&t&&e.preventDefault(),n()},style:F.dropdownLinkContainer,children:({hovered:e})=>(0,P.jsxs)(p,{style:[F.dropdownLink,i&&F.dropdownLinkActive],children:[(0,P.jsx)(C,{style:[F.dropdownLinkText,e&&F.dropdownLinkTextHovered],children:r}),i&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{width:32}),(0,P.jsx)(d,{color:b.positive[500],name:`checkmark-filled`,size:14,style:F.tick})]})]})},e))}),U=({crumb:e,isFirstItem:t=!1,isLastItem:n=!1,shouldAnimate:r})=>{let[i,a]=(0,N.useState)(()=>!1),o=(0,N.useRef)(null),[s,c]=(0,N.useState)(null);D(o,{onHoverStart:()=>a(!0),onHoverEnd:()=>a(!1)});let l=(0,N.useCallback)(t=>{e.siblings!=null&&(t.preventDefault(),c(e.siblings))},[e.siblings]);return(0,P.jsxs)(p,{style:[F.item,r?E.fadeAndSlideInFromRight.enter:null],children:[t?null:V,(0,P.jsxs)(p,{children:[(0,P.jsx)(M,{to:e.link,ariaCurrentValue:`location`,onPress:l,children:(0,P.jsx)(p,{ref:o,style:[F.horizontalLink,r&&E.fadeAndSlideInFromRight.enter],children:(0,P.jsxs)(C,{color:b.gray[800],style:[F.horizontalLinkText,n&&F.activeHorizontalLinkText],children:[(0,P.jsx)(ie,{style:i&&!n?F.horizontalLinkTextHovered:void 0,children:e.label}),e.siblings==null?null:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{width:4}),(0,P.jsx)(d,{name:`chevron-down-filled`,color:b.gray[500],size:16})]})]})})}),(0,P.jsx)(p,{style:F.dropdownContainer,children:(0,P.jsx)(A,{...E.fadeAndSlideInFromBottom,children:s?(0,P.jsx)(ue,{autoFocus:!0,focusLock:!0,returnFocus:!0,onClickOutside:()=>c(null),onEscapeKey:()=>c(null),children:(0,P.jsx)(H,{siblings:s,isLast:n,onPress:()=>c(null)})}):null})})]})]})},W=({crumbs:e,onHoverStart:t,onHoverEnd:n,onLinkFocus:r,onLinkBlur:i,onLinkPress:a})=>{let o=(0,N.useRef)(null);return D(o,{onHoverStart:t,onHoverEnd:n}),(0,P.jsx)(p,{style:F.dropdown,ref:o,children:e.map(({id:e,crumb:t})=>(0,P.jsx)(M,{to:t.link,onFocus:r,onBlur:i,onPress:a,ariaCurrentValue:`location`,children:({hovered:e})=>(0,P.jsx)(p,{style:F.dropdownLink,children:(0,P.jsx)(C,{style:[F.dropdownLinkText,e&&F.dropdownLinkTextHovered],children:t.label})})},e))})},G=new Set([`ForcedOpen`,`OpenFromFocus`]),K=new Set([`Open`,`ForcedOpen`,`OpenFromFocus`]),q=new Set([`ForcedOpen`]),J=({crumbs:e})=>{let[t,n]=(0,N.useReducer)((e,t)=>o([t,e]).returnType().with([`ForceToggle`,`Closed`],[`ForceToggle`,`Open`],[`ForceToggle`,`ForcedClosed`],()=>`ForcedOpen`).with([`ForceToggle`,`OpenFromFocus`],[`ForceToggle`,`ForcedOpen`],()=>`ForcedClosed`).with([`ForceClose`,c._],()=>`ForcedClosed`).with([`FocusHandle`,`ForcedClosed`],()=>`Closed`).with([`Open`,`ForcedOpen`],[`FocusHandle`,`ForcedOpen`],[`Close`,`ForcedOpen`],()=>`ForcedOpen`).with([`Open`,c._],()=>`Open`).with([`FocusHandle`,c._],()=>`OpenFromFocus`).with([`Close`,c._],()=>`Closed`).exhaustive(),`Closed`),r=(0,N.useRef)(void 0),i=(0,N.useRef)(null),s=(0,N.useRef)(null),{onHandleFocus:l,onLinkFocus:u,onAnyBlur:d,onHoverStart:f,onHoverEnd:m,onPress:h,onPressOutside:g,onEscapeKey:v}=(0,N.useMemo)(()=>({onHandleFocus:e=>{if(ae(s.current))return;let t=s.current,i=e;t.contains(i.relatedTarget)||(a(r.current)&&clearTimeout(r.current),n(`FocusHandle`))},onLinkFocus:()=>{a(r.current)&&clearTimeout(r.current),n(`Open`)},onAnyBlur:()=>{a(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{n(`Close`)},300)},onHoverStart:()=>{a(r.current)&&clearTimeout(r.current),n(`Open`)},onHoverEnd:()=>{a(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{n(`Close`)},300)},onPress:()=>{a(r.current)&&clearTimeout(r.current),n(`ForceToggle`)},onPressOutside:e=>{a(i.current)&&i.current.contains(e.target)||(a(r.current)&&clearTimeout(r.current),n(`ForceClose`),r.current=window.setTimeout(()=>{n(`Close`)},300))},onEscapeKey:()=>{a(r.current)&&clearTimeout(r.current),n(`ForceClose`),r.current=window.setTimeout(()=>{n(`Close`)},300)}}),[]);(0,N.useEffect)(()=>()=>{a(r.current)&&clearTimeout(r.current)},[]);let y=K.has(t),b=G.has(t),x=q.has(t);return D(i,{onHoverStart:f,onHoverEnd:m}),(0,P.jsxs)(_,{direction:`row`,alignItems:`center`,children:[V,(0,P.jsxs)(p,{ref:s,children:[(0,P.jsx)(ee,{ref:i,style:({pressed:e})=>[F.item,e&&F.itemPressed,t===`ForcedOpen`&&F.itemForcedOpen],tabIndex:0,onFocus:l,onBlur:d,onPress:h,children:(0,P.jsx)(p,{style:F.horizontalLink,children:(0,P.jsx)(C,{style:[F.horizontalLinkText,F.activeHorizontalLinkText],children:`…`})})}),(0,P.jsx)(A,{...E.fadeAndSlideInFromBottom,children:y?(0,P.jsx)(ue,{autoFocus:b,focusLock:x,returnFocus:x,onClickOutside:g,onEscapeKey:x?v:void 0,children:(0,P.jsx)(W,{crumbs:e,onHoverStart:f,onHoverEnd:m,onLinkFocus:u,onLinkBlur:d,onLinkPress:v})}):null})]})]})},Ce=e=>e.length<=3?{start:e,collapsed:[],end:[]}:{start:e.slice(0,1),collapsed:e.slice(1,-2),end:e.slice(-2)},Y=()=>{let e=z(),t=(0,N.useMemo)(()=>e.filter(e=>a(e.crumb)),[e]),n=de((0,N.useMemo)(()=>new Set(t.map(e=>e.id)),[t])),{start:r,collapsed:i,end:o}=(0,N.useMemo)(()=>Ce(t.map(({id:e,crumb:n,isRootCrumb:r},i)=>({id:e,crumb:n,isFirst:i===0,isLast:i===t.length-1,isRootCrumb:r}))),[t]);return(0,P.jsxs)(p,{role:`navigation`,style:F.container,children:[r.map(({id:e,crumb:t,isFirst:r,isLast:i,isRootCrumb:a})=>(0,P.jsx)(U,{crumb:t,isFirstItem:r,isLastItem:i,shouldAnimate:!n.has(e)&&!a},e)),i.length>0?(0,P.jsx)(J,{crumbs:i}):null,o.map(({id:e,crumb:t,isLast:r,isRootCrumb:i})=>(0,P.jsx)(U,{crumb:t,isLastItem:r,shouldAnimate:!n.has(e)&&!i},e))]})},R.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbsRoot`,props:{rootLevelCrumbs:{required:!1,tsType:{name:`unknown`},description:``,defaultValue:{value:`[]`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},Y.__docgenInfo={description:``,methods:[],displayName:`Breadcrumbs`}})),X,Z,Te,Q,Ee,$,De;t((()=>{X=e(n()),g(),we(),oe(),be(),me(),y(),se(),Z=u(),Te={title:`Interactivity/Breadcrumbs`,component:R},Q=()=>(0,Z.jsxs)(ce,{title:`Breadcrumbs`,children:[(0,Z.jsx)(k,{title:`With 1 element`,children:(0,Z.jsx)(R,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`}],children:(0,Z.jsx)(Y,{})})}),(0,Z.jsx)(k,{title:`With 2 elements`,children:(0,Z.jsx)(R,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`},{label:`SEPA Credit Transfers`,link:`/simulator/sct`}],children:(0,Z.jsx)(Y,{})})}),(0,Z.jsx)(k,{title:`With siblings`,children:(0,Z.jsx)(R,{rootLevelCrumbs:[{label:`All simulator events`,link:`/simulator`},{label:`SEPA Credit Transfers`,link:`/simulator/sct`,siblings:[{label:`SEPA Credit Transfers`,url:`/simulator/sct`,isMatching:!0},{label:`SEPA Direct Debits`,url:`/simulator/sdd`,isMatching:!1},{label:`Cards`,url:`/simulator/cards`,isMatching:!1},{label:`Apple Pay/Google Pay`,url:`/simulator/apple-pay-google-pay`,isMatching:!1},{label:`Account holders`,url:`/simulator/account-holders`,isMatching:!1},{label:`Merchant acquiring`,url:`/simulator/merchant-acquiring`,isMatching:!1}]}],children:(0,Z.jsx)(Y,{})})})]}),Ee=({crumb:e})=>(B(e),null),$=()=>{let[e,t]=(0,X.useState)(``),[n,r]=(0,X.useState)([]);return(0,Z.jsxs)(ce,{title:`Interactive`,description:`You can add/remove crumbs to see breadcrumbs animations during navigation in apps`,children:[(0,Z.jsx)(_,{direction:`row`,children:(0,Z.jsx)(xe,{label:`New crumb label`,actions:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(T,{width:8}),(0,Z.jsx)(O,{size:`small`,color:`positive`,onPress:()=>{let n={label:e,link:e};r(e=>[...e,n]),t(``)},disabled:!e,children:`Add crumb`}),(0,Z.jsx)(T,{width:8}),(0,Z.jsx)(O,{size:`small`,color:`gray`,onPress:()=>{let n={label:e,url:e,isMatching:!1};r(e=>{let t=e[e.length-1];if(!t)return e;let r=t?.siblings??[],i={...t,siblings:[...r,n]};return[...e.slice(0,-1),i]}),t(``)},disabled:!e||n.length===0,children:`Add sibling`}),(0,Z.jsx)(T,{width:8}),(0,Z.jsx)(O,{size:`small`,color:`negative`,onPress:()=>{r(e=>e.slice(0,-1))},disabled:n.length===0,children:`Remove last crumb`})]}),render:n=>(0,Z.jsx)(he,{id:n,value:e,onChange:e=>t(e.currentTarget.value)})})}),(0,Z.jsx)(T,{height:16}),(0,Z.jsxs)(R,{children:[n.map(e=>(0,Z.jsx)(Ee,{crumb:e})),(0,Z.jsx)(Y,{})]})]})},Q.__docgenInfo={description:``,methods:[],displayName:`Variations`},$.__docgenInfo={description:``,methods:[],displayName:`Interactive`},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}},De=[`Variations`,`Interactive`]}))();export{$ as Interactive,Q as Variations,De as __namedExportsOrder,Te as default};
//# sourceMappingURL=Breadcrumbs.stories-Dq4WaqQD.js.map