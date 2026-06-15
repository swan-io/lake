import{c as e,i as t}from"./preload-helper-CxZGalNS.js";import{o as n}from"./iframe-9CQrC-Yq.js";import{E as r,F as i,M as a,N as o,O as s,P as c,St as l,U as u,bt as d,g as f,h as p,ht as m,i as h,it as g,m as _,o as v,p as y,r as b,s as x,st as S,z as C}from"./ScrollView-DfTIZO05.js";import{r as w,t as T}from"./LakeButton-CuFXpO80.js";import{r as E,t as D}from"./_StoriesComponents-BuFC0LuH.js";import{n as O,t as k}from"./dist-Ce5hxoMK.js";import{n as A,t as j}from"./Grid-CqkVO-5T.js";import{n as M}from"./LakeHeading-dLn7qVAv.js";var N,P,F,I,L,R,z,B=t((()=>{r(),k(),m(),o(),S(),f(),A(),M(),x(),h(),N=u(),P={textDecoration:`none`},F=l.create({container:{alignItems:`flex-end`},bar:{width:`100%`,height:4,borderRadius:2,backgroundColor:g.gray[100],overflow:`hidden`,transformOrigin:`bottom`,transform:`scaleY(0.5)`,transitionDuration:`300ms`,transitionProperty:`transform`},barActive:{transform:`scaleY(1)`},progressBar:{width:`100%`,height:`100%`,backgroundColor:g.current[500],transformOrigin:`left`,transform:`scaleX(0)`,transitionDuration:`300ms`},progressBarDone:{transform:`scaleX(1)`},progressBarError:{backgroundColor:g.negative[500]},mobileContainer:{borderBottomWidth:1,borderBottomColor:g.gray[100],paddingBottom:10},mobileNumber:{minWidth:28,height:24,borderRadius:12,borderWidth:1,borderColor:g.current[100],backgroundColor:g.current[50]},mobileNumberError:{borderColor:g.negative[100],backgroundColor:g.negative[50]}}),I=l.create({progress:{borderRadius:10,marginTop:10,height:3,backgroundColor:g.gray[100]},progressBar:{borderRadius:10,height:`100%`,backgroundColor:g.current[500],transitionDuration:`300ms`}}),L=({to:e,disabled:t,style:n,children:r})=>t?(0,N.jsx)(`span`,{style:n,children:r}):(0,N.jsx)(O,{to:e,style:n,children:r}),R=({steps:e,activeStepId:t,style:n})=>{let r=e.flatMap(e=>a(e).with({id:c.string},({id:e})=>[e]).with({children:c.array(c.any)},({children:e})=>e.map(({id:e})=>e)).exhaustive()),i=r.indexOf(t);return(0,N.jsx)(j,{numColumns:e.length,horizontalSpace:12,style:[F.container,n],children:e.map((e,n)=>{let o=n+1,s=a(e).with({id:c.string},({id:e})=>e).with({children:c.array(c.any)},({children:e})=>e[0]?.id??``).exhaustive(),l=a(e).with({id:t},()=>!0).with({children:c.array(c.any)},({children:e})=>e.some(({id:e})=>e===t)).otherwise(()=>!1),u=a(e).with({id:c.string},({id:e})=>r.indexOf(e)<i).with({children:c.array(c.any)},({children:e})=>e.every(({id:e})=>r.indexOf(e)<i)).exhaustive(),f=a(e).with({hasErrors:!0},()=>!0).with({children:c.array(c.any)},({children:e})=>e.some(({hasErrors:e})=>e===!0)).otherwise(()=>!1),p=a(e).with({id:c.string},({url:e})=>e).with({children:c.array(c.any)},({children:e})=>e[0]?.url??``).exhaustive(),m=a(e).with({id:c.string},e=>[e]).with({children:c.array(c.any)},({children:e})=>e).exhaustive();return(0,N.jsxs)(L,{to:p,disabled:!u,style:P,children:[(0,N.jsxs)(v,{variant:l?`medium`:`regular`,color:f&&(u||l)?g.negative[500]:l||u?g.current[500]:g.gray[300],children:[o,`. `,e.label]}),(0,N.jsx)(b,{height:12}),(0,N.jsx)(j,{numColumns:m.length,horizontalSpace:12,children:m.map(e=>{let n=e.id===t,a=r.indexOf(e.id)<i,o=e.hasErrors===!0;return(0,N.jsx)(d,{style:[F.bar,n&&F.barActive],children:(0,N.jsx)(d,{style:[F.progressBar,(n||a)&&F.progressBarDone,o&&F.progressBarError]})},e.id)})})]},s)})})},z=({steps:e,activeStepId:t})=>{let n=e.length;return s.fromNullable(e.flatMap((e,t)=>a(e).with({id:c.string},e=>({...e,number:`${t+1}`})).with({children:c.array(c.any)},({children:e})=>e.map((e,n)=>({...e,number:`${t+1}.${n+1}`}))).exhaustive()).find(({id:e})=>e===t)).map(({label:e,hasErrors:t,number:n})=>({number:n,label:e,isErrorState:t===!0})).match({Some:({number:e,label:t,isErrorState:r})=>{let i=`${Number.parseFloat(e)/n*100}%`;return(0,N.jsxs)(d,{children:[(0,N.jsx)(v,{variant:`medium`,color:r?g.negative[500]:g.current[500],children:t}),(0,N.jsxs)(v,{variant:`smallRegular`,color:g.gray[300],children:[e,` of `,n]}),(0,N.jsx)(d,{style:I.progress,children:(0,N.jsx)(d,{style:[I.progressBar,{width:i}]})})]})},None:()=>null})},R.__docgenInfo={description:``,methods:[],displayName:`LakeStepper`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`Step | StepWithChildren`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{ label: string; children: Step[] }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`children`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!1}}]}}],raw:`Step[]`,required:!0}}]}}]}],raw:`TopLevelStep[]`},description:``},activeStepId:{required:!0,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`StyleProp`,elements:[{name:`ViewStyle`}],raw:`StyleProp<ViewStyle>`},description:``}}}})),V,H,U,W,G,K,q;t((()=>{V=e(n()),o(),f(),w(),B(),h(),_(),i(),E(),H=u(),U={title:`Forms/Stepper`,component:R},W=[{id:`enter_your_email`,label:`Enter your e-mail`,url:`#`},{label:`Fill in the form`,children:[{id:`fill_in_the_form_part_1`,label:`Fill in the form part 1`,url:`#`},{id:`fill_in_the_form_part_2`,label:`Fill in the form part 2`,url:`#`}]},{id:`add_an_owner`,label:`Add an owner`,url:`#`},{label:`Attach the documents`,children:[{id:`attach_the_documents_part_1`,label:`Attach the documents part 1`,url:`#`},{id:`attach_the_documents_part_2`,label:`Attach the documents part 2`,url:`#`},{id:`attach_the_documents_part_3`,label:`Attach the documents part 3`,url:`#`}]},{id:`finalize`,label:`Finalize`,url:`#`}],G=W.flatMap(e=>a(e).with({id:c.string},({id:e})=>[e]).with({children:c.array(c.any)},({children:e})=>e.map(e=>e.id)).exhaustive()),K=()=>{let[e,t]=(0,V.useState)(`attach_the_documents_part_2`);return(0,H.jsxs)(y,{variant:`live`,children:[(0,H.jsxs)(D,{title:`Stepper`,children:[(0,H.jsx)(R,{steps:W,activeStepId:e}),(0,H.jsx)(b,{height:32}),(0,H.jsxs)(p,{direction:`row`,children:[(0,H.jsx)(T,{size:`small`,icon:`chevron-left-filled`,color:`current`,onPress:()=>{let n=G[G.indexOf(e)-1];C(n)||t(n)},ariaLabel:`Previous`}),(0,H.jsx)(b,{width:16}),(0,H.jsx)(T,{size:`small`,icon:`chevron-right-filled`,color:`current`,onPress:()=>{let n=G[G.indexOf(e)+1];C(n)||t(n)},ariaLabel:`Next`})]})]}),(0,H.jsx)(D,{title:`Mobile Stepper`,children:(0,H.jsx)(z,{steps:W,activeStepId:e})})]})},K.__docgenInfo={description:``,methods:[],displayName:`Interactive`},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Stepper.stories-dqm9tg-e.js.map