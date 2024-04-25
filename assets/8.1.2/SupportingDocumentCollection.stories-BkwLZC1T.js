import{m as xe,s as Ae,J as Ce,H as $,j as e,$ as B,h as We,i as Le,S as P,L as C,n as Be,N as qe,v as he}from"./Space-DwfUYIjw.js";import{r as s}from"./index-CBqU2yxZ.js";import{c as Ne}from"./commonStyles-t4XfA7cz.js";import{a as G,L as O}from"./LakeButton-0CIdhlx-.js";import{L as Ve}from"./LakeLabel-CCeRol2L.js";import{m as Me,d as _e}from"./Request-BF0DgW8g.js";import{t as i,l as He,i as Ie}from"./i18n-B_jTi3ZH.js";import{F as Xe}from"./FilesUploader-CYQ0tjJz.js";import{L as J}from"./LakeModal-Bza0FCRs.js";import{S as m,a as c}from"./_StoriesComponents-DjOscnYS.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-Q8uRqM2I.js";import"./index-CRMzMpWr.js";import"./v4-D8aEg3BZ.js";import"./rifm-B_8IlkT7.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./FileInput-BlS253p1.js";import"./LakeHeading-CowWM-cF.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./LakeAlert-BhCJT0YJ.js";import"./useResponsive-DqxxkJk8.js";import"./Tag-B0Vb3Vmt.js";import"./index-DNZKa5vc.js";import"./index-DGaDRGzj.js";import"./FocusTrap-H7s5I7sp.js";import"./a11y-DXvpDVrG.js";import"./Suspendable-BzCnqYSr.js";import"./ResponsiveContainer-BFkNPuEU.js";import"./TransitionView-Dcb5h8Pn.js";import"./useBodyClassName-FAgY5CgW.js";const N=s.memo(s.forwardRef(({style:n,onReset:r,onSubmit:u,...k},E)=>xe("form",{...k,ref:E,onReset:f=>{f.preventDefault(),r==null||r(f)},onSubmit:f=>{f.preventDefault(),u==null||u(f)},style:[Ne.view,n]})));N.displayName="Form";N.__docgenInfo={description:"",methods:[],displayName:"Form"};const ze=["application/pdf","image/png","image/jpeg"],W=Ae.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),L=n=>B(n).with({type:"tooltip"},({text:r,width:u})=>e.jsx(Be,{content:r,width:u,togglableOnFocus:!0,placement:"right",maxWidth:400,children:e.jsx(O,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",disabled:!0,style:[W.button,W.buttonWithDefaultCursor],ariaLabel:i("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:u})=>e.jsx(O,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",onPress:u,style:W.button,ariaLabel:i("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),$e=n=>{const r=`supportingDocuments.purpose.${n}`;return Ie(r)?i(r):n},Ge=n=>{const r=`supportingDocuments.purpose.${n}.description`;return Ie(r)?i(r):""},je=({documents:n,generateUpload:r,uploadFile:u,requiredDocumentPurposes:k,templateLanguage:E=He.language,status:f,onRemoveFile:Re,showIds:be=!1,readOnly:x=!1},Ue)=>{const[Fe,V]=s.useState(!1),[Oe,M]=s.useState(!1),[S,Te]=s.useState([]),_=s.useMemo(()=>{const t=new Set(k),l=[...S,...n];l.forEach(a=>t.add(a.purpose));const v=new Map([...t].map(a=>{const p=l.filter(y=>y.purpose===a);return[a,p]})),T=new Set(k),o=new Map([...t].map(a=>{const p=v.get(a)??[],w=p.length>0&&p.every(A=>A.file.statusInfo.status==="Validated")?0:T.has(a)?1:2;return[a,w]}));return[...t].sort((a,p)=>{const y=o.get(a)??2;return(o.get(p)??2)>y?-1:1}).map(a=>{const p=v.get(a)??[];return{purpose:a,files:p.map(y=>y.file),isRequired:T.has(a),areAllDocumentsValidated:o.get(a)===0}})},[k,n,S]),H=s.useRef(new Map(Ce.filterMap(_,({isRequired:t,purpose:l,files:v})=>t?$.Some([l,v]):$.None()))),X=s.useRef({});s.useImperativeHandle(Ue,()=>({areAllRequiredDocumentsFilled:()=>[...H.current.values()].every(l=>l.length>0),addDocument:t=>{Te(l=>[...l,t])}})),s.useEffect(()=>{const t=S[S.length-1];if(t!=null){const l=X.current[t==null?void 0:t.purpose];l!=null&&l.add(t.file)}},[S]);const z=_.filter(({files:t})=>!(x&&t.length===0));return e.jsxs(N,{children:[z.map(({purpose:t,files:l,areAllDocumentsValidated:v,isRequired:T})=>e.jsxs(s.Fragment,{children:[e.jsx(Ve,{label:$e(t),help:B(t).with("PowerOfAttorney",()=>e.jsx(L,{type:"button",label:i("supportingDocuments.help.whatIsThis"),onPress:()=>V(!0)})).with("SwornStatement",()=>e.jsx(L,{type:"button",label:i("supportingDocuments.help.whatIsThis"),onPress:()=>M(!0)})).otherwise(()=>{const o=Ge(t);return We(o)?e.jsx(L,{type:"tooltip",text:o}):null}),render:()=>e.jsx(Xe,{ref:o=>X.current[t]=o,canUpload:!x&&f==="WaitingForDocument"&&!v,accept:ze,maxSize:2e7,icon:"document-regular",initialFiles:l,generateUpload:r,getUploadConfig:o=>({fileName:o.name,purpose:t}),uploadFile:Le(u)?u:({upload:o,file:a,onLoadStart:p,onProgress:y})=>{const w=new FormData;return o.fields.forEach(({key:A,value:Ee})=>w.append(A,Ee)),w.append("file",a),Me.make({url:o.url,method:"POST",onLoadStart:p,onProgress:y,body:w}).mapOkToResult(_e)},formatAndSizeDescription:i("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:x?void 0:Re,onChange:o=>{T&&H.current.set(t,o)},showIds:be})}),e.jsx(P,{height:24})]},t)),z.length===0?e.jsxs(e.Fragment,{children:[e.jsx(P,{height:24}),e.jsx(C,{align:"center",children:i("supportingDocuments.noDocuments")}),e.jsx(P,{height:24})]}):null,e.jsxs(J,{visible:Fe,title:i("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>V(!1),children:[e.jsx(C,{children:i("supportingDocuments.powerOfAttorneyModal.description")}),e.jsx(P,{height:16}),e.jsx(G,{paddingBottom:0,children:e.jsx(O,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${B(E).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:i("supportingDocuments.downloadTemplate")})})]}),e.jsxs(J,{visible:Oe,title:i("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>M(!1),children:[e.jsx(C,{children:i("supportingDocuments.purpose.SwornStatement.description")}),e.jsx(P,{height:16}),e.jsx(G,{paddingBottom:0,children:e.jsx(O,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:i("supportingDocuments.downloadTemplate")})})]})]})},d=s.forwardRef(je);je.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollectionWithRef",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Document<Purpose>[]"},description:""},requiredDocumentPurposes:{required:!0,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:""},uploadFile:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  config: UploadFileInput<UploadOutput>,
) => Future<Result<Response<string>, NetworkError | TimeoutError>>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  upload: UploadOutput;
  file: File;
  onLoadStart: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
  onProgress: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"signature",type:"object",raw:"{ url: string; fields: { key: string; value: string }[] }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; value: string }[]",required:!0}}]},required:!0}},{key:"file",value:{name:"File",required:!0}},{key:"onLoadStart",value:{name:"signature",type:"function",raw:"(event: ProgressEvent<XMLHttpRequestEventTarget>) => void",signature:{arguments:[{type:{name:"ProgressEvent",elements:[{name:"XMLHttpRequestEventTarget"}],raw:"ProgressEvent<XMLHttpRequestEventTarget>"},name:"event"}],return:{name:"void"}},required:!0}},{key:"onProgress",value:{name:"signature",type:"function",raw:"(event: ProgressEvent<XMLHttpRequestEventTarget>) => void",signature:{arguments:[{type:{name:"ProgressEvent",elements:[{name:"XMLHttpRequestEventTarget"}],raw:"ProgressEvent<XMLHttpRequestEventTarget>"},name:"event"}],return:{name:"void"}},required:!0}}]}},name:"config"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"Response",elements:[{name:"string"}],raw:"Response<string>"},{name:"union",raw:"NetworkError | TimeoutError",elements:[{name:"NetworkError"},{name:"TimeoutError"}]}],raw:"Result<Response<string>, NetworkError | TimeoutError>"}],raw:"Future<Result<Response<string>, NetworkError | TimeoutError>>"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(documents: Document<Purpose>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Document<Purpose>[]"},name:"documents"}],return:{name:"void"}}},description:""},onRemoveFile:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: SwanFile) => Future<Result<unknown, unknown>>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"statusInfo",value:{name:"union",raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};d.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Document<Purpose>[]"},description:""},requiredDocumentPurposes:{required:!0,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:""},uploadFile:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  config: UploadFileInput<UploadOutput>,
) => Future<Result<Response<string>, NetworkError | TimeoutError>>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  upload: UploadOutput;
  file: File;
  onLoadStart: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
  onProgress: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"signature",type:"object",raw:"{ url: string; fields: { key: string; value: string }[] }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; value: string }[]",required:!0}}]},required:!0}},{key:"file",value:{name:"File",required:!0}},{key:"onLoadStart",value:{name:"signature",type:"function",raw:"(event: ProgressEvent<XMLHttpRequestEventTarget>) => void",signature:{arguments:[{type:{name:"ProgressEvent",elements:[{name:"XMLHttpRequestEventTarget"}],raw:"ProgressEvent<XMLHttpRequestEventTarget>"},name:"event"}],return:{name:"void"}},required:!0}},{key:"onProgress",value:{name:"signature",type:"function",raw:"(event: ProgressEvent<XMLHttpRequestEventTarget>) => void",signature:{arguments:[{type:{name:"ProgressEvent",elements:[{name:"XMLHttpRequestEventTarget"}],raw:"ProgressEvent<XMLHttpRequestEventTarget>"},name:"event"}],return:{name:"void"}},required:!0}}]}},name:"config"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"Response",elements:[{name:"string"}],raw:"Response<string>"},{name:"union",raw:"NetworkError | TimeoutError",elements:[{name:"NetworkError"},{name:"TimeoutError"}]}],raw:"Result<Response<string>, NetworkError | TimeoutError>"}],raw:"Future<Result<Response<string>, NetworkError | TimeoutError>>"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(documents: Document<Purpose>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Document<Purpose>[]"},name:"documents"}],return:{name:"void"}}},description:""},onRemoveFile:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: SwanFile) => Future<Result<unknown, unknown>>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"statusInfo",value:{name:"union",raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ut={title:"Onboarding/SupportingDocumentCollection",component:d},g=()=>qe.make(n=>{setTimeout(()=>{n(he.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),D=()=>{const[n,r]=s.useState([]),u=s.useRef(null);return e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsxs(c,{title:"Default",children:[e.jsx(d,{ref:u,status:"WaitingForDocument",generateUpload:g,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"]}),e.jsx(O,{onPress:()=>{u.current!=null&&u.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},q=()=>{const[n,r]=s.useState([]);return e.jsx(m,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:g,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},h=()=>{const[n,r]=s.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:g,documents:n,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>qe.make(u=>{setTimeout(()=>{u(he.Ok(void 0))},1e3)})})})})},I=()=>e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"PendingReview",generateUpload:g,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),j=()=>e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:g,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),R=()=>e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"Approved",generateUpload:g,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),b=()=>e.jsx(m,{title:"SupportingDocument",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"Rejected",generateUpload:g,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),U=()=>{const[n,r]=s.useState([]);return e.jsx(m,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:g,documents:n,onChange:r,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},F=()=>e.jsx(m,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:e.jsx(c,{title:"Default",children:e.jsx(d,{status:"WaitingForDocument",generateUpload:g,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});D.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};q.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};h.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};I.__docgenInfo={description:"",methods:[],displayName:"Pending"};j.__docgenInfo={description:"",methods:[],displayName:"Approved"};R.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};b.__docgenInfo={description:"",methods:[],displayName:"Rejected"};U.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};F.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};var K,Q,Y;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  const ref = useRef<SupportingDocumentCollectionRef<string>>(null);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection ref={ref} status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} />

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
}`,...(Y=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;q.parameters={...q.parameters,docs:{...(Z=q.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(te=(ee=q.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ne,ae;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(ae=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,ue,oe;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(oe=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var ie,le,de;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(de=(le=j.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,me,ce;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(ce=(me=R.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ge,ye,fe;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(fe=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var ve,we,ke;U.parameters={...U.parameters,docs:{...(ve=U.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(ke=(we=U.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Se,Pe,De;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
            reason: "Invalid document"
          }
        }
      }]} onChange={() => {}} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(De=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:De.source}}};const Ft=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{j as Approved,R as ApprovedWithoutDownload,I as Pending,U as ReadOnlyEmpty,F as ReadOnlyWithDocs,b as Rejected,D as WaitingForDocument,q as WaitingForDocumentShowIds,h as WaitingForDocumentWithApprovedAndRejected,Ft as __namedExportsOrder,Ut as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-BkwLZC1T.js.map
