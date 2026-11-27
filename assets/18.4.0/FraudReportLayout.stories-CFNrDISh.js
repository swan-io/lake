import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-DvQnMLAd.js";import{Bt as r,Et as i,J as a,ht as o,m as s,o as c,p as l,s as u,vt as d}from"./ScrollView-ChBvlOEV.js";import{n as f,t as p}from"./function-DRp3rAdX.js";import{i as m,t as h}from"./Tile-BcRMbqPu.js";import{n as g,r as _,t as v}from"./_StoriesComponents-YlLPzTrC.js";import{r as y,t as b}from"./types-imy6TUil.js";import{n as x,r as S,t as C}from"./FraudReportLayout-DTKWM5zK.js";var w,T,E,D,O,k,A,j,M,N;t((()=>{u(),m(),s(),d(),p(),w=e(n()),i(),S(),y(),_(),T=a(),E={title:`Fraud report/FraudReportLayout`,component:x},D=r.create({mobile:{maxWidth:390}}),O=[`Card`,`Transfer`],k=[`Victim`,`Transactions`,`Incident`,...O,`Documents`,`Submitted`],A=({step:e})=>(0,T.jsx)(h,{children:(0,T.jsx)(c,{color:o.gray[900],children:e})}),j=()=>{let[e,t]=(0,w.useState)(0),n=k[e]??`Victim`,r=(0,T.jsxs)(x,{activeStep:n,detailsSteps:O,children:[(0,T.jsx)(A,{step:n}),e<k.length-1?(0,T.jsx)(C,{onPrevious:e>0?()=>t(e-1):void 0,onNext:()=>t(e+1)}):null]});return(0,T.jsx)(l,{variant:`live`,children:(0,T.jsxs)(v,{title:`Fraud report layout`,description:[`Stepper, step content and footer shared by the fraud report steps`],children:[(0,T.jsx)(g,{title:`Desktop`,children:r}),(0,T.jsx)(g,{title:`Mobile`,style:D.mobile,children:r})]})})},M=()=>(0,T.jsx)(l,{variant:`live`,children:(0,T.jsxs)(v,{title:`Fraud report layout`,description:[`Stepper and footer states`],children:[(0,T.jsx)(g,{title:`First step`,children:(0,T.jsxs)(x,{activeStep:`Victim`,detailsSteps:O,children:[(0,T.jsx)(A,{step:`Victim`}),(0,T.jsx)(C,{onNext:f})]})}),(0,T.jsx)(g,{title:`Steps done`,children:(0,T.jsxs)(x,{activeStep:`Incident`,detailsSteps:O,children:[(0,T.jsx)(A,{step:`Incident`}),(0,T.jsx)(C,{onPrevious:f,onNext:f})]})}),(0,T.jsx)(g,{title:`Second of two Details sub-steps`,children:(0,T.jsx)(x,{activeStep:`Transfer`,detailsSteps:O,children:(0,T.jsx)(A,{step:`Transfer`})})}),(0,T.jsx)(g,{title:`First of three Details sub-steps`,children:(0,T.jsx)(x,{activeStep:`Card`,detailsSteps:b,children:(0,T.jsx)(A,{step:`Card`})})}),(0,T.jsx)(g,{title:`One Details sub-step`,children:(0,T.jsx)(x,{activeStep:`Transfer`,detailsSteps:[`Transfer`],children:(0,T.jsx)(A,{step:`Transfer`})})}),(0,T.jsx)(g,{title:`No Details sub-step`,children:(0,T.jsx)(x,{activeStep:`Victim`,detailsSteps:[],children:(0,T.jsx)(A,{step:`Victim`})})}),(0,T.jsx)(g,{title:`Last step`,children:(0,T.jsx)(x,{activeStep:`Submitted`,detailsSteps:O,children:(0,T.jsx)(A,{step:`Submitted`})})}),(0,T.jsx)(g,{title:`Second of two Details sub-steps, mobile`,style:D.mobile,children:(0,T.jsxs)(x,{activeStep:`Transfer`,detailsSteps:O,children:[(0,T.jsx)(A,{step:`Transfer`}),(0,T.jsx)(C,{onPrevious:f,onNext:f})]})}),(0,T.jsx)(g,{title:`Footer, loading`,children:(0,T.jsx)(C,{onPrevious:f,onNext:f,loading:!0})}),(0,T.jsx)(g,{title:`Footer, next disabled`,children:(0,T.jsx)(C,{onPrevious:f,onNext:f,nextDisabled:!0})})]})}),j.__docgenInfo={description:``,methods:[],displayName:`Interactive`},M.__docgenInfo={description:``,methods:[],displayName:`States`},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => <WithCurrentColor variant="live">
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
  </WithCurrentColor>`,...M.parameters?.docs?.source}}},N=[`Interactive`,`States`]}))();export{j as Interactive,M as States,N as __namedExportsOrder,E as default};
//# sourceMappingURL=FraudReportLayout.stories-CFNrDISh.js.map