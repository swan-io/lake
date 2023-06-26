import{S as w,r as D,f as v,c as i,d as V,x as S,l as R,a as e,j as t,V as b,k as F,b as a,T as g}from"./Space-b7c957fc.js";import{Q as O,B as u}from"./index-993549f2.js";import{F as T}from"./Fill-aa64476d.js";import{L as z}from"./LakeHeading-9d63225b.js";import{b as X,S as _,a as P}from"./_StoriesComponents-da5094b9.js";import{S as B}from"./SwanLogo-eccebda4.js";import{W as q}from"./WithPartnerAccentColor-b24545e6.js";import{t as n}from"./i18n-eaecf8fe.js";import"./extends-98964cd2.js";import"./index-ebeaab24.js";import"./colors-298625c7.js";import"./Svg-8852b273.js";import"./polished.esm-77d64d09.js";import"./rifm-cceb13b0.js";const C=26,U=200,x={objectFit:"contain",objectPosition:"left"},r=w.create({container:{width:470,borderRadius:D[8],backgroundColor:v.white,borderWidth:1,borderColor:i.gray[100]},part:{padding:V[24]},label:{...S,fontSize:10},labelPartner:{color:i.partner[500],fontWeight:"500"},mainInfo:{fontFamily:R.iban,fontSize:12,color:i.gray[900]},smallInfo:{fontFamily:R.iban,fontSize:10,color:i.gray[900]},addressInfo:{...S,fontSize:12,color:i.gray[900]},partnershipText:{...S,fontSize:8,color:i.gray[500]},defaultLogo:{height:C,width:115},swanLogo:{width:26,height:6}}),m=l=>O(l).with({version:"v1"},s=>e(W,{...s})).exhaustive(),W=({partnerColor:l,partnerLogoUrl:s,iban:I,bic:d,bank:f,agency:A,bankNumber:h,bankKey:k,bankAddress:c,accountHolderAddress:p})=>e(q,{color:l,children:t(b,{style:r.container,children:[t(b,{style:r.part,children:[t(u,{direction:"row",alignItems:"center",children:[F(s)?e("img",{src:s,width:U,height:C,style:x}):e(B,{style:r.defaultLogo}),e(T,{minWidth:24}),e(z,{level:2,variant:"h3",color:i.gray[900],children:n("rib.bankDetails")})]}),e(a,{height:24}),t(u,{direction:"row",alignItems:"center",children:[e(o,{type:"mainInfo",color:"partner",label:n("rib.iban"),value:I}),e(a,{width:24}),e(o,{type:"mainInfo",color:"partner",label:n("rib.bic"),value:d})]}),e(a,{height:8}),t(u,{direction:"row",alignItems:"center",children:[e(o,{type:"smallInfo",color:"gray",label:n("rib.bank"),value:f}),e(a,{width:24}),e(o,{type:"smallInfo",color:"gray",label:n("rib.agency"),value:A}),e(a,{width:24}),e(o,{type:"smallInfo",color:"gray",label:n("rib.number"),value:h}),e(a,{width:24}),e(o,{type:"smallInfo",color:"gray",label:n("rib.key"),value:k})]})]}),e(X,{}),t(b,{style:r.part,children:[t(u,{direction:"row",alignItems:"center",children:[e(o,{type:"addressInfo",color:"partner",label:n("rib.address"),value:[c.name,c.address,`${c.zipCode} ${c.city}`,c.country]}),e(a,{width:24}),e(o,{type:"addressInfo",color:"partner",label:n("rib.accountHolder"),value:[p.name,p.address,`${p.zipCode} ${p.city}`,p.country]})]}),e(a,{height:12}),t(u,{direction:"row",alignItems:"center",children:[e(g,{style:r.partnershipText,children:n("rib.partnership")}),e(a,{width:4}),e(B,{color:i.gray[900],style:r.swanLogo})]})]})]})}),H={mainInfo:r.mainInfo,smallInfo:r.smallInfo,addressInfo:r.addressInfo},o=({type:l,color:s,label:I,value:d})=>{const f=Array.isArray(d)?d:[d];return t(b,{children:[e(g,{style:[r.label,s==="partner"&&r.labelPartner],children:I}),e(a,{height:4}),f.map((A,h)=>e(g,{style:H[l],children:A},h))]})};try{m.displayName="RIB",m.__docgenInfo={description:"",displayName:"RIB",props:{version:{defaultValue:null,description:"",name:"version",required:!0,type:{name:'"v1"'}},partnerColor:{defaultValue:null,description:"",name:"partnerColor",required:!0,type:{name:"string"}},partnerLogoUrl:{defaultValue:null,description:"",name:"partnerLogoUrl",required:!1,type:{name:"string"}},iban:{defaultValue:null,description:"",name:"iban",required:!0,type:{name:"string"}},bic:{defaultValue:null,description:"",name:"bic",required:!0,type:{name:"string"}},bank:{defaultValue:null,description:"",name:"bank",required:!0,type:{name:"string"}},agency:{defaultValue:null,description:"",name:"agency",required:!0,type:{name:"string"}},bankNumber:{defaultValue:null,description:"",name:"bankNumber",required:!0,type:{name:"string"}},bankKey:{defaultValue:null,description:"",name:"bankKey",required:!0,type:{name:"string"}},bankAddress:{defaultValue:null,description:"",name:"bankAddress",required:!0,type:{name:"Address"}},accountHolderAddress:{defaultValue:null,description:"",name:"accountHolderAddress",required:!0,type:{name:"Address"}}}}}catch{}const oe={title:"Informations/RIB",component:m},y=()=>t(_,{title:"RIB",children:[e(P,{title:"Default",children:e(m,{version:"v1",partnerColor:"#0f6fde",partnerLogoUrl:"https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png",iban:"FR76 3000 1007 1600 0000 0000 123",bic:"BNPAFRPPXXX",bank:"BNP PARIBAS",agency:"PARIS 16 ETOILE",bankNumber:"00000000001",bankKey:"12",bankAddress:{name:"BNP PARIBAS",address:"16 BOULEVARD DES ITALIENS",zipCode:"75009",city:"PARIS",country:"FRANCE"},accountHolderAddress:{name:"John Doe",address:"16 BOULEVARD DES ITALIENS",zipCode:"75009",city:"PARIS",country:"FRANCE"}})}),e(P,{title:"Without logo",children:e(m,{version:"v1",partnerColor:"#0f6fde",iban:"FR76 3000 1007 1600 0000 0000 123",bic:"BNPAFRPPXXX",bank:"BNP PARIBAS",agency:"PARIS 16 ETOILE",bankNumber:"00000000001",bankKey:"12",bankAddress:{name:"BNP PARIBAS",address:"16 BOULEVARD DES ITALIENS",zipCode:"75009",city:"PARIS",country:"FRANCE"},accountHolderAddress:{name:"John Doe",address:"16 BOULEVARD DES ITALIENS",zipCode:"75009",city:"PARIS",country:"FRANCE"}})})]});var E,N,L;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <StoryBlock title="RIB">
      <StoryPart title="Default">
        <RIB version="v1" partnerColor="#0f6fde" partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png" iban="FR76 3000 1007 1600 0000 0000 123" bic="BNPAFRPPXXX" bank="BNP PARIBAS" agency="PARIS 16 ETOILE" bankNumber="00000000001" bankKey="12" bankAddress={{
        name: "BNP PARIBAS",
        address: "16 BOULEVARD DES ITALIENS",
        zipCode: "75009",
        city: "PARIS",
        country: "FRANCE"
      }} accountHolderAddress={{
        name: "John Doe",
        address: "16 BOULEVARD DES ITALIENS",
        zipCode: "75009",
        city: "PARIS",
        country: "FRANCE"
      }} />
      </StoryPart>

      <StoryPart title="Without logo">
        <RIB version="v1" partnerColor="#0f6fde" iban="FR76 3000 1007 1600 0000 0000 123" bic="BNPAFRPPXXX" bank="BNP PARIBAS" agency="PARIS 16 ETOILE" bankNumber="00000000001" bankKey="12" bankAddress={{
        name: "BNP PARIBAS",
        address: "16 BOULEVARD DES ITALIENS",
        zipCode: "75009",
        city: "PARIS",
        country: "FRANCE"
      }} accountHolderAddress={{
        name: "John Doe",
        address: "16 BOULEVARD DES ITALIENS",
        zipCode: "75009",
        city: "PARIS",
        country: "FRANCE"
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...(L=(N=y.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};const ie=["Colors"];export{y as Colors,ie as __namedExportsOrder,oe as default};
//# sourceMappingURL=RIB.stories-1089bba8.js.map
