import{v as I,N as ue,R as $e,G as ne,o as Ge,s as Ke,E as Je,j as t,i as ee,$ as ae,h as Qe,S as T,L as J,c as Ye,l as Ze}from"./Space-B4Qk6WP7.js";import{r as p}from"./index-uCp2LrAq.js";import{c as et}from"./commonStyles-t4XfA7cz.js";import{a as ce,L as H}from"./LakeButton-CpUMNDtY.js";import{L as tt}from"./LakeCopyButton-DnYE8LaV.js";import{L as ge}from"./LakeLabel-BJpA2mpY.js";import{R as rt}from"./ReadOnlyFieldList-B5Hf9WVy.js";import{t as d,l as nt,i as Ne}from"./i18n-TnewhF8t.js";import{F as at}from"./FilesUploader-BWUP_3TJ.js";import{L as te}from"./LakeModal-DyL__6Sa.js";import{S as f,a as v}from"./_StoriesComponents-C2Db3UPw.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./Pressable-oAGlZhAu.js";import"./index-B9mCggbT.js";import"./index-DGaDRGzj.js";import"./v4-CQkTLCs1.js";import"./rifm-Dd1rctpd.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./tslib.es6-UMXCHJY6.js";import"./FileInput-CCl51q5q.js";import"./LakeHeading-Babrol-L.js";import"./useBoolean-DklP6dZn.js";import"./index-D3ylJrlI.js";import"./LakeAlert-BqguNNRI.js";import"./useResponsive-CHheHyU5.js";import"./Tag-DiQlGlFk.js";import"./index-Bg-WljPs.js";import"./FocusTrap-DOGttOjF.js";import"./a11y-DXvpDVrG.js";import"./Suspendable-DAYYZwVM.js";import"./ResponsiveContainer-CpUVeAXt.js";import"./TransitionView-DHf_wMwC.js";import"./useBodyClassName-CiTylq2A.js";function Ve(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ve=function(){return!!e})()}function oe(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,X(e,r)}function se(e){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},se(e)}function X(e,r){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},X(e,r)}function z(e){var r=typeof Map=="function"?new Map:void 0;return z=function(n){if(n===null||!function(o){try{return Function.toString.call(o).indexOf("[native code]")!==-1}catch{return typeof o=="function"}}(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return function(o,l,D){if(Ve())return Reflect.construct.apply(null,arguments);var k=[null];k.push.apply(k,l);var P=new(o.bind.apply(o,k));return D&&X(P,D.prototype),P}(n,arguments,se(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),X(a,n)},z(e)}function Y(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var st=function(e){function r(n){var a;return(a=e.call(this,"Request to "+n+" failed")||this).url=void 0,Object.setPrototypeOf(Y(a),r.prototype),a.name="NetworkError",a.url=n,a}return oe(r,e),r}(z(Error)),ut=function(e){function r(n,a){var o;return a==null?((o=e.call(this,"Request to "+n+" timed out")||this).url=void 0,o.timeout=void 0):((o=e.call(this,"Request to "+n+" timed out (> "+a+"ms)")||this).url=void 0,o.timeout=void 0),Object.setPrototypeOf(Y(o),r.prototype),o.name="TimeoutError",o.url=n,o.timeout=a,Y(o)}return oe(r,e),r}(z(Error)),ot=function(e){function r(n,a,o){var l;return(l=e.call(this,"Request to "+n+" gave status "+a)||this).url=void 0,l.status=void 0,l.response=void 0,Object.setPrototypeOf(Y(l),r.prototype),l.name="BadStatusError",l.url=n,l.status=a,l.response=o,l}return oe(r,e),r}(z(Error)),it=function(e){return e.ok?I.Ok(e):I.Error(new ot(e.url,e.status,e.response.toUndefined()))},lt={make:function(e){var r=e.url,n=e.method,a=n===void 0?"GET":n,o=e.responseType,l=e.body,D=e.headers,k=e.withCredentials,P=k!==void 0&&k,h=e.onLoadStart,O=e.onProgress,U=e.timeout;return ue.make(function(E){var i=new XMLHttpRequest;i.withCredentials=P,i.open(a,r,!0),o!=null&&(i.responseType=o),U!=null&&(i.timeout=U),D!=null&&$e.entries(D).forEach(function(c){return i.setRequestHeader(c[0],c[1])});var $=function(){b(),E(I.Error(new st(r)))},F=function(){b(),E(I.Error(new ut(r,U)))},j=function(){b();var c=i.status,Z=ne.fromNullable(i.response);E(I.Ok({url:r,status:c,ok:c>=200&&c<300,response:Z,xhr:i}))},b=function(){i.removeEventListener("error",$),i.removeEventListener("load",j),i.removeEventListener("timeout",F),h!=null&&i.removeEventListener("loadstart",h),O!=null&&i.removeEventListener("progress",O)};return i.addEventListener("error",$),i.addEventListener("load",j),i.addEventListener("timeout",F),h!=null&&i.addEventListener("loadstart",h),O!=null&&i.addEventListener("progress",O),i.send(l),function(){b(),i.abort()}})}};const ie=p.memo(p.forwardRef(({style:e,onReset:r,onSubmit:n,...a},o)=>Ge("form",{...a,ref:o,onReset:l=>{l.preventDefault(),r==null||r(l)},onSubmit:l=>{l.preventDefault(),n==null||n(l)},style:[et.view,e]})));ie.displayName="Form";ie.__docgenInfo={description:"",methods:[],displayName:"Form"};const pt=["application/pdf","image/png","image/jpeg"],re=Ke.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),Q=e=>ae(e).with({type:"tooltip"},({text:r,width:n})=>t.jsx(Ze,{content:r,width:n,togglableOnFocus:!0,placement:"right",maxWidth:400,children:t.jsx(H,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",disabled:!0,style:[re.button,re.buttonWithDefaultCursor],ariaLabel:d("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:n})=>t.jsx(H,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",onPress:n,style:re.button,ariaLabel:d("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),dt=e=>{const r=`supportingDocuments.purpose.${e}`;return Ne(r)?d(r):e},mt=e=>{const r=`supportingDocuments.purpose.${e}.description`;return Ne(r)?d(r):""},He=({documents:e,generateUpload:r,uploadFile:n,requiredDocumentPurposes:a,templateLanguage:o=nt.language,status:l,onRemoveFile:D,showIds:k=!1,readOnly:P=!1,getPurposeMetadata:h,readonlyDocumentPurposes:O=[]},U)=>{const[E,i]=p.useState(!1),[$,F]=p.useState(!1),[j,b]=p.useState(void 0),[c,Z]=p.useState([]),le=p.useMemo(()=>{const s=new Set(a),m=[...c,...e];m.forEach(u=>s.add(u.purpose));const q=new Map([...s].map(u=>{const y=m.filter(S=>S.purpose===u);return[u,y]})),G=new Set(a),R=new Map([...s].map(u=>{const y=q.get(u)??[],K=y.length>0&&y.every(x=>x.file.statusInfo.status==="Validated")?0:G.has(u)?1:2;return[u,K]}));return[...s].sort((u,y)=>{const S=R.get(u)??2;return(R.get(y)??2)>S?-1:1}).map(u=>{const y=q.get(u)??[];return{purpose:u,files:y.map(S=>S.file),isRequired:G.has(u),areAllDocumentsValidated:R.get(u)===0}})},[a,e,c]),pe=p.useRef(new Map(Je.filterMap(le,({isRequired:s,purpose:m,files:q})=>s?ne.Some([m,q]):ne.None()))),de=p.useRef({});p.useImperativeHandle(U,()=>({areAllRequiredDocumentsFilled:()=>[...pe.current.values()].every(m=>m.length>0),addDocument:s=>{Z(m=>[...m,s])}})),p.useEffect(()=>{const s=c[c.length-1];if(s!=null){const m=de.current[s==null?void 0:s.purpose];m!=null&&m.add(s.file)}},[c]);const me=le.filter(({files:s})=>!(P&&s.length===0));return t.jsxs(ie,{children:[me.map(({purpose:s,files:m,areAllDocumentsValidated:q,isRequired:G})=>{const R=h==null?void 0:h(s);return t.jsxs(p.Fragment,{children:[t.jsx(ge,{label:dt(s),help:ee(R)?t.jsx(Q,{type:"button",label:R.title,onPress:()=>b(R)}):ae(s).with("PowerOfAttorney",()=>t.jsx(Q,{type:"button",label:d("supportingDocuments.help.whatIsThis"),onPress:()=>i(!0)})).with("SwornStatement",()=>t.jsx(Q,{type:"button",label:d("supportingDocuments.help.whatIsThis"),onPress:()=>F(!0)})).otherwise(()=>{const u=mt(s);return Qe(u)?t.jsx(Q,{type:"tooltip",text:u}):null}),render:()=>t.jsx(at,{ref:u=>de.current[s]=u,canUpload:!O.includes(s)&&!P&&l==="WaitingForDocument"&&!q,accept:pt,maxSize:2e7,icon:"document-regular",initialFiles:m,generateUpload:r,getUploadConfig:u=>({fileName:u.name,purpose:s}),uploadFile:ee(n)?n:({upload:u,file:y,onLoadStart:S,onProgress:K})=>{const x=new FormData;return u.fields.forEach(({key:Xe,value:ze})=>x.append(Xe,ze)),x.append("file",y),lt.make({url:u.url,method:"POST",onLoadStart:S,onProgress:K,body:x}).mapOkToResult(it)},formatAndSizeDescription:d("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:P?void 0:D,onChange:u=>{G&&pe.current.set(s,u)},showIds:k})}),t.jsx(T,{height:24})]},s)}),me.length===0?t.jsxs(t.Fragment,{children:[t.jsx(T,{height:24}),t.jsx(J,{align:"center",children:d("supportingDocuments.noDocuments")}),t.jsx(T,{height:24})]}):null,t.jsxs(te,{visible:E,title:d("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>i(!1),children:[t.jsx(J,{children:d("supportingDocuments.powerOfAttorneyModal.description")}),t.jsx(T,{height:16}),t.jsx(ce,{paddingBottom:0,children:t.jsx(H,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${ae(o).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:d("supportingDocuments.downloadTemplate")})})]}),t.jsxs(te,{visible:$,title:d("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>F(!1),children:[t.jsx(J,{children:d("supportingDocuments.purpose.SwornStatement.description")}),t.jsx(T,{height:16}),t.jsx(ce,{paddingBottom:0,children:t.jsx(H,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:d("supportingDocuments.downloadTemplate")})})]}),t.jsx(te,{visible:ee(j),title:d("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>b(void 0),children:t.jsx(rt,{children:j==null?void 0:j.values.map(({title:s,value:m,type:q})=>t.jsx(ge,{type:"viewSmall",label:s,actions:q==="copy"&&t.jsx(tt,{valueToCopy:m,copiedText:d("copyButton.copiedTooltip"),copyText:d("copyButton.copyTooltip")}),render:()=>t.jsx(J,{variant:"regular",color:Ye.gray[900],children:m})}))})})]})},g=p.forwardRef(He);He.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollectionWithRef",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},getPurposeMetadata:{required:!1,tsType:{name:"signature",type:"function",raw:"(purose: Purpose) => PurposeMetadata | undefined",signature:{arguments:[{type:{name:"Purpose"},name:"purose"}],return:{name:"union",raw:"PurposeMetadata | undefined",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};g.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},templateLanguage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"locale.language",computed:!0}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},getPurposeMetadata:{required:!1,tsType:{name:"signature",type:"function",raw:"(purose: Purpose) => PurposeMetadata | undefined",signature:{arguments:[{type:{name:"Purpose"},name:"purose"}],return:{name:"union",raw:"PurposeMetadata | undefined",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const Kt={title:"Onboarding/SupportingDocumentCollection",component:g},w=()=>ue.make(e=>{setTimeout(()=>{e(I.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),A=()=>{const[e,r]=p.useState([]),n=p.useRef(null);return t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsxs(v,{title:"Default",children:[t.jsx(g,{ref:n,status:"WaitingForDocument",generateUpload:w,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],getPurposeMetadata:a=>({title:"Show metadata",values:[{title:"Purpose",value:a},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),t.jsx(H,{onPress:()=>{n.current!=null&&n.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},C=()=>{const[e,r]=p.useState([]);return t.jsx(f,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:w,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},L=()=>{const[e,r]=p.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:w,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>ue.make(n=>{setTimeout(()=>{n(I.Ok(void 0))},1e3)})})})})},W=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(g,{status:"PendingReview",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),B=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(g,{status:"Approved",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),M=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(g,{status:"Approved",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),_=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(g,{status:"Rejected",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),N=()=>{const[e,r]=p.useState([]);return t.jsx(f,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:w,documents:e,onChange:r,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},V=()=>t.jsx(f,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(g,{status:"WaitingForDocument",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});A.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};C.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};L.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};W.__docgenInfo={description:"",methods:[],displayName:"Pending"};B.__docgenInfo={description:"",methods:[],displayName:"Approved"};M.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};_.__docgenInfo={description:"",methods:[],displayName:"Rejected"};N.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};V.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};var ye,fe,ve;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(ve=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var we,ke,Pe;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(Pe=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var he,qe,Se;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(Se=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:Se.source}}};var De,je,be;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(be=(je=W.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var Re,Ie,Oe;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Oe=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var Ue,Ee,Fe;M.parameters={...M.parameters,docs:{...(Ue=M.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(Fe=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var xe,Te,Ae;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(Ae=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Ce,Le,We;N.parameters={...N.parameters,docs:{...(Ce=N.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(We=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:We.source}}};var Be,Me,_e;V.parameters={...V.parameters,docs:{...(Be=V.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(_e=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};const Jt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{B as Approved,M as ApprovedWithoutDownload,W as Pending,N as ReadOnlyEmpty,V as ReadOnlyWithDocs,_ as Rejected,A as WaitingForDocument,C as WaitingForDocumentShowIds,L as WaitingForDocumentWithApprovedAndRejected,Jt as __namedExportsOrder,Kt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-D7M_U5Xw.js.map
