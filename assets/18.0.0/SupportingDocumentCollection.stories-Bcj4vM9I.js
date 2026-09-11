import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-Dfd2BKQF.js";import{$ as r,C as i,G as a,H as o,It as s,L as c,M as ee,O as l,R as u,Tt as d,U as f,W as p,_t as m,g as te,h as ne,i as h,l as g,mt as _,o as v,q as y,r as b,s as re,u as ie,zt as ae}from"./ScrollView-B6KTtxSY.js";import{n as x,t as S}from"./commonStyles-IchN61IH.js";import{n as oe,r as C,t as w}from"./LakeButton-Cvz4WPwM.js";import{a as T,d as se,f as ce,o as le,p as E,s as D}from"./i18n-CB-4lb_a.js";import{n as ue,t as de}from"./LakeLabel-E99HSmFd.js";import{n as O,t as fe}from"./LakeCopyButton-C7Ir90-d.js";import{n as k,t as pe}from"./ReadOnlyFieldList-o57gtoYq.js";import{n as A,r as me,t as j}from"./_StoriesComponents-pKlRW1aS.js";import{n as he,t as M}from"./LakeModal-BsW3saGm.js";import{n as ge,t as _e}from"./FilesUploader-Cy_X4qP5.js";var ve,N,ye=t((()=>{ve=e(n()),d(),x(),N=(0,ve.memo)(({ref:e,style:t,onReset:n,onSubmit:r,...i})=>s(`form`,{...i,ref:e,onReset:e=>{e.preventDefault(),n?.(e)},onSubmit:e=>{e.preventDefault(),r?.(e)},style:[S.view,t]})),N.displayName=`Form`})),P,F,be,I,L,R,z,xe=t((()=>{i(),E(),te(),ye(),C(),O(),ue(),re(),ie(),k(),h(),m(),a(),P=e(n()),d(),f(),T(),ge(),he(),F=r(),be=[`application/pdf`,`image/png`,`image/jpeg`,`image/heic`],I=ae.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:`default`}}),L=e=>o(e).with({type:`tooltip`},({text:t,width:n})=>(0,F.jsx)(g,{content:t,width:n,togglableOnFocus:!0,placement:`right`,maxWidth:400,children:(0,F.jsx)(w,{mode:`tertiary`,size:`small`,color:`gray`,icon:e.icon??`question-circle-regular`,disabled:!0,style:[I.button,I.buttonWithDefaultCursor],ariaLabel:D(`supportingDocuments.help.whatIsThis`)})})).with({type:`button`},({label:t,onPress:n})=>(0,F.jsx)(w,{mode:`secondary`,size:`small`,color:`gray`,icon:e.icon??`question-circle-regular`,onPress:n,style:I.button,ariaLabel:D(`supportingDocuments.help.whatIsThis`),children:t})).exhaustive(),R=(e,t)=>o({language:e,country:t}).with(p.union({country:`FRA`},{country:p.nullish,language:`fr`}),()=>`https://support.swan.io/hc/${e}/articles/22502977563933`).with(p.union({country:`ITA`},{country:p.nullish,language:`it`}),()=>`https://support.swan.io/hc/${e}/articles/22537604831005`).with(p.union({country:`DEU`},{country:p.nullish,language:`de`}),()=>`https://support.swan.io/hc/${e}/articles/22535023588509`).with(p.union({country:`ESP`},{country:p.nullish,language:`es`}),()=>`https://support.swan.io/hc/${e}/articles/22544703221021`).with(p.union({country:`NLD`},{country:p.nullish,language:`nl`}),()=>`https://support.swan.io/hc/${e}/articles/22543228421277`).with(p.union({country:`BEL`}),()=>`https://support.swan.io/hc/${e}/articles/31233251462173`).otherwise(()=>`https://support.swan.io/hc/en-150/articles/22620756787869-Proof-of-company-registration`),z=({ref:e,documents:t,generateUpload:n,uploadFile:r,documentPurposes:i,templateLanguage:a=le.language,status:s,onChange:l,onRemoveFile:u,showIds:d=!1,readOnly:f=!1,getPurposeMetadata:p,companyCountry:m,readonlyDocumentPurposes:te=[]})=>{let[h,g]=(0,P.useState)(!1),[re,ie]=(0,P.useState)(!1),[ae,x]=(0,P.useState)(void 0),[S,C]=(0,P.useState)([]),T=(0,P.useMemo)(()=>{let e=new Set(Object.keys(i)),n=[...S,...t];return[...e].map(e=>{let t=n.filter(t=>t.purpose===e),r=t.length>0&&t.every(e=>e.file.statusInfo.status===`Validated`),a=i[e],o=a?.required===!0,s=r?0:o?1:2;return{purpose:e,files:t.map(e=>e.file),isRequired:o,areAllDocumentsValidated:r,priority:s,label:a?.label??e,description:a?.description,purposeDetails:a?.purposeDetails}}).toSorted((e,t)=>t.priority>e.priority?-1:1)},[i,t,S]),E=(0,P.useRef)(new Map(ee(T,({isRequired:e,purpose:t,files:n})=>e?c.Some([t,n]):c.None()))),ue=(0,P.useRef)({});(0,P.useImperativeHandle)(e,()=>({areAllRequiredDocumentsFilled:()=>[...E.current.values()].every(e=>e.length>0),addDocument:e=>{C(t=>[...t,e])}})),(0,P.useEffect)(()=>{let e=S[S.length-1];e!=null&&ue.current[e?.purpose]?.add(e.file)},[S]);let O=T.filter(({files:e})=>!(f&&e.length===0)),k=T.find(({purpose:e})=>e===`SwornStatement`);return(0,F.jsxs)(N,{children:[O.map(({purpose:e,files:t,areAllDocumentsValidated:i,isRequired:a,label:c,description:ee,purposeDetails:h})=>{let _=p?.(e);return(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(de,{label:c,description:h??ee,render:()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(ne,{direction:`row`,children:[(0,F.jsx)(ne,{direction:`row`,children:y(_)?e===`CompanyRegistration`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(w,{size:`small`,mode:`secondary`,icon:`question-circle-regular`,onPress:()=>window.open(R(le.language,m)),ariaLabel:D(`supportingDocuments.help.howToSendAGoodDocument`),children:D(`supportingDocuments.help.howToSendAGoodDocument`)}),(0,F.jsx)(b,{width:8})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(L,{type:`button`,label:_.title,onPress:()=>x(_)}),(0,F.jsx)(b,{width:8})]}):o(e).with(`CompanyRegistration`,()=>(0,F.jsx)(w,{size:`small`,mode:`secondary`,icon:`question-circle-regular`,onPress:()=>window.open(R(le.language,m)),ariaLabel:D(`supportingDocuments.help.howToSendAGoodDocument`),children:D(`supportingDocuments.help.howToSendAGoodDocument`)})).otherwise(()=>null)}),o(e).with(`PowerOfAttorney`,()=>(0,F.jsx)(L,{type:`button`,icon:`arrow-down-filled`,label:D(`supportingDocuments.help.downloadTemplate`),onPress:()=>g(!0)})).with(`SwornStatement`,()=>(0,F.jsx)(L,{type:`button`,icon:`arrow-down-filled`,label:D(`supportingDocuments.help.downloadTemplate`),onPress:()=>ie(!0)})).otherwise(()=>null)]}),(0,F.jsx)(b,{height:16}),(0,F.jsx)(_e,{ref:t=>{ue.current[e]=t},canUpload:!te.includes(e)&&!f&&s===`WaitingForDocument`&&!i,accept:be,maxSize:2e7,icon:`document-regular`,initialFiles:t,generateUpload:n,getUploadConfig:t=>({fileName:t.name,purpose:e}),uploadFile:y(r)?r:({upload:e,file:t,onProgress:n})=>{let r=new FormData;return e.fields.forEach(({key:e,value:t})=>r.append(e,t)),r.append(`file`,t),setTimeout(()=>n(.8),100),se.make({url:e.url,method:`POST`,body:r,type:`text`}).mapOkToResult(ce)},formatAndSizeDescription:D(`supportingDocuments.documentTypes`,{maxSizeMB:2e7/1e6}),onRemoveFile:f?void 0:u,onChange:t=>{if(a){E.current.set(e,t);let n=E.current.entries().reduce((e,[t,n])=>{let r=n.map(e=>({purpose:t,file:e}));return e.push(...r),e},[]);l?.(n)}},showIds:d})]})}),(0,F.jsx)(b,{height:24})]},e)}),O.length===0?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(b,{height:24}),(0,F.jsx)(v,{align:`center`,children:D(`supportingDocuments.noDocuments`)}),(0,F.jsx)(b,{height:24})]}):null,(0,F.jsxs)(M,{visible:h,title:D(`supportingDocuments.powerOfAttorneyModal.title`),icon:`document-regular`,onPressClose:()=>g(!1),children:[(0,F.jsx)(v,{children:D(`supportingDocuments.powerOfAttorneyModal.description`)}),(0,F.jsx)(b,{height:16}),(0,F.jsx)(oe,{paddingBottom:0,children:(0,F.jsx)(w,{grow:!0,color:`current`,onPress:()=>window.open(`/power-of-attorney-template/${o(a).with(`fr`,()=>`fr`).with(`de`,()=>`de`).with(`es`,()=>`es`).with(`it`,()=>`it`).otherwise(()=>`en`)}.pdf`),children:D(`supportingDocuments.downloadTemplate`)})})]}),(0,F.jsxs)(M,{visible:re,title:k?.label??`Sworn Statement`,icon:`document-regular`,onPressClose:()=>ie(!1),children:[(0,F.jsx)(v,{children:k?.description??``}),(0,F.jsx)(b,{height:16}),(0,F.jsx)(oe,{paddingBottom:0,children:(0,F.jsx)(w,{grow:!0,color:`current`,onPress:()=>{window.open(`/sworn-statement-template/${o(a).with(`nl`,()=>`nl`).with(`es`,()=>`es`).with(`it`,()=>`it`).otherwise(()=>`en`)}.pdf`)},children:D(`supportingDocuments.downloadTemplate`)})})]}),(0,F.jsx)(M,{visible:y(ae),title:D(`supportingDocuments.informations`),icon:`document-regular`,onPressClose:()=>x(void 0),children:(0,F.jsx)(pe,{children:ae?.values.map(({title:e,value:t,type:n},r)=>(0,F.jsx)(de,{type:`viewSmall`,label:e,actions:n===`copy`&&(0,F.jsx)(fe,{valueToCopy:t,copiedText:D(`copyButton.copiedTooltip`),copyText:D(`copyButton.copyTooltip`)}),render:()=>(0,F.jsx)(v,{variant:`regular`,color:_.gray[900],children:t})},`metadata-${r}`))})})]})},z.__docgenInfo={description:``,methods:[{name:`areAllRequiredDocumentsFilled`,docblock:null,modifiers:[],params:[],returns:null},{name:`addDocument`,docblock:null,modifiers:[],params:[{name:`document`,optional:!1,type:null}],returns:null}],displayName:`SupportingDocumentCollection`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`title`,value:{name:`string`,required:!0}},{key:`values`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ type?: "text" | "copy"; title: string; value: string }`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`"text" | "copy"`,elements:[{name:`literal`,value:`"text"`},{name:`literal`,value:`"copy"`}],required:!1}},{key:`title`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}}]}}],raw:`{ type?: "text" | "copy"; title: string; value: string }[]`,required:!0}}]}},{name:`undefined`}]}}},description:``},readonlyDocumentPurposes:{required:!1,tsType:{name:`Array`,elements:[{name:`Purpose`}],raw:`Purpose[]`},description:``,defaultValue:{value:`[]`,computed:!1}}}}})),B,V,Se,H,U,Ce,W,G,K,q,J,Y,X,Z,Q,$,we;t((()=>{i(),C(),B=e(n()),xe(),me(),V=r(),Se={title:`Onboarding/SupportingDocumentCollection`,component:z},H=()=>l.make(e=>{setTimeout(()=>{e(u.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),U=e=>l.make(e=>{setTimeout(()=>{e(u.Ok({headers:new Headers,status:200,ok:!0,url:``,response:c.None()}))},500)}),Ce=e=>l.value(u.Ok(void 0)),W=()=>{let[e,t]=(0,B.useState)([]),n=(0,B.useRef)(null);return(0,V.jsx)(j,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,V.jsxs)(A,{title:`Default`,children:[(0,V.jsx)(z,{ref:n,status:`WaitingForDocument`,generateUpload:H,uploadFile:U,documents:e,onChange:t,onRemoveFile:Ce,documentPurposes:{CompanyRegistration:{label:`Company registration document`,description:`A document proving the registration of the company (e.g. Kbis in France)`,purposeDetails:`Other details about company registration`,required:!0},ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0},SwornStatement:{label:`Sworn statement`,description:`A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate`,required:!0},PowerOfAttorney:{label:`Power of attorney`,description:`A power of attorney signed by the legal representative of the company`,required:!0},ProofOfBusinessActivity:{label:`Proof of business activity`,description:`A document proving the business activity of the company (e.g. invoice, contract)`,required:!0},CompanyFormationRegistration:{label:`Company formation registration`,description:`A document proving the formation registration of the company (e.g. articles of association)`,required:!0},UnknownDocumentType:{label:`Unknown document type`,description:`This is an unknown document type used for testing purposes`,required:!0}},getPurposeMetadata:e=>({title:`Show metadata`,values:[{title:`Purpose`,value:e},{title:`ID`,value:`666`,type:`copy`},{title:`Lorem ipsum`,value:`dolor sit amet`}]})}),(0,V.jsx)(w,{onPress:()=>{n.current!=null&&n.current.addDocument({purpose:`UltimateBeneficialOwnerProofOfAddress`,file:{id:crypto.randomUUID(),name:`toto.jpg`,statusInfo:{status:`Uploaded`}}})},children:`Add other document from outside`})]})})},G=()=>{let[e,t]=(0,B.useState)([]);return(0,V.jsx)(j,{title:`WaitingForDocumentShowIds`,description:`Supporting document collection`,children:(0,V.jsx)(A,{title:`Default`,children:(0,V.jsx)(z,{status:`WaitingForDocument`,generateUpload:H,uploadFile:U,documents:e,onChange:t,documentPurposes:{CompanyRegistration:{label:`Company registration document`,description:`A document proving the registration of the company (e.g. Kbis in France)`,required:!0},ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0},SwornStatement:{label:`Sworn statement`,description:`A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate`,required:!0},PowerOfAttorney:{label:`Power of attorney`,description:`A power of attorney signed by the legal representative of the company`,required:!0},UnknownDocumentType:{label:`Unknown document type`,description:`This is an unknown document type used for testing purposes`,required:!0}},showIds:!0})})})},K=()=>{let[e,t]=(0,B.useState)([{purpose:`CompanyRegistration`,file:{id:`id`,name:`CompanyRegistration.pdf`,statusInfo:{status:`Validated`}}},{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,statusInfo:{status:`Validated`}}},{purpose:`SwornStatement`,file:{id:`sworn`,name:`SwornStatement.pdf`,statusInfo:{status:`Uploaded`}}},{purpose:`ProofOfBusinessActivity`,file:{id:`power`,name:`power.pdf`,url:`https://swan.io`,statusInfo:{status:`Refused`,reasonCode:`Invalid document`}}},{purpose:`PowerOfAttorney`,file:{id:`power`,name:`power.pdf`,url:`https://swan.io`,statusInfo:{status:`Refused`,reasonCode:`Invalid document`,reason:`The document is blurry`}}}]);return(0,V.jsx)(j,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,V.jsx)(A,{title:`Default`,children:(0,V.jsx)(z,{status:`WaitingForDocument`,generateUpload:H,uploadFile:U,documents:e,onChange:t,documentPurposes:{CompanyRegistration:{label:`Company registration document`,description:`A document proving the registration of the company (e.g. Kbis in France)`,required:!0},ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0},SwornStatement:{label:`Sworn statement`,description:`A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate`,required:!0},PowerOfAttorney:{label:`Power of attorney`,description:`A power of attorney signed by the legal representative of the company`,required:!0},UnknownDocumentType:{label:`Unknown document type`,description:`This is an unknown document type used for testing purposes`,required:!0}},onRemoveFile:()=>l.make(e=>{setTimeout(()=>{e(u.Ok(void 0))},1e3)})})})})},q=()=>(0,V.jsx)(j,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,V.jsx)(A,{title:`Default`,children:(0,V.jsx)(z,{status:`PendingReview`,generateUpload:H,uploadFile:U,documents:[{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,url:`https://swan.io`,statusInfo:{status:`Pending`}}}],documentPurposes:{ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0}}})})}),J=()=>(0,V.jsx)(j,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,V.jsx)(A,{title:`Default`,children:(0,V.jsx)(z,{status:`Approved`,generateUpload:H,uploadFile:U,documents:[{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,url:`https://swan.io`,statusInfo:{status:`Validated`}}}],documentPurposes:{ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0}}})})}),Y=()=>(0,V.jsx)(j,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,V.jsx)(A,{title:`Default`,children:(0,V.jsx)(z,{status:`Approved`,generateUpload:H,uploadFile:U,documents:[{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,statusInfo:{status:`Validated`}}}],documentPurposes:{ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0}}})})}),X=()=>(0,V.jsx)(j,{title:`SupportingDocument`,description:`Supporting document collection`,children:(0,V.jsx)(A,{title:`Default`,children:(0,V.jsx)(z,{status:`Rejected`,generateUpload:H,uploadFile:U,documents:[{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,url:`https://swan.io`,statusInfo:{status:`Refused`,reasonCode:`Invalid document`}}}],documentPurposes:{ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0}}})})}),Z=()=>{let[e,t]=(0,B.useState)([]);return(0,V.jsx)(j,{title:`WaitingForDocumentShowIds`,description:`Supporting document collection`,children:(0,V.jsx)(A,{title:`Default`,children:(0,V.jsx)(z,{status:`WaitingForDocument`,generateUpload:H,uploadFile:U,documents:e,onChange:t,documentPurposes:{},showIds:!0,readOnly:!0})})})},Q=()=>(0,V.jsx)(j,{title:`WaitingForDocumentShowIds`,description:`Supporting document collection`,children:(0,V.jsx)(A,{title:`Default`,children:(0,V.jsx)(z,{status:`WaitingForDocument`,generateUpload:H,uploadFile:U,documents:[{purpose:`ProofOfIdentity`,file:{id:`id`,name:`IdCard.pdf`,url:`https://swan.io`,statusInfo:{status:`Refused`,reason:`Invalid document`,reasonCode:`InvalidDocument`}}}],onChange:()=>{},documentPurposes:{ProofOfIdentity:{label:`Proof of identity`,description:`A document proving the identity of a person (e.g. ID card, passport)`,required:!0}},showIds:!0,readOnly:!0})})}),$=()=>{let[e,t]=(0,B.useState)([]),n=(0,B.useRef)(null);return(0,V.jsx)(j,{title:`SupportingDocumentI18nSupport`,description:`Supporting document collection`,children:[`BEL`,`DEU`,`FRA`,`ITA`,`NLD`,`ESP`,`PRT`].map(r=>(0,V.jsx)(A,{title:r,children:(0,V.jsx)(z,{ref:n,status:`WaitingForDocument`,generateUpload:H,uploadFile:U,documents:e,onChange:t,onRemoveFile:Ce,companyCountry:r,documentPurposes:{CompanyRegistration:{label:`Company registration document`,description:`A document proving the registration of the company (e.g. Kbis in France)`,purposeDetails:`Other details about company registration`,required:!0}}})},r))})},W.__docgenInfo={description:``,methods:[],displayName:`WaitingForDocument`},G.__docgenInfo={description:``,methods:[],displayName:`WaitingForDocumentShowIds`},K.__docgenInfo={description:``,methods:[],displayName:`WaitingForDocumentWithApprovedAndRejected`},q.__docgenInfo={description:``,methods:[],displayName:`Pending`},J.__docgenInfo={description:``,methods:[],displayName:`Approved`},Y.__docgenInfo={description:``,methods:[],displayName:`ApprovedWithoutDownload`},X.__docgenInfo={description:``,methods:[],displayName:`Rejected`},Z.__docgenInfo={description:``,methods:[],displayName:`ReadOnlyEmpty`},Q.__docgenInfo={description:``,methods:[],displayName:`ReadOnlyWithDocs`},$.__docgenInfo={description:``,methods:[],displayName:`WaitingForDocumentI18nSupport`},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}},we=[`WaitingForDocument`,`WaitingForDocumentShowIds`,`WaitingForDocumentWithApprovedAndRejected`,`Pending`,`Approved`,`ApprovedWithoutDownload`,`Rejected`,`ReadOnlyEmpty`,`ReadOnlyWithDocs`,`WaitingForDocumentI18nSupport`]}))();export{J as Approved,Y as ApprovedWithoutDownload,q as Pending,Z as ReadOnlyEmpty,Q as ReadOnlyWithDocs,X as Rejected,W as WaitingForDocument,$ as WaitingForDocumentI18nSupport,G as WaitingForDocumentShowIds,K as WaitingForDocumentWithApprovedAndRejected,we as __namedExportsOrder,Se as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-Bcj4vM9I.js.map