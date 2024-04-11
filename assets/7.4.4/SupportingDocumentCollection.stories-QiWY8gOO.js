import{m as _e,l as I,E as ne,Y as Ee,H as Z,s as Ve,G as Le,j as t,$ as ee,h as Ne,S as C,L as Y,n as Me}from"./Space-B-tuzGSB.js";import{r as d}from"./index-CBqU2yxZ.js";import{c as $e}from"./commonStyles-t4XfA7cz.js";import{a as ae,L as $}from"./LakeButton-B_Hql0KV.js";import{L as ze}from"./LakeLabel-gdk5iRjD.js";import{t as m,l as He,i as Ce}from"./i18n-DA5rVMx_.js";import{F as Ge}from"./FilesUploader-BqL7oc-x.js";import{L as ue}from"./LakeModal-Xej-shSM.js";import{S as v,a as h}from"./_StoriesComponents-qw3Cph9e.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-D4CfqCYA.js";import"./index-CP-wDJ33.js";import"./v4-D8aEg3BZ.js";import"./rifm-BUW2jT7k.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./FileInput-CupYbbLH.js";import"./LakeHeading-CLNxGxoz.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./LakeAlert-skcJtdOq.js";import"./Tag-B6kABNBY.js";import"./index-BWWcrcy6.js";import"./index-DGaDRGzj.js";import"./FocusTrap-Dcd989mj.js";import"./a11y-DXvpDVrG.js";import"./Suspendable-DyQqXxP8.js";import"./ResponsiveContainer-CKdPUfoO.js";import"./TransitionView-C72wiUIW.js";import"./useBodyClassName-FAgY5CgW.js";const re=d.memo(d.forwardRef(({style:e,onReset:n,onSubmit:r,...u},i)=>_e("form",{...u,ref:i,onReset:s=>{s.preventDefault(),n==null||n(s)},onSubmit:s=>{s.preventDefault(),r==null||r(s)},style:[$e.view,e]})));re.displayName="Form";re.__docgenInfo={description:"",methods:[],displayName:"Form"};function We(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(We=function(){return!!e})()}function oe(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,z(e,n)}function te(e){return te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},te(e)}function z(e,n){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,u){return r.__proto__=u,r},z(e,n)}function H(e){var n=typeof Map=="function"?new Map:void 0;return H=function(r){if(r===null||!function(i){try{return Function.toString.call(i).indexOf("[native code]")!==-1}catch{return typeof i=="function"}}(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(n!==void 0){if(n.has(r))return n.get(r);n.set(r,u)}function u(){return function(i,s,D){if(We())return Reflect.construct.apply(null,arguments);var f=[null];f.push.apply(f,s);var j=new(i.bind.apply(i,f));return D&&z(j,D.prototype),j}(r,arguments,te(this).constructor)}return u.prototype=Object.create(r.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),z(u,r)},H(e)}var Ke=function(e){function n(r){var u;return(u=e.call(this,"Request to "+r+" failed")||this).url=void 0,u.url=r,u}return oe(n,e),n}(H(Error)),Xe=function(e){function n(r,u){var i;return u==null?((i=e.call(this,"Request to "+r+" timed out")||this).url=void 0,i.timeout=void 0):((i=e.call(this,"Request to "+r+" timed out (> "+u+"ms)")||this).url=void 0,i.timeout=void 0),i.url=r,i.timeout=u,function(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}(i)}return oe(n,e),n}(H(Error)),Ye=function(e){function n(r,u,i){var s;return(s=e.call(this,"Request to "+r+" gave status "+u)||this).url=void 0,s.status=void 0,s.response=void 0,s.url=r,s.status=u,s.response=i,s}return oe(n,e),n}(H(Error)),Je=function(e){return e.ok?I.Ok(e):I.Error(new Ye(e.url,e.status,e.response.toUndefined()))},Qe={make:function(e){var n=e.url,r=e.method,u=r===void 0?"GET":r,i=e.responseType,s=e.body,D=e.headers,f=e.withCredentials,j=f!==void 0&&f,b=e.onLoadStart,P=e.onProgress,F=e.timeout;return ne.make(function(U){var a=new XMLHttpRequest;a.withCredentials=j,a.open(u,n,!0),i!=null&&(a.responseType=i),F!=null&&(a.timeout=F),D!=null&&Ee.entries(D).forEach(function(w){return a.setRequestHeader(w[0],w[1])});var G=function(){q(),U(I.Error(new Ke(n)))},x=function(){q(),U(I.Error(new Xe(n,F)))},A=function(){q();var w=a.status,o=Z.fromNullable(a.response);U(I.Ok({url:n,status:w,ok:w>=200&&w<300,response:o,xhr:a}))},q=function(){a.removeEventListener("error",G),a.removeEventListener("load",A),a.removeEventListener("timeout",x),b!=null&&a.removeEventListener("loadstart",b),P!=null&&a.removeEventListener("progress",P)};return a.addEventListener("error",G),a.addEventListener("load",A),a.addEventListener("timeout",x),b!=null&&a.addEventListener("loadstart",b),P!=null&&a.addEventListener("progress",P),a.send(s),function(){q(),a.abort()}})}};const Ze=["application/pdf","image/png","image/jpeg"],J=Ve.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),Q=e=>ee(e).with({type:"tooltip"},({text:n,width:r})=>t.jsx(Me,{content:n,width:r,togglableOnFocus:!0,placement:"right",maxWidth:400,children:t.jsx($,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",disabled:!0,style:[J.button,J.buttonWithDefaultCursor],ariaLabel:m("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:n,onPress:r})=>t.jsx($,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",onPress:r,style:J.button,ariaLabel:m("supportingDocuments.help.whatIsThis"),children:n})).exhaustive(),et=e=>{const n=`supportingDocuments.purpose.${e}`;return Ce(n)?m(n):e},tt=e=>{const n=`supportingDocuments.purpose.${e}.description`;return Ce(n)?m(n):""},Te=({documents:e,generateUpload:n,requiredDocumentPurposes:r,templateLanguage:u=He.language,status:i,onRemoveFile:s,showIds:D=!1,readOnly:f=!1},j)=>{const[b,P]=d.useState(!1),[F,U]=d.useState(!1),[a,G]=d.useState([]),x=d.useMemo(()=>{const o=new Set(r),c=[...a,...e];c.forEach(l=>o.add(l.purpose));const R=new Map([...o].map(l=>{const y=c.filter(k=>k.purpose===l);return[l,y]})),K=new Set(r),p=new Map([...o].map(l=>{const y=R.get(l)??[],O=y.length>0&&y.every(X=>X.file.statusInfo.status==="Validated")?0:K.has(l)?1:2;return[l,O]}));return[...o].sort((l,y)=>{const k=p.get(l)??2;return(p.get(y)??2)>k?-1:1}).map(l=>{const y=R.get(l)??[];return{purpose:l,files:y.map(k=>k.file),isRequired:K.has(l),areAllDocumentsValidated:p.get(l)===0}})},[r,e,a]),A=d.useRef(new Map(Le.filterMap(x,({isRequired:o,purpose:c,files:R})=>o?Z.Some([c,R]):Z.None()))),q=d.useRef({});d.useImperativeHandle(j,()=>({areAllRequiredDocumentsFilled:()=>[...A.current.values()].every(c=>c.length>0),addDocument:o=>{G(c=>[...c,o])}})),d.useEffect(()=>{const o=a[a.length-1];if(o!=null){const c=q.current[o==null?void 0:o.purpose];c!=null&&c.add(o.file)}},[a]);const w=x.filter(({files:o})=>!(f&&o.length===0));return t.jsxs(re,{children:[w.map(({purpose:o,files:c,areAllDocumentsValidated:R,isRequired:K})=>t.jsxs(d.Fragment,{children:[t.jsx(ze,{label:et(o),help:ee(o).with("PowerOfAttorney",()=>t.jsx(Q,{type:"button",label:m("supportingDocuments.help.whatIsThis"),onPress:()=>P(!0)})).with("SwornStatement",()=>t.jsx(Q,{type:"button",label:m("supportingDocuments.help.whatIsThis"),onPress:()=>U(!0)})).otherwise(()=>{const p=tt(o);return Ne(p)?t.jsx(Q,{type:"tooltip",text:p}):null}),render:()=>t.jsx(Ge,{ref:p=>q.current[o]=p,canUpload:!f&&i==="WaitingForDocument"&&!R,accept:Ze,maxSize:2e7,icon:"document-regular",initialFiles:c,generateUpload:n,getUploadConfig:p=>({fileName:p.name,purpose:o}),uploadFile:({upload:p,file:l,onLoadStart:y,onProgress:k})=>{const O=new FormData;return p.fields.forEach(({key:X,value:Be})=>O.append(X,Be)),O.append("file",l),Qe.make({url:p.url,method:"POST",onLoadStart:y,onProgress:k,body:O}).mapOkToResult(Je)},formatAndSizeDescription:m("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:f?void 0:s,onChange:p=>{K&&A.current.set(o,p)},showIds:D})}),t.jsx(C,{height:24})]},o)),w.length===0?t.jsxs(t.Fragment,{children:[t.jsx(C,{height:24}),t.jsx(Y,{align:"center",children:m("supportingDocuments.noDocuments")}),t.jsx(C,{height:24})]}):null,t.jsxs(ue,{visible:b,title:m("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>P(!1),children:[t.jsx(Y,{children:m("supportingDocuments.powerOfAttorneyModal.description")}),t.jsx(C,{height:16}),t.jsx(ae,{paddingBottom:0,children:t.jsx($,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${ee(u).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:m("supportingDocuments.downloadTemplate")})})]}),t.jsxs(ue,{visible:F,title:m("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>U(!1),children:[t.jsx(Y,{children:m("supportingDocuments.purpose.SwornStatement.description")}),t.jsx(C,{height:16}),t.jsx(ae,{paddingBottom:0,children:t.jsx($,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:m("supportingDocuments.downloadTemplate")})})]})]})},g=d.forwardRef(Te);Te.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollectionWithRef",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ct={title:"Onboarding/SupportingDocumentCollection",component:g},S=()=>ne.make(e=>{setTimeout(()=>{e(I.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),W=()=>{const[e,n]=d.useState([]),r=d.useRef(null);return t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsxs(h,{title:"Default",children:[t.jsx(g,{ref:r,status:"WaitingForDocument",generateUpload:S,documents:e,onChange:n,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"]}),t.jsx($,{onPress:()=>{r.current!=null&&r.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},T=()=>{const[e,n]=d.useState([]);return t.jsx(v,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:S,documents:e,onChange:n,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},B=()=>{const[e,n]=d.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:S,documents:e,onChange:n,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>ne.make(r=>{setTimeout(()=>{r(I.Ok(void 0))},1e3)})})})})},_=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"PendingReview",generateUpload:S,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),E=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"Approved",generateUpload:S,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),V=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"Approved",generateUpload:S,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),L=()=>t.jsx(v,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"Rejected",generateUpload:S,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),N=()=>{const[e,n]=d.useState([]);return t.jsx(v,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:S,documents:e,onChange:n,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},M=()=>t.jsx(v,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(h,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:S,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});W.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};T.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};B.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};_.__docgenInfo={description:"",methods:[],displayName:"Pending"};E.__docgenInfo={description:"",methods:[],displayName:"Approved"};V.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};L.__docgenInfo={description:"",methods:[],displayName:"Rejected"};N.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};M.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};var se,ie,le;W.parameters={...W.parameters,docs:{...(se=W.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(le=(ie=W.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,pe,me;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(me=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ce,ge,fe;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(fe=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ye,we,ve;_.parameters={..._.parameters,docs:{...(ye=_.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(ve=(we=_.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var he,Se,ke;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(ke=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var De,Pe,qe;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(qe=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var Ie,je,be;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(be=(je=L.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var Ue,Re,Oe;N.parameters={...N.parameters,docs:{...(Ue=N.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(Oe=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Oe.source}}};var Fe,xe,Ae;M.parameters={...M.parameters,docs:{...(Fe=M.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(Ae=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};const Wt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{E as Approved,V as ApprovedWithoutDownload,_ as Pending,N as ReadOnlyEmpty,M as ReadOnlyWithDocs,L as Rejected,W as WaitingForDocument,T as WaitingForDocumentShowIds,B as WaitingForDocumentWithApprovedAndRejected,Wt as __namedExportsOrder,Ct as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-QiWY8gOO.js.map
