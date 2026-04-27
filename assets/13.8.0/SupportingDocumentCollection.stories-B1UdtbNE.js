import{D as he,y as ve,p as H,j as e,B as ne,f as M,S as D,M as I,L as W,c as De,ac as Pe,s as Se,P as V,k as _}from"./ScrollView-CODiFaFh.js";import{a as S,L as re}from"./LakeButton-BWnbiXz5.js";import{r as i}from"./iframe-Cq29sBVl.js";import{c as ke}from"./commonStyles-BBEkV6IC.js";import{L as be}from"./LakeCopyButton-DNYPsxkm.js";import{L as oe}from"./LakeLabel-Cs94jpzX.js";import{R as Ie}from"./ReadOnlyFieldList-DsP-6zo_.js";import{t as a,l as z,m as je,v as qe,i as se}from"./i18n-B1ExevC5.js";import{F as Fe}from"./FilesUploader-CHofxqr0.js";import{L as K}from"./LakeModal-DB4r94ZA.js";import{S as c,a as m}from"./_StoriesComponents-bQstjKJN.js";import"./index-ccnNdJkJ.js";import"./Pressable-DkNhSab0.js";import"./index-BTU9dvsk.js";import"./extends-CF3RwP-h.js";import"./preload-helper-D1IIBeq1.js";import"./clipboard-BXAk6GqW.js";import"./v4-EwEgHOG0.js";import"./Separator-CMa9unlS.js";import"./rifm-Q71GrFPt.js";import"./array-BfAlyugE.js";import"./FileInput-d55nNuxB.js";import"./LakeHeading-DgIXQB3_.js";import"./useBoolean-HUeuHW6-.js";import"./LakeAlert-BWtG_LjZ.js";import"./useResponsive-oJM9YtiG.js";import"./Tag-D1CxRVvQ.js";import"./index-CFrTLIah.js";import"./FocusTrap-SvUNjMK9.js";import"./Suspendable-Wrava_UE.js";import"./ResponsiveContainer-C0BW24iA.js";import"./TransitionView-BnSIG3kM.js";import"./useBodyClassName-9So8UrwN.js";const ie=i.memo(({ref:n,style:r,onReset:u,onSubmit:k,...y})=>he("form",{...y,ref:n,onReset:w=>{w.preventDefault(),u?.(w)},onSubmit:w=>{w.preventDefault(),k?.(w)},style:[ke.view,r]}));ie.displayName="Form";const Re=["application/pdf","image/png","image/jpeg","image/heic"],G=Se.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),$=n=>I(n).with({type:"tooltip"},({text:r,width:u})=>e.jsx(Pe,{content:r,width:u,togglableOnFocus:!0,placement:"right",maxWidth:400,children:e.jsx(S,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",disabled:!0,style:[G.button,G.buttonWithDefaultCursor],ariaLabel:a("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:u})=>e.jsx(S,{mode:"secondary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",onPress:u,style:G.button,ariaLabel:a("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),ae=n=>I(n).with("fr",()=>"https://support.swan.io/hc/en-150/articles/22502977563933--Proof-of-registration-for-French-companies").with("it",()=>"https://support.swan.io/hc/en-150/articles/22537604831005--Proof-of-registration-for-Italian-companies").with("de",()=>"https://support.swan.io/hc/en-150/articles/22535023588509--Proof-of-registration-for-German-companies").with("es",()=>"https://support.swan.io/hc/en-150/articles/22544703221021--Proof-of-registration-for-Spanish-companies").with("nl",()=>"https://support.swan.io/hc/en-150/articles/22543228421277--Proof-of-registration-for-Dutch-companies").otherwise(()=>"https://support.swan.io/hc/en-150/articles/22620756787869-Proof-of-company-registration"),Ae=n=>{const r=`supportingDocuments.purpose.${n}`;return se(r)?a(r):n},Ce=n=>{const r=`supportingDocuments.purpose.${n}.description`;return se(r)?a(r):""},p=({ref:n,documents:r,generateUpload:u,uploadFile:k,requiredDocumentPurposes:y,templateLanguage:w=z.language,status:ue,onChange:le,onRemoveFile:de,showIds:pe=!1,readOnly:L=!1,getPurposeMetadata:ce,readonlyDocumentPurposes:me=[]})=>{const[ge,J]=i.useState(!1),[fe,Q]=i.useState(!1),[X,Y]=i.useState(void 0),[j,ye]=i.useState([]),Z=i.useMemo(()=>{const t=new Set(Object.keys(y)),s=[...j,...r];s.forEach(o=>t.add(o.purpose));const h=new Map([...t].map(o=>{const l=s.filter(d=>d.purpose===o);return[o,l]})),b=new Set(Object.keys(y)),P=new Map([...t].map(o=>{const l=h.get(o)??[],v=l.length>0&&l.every(q=>q.file.statusInfo.status==="Validated")?0:b.has(o)?1:2;return[o,v]}));return[...t].sort((o,l)=>{const d=P.get(o)??2;return(P.get(l)??2)>d?-1:1}).map(o=>{const l=h.get(o)??[];return{purpose:o,files:l.map(d=>d.file),isRequired:b.has(o),areAllDocumentsValidated:P.get(o)===0}})},[y,r,j]),N=i.useRef(new Map(ve.filterMap(Z,({isRequired:t,purpose:s,files:h})=>t?H.Some([s,h]):H.None()))),ee=i.useRef({});i.useImperativeHandle(n,()=>({areAllRequiredDocumentsFilled:()=>[...N.current.values()].every(s=>s.length>0),addDocument:t=>{ye(s=>[...s,t])}})),i.useEffect(()=>{const t=j[j.length-1];if(t!=null){const s=ee.current[t?.purpose];s?.add(t.file)}},[j]);const te=Z.filter(({files:t})=>!(L&&t.length===0));return e.jsxs(ie,{children:[te.map(({purpose:t,files:s,areAllDocumentsValidated:h,isRequired:b})=>{const P=ce?.(t);return e.jsxs(i.Fragment,{children:[e.jsx(oe,{label:y[t]?.label??Ae(t),description:y[t]?.purposeDetails??y[t]?.description??Ce(t),render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(ne,{direction:"row",children:[e.jsx(ne,{direction:"row",children:M(P)?t==="CompanyRegistration"?e.jsxs(e.Fragment,{children:[e.jsx(S,{size:"small",mode:"secondary",icon:"question-circle-regular",onPress:()=>window.open(ae(z.language)),ariaLabel:a("supportingDocuments.help.howToSendAGoodDocument"),children:a("supportingDocuments.help.howToSendAGoodDocument")}),e.jsx(D,{width:8})]}):e.jsxs(e.Fragment,{children:[e.jsx($,{type:"button",label:P.title,onPress:()=>Y(P)}),e.jsx(D,{width:8})]}):I(t).with("CompanyRegistration",()=>e.jsx(S,{size:"small",mode:"secondary",icon:"question-circle-regular",onPress:()=>window.open(ae(z.language)),ariaLabel:a("supportingDocuments.help.howToSendAGoodDocument"),children:a("supportingDocuments.help.howToSendAGoodDocument")})).otherwise(()=>null)}),I(t).with("PowerOfAttorney",()=>e.jsx($,{type:"button",icon:"arrow-down-filled",label:a("supportingDocuments.help.downloadTemplate"),onPress:()=>J(!0)})).with("SwornStatement",()=>e.jsx($,{type:"button",icon:"arrow-down-filled",label:a("supportingDocuments.help.downloadTemplate"),onPress:()=>Q(!0)})).otherwise(()=>null)]}),e.jsx(D,{height:16}),e.jsx(Fe,{ref:o=>{ee.current[t]=o},canUpload:!me.includes(t)&&!L&&ue==="WaitingForDocument"&&!h,accept:Re,maxSize:2e7,icon:"document-regular",initialFiles:s,generateUpload:u,getUploadConfig:o=>({fileName:o.name,purpose:t}),uploadFile:M(k)?k:({upload:o,file:l,onProgress:d})=>{const v=new FormData;return o.fields.forEach(({key:q,value:E})=>v.append(q,E)),v.append("file",l),setTimeout(()=>d(.8),100),je.make({url:o.url,method:"POST",body:v,type:"text"}).mapOkToResult(qe)},formatAndSizeDescription:a("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:L?void 0:de,onChange:o=>{if(b){N.current.set(t,o);const l=N.current.entries().reduce((d,[v,q])=>{const E=q.map(we=>({purpose:v,file:we}));return d.push(...E),d},[]);le?.(l)}},showIds:pe})]})}),e.jsx(D,{height:24})]},t)}),te.length===0?e.jsxs(e.Fragment,{children:[e.jsx(D,{height:24}),e.jsx(W,{align:"center",children:a("supportingDocuments.noDocuments")}),e.jsx(D,{height:24})]}):null,e.jsxs(K,{visible:ge,title:a("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>J(!1),children:[e.jsx(W,{children:a("supportingDocuments.powerOfAttorneyModal.description")}),e.jsx(D,{height:16}),e.jsx(re,{paddingBottom:0,children:e.jsx(S,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${I(w).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`),children:a("supportingDocuments.downloadTemplate")})})]}),e.jsxs(K,{visible:fe,title:a("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>Q(!1),children:[e.jsx(W,{children:a("supportingDocuments.purpose.SwornStatement.description")}),e.jsx(D,{height:16}),e.jsx(re,{paddingBottom:0,children:e.jsx(S,{grow:!0,color:"current",onPress:()=>{window.open(`/sworn-statement-template/${I(w).with("nl",()=>"nl").with("es",()=>"es").with("it",()=>"it").otherwise(()=>"en")}.pdf`)},children:a("supportingDocuments.downloadTemplate")})})]}),e.jsx(K,{visible:M(X),title:a("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>Y(void 0),children:e.jsx(Ie,{children:X?.values.map(({title:t,value:s,type:h},b)=>e.jsx(oe,{type:"viewSmall",label:t,actions:h==="copy"&&e.jsx(be,{valueToCopy:s,copiedText:a("copyButton.copiedTooltip"),copyText:a("copyButton.copyTooltip")}),render:()=>e.jsx(W,{variant:"regular",color:De.gray[900],children:s})},`metadata-${b}`))})})]})};p.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},getPurposeMetadata:{required:!1,tsType:{name:"signature",type:"function",raw:"(purose: Purpose) => PurposeMetadata | undefined",signature:{arguments:[{type:{name:"Purpose"},name:"purose"}],return:{name:"union",raw:"PurposeMetadata | undefined",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  values: { type?: "text" | "copy"; title: string; value: string }[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ type?: "text" | "copy"; title: string; value: string }',signature:{properties:[{key:"type",value:{name:"union",raw:'"text" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"copy"'}],required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:'{ type?: "text" | "copy"; title: string; value: string }[]',required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const ct={title:"Onboarding/SupportingDocumentCollection",component:p},g=()=>V.make(n=>{setTimeout(()=>{n(_.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),f=n=>V.make(r=>{setTimeout(()=>{r(_.Ok({headers:new Headers,status:200,ok:!0,url:"",response:H.None()}))},500)}),xe=n=>V.value(_.Ok(void 0)),F=()=>{const[n,r]=i.useState([]),u=i.useRef(null);return e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsxs(m,{title:"Default",children:[e.jsx(p,{ref:u,status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:n,onChange:r,onRemoveFile:xe,requiredDocumentPurposes:{CompanyRegistration:{label:"Company registration document",description:"A document proving the registration of the company (e.g. Kbis in France)",purposeDetails:"Other details about company registration"},ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"},SwornStatement:{label:"Sworn statement",description:"A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"},PowerOfAttorney:{label:"Power of attorney",description:"A power of attorney signed by the legal representative of the company"},ProofOfBusinessActivity:{label:"Proof of business activity",description:"A document proving the business activity of the company (e.g. invoice, contract)"},CompanyFormationRegistration:{label:"Company formation registration",description:"A document proving the formation registration of the company (e.g. articles of association)"},UnknownDocumentType:{label:"Unknown document type",description:"This is an unknown document type used for testing purposes"}},getPurposeMetadata:k=>({title:"Show metadata",values:[{title:"Purpose",value:k},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),e.jsx(S,{onPress:()=>{u.current!=null&&u.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},R=()=>{const[n,r]=i.useState([]);return e.jsx(c,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:n,onChange:r,requiredDocumentPurposes:{CompanyRegistration:{label:"Company registration document",description:"A document proving the registration of the company (e.g. Kbis in France)"},ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"},SwornStatement:{label:"Sworn statement",description:"A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"},PowerOfAttorney:{label:"Power of attorney",description:"A power of attorney signed by the legal representative of the company"},UnknownDocumentType:{label:"Unknown document type",description:"This is an unknown document type used for testing purposes"}},showIds:!0})})})},A=()=>{const[n,r]=i.useState([{purpose:"CompanyRegistration",file:{id:"id",name:"CompanyRegistration.pdf",statusInfo:{status:"Validated"}}},{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:n,onChange:r,requiredDocumentPurposes:{CompanyRegistration:{label:"Company registration document",description:"A document proving the registration of the company (e.g. Kbis in France)"},ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"},SwornStatement:{label:"Sworn statement",description:"A sworn statement signed by the legal representative of the company, attesting that the information provided is accurate"},PowerOfAttorney:{label:"Power of attorney",description:"A power of attorney signed by the legal representative of the company"},UnknownDocumentType:{label:"Unknown document type",description:"This is an unknown document type used for testing purposes"}},onRemoveFile:()=>V.make(u=>{setTimeout(()=>{u(_.Ok(void 0))},1e3)})})})})},C=()=>e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"PendingReview",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),x=()=>e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"Approved",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),U=()=>e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"Approved",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),O=()=>e.jsx(c,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"Rejected",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}}})})}),T=()=>{const[n,r]=i.useState([]);return e.jsx(c,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:n,onChange:r,requiredDocumentPurposes:{},showIds:!0,readOnly:!0})})})},B=()=>e.jsx(c,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(p,{status:"WaitingForDocument",generateUpload:g,uploadFile:f,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document",reasonCode:"InvalidDocument"}}}],onChange:()=>{},requiredDocumentPurposes:{ProofOfIdentity:{label:"Proof of identity",description:"A document proving the identity of a person (e.g. ID card, passport)"}},showIds:!0,readOnly:!0})})});F.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};R.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};A.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};C.__docgenInfo={description:"",methods:[],displayName:"Pending"};x.__docgenInfo={description:"",methods:[],displayName:"Approved"};U.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};O.__docgenInfo={description:"",methods:[],displayName:"Rejected"};T.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};B.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}};const mt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{x as Approved,U as ApprovedWithoutDownload,C as Pending,T as ReadOnlyEmpty,B as ReadOnlyWithDocs,O as Rejected,F as WaitingForDocument,R as WaitingForDocumentShowIds,A as WaitingForDocumentWithApprovedAndRejected,mt as __namedExportsOrder,ct as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-B1UdtbNE.js.map
