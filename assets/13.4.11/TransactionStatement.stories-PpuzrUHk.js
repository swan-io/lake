import{z as j,j as e,V as _,s as K,B as G,o as p,T as a,S as i,c as s,i as o,x as A}from"./ScrollView-D5ij7N9c.js";import{F as V}from"./Fill-Cn89eFWs.js";import{S as F}from"./Separator-B3AP_EQe.js";import{S as I}from"./Stack-BvLUNDfl.js";import{S as D}from"./SwanLogo-DdAFaXj2.js";import{I as f}from"./iban-B1_juuOQ.js";import{t,b as c}from"./i18n-Cc49V64y.js";import{g as u}from"./style-B-Xz0jNe.js";import{S as z,a as E}from"./_StoriesComponents-DSvuJJ9I.js";import"./iframe-X-ms5eO1.js";import"./preload-helper-D1IIBeq1.js";import"./index-D9lEYmj4.js";import"./commonStyles-BBEkV6IC.js";import"./rifm-D3Qf6_wA.js";import"./array-BfAlyugE.js";const w=24,J=150,n=K.create({container:{height:1050,width:793,padding:56},partnershipText:{...u("sans",14),color:s.gray[500]},pageTitle:{...u("sans",20),color:s.swan[500],fontWeight:"600"},sectionTitle:{...u("sans",14),color:s.swan[500],fontWeight:"600"},lineName:{...u("sans",14),color:s.gray[700]},lineValue:{...u("sans",14),color:s.swan[500],fontWeight:"600"},generationInfos:{...u("sans",10),color:s.gray[700]},footer:{...u("sans",10),color:s.gray[500],fontWeight:"300"},defaultLogo:{height:w,width:45/10*w},swanLogo:{height:8,width:45/10*8,position:"relative",top:.5}}),r=({name:l,value:m})=>e.jsxs(G,{direction:"row",alignItems:"center",children:[e.jsx(a,{style:n.lineName,children:l}),e.jsx(V,{minWidth:8}),e.jsx(a,{style:n.lineValue,children:m})]}),Q={height:w,maxWidth:J,objectFit:"contain",objectPosition:"left"},X=({partnerLogoUrl:l,generationDate:m,executionDate:H,type:C,amount:g,instructedAmount:S,amountCredited:v,targetTransferAmount:T,exchangeRate:d,fees:b,label:L,reference:k,debtorName:P,debtorAccountNumber:h,debtorBankName:B,debtorBankIdentifier:O,creditorName:U,creditorAccountNumber:x,creditorBankName:q,creditorBankIdentifier:R,style:W})=>e.jsxs(_,{style:[n.container,W],children:[e.jsxs(G,{direction:"row",alignItems:"center",children:[p(l)?e.jsx("img",{src:l,style:Q}):e.jsx(D,{style:n.defaultLogo}),e.jsx(F,{horizontal:!0,space:8}),e.jsx(a,{style:n.partnershipText,children:t("transactionStatement.partnership")}),e.jsx(i,{width:4}),e.jsx(D,{color:s.gray[900],style:n.swanLogo})]}),e.jsx(i,{height:24}),e.jsx(a,{style:n.pageTitle,children:t("transactionStatement.title.document")}),e.jsx(i,{height:24}),e.jsx(a,{style:n.sectionTitle,children:t("transactionStatement.title.transactionInformation")}),e.jsx(i,{height:8}),e.jsxs(I,{space:8,children:[e.jsx(r,{name:t("transactionStatement.information.executionDate"),value:H}),e.jsx(r,{name:t("transactionStatement.information.type"),value:j(C).with("SepaCreditTransferIn",()=>t("transactionStatement.type.SepaCreditTransferIn")).with("SepaCreditTransferOut",()=>t("transactionStatement.type.SepaCreditTransferOut")).with("SepaInstantCreditTransferIn",()=>t("transactionStatement.type.SepaInstantCreditTransferIn")).with("SepaInstantCreditTransferOut",()=>t("transactionStatement.type.SepaInstantCreditTransferOut")).with("InternalCreditTransferIn",()=>t("transactionStatement.type.InternalCreditTransferIn")).with("InternalCreditTransferOut",()=>t("transactionStatement.type.InternalCreditTransferOut")).with("InternationalCreditTransferIn",()=>t("transactionStatement.type.InternationalCreditTransferIn")).with("InternationalCreditTransferOut",()=>t("transactionStatement.type.InternationalCreditTransferOut")).exhaustive()}),o(S)&&e.jsx(r,{name:t("transactionStatement.information.instructedAmount"),value:c(Number(S.value),S.currency)}),o(v)&&e.jsx(r,{name:t("transactionStatement.information.amountCredited"),value:c(Number(v.value),v.currency)}),o(g)&&e.jsx(r,{name:t("transactionStatement.information.amount"),value:c(Number(g.value),g.currency)}),o(T)&&e.jsx(r,{name:t("transactionStatement.information.targetTransferAmount"),value:c(Number(T.value),T.currency)}),o(d)&&e.jsx(r,{name:t("transactionStatement.information.exchangeRate"),value:`${c(Number(d[0].value),d[0].currency)} = ${c(Number(d[1].value),d[1].currency)}`}),o(b)&&e.jsx(r,{name:t("transactionStatement.information.fees"),value:c(Number(b.value),b.currency)}),e.jsx(r,{name:t("transactionStatement.information.label"),value:L}),o(k)&&e.jsx(r,{name:t("transactionStatement.information.reference"),value:k})]}),e.jsx(i,{height:24}),e.jsx(a,{style:n.sectionTitle,children:t("transactionStatement.title.debtor")}),e.jsx(i,{height:8}),e.jsxs(I,{space:8,children:[e.jsx(r,{name:t("transactionStatement.debtor.name"),value:P}),e.jsx(r,{name:t("transactionStatement.debtor.accountNumber"),value:f.isValid(h)?f.printFormat(h):h}),p(B)&&e.jsx(r,{name:t("transactionStatement.debtor.bankName"),value:B}),p(O)&&e.jsx(r,{name:t("transactionStatement.debtor.bankIdentifier"),value:O})]}),e.jsx(i,{height:24}),e.jsx(a,{style:n.sectionTitle,children:t("transactionStatement.title.creditor")}),e.jsx(i,{height:8}),e.jsxs(I,{space:8,children:[e.jsx(r,{name:t("transactionStatement.creditor.name"),value:U}),e.jsx(r,{name:t("transactionStatement.creditor.accountNumber"),value:f.isValid(x)?f.printFormat(x):x}),p(q)&&e.jsx(r,{name:t("transactionStatement.creditor.bankName"),value:q}),p(R)&&e.jsx(r,{name:t("transactionStatement.creditor.bankIdentifier"),value:R})]}),e.jsx(V,{minHeight:8}),e.jsx(a,{style:n.generationInfos,children:t("transactionStatement.generationDate",{date:m})}),e.jsx(i,{height:8}),j(C).with("SepaCreditTransferOut","InternationalCreditTransferOut",()=>e.jsx(a,{style:n.generationInfos,children:t("transactionStatement.generationInfos")})).otherwise(()=>null),e.jsx(F,{space:24}),e.jsx(a,{style:n.footer,children:t("common.statement.footer")})]}),N=l=>j(l).with({version:"v1"},m=>e.jsx(X,{...m})).exhaustive();X.__docgenInfo={description:"",methods:[],displayName:"TransactionStatementV1",props:{version:{required:!0,tsType:{name:"literal",value:'"v1"'},description:""},partnerLogoUrl:{required:!1,tsType:{name:"string"},description:""},generationDate:{required:!0,tsType:{name:"string"},description:""},executionDate:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:`| "SepaCreditTransferIn"
| "SepaCreditTransferOut"
| "SepaInstantCreditTransferIn"
| "SepaInstantCreditTransferOut"
| "InternalCreditTransferIn"
| "InternalCreditTransferOut"
| "InternationalCreditTransferIn"
| "InternationalCreditTransferOut"`,elements:[{name:"literal",value:'"SepaCreditTransferIn"'},{name:"literal",value:'"SepaCreditTransferOut"'},{name:"literal",value:'"SepaInstantCreditTransferIn"'},{name:"literal",value:'"SepaInstantCreditTransferOut"'},{name:"literal",value:'"InternalCreditTransferIn"'},{name:"literal",value:'"InternalCreditTransferOut"'},{name:"literal",value:'"InternationalCreditTransferIn"'},{name:"literal",value:'"InternationalCreditTransferOut"'}]},description:""},amount:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},targetTransferAmount:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},instructedAmount:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},amountCredited:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},exchangeRate:{required:!1,tsType:{name:"tuple",raw:"[Amount, Amount]",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}}]},description:""},fees:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},label:{required:!0,tsType:{name:"string"},description:""},reference:{required:!1,tsType:{name:"string"},description:""},debtorName:{required:!0,tsType:{name:"string"},description:""},debtorAccountNumber:{required:!0,tsType:{name:"string"},description:""},debtorBankName:{required:!1,tsType:{name:"string"},description:""},debtorBankIdentifier:{required:!1,tsType:{name:"string"},description:""},creditorName:{required:!0,tsType:{name:"string"},description:""},creditorAccountNumber:{required:!0,tsType:{name:"string"},description:""},creditorBankName:{required:!1,tsType:{name:"string"},description:""},creditorBankIdentifier:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};const me={title:"Informations/TransactionStatement",component:N},y=()=>e.jsxs(z,{title:"Transaction statement",children:[e.jsx(E,{title:"Default",children:e.jsx(N,{version:"v1",partnerLogoUrl:"https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png",generationDate:"08/12/2024",executionDate:"03/28/2024",type:"InternalCreditTransferOut",amount:{value:"12.00",currency:"EUR"},targetTransferAmount:{value:"10.25",currency:"GBP"},exchangeRate:[{value:"1.00",currency:"EUR"},{value:"0.8548",currency:"GBP"}],fees:{value:"1.00",currency:"EUR"},label:"Transfer to Alexandra ERZINGOVIVOVA",reference:"12345-EIHJDKB-2849986398698-HLKHSFT",debtorName:"Green co",debtorAccountNumber:"FR7699999001001477659048183",debtorBankName:"Swan",debtorBankIdentifier:"SWNBFR22",creditorName:"Yellow corp",creditorAccountNumber:"FR7699999001001899407676183",creditorBankName:"Acme Bank",creditorBankIdentifier:"GNCFFRCQXXX",style:{backgroundColor:A.white}})}),e.jsx(E,{title:"SctOut",children:e.jsx(N,{version:"v1",partnerLogoUrl:"https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png",generationDate:"08/12/2024",executionDate:"03/28/2024",type:"SepaCreditTransferOut",amount:{value:"12.00",currency:"EUR"},targetTransferAmount:{value:"10.25",currency:"GBP"},exchangeRate:[{value:"1.00",currency:"EUR"},{value:"0.8548",currency:"GBP"}],fees:{value:"1.00",currency:"EUR"},label:"Transfer to Alexandra ERZINGOVIVOVA",reference:"12345-EIHJDKB-2849986398698-HLKHSFT",debtorName:"Green co",debtorAccountNumber:"FR7699999001001477659048183",debtorBankName:"Swan",debtorBankIdentifier:"SWNBFR22",creditorName:"Yellow corp",creditorAccountNumber:"FR7699999001001899407676183",creditorBankName:"Acme Bank",creditorBankIdentifier:"GNCFFRCQXXX",style:{backgroundColor:A.white}})})]});y.__docgenInfo={description:"",methods:[],displayName:"Default"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};const de=["Default"];export{y as Default,de as __namedExportsOrder,me as default};
//# sourceMappingURL=TransactionStatement.stories-PpuzrUHk.js.map
