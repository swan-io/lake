import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-ots-TLQY.js";import{Bt as r,Et as i,Ft as a,J as o,U as s,W as c,ct as l,g as u,h as ee,ht as d,i as f,m as te,mt as ne,o as p,ot as re,p as m,r as h,s as g,vt as _}from"./ScrollView-LrDPrXJY.js";import{r as ie,t as v}from"./LakeButton-Bi5mE1pc.js";import{n as y,t as b}from"./function-DtaVL2va.js";import{a as x,s as S}from"./i18n-DT7ryGwk.js";import{n as ae,t as oe}from"./ResponsiveContainer-BwdTtBTK.js";import{r as C,t as w}from"./LakeStepper-D28EG-4T.js";import{r as T,t as E}from"./Tile-CTLomHah.js";import{n as D,r as O,t as k}from"./_StoriesComponents-YXCrnI-r.js";import{n as A,r as j,t as M}from"./types-imy6TUil.js";var N,P,F=t((()=>{c(),j(),N=A.filter(e=>e!==`Intro`),P=({activeStep:e,detailsSteps:t,getLabel:n})=>{let r=M.filter(n=>n===e||t.includes(n)),i=s(e).returnType().with(`Card`,`Transfer`,`Fraudster`,e=>({step:`Details`,subStepIndex:r.indexOf(e),subStepCount:r.length})).with(`Victim`,`Transactions`,`Incident`,`Documents`,`Submitted`,e=>({step:e,subStepIndex:0,subStepCount:1})).exhaustive(),a=N.indexOf(i.step);return{steps:N.map(e=>e===`Details`&&r.length>0?{label:n(e),children:r.map(t=>({id:t,label:n(e)}))}:{id:e,label:n(e)}),activeStepId:e,currentLabel:n(i.step),position:a+1,total:N.length,progress:(a+(i.subStepIndex+1)/i.subStepCount)/N.length}}})),I,L,R,z,B,V,H,U=t((()=>{u(),ie(),C(),g(),ae(),f(),_(),re(),I=e(n()),i(),c(),F(),x(),L=o(),R=r.create({root:{alignSelf:`stretch`},progress:{height:3,borderRadius:10,backgroundColor:d.gray[100]},progressFill:{height:`100%`,borderRadius:10,backgroundColor:d.current[500],transitionDuration:`300ms`,transitionProperty:`width`}}),z=(0,I.createContext)(!1),B=e=>s(e).with(`Victim`,()=>S(`fraudReport.step.victim`)).with(`Transactions`,()=>S(`fraudReport.step.transactions`)).with(`Incident`,()=>S(`fraudReport.step.incident`)).with(`Details`,()=>S(`fraudReport.step.details`)).with(`Documents`,()=>S(`fraudReport.step.documents`)).with(`Submitted`,()=>S(`fraudReport.step.confirmation`)).exhaustive(),V=({activeStep:e,detailsSteps:t,children:n})=>{let r=P({activeStep:e,detailsSteps:t,getLabel:B});return(0,L.jsx)(oe,{breakpoint:ne.medium,style:R.root,children:({small:e})=>(0,L.jsxs)(z.Provider,{value:e,children:[e?(0,L.jsxs)(a,{children:[(0,L.jsx)(p,{variant:`smallMedium`,color:d.current[500],children:r.currentLabel}),(0,L.jsx)(p,{variant:`smallRegular`,color:d.gray[500],children:S(`fraudReport.stepCount`,{current:r.position,total:r.total})}),(0,L.jsx)(h,{height:12}),(0,L.jsx)(a,{style:R.progress,children:(0,L.jsx)(a,{style:[R.progressFill,{width:`${r.progress*100}%`}]})})]}):(0,L.jsx)(w,{steps:r.steps,activeStepId:r.activeStepId}),(0,L.jsx)(h,{height:e?24:48}),n]})})},H=({onPrevious:e,onNext:t,loading:n,nextDisabled:r})=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h,{height:(0,I.useContext)(z)?24:32}),(0,L.jsxs)(ee,{direction:`row`,children:[l(e)?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(v,{mode:`secondary`,color:`gray`,disabled:n,onPress:e,children:S(`common.previous`)}),(0,L.jsx)(h,{width:12})]}):null,(0,L.jsx)(v,{color:`current`,ariaLabel:n===!0?S(`fraudReport.continue`):void 0,loading:n,disabled:r,onPress:t,children:S(`fraudReport.continue`)})]})]}),V.__docgenInfo={description:``,methods:[],displayName:`FraudReportLayout`,props:{activeStep:{required:!0,tsType:{name:`union`,raw:`| Exclude<FraudReportStepperStep, "Details">
| FraudReportDetailsStep`,elements:[{name:`Exclude`,elements:[{name:`Exclude`,elements:[{name:`unknown[number]`,raw:`(typeof fraudReportSteps)[number]`},{name:`literal`,value:`"Intro"`}],raw:`Exclude<FraudReportStep, "Intro">`},{name:`literal`,value:`"Details"`}],raw:`Exclude<FraudReportStepperStep, "Details">`},{name:`unknown[number]`,raw:`(typeof fraudReportDetailsSteps)[number]`}]},description:``},detailsSteps:{required:!0,tsType:{name:`unknown`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},H.__docgenInfo={description:``,methods:[],displayName:`FraudReportFooter`,props:{onPrevious:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNext:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``},nextDisabled:{required:!1,tsType:{name:`boolean`},description:``}}}})),W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),T(),te(),_(),b(),W=e(n()),i(),U(),j(),O(),G=o(),K={title:`Fraud report/FraudReportLayout`,component:V},q=r.create({mobile:{maxWidth:390}}),J=[`Card`,`Transfer`],Y=[`Victim`,`Transactions`,`Incident`,...J,`Documents`,`Submitted`],X=({step:e})=>(0,G.jsx)(E,{children:(0,G.jsx)(p,{color:d.gray[900],children:e})}),Z=()=>{let[e,t]=(0,W.useState)(0),n=Y[e]??`Victim`,r=(0,G.jsxs)(V,{activeStep:n,detailsSteps:J,children:[(0,G.jsx)(X,{step:n}),e<Y.length-1?(0,G.jsx)(H,{onPrevious:e>0?()=>t(e-1):void 0,onNext:()=>t(e+1)}):null]});return(0,G.jsx)(m,{variant:`live`,children:(0,G.jsxs)(k,{title:`Fraud report layout`,description:[`Stepper, step content and footer shared by the fraud report steps`],children:[(0,G.jsx)(D,{title:`Desktop`,children:r}),(0,G.jsx)(D,{title:`Mobile`,style:q.mobile,children:r})]})})},Q=()=>(0,G.jsx)(m,{variant:`live`,children:(0,G.jsxs)(k,{title:`Fraud report layout`,description:[`Stepper and footer states`],children:[(0,G.jsx)(D,{title:`First step`,children:(0,G.jsxs)(V,{activeStep:`Victim`,detailsSteps:J,children:[(0,G.jsx)(X,{step:`Victim`}),(0,G.jsx)(H,{onNext:y})]})}),(0,G.jsx)(D,{title:`Steps done`,children:(0,G.jsxs)(V,{activeStep:`Incident`,detailsSteps:J,children:[(0,G.jsx)(X,{step:`Incident`}),(0,G.jsx)(H,{onPrevious:y,onNext:y})]})}),(0,G.jsx)(D,{title:`Second of two Details sub-steps`,children:(0,G.jsx)(V,{activeStep:`Transfer`,detailsSteps:J,children:(0,G.jsx)(X,{step:`Transfer`})})}),(0,G.jsx)(D,{title:`First of three Details sub-steps`,children:(0,G.jsx)(V,{activeStep:`Card`,detailsSteps:M,children:(0,G.jsx)(X,{step:`Card`})})}),(0,G.jsx)(D,{title:`One Details sub-step`,children:(0,G.jsx)(V,{activeStep:`Transfer`,detailsSteps:[`Transfer`],children:(0,G.jsx)(X,{step:`Transfer`})})}),(0,G.jsx)(D,{title:`No Details sub-step`,children:(0,G.jsx)(V,{activeStep:`Victim`,detailsSteps:[],children:(0,G.jsx)(X,{step:`Victim`})})}),(0,G.jsx)(D,{title:`Last step`,children:(0,G.jsx)(V,{activeStep:`Submitted`,detailsSteps:J,children:(0,G.jsx)(X,{step:`Submitted`})})}),(0,G.jsx)(D,{title:`Second of two Details sub-steps, mobile`,style:q.mobile,children:(0,G.jsxs)(V,{activeStep:`Transfer`,detailsSteps:J,children:[(0,G.jsx)(X,{step:`Transfer`}),(0,G.jsx)(H,{onPrevious:y,onNext:y})]})}),(0,G.jsx)(D,{title:`Footer, loading`,children:(0,G.jsx)(H,{onPrevious:y,onNext:y,loading:!0})}),(0,G.jsx)(D,{title:`Footer, next disabled`,children:(0,G.jsx)(H,{onPrevious:y,onNext:y,nextDisabled:!0})})]})}),Z.__docgenInfo={description:``,methods:[],displayName:`Interactive`},Q.__docgenInfo={description:``,methods:[],displayName:`States`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FraudReportLayout.stories-BbGRpAy5.js.map