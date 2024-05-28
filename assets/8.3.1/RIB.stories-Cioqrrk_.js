import{s as D,r as H,c as y,e as W,b as _,$ as T,j as e,l as K,O as M,V as k,B as h,h as G,S as t,T as g}from"./Space-Bx5QDxXb.js";import{L as U}from"./LakeHeading-BIJaJm8T.js";import{b as z,S as L,a as b}from"./_StoriesComponents-AhKOd4N3.js";import{S as R}from"./SwanLogo-TGHwHcnk.js";import{W as $}from"./WithPartnerAccentColor-Cqd6SMw9.js";import{c as V}from"./commonStyles-t4XfA7cz.js";import{t as r}from"./i18n-DbOmQyk3.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BwDkhjyp.js";import"./index-B8XB3FuZ.js";import"./polished.esm-1TDmsf3v.js";import"./rifm-Rmu9g2Q0.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";const B=24,Z=150,A=(o,a)=>({...o==="mono"?{fontFamily:K.iban}:M,color:y.gray[900],fontSize:a,lineHeight:a*1.25,fontWeight:"400"}),s=D.create({container:{borderRadius:H[8],borderColor:y.gray[100],borderWidth:1,backgroundColor:W.white,width:470},half:{padding:_[24]},shrink:{flexShrink:1},label:{...A("serif",10)},addressText:{...A("serif",12)},mainText:{...A("mono",12)},smallText:{...A("mono",10)},partnershipText:{...A("serif",8),color:y.gray[500]},partnerLabel:{color:y.partner[500],fontWeight:"500"},defaultLogo:{height:B,width:45/10*B},swanLogo:{height:6,width:45/10*6}}),C={address:s.addressText,main:s.mainText,small:s.smallText},n=({color:o="gray",kind:a,label:l,value:x})=>e.jsxs(k,{style:s.shrink,children:[e.jsx(g,{style:[s.label,o==="partner"&&s.partnerLabel],children:l}),e.jsx(t,{height:4}),typeof x=="string"?e.jsx(g,{style:C[a],children:x}):x.map((I,S)=>e.jsx(g,{style:C[a],children:I},S))]}),J={objectFit:"contain",objectPosition:"left"},q=({accountHolderAddress:o,bank:a,bankAddress:l,bic:x,iban:I,partnerColor:S,partnerLogoUrl:P,...O})=>e.jsx($,{color:S,children:e.jsxs(k,{style:s.container,children:[e.jsxs(k,{style:s.half,children:[e.jsxs(h,{direction:"row",alignItems:"center",children:[G(P)?e.jsx("img",{src:P,style:{...J,height:B,maxWidth:Z}}):e.jsx(R,{style:s.defaultLogo}),e.jsx(t,{width:24}),e.jsx(U,{align:"right",color:y.gray[900],level:2,style:V.fill,variant:"h3",children:r("rib.bankDetails")})]}),e.jsx(t,{height:24}),e.jsxs(h,{direction:"row",alignItems:"center",children:[e.jsx(n,{kind:"main",color:"partner",label:r("rib.iban"),value:I}),e.jsx(t,{width:24}),e.jsx(n,{kind:"main",color:"partner",label:r("rib.bic"),value:x})]}),e.jsx(t,{height:8}),e.jsx(h,{direction:"row",alignItems:"center",children:T(O).with({accountCountry:"FRA"},({agency:i,bankKey:c,bankNumber:f})=>e.jsxs(e.Fragment,{children:[e.jsx(n,{kind:"small",label:r("rib.bank"),value:a}),e.jsx(t,{width:24}),e.jsx(n,{kind:"small",label:r("rib.agency"),value:i}),e.jsx(t,{width:24}),e.jsx(n,{kind:"small",label:r("rib.number"),value:f}),e.jsx(t,{width:24}),e.jsx(n,{kind:"small",label:r("rib.key"),value:c})]})).with({accountCountry:"DEU"},({accountNumber:i})=>e.jsxs(e.Fragment,{children:[e.jsx(n,{kind:"small",label:r("rib.bank"),value:a}),e.jsx(t,{width:24}),e.jsx(n,{kind:"small",label:r("rib.accountNumber"),value:i})]})).with({accountCountry:"ESP"},({agency:i,bankNumber:c,nationalCode:f})=>e.jsxs(e.Fragment,{children:[e.jsx(n,{kind:"small",label:r("rib.bank"),value:a}),e.jsx(t,{width:24}),e.jsx(n,{kind:"small",label:r("rib.agency"),value:i}),e.jsx(t,{width:24}),e.jsx(n,{kind:"small",label:r("rib.nationalCode"),value:f}),e.jsx(t,{width:24}),e.jsx(n,{kind:"small",label:r("rib.number"),value:c})]})).with({accountCountry:"NLD"},({bankKey:i,bankNumber:c})=>e.jsxs(e.Fragment,{children:[e.jsx(n,{kind:"small",label:r("rib.bank"),value:a}),e.jsx(t,{width:24}),e.jsx(n,{kind:"small",label:r("rib.number"),value:c}),e.jsx(t,{width:24}),e.jsx(n,{kind:"small",label:r("rib.key"),value:i})]})).with({accountCountry:"ITA"},({agency:i,bankNumber:c})=>e.jsxs(e.Fragment,{children:[e.jsx(n,{kind:"small",label:r("rib.bank"),value:a}),e.jsx(t,{width:24}),e.jsx(n,{kind:"small",label:r("rib.agency"),value:i}),e.jsx(t,{width:24}),e.jsx(n,{kind:"small",label:r("rib.number"),value:c})]})).exhaustive()})]}),e.jsx(z,{}),e.jsxs(k,{style:s.half,children:[e.jsxs(h,{direction:"row",alignItems:"center",children:[e.jsx(n,{kind:"address",color:"partner",label:r("rib.address"),value:[l.name,l.address,`${l.zipCode} ${l.city}`,l.country]}),e.jsx(t,{width:24}),e.jsx(n,{kind:"address",color:"partner",label:r("rib.accountHolder"),value:[o.name,o.address,`${o.zipCode} ${o.city}`,o.country]})]}),e.jsx(t,{height:12}),e.jsxs(h,{direction:"row",alignItems:"center",children:[e.jsx(g,{style:s.partnershipText,children:r("rib.partnership")}),e.jsx(t,{width:4}),e.jsx(R,{color:y.gray[900],style:s.swanLogo})]})]})]})}),d=o=>T(o).with({version:"v1"},a=>e.jsx(q,{...a})).exhaustive(),me={title:"Informations/RIB",component:d},u={name:"BNP PARIBAS",address:"16 BOULEVARD DES ITALIENS",zipCode:"75009",city:"PARIS",country:"FRANCE"},m={name:"John Doe",address:"16 BOULEVARD DES ITALIENS",zipCode:"75009",city:"PARIS",country:"FRANCE"},j=()=>e.jsxs(L,{title:"RIB",children:[e.jsx(b,{title:"Default",children:e.jsx(d,{version:"v1",accountCountry:"FRA",partnerColor:"#0f6fde",partnerLogoUrl:"https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png",iban:"FR76 3000 1007 1600 0000 0000 123",bic:"BNPAFRPPXXX",bank:"BNP PARIBAS",agency:"PARIS 16 ETOILE",bankNumber:"00000000001",bankKey:"12",bankAddress:u,accountHolderAddress:m})}),e.jsx(b,{title:"Without logo",children:e.jsx(d,{version:"v1",accountCountry:"FRA",partnerColor:"#0f6fde",iban:"FR76 3000 1007 1600 0000 0000 123",bic:"BNPAFRPPXXX",bank:"BNP PARIBAS",agency:"PARIS 16 ETOILE",bankNumber:"00000000001",bankKey:"12",bankAddress:u,accountHolderAddress:m})})]}),p=()=>e.jsxs(L,{title:"RIB by account country",children:[e.jsx(b,{title:"France",children:e.jsx(d,{version:"v1",accountCountry:"FRA",partnerColor:"#0f6fde",iban:"FR76 3000 1007 1600 0000 0000 123",bic:"BNPAFRPPXXX",bank:"BNP PARIBAS",agency:"PARIS 16 ETOILE",bankNumber:"00000000001",bankKey:"12",bankAddress:u,accountHolderAddress:m})}),e.jsx(b,{title:"Germany",children:e.jsx(d,{version:"v1",accountCountry:"DEU",partnerColor:"#0f6fde",iban:"DE89 3704 0044 0532 0130 00",bic:"COBADEFFXXX",bank:"COMMERZBANK AG",accountNumber:"37040044",bankAddress:u,accountHolderAddress:m})}),e.jsx(b,{title:"Spain",children:e.jsx(d,{version:"v1",accountCountry:"ESP",partnerColor:"#0f6fde",iban:"ES91 2100 0418 4502 0005 1332",bic:"CAIXESBBXXX",bank:"CAIXABANK",agency:"BARCELONA",nationalCode:"2100",bankNumber:"0418",bankAddress:u,accountHolderAddress:m})}),e.jsx(b,{title:"Italy",children:e.jsx(d,{version:"v1",accountCountry:"ITA",partnerColor:"#0f6fde",iban:"IT 60 X 05428 11101 000000123456",bic:"SWNBITM2",bank:"05428",agency:"11101",bankNumber:"000000123456",bankAddress:u,accountHolderAddress:m})})]});j.__docgenInfo={description:"",methods:[],displayName:"Default"};p.__docgenInfo={description:"",methods:[],displayName:"AccountCountries"};var v,N,E;j.parameters={...j.parameters,docs:{...(v=j.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <StoryBlock title="RIB">
      <StoryPart title="Default">
        <RIB version="v1" accountCountry="FRA" partnerColor="#0f6fde" partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png" iban="FR76 3000 1007 1600 0000 0000 123" bic="BNPAFRPPXXX" bank="BNP PARIBAS" agency="PARIS 16 ETOILE" bankNumber="00000000001" bankKey="12" bankAddress={bankAddress} accountHolderAddress={accountHolderAddress} />
      </StoryPart>

      <StoryPart title="Without logo">
        <RIB version="v1" accountCountry="FRA" partnerColor="#0f6fde" iban="FR76 3000 1007 1600 0000 0000 123" bic="BNPAFRPPXXX" bank="BNP PARIBAS" agency="PARIS 16 ETOILE" bankNumber="00000000001" bankKey="12" bankAddress={bankAddress} accountHolderAddress={accountHolderAddress} />
      </StoryPart>
    </StoryBlock>;
}`,...(E=(N=j.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var w,X,F;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <StoryBlock title="RIB by account country">
      <StoryPart title="France">
        <RIB version="v1" accountCountry="FRA" partnerColor="#0f6fde" iban="FR76 3000 1007 1600 0000 0000 123" bic="BNPAFRPPXXX" bank="BNP PARIBAS" agency="PARIS 16 ETOILE" bankNumber="00000000001" bankKey="12" bankAddress={bankAddress} accountHolderAddress={accountHolderAddress} />
      </StoryPart>

      <StoryPart title="Germany">
        <RIB version="v1" accountCountry="DEU" partnerColor="#0f6fde" iban="DE89 3704 0044 0532 0130 00" bic="COBADEFFXXX" bank="COMMERZBANK AG" accountNumber="37040044" bankAddress={bankAddress} accountHolderAddress={accountHolderAddress} />
      </StoryPart>

      <StoryPart title="Spain">
        <RIB version="v1" accountCountry="ESP" partnerColor="#0f6fde" iban="ES91 2100 0418 4502 0005 1332" bic="CAIXESBBXXX" bank="CAIXABANK" agency="BARCELONA" nationalCode="2100" bankNumber="0418" bankAddress={bankAddress} accountHolderAddress={accountHolderAddress} />
      </StoryPart>

      <StoryPart title="Italy">
        <RIB version="v1" accountCountry="ITA" partnerColor="#0f6fde" iban="IT 60 X 05428 11101 000000123456" bic="SWNBITM2" bank="05428" agency="11101" bankNumber="000000123456" bankAddress={bankAddress} accountHolderAddress={accountHolderAddress} />
      </StoryPart>
    </StoryBlock>;
}`,...(F=(X=p.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};const ye=["Default","AccountCountries"];export{p as AccountCountries,j as Default,ye as __namedExportsOrder,me as default};
//# sourceMappingURL=RIB.stories-Cioqrrk_.js.map