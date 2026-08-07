import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{F as n,L as r,M as i,N as a,R as o,St as s,U as c,ct as l,g as u,h as d,ht as f,i as p,it as m,kt as h,r as g,st as _,wt as v}from"./ScrollView-CXXFFZdy.js";import{n as y,t as b}from"./Fill-DPyGLQkX.js";import{n as x,t as S}from"./Separator-K22U4C6C.js";import{a as C,s as w,t as T}from"./i18n-CWKGA_j6.js";import{n as E,t as D}from"./Stack-DZaoYKLV.js";import{n as O,t as k}from"./SwanLogo-BaVMysQC.js";import{n as A,t as j}from"./style-B-TSQ2IW.js";import{n as M,r as N,t as P}from"./_StoriesComponents-DWGe6sam.js";import{t as F}from"./iban-Cq_6kQ2i.js";var I,L,R,z,B,V,H,U,W,G=t((()=>{u(),y(),x(),p(),E(),O(),_(),n(),I=e(F()),f(),a(),C(),A(),L=c(),R=24,z=150,B=h.create({container:{height:1050,width:793,padding:56},partnershipText:{...j(`sans`,14),color:m.gray[500]},pageTitle:{...j(`sans`,20),color:m.swan[500],fontWeight:`600`},sectionTitle:{...j(`sans`,14),color:m.swan[500],fontWeight:`600`},lineName:{...j(`sans`,14),color:m.gray[700]},lineValue:{...j(`sans`,14),color:m.swan[500],fontWeight:`600`},generationInfos:{...j(`sans`,10),color:m.gray[700]},footer:{...j(`sans`,10),color:m.gray[500],fontWeight:`300`},defaultLogo:{height:R,width:45/10*R},swanLogo:{height:8,width:45/10*8,position:`relative`,top:.5}}),V=({name:e,value:t})=>(0,L.jsxs)(d,{direction:`row`,alignItems:`center`,children:[(0,L.jsx)(s,{style:B.lineName,children:e}),(0,L.jsx)(b,{minWidth:8}),(0,L.jsx)(s,{style:B.lineValue,children:t})]}),H={height:R,maxWidth:z,objectFit:`contain`,objectPosition:`left`},U=({partnerLogoUrl:e,generationDate:t,executionDate:n,type:a,amount:c,instructedAmount:l,amountCredited:u,targetTransferAmount:f,exchangeRate:p,fees:h,label:_,reference:y,debtorName:x,debtorAccountNumber:C,debtorBankName:E,debtorBankIdentifier:O,creditorName:A,creditorAccountNumber:j,creditorBankName:M,creditorBankIdentifier:N,style:P})=>(0,L.jsxs)(v,{style:[B.container,P],children:[(0,L.jsxs)(d,{direction:`row`,alignItems:`center`,children:[o(e)?(0,L.jsx)(`img`,{src:e,style:H}):(0,L.jsx)(k,{style:B.defaultLogo}),(0,L.jsx)(S,{horizontal:!0,space:8}),(0,L.jsx)(s,{style:B.partnershipText,children:w(`transactionStatement.partnership`)}),(0,L.jsx)(g,{width:4}),(0,L.jsx)(k,{color:m.gray[900],style:B.swanLogo})]}),(0,L.jsx)(g,{height:24}),(0,L.jsx)(s,{style:B.pageTitle,children:w(`transactionStatement.title.document`)}),(0,L.jsx)(g,{height:24}),(0,L.jsx)(s,{style:B.sectionTitle,children:w(`transactionStatement.title.transactionInformation`)}),(0,L.jsx)(g,{height:8}),(0,L.jsxs)(D,{space:8,children:[(0,L.jsx)(V,{name:w(`transactionStatement.information.executionDate`),value:n}),(0,L.jsx)(V,{name:w(`transactionStatement.information.type`),value:i(a).with(`SepaCreditTransferIn`,()=>w(`transactionStatement.type.SepaCreditTransferIn`)).with(`SepaCreditTransferOut`,()=>w(`transactionStatement.type.SepaCreditTransferOut`)).with(`SepaInstantCreditTransferIn`,()=>w(`transactionStatement.type.SepaInstantCreditTransferIn`)).with(`SepaInstantCreditTransferOut`,()=>w(`transactionStatement.type.SepaInstantCreditTransferOut`)).with(`InternalCreditTransferIn`,()=>w(`transactionStatement.type.InternalCreditTransferIn`)).with(`InternalCreditTransferOut`,()=>w(`transactionStatement.type.InternalCreditTransferOut`)).with(`InternationalCreditTransferIn`,()=>w(`transactionStatement.type.InternationalCreditTransferIn`)).with(`InternationalCreditTransferOut`,()=>w(`transactionStatement.type.InternationalCreditTransferOut`)).exhaustive()}),r(l)&&(0,L.jsx)(V,{name:w(`transactionStatement.information.instructedAmount`),value:T(Number(l.value),l.currency)}),r(u)&&(0,L.jsx)(V,{name:w(`transactionStatement.information.amountCredited`),value:T(Number(u.value),u.currency)}),r(c)&&(0,L.jsx)(V,{name:w(`transactionStatement.information.amount`),value:T(Number(c.value),c.currency)}),r(f)&&(0,L.jsx)(V,{name:w(`transactionStatement.information.targetTransferAmount`),value:T(Number(f.value),f.currency)}),r(p)&&(0,L.jsx)(V,{name:w(`transactionStatement.information.exchangeRate`),value:`${T(Number(p[0].value),p[0].currency)} = ${T(Number(p[1].value),p[1].currency)}`}),r(h)&&(0,L.jsx)(V,{name:w(`transactionStatement.information.fees`),value:T(Number(h.value),h.currency)}),(0,L.jsx)(V,{name:w(`transactionStatement.information.label`),value:_}),r(y)&&(0,L.jsx)(V,{name:w(`transactionStatement.information.reference`),value:y})]}),(0,L.jsx)(g,{height:24}),(0,L.jsx)(s,{style:B.sectionTitle,children:w(`transactionStatement.title.debtor`)}),(0,L.jsx)(g,{height:8}),(0,L.jsxs)(D,{space:8,children:[(0,L.jsx)(V,{name:w(`transactionStatement.debtor.name`),value:x}),(0,L.jsx)(V,{name:w(`transactionStatement.debtor.accountNumber`),value:I.default.isValid(C)?I.default.printFormat(C):C}),o(E)&&(0,L.jsx)(V,{name:w(`transactionStatement.debtor.bankName`),value:E}),o(O)&&(0,L.jsx)(V,{name:w(`transactionStatement.debtor.bankIdentifier`),value:O})]}),(0,L.jsx)(g,{height:24}),(0,L.jsx)(s,{style:B.sectionTitle,children:w(`transactionStatement.title.creditor`)}),(0,L.jsx)(g,{height:8}),(0,L.jsxs)(D,{space:8,children:[(0,L.jsx)(V,{name:w(`transactionStatement.creditor.name`),value:A}),(0,L.jsx)(V,{name:w(`transactionStatement.creditor.accountNumber`),value:I.default.isValid(j)?I.default.printFormat(j):j}),o(M)&&(0,L.jsx)(V,{name:w(`transactionStatement.creditor.bankName`),value:M}),o(N)&&(0,L.jsx)(V,{name:w(`transactionStatement.creditor.bankIdentifier`),value:N})]}),(0,L.jsx)(b,{minHeight:8}),(0,L.jsx)(s,{style:B.generationInfos,children:w(`transactionStatement.generationDate`,{date:t})}),(0,L.jsx)(g,{height:8}),i(a).with(`SepaCreditTransferOut`,`InternationalCreditTransferOut`,()=>(0,L.jsx)(s,{style:B.generationInfos,children:w(`transactionStatement.generationInfos`)})).otherwise(()=>null),(0,L.jsx)(S,{space:24}),(0,L.jsx)(s,{style:B.footer,children:w(`common.statement.footer`)})]}),W=e=>i(e).with({version:`v1`},e=>(0,L.jsx)(U,{...e})).exhaustive(),U.__docgenInfo={description:``,methods:[],displayName:`TransactionStatementV1`,props:{version:{required:!0,tsType:{name:`literal`,value:`"v1"`},description:``},partnerLogoUrl:{required:!1,tsType:{name:`string`},description:``},generationDate:{required:!0,tsType:{name:`string`},description:``},executionDate:{required:!0,tsType:{name:`string`},description:``},type:{required:!0,tsType:{name:`union`,raw:`| "SepaCreditTransferIn"
| "SepaCreditTransferOut"
| "SepaInstantCreditTransferIn"
| "SepaInstantCreditTransferOut"
| "InternalCreditTransferIn"
| "InternalCreditTransferOut"
| "InternationalCreditTransferIn"
| "InternationalCreditTransferOut"`,elements:[{name:`literal`,value:`"SepaCreditTransferIn"`},{name:`literal`,value:`"SepaCreditTransferOut"`},{name:`literal`,value:`"SepaInstantCreditTransferIn"`},{name:`literal`,value:`"SepaInstantCreditTransferOut"`},{name:`literal`,value:`"InternalCreditTransferIn"`},{name:`literal`,value:`"InternalCreditTransferOut"`},{name:`literal`,value:`"InternationalCreditTransferIn"`},{name:`literal`,value:`"InternationalCreditTransferOut"`}]},description:``},amount:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}}]}},description:``},targetTransferAmount:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}}]}},description:``},instructedAmount:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}}]}},description:``},amountCredited:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}}]}},description:``},exchangeRate:{required:!1,tsType:{name:`tuple`,raw:`[Amount, Amount]`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}}]}}]},description:``},fees:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}}]}},description:``},label:{required:!0,tsType:{name:`string`},description:``},reference:{required:!1,tsType:{name:`string`},description:``},debtorName:{required:!0,tsType:{name:`string`},description:``},debtorAccountNumber:{required:!0,tsType:{name:`string`},description:``},debtorBankName:{required:!1,tsType:{name:`string`},description:``},debtorBankIdentifier:{required:!1,tsType:{name:`string`},description:``},creditorName:{required:!0,tsType:{name:`string`},description:``},creditorAccountNumber:{required:!0,tsType:{name:`string`},description:``},creditorBankName:{required:!1,tsType:{name:`string`},description:``},creditorBankIdentifier:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`StyleProp`,elements:[{name:`ViewStyle`}],raw:`StyleProp<ViewStyle>`},description:``}}}})),K,q,J,Y;t((()=>{_(),G(),N(),K=c(),q={title:`Informations/TransactionStatement`,component:W},J=()=>(0,K.jsxs)(P,{title:`Transaction statement`,children:[(0,K.jsx)(M,{title:`Default`,children:(0,K.jsx)(W,{version:`v1`,partnerLogoUrl:`https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png`,generationDate:`08/12/2024`,executionDate:`03/28/2024`,type:`InternalCreditTransferOut`,amount:{value:`12.00`,currency:`EUR`},targetTransferAmount:{value:`10.25`,currency:`GBP`},exchangeRate:[{value:`1.00`,currency:`EUR`},{value:`0.8548`,currency:`GBP`}],fees:{value:`1.00`,currency:`EUR`},label:`Transfer to Alexandra ERZINGOVIVOVA`,reference:`12345-EIHJDKB-2849986398698-HLKHSFT`,debtorName:`Green co`,debtorAccountNumber:`FR7699999001001477659048183`,debtorBankName:`Swan`,debtorBankIdentifier:`SWNBFR22`,creditorName:`Yellow corp`,creditorAccountNumber:`FR7699999001001899407676183`,creditorBankName:`Acme Bank`,creditorBankIdentifier:`GNCFFRCQXXX`,style:{backgroundColor:l.white}})}),(0,K.jsx)(M,{title:`SctOut`,children:(0,K.jsx)(W,{version:`v1`,partnerLogoUrl:`https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png`,generationDate:`08/12/2024`,executionDate:`03/28/2024`,type:`SepaCreditTransferOut`,amount:{value:`12.00`,currency:`EUR`},targetTransferAmount:{value:`10.25`,currency:`GBP`},exchangeRate:[{value:`1.00`,currency:`EUR`},{value:`0.8548`,currency:`GBP`}],fees:{value:`1.00`,currency:`EUR`},label:`Transfer to Alexandra ERZINGOVIVOVA`,reference:`12345-EIHJDKB-2849986398698-HLKHSFT`,debtorName:`Green co`,debtorAccountNumber:`FR7699999001001477659048183`,debtorBankName:`Swan`,debtorBankIdentifier:`SWNBFR22`,creditorName:`Yellow corp`,creditorAccountNumber:`FR7699999001001899407676183`,creditorBankName:`Acme Bank`,creditorBankIdentifier:`GNCFFRCQXXX`,style:{backgroundColor:l.white}})})]}),J.__docgenInfo={description:``,methods:[],displayName:`Default`},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Transaction statement">
      <StoryPart title="Default">
        <TransactionStatement version="v1" partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png" generationDate="08/12/2024" executionDate="03/28/2024" type="InternalCreditTransferOut" amount={{
        value: "12.00",
        currency: "EUR"
      }} targetTransferAmount={{
        value: "10.25",
        currency: "GBP"
      }} exchangeRate={[{
        value: "1.00",
        currency: "EUR"
      }, {
        value: "0.8548",
        currency: "GBP"
      }]} fees={{
        value: "1.00",
        currency: "EUR"
      }} label="Transfer to Alexandra ERZINGOVIVOVA" reference="12345-EIHJDKB-2849986398698-HLKHSFT" debtorName="Green co" debtorAccountNumber="FR7699999001001477659048183" debtorBankName="Swan" debtorBankIdentifier="SWNBFR22" creditorName="Yellow corp" creditorAccountNumber="FR7699999001001899407676183" creditorBankName="Acme Bank" creditorBankIdentifier="GNCFFRCQXXX" style={{
        backgroundColor: invariantColors.white
      }} />
      </StoryPart>

      <StoryPart title="SctOut">
        <TransactionStatement version="v1" partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png" generationDate="08/12/2024" executionDate="03/28/2024" type="SepaCreditTransferOut" amount={{
        value: "12.00",
        currency: "EUR"
      }} targetTransferAmount={{
        value: "10.25",
        currency: "GBP"
      }} exchangeRate={[{
        value: "1.00",
        currency: "EUR"
      }, {
        value: "0.8548",
        currency: "GBP"
      }]} fees={{
        value: "1.00",
        currency: "EUR"
      }} label="Transfer to Alexandra ERZINGOVIVOVA" reference="12345-EIHJDKB-2849986398698-HLKHSFT" debtorName="Green co" debtorAccountNumber="FR7699999001001477659048183" debtorBankName="Swan" debtorBankIdentifier="SWNBFR22" creditorName="Yellow corp" creditorAccountNumber="FR7699999001001899407676183" creditorBankName="Acme Bank" creditorBankIdentifier="GNCFFRCQXXX" style={{
        backgroundColor: invariantColors.white
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...J.parameters?.docs?.source}}},Y=[`Default`]}))();export{J as Default,Y as __namedExportsOrder,q as default};
//# sourceMappingURL=TransactionStatement.stories-KTMOB5c3.js.map