import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-lhskn-nq.js";import{E as r,F as i,M as a,N as o,O as s,P as c,U as l,g as u,h as d,ht as f,i as p,it as m,kt as h,m as g,o as _,p as v,r as y,s as b,st as x,wt as S,z as C}from"./ScrollView-CDZwE4p9.js";import{r as w,t as T}from"./LakeButton-CiAHUeEm.js";import{r as E,t as D}from"./_StoriesComponents-DcLheBv-.js";import{n as O,t as k}from"./dist-ByS9VY8u.js";import{n as A,t as j}from"./Grid-DfKvi_In.js";import{n as M}from"./LakeHeading-DjMsOx8_.js";var N,P,F,I,L,R,z,B=t((()=>{r(),k(),f(),o(),x(),u(),A(),M(),b(),p(),N=l(),P={textDecoration:`none`},F=h.create({container:{alignItems:`flex-end`},bar:{width:`100%`,height:4,borderRadius:2,backgroundColor:m.gray[100],overflow:`hidden`,transformOrigin:`bottom`,transform:`scaleY(0.5)`,transitionDuration:`300ms`,transitionProperty:`transform`},barActive:{transform:`scaleY(1)`},progressBar:{width:`100%`,height:`100%`,backgroundColor:m.current[500],transformOrigin:`left`,transform:`scaleX(0)`,transitionDuration:`300ms`},progressBarDone:{transform:`scaleX(1)`},progressBarError:{backgroundColor:m.negative[500]},mobileContainer:{borderBottomWidth:1,borderBottomColor:m.gray[100],paddingBottom:10},mobileNumber:{minWidth:28,height:24,borderRadius:12,borderWidth:1,borderColor:m.current[100],backgroundColor:m.current[50]},mobileNumberError:{borderColor:m.negative[100],backgroundColor:m.negative[50]}}),I=h.create({progress:{borderRadius:10,marginTop:10,height:3,backgroundColor:m.gray[100]},progressBar:{borderRadius:10,height:`100%`,backgroundColor:m.current[500],transitionDuration:`300ms`}}),L=({to:e,disabled:t,style:n,children:r})=>t?(0,N.jsx)(`span`,{style:n,children:r}):(0,N.jsx)(O,{to:e,style:n,children:r}),R=({steps:e,activeStepId:t,style:n})=>{let r=e.flatMap(e=>a(e).with({id:c.string},({id:e})=>[e]).with({children:c.array(c.any)},({children:e})=>e.map(({id:e})=>e)).exhaustive()),i=r.indexOf(t);return(0,N.jsx)(j,{numColumns:e.length,horizontalSpace:12,style:[F.container,n],children:e.map((e,n)=>{let o=n+1,s=a(e).with({id:c.string},({id:e})=>e).with({children:c.array(c.any)},({children:e})=>e[0]?.id??``).exhaustive(),l=a(e).with({id:t},()=>!0).with({children:c.array(c.any)},({children:e})=>e.some(({id:e})=>e===t)).otherwise(()=>!1),u=a(e).with({id:c.string},({id:e})=>r.indexOf(e)<i).with({children:c.array(c.any)},({children:e})=>e.every(({id:e})=>r.indexOf(e)<i)).exhaustive(),d=a(e).with({hasErrors:!0},()=>!0).with({children:c.array(c.any)},({children:e})=>e.some(({hasErrors:e})=>e===!0)).otherwise(()=>!1),f=a(e).with({id:c.string},({url:e})=>e).with({children:c.array(c.any)},({children:e})=>e[0]?.url??``).exhaustive(),p=a(e).with({id:c.string},e=>[e]).with({children:c.array(c.any)},({children:e})=>e).exhaustive();return(0,N.jsxs)(L,{to:f,disabled:!u,style:P,children:[(0,N.jsxs)(_,{variant:l?`medium`:`regular`,color:d&&(u||l)?m.negative[500]:l||u?m.current[500]:m.gray[300],children:[o,`. `,e.label]}),(0,N.jsx)(y,{height:12}),(0,N.jsx)(j,{numColumns:p.length,horizontalSpace:12,children:p.map(e=>{let n=e.id===t,a=r.indexOf(e.id)<i,o=e.hasErrors===!0;return(0,N.jsx)(S,{style:[F.bar,n&&F.barActive],children:(0,N.jsx)(S,{style:[F.progressBar,(n||a)&&F.progressBarDone,o&&F.progressBarError]})},e.id)})})]},s)})})},z=({steps:e,activeStepId:t})=>{let n=e.length;return s.fromNullable(e.flatMap((e,t)=>a(e).with({id:c.string},e=>({...e,number:`${t+1}`})).with({children:c.array(c.any)},({children:e})=>e.map((e,n)=>({...e,number:`${t+1}.${n+1}`}))).exhaustive()).find(({id:e})=>e===t)).map(({label:e,hasErrors:t,number:n})=>({number:n,label:e,isErrorState:t===!0})).match({Some:({number:e,label:t,isErrorState:r})=>{let i=`${Number.parseFloat(e)/n*100}%`;return(0,N.jsxs)(S,{children:[(0,N.jsx)(_,{variant:`medium`,color:r?m.negative[500]:m.current[500],children:t}),(0,N.jsxs)(_,{variant:`smallRegular`,color:m.gray[300],children:[e,` of `,n]}),(0,N.jsx)(S,{style:I.progress,children:(0,N.jsx)(S,{style:[I.progressBar,{width:i}]})})]})},None:()=>null})},R.__docgenInfo={description:``,methods:[],displayName:`LakeStepper`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`Step | StepWithChildren`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{ label: string; children: Step[] }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`children`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!1}}]}}],raw:`Step[]`,required:!0}}]}}]}],raw:`TopLevelStep[]`},description:``},activeStepId:{required:!0,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`StyleProp`,elements:[{name:`ViewStyle`}],raw:`StyleProp<ViewStyle>`},description:``}}}})),V,H,U,W,G,K,q;t((()=>{V=e(n()),o(),u(),w(),B(),p(),g(),i(),E(),H=l(),U={title:`Forms/Stepper`,component:R},W=[{id:`enter_your_email`,label:`Enter your e-mail`,url:`#`},{label:`Fill in the form`,children:[{id:`fill_in_the_form_part_1`,label:`Fill in the form part 1`,url:`#`},{id:`fill_in_the_form_part_2`,label:`Fill in the form part 2`,url:`#`}]},{id:`add_an_owner`,label:`Add an owner`,url:`#`},{label:`Attach the documents`,children:[{id:`attach_the_documents_part_1`,label:`Attach the documents part 1`,url:`#`},{id:`attach_the_documents_part_2`,label:`Attach the documents part 2`,url:`#`},{id:`attach_the_documents_part_3`,label:`Attach the documents part 3`,url:`#`}]},{id:`finalize`,label:`Finalize`,url:`#`}],G=W.flatMap(e=>a(e).with({id:c.string},({id:e})=>[e]).with({children:c.array(c.any)},({children:e})=>e.map(e=>e.id)).exhaustive()),K=()=>{let[e,t]=(0,V.useState)(`attach_the_documents_part_2`);return(0,H.jsxs)(v,{variant:`live`,children:[(0,H.jsxs)(D,{title:`Stepper`,children:[(0,H.jsx)(R,{steps:W,activeStepId:e}),(0,H.jsx)(y,{height:32}),(0,H.jsxs)(d,{direction:`row`,children:[(0,H.jsx)(T,{size:`small`,icon:`chevron-left-filled`,color:`current`,onPress:()=>{let n=G[G.indexOf(e)-1];C(n)||t(n)},ariaLabel:`Previous`}),(0,H.jsx)(y,{width:16}),(0,H.jsx)(T,{size:`small`,icon:`chevron-right-filled`,color:`current`,onPress:()=>{let n=G[G.indexOf(e)+1];C(n)||t(n)},ariaLabel:`Next`})]})]}),(0,H.jsx)(D,{title:`Mobile Stepper`,children:(0,H.jsx)(z,{steps:W,activeStepId:e})})]})},K.__docgenInfo={description:``,methods:[],displayName:`Interactive`},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q=[`Interactive`]}))();export{K as Interactive,q as __namedExportsOrder,U as default};
//# sourceMappingURL=Stepper.stories-DMPOUM4S.js.map