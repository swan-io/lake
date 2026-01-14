import{Z as Se,y as Pe,p as Z,j as e,B as re,z as q,i as z,S as h,L as B,c as ke,v as je,s as qe,aa as V,ab as L}from"./ScrollView-BfmfrNi8.js";import{L as P,a as oe}from"./LakeButton-BywVy57H.js";import{r as i}from"./iframe-D-DLTBSb.js";import{c as Ie}from"./commonStyles-BBEkV6IC.js";import{L as Re}from"./LakeCopyButton-DUUTSfHC.js";import{L as se}from"./LakeLabel-tXEbcGZn.js";import{R as Fe}from"./ReadOnlyFieldList-DUrZYKRS.js";import{t as o,l as G,m as be,v as xe,i as ue}from"./i18n-CEjCOrWq.js";import{F as Ce}from"./FilesUploader-kR88a8Sw.js";import{L as $}from"./LakeModal-BacDxVW0.js";import{S as m,a as c}from"./_StoriesComponents-BQgZHIc0.js";import"./index-B7qdCGH0.js";import"./Pressable-Dm_UxH86.js";import"./index-D3-XRYQD.js";import"./extends-CF3RwP-h.js";import"./preload-helper-D1IIBeq1.js";import"./clipboard-BXAk6GqW.js";import"./v4-BKrj-4V8.js";import"./Separator-DAyC3Hkd.js";import"./rifm-CKS2PMn4.js";import"./array-BfAlyugE.js";import"./FileInput-BwT8N8ip.js";import"./LakeHeading-V9bthfzT.js";import"./useBoolean-B96q4-7W.js";import"./LakeAlert-_-DCHgGg.js";import"./useResponsive-fophYf0x.js";import"./Tag-Boug3KBV.js";import"./index-B8CLuoLf.js";import"./FocusTrap-DzqGUL-Z.js";import"./Suspendable-Uk14J7-a.js";import"./ResponsiveContainer-DMVJnPJP.js";import"./TransitionView-DuRgTrwD.js";import"./useBodyClassName-BUCiqC_b.js";const ie=i.memo(({ref:n,style:r,onReset:l,onSubmit:k,...I})=>Se("form",{...I,ref:n,onReset:y=>{y.preventDefault(),l?.(y)},onSubmit:y=>{y.preventDefault(),k?.(y)},style:[Ie.view,r]}));ie.displayName="Form";const Ue=["application/pdf","image/png","image/jpeg","image/heic"],H=qe.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),K=n=>q(n).with({type:"tooltip"},({text:r,width:l})=>e.jsx(je,{content:r,width:l,togglableOnFocus:!0,placement:"right",maxWidth:400,children:e.jsx(P,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",disabled:!0,style:[H.button,H.buttonWithDefaultCursor],ariaLabel:o("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:l})=>e.jsx(P,{mode:"secondary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",onPress:l,style:H.button,ariaLabel:o("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),ae=n=>q(n).with("fr",()=>"https://support.swan.io/hc/en-150/articles/22502977563933--Proof-of-registration-for-French-companies").with("it",()=>"https://support.swan.io/hc/en-150/articles/22537604831005--Proof-of-registration-for-Italian-companies").with("de",()=>"https://support.swan.io/hc/en-150/articles/22535023588509--Proof-of-registration-for-German-companies").with("es",()=>"https://support.swan.io/hc/en-150/articles/22544703221021--Proof-of-registration-for-Spanish-companies").with("nl",()=>"https://support.swan.io/hc/en-150/articles/22543228421277--Proof-of-registration-for-Dutch-companies").otherwise(()=>"https://support.swan.io/hc/en-150/articles/22620756787869-Proof-of-company-registration"),Oe=n=>{const r=`supportingDocuments.purpose.${n}`;return ue(r)?o(r):n},Ae=n=>{const r=`supportingDocuments.purpose.${n}.description`;return ue(r)?o(r):""},d=({ref:n,documents:r,generateUpload:l,uploadFile:k,requiredDocumentPurposes:I,templateLanguage:y=G.language,status:le,onChange:de,onRemoveFile:pe,showIds:me=!1,readOnly:_=!1,getPurposeMetadata:ce,readonlyDocumentPurposes:ge=[],purposeLabelOverrides:fe,purposeDescriptionLabelOverrides:ye})=>{const[we,J]=i.useState(!1),[he,Q]=i.useState(!1),[X,Y]=i.useState(void 0),[R,ve]=i.useState([]),ee=i.useMemo(()=>{const t=new Set(I),u=[...R,...r];u.forEach(s=>t.add(s.purpose));const w=new Map([...t].map(s=>{const a=u.filter(p=>p.purpose===s);return[s,a]})),j=new Set(I),v=new Map([...t].map(s=>{const a=w.get(s)??[],D=a.length>0&&a.every(S=>S.file.statusInfo.status==="Validated")?0:j.has(s)?1:2;return[s,D]}));return[...t].sort((s,a)=>{const p=v.get(s)??2;return(v.get(a)??2)>p?-1:1}).map(s=>{const a=w.get(s)??[];return{purpose:s,files:a.map(p=>p.file),isRequired:j.has(s),areAllDocumentsValidated:v.get(s)===0}})},[I,r,R]),N=i.useRef(new Map(Pe.filterMap(ee,({isRequired:t,purpose:u,files:w})=>t?Z.Some([u,w]):Z.None()))),te=i.useRef({});i.useImperativeHandle(n,()=>({areAllRequiredDocumentsFilled:()=>[...N.current.values()].every(u=>u.length>0),addDocument:t=>{ve(u=>[...u,t])}})),i.useEffect(()=>{const t=R[R.length-1];if(t!=null){const u=te.current[t?.purpose];u?.add(t.file)}},[R]);const ne=ee.filter(({files:t})=>!(_&&t.length===0));return e.jsxs(ie,{children:[ne.map(({purpose:t,files:u,areAllDocumentsValidated:w,isRequired:j})=>{const v=ce?.(t),s=ye?.[t]??Ae(t);return e.jsxs(i.Fragment,{children:[e.jsx(se,{label:fe?.[t]??Oe(t),description:s,render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(re,{direction:"row",children:[e.jsx(re,{direction:"row",children:z(v)?t==="CompanyRegistration"?e.jsxs(e.Fragment,{children:[e.jsx(P,{size:"small",mode:"secondary",icon:"question-circle-regular",onPress:()=>window.open(ae(G.language)),ariaLabel:o("supportingDocuments.help.howToSendAGoodDocument"),children:o("supportingDocuments.help.howToSendAGoodDocument")}),e.jsx(h,{width:8})]}):e.jsxs(e.Fragment,{children:[e.jsx(K,{type:"button",label:v.title,onPress:()=>Y(v)}),e.jsx(h,{width:8})]}):q(t).with("CompanyRegistration",()=>e.jsx(P,{size:"small",mode:"secondary",icon:"question-circle-regular",onPress:()=>window.open(ae(G.language)),ariaLabel:o("supportingDocuments.help.howToSendAGoodDocument"),children:o("supportingDocuments.help.howToSendAGoodDocument")})).otherwise(()=>null)}),q(t).with("PowerOfAttorney",()=>e.jsx(K,{type:"button",icon:"arrow-down-filled",label:o("supportingDocuments.help.downloadTemplate"),onPress:()=>J(!0)})).with("SwornStatement",()=>e.jsx(K,{type:"button",icon:"arrow-down-filled",label:o("supportingDocuments.help.downloadTemplate"),onPress:()=>Q(!0)})).otherwise(()=>null)]}),e.jsx(h,{height:16}),e.jsx(Ce,{ref:a=>{te.current[t]=a},canUpload:!ge.includes(t)&&!_&&le==="WaitingForDocument"&&!w,accept:Ue,maxSize:2e7,icon:"document-regular",initialFiles:u,generateUpload:l,getUploadConfig:a=>({fileName:a.name,purpose:t}),uploadFile:z(k)?k:({upload:a,file:p,onProgress:D})=>{const S=new FormData;return a.fields.forEach(({key:E,value:M})=>S.append(E,M)),S.append("file",p),setTimeout(()=>D(.8),100),be.make({url:a.url,method:"POST",body:S,type:"text"}).mapOkToResult(xe)},formatAndSizeDescription:o("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:_?void 0:pe,onChange:a=>{if(j){N.current.set(t,a);const p=N.current.entries().reduce((D,[S,E])=>{const M=E.map(De=>({purpose:S,file:De}));return D.push(...M),D},[]);de?.(p)}},showIds:me})]})}),e.jsx(h,{height:24})]},t)}),ne.length===0?e.jsxs(e.Fragment,{children:[e.jsx(h,{height:24}),e.jsx(B,{align:"center",children:o("supportingDocuments.noDocuments")}),e.jsx(h,{height:24})]}):null,e.jsxs($,{visible:we,title:o("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>J(!1),children:[e.jsx(B,{children:o("supportingDocuments.powerOfAttorneyModal.description")}),e.jsx(h,{height:16}),e.jsx(oe,{paddingBottom:0,children:e.jsx(P,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${q(y).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`),children:o("supportingDocuments.downloadTemplate")})})]}),e.jsxs($,{visible:he,title:o("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>Q(!1),children:[e.jsx(B,{children:o("supportingDocuments.purpose.SwornStatement.description")}),e.jsx(h,{height:16}),e.jsx(oe,{paddingBottom:0,children:e.jsx(P,{grow:!0,color:"current",onPress:()=>{window.open(`/sworn-statement-template/${q(y).with("nl",()=>"nl").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`)},children:o("supportingDocuments.downloadTemplate")})})]}),e.jsx($,{visible:z(X),title:o("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>Y(void 0),children:e.jsx(Fe,{children:X?.values.map(({title:t,value:u,type:w},j)=>e.jsx(se,{type:"viewSmall",label:t,actions:w==="copy"&&e.jsx(Re,{valueToCopy:u,copiedText:o("copyButton.copiedTooltip"),copyText:o("copyButton.copyTooltip")}),render:()=>e.jsx(B,{variant:"regular",color:ke.gray[900],children:u})},`metadata-${j}`))})})]})};d.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ type?: "text" | "copy"; title: string; value: string }',signature:{properties:[{key:"type",value:{name:"union",raw:'"text" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"copy"'}],required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:'{ type?: "text" | "copy"; title: string; value: string }[]',required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}},purposeLabelOverrides:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"Purpose"},{name:"string"}],raw:"Record<Purpose, string>"}],raw:"Partial<Record<Purpose, string>>"},description:""},purposeDescriptionLabelOverrides:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"Purpose"},{name:"string"}],raw:"Record<Purpose, string>"}],raw:"Partial<Record<Purpose, string>>"},description:""}}};const ft={title:"Onboarding/SupportingDocumentCollection",component:d},g=()=>V.make(n=>{setTimeout(()=>{n(L.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),f=n=>V.make(r=>{setTimeout(()=>{r(L.Ok({headers:new Headers,status:200,ok:!0,url:"",response:Z.None()}))},500)}),Te=n=>V.value(L.Ok(void 0)),F=()=>{const[n,r]=i.useState([]),l=i.useRef(null);return e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsxs(c,{title:"Default",children:[e.jsx(d,{ref:l,status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:n,onChange:r,onRemoveFile:Te,requiredDocumentPurposes:["CompanyRegistration","ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],getPurposeMetadata:k=>({title:"Show metadata",values:[{title:"Purpose",value:k},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),e.jsx(P,{onPress:()=>{l.current!=null&&l.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},b=()=>{const[n,r]=i.useState([]);return e.jsx(m,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:n,onChange:r,requiredDocumentPurposes:["CompanyRegistration","ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},x=()=>{const[n,r]=i.useState([{purpose:"CompanyRegistration",file:{id:"id",name:"CompanyRegistration.pdf",statusInfo:{status:"Validated"}}},{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:n,onChange:r,requiredDocumentPurposes:["CompanyRegistration","ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>V.make(l=>{setTimeout(()=>{l(L.Ok(void 0))},1e3)})})})})},C=()=>e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"PendingReview",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),U=()=>e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),O=()=>e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),A=()=>e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"Rejected",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),T=()=>{const[n,r]=i.useState([]);return e.jsx(m,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:n,onChange:r,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},W=()=>e.jsx(m,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document",reasonCode:"InvalidDocument"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});F.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};b.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};x.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};C.__docgenInfo={description:"",methods:[],displayName:"Pending"};U.__docgenInfo={description:"",methods:[],displayName:"Approved"};O.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};A.__docgenInfo={description:"",methods:[],displayName:"Rejected"};T.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};W.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  const ref = useRef<SupportingDocumentCollectionRef<string>>(null);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection ref={ref} status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} onRemoveFile={onRemoveFile} requiredDocumentPurposes={["CompanyRegistration", "ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} getPurposeMetadata={purpose => ({
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
}`,...F.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["CompanyRegistration", "ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
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
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["CompanyRegistration", "ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} onRemoveFile={() => Future.make(resolve => {
        setTimeout(() => {
          resolve(Result.Ok(undefined));
        }, 1_000);
      })} />
      </StoryPart>
    </StoryBlock>;
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...C.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...U.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
      }]} onChange={() => {}} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...W.parameters?.docs?.source}}};const yt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{U as Approved,O as ApprovedWithoutDownload,C as Pending,T as ReadOnlyEmpty,W as ReadOnlyWithDocs,A as Rejected,F as WaitingForDocument,b as WaitingForDocumentShowIds,x as WaitingForDocumentWithApprovedAndRejected,yt as __namedExportsOrder,ft as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-C6Mt1s_2.js.map
