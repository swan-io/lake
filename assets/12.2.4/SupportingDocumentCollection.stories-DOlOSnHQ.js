import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as Le,F as Me,p as Z,z as $,i as N,S as k,L as W,c as ze,n as $e,s as He,H as Ue,G as xe}from"./ScrollView-CRqCiH49.js";import{a as ee,L as O}from"./LakeButton-Y2oJasCQ.js";import{r as i}from"./index-D9D9kDko.js";import{c as Ge}from"./commonStyles-BBEkV6IC.js";import{L as Ke}from"./LakeCopyButton-Cq417N7d.js";import{L as te}from"./LakeLabel-Ciqqncmo.js";import{R as Je}from"./ReadOnlyFieldList-DNQG8A-3.js";import{t as s,m as Qe,v as Xe,l as Ye,i as Fe}from"./i18n-BoebYzDL.js";import{F as Ze}from"./FilesUploader-ByoLwzwz.js";import{L}from"./LakeModal-CK2I_8Ut.js";import{S as p,a as m}from"./_StoriesComponents-BJjd_5r-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D0hBKHsB.js";import"./Pressable-D0TQHTzC.js";import"./index-X5c_aylL.js";import"./extends-CF3RwP-h.js";import"./clipboard-BXAk6GqW.js";import"./v4-C6aID195.js";import"./Separator-Bkm-h-Cw.js";import"./rifm-B2FFccIi.js";import"./utc-JZaFi-_r.js";import"./array-BfAlyugE.js";import"./FileInput-CH-_FbYr.js";import"./LakeHeading-Qdhbqsm6.js";import"./useBoolean-CLEWiLu4.js";import"./LakeAlert-D_6gK0uR.js";import"./useResponsive-DVbm4z6j.js";import"./Tag-BORgG-Pn.js";import"./index-uPcVX-2d.js";import"./FocusTrap-D6KQDOaF.js";import"./Suspendable-DyCjnnoj.js";import"./ResponsiveContainer-Dsj4u0f5.js";import"./TransitionView-CIer91hl.js";import"./useBodyClassName-CPyC-r4W.js";const Ce=i.memo(({ref:n,style:r,onReset:l,onSubmit:g,...S})=>Le("form",{...S,ref:n,onReset:w=>{w.preventDefault(),l==null||l(w)},onSubmit:w=>{w.preventDefault(),g==null||g(w)},style:[Ge.view,r]}));Ce.displayName="Form";const et=["application/pdf","image/png","image/jpeg","image/heic"],M=He.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),z=n=>$(n).with({type:"tooltip"},({text:r,width:l})=>e.jsx($e,{content:r,width:l,togglableOnFocus:!0,placement:"right",maxWidth:400,children:e.jsx(O,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",disabled:!0,style:[M.button,M.buttonWithDefaultCursor],ariaLabel:s("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:l})=>e.jsx(O,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",onPress:l,style:M.button,ariaLabel:s("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),tt=n=>{const r=`supportingDocuments.purpose.${n}`;return Fe(r)?s(r):n},nt=n=>{const r=`supportingDocuments.purpose.${n}.description`;return Fe(r)?s(r):""},d=({ref:n,documents:r,generateUpload:l,uploadFile:g,requiredDocumentPurposes:S,templateLanguage:w=Ye.language,status:Oe,onRemoveFile:Ae,showIds:Te=!1,readOnly:B=!1,getPurposeMetadata:V,readonlyDocumentPurposes:We=[],purposeLabelOverrides:_,purposeDescriptionLabelOverrides:E})=>{const[Be,H]=i.useState(!1),[Ve,G]=i.useState(!1),[A,K]=i.useState(void 0),[P,_e]=i.useState([]),J=i.useMemo(()=>{const t=new Set(S),u=[...P,...r];u.forEach(o=>t.add(o.purpose));const y=new Map([...t].map(o=>{const a=u.filter(f=>f.purpose===o);return[o,a]})),D=new Set(S),v=new Map([...t].map(o=>{const a=y.get(o)??[],T=a.length>0&&a.every(h=>h.file.statusInfo.status==="Validated")?0:D.has(o)?1:2;return[o,T]}));return[...t].sort((o,a)=>{const f=v.get(o)??2;return(v.get(a)??2)>f?-1:1}).map(o=>{const a=y.get(o)??[];return{purpose:o,files:a.map(f=>f.file),isRequired:D.has(o),areAllDocumentsValidated:v.get(o)===0}})},[S,r,P]),Q=i.useRef(new Map(Me.filterMap(J,({isRequired:t,purpose:u,files:y})=>t?Z.Some([u,y]):Z.None()))),X=i.useRef({});i.useImperativeHandle(n,()=>({areAllRequiredDocumentsFilled:()=>[...Q.current.values()].every(u=>u.length>0),addDocument:t=>{_e(u=>[...u,t])}})),i.useEffect(()=>{const t=P[P.length-1];if(t!=null){const u=X.current[t==null?void 0:t.purpose];u!=null&&u.add(t.file)}},[P]);const Y=J.filter(({files:t})=>!(B&&t.length===0));return e.jsxs(Ce,{children:[Y.map(({purpose:t,files:u,areAllDocumentsValidated:y,isRequired:D})=>{const v=V==null?void 0:V(t),o=(E==null?void 0:E[t])??nt(t);return e.jsxs(i.Fragment,{children:[e.jsx(te,{label:(_==null?void 0:_[t])??tt(t),description:o,help:N(v)?e.jsx(z,{type:"button",label:v.title,onPress:()=>K(v)}):$(t).with("PowerOfAttorney",()=>e.jsx(z,{type:"button",icon:"arrow-down-filled",label:s("supportingDocuments.help.downloadTemplate"),onPress:()=>H(!0)})).with("SwornStatement",()=>e.jsx(z,{type:"button",icon:"arrow-down-filled",label:s("supportingDocuments.help.downloadTemplate"),onPress:()=>G(!0)})).otherwise(()=>null),render:()=>e.jsx(Ze,{ref:a=>{X.current[t]=a},canUpload:!We.includes(t)&&!B&&Oe==="WaitingForDocument"&&!y,accept:et,maxSize:2e7,icon:"document-regular",initialFiles:u,generateUpload:l,getUploadConfig:a=>({fileName:a.name,purpose:t}),uploadFile:N(g)?g:({upload:a,file:f,onProgress:T})=>{const h=new FormData;return a.fields.forEach(({key:Ee,value:Ne})=>h.append(Ee,Ne)),h.append("file",f),setTimeout(()=>T(.8),100),Qe.make({url:a.url,method:"POST",body:h,type:"text"}).mapOkToResult(Xe)},formatAndSizeDescription:s("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:B?void 0:Ae,onChange:a=>{D&&Q.current.set(t,a)},showIds:Te})}),e.jsx(k,{height:24})]},t)}),Y.length===0?e.jsxs(e.Fragment,{children:[e.jsx(k,{height:24}),e.jsx(W,{align:"center",children:s("supportingDocuments.noDocuments")}),e.jsx(k,{height:24})]}):null,e.jsxs(L,{visible:Be,title:s("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>H(!1),children:[e.jsx(W,{children:s("supportingDocuments.powerOfAttorneyModal.description")}),e.jsx(k,{height:16}),e.jsx(ee,{paddingBottom:0,children:e.jsx(O,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${$(w).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:s("supportingDocuments.downloadTemplate")})})]}),e.jsxs(L,{visible:Ve,title:s("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>G(!1),children:[e.jsx(W,{children:s("supportingDocuments.purpose.SwornStatement.description")}),e.jsx(k,{height:16}),e.jsx(ee,{paddingBottom:0,children:e.jsx(O,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:s("supportingDocuments.downloadTemplate")})})]}),e.jsx(L,{visible:N(A),title:s("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>K(void 0),children:e.jsx(Je,{children:A==null?void 0:A.values.map(({title:t,value:u,type:y},D)=>e.jsx(te,{type:"viewSmall",label:t,actions:y==="copy"&&e.jsx(Ke,{valueToCopy:u,copiedText:s("copyButton.copiedTooltip"),copyText:s("copyButton.copyTooltip")}),render:()=>e.jsx(W,{variant:"regular",color:ze.gray[900],children:u})},`metadata-${D}`))})})]})};d.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ type?: "text" | "copy"; title: string; value: string }',signature:{properties:[{key:"type",value:{name:"union",raw:'"text" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"copy"'}],required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:'{ type?: "text" | "copy"; title: string; value: string }[]',required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}},purposeLabelOverrides:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"Purpose"},{name:"string"}],raw:"Record<Purpose, string>"}],raw:"Partial<Record<Purpose, string>>"},description:""},purposeDescriptionLabelOverrides:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"Purpose"},{name:"string"}],raw:"Record<Purpose, string>"}],raw:"Partial<Record<Purpose, string>>"},description:""}}};const Vt={title:"Onboarding/SupportingDocumentCollection",component:d},c=()=>Ue.make(n=>{setTimeout(()=>{n(xe.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),q=()=>{const[n,r]=i.useState([]),l=i.useRef(null);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsxs(m,{title:"Default",children:[e.jsx(d,{ref:l,status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],getPurposeMetadata:g=>({title:"Show metadata",values:[{title:"Purpose",value:g},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),e.jsx(O,{onPress:()=>{l.current!=null&&l.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},I=()=>{const[n,r]=i.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},j=()=>{const[n,r]=i.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>Ue.make(l=>{setTimeout(()=>{l(xe.Ok(void 0))},1e3)})})})})},R=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"PendingReview",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),b=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),U=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),x=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Rejected",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),F=()=>{const[n,r]=i.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},C=()=>e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document",reasonCode:"InvalidDocument"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});q.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};I.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};j.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};R.__docgenInfo={description:"",methods:[],displayName:"Pending"};b.__docgenInfo={description:"",methods:[],displayName:"Approved"};U.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};x.__docgenInfo={description:"",methods:[],displayName:"Rejected"};F.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};C.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};var ne,re,oe;q.parameters={...q.parameters,docs:{...(ne=q.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(oe=(re=q.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ae,se,ue;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(ue=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var ie,le,de;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(de=(le=j.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,me,ce;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(ce=(me=R.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ge,ye,fe;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(fe=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var we,ve,De;U.parameters={...U.parameters,docs:{...(we=U.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(De=(ve=U.parameters)==null?void 0:ve.docs)==null?void 0:De.source}}};var Se,Pe,he;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(he=(Pe=x.parameters)==null?void 0:Pe.docs)==null?void 0:he.source}}};var ke,qe,Ie;F.parameters={...F.parameters,docs:{...(ke=F.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(Ie=(qe=F.parameters)==null?void 0:qe.docs)==null?void 0:Ie.source}}};var je,Re,be;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(be=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:be.source}}};const _t=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{b as Approved,U as ApprovedWithoutDownload,R as Pending,F as ReadOnlyEmpty,C as ReadOnlyWithDocs,x as Rejected,q as WaitingForDocument,I as WaitingForDocumentShowIds,j as WaitingForDocumentWithApprovedAndRejected,_t as __namedExportsOrder,Vt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-DOlOSnHQ.js.map
