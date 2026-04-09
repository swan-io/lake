import{G as we,y as he,p as $,j as e,B as ne,f as M,S as D,M as I,L as W,c as ve,af as De,s as Pe,P as V,k as _}from"./ScrollView-CCqvYrHu.js";import{a as S,L as re}from"./LakeButton-i4W_DpJd.js";import{r as i}from"./iframe-Dwqa2tm7.js";import{c as Se}from"./commonStyles-BBEkV6IC.js";import{L as ke}from"./LakeCopyButton-7dTIh39c.js";import{L as oe}from"./LakeLabel-BWwYqHSv.js";import{R as be}from"./ReadOnlyFieldList-BSezqIs3.js";import{t as o,l as z,m as Ie,v as je}from"./i18n-5yBlcGY5.js";import{F as qe}from"./FilesUploader-6a7-nbiF.js";import{L as G}from"./LakeModal-B9ZTTNih.js";import{S as c,a as m}from"./_StoriesComponents-dgAwmC6Q.js";import"./index-CyDNPo93.js";import"./Pressable-CdrtNq_e.js";import"./index-0LHdfEWr.js";import"./extends-CF3RwP-h.js";import"./preload-helper-D1IIBeq1.js";import"./clipboard-BXAk6GqW.js";import"./v4-EwEgHOG0.js";import"./Separator-BiH0Zcp5.js";import"./rifm-BHW2hGK6.js";import"./array-BfAlyugE.js";import"./FileInput-C3PQnFqN.js";import"./LakeHeading-9g8TZubH.js";import"./useBoolean-CyCfdc8F.js";import"./LakeAlert-C24YPHxF.js";import"./useResponsive-CurioleB.js";import"./Tag-ekM-UysF.js";import"./index-DXhon_yM.js";import"./FocusTrap-DjlL-3Cr.js";import"./Suspendable-BW7sQgCU.js";import"./ResponsiveContainer-BH6CZC8M.js";import"./TransitionView-CGx1YnPg.js";import"./useBodyClassName-WBW0gfSm.js";const se=i.memo(({ref:r,style:a,onReset:u,onSubmit:k,...y})=>we("form",{...y,ref:r,onReset:w=>{w.preventDefault(),u?.(w)},onSubmit:w=>{w.preventDefault(),k?.(w)},style:[Se.view,a]}));se.displayName="Form";const Fe=["application/pdf","image/png","image/jpeg","image/heic"],K=Pe.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),H=r=>I(r).with({type:"tooltip"},({text:a,width:u})=>e.jsx(De,{content:a,width:u,togglableOnFocus:!0,placement:"right",maxWidth:400,children:e.jsx(S,{mode:"tertiary",size:"small",color:"gray",icon:r.icon??"question-circle-regular",disabled:!0,style:[K.button,K.buttonWithDefaultCursor],ariaLabel:o("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:a,onPress:u})=>e.jsx(S,{mode:"secondary",size:"small",color:"gray",icon:r.icon??"question-circle-regular",onPress:u,style:K.button,ariaLabel:o("supportingDocuments.help.whatIsThis"),children:a})).exhaustive(),ae=r=>I(r).with("fr",()=>"https://support.swan.io/hc/en-150/articles/22502977563933--Proof-of-registration-for-French-companies").with("it",()=>"https://support.swan.io/hc/en-150/articles/22537604831005--Proof-of-registration-for-Italian-companies").with("de",()=>"https://support.swan.io/hc/en-150/articles/22535023588509--Proof-of-registration-for-German-companies").with("es",()=>"https://support.swan.io/hc/en-150/articles/22544703221021--Proof-of-registration-for-Spanish-companies").with("nl",()=>"https://support.swan.io/hc/en-150/articles/22543228421277--Proof-of-registration-for-Dutch-companies").otherwise(()=>"https://support.swan.io/hc/en-150/articles/22620756787869-Proof-of-company-registration"),p=({ref:r,documents:a,generateUpload:u,uploadFile:k,requiredDocumentPurposes:y,templateLanguage:w=z.language,status:ie,onChange:ue,onRemoveFile:le,showIds:de=!1,readOnly:L=!1,getPurposeMetadata:pe,readonlyDocumentPurposes:ce=[]})=>{const[me,J]=i.useState(!1),[ge,Q]=i.useState(!1),[X,Y]=i.useState(void 0),[j,fe]=i.useState([]),Z=i.useMemo(()=>{const t=new Set(Object.keys(y)),s=[...j,...a];s.forEach(n=>t.add(n.purpose));const h=new Map([...t].map(n=>{const l=s.filter(d=>d.purpose===n);return[n,l]})),b=new Set(Object.keys(y)),P=new Map([...t].map(n=>{const l=h.get(n)??[],v=l.length>0&&l.every(q=>q.file.statusInfo.status==="Validated")?0:b.has(n)?1:2;return[n,v]}));return[...t].sort((n,l)=>{const d=P.get(n)??2;return(P.get(l)??2)>d?-1:1}).map(n=>{const l=h.get(n)??[];return{purpose:n,files:l.map(d=>d.file),isRequired:b.has(n),areAllDocumentsValidated:P.get(n)===0}})},[y,a,j]),N=i.useRef(new Map(he.filterMap(Z,({isRequired:t,purpose:s,files:h})=>t?$.Some([s,h]):$.None()))),ee=i.useRef({});i.useImperativeHandle(r,()=>({areAllRequiredDocumentsFilled:()=>[...N.current.values()].every(s=>s.length>0),addDocument:t=>{fe(s=>[...s,t])}})),i.useEffect(()=>{const t=j[j.length-1];if(t!=null){const s=ee.current[t?.purpose];s?.add(t.file)}},[j]);const te=Z.filter(({files:t})=>!(L&&t.length===0));return e.jsxs(se,{children:[te.map(({purpose:t,files:s,areAllDocumentsValidated:h,isRequired:b})=>{const P=pe?.(t);return e.jsxs(i.Fragment,{children:[e.jsx(oe,{label:y[t].label,description:y[t].purposeDetails??y[t].description,render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(ne,{direction:"row",children:[e.jsx(ne,{direction:"row",children:M(P)?t==="CompanyRegistration"?e.jsxs(e.Fragment,{children:[e.jsx(S,{size:"small",mode:"secondary",icon:"question-circle-regular",onPress:()=>window.open(ae(z.language)),ariaLabel:o("supportingDocuments.help.howToSendAGoodDocument"),children:o("supportingDocuments.help.howToSendAGoodDocument")}),e.jsx(D,{width:8})]}):e.jsxs(e.Fragment,{children:[e.jsx(H,{type:"button",label:P.title,onPress:()=>Y(P)}),e.jsx(D,{width:8})]}):I(t).with("CompanyRegistration",()=>e.jsx(S,{size:"small",mode:"secondary",icon:"question-circle-regular",onPress:()=>window.open(ae(z.language)),ariaLabel:o("supportingDocuments.help.howToSendAGoodDocument"),children:o("supportingDocuments.help.howToSendAGoodDocument")})).otherwise(()=>null)}),I(t).with("PowerOfAttorney",()=>e.jsx(H,{type:"button",icon:"arrow-down-filled",label:o("supportingDocuments.help.downloadTemplate"),onPress:()=>J(!0)})).with("SwornStatement",()=>e.jsx(H,{type:"button",icon:"arrow-down-filled",label:o("supportingDocuments.help.downloadTemplate"),onPress:()=>Q(!0)})).otherwise(()=>null)]}),e.jsx(D,{height:16}),e.jsx(qe,{ref:n=>{ee.current[t]=n},canUpload:!ce.includes(t)&&!L&&ie==="WaitingForDocument"&&!h,accept:Fe,maxSize:2e7,icon:"document-regular",initialFiles:s,generateUpload:u,getUploadConfig:n=>({fileName:n.name,purpose:t}),uploadFile:M(k)?k:({upload:n,file:l,onProgress:d})=>{const v=new FormData;return n.fields.forEach(({key:q,value:E})=>v.append(q,E)),v.append("file",l),setTimeout(()=>d(.8),100),Ie.make({url:n.url,method:"POST",body:v,type:"text"}).mapOkToResult(je)},formatAndSizeDescription:o("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:L?void 0:le,onChange:n=>{if(b){N.current.set(t,n);const l=N.current.entries().reduce((d,[v,q])=>{const E=q.map(ye=>({purpose:v,file:ye}));return d.push(...E),d},[]);ue?.(l)}},showIds:de})]})}),e.jsx(D,{height:24})]},t)}),te.length===0?e.jsxs(e.Fragment,{children:[e.jsx(D,{height:24}),e.jsx(W,{align:"center",children:o("supportingDocuments.noDocuments")}),e.jsx(D,{height:24})]}):null,e.jsxs(G,{visible:me,title:o("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>J(!1),children:[e.jsx(W,{children:o("supportingDocuments.powerOfAttorneyModal.description")}),e.jsx(D,{height:16}),e.jsx(re,{paddingBottom:0,children:e.jsx(S,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${I(w).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`),children:o("supportingDocuments.downloadTemplate")})})]}),e.jsxs(G,{visible:ge,title:o("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>Q(!1),children:[e.jsx(W,{children:o("supportingDocuments.purpose.SwornStatement.description")}),e.jsx(D,{height:16}),e.jsx(re,{paddingBottom:0,children:e.jsx(S,{grow:!0,color:"current",onPress:()=>{window.open(`/sworn-statement-template/${I(w).with("nl",()=>"nl").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`)},children:o("supportingDocuments.downloadTemplate")})})]}),e.jsx(G,{visible:M(X),title:o("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>Y(void 0),children:e.jsx(be,{children:X?.values.map(({title:t,value:s,type:h},b)=>e.jsx(oe,{type:"viewSmall",label:t,actions:h==="copy"&&e.jsx(ke,{valueToCopy:s,copiedText:o("copyButton.copiedTooltip"),copyText:o("copyButton.copyTooltip")}),render:()=>e.jsx(W,{variant:"regular",color:ve.gray[900],children:s})},`metadata-${b}`))})})]})};p.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:`{
  areAllRequiredDocumentsFilled: () => boolean;
  addDocument: (document: Document<Purpose>) => void;
}`,signature:{properties:[{key:"areAllRequiredDocumentsFilled",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"addDocument",value:{name:"signature",type:"function",raw:"(document: Document<Purpose>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ purpose: Purpose; file: SwanFile }",signature:{properties:[{key:"purpose",value:{name:"Purpose",required:!0}},{key:"file",value:{name:"signature",type:"object",raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"statusInfo",value:{name:"union",raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason: string;
    reasonCode?: string;
  }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:`{
  status: "Refused";
  reason: string;
  reasonCode?: string;
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]},required:!0}}]}},name:"document"}],return:{name:"void"}},required:!0}}]}}],raw:"Ref<SupportingDocumentCollectionRef<Purpose>>"},description:""},status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
| "PendingReview"
| "Approved"
| "Canceled"
| "Rejected"`,elements:[{name:"literal",value:'"WaitingForDocument"'},{name:"literal",value:'"PendingReview"'},{name:"literal",value:'"Approved"'},{name:"literal",value:'"Canceled"'},{name:"literal",value:'"Rejected"'}]},description:""},generateUpload:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  input: UploadInput<Purpose>,
) => Future<Result<UploadOutputWithId<UploadOutput>, unknown>>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ fileName: string; purpose: Purpose }",signature:{properties:[{key:"fileName",value:{name:"string",required:!0}},{key:"purpose",value:{name:"Purpose",required:!0}}]}},name:"input"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"signature",type:"object",raw:"{ id: string; upload: UploadOutput }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"signature",type:"object",raw:"{ url: string; fields: { key: string; value: string }[] }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; value: string }[]",required:!0}}]},required:!0}}]}},{name:"unknown"}],raw:"Result<UploadOutputWithId<UploadOutput>, unknown>"}],raw:"Future<Result<UploadOutputWithId<UploadOutput>, unknown>>"}}},description:""},documents:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ purpose: Purpose; file: SwanFile }",signature:{properties:[{key:"purpose",value:{name:"Purpose",required:!0}},{key:"file",value:{name:"signature",type:"object",raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"statusInfo",value:{name:"union",raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason: string;
    reasonCode?: string;
  }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:`{
  status: "Refused";
  reason: string;
  reasonCode?: string;
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Document<Purpose>[]"},description:""},requiredDocumentPurposes:{required:!0,tsType:{name:"Record",elements:[{name:"Purpose"},{name:"signature",type:"object",raw:"{ label: string; description: string; purposeDetails?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"purposeDetails",value:{name:"string",required:!1}}]}}],raw:`Record<
  Purpose,
  { label: string; description: string; purposeDetails?: string }
>`},description:""},uploadFile:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  config: UploadFileInput<UploadOutput>,
) => Future<Result<Response<string>, NetworkError | TimeoutError>>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  upload: UploadOutput;
  file: File;
  onProgress: (progress: number) => void;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"signature",type:"object",raw:"{ url: string; fields: { key: string; value: string }[] }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; value: string }[]",required:!0}}]},required:!0}},{key:"file",value:{name:"File",required:!0}},{key:"onProgress",value:{name:"signature",type:"function",raw:"(progress: number) => void",signature:{arguments:[{type:{name:"number"},name:"progress"}],return:{name:"void"}},required:!0}}]}},name:"config"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"Response",elements:[{name:"string"}],raw:"Response<string>"},{name:"union",raw:"NetworkError | TimeoutError",elements:[{name:"NetworkError"},{name:"TimeoutError"}]}],raw:"Result<Response<string>, NetworkError | TimeoutError>"}],raw:"Future<Result<Response<string>, NetworkError | TimeoutError>>"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(documents: Document<Purpose>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ purpose: Purpose; file: SwanFile }",signature:{properties:[{key:"purpose",value:{name:"Purpose",required:!0}},{key:"file",value:{name:"signature",type:"object",raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"statusInfo",value:{name:"union",raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason: string;
    reasonCode?: string;
  }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:`{
  status: "Refused";
  reason: string;
  reasonCode?: string;
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Document<Purpose>[]"},name:"documents"}],return:{name:"void"}}},description:""},onRemoveFile:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: SwanFile) => Future<Result<unknown, unknown>>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"statusInfo",value:{name:"union",raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason: string;
    reasonCode?: string;
  }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:`{
  status: "Refused";
  reason: string;
  reasonCode?: string;
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},getPurposeMetadata:{required:!1,tsType:{name:"signature",type:"function",raw:"(purose: Purpose) => PurposeMetadata | undefined",signature:{arguments:[{type:{name:"Purpose"},name:"purose"}],return:{name:"union",raw:"PurposeMetadata | undefined",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  values: { type?: "text" | "copy"; title: string; value: string }[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ type?: "text" | "copy"; title: string; value: string }',signature:{properties:[{key:"type",value:{name:"union",raw:'"text" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"copy"'}],required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:'{ type?: "text" | "copy"; title: string; value: string }[]',required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const lt={title:"Onboarding/SupportingDocumentCollection",component:p},g=()=>V.make(r=>{setTimeout(()=>{r(_.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),f=r=>V.make(a=>{setTimeout(()=>{a(_.Ok({headers:new Headers,status:200,ok:!0,url:"",response:$.None()}))},500)}),Re=r=>V.value(_.Ok(void 0)),F=()=>{const[r,a]=i.useState([]),u=i.useRef(null);return e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsxs(m,{title:"Default",children:[e.jsx(p,{ref:u,status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:r,onChange:a,onRemoveFile:Re,requiredDocumentPurposes:{CompanyRegistration:{label:"Company registration document",description:"A document proving the registration of the company (e.g. Kbis in France)",purposeDetails:"Other details about company registration"},ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"},SwornStatement:{label:"Sworn statement",description:"A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"},PowerOfAttorney:{label:"Power of attorney",description:"A power of attorney signed by the legal representative of the company"},ProofOfBusinessActivity:{label:"Proof of business activity",description:"A document proving the business activity of the company (e.g. invoice, contract)"},CompanyFormationRegistration:{label:"Company formation registration",description:"A document proving the formation registration of the company (e.g. articles of association)"},UnknownDocumentType:{label:"Unknown document type",description:"This is an unknown document type used for testing purposes"}},getPurposeMetadata:k=>({title:"Show metadata",values:[{title:"Purpose",value:k},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),e.jsx(S,{onPress:()=>{u.current!=null&&u.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},R=()=>{const[r,a]=i.useState([]);return e.jsx(c,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:r,onChange:a,requiredDocumentPurposes:{CompanyRegistration:{label:"Company registration document",description:"A document proving the registration of the company (e.g. Kbis in France)"},ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"},SwornStatement:{label:"Sworn statement",description:"A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"},PowerOfAttorney:{label:"Power of attorney",description:"A power of attorney signed by the legal representative of the company"},UnknownDocumentType:{label:"Unknown document type",description:"This is an unknown document type used for testing purposes"}},showIds:!0})})})},A=()=>{const[r,a]=i.useState([{purpose:"CompanyRegistration",file:{id:"id",name:"CompanyRegistration.pdf",statusInfo:{status:"Validated"}}},{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:r,onChange:a,requiredDocumentPurposes:{CompanyRegistration:{label:"Company registration document",description:"A document proving the registration of the company (e.g. Kbis in France)"},ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"},SwornStatement:{label:"Sworn statement",description:"A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"},PowerOfAttorney:{label:"Power of attorney",description:"A power of attorney signed by the legal representative of the company"},UnknownDocumentType:{label:"Unknown document type",description:"This is an unknown document type used for testing purposes"}},onRemoveFile:()=>V.make(u=>{setTimeout(()=>{u(_.Ok(void 0))},1e3)})})})})},C=()=>e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"PendingReview",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),x=()=>e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"Approved",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),U=()=>e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"Approved",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),O=()=>e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"Rejected",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),T=()=>{const[r,a]=i.useState([]);return e.jsx(c,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:r,onChange:a,requiredDocumentPurposes:{},showIds:!0,readOnly:!0})})})},B=()=>e.jsx(c,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document",reasonCode:"InvalidDocument"}}}],onChange:()=>{},requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}},showIds:!0,readOnly:!0})})});F.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};R.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};A.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};C.__docgenInfo={description:"",methods:[],displayName:"Pending"};x.__docgenInfo={description:"",methods:[],displayName:"Approved"};U.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};O.__docgenInfo={description:"",methods:[],displayName:"Rejected"};T.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};B.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  const ref = useRef<SupportingDocumentCollectionRef<string>>(null);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection ref={ref} status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} onRemoveFile={onRemoveFile} requiredDocumentPurposes={{
        CompanyRegistration: {
          label: "Company registration document",
          description: "A document proving the registration of the company (e.g. Kbis in France)",
          purposeDetails: "Other details about company registration"
        },
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)"
        },
        SwornStatement: {
          label: "Sworn statement",
          description: "A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"
        },
        PowerOfAttorney: {
          label: "Power of attorney",
          description: "A power of attorney signed by the legal representative of the company"
        },
        ProofOfBusinessActivity: {
          label: "Proof of business activity",
          description: "A document proving the business activity of the company (e.g. invoice, contract)"
        },
        CompanyFormationRegistration: {
          label: "Company formation registration",
          description: "A document proving the formation registration of the company (e.g. articles of association)"
        },
        UnknownDocumentType: {
          label: "Unknown document type",
          description: "This is an unknown document type used for testing purposes"
        }
      }} getPurposeMetadata={purpose => ({
        title: "Show metadata",
        values: [{
          title: "Purpose",
          value: purpose
        }, {
          title: "ID",
          value: "666",
          type: "copy"
        }, {
          title: "Lorem ipsum",
          value: "dolor sit amet"
        }]
      })} />

        <LakeButton onPress={() => {
        if (ref.current != null) {
          ref.current.addDocument({
            purpose: "UltimateBeneficialOwnerProofOfAddress",
            file: {
              id: crypto.randomUUID(),
              name: "toto.jpg",
              statusInfo: {
                status: "Uploaded"
              }
            }
          });
        }
      }}>
          Add other document from outside
        </LakeButton>
      </StoryPart>
    </StoryBlock>;
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} requiredDocumentPurposes={{
        CompanyRegistration: {
          label: "Company registration document",
          description: "A document proving the registration of the company (e.g. Kbis in France)"
        },
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)"
        },
        SwornStatement: {
          label: "Sworn statement",
          description: "A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"
        },
        PowerOfAttorney: {
          label: "Power of attorney",
          description: "A power of attorney signed by the legal representative of the company"
        },
        UnknownDocumentType: {
          label: "Unknown document type",
          description: "This is an unknown document type used for testing purposes"
        }
      }} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([{
    purpose: "CompanyRegistration",
    file: {
      id: "id",
      name: "CompanyRegistration.pdf",
      statusInfo: {
        status: "Validated"
      }
    }
  }, {
    purpose: "ProofOfIdentity",
    file: {
      id: "id",
      name: "IdCard.pdf",
      statusInfo: {
        status: "Validated"
      }
    }
  }, {
    purpose: "SwornStatement",
    file: {
      id: "sworn",
      name: "SwornStatement.pdf",
      statusInfo: {
        status: "Uploaded"
      }
    }
  }, {
    purpose: "PowerOfAttorney",
    file: {
      id: "power",
      name: "power.pdf",
      url: "https://swan.io",
      statusInfo: {
        status: "Refused",
        reason: "Invalid document"
      }
    }
  }]);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} requiredDocumentPurposes={{
        CompanyRegistration: {
          label: "Company registration document",
          description: "A document proving the registration of the company (e.g. Kbis in France)"
        },
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)"
        },
        SwornStatement: {
          label: "Sworn statement",
          description: "A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"
        },
        PowerOfAttorney: {
          label: "Power of attorney",
          description: "A power of attorney signed by the legal representative of the company"
        },
        UnknownDocumentType: {
          label: "Unknown document type",
          description: "This is an unknown document type used for testing purposes"
        }
      }} onRemoveFile={() => Future.make(resolve => {
        setTimeout(() => {
          resolve(Result.Ok(undefined));
        }, 1_000);
      })} />
      </StoryPart>
    </StoryBlock>;
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="PendingReview" generateUpload={generateUpload} uploadFile={uploadFile} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          url: "https://swan.io",
          statusInfo: {
            status: "Pending"
          }
        }
      }]} requiredDocumentPurposes={{
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)"
        }
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="Approved" generateUpload={generateUpload} uploadFile={uploadFile} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          url: "https://swan.io",
          statusInfo: {
            status: "Validated"
          }
        }
      }]} requiredDocumentPurposes={{
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)"
        }
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...x.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="Approved" generateUpload={generateUpload} uploadFile={uploadFile} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          statusInfo: {
            status: "Validated"
          }
        }
      }]} requiredDocumentPurposes={{
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)"
        }
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...U.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="Rejected" generateUpload={generateUpload} uploadFile={uploadFile} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          url: "https://swan.io",
          statusInfo: {
            status: "Refused",
            reason: "Invalid document"
          }
        }
      }]} requiredDocumentPurposes={{
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)"
        }
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...O.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} requiredDocumentPurposes={{}} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          url: "https://swan.io",
          statusInfo: {
            status: "Refused",
            reason: "Invalid document",
            reasonCode: "InvalidDocument"
          }
        }
      }]} onChange={() => {}} requiredDocumentPurposes={{
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)"
        }
      }} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...B.parameters?.docs?.source}}};const dt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{x as Approved,U as ApprovedWithoutDownload,C as Pending,T as ReadOnlyEmpty,B as ReadOnlyWithDocs,O as Rejected,F as WaitingForDocument,R as WaitingForDocumentShowIds,A as WaitingForDocumentWithApprovedAndRejected,dt as __namedExportsOrder,lt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-DYWuuZpG.js.map
