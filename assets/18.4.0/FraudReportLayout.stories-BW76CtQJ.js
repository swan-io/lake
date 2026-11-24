import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-cbox4dvP.js";import{Bt as r,Et as i,Ft as a,J as o,U as s,W as c,ct as l,g as u,h as d,ht as f,i as ee,m as te,mt as p,o as m,ot as h,p as g,r as _,s as v,vt as y}from"./ScrollView-5lth53La.js";import{r as b,t as x}from"./LakeButton-Blwtamhw.js";import{n as S,t as C}from"./function-BKzT7H04.js";import{a as ne,s as w}from"./i18n-C0f0zhwH.js";import{n as re,t as T}from"./Grid-Bx6nqe46.js";import{n as E,t as D}from"./ResponsiveContainer-BbkdfgD8.js";import{r as O,t as k}from"./Tile-IWLJUxtm.js";import{n as A,r as j,t as M}from"./_StoriesComponents-COdi9wLi.js";import{n as N,r as P,t as F}from"./types-imy6TUil.js";var I,L,R,z,B,V,H,U=t((()=>{u(),re(),b(),v(),E(),ee(),y(),h(),i(),c(),P(),ne(),I=o(),L=r.create({root:{alignSelf:`stretch`},steps:{alignItems:`flex-end`},bar:{width:`100%`,height:4,borderRadius:2,backgroundColor:f.gray[200],overflow:`hidden`,transformOrigin:`bottom`,transform:`scaleY(0.5)`,transitionDuration:`300ms`,transitionProperty:`transform`},barActive:{transform:`scaleY(1)`},barFill:{width:`100%`,height:`100%`,backgroundColor:f.current[500],transformOrigin:`left`,transform:`scaleX(0)`,transitionDuration:`300ms`,transitionProperty:`transform`},barFilled:{transform:`scaleX(1)`},progress:{height:3,borderRadius:10,backgroundColor:f.gray[100]},progressFill:{height:`100%`,borderRadius:10,backgroundColor:f.current[500],transitionDuration:`300ms`,transitionProperty:`width`}}),R=N.filter(e=>e!==`Intro`),z=e=>s(e).with(`Victim`,()=>w(`fraudReport.step.victim`)).with(`Transactions`,()=>w(`fraudReport.step.transactions`)).with(`Incident`,()=>w(`fraudReport.step.incident`)).with(`Details`,()=>w(`fraudReport.step.details`)).with(`Documents`,()=>w(`fraudReport.step.documents`)).with(`Submitted`,()=>w(`fraudReport.step.confirmation`)).exhaustive(),B=(e,t)=>e<t?`Done`:e===t?`Active`:`Upcoming`,V=({activeStep:e,detailsSteps:t,children:n})=>{let r=s(e).returnType().with(`Card`,`Transfer`,`Fraudster`,e=>({step:`Details`,barIndex:Math.max(t.indexOf(e),0)})).with(`Victim`,`Transactions`,`Incident`,`Documents`,`Submitted`,e=>({step:e,barIndex:0})).exhaustive(),i=R.indexOf(r.step),o=e=>e===`Details`?Math.max(t.length,1):1,c=(i+(r.barIndex+1)/o(r.step))/R.length;return(0,I.jsx)(D,{breakpoint:p.medium,style:L.root,children:({small:e})=>(0,I.jsxs)(I.Fragment,{children:[e?(0,I.jsxs)(a,{children:[(0,I.jsx)(m,{variant:`smallMedium`,color:f.current[500],children:z(r.step)}),(0,I.jsx)(m,{variant:`smallRegular`,color:f.gray[500],children:w(`fraudReport.stepCount`,{current:i+1,total:R.length})}),(0,I.jsx)(_,{height:12}),(0,I.jsx)(a,{style:L.progress,children:(0,I.jsx)(a,{style:[L.progressFill,{width:`${c*100}%`}]})})]}):(0,I.jsx)(a,{role:`list`,children:(0,I.jsx)(T,{numColumns:R.length,horizontalSpace:12,style:L.steps,children:R.map((e,t)=>{let n=B(t,i),s=o(e),c=Array.from({length:s},(e,t)=>n===`Active`?B(t,r.barIndex):n);return(0,I.jsxs)(a,{role:`listitem`,"aria-current":n===`Active`?`step`:void 0,children:[(0,I.jsxs)(m,{variant:n===`Active`?`medium`:`regular`,color:n===`Upcoming`?f.gray[500]:f.current[500],children:[t+1,`. `,z(e)]}),(0,I.jsx)(_,{height:12}),(0,I.jsx)(T,{numColumns:s,horizontalSpace:12,children:c.map((e,t)=>(0,I.jsx)(a,{style:[L.bar,e===`Active`&&L.barActive],children:(0,I.jsx)(a,{style:[L.barFill,e!==`Upcoming`&&L.barFilled]})},t))})]},e)})})}),(0,I.jsx)(_,{height:e?24:48}),n]})})},H=({onPrevious:e,onNext:t,loading:n,nextDisabled:r})=>(0,I.jsx)(D,{breakpoint:p.medium,style:L.root,children:({small:i})=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(_,{height:i?24:32}),(0,I.jsxs)(d,{direction:`row`,children:[l(e)?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(x,{mode:`secondary`,color:`gray`,disabled:n,onPress:e,children:w(`common.previous`)}),(0,I.jsx)(_,{width:12})]}):null,(0,I.jsx)(x,{color:`current`,ariaLabel:w(`fraudReport.continue`),loading:n,disabled:r,onPress:t,children:w(`fraudReport.continue`)})]})]})}),V.__docgenInfo={description:``,methods:[],displayName:`FraudReportLayout`,props:{activeStep:{required:!0,tsType:{name:`union`,raw:`Exclude<LayoutStep, "Details"> | FraudReportDetailsStep`,elements:[{name:`Exclude`,elements:[{name:`Exclude`,elements:[{name:`unknown[number]`,raw:`(typeof fraudReportSteps)[number]`},{name:`literal`,value:`"Intro"`}],raw:`Exclude<FraudReportStep, "Intro">`},{name:`literal`,value:`"Details"`}],raw:`Exclude<LayoutStep, "Details">`},{name:`unknown[number]`,raw:`(typeof fraudReportDetailsSteps)[number]`}]},description:``},detailsSteps:{required:!0,tsType:{name:`unknown`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},H.__docgenInfo={description:``,methods:[],displayName:`FraudReportFooter`,props:{onPrevious:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNext:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``},nextDisabled:{required:!1,tsType:{name:`boolean`},description:``}}}})),W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),O(),te(),y(),C(),W=e(n()),i(),U(),P(),j(),G=o(),K={title:`Fraud report/FraudReportLayout`,component:V},q=r.create({mobile:{maxWidth:390}}),J=[`Card`,`Transfer`],Y=[`Victim`,`Transactions`,`Incident`,...J,`Documents`,`Submitted`],X=({step:e})=>(0,G.jsx)(k,{children:(0,G.jsx)(m,{color:f.gray[900],children:e})}),Z=()=>{let[e,t]=(0,W.useState)(0),n=Y[e]??`Victim`,r=(0,G.jsxs)(V,{activeStep:n,detailsSteps:J,children:[(0,G.jsx)(X,{step:n}),e<Y.length-1?(0,G.jsx)(H,{onPrevious:e>0?()=>t(e-1):void 0,onNext:()=>t(e+1)}):null]});return(0,G.jsx)(g,{variant:`live`,children:(0,G.jsxs)(M,{title:`Fraud report layout`,description:[`Stepper, step content and footer shared by the fraud report steps`],children:[(0,G.jsx)(A,{title:`Desktop`,children:r}),(0,G.jsx)(A,{title:`Mobile`,style:q.mobile,children:r})]})})},Q=()=>(0,G.jsx)(g,{variant:`live`,children:(0,G.jsxs)(M,{title:`Fraud report layout`,description:[`Stepper and footer states`],children:[(0,G.jsx)(A,{title:`First step`,children:(0,G.jsxs)(V,{activeStep:`Victim`,detailsSteps:J,children:[(0,G.jsx)(X,{step:`Victim`}),(0,G.jsx)(H,{onNext:S})]})}),(0,G.jsx)(A,{title:`Steps done`,children:(0,G.jsxs)(V,{activeStep:`Incident`,detailsSteps:J,children:[(0,G.jsx)(X,{step:`Incident`}),(0,G.jsx)(H,{onPrevious:S,onNext:S})]})}),(0,G.jsx)(A,{title:`Second of two Details sub-steps`,children:(0,G.jsx)(V,{activeStep:`Transfer`,detailsSteps:J,children:(0,G.jsx)(X,{step:`Transfer`})})}),(0,G.jsx)(A,{title:`First of three Details sub-steps`,children:(0,G.jsx)(V,{activeStep:`Card`,detailsSteps:F,children:(0,G.jsx)(X,{step:`Card`})})}),(0,G.jsx)(A,{title:`One Details sub-step`,children:(0,G.jsx)(V,{activeStep:`Transfer`,detailsSteps:[`Transfer`],children:(0,G.jsx)(X,{step:`Transfer`})})}),(0,G.jsx)(A,{title:`No Details sub-step`,children:(0,G.jsx)(V,{activeStep:`Victim`,detailsSteps:[],children:(0,G.jsx)(X,{step:`Victim`})})}),(0,G.jsx)(A,{title:`Last step`,children:(0,G.jsx)(V,{activeStep:`Submitted`,detailsSteps:J,children:(0,G.jsx)(X,{step:`Submitted`})})}),(0,G.jsx)(A,{title:`Second of two Details sub-steps, mobile`,style:q.mobile,children:(0,G.jsxs)(V,{activeStep:`Transfer`,detailsSteps:J,children:[(0,G.jsx)(X,{step:`Transfer`}),(0,G.jsx)(H,{onPrevious:S,onNext:S})]})}),(0,G.jsx)(A,{title:`Footer, loading`,children:(0,G.jsx)(H,{onPrevious:S,onNext:S,loading:!0})}),(0,G.jsx)(A,{title:`Footer, next disabled`,children:(0,G.jsx)(H,{onPrevious:S,onNext:S,nextDisabled:!0})})]})}),Z.__docgenInfo={description:``,methods:[],displayName:`Interactive`},Q.__docgenInfo={description:``,methods:[],displayName:`States`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const activeStep = steps[index] ?? "Victim";
  const layout = <FraudReportLayout activeStep={activeStep} detailsSteps={detailsSteps}>
      <StepContent step={activeStep} />

      {index < steps.length - 1 ? <FraudReportFooter onPrevious={index > 0 ? () => setIndex(index - 1) : undefined} onNext={() => setIndex(index + 1)} /> : null}
    </FraudReportLayout>;
  return <WithCurrentColor variant="live">
      <StoryBlock title="Fraud report layout" description={["Stepper, step content and footer shared by the fraud report steps"]}>
        <StoryPart title="Desktop">{layout}</StoryPart>

        <StoryPart title="Mobile" style={styles.mobile}>
          {layout}
        </StoryPart>
      </StoryBlock>
    </WithCurrentColor>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => <WithCurrentColor variant="live">
    <StoryBlock title="Fraud report layout" description={["Stepper and footer states"]}>
      <StoryPart title="First step">
        <FraudReportLayout activeStep="Victim" detailsSteps={detailsSteps}>
          <StepContent step="Victim" />
          <FraudReportFooter onNext={noop} />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="Steps done">
        <FraudReportLayout activeStep="Incident" detailsSteps={detailsSteps}>
          <StepContent step="Incident" />
          <FraudReportFooter onPrevious={noop} onNext={noop} />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="Second of two Details sub-steps">
        <FraudReportLayout activeStep="Transfer" detailsSteps={detailsSteps}>
          <StepContent step="Transfer" />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="First of three Details sub-steps">
        <FraudReportLayout activeStep="Card" detailsSteps={fraudReportDetailsSteps}>
          <StepContent step="Card" />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="One Details sub-step">
        <FraudReportLayout activeStep="Transfer" detailsSteps={["Transfer"]}>
          <StepContent step="Transfer" />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="No Details sub-step">
        <FraudReportLayout activeStep="Victim" detailsSteps={[]}>
          <StepContent step="Victim" />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="Last step">
        <FraudReportLayout activeStep="Submitted" detailsSteps={detailsSteps}>
          <StepContent step="Submitted" />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="Second of two Details sub-steps, mobile" style={styles.mobile}>
        <FraudReportLayout activeStep="Transfer" detailsSteps={detailsSteps}>
          <StepContent step="Transfer" />
          <FraudReportFooter onPrevious={noop} onNext={noop} />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="Footer, loading">
        <FraudReportFooter onPrevious={noop} onNext={noop} loading={true} />
      </StoryPart>

      <StoryPart title="Footer, next disabled">
        <FraudReportFooter onPrevious={noop} onNext={noop} nextDisabled={true} />
      </StoryPart>
    </StoryBlock>
  </WithCurrentColor>`,...Q.parameters?.docs?.source}}},$=[`Interactive`,`States`]}))();export{Z as Interactive,Q as States,$ as __namedExportsOrder,K as default};
//# sourceMappingURL=FraudReportLayout.stories-BW76CtQJ.js.map