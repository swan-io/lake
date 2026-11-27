import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{a as n,o as r}from"./iframe-BN_FfkRD.js";import{Bt as ee,C as i,Et as a,J as o,U as s,W as c,g as l,h as te,ht as u,i as d,m as f,o as p,p as m,pt as ne,r as h,s as re,vt as g}from"./ScrollView-DEn6VEjc.js";import{r as _,t as v}from"./LakeButton-B_vieTWf.js";import{n as y,t as ie}from"./Tag-C8PnVfCL.js";import{n as ae,t as oe}from"./function-C8PUwO-Z.js";import{a as se,n as ce,o as le,r as ue,s as b}from"./i18n-CTK8XxPj.js";import{a as de,c as x,i as S,l as fe,o as C}from"./VirtualizedList-C5Gwvq9k.js";import{n as pe,t as me}from"./PlainListView-awsNO6uD.js";import{i as he,n as ge,t as _e}from"./Tile-Di0_iNA_.js";import{n as ve,t as ye}from"./EmptyView-BOVgYsUm.js";import{n as w,r as be,t as xe}from"./_StoriesComponents-Bax7KWGZ.js";import{i as Se,n as Ce,r as we,t as Te}from"./FraudReportLayout-C1KsDw4A.js";var Ee,De,Oe=t((()=>{Ee=e=>e.filter((t,n)=>e.findIndex(({id:e})=>e===t.id)===n),De=e=>({value:e.reduce((e,{amount:t})=>e+Math.round(Number(t.value)*100),0)/100,currency:e[0]?.amount.currency??`EUR`})})),ke,T,E,Ae,D,O,k,A,je,Me,j,Ne=t((()=>{l(),fe(),ve(),_(),re(),pe(),d(),y(),he(),g(),ke=e(n()),T=e(r()),c(),Oe(),se(),we(),E=o(),Ae=e=>s(e).with(`CardOutDebit`,()=>b(`fraudReport.transactions.paymentMethod.card`)).with(`SepaCreditTransferOut`,()=>b(`fraudReport.transactions.paymentMethod.sepaCreditTransfer`)).with(`SepaInstantCreditTransferOut`,()=>b(`fraudReport.transactions.paymentMethod.sepaInstantCreditTransfer`)).with(`InternationalCreditTransferOut`,()=>b(`fraudReport.transactions.paymentMethod.internationalCreditTransfer`)).with(`InternalCreditTransferOut`,()=>b(`fraudReport.transactions.paymentMethod.internalCreditTransfer`)).exhaustive(),D=e=>(0,E.jsx)(p,{variant:`medium`,color:u.current[500],children:e}),O=({executionDate:e})=>(0,ke.default)(e).format(le.dateFormat),k=({amount:e})=>ce(Number(e.value),e.currency),A={id:`remove`,width:56,title:``,renderTitle:()=>null,renderCell:({item:e,extraInfo:{disabled:t,onRemove:n,setRemoveButton:r}})=>(0,E.jsx)(S,{align:`right`,children:(0,E.jsx)(v,{ref:t=>r(e.id,t),mode:`tertiary`,size:`small`,color:`negative`,icon:`subtract-circle-regular`,disabled:t,ariaLabel:b(`fraudReport.transactions.remove`,{counterparty:e.counterparty,amount:k(e),date:O(e)}),onPress:()=>n(e.id)})})},je=[{id:`date`,width:120,title:b(`fraudReport.transactions.date`),renderTitle:({title:e})=>(0,E.jsx)(C,{text:e}),renderCell:({item:e})=>(0,E.jsx)(x,{text:O(e)})},{id:`counterparty`,width:`grow`,title:b(`fraudReport.transactions.paidTo`),renderTitle:({title:e})=>(0,E.jsx)(C,{text:e}),renderCell:({item:e})=>(0,E.jsx)(x,{text:e.counterparty})},{id:`amount`,width:130,title:b(`fraudReport.transactions.amount`),renderTitle:({title:e})=>(0,E.jsx)(C,{text:e}),renderCell:({item:e})=>(0,E.jsx)(x,{text:k(e)})},{id:`paymentMethod`,width:240,title:b(`fraudReport.transactions.paymentMethod`),renderTitle:({title:e})=>(0,E.jsx)(C,{text:e}),renderCell:({item:e})=>(0,E.jsx)(S,{children:(0,E.jsx)(ie,{color:`gray`,children:Ae(e.type)})})},{id:`transactionId`,width:`grow`,title:b(`fraudReport.transactions.transactionId`),renderTitle:({title:e})=>(0,E.jsx)(C,{text:e}),renderCell:({item:e})=>(0,E.jsx)(de,{text:e.id,copyWording:b(`copyButton.copyTooltip`),copiedWording:b(`copyButton.copiedTooltip`)})},A],Me=[{id:`summary`,width:`grow`,title:``,renderTitle:()=>null,renderCell:({item:e})=>(0,E.jsxs)(S,{direction:`column`,children:[(0,E.jsx)(p,{numberOfLines:1,color:u.gray[700],children:e.counterparty}),(0,E.jsx)(p,{variant:`medium`,color:u.gray[900],children:k(e)})]})},A],j=({values:e,onNext:t,onPrevious:n,loading:r,renderPicker:ee})=>{let i=Se(),[a,o]=(0,T.useState)(e.transactions),[s,c]=(0,T.useState)(!1),l=(0,T.useRef)(new Map),d=(0,T.useRef)(null),[f,m]=(0,T.useState)();(0,T.useEffect)(()=>{f!==void 0&&(f.id===null?d.current:l.current.get(f.id))?.focus()},[f]);let re=e=>{let t=a.findIndex(t=>t.id===e),n=a[t+1]??a[t-1];m({id:n?.id??null}),o(a.filter(t=>t.id!==e))},g=De(a),_=a.length===0,y=(0,E.jsx)(v,{ref:d,size:i?`large`:`small`,grow:i,mode:`secondary`,icon:`add-circle-regular`,disabled:r,onPress:()=>c(!0),children:b(`fraudReport.transactions.select`)});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_e,{title:b(`fraudReport.transactions.title`),description:b(`fraudReport.transactions.description`),children:(0,E.jsxs)(te,{direction:i?`column`:`row`,children:[(0,E.jsx)(p,{color:u.gray[700],children:ue(`fraudReport.transactions.total`,{amount:ce(g.value,g.currency),highlight:D})}),(0,E.jsx)(h,{width:32,height:8}),(0,E.jsx)(p,{color:u.gray[700],children:ue(`fraudReport.transactions.selectedCount`,{count:a.length,highlight:D})})]})}),(0,E.jsx)(h,{height:24}),(0,E.jsxs)(_e,{title:(0,E.jsxs)(E.Fragment,{children:[b(`fraudReport.transactions.listTitle`),(0,E.jsx)(h,{width:8}),(0,E.jsx)(ie,{color:_?`negative`:`gray`,children:String(a.length)})]}),headerEnd:i?void 0:y,children:[_?(0,E.jsx)(ye,{icon:`lake-inbox-empty`,borderedIcon:!0,title:b(`fraudReport.transactions.emptyTitle`),subtitle:i?void 0:b(`fraudReport.transactions.emptySubtitle`)}):(0,E.jsx)(ge,{children:(0,E.jsx)(me,{data:a,keyExtractor:({id:e})=>e,extraInfo:{disabled:r===!0,onRemove:re,setRemoveButton:(e,t)=>{t===null?l.current.delete(e):l.current.set(e,t)}},columns:je,smallColumns:Me,breakpoint:i?1/0:0,withoutScroll:!0,headerHeight:48,rowHeight:i?72:56,groupHeaderHeight:48,headerBackgroundColor:ne.accented})}),i?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(h,{height:24}),y]}):null]}),ee({visible:s,selected:a,onConfirm:e=>{o(Ee(e)),c(!1)},onClose:()=>c(!1)}),(0,E.jsx)(Te,{onPrevious:n,onNext:()=>t({transactions:a}),loading:r,nextDisabled:_})]})},j.__docgenInfo={description:``,methods:[],displayName:`TransactionsStep`,props:{values:{required:!0,tsType:{name:`Pick`,elements:[{name:`signature`,type:`object`,raw:`{
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
| "None"`,elements:[{name:`literal`,value:`"SwanPasscode"`},{name:`literal`,value:`"PartnerPassword"`},{name:`literal`,value:`"VerificationCode"`},{name:`literal`,value:`"PersonalInformation"`},{name:`literal`,value:`"CardDetails"`},{name:`literal`,value:`"BankDetails"`},{name:`literal`,value:`"Other"`},{name:`literal`,value:`"None"`}]}],raw:`SharedInformationWithFraudster[]`,required:!1}},{key:`isLostOrStolen`,value:{name:`boolean`,required:!1}},{key:`lostOrStolenNoticedAt`,value:{name:`string`,required:!1}},{key:`externalReference`,value:{name:`string`,required:!1}}]}},{name:`K`}],raw:`Pick<FraudReportFormValues, K>`},name:`values`}],return:{name:`void`}}},description:``},onPrevious:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``},renderPicker:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(props: FraudReportTransactionPickerProps) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  visible: boolean;
  selected: FraudReportTransaction[];
  onConfirm: (transactions: FraudReportTransaction[]) => void;
  onClose: () => void;
}`,signature:{properties:[{key:`visible`,value:{name:`boolean`,required:!0}},{key:`selected`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
| "InternalCreditTransferOut"`,elements:[{name:`literal`,value:`"CardOutDebit"`},{name:`literal`,value:`"SepaCreditTransferOut"`},{name:`literal`,value:`"SepaInstantCreditTransferOut"`},{name:`literal`,value:`"InternationalCreditTransferOut"`},{name:`literal`,value:`"InternalCreditTransferOut"`}],required:!0}},{key:`executionDate`,value:{name:`string`,required:!0}},{key:`counterparty`,value:{name:`string`,required:!0}},{key:`amount`,value:{name:`signature`,type:`object`,raw:`{ value: string; currency: string }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}}]},required:!0}}]}}],raw:`FraudReportTransaction[]`,required:!0}},{key:`onConfirm`,value:{name:`signature`,type:`function`,raw:`(transactions: FraudReportTransaction[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
| "InternalCreditTransferOut"`,elements:[{name:`literal`,value:`"CardOutDebit"`},{name:`literal`,value:`"SepaCreditTransferOut"`},{name:`literal`,value:`"SepaInstantCreditTransferOut"`},{name:`literal`,value:`"InternationalCreditTransferOut"`},{name:`literal`,value:`"InternalCreditTransferOut"`}],required:!0}},{key:`executionDate`,value:{name:`string`,required:!0}},{key:`counterparty`,value:{name:`string`,required:!0}},{key:`amount`,value:{name:`signature`,type:`object`,raw:`{ value: string; currency: string }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}}]},required:!0}}]}}],raw:`FraudReportTransaction[]`},name:`transactions`}],return:{name:`void`}},required:!0}},{key:`onClose`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}},name:`props`}],return:{name:`ReactNode`}}},description:``}}}})),Pe,M,Fe=t((()=>{i(),c(),Pe=e=>s(e).returnType().with(`CardOutDebit`,()=>`Card`).with(`SepaCreditTransferOut`,`SepaInstantCreditTransferOut`,`InternationalCreditTransferOut`,`InternalCreditTransferOut`,()=>`Transfer`).exhaustive(),M=(e,t,n={})=>({id:e,rail:Pe(t),type:t,executionDate:n.executionDate??`2026-11-04T10:00:00.000Z`,counterparty:n.counterparty??`Merchant ${e}`,amount:n.amount??{value:`10.00`,currency:`EUR`}})})),N,P,F,I,Ie,L,R,z,Le,B,V,Re,ze,H,U,W,G,K,q,J,Y,X,Z,Q,$,Be;t((()=>{l(),_(),d(),f(),oe(),a(),we(),Ne(),Fe(),be(),N=o(),{expect:P,fn:F,waitFor:I}=__STORYBOOK_MODULE_TEST__,Ie={title:`Fraud report/FraudReportTransactionsStep`,component:j},L=ee.create({mobile:{maxWidth:390}}),R=M(`abe8df9b-1877-46ac-8535-ed01d88be739`,`CardOutDebit`,{executionDate:`2026-11-04T09:12:00.000Z`,counterparty:`REWE`,amount:{value:`3010.99`,currency:`EUR`}}),z=M(`1de6ae7d-d05e-4dc0-8ed8-7c98c9849d69`,`SepaCreditTransferOut`,{executionDate:`2026-05-27T14:30:00.000Z`,counterparty:`Edeka`,amount:{value:`657.75`,currency:`EUR`}}),Le=M(`79a640cb-6223-423c-8321-4192f73f668b`,`SepaInstantCreditTransferOut`,{executionDate:`2026-07-26T08:05:00.000Z`,counterparty:`IKEA`,amount:{value:`8506.00`,currency:`EUR`}}),B=M(`c3f1a2b4-5d6e-4f70-8a9b-0c1d2e3f4a5b`,`CardOutDebit`,{executionDate:`2026-10-12T17:45:00.000Z`,counterparty:`Lidl`,amount:{value:`9434.69`,currency:`EUR`}}),V=[R,z,Le],Re=({visible:e,selected:t,onConfirm:n,onClose:r})=>e?(0,N.jsxs)(te,{direction:`row`,children:[(0,N.jsx)(v,{size:`small`,color:`current`,onPress:()=>n([...t,B,B]),children:`Add Lidl`}),(0,N.jsx)(h,{width:12}),(0,N.jsx)(v,{size:`small`,color:`current`,onPress:()=>n([z,B]),children:`Keep Edeka and Lidl`}),(0,N.jsx)(h,{width:12}),(0,N.jsx)(v,{size:`small`,color:`current`,onPress:()=>n([]),children:`Clear selection`}),(0,N.jsx)(h,{width:12}),(0,N.jsx)(v,{size:`small`,mode:`secondary`,onPress:r,children:`Close picker`})]}):null,ze=e=>(0,N.jsx)(Re,{...e}),H=({values:e={transactions:V},loading:t,onNext:n=ae,onPrevious:r=ae})=>(0,N.jsx)(Ce,{activeStep:`Transactions`,detailsSteps:[],children:(0,N.jsx)(j,{values:e,loading:t,onNext:n,onPrevious:r,renderPicker:ze})}),U=()=>(0,N.jsx)(m,{variant:`live`,children:(0,N.jsxs)(xe,{title:`Transactions step`,description:[`The transactions the user reports`],children:[(0,N.jsx)(w,{title:`Selected transactions`,children:(0,N.jsx)(H,{})}),(0,N.jsx)(w,{title:`No transaction selected`,children:(0,N.jsx)(H,{values:{transactions:[]}})}),(0,N.jsx)(w,{title:`Saving`,children:(0,N.jsx)(H,{loading:!0})}),(0,N.jsx)(w,{title:`Selected transactions, mobile`,style:L.mobile,children:(0,N.jsx)(H,{})}),(0,N.jsx)(w,{title:`No transaction selected, mobile`,style:L.mobile,children:(0,N.jsx)(H,{values:{transactions:[]}})})]})}),W=e=>(0,N.jsx)(m,{variant:`live`,children:(0,N.jsx)(H,{...e})}),G={args:{values:{transactions:V},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await P(await t.findByText(`€12,174.74`)).toBeVisible(),await P(t.getAllByText(`3`)).toHaveLength(2),await n.click(t.getByRole(`button`,{name:`Remove IKEA, €8,506.00, 26/07/2026`})),await I(()=>P(t.queryByText(`IKEA`)).toBeNull()),await I(()=>P(t.getByRole(`button`,{name:`Remove Edeka, €657.75, 27/05/2026`})).toHaveFocus()),await P(await t.findByText(`€3,668.74`)).toBeVisible(),await P(t.getAllByText(`2`)).toHaveLength(2),await n.click(t.getByRole(`button`,{name:`Continue`})),await P(e.onNext).toHaveBeenCalledTimes(1),await P(e.onNext).toHaveBeenCalledWith({transactions:[R,z]})}},K={args:{values:{transactions:[R]},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Remove REWE, €3,010.99, 04/11/2026`})),await P(await t.findByText(`No transactions`)).toBeVisible(),await I(()=>P(t.getByRole(`button`,{name:`Select transactions`})).toHaveFocus()),await P(t.getByText(`Select at least one transaction to continue.`)).toBeVisible(),await P(t.getByRole(`button`,{name:`Continue`})).toHaveAttribute(`aria-disabled`,`true`),await n.click(t.getByRole(`button`,{name:`Continue`})),await P(e.onNext).not.toHaveBeenCalled()}},q={args:{values:{transactions:[]},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await P(await t.findByText(`No transactions`)).toBeVisible(),await P(t.getByRole(`button`,{name:`Continue`})).toHaveAttribute(`aria-disabled`,`true`),await n.click(t.getByRole(`button`,{name:`Continue`})),await P(e.onNext).not.toHaveBeenCalled()}},J={args:{values:{transactions:V},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await P(t.queryByRole(`button`,{name:`Add Lidl`})).toBeNull(),await n.click(t.getByRole(`button`,{name:`Remove IKEA, €8,506.00, 26/07/2026`})),await n.click(t.getByRole(`button`,{name:`Select transactions`})),await n.click(await t.findByRole(`button`,{name:`Add Lidl`})),await P(await t.findByText(`Lidl`)).toBeVisible(),await P(t.getAllByText(`Lidl`)).toHaveLength(1),await P(t.queryByRole(`button`,{name:`Add Lidl`})).toBeNull(),await n.click(t.getByRole(`button`,{name:`Continue`})),await P(e.onNext).toHaveBeenCalledWith({transactions:[R,z,B]})}},Y={args:{values:{transactions:V},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Select transactions`})),await n.click(await t.findByRole(`button`,{name:`Keep Edeka and Lidl`})),await I(()=>P(t.queryByText(`REWE`)).toBeNull()),await P(t.queryByText(`IKEA`)).toBeNull(),await P(await t.findByText(`€10,092.44`)).toBeVisible(),await n.click(t.getByRole(`button`,{name:`Continue`})),await P(e.onNext).toHaveBeenCalledWith({transactions:[z,B]})}},X={args:{values:{transactions:V},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Select transactions`})),await n.click(await t.findByRole(`button`,{name:`Clear selection`})),await P(await t.findByText(`No transactions`)).toBeVisible(),await P(t.getByRole(`button`,{name:`Continue`})).toHaveAttribute(`aria-disabled`,`true`),await n.click(t.getByRole(`button`,{name:`Continue`})),await P(e.onNext).not.toHaveBeenCalled()}},Z={args:{values:{transactions:V},loading:!0,onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Remove IKEA, €8,506.00, 26/07/2026`});await P(n).toHaveAttribute(`aria-disabled`,`true`),await P(e.getByRole(`button`,{name:`Select transactions`})).toHaveAttribute(`aria-disabled`,`true`),await t.click(n),await P(e.getByText(`IKEA`)).toBeVisible()}},Q={args:{values:{transactions:V},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Select transactions`})),await n.click(await t.findByRole(`button`,{name:`Close picker`})),await I(()=>P(t.queryByRole(`button`,{name:`Close picker`})).toBeNull()),await n.click(t.getByRole(`button`,{name:`Continue`})),await P(e.onNext).toHaveBeenCalledWith({transactions:V})}},$={args:{values:{transactions:V},onNext:F(),onPrevious:F()},parameters:{a11y:{test:`off`}},render:W,play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Previous`})),await P(e.onPrevious).toHaveBeenCalledTimes(1),await P(e.onNext).not.toHaveBeenCalled()}},U.__docgenInfo={description:``,methods:[],displayName:`States`},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => <WithCurrentColor variant="live">
    <StoryBlock title="Transactions step" description={["The transactions the user reports"]}>
      <StoryPart title="Selected transactions">
        <Step />
      </StoryPart>

      <StoryPart title="No transaction selected">
        <Step values={{
        transactions: []
      }} />
      </StoryPart>

      <StoryPart title="Saving">
        <Step loading={true} />
      </StoryPart>

      <StoryPart title="Selected transactions, mobile" style={styles.mobile}>
        <Step />
      </StoryPart>

      <StoryPart title="No transaction selected, mobile" style={styles.mobile}>
        <Step values={{
        transactions: []
      }} />
      </StoryPart>
    </StoryBlock>
  </WithCurrentColor>`,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      transactions: selection
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
    await expect(await canvas.findByText("€12,174.74")).toBeVisible();
    await expect(canvas.getAllByText("3")).toHaveLength(2);
    await userEvent.click(canvas.getByRole("button", {
      name: "Remove IKEA, €8,506.00, 26/07/2026"
    }));
    await waitFor(() => expect(canvas.queryByText("IKEA")).toBeNull());
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Remove Edeka, €657.75, 27/05/2026"
    })).toHaveFocus());
    await expect(await canvas.findByText("€3,668.74")).toBeVisible();
    await expect(canvas.getAllByText("2")).toHaveLength(2);
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await expect(args.onNext).toHaveBeenCalledTimes(1);
    await expect(args.onNext).toHaveBeenCalledWith({
      transactions: [rewe, edeka]
    });
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      transactions: [rewe]
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
    await userEvent.click(canvas.getByRole("button", {
      name: "Remove REWE, €3,010.99, 04/11/2026"
    }));
    await expect(await canvas.findByText("No transactions")).toBeVisible();
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Select transactions"
    })).toHaveFocus());
    await expect(canvas.getByText("Select at least one transaction to continue.")).toBeVisible();
    await expect(canvas.getByRole("button", {
      name: "Continue"
    })).toHaveAttribute("aria-disabled", "true");
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await expect(args.onNext).not.toHaveBeenCalled();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      transactions: []
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
    await expect(await canvas.findByText("No transactions")).toBeVisible();
    await expect(canvas.getByRole("button", {
      name: "Continue"
    })).toHaveAttribute("aria-disabled", "true");
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await expect(args.onNext).not.toHaveBeenCalled();
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      transactions: selection
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
    await expect(canvas.queryByRole("button", {
      name: "Add Lidl"
    })).toBeNull();
    await userEvent.click(canvas.getByRole("button", {
      name: "Remove IKEA, €8,506.00, 26/07/2026"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Select transactions"
    }));
    await userEvent.click(await canvas.findByRole("button", {
      name: "Add Lidl"
    }));
    await expect(await canvas.findByText("Lidl")).toBeVisible();
    await expect(canvas.getAllByText("Lidl")).toHaveLength(1);
    await expect(canvas.queryByRole("button", {
      name: "Add Lidl"
    })).toBeNull();
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await expect(args.onNext).toHaveBeenCalledWith({
      transactions: [rewe, edeka, lidl]
    });
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      transactions: selection
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
    await userEvent.click(canvas.getByRole("button", {
      name: "Select transactions"
    }));
    await userEvent.click(await canvas.findByRole("button", {
      name: "Keep Edeka and Lidl"
    }));
    await waitFor(() => expect(canvas.queryByText("REWE")).toBeNull());
    await expect(canvas.queryByText("IKEA")).toBeNull();
    await expect(await canvas.findByText("€10,092.44")).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await expect(args.onNext).toHaveBeenCalledWith({
      transactions: [edeka, lidl]
    });
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      transactions: selection
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
    await userEvent.click(canvas.getByRole("button", {
      name: "Select transactions"
    }));
    await userEvent.click(await canvas.findByRole("button", {
      name: "Clear selection"
    }));
    await expect(await canvas.findByText("No transactions")).toBeVisible();
    await expect(canvas.getByRole("button", {
      name: "Continue"
    })).toHaveAttribute("aria-disabled", "true");
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await expect(args.onNext).not.toHaveBeenCalled();
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      transactions: selection
    },
    loading: true,
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
    canvas,
    userEvent
  }) => {
    const remove = canvas.getByRole("button", {
      name: "Remove IKEA, €8,506.00, 26/07/2026"
    });
    await expect(remove).toHaveAttribute("aria-disabled", "true");
    await expect(canvas.getByRole("button", {
      name: "Select transactions"
    })).toHaveAttribute("aria-disabled", "true");
    await userEvent.click(remove);
    await expect(canvas.getByText("IKEA")).toBeVisible();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      transactions: selection
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
    await userEvent.click(canvas.getByRole("button", {
      name: "Select transactions"
    }));
    await userEvent.click(await canvas.findByRole("button", {
      name: "Close picker"
    }));
    await waitFor(() => expect(canvas.queryByRole("button", {
      name: "Close picker"
    })).toBeNull());
    await userEvent.click(canvas.getByRole("button", {
      name: "Continue"
    }));
    await expect(args.onNext).toHaveBeenCalledWith({
      transactions: selection
    });
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      transactions: selection
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
    await userEvent.click(canvas.getByRole("button", {
      name: "Previous"
    }));
    await expect(args.onPrevious).toHaveBeenCalledTimes(1);
    await expect(args.onNext).not.toHaveBeenCalled();
  }
}`,...$.parameters?.docs?.source}}},Be=[`States`,`RemoveTransaction`,`RemoveLastTransaction`,`EmptySelection`,`SelectTransactions`,`ReplaceSelection`,`ClearSelection`,`Saving`,`ClosePicker`,`Previous`]}))();export{X as ClearSelection,Q as ClosePicker,q as EmptySelection,$ as Previous,K as RemoveLastTransaction,G as RemoveTransaction,Y as ReplaceSelection,Z as Saving,J as SelectTransactions,U as States,Be as __namedExportsOrder,Ie as default};
//# sourceMappingURL=FraudReportTransactionsStep.stories-B8KHkJmY.js.map