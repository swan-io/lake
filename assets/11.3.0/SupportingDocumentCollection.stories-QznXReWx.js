import{j as t}from"./jsx-runtime-DT09rT5F.js";import{G as I,H as oe,ad as $e,p as ae,u as Ke,s as Je,F as Qe,i as ee,z as se,S as T,L as K,c as Ye,n as Ze}from"./ScrollView-C1yxRy16.js";import{a as ge,L as N}from"./LakeButton-r-Uybfm2.js";import{r as l}from"./index-DXKZGL6g.js";import{c as et}from"./commonStyles-CWvHnKRn.js";import{L as tt}from"./LakeCopyButton-BcHIRBCY.js";import{L as ye}from"./LakeLabel-DkfEw3kL.js";import{R as nt}from"./ReadOnlyFieldList-oTmgIJPj.js";import{t as m,l as rt,i as Ne}from"./i18n-DmAlgk2N.js";import{F as at}from"./FilesUploader-DD3kb3G9.js";import{L as te}from"./LakeModal-DUU5Nv-7.js";import{S as f,a as v}from"./_StoriesComponents-BSXeOJ1Z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BeFrmAzh.js";import"./Pressable-to27AyJA.js";import"./index-BpljNV4n.js";import"./extends-CF3RwP-h.js";import"./clipboard-BXAk6GqW.js";import"./v4-C6aID195.js";import"./Separator-DMQr2iVh.js";import"./rifm-BpdKztb4.js";import"./utc-BdCcOVEk.js";import"./array-BfAlyugE.js";import"./FileInput-wgp70euD.js";import"./LakeHeading-CD0FHpfz.js";import"./useBoolean-hauE57I1.js";import"./LakeAlert-C-HsTrbB.js";import"./useResponsive-6iDeDSbQ.js";import"./Tag-KbOj3ibt.js";import"./index-VNGmZ7GH.js";import"./FocusTrap-Cq0HuauR.js";import"./Suspendable-CKuscA2L.js";import"./ResponsiveContainer-WxURT3St.js";import"./TransitionView-Cm_7ViIn.js";import"./useBodyClassName-CYzM7DM-.js";function He(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(He=function(){return!!e})()}function ie(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,H(e,n)}function ue(e){return ue=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ue(e)}function H(e,n){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},H(e,n)}function X(e){var n=typeof Map=="function"?new Map:void 0;return X=function(r){if(r===null||!function(u){try{return Function.toString.call(u).indexOf("[native code]")!==-1}catch{return typeof u=="function"}}(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(n!==void 0){if(n.has(r))return n.get(r);n.set(r,a)}function a(){return function(u,i,D){if(He())return Reflect.construct.apply(null,arguments);var k=[null];k.push.apply(k,i);var P=new(u.bind.apply(u,k));return D&&H(P,D.prototype),P}(r,arguments,ue(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),H(a,r)},X(e)}function J(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var st=function(e){function n(r){var a;return(a=e.call(this,"Request to "+r+" failed")||this).url=void 0,Object.setPrototypeOf(J(a),n.prototype),a.name="NetworkError",a.url=r,a}return ie(n,e),n}(X(Error)),ut=function(e){function n(r,a){var u;return a==null?((u=e.call(this,"Request to "+r+" timed out")||this).url=void 0,u.timeout=void 0):((u=e.call(this,"Request to "+r+" timed out (> "+a+"ms)")||this).url=void 0,u.timeout=void 0),Object.setPrototypeOf(J(u),n.prototype),u.name="TimeoutError",u.url=r,u.timeout=a,J(u)}return ie(n,e),n}(X(Error)),ot=function(e){function n(r,a,u){var i;return(i=e.call(this,"Request to "+r+" gave status "+a)||this).url=void 0,i.status=void 0,i.response=void 0,Object.setPrototypeOf(J(i),n.prototype),i.name="BadStatusError",i.url=r,i.status=a,i.response=u,i}return ie(n,e),n}(X(Error)),it=function(e){return e.ok?I.Ok(e):I.Error(new ot(e.url,e.status,e.response.toUndefined()))},lt={make:function(e){var n=e.url,r=e.method,a=r===void 0?"GET":r,u=e.responseType,i=e.body,D=e.headers,k=e.withCredentials,P=k!==void 0&&k,q=e.onLoadStart,O=e.onProgress,U=e.timeout;return oe.make(function(E){var o=new XMLHttpRequest;o.withCredentials=P,o.open(a,n,!0),u!=null&&(o.responseType=u),U!=null&&(o.timeout=U),D!=null&&$e.entries(D).forEach(function(g){return o.setRequestHeader(g[0],g[1])});var z=function(){R(),E(I.Error(new st(n)))},F=function(){R(),E(I.Error(new ut(n,U)))},j=function(){R();var g=o.status,Q=ae.fromNullable(o.response);E(I.Ok({url:n,status:g,ok:g>=200&&g<300,response:Q,xhr:o}))},R=function(){o.removeEventListener("error",z),o.removeEventListener("load",j),o.removeEventListener("timeout",F),q!=null&&o.removeEventListener("loadstart",q),O!=null&&o.removeEventListener("progress",O)};return o.addEventListener("error",z),o.addEventListener("load",j),o.addEventListener("timeout",F),q!=null&&o.addEventListener("loadstart",q),O!=null&&o.addEventListener("progress",O),o.send(i),function(){R(),o.abort()}})}};const le=l.memo(l.forwardRef(({style:e,onReset:n,onSubmit:r,...a},u)=>Ke("form",{...a,ref:u,onReset:i=>{i.preventDefault(),n==null||n(i)},onSubmit:i=>{i.preventDefault(),r==null||r(i)},style:[et.view,e]})));le.displayName="Form";le.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FormEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FormEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const dt=["application/pdf","image/png","image/jpeg","image/heic"],ne=Je.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),re=e=>se(e).with({type:"tooltip"},({text:n,width:r})=>t.jsx(Ze,{content:n,width:r,togglableOnFocus:!0,placement:"right",maxWidth:400,children:t.jsx(N,{mode:"tertiary",size:"small",color:"gray",icon:e.icon??"question-circle-regular",disabled:!0,style:[ne.button,ne.buttonWithDefaultCursor],ariaLabel:m("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:n,onPress:r})=>t.jsx(N,{mode:"tertiary",size:"small",color:"gray",icon:e.icon??"question-circle-regular",onPress:r,style:ne.button,ariaLabel:m("supportingDocuments.help.whatIsThis"),children:n})).exhaustive(),pt=e=>{const n=`supportingDocuments.purpose.${e}`;return Ne(n)?m(n):e},mt=e=>{const n=`supportingDocuments.purpose.${e}.description`;return Ne(n)?m(n):""},Xe=({documents:e,generateUpload:n,uploadFile:r,requiredDocumentPurposes:a,templateLanguage:u=rt.language,status:i,onRemoveFile:D,showIds:k=!1,readOnly:P=!1,getPurposeMetadata:q,readonlyDocumentPurposes:O=[]},U)=>{const[E,o]=l.useState(!1),[z,F]=l.useState(!1),[j,R]=l.useState(void 0),[g,Q]=l.useState([]),de=l.useMemo(()=>{const s=new Set(a),c=[...g,...e];c.forEach(d=>s.add(d.purpose));const h=new Map([...s].map(d=>{const p=c.filter(S=>S.purpose===d);return[d,p]})),G=new Set(a),b=new Map([...s].map(d=>{const p=h.get(d)??[],$=p.length>0&&p.every(Y=>Y.file.statusInfo.status==="Validated")?0:G.has(d)?1:2;return[d,$]}));return[...s].sort((d,p)=>{const S=b.get(d)??2;return(b.get(p)??2)>S?-1:1}).map(d=>{const p=h.get(d)??[];return{purpose:d,files:p.map(S=>S.file),isRequired:G.has(d),areAllDocumentsValidated:b.get(d)===0}})},[a,e,g]),pe=l.useRef(new Map(Qe.filterMap(de,({isRequired:s,purpose:c,files:h})=>s?ae.Some([c,h]):ae.None()))),me=l.useRef({});l.useImperativeHandle(U,()=>({areAllRequiredDocumentsFilled:()=>[...pe.current.values()].every(c=>c.length>0),addDocument:s=>{Q(c=>[...c,s])}})),l.useEffect(()=>{const s=g[g.length-1];if(s!=null){const c=me.current[s==null?void 0:s.purpose];c!=null&&c.add(s.file)}},[g]);const ce=de.filter(({files:s})=>!(P&&s.length===0));return t.jsxs(le,{children:[ce.map(({purpose:s,files:c,areAllDocumentsValidated:h,isRequired:G})=>{const b=q==null?void 0:q(s),d=mt(s);return t.jsxs(l.Fragment,{children:[t.jsx(ye,{label:pt(s),description:d,help:ee(b)?t.jsx(re,{type:"button",label:b.title,onPress:()=>R(b)}):se(s).with("PowerOfAttorney",()=>t.jsx(re,{type:"button",icon:"arrow-down-filled",label:m("supportingDocuments.help.downloadTemplate"),onPress:()=>o(!0)})).with("SwornStatement",()=>t.jsx(re,{type:"button",icon:"arrow-down-filled",label:m("supportingDocuments.help.downloadTemplate"),onPress:()=>F(!0)})).otherwise(()=>null),render:()=>t.jsx(at,{ref:p=>me.current[s]=p,canUpload:!O.includes(s)&&!P&&i==="WaitingForDocument"&&!h,accept:dt,maxSize:2e7,icon:"document-regular",initialFiles:c,generateUpload:n,getUploadConfig:p=>({fileName:p.name,purpose:s}),uploadFile:ee(r)?r:({upload:p,file:S,onLoadStart:$,onProgress:Y})=>{const Z=new FormData;return p.fields.forEach(({key:ze,value:Ge})=>Z.append(ze,Ge)),Z.append("file",S),lt.make({url:p.url,method:"POST",onLoadStart:$,onProgress:Y,body:Z}).mapOkToResult(it)},formatAndSizeDescription:m("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:P?void 0:D,onChange:p=>{G&&pe.current.set(s,p)},showIds:k})}),t.jsx(T,{height:24})]},s)}),ce.length===0?t.jsxs(t.Fragment,{children:[t.jsx(T,{height:24}),t.jsx(K,{align:"center",children:m("supportingDocuments.noDocuments")}),t.jsx(T,{height:24})]}):null,t.jsxs(te,{visible:E,title:m("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>o(!1),children:[t.jsx(K,{children:m("supportingDocuments.powerOfAttorneyModal.description")}),t.jsx(T,{height:16}),t.jsx(ge,{paddingBottom:0,children:t.jsx(N,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${se(u).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:m("supportingDocuments.downloadTemplate")})})]}),t.jsxs(te,{visible:z,title:m("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>F(!1),children:[t.jsx(K,{children:m("supportingDocuments.purpose.SwornStatement.description")}),t.jsx(T,{height:16}),t.jsx(ge,{paddingBottom:0,children:t.jsx(N,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:m("supportingDocuments.downloadTemplate")})})]}),t.jsx(te,{visible:ee(j),title:m("supportingDocuments.informations"),icon:"document-regular",onPressClose:()=>R(void 0),children:t.jsx(nt,{children:j==null?void 0:j.values.map(({title:s,value:c,type:h})=>t.jsx(ye,{type:"viewSmall",label:s,actions:h==="copy"&&t.jsx(tt,{valueToCopy:c,copiedText:m("copyButton.copiedTooltip"),copyText:m("copyButton.copyTooltip")}),render:()=>t.jsx(K,{variant:"regular",color:Ye.gray[900],children:c})}))})})]})},y=l.forwardRef(Xe);Xe.__docgenInfo={description:"",methods:[{name:"areAllRequiredDocumentsFilled",docblock:null,modifiers:[],params:[],returns:null},{name:"addDocument",docblock:null,modifiers:[],params:[{name:"document",optional:!1,type:null}],returns:null}],displayName:"SupportingDocumentCollectionWithRef",props:{status:{required:!0,tsType:{name:"union",raw:`| "WaitingForDocument"
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
}[]`,required:!0}}]}},{name:"undefined"}]}}},description:""},readonlyDocumentPurposes:{required:!1,tsType:{name:"Array",elements:[{name:"Purpose"}],raw:"Purpose[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const $t={title:"Onboarding/SupportingDocumentCollection",component:y},w=()=>oe.make(e=>{setTimeout(()=>{e(I.Ok({id:crypto.randomUUID(),upload:{url:window.location.href,fields:[]}}))},500)}),x=()=>{const[e,n]=l.useState([]),r=l.useRef(null);return t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsxs(v,{title:"Default",children:[t.jsx(y,{ref:r,status:"WaitingForDocument",generateUpload:w,documents:e,onChange:n,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],getPurposeMetadata:a=>({title:"Show metadata",values:[{title:"Purpose",value:a},{title:"ID",value:"666",type:"copy"},{title:"Lorem ipsum",value:"dolor sit amet"}]})}),t.jsx(N,{onPress:()=>{r.current!=null&&r.current.addDocument({purpose:"UltimateBeneficialOwnerProofOfAddress",file:{id:crypto.randomUUID(),name:"toto.jpg",statusInfo:{status:"Uploaded"}}})},children:"Add other document from outside"})]})})},C=()=>{const[e,n]=l.useState([]);return t.jsx(f,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"WaitingForDocument",generateUpload:w,documents:e,onChange:n,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],showIds:!0})})})},L=()=>{const[e,n]=l.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"WaitingForDocument",generateUpload:w,documents:e,onChange:n,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>oe.make(r=>{setTimeout(()=>{r(I.Ok(void 0))},1e3)})})})})},A=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"PendingReview",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),W=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"Approved",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),M=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"Approved",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),B=()=>t.jsx(f,{title:"SupportingDocument",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"Rejected",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),_=()=>{const[e,n]=l.useState([]);return t.jsx(f,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"WaitingForDocument",generateUpload:w,documents:e,onChange:n,requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})})},V=()=>t.jsx(f,{title:"WaitingForDocumentShowIds",description:"Supporting document collection",children:t.jsx(v,{title:"Default",children:t.jsx(y,{status:"WaitingForDocument",generateUpload:w,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document",reasonCode:"InvalidDocument"}}}],onChange:()=>{},requiredDocumentPurposes:[],showIds:!0,readOnly:!0})})});x.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocument"};C.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentShowIds"};L.__docgenInfo={description:"",methods:[],displayName:"WaitingForDocumentWithApprovedAndRejected"};A.__docgenInfo={description:"",methods:[],displayName:"Pending"};W.__docgenInfo={description:"",methods:[],displayName:"Approved"};M.__docgenInfo={description:"",methods:[],displayName:"ApprovedWithoutDownload"};B.__docgenInfo={description:"",methods:[],displayName:"Rejected"};_.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyEmpty"};V.__docgenInfo={description:"",methods:[],displayName:"ReadOnlyWithDocs"};var fe,ve,we;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(we=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var ke,Pe,qe;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} showIds={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(qe=(Pe=C.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var he,Se,De;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(De=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:De.source}}};var je,Re,be;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(be=(Re=A.parameters)==null?void 0:Re.docs)==null?void 0:be.source}}};var Ie,Oe,Ue;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(Te=(Fe=M.parameters)==null?void 0:Fe.docs)==null?void 0:Te.source}}};var xe,Ce,Le;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(Le=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source}}};var Ae,We,Me;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
            reason: "Invalid document",
            reasonCode: "InvalidDocument"
          }
        }
      }]} onChange={() => {}} requiredDocumentPurposes={[]} showIds={true} readOnly={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(Ve=(_e=V.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};const Kt=["WaitingForDocument","WaitingForDocumentShowIds","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected","ReadOnlyEmpty","ReadOnlyWithDocs"];export{W as Approved,M as ApprovedWithoutDownload,A as Pending,_ as ReadOnlyEmpty,V as ReadOnlyWithDocs,B as Rejected,x as WaitingForDocument,C as WaitingForDocumentShowIds,L as WaitingForDocumentWithApprovedAndRejected,Kt as __namedExportsOrder,$t as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-QznXReWx.js.map
