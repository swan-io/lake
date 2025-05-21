import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{z as k,B as r,s as X,k as $,T as a,S as l,c as u,i as K,K as J,h as v,g as Q}from"./ScrollView-CRqCiH49.js";import{S as E}from"./Separator-Bkm-h-Cw.js";import{S as U}from"./SwanLogo-Ci4nImcd.js";import{g as Y}from"./countries-NbmmTdnL.js";import{t as e,f as g}from"./i18n-BoebYzDL.js";import{S as Z,a as nn}from"./_StoriesComponents-BJjd_5r-.js";import"./index-D9D9kDko.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D0hBKHsB.js";import"./commonStyles-BBEkV6IC.js";import"./string-C-5ePvqA.js";import"./rifm-B2FFccIi.js";import"./utc-JZaFi-_r.js";import"./array-BfAlyugE.js";const I=24,tn=150,s=(i,c)=>({...J,color:u.gray[900],fontSize:c,lineHeight:c*1.25,fontWeight:"400"}),t=X.create({container:{width:793,padding:56},partnershipText:{...s("sans",14),color:u.gray[500]},pageTitle:{...s("sans",20),color:u.swan[500],fontWeight:"600"},sectionTitle:{...s("sans",14),color:u.swan[500],fontWeight:"600"},totalAmount:{...s("sans",20),fontWeight:"600"},titleColumn:{...s("sans",14),fontWeight:"600",paddingVertical:v[4],minWidth:v[96]},openingBalanceText:{...s("sans",13),textAlign:"right"},textColumn:{paddingVertical:v[8],...s("sans",13)},text:{...s("sans",14)},row:{textAlign:"right",paddingVertical:v[4],fontWeight:"600",width:"20%"},closingBalanceRow:{...s("sans",14),backgroundColor:u.gray[50],width:"50%"},footer:{...s("sans",10),color:u.gray[500],fontWeight:"300"},defaultLogo:{height:I,width:45/10*I},swanLogo:{height:8,width:45/10*8,position:"relative",top:.5}}),f=({text:i,align:c="left",style:d})=>n.jsx(a,{style:[t.titleColumn,d,{textAlign:c}],children:i}),an=i=>k(i).with("CardInChargeback","CardInChargebackReversal","CardInCredit","CardOutAuthorization","CardOutCredit","CardOutCreditReversal","CardOutDebit","CardOutDebitReversal",()=>e("accountStatement.card")).with("CheckIn","CheckInReturn",()=>e("accountStatement.check")).with("FeesIn","FeesOut",()=>e("accountStatement.fees")).with("SepaCreditTransferIn","SepaCreditTransferOut","SepaInstantCreditTransferIn","SepaInstantCreditTransferOut","InternalCreditTransferIn","InternalCreditTransferOut","InternationalCreditTransferIn","InternationalCreditTransferOut","InternalCreditTransferOutReturn","InternalCreditTransferOutRecall","InternalCreditTransferInReturn","InternalCreditTransferInRecall","SepaCreditTransferOutReturn","SepaInstantCreditTransferOutRecall","SepaInstantCreditTransferInRecall","SepaCreditTransferOutRecall","SepaCreditTransferInReturn","SepaCreditTransferInRecall","InternationalCreditTransferInReturn","InternationalCreditTransferOutReturn",()=>e("accountStatement.creditTransfer")).with("SepaDirectDebitIn","SepaDirectDebitInReturn","SepaDirectDebitInReversal","SepaDirectDebitOut","SepaDirectDebitOutReturn","SepaDirectDebitOutReversal","InternalDirectDebitIn","InternalDirectDebitInReturn","InternalDirectDebitOut","InternalDirectDebitOutReturn",()=>e("accountStatement.directDebit")).exhaustive(),en={height:I,maxWidth:tn,objectFit:"contain",objectPosition:"left"},w=({partnerLogoUrl:i,style:c,accountHolderType:d,accountHolderName:C,accountHolderAddress:o,iban:T,bic:R,openingDate:q,closingDate:F,openingBalance:m,transactions:P,feesDebit:H,feesCredit:M,totalsCredit:W,totalsDebit:N,closingBalance:D})=>n.jsxs(r,{style:[t.container,c],direction:"column",justifyContent:"spaceBetween",children:[n.jsxs(r,{children:[n.jsx(r,{direction:"row",justifyContent:"spaceBetween",children:n.jsxs(r,{direction:"row",alignItems:"center",children:[$(i)?n.jsx("img",{src:i,style:en}):n.jsx(U,{style:t.defaultLogo}),n.jsx(E,{horizontal:!0,space:8}),n.jsx(a,{style:t.partnershipText,children:e("accountStatement.partnership")}),n.jsx(l,{width:4}),n.jsx(U,{color:u.gray[900],style:t.swanLogo})]})}),n.jsx(l,{height:24}),n.jsx(a,{style:t.pageTitle,children:e("accountStatement.titleDocument")}),n.jsx(l,{height:8}),n.jsx(a,{style:t.text,children:d==="Company"?e("accountStatement.titleDocument.companyDescription"):e("accountStatement.titleDocument.individualDescription")}),n.jsx(l,{height:24}),n.jsxs(r,{direction:"row",justifyContent:"spaceBetween",children:[n.jsxs(r,{direction:"column",children:[n.jsx(a,{style:t.sectionTitle,children:C.toUpperCase()}),n.jsx(a,{style:t.text,children:o.addressLine1}),K(o.addressLine2)&&n.jsx(a,{children:o.addressLine2}),n.jsx(a,{style:t.text,children:`${o.postalCode} ${o.city}`}),n.jsx(a,{style:t.text,children:Y(o.country)})]}),n.jsxs(r,{direction:"column",alignItems:"end",children:[n.jsx(a,{style:t.sectionTitle,children:e("accountStatement.contactSupport")}),n.jsx(a,{style:t.text,children:"support@swan.io"})]})]}),n.jsx(l,{height:24}),n.jsx(a,{style:t.sectionTitle,children:e("accountStatement.iban")}),n.jsx(a,{style:t.text,children:T}),n.jsx(l,{height:12}),n.jsx(a,{style:t.sectionTitle,children:e("accountStatement.bic")}),n.jsx(a,{style:t.text,children:R}),n.jsx(l,{height:48}),n.jsxs(r,{direction:"row",justifyContent:"spaceBetween",children:[n.jsx(r,{direction:"column",children:n.jsx(a,{style:t.sectionTitle,children:e("accountStatement.date",{openingDate:q,closingDate:F})})}),n.jsxs(r,{direction:"column",children:[n.jsx(a,{style:t.openingBalanceText,children:e("accountStatement.openingBalance")}),n.jsx(a,{style:t.totalAmount,children:g(Number(m.value),m.currency)})]})]}),n.jsx(l,{height:24}),n.jsxs(n.Fragment,{children:[n.jsxs(r,{direction:"row",style:{backgroundColor:u.gray[50]},children:[n.jsx(a,{style:[t.titleColumn,{width:"15%"}],children:e("accountStatement.column.date")}),n.jsx(a,{style:[t.titleColumn,{width:"22%"}],children:e("accountStatement.column.type")}),n.jsx(a,{style:[t.titleColumn,{width:"33%"}],children:e("accountStatement.column.description")}),n.jsx(a,{style:[t.titleColumn,{width:"15%",textAlign:"right"}],children:e("accountStatement.column.credit")}),n.jsx(a,{style:[t.titleColumn,{width:"15%",textAlign:"right"}],children:e("accountStatement.column.debit")})]}),n.jsx(r,{direction:"column",children:P.map(({transactionAmount:b,transactionDate:G,transactionLabel:_,transactionSide:S,transactionType:z,transactionId:V})=>n.jsxs(r,{direction:"row",children:[n.jsx(a,{style:[t.textColumn,{width:"15%"}],children:G}),n.jsx(a,{style:[t.textColumn,{width:"22%"}],children:an(z)}),n.jsx(a,{style:[t.textColumn,{width:"33%"}],children:_}),n.jsx(a,{style:[t.textColumn,{width:"15%",textAlign:"right"}],children:S==="Credit"?b.value:""}),n.jsx(a,{style:[t.textColumn,{width:"15%",textAlign:"right"}],children:S==="Debit"?b.value:""})]},V))})]}),n.jsxs(r,{direction:"column",children:[n.jsxs(r,{direction:"row",justifyContent:"end",children:[n.jsx(a,{style:t.row,children:e("accountStatement.column.fees")}),n.jsx(a,{style:t.row,children:M.value}),n.jsx(a,{style:t.row,children:H.value})]}),n.jsxs(r,{direction:"row",justifyContent:"end",children:[n.jsx(a,{style:t.row,children:e("accountStatement.column.totals")}),n.jsx(a,{style:t.row,children:W.value}),n.jsx(a,{style:t.row,children:N.value})]})]}),n.jsx(r,{direction:"row",justifyContent:"end",children:n.jsxs(r,{direction:"row",alignItems:"center",style:t.closingBalanceRow,justifyContent:"spaceBetween",children:[n.jsx(f,{text:e("accountStatement.closingBalance")}),n.jsx(f,{text:g(Number(D.value),D.currency),style:t.totalAmount,align:"right"})]})})]}),n.jsxs(r,{children:[n.jsx(E,{space:24}),n.jsx(a,{style:t.footer,children:e("transactionStatement.footer")})]})]}),B=i=>k(i).with({version:"v1"},c=>n.jsx(w,{...c})).exhaustive();w.__docgenInfo={description:"",methods:[],displayName:"AccountStatementV1",props:{version:{required:!0,tsType:{name:"literal",value:'"v1"'},description:""},partnerLogoUrl:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},accountHolderType:{required:!0,tsType:{name:"union",raw:'"Individual" | "Company"',elements:[{name:"literal",value:'"Individual"'},{name:"literal",value:'"Company"'}]},description:""},accountHolderName:{required:!0,tsType:{name:"string"},description:""},accountHolderAddress:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
  state?: string;
  country: CountryCCA3;
}`,signature:{properties:[{key:"addressLine1",value:{name:"string",required:!0}},{key:"addressLine2",value:{name:"string",required:!1}},{key:"city",value:{name:"string",required:!0}},{key:"postalCode",value:{name:"string",required:!0}},{key:"state",value:{name:"string",required:!1}},{key:"country",value:{name:'Simplify["cca3"]',raw:'Country["cca3"]',required:!0}}]}},description:""},iban:{required:!0,tsType:{name:"string"},description:""},bic:{required:!0,tsType:{name:"string"},description:""},openingDate:{required:!0,tsType:{name:"string"},description:""},closingDate:{required:!0,tsType:{name:"string"},description:""},openingBalance:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},transactions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  transactionId: string;
  transactionLabel: string;
  transactionDate: string;
  transactionType: TransactionType;
  transactionSide: "Credit" | "Debit";
  transactionAmount: Amount;
}`,signature:{properties:[{key:"transactionId",value:{name:"string",required:!0}},{key:"transactionLabel",value:{name:"string",required:!0}},{key:"transactionDate",value:{name:"string",required:!0}},{key:"transactionType",value:{name:"union",raw:`| "SepaCreditTransferIn"
| "SepaCreditTransferOut"
| "SepaInstantCreditTransferIn"
| "SepaInstantCreditTransferOut"
| "InternalCreditTransferIn"
| "InternalCreditTransferOut"
| "InternationalCreditTransferIn"
| "InternationalCreditTransferOut"
| "InternalCreditTransferOutReturn"
| "InternalCreditTransferOutRecall"
| "InternalCreditTransferInReturn"
| "InternalCreditTransferInRecall"
| "SepaCreditTransferOutReturn"
| "SepaInstantCreditTransferOutRecall"
| "SepaInstantCreditTransferInRecall"
| "SepaCreditTransferOutRecall"
| "SepaCreditTransferInReturn"
| "SepaCreditTransferInRecall"
| "FeesOut"
| "FeesIn"
| "SepaDirectDebitIn"
| "SepaDirectDebitInReturn"
| "SepaDirectDebitInReversal"
| "SepaDirectDebitOut"
| "SepaDirectDebitOutReturn"
| "SepaDirectDebitOutReversal"
| "CardOutAuthorization"
| "CardOutDebit"
| "CardOutDebitReversal"
| "CardOutCredit"
| "CardOutCreditReversal"
| "InternalDirectDebitIn"
| "InternalDirectDebitInReturn"
| "InternalDirectDebitOut"
| "InternalDirectDebitOutReturn"
| "CheckIn"
| "CheckInReturn"
| "InternationalCreditTransferInReturn"
| "InternationalCreditTransferOutReturn"
| "CardInCredit"
| "CardInChargeback"
| "CardInChargebackReversal"`,elements:[{name:"literal",value:'"SepaCreditTransferIn"'},{name:"literal",value:'"SepaCreditTransferOut"'},{name:"literal",value:'"SepaInstantCreditTransferIn"'},{name:"literal",value:'"SepaInstantCreditTransferOut"'},{name:"literal",value:'"InternalCreditTransferIn"'},{name:"literal",value:'"InternalCreditTransferOut"'},{name:"literal",value:'"InternationalCreditTransferIn"'},{name:"literal",value:'"InternationalCreditTransferOut"'},{name:"literal",value:'"InternalCreditTransferOutReturn"'},{name:"literal",value:'"InternalCreditTransferOutRecall"'},{name:"literal",value:'"InternalCreditTransferInReturn"'},{name:"literal",value:'"InternalCreditTransferInRecall"'},{name:"literal",value:'"SepaCreditTransferOutReturn"'},{name:"literal",value:'"SepaInstantCreditTransferOutRecall"'},{name:"literal",value:'"SepaInstantCreditTransferInRecall"'},{name:"literal",value:'"SepaCreditTransferOutRecall"'},{name:"literal",value:'"SepaCreditTransferInReturn"'},{name:"literal",value:'"SepaCreditTransferInRecall"'},{name:"literal",value:'"FeesOut"'},{name:"literal",value:'"FeesIn"'},{name:"literal",value:'"SepaDirectDebitIn"'},{name:"literal",value:'"SepaDirectDebitInReturn"'},{name:"literal",value:'"SepaDirectDebitInReversal"'},{name:"literal",value:'"SepaDirectDebitOut"'},{name:"literal",value:'"SepaDirectDebitOutReturn"'},{name:"literal",value:'"SepaDirectDebitOutReversal"'},{name:"literal",value:'"CardOutAuthorization"'},{name:"literal",value:'"CardOutDebit"'},{name:"literal",value:'"CardOutDebitReversal"'},{name:"literal",value:'"CardOutCredit"'},{name:"literal",value:'"CardOutCreditReversal"'},{name:"literal",value:'"InternalDirectDebitIn"'},{name:"literal",value:'"InternalDirectDebitInReturn"'},{name:"literal",value:'"InternalDirectDebitOut"'},{name:"literal",value:'"InternalDirectDebitOutReturn"'},{name:"literal",value:'"CheckIn"'},{name:"literal",value:'"CheckInReturn"'},{name:"literal",value:'"InternationalCreditTransferInReturn"'},{name:"literal",value:'"InternationalCreditTransferOutReturn"'},{name:"literal",value:'"CardInCredit"'},{name:"literal",value:'"CardInChargeback"'},{name:"literal",value:'"CardInChargebackReversal"'}],required:!0}},{key:"transactionSide",value:{name:"union",raw:'"Credit" | "Debit"',elements:[{name:"literal",value:'"Credit"'},{name:"literal",value:'"Debit"'}],required:!0}},{key:"transactionAmount",value:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]},required:!0}}]}}],raw:"Transaction[]"},description:""},totalsCredit:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},totalsDebit:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},closingBalance:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},feesDebit:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},feesCredit:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""}}};const Dn={title:"Informations/AccountStatement",component:B},y=[{transactionId:"1",transactionAmount:{value:"303.50",currency:"EUR"},transactionDate:"01/01/2025",transactionLabel:"Sport subscription",transactionType:"CheckIn",transactionSide:"Credit"},{transactionId:"2",transactionAmount:{value:"200.00",currency:"EUR"},transactionDate:"10/01/2025",transactionLabel:"Ikea",transactionType:"CardOutDebit",transactionSide:"Debit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"234.00",currency:"EUR"}},{transactionId:"3",transactionAmount:{value:"1006.59",currency:"EUR"},transactionDate:"24/02/2025",transactionLabel:"Loan repayment",transactionType:"FeesOut",transactionSide:"Debit"},{transactionId:"4",transactionAmount:{value:"322.08",currency:"EUR"},transactionDate:"12/03/2025",transactionLabel:"Pet supplies",transactionType:"InternationalCreditTransferOut",transactionSide:"Credit"},{transactionId:"5",transactionAmount:{value:"490.76",currency:"EUR"},transactionDate:"21/03/2025",transactionLabel:"Hotel",transactionType:"SepaDirectDebitIn",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"1593.13",currency:"EUR"}},{transactionId:"6",transactionAmount:{value:"754.90",currency:"EUR"},transactionDate:"08/01/2025",transactionLabel:"Medical expenses",transactionType:"SepaCreditTransferInRecall",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"1136.70",currency:"EUR"}},{transactionId:"7",transactionAmount:{value:"127.96",currency:"EUR"},transactionDate:"05/01/2025",transactionLabel:"Flight ticket",transactionType:"CardOutCreditReversal",transactionSide:"Debit"},{transactionId:"8",transactionAmount:{value:"121.97",currency:"EUR"},transactionDate:"02/02/2025",transactionLabel:"Gift received",transactionType:"CardInChargebackReversal",transactionSide:"Credit"},{transactionId:"9",transactionAmount:{value:"1405.26",currency:"EUR"},transactionDate:"25/02/2025",transactionLabel:"Flight ticket",transactionType:"InternalCreditTransferInReturn",transactionSide:"Credit"},{transactionId:"10",transactionAmount:{value:"1122.84",currency:"EUR"},transactionDate:"24/01/2025",transactionLabel:"Gas station",transactionType:"InternationalCreditTransferInReturn",transactionSide:"Credit"},{transactionId:"11",transactionAmount:{value:"738.35",currency:"EUR"},transactionDate:"18/02/2025",transactionLabel:"Electricity bill",transactionType:"SepaCreditTransferIn",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"1713.11",currency:"EUR"}},{transactionId:"12",transactionAmount:{value:"331.48",currency:"EUR"},transactionDate:"06/03/2025",transactionLabel:"Medical expenses",transactionType:"InternalDirectDebitInReturn",transactionSide:"Credit"},{transactionId:"13",transactionAmount:{value:"1008.68",currency:"EUR"},transactionDate:"27/03/2025",transactionLabel:"Hotel",transactionType:"InternalDirectDebitOutReturn",transactionSide:"Credit"},{transactionId:"14",transactionAmount:{value:"820.54",currency:"EUR"},transactionDate:"16/03/2025",transactionLabel:"Movie ticket",transactionType:"InternationalCreditTransferIn",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"387.06",currency:"EUR"}},{transactionId:"15",transactionAmount:{value:"205.97",currency:"EUR"},transactionDate:"28/02/2025",transactionLabel:"Restaurant",transactionType:"InternationalCreditTransferInReturn",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"1837.51",currency:"EUR"}},{transactionId:"16",transactionAmount:{value:"306.71",currency:"EUR"},transactionDate:"19/02/2025",transactionLabel:"Flight ticket",transactionType:"FeesIn",transactionSide:"Credit"},{transactionId:"17",transactionAmount:{value:"318.83",currency:"EUR"},transactionDate:"21/02/2025",transactionLabel:"Pet supplies",transactionType:"FeesIn",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"1616.70",currency:"EUR"}},{transactionId:"18",transactionAmount:{value:"908.53",currency:"EUR"},transactionDate:"15/02/2025",transactionLabel:"Medical expenses",transactionType:"SepaInstantCreditTransferIn",transactionSide:"Credit"},{transactionId:"19",transactionAmount:{value:"306.32",currency:"EUR"},transactionDate:"01/01/2025",transactionLabel:"Medical expenses",transactionType:"FeesIn",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"480.99",currency:"EUR"}},{transactionId:"20",transactionAmount:{value:"321.39",currency:"EUR"},transactionDate:"29/03/2025",transactionLabel:"Medical expenses",transactionType:"InternalCreditTransferInRecall",transactionSide:"Credit"},{transactionId:"21",transactionAmount:{value:"459.71",currency:"EUR"},transactionDate:"07/01/2025",transactionLabel:"Water bill",transactionType:"SepaCreditTransferOutRecall",transactionSide:"Debit"},{transactionId:"22",transactionAmount:{value:"369.40",currency:"EUR"},transactionDate:"02/01/2025",transactionLabel:"Insurance refund",transactionType:"SepaDirectDebitInReversal",transactionSide:"Credit"},{transactionId:"23",transactionAmount:{value:"1212.65",currency:"EUR"},transactionDate:"05/02/2025",transactionLabel:"Public transport",transactionType:"CheckInReturn",transactionSide:"Credit"},{transactionId:"24",transactionAmount:{value:"912.65",currency:"EUR"},transactionDate:"03/01/2025",transactionLabel:"Bookstore",transactionType:"SepaCreditTransferOut",transactionSide:"Debit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"1965.81",currency:"EUR"}},{transactionId:"25",transactionAmount:{value:"1372.60",currency:"EUR"},transactionDate:"15/02/2025",transactionLabel:"Online shopping",transactionType:"CardOutAuthorization",transactionSide:"Debit"},{transactionId:"26",transactionAmount:{value:"770.07",currency:"EUR"},transactionDate:"31/03/2025",transactionLabel:"Loan repayment",transactionType:"CardInChargeback",transactionSide:"Credit"},{transactionId:"27",transactionAmount:{value:"1129.40",currency:"EUR"},transactionDate:"13/02/2025",transactionLabel:"Public transport",transactionType:"SepaInstantCreditTransferInRecall",transactionSide:"Credit"},{transactionId:"28",transactionAmount:{value:"1326.92",currency:"EUR"},transactionDate:"21/02/2025",transactionLabel:"Movie ticket",transactionType:"SepaDirectDebitOutReturn",transactionSide:"Debit"},{transactionId:"29",transactionAmount:{value:"760.94",currency:"EUR"},transactionDate:"14/03/2025",transactionLabel:"Water bill",transactionType:"CardInChargeback",transactionSide:"Credit"},{transactionId:"30",transactionAmount:{value:"274.37",currency:"EUR"},transactionDate:"13/02/2025",transactionLabel:"Hotel",transactionType:"InternalCreditTransferIn",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"750.32",currency:"EUR"}},{transactionId:"31",transactionAmount:{value:"694.41",currency:"EUR"},transactionDate:"16/03/2025",transactionLabel:"Restaurant",transactionType:"SepaCreditTransferOutRecall",transactionSide:"Debit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"1243.97",currency:"EUR"}},{transactionId:"32",transactionAmount:{value:"335.11",currency:"EUR"},transactionDate:"24/03/2025",transactionLabel:"Pet supplies",transactionType:"CardOutDebitReversal",transactionSide:"Debit"},{transactionId:"33",transactionAmount:{value:"758.83",currency:"EUR"},transactionDate:"28/03/2025",transactionLabel:"Medical expenses",transactionType:"InternalDirectDebitOut",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"1589.36",currency:"EUR"}},{transactionId:"34",transactionAmount:{value:"1210.63",currency:"EUR"},transactionDate:"12/03/2025",transactionLabel:"Pet supplies",transactionType:"SepaInstantCreditTransferIn",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"1058.32",currency:"EUR"}},{transactionId:"35",transactionAmount:{value:"1171.04",currency:"EUR"},transactionDate:"29/03/2025",transactionLabel:"Water bill",transactionType:"SepaCreditTransferInRecall",transactionSide:"Credit"},{transactionId:"36",transactionAmount:{value:"639.10",currency:"EUR"},transactionDate:"07/02/2025",transactionLabel:"Hotel",transactionType:"SepaCreditTransferInRecall",transactionSide:"Credit"},{transactionId:"37",transactionAmount:{value:"1231.22",currency:"EUR"},transactionDate:"23/03/2025",transactionLabel:"Loan repayment",transactionType:"SepaCreditTransferIn",transactionSide:"Credit"},{transactionId:"38",transactionAmount:{value:"186.98",currency:"EUR"},transactionDate:"11/03/2025",transactionLabel:"Restaurant",transactionType:"CardInChargeback",transactionSide:"Credit"},{transactionId:"39",transactionAmount:{value:"183.70",currency:"EUR"},transactionDate:"21/01/2025",transactionLabel:"Online shopping",transactionType:"SepaCreditTransferIn",transactionSide:"Credit"},{transactionId:"40",transactionAmount:{value:"10.75",currency:"EUR"},transactionDate:"11/01/2025",transactionLabel:"Groceries",transactionType:"SepaInstantCreditTransferOutRecall",transactionSide:"Credit"},{transactionId:"41",transactionAmount:{value:"258.83",currency:"EUR"},transactionDate:"06/01/2025",transactionLabel:"Online shopping",transactionType:"InternalCreditTransferInReturn",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"1744.93",currency:"EUR"}},{transactionId:"42",transactionAmount:{value:"39.72",currency:"EUR"},transactionDate:"04/03/2025",transactionLabel:"Freelance income",transactionType:"InternationalCreditTransferOutReturn",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"1856.35",currency:"EUR"}},{transactionId:"43",transactionAmount:{value:"970.20",currency:"EUR"},transactionDate:"07/03/2025",transactionLabel:"Hotel",transactionType:"SepaDirectDebitInReversal",transactionSide:"Credit"},{transactionId:"44",transactionAmount:{value:"542.21",currency:"EUR"},transactionDate:"02/01/2025",transactionLabel:"Groceries",transactionType:"InternalCreditTransferInRecall",transactionSide:"Credit"},{transactionId:"45",transactionAmount:{value:"266.02",currency:"EUR"},transactionDate:"19/01/2025",transactionLabel:"Pet supplies",transactionType:"CheckIn",transactionSide:"Credit"},{transactionId:"46",transactionAmount:{value:"983.87",currency:"EUR"},transactionDate:"14/03/2025",transactionLabel:"Freelance income",transactionType:"SepaDirectDebitOutReversal",transactionSide:"Debit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"945.33",currency:"EUR"}},{transactionId:"47",transactionAmount:{value:"832.10",currency:"EUR"},transactionDate:"20/01/2025",transactionLabel:"Groceries",transactionType:"SepaInstantCreditTransferOutRecall",transactionSide:"Credit"},{transactionId:"48",transactionAmount:{value:"1244.48",currency:"EUR"},transactionDate:"07/02/2025",transactionLabel:"Loan repayment",transactionType:"CardOutAuthorization",transactionSide:"Debit"},{transactionId:"49",transactionAmount:{value:"79.76",currency:"EUR"},transactionDate:"30/03/2025",transactionLabel:"Bookstore",transactionType:"InternationalCreditTransferOutReturn",transactionSide:"Credit"},{transactionId:"50",transactionAmount:{value:"1262.17",currency:"EUR"},transactionDate:"23/03/2025",transactionLabel:"Hotel",transactionType:"SepaCreditTransferOutReturn",transactionSide:"Debit"},{transactionId:"51",transactionAmount:{value:"277.51",currency:"EUR"},transactionDate:"11/03/2025",transactionLabel:"Concert",transactionType:"SepaDirectDebitOut",transactionSide:"Debit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"414.45",currency:"EUR"}},{transactionId:"52",transactionAmount:{value:"534.40",currency:"EUR"},transactionDate:"04/03/2025",transactionLabel:"Concert",transactionType:"InternalCreditTransferInReturn",transactionSide:"Credit",totalsCredit:{value:"0.00",currency:"EUR"},totalsDebit:{value:"0.00",currency:"EUR"},closingBalance:{value:"389.09",currency:"EUR"}}],p=()=>{const i={addressLine1:"1 rue de la Paix",city:"Paris",postalCode:"75002",country:"FRA"},c={value:"10000",currency:"EUR"},d={value:"4.00",currency:"EUR"},C={value:"1.00",currency:"EUR"},o={value:"19.00",currency:"EUR"},T={value:"2.00",currency:"EUR"},R={value:"3456.00",currency:"EUR"};return n.jsx(Z,{title:"Account statement",children:n.jsx(nn,{title:"Default",children:n.jsx(B,{version:"v1",partnerLogoUrl:"https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png",accountHolderType:"Individual",accountHolderName:"Sandrine Da Silva",accountHolderAddress:i,style:{backgroundColor:Q.white},iban:"DE63 1111 1111 8189 3774 57",bic:"SWNBDEBB",openingDate:"01/01/2025",closingDate:"31/01/2025",openingBalance:c,transactions:y,feesDebit:d,feesCredit:C,totalsCredit:T,totalsDebit:o,closingBalance:R})})})};p.__docgenInfo={description:"",methods:[],displayName:"Default"};var h,A,L;y.parameters={...y.parameters,docs:{...(h=y.parameters)==null?void 0:h.docs,source:{originalSource:`[{
  transactionId: "1",
  transactionAmount: {
    value: "303.50",
    currency: "EUR"
  },
  transactionDate: "01/01/2025",
  transactionLabel: "Sport subscription",
  transactionType: "CheckIn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "2",
  transactionAmount: {
    value: "200.00",
    currency: "EUR"
  },
  transactionDate: "10/01/2025",
  transactionLabel: "Ikea",
  transactionType: "CardOutDebit" as TransactionType,
  transactionSide: "Debit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "234.00",
    currency: "EUR"
  }
}, {
  transactionId: "3",
  transactionAmount: {
    value: "1006.59",
    currency: "EUR"
  },
  transactionDate: "24/02/2025",
  transactionLabel: "Loan repayment",
  transactionType: "FeesOut" as TransactionType,
  transactionSide: "Debit" as const
}, {
  transactionId: "4",
  transactionAmount: {
    value: "322.08",
    currency: "EUR"
  },
  transactionDate: "12/03/2025",
  transactionLabel: "Pet supplies",
  transactionType: "InternationalCreditTransferOut" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "5",
  transactionAmount: {
    value: "490.76",
    currency: "EUR"
  },
  transactionDate: "21/03/2025",
  transactionLabel: "Hotel",
  transactionType: "SepaDirectDebitIn" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "1593.13",
    currency: "EUR"
  }
}, {
  transactionId: "6",
  transactionAmount: {
    value: "754.90",
    currency: "EUR"
  },
  transactionDate: "08/01/2025",
  transactionLabel: "Medical expenses",
  transactionType: "SepaCreditTransferInRecall" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "1136.70",
    currency: "EUR"
  }
}, {
  transactionId: "7",
  transactionAmount: {
    value: "127.96",
    currency: "EUR"
  },
  transactionDate: "05/01/2025",
  transactionLabel: "Flight ticket",
  transactionType: "CardOutCreditReversal" as TransactionType,
  transactionSide: "Debit" as const
}, {
  transactionId: "8",
  transactionAmount: {
    value: "121.97",
    currency: "EUR"
  },
  transactionDate: "02/02/2025",
  transactionLabel: "Gift received",
  transactionType: "CardInChargebackReversal" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "9",
  transactionAmount: {
    value: "1405.26",
    currency: "EUR"
  },
  transactionDate: "25/02/2025",
  transactionLabel: "Flight ticket",
  transactionType: "InternalCreditTransferInReturn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "10",
  transactionAmount: {
    value: "1122.84",
    currency: "EUR"
  },
  transactionDate: "24/01/2025",
  transactionLabel: "Gas station",
  transactionType: "InternationalCreditTransferInReturn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "11",
  transactionAmount: {
    value: "738.35",
    currency: "EUR"
  },
  transactionDate: "18/02/2025",
  transactionLabel: "Electricity bill",
  transactionType: "SepaCreditTransferIn" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "1713.11",
    currency: "EUR"
  }
}, {
  transactionId: "12",
  transactionAmount: {
    value: "331.48",
    currency: "EUR"
  },
  transactionDate: "06/03/2025",
  transactionLabel: "Medical expenses",
  transactionType: "InternalDirectDebitInReturn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "13",
  transactionAmount: {
    value: "1008.68",
    currency: "EUR"
  },
  transactionDate: "27/03/2025",
  transactionLabel: "Hotel",
  transactionType: "InternalDirectDebitOutReturn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "14",
  transactionAmount: {
    value: "820.54",
    currency: "EUR"
  },
  transactionDate: "16/03/2025",
  transactionLabel: "Movie ticket",
  transactionType: "InternationalCreditTransferIn" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "387.06",
    currency: "EUR"
  }
}, {
  transactionId: "15",
  transactionAmount: {
    value: "205.97",
    currency: "EUR"
  },
  transactionDate: "28/02/2025",
  transactionLabel: "Restaurant",
  transactionType: "InternationalCreditTransferInReturn" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "1837.51",
    currency: "EUR"
  }
}, {
  transactionId: "16",
  transactionAmount: {
    value: "306.71",
    currency: "EUR"
  },
  transactionDate: "19/02/2025",
  transactionLabel: "Flight ticket",
  transactionType: "FeesIn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "17",
  transactionAmount: {
    value: "318.83",
    currency: "EUR"
  },
  transactionDate: "21/02/2025",
  transactionLabel: "Pet supplies",
  transactionType: "FeesIn" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "1616.70",
    currency: "EUR"
  }
}, {
  transactionId: "18",
  transactionAmount: {
    value: "908.53",
    currency: "EUR"
  },
  transactionDate: "15/02/2025",
  transactionLabel: "Medical expenses",
  transactionType: "SepaInstantCreditTransferIn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "19",
  transactionAmount: {
    value: "306.32",
    currency: "EUR"
  },
  transactionDate: "01/01/2025",
  transactionLabel: "Medical expenses",
  transactionType: "FeesIn" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "480.99",
    currency: "EUR"
  }
}, {
  transactionId: "20",
  transactionAmount: {
    value: "321.39",
    currency: "EUR"
  },
  transactionDate: "29/03/2025",
  transactionLabel: "Medical expenses",
  transactionType: "InternalCreditTransferInRecall" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "21",
  transactionAmount: {
    value: "459.71",
    currency: "EUR"
  },
  transactionDate: "07/01/2025",
  transactionLabel: "Water bill",
  transactionType: "SepaCreditTransferOutRecall" as TransactionType,
  transactionSide: "Debit" as const
}, {
  transactionId: "22",
  transactionAmount: {
    value: "369.40",
    currency: "EUR"
  },
  transactionDate: "02/01/2025",
  transactionLabel: "Insurance refund",
  transactionType: "SepaDirectDebitInReversal" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "23",
  transactionAmount: {
    value: "1212.65",
    currency: "EUR"
  },
  transactionDate: "05/02/2025",
  transactionLabel: "Public transport",
  transactionType: "CheckInReturn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "24",
  transactionAmount: {
    value: "912.65",
    currency: "EUR"
  },
  transactionDate: "03/01/2025",
  transactionLabel: "Bookstore",
  transactionType: "SepaCreditTransferOut" as TransactionType,
  transactionSide: "Debit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "1965.81",
    currency: "EUR"
  }
}, {
  transactionId: "25",
  transactionAmount: {
    value: "1372.60",
    currency: "EUR"
  },
  transactionDate: "15/02/2025",
  transactionLabel: "Online shopping",
  transactionType: "CardOutAuthorization" as TransactionType,
  transactionSide: "Debit" as const
}, {
  transactionId: "26",
  transactionAmount: {
    value: "770.07",
    currency: "EUR"
  },
  transactionDate: "31/03/2025",
  transactionLabel: "Loan repayment",
  transactionType: "CardInChargeback" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "27",
  transactionAmount: {
    value: "1129.40",
    currency: "EUR"
  },
  transactionDate: "13/02/2025",
  transactionLabel: "Public transport",
  transactionType: "SepaInstantCreditTransferInRecall" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "28",
  transactionAmount: {
    value: "1326.92",
    currency: "EUR"
  },
  transactionDate: "21/02/2025",
  transactionLabel: "Movie ticket",
  transactionType: "SepaDirectDebitOutReturn" as TransactionType,
  transactionSide: "Debit" as const
}, {
  transactionId: "29",
  transactionAmount: {
    value: "760.94",
    currency: "EUR"
  },
  transactionDate: "14/03/2025",
  transactionLabel: "Water bill",
  transactionType: "CardInChargeback" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "30",
  transactionAmount: {
    value: "274.37",
    currency: "EUR"
  },
  transactionDate: "13/02/2025",
  transactionLabel: "Hotel",
  transactionType: "InternalCreditTransferIn" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "750.32",
    currency: "EUR"
  }
}, {
  transactionId: "31",
  transactionAmount: {
    value: "694.41",
    currency: "EUR"
  },
  transactionDate: "16/03/2025",
  transactionLabel: "Restaurant",
  transactionType: "SepaCreditTransferOutRecall" as TransactionType,
  transactionSide: "Debit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "1243.97",
    currency: "EUR"
  }
}, {
  transactionId: "32",
  transactionAmount: {
    value: "335.11",
    currency: "EUR"
  },
  transactionDate: "24/03/2025",
  transactionLabel: "Pet supplies",
  transactionType: "CardOutDebitReversal" as TransactionType,
  transactionSide: "Debit" as const
}, {
  transactionId: "33",
  transactionAmount: {
    value: "758.83",
    currency: "EUR"
  },
  transactionDate: "28/03/2025",
  transactionLabel: "Medical expenses",
  transactionType: "InternalDirectDebitOut" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "1589.36",
    currency: "EUR"
  }
}, {
  transactionId: "34",
  transactionAmount: {
    value: "1210.63",
    currency: "EUR"
  },
  transactionDate: "12/03/2025",
  transactionLabel: "Pet supplies",
  transactionType: "SepaInstantCreditTransferIn" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "1058.32",
    currency: "EUR"
  }
}, {
  transactionId: "35",
  transactionAmount: {
    value: "1171.04",
    currency: "EUR"
  },
  transactionDate: "29/03/2025",
  transactionLabel: "Water bill",
  transactionType: "SepaCreditTransferInRecall" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "36",
  transactionAmount: {
    value: "639.10",
    currency: "EUR"
  },
  transactionDate: "07/02/2025",
  transactionLabel: "Hotel",
  transactionType: "SepaCreditTransferInRecall" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "37",
  transactionAmount: {
    value: "1231.22",
    currency: "EUR"
  },
  transactionDate: "23/03/2025",
  transactionLabel: "Loan repayment",
  transactionType: "SepaCreditTransferIn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "38",
  transactionAmount: {
    value: "186.98",
    currency: "EUR"
  },
  transactionDate: "11/03/2025",
  transactionLabel: "Restaurant",
  transactionType: "CardInChargeback" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "39",
  transactionAmount: {
    value: "183.70",
    currency: "EUR"
  },
  transactionDate: "21/01/2025",
  transactionLabel: "Online shopping",
  transactionType: "SepaCreditTransferIn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "40",
  transactionAmount: {
    value: "10.75",
    currency: "EUR"
  },
  transactionDate: "11/01/2025",
  transactionLabel: "Groceries",
  transactionType: "SepaInstantCreditTransferOutRecall" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "41",
  transactionAmount: {
    value: "258.83",
    currency: "EUR"
  },
  transactionDate: "06/01/2025",
  transactionLabel: "Online shopping",
  transactionType: "InternalCreditTransferInReturn" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "1744.93",
    currency: "EUR"
  }
}, {
  transactionId: "42",
  transactionAmount: {
    value: "39.72",
    currency: "EUR"
  },
  transactionDate: "04/03/2025",
  transactionLabel: "Freelance income",
  transactionType: "InternationalCreditTransferOutReturn" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "1856.35",
    currency: "EUR"
  }
}, {
  transactionId: "43",
  transactionAmount: {
    value: "970.20",
    currency: "EUR"
  },
  transactionDate: "07/03/2025",
  transactionLabel: "Hotel",
  transactionType: "SepaDirectDebitInReversal" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "44",
  transactionAmount: {
    value: "542.21",
    currency: "EUR"
  },
  transactionDate: "02/01/2025",
  transactionLabel: "Groceries",
  transactionType: "InternalCreditTransferInRecall" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "45",
  transactionAmount: {
    value: "266.02",
    currency: "EUR"
  },
  transactionDate: "19/01/2025",
  transactionLabel: "Pet supplies",
  transactionType: "CheckIn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "46",
  transactionAmount: {
    value: "983.87",
    currency: "EUR"
  },
  transactionDate: "14/03/2025",
  transactionLabel: "Freelance income",
  transactionType: "SepaDirectDebitOutReversal" as TransactionType,
  transactionSide: "Debit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "945.33",
    currency: "EUR"
  }
}, {
  transactionId: "47",
  transactionAmount: {
    value: "832.10",
    currency: "EUR"
  },
  transactionDate: "20/01/2025",
  transactionLabel: "Groceries",
  transactionType: "SepaInstantCreditTransferOutRecall" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "48",
  transactionAmount: {
    value: "1244.48",
    currency: "EUR"
  },
  transactionDate: "07/02/2025",
  transactionLabel: "Loan repayment",
  transactionType: "CardOutAuthorization" as TransactionType,
  transactionSide: "Debit" as const
}, {
  transactionId: "49",
  transactionAmount: {
    value: "79.76",
    currency: "EUR"
  },
  transactionDate: "30/03/2025",
  transactionLabel: "Bookstore",
  transactionType: "InternationalCreditTransferOutReturn" as TransactionType,
  transactionSide: "Credit" as const
}, {
  transactionId: "50",
  transactionAmount: {
    value: "1262.17",
    currency: "EUR"
  },
  transactionDate: "23/03/2025",
  transactionLabel: "Hotel",
  transactionType: "SepaCreditTransferOutReturn" as TransactionType,
  transactionSide: "Debit" as const
}, {
  transactionId: "51",
  transactionAmount: {
    value: "277.51",
    currency: "EUR"
  },
  transactionDate: "11/03/2025",
  transactionLabel: "Concert",
  transactionType: "SepaDirectDebitOut" as TransactionType,
  transactionSide: "Debit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "414.45",
    currency: "EUR"
  }
}, {
  transactionId: "52",
  transactionAmount: {
    value: "534.40",
    currency: "EUR"
  },
  transactionDate: "04/03/2025",
  transactionLabel: "Concert",
  transactionType: "InternalCreditTransferInReturn" as TransactionType,
  transactionSide: "Credit" as const,
  totalsCredit: {
    value: "0.00",
    currency: "EUR"
  },
  totalsDebit: {
    value: "0.00",
    currency: "EUR"
  },
  closingBalance: {
    value: "389.09",
    currency: "EUR"
  }
}]`,...(L=(A=y.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var x,O,j;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const address = {
    addressLine1: "1 rue de la Paix",
    city: "Paris",
    postalCode: "75002",
    country: "FRA" as CountryCCA3
  };
  const openingBalance = {
    value: "10000",
    currency: "EUR"
  };
  const feesDebit = {
    value: "4.00",
    currency: "EUR"
  };
  const feesCredit = {
    value: "1.00",
    currency: "EUR"
  };
  const totalsDebit = {
    value: "19.00",
    currency: "EUR"
  };
  const totalsCredit = {
    value: "2.00",
    currency: "EUR"
  };
  const closingBalance = {
    value: "3456.00",
    currency: "EUR"
  };
  return <StoryBlock title="Account statement">
      <StoryPart title="Default">
        <AccountStatement version="v1" partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png" accountHolderType="Individual" accountHolderName="Sandrine Da Silva" accountHolderAddress={address} style={{
        backgroundColor: invariantColors.white
      }} iban={"DE63 1111 1111 8189 3774 57"} bic={"SWNBDEBB"} openingDate="01/01/2025" closingDate="31/01/2025" openingBalance={openingBalance} transactions={transactions} feesDebit={feesDebit} feesCredit={feesCredit} totalsCredit={totalsCredit} totalsDebit={totalsDebit} closingBalance={closingBalance} />
      </StoryPart>
    </StoryBlock>;
}`,...(j=(O=p.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const bn=["transactions","Default"];export{p as Default,bn as __namedExportsOrder,Dn as default,y as transactions};
//# sourceMappingURL=AccountStatement.stories-DCKUSUmI.js.map
