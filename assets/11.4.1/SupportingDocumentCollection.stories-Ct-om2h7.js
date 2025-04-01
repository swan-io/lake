import{j as e}from"./jsx-runtime-8P-18mTY.js";import{u as Le,F as _e,p as Y,z as M,i as V,S,L as A,c as Me,n as He,s as ze,H as Re,G as Ue}from"./ScrollView-BKkPsNRr.js";import{a as Z,L as O}from"./LakeButton-CHVRx-Bn.js";import{r as a}from"./index-Cs7sjTYM.js";import{c as $e}from"./commonStyles-BBEkV6IC.js";import{L as Ge}from"./LakeCopyButton-nbw00fF1.js";import{L as ee}from"./LakeLabel-BLdWqsrL.js";import{R as Ke}from"./ReadOnlyFieldList-P7-w1yVU.js";import{t as o,m as Je,v as Qe,l as Xe,i as Fe}from"./i18n-BT0_VNLo.js";import{F as Ye}from"./FilesUploader-CpHkYY21.js";import{L as N}from"./LakeModal-C3blnP1N.js";import{S as p,a as m}from"./_StoriesComponents-CMI8D8ye.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BKZjgRaT.js";import"./Pressable-BMgg_GIt.js";import"./index-BOFhFDBp.js";import"./extends-CF3RwP-h.js";import"./clipboard-BXAk6GqW.js";import"./v4-C6aID195.js";import"./Separator-DVYelPYG.js";import"./rifm-DfuVNZKU.js";import"./utc-JZaFi-_r.js";import"./array-BfAlyugE.js";import"./FileInput-B7nYzSfx.js";import"./LakeHeading-DyTBtVNA.js";import"./useBoolean-DHW5baxv.js";import"./LakeAlert-WTy9mfL2.js";import"./useResponsive-CzIqCC5v.js";import"./Tag-r1Rj7iV5.js";import"./index-CXuZBaac.js";import"./FocusTrap-DbeXHdd-.js";import"./Suspendable-dEtQ-lRc.js";import"./ResponsiveContainer-DeHxhXsU.js";import"./TransitionView-CVbm9pvN.js";import"./useBodyClassName-DMoYUPTW.js";const H=a.memo(a.forwardRef(({style:n,onReset:r,onSubmit:i,...f},W)=>Le("form",{...f,ref:W,onReset:v=>{v.preventDefault(),r==null||r(v)},onSubmit:v=>{v.preventDefault(),i==null||i(v)},style:[$e.view,n]})));H.displayName="Form";H.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FormEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FormEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const Ze=["application/pdf","image/png","image/jpeg","image/heic"],L=ze.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),_=n=>M(n).with({type:"tooltip"},({text:r,width:i})=>e.jsx(He,{content:r,width:i,togglableOnFocus:!0,placement:"right",maxWidth:400,children:e.jsx(O,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",disabled:!0,style:[L.button,L.buttonWithDefaultCursor],ariaLabel:o("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:i})=>e.jsx(O,{mode:"tertiary",size:"small",color:"gray",icon:n.icon??"question-circle-regular",onPress:i,style:L.button,ariaLabel:o("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),et=n=>{const r=`supportingDocuments.purpose.${n}`;return Fe(r)?o(r):n},tt=n=>{const r=`supportingDocuments.purpose.${n}.description`;return Fe(r)?o(r):""},xe=({documents:n,generateUpload:r,uploadFile:i,requiredDocumentPurposes:f,templateLanguage:W=Xe.language,status:v,onRemoveFile:Oe,showIds:Ce=!1,readOnly:E=!1,getPurposeMetadata:B,readonlyDocumentPurposes:Te=[]},Ae)=>{const[We,z]=a.useState(!1),[Ee,$]=a.useState(!1),[C,G]=a.useState(void 0),[D,Be]=a.useState([]),K=a.useMemo(()=>{const t=new Set(f),l=[...D,...n];l.forEach(s=>t.add(s.purpose));const g=new Map([...t].map(s=>{const u=l.filter(y=>y.purpose===s);return[s,u]})),k=new Set(f),w=new Map([...t].map(s=>{const u=g.get(s)??[],T=u.length>0&&u.every(P=>P.file.statusInfo.status==="Validated")?0:k.has(s)?1:2;return[s,T]}));return[...t].sort((s,u)=>{const y=w.get(s)??2;return(w.get(u)??2)>y?-1:1}).map(s=>{const u=g.get(s)??[];return{purpose:s,files:u.map(y=>y.file),isRequired:k.has(s),areAllDocumentsValidated:w.get(s)===0}})},[f,n,D]),J=a.useRef(new Map(_e.filterMap(K,({isRequired:t,purpose:l,files:g})=>t?Y.Some([l,g]):Y.None()))),Q=a.useRef({});a.useImperativeHandle(Ae,()=>({areAllRequiredDocumentsFilled:()=>[...J.current.values()].every(l=>l.length>0),addDocument:t=>{Be(l=>[...l,t])}})),a.useEffect(()=>{const t=D[D.length-1];if(t!=null){const l=Q.current[t==null?void 0:t.purpose];l!=null&&l.add(t.file)}},[D]);const X=K.filter(({files:t})=>!(E&&t.length===0));return e.jsxs(H,{children:[X.map(({purpose:t,files:l,areAllDocumentsValidated:g,isRequired:k})=>{const w=B==null?void 0:B(t),s=tt(t);return e.jsxs(a.Fragment,{children:[e.jsx(ee,{label:et(t),description:s,help:V(w)?e.jsx(_,{type:"button",label:w.title,onPress:()=>G(w)}):M(t).with("PowerOfAttorney",()=>e.jsx(_,{type:"button",icon:"arrow-down-filled",label:o("supportingDocuments.help.downloadTemplate"),onPress:()=>z(!0)})).with("SwornStatement",()=>e.jsx(_,{type:"button",icon:"arrow-down-filled",label:o("supportingDocuments.help.downloadTemplate"),onPress:()=>$(!0)})).otherwise(()=>null),render:()=>e.jsx(Ye,{ref:u=>{Q.current[t]=u},canUpload:!Te.includes(t)&&!E&&v==="WaitingForDocument"&&!g,accept:Ze,maxSize:2e7,icon:"document-regular",initialFiles:l,generateUpload:r,getUploadConfig:u=>({fileName:u.name,purpose:t}),uploadFile:V(i)?i:({upload:u,file:y,onProgress:T})=>{const P=new FormData;return u.fields.forEach(({key:Ve,value:Ne})=>P.append(Ve,Ne)),P.append("file",y),setTimeout(()=>T(.8),100),Je.make({url:u.url,method:"POST",body:P,type:"text"}).mapOkToResult(Qe)},formatAndSizeDescription:o("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:E?void 0:Oe,onChange:u=>{k&&J.current.set(t,u)},showIds:Ce})}),e.jsx(S,{height:24})]},t)}),X.length===0?e.jsxs(e.Fragment,{children:[e.jsx(S,{height:24}),e.jsx(A,{align:"center",children:o("supportingDocuments.noDocuments")}),e.jsx(S,{height:24})]}):null,e.jsxs(N,{visible:We,title:o("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>z(!1),children:[e.jsx(A,{children:o("supportingDocuments.powerOfAttorneyModal.description")}),e.jsx(S,{height:16}),e.jsx(Z,{paddingBottom:0,children:e.jsx(O,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${M(W).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:o("supportingDocuments.downloadTemplate")})})]}),e.jsxs(N,{visible:Ee,title:o("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>$(!1),children:[e.jsx(A,{children:o("supportingDocuments.purpose.SwornStatement.description")}),e.jsx(S,{height:16}),e.jsx(Z,{paddingBottom:0,children:e.jsx(O,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:o("supportingDocuments.downloadTemplate")})})]}),e.jsx(N,{visible:V(C),title:o("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>G(void 0),children:e.jsx(Ke,{children:C==null?void 0:C.values.map(({title:t,value:l,type:g},k)=>e.jsx(ee,{type:"viewSmall",label:t,actions:g==="copy"&&e.jsx(Ge,{valueToCopy:l,copiedText:o("copyButton.copiedTooltip"),copyText:o("copyButton.copyTooltip")}),render:()=>e.jsx(A,{variant:"regular",color:Me.gray[900],children:l})},`metadata-${k}`))})})]})},d=a.forwardRef(xe);xe.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollectionWithRef",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
| "PendingReview"
| "Approved"
| "Canceled"
| "Rejected"`,elements:[{name:"literal",value:'"WaitingForDocument"'},{name:"literal",value:'"PendingReview"'},{name:"literal",value:'"Approved"'},{name:"literal",value:'"Canceled"'},{name:"literal",value:'"Rejected"'}]},description:""},generateUpload:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  input: UploadInput<Purpose>,
) => Future<Result<UploadOutputWithId<UploadOutput>, unknown>>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ fileName: string; purpose: Purpose }",signature:{properties:[{key:"fileName",value:{name:"string",required:!0}},{key:"purpose",value:{name:"Purpose",required:!0}}]}},name:"input"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"signature",type:"object",raw:"{ id: string; upload: UploadOutput }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"signature",type:"object",raw:"{ url: string; fields: { key: string; value: string }[] }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; value: string }[]",required:!0}}]},required:!0}}]}},{name:"unknown"}],raw:"Result<UploadOutputWithId<UploadOutput>, unknown>"}],raw:"Future<Result<UploadOutputWithId<UploadOutput>, unknown>>"}}},description:""},documents:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  purpose: Purpose;
  file: SwanFile;
}`,signature:{properties:[{key:"purpose",value:{name:"Purpose",required:!0}},{key:"file",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"signature",type:"object",raw:"{ url: string; fields: { key: string; value: string }[] }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; value: string }[]",required:!0}}]},required:!0}},{key:"file",value:{name:"File",required:!0}},{key:"onProgress",value:{name:"signature",type:"function",raw:"(progress: number) => void",signature:{arguments:[{type:{name:"number"},name:"progress"}],return:{name:"void"}},required:!0}}]}},name:"config"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"Response",elements:[{name:"string"}],raw:"Response<string>"},{name:"union",raw:"NetworkError | TimeoutError",elements:[{name:"NetworkError"},{name:"TimeoutError"}]}],raw:"Result<Response<string>, NetworkError | TimeoutError>"}],raw:"Future<Result<Response<string>, NetworkError | TimeoutError>>"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(documents: Document<Purpose>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  purpose: Purpose;
  file: SwanFile;
}`,signature:{properties:[{key:"purpose",value:{name:"Purpose",required:!0}},{key:"file",value:{name:"signature",type:"object",raw:`{
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
  values: {
    type?: "text" | "copy";
    title: string;
    value: string;
  }[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type?: "text" | "copy";
  title: string;
  value: string;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"text" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"copy"'}],required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:`{
  type?: "text" | "copy";
  title: string;
  value: string;
}[]`,required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};d.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
| "PendingReview"
| "Approved"
| "Canceled"
| "Rejected"`,elements:[{name:"literal",value:'"WaitingForDocument"'},{name:"literal",value:'"PendingReview"'},{name:"literal",value:'"Approved"'},{name:"literal",value:'"Canceled"'},{name:"literal",value:'"Rejected"'}]},description:""},generateUpload:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  input: UploadInput<Purpose>,
) => Future<Result<UploadOutputWithId<UploadOutput>, unknown>>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ fileName: string; purpose: Purpose }",signature:{properties:[{key:"fileName",value:{name:"string",required:!0}},{key:"purpose",value:{name:"Purpose",required:!0}}]}},name:"input"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"signature",type:"object",raw:"{ id: string; upload: UploadOutput }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"signature",type:"object",raw:"{ url: string; fields: { key: string; value: string }[] }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; value: string }[]",required:!0}}]},required:!0}}]}},{name:"unknown"}],raw:"Result<UploadOutputWithId<UploadOutput>, unknown>"}],raw:"Future<Result<UploadOutputWithId<UploadOutput>, unknown>>"}}},description:""},documents:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  purpose: Purpose;
  file: SwanFile;
}`,signature:{properties:[{key:"purpose",value:{name:"Purpose",required:!0}},{key:"file",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"signature",type:"object",raw:"{ url: string; fields: { key: string; value: string }[] }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; value: string }[]",required:!0}}]},required:!0}},{key:"file",value:{name:"File",required:!0}},{key:"onProgress",value:{name:"signature",type:"function",raw:"(progress: number) => void",signature:{arguments:[{type:{name:"number"},name:"progress"}],return:{name:"void"}},required:!0}}]}},name:"config"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"Response",elements:[{name:"string"}],raw:"Response<string>"},{name:"union",raw:"NetworkError | TimeoutError",elements:[{name:"NetworkError"},{name:"TimeoutError"}]}],raw:"Result<Response<string>, NetworkError | TimeoutError>"}],raw:"Future<Result<Response<string>, NetworkError | TimeoutError>>"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(documents: Document<Purpose>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  purpose: Purpose;
  file: SwanFile;
}`,signature:{properties:[{key:"purpose",value:{name:"Purpose",required:!0}},{key:"file",value:{name:"signature",type:"object",raw:`{
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
  values: {
    type?: "text" | "copy";
    title: string;
    value: string;
  }[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type?: "text" | "copy";
  title: string;
  value: string;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"text" | "copy"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"copy"'}],required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:`{
  type?: "text" | "copy";
  title: string;
  value: string;
}[]`,required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const Et={title:"Onboarding/SupportingDocumentCollection",component:d},c=()=>Re.make(n=>{setTimeout(()=>{n(Ue.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),q=()=>{const[n,r]=a.useState([]),i=a.useRef(null);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsxs(m,{title:"Default",children:[e.jsx(d,{ref:i,status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],getPurposeMetadata:f=>({title:"Show metadata",values:[{title:"Purpose",value:f},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),e.jsx(O,{onPress:()=>{i.current!=null&&i.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},h=()=>{const[n,r]=a.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},j=()=>{const[n,r]=a.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>Re.make(i=>{setTimeout(()=>{i(Ue.Ok(void 0))},1e3)})})})})},I=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"PendingReview",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),b=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),R=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),U=()=>e.jsx(p,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"Rejected",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),F=()=>{const[n,r]=a.useState([]);return e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:n,onChange:r,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},x=()=>e.jsx(p,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(m,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:c,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document",reasonCode:"InvalidDocument"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});q.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};h.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};j.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};I.__docgenInfo={description:"",methods:[],displayName:"Pending"};b.__docgenInfo={description:"",methods:[],displayName:"Approved"};R.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};U.__docgenInfo={description:"",methods:[],displayName:"Rejected"};F.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};x.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};var te,ne,re;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(re=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,se,ue;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(ue=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var oe,ie,le;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(le=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,pe,me;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(me=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ce,ge,ye;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(ye=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var fe,ve,we;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(we=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var ke,De,Pe;U.parameters={...U.parameters,docs:{...(ke=U.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(Pe=(De=U.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Se,qe,he;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(he=(qe=F.parameters)==null?void 0:qe.docs)==null?void 0:he.source}}};var je,Ie,be;x.parameters={...x.parameters,docs:{...(je=x.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(be=(Ie=x.parameters)==null?void 0:Ie.docs)==null?void 0:be.source}}};const Bt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{b as Approved,R as ApprovedWithoutDownload,I as Pending,F as ReadOnlyEmpty,x as ReadOnlyWithDocs,U as Rejected,q as WaitingForDocument,h as WaitingForDocumentShowIds,j as WaitingForDocumentWithApprovedAndRejected,Bt as __namedExportsOrder,Et as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-Ct-om2h7.js.map
