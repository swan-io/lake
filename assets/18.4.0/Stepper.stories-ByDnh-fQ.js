import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-JzLbtQ7K.js";import{G as r,J as i,U as a,W as o,g as s,h as c,i as l,m as u,ot as d,p as f,r as p,ut as m}from"./ScrollView-BoHfu2ui.js";import{r as h,t as g}from"./LakeButton-DAb3FBGs.js";import{r as _,t as v}from"./_StoriesComponents-2HyyYJs8.js";import{n as y,r as b,t as x}from"./LakeStepper-B1UEgWZm.js";var S,C,w,T,E,D,O;t((()=>{S=e(n()),o(),s(),h(),b(),l(),u(),d(),_(),C=i(),w={title:`Forms/Stepper`,component:x},T=[{id:`enter_your_email`,label:`Enter your e-mail`,url:`#`},{label:`Fill in the form`,children:[{id:`fill_in_the_form_part_1`,label:`Fill in the form part 1`,url:`#`},{id:`fill_in_the_form_part_2`,label:`Fill in the form part 2`,url:`#`}]},{id:`add_an_owner`,label:`Add an owner`,url:`#`},{label:`Attach the documents`,children:[{id:`attach_the_documents_part_1`,label:`Attach the documents part 1`,url:`#`},{id:`attach_the_documents_part_2`,label:`Attach the documents part 2`,url:`#`},{id:`attach_the_documents_part_3`,label:`Attach the documents part 3`,url:`#`}]},{id:`finalize`,label:`Finalize`,url:`#`}],E=T.flatMap(e=>a(e).with({id:r.string},({id:e})=>[e]).with({children:r.array(r.any)},({children:e})=>e.map(e=>e.id)).exhaustive()),D=()=>{let[e,t]=(0,S.useState)(`attach_the_documents_part_2`);return(0,C.jsxs)(f,{variant:`live`,children:[(0,C.jsxs)(v,{title:`Stepper`,children:[(0,C.jsx)(x,{steps:T,activeStepId:e}),(0,C.jsx)(p,{height:32}),(0,C.jsxs)(c,{direction:`row`,children:[(0,C.jsx)(g,{size:`small`,icon:`chevron-left-filled`,color:`current`,onPress:()=>{let n=E.indexOf(e),r=E[n-1];m(r)||t(r)},ariaLabel:`Previous`}),(0,C.jsx)(p,{width:16}),(0,C.jsx)(g,{size:`small`,icon:`chevron-right-filled`,color:`current`,onPress:()=>{let n=E.indexOf(e),r=E[n+1];m(r)||t(r)},ariaLabel:`Next`})]})]}),(0,C.jsx)(v,{title:`Mobile Stepper`,children:(0,C.jsx)(y,{steps:T,activeStepId:e})})]})},D.__docgenInfo={description:``,methods:[],displayName:`Interactive`},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}},O=[`Interactive`]}))();export{D as Interactive,O as __namedExportsOrder,w as default};
//# sourceMappingURL=Stepper.stories-ByDnh-fQ.js.map