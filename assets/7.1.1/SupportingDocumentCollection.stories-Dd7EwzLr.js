import{m as _e,l as I,E as ne,Y as Ee,J as Z,s as Ve,H as Le,j as t,N as ee,h as Ne,S as A,L as X,n as Me}from"./Space-ChRvaji1.js";import{r as u}from"./index-CBqU2yxZ.js";import{c as He}from"./commonStyles-t4XfA7cz.js";import{a as ae,L as M}from"./LakeButton-DtHKm00B.js";import{L as $e}from"./LakeLabel-eh2tYIa7.js";import{t as l,l as ze,i as Ce}from"./i18n-CfpzMoPR.js";import{F as Ge}from"./FilesUploader-Dy0KOQox.js";import{L as se}from"./LakeModal-Tov8lR90.js";import{S as v,a as h}from"./_StoriesComponents-DuIeS3XV.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-DD_-8IPu.js";import"./index-BkhpigpK.js";import"./v4-D8aEg3BZ.js";import"./rifm-Cou_E0eS.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./FileInput-DhYLOaRK.js";import"./LakeHeading-Bl7tDfdx.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./LakeAlert-TXF_dQRT.js";import"./Tag-CVWgFnN7.js";import"./index-iZC5RSM6.js";import"./index-DGaDRGzj.js";import"./FocusTrap-C4GXdqkW.js";import"./a11y-DXvpDVrG.js";import"./LoadingView-DwJWTgnl.js";import"./ResponsiveContainer-BR850dXq.js";import"./TransitionView-3jE9ifvD.js";import"./useBodyClassName-FAgY5CgW.js";const re=u.memo(u.forwardRef(({style:e,onReset:n,onSubmit:r,...p},m)=>_e("form",{...p,ref:m,onReset:c=>{c.preventDefault(),n==null||n(c)},onSubmit:c=>{c.preventDefault(),r==null||r(c)},style:[He.view,e]})));re.displayName="Form";re.__docgenInfo={description:"",methods:[],displayName:"Form"};function We(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(We=function(){return!!e})()}function oe(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,H(e,n)}function te(e){return te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},te(e)}function H(e,n){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,p){return r.__proto__=p,r},H(e,n)}function $(e){var n=typeof Map=="function"?new Map:void 0;return $=function(r){if(r===null||!function(m){try{return Function.toString.call(m).indexOf("[native code]")!==-1}catch{return typeof m=="function"}}(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(n!==void 0){if(n.has(r))return n.get(r);n.set(r,p)}function p(){return function(m,c,D){if(We())return Reflect.construct.apply(null,arguments);var f=[null];f.push.apply(f,c);var j=new(m.bind.apply(m,f));return D&&H(j,D.prototype),j}(r,arguments,te(this).constructor)}return p.prototype=Object.create(r.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),H(p,r)},$(e)}var Je=function(e){function n(){return e.apply(this,arguments)||this}return oe(n,e),n}($(Error)),Ke=function(e){function n(){return e.apply(this,arguments)||this}return oe(n,e),n}($(Error)),Xe=function(e){function n(){return e.apply(this,arguments)||this}return oe(n,e),n}($(Error)),Ye=function(e){return e.ok?I.Ok(e):I.Error(new Xe("Received HTTP status "+e.status))},Qe={make:function(e){var n=e.url,r=e.method,p=r===void 0?"GET":r,m=e.responseType,c=e.body,D=e.headers,f=e.withCredentials,j=f!==void 0&&f,b=e.onLoadStart,P=e.onProgress,z=e.timeout;return ne.make(function(U){var a=new XMLHttpRequest;a.withCredentials=j,a.open(p,n,!0),m!=null&&(a.responseType=m),z!=null&&(a.timeout=z),D!=null&&Ee.entries(D).forEach(function(w){return a.setRequestHeader(w[0],w[1])});var G=function(){q(),U(I.Error(new Je))},F=function(){q(),U(I.Error(new Ke))},x=function(){q();var w=a.status,o=Z.fromNullable(a.response);U(I.Ok({status:w,ok:w>=200&&w<300,response:o,xhr:a}))},q=function(){a.removeEventListener("error",G),a.removeEventListener("load",x),a.removeEventListener("timeout",F),b!=null&&a.removeEventListener("loadstart",b),P!=null&&a.removeEventListener("progress",P)};return a.addEventListener("error",G),a.addEventListener("load",x),a.addEventListener("timeout",F),b!=null&&a.addEventListener("loadstart",b),P!=null&&a.addEventListener("progress",P),a.send(c),function(){q(),a.abort()}})}};const Ze=["application/pdf","image/png","image/jpeg"],Y=Ve.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),Q=e=>ee(e).with({type:"tooltip"},({text:n,width:r})=>t.jsx(Me,{content:n,width:r,togglableOnFocus:!0,placement:"right",children:t.jsx(M,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",disabled:!0,style:[Y.button,Y.buttonWithDefaultCursor],ariaLabel:l("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:n,onPress:r})=>t.jsx(M,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",onPress:r,style:Y.button,ariaLabel:l("supportingDocuments.help.whatIsThis"),children:n})).exhaustive(),et=e=>{const n=`supportingDocuments.purpose.${e}`;return Ce(n)?l(n):e},tt=e=>{const n=`supportingDocuments.purpose.${e}.description`;return Ce(n)?l(n):""},Te=({documents:e,generateUpload:n,requiredDocumentPurposes:r,templateLanguage:p=ze.language,status:m,onRemoveFile:c,showIds:D=!1,readOnly:f=!1},j)=>{const[b,P]=u.useState(!1),[z,U]=u.useState(!1),[a,G]=u.useState([]),F=u.useMemo(()=>{const o=new Set(r),d=[...a,...e];d.forEach(s=>o.add(s.purpose));const O=new Map([...o].map(s=>{const y=d.filter(k=>k.purpose===s);return[s,y]})),J=new Set(r),i=new Map([...o].map(s=>{const y=O.get(s)??[],R=y.length>0&&y.every(K=>K.file.statusInfo.status==="Validated")?0:J.has(s)?1:2;return[s,R]}));return[...o].sort((s,y)=>{const k=i.get(s)??2;return(i.get(y)??2)>k?-1:1}).map(s=>{const y=O.get(s)??[];return{purpose:s,files:y.map(k=>k.file),isRequired:J.has(s),areAllDocumentsValidated:i.get(s)===0}})},[r,e,a]),x=u.useRef(new Map(Le.filterMap(F,({isRequired:o,purpose:d,files:O})=>o?Z.Some([d,O]):Z.None()))),q=u.useRef({});u.useImperativeHandle(j,()=>({areAllRequiredDocumentsFilled:()=>[...x.current.values()].every(d=>d.length>0),addDocument:o=>{G(d=>[...d,o])}})),u.useEffect(()=>{const o=a[a.length-1];if(o!=null){const d=q.current[o==null?void 0:o.purpose];d!=null&&d.add(o.file)}},[a]);const w=F.filter(({files:o})=>!(f&&o.length===0));return t.jsxs(re,{children:[w.map(({purpose:o,files:d,areAllDocumentsValidated:O,isRequired:J})=>t.jsxs(u.Fragment,{children:[t.jsx($e,{label:et(o),help:ee(o).with("PowerOfAttorney",()=>t.jsx(Q,{type:"button",label:l("supportingDocuments.help.whatIsThis"),onPress:()=>P(!0)})).with("SwornStatement",()=>t.jsx(Q,{type:"button",label:l("supportingDocuments.help.whatIsThis"),onPress:()=>U(!0)})).otherwise(()=>{const i=tt(o);return Ne(i)?t.jsx(Q,{type:"tooltip",text:i}):null}),render:()=>t.jsx(Ge,{ref:i=>q.current[o]=i,canUpload:!f&&m==="WaitingForDocument"&&!O,accept:Ze,maxSize:2e7,icon:"document-regular",initialFiles:d,generateUpload:n,getUploadConfig:i=>({fileName:i.name,purpose:o}),uploadFile:({upload:i,file:s,onLoadStart:y,onProgress:k})=>{const R=new FormData;return i.fields.forEach(({key:K,value:Be})=>R.append(K,Be)),R.append("file",s),Qe.make({url:i.url,method:"POST",onLoadStart:y,onProgress:k,body:R}).mapOkToResult(Ye)},formatAndSizeDescription:l("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:f?void 0:c,onChange:i=>{J&&x.current.set(o,i)},showIds:D})}),t.jsx(A,{height:24})]},o)),w.length===0?t.jsxs(t.Fragment,{children:[t.jsx(A,{height:24}),t.jsx(X,{align:"center",children:l("supportingDocuments.noDocuments")}),t.jsx(A,{height:24})]}):null,t.jsxs(se,{visible:b,title:l("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>P(!1),children:[t.jsx(X,{children:l("supportingDocuments.powerOfAttorneyModal.description")}),t.jsx(A,{height:16}),t.jsx(ae,{paddingBottom:0,children:t.jsx(M,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${ee(p).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:l("supportingDocuments.downloadTemplate")})})]}),t.jsxs(se,{visible:z,title:l("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>U(!1),children:[t.jsx(X,{children:l("supportingDocuments.purpose.SwornStatement.description")}),t.jsx(A,{height:16}),t.jsx(ae,{paddingBottom:0,children:t.jsx(M,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:l("supportingDocuments.downloadTemplate")})})]})]})},g=u.forwardRef(Te);Te.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollectionWithRef",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};g.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ct={title:"Onboarding/SupportingDocumentCollection",component:g},S=()=>ne.make(e=>{setTimeout(()=>{e(I.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),C=()=>{const[e,n]=u.useState([]),r=u.useRef(null);return t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsxs(h,{title:"Default",children:[t.jsx(g,{ref:r,status:"WaitingForDocument",generateUpload:S,documents:e,onChange:n,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"]}),t.jsx(M,{onPress:()=>{r.current!=null&&r.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},W=()=>{const[e,n]=u.useState([]);return t.jsx(v,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:S,documents:e,onChange:n,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},T=()=>{const[e,n]=u.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:S,documents:e,onChange:n,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>ne.make(r=>{setTimeout(()=>{r(I.Ok(void 0))},1e3)})})})})},B=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"PendingReview",generateUpload:S,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),_=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"Approved",generateUpload:S,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),E=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"Approved",generateUpload:S,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),V=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"Rejected",generateUpload:S,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),L=()=>{const[e,n]=u.useState([]);return t.jsx(v,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:S,documents:e,onChange:n,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},N=()=>t.jsx(v,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:S,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});C.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};W.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};T.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};B.__docgenInfo={description:"",methods:[],displayName:"Pending"};_.__docgenInfo={description:"",methods:[],displayName:"Approved"};E.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};V.__docgenInfo={description:"",methods:[],displayName:"Rejected"};L.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};N.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};var ue,ie,le;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(le=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,pe,me;W.parameters={...W.parameters,docs:{...(de=W.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(me=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ce,ge,fe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(fe=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ye,we,ve;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(ve=(we=B.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var he,Se,ke;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(ke=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var De,Pe,qe;E.parameters={...E.parameters,docs:{...(De=E.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(qe=(Pe=E.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var Ie,je,be;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(be=(je=V.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var Ue,Oe,Re;L.parameters={...L.parameters,docs:{...(Ue=L.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(Re=(Oe=L.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var Fe,xe,Ae;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(Ae=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};const Wt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{_ as Approved,E as ApprovedWithoutDownload,B as Pending,L as ReadOnlyEmpty,N as ReadOnlyWithDocs,V as Rejected,C as WaitingForDocument,W as WaitingForDocumentShowIds,T as WaitingForDocumentWithApprovedAndRejected,Wt as __namedExportsOrder,Ct as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-Dd7EwzLr.js.map
