import{m as Se,l as h,E as G,Y as qe,J as $,s as fe,H as De,j as r,N as H,h as je,S as O,L as B,n as be}from"./Space-Bfex_hJx.js";import{r as m}from"./index-CBqU2yxZ.js";import{c as Ie}from"./commonStyles-t4XfA7cz.js";import{a as X,L}from"./LakeButton-DgMSOTHv.js";import{L as Re}from"./LakeLabel-DH4-TAU9.js";import{t as o,l as Ue,i as ve}from"./i18n-CbHmU6GW.js";import{F as Oe}from"./FilesUploader-CQ5VRkyT.js";import{L as Y}from"./LakeModal-CDSHR7lY.js";import{S as D,a as j}from"./_StoriesComponents-BGHZFReg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-BgOPYjbo.js";import"./index-CYWflgUg.js";import"./v4-D8aEg3BZ.js";import"./rifm-CVL2Q3jR.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./FileInput-D7cjzzCb.js";import"./LakeHeading-DZcX5sRZ.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./LakeAlert-C2IVsz--.js";import"./Tag-BaCsPH4E.js";import"./index-D1EpuBSR.js";import"./FocusTrap-D5nWZIMn.js";import"./a11y-DXvpDVrG.js";import"./LoadingView-B05U2Qzg.js";import"./ResponsiveContainer-KmCWIE16.js";import"./TransitionView-BczQdH9L.js";import"./useBodyClassName-FAgY5CgW.js";const J=m.memo(m.forwardRef(({style:e,onReset:t,onSubmit:a,...i},l)=>Se("form",{...i,ref:l,onReset:p=>{p.preventDefault(),t==null||t(p)},onSubmit:p=>{p.preventDefault(),a==null||a(p)},style:[Ie.view,e]})));J.displayName="Form";J.__docgenInfo={description:"",methods:[],displayName:"Form"};function we(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(we=function(){return!!e})()}function K(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_(e,t)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(e)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,i){return a.__proto__=i,a},_(e,t)}function E(e){var t=typeof Map=="function"?new Map:void 0;return E=function(a){if(a===null||!function(l){try{return Function.toString.call(l).indexOf("[native code]")!==-1}catch{return typeof l=="function"}}(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(a))return t.get(a);t.set(a,i)}function i(){return function(l,p,w){if(we())return Reflect.construct.apply(null,arguments);var y=[null];y.push.apply(y,p);var k=new(l.bind.apply(l,y));return w&&_(k,w.prototype),k}(a,arguments,z(this).constructor)}return i.prototype=Object.create(a.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),_(i,a)},E(e)}var Fe=function(e){function t(){return e.apply(this,arguments)||this}return K(t,e),t}(E(Error)),xe=function(e){function t(){return e.apply(this,arguments)||this}return K(t,e),t}(E(Error)),Ae=function(e){function t(){return e.apply(this,arguments)||this}return K(t,e),t}(E(Error)),Ce=function(e){return e.ok?h.Ok(e):h.Error(new Ae("Received HTTP status "+e.status))},Te={make:function(e){var t=e.url,a=e.method,i=a===void 0?"GET":a,l=e.responseType,p=e.body,w=e.headers,y=e.withCredentials,k=y!==void 0&&y,S=e.onLoadStart,P=e.onProgress,R=e.timeout;return G.make(function(q){var n=new XMLHttpRequest;n.withCredentials=k,n.open(i,t,!0),l!=null&&(n.responseType=l),R!=null&&(n.timeout=R),w!=null&&qe.entries(w).forEach(function(u){return n.setRequestHeader(u[0],u[1])});var d=function(){s(),q(h.Error(new Fe))},g=function(){s(),q(h.Error(new xe))},f=function(){s();var u=n.status,c=$.fromNullable(n.response);q(h.Ok({status:u,ok:u>=200&&u<300,response:c,xhr:n}))},s=function(){n.removeEventListener("error",d),n.removeEventListener("load",f),n.removeEventListener("timeout",g),S!=null&&n.removeEventListener("loadstart",S),P!=null&&n.removeEventListener("progress",P)};return n.addEventListener("error",d),n.addEventListener("load",f),n.addEventListener("timeout",g),S!=null&&n.addEventListener("loadstart",S),P!=null&&n.addEventListener("progress",P),n.send(p),function(){s(),n.abort()}})}};const We=["application/pdf","image/png","image/jpeg"],N=fe.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),M=e=>H(e).with({type:"tooltip"},({text:t,width:a})=>r.jsx(be,{content:t,width:a,togglableOnFocus:!0,placement:"right",children:r.jsx(L,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",disabled:!0,style:[N.button,N.buttonWithDefaultCursor],ariaLabel:o("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:t,onPress:a})=>r.jsx(L,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",onPress:a,style:N.button,ariaLabel:o("supportingDocuments.help.whatIsThis"),children:t})).exhaustive(),_e=e=>{const t=`supportingDocuments.purpose.${e}`;return ve(t)?o(t):e},Ee=e=>{const t=`supportingDocuments.purpose.${e}.description`;return ve(t)?o(t):""},ke=({documents:e,generateUpload:t,requiredDocumentPurposes:a,templateLanguage:i=Ue.language,status:l,onRemoveFile:p},w)=>{const[y,k]=m.useState(!1),[S,P]=m.useState(!1),R=m.useMemo(()=>{const n=new Set(a);e.forEach(s=>n.add(s.purpose));const d=new Map([...n].map(s=>{const u=e.filter(c=>c.purpose===s);return[s,u]})),g=new Set(a),f=new Map([...n].map(s=>{const u=d.get(s)??[],V=u.length>0&&u.every(U=>U.file.statusInfo.status==="Validated")?0:g.has(s)?1:2;return[s,V]}));return[...n].sort((s,u)=>{const c=f.get(s)??2;return(f.get(u)??2)>c?-1:1}).map(s=>{const u=d.get(s)??[];return{purpose:s,files:u.map(c=>c.file),isRequired:g.has(s),areAllDocumentsValidated:f.get(s)===0}})},[a,e]),q=m.useRef(new Map(De.filterMap(R,({isRequired:n,purpose:d,files:g})=>n?$.Some([d,g]):$.None())));return m.useImperativeHandle(w,()=>({areAllRequiredDocumentsFilled:()=>[...q.current.values()].every(d=>d.length>0)})),r.jsxs(J,{children:[R.map(({purpose:n,files:d,areAllDocumentsValidated:g,isRequired:f})=>r.jsxs(m.Fragment,{children:[r.jsx(Re,{label:_e(n),help:H(n).with("PowerOfAttorney",()=>r.jsx(M,{type:"button",label:o("supportingDocuments.help.whatIsThis"),onPress:()=>k(!0)})).with("SwornStatement",()=>r.jsx(M,{type:"button",label:o("supportingDocuments.help.whatIsThis"),onPress:()=>P(!0)})).otherwise(()=>{const s=Ee(n);return je(s)?r.jsx(M,{type:"tooltip",text:s}):null}),render:()=>r.jsx(Oe,{canUpload:l==="WaitingForDocument"&&!g,accept:We,maxSize:2e7,icon:"document-regular",initialFiles:d,generateUpload:t,getUploadConfig:s=>({fileName:s.name,purpose:n}),uploadFile:({upload:s,file:u,onLoadStart:c,onProgress:V})=>{const U=new FormData;return s.fields.forEach(({key:Pe,value:he})=>U.append(Pe,he)),U.append("file",u),Te.make({url:s.url,method:"POST",onLoadStart:c,onProgress:V,body:U}).mapOkToResult(Ce)},formatAndSizeDescription:o("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:p,onChange:s=>{f&&q.current.set(n,s)}})}),r.jsx(O,{height:24})]},n)),a.length===0?r.jsxs(r.Fragment,{children:[r.jsx(O,{height:24}),r.jsx(B,{children:o("supportingDocuments.noRequiredDocuments")}),r.jsx(O,{height:24})]}):null,r.jsxs(Y,{visible:y,title:o("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>k(!1),children:[r.jsx(B,{children:o("supportingDocuments.powerOfAttorneyModal.description")}),r.jsx(O,{height:16}),r.jsx(X,{paddingBottom:0,children:r.jsx(L,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${H(i).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:o("supportingDocuments.downloadTemplate")})})]}),r.jsxs(Y,{visible:S,title:o("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>P(!1),children:[r.jsx(B,{children:o("supportingDocuments.purpose.SwornStatement.description")}),r.jsx(O,{height:16}),r.jsx(X,{paddingBottom:0,children:r.jsx(L,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:o("supportingDocuments.downloadTemplate")})})]})]})},v=m.forwardRef(ke);ke.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SupportingDocumentCollectionWithRef",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Document<Purpose>[]"},description:""},requiredDocumentPurposes:{required:!0,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(documents: Document<Purpose>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}}}};v.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SupportingDocumentCollection",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Document<Purpose>[]"},description:""},requiredDocumentPurposes:{required:!0,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(documents: Document<Purpose>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}}}};const b=fe.create({storyPart:{maxWidth:600}}),vt={title:"Onboarding/SupportingDocumentCollection",component:v};let Ve=-1;const I=()=>G.make(e=>{setTimeout(()=>{e(h.Ok({id:String(++Ve),upload:{url:window.location.href,fields:[]}}))},500)}),F=()=>{const[e,t]=m.useState([]);return r.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:r.jsx(j,{title:"Default",style:b.storyPart,children:r.jsx(v,{status:"WaitingForDocument",generateUpload:I,documents:e,onChange:t,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"]})})})},x=()=>{const[e,t]=m.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return r.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:r.jsx(j,{title:"Default",style:b.storyPart,children:r.jsx(v,{status:"WaitingForDocument",generateUpload:I,documents:e,onChange:t,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>G.make(a=>{setTimeout(()=>{a(h.Ok(void 0))},1e3)})})})})},A=()=>r.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:r.jsx(j,{title:"Default",style:b.storyPart,children:r.jsx(v,{status:"PendingReview",generateUpload:I,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),C=()=>r.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:r.jsx(j,{title:"Default",style:b.storyPart,children:r.jsx(v,{status:"Approved",generateUpload:I,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),T=()=>r.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:r.jsx(j,{title:"Default",style:b.storyPart,children:r.jsx(v,{status:"Approved",generateUpload:I,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),W=()=>r.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:r.jsx(j,{title:"Default",style:b.storyPart,children:r.jsx(v,{status:"Rejected",generateUpload:I,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})});F.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};x.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};A.__docgenInfo={description:"",methods:[],displayName:"Pending"};C.__docgenInfo={description:"",methods:[],displayName:"Approved"};T.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};W.__docgenInfo={description:"",methods:[],displayName:"Rejected"};var Q,Z,ee;F.parameters={...F.parameters,docs:{...(Q=F.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} />
      </StoryPart>
    </StoryBlock>;
}`,...(ee=(Z=F.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} onRemoveFile={() => Future.make(resolve => {
        setTimeout(() => {
          resolve(Result.Ok(undefined));
        }, 1_000);
      })} />
      </StoryPart>
    </StoryBlock>;
}`,...(ne=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,se,ue;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
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
}`,...(ue=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var oe,ie,le;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
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
}`,...(le=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var pe,de,me;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
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
}`,...(me=(de=T.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,ge,ye;W.parameters={...W.parameters,docs:{...(ce=W.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
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
}`,...(ye=(ge=W.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};const wt=["WaitingForDocument","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected"];export{C as Approved,T as ApprovedWithoutDownload,A as Pending,W as Rejected,F as WaitingForDocument,x as WaitingForDocumentWithApprovedAndRejected,wt as __namedExportsOrder,vt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-BnR-IH2D.js.map
