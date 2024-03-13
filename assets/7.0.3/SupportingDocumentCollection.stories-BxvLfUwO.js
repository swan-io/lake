import{m as Oe,l as S,E as Z,Y as Fe,J as X,s as je,H as xe,j as t,N as Y,h as Ae,S as C,L as G,n as Ce}from"./Space-ChRvaji1.js";import{r as i}from"./index-CBqU2yxZ.js";import{c as Te}from"./commonStyles-t4XfA7cz.js";import{a as re,L as N}from"./LakeButton-DtHKm00B.js";import{L as We}from"./LakeLabel-eh2tYIa7.js";import{t as p,l as Be,i as be}from"./i18n-DeoefoAR.js";import{F as _e}from"./FilesUploader-AehL_huA.js";import{L as ne}from"./LakeModal-BFw9R6pY.js";import{S as D,a as q}from"./_StoriesComponents-DuIeS3XV.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-DD_-8IPu.js";import"./index-BkhpigpK.js";import"./v4-D8aEg3BZ.js";import"./rifm-Cou_E0eS.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./FileInput-BMP-aiqD.js";import"./LakeHeading-Bl7tDfdx.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./LakeAlert-TXF_dQRT.js";import"./Tag-CVWgFnN7.js";import"./index-iZC5RSM6.js";import"./index-DGaDRGzj.js";import"./FocusTrap-C4GXdqkW.js";import"./a11y-DXvpDVrG.js";import"./LoadingView-DwJWTgnl.js";import"./ResponsiveContainer-BR850dXq.js";import"./TransitionView-3jE9ifvD.js";import"./useBodyClassName-FAgY5CgW.js";const ee=i.memo(i.forwardRef(({style:e,onReset:r,onSubmit:n,...d},m)=>Oe("form",{...d,ref:m,onReset:c=>{c.preventDefault(),r==null||r(c)},onSubmit:c=>{c.preventDefault(),n==null||n(c)},style:[Te.view,e]})));ee.displayName="Form";ee.__docgenInfo={description:"",methods:[],displayName:"Form"};function Ie(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ie=function(){return!!e})()}function te(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,M(e,r)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Q(e)}function M(e,r){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,d){return n.__proto__=d,n},M(e,r)}function $(e){var r=typeof Map=="function"?new Map:void 0;return $=function(n){if(n===null||!function(m){try{return Function.toString.call(m).indexOf("[native code]")!==-1}catch{return typeof m=="function"}}(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,d)}function d(){return function(m,c,P){if(Ie())return Reflect.construct.apply(null,arguments);var w=[null];w.push.apply(w,c);var I=new(m.bind.apply(m,w));return P&&M(I,P.prototype),I}(n,arguments,Q(this).constructor)}return d.prototype=Object.create(n.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),M(d,n)},$(e)}var Ve=function(e){function r(){return e.apply(this,arguments)||this}return te(r,e),r}($(Error)),Ee=function(e){function r(){return e.apply(this,arguments)||this}return te(r,e),r}($(Error)),Le=function(e){function r(){return e.apply(this,arguments)||this}return te(r,e),r}($(Error)),Ne=function(e){return e.ok?S.Ok(e):S.Error(new Le("Received HTTP status "+e.status))},Me={make:function(e){var r=e.url,n=e.method,d=n===void 0?"GET":n,m=e.responseType,c=e.body,P=e.headers,w=e.withCredentials,I=w!==void 0&&w,h=e.onLoadStart,U=e.onProgress,O=e.timeout;return Z.make(function(y){var s=new XMLHttpRequest;s.withCredentials=I,s.open(d,r,!0),m!=null&&(s.responseType=m),O!=null&&(s.timeout=O),P!=null&&Fe.entries(P).forEach(function(o){return s.setRequestHeader(o[0],o[1])});var F=function(){a(),y(S.Error(new Ve))},x=function(){a(),y(S.Error(new Ee))},A=function(){a();var o=s.status,v=X.fromNullable(s.response);y(S.Ok({status:o,ok:o>=200&&o<300,response:v,xhr:s}))},a=function(){s.removeEventListener("error",F),s.removeEventListener("load",A),s.removeEventListener("timeout",x),h!=null&&s.removeEventListener("loadstart",h),U!=null&&s.removeEventListener("progress",U)};return s.addEventListener("error",F),s.addEventListener("load",A),s.addEventListener("timeout",x),h!=null&&s.addEventListener("loadstart",h),U!=null&&s.addEventListener("progress",U),s.send(c),function(){a(),s.abort()}})}};const $e=["application/pdf","image/png","image/jpeg"],J=je.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),K=e=>Y(e).with({type:"tooltip"},({text:r,width:n})=>t.jsx(Ce,{content:r,width:n,togglableOnFocus:!0,placement:"right",children:t.jsx(N,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",disabled:!0,style:[J.button,J.buttonWithDefaultCursor],ariaLabel:p("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:n})=>t.jsx(N,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",onPress:n,style:J.button,ariaLabel:p("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),He=e=>{const r=`supportingDocuments.purpose.${e}`;return be(r)?p(r):e},ze=e=>{const r=`supportingDocuments.purpose.${e}.description`;return be(r)?p(r):""},Ue=({documents:e,generateUpload:r,requiredDocumentPurposes:n,templateLanguage:d=Be.language,status:m,onRemoveFile:c,showIds:P=!1},w)=>{const[I,h]=i.useState(!1),[U,O]=i.useState(!1),[y,s]=i.useState([]),F=i.useMemo(()=>{const a=new Set(n),o=[...y,...e];o.forEach(u=>a.add(u.purpose));const v=new Map([...a].map(u=>{const g=o.filter(k=>k.purpose===u);return[u,g]})),H=new Set(n),l=new Map([...a].map(u=>{const g=v.get(u)??[],R=g.length>0&&g.every(z=>z.file.statusInfo.status==="Validated")?0:H.has(u)?1:2;return[u,R]}));return[...a].sort((u,g)=>{const k=l.get(u)??2;return(l.get(g)??2)>k?-1:1}).map(u=>{const g=v.get(u)??[];return{purpose:u,files:g.map(k=>k.file),isRequired:H.has(u),areAllDocumentsValidated:l.get(u)===0}})},[n,e,y]),x=i.useRef(new Map(xe.filterMap(F,({isRequired:a,purpose:o,files:v})=>a?X.Some([o,v]):X.None()))),A=i.useRef({});return i.useImperativeHandle(w,()=>({areAllRequiredDocumentsFilled:()=>[...x.current.values()].every(o=>o.length>0),addDocument:a=>{s(o=>[...o,a])}})),i.useEffect(()=>{const a=y[y.length-1];if(a!=null){const o=A.current[a==null?void 0:a.purpose];o!=null&&o.add(a.file)}},[y]),t.jsxs(ee,{children:[F.map(({purpose:a,files:o,areAllDocumentsValidated:v,isRequired:H})=>t.jsxs(i.Fragment,{children:[t.jsx(We,{label:He(a),help:Y(a).with("PowerOfAttorney",()=>t.jsx(K,{type:"button",label:p("supportingDocuments.help.whatIsThis"),onPress:()=>h(!0)})).with("SwornStatement",()=>t.jsx(K,{type:"button",label:p("supportingDocuments.help.whatIsThis"),onPress:()=>O(!0)})).otherwise(()=>{const l=ze(a);return Ae(l)?t.jsx(K,{type:"tooltip",text:l}):null}),render:()=>t.jsx(_e,{ref:l=>A.current[a]=l,canUpload:m==="WaitingForDocument"&&!v,accept:$e,maxSize:2e7,icon:"document-regular",initialFiles:o,generateUpload:r,getUploadConfig:l=>({fileName:l.name,purpose:a}),uploadFile:({upload:l,file:u,onLoadStart:g,onProgress:k})=>{const R=new FormData;return l.fields.forEach(({key:z,value:Re})=>R.append(z,Re)),R.append("file",u),Me.make({url:l.url,method:"POST",onLoadStart:g,onProgress:k,body:R}).mapOkToResult(Ne)},formatAndSizeDescription:p("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:c,onChange:l=>{H&&x.current.set(a,l)},showIds:P})}),t.jsx(C,{height:24})]},a)),n.length===0?t.jsxs(t.Fragment,{children:[t.jsx(C,{height:24}),t.jsx(G,{children:p("supportingDocuments.noRequiredDocuments")}),t.jsx(C,{height:24})]}):null,t.jsxs(ne,{visible:I,title:p("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>h(!1),children:[t.jsx(G,{children:p("supportingDocuments.powerOfAttorneyModal.description")}),t.jsx(C,{height:16}),t.jsx(re,{paddingBottom:0,children:t.jsx(N,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${Y(d).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:p("supportingDocuments.downloadTemplate")})})]}),t.jsxs(ne,{visible:U,title:p("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>O(!1),children:[t.jsx(G,{children:p("supportingDocuments.purpose.SwornStatement.description")}),t.jsx(C,{height:16}),t.jsx(re,{paddingBottom:0,children:t.jsx(N,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:p("supportingDocuments.downloadTemplate")})})]})]})},f=i.forwardRef(Ue);Ue.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollectionWithRef",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};f.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const j=je.create({storyPart:{maxWidth:600}}),jt={title:"Onboarding/SupportingDocumentCollection",component:f},b=()=>Z.make(e=>{setTimeout(()=>{e(S.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),T=()=>{const[e,r]=i.useState([]),n=i.useRef(null);return t.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsxs(q,{title:"Default",style:j.storyPart,children:[t.jsx(f,{ref:n,status:"WaitingForDocument",generateUpload:b,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"]}),t.jsx(N,{onPress:()=>{n.current!=null&&n.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},W=()=>{const[e,r]=i.useState([]);return t.jsx(D,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(q,{title:"Default",style:j.storyPart,children:t.jsx(f,{status:"WaitingForDocument",generateUpload:b,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},B=()=>{const[e,r]=i.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return t.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(q,{title:"Default",style:j.storyPart,children:t.jsx(f,{status:"WaitingForDocument",generateUpload:b,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>Z.make(n=>{setTimeout(()=>{n(S.Ok(void 0))},1e3)})})})})},_=()=>t.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(q,{title:"Default",style:j.storyPart,children:t.jsx(f,{status:"PendingReview",generateUpload:b,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),V=()=>t.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(q,{title:"Default",style:j.storyPart,children:t.jsx(f,{status:"Approved",generateUpload:b,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),E=()=>t.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(q,{title:"Default",style:j.storyPart,children:t.jsx(f,{status:"Approved",generateUpload:b,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),L=()=>t.jsx(D,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(q,{title:"Default",style:j.storyPart,children:t.jsx(f,{status:"Rejected",generateUpload:b,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})});T.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};W.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};B.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};_.__docgenInfo={description:"",methods:[],displayName:"Pending"};V.__docgenInfo={description:"",methods:[],displayName:"Approved"};E.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};L.__docgenInfo={description:"",methods:[],displayName:"Rejected"};var ae,se,oe;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(oe=(se=T.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ue,ie,le;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(le=(ie=W.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var pe,de,me;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(me=(de=B.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,ge,ye;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(ye=(ge=_.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var fe,we,ve;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(ve=(we=V.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var ke,Pe,he;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(he=(Pe=E.parameters)==null?void 0:Pe.docs)==null?void 0:he.source}}};var Se,De,qe;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(qe=(De=L.parameters)==null?void 0:De.docs)==null?void 0:qe.source}}};const bt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected"];export{V as Approved,E as ApprovedWithoutDownload,_ as Pending,L as Rejected,T as WaitingForDocument,W as WaitingForDocumentShowIds,B as WaitingForDocumentWithApprovedAndRejected,bt as __namedExportsOrder,jt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-BxvLfUwO.js.map
