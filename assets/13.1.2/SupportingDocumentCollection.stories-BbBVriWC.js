import{$ as ye,y as fe,p as Q,j as e,z as W,i as V,S as k,L as T,c as we,q as ve,s as De,aa as Z,ab as ee}from"./ScrollView-DeWtwbPI.js";import{a as X,L as C}from"./LakeButton-8LlWJ5hJ.js";import{r as i}from"./iframe-Dpc67WF2.js";import{c as Se}from"./commonStyles-BBEkV6IC.js";import{L as Pe}from"./LakeCopyButton-CRB1fCT9.js";import{L as Y}from"./LakeLabel-YrQ-tsS4.js";import{R as he}from"./ReadOnlyFieldList-8qJjLbsi.js";import{t as a,m as ke,v as qe,l as Ie,i as te}from"./i18n-BdbfOgHW.js";import{F as je}from"./FilesUploader-BZaSz7N2.js";import{L as _}from"./LakeModal-_N1GkeEv.js";import{S as p,a as m}from"./_StoriesComponents-2XciD13U.js";import"./index-CxhORwQH.js";import"./Pressable-CXYoZQ0e.js";import"./index-DWs5fm0p.js";import"./extends-CF3RwP-h.js";import"./preload-helper-D1IIBeq1.js";import"./clipboard-BXAk6GqW.js";import"./v4-BKrj-4V8.js";import"./Separator-Dc-bSPrm.js";import"./rifm-T5a9G4qV.js";import"./array-BfAlyugE.js";import"./FileInput-CxQr7qTB.js";import"./LakeHeading-D2L1kO7j.js";import"./useBoolean-BnPR7kDP.js";import"./LakeAlert-CWZIy9Gt.js";import"./useResponsive-CpbCXBaN.js";import"./Tag-0pxuYzD9.js";import"./index-BA_g_zOt.js";import"./FocusTrap-8Z4U3S_G.js";import"./Suspendable-CaknEM_W.js";import"./ResponsiveContainer-XhYsK0Y8.js";import"./TransitionView-V_M2Ifwi.js";import"./useBodyClassName-DNupaTUG.js";const ne=i.memo(({ref:n,style:r,onReset:l,onSubmit:v,...S})=>ye("form",{...S,ref:n,onReset:g=>{g.preventDefault(),l?.(g)},onSubmit:g=>{g.preventDefault(),v?.(g)},style:[Se.view,r]}));ne.displayName="Form";const be=["application/pdf","image/png","image/jpeg","image/heic"],L=De.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),E=n=>W(n).with({type:"tooltip"},({text:r,width:l})=>e.jsx(ve,{content:r,width:l,togglableOnFocus:!0,placement:"right",maxWidth:400,children:e.jsx(C,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",disabled:!0,style:[L.button,L.buttonWithDefaultCursor],ariaLabel:a("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:l})=>e.jsx(C,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",onPress:l,style:L.button,ariaLabel:a("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),Re=n=>{const r=`supportingDocuments.purpose.${n}`;return te(r)?a(r):n},Ue=n=>{const r=`supportingDocuments.purpose.${n}.description`;return te(r)?a(r):""},d=({ref:n,documents:r,generateUpload:l,uploadFile:v,requiredDocumentPurposes:S,templateLanguage:g=Ie.language,status:re,onRemoveFile:oe,showIds:se=!1,readOnly:B=!1,getPurposeMetadata:ae,readonlyDocumentPurposes:ue=[],purposeLabelOverrides:ie,purposeDescriptionLabelOverrides:le})=>{const[de,N]=i.useState(!1),[pe,M]=i.useState(!1),[z,$]=i.useState(void 0),[P,me]=i.useState([]),H=i.useMemo(()=>{const t=new Set(S),u=[...P,...r];u.forEach(o=>t.add(o.purpose));const y=new Map([...t].map(o=>{const s=u.filter(f=>f.purpose===o);return[o,s]})),D=new Set(S),w=new Map([...t].map(o=>{const s=y.get(o)??[],A=s.length>0&&s.every(h=>h.file.statusInfo.status==="Validated")?0:D.has(o)?1:2;return[o,A]}));return[...t].sort((o,s)=>{const f=w.get(o)??2;return(w.get(s)??2)>f?-1:1}).map(o=>{const s=y.get(o)??[];return{purpose:o,files:s.map(f=>f.file),isRequired:D.has(o),areAllDocumentsValidated:w.get(o)===0}})},[S,r,P]),G=i.useRef(new Map(fe.filterMap(H,({isRequired:t,purpose:u,files:y})=>t?Q.Some([u,y]):Q.None()))),K=i.useRef({});i.useImperativeHandle(n,()=>({areAllRequiredDocumentsFilled:()=>[...G.current.values()].every(u=>u.length>0),addDocument:t=>{me(u=>[...u,t])}})),i.useEffect(()=>{const t=P[P.length-1];if(t!=null){const u=K.current[t?.purpose];u?.add(t.file)}},[P]);const J=H.filter(({files:t})=>!(B&&t.length===0));return e.jsxs(ne,{children:[J.map(({purpose:t,files:u,areAllDocumentsValidated:y,isRequired:D})=>{const w=ae?.(t),o=le?.[t]??Ue(t);return e.jsxs(i.Fragment,{children:[e.jsx(Y,{label:ie?.[t]??Re(t),description:o,help:V(w)?e.jsx(E,{type:"button",label:w.title,onPress:()=>$(w)}):W(t).with("PowerOfAttorney",()=>e.jsx(E,{type:"button",icon:"arrow-down-filled",label:a("supportingDocuments.help.downloadTemplate"),onPress:()=>N(!0)})).with("SwornStatement",()=>e.jsx(E,{type:"button",icon:"arrow-down-filled",label:a("supportingDocuments.help.downloadTemplate"),onPress:()=>M(!0)})).otherwise(()=>null),render:()=>e.jsx(je,{ref:s=>{K.current[t]=s},canUpload:!ue.includes(t)&&!B&&re==="WaitingForDocument"&&!y,accept:be,maxSize:2e7,icon:"document-regular",initialFiles:u,generateUpload:l,getUploadConfig:s=>({fileName:s.name,purpose:t}),uploadFile:V(v)?v:({upload:s,file:f,onProgress:A})=>{const h=new FormData;return s.fields.forEach(({key:ce,value:ge})=>h.append(ce,ge)),h.append("file",f),setTimeout(()=>A(.8),100),ke.make({url:s.url,method:"POST",body:h,type:"text"}).mapOkToResult(qe)},formatAndSizeDescription:a("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:B?void 0:oe,onChange:s=>{D&&G.current.set(t,s)},showIds:se})}),e.jsx(k,{height:24})]},t)}),J.length===0?e.jsxs(e.Fragment,{children:[e.jsx(k,{height:24}),e.jsx(T,{align:"center",children:a("supportingDocuments.noDocuments")}),e.jsx(k,{height:24})]}):null,e.jsxs(_,{visible:de,title:a("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>N(!1),children:[e.jsx(T,{children:a("supportingDocuments.powerOfAttorneyModal.description")}),e.jsx(k,{height:16}),e.jsx(X,{paddingBottom:0,children:e.jsx(C,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${W(g).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`),children:a("supportingDocuments.downloadTemplate")})})]}),e.jsxs(_,{visible:pe,title:a("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>M(!1),children:[e.jsx(T,{children:a("supportingDocuments.purpose.SwornStatement.description")}),e.jsx(k,{height:16}),e.jsx(X,{paddingBottom:0,children:e.jsx(C,{grow:!0,color:"current",onPress:()=>{window.open(`/sworn-statement-template/${W(g).with("nl",()=>"nl").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`)},children:a("supportingDocuments.downloadTemplate")})})]}),e.jsx(_,{visible:V(z),title:a("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>$(void 0),children:e.jsx(he,{children:z?.values.map(({title:t,value:u,type:y},D)=>e.jsx(Y,{type:"viewSmall",label:t,actions:y==="copy"&&e.jsx(Pe,{valueToCopy:u,copiedText:a("copyButton.copiedTooltip"),copyText:a("copyButton.copyTooltip")}),render:()=>e.jsx(T,{variant:"regular",color:we.gray[900],children:u})},`metadata-${D}`))})})]})};d.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ type?: "text" | "copy"; title: string; value: string }',signature:{properties:[{key:"type",value:{name:"union",raw:'"text" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"copy"'}],required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:'{ type?: "text" | "copy"; title: string; value: string }[]',required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}},purposeLabelOverrides:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"Purpose"},{name:"string"}],raw:"Record<Purpose, string>"}],raw:"Partial<Record<Purpose, string>>"},description:""},purposeDescriptionLabelOverrides:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"Purpose"},{name:"string"}],raw:"Record<Purpose, string>"}],raw:"Partial<Record<Purpose, string>>"},description:""}}};const lt={title:"Onboarding/SupportingDocumentCollection",component:d},c=()=>Z.make(n=>{setTimeout(()=>{n(ee.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),q=()=>{const[n,r]=i.useState([]),l=i.useRef(null);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsxs(m,{title:"Default",children:[e.jsx(d,{ref:l,status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],getPurposeMetadata:v=>({title:"Show metadata",values:[{title:"Purpose",value:v},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),e.jsx(C,{onPress:()=>{l.current!=null&&l.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},I=()=>{const[n,r]=i.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},j=()=>{const[n,r]=i.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>Z.make(l=>{setTimeout(()=>{l(ee.Ok(void 0))},1e3)})})})})},b=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"PendingReview",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),R=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),U=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),x=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Rejected",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),O=()=>{const[n,r]=i.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},F=()=>e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document",reasonCode:"InvalidDocument"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});q.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};I.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};j.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};b.__docgenInfo={description:"",methods:[],displayName:"Pending"};R.__docgenInfo={description:"",methods:[],displayName:"Approved"};U.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};x.__docgenInfo={description:"",methods:[],displayName:"Rejected"};O.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};F.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...O.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};const dt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{R as Approved,U as ApprovedWithoutDownload,b as Pending,O as ReadOnlyEmpty,F as ReadOnlyWithDocs,x as Rejected,q as WaitingForDocument,I as WaitingForDocumentShowIds,j as WaitingForDocumentWithApprovedAndRejected,dt as __namedExportsOrder,lt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-BbBVriWC.js.map
