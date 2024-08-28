import{s as _,c as i,$ as P,j as e,O as W,V as X,B,l as c,T as a,S as s,f as C}from"./ScrollView-CnkSV7w6.js";import{F as I}from"./Fill-DFbCnG2s.js";import{b,S as U,a as K}from"./_StoriesComponents-C4hUnUV-.js";import{S as p}from"./Stack-BkBNQS4S.js";import{S as T}from"./SwanLogo-D5MboXrp.js";import{t}from"./i18n-CB8j_UFB.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./commonStyles-t4XfA7cz.js";import"./rifm-CYIyesWt.js";import"./utc-DJvBpWoA.js";import"./string-CfGb_hXU.js";import"./array-rjEBP2Ry.js";const u=24,z=150,l=(m,o)=>({...W,color:i.gray[900],fontSize:o,lineHeight:o*1.25,fontWeight:"400"}),r=_.create({container:{height:842,width:595,padding:42},partnershipText:{...l("sans",12),color:i.gray[500]},pageTitle:{...l("sans",15),color:i.swan[500],fontWeight:"500"},sectionTitle:{...l("sans",12),color:i.swan[500],fontWeight:"600"},lineName:{...l("sans",10),color:i.gray[700]},lineValue:{...l("sans",10),color:i.swan[500],fontWeight:"600"},generationInfos:{...l("sans",8),color:i.gray[700]},footer:{...l("sans",8),color:i.gray[500],fontWeight:"300"},defaultLogo:{height:u,width:45/10*u},swanLogo:{height:8,width:45/10*8}}),n=({name:m,value:o})=>e.jsxs(B,{direction:"row",alignItems:"center",children:[e.jsx(a,{style:r.lineName,children:m}),e.jsx(I,{minWidth:8}),e.jsx(a,{style:r.lineValue,children:o})]}),J={height:u,maxWidth:z,objectFit:"contain",objectPosition:"left"},R=({partnerLogoUrl:m,generationDate:o,executionDate:q,type:A,amount:D,targetTransferAmount:g,exchangeRate:f,fees:h,label:F,reference:E,debtorName:V,debtorAccountNumber:G,debtorBankName:x,debtorBankIdentifier:y,creditorName:L,creditorAccountNumber:O,creditorBankName:S,creditorBankIdentifier:j,style:H})=>e.jsxs(X,{style:[r.container,H],children:[e.jsxs(B,{direction:"row",alignItems:"center",children:[c(m)?e.jsx("img",{src:m,style:J}):e.jsx(T,{style:r.defaultLogo}),e.jsx(b,{horizontal:!0,space:8}),e.jsx(a,{style:r.partnershipText,children:t("transactionStatement.partnership")}),e.jsx(s,{width:4}),e.jsx(T,{color:i.gray[900],style:r.swanLogo})]}),e.jsx(s,{height:24}),e.jsx(a,{style:r.pageTitle,children:t("transactionStatement.title.document")}),e.jsx(s,{height:24}),e.jsx(a,{style:r.sectionTitle,children:t("transactionStatement.title.information")}),e.jsx(s,{height:8}),e.jsxs(p,{space:8,children:[e.jsx(n,{name:t("transactionStatement.information.executionDate"),value:q}),e.jsx(n,{name:t("transactionStatement.information.type"),value:A}),e.jsx(n,{name:t("transactionStatement.information.amount"),value:D}),c(g)&&e.jsx(n,{name:t("transactionStatement.information.targetTransferAmount"),value:g}),c(f)&&e.jsx(n,{name:t("transactionStatement.information.exchangeRate"),value:f}),c(h)&&e.jsx(n,{name:t("transactionStatement.information.fees"),value:h}),e.jsx(n,{name:"Label",value:F}),e.jsx(n,{name:"Reference",value:E})]}),e.jsx(s,{height:24}),e.jsx(a,{style:r.sectionTitle,children:t("transactionStatement.title.debtor")}),e.jsx(s,{height:8}),e.jsxs(p,{space:8,children:[e.jsx(n,{name:t("transactionStatement.debtor.name"),value:V}),e.jsx(n,{name:t("transactionStatement.debtor.accountNumber"),value:G}),c(x)&&e.jsx(n,{name:t("transactionStatement.debtor.bankName"),value:x}),c(y)&&e.jsx(n,{name:t("transactionStatement.debtor.bankIdentifier"),value:y})]}),e.jsx(s,{height:24}),e.jsx(a,{style:r.sectionTitle,children:t("transactionStatement.title.creditor")}),e.jsx(s,{height:8}),e.jsxs(p,{space:8,children:[e.jsx(n,{name:t("transactionStatement.creditor.name"),value:L}),e.jsx(n,{name:t("transactionStatement.creditor.accountNumber"),value:O}),c(S)&&e.jsx(n,{name:t("transactionStatement.creditor.bankName"),value:S}),c(j)&&e.jsx(n,{name:t("transactionStatement.creditor.bankIdentifier"),value:j})]}),e.jsx(I,{minHeight:8}),e.jsx(a,{style:r.generationInfos,children:t("transactionStatement.generationDate",{date:o})}),e.jsx(s,{height:8}),e.jsx(a,{style:r.generationInfos,children:t("transactionStatement.generationInfos")}),e.jsx(b,{space:24}),e.jsx(a,{style:r.footer,children:t("transactionStatement.footer")})]}),k=m=>P(m).with({version:"v1"},o=>e.jsx(R,{...o})).exhaustive();R.__docgenInfo={description:"",methods:[],displayName:"TransactionStatementV1",props:{version:{required:!0,tsType:{name:"literal",value:'"v1"'},description:""},partnerLogoUrl:{required:!1,tsType:{name:"string"},description:""},generationDate:{required:!0,tsType:{name:"string"},description:""},executionDate:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"string"},description:""},amount:{required:!0,tsType:{name:"string"},description:""},targetTransferAmount:{required:!1,tsType:{name:"string"},description:""},exchangeRate:{required:!1,tsType:{name:"string"},description:""},fees:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},reference:{required:!0,tsType:{name:"string"},description:""},debtorName:{required:!0,tsType:{name:"string"},description:""},debtorAccountNumber:{required:!0,tsType:{name:"string"},description:""},debtorBankName:{required:!1,tsType:{name:"string"},description:""},debtorBankIdentifier:{required:!1,tsType:{name:"string"},description:""},creditorName:{required:!0,tsType:{name:"string"},description:""},creditorAccountNumber:{required:!0,tsType:{name:"string"},description:""},creditorBankName:{required:!1,tsType:{name:"string"},description:""},creditorBankIdentifier:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};const me={title:"Informations/TransactionStatement",component:k},d=()=>e.jsx(U,{title:"Transaction statement",children:e.jsx(K,{title:"Default",children:e.jsx(k,{version:"v1",partnerLogoUrl:"https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png",generationDate:"08/12/2024",executionDate:"03/28/2024",type:"International credit transfer sent",amount:"12.00 EUR",targetTransferAmount:"10.25 GBP",exchangeRate:"1 EUR = 0,8548 GBP",fees:"1 EUR",label:"Transfer to Alexandra ERZINGOVIVOVA",reference:"12345-EIHJDKB-2849986398698-HLKHSFT",debtorName:"Green co",debtorAccountNumber:"FR7699999001001477659048183",debtorBankName:"Swan",debtorBankIdentifier:"SWNBFR22",creditorName:"Yellow corp",creditorAccountNumber:"FR7699999001001899407676183",creditorBankName:"Acme Bank",creditorBankIdentifier:"GNCFFRCQXXX",style:{backgroundColor:C.white}})})});d.__docgenInfo={description:"",methods:[],displayName:"Default"};var N,w,v;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <StoryBlock title="Transaction statement">
      <StoryPart title="Default">
        <TransactionStatement version="v1" partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png" generationDate="08/12/2024" executionDate="03/28/2024" type="International credit transfer sent" amount="12.00 EUR" targetTransferAmount="10.25 GBP" exchangeRate="1 EUR = 0,8548 GBP" fees="1 EUR" label="Transfer to Alexandra ERZINGOVIVOVA" reference="12345-EIHJDKB-2849986398698-HLKHSFT" debtorName="Green co" debtorAccountNumber="FR7699999001001477659048183" debtorBankName="Swan" debtorBankIdentifier="SWNBFR22" creditorName="Yellow corp" creditorAccountNumber="FR7699999001001899407676183" creditorBankName="Acme Bank" creditorBankIdentifier="GNCFFRCQXXX" style={{
        backgroundColor: invariantColors.white
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...(v=(w=d.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const le=["Default"];export{d as Default,le as __namedExportsOrder,me as default};
//# sourceMappingURL=TransactionStatement.stories-wr7n150u.js.map
