import{j as t}from"./jsx-runtime-BlAj40OV.js";import{G as I,H as se,ad as $e,p as ae,u as Ke,s as Je,F as Qe,i as ee,z as oe,S as T,L as K,c as Ye,n as Ze}from"./ScrollView-9CE9bGmX.js";import{a as ge,L as N}from"./LakeButton-CkIxATVD.js";import{r as l}from"./index-Cs7sjTYM.js";import{c as et}from"./commonStyles-CWvHnKRn.js";import{L as tt}from"./LakeCopyButton-Bus_C43p.js";import{L as ye}from"./LakeLabel-CsQ0iAyY.js";import{R as rt}from"./ReadOnlyFieldList-C2RrfsBy.js";import{t as m,l as nt,i as Ne}from"./i18n-CaJ-vzGo.js";import{F as at}from"./FilesUploader-ld1nZASc.js";import{L as te}from"./LakeModal-DypPbF8i.js";import{S as f,a as v}from"./_StoriesComponents-Ca7nejgj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./Pressable-DgSjTg3z.js";import"./index-DvGNo-iK.js";import"./extends-CF3RwP-h.js";import"./clipboard-BXAk6GqW.js";import"./v4-DvF23Exx.js";import"./Separator-WPSGV85z.js";import"./rifm-DPdf5QaV.js";import"./utc-Bb9NEY8r.js";import"./array-BfAlyugE.js";import"./FileInput-Ne4ibzvv.js";import"./LakeHeading-BFtfhQQd.js";import"./useBoolean-DHW5baxv.js";import"./index-D3ylJrlI.js";import"./LakeAlert-b2pYaKLM.js";import"./useResponsive-CzIqCC5v.js";import"./Tag-N3bHIj2a.js";import"./index-BAiP5jmg.js";import"./FocusTrap-DRtEiQY2.js";import"./Suspendable-4c0HFktU.js";import"./ResponsiveContainer-C5wdxSbn.js";import"./TransitionView-C05Cb-CH.js";import"./useBodyClassName-DMoYUPTW.js";function He(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(He=function(){return!!e})()}function ie(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,H(e,r)}function ue(e){return ue=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ue(e)}function H(e,r){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},H(e,r)}function X(e){var r=typeof Map=="function"?new Map:void 0;return X=function(n){if(n===null||!function(u){try{return Function.toString.call(u).indexOf("[native code]")!==-1}catch{return typeof u=="function"}}(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return function(u,i,D){if(He())return Reflect.construct.apply(null,arguments);var k=[null];k.push.apply(k,i);var P=new(u.bind.apply(u,k));return D&&H(P,D.prototype),P}(n,arguments,ue(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),H(a,n)},X(e)}function J(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ot=function(e){function r(n){var a;return(a=e.call(this,"Request to "+n+" failed")||this).url=void 0,Object.setPrototypeOf(J(a),r.prototype),a.name="NetworkError",a.url=n,a}return ie(r,e),r}(X(Error)),ut=function(e){function r(n,a){var u;return a==null?((u=e.call(this,"Request to "+n+" timed out")||this).url=void 0,u.timeout=void 0):((u=e.call(this,"Request to "+n+" timed out (> "+a+"ms)")||this).url=void 0,u.timeout=void 0),Object.setPrototypeOf(J(u),r.prototype),u.name="TimeoutError",u.url=n,u.timeout=a,J(u)}return ie(r,e),r}(X(Error)),st=function(e){function r(n,a,u){var i;return(i=e.call(this,"Request to "+n+" gave status "+a)||this).url=void 0,i.status=void 0,i.response=void 0,Object.setPrototypeOf(J(i),r.prototype),i.name="BadStatusError",i.url=n,i.status=a,i.response=u,i}return ie(r,e),r}(X(Error)),it=function(e){return e.ok?I.Ok(e):I.Error(new st(e.url,e.status,e.response.toUndefined()))},lt={make:function(e){var r=e.url,n=e.method,a=n===void 0?"GET":n,u=e.responseType,i=e.body,D=e.headers,k=e.withCredentials,P=k!==void 0&&k,q=e.onLoadStart,O=e.onProgress,U=e.timeout;return se.make(function(E){var s=new XMLHttpRequest;s.withCredentials=P,s.open(a,r,!0),u!=null&&(s.responseType=u),U!=null&&(s.timeout=U),D!=null&&$e.entries(D).forEach(function(g){return s.setRequestHeader(g[0],g[1])});var z=function(){R(),E(I.Error(new ot(r)))},F=function(){R(),E(I.Error(new ut(r,U)))},j=function(){R();var g=s.status,Q=ae.fromNullable(s.response);E(I.Ok({url:r,status:g,ok:g>=200&&g<300,response:Q,xhr:s}))},R=function(){s.removeEventListener("error",z),s.removeEventListener("load",j),s.removeEventListener("timeout",F),q!=null&&s.removeEventListener("loadstart",q),O!=null&&s.removeEventListener("progress",O)};return s.addEventListener("error",z),s.addEventListener("load",j),s.addEventListener("timeout",F),q!=null&&s.addEventListener("loadstart",q),O!=null&&s.addEventListener("progress",O),s.send(i),function(){R(),s.abort()}})}};const le=l.memo(l.forwardRef(({style:e,onReset:r,onSubmit:n,...a},u)=>Ke("form",{...a,ref:u,onReset:i=>{i.preventDefault(),r==null||r(i)},onSubmit:i=>{i.preventDefault(),n==null||n(i)},style:[et.view,e]})));le.displayName="Form";le.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FormEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FormEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const pt=["application/pdf","image/png","image/jpeg","image/heic"],re=Je.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),ne=e=>oe(e).with({type:"tooltip"},({text:r,width:n})=>t.jsx(Ze,{content:r,width:n,togglableOnFocus:!0,placement:"right",maxWidth:400,children:t.jsx(N,{mode:"tertiary",size:"small",color:"gray",icon:e.icon??"question-circle-regular",disabled:!0,style:[re.button,re.buttonWithDefaultCursor],ariaLabel:m("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:r,onPress:n})=>t.jsx(N,{mode:"tertiary",size:"small",color:"gray",icon:e.icon??"question-circle-regular",onPress:n,style:re.button,ariaLabel:m("supportingDocuments.help.whatIsThis"),children:r})).exhaustive(),dt=e=>{const r=`supportingDocuments.purpose.${e}`;return Ne(r)?m(r):e},mt=e=>{const r=`supportingDocuments.purpose.${e}.description`;return Ne(r)?m(r):""},Xe=({documents:e,generateUpload:r,uploadFile:n,requiredDocumentPurposes:a,templateLanguage:u=nt.language,status:i,onRemoveFile:D,showIds:k=!1,readOnly:P=!1,getPurposeMetadata:q,readonlyDocumentPurposes:O=[]},U)=>{const[E,s]=l.useState(!1),[z,F]=l.useState(!1),[j,R]=l.useState(void 0),[g,Q]=l.useState([]),pe=l.useMemo(()=>{const o=new Set(a),c=[...g,...e];c.forEach(p=>o.add(p.purpose));const h=new Map([...o].map(p=>{const d=c.filter(S=>S.purpose===p);return[p,d]})),G=new Set(a),b=new Map([...o].map(p=>{const d=h.get(p)??[],$=d.length>0&&d.every(Y=>Y.file.statusInfo.status==="Validated")?0:G.has(p)?1:2;return[p,$]}));return[...o].sort((p,d)=>{const S=b.get(p)??2;return(b.get(d)??2)>S?-1:1}).map(p=>{const d=h.get(p)??[];return{purpose:p,files:d.map(S=>S.file),isRequired:G.has(p),areAllDocumentsValidated:b.get(p)===0}})},[a,e,g]),de=l.useRef(new Map(Qe.filterMap(pe,({isRequired:o,purpose:c,files:h})=>o?ae.Some([c,h]):ae.None()))),me=l.useRef({});l.useImperativeHandle(U,()=>({areAllRequiredDocumentsFilled:()=>[...de.current.values()].every(c=>c.length>0),addDocument:o=>{Q(c=>[...c,o])}})),l.useEffect(()=>{const o=g[g.length-1];if(o!=null){const c=me.current[o==null?void 0:o.purpose];c!=null&&c.add(o.file)}},[g]);const ce=pe.filter(({files:o})=>!(P&&o.length===0));return t.jsxs(le,{children:[ce.map(({purpose:o,files:c,areAllDocumentsValidated:h,isRequired:G})=>{const b=q==null?void 0:q(o),p=mt(o);return t.jsxs(l.Fragment,{children:[t.jsx(ye,{label:dt(o),description:p,help:ee(b)?t.jsx(ne,{type:"button",label:b.title,onPress:()=>R(b)}):oe(o).with("PowerOfAttorney",()=>t.jsx(ne,{type:"button",icon:"arrow-down-filled",label:m("supportingDocuments.help.downloadTemplate"),onPress:()=>s(!0)})).with("SwornStatement",()=>t.jsx(ne,{type:"button",icon:"arrow-down-filled",label:m("supportingDocuments.help.downloadTemplate"),onPress:()=>F(!0)})).otherwise(()=>null),render:()=>t.jsx(at,{ref:d=>me.current[o]=d,canUpload:!O.includes(o)&&!P&&i==="WaitingForDocument"&&!h,accept:pt,maxSize:2e7,icon:"document-regular",initialFiles:c,generateUpload:r,getUploadConfig:d=>({fileName:d.name,purpose:o}),uploadFile:ee(n)?n:({upload:d,file:S,onLoadStart:$,onProgress:Y})=>{const Z=new FormData;return d.fields.forEach(({key:ze,value:Ge})=>Z.append(ze,Ge)),Z.append("file",S),lt.make({url:d.url,method:"POST",onLoadStart:$,onProgress:Y,body:Z}).mapOkToResult(it)},formatAndSizeDescription:m("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:P?void 0:D,onChange:d=>{G&&de.current.set(o,d)},showIds:k})}),t.jsx(T,{height:24})]},o)}),ce.length===0?t.jsxs(t.Fragment,{children:[t.jsx(T,{height:24}),t.jsx(K,{align:"center",children:m("supportingDocuments.noDocuments")}),t.jsx(T,{height:24})]}):null,t.jsxs(te,{visible:E,title:m("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>s(!1),children:[t.jsx(K,{children:m("supportingDocuments.powerOfAttorneyModal.description")}),t.jsx(T,{height:16}),t.jsx(ge,{paddingBottom:0,children:t.jsx(N,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${oe(u).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:m("supportingDocuments.downloadTemplate")})})]}),t.jsxs(te,{visible:z,title:m("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>F(!1),children:[t.jsx(K,{children:m("supportingDocuments.purpose.SwornStatement.description")}),t.jsx(T,{height:16}),t.jsx(ge,{paddingBottom:0,children:t.jsx(N,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:m("supportingDocuments.downloadTemplate")})})]}),t.jsx(te,{visible:ee(j),title:m("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>R(void 0),children:t.jsx(rt,{children:j==null?void 0:j.values.map(({title:o,value:c,type:h})=>t.jsx(ye,{type:"viewSmall",label:o,actions:h==="copy"&&t.jsx(tt,{valueToCopy:c,copiedText:m("copyButton.copiedTooltip"),copyText:m("copyButton.copyTooltip")}),render:()=>t.jsx(K,{variant:"regular",color:Ye.gray[900],children:c})}))})})]})},y=l.forwardRef(Xe);Xe.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollectionWithRef",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
}[]`,required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};y.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollection",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
}[]`,required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const Kt={title:"Onboarding/SupportingDocumentCollection",component:y},w=()=>se.make(e=>{setTimeout(()=>{e(I.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),x=()=>{const[e,r]=l.useState([]),n=l.useRef(null);return t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsxs(v,{title:"Default",children:[t.jsx(y,{ref:n,status:"WaitingForDocument",generateUpload:w,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],getPurposeMetadata:a=>({title:"Show metadata",values:[{title:"Purpose",value:a},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),t.jsx(N,{onPress:()=>{n.current!=null&&n.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},L=()=>{const[e,r]=l.useState([]);return t.jsx(f,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"WaitingForDocument",generateUpload:w,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},A=()=>{const[e,r]=l.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"WaitingForDocument",generateUpload:w,documents:e,onChange:r,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>se.make(n=>{setTimeout(()=>{n(I.Ok(void 0))},1e3)})})})})},C=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"PendingReview",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),W=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"Approved",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),M=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"Approved",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),B=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"Rejected",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),_=()=>{const[e,r]=l.useState([]);return t.jsx(f,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"WaitingForDocument",generateUpload:w,documents:e,onChange:r,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},V=()=>t.jsx(f,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"WaitingForDocument",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});x.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};L.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};A.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};C.__docgenInfo={description:"",methods:[],displayName:"Pending"};W.__docgenInfo={description:"",methods:[],displayName:"Approved"};M.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};B.__docgenInfo={description:"",methods:[],displayName:"Rejected"};_.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};V.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};var fe,ve,we;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(we=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var ke,Pe,qe;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(qe=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var he,Se,De;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(De=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:De.source}}};var je,Re,be;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(be=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:be.source}}};var Ie,Oe,Ue;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(Ue=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};var Ee,Fe,Te;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
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
}`,...(Te=(Fe=M.parameters)==null?void 0:Fe.docs)==null?void 0:Te.source}}};var xe,Le,Ae;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(Ae=(Le=B.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source}}};var Ce,We,Me;_.parameters={..._.parameters,docs:{...(Ce=_.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(Me=(We=_.parameters)==null?void 0:We.docs)==null?void 0:Me.source}}};var Be,_e,Ve;V.parameters={...V.parameters,docs:{...(Be=V.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(Ve=(_e=V.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};const Jt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{W as Approved,M as ApprovedWithoutDownload,C as Pending,_ as ReadOnlyEmpty,V as ReadOnlyWithDocs,B as Rejected,x as WaitingForDocument,L as WaitingForDocumentShowIds,A as WaitingForDocumentWithApprovedAndRejected,Jt as __namedExportsOrder,Kt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-od3CU9et.js.map
