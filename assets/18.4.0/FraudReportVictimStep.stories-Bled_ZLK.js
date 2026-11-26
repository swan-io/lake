import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-JzLbtQ7K.js";import{Bt as r,C as i,Et as a,Ft as o,J as s,L as c,U as l,W as u,c as ee,g as d,h as te,ht as f,i as p,m,o as h,p as g,r as _,s as v,u as y,vt as b}from"./ScrollView-BoHfu2ui.js";import{n as x,t as ne}from"./function-CBTloWJg.js";import{a as re,r as ie,s as S}from"./i18n-ByQYyIiX.js";import{n as ae,t as oe}from"./LakeSelect-N60SKCcY.js";import{n as C,t as w}from"./LakeLabel-aAEblYr5.js";import{n as se,t as T}from"./RadioGroup-B82QjPtv.js";import{r as ce,t as le}from"./Tile-BSE6H1zf.js";import{n as E,r as D,t as O}from"./_StoriesComponents-BTpmj4PJ.js";import{i as k,n as ue,r as A,t as de}from"./FraudReportLayout-CvFDoMwS.js";var j,M,N,P,F=t((()=>{i(),u(),j=({currentAccountMembership:e,accountMemberships:t})=>t.filter(({id:t})=>e.match({Some:e=>t!==e.id,None:()=>!0})),M=({currentAccountMembership:e,victimAccountMembershipId:t})=>{let n=c.fromUndefined(t);return{answer:e.flatMap(e=>n.map(t=>t===e.id?`Myself`:`SomeoneElse`)),selectedId:n}},N=({currentAccountMembership:e,accountMemberships:t,choice:n})=>n.selectedId.filter(n=>j({currentAccountMembership:e,accountMemberships:t}).some(e=>e.id===n)),P=({currentAccountMembership:e,accountMemberships:t,choice:n})=>{let r=N({currentAccountMembership:e,accountMemberships:t,choice:n});return e.match({None:()=>r,Some:e=>n.answer.flatMap(t=>l(t).with(`Myself`,()=>c.Some(e.id)).with(`SomeoneElse`,()=>r).exhaustive())})}})),I,L,R,z,B=t((()=>{i(),d(),C(),ae(),v(),y(),se(),p(),ce(),b(),I=e(n()),a(),F(),re(),A(),L=s(),R=r.create({column:{flexBasis:0,flexGrow:1}}),z=({currentAccountMembership:e,accountMemberships:t,values:n,onNext:r})=>{let i=k(),[a,s]=(0,I.useState)(()=>M({currentAccountMembership:e,victimAccountMembershipId:n.victimAccountMembershipId})),l=N({currentAccountMembership:e,accountMemberships:t,choice:a}),u=P({currentAccountMembership:e,accountMemberships:t,choice:a}),d=[{name:S(`common.yes`),value:`Myself`},{name:S(`common.no`),value:`SomeoneElse`}],p=j({currentAccountMembership:e,accountMemberships:t}).map(({id:e,name:t})=>({name:t,value:e})),m=(0,L.jsx)(w,{label:S(`fraudReport.victim.memberLabel`),help:i||e.isNone()?void 0:(0,L.jsx)(ee,{text:S(`fraudReport.victim.memberHelp`),focusable:!0}),render:e=>(0,L.jsx)(oe,{id:e,items:p,value:l.toUndefined(),onValueChange:e=>s(t=>({...t,selectedId:c.Some(e)}))})});return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(le,{title:S(`fraudReport.victim.title`),description:S(`fraudReport.victim.description`),children:e.match({None:()=>m,Some:e=>(0,L.jsxs)(te,{direction:i?`column`:`row`,children:[(0,L.jsxs)(o,{style:!i&&R.column,children:[(0,L.jsx)(w,{type:`radioGroup`,label:S(`fraudReport.victim.forYourself`),render:()=>(0,L.jsx)(T,{direction:i?`column`:`row`,hideErrors:!0,items:d,value:a.answer.toUndefined(),onValueChange:e=>s(t=>({...t,answer:c.Some(e)}))})}),a.answer.toUndefined()===`Myself`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{height:40}),(0,L.jsx)(h,{variant:`medium`,color:f.gray[700],children:ie(`fraudReport.victim.reportingFor`,{name:e.name,highlight:e=>(0,L.jsx)(h,{variant:`medium`,color:f.current[500],children:e})})})]}):null]}),a.answer.toUndefined()===`SomeoneElse`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{width:24,height:24}),(0,L.jsx)(o,{style:!i&&R.column,children:m})]}):null]})})}),(0,L.jsx)(de,{nextDisabled:u.isNone(),onNext:()=>u.tapSome(e=>r({victimAccountMembershipId:e}))})]})},z.__docgenInfo={description:``,methods:[],displayName:`VictimStep`,props:{values:{required:!0,tsType:{name:`Pick`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`transactions`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; rail: FraudReportRail }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`rail`,value:{name:`union`,raw:`"Card" | "Transfer"`,elements:[{name:`literal`,value:`"Card"`},{name:`literal`,value:`"Transfer"`}],required:!0}}]}}],raw:`FraudReportTransaction[]`,required:!0}},{key:`victimAccountMembershipId`,value:{name:`string`,required:!1}},{key:`reportedReason`,value:{name:`union`,raw:`"Unauthorized" | "Manipulated"`,elements:[{name:`literal`,value:`"Unauthorized"`},{name:`literal`,value:`"Manipulated"`}],required:!1}},{key:`reportedTypology`,value:{name:`union`,raw:`| "FakeAdvisor"
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
}`,signature:{properties:[{key:`transactions`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; rail: FraudReportRail }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`rail`,value:{name:`union`,raw:`"Card" | "Transfer"`,elements:[{name:`literal`,value:`"Card"`},{name:`literal`,value:`"Transfer"`}],required:!0}}]}}],raw:`FraudReportTransaction[]`,required:!0}},{key:`victimAccountMembershipId`,value:{name:`string`,required:!1}},{key:`reportedReason`,value:{name:`union`,raw:`"Unauthorized" | "Manipulated"`,elements:[{name:`literal`,value:`"Unauthorized"`},{name:`literal`,value:`"Manipulated"`}],required:!1}},{key:`reportedTypology`,value:{name:`union`,raw:`| "FakeAdvisor"
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
| "None"`,elements:[{name:`literal`,value:`"SwanPasscode"`},{name:`literal`,value:`"PartnerPassword"`},{name:`literal`,value:`"VerificationCode"`},{name:`literal`,value:`"PersonalInformation"`},{name:`literal`,value:`"CardDetails"`},{name:`literal`,value:`"BankDetails"`},{name:`literal`,value:`"Other"`},{name:`literal`,value:`"None"`}]}],raw:`SharedInformationWithFraudster[]`,required:!1}},{key:`isLostOrStolen`,value:{name:`boolean`,required:!1}},{key:`lostOrStolenNoticedAt`,value:{name:`string`,required:!1}},{key:`externalReference`,value:{name:`string`,required:!1}}]}},{name:`K`}],raw:`Pick<FraudReportFormValues, K>`},name:`values`}],return:{name:`void`}}},description:``},currentAccountMembership:{required:!0,tsType:{name:`Option`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; name: string }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Option<FraudReportAccountMembership>`},description:``},accountMemberships:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; name: string }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`FraudReportAccountMembership[]`},description:``}}}})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{i(),v(),p(),m(),ne(),V=e(n()),a(),A(),B(),D(),H=s(),U={title:`Fraud report/FraudReportVictimStep`,component:z},W=r.create({mobile:{maxWidth:390}}),G={id:`member-1`,name:`Julia Fox`},K=[G,{id:`member-2`,name:`Nicolas Saison`},{id:`member-3`,name:`Ada Lovelace`}],q=c.Some(G),J=c.None(),Y=({currentAccountMembership:e,victimAccountMembershipId:t,onNext:n=x})=>(0,H.jsx)(ue,{activeStep:`Victim`,detailsSteps:[],children:(0,H.jsx)(z,{currentAccountMembership:e,accountMemberships:K,values:{victimAccountMembershipId:t},onNext:n})}),X=({title:e,currentAccountMembership:t})=>{let[n,r]=(0,V.useState)();return(0,H.jsxs)(E,{title:e,children:[(0,H.jsx)(Y,{currentAccountMembership:t,onNext:e=>r(JSON.stringify(e))}),(0,H.jsx)(_,{height:16}),(0,H.jsxs)(h,{children:[`onNext: `,n??`not called`]})]})},Z=()=>(0,H.jsx)(g,{variant:`live`,children:(0,H.jsxs)(O,{title:`Victim step`,description:[`Who the fraud was committed against`],children:[(0,H.jsx)(X,{title:`Member`,currentAccountMembership:q}),(0,H.jsx)(X,{title:`Operator`,currentAccountMembership:J})]})}),Q=()=>(0,H.jsx)(g,{variant:`live`,children:(0,H.jsxs)(O,{title:`Victim step`,description:[`Victim step states`],children:[(0,H.jsx)(E,{title:`Member, no answer yet`,children:(0,H.jsx)(Y,{currentAccountMembership:q})}),(0,H.jsx)(E,{title:`Member, reporting for themselves`,children:(0,H.jsx)(Y,{currentAccountMembership:q,victimAccountMembershipId:`member-1`})}),(0,H.jsx)(E,{title:`Member, reporting for another member`,children:(0,H.jsx)(Y,{currentAccountMembership:q,victimAccountMembershipId:`member-2`})}),(0,H.jsx)(E,{title:`Member, previous victim no longer listed`,children:(0,H.jsx)(Y,{currentAccountMembership:q,victimAccountMembershipId:`member-9`})}),(0,H.jsx)(E,{title:`Operator, no member picked`,children:(0,H.jsx)(Y,{currentAccountMembership:J})}),(0,H.jsx)(E,{title:`Operator, a member picked`,children:(0,H.jsx)(Y,{currentAccountMembership:J,victimAccountMembershipId:`member-3`})}),(0,H.jsx)(E,{title:`Member, reporting for themselves, mobile`,style:W.mobile,children:(0,H.jsx)(Y,{currentAccountMembership:q,victimAccountMembershipId:`member-1`})}),(0,H.jsx)(E,{title:`Member, reporting for another member, mobile`,style:W.mobile,children:(0,H.jsx)(Y,{currentAccountMembership:q,victimAccountMembershipId:`member-2`})}),(0,H.jsx)(E,{title:`Operator, a member picked, mobile`,style:W.mobile,children:(0,H.jsx)(Y,{currentAccountMembership:J,victimAccountMembershipId:`member-3`})})]})}),Z.__docgenInfo={description:``,methods:[],displayName:`Interactive`},Q.__docgenInfo={description:``,methods:[],displayName:`States`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => <WithCurrentColor variant="live">
    <StoryBlock title="Victim step" description={["Who the fraud was committed against"]}>
      <InteractivePart title="Member" currentAccountMembership={asMember} />
      <InteractivePart title="Operator" currentAccountMembership={asOperator} />
    </StoryBlock>
  </WithCurrentColor>`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => <WithCurrentColor variant="live">
    <StoryBlock title="Victim step" description={["Victim step states"]}>
      <StoryPart title="Member, no answer yet">
        <Step currentAccountMembership={asMember} />
      </StoryPart>

      <StoryPart title="Member, reporting for themselves">
        <Step currentAccountMembership={asMember} victimAccountMembershipId="member-1" />
      </StoryPart>

      <StoryPart title="Member, reporting for another member">
        <Step currentAccountMembership={asMember} victimAccountMembershipId="member-2" />
      </StoryPart>

      <StoryPart title="Member, previous victim no longer listed">
        <Step currentAccountMembership={asMember} victimAccountMembershipId="member-9" />
      </StoryPart>

      <StoryPart title="Operator, no member picked">
        <Step currentAccountMembership={asOperator} />
      </StoryPart>

      <StoryPart title="Operator, a member picked">
        <Step currentAccountMembership={asOperator} victimAccountMembershipId="member-3" />
      </StoryPart>

      <StoryPart title="Member, reporting for themselves, mobile" style={styles.mobile}>
        <Step currentAccountMembership={asMember} victimAccountMembershipId="member-1" />
      </StoryPart>

      <StoryPart title="Member, reporting for another member, mobile" style={styles.mobile}>
        <Step currentAccountMembership={asMember} victimAccountMembershipId="member-2" />
      </StoryPart>

      <StoryPart title="Operator, a member picked, mobile" style={styles.mobile}>
        <Step currentAccountMembership={asOperator} victimAccountMembershipId="member-3" />
      </StoryPart>
    </StoryBlock>
  </WithCurrentColor>`,...Q.parameters?.docs?.source}}},$=[`Interactive`,`States`]}))();export{Z as Interactive,Q as States,$ as __namedExportsOrder,U as default};
//# sourceMappingURL=FraudReportVictimStep.stories-Bled_ZLK.js.map