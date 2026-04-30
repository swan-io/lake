import{D as Pe,y as ke,p as Q,j as e,B as se,g as K,S as P,M as j,L,c as be,z as m,ac as Ie,s as je,P as _,k as V}from"./ScrollView-Dv8w-9OV.js";import{a as b,L as ae}from"./LakeButton-BIom3IYe.js";import{r as a}from"./iframe-ys0c0jGh.js";import{c as qe}from"./commonStyles-BBEkV6IC.js";import{L as Fe}from"./LakeCopyButton-KQf_EFYr.js";import{L as ie}from"./LakeLabel-B_YUSCMS.js";import{R as Re}from"./ReadOnlyFieldList-D-VCcfOr.js";import{t as s,l as z,m as Ae,v as Ce,i as le}from"./i18n-DS5tOdzk.js";import{F as xe}from"./FilesUploader-MZzBiQqG.js";import{L as G}from"./LakeModal-Cv0puLth.js";import{S as g,a as y}from"./_StoriesComponents-B18HSXdP.js";import"./index-Ca8rk5YK.js";import"./Pressable-D-OgD9fY.js";import"./index-CJ8JkiBE.js";import"./extends-CF3RwP-h.js";import"./preload-helper-D1IIBeq1.js";import"./clipboard-BXAk6GqW.js";import"./v4-EwEgHOG0.js";import"./Separator-C6FrzW4V.js";import"./rifm-e2fdROZS.js";import"./array-BfAlyugE.js";import"./FileInput-DnyisQVN.js";import"./LakeHeading-Cpib5COF.js";import"./useBoolean-hrYveTXR.js";import"./LakeAlert-DNFMVoc2.js";import"./useResponsive-lMfpn9_7.js";import"./Tag-B931vVS7.js";import"./index-dVJHGmBV.js";import"./FocusTrap-BsZTMoeN.js";import"./Suspendable-CsYhlDS3.js";import"./ResponsiveContainer-BG-E2R-G.js";import"./TransitionView-CXyx_QB0.js";import"./useBodyClassName-BOe57oWI.js";const pe=a.memo(({ref:t,style:r,onReset:u,onSubmit:w,...l})=>Pe("form",{...l,ref:t,onReset:v=>{v.preventDefault(),u?.(v)},onSubmit:v=>{v.preventDefault(),w?.(v)},style:[qe.view,r]}));pe.displayName="Form";const Ue=["application/pdf","image/png","image/jpeg","image/heic"],H=je.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),J=t=>j(t).with({type:"tooltip"},({text:r,width:u})=>e.jsx(Ie,{content:r,width:u,togglableOnFocus:!0,placement:"right",maxWidth:400,children:e.jsx(b,{mode:"tertiary",size:"small",color:"gray",icon:t.icon??"question-circle-regular",disabled:!0,style:[H.button,H.buttonWithDefaultCursor],ariaLabel:s("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:u})=>e.jsx(b,{mode:"secondary",size:"small",color:"gray",icon:t.icon??"question-circle-regular",onPress:u,style:H.button,ariaLabel:s("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),ue=(t,r)=>j({language:t,country:r}).with(m.union({country:"FRA"},{country:m.nullish,language:"fr"}),()=>`https://support.swan.io/hc/${t}/articles/22502977563933`).with(m.union({country:"ITA"},{country:m.nullish,language:"it"}),()=>`https://support.swan.io/hc/${t}/articles/22537604831005`).with(m.union({country:"DEU"},{country:m.nullish,language:"de"}),()=>`https://support.swan.io/hc/${t}/articles/22535023588509`).with(m.union({country:"ESP"},{country:m.nullish,language:"es"}),()=>`https://support.swan.io/hc/${t}/articles/22544703221021`).with(m.union({country:"NLD"},{country:m.nullish,language:"nl"}),()=>`https://support.swan.io/hc/${t}/articles/22543228421277`).with(m.union({country:"BEL"}),()=>`https://support.swan.io/hc/${t}/articles/31233251462173`).otherwise(()=>"https://support.swan.io/hc/en-150/articles/22620756787869-Proof-of-company-registration"),Oe=t=>{const r=`supportingDocuments.purpose.${t}`;return le(r)?s(r):t},Te=t=>{const r=`supportingDocuments.purpose.${t}.description`;return le(r)?s(r):""},d=({ref:t,documents:r,generateUpload:u,uploadFile:w,requiredDocumentPurposes:l,templateLanguage:v=z.language,status:ce,onChange:me,onRemoveFile:ge,showIds:ye=!1,readOnly:N=!1,getPurposeMetadata:fe,companyCountry:X,readonlyDocumentPurposes:he=[]})=>{const[we,Y]=a.useState(!1),[ve,Z]=a.useState(!1),[ee,te]=a.useState(void 0),[q,De]=a.useState([]),ne=a.useMemo(()=>{const n=new Set(Object.keys(l)),i=[...q,...r];i.forEach(o=>n.add(o.purpose));const D=new Map([...n].map(o=>{const p=i.filter(c=>c.purpose===o);return[o,p]})),I=new Set(Object.keys(l)),k=new Map([...n].map(o=>{const p=D.get(o)??[],S=p.length>0&&p.every(F=>F.file.statusInfo.status==="Validated")?0:I.has(o)?1:2;return[o,S]}));return[...n].sort((o,p)=>{const c=k.get(o)??2;return(k.get(p)??2)>c?-1:1}).map(o=>{const p=D.get(o)??[];return{purpose:o,files:p.map(c=>c.file),isRequired:I.has(o),areAllDocumentsValidated:k.get(o)===0}})},[l,r,q]),M=a.useRef(new Map(ke.filterMap(ne,({isRequired:n,purpose:i,files:D})=>n?Q.Some([i,D]):Q.None()))),re=a.useRef({});a.useImperativeHandle(t,()=>({areAllRequiredDocumentsFilled:()=>[...M.current.values()].every(i=>i.length>0),addDocument:n=>{De(i=>[...i,n])}})),a.useEffect(()=>{const n=q[q.length-1];if(n!=null){const i=re.current[n?.purpose];i?.add(n.file)}},[q]);const oe=ne.filter(({files:n})=>!(N&&n.length===0));return e.jsxs(pe,{children:[oe.map(({purpose:n,files:i,areAllDocumentsValidated:D,isRequired:I})=>{const k=fe?.(n);return e.jsxs(a.Fragment,{children:[e.jsx(ie,{label:l[n]?.label??Oe(n),description:l[n]?.purposeDetails??l[n]?.description??Te(n),render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(se,{direction:"row",children:[e.jsx(se,{direction:"row",children:K(k)?n==="CompanyRegistration"?e.jsxs(e.Fragment,{children:[e.jsx(b,{size:"small",mode:"secondary",icon:"question-circle-regular",onPress:()=>window.open(ue(z.language,X)),ariaLabel:s("supportingDocuments.help.howToSendAGoodDocument"),children:s("supportingDocuments.help.howToSendAGoodDocument")}),e.jsx(P,{width:8})]}):e.jsxs(e.Fragment,{children:[e.jsx(J,{type:"button",label:k.title,onPress:()=>te(k)}),e.jsx(P,{width:8})]}):j(n).with("CompanyRegistration",()=>e.jsx(b,{size:"small",mode:"secondary",icon:"question-circle-regular",onPress:()=>window.open(ue(z.language,X)),ariaLabel:s("supportingDocuments.help.howToSendAGoodDocument"),children:s("supportingDocuments.help.howToSendAGoodDocument")})).otherwise(()=>null)}),j(n).with("PowerOfAttorney",()=>e.jsx(J,{type:"button",icon:"arrow-down-filled",label:s("supportingDocuments.help.downloadTemplate"),onPress:()=>Y(!0)})).with("SwornStatement",()=>e.jsx(J,{type:"button",icon:"arrow-down-filled",label:s("supportingDocuments.help.downloadTemplate"),onPress:()=>Z(!0)})).otherwise(()=>null)]}),e.jsx(P,{height:16}),e.jsx(xe,{ref:o=>{re.current[n]=o},canUpload:!he.includes(n)&&!N&&ce==="WaitingForDocument"&&!D,accept:Ue,maxSize:2e7,icon:"document-regular",initialFiles:i,generateUpload:u,getUploadConfig:o=>({fileName:o.name,purpose:n}),uploadFile:K(w)?w:({upload:o,file:p,onProgress:c})=>{const S=new FormData;return o.fields.forEach(({key:F,value:$})=>S.append(F,$)),S.append("file",p),setTimeout(()=>c(.8),100),Ae.make({url:o.url,method:"POST",body:S,type:"text"}).mapOkToResult(Ce)},formatAndSizeDescription:s("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:N?void 0:ge,onChange:o=>{if(I){M.current.set(n,o);const p=M.current.entries().reduce((c,[S,F])=>{const $=F.map(Se=>({purpose:S,file:Se}));return c.push(...$),c},[]);me?.(p)}},showIds:ye})]})}),e.jsx(P,{height:24})]},n)}),oe.length===0?e.jsxs(e.Fragment,{children:[e.jsx(P,{height:24}),e.jsx(L,{align:"center",children:s("supportingDocuments.noDocuments")}),e.jsx(P,{height:24})]}):null,e.jsxs(G,{visible:we,title:s("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>Y(!1),children:[e.jsx(L,{children:s("supportingDocuments.powerOfAttorneyModal.description")}),e.jsx(P,{height:16}),e.jsx(ae,{paddingBottom:0,children:e.jsx(b,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${j(v).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`),children:s("supportingDocuments.downloadTemplate")})})]}),e.jsxs(G,{visible:ve,title:s("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>Z(!1),children:[e.jsx(L,{children:s("supportingDocuments.purpose.SwornStatement.description")}),e.jsx(P,{height:16}),e.jsx(ae,{paddingBottom:0,children:e.jsx(b,{grow:!0,color:"current",onPress:()=>{window.open(`/sworn-statement-template/${j(v).with("nl",()=>"nl").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`)},children:s("supportingDocuments.downloadTemplate")})})]}),e.jsx(G,{visible:K(ee),title:s("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>te(void 0),children:e.jsx(Re,{children:ee?.values.map(({title:n,value:i,type:D},I)=>e.jsx(ie,{type:"viewSmall",label:n,actions:D==="copy"&&e.jsx(Fe,{valueToCopy:i,copiedText:s("copyButton.copiedTooltip"),copyText:s("copyButton.copyTooltip")}),render:()=>e.jsx(L,{variant:"regular",color:be.gray[900],children:i})},`metadata-${I}`))})})]})};d.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Document<Purpose>[]"},description:""},requiredDocumentPurposes:{required:!0,tsType:{name:"Record",elements:[{name:"Purpose"},{name:"union",raw:"{ label: string; description: string; purposeDetails?: string } | undefined",elements:[{name:"signature",type:"object",raw:"{ label: string; description: string; purposeDetails?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"purposeDetails",value:{name:"string",required:!1}}]}},{name:"undefined"}]}],raw:`Record<
  Purpose,
  { label: string; description: string; purposeDetails?: string } | undefined
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
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},companyCountry:{required:!1,tsType:{name:'Simplify["cca3"]',raw:'Country["cca3"]'},description:""},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},getPurposeMetadata:{required:!1,tsType:{name:"signature",type:"function",raw:"(purose: Purpose) => PurposeMetadata | undefined",signature:{arguments:[{type:{name:"Purpose"},name:"purose"}],return:{name:"union",raw:"PurposeMetadata | undefined",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  values: { type?: "text" | "copy"; title: string; value: string }[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ type?: "text" | "copy"; title: string; value: string }',signature:{properties:[{key:"type",value:{name:"union",raw:'"text" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"copy"'}],required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:'{ type?: "text" | "copy"; title: string; value: string }[]',required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const yt={title:"Onboarding/SupportingDocumentCollection",component:d},f=()=>_.make(t=>{setTimeout(()=>{t(V.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),h=t=>_.make(r=>{setTimeout(()=>{r(V.Ok({headers:new Headers,status:200,ok:!0,url:"",response:Q.None()}))},500)}),de=t=>_.value(V.Ok(void 0)),R=()=>{const[t,r]=a.useState([]),u=a.useRef(null);return e.jsx(g,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsxs(y,{title:"Default",children:[e.jsx(d,{ref:u,status:"WaitingForDocument",generateUpload:f,uploadFile:h,documents:t,onChange:r,onRemoveFile:de,requiredDocumentPurposes:{CompanyRegistration:{label:"Company registration document",description:"A document proving the registration of the company (e.g. Kbis in France)",purposeDetails:"Other details about company registration"},ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"},SwornStatement:{label:"Sworn statement",description:"A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"},PowerOfAttorney:{label:"Power of attorney",description:"A power of attorney signed by the legal representative of the company"},ProofOfBusinessActivity:{label:"Proof of business activity",description:"A document proving the business activity of the company (e.g. invoice, contract)"},CompanyFormationRegistration:{label:"Company formation registration",description:"A document proving the formation registration of the company (e.g. articles of association)"},UnknownDocumentType:{label:"Unknown document type",description:"This is an unknown document type used for testing purposes"}},getPurposeMetadata:w=>({title:"Show metadata",values:[{title:"Purpose",value:w},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),e.jsx(b,{onPress:()=>{u.current!=null&&u.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},A=()=>{const[t,r]=a.useState([]);return e.jsx(g,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(y,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:f,uploadFile:h,documents:t,onChange:r,requiredDocumentPurposes:{CompanyRegistration:{label:"Company registration document",description:"A document proving the registration of the company (e.g. Kbis in France)"},ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"},SwornStatement:{label:"Sworn statement",description:"A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"},PowerOfAttorney:{label:"Power of attorney",description:"A power of attorney signed by the legal representative of the company"},UnknownDocumentType:{label:"Unknown document type",description:"This is an unknown document type used for testing purposes"}},showIds:!0})})})},C=()=>{const[t,r]=a.useState([{purpose:"CompanyRegistration",file:{id:"id",name:"CompanyRegistration.pdf",statusInfo:{status:"Validated"}}},{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return e.jsx(g,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(y,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:f,uploadFile:h,documents:t,onChange:r,requiredDocumentPurposes:{CompanyRegistration:{label:"Company registration document",description:"A document proving the registration of the company (e.g. Kbis in France)"},ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"},SwornStatement:{label:"Sworn statement",description:"A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"},PowerOfAttorney:{label:"Power of attorney",description:"A power of attorney signed by the legal representative of the company"},UnknownDocumentType:{label:"Unknown document type",description:"This is an unknown document type used for testing purposes"}},onRemoveFile:()=>_.make(u=>{setTimeout(()=>{u(V.Ok(void 0))},1e3)})})})})},x=()=>e.jsx(g,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(y,{title:"Default",children:e.jsx(d,{status:"PendingReview",generateUpload:f,uploadFile:h,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),U=()=>e.jsx(g,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(y,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:f,uploadFile:h,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),O=()=>e.jsx(g,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(y,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:f,uploadFile:h,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),T=()=>e.jsx(g,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(y,{title:"Default",children:e.jsx(d,{status:"Rejected",generateUpload:f,uploadFile:h,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),B=()=>{const[t,r]=a.useState([]);return e.jsx(g,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(y,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:f,uploadFile:h,documents:t,onChange:r,requiredDocumentPurposes:{},showIds:!0,readOnly:!0})})})},W=()=>e.jsx(g,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(y,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:f,uploadFile:h,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document",reasonCode:"InvalidDocument"}}}],onChange:()=>{},requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}},showIds:!0,readOnly:!0})})}),E=()=>{const[t,r]=a.useState([]),u=a.useRef(null),w=["BEL","DEU","FRA","ITA","NLD","ESP","PRT"];return e.jsx(g,{title:"SupportingDocumentI18nSupport",description:"Supporting document collection",children:w.map(l=>e.jsx(y,{title:l,children:e.jsx(d,{ref:u,status:"WaitingForDocument",generateUpload:f,uploadFile:h,documents:t,onChange:r,onRemoveFile:de,companyCountry:l,requiredDocumentPurposes:{CompanyRegistration:{label:"Company registration document",description:"A document proving the registration of the company (e.g. Kbis in France)",purposeDetails:"Other details about company registration"}}})},l))})};R.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};A.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};C.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};x.__docgenInfo={description:"",methods:[],displayName:"Pending"};U.__docgenInfo={description:"",methods:[],displayName:"Approved"};O.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};T.__docgenInfo={description:"",methods:[],displayName:"Rejected"};B.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};W.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};E.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentI18nSupport"};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
      }]} requiredDocumentPurposes={{
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)"
        }
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...O.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} requiredDocumentPurposes={{}} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  const ref = useRef<SupportingDocumentCollectionRef<string>>(null);
  const countries = ["BEL", "DEU", "FRA", "ITA", "NLD", "ESP", "PRT"] satisfies CountryCCA3[];
  return <StoryBlock title="SupportingDocumentI18nSupport" description="Supporting document collection">
      {countries.map(country => <StoryPart key={country} title={country}>
          <SupportingDocumentCollection ref={ref} status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} onRemoveFile={onRemoveFile} companyCountry={country} requiredDocumentPurposes={{
        CompanyRegistration: {
          label: "Company registration document",
          description: "A document proving the registration of the company (e.g. Kbis in France)",
          purposeDetails: "Other details about company registration"
        }
      }} />
        </StoryPart>)}
    </StoryBlock>;
}`,...E.parameters?.docs?.source}}};const ft=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs","WaitingForDocumentI18nSupport"];export{U as Approved,O as ApprovedWithoutDownload,x as Pending,B as ReadOnlyEmpty,W as ReadOnlyWithDocs,T as Rejected,R as WaitingForDocument,E as WaitingForDocumentI18nSupport,A as WaitingForDocumentShowIds,C as WaitingForDocumentWithApprovedAndRejected,ft as __namedExportsOrder,yt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-CWD935T0.js.map
