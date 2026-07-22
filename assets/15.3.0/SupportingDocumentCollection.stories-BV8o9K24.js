import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-DXgxru2-.js";import{A as r,C as i,D as a,E as o,Et as s,F as ee,L as c,M as l,N as te,O as u,P as d,U as f,g as ne,h as re,ht as p,i as ie,it as ae,kt as m,l as h,o as g,r as _,s as oe,st as v,u as y}from"./ScrollView-BvY3QTy9.js";import{n as b,t as x}from"./commonStyles-CaegYKO5.js";import{n as se,r as S,t as C}from"./LakeButton-WRxbqnZ_.js";import{a as w,d as ce,l as T,o as E,s as D,u as le}from"./i18n-CDis1b5v.js";import{n as ue,t as de}from"./LakeLabel-3slT9_dc.js";import{n as fe,t as pe}from"./LakeCopyButton-BpkuOoZk.js";import{n as O,t as me}from"./ReadOnlyFieldList-BRH_vz9a.js";import{n as k,r as he,t as A}from"./_StoriesComponents-BLODyyff.js";import{n as ge,t as j}from"./LakeModal-CVOnfgdR.js";import{n as _e,t as ve}from"./FilesUploader-nSaAO-ec.js";var ye,M,be=t((()=>{ye=e(n()),p(),b(),M=(0,ye.memo)(({ref:e,style:t,onReset:n,onSubmit:r,...i})=>s(`form`,{...i,ref:e,onReset:e=>{e.preventDefault(),n?.(e)},onSubmit:e=>{e.preventDefault(),r?.(e)},style:[x.view,t]})),M.displayName=`Form`})),N,P,xe,F,I,L,R,Se=t((()=>{o(),ne(),be(),S(),fe(),ue(),oe(),y(),O(),ie(),v(),ee(),T(),N=e(n()),p(),te(),w(),_e(),ge(),P=f(),xe=[`application/pdf`,`image/png`,`image/jpeg`,`image/heic`],F=m.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:`default`}}),I=e=>l(e).with({type:`tooltip`},({text:t,width:n})=>(0,P.jsx)(h,{content:t,width:n,togglableOnFocus:!0,placement:`right`,maxWidth:400,children:(0,P.jsx)(C,{mode:`tertiary`,size:`small`,color:`gray`,icon:e.icon??`question-circle-regular`,disabled:!0,style:[F.button,F.buttonWithDefaultCursor],ariaLabel:D(`supportingDocuments.help.whatIsThis`)})})).with({type:`button`},({label:t,onPress:n})=>(0,P.jsx)(C,{mode:`secondary`,size:`small`,color:`gray`,icon:e.icon??`question-circle-regular`,onPress:n,style:F.button,ariaLabel:D(`supportingDocuments.help.whatIsThis`),children:t})).exhaustive(),L=(e,t)=>l({language:e,country:t}).with(d.union({country:`FRA`},{country:d.nullish,language:`fr`}),()=>`https://support.swan.io/hc/${e}/articles/22502977563933`).with(d.union({country:`ITA`},{country:d.nullish,language:`it`}),()=>`https://support.swan.io/hc/${e}/articles/22537604831005`).with(d.union({country:`DEU`},{country:d.nullish,language:`de`}),()=>`https://support.swan.io/hc/${e}/articles/22535023588509`).with(d.union({country:`ESP`},{country:d.nullish,language:`es`}),()=>`https://support.swan.io/hc/${e}/articles/22544703221021`).with(d.union({country:`NLD`},{country:d.nullish,language:`nl`}),()=>`https://support.swan.io/hc/${e}/articles/22543228421277`).with(d.union({country:`BEL`}),()=>`https://support.swan.io/hc/${e}/articles/31233251462173`).otherwise(()=>`https://support.swan.io/hc/en-150/articles/22620756787869-Proof-of-company-registration`),R=({ref:e,documents:t,generateUpload:n,uploadFile:i,documentPurposes:a,templateLanguage:o=E.language,status:s,onChange:ee,onRemoveFile:te,showIds:d=!1,readOnly:f=!1,getPurposeMetadata:ne,companyCountry:p,readonlyDocumentPurposes:ie=[]})=>{let[m,h]=(0,N.useState)(!1),[oe,v]=(0,N.useState)(!1),[y,b]=(0,N.useState)(void 0),[x,S]=(0,N.useState)([]),w=(0,N.useMemo)(()=>{let e=new Set(Object.keys(a)),n=[...x,...t];return[...e].map(e=>{let t=n.filter(t=>t.purpose===e),r=t.length>0&&t.every(e=>e.file.statusInfo.status===`Validated`),i=a[e],o=i?.required===!0,s=r?0:o?1:2;return{purpose:e,files:t.map(e=>e.file),isRequired:o,areAllDocumentsValidated:r,priority:s,label:i?.label??e,description:i?.description,purposeDetails:i?.purposeDetails}}).sort((e,t)=>t.priority>e.priority?-1:1)},[a,t,x]),T=(0,N.useRef)(new Map(r.filterMap(w,({isRequired:e,purpose:t,files:n})=>e?u.Some([t,n]):u.None()))),ue=(0,N.useRef)({});(0,N.useImperativeHandle)(e,()=>({areAllRequiredDocumentsFilled:()=>[...T.current.values()].every(e=>e.length>0),addDocument:e=>{S(t=>[...t,e])}})),(0,N.useEffect)(()=>{let e=x[x.length-1];e!=null&&ue.current[e?.purpose]?.add(e.file)},[x]);let fe=w.filter(({files:e})=>!(f&&e.length===0)),O=w.find(({purpose:e})=>e===`SwornStatement`);return(0,P.jsxs)(M,{children:[fe.map(({purpose:e,files:t,areAllDocumentsValidated:r,isRequired:a,label:o,description:u,purposeDetails:ae})=>{let m=ne?.(e);return(0,P.jsxs)(N.Fragment,{children:[(0,P.jsx)(de,{label:o,description:ae??u,render:()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(re,{direction:`row`,children:[(0,P.jsx)(re,{direction:`row`,children:c(m)?e===`CompanyRegistration`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(C,{size:`small`,mode:`secondary`,icon:`question-circle-regular`,onPress:()=>window.open(L(E.language,p)),ariaLabel:D(`supportingDocuments.help.howToSendAGoodDocument`),children:D(`supportingDocuments.help.howToSendAGoodDocument`)}),(0,P.jsx)(_,{width:8})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(I,{type:`button`,label:m.title,onPress:()=>b(m)}),(0,P.jsx)(_,{width:8})]}):l(e).with(`CompanyRegistration`,()=>(0,P.jsx)(C,{size:`small`,mode:`secondary`,icon:`question-circle-regular`,onPress:()=>window.open(L(E.language,p)),ariaLabel:D(`supportingDocuments.help.howToSendAGoodDocument`),children:D(`supportingDocuments.help.howToSendAGoodDocument`)})).otherwise(()=>null)}),l(e).with(`PowerOfAttorney`,()=>(0,P.jsx)(I,{type:`button`,icon:`arrow-down-filled`,label:D(`supportingDocuments.help.downloadTemplate`),onPress:()=>h(!0)})).with(`SwornStatement`,()=>(0,P.jsx)(I,{type:`button`,icon:`arrow-down-filled`,label:D(`supportingDocuments.help.downloadTemplate`),onPress:()=>v(!0)})).otherwise(()=>null)]}),(0,P.jsx)(_,{height:16}),(0,P.jsx)(ve,{ref:t=>{ue.current[e]=t},canUpload:!ie.includes(e)&&!f&&s===`WaitingForDocument`&&!r,accept:xe,maxSize:2e7,icon:`document-regular`,initialFiles:t,generateUpload:n,getUploadConfig:t=>({fileName:t.name,purpose:e}),uploadFile:c(i)?i:({upload:e,file:t,onProgress:n})=>{let r=new FormData;return e.fields.forEach(({key:e,value:t})=>r.append(e,t)),r.append(`file`,t),setTimeout(()=>n(.8),100),le.make({url:e.url,method:`POST`,body:r,type:`text`}).mapOkToResult(ce)},formatAndSizeDescription:D(`supportingDocuments.documentTypes`,{maxSizeMB:2e7/1e6}),onRemoveFile:f?void 0:te,onChange:t=>{if(a){T.current.set(e,t);let n=T.current.entries().reduce((e,[t,n])=>{let r=n.map(e=>({purpose:t,file:e}));return e.push(...r),e},[]);ee?.(n)}},showIds:d})]})}),(0,P.jsx)(_,{height:24})]},e)}),fe.length===0?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(_,{height:24}),(0,P.jsx)(g,{align:`center`,children:D(`supportingDocuments.noDocuments`)}),(0,P.jsx)(_,{height:24})]}):null,(0,P.jsxs)(j,{visible:m,title:D(`supportingDocuments.powerOfAttorneyModal.title`),icon:`document-regular`,onPressClose:()=>h(!1),children:[(0,P.jsx)(g,{children:D(`supportingDocuments.powerOfAttorneyModal.description`)}),(0,P.jsx)(_,{height:16}),(0,P.jsx)(se,{paddingBottom:0,children:(0,P.jsx)(C,{grow:!0,color:`current`,onPress:()=>window.open(`/power-of-attorney-template/${l(o).with(`fr`,()=>`fr`).with(`de`,()=>`de`).with(`es`,()=>`es`).with(`it`,()=>`it`).otherwise(()=>`en`)}.pdf`),children:D(`supportingDocuments.downloadTemplate`)})})]}),(0,P.jsxs)(j,{visible:oe,title:O?.label??`Sworn Statement`,icon:`document-regular`,onPressClose:()=>v(!1),children:[(0,P.jsx)(g,{children:O?.description??``}),(0,P.jsx)(_,{height:16}),(0,P.jsx)(se,{paddingBottom:0,children:(0,P.jsx)(C,{grow:!0,color:`current`,onPress:()=>{window.open(`/sworn-statement-template/${l(o).with(`nl`,()=>`nl`).with(`es`,()=>`es`).with(`it`,()=>`it`).otherwise(()=>`en`)}.pdf`)},children:D(`supportingDocuments.downloadTemplate`)})})]}),(0,P.jsx)(j,{visible:c(y),title:D(`supportingDocuments.informations`),icon:`document-regular`,onPressClose:()=>b(void 0),children:(0,P.jsx)(me,{children:y?.values.map(({title:e,value:t,type:n},r)=>(0,P.jsx)(de,{type:`viewSmall`,label:e,actions:n===`copy`&&(0,P.jsx)(pe,{valueToCopy:t,copiedText:D(`copyButton.copiedTooltip`),copyText:D(`copyButton.copyTooltip`)}),render:()=>(0,P.jsx)(g,{variant:`regular`,color:ae.gray[900],children:t})},`metadata-${r}`))})})]})},R.__docgenInfo={description:``,methods:[{name:`areAllRequiredDocumentsFilled`,docblock:null,modifiers:[],params:[],returns:null},{name:`addDocument`,docblock:null,modifiers:[],params:[{name:`document`,optional:!1,type:null}],returns:null}],displayName:`SupportingDocumentCollection`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`signature`,type:`object`,raw:`{
  areAllRequiredDocumentsFilled: () => boolean;
  addDocument: (document: Document<Purpose>) => void;
}`,signature:{properties:[{key:`areAllRequiredDocumentsFilled`,value:{name:`signature`,type:`function`,raw:`() => boolean`,signature:{arguments:[],return:{name:`boolean`}},required:!0}},{key:`addDocument`,value:{name:`signature`,type:`function`,raw:`(document: Document<Purpose>) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ purpose: Purpose; file: SwanFile }`,signature:{properties:[{key:`purpose`,value:{name:`Purpose`,required:!0}},{key:`file`,value:{name:`signature`,type:`object`,raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`statusInfo`,value:{name:`union`,raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason?: string;
    reasonCode: string;
  }`,elements:[{name:`signature`,type:`object`,raw:`{ status: "Uploading"; progress: number }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploading"`,required:!0}},{key:`progress`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Uploaded" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploaded"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Pending" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Pending"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Validated" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Validated"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  status: "Refused";
  reason?: string;
  reasonCode: string;
}`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Refused"`,required:!0}},{key:`reason`,value:{name:`string`,required:!1}},{key:`reasonCode`,value:{name:`string`,required:!0}}]}}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!1}}]},required:!0}}]}},name:`document`}],return:{name:`void`}},required:!0}}]}}],raw:`Ref<SupportingDocumentCollectionRef<Purpose>>`},description:``},status:{required:!0,tsType:{name:`union`,raw:`| "WaitingForDocument"
| "PendingReview"
| "Approved"
| "Canceled"
| "Rejected"`,elements:[{name:`literal`,value:`"WaitingForDocument"`},{name:`literal`,value:`"PendingReview"`},{name:`literal`,value:`"Approved"`},{name:`literal`,value:`"Canceled"`},{name:`literal`,value:`"Rejected"`}]},description:``},generateUpload:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(input: {
  fileName: string;
  purpose: Purpose;
}) => Future<Result<UploadOutputWithId<UploadOutput>, unknown>>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  fileName: string;
  purpose: Purpose;
}`,signature:{properties:[{key:`fileName`,value:{name:`string`,required:!0}},{key:`purpose`,value:{name:`Purpose`,required:!0}}]}},name:`input`}],return:{name:`Future`,elements:[{name:`Result`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; upload: UploadOutput }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`upload`,value:{name:`signature`,type:`object`,raw:`{ url: string; fields: { key: string; value: string }[] }`,signature:{properties:[{key:`url`,value:{name:`string`,required:!0}},{key:`fields`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ key: string; value: string }`,signature:{properties:[{key:`key`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}}]}}],raw:`{ key: string; value: string }[]`,required:!0}}]},required:!0}}]}},{name:`unknown`}],raw:`Result<UploadOutputWithId<UploadOutput>, unknown>`}],raw:`Future<Result<UploadOutputWithId<UploadOutput>, unknown>>`}}},description:``},documents:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ purpose: Purpose; file: SwanFile }`,signature:{properties:[{key:`purpose`,value:{name:`Purpose`,required:!0}},{key:`file`,value:{name:`signature`,type:`object`,raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`statusInfo`,value:{name:`union`,raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason?: string;
    reasonCode: string;
  }`,elements:[{name:`signature`,type:`object`,raw:`{ status: "Uploading"; progress: number }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploading"`,required:!0}},{key:`progress`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Uploaded" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploaded"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Pending" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Pending"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Validated" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Validated"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  status: "Refused";
  reason?: string;
  reasonCode: string;
}`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Refused"`,required:!0}},{key:`reason`,value:{name:`string`,required:!1}},{key:`reasonCode`,value:{name:`string`,required:!0}}]}}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!1}}]},required:!0}}]}}],raw:`Document<Purpose>[]`},description:``},documentPurposes:{required:!0,tsType:{name:`Record`,elements:[{name:`Purpose`},{name:`union`,raw:`DocumentPurposeInfo | undefined`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string;
  description: string;
  purposeDetails?: string;
  required: boolean;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}},{key:`purposeDetails`,value:{name:`string`,required:!1}},{key:`required`,value:{name:`boolean`,required:!0}}]}},{name:`undefined`}]}],raw:`Record<Purpose, DocumentPurposeInfo | undefined>`},description:``},uploadFile:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  config: UploadFileInput<UploadOutput>,
) => Future<Result<Response<string>, NetworkError | TimeoutError>>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  upload: UploadOutput;
  file: File;
  onProgress: (progress: number) => void;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`upload`,value:{name:`signature`,type:`object`,raw:`{ url: string; fields: { key: string; value: string }[] }`,signature:{properties:[{key:`url`,value:{name:`string`,required:!0}},{key:`fields`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ key: string; value: string }`,signature:{properties:[{key:`key`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}}]}}],raw:`{ key: string; value: string }[]`,required:!0}}]},required:!0}},{key:`file`,value:{name:`File`,required:!0}},{key:`onProgress`,value:{name:`signature`,type:`function`,raw:`(progress: number) => void`,signature:{arguments:[{type:{name:`number`},name:`progress`}],return:{name:`void`}},required:!0}}]}},name:`config`}],return:{name:`Future`,elements:[{name:`Result`,elements:[{name:`Response`,elements:[{name:`string`}],raw:`Response<string>`},{name:`union`,raw:`NetworkError | TimeoutError`,elements:[{name:`NetworkError`},{name:`TimeoutError`}]}],raw:`Result<Response<string>, NetworkError | TimeoutError>`}],raw:`Future<Result<Response<string>, NetworkError | TimeoutError>>`}}},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(documents: Document<Purpose>[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ purpose: Purpose; file: SwanFile }`,signature:{properties:[{key:`purpose`,value:{name:`Purpose`,required:!0}},{key:`file`,value:{name:`signature`,type:`object`,raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`statusInfo`,value:{name:`union`,raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason?: string;
    reasonCode: string;
  }`,elements:[{name:`signature`,type:`object`,raw:`{ status: "Uploading"; progress: number }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploading"`,required:!0}},{key:`progress`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Uploaded" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploaded"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Pending" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Pending"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Validated" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Validated"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  status: "Refused";
  reason?: string;
  reasonCode: string;
}`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Refused"`,required:!0}},{key:`reason`,value:{name:`string`,required:!1}},{key:`reasonCode`,value:{name:`string`,required:!0}}]}}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!1}}]},required:!0}}]}}],raw:`Document<Purpose>[]`},name:`documents`}],return:{name:`void`}}},description:``},onRemoveFile:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(file: SwanFile) => Future<Result<unknown, unknown>>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`statusInfo`,value:{name:`union`,raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason?: string;
    reasonCode: string;
  }`,elements:[{name:`signature`,type:`object`,raw:`{ status: "Uploading"; progress: number }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploading"`,required:!0}},{key:`progress`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Uploaded" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploaded"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Pending" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Pending"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Validated" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Validated"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  status: "Refused";
  reason?: string;
  reasonCode: string;
}`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Refused"`,required:!0}},{key:`reason`,value:{name:`string`,required:!1}},{key:`reasonCode`,value:{name:`string`,required:!0}}]}}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!1}}]}},name:`file`}],return:{name:`Future`,elements:[{name:`Result`,elements:[{name:`unknown`},{name:`unknown`}],raw:`Result<unknown, unknown>`}],raw:`Future<Result<unknown, unknown>>`}}},description:``},templateLanguage:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`locale.language`,computed:!0}},companyCountry:{required:!1,tsType:{name:`Simplify["cca3"]`,raw:`Country["cca3"]`},description:``},showIds:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},getPurposeMetadata:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(purose: Purpose) => PurposeMetadata | undefined`,signature:{arguments:[{type:{name:`Purpose`},name:`purose`}],return:{name:`union`,raw:`PurposeMetadata | undefined`,elements:[{name:`signature`,type:`object`,raw:`{
  title: string;
  values: { type?: "text" | "copy"; title: string; value: string }[];
}`,signature:{properties:[{key:`title`,value:{name:`string`,required:!0}},{key:`values`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ type?: "text" | "copy"; title: string; value: string }`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`"text" | "copy"`,elements:[{name:`literal`,value:`"text"`},{name:`literal`,value:`"copy"`}],required:!1}},{key:`title`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}}]}}],raw:`{ type?: "text" | "copy"; title: string; value: string }[]`,required:!0}}]}},{name:`undefined`}]}}},description:``},readonlyDocumentPurposes:{required:!1,tsType:{name:`Array`,elements:[{name:`Purpose`}],raw:`Purpose[]`},description:``,defaultValue:{value:`[]`,computed:!1}}}}})),z,B,Ce,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,we;t((()=>{o(),S(),z=e(n()),Se(),he(),B=f(),Ce={title:`Onboarding/SupportingDocumentCollection`,component:R},V=()=>i.make(e=>{setTimeout(()=>{e(a.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),H=e=>i.make(e=>{setTimeout(()=>{e(a.Ok({headers:new Headers,status:200,ok:!0,url:``,response:u.None()}))},500)}),U=e=>i.value(a.Ok(void 0)),W=()=>{let[e,t]=(0,z.useState)([]),n=(0,z.useRef)(null);return(0,B.jsx)(A,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,B.jsxs)(k,{title:`Default`,children:[(0,B.jsx)(R,{ref:n,status:`WaitingForDocument`,generateUpload:V,uploadFile:H,documents:e,onChange:t,onRemoveFile:U,documentPurposes:{CompanyRegistration:{label:`Company registration document`,description:`A document proving the registration of the company (e.g. Kbis in France)`,purposeDetails:`Other details about company registration`,required:!0},ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0},SwornStatement:{label:`Sworn statement`,description:`A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate`,required:!0},PowerOfAttorney:{label:`Power of attorney`,description:`A power of attorney signed by the legal representative of the company`,required:!0},ProofOfBusinessActivity:{label:`Proof of business activity`,description:`A document proving the business activity of the company (e.g. invoice, contract)`,required:!0},CompanyFormationRegistration:{label:`Company formation registration`,description:`A document proving the formation registration of the company (e.g. articles of association)`,required:!0},UnknownDocumentType:{label:`Unknown document type`,description:`This is an unknown document type used for testing purposes`,required:!0}},getPurposeMetadata:e=>({title:`Show metadata`,values:[{title:`Purpose`,value:e},{title:`ID`,value:`666`,type:`copy`},{title:`Lorem ipsum`,value:`dolor sit amet`}]})}),(0,B.jsx)(C,{onPress:()=>{n.current!=null&&n.current.addDocument({purpose:`UltimateBeneficialOwnerProofOfAddress`,file:{id:crypto.randomUUID(),name:`toto.jpg`,statusInfo:{status:`Uploaded`}}})},children:`Add other document from outside`})]})})},G=()=>{let[e,t]=(0,z.useState)([]);return(0,B.jsx)(A,{title:`WaitingForDocumentShowIds`,description:`Supporting document collection`,children:(0,B.jsx)(k,{title:`Default`,children:(0,B.jsx)(R,{status:`WaitingForDocument`,generateUpload:V,uploadFile:H,documents:e,onChange:t,documentPurposes:{CompanyRegistration:{label:`Company registration document`,description:`A document proving the registration of the company (e.g. Kbis in France)`,required:!0},ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0},SwornStatement:{label:`Sworn statement`,description:`A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate`,required:!0},PowerOfAttorney:{label:`Power of attorney`,description:`A power of attorney signed by the legal representative of the company`,required:!0},UnknownDocumentType:{label:`Unknown document type`,description:`This is an unknown document type used for testing purposes`,required:!0}},showIds:!0})})})},K=()=>{let[e,t]=(0,z.useState)([{purpose:`CompanyRegistration`,file:{id:`id`,name:`CompanyRegistration.pdf`,statusInfo:{status:`Validated`}}},{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,statusInfo:{status:`Validated`}}},{purpose:`SwornStatement`,file:{id:`sworn`,name:`SwornStatement.pdf`,statusInfo:{status:`Uploaded`}}},{purpose:`ProofOfBusinessActivity`,file:{id:`power`,name:`power.pdf`,url:`https://swan.io`,statusInfo:{status:`Refused`,reasonCode:`Invalid document`}}},{purpose:`PowerOfAttorney`,file:{id:`power`,name:`power.pdf`,url:`https://swan.io`,statusInfo:{status:`Refused`,reasonCode:`Invalid document`,reason:`The document is blurry`}}}]);return(0,B.jsx)(A,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,B.jsx)(k,{title:`Default`,children:(0,B.jsx)(R,{status:`WaitingForDocument`,generateUpload:V,uploadFile:H,documents:e,onChange:t,documentPurposes:{CompanyRegistration:{label:`Company registration document`,description:`A document proving the registration of the company (e.g. Kbis in France)`,required:!0},ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0},SwornStatement:{label:`Sworn statement`,description:`A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate`,required:!0},PowerOfAttorney:{label:`Power of attorney`,description:`A power of attorney signed by the legal representative of the company`,required:!0},UnknownDocumentType:{label:`Unknown document type`,description:`This is an unknown document type used for testing purposes`,required:!0}},onRemoveFile:()=>i.make(e=>{setTimeout(()=>{e(a.Ok(void 0))},1e3)})})})})},q=()=>(0,B.jsx)(A,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,B.jsx)(k,{title:`Default`,children:(0,B.jsx)(R,{status:`PendingReview`,generateUpload:V,uploadFile:H,documents:[{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,url:`https://swan.io`,statusInfo:{status:`Pending`}}}],documentPurposes:{ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0}}})})}),J=()=>(0,B.jsx)(A,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,B.jsx)(k,{title:`Default`,children:(0,B.jsx)(R,{status:`Approved`,generateUpload:V,uploadFile:H,documents:[{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,url:`https://swan.io`,statusInfo:{status:`Validated`}}}],documentPurposes:{ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0}}})})}),Y=()=>(0,B.jsx)(A,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,B.jsx)(k,{title:`Default`,children:(0,B.jsx)(R,{status:`Approved`,generateUpload:V,uploadFile:H,documents:[{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,statusInfo:{status:`Validated`}}}],documentPurposes:{ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0}}})})}),X=()=>(0,B.jsx)(A,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,B.jsx)(k,{title:`Default`,children:(0,B.jsx)(R,{status:`Rejected`,generateUpload:V,uploadFile:H,documents:[{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,url:`https://swan.io`,statusInfo:{status:`Refused`,reasonCode:`Invalid document`}}}],documentPurposes:{ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0}}})})}),Z=()=>{let[e,t]=(0,z.useState)([]);return(0,B.jsx)(A,{title:`WaitingForDocumentShowIds`,description:`Supporting document collection`,children:(0,B.jsx)(k,{title:`Default`,children:(0,B.jsx)(R,{status:`WaitingForDocument`,generateUpload:V,uploadFile:H,documents:e,onChange:t,documentPurposes:{},showIds:!0,readOnly:!0})})})},Q=()=>(0,B.jsx)(A,{title:`WaitingForDocumentShowIds`,description:`Supporting document collection`,children:(0,B.jsx)(k,{title:`Default`,children:(0,B.jsx)(R,{status:`WaitingForDocument`,generateUpload:V,uploadFile:H,documents:[{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,url:`https://swan.io`,statusInfo:{status:`Refused`,reason:`Invalid document`,reasonCode:`InvalidDocument`}}}],onChange:()=>{},documentPurposes:{ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0}},showIds:!0,readOnly:!0})})}),$=()=>{let[e,t]=(0,z.useState)([]),n=(0,z.useRef)(null);return(0,B.jsx)(A,{title:`SupportingDocumentI18nSupport`,description:`Supporting document collection`,children:[`BEL`,`DEU`,`FRA`,`ITA`,`NLD`,`ESP`,`PRT`].map(r=>(0,B.jsx)(k,{title:r,children:(0,B.jsx)(R,{ref:n,status:`WaitingForDocument`,generateUpload:V,uploadFile:H,documents:e,onChange:t,onRemoveFile:U,companyCountry:r,documentPurposes:{CompanyRegistration:{label:`Company registration document`,description:`A document proving the registration of the company (e.g. Kbis in France)`,purposeDetails:`Other details about company registration`,required:!0}}})},r))})},W.__docgenInfo={description:``,methods:[],displayName:`WaitingForDocument`},G.__docgenInfo={description:``,methods:[],displayName:`WaitingForDocumentShowIds`},K.__docgenInfo={description:``,methods:[],displayName:`WaitingForDocumentWithApprovedAndRejected`},q.__docgenInfo={description:``,methods:[],displayName:`Pending`},J.__docgenInfo={description:``,methods:[],displayName:`Approved`},Y.__docgenInfo={description:``,methods:[],displayName:`ApprovedWithoutDownload`},X.__docgenInfo={description:``,methods:[],displayName:`Rejected`},Z.__docgenInfo={description:``,methods:[],displayName:`ReadOnlyEmpty`},Q.__docgenInfo={description:``,methods:[],displayName:`ReadOnlyWithDocs`},$.__docgenInfo={description:``,methods:[],displayName:`WaitingForDocumentI18nSupport`},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  const ref = useRef<SupportingDocumentCollectionRef<string>>(null);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection ref={ref} status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} onRemoveFile={onRemoveFile} documentPurposes={{
        CompanyRegistration: {
          label: "Company registration document",
          description: "A document proving the registration of the company (e.g. Kbis in France)",
          purposeDetails: "Other details about company registration",
          required: true
        },
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)",
          required: true
        },
        SwornStatement: {
          label: "Sworn statement",
          description: "A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate",
          required: true
        },
        PowerOfAttorney: {
          label: "Power of attorney",
          description: "A power of attorney signed by the legal representative of the company",
          required: true
        },
        ProofOfBusinessActivity: {
          label: "Proof of business activity",
          description: "A document proving the business activity of the company (e.g. invoice, contract)",
          required: true
        },
        CompanyFormationRegistration: {
          label: "Company formation registration",
          description: "A document proving the formation registration of the company (e.g. articles of association)",
          required: true
        },
        UnknownDocumentType: {
          label: "Unknown document type",
          description: "This is an unknown document type used for testing purposes",
          required: true
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} documentPurposes={{
        CompanyRegistration: {
          label: "Company registration document",
          description: "A document proving the registration of the company (e.g. Kbis in France)",
          required: true
        },
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)",
          required: true
        },
        SwornStatement: {
          label: "Sworn statement",
          description: "A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate",
          required: true
        },
        PowerOfAttorney: {
          label: "Power of attorney",
          description: "A power of attorney signed by the legal representative of the company",
          required: true
        },
        UnknownDocumentType: {
          label: "Unknown document type",
          description: "This is an unknown document type used for testing purposes",
          required: true
        }
      }} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
    purpose: "ProofOfBusinessActivity",
    file: {
      id: "power",
      name: "power.pdf",
      url: "https://swan.io",
      statusInfo: {
        status: "Refused",
        reasonCode: "Invalid document"
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
        reasonCode: "Invalid document",
        reason: "The document is blurry"
      }
    }
  }]);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} documentPurposes={{
        CompanyRegistration: {
          label: "Company registration document",
          description: "A document proving the registration of the company (e.g. Kbis in France)",
          required: true
        },
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)",
          required: true
        },
        SwornStatement: {
          label: "Sworn statement",
          description: "A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate",
          required: true
        },
        PowerOfAttorney: {
          label: "Power of attorney",
          description: "A power of attorney signed by the legal representative of the company",
          required: true
        },
        UnknownDocumentType: {
          label: "Unknown document type",
          description: "This is an unknown document type used for testing purposes",
          required: true
        }
      }} onRemoveFile={() => Future.make(resolve => {
        setTimeout(() => {
          resolve(Result.Ok(undefined));
        }, 1_000);
      })} />
      </StoryPart>
    </StoryBlock>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
      }]} documentPurposes={{
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)",
          required: true
        }
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
      }]} documentPurposes={{
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)",
          required: true
        }
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
      }]} documentPurposes={{
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)",
          required: true
        }
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
            reasonCode: "Invalid document"
          }
        }
      }]} documentPurposes={{
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)",
          required: true
        }
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} documentPurposes={{}} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
      }]} onChange={() => {}} documentPurposes={{
        ProofOfIdentity: {
          label: "Proof of identity",
          description: "A document proving the identity of a person (e.g. ID card, passport)",
          required: true
        }
      }} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  const ref = useRef<SupportingDocumentCollectionRef<string>>(null);
  const countries = ["BEL", "DEU", "FRA", "ITA", "NLD", "ESP", "PRT"] satisfies CountryCCA3[];
  return <StoryBlock title="SupportingDocumentI18nSupport" description="Supporting document collection">
      {countries.map(country => <StoryPart key={country} title={country}>
          <SupportingDocumentCollection ref={ref} status="WaitingForDocument" generateUpload={generateUpload} uploadFile={uploadFile} documents={documents} onChange={setDocuments} onRemoveFile={onRemoveFile} companyCountry={country} documentPurposes={{
        CompanyRegistration: {
          label: "Company registration document",
          description: "A document proving the registration of the company (e.g. Kbis in France)",
          purposeDetails: "Other details about company registration",
          required: true
        }
      }} />
        </StoryPart>)}
    </StoryBlock>;
}`,...$.parameters?.docs?.source}}},we=[`WaitingForDocument`,`WaitingForDocumentShowIds`,`WaitingForDocumentWithApprovedAndRejected`,`Pending`,`Approved`,`ApprovedWithoutDownload`,`Rejected`,`ReadOnlyEmpty`,`ReadOnlyWithDocs`,`WaitingForDocumentI18nSupport`]}))();export{J as Approved,Y as ApprovedWithoutDownload,q as Pending,Z as ReadOnlyEmpty,Q as ReadOnlyWithDocs,X as Rejected,W as WaitingForDocument,$ as WaitingForDocumentI18nSupport,G as WaitingForDocumentShowIds,K as WaitingForDocumentWithApprovedAndRejected,we as __namedExportsOrder,Ce as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-BV8o9K24.js.map