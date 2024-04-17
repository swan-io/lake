import{m as Be,l as R,E as ne,Y as _e,H as ee,s as Ne,G as Ve,j as t,$ as te,h as Me,i as He,S as x,L as J,n as Xe}from"./Space-B-tuzGSB.js";import{r as d}from"./index-CBqU2yxZ.js";import{c as $e}from"./commonStyles-t4XfA7cz.js";import{a as ue,L as H}from"./LakeButton-B_Hql0KV.js";import{L as ze}from"./LakeLabel-gdk5iRjD.js";import{t as m,l as Ge,i as Ae}from"./i18n-DA5rVMx_.js";import{F as Ke}from"./FilesUploader-BqL7oc-x.js";import{L as oe}from"./LakeModal-Xej-shSM.js";import{S as v,a as w}from"./_StoriesComponents-qw3Cph9e.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-D4CfqCYA.js";import"./index-CP-wDJ33.js";import"./v4-D8aEg3BZ.js";import"./rifm-BUW2jT7k.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./FileInput-CupYbbLH.js";import"./LakeHeading-CLNxGxoz.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./LakeAlert-skcJtdOq.js";import"./Tag-B6kABNBY.js";import"./index-BWWcrcy6.js";import"./index-DGaDRGzj.js";import"./FocusTrap-Dcd989mj.js";import"./a11y-DXvpDVrG.js";import"./Suspendable-DyQqXxP8.js";import"./ResponsiveContainer-CKdPUfoO.js";import"./TransitionView-C72wiUIW.js";import"./useBodyClassName-FAgY5CgW.js";const ae=d.memo(d.forwardRef(({style:e,onReset:r,onSubmit:n,...a},i)=>Be("form",{...a,ref:i,onReset:u=>{u.preventDefault(),r==null||r(u)},onSubmit:u=>{u.preventDefault(),n==null||n(u)},style:[$e.view,e]})));ae.displayName="Form";ae.__docgenInfo={description:"",methods:[],displayName:"Form"};function Ce(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ce=function(){return!!e})()}function se(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,X(e,r)}function re(e){return re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},re(e)}function X(e,r){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},X(e,r)}function $(e){var r=typeof Map=="function"?new Map:void 0;return $=function(n){if(n===null||!function(i){try{return Function.toString.call(i).indexOf("[native code]")!==-1}catch{return typeof i=="function"}}(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return function(i,u,D){if(Ce())return Reflect.construct.apply(null,arguments);var h=[null];h.push.apply(h,u);var P=new(i.bind.apply(i,h));return D&&X(P,D.prototype),P}(n,arguments,re(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),X(a,n)},$(e)}var Ye=function(e){function r(n){var a;return(a=e.call(this,"Request to "+n+" failed")||this).url=void 0,a.url=n,a}return se(r,e),r}($(Error)),Je=function(e){function r(n,a){var i;return a==null?((i=e.call(this,"Request to "+n+" timed out")||this).url=void 0,i.timeout=void 0):((i=e.call(this,"Request to "+n+" timed out (> "+a+"ms)")||this).url=void 0,i.timeout=void 0),i.url=n,i.timeout=a,function(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}(i)}return se(r,e),r}($(Error)),Qe=function(e){function r(n,a,i){var u;return(u=e.call(this,"Request to "+n+" gave status "+a)||this).url=void 0,u.status=void 0,u.response=void 0,u.url=n,u.status=a,u.response=i,u}return se(r,e),r}($(Error)),Ze=function(e){return e.ok?R.Ok(e):R.Error(new Qe(e.url,e.status,e.response.toUndefined()))},et={make:function(e){var r=e.url,n=e.method,a=n===void 0?"GET":n,i=e.responseType,u=e.body,D=e.headers,h=e.withCredentials,P=h!==void 0&&h,I=e.onLoadStart,b=e.onProgress,U=e.timeout;return ne.make(function(E){var o=new XMLHttpRequest;o.withCredentials=P,o.open(a,r,!0),i!=null&&(o.responseType=i),U!=null&&(o.timeout=U),D!=null&&_e.entries(D).forEach(function(y){return o.setRequestHeader(y[0],y[1])});var S=function(){j(),E(R.Error(new Ye(r)))},z=function(){j(),E(R.Error(new Je(r,U)))},T=function(){j();var y=o.status,G=ee.fromNullable(o.response);E(R.Ok({url:r,status:y,ok:y>=200&&y<300,response:G,xhr:o}))},j=function(){o.removeEventListener("error",S),o.removeEventListener("load",T),o.removeEventListener("timeout",z),I!=null&&o.removeEventListener("loadstart",I),b!=null&&o.removeEventListener("progress",b)};return o.addEventListener("error",S),o.addEventListener("load",T),o.addEventListener("timeout",z),I!=null&&o.addEventListener("loadstart",I),b!=null&&o.addEventListener("progress",b),o.send(u),function(){j(),o.abort()}})}};const tt=["application/pdf","image/png","image/jpeg"],Q=Ne.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),Z=e=>te(e).with({type:"tooltip"},({text:r,width:n})=>t.jsx(Xe,{content:r,width:n,togglableOnFocus:!0,placement:"right",maxWidth:400,children:t.jsx(H,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",disabled:!0,style:[Q.button,Q.buttonWithDefaultCursor],ariaLabel:m("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:n})=>t.jsx(H,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",onPress:n,style:Q.button,ariaLabel:m("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),rt=e=>{const r=`supportingDocuments.purpose.${e}`;return Ae(r)?m(r):e},nt=e=>{const r=`supportingDocuments.purpose.${e}.description`;return Ae(r)?m(r):""},Le=({documents:e,generateUpload:r,uploadFile:n,requiredDocumentPurposes:a,templateLanguage:i=Ge.language,status:u,onRemoveFile:D,showIds:h=!1,readOnly:P=!1},I)=>{const[b,U]=d.useState(!1),[E,o]=d.useState(!1),[S,z]=d.useState([]),T=d.useMemo(()=>{const s=new Set(a),c=[...S,...e];c.forEach(l=>s.add(l.purpose));const O=new Map([...s].map(l=>{const f=c.filter(q=>q.purpose===l);return[l,f]})),K=new Set(a),p=new Map([...s].map(l=>{const f=O.get(l)??[],F=f.length>0&&f.every(Y=>Y.file.statusInfo.status==="Validated")?0:K.has(l)?1:2;return[l,F]}));return[...s].sort((l,f)=>{const q=p.get(l)??2;return(p.get(f)??2)>q?-1:1}).map(l=>{const f=O.get(l)??[];return{purpose:l,files:f.map(q=>q.file),isRequired:K.has(l),areAllDocumentsValidated:p.get(l)===0}})},[a,e,S]),j=d.useRef(new Map(Ve.filterMap(T,({isRequired:s,purpose:c,files:O})=>s?ee.Some([c,O]):ee.None()))),y=d.useRef({});d.useImperativeHandle(I,()=>({areAllRequiredDocumentsFilled:()=>[...j.current.values()].every(c=>c.length>0),addDocument:s=>{z(c=>[...c,s])}})),d.useEffect(()=>{const s=S[S.length-1];if(s!=null){const c=y.current[s==null?void 0:s.purpose];c!=null&&c.add(s.file)}},[S]);const G=T.filter(({files:s})=>!(P&&s.length===0));return t.jsxs(ae,{children:[G.map(({purpose:s,files:c,areAllDocumentsValidated:O,isRequired:K})=>t.jsxs(d.Fragment,{children:[t.jsx(ze,{label:rt(s),help:te(s).with("PowerOfAttorney",()=>t.jsx(Z,{type:"button",label:m("supportingDocuments.help.whatIsThis"),onPress:()=>U(!0)})).with("SwornStatement",()=>t.jsx(Z,{type:"button",label:m("supportingDocuments.help.whatIsThis"),onPress:()=>o(!0)})).otherwise(()=>{const p=nt(s);return Me(p)?t.jsx(Z,{type:"tooltip",text:p}):null}),render:()=>t.jsx(Ke,{ref:p=>y.current[s]=p,canUpload:!P&&u==="WaitingForDocument"&&!O,accept:tt,maxSize:2e7,icon:"document-regular",initialFiles:c,generateUpload:r,getUploadConfig:p=>({fileName:p.name,purpose:s}),uploadFile:He(n)?n:({upload:p,file:l,onLoadStart:f,onProgress:q})=>{const F=new FormData;return p.fields.forEach(({key:Y,value:We})=>F.append(Y,We)),F.append("file",l),et.make({url:p.url,method:"POST",onLoadStart:f,onProgress:q,body:F}).mapOkToResult(Ze)},formatAndSizeDescription:m("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:P?void 0:D,onChange:p=>{K&&j.current.set(s,p)},showIds:h})}),t.jsx(x,{height:24})]},s)),G.length===0?t.jsxs(t.Fragment,{children:[t.jsx(x,{height:24}),t.jsx(J,{align:"center",children:m("supportingDocuments.noDocuments")}),t.jsx(x,{height:24})]}):null,t.jsxs(oe,{visible:b,title:m("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>U(!1),children:[t.jsx(J,{children:m("supportingDocuments.powerOfAttorneyModal.description")}),t.jsx(x,{height:16}),t.jsx(ue,{paddingBottom:0,children:t.jsx(H,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${te(i).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:m("supportingDocuments.downloadTemplate")})})]}),t.jsxs(oe,{visible:E,title:m("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>o(!1),children:[t.jsx(J,{children:m("supportingDocuments.purpose.SwornStatement.description")}),t.jsx(x,{height:16}),t.jsx(ue,{paddingBottom:0,children:t.jsx(H,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:m("supportingDocuments.downloadTemplate")})})]})]})},g=d.forwardRef(Le);Le.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollectionWithRef",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ct={title:"Onboarding/SupportingDocumentCollection",component:g},k=()=>ne.make(e=>{setTimeout(()=>{e(R.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),A=()=>{const[e,r]=d.useState([]),n=d.useRef(null);return t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsxs(w,{title:"Default",children:[t.jsx(g,{ref:n,status:"WaitingForDocument",generateUpload:k,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"]}),t.jsx(H,{onPress:()=>{n.current!=null&&n.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},C=()=>{const[e,r]=d.useState([]);return t.jsx(v,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(w,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:k,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},L=()=>{const[e,r]=d.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(w,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:k,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>ne.make(n=>{setTimeout(()=>{n(R.Ok(void 0))},1e3)})})})})},W=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(w,{title:"Default",children:t.jsx(g,{status:"PendingReview",generateUpload:k,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),B=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(w,{title:"Default",children:t.jsx(g,{status:"Approved",generateUpload:k,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),_=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(w,{title:"Default",children:t.jsx(g,{status:"Approved",generateUpload:k,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),N=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(w,{title:"Default",children:t.jsx(g,{status:"Rejected",generateUpload:k,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),V=()=>{const[e,r]=d.useState([]);return t.jsx(v,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(w,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:k,documents:e,onChange:r,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},M=()=>t.jsx(v,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(w,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:k,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});A.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};C.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};L.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};W.__docgenInfo={description:"",methods:[],displayName:"Pending"};B.__docgenInfo={description:"",methods:[],displayName:"Approved"};_.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};N.__docgenInfo={description:"",methods:[],displayName:"Rejected"};V.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};M.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};var ie,le,de;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(de=(le=A.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,me,ce;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(ce=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ge,fe,ye;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(ye=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,we,ke;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(ke=(we=W.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var he,Pe,Se;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(Se=(Pe=B.parameters)==null?void 0:Pe.docs)==null?void 0:Se.source}}};var qe,De,je;_.parameters={..._.parameters,docs:{...(qe=_.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(je=(De=_.parameters)==null?void 0:De.docs)==null?void 0:je.source}}};var Re,Ie,be;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(be=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:be.source}}};var Ue,Oe,Fe;V.parameters={...V.parameters,docs:{...(Ue=V.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(Fe=(Oe=V.parameters)==null?void 0:Oe.docs)==null?void 0:Fe.source}}};var Ee,Te,xe;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
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
}`,...(xe=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};const Lt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{B as Approved,_ as ApprovedWithoutDownload,W as Pending,V as ReadOnlyEmpty,M as ReadOnlyWithDocs,N as Rejected,A as WaitingForDocument,C as WaitingForDocumentShowIds,L as WaitingForDocumentWithApprovedAndRejected,Lt as __namedExportsOrder,Ct as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-XzxkntZT.js.map
