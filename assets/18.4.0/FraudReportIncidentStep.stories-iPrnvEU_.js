import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{a as n}from"./iframe-DvQnMLAd.js";import{B as r,Bt as i,C as a,Et as o,Ft as s,J as c,U as l,W as u,m as d,p as f}from"./ScrollView-ChBvlOEV.js";import{n as p,t as m}from"./function-DRp3rAdX.js";import{n as ee,t as te}from"./LakeTextInput-QZ5erPp-.js";import{a as ne,s as h}from"./i18n-CNNAo2Vo.js";import{n as re,t as ie}from"./LakeSelect-CGvU0eGv.js";import{n as ae,t as g}from"./LakeLabel-JuifbLbz.js";import{n as oe,t as se}from"./Grid-BcSm02IY.js";import{n as _,t as ce}from"./RadioGroup-BrOa7xL3.js";import{i as v,t as le}from"./Tile-BcRMbqPu.js";import{n as y,r as ue,t as de}from"./_StoriesComponents-YlLPzTrC.js";import{n as fe,t as pe}from"./dist-Baj0-cgv.js";import{n as me,t as he}from"./InlineDatePicker-CDsy3gwp.js";import{i as b,n as x,r as S,t as C}from"./FraudReportLayout-DTKWM5zK.js";var w,T,E,D,O,k=t((()=>{w=e(n()),T=2e3,E=e=>e==null?`Required`:void 0,D=e=>{if(e==null||e===``)return;let t=w.default.utc(e,`YYYY-MM-DD`,!0);if(!t.isValid())return`InvalidDate`;if(t.isAfter(w.default.utc(),`day`))return`DateInFuture`},O=e=>{if(e==null||e.trim()===``)return`Required`;if(e.length>2e3)return`TooLong`}})),A,j,M=t((()=>{a(),oe(),ae(),re(),ee(),_(),v(),pe(),u(),k(),ne(),me(),S(),A=c(),j=({values:e,onNext:t,onPrevious:n,loading:i})=>{let a=b(),{Field:o,submitForm:s}=fe({reportedReason:{initialValue:e.reportedReason,validate:E},description:{initialValue:e.description??``,validate:O},reportedTypology:{initialValue:e.reportedTypology,validate:E},discoveredAt:{initialValue:e.discoveredAt,validate:D}}),c=[{name:h(`common.yes`),value:`Manipulated`},{name:h(`common.no`),value:`Unauthorized`}],u=r({FakeAdvisor:h(`fraudReport.incident.typology.FakeAdvisor`),ImpersonationOrPhishing:h(`fraudReport.incident.typology.ImpersonationOrPhishing`),FakeWebsite:h(`fraudReport.incident.typology.FakeWebsite`),FakeSupplierOrInvoice:h(`fraudReport.incident.typology.FakeSupplierOrInvoice`),InvestmentScam:h(`fraudReport.incident.typology.InvestmentScam`),RomanceScam:h(`fraudReport.incident.typology.RomanceScam`),Other:h(`fraudReport.incident.typology.Other`)}).map(([e,t])=>({name:t,value:e}));return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(le,{title:h(`fraudReport.incident.title`),description:h(`fraudReport.incident.description`),children:[(0,A.jsx)(o,{name:`reportedReason`,children:({value:e,error:t,onChange:n})=>(0,A.jsx)(g,{type:`radioGroup`,label:h(`fraudReport.incident.reasonLabel`),render:()=>(0,A.jsx)(ce,{direction:a?`column`:`row`,items:c,value:e,error:t===`Required`?h(`fraudReport.incident.reasonRequired`):void 0,onValueChange:n})})}),(0,A.jsx)(o,{name:`description`,children:({ref:e,value:t,error:n,onChange:r,onBlur:i})=>(0,A.jsx)(g,{label:h(`fraudReport.incident.whatHappenedLabel`),render:a=>(0,A.jsx)(te,{id:a,ref:e,multiline:!0,placeholder:h(`fraudReport.incident.whatHappenedPlaceholder`),value:t,error:l(n).with(`Required`,()=>h(`fraudReport.incident.whatHappenedRequired`)).with(`TooLong`,()=>h(`fraudReport.incident.whatHappenedTooLong`,{max:T})).otherwise(()=>void 0),onChangeText:r,onBlur:i})})}),(0,A.jsxs)(se,{numColumns:a?1:2,horizontalSpace:24,children:[(0,A.jsx)(o,{name:`reportedTypology`,children:({ref:e,value:t,error:n,onChange:r})=>(0,A.jsx)(g,{label:h(`fraudReport.incident.typologyLabel`),render:i=>(0,A.jsx)(ie,{id:i,ref:e,items:u,value:t,error:n===`Required`?h(`fraudReport.incident.typologyRequired`):void 0,onValueChange:r})})}),(0,A.jsx)(o,{name:`discoveredAt`,children:({value:e,error:t,onChange:n})=>(0,A.jsx)(he,{label:h(`fraudReport.incident.noticedAtLabel`),optionalLabel:h(`common.optional`),responsive:!a,value:e,error:l(t).with(`InvalidDate`,()=>h(`fraudReport.incident.noticedAtInvalid`)).with(`DateInFuture`,()=>h(`fraudReport.incident.noticedAtInFuture`)).otherwise(()=>void 0),validate:()=>void 0,onValueChange:n})})]})]}),(0,A.jsx)(C,{onPrevious:n,onNext:()=>s({onSuccess:({reportedReason:e,reportedTypology:n,description:r,discoveredAt:i})=>t({reportedReason:e.toUndefined(),reportedTypology:n.toUndefined(),description:r.toUndefined(),discoveredAt:i.toUndefined()})}),loading:i})]})},j.__docgenInfo={description:``,methods:[],displayName:`IncidentStep`,props:{values:{required:!0,tsType:{name:`Pick`,elements:[{name:`signature`,type:`object`,raw:`{
  transactions: FraudReportTransaction[];
  victimAccountMembershipId?: string;
  reportedReason?: FraudReason;
  reportedTypology?: FraudTypology;
  description?: string;
  discoveredAt?: string;
  discoveryDetails?: string;
  fraudsterChannels?: FraudsterChannel[];
  sharedInformationWithFraudster?: SharedInformationWithFraudster[];
  isLostOrStolen?: boolean;
  lostOrStolenNoticedAt?: string;
  externalReference?: string;
}`,signature:{properties:[{key:`transactions`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  rail: FraudReportRail;
  type: FraudReportTransactionType;
  executionDate: string;
  counterparty: string;
  amount: { value: string; currency: string };
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`rail`,value:{name:`union`,raw:`"Card" | "Transfer"`,elements:[{name:`literal`,value:`"Card"`},{name:`literal`,value:`"Transfer"`}],required:!0}},{key:`type`,value:{name:`union`,raw:`| "CardOutDebit"
| "SepaCreditTransferOut"
| "SepaInstantCreditTransferOut"
| "InternationalCreditTransferOut"
| "InternalCreditTransferOut"`,elements:[{name:`literal`,value:`"CardOutDebit"`},{name:`literal`,value:`"SepaCreditTransferOut"`},{name:`literal`,value:`"SepaInstantCreditTransferOut"`},{name:`literal`,value:`"InternationalCreditTransferOut"`},{name:`literal`,value:`"InternalCreditTransferOut"`}],required:!0}},{key:`executionDate`,value:{name:`string`,required:!0}},{key:`counterparty`,value:{name:`string`,required:!0}},{key:`amount`,value:{name:`signature`,type:`object`,raw:`{ value: string; currency: string }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}}]},required:!0}}]}}],raw:`FraudReportTransaction[]`,required:!0}},{key:`victimAccountMembershipId`,value:{name:`string`,required:!1}},{key:`reportedReason`,value:{name:`union`,raw:`"Unauthorized" | "Manipulated"`,elements:[{name:`literal`,value:`"Unauthorized"`},{name:`literal`,value:`"Manipulated"`}],required:!1}},{key:`reportedTypology`,value:{name:`union`,raw:`| "FakeAdvisor"
| "ImpersonationOrPhishing"
| "FakeWebsite"
| "FakeSupplierOrInvoice"
| "InvestmentScam"
| "RomanceScam"
| "Other"`,elements:[{name:`literal`,value:`"FakeAdvisor"`},{name:`literal`,value:`"ImpersonationOrPhishing"`},{name:`literal`,value:`"FakeWebsite"`},{name:`literal`,value:`"FakeSupplierOrInvoice"`},{name:`literal`,value:`"InvestmentScam"`},{name:`literal`,value:`"RomanceScam"`},{name:`literal`,value:`"Other"`}],required:!1}},{key:`description`,value:{name:`string`,required:!1}},{key:`discoveredAt`,value:{name:`string`,required:!1}},{key:`discoveryDetails`,value:{name:`string`,required:!1}},{key:`fraudsterChannels`,value:{name:`Array`,elements:[{name:`union`,raw:`"Email" | "Sms" | "Phone" | "Website" | "Application" | "Other"`,elements:[{name:`literal`,value:`"Email"`},{name:`literal`,value:`"Sms"`},{name:`literal`,value:`"Phone"`},{name:`literal`,value:`"Website"`},{name:`literal`,value:`"Application"`},{name:`literal`,value:`"Other"`}]}],raw:`FraudsterChannel[]`,required:!1}},{key:`sharedInformationWithFraudster`,value:{name:`Array`,elements:[{name:`union`,raw:`| "SwanPasscode"
| "PartnerPassword"
| "VerificationCode"
| "PersonalInformation"
| "CardDetails"
| "BankDetails"
| "Other"
| "None"`,elements:[{name:`literal`,value:`"SwanPasscode"`},{name:`literal`,value:`"PartnerPassword"`},{name:`literal`,value:`"VerificationCode"`},{name:`literal`,value:`"PersonalInformation"`},{name:`literal`,value:`"CardDetails"`},{name:`literal`,value:`"BankDetails"`},{name:`literal`,value:`"Other"`},{name:`literal`,value:`"None"`}]}],raw:`SharedInformationWithFraudster[]`,required:!1}},{key:`isLostOrStolen`,value:{name:`boolean`,required:!1}},{key:`lostOrStolenNoticedAt`,value:{name:`string`,required:!1}},{key:`externalReference`,value:{name:`string`,required:!1}}]}},{name:`K`}],raw:`Pick<FraudReportFormValues, K>`},description:``},onNext:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(values: Pick<FraudReportFormValues, K>) => void`,signature:{arguments:[{type:{name:`Pick`,elements:[{name:`signature`,type:`object`,raw:`{
  transactions: FraudReportTransaction[];
  victimAccountMembershipId?: string;
  reportedReason?: FraudReason;
  reportedTypology?: FraudTypology;
  description?: string;
  discoveredAt?: string;
  discoveryDetails?: string;
  fraudsterChannels?: FraudsterChannel[];
  sharedInformationWithFraudster?: SharedInformationWithFraudster[];
  isLostOrStolen?: boolean;
  lostOrStolenNoticedAt?: string;
  externalReference?: string;
}`,signature:{properties:[{key:`transactions`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  rail: FraudReportRail;
  type: FraudReportTransactionType;
  executionDate: string;
  counterparty: string;
  amount: { value: string; currency: string };
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`rail`,value:{name:`union`,raw:`"Card" | "Transfer"`,elements:[{name:`literal`,value:`"Card"`},{name:`literal`,value:`"Transfer"`}],required:!0}},{key:`type`,value:{name:`union`,raw:`| "CardOutDebit"
| "SepaCreditTransferOut"
| "SepaInstantCreditTransferOut"
| "InternationalCreditTransferOut"
| "InternalCreditTransferOut"`,elements:[{name:`literal`,value:`"CardOutDebit"`},{name:`literal`,value:`"SepaCreditTransferOut"`},{name:`literal`,value:`"SepaInstantCreditTransferOut"`},{name:`literal`,value:`"InternationalCreditTransferOut"`},{name:`literal`,value:`"InternalCreditTransferOut"`}],required:!0}},{key:`executionDate`,value:{name:`string`,required:!0}},{key:`counterparty`,value:{name:`string`,required:!0}},{key:`amount`,value:{name:`signature`,type:`object`,raw:`{ value: string; currency: string }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}}]},required:!0}}]}}],raw:`FraudReportTransaction[]`,required:!0}},{key:`victimAccountMembershipId`,value:{name:`string`,required:!1}},{key:`reportedReason`,value:{name:`union`,raw:`"Unauthorized" | "Manipulated"`,elements:[{name:`literal`,value:`"Unauthorized"`},{name:`literal`,value:`"Manipulated"`}],required:!1}},{key:`reportedTypology`,value:{name:`union`,raw:`| "FakeAdvisor"
| "ImpersonationOrPhishing"
| "FakeWebsite"
| "FakeSupplierOrInvoice"
| "InvestmentScam"
| "RomanceScam"
| "Other"`,elements:[{name:`literal`,value:`"FakeAdvisor"`},{name:`literal`,value:`"ImpersonationOrPhishing"`},{name:`literal`,value:`"FakeWebsite"`},{name:`literal`,value:`"FakeSupplierOrInvoice"`},{name:`literal`,value:`"InvestmentScam"`},{name:`literal`,value:`"RomanceScam"`},{name:`literal`,value:`"Other"`}],required:!1}},{key:`description`,value:{name:`string`,required:!1}},{key:`discoveredAt`,value:{name:`string`,required:!1}},{key:`discoveryDetails`,value:{name:`string`,required:!1}},{key:`fraudsterChannels`,value:{name:`Array`,elements:[{name:`union`,raw:`"Email" | "Sms" | "Phone" | "Website" | "Application" | "Other"`,elements:[{name:`literal`,value:`"Email"`},{name:`literal`,value:`"Sms"`},{name:`literal`,value:`"Phone"`},{name:`literal`,value:`"Website"`},{name:`literal`,value:`"Application"`},{name:`literal`,value:`"Other"`}]}],raw:`FraudsterChannel[]`,required:!1}},{key:`sharedInformationWithFraudster`,value:{name:`Array`,elements:[{name:`union`,raw:`| "SwanPasscode"
| "PartnerPassword"
| "VerificationCode"
| "PersonalInformation"
| "CardDetails"
| "BankDetails"
| "Other"
| "None"`,elements:[{name:`literal`,value:`"SwanPasscode"`},{name:`literal`,value:`"PartnerPassword"`},{name:`literal`,value:`"VerificationCode"`},{name:`literal`,value:`"PersonalInformation"`},{name:`literal`,value:`"CardDetails"`},{name:`literal`,value:`"BankDetails"`},{name:`literal`,value:`"Other"`},{name:`literal`,value:`"None"`}]}],raw:`SharedInformationWithFraudster[]`,required:!1}},{key:`isLostOrStolen`,value:{name:`boolean`,required:!1}},{key:`lostOrStolenNoticedAt`,value:{name:`string`,required:!1}},{key:`externalReference`,value:{name:`string`,required:!1}}]}},{name:`K`}],raw:`Pick<FraudReportFormValues, K>`},name:`values`}],return:{name:`void`}}},description:``},onPrevious:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``}}}})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),m(),o(),S(),M(),k(),ue(),N=c(),{expect:P,fn:F,waitFor:I,within:L}=__STORYBOOK_MODULE_TEST__,R={title:`Fraud report/FraudReportIncidentStep`,component:j},z=i.create({mobile:{maxWidth:390}}),B={reportedReason:`Manipulated`,reportedTypology:`FakeAdvisor`,description:`Someone called me pretending to be my bank advisor and asked me to approve a payment.`,discoveredAt:`2026-10-21`},V={...B,description:`a`.repeat(T+1),discoveredAt:`2999-01-01`},H=({values:e={},loading:t,onNext:n=p,onPrevious:r=p})=>(0,N.jsx)(x,{activeStep:`Incident`,detailsSteps:[],children:(0,N.jsx)(j,{values:e,loading:t,onNext:n,onPrevious:r})}),U={render:()=>(0,N.jsx)(f,{variant:`live`,children:(0,N.jsxs)(de,{title:`Incident step`,description:[`What happened during the fraud`],children:[(0,N.jsx)(y,{title:`Missing answers`,children:(0,N.jsx)(s,{testID:`missingAnswers`,children:(0,N.jsx)(H,{})})}),(0,N.jsx)(y,{title:`Invalid answers`,children:(0,N.jsx)(s,{testID:`invalidAnswers`,children:(0,N.jsx)(H,{values:V})})}),(0,N.jsx)(y,{title:`No answer yet`,children:(0,N.jsx)(H,{})}),(0,N.jsx)(y,{title:`Tricked into paying`,children:(0,N.jsx)(H,{values:B})}),(0,N.jsx)(y,{title:`Not tricked, no date`,children:(0,N.jsx)(H,{values:{reportedReason:`Unauthorized`,reportedTypology:`Other`,description:`I don't recognize this card payment.`}})}),(0,N.jsx)(y,{title:`Saving`,children:(0,N.jsx)(H,{values:B,loading:!0})}),(0,N.jsx)(y,{title:`No answer yet, mobile`,style:z.mobile,children:(0,N.jsx)(H,{})}),(0,N.jsx)(y,{title:`Tricked into paying, mobile`,style:z.mobile,children:(0,N.jsx)(H,{values:B})})]})}),play:async({canvas:e,userEvent:t})=>{for(let n of[`missingAnswers`,`invalidAnswers`])await t.click(L(e.getByTestId(n)).getByRole(`button`,{name:`Continue`}));await e.findByText(`Select Yes or No.`),await e.findByText(`Keep this under 2,000 characters.`)}},W=e=>(0,N.jsx)(f,{variant:`live`,children:(0,N.jsx)(H,{...e})}),G={args:{values:{},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Continue`})),await P(await t.findByText(`Select Yes or No.`)).toBeVisible(),await P(await t.findByText(`Tell us what happened.`)).toBeVisible(),await P(await t.findByText(`Select the type of fraud.`)).toBeVisible(),await P(e.onNext).not.toHaveBeenCalled()}},K={args:{values:V,onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Continue`})),await P(await t.findByText(`Keep this under 2,000 characters.`)).toBeVisible(),await P(await t.findByText(`Enter a date that's today or earlier.`)).toBeVisible(),await P(e.onNext).not.toHaveBeenCalled()}},q={args:{values:{...B,discoveredAt:void 0},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.type(t.getByPlaceholderText(`Day`),`31`),await n.click(t.getByRole(`button`,{name:`Month`})),await n.click(L(document.body).getByRole(`option`,{name:`February`})),await n.type(t.getByPlaceholderText(`Year`),`2026`),await n.click(t.getByRole(`button`,{name:`Continue`})),await P(await t.findByText(`Enter a valid date.`)).toBeVisible(),await P(e.onNext).not.toHaveBeenCalled()}},J={args:{values:{},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByText(`Yes`)),await n.type(t.getByRole(`textbox`,{name:`What happened`}),`A fake advisor`),await n.click(t.getByRole(`button`,{name:`Type of fraud`})),await n.click(L(document.body).getByRole(`option`,{name:`Fake bank advisor`})),await n.type(t.getByPlaceholderText(`Day`),`21`),await n.click(t.getByRole(`button`,{name:`Month`})),await n.click(L(document.body).getByRole(`option`,{name:`October`})),await n.type(t.getByPlaceholderText(`Year`),`2026`),await n.click(t.getByRole(`button`,{name:`Continue`})),await I(()=>P(e.onNext).toHaveBeenCalledTimes(1)),await P(e.onNext).toHaveBeenCalledWith({reportedReason:`Manipulated`,reportedTypology:`FakeAdvisor`,description:`A fake advisor`,discoveredAt:`2026-10-21`})}},Y={args:{values:B,onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByText(`No`)),await n.click(t.getByRole(`button`,{name:`Continue`})),await I(()=>P(e.onNext).toHaveBeenCalledTimes(1)),await P(e.onNext).toHaveBeenCalledWith({...B,reportedReason:`Unauthorized`})}},X={args:{values:{},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Previous`})),await P(e.onPrevious).toHaveBeenCalledTimes(1),await P(e.onNext).not.toHaveBeenCalled(),await P(t.queryByText(`Tell us what happened.`)).toBeNull()}},Z={args:{values:{...B,discoveredAt:void 0},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.type(t.getByPlaceholderText(`Day`),`21`),await n.click(t.getByRole(`button`,{name:`Month`})),await n.click(L(document.body).getByRole(`option`,{name:`October`})),await n.type(t.getByPlaceholderText(`Year`),`2026`),await n.clear(t.getByPlaceholderText(`Day`)),await P(await t.findByText(`Enter a valid date.`)).toBeVisible(),await n.clear(t.getByPlaceholderText(`Year`)),await I(()=>P(t.queryByText(`Enter a valid date.`)).toBeNull()),await n.click(t.getByRole(`button`,{name:`Continue`})),await I(()=>P(e.onNext).toHaveBeenCalledTimes(1)),await P(e.onNext).toHaveBeenCalledWith({...B,discoveredAt:void 0})}},Q={args:{values:B,onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.clear(t.getByPlaceholderText(`Day`)),await n.clear(t.getByPlaceholderText(`Year`)),await n.click(t.getByRole(`button`,{name:`Continue`})),await I(()=>P(e.onNext).toHaveBeenCalledTimes(1)),await P(e.onNext).toHaveBeenCalledWith({...B,discoveredAt:void 0})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <WithCurrentColor variant="live">
      <StoryBlock title="Incident step" description={["What happened during the fraud"]}>
        <StoryPart title="Missing answers">
          <View testID="missingAnswers">
            <Step />
          </View>
        </StoryPart>

        <StoryPart title="Invalid answers">
          <View testID="invalidAnswers">
            <Step values={invalidAnswers} />
          </View>
        </StoryPart>

        <StoryPart title="No answer yet">
          <Step />
        </StoryPart>

        <StoryPart title="Tricked into paying">
          <Step values={answers} />
        </StoryPart>

        <StoryPart title="Not tricked, no date">
          <Step values={{
          reportedReason: "Unauthorized",
          reportedTypology: "Other",
          description: "I don't recognize this card payment."
        }} />
        </StoryPart>

        <StoryPart title="Saving">
          <Step values={answers} loading={true} />
        </StoryPart>

        <StoryPart title="No answer yet, mobile" style={styles.mobile}>
          <Step />
        </StoryPart>

        <StoryPart title="Tricked into paying, mobile" style={styles.mobile}>
          <Step values={answers} />
        </StoryPart>
      </StoryBlock>
    </WithCurrentColor>,
  play: async ({
    canvas,
    userEvent
  }) => {
    for (const testId of ["missingAnswers", "invalidAnswers"]) {
      await userEvent.click(within(canvas.getByTestId(testId)).getByRole("button", {
        name: "Continue"
      }));
    }
    await canvas.findByText("Select Yes or No.");
    await canvas.findByText("Keep this under 2,000 characters.");
  }
}`,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    values: {},
    onNext: fn(),
    onPrevious: fn()
  },
  parameters: {
    a11y: {
      test: "off"
    }
  },
  render,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await expect(await canvas.findByText("Select Yes or No.")).toBeVisible();
    await expect(await canvas.findByText("Tell us what happened.")).toBeVisible();
    await expect(await canvas.findByText("Select the type of fraud.")).toBeVisible();
    await expect(args.onNext).not.toHaveBeenCalled();
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    values: invalidAnswers,
    onNext: fn(),
    onPrevious: fn()
  },
  parameters: {
    a11y: {
      test: "off"
    }
  },
  render,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await expect(await canvas.findByText("Keep this under 2,000 characters.")).toBeVisible();
    await expect(await canvas.findByText("Enter a date that's today or earlier.")).toBeVisible();
    await expect(args.onNext).not.toHaveBeenCalled();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      ...answers,
      discoveredAt: undefined
    },
    onNext: fn(),
    onPrevious: fn()
  },
  parameters: {
    a11y: {
      test: "off"
    }
  },
  render,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByPlaceholderText("Day"), "31");
    await userEvent.click(canvas.getByRole("button", {
      name: "Month"
    }));
    await userEvent.click(within(document.body).getByRole("option", {
      name: "February"
    }));
    await userEvent.type(canvas.getByPlaceholderText("Year"), "2026");
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await expect(await canvas.findByText("Enter a valid date.")).toBeVisible();
    await expect(args.onNext).not.toHaveBeenCalled();
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    values: {},
    onNext: fn(),
    onPrevious: fn()
  },
  parameters: {
    a11y: {
      test: "off"
    }
  },
  render,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByText("Yes"));
    await userEvent.type(canvas.getByRole("textbox", {
      name: "What happened"
    }), "A fake advisor");
    await userEvent.click(canvas.getByRole("button", {
      name: "Type of fraud"
    }));
    await userEvent.click(within(document.body).getByRole("option", {
      name: "Fake bank advisor"
    }));
    await userEvent.type(canvas.getByPlaceholderText("Day"), "21");
    await userEvent.click(canvas.getByRole("button", {
      name: "Month"
    }));
    await userEvent.click(within(document.body).getByRole("option", {
      name: "October"
    }));
    await userEvent.type(canvas.getByPlaceholderText("Year"), "2026");
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({
      reportedReason: "Manipulated",
      reportedTypology: "FakeAdvisor",
      description: "A fake advisor",
      discoveredAt: "2026-10-21"
    });
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    values: answers,
    onNext: fn(),
    onPrevious: fn()
  },
  parameters: {
    a11y: {
      test: "off"
    }
  },
  render,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByText("No"));
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({
      ...answers,
      reportedReason: "Unauthorized"
    });
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    values: {},
    onNext: fn(),
    onPrevious: fn()
  },
  parameters: {
    a11y: {
      test: "off"
    }
  },
  render,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Previous"
    }));
    await expect(args.onPrevious).toHaveBeenCalledTimes(1);
    await expect(args.onNext).not.toHaveBeenCalled();
    await expect(canvas.queryByText("Tell us what happened.")).toBeNull();
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      ...answers,
      discoveredAt: undefined
    },
    onNext: fn(),
    onPrevious: fn()
  },
  parameters: {
    a11y: {
      test: "off"
    }
  },
  render,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByPlaceholderText("Day"), "21");
    await userEvent.click(canvas.getByRole("button", {
      name: "Month"
    }));
    await userEvent.click(within(document.body).getByRole("option", {
      name: "October"
    }));
    await userEvent.type(canvas.getByPlaceholderText("Year"), "2026");
    await userEvent.clear(canvas.getByPlaceholderText("Day"));
    await expect(await canvas.findByText("Enter a valid date.")).toBeVisible();
    await userEvent.clear(canvas.getByPlaceholderText("Year"));
    await waitFor(() => expect(canvas.queryByText("Enter a valid date.")).toBeNull());
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({
      ...answers,
      discoveredAt: undefined
    });
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    values: answers,
    onNext: fn(),
    onPrevious: fn()
  },
  parameters: {
    a11y: {
      test: "off"
    }
  },
  render,
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.clear(canvas.getByPlaceholderText("Day"));
    await userEvent.clear(canvas.getByPlaceholderText("Year"));
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({
      ...answers,
      discoveredAt: undefined
    });
  }
}`,...Q.parameters?.docs?.source}}},$=[`States`,`MissingAnswers`,`InvalidAnswers`,`InvalidDate`,`Answer`,`PreviousAnswers`,`Previous`,`EmptiedDate`,`ClearedSavedDate`]}))();export{J as Answer,Q as ClearedSavedDate,Z as EmptiedDate,K as InvalidAnswers,q as InvalidDate,G as MissingAnswers,X as Previous,Y as PreviousAnswers,U as States,$ as __namedExportsOrder,R as default};
//# sourceMappingURL=FraudReportIncidentStep.stories-iPrnvEU_.js.map