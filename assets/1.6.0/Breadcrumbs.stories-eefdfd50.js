import{S as le,r as S,c as f,s as C,g as ae,d as K,e as U,t as ce,a as e,V as g,i as h,j as p,f as B,L as R,T as ue,F as z,b as k,h as de}from"./Space-3f6d0824.js";import{r as i}from"./index-f1f749bf.js";import{K as me,S as F,B as $}from"./index.module-4cf3baed.js";import{u as M}from"./useMergeRefs-669834a2.js";import{u as be,T as ee}from"./TransitionView-17b0f498.js";import{n as pe}from"./function-1bad6ac0.js";import{F as re}from"./FocusTrap-ae4cbbe2.js";import{I as D}from"./Icon-72df5746.js";import{L as V}from"./Link-3968162a.js";import{v as H}from"./v4-a960c1f4.js";import{P as he}from"./index-38b75d36.js";import{L as A}from"./LakeButton-96073a21.js";import{L as ge}from"./LakeLabel-27002293.js";import{L as fe}from"./LakeTextInput-4a2cfc58.js";import{S as ne,a as I}from"./_StoriesComponents-a9fb8652.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./array-b3630b94.js";import"./Svg-83739516.js";import"./index-c54dd631.js";import"./with-selector-bb250402.js";import"./index-7f2f9e92.js";import"./Pressable-8bb16169.js";import"./index-ba02aeb1.js";import"./commonStyles-d52fedae.js";import"./Fill-9fc867ed.js";const c=le.create({container:{flexDirection:"row",alignItems:"center",zIndex:10,transform:"translateZ(0px)"},item:{flexDirection:"row",alignItems:"center",borderRadius:S[6],transitionProperty:"opacity",transitionDuration:"150ms"},itemPressed:{opacity:.2},itemForcedOpen:{backgroundColor:f.gray[50]},chevron:{padding:C[8]},horizontalLink:{paddingVertical:C[8]},horizontalLinkText:{paddingHorizontal:C[8],alignItems:"center",display:"inline-flex"},horizontalLinkTextHovered:{color:f.gray[900],boxShadow:"0 1px currentColor"},activeHorizontalLinkText:{color:f.gray[800],backgroundColor:ae,borderRadius:S[4],boxShadow:"none"},dropdown:{position:"absolute",left:"50%",transform:"translateX(-50%)",top:"100%",backgroundColor:K.accented,borderRadius:S[8],boxShadow:U.modal,paddingVertical:C[8]},siblingsDropdown:{position:"absolute",left:"50%",transform:"translateX(-50%)",top:"100%",backgroundColor:K.accented,borderRadius:S[8],boxShadow:U.modal,paddingVertical:C[8],alignItems:"stretch"},dropdownLink:{paddingHorizontal:C[16],paddingVertical:C[8],flexDirection:"row",alignItems:"center"},dropdownLinkText:{...ce.regular,whiteSpace:"nowrap"},dropdownLinkTextHovered:{color:f.gray[500]},dropdownLinkActive:{backgroundColor:f.gray[50]},dropdownContainer:{position:"absolute",left:"50%",top:"100%"},dropdownLinkContainer:{display:"flex",flexDirection:"column",alignItems:"stretch"},tick:{position:"absolute",top:"50%",right:C[16],transform:"translateY(-50%)"}}),_=[],Ce=[],we=[_,_,pe,{current:-1}],N=i.createContext(we),L=({rootLevelCrumbs:n=Ce,children:l})=>{const[a,r]=i.useState(_),d=i.useRef(!0),u=i.useRef(-1),[s,t]=i.useState(()=>n.map(b=>({id:H(),crumb:b,isRootCrumb:!0})));i.useEffect(()=>{if(d.current){d.current=!1;return}t(n.map(b=>({id:H(),crumb:b,isRootCrumb:!0})))},[n]);const o=i.useMemo(()=>[...a].sort((b,v)=>(v.index??-1)>(b.index??-1)?-1:1),[a]),m=i.useMemo(()=>[s,o,r,u],[s,o,r,u]);return e(N.Provider,{value:m,children:l})},Le=()=>{const[n,l]=i.useContext(N);return i.useMemo(()=>[...n,...l],[n,l])},E=n=>{const[,,l,a]=i.useContext(N),[r]=i.useState(()=>H()),d=i.useRef(n),[u]=i.useState(()=>++a.current);i.useEffect(()=>(l(s=>s.concat([{id:r,crumb:d.current,isRootCrumb:!1,index:u}])),()=>{l(s=>s.filter(t=>t.id!==r))}),[r,l,u]),i.useEffect(()=>{l(s=>{const t=s.find(o=>o.id===r);return h(t)&&t.crumb!==n?s.map(o=>o.id===r?{id:r,crumb:n,isRootCrumb:t.isRootCrumb,index:u}:o):s})},[r,n,l,u])},te=e(g,{style:c.chevron,children:e(D,{name:"chevron-right-filled",color:f.gray[500],size:16})}),ke=({siblings:n,onPress:l})=>e(g,{style:c.siblingsDropdown,children:n.map(({url:a,label:r,isMatching:d})=>e(V,{to:a,ariaCurrentValue:"location",onPress:u=>{d&&u.preventDefault(),l()},style:c.dropdownLinkContainer,children:({hovered:u})=>p(g,{style:[c.dropdownLink,d&&c.dropdownLinkActive],children:[e(R,{style:[c.dropdownLinkText,u&&c.dropdownLinkTextHovered],children:r}),d&&p(z,{children:[e(k,{width:32}),e(D,{color:f.positive[500],name:"checkmark-filled",size:14,style:c.tick})]})]})},a))}),j=({crumb:n,isFirstItem:l=!1,isLastItem:a=!1,shouldAnimate:r})=>{const[d,u]=i.useState(()=>!1),s=i.useRef(null),[t,o]=i.useState(null);M(s,{onHoverStart:()=>u(!0),onHoverEnd:()=>u(!1)});const m=i.useCallback(b=>{n.siblings!=null&&(b.preventDefault(),o(n.siblings))},[n.siblings]);return p(g,{style:[c.item,r?B.fadeAndSlideInFromRight.enter:null],children:[l?null:te,p(g,{children:[e(V,{to:n.link,ariaCurrentValue:"location",onPress:m,children:e(g,{ref:s,style:[c.horizontalLink,r&&B.fadeAndSlideInFromRight.enter],children:p(R,{color:f.gray[800],style:[c.horizontalLinkText,a&&c.activeHorizontalLinkText],children:[e(ue,{style:d&&!a?c.horizontalLinkTextHovered:void 0,children:n.label}),n.siblings!=null?p(z,{children:[e(k,{width:4}),e(D,{name:"chevron-down-filled",color:f.gray[500],size:16})]}):null]})})}),e(g,{style:c.dropdownContainer,children:e(ee,{...B.fadeAndSlideInFromBottom,children:t?e(re,{autoFocus:!0,focusLock:!0,returnFocus:!0,onClickOutside:()=>o(null),onEscapeKey:()=>o(null),children:e(ke,{siblings:t,onPress:()=>o(null)})}):null})})]})]})},ve=({crumbs:n,onHoverStart:l,onHoverEnd:a,onLinkFocus:r,onLinkBlur:d,onLinkPress:u})=>{const s=i.useRef(null);return M(s,{onHoverStart:l,onHoverEnd:a}),e(g,{style:c.dropdown,ref:s,children:n.map(({id:t,crumb:o})=>e(V,{to:o.link,onFocus:r,onBlur:d,onPress:u,ariaCurrentValue:"location",children:({hovered:m})=>e(g,{style:c.dropdownLink,children:e(R,{style:[c.dropdownLinkText,m&&c.dropdownLinkTextHovered],children:o.label})})},t))})},ye=new Set(["ForcedOpen","OpenFromFocus"]),Se=new Set(["Open","ForcedOpen","OpenFromFocus"]),Fe=new Set(["ForcedOpen"]),xe=({crumbs:n})=>{const[l,a]=i.useReducer((w,y)=>me([y,w]).with(["ForceToggle","Closed"],["ForceToggle","Open"],["ForceToggle","ForcedClosed"],()=>"ForcedOpen").with(["ForceToggle","OpenFromFocus"],["ForceToggle","ForcedOpen"],()=>"ForcedClosed").with(["ForceClose",F._],()=>"ForcedClosed").with(["FocusHandle","ForcedClosed"],()=>"Closed").with(["Open","ForcedOpen"],["FocusHandle","ForcedOpen"],["Close","ForcedOpen"],()=>"ForcedOpen").with(["Open",F._],()=>"Open").with(["FocusHandle",F._],()=>"OpenFromFocus").with(["Close",F._],()=>"Closed").exhaustive(),"Closed"),r=i.useRef(void 0),d=i.useRef(null),u=i.useRef(null),{onHandleFocus:s,onLinkFocus:t,onAnyBlur:o,onHoverStart:m,onHoverEnd:b,onPress:v,onPressOutside:oe,onEscapeKey:q}=i.useMemo(()=>({onHandleFocus:w=>{if(de(u.current))return;const y=u.current,W=w;y.contains(W.relatedTarget)||(h(r.current)&&clearTimeout(r.current),a("FocusHandle"))},onLinkFocus:()=>{h(r.current)&&clearTimeout(r.current),a("Open")},onAnyBlur:()=>{h(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{a("Close")},300)},onHoverStart:()=>{h(r.current)&&clearTimeout(r.current),a("Open")},onHoverEnd:()=>{h(r.current)&&clearTimeout(r.current),r.current=window.setTimeout(()=>{a("Close")},300)},onPress:()=>{h(r.current)&&clearTimeout(r.current),a("ForceToggle")},onPressOutside:w=>{h(d.current)&&d.current.contains(w.target)||(h(r.current)&&clearTimeout(r.current),a("ForceClose"),r.current=window.setTimeout(()=>{a("Close")},300))},onEscapeKey:()=>{h(r.current)&&clearTimeout(r.current),a("ForceClose"),r.current=window.setTimeout(()=>{a("Close")},300)}}),[]);i.useEffect(()=>()=>{h(r.current)&&clearTimeout(r.current)},[]);const se=Se.has(l),ie=ye.has(l),O=Fe.has(l);return M(d,{onHoverStart:m,onHoverEnd:b}),p($,{direction:"row",alignItems:"center",children:[te,p(g,{ref:u,children:[e(he,{ref:d,style:({pressed:w})=>[c.item,w&&c.itemPressed,l==="ForcedOpen"&&c.itemForcedOpen],tabIndex:0,onFocus:s,onBlur:o,onPress:v,children:e(g,{style:c.horizontalLink,children:e(R,{style:[c.horizontalLinkText,c.activeHorizontalLinkText],children:"…"})})}),e(ee,{...B.fadeAndSlideInFromBottom,children:se?e(re,{autoFocus:ie,focusLock:O,returnFocus:O,onClickOutside:oe,onEscapeKey:O?q:void 0,children:e(ve,{crumbs:n,onHoverStart:m,onHoverEnd:b,onLinkFocus:t,onLinkBlur:o,onLinkPress:q})}):null})]})]})},Te=n=>n.length<=3?{start:n,collapsed:[],end:[]}:{start:n.slice(0,1),collapsed:n.slice(1,-2),end:n.slice(-2)},P=()=>{const n=Le(),l=i.useMemo(()=>{const s=t=>h(t.crumb);return n.filter(s)},[n]),a=be(i.useMemo(()=>new Set(l.map(s=>s.id)),[l])),{start:r,collapsed:d,end:u}=i.useMemo(()=>Te(l.map(({id:s,crumb:t,isRootCrumb:o},m)=>({id:s,crumb:t,isFirst:m===0,isLast:m===l.length-1,isRootCrumb:o}))),[l]);return p(g,{role:"navigation",style:c.container,children:[r.map(({id:s,crumb:t,isFirst:o,isLast:m,isRootCrumb:b})=>e(j,{crumb:t,isFirstItem:o,isLastItem:m,shouldAnimate:!a.has(s)&&!b},s)),d.length>0?e(xe,{crumbs:d}):null,u.map(({id:s,crumb:t,isLast:o,isRootCrumb:m})=>e(j,{crumb:t,isLastItem:o,shouldAnimate:!a.has(s)&&!m},s))]})};try{L.displayName="BreadcrumbsRoot",L.__docgenInfo={description:"",displayName:"BreadcrumbsRoot",props:{rootLevelCrumbs:{defaultValue:{value:"[]"},description:"",name:"rootLevelCrumbs",required:!1,type:{name:"readonly Crumb[]"}}}}}catch{}try{E.displayName="useCrumb",E.__docgenInfo={description:"",displayName:"useCrumb",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},siblings:{defaultValue:null,description:"",name:"siblings",required:!1,type:{name:"{ label: string; url: string; isMatching: boolean; }[]"}}}}}catch{}const rr={title:"Interactivity/Breadcrumbs",component:L},x=()=>p(ne,{title:"Breadcrumbs",children:[e(I,{title:"With 1 element",children:e(L,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"}],children:e(P,{})})}),e(I,{title:"With 2 elements",children:e(L,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"},{label:"SEPA Credit Transfers",link:"/simulator/sct"}],children:e(P,{})})}),e(I,{title:"With siblings",children:e(L,{rootLevelCrumbs:[{label:"All simulator events",link:"/simulator"},{label:"SEPA Credit Transfers",link:"/simulator/sct",siblings:[{label:"SEPA Credit Transfers",url:"/simulator/sct",isMatching:!0},{label:"SEPA Direct Debits",url:"/simulator/sdd",isMatching:!1},{label:"Cards",url:"/simulator/cards",isMatching:!1},{label:"Apple Pay/Google Pay",url:"/simulator/apple-pay-google-pay",isMatching:!1},{label:"Account holders",url:"/simulator/account-holders",isMatching:!1},{label:"Merchant acquiring",url:"/simulator/merchant-acquiring",isMatching:!1}]}],children:e(P,{})})})]}),Be=({crumb:n})=>(E(n),null),T=()=>{const[n,l]=i.useState(""),[a,r]=i.useState([]),d=()=>{const t={label:n,link:n};r(o=>[...o,t]),l("")},u=()=>{const t={label:n,url:n,isMatching:!1};r(o=>{const m=o[o.length-1];if(!m)return o;const b=(m==null?void 0:m.siblings)??[],v={...m,siblings:[...b,t]};return[...o.slice(0,-1),v]}),l("")},s=()=>{r(t=>t.slice(0,-1))};return p(ne,{title:"Interactive",description:"You can add/remove crumbs to see breadcrumbs animations during navigation in apps",children:[e($,{direction:"row",children:e(ge,{label:"New crumb label",actions:p(z,{children:[e(k,{width:8}),e(A,{size:"small",color:"positive",onPress:d,disabled:!n,children:"Add crumb"}),e(k,{width:8}),e(A,{size:"small",color:"gray",onPress:u,disabled:!n||a.length===0,children:"Add sibling"}),e(k,{width:8}),e(A,{size:"small",color:"negative",onPress:s,disabled:a.length===0,children:"Remove last crumb"})]}),render:t=>e(fe,{id:t,value:n,onChange:o=>l(o.currentTarget.value)})})}),e(k,{height:16}),p(L,{children:[a.map(t=>e(Be,{crumb:t})),e(P,{})]})]})};var Y,G,X;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(X=(G=x.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Z,J,Q;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(Q=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const nr=["Variations","Interactive"];export{T as Interactive,x as Variations,nr as __namedExportsOrder,rr as default};
//# sourceMappingURL=Breadcrumbs.stories-eefdfd50.js.map
