import{m as Fe,l as h,E as ee,Y as xe,J as Y,s as be,H as Ae,j as t,N as Q,h as Te,S as A,L as J,n as Ce}from"./Space-ChRvaji1.js";import{r as o}from"./index-CBqU2yxZ.js";import{c as We}from"./commonStyles-t4XfA7cz.js";import{a as ne,L}from"./LakeButton-DtHKm00B.js";import{L as Be}from"./LakeLabel-eh2tYIa7.js";import{t as p,l as Ve,i as Ie}from"./i18n-DeoefoAR.js";import{F as _e}from"./FilesUploader-AehL_huA.js";import{L as ae}from"./LakeModal-BFw9R6pY.js";import{S,a as D}from"./_StoriesComponents-DuIeS3XV.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-DD_-8IPu.js";import"./index-BkhpigpK.js";import"./v4-D8aEg3BZ.js";import"./rifm-Cou_E0eS.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./FileInput-BMP-aiqD.js";import"./LakeHeading-Bl7tDfdx.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./LakeAlert-TXF_dQRT.js";import"./Tag-CVWgFnN7.js";import"./index-iZC5RSM6.js";import"./index-DGaDRGzj.js";import"./FocusTrap-C4GXdqkW.js";import"./a11y-DXvpDVrG.js";import"./LoadingView-DwJWTgnl.js";import"./ResponsiveContainer-BR850dXq.js";import"./TransitionView-3jE9ifvD.js";import"./useBodyClassName-FAgY5CgW.js";const te=o.memo(o.forwardRef(({style:e,onReset:r,onSubmit:n,...d},m)=>Fe("form",{...d,ref:m,onReset:c=>{c.preventDefault(),r==null||r(c)},onSubmit:c=>{c.preventDefault(),n==null||n(c)},style:[We.view,e]})));te.displayName="Form";te.__docgenInfo={description:"",methods:[],displayName:"Form"};function Ue(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ue=function(){return!!e})()}function re(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,N(e,r)}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Z(e)}function N(e,r){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,d){return n.__proto__=d,n},N(e,r)}function M(e){var r=typeof Map=="function"?new Map:void 0;return M=function(n){if(n===null||!function(m){try{return Function.toString.call(m).indexOf("[native code]")!==-1}catch{return typeof m=="function"}}(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,d)}function d(){return function(m,c,v){if(Ue())return Reflect.construct.apply(null,arguments);var g=[null];g.push.apply(g,c);var b=new(m.bind.apply(m,g));return v&&N(b,v.prototype),b}(n,arguments,Z(this).constructor)}return d.prototype=Object.create(n.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),N(d,n)},M(e)}var Ee=function(e){function r(){return e.apply(this,arguments)||this}return re(r,e),r}(M(Error)),Le=function(e){function r(){return e.apply(this,arguments)||this}return re(r,e),r}(M(Error)),Ne=function(e){function r(){return e.apply(this,arguments)||this}return re(r,e),r}(M(Error)),Me=function(e){return e.ok?h.Ok(e):h.Error(new Ne("Received HTTP status "+e.status))},$e={make:function(e){var r=e.url,n=e.method,d=n===void 0?"GET":n,m=e.responseType,c=e.body,v=e.headers,g=e.withCredentials,b=g!==void 0&&g,I=e.onLoadStart,k=e.onProgress,$=e.timeout;return ee.make(function(U){var s=new XMLHttpRequest;s.withCredentials=b,s.open(d,r,!0),m!=null&&(s.responseType=m),$!=null&&(s.timeout=$),v!=null&&xe.entries(v).forEach(function(a){return s.setRequestHeader(a[0],a[1])});var H=function(){P(),U(h.Error(new Ee))},F=function(){P(),U(h.Error(new Le))},x=function(){P();var a=s.status,i=Y.fromNullable(s.response);U(h.Ok({status:a,ok:a>=200&&a<300,response:i,xhr:s}))},P=function(){s.removeEventListener("error",H),s.removeEventListener("load",x),s.removeEventListener("timeout",F),I!=null&&s.removeEventListener("loadstart",I),k!=null&&s.removeEventListener("progress",k)};return s.addEventListener("error",H),s.addEventListener("load",x),s.addEventListener("timeout",F),I!=null&&s.addEventListener("loadstart",I),k!=null&&s.addEventListener("progress",k),s.send(c),function(){P(),s.abort()}})}};const He=["application/pdf","image/png","image/jpeg"],K=be.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),X=e=>Q(e).with({type:"tooltip"},({text:r,width:n})=>t.jsx(Ce,{content:r,width:n,togglableOnFocus:!0,placement:"right",children:t.jsx(L,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",disabled:!0,style:[K.button,K.buttonWithDefaultCursor],ariaLabel:p("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:n})=>t.jsx(L,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",onPress:n,style:K.button,ariaLabel:p("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),ze=e=>{const r=`supportingDocuments.purpose.${e}`;return Ie(r)?p(r):e},Ge=e=>{const r=`supportingDocuments.purpose.${e}.description`;return Ie(r)?p(r):""},Re=({documents:e,generateUpload:r,requiredDocumentPurposes:n,templateLanguage:d=Ve.language,status:m,onRemoveFile:c,showIds:v=!1,readOnly:g=!1},b)=>{const[I,k]=o.useState(!1),[$,U]=o.useState(!1),[s,H]=o.useState([]),F=o.useMemo(()=>{const a=new Set(n),i=[...s,...e];i.forEach(u=>a.add(u.purpose));const R=new Map([...a].map(u=>{const f=i.filter(w=>w.purpose===u);return[u,f]})),z=new Set(n),l=new Map([...a].map(u=>{const f=R.get(u)??[],O=f.length>0&&f.every(G=>G.file.statusInfo.status==="Validated")?0:z.has(u)?1:2;return[u,O]}));return[...a].sort((u,f)=>{const w=l.get(u)??2;return(l.get(f)??2)>w?-1:1}).map(u=>{const f=R.get(u)??[];return{purpose:u,files:f.map(w=>w.file),isRequired:z.has(u),areAllDocumentsValidated:l.get(u)===0}})},[n,e,s]),x=o.useRef(new Map(Ae.filterMap(F,({isRequired:a,purpose:i,files:R})=>a?Y.Some([i,R]):Y.None()))),P=o.useRef({});return o.useImperativeHandle(b,()=>({areAllRequiredDocumentsFilled:()=>[...x.current.values()].every(i=>i.length>0),addDocument:a=>{H(i=>[...i,a])}})),o.useEffect(()=>{const a=s[s.length-1];if(a!=null){const i=P.current[a==null?void 0:a.purpose];i!=null&&i.add(a.file)}},[s]),t.jsxs(te,{children:[F.filter(({files:a})=>!(g&&a.length===0)).map(({purpose:a,files:i,areAllDocumentsValidated:R,isRequired:z})=>t.jsxs(o.Fragment,{children:[t.jsx(Be,{label:ze(a),help:Q(a).with("PowerOfAttorney",()=>t.jsx(X,{type:"button",label:p("supportingDocuments.help.whatIsThis"),onPress:()=>k(!0)})).with("SwornStatement",()=>t.jsx(X,{type:"button",label:p("supportingDocuments.help.whatIsThis"),onPress:()=>U(!0)})).otherwise(()=>{const l=Ge(a);return Te(l)?t.jsx(X,{type:"tooltip",text:l}):null}),render:()=>t.jsx(_e,{ref:l=>P.current[a]=l,canUpload:!g&&m==="WaitingForDocument"&&!R,accept:He,maxSize:2e7,icon:"document-regular",initialFiles:i,generateUpload:r,getUploadConfig:l=>({fileName:l.name,purpose:a}),uploadFile:({upload:l,file:u,onLoadStart:f,onProgress:w})=>{const O=new FormData;return l.fields.forEach(({key:G,value:Oe})=>O.append(G,Oe)),O.append("file",u),$e.make({url:l.url,method:"POST",onLoadStart:f,onProgress:w,body:O}).mapOkToResult(Me)},formatAndSizeDescription:p("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:g?void 0:c,onChange:l=>{z&&x.current.set(a,l)},showIds:v})}),t.jsx(A,{height:24})]},a)),n.length===0?t.jsxs(t.Fragment,{children:[t.jsx(A,{height:24}),t.jsx(J,{children:p("supportingDocuments.noRequiredDocuments")}),t.jsx(A,{height:24})]}):null,t.jsxs(ae,{visible:I,title:p("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>k(!1),children:[t.jsx(J,{children:p("supportingDocuments.powerOfAttorneyModal.description")}),t.jsx(A,{height:16}),t.jsx(ne,{paddingBottom:0,children:t.jsx(L,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${Q(d).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:p("supportingDocuments.downloadTemplate")})})]}),t.jsxs(ae,{visible:$,title:p("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>U(!1),children:[t.jsx(J,{children:p("supportingDocuments.purpose.SwornStatement.description")}),t.jsx(A,{height:16}),t.jsx(ne,{paddingBottom:0,children:t.jsx(L,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:p("supportingDocuments.downloadTemplate")})})]})]})},y=o.forwardRef(Re);Re.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollectionWithRef",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};y.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const q=be.create({storyPart:{maxWidth:600}}),bt={title:"Onboarding/SupportingDocumentCollection",component:y},j=()=>ee.make(e=>{setTimeout(()=>{e(h.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),T=()=>{const[e,r]=o.useState([]),n=o.useRef(null);return t.jsx(S,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsxs(D,{title:"Default",style:q.storyPart,children:[t.jsx(y,{ref:n,status:"WaitingForDocument",generateUpload:j,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"]}),t.jsx(L,{onPress:()=>{n.current!=null&&n.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},C=()=>{const[e,r]=o.useState([]);return t.jsx(S,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(D,{title:"Default",style:q.storyPart,children:t.jsx(y,{status:"WaitingForDocument",generateUpload:j,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},W=()=>{const[e,r]=o.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return t.jsx(S,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(D,{title:"Default",style:q.storyPart,children:t.jsx(y,{status:"WaitingForDocument",generateUpload:j,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>ee.make(n=>{setTimeout(()=>{n(h.Ok(void 0))},1e3)})})})})},B=()=>t.jsx(S,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(D,{title:"Default",style:q.storyPart,children:t.jsx(y,{status:"PendingReview",generateUpload:j,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),V=()=>t.jsx(S,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(D,{title:"Default",style:q.storyPart,children:t.jsx(y,{status:"Approved",generateUpload:j,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),_=()=>t.jsx(S,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(D,{title:"Default",style:q.storyPart,children:t.jsx(y,{status:"Approved",generateUpload:j,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),E=()=>t.jsx(S,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(D,{title:"Default",style:q.storyPart,children:t.jsx(y,{status:"Rejected",generateUpload:j,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})});T.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};C.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};W.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};B.__docgenInfo={description:"",methods:[],displayName:"Pending"};V.__docgenInfo={description:"",methods:[],displayName:"Approved"};_.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};E.__docgenInfo={description:"",methods:[],displayName:"Rejected"};var se,ue,oe;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  const ref = useRef<SupportingDocumentCollectionRef<string>>(null);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
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
}`,...(oe=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var ie,le,pe;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(pe=(le=C.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var de,me,ce;W.parameters={...W.parameters,docs:{...(de=W.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(ce=(me=W.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ge,fe,ye;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(ye=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var we,ve,ke;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(ke=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var Pe,he,Se;_.parameters={..._.parameters,docs:{...(Pe=_.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(Se=(he=_.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var De,qe,je;E.parameters={...E.parameters,docs:{...(De=E.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(je=(qe=E.parameters)==null?void 0:qe.docs)==null?void 0:je.source}}};const It=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected"];export{V as Approved,_ as ApprovedWithoutDownload,B as Pending,E as Rejected,T as WaitingForDocument,C as WaitingForDocumentShowIds,W as WaitingForDocumentWithApprovedAndRejected,It as __namedExportsOrder,bt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-C3dPw8tA.js.map
