import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-CAf5UnDd.js";import{Bt as r,C as i,Et as a,Ft as o,G as s,K as c,L as l,U as u,W as d,X as f,et as p,g as m,h,ht as g,i as _,m as v,o as y,p as b,r as x,s as S,vt as C}from"./ScrollView-CngNdHRP.js";import{r as w,t as T}from"./LakeButton-CyAN0VOb.js";import{r as E,t as D}from"./_StoriesComponents-CzBpHI1t.js";import{n as O,t as k}from"./dist-DP_Wrw3-.js";import{n as A,t as j}from"./Grid-BiDWFce8.js";var M,N,P,F,I,L,R,z=t((()=>{i(),k(),a(),d(),C(),A(),S(),_(),M=p(),N={textDecoration:`none`},P=r.create({container:{alignItems:`flex-end`},bar:{width:`100%`,height:4,borderRadius:2,backgroundColor:g.gray[100],overflow:`hidden`,transformOrigin:`bottom`,transform:`scaleY(0.5)`,transitionDuration:`300ms`,transitionProperty:`transform`},barActive:{transform:`scaleY(1)`},progressBar:{width:`100%`,height:`100%`,backgroundColor:g.current[500],transformOrigin:`left`,transform:`scaleX(0)`,transitionDuration:`300ms`},progressBarDone:{transform:`scaleX(1)`},progressBarError:{backgroundColor:g.negative[500]}}),F=r.create({progress:{borderRadius:10,marginTop:10,height:3,backgroundColor:g.gray[100]},progressBar:{borderRadius:10,height:`100%`,backgroundColor:g.current[500],transitionDuration:`300ms`}}),I=({to:e,disabled:t,style:n,children:r})=>t?(0,M.jsx)(`span`,{style:n,children:r}):(0,M.jsx)(O,{to:e,style:n,children:r}),L=({steps:e,activeStepId:t,style:n})=>{let r=e.flatMap(e=>u(e).with({id:s.string},({id:e})=>[e]).with({children:s.array(s.any)},({children:e})=>e.map(({id:e})=>e)).exhaustive()),i=r.indexOf(t);return(0,M.jsx)(j,{numColumns:e.length,horizontalSpace:12,style:[P.container,n],children:e.map((e,n)=>{let a=n+1,c=u(e).with({id:s.string},({id:e})=>e).with({children:s.array(s.any)},({children:e})=>e[0]?.id??``).exhaustive(),l=u(e).with({id:t},()=>!0).with({children:s.array(s.any)},({children:e})=>e.some(({id:e})=>e===t)).otherwise(()=>!1),d=u(e).with({id:s.string},({id:e})=>r.indexOf(e)<i).with({children:s.array(s.any)},({children:e})=>e.every(({id:e})=>r.indexOf(e)<i)).exhaustive(),f=u(e).with({hasErrors:!0},()=>!0).with({children:s.array(s.any)},({children:e})=>e.some(({hasErrors:e})=>e===!0)).otherwise(()=>!1),p=u(e).with({id:s.string},({url:e})=>e).with({children:s.array(s.any)},({children:e})=>e[0]?.url??``).exhaustive(),m=u(e).with({id:s.string},e=>[e]).with({children:s.array(s.any)},({children:e})=>e).exhaustive();return(0,M.jsxs)(I,{to:p,disabled:!d,style:N,children:[(0,M.jsxs)(y,{variant:l?`medium`:`regular`,color:f&&(d||l)?g.negative[500]:l||d?g.current[500]:g.gray[300],children:[a,`. `,e.label]}),(0,M.jsx)(x,{height:12}),(0,M.jsx)(j,{numColumns:m.length,horizontalSpace:12,children:m.map(e=>{let n=e.id===t,a=r.indexOf(e.id)<i,s=e.hasErrors===!0;return(0,M.jsx)(o,{style:[P.bar,n&&P.barActive],children:(0,M.jsx)(o,{style:[P.progressBar,(n||a)&&P.progressBarDone,s&&P.progressBarError]})},e.id)})})]},c)})})},R=({steps:e,activeStepId:t})=>{let n=e.length;return l.fromNullable(e.flatMap((e,t)=>u(e).with({id:s.string},e=>({...e,number:`${t+1}`})).with({children:s.array(s.any)},({children:e})=>e.map((e,n)=>({...e,number:`${t+1}.${n+1}`}))).exhaustive()).find(({id:e})=>e===t)).map(({label:e,hasErrors:t,number:n})=>({number:n,label:e,isErrorState:t===!0})).match({Some:({number:e,label:t,isErrorState:r})=>{let i=`${Number.parseFloat(e)/n*100}%`;return(0,M.jsxs)(o,{children:[(0,M.jsx)(y,{variant:`medium`,color:r?g.negative[500]:g.current[500],children:t}),(0,M.jsxs)(y,{variant:`smallRegular`,color:g.gray[300],children:[e,` of `,n]}),(0,M.jsx)(o,{style:F.progress,children:(0,M.jsx)(o,{style:[F.progressBar,{width:i}]})})]})},None:()=>null})},L.__docgenInfo={description:``,methods:[],displayName:`LakeStepper`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`Step | StepWithChildren`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{ label: string; children: Step[] }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`children`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!1}}]}}],raw:`Step[]`,required:!0}}]}}]}],raw:`TopLevelStep[]`},description:``},activeStepId:{required:!0,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`StyleProp`,elements:[{name:`ViewStyle`}],raw:`StyleProp<ViewStyle>`},description:``}}}})),B,V,H,U,W,G,K;t((()=>{B=e(n()),d(),m(),w(),z(),_(),v(),c(),E(),V=p(),H={title:`Forms/Stepper`,component:L},U=[{id:`enter_your_email`,label:`Enter your e-mail`,url:`#`},{label:`Fill in the form`,children:[{id:`fill_in_the_form_part_1`,label:`Fill in the form part 1`,url:`#`},{id:`fill_in_the_form_part_2`,label:`Fill in the form part 2`,url:`#`}]},{id:`add_an_owner`,label:`Add an owner`,url:`#`},{label:`Attach the documents`,children:[{id:`attach_the_documents_part_1`,label:`Attach the documents part 1`,url:`#`},{id:`attach_the_documents_part_2`,label:`Attach the documents part 2`,url:`#`},{id:`attach_the_documents_part_3`,label:`Attach the documents part 3`,url:`#`}]},{id:`finalize`,label:`Finalize`,url:`#`}],W=U.flatMap(e=>u(e).with({id:s.string},({id:e})=>[e]).with({children:s.array(s.any)},({children:e})=>e.map(e=>e.id)).exhaustive()),G=()=>{let[e,t]=(0,B.useState)(`attach_the_documents_part_2`);return(0,V.jsxs)(b,{variant:`live`,children:[(0,V.jsxs)(D,{title:`Stepper`,children:[(0,V.jsx)(L,{steps:U,activeStepId:e}),(0,V.jsx)(x,{height:32}),(0,V.jsxs)(h,{direction:`row`,children:[(0,V.jsx)(T,{size:`small`,icon:`chevron-left-filled`,color:`current`,onPress:()=>{let n=W.indexOf(e),r=W[n-1];f(r)||t(r)},ariaLabel:`Previous`}),(0,V.jsx)(x,{width:16}),(0,V.jsx)(T,{size:`small`,icon:`chevron-right-filled`,color:`current`,onPress:()=>{let n=W.indexOf(e),r=W[n+1];f(r)||t(r)},ariaLabel:`Next`})]})]}),(0,V.jsx)(D,{title:`Mobile Stepper`,children:(0,V.jsx)(R,{steps:U,activeStepId:e})})]})},G.__docgenInfo={description:``,methods:[],displayName:`Interactive`},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [activeStepId, setActiveStepId] = useState("attach_the_documents_part_2");
  const setPreviousStep = () => {
    const currentIndex = stepIds.indexOf(activeStepId);
    const previousStepId = stepIds[currentIndex - 1];
    if (!isNullish(previousStepId)) {
      setActiveStepId(previousStepId);
    }
  };
  const setNextStep = () => {
    const currentIndex = stepIds.indexOf(activeStepId);
    const nextStepId = stepIds[currentIndex + 1];
    if (!isNullish(nextStepId)) {
      setActiveStepId(nextStepId);
    }
  };
  return <WithCurrentColor variant="live">
      <StoryBlock title="Stepper">
        <LakeStepper steps={steps} activeStepId={activeStepId} />
        <Space height={32} />

        <Box direction="row">
          <LakeButton size="small" icon="chevron-left-filled" color="current" onPress={setPreviousStep} ariaLabel="Previous" />

          <Space width={16} />

          <LakeButton size="small" icon="chevron-right-filled" color="current" onPress={setNextStep} ariaLabel="Next" />
        </Box>
      </StoryBlock>

      <StoryBlock title="Mobile Stepper">
        <MobileStepper steps={steps} activeStepId={activeStepId} />
      </StoryBlock>
    </WithCurrentColor>;
}`,...G.parameters?.docs?.source}}},K=[`Interactive`]}))();export{G as Interactive,K as __namedExportsOrder,H as default};
//# sourceMappingURL=Stepper.stories-Cx8PKakV.js.map