import{$ as we,y as he,p as X,j as e,z as P,B as ve,S,i as E,L as B,c as De,q as Se,s as Pe,aa as te,ab as ne}from"./ScrollView-BdDFD-w9.js";import{L as h,a as Y}from"./LakeButton-BqtgeiTK.js";import{r as i}from"./iframe-BTEpaE1M.js";import{c as ke}from"./commonStyles-BBEkV6IC.js";import{L as qe}from"./LakeCopyButton-BvMpElB6.js";import{L as Z}from"./LakeLabel-Dbdd3I_r.js";import{R as Ie}from"./ReadOnlyFieldList-DhovqCGp.js";import{t as r,m as je,v as Re,l as N,i as re}from"./i18n-ULnbhe7c.js";import{F as be}from"./FilesUploader-BvxN2ZEH.js";import{L as M}from"./LakeModal-D6ATdWIQ.js";import{S as p,a as m}from"./_StoriesComponents-8On8so-8.js";import"./index-D7tCZOXe.js";import"./Pressable-C2c5sTPl.js";import"./index-CI97-6ld.js";import"./extends-CF3RwP-h.js";import"./preload-helper-D1IIBeq1.js";import"./clipboard-BXAk6GqW.js";import"./v4-BKrj-4V8.js";import"./Separator-DKYAXnsR.js";import"./rifm-SriEAdbd.js";import"./array-BfAlyugE.js";import"./FileInput-DhLyyxyT.js";import"./LakeHeading-CJ0YV6Kw.js";import"./useBoolean-uhFqA-2B.js";import"./LakeAlert-BnvaUq7J.js";import"./useResponsive-awT94KYr.js";import"./Tag-BeGCGa5J.js";import"./index-B1WKEi-1.js";import"./FocusTrap-CDzC8O4-.js";import"./Suspendable-RRkYyEBI.js";import"./ResponsiveContainer-BCmQTmtr.js";import"./TransitionView-CuOjsm0H.js";import"./useBodyClassName-BFhtSoL0.js";const oe=i.memo(({ref:n,style:o,onReset:l,onSubmit:v,...k})=>we("form",{...k,ref:n,onReset:g=>{g.preventDefault(),l?.(g)},onSubmit:g=>{g.preventDefault(),v?.(g)},style:[ke.view,o]}));oe.displayName="Form";const xe=["application/pdf","image/png","image/jpeg","image/heic"],z=Pe.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),j=n=>P(n).with({type:"tooltip"},({text:o,width:l})=>e.jsx(Se,{content:o,width:l,togglableOnFocus:!0,placement:"right",maxWidth:400,children:e.jsx(h,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",disabled:!0,style:[z.button,z.buttonWithDefaultCursor],ariaLabel:r("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:o,onPress:l})=>e.jsx(h,{mode:"secondary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",onPress:l,style:z.button,ariaLabel:r("supportingDocuments.help.whatIsThis"),children:o})).exhaustive(),ee=n=>P(n).with("fr",()=>"https://support.swan.io/hc/en-150/articles/22502977563933--Proof-of-registration-for-French-companies").with("it",()=>"https://support.swan.io/hc/en-150/articles/22537604831005--Proof-of-registration-for-Italian-companies").with("de",()=>"https://support.swan.io/hc/en-150/articles/22535023588509--Proof-of-registration-for-German-companies").with("es",()=>"https://support.swan.io/hc/en-150/articles/22544703221021--Proof-of-registration-for-Spanish-companies").with("nl",()=>"https://support.swan.io/hc/en-150/articles/22543228421277--Proof-of-registration-for-Dutch-companies").otherwise(()=>"https://support.swan.io/hc/en-150/articles/22620756787869-Proof-of-company-registration"),Ce=n=>{const o=`supportingDocuments.purpose.${n}`;return re(o)?r(o):n},Ue=n=>{const o=`supportingDocuments.purpose.${n}.description`;return re(o)?r(o):""},d=({ref:n,documents:o,generateUpload:l,uploadFile:v,requiredDocumentPurposes:k,templateLanguage:g=N.language,status:se,onRemoveFile:ae,showIds:ue=!1,readOnly:V=!1,getPurposeMetadata:ie,readonlyDocumentPurposes:le=[],purposeLabelOverrides:de,purposeDescriptionLabelOverrides:pe})=>{const[me,L]=i.useState(!1),[ce,_]=i.useState(!1),[G,$]=i.useState(void 0),[q,ge]=i.useState([]),H=i.useMemo(()=>{const t=new Set(k),u=[...q,...o];u.forEach(s=>t.add(s.purpose));const f=new Map([...t].map(s=>{const a=u.filter(y=>y.purpose===s);return[s,a]})),D=new Set(k),w=new Map([...t].map(s=>{const a=f.get(s)??[],W=a.length>0&&a.every(I=>I.file.statusInfo.status==="Validated")?0:D.has(s)?1:2;return[s,W]}));return[...t].sort((s,a)=>{const y=w.get(s)??2;return(w.get(a)??2)>y?-1:1}).map(s=>{const a=f.get(s)??[];return{purpose:s,files:a.map(y=>y.file),isRequired:D.has(s),areAllDocumentsValidated:w.get(s)===0}})},[k,o,q]),K=i.useRef(new Map(he.filterMap(H,({isRequired:t,purpose:u,files:f})=>t?X.Some([u,f]):X.None()))),J=i.useRef({});i.useImperativeHandle(n,()=>({areAllRequiredDocumentsFilled:()=>[...K.current.values()].every(u=>u.length>0),addDocument:t=>{ge(u=>[...u,t])}})),i.useEffect(()=>{const t=q[q.length-1];if(t!=null){const u=J.current[t?.purpose];u?.add(t.file)}},[q]);const Q=H.filter(({files:t})=>!(V&&t.length===0));return e.jsxs(oe,{children:[Q.map(({purpose:t,files:u,areAllDocumentsValidated:f,isRequired:D})=>{const w=ie?.(t),s=pe?.[t]??Ue(t);return e.jsxs(i.Fragment,{children:[e.jsx(Z,{label:de?.[t]??Ce(t),description:s,help:E(w)?t==="CompanyRegistration"?e.jsx(h,{size:"small",mode:"tertiary",icon:"question-circle-regular",onPress:()=>window.open(ee(N.language)),ariaLabel:r("supportingDocuments.help.howToSendAGoodDocument"),children:r("supportingDocuments.help.howToSendAGoodDocument")}):e.jsx(j,{type:"button",label:w.title,onPress:()=>$(w)}):P(t).with("PowerOfAttorney",()=>e.jsx(j,{type:"button",icon:"arrow-down-filled",label:r("supportingDocuments.help.downloadTemplate"),onPress:()=>L(!0)})).with("SwornStatement",()=>e.jsx(j,{type:"button",icon:"arrow-down-filled",label:r("supportingDocuments.help.downloadTemplate"),onPress:()=>_(!0)})).with("CompanyRegistration",()=>e.jsx(h,{size:"small",mode:"tertiary",icon:"question-circle-regular",onPress:()=>window.open(ee(N.language)),ariaLabel:r("supportingDocuments.help.howToSendAGoodDocument"),children:r("supportingDocuments.help.howToSendAGoodDocument")})).otherwise(()=>null),render:()=>e.jsxs(e.Fragment,{children:[e.jsx(ve,{direction:"row",children:P(t).with("PowerOfAttorney",()=>e.jsx(j,{type:"button",icon:"arrow-down-filled",label:r("supportingDocuments.help.downloadTemplate"),onPress:()=>L(!0)})).with("SwornStatement",()=>e.jsx(j,{type:"button",icon:"arrow-down-filled",label:r("supportingDocuments.help.downloadTemplate"),onPress:()=>_(!0)})).otherwise(()=>null)}),e.jsx(S,{height:16}),e.jsx(be,{ref:a=>{J.current[t]=a},canUpload:!le.includes(t)&&!V&&se==="WaitingForDocument"&&!f,accept:xe,maxSize:2e7,icon:"document-regular",initialFiles:u,generateUpload:l,getUploadConfig:a=>({fileName:a.name,purpose:t}),uploadFile:E(v)?v:({upload:a,file:y,onProgress:W})=>{const I=new FormData;return a.fields.forEach(({key:fe,value:ye})=>I.append(fe,ye)),I.append("file",y),setTimeout(()=>W(.8),100),je.make({url:a.url,method:"POST",body:I,type:"text"}).mapOkToResult(Re)},formatAndSizeDescription:r("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:V?void 0:ae,onChange:a=>{D&&K.current.set(t,a)},showIds:ue})]})}),e.jsx(S,{height:24})]},t)}),Q.length===0?e.jsxs(e.Fragment,{children:[e.jsx(S,{height:24}),e.jsx(B,{align:"center",children:r("supportingDocuments.noDocuments")}),e.jsx(S,{height:24})]}):null,e.jsxs(M,{visible:me,title:r("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>L(!1),children:[e.jsx(B,{children:r("supportingDocuments.powerOfAttorneyModal.description")}),e.jsx(S,{height:16}),e.jsx(Y,{paddingBottom:0,children:e.jsx(h,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${P(g).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`),children:r("supportingDocuments.downloadTemplate")})})]}),e.jsxs(M,{visible:ce,title:r("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>_(!1),children:[e.jsx(B,{children:r("supportingDocuments.purpose.SwornStatement.description")}),e.jsx(S,{height:16}),e.jsx(Y,{paddingBottom:0,children:e.jsx(h,{grow:!0,color:"current",onPress:()=>{window.open(`/sworn-statement-template/${P(g).with("nl",()=>"nl").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`)},children:r("supportingDocuments.downloadTemplate")})})]}),e.jsx(M,{visible:E(G),title:r("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>$(void 0),children:e.jsx(Ie,{children:G?.values.map(({title:t,value:u,type:f},D)=>e.jsx(Z,{type:"viewSmall",label:t,actions:f==="copy"&&e.jsx(qe,{valueToCopy:u,copiedText:r("copyButton.copiedTooltip"),copyText:r("copyButton.copyTooltip")}),render:()=>e.jsx(B,{variant:"regular",color:De.gray[900],children:u})},`metadata-${D}`))})})]})};d.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Document<Purpose>[]"},description:""},requiredDocumentPurposes:{required:!0,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:""},uploadFile:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ type?: "text" | "copy"; title: string; value: string }',signature:{properties:[{key:"type",value:{name:"union",raw:'"text" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"copy"'}],required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:'{ type?: "text" | "copy"; title: string; value: string }[]',required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}},purposeLabelOverrides:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"Purpose"},{name:"string"}],raw:"Record<Purpose, string>"}],raw:"Partial<Record<Purpose, string>>"},description:""},purposeDescriptionLabelOverrides:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"Purpose"},{name:"string"}],raw:"Record<Purpose, string>"}],raw:"Partial<Record<Purpose, string>>"},description:""}}};const pt={title:"Onboarding/SupportingDocumentCollection",component:d},c=()=>te.make(n=>{setTimeout(()=>{n(ne.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),R=()=>{const[n,o]=i.useState([]),l=i.useRef(null);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsxs(m,{title:"Default",children:[e.jsx(d,{ref:l,status:"WaitingForDocument",generateUpload:c,documents:n,onChange:o,requiredDocumentPurposes:["CompanyRegistration","ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],getPurposeMetadata:v=>({title:"Show metadata",values:[{title:"Purpose",value:v},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),e.jsx(h,{onPress:()=>{l.current!=null&&l.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},b=()=>{const[n,o]=i.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:o,requiredDocumentPurposes:["CompanyRegistration","ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},x=()=>{const[n,o]=i.useState([{purpose:"CompanyRegistration",file:{id:"id",name:"CompanyRegistration.pdf",statusInfo:{status:"Validated"}}},{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:o,requiredDocumentPurposes:["CompanyRegistration","ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>te.make(l=>{setTimeout(()=>{l(ne.Ok(void 0))},1e3)})})})})},C=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"PendingReview",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),U=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),O=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),F=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Rejected",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),A=()=>{const[n,o]=i.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:o,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},T=()=>e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document",reasonCode:"InvalidDocument"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});R.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};b.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};x.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};C.__docgenInfo={description:"",methods:[],displayName:"Pending"};U.__docgenInfo={description:"",methods:[],displayName:"Approved"};O.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};F.__docgenInfo={description:"",methods:[],displayName:"Rejected"};A.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};T.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  const ref = useRef<SupportingDocumentCollectionRef<string>>(null);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection ref={ref} status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["CompanyRegistration", "ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} getPurposeMetadata={purpose => ({
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
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["CompanyRegistration", "ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["CompanyRegistration", "ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} onRemoveFile={() => Future.make(resolve => {
        setTimeout(() => {
          resolve(Result.Ok(undefined));
        }, 1_000);
      })} />
      </StoryPart>
    </StoryBlock>;
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="PendingReview" generateUpload={generateUpload} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          url: "https://swan.io",
          statusInfo: {
            status: "Pending"
          }
        }
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...C.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="Approved" generateUpload={generateUpload} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          url: "https://swan.io",
          statusInfo: {
            status: "Validated"
          }
        }
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...U.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="Approved" generateUpload={generateUpload} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          statusInfo: {
            status: "Validated"
          }
        }
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...O.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="Rejected" generateUpload={generateUpload} documents={[{
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
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...F.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={[{
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
      }]} onChange={() => {}} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...T.parameters?.docs?.source}}};const mt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{U as Approved,O as ApprovedWithoutDownload,C as Pending,A as ReadOnlyEmpty,T as ReadOnlyWithDocs,F as Rejected,R as WaitingForDocument,b as WaitingForDocumentShowIds,x as WaitingForDocumentWithApprovedAndRejected,mt as __namedExportsOrder,pt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-CrxENl7I.js.map
