import{z as q,j as e,B as r,s as O,n as G,T as t,S as u,c as s,i as _,w as V,a as v,A as X}from"./ScrollView-Cc2z1OzK.js";import{S as R}from"./Separator-COrfhBtX.js";import{S as E}from"./SwanLogo-FI5OJuvi.js";import{g as z}from"./countries-FSRfqlag.js";import{t as i,f as S}from"./i18n-Bg3OxfI_.js";import{S as J,a as K}from"./_StoriesComponents-D4leLtGI.js";import"./iframe-DIjOTGxJ.js";import"./index-CAMjTmLS.js";import"./commonStyles-BBEkV6IC.js";import"./string-BhNzKgGr.js";import"./rifm-4ogHnear.js";import"./array-BfAlyugE.js";const f=24,Q=150,c=(a,d)=>({...V,color:s.gray[900],fontSize:d,lineHeight:d*1.25,fontWeight:"400"}),n=O.create({container:{width:793,padding:56},partnershipText:{...c("sans",14),color:s.gray[500]},pageTitle:{...c("sans",20),color:s.swan[500],fontWeight:"600"},sectionTitle:{...c("sans",14),color:s.swan[500],fontWeight:"600"},totalAmount:{...c("sans",20),fontWeight:"600"},titleColumn:{...c("sans",14),fontWeight:"600",paddingVertical:v[4],minWidth:v[96]},openingBalanceText:{...c("sans",13),textAlign:"right"},textColumn:{paddingVertical:v[8],...c("sans",13)},text:{...c("sans",14)},row:{textAlign:"right",paddingVertical:v[4],fontWeight:"600",width:"20%"},closingBalanceRow:{...c("sans",14),backgroundColor:s.gray[50],width:"50%"},footer:{...c("sans",10),color:s.gray[500],fontWeight:"300"},defaultLogo:{height:f,width:45/10*f},swanLogo:{height:8,width:45/10*8,position:"relative",top:.5}}),U=({text:a,align:d="left",style:y})=>e.jsx(t,{style:[n.titleColumn,y,{textAlign:d}],children:a}),Y=a=>q(a).with("Card",()=>i("accountStatement.card")).with("Check",()=>i("accountStatement.check")).with("Fees",()=>i("accountStatement.fees")).with("InternationalDirectDebit","SepaDirectDebit",()=>i("accountStatement.directDebit")).with("InternationalCreditTransfer","SepaCreditTransfer",()=>i("accountStatement.creditTransfer")).exhaustive(),Z={height:f,maxWidth:Q,objectFit:"contain",objectPosition:"left"},F=({partnerLogoUrl:a,style:d,accountHolderType:y,accountHolderName:m,accountHolderAddress:o,iban:g,bic:D,openingDate:A,closingDate:P,openingBalance:h,transactions:H,feesDebit:M,feesCredit:W,totalsCredit:L,totalsDebit:N,closingBalance:x})=>e.jsxs(r,{style:[n.container,d],direction:"column",justifyContent:"spaceBetween",children:[e.jsxs(r,{children:[e.jsx(r,{direction:"row",justifyContent:"spaceBetween",children:e.jsxs(r,{direction:"row",alignItems:"center",children:[G(a)?e.jsx("img",{src:a,style:Z}):e.jsx(E,{style:n.defaultLogo}),e.jsx(R,{horizontal:!0,space:8}),e.jsx(t,{style:n.partnershipText,children:i("accountStatement.partnership")}),e.jsx(u,{width:4}),e.jsx(E,{color:s.gray[900],style:n.swanLogo})]})}),e.jsx(u,{height:24}),e.jsx(t,{style:n.pageTitle,children:i("accountStatement.titleDocument")}),e.jsx(u,{height:8}),e.jsx(t,{style:n.text,children:y==="Company"?i("accountStatement.titleDocument.companyDescription"):i("accountStatement.titleDocument.individualDescription")}),e.jsx(u,{height:24}),e.jsxs(r,{direction:"row",justifyContent:"spaceBetween",children:[e.jsxs(r,{direction:"column",children:[e.jsx(t,{style:n.sectionTitle,children:m.toUpperCase()}),e.jsx(t,{style:n.text,children:o.street}),e.jsx(t,{style:n.text,children:o.city}),_(o.country)&&e.jsx(t,{style:n.text,children:z(o.country)})]}),e.jsxs(r,{direction:"column",alignItems:"end",children:[e.jsx(t,{style:n.sectionTitle,children:i("accountStatement.contactSupport")}),e.jsx(t,{style:n.text,children:"support@swan.io"})]})]}),e.jsx(u,{height:24}),e.jsx(t,{style:n.sectionTitle,children:i("accountStatement.iban")}),e.jsx(t,{style:n.text,children:g}),e.jsx(u,{height:12}),e.jsx(t,{style:n.sectionTitle,children:i("accountStatement.bic")}),e.jsx(t,{style:n.text,children:D}),e.jsx(u,{height:48}),e.jsxs(r,{direction:"row",justifyContent:"spaceBetween",children:[e.jsx(r,{direction:"column",children:e.jsx(t,{style:n.sectionTitle,children:i("accountStatement.date",{openingDate:A,closingDate:P})})}),e.jsxs(r,{direction:"column",children:[e.jsx(t,{style:n.openingBalanceText,children:i("accountStatement.openingBalance")}),e.jsx(t,{style:n.totalAmount,children:S(Number(h.value),h.currency)})]})]}),e.jsx(u,{height:24}),e.jsxs(e.Fragment,{children:[e.jsxs(r,{direction:"row",style:{backgroundColor:s.gray[50]},children:[e.jsx(t,{style:[n.titleColumn,{width:"15%"}],children:i("accountStatement.column.date")}),e.jsx(t,{style:[n.titleColumn,{width:"22%"}],children:i("accountStatement.column.type")}),e.jsx(t,{style:[n.titleColumn,{width:"33%"}],children:i("accountStatement.column.description")}),e.jsx(t,{style:[n.titleColumn,{width:"15%",textAlign:"right"}],children:i("accountStatement.column.credit")}),e.jsx(t,{style:[n.titleColumn,{width:"15%",textAlign:"right"}],children:i("accountStatement.column.debit")})]}),e.jsx(r,{direction:"column",children:H.map(l=>e.jsxs(r,{direction:"row",children:[e.jsx(t,{style:[n.textColumn,{width:"15%"}],children:l.date}),e.jsx(t,{style:[n.textColumn,{width:"22%"}],children:Y(l.type)}),e.jsx(t,{style:[n.textColumn,{width:"33%"}],children:l.label}),e.jsx(t,{style:[n.textColumn,{width:"15%",textAlign:"right"}],children:l.credit?l.credit.value:""}),e.jsx(t,{style:[n.textColumn,{width:"15%",textAlign:"right"}],children:l.debit?l.debit.value:""})]},l.id))})]}),e.jsxs(r,{direction:"column",children:[e.jsxs(r,{direction:"row",justifyContent:"end",children:[e.jsx(t,{style:n.row,children:i("accountStatement.column.fees")}),e.jsx(t,{style:n.row,children:W.value}),e.jsx(t,{style:n.row,children:M.value})]}),e.jsxs(r,{direction:"row",justifyContent:"end",children:[e.jsx(t,{style:n.row,children:i("accountStatement.column.totals")}),e.jsx(t,{style:n.row,children:L.value}),e.jsx(t,{style:n.row,children:N.value})]})]}),e.jsx(r,{direction:"row",justifyContent:"end",children:e.jsxs(r,{direction:"row",alignItems:"center",style:n.closingBalanceRow,justifyContent:"spaceBetween",children:[e.jsx(U,{text:i("accountStatement.closingBalance")}),e.jsx(U,{text:S(Number(x.value),x.currency),style:n.totalAmount,align:"right"})]})})]}),e.jsxs(r,{children:[e.jsx(R,{space:24}),e.jsx(t,{style:n.footer,children:i("transactionStatement.footer")})]})]}),B=a=>q(a).with({version:"v1"},d=>e.jsx(F,{...d})).exhaustive();F.__docgenInfo={description:"",methods:[],displayName:"AccountStatementV1",props:{version:{required:!0,tsType:{name:"literal",value:'"v1"'},description:""},partnerLogoUrl:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},accountHolderType:{required:!0,tsType:{name:"union",raw:'"Individual" | "Company"',elements:[{name:"literal",value:'"Individual"'},{name:"literal",value:'"Company"'}]},description:""},accountHolderName:{required:!0,tsType:{name:"string"},description:""},accountHolderAddress:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  street: string;
  city: string;
  country?: CountryCCA3;
}`,signature:{properties:[{key:"street",value:{name:"string",required:!0}},{key:"city",value:{name:"string",required:!0}},{key:"country",value:{name:'Simplify["cca3"]',raw:'Country["cca3"]',required:!1}}]}},description:""},iban:{required:!0,tsType:{name:"string"},description:""},bic:{required:!0,tsType:{name:"string"},description:""},openingDate:{required:!0,tsType:{name:"string"},description:""},closingDate:{required:!0,tsType:{name:"string"},description:""},openingBalance:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},transactions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  date: string;
  type:
    | "Card"
    | "Check"
    | "Fees"
    | "InternationalDirectDebit"
    | "InternationalCreditTransfer"
    | "SepaCreditTransfer"
    | "SepaDirectDebit";
  credit?: Amount;
  debit?: Amount;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"date",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| "Card"
| "Check"
| "Fees"
| "InternationalDirectDebit"
| "InternationalCreditTransfer"
| "SepaCreditTransfer"
| "SepaDirectDebit"`,elements:[{name:"literal",value:'"Card"'},{name:"literal",value:'"Check"'},{name:"literal",value:'"Fees"'},{name:"literal",value:'"InternationalDirectDebit"'},{name:"literal",value:'"InternationalCreditTransfer"'},{name:"literal",value:'"SepaCreditTransfer"'},{name:"literal",value:'"SepaDirectDebit"'}],required:!0}},{key:"credit",value:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]},required:!1}},{key:"debit",value:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:"Transaction[]"},description:""},totalsCredit:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""}}};const oe={title:"Informations/AccountStatement",component:B},p=[{id:"1",label:"Sport subscription",date:"01/01/2025",type:"Card",credit:{value:"303.50",currency:"EUR"},debit:void 0},{id:"2",label:"Ikea",date:"10/01/2025",type:"Fees",credit:void 0,debit:{value:"200.00",currency:"EUR"}},{id:"3",label:"Loan repayment",date:"24/02/2025",type:"InternationalDirectDebit",credit:void 0,debit:{value:"1006.59",currency:"EUR"}},{id:"4",label:"Pet supplies",date:"12/03/2025",type:"SepaCreditTransfer",credit:{value:"322.08",currency:"EUR"},debit:void 0},{id:"5",label:"Hotel",date:"21/03/2025",type:"SepaCreditTransfer",credit:{value:"490.76",currency:"EUR"},debit:void 0},{id:"6",label:"Medical expenses",date:"08/01/2025",type:"SepaDirectDebit",credit:{value:"754.90",currency:"EUR"},debit:void 0},{id:"7",label:"Flight ticket",date:"05/01/2025",type:"Card",credit:void 0,debit:{value:"127.96",currency:"EUR"}},{id:"8",label:"Gift received",date:"02/02/2025",type:"Fees",credit:{value:"121.97",currency:"EUR"},debit:void 0},{id:"9",label:"Flight ticket",date:"25/02/2025",type:"InternationalDirectDebit",credit:{value:"1405.26",currency:"EUR"},debit:void 0},{id:"10",label:"Gas station",date:"24/01/2025",type:"SepaCreditTransfer",credit:{value:"1122.84",currency:"EUR"},debit:void 0},{id:"11",label:"Electricity bill",date:"18/02/2025",type:"SepaDirectDebit",credit:{value:"738.35",currency:"EUR"},debit:void 0},{id:"12",label:"Medical expenses",date:"06/03/2025",type:"InternationalDirectDebit",credit:void 0,debit:{value:"331.48",currency:"EUR"}},{id:"13",label:"Hotel",date:"27/03/2025",type:"SepaCreditTransfer",credit:void 0,debit:{value:"1008.68",currency:"EUR"}},{id:"14",label:"Movie ticket",date:"16/03/2025",type:"InternationalCreditTransfer",credit:{value:"820.54",currency:"EUR"},debit:void 0},{id:"15",label:"Restaurant",date:"28/02/2025",type:"InternationalDirectDebit",credit:{value:"205.97",currency:"EUR"},debit:void 0},{id:"16",label:"Flight ticket",date:"19/02/2025",type:"Fees",credit:{value:"306.71",currency:"EUR"},debit:void 0},{id:"17",label:"Pet supplies",date:"21/02/2025",type:"Fees",credit:{value:"318.83",currency:"EUR"},debit:void 0},{id:"18",label:"Medical expenses",date:"15/02/2025",type:"SepaDirectDebit",credit:{value:"908.53",currency:"EUR"},debit:void 0},{id:"19",label:"Medical expenses",date:"01/01/2025",type:"Fees",credit:{value:"306.32",currency:"EUR"},debit:void 0},{id:"20",label:"Medical expenses",date:"29/03/2025",type:"SepaDirectDebit",credit:{value:"321.39",currency:"EUR"},debit:void 0},{id:"21",label:"Water bill",date:"07/01/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"459.71",currency:"EUR"}},{id:"22",label:"Insurance refund",date:"02/01/2025",type:"Fees",credit:void 0,debit:{value:"369.40",currency:"EUR"}},{id:"23",label:"Public transport",date:"05/02/2025",type:"InternationalDirectDebit",credit:{value:"1212.65",currency:"EUR"},debit:void 0},{id:"24",label:"Bookstore",date:"03/01/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"912.65",currency:"EUR"}},{id:"25",label:"Online shopping",date:"15/02/2025",type:"Card",credit:{value:"1372.60",currency:"EUR"},debit:void 0},{id:"26",label:"Loan repayment",date:"31/03/2025",type:"Fees",credit:void 0,debit:{value:"770.07",currency:"EUR"}},{id:"27",label:"Public transport",date:"13/02/2025",type:"SepaDirectDebit",credit:{value:"1129.40",currency:"EUR"},debit:void 0},{id:"28",label:"Movie ticket",date:"21/02/2025",type:"SepaCreditTransfer",credit:void 0,debit:{value:"1326.92",currency:"EUR"}},{id:"29",label:"Water bill",date:"14/03/2025",type:"Fees",credit:void 0,debit:{value:"760.94",currency:"EUR"}},{id:"30",label:"Hotel",date:"13/02/2025",type:"InternationalDirectDebit",credit:{value:"306.71",currency:"EUR"},debit:{value:"274.37",currency:"EUR"}},{id:"31",label:"Restaurant",date:"16/03/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"694.41",currency:"EUR"}},{id:"32",label:"Pet supplies",date:"24/03/2025",type:"Card",credit:void 0,debit:{value:"335.11",currency:"EUR"}},{id:"33",label:"Medical expenses",date:"28/03/2025",type:"SepaCreditTransfer",credit:{value:"758.83",currency:"EUR"},debit:void 0},{id:"34",label:"Pet supplies",date:"12/03/2025",type:"SepaDirectDebit",credit:{value:"1210.63",currency:"EUR"},debit:void 0},{id:"35",label:"Water bill",date:"29/03/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"1171.04",currency:"EUR"}},{id:"36",label:"Hotel",date:"07/02/2025",type:"SepaDirectDebit",credit:void 0,debit:void 0},{id:"37",label:"Loan repayment",date:"23/03/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"1231.22",currency:"EUR"}},{id:"38",label:"Restaurant",date:"11/03/2025",type:"Fees",credit:{value:"186.98",currency:"EUR"},debit:void 0},{id:"39",label:"Online shopping",date:"21/01/2025",type:"SepaDirectDebit",credit:void 0,debit:void 0},{id:"40",label:"Groceries",date:"11/01/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"10.75",currency:"EUR"}},{id:"41",label:"Online shopping",date:"06/01/2025",type:"InternationalDirectDebit",credit:void 0,debit:void 0},{id:"42",label:"Freelance income",date:"04/03/2025",type:"SepaDirectDebit",credit:{value:"39.72",currency:"EUR"},debit:void 0},{id:"43",label:"Hotel",date:"07/03/2025",type:"Fees",credit:void 0,debit:{value:"970.20",currency:"EUR"}},{id:"44",label:"Groceries",date:"02/01/2025",type:"InternationalDirectDebit",credit:{value:"542.21",currency:"EUR"},debit:void 0},{id:"45",label:"Pet supplies",date:"19/01/2025",type:"Card",credit:{value:"266.02",currency:"EUR"},debit:void 0},{id:"46",label:"Freelance income",date:"14/03/2025",type:"SepaCreditTransfer",credit:void 0,debit:{value:"983.87",currency:"EUR"}},{id:"47",label:"Groceries",date:"20/01/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"832.10",currency:"EUR"}},{id:"48",label:"Loan repayment",date:"07/02/2025",type:"Card",credit:void 0,debit:{value:"1244.48",currency:"EUR"}},{id:"49",label:"Bookstore",date:"30/03/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"79.76",currency:"EUR"}},{id:"50",label:"Hotel",date:"23/03/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"1262.17",currency:"EUR"}},{id:"51",label:"Concert",date:"11/03/2025",type:"SepaCreditTransfer",credit:void 0,debit:{value:"277.51",currency:"EUR"}},{id:"52",label:"Concert",date:"04/03/2025",type:"InternationalDirectDebit",credit:{value:"534.40",currency:"EUR"},debit:void 0}],b=()=>{const a={street:"1 rue de la Paix",city:"75002 Paris",country:"FRA"},d={value:"10000",currency:"EUR"},y={value:"4.00",currency:"EUR"},m={value:"1.00",currency:"EUR"},o={value:"19.00",currency:"EUR"},g={value:"2.00",currency:"EUR"},D={value:"3456.00",currency:"EUR"};return e.jsx(J,{title:"Account statement",children:e.jsx(K,{title:"Default",children:e.jsx(B,{version:"v1",partnerLogoUrl:"https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png",accountHolderType:"Individual",accountHolderName:"Sandrine Da Silva",accountHolderAddress:a,style:{backgroundColor:X.white},iban:"DE63 1111 1111 8189 3774 57",bic:"SWNBDEBB",openingDate:"01/01/2025",closingDate:"31/01/2025",openingBalance:d,transactions:p,feesDebit:y,feesCredit:m,totalsCredit:g,totalsDebit:o,closingBalance:D})})})};b.__docgenInfo={description:"",methods:[],displayName:"Default"};var C,j,w;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`[{
  id: "1",
  label: "Sport subscription",
  date: "01/01/2025",
  type: "Card",
  credit: {
    value: "303.50",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "2",
  label: "Ikea",
  date: "10/01/2025",
  type: "Fees",
  credit: undefined,
  debit: {
    value: "200.00",
    currency: "EUR"
  }
}, {
  id: "3",
  label: "Loan repayment",
  date: "24/02/2025",
  type: "InternationalDirectDebit",
  credit: undefined,
  debit: {
    value: "1006.59",
    currency: "EUR"
  }
}, {
  id: "4",
  label: "Pet supplies",
  date: "12/03/2025",
  type: "SepaCreditTransfer",
  credit: {
    value: "322.08",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "5",
  label: "Hotel",
  date: "21/03/2025",
  type: "SepaCreditTransfer",
  credit: {
    value: "490.76",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "6",
  label: "Medical expenses",
  date: "08/01/2025",
  type: "SepaDirectDebit",
  credit: {
    value: "754.90",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "7",
  label: "Flight ticket",
  date: "05/01/2025",
  type: "Card",
  credit: undefined,
  debit: {
    value: "127.96",
    currency: "EUR"
  }
}, {
  id: "8",
  label: "Gift received",
  date: "02/02/2025",
  type: "Fees",
  credit: {
    value: "121.97",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "9",
  label: "Flight ticket",
  date: "25/02/2025",
  type: "InternationalDirectDebit",
  credit: {
    value: "1405.26",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "10",
  label: "Gas station",
  date: "24/01/2025",
  type: "SepaCreditTransfer",
  credit: {
    value: "1122.84",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "11",
  label: "Electricity bill",
  date: "18/02/2025",
  type: "SepaDirectDebit",
  credit: {
    value: "738.35",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "12",
  label: "Medical expenses",
  date: "06/03/2025",
  type: "InternationalDirectDebit",
  credit: undefined,
  debit: {
    value: "331.48",
    currency: "EUR"
  }
}, {
  id: "13",
  label: "Hotel",
  date: "27/03/2025",
  type: "SepaCreditTransfer",
  credit: undefined,
  debit: {
    value: "1008.68",
    currency: "EUR"
  }
}, {
  id: "14",
  label: "Movie ticket",
  date: "16/03/2025",
  type: "InternationalCreditTransfer",
  credit: {
    value: "820.54",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "15",
  label: "Restaurant",
  date: "28/02/2025",
  type: "InternationalDirectDebit",
  credit: {
    value: "205.97",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "16",
  label: "Flight ticket",
  date: "19/02/2025",
  type: "Fees",
  credit: {
    value: "306.71",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "17",
  label: "Pet supplies",
  date: "21/02/2025",
  type: "Fees",
  credit: {
    value: "318.83",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "18",
  label: "Medical expenses",
  date: "15/02/2025",
  type: "SepaDirectDebit",
  credit: {
    value: "908.53",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "19",
  label: "Medical expenses",
  date: "01/01/2025",
  type: "Fees",
  credit: {
    value: "306.32",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "20",
  label: "Medical expenses",
  date: "29/03/2025",
  type: "SepaDirectDebit",
  credit: {
    value: "321.39",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "21",
  label: "Water bill",
  date: "07/01/2025",
  type: "SepaDirectDebit",
  credit: undefined,
  debit: {
    value: "459.71",
    currency: "EUR"
  }
}, {
  id: "22",
  label: "Insurance refund",
  date: "02/01/2025",
  type: "Fees",
  credit: undefined,
  debit: {
    value: "369.40",
    currency: "EUR"
  }
}, {
  id: "23",
  label: "Public transport",
  date: "05/02/2025",
  type: "InternationalDirectDebit",
  credit: {
    value: "1212.65",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "24",
  label: "Bookstore",
  date: "03/01/2025",
  type: "SepaDirectDebit",
  credit: undefined,
  debit: {
    value: "912.65",
    currency: "EUR"
  }
}, {
  id: "25",
  label: "Online shopping",
  date: "15/02/2025",
  type: "Card",
  credit: {
    value: "1372.60",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "26",
  label: "Loan repayment",
  date: "31/03/2025",
  type: "Fees",
  credit: undefined,
  debit: {
    value: "770.07",
    currency: "EUR"
  }
}, {
  id: "27",
  label: "Public transport",
  date: "13/02/2025",
  type: "SepaDirectDebit",
  credit: {
    value: "1129.40",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "28",
  label: "Movie ticket",
  date: "21/02/2025",
  type: "SepaCreditTransfer",
  credit: undefined,
  debit: {
    value: "1326.92",
    currency: "EUR"
  }
}, {
  id: "29",
  label: "Water bill",
  date: "14/03/2025",
  type: "Fees",
  credit: undefined,
  debit: {
    value: "760.94",
    currency: "EUR"
  }
}, {
  id: "30",
  label: "Hotel",
  date: "13/02/2025",
  type: "InternationalDirectDebit",
  credit: {
    value: "306.71",
    currency: "EUR"
  },
  debit: {
    value: "274.37",
    currency: "EUR"
  }
}, {
  id: "31",
  label: "Restaurant",
  date: "16/03/2025",
  type: "SepaDirectDebit",
  credit: undefined,
  debit: {
    value: "694.41",
    currency: "EUR"
  }
}, {
  id: "32",
  label: "Pet supplies",
  date: "24/03/2025",
  type: "Card",
  credit: undefined,
  debit: {
    value: "335.11",
    currency: "EUR"
  }
}, {
  id: "33",
  label: "Medical expenses",
  date: "28/03/2025",
  type: "SepaCreditTransfer",
  credit: {
    value: "758.83",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "34",
  label: "Pet supplies",
  date: "12/03/2025",
  type: "SepaDirectDebit",
  credit: {
    value: "1210.63",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "35",
  label: "Water bill",
  date: "29/03/2025",
  type: "SepaDirectDebit",
  credit: undefined,
  debit: {
    value: "1171.04",
    currency: "EUR"
  }
}, {
  id: "36",
  label: "Hotel",
  date: "07/02/2025",
  type: "SepaDirectDebit",
  credit: undefined,
  debit: undefined
}, {
  id: "37",
  label: "Loan repayment",
  date: "23/03/2025",
  type: "SepaDirectDebit",
  credit: undefined,
  debit: {
    value: "1231.22",
    currency: "EUR"
  }
}, {
  id: "38",
  label: "Restaurant",
  date: "11/03/2025",
  type: "Fees",
  credit: {
    value: "186.98",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "39",
  label: "Online shopping",
  date: "21/01/2025",
  type: "SepaDirectDebit",
  credit: undefined,
  debit: undefined
}, {
  id: "40",
  label: "Groceries",
  date: "11/01/2025",
  type: "SepaDirectDebit",
  credit: undefined,
  debit: {
    value: "10.75",
    currency: "EUR"
  }
}, {
  id: "41",
  label: "Online shopping",
  date: "06/01/2025",
  type: "InternationalDirectDebit",
  credit: undefined,
  debit: undefined
}, {
  id: "42",
  label: "Freelance income",
  date: "04/03/2025",
  type: "SepaDirectDebit",
  credit: {
    value: "39.72",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "43",
  label: "Hotel",
  date: "07/03/2025",
  type: "Fees",
  credit: undefined,
  debit: {
    value: "970.20",
    currency: "EUR"
  }
}, {
  id: "44",
  label: "Groceries",
  date: "02/01/2025",
  type: "InternationalDirectDebit",
  credit: {
    value: "542.21",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "45",
  label: "Pet supplies",
  date: "19/01/2025",
  type: "Card",
  credit: {
    value: "266.02",
    currency: "EUR"
  },
  debit: undefined
}, {
  id: "46",
  label: "Freelance income",
  date: "14/03/2025",
  type: "SepaCreditTransfer",
  credit: undefined,
  debit: {
    value: "983.87",
    currency: "EUR"
  }
}, {
  id: "47",
  label: "Groceries",
  date: "20/01/2025",
  type: "SepaDirectDebit",
  credit: undefined,
  debit: {
    value: "832.10",
    currency: "EUR"
  }
}, {
  id: "48",
  label: "Loan repayment",
  date: "07/02/2025",
  type: "Card",
  credit: undefined,
  debit: {
    value: "1244.48",
    currency: "EUR"
  }
}, {
  id: "49",
  label: "Bookstore",
  date: "30/03/2025",
  type: "SepaDirectDebit",
  credit: undefined,
  debit: {
    value: "79.76",
    currency: "EUR"
  }
}, {
  id: "50",
  label: "Hotel",
  date: "23/03/2025",
  type: "SepaDirectDebit",
  credit: undefined,
  debit: {
    value: "1262.17",
    currency: "EUR"
  }
}, {
  id: "51",
  label: "Concert",
  date: "11/03/2025",
  type: "SepaCreditTransfer",
  credit: undefined,
  debit: {
    value: "277.51",
    currency: "EUR"
  }
}, {
  id: "52",
  label: "Concert",
  date: "04/03/2025",
  type: "InternationalDirectDebit",
  credit: {
    value: "534.40",
    currency: "EUR"
  },
  debit: undefined
}]`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var T,k,I;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const address = {
    street: "1 rue de la Paix",
    city: "75002 Paris",
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
}`,...(I=(k=b.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const ye=["transactions","Default"];export{b as Default,ye as __namedExportsOrder,oe as default,p as transactions};
//# sourceMappingURL=AccountStatement.stories-DWsW1cwu.js.map
