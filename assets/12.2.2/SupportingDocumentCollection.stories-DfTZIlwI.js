import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as Ne,F as Le,p as Y,z,i as E,S as k,L as W,c as Me,n as ze,s as $e,H as Re,G as Ue}from"./ScrollView-CRqCiH49.js";import{a as Z,L as C}from"./LakeButton-Y2oJasCQ.js";import{r as i}from"./index-D9D9kDko.js";import{c as He}from"./commonStyles-BBEkV6IC.js";import{L as Ge}from"./LakeCopyButton-Cq417N7d.js";import{L as ee}from"./LakeLabel-Ciqqncmo.js";import{R as Ke}from"./ReadOnlyFieldList-DNQG8A-3.js";import{t as a,m as Je,v as Qe,l as Xe,i as xe}from"./i18n-CIFmEnGm.js";import{F as Ye}from"./FilesUploader-DmytETVh.js";import{L as N}from"./LakeModal-BQ9ae3U-.js";import{S as p,a as m}from"./_StoriesComponents-BJjd_5r-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D0hBKHsB.js";import"./Pressable-D0TQHTzC.js";import"./index-X5c_aylL.js";import"./extends-CF3RwP-h.js";import"./clipboard-BXAk6GqW.js";import"./v4-C6aID195.js";import"./Separator-Bkm-h-Cw.js";import"./rifm-B2FFccIi.js";import"./utc-JZaFi-_r.js";import"./array-BfAlyugE.js";import"./FileInput-BpPRO0Yp.js";import"./LakeHeading-Qdhbqsm6.js";import"./useBoolean-CLEWiLu4.js";import"./LakeAlert-D_6gK0uR.js";import"./useResponsive-DVbm4z6j.js";import"./Tag-BORgG-Pn.js";import"./index-uPcVX-2d.js";import"./FocusTrap-D6KQDOaF.js";import"./Suspendable-DyCjnnoj.js";import"./ResponsiveContainer-Dsj4u0f5.js";import"./TransitionView-CIer91hl.js";import"./useBodyClassName-CPyC-r4W.js";const Fe=i.memo(({ref:n,style:r,onReset:l,onSubmit:g,...S})=>Ne("form",{...S,ref:n,onReset:w=>{w.preventDefault(),l==null||l(w)},onSubmit:w=>{w.preventDefault(),g==null||g(w)},style:[He.view,r]}));Fe.displayName="Form";const Ze=["application/pdf","image/png","image/jpeg","image/heic"],L=$e.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),M=n=>z(n).with({type:"tooltip"},({text:r,width:l})=>e.jsx(ze,{content:r,width:l,togglableOnFocus:!0,placement:"right",maxWidth:400,children:e.jsx(C,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",disabled:!0,style:[L.button,L.buttonWithDefaultCursor],ariaLabel:a("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:l})=>e.jsx(C,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",onPress:l,style:L.button,ariaLabel:a("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),et=n=>{const r=`supportingDocuments.purpose.${n}`;return xe(r)?a(r):n},tt=n=>{const r=`supportingDocuments.purpose.${n}.description`;return xe(r)?a(r):""},d=({ref:n,documents:r,generateUpload:l,uploadFile:g,requiredDocumentPurposes:S,templateLanguage:w=Xe.language,status:Oe,onRemoveFile:Ce,showIds:Ae=!1,readOnly:B=!1,getPurposeMetadata:V,readonlyDocumentPurposes:Te=[],purposeLabelOverrides:_})=>{const[We,$]=i.useState(!1),[Be,H]=i.useState(!1),[A,G]=i.useState(void 0),[P,Ve]=i.useState([]),K=i.useMemo(()=>{const t=new Set(S),u=[...P,...r];u.forEach(o=>t.add(o.purpose));const y=new Map([...t].map(o=>{const s=u.filter(f=>f.purpose===o);return[o,s]})),D=new Set(S),v=new Map([...t].map(o=>{const s=y.get(o)??[],T=s.length>0&&s.every(h=>h.file.statusInfo.status==="Validated")?0:D.has(o)?1:2;return[o,T]}));return[...t].sort((o,s)=>{const f=v.get(o)??2;return(v.get(s)??2)>f?-1:1}).map(o=>{const s=y.get(o)??[];return{purpose:o,files:s.map(f=>f.file),isRequired:D.has(o),areAllDocumentsValidated:v.get(o)===0}})},[S,r,P]),J=i.useRef(new Map(Le.filterMap(K,({isRequired:t,purpose:u,files:y})=>t?Y.Some([u,y]):Y.None()))),Q=i.useRef({});i.useImperativeHandle(n,()=>({areAllRequiredDocumentsFilled:()=>[...J.current.values()].every(u=>u.length>0),addDocument:t=>{Ve(u=>[...u,t])}})),i.useEffect(()=>{const t=P[P.length-1];if(t!=null){const u=Q.current[t==null?void 0:t.purpose];u!=null&&u.add(t.file)}},[P]);const X=K.filter(({files:t})=>!(B&&t.length===0));return e.jsxs(Fe,{children:[X.map(({purpose:t,files:u,areAllDocumentsValidated:y,isRequired:D})=>{const v=V==null?void 0:V(t),o=tt(t);return e.jsxs(i.Fragment,{children:[e.jsx(ee,{label:(_==null?void 0:_[t])??et(t),description:o,help:E(v)?e.jsx(M,{type:"button",label:v.title,onPress:()=>G(v)}):z(t).with("PowerOfAttorney",()=>e.jsx(M,{type:"button",icon:"arrow-down-filled",label:a("supportingDocuments.help.downloadTemplate"),onPress:()=>$(!0)})).with("SwornStatement",()=>e.jsx(M,{type:"button",icon:"arrow-down-filled",label:a("supportingDocuments.help.downloadTemplate"),onPress:()=>H(!0)})).otherwise(()=>null),render:()=>e.jsx(Ye,{ref:s=>{Q.current[t]=s},canUpload:!Te.includes(t)&&!B&&Oe==="WaitingForDocument"&&!y,accept:Ze,maxSize:2e7,icon:"document-regular",initialFiles:u,generateUpload:l,getUploadConfig:s=>({fileName:s.name,purpose:t}),uploadFile:E(g)?g:({upload:s,file:f,onProgress:T})=>{const h=new FormData;return s.fields.forEach(({key:_e,value:Ee})=>h.append(_e,Ee)),h.append("file",f),setTimeout(()=>T(.8),100),Je.make({url:s.url,method:"POST",body:h,type:"text"}).mapOkToResult(Qe)},formatAndSizeDescription:a("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:B?void 0:Ce,onChange:s=>{D&&J.current.set(t,s)},showIds:Ae})}),e.jsx(k,{height:24})]},t)}),X.length===0?e.jsxs(e.Fragment,{children:[e.jsx(k,{height:24}),e.jsx(W,{align:"center",children:a("supportingDocuments.noDocuments")}),e.jsx(k,{height:24})]}):null,e.jsxs(N,{visible:We,title:a("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>$(!1),children:[e.jsx(W,{children:a("supportingDocuments.powerOfAttorneyModal.description")}),e.jsx(k,{height:16}),e.jsx(Z,{paddingBottom:0,children:e.jsx(C,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${z(w).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:a("supportingDocuments.downloadTemplate")})})]}),e.jsxs(N,{visible:Be,title:a("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>H(!1),children:[e.jsx(W,{children:a("supportingDocuments.purpose.SwornStatement.description")}),e.jsx(k,{height:16}),e.jsx(Z,{paddingBottom:0,children:e.jsx(C,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:a("supportingDocuments.downloadTemplate")})})]}),e.jsx(N,{visible:E(A),title:a("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>G(void 0),children:e.jsx(Ke,{children:A==null?void 0:A.values.map(({title:t,value:u,type:y},D)=>e.jsx(ee,{type:"viewSmall",label:t,actions:y==="copy"&&e.jsx(Ge,{valueToCopy:u,copiedText:a("copyButton.copiedTooltip"),copyText:a("copyButton.copyTooltip")}),render:()=>e.jsx(W,{variant:"regular",color:Me.gray[900],children:u})},`metadata-${D}`))})})]})};d.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ type?: "text" | "copy"; title: string; value: string }',signature:{properties:[{key:"type",value:{name:"union",raw:'"text" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"copy"'}],required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:'{ type?: "text" | "copy"; title: string; value: string }[]',required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}},purposeLabelOverrides:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"Purpose"},{name:"string"}],raw:"Record<Purpose, string>"}],raw:"Partial<Record<Purpose, string>>"},description:""}}};const Bt={title:"Onboarding/SupportingDocumentCollection",component:d},c=()=>Re.make(n=>{setTimeout(()=>{n(Ue.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),q=()=>{const[n,r]=i.useState([]),l=i.useRef(null);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsxs(m,{title:"Default",children:[e.jsx(d,{ref:l,status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],getPurposeMetadata:g=>({title:"Show metadata",values:[{title:"Purpose",value:g},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),e.jsx(C,{onPress:()=>{l.current!=null&&l.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},I=()=>{const[n,r]=i.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},j=()=>{const[n,r]=i.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>Re.make(l=>{setTimeout(()=>{l(Ue.Ok(void 0))},1e3)})})})})},b=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"PendingReview",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),R=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),U=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),x=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Rejected",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),F=()=>{const[n,r]=i.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},O=()=>e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document",reasonCode:"InvalidDocument"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});q.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};I.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};j.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};b.__docgenInfo={description:"",methods:[],displayName:"Pending"};R.__docgenInfo={description:"",methods:[],displayName:"Approved"};U.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};x.__docgenInfo={description:"",methods:[],displayName:"Rejected"};F.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};O.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};var te,ne,re;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  const ref = useRef<SupportingDocumentCollectionRef<string>>(null);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection ref={ref} status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} getPurposeMetadata={purpose => ({
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
}`,...(re=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,ae;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(ae=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ue,ie,le;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([{
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
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} onRemoveFile={() => Future.make(resolve => {
        setTimeout(() => {
          resolve(Result.Ok(undefined));
        }, 1_000);
      })} />
      </StoryPart>
    </StoryBlock>;
}`,...(le=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,pe,me;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(me=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ce,ge,ye;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(ye=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var fe,we,ve;U.parameters={...U.parameters,docs:{...(fe=U.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(ve=(we=U.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var De,Se,Pe;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(Pe=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var he,ke,qe;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(qe=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var Ie,je,be;O.parameters={...O.parameters,docs:{...(Ie=O.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(be=(je=O.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};const Vt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{R as Approved,U as ApprovedWithoutDownload,b as Pending,F as ReadOnlyEmpty,O as ReadOnlyWithDocs,x as Rejected,q as WaitingForDocument,I as WaitingForDocumentShowIds,j as WaitingForDocumentWithApprovedAndRejected,Vt as __namedExportsOrder,Bt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-DfTZIlwI.js.map
