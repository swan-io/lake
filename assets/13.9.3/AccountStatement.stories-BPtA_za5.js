import{M as T,j as e,B as r,T as t,h as _,S as u,m as w,s as R,c as d,e as y,l as O}from"./ScrollView-BU4Gh9Er.js";import{u as x}from"./i18n-DpyqLNiT.js";import{g as s}from"./style-BKL74SW1.js";import{S as D}from"./SwanLogo-DhzjZc1k.js";import{S as M,a as z}from"./_StoriesComponents-DET1njs8.js";import"./iframe-Sl-WXsVR.js";import"./preload-helper-D1IIBeq1.js";import"./index-D_HvrnDR.js";import"./rifm-D77j-yTE.js";import"./array-BfAlyugE.js";import"./Separator-Bxy4FPtB.js";import"./commonStyles-BBEkV6IC.js";const n=R.create({container:{width:793,padding:10,fontFamily:"Inter, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"},firstSectionTitle:{...s("sans",20),color:d.swan[500],fontWeight:"500",textTransform:"uppercase",marginTop:"37px"},sectionTitle:{...s("sans",20),color:d.swan[500],fontWeight:"500",textTransform:"uppercase"},dateTitle:{...s("sans",12),color:d.swan[500]},totalAmount:{...s("sans",20),fontWeight:"500",textAlign:"right"},pageTitle:{...s("sans",20),fontWeight:"500",color:"#26232F"},titleColumn:{...s("sans",12),fontWeight:"600",paddingVertical:y[4],minWidth:y[96],paddingRight:10},openingBalanceText:{...s("sans",12),textAlign:"right"},thead:{marginBottom:12,backgroundColor:d.gray[50]},textColumn:{paddingVertical:y[4],paddingRight:10,...s("sans",11),lineHeight:16},text:{...s("sans",12),color:d.swan[300]},textBold:{...s("sans",12),fontWeight:"500"},pageSubTitle:{...s("sans",12),color:"#454348"},row:{textAlign:"right",paddingVertical:y[4],fontWeight:"500",width:"15%"},closingBalanceRow:{...s("sans",12),backgroundColor:d.gray[50],width:"50%"},closingBalanceRowText:{paddingLeft:"20%"},dateContainer:{alignItems:"flex-start",flexDirection:"column"},dateText:{...s("sans",12),color:d.swan[500],letterSpacing:0,lineHeight:16},dateBold:{fontWeight:"600"}}),C=({text:i,align:a="left",style:l})=>e.jsx(t,{style:[n.titleColumn,l,{textAlign:a}],children:i}),G=(i,a)=>T(i).with("Card",()=>a("accountStatement.card")).with("Check",()=>a("accountStatement.check")).with("Fees",()=>a("accountStatement.fees")).with("InternationalDirectDebit","SepaDirectDebit",()=>a("accountStatement.directDebit")).with("SepaCreditTransfer","Seizure",()=>a("accountStatement.creditTransfer")).with("InternationalCreditTransfer",()=>a("accountStatement.internationalCreditTransfer")).otherwise(()=>i),E=({style:i,accountHolderName:a,accountHolderAddress:l,accountHolderType:m,iban:b,bic:h,openingDate:f,closingDate:j,openingBalance:A,transactions:I,feesDebit:F,feesCredit:H,totalsCredit:W,totalsDebit:L,closingBalance:N,language:P})=>{const o=x(P);return e.jsx(r,{style:i,children:e.jsx(r,{style:n.container,direction:"column",justifyContent:"spaceBetween",children:e.jsxs(r,{children:[e.jsxs(r,{direction:"row",justifyContent:"spaceBetween",children:[e.jsxs(r,{direction:"column",children:[e.jsx(t,{style:n.sectionTitle,children:a.toUpperCase()}),e.jsx(t,{style:n.text,children:l.street}),e.jsxs(t,{style:n.text,children:[l.city,","," ",_(l.country)&&l.country]}),e.jsx(u,{height:24}),w(b)&&e.jsxs(t,{style:n.textBold,children:[o("accountStatement.iban")," ",e.jsx(t,{style:n.text,children:b})]}),e.jsx(u,{height:4}),w(h)&&e.jsxs(t,{style:n.textBold,children:[o("accountStatement.bic")," ",e.jsx(t,{style:n.text,children:h})]})]}),e.jsxs(r,{direction:"column",alignItems:"end",children:[e.jsx(t,{style:n.pageTitle,children:o("accountStatement.titleDocument")}),e.jsx(t,{style:n.pageSubTitle,children:o(m==="Company"?"accountStatement.titleDocument.companyDescription":"accountStatement.titleDocument.individualDescription")}),e.jsx(u,{height:24}),e.jsx(t,{style:n.textBold,children:o("accountStatement.contactSupport")}),e.jsx(t,{style:n.text,children:"support.swan.io"})]})]}),e.jsx(u,{height:48}),e.jsxs(r,{direction:"row",justifyContent:"spaceBetween",alignItems:"center",children:[e.jsx(r,{style:n.dateContainer,children:e.jsxs(t,{style:n.dateText,children:[o("accountStatement.from")," ",e.jsx(t,{style:n.dateBold,children:f})," ",o("accountStatement.to")," ",e.jsx(t,{style:n.dateBold,children:j})]})}),e.jsxs(r,{direction:"column",children:[e.jsx(t,{style:n.openingBalanceText,children:o("accountStatement.openingBalance")}),e.jsx(t,{style:n.totalAmount,children:A.value})]})]}),e.jsx(u,{height:24}),e.jsxs(e.Fragment,{children:[e.jsxs(r,{direction:"row",style:n.thead,children:[e.jsx(t,{style:[n.titleColumn,{width:"13%"}],children:o("accountStatement.column.date")}),e.jsx(t,{style:[n.titleColumn,{width:"21%"}],children:o("accountStatement.column.type")}),e.jsx(t,{style:[n.titleColumn,{width:"42%"}],children:o("accountStatement.column.description")}),e.jsx(t,{style:[n.titleColumn,{width:"15%",textAlign:"right"}],children:o("accountStatement.column.credit")}),e.jsx(t,{style:[n.titleColumn,{width:"15%",textAlign:"right"}],children:o("accountStatement.column.debit")})]}),e.jsx(r,{direction:"column",children:I.map(p=>e.jsxs(r,{direction:"row",children:[e.jsx(t,{style:[n.textColumn,{width:"13%"}],children:p.date}),e.jsx(t,{style:[n.textColumn,{width:"20%"}],children:G(p.type,o)}),e.jsx(t,{style:[n.textColumn,{width:"40%"}],children:p.label}),e.jsx(t,{style:[n.textColumn,{width:"15%",textAlign:"right"}],children:p.credit?p.credit.value:""}),e.jsx(t,{style:[n.textColumn,{width:"15%",textAlign:"right"}],children:p.debit?p.debit.value:""})]},p.id))})]}),e.jsx(u,{height:12}),e.jsxs(r,{direction:"column",children:[e.jsxs(r,{direction:"row",justifyContent:"end",children:[e.jsx(t,{style:[n.row,n.textBold],children:o("accountStatement.column.fees")}),e.jsx(t,{style:[n.row,n.textBold],children:H.value}),e.jsx(t,{style:[n.row,n.textBold],children:F.value})]}),e.jsxs(r,{direction:"row",justifyContent:"end",children:[e.jsx(t,{style:[n.row,n.textBold],children:o("accountStatement.column.totals")}),e.jsx(t,{style:[n.row,n.textBold],children:W.value}),e.jsx(t,{style:[n.row,n.textBold],children:L.value})]})]}),e.jsx(u,{height:12}),e.jsx(r,{direction:"row",justifyContent:"end",children:e.jsxs(r,{direction:"row",alignItems:"center",style:n.closingBalanceRow,justifyContent:"spaceBetween",children:[e.jsx(C,{style:n.closingBalanceRowText,text:o("accountStatement.closingBalance")}),e.jsx(C,{text:N.value,style:n.totalAmount,align:"right"})]})})]})})})},U=i=>T(i).with({version:"v1"},a=>e.jsx(E,{...a})).exhaustive();E.__docgenInfo={description:"",methods:[],displayName:"AccountStatementV1",props:{version:{required:!0,tsType:{name:"literal",value:'"v1"'},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},accountHolderName:{required:!0,tsType:{name:"string"},description:""},accountHolderAddress:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  street: string;
  city: string;
  country?: CountryCCA3;
}`,signature:{properties:[{key:"street",value:{name:"string",required:!0}},{key:"city",value:{name:"string",required:!0}},{key:"country",value:{name:'Simplify["cca3"]',raw:'Country["cca3"]',required:!1}}]}},description:""},accountHolderType:{required:!0,tsType:{name:"union",raw:'"Individual" | "Company"',elements:[{name:"literal",value:'"Individual"'},{name:"literal",value:'"Company"'}]},description:""},iban:{required:!0,tsType:{name:"string"},description:""},bic:{required:!0,tsType:{name:"string"},description:""},openingDate:{required:!0,tsType:{name:"string"},description:""},closingDate:{required:!0,tsType:{name:"string"},description:""},openingBalance:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},transactions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  date: string;
  type: TransactionType;
  credit?: Amount;
  debit?: Amount;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"date",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:`| "Card"
| "Check"
| "Fees"
| "InternationalDirectDebit"
| "InternationalCreditTransfer"
| "SepaCreditTransfer"
| "SepaDirectDebit"
| "Seizure"
| (string & {})`,elements:[{name:"literal",value:'"Card"'},{name:"literal",value:'"Check"'},{name:"literal",value:'"Fees"'},{name:"literal",value:'"InternationalDirectDebit"'},{name:"literal",value:'"InternationalCreditTransfer"'},{name:"literal",value:'"SepaCreditTransfer"'},{name:"literal",value:'"SepaDirectDebit"'},{name:"literal",value:'"Seizure"'},{name:"unknown"}],required:!0}},{key:"credit",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},hideHeader:{required:!1,tsType:{name:"boolean"},description:""},hideFooter:{required:!1,tsType:{name:"boolean"},description:""},language:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof supportedLanguages)[number]"},description:""}}};const S={container:{width:793,padding:"10px",fontFamily:"Arial, sans-serif",boxSizing:"border-box",letterSpacing:"-0.011em",color:"#26232F",lineHeight:"12.5px",fontWeight:"300",marginLeft:"17px"},wrapper:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"100%",paddingTop:"24px",marginTop:"24px"},footer:{flex:1,textAlign:"center",paddingRight:"24px",whiteSpace:"pre-line",fontSize:"8px"}},k=({language:i})=>{const a=x(i);return e.jsx("div",{style:S.container,children:e.jsx("div",{style:S.wrapper,children:e.jsx("div",{style:S.footer,children:a("common.statement.footer")})})})};k.__docgenInfo={description:"",methods:[],displayName:"AccountStatementFooter",props:{language:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof supportedLanguages)[number]"},description:""}}};const V=45,X=275,g={container:{width:793,padding:10,fontFamily:"Arial, sans-serif",boxSizing:"border-box",color:"#737276",fontSize:"10px",lineHeight:"12.5px",fontWeight:"300",display:"flex",justifyContent:"space-between",alignItems:"center"},partnership:{borderLeft:"1px solid #e8e7e8",padding:"7px 10px",marginLeft:"11px"},partnershipText:{fontSize:"13px",lineHeight:"24px"},logo:{display:"flex",alignItems:"center",marginLeft:10},defaultLogo:{height:20,width:45/10*20},swanLogo:{height:8,width:45/10*8,position:"relative",top:.5},pageNumber:{fontSize:"14px",color:"#26232F",fontWeight:"500",textTransform:"uppercase"}},$={maxHeight:V,maxWidth:X,objectFit:"contain",objectPosition:"left"},q=({partnerLogoUrl:i,language:a})=>{const l=x(a);return e.jsxs("div",{style:g.container,children:[e.jsx("div",{style:g.logo,children:O(i)?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:i,style:$}),e.jsxs("div",{style:g.partnership,children:[e.jsx("div",{style:g.partnershipText,children:l("accountStatement.partnership")}),e.jsx(D,{color:d.gray[900],style:g.swanLogo})]})]}):e.jsx(D,{style:g.defaultLogo})}),e.jsxs("div",{style:g.pageNumber,children:[l("accountStatement.page")," ",e.jsx("span",{className:"pageNumber"}),"/",e.jsx("span",{className:"totalPages"})]})]})};q.__docgenInfo={description:"",methods:[],displayName:"AccountStatementHeader",props:{partnerLogoUrl:{required:!1,tsType:{name:"string"},description:""},language:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof supportedLanguages)[number]"},description:""}}};const c=R.create({container:{width:793,padding:10,fontFamily:"Inter, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"},totalAmount:{...s("sans",20),fontWeight:"500",textAlign:"right"},row:{textAlign:"right",paddingVertical:y[4],fontWeight:"500",width:"15%"},closingBalanceRow:{...s("sans",12),backgroundColor:d.gray[50],width:"55%"},flexGrow:{flexGrow:1},feeStatementTitle:{...s("sans",20),color:d.swan[500],fontWeight:"500",letterSpacing:0,lineHeight:24},dateContainer:{alignItems:"flex-start",flexDirection:"column"},dateText:{...s("sans",12),color:d.swan[500],letterSpacing:0,lineHeight:16},dateBold:{fontWeight:"600"},headerRow:{marginBottom:12,backgroundColor:d.gray[50]},headerText:{...s("sans",12),fontWeight:"600",paddingVertical:y[4],minWidth:y[96]},operationText:{paddingVertical:y[4],...s("sans",11),lineHeight:16}}),B=({annualFeeStatement:i,language:a})=>{const l=x(a);return e.jsxs(r,{style:c.container,children:[e.jsx(r,{style:c.flexGrow,children:e.jsx(t,{style:c.feeStatementTitle,children:l("accountStatement.feeStatement")})}),e.jsx(u,{height:24}),e.jsx(r,{style:c.dateContainer,children:e.jsxs(t,{style:c.dateText,children:[l("accountStatement.from")," ",e.jsx(t,{style:c.dateBold,children:i.openingDate})," ",l("accountStatement.to")," ",e.jsx(t,{style:c.dateBold,children:i.closingDate})]})}),e.jsx(u,{height:8}),e.jsxs(r,{style:c.headerRow,direction:"row",justifyContent:"spaceBetween",children:[e.jsx(t,{style:[c.headerText,{width:"60%"}],children:l("accountStatement.feeType")}),e.jsx(t,{style:c.headerText,children:l("accountStatement.operationCount")}),e.jsx(t,{style:c.headerText,children:l("accountStatement.total")})]}),e.jsx(u,{height:4}),i.feeOperations.map((m,b)=>e.jsxs(r,{direction:"row",children:[e.jsx(t,{style:[c.operationText,{width:"68%"}],children:m.label}),e.jsx(t,{style:[c.operationText,{width:"20%"}],children:m.count}),e.jsx(t,{style:c.operationText,children:m.total.value})]},b)),e.jsx(u,{height:32}),e.jsx(r,{children:e.jsx(r,{direction:"row",justifyContent:"end",children:e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"spaceBetween",style:c.closingBalanceRow,children:[e.jsx(t,{style:[c.row,{width:"30%"}],children:l("accountStatement.total")}),e.jsx(t,{style:c.totalAmount,children:i.operationCount}),e.jsx(r,{style:c.row}),e.jsx(t,{style:c.totalAmount,children:i.total.value})]})})})]})};B.__docgenInfo={description:"",methods:[],displayName:"AccountStatementAnnualFees",props:{annualFeeStatement:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  openingDate: string;
  closingDate: string;
  feeOperations: FeeOperation[];
  operationCount: number;
  total: Amount;
}`,signature:{properties:[{key:"openingDate",value:{name:"string",required:!0}},{key:"closingDate",value:{name:"string",required:!0}},{key:"feeOperations",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  count: number;
  total: Amount;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}},{key:"total",value:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]},required:!0}}]}}],raw:"FeeOperation[]",required:!0}},{key:"operationCount",value:{name:"number",required:!0}},{key:"total",value:{name:"signature",type:"object",raw:`{
  value: string;
  currency: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"currency",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},language:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof supportedLanguages)[number]"},description:""}}};const se={title:"Informations/AccountStatement",component:U},J=[{id:"1",label:"Sport subscription",date:"01/01/2025",type:"Card",credit:{value:"303.50",currency:"EUR"},debit:void 0},{id:"2",label:"Ikea",date:"10/01/2025",type:"Fees",credit:void 0,debit:{value:"200.00",currency:"EUR"}},{id:"3",label:"Loan repayment",date:"24/02/2025",type:"InternationalDirectDebit",credit:void 0,debit:{value:"1006.59",currency:"EUR"}},{id:"4",label:"Pet supplies",date:"12/03/2025",type:"SepaCreditTransfer",credit:{value:"322.08",currency:"EUR"},debit:void 0},{id:"5",label:"Hotel",date:"21/03/2025",type:"SepaCreditTransfer",credit:{value:"490.76",currency:"EUR"},debit:void 0},{id:"6",label:"Medical expenses",date:"08/01/2025",type:"SepaDirectDebit",credit:{value:"754.90",currency:"EUR"},debit:void 0},{id:"7",label:"Flight ticket",date:"05/01/2025",type:"Card",credit:void 0,debit:{value:"127.96",currency:"EUR"}},{id:"8",label:"Gift received",date:"02/02/2025",type:"Fees",credit:{value:"121.97",currency:"EUR"},debit:void 0},{id:"9",label:"Flight ticket",date:"25/02/2025",type:"InternationalDirectDebit",credit:{value:"1405.26",currency:"EUR"},debit:void 0},{id:"10",label:"Gas station",date:"24/01/2025",type:"SepaCreditTransfer",credit:{value:"1122.84",currency:"EUR"},debit:void 0},{id:"11",label:"Electricity bill",date:"18/02/2025",type:"SepaDirectDebit",credit:{value:"738.35",currency:"EUR"},debit:void 0},{id:"12",label:"Medical expenses",date:"06/03/2025",type:"InternationalDirectDebit",credit:void 0,debit:{value:"331.48",currency:"EUR"}},{id:"13",label:"Hotel",date:"27/03/2025",type:"SepaCreditTransfer",credit:void 0,debit:{value:"1008.68",currency:"EUR"}},{id:"14",label:"Movie ticket",date:"16/03/2025",type:"InternationalCreditTransfer",credit:{value:"820.54",currency:"EUR"},debit:void 0},{id:"15",label:"Restaurant",date:"28/02/2025",type:"InternationalDirectDebit",credit:{value:"205.97",currency:"EUR"},debit:void 0},{id:"16",label:"Flight ticket",date:"19/02/2025",type:"Fees",credit:{value:"306.71",currency:"EUR"},debit:void 0},{id:"17",label:"Pet supplies",date:"21/02/2025",type:"Fees",credit:{value:"318.83",currency:"EUR"},debit:void 0},{id:"18",label:"Medical expenses",date:"15/02/2025",type:"SepaDirectDebit",credit:{value:"908.53",currency:"EUR"},debit:void 0},{id:"19",label:"Medical expenses",date:"01/01/2025",type:"Fees",credit:{value:"306.32",currency:"EUR"},debit:void 0},{id:"20",label:"Medical expenses",date:"29/03/2025",type:"SepaDirectDebit",credit:{value:"321.39",currency:"EUR"},debit:void 0},{id:"21",label:"Water bill",date:"07/01/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"459.71",currency:"EUR"}},{id:"22",label:"Insurance refund",date:"02/01/2025",type:"Fees",credit:void 0,debit:{value:"369.40",currency:"EUR"}},{id:"23",label:"Public transport",date:"05/02/2025",type:"InternationalDirectDebit",credit:{value:"1212.65",currency:"EUR"},debit:void 0},{id:"24",label:"Bookstore",date:"03/01/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"912.65",currency:"EUR"}},{id:"25",label:"Online shopping",date:"15/02/2025",type:"Card",credit:{value:"1372.60",currency:"EUR"},debit:void 0},{id:"26",label:"Loan repayment",date:"31/03/2025",type:"Fees",credit:void 0,debit:{value:"770.07",currency:"EUR"}},{id:"27",label:"Public transport",date:"13/02/2025",type:"SepaDirectDebit",credit:{value:"1129.40",currency:"EUR"},debit:void 0},{id:"28",label:"Movie ticket",date:"21/02/2025",type:"SepaCreditTransfer",credit:void 0,debit:{value:"1326.92",currency:"EUR"}},{id:"29",label:"Water bill",date:"14/03/2025",type:"Fees",credit:void 0,debit:{value:"760.94",currency:"EUR"}},{id:"30",label:"Hotel",date:"13/02/2025",type:"InternationalDirectDebit",credit:{value:"306.71",currency:"EUR"},debit:{value:"274.37",currency:"EUR"}},{id:"31",label:"Restaurant",date:"16/03/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"694.41",currency:"EUR"}},{id:"32",label:"Pet supplies",date:"24/03/2025",type:"Card",credit:void 0,debit:{value:"335.11",currency:"EUR"}},{id:"33",label:"Medical expenses",date:"28/03/2025",type:"SepaCreditTransfer",credit:{value:"758.83",currency:"EUR"},debit:void 0},{id:"34",label:"Pet supplies",date:"12/03/2025",type:"SepaDirectDebit",credit:{value:"1210.63",currency:"EUR"},debit:void 0},{id:"35",label:"Water bill",date:"29/03/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"1171.04",currency:"EUR"}},{id:"36",label:"Hotel",date:"07/02/2025",type:"SepaDirectDebit",credit:void 0,debit:void 0},{id:"37",label:"Loan repayment",date:"23/03/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"1231.22",currency:"EUR"}},{id:"38",label:"Restaurant",date:"11/03/2025",type:"Fees",credit:{value:"186.98",currency:"EUR"},debit:void 0},{id:"39",label:"Online shopping",date:"21/01/2025",type:"SepaDirectDebit",credit:void 0,debit:void 0},{id:"40",label:"Groceries",date:"11/01/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"10.75",currency:"EUR"}},{id:"41",label:"Online shopping",date:"06/01/2025",type:"InternationalDirectDebit",credit:void 0,debit:void 0},{id:"42",label:"Freelance income",date:"04/03/2025",type:"SepaDirectDebit",credit:{value:"39.72",currency:"EUR"},debit:void 0},{id:"43",label:"Hotel",date:"07/03/2025",type:"Fees",credit:void 0,debit:{value:"970.20",currency:"EUR"}},{id:"44",label:"Groceries",date:"02/01/2025",type:"InternationalDirectDebit",credit:{value:"542.21",currency:"EUR"},debit:void 0},{id:"45",label:"Pet supplies",date:"19/01/2025",type:"Card",credit:{value:"266.02",currency:"EUR"},debit:void 0},{id:"46",label:"Freelance income",date:"14/03/2025",type:"SepaCreditTransfer",credit:void 0,debit:{value:"983.87",currency:"EUR"}},{id:"47",label:"Groceries",date:"20/01/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"832.10",currency:"EUR"}},{id:"48",label:"Loan repayment",date:"07/02/2025",type:"Card",credit:void 0,debit:{value:"1244.48",currency:"EUR"}},{id:"49",label:"Bookstore",date:"30/03/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"79.76",currency:"EUR"}},{id:"50",label:"Hotel",date:"23/03/2025",type:"SepaDirectDebit",credit:void 0,debit:{value:"1262.17",currency:"EUR"}},{id:"51",label:"Concert",date:"11/03/2025",type:"SepaCreditTransfer",credit:void 0,debit:{value:"277.51",currency:"EUR"}},{id:"52",label:"Concert",date:"04/03/2025",type:"InternationalDirectDebit",credit:{value:"534.40",currency:"EUR"},debit:void 0},{id:"53",label:"Concert",date:"04/03/2025",type:"Credit Transfer",credit:{value:"500.40",currency:"EUR"},debit:void 0}],v=()=>{const i={street:"1 rue de la Paix",city:"75002 Paris",country:"FRA"},a={value:"10000.00",currency:"EUR"},l={value:"4.00",currency:"EUR"},m={value:"1.00",currency:"EUR"},b={value:"19.00",currency:"EUR"},h={value:"2.00",currency:"EUR"},f={value:"3456.00",currency:"EUR"},j={openingDate:"01/01/2025",closingDate:"31/12/2025",feeOperations:[{label:"Card payment fees",count:45,total:{value:"45.00",currency:"EUR"}},{label:"International transfer fees",count:12,total:{value:"60.00",currency:"EUR"}},{label:"Account maintenance fees",count:12,total:{value:"120.00",currency:"EUR"}},{label:"ATM withdrawal fees",count:8,total:{value:"16.00",currency:"EUR"}}],operationCount:77,total:{value:"241.00",currency:"EUR"}};return e.jsx(M,{title:"Account statement",children:e.jsxs(z,{title:"Default",children:[e.jsx(q,{partnerLogoUrl:"https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png"}),e.jsx(U,{version:"v1",accountHolderName:"Sandrine Da Silva",accountHolderAddress:i,accountHolderType:"Individual",iban:"DE63 1111 1111 8189 3774 57",bic:"SWNBDEBB",openingDate:"01/01/2025",closingDate:"31/01/2025",openingBalance:a,transactions:J,feesDebit:l,feesCredit:m,totalsCredit:h,totalsDebit:b,closingBalance:f}),e.jsx(B,{annualFeeStatement:j}),e.jsx(k,{})]})})};v.__docgenInfo={description:"",methods:[],displayName:"Default"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const address = {
    street: "1 rue de la Paix",
    city: "75002 Paris",
    country: "FRA" as CountryCCA3
  };
  const openingBalance = {
    value: "10000.00",
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
  const annualFeeStatement = {
    openingDate: "01/01/2025",
    closingDate: "31/12/2025",
    feeOperations: [{
      label: "Card payment fees",
      count: 45,
      total: {
        value: "45.00",
        currency: "EUR"
      }
    }, {
      label: "International transfer fees",
      count: 12,
      total: {
        value: "60.00",
        currency: "EUR"
      }
    }, {
      label: "Account maintenance fees",
      count: 12,
      total: {
        value: "120.00",
        currency: "EUR"
      }
    }, {
      label: "ATM withdrawal fees",
      count: 8,
      total: {
        value: "16.00",
        currency: "EUR"
      }
    }],
    operationCount: 77,
    total: {
      value: "241.00",
      currency: "EUR"
    }
  };
  return <StoryBlock title="Account statement">
      <StoryPart title="Default">
        <AccountStatementHeader partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png" />
        <AccountStatement version="v1" accountHolderName="Sandrine Da Silva" accountHolderAddress={address} accountHolderType="Individual" iban={"DE63 1111 1111 8189 3774 57"} bic={"SWNBDEBB"} openingDate="01/01/2025" closingDate="31/01/2025" openingBalance={openingBalance} transactions={transactions} feesDebit={feesDebit} feesCredit={feesCredit} totalsCredit={totalsCredit} totalsDebit={totalsDebit} closingBalance={closingBalance} />
        <AccountStatementAnnualFees annualFeeStatement={annualFeeStatement} />
        <AccountStatementFooter />
      </StoryPart>
    </StoryBlock>;
}`,...v.parameters?.docs?.source}}};const oe=["Default"];export{v as Default,oe as __namedExportsOrder,se as default};
//# sourceMappingURL=AccountStatement.stories-BPtA_za5.js.map
