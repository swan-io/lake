import{j as e}from"./jsx-runtime-DT09rT5F.js";import{r as p}from"./index-DXKZGL6g.js";import{L as g}from"./LakeButton-DOM2fx1m.js";import{L as V}from"./LakeHeading-C3Pg1Dbb.js";import{s as h,d as u,F as O,z as I,C as c,V as L,B as T,p as j,S as H,c as G}from"./ScrollView-uRWD7sHo.js";import{u as y,T as P}from"./TransitionView-CHCst6-1.js";import{n as R}from"./function-C-7S2jwM.js";import{S as Y,L as U}from"./Suspendable-DcBC6Bz-.js";import{R as $}from"./RightPanel-VnsC2Lic.js";import{S as J}from"./_StoriesComponents-BTk4MJDM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-DcSKb_Ww.js";import"./index-oSnkc6z1.js";import"./extends-CF3RwP-h.js";import"./index-CKeW-Qoz.js";import"./useBodyClassName-CYzM7DM-.js";import"./FocusTrap-BTtxEFod.js";import"./array-BfAlyugE.js";import"./ResponsiveContainer-CE4Syk9F.js";import"./Separator-Bs5w-fAv.js";const a=h.create({details:{paddingBottom:u[24],paddingTop:u[12],flexGrow:1},detailsContents:{...h.absoluteFillObject},detailsContainer:{flexGrow:1},content:{paddingHorizontal:u[24]},contentLarge:{paddingHorizontal:u[40]}}),A=p.forwardRef(({items:n,keyExtractor:s,activeId:o,onActiveIdChange:f,onClose:x,render:b,closeLabel:q,previousLabel:_,nextLabel:D},F)=>{const l=n.find(t=>s(t)===o),r=O.findIndex(n,t=>s(t)===o).toUndefined(),v=y(o),w=y(l),m=y(r),z=typeof r=="number"&&typeof m=="number"?I({activeItemIndex:r,previousIndex:m}).when(({activeItemIndex:t,previousIndex:i})=>t<i,()=>c.fadeAndSlideInFromTop).when(({activeItemIndex:t,previousIndex:i})=>t>i,()=>c.fadeAndSlideInFromBottom).otherwise(()=>null):null,E=typeof r=="number"&&typeof m=="number"?I({activeItemIndex:r,previousIndex:m}).when(({activeItemIndex:t,previousIndex:i})=>t<i,()=>c.fadeAndSlideInFromBottom).when(({activeItemIndex:t,previousIndex:i})=>t>i,()=>c.fadeAndSlideInFromTop).otherwise(()=>null):null;return e.jsx($,{ref:F,visible:l!=null,onPressClose:x,children:({large:t})=>e.jsxs(L,{style:a.details,children:[e.jsxs(T,{direction:"row",justifyContent:"spaceBetween",style:t?a.contentLarge:a.content,children:[e.jsx(g,{mode:"tertiary",icon:"lake-close",ariaLabel:q,onPress:x}),e.jsxs(T,{direction:"row",justifyContent:"spaceBetween",children:[e.jsx(g,{mode:"tertiary",ariaLabel:_,icon:"arrow-left-regular",disabled:r===0,onPress:()=>{typeof r=="number"&&j.fromNullable(n[r-1]).match({Some:i=>f(s(i)),None:R})}}),e.jsx(g,{mode:"tertiary",ariaLabel:D,icon:"arrow-right-regular",disabled:r===n.length-1,onPress:()=>{typeof r=="number"&&j.fromNullable(n[r+1]).match({Some:i=>f(s(i)),None:R})}})]})]}),e.jsx(H,{height:12}),e.jsx(L,{style:a.detailsContainer,children:l!=null?[p.createElement(P,{...z,key:o,style:a.detailsContents},w!=null?e.jsx(Y,{fallback:e.jsx(U,{color:G.current[500],delay:0}),children:b(l,t)}):b(l,t)),...w!=null&&v!==o?[p.createElement(P,{...E,key:v,style:a.detailsContents},null)]:[]]:null})]})})}),N=A;A.__docgenInfo={description:"",methods:[],displayName:"ListRightPanel_",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},keyExtractor:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},activeId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onActiveIdChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},render:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, large: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"boolean"},name:"large"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},closeLabel:{required:!0,tsType:{name:"string"},description:""},previousLabel:{required:!0,tsType:{name:"string"},description:""},nextLabel:{required:!0,tsType:{name:"string"},description:""}}};const K=h.create({button:{alignSelf:"flex-start"}}),fe={title:"Layout/ListRightPanel",component:N},S={},M=({item:n})=>{if(S[n]!==!0)throw new Promise(s=>{setTimeout(()=>{S[n]=!0,s(void 0)},500)});return e.jsxs(V,{level:1,variant:"h1",children:["Item ",n]})},d=()=>{const[n,s]=p.useState(null);return e.jsxs(J,{title:"RightPanel",description:["RightPanel is a component that allows you to render a panel on the right side of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[e.jsx(g,{onPress:()=>s("1"),size:"small",style:K.button,children:"Open right panel"}),e.jsx(N,{closeLabel:"Close",previousLabel:"Previous",nextLabel:"Next",keyExtractor:o=>o,activeId:n,onActiveIdChange:o=>s(o),onClose:()=>s(null),items:["1","2","3"],render:o=>e.jsx(M,{item:o})})]})};d.__docgenInfo={description:"",methods:[],displayName:"Default"};var k,C,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [activeId, setActiveId] = useState<string | null>(null);
  return <StoryBlock title="RightPanel" description={["RightPanel is a component that allows you to render a panel on the right side of the screen.", "To make this component work, you need a root element with the id \`full-page-layer-root\` below your #root-app element", "You can open it by clicking on the button below."]}>
      <LakeButton onPress={() => setActiveId("1")} size="small" style={styles.button}>
        Open right panel
      </LakeButton>

      <ListRightPanel closeLabel="Close" previousLabel="Previous" nextLabel="Next" keyExtractor={item => item} activeId={activeId} onActiveIdChange={activeId => setActiveId(activeId)} onClose={() => setActiveId(null)} items={["1", "2", "3"]} render={item => <Item item={item} />} />
    </StoryBlock>;
}`,...(B=(C=d.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};const xe=["Default"];export{d as Default,xe as __namedExportsOrder,fe as default};
//# sourceMappingURL=ListRightPanel.stories-GtViXBsc.js.map
