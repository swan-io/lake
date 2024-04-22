import{s as b,b as m,J as O,$ as L,o as u,j as e,V as k,B as j,H as P,S as G,c as p}from"./Space-BWfEUChJ.js";import{r as h}from"./index-CBqU2yxZ.js";import{L as f}from"./LakeButton-Dc18w6LU.js";import{L as Y}from"./LakeHeading-CsHk_0za.js";import{u as g,T as S}from"./TransitionView-DBPRGHtc.js";import{n as R}from"./function-B_pffWFs.js";import{S as $,L as J}from"./Suspendable-BCxE0MfD.js";import{R as U}from"./RightPanel-B7aIKh-Q.js";import{S as q}from"./_StoriesComponents-DYQz1sEa.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-BWpnb3-9.js";import"./index-mKv4xz1S.js";import"./useBodyClassName-FAgY5CgW.js";import"./FocusTrap-C3KiEsBv.js";import"./a11y-DXvpDVrG.js";import"./array-rjEBP2Ry.js";import"./ResponsiveContainer-COPvrtZp.js";const a=b.create({details:{paddingBottom:m[24],paddingTop:m[12],flexGrow:1},detailsContents:{...b.absoluteFillObject},detailsContainer:{flexGrow:1},content:{paddingHorizontal:m[24]},contentLarge:{paddingHorizontal:m[40]}}),N=h.forwardRef(({items:o,keyExtractor:s,activeId:n,onActiveIdChange:y,onClose:x,render:I,closeLabel:D,previousLabel:F,nextLabel:V},z)=>{const l=o.find(t=>s(t)===n),i=O.findIndex(o,t=>s(t)===n).toUndefined(),w=g(n),v=g(l),c=g(i),E=typeof i=="number"&&typeof c=="number"?L({activeItemIndex:i,previousIndex:c}).when(({activeItemIndex:t,previousIndex:r})=>t<r,()=>u.fadeAndSlideInFromTop).when(({activeItemIndex:t,previousIndex:r})=>t>r,()=>u.fadeAndSlideInFromBottom).otherwise(()=>null):null,H=typeof i=="number"&&typeof c=="number"?L({activeItemIndex:i,previousIndex:c}).when(({activeItemIndex:t,previousIndex:r})=>t<r,()=>u.fadeAndSlideInFromBottom).when(({activeItemIndex:t,previousIndex:r})=>t>r,()=>u.fadeAndSlideInFromTop).otherwise(()=>null):null;return e.jsx(U,{ref:z,visible:l!=null,onPressClose:x,children:({large:t})=>e.jsxs(k,{style:a.details,children:[e.jsxs(j,{direction:"row",justifyContent:"spaceBetween",style:t?a.contentLarge:a.content,children:[e.jsx(f,{mode:"tertiary",icon:"lake-close",ariaLabel:D,onPress:x}),e.jsxs(j,{direction:"row",justifyContent:"spaceBetween",children:[e.jsx(f,{mode:"tertiary",ariaLabel:F,icon:"arrow-left-regular",disabled:i===0,onPress:()=>{typeof i=="number"&&P.fromNullable(o[i-1]).match({Some:r=>y(s(r)),None:R})}}),e.jsx(f,{mode:"tertiary",ariaLabel:V,icon:"arrow-right-regular",disabled:i===o.length-1,onPress:()=>{typeof i=="number"&&P.fromNullable(o[i+1]).match({Some:r=>y(s(r)),None:R})}})]})]}),e.jsx(G,{height:12}),e.jsx(k,{style:a.detailsContainer,children:l!=null?[h.createElement(S,{...E,key:n,style:a.detailsContents},v!=null?e.jsx($,{fallback:e.jsx(J,{color:p.current[500],delay:0}),children:I(l,t)}):I(l,t)),...v!=null&&w!==n?[h.createElement(S,{...H,key:w,style:a.detailsContents},null)]:[]]:null})]})})}),T=N;N.__docgenInfo={description:"",methods:[],displayName:"ListRightPanel_"};const K=b.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:p.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:p.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:p.gray[200],borderRadius:8}}),ge={title:"Layout/ListRightPanel",component:T},C={},M=({item:o})=>{if(C[o]!==!0)throw new Promise(s=>{setTimeout(()=>{C[o]=!0,s(void 0)},500)});return e.jsxs(Y,{level:1,variant:"h1",children:["Item ",o]})},d=()=>{const[o,s]=h.useState(null);return e.jsxs(q,{title:"RightPanel",description:["RightPanel is a component that allows you to render a panel on the right side of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[e.jsx(f,{onPress:()=>s("1"),size:"small",style:K.button,children:"Open right panel"}),e.jsx(T,{closeLabel:"Close",previousLabel:"Previous",nextLabel:"Next",keyExtractor:n=>n,activeId:o,onActiveIdChange:n=>s(n),onClose:()=>s(null),items:["1","2","3"],render:n=>e.jsx(M,{item:n})})]})};d.__docgenInfo={description:"",methods:[],displayName:"Default"};var B,A,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [activeId, setActiveId] = useState<string | null>(null);
  return <StoryBlock title="RightPanel" description={["RightPanel is a component that allows you to render a panel on the right side of the screen.", "To make this component work, you need a root element with the id \`full-page-layer-root\` below your #root-app element", "You can open it by clicking on the button below."]}>
      <LakeButton onPress={() => setActiveId("1")} size="small" style={styles.button}>
        Open right panel
      </LakeButton>

      <ListRightPanel closeLabel="Close" previousLabel="Previous" nextLabel="Next" keyExtractor={item => item} activeId={activeId} onActiveIdChange={activeId => setActiveId(activeId)} onClose={() => setActiveId(null)} items={["1", "2", "3"]} render={item => <Item item={item} />} />
    </StoryBlock>;
}`,...(_=(A=d.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const be=["Default"];export{d as Default,be as __namedExportsOrder,ge as default};
//# sourceMappingURL=ListRightPanel.stories-C1XXukaF.js.map