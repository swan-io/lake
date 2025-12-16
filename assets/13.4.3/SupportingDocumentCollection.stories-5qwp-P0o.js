import{Y as he,y as ve,p as Q,j as e,B as X,z as P,i as V,S as w,L as W,c as De,q as Se,s as Pe,a9 as ne,aa as re}from"./ScrollView-yhnlmysC.js";import{L as v,a as Z}from"./LakeButton-c4I30xb4.js";import{r as i}from"./iframe-BnDr4jPr.js";import{c as ke}from"./commonStyles-BBEkV6IC.js";import{L as qe}from"./LakeCopyButton-Ixt9FJvk.js";import{L as ee}from"./LakeLabel-D2YKlo8e.js";import{R as je}from"./ReadOnlyFieldList-C8ZxER_M.js";import{t as o,l as L,m as Ie,v as Re,i as oe}from"./i18n-DoU8zrHR.js";import{F as be}from"./FilesUploader-CcAcK4mu.js";import{L as _}from"./LakeModal-wvOPO4f_.js";import{S as p,a as m}from"./_StoriesComponents-26MXisOp.js";import"./index-BgAb9bgR.js";import"./Pressable-C27QPiJN.js";import"./index-C08Gnc1L.js";import"./extends-CF3RwP-h.js";import"./preload-helper-D1IIBeq1.js";import"./clipboard-BXAk6GqW.js";import"./v4-BKrj-4V8.js";import"./Separator-Cmw5bFvQ.js";import"./rifm-DJdBk3Gf.js";import"./array-BfAlyugE.js";import"./FileInput-Dcj0j7rl.js";import"./LakeHeading-BGT9LTO3.js";import"./useBoolean-J382nFSC.js";import"./LakeAlert-kO0FrU05.js";import"./useResponsive-BJvnydWd.js";import"./Tag-DO4b7_7Z.js";import"./index-BrzuDZzc.js";import"./FocusTrap-BIfNg75L.js";import"./Suspendable-DImD3S32.js";import"./ResponsiveContainer-_BQ2FD10.js";import"./TransitionView-D_rp2bTU.js";import"./useBodyClassName-DzL62ECt.js";const se=i.memo(({ref:n,style:r,onReset:l,onSubmit:D,...k})=>he("form",{...k,ref:n,onReset:g=>{g.preventDefault(),l?.(g)},onSubmit:g=>{g.preventDefault(),D?.(g)},style:[ke.view,r]}));se.displayName="Form";const xe=["application/pdf","image/png","image/jpeg","image/heic"],E=Pe.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),N=n=>P(n).with({type:"tooltip"},({text:r,width:l})=>e.jsx(Se,{content:r,width:l,togglableOnFocus:!0,placement:"right",maxWidth:400,children:e.jsx(v,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",disabled:!0,style:[E.button,E.buttonWithDefaultCursor],ariaLabel:o("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:l})=>e.jsx(v,{mode:"secondary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",onPress:l,style:E.button,ariaLabel:o("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),te=n=>P(n).with("fr",()=>"https://support.swan.io/hc/en-150/articles/22502977563933--Proof-of-registration-for-French-companies").with("it",()=>"https://support.swan.io/hc/en-150/articles/22537604831005--Proof-of-registration-for-Italian-companies").with("de",()=>"https://support.swan.io/hc/en-150/articles/22535023588509--Proof-of-registration-for-German-companies").with("es",()=>"https://support.swan.io/hc/en-150/articles/22544703221021--Proof-of-registration-for-Spanish-companies").with("nl",()=>"https://support.swan.io/hc/en-150/articles/22543228421277--Proof-of-registration-for-Dutch-companies").otherwise(()=>"https://support.swan.io/hc/en-150/articles/22620756787869-Proof-of-company-registration"),Ce=n=>{const r=`supportingDocuments.purpose.${n}`;return oe(r)?o(r):n},Ue=n=>{const r=`supportingDocuments.purpose.${n}.description`;return oe(r)?o(r):""},d=({ref:n,documents:r,generateUpload:l,uploadFile:D,requiredDocumentPurposes:k,templateLanguage:g=L.language,status:ae,onRemoveFile:ue,showIds:ie=!1,readOnly:B=!1,getPurposeMetadata:le,readonlyDocumentPurposes:de=[],purposeLabelOverrides:pe,purposeDescriptionLabelOverrides:me})=>{const[ce,M]=i.useState(!1),[ge,z]=i.useState(!1),[G,$]=i.useState(void 0),[q,fe]=i.useState([]),H=i.useMemo(()=>{const t=new Set(k),u=[...q,...r];u.forEach(s=>t.add(s.purpose));const f=new Map([...t].map(s=>{const a=u.filter(y=>y.purpose===s);return[s,a]})),S=new Set(k),h=new Map([...t].map(s=>{const a=f.get(s)??[],T=a.length>0&&a.every(j=>j.file.statusInfo.status==="Validated")?0:S.has(s)?1:2;return[s,T]}));return[...t].sort((s,a)=>{const y=h.get(s)??2;return(h.get(a)??2)>y?-1:1}).map(s=>{const a=f.get(s)??[];return{purpose:s,files:a.map(y=>y.file),isRequired:S.has(s),areAllDocumentsValidated:h.get(s)===0}})},[k,r,q]),K=i.useRef(new Map(ve.filterMap(H,({isRequired:t,purpose:u,files:f})=>t?Q.Some([u,f]):Q.None()))),Y=i.useRef({});i.useImperativeHandle(n,()=>({areAllRequiredDocumentsFilled:()=>[...K.current.values()].every(u=>u.length>0),addDocument:t=>{fe(u=>[...u,t])}})),i.useEffect(()=>{const t=q[q.length-1];if(t!=null){const u=Y.current[t?.purpose];u?.add(t.file)}},[q]);const J=H.filter(({files:t})=>!(B&&t.length===0));return e.jsxs(se,{children:[J.map(({purpose:t,files:u,areAllDocumentsValidated:f,isRequired:S})=>{const h=le?.(t),s=me?.[t]??Ue(t);return e.jsxs(i.Fragment,{children:[e.jsx(ee,{label:pe?.[t]??Ce(t),description:s,render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(X,{direction:"row",children:[e.jsx(X,{direction:"row",children:V(h)?t==="CompanyRegistration"?e.jsxs(e.Fragment,{children:[e.jsx(v,{size:"small",mode:"secondary",icon:"question-circle-regular",onPress:()=>window.open(te(L.language)),ariaLabel:o("supportingDocuments.help.howToSendAGoodDocument"),children:o("supportingDocuments.help.howToSendAGoodDocument")}),e.jsx(w,{width:8})]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{type:"button",label:h.title,onPress:()=>$(h)}),e.jsx(w,{width:8})]}):P(t).with("CompanyRegistration",()=>e.jsx(v,{size:"small",mode:"secondary",icon:"question-circle-regular",onPress:()=>window.open(te(L.language)),ariaLabel:o("supportingDocuments.help.howToSendAGoodDocument"),children:o("supportingDocuments.help.howToSendAGoodDocument")})).otherwise(()=>null)}),P(t).with("PowerOfAttorney",()=>e.jsx(N,{type:"button",icon:"arrow-down-filled",label:o("supportingDocuments.help.downloadTemplate"),onPress:()=>M(!0)})).with("SwornStatement",()=>e.jsx(N,{type:"button",icon:"arrow-down-filled",label:o("supportingDocuments.help.downloadTemplate"),onPress:()=>z(!0)})).otherwise(()=>null)]}),e.jsx(w,{height:16}),e.jsx(be,{ref:a=>{Y.current[t]=a},canUpload:!de.includes(t)&&!B&&ae==="WaitingForDocument"&&!f,accept:xe,maxSize:2e7,icon:"document-regular",initialFiles:u,generateUpload:l,getUploadConfig:a=>({fileName:a.name,purpose:t}),uploadFile:V(D)?D:({upload:a,file:y,onProgress:T})=>{const j=new FormData;return a.fields.forEach(({key:ye,value:we})=>j.append(ye,we)),j.append("file",y),setTimeout(()=>T(.8),100),Ie.make({url:a.url,method:"POST",body:j,type:"text"}).mapOkToResult(Re)},formatAndSizeDescription:o("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:B?void 0:ue,onChange:a=>{S&&K.current.set(t,a)},showIds:ie})]})}),e.jsx(w,{height:24})]},t)}),J.length===0?e.jsxs(e.Fragment,{children:[e.jsx(w,{height:24}),e.jsx(W,{align:"center",children:o("supportingDocuments.noDocuments")}),e.jsx(w,{height:24})]}):null,e.jsxs(_,{visible:ce,title:o("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>M(!1),children:[e.jsx(W,{children:o("supportingDocuments.powerOfAttorneyModal.description")}),e.jsx(w,{height:16}),e.jsx(Z,{paddingBottom:0,children:e.jsx(v,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${P(g).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`),children:o("supportingDocuments.downloadTemplate")})})]}),e.jsxs(_,{visible:ge,title:o("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>z(!1),children:[e.jsx(W,{children:o("supportingDocuments.purpose.SwornStatement.description")}),e.jsx(w,{height:16}),e.jsx(Z,{paddingBottom:0,children:e.jsx(v,{grow:!0,color:"current",onPress:()=>{window.open(`/sworn-statement-template/${P(g).with("nl",()=>"nl").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`)},children:o("supportingDocuments.downloadTemplate")})})]}),e.jsx(_,{visible:V(G),title:o("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>$(void 0),children:e.jsx(je,{children:G?.values.map(({title:t,value:u,type:f},S)=>e.jsx(ee,{type:"viewSmall",label:t,actions:f==="copy"&&e.jsx(qe,{valueToCopy:u,copiedText:o("copyButton.copiedTooltip"),copyText:o("copyButton.copyTooltip")}),render:()=>e.jsx(W,{variant:"regular",color:De.gray[900],children:u})},`metadata-${S}`))})})]})};d.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ type?: "text" | "copy"; title: string; value: string }',signature:{properties:[{key:"type",value:{name:"union",raw:'"text" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"copy"'}],required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:'{ type?: "text" | "copy"; title: string; value: string }[]',required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}},purposeLabelOverrides:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"Purpose"},{name:"string"}],raw:"Record<Purpose, string>"}],raw:"Partial<Record<Purpose, string>>"},description:""},purposeDescriptionLabelOverrides:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"Purpose"},{name:"string"}],raw:"Record<Purpose, string>"}],raw:"Partial<Record<Purpose, string>>"},description:""}}};const pt={title:"Onboarding/SupportingDocumentCollection",component:d},c=()=>ne.make(n=>{setTimeout(()=>{n(re.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),I=()=>{const[n,r]=i.useState([]),l=i.useRef(null);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsxs(m,{title:"Default",children:[e.jsx(d,{ref:l,status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["CompanyRegistration","ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],getPurposeMetadata:D=>({title:"Show metadata",values:[{title:"Purpose",value:D},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),e.jsx(v,{onPress:()=>{l.current!=null&&l.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},R=()=>{const[n,r]=i.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["CompanyRegistration","ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},b=()=>{const[n,r]=i.useState([{purpose:"CompanyRegistration",file:{id:"id",name:"CompanyRegistration.pdf",statusInfo:{status:"Validated"}}},{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["CompanyRegistration","ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>ne.make(l=>{setTimeout(()=>{l(re.Ok(void 0))},1e3)})})})})},x=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"PendingReview",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),C=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),U=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),F=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Rejected",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),O=()=>{const[n,r]=i.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},A=()=>e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document",reasonCode:"InvalidDocument"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});I.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};R.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};b.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};x.__docgenInfo={description:"",methods:[],displayName:"Pending"};C.__docgenInfo={description:"",methods:[],displayName:"Approved"};U.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};F.__docgenInfo={description:"",methods:[],displayName:"Rejected"};O.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};A.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["CompanyRegistration", "ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};const mt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{C as Approved,U as ApprovedWithoutDownload,x as Pending,O as ReadOnlyEmpty,A as ReadOnlyWithDocs,F as Rejected,I as WaitingForDocument,R as WaitingForDocumentShowIds,b as WaitingForDocumentWithApprovedAndRejected,mt as __namedExportsOrder,pt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-5qwp-P0o.js.map
