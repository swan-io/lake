import{j as e}from"./jsx-runtime-DT09rT5F.js";import{s as S,e as E,d as P,J as O,c as y,B as v,z as U,L as j,S as h,V as D,I as T,N as A,n as V,l as L,i as B}from"./ScrollView-C1yxRy16.js";import{r as a}from"./index-DXKZGL6g.js";import{g as N,F as z}from"./FileInput-DTyySg5U.js";import{L as M}from"./LakeAlert-C-HsTrbB.js";import{L as x,a as G}from"./LakeButton-r-Uybfm2.js";import{P as W}from"./Pressable-to27AyJA.js";import{T as _}from"./Tag-KbOj3ibt.js";import{c as H}from"./commonStyles-CWvHnKRn.js";import{s as Q}from"./clipboard-BXAk6GqW.js";import{t}from"./i18n-B1T03nNU.js";import{L as J}from"./LakeModal-DXbrI9Ji.js";const $=s=>{const[m,p]=a.useState(s.initialFiles),f=a.useCallback(o=>{p(i=>i.some(r=>r.id===o.id)?i.map(r=>r.id===o.id?o:r):[...i,o])},[]),w=a.useCallback((o,i)=>s.generateUpload(o).tapError(r=>{s.onError!=null&&s.onError(r)}).flatMapOk(({upload:r,id:l})=>{p(u=>[...u.filter(n=>n.id!==l),{id:l,statusInfo:{status:"Uploading",progress:0},name:i.name}]);const k=u=>{p(n=>n.map(d=>d.id!==l?d:{...d,statusInfo:{status:"Uploading",progress:u}}))};return s.uploadFile({id:l,upload:r,file:i,onProgress:k}).tapOk(()=>{p(u=>u.map(n=>n.id!==l?n:{...n,statusInfo:{status:"Uploaded"}}))}).tapError(u=>{s.onError!=null&&s.onError(u),p(n=>n.filter(d=>d.id!==l))})}),[s]),c=a.useCallback(o=>{p(i=>i.filter(r=>r.id!==o))},[]);return{files:m,upload:w,remove:c,add:f}},b=S.create({base:{backgroundColor:E.accented,borderRadius:8,borderWidth:1,overflow:"hidden"},content:{height:56,paddingLeft:P[20],paddingRight:P[8]},progressBar:{flex:1,height:4,borderRadius:2,backgroundColor:O},progress:{height:4,transitionProperty:"width",transitionDuration:"1000ms",transitionTimingFunction:"ease-in-out",borderRadius:2,backgroundColor:y.current[500]},id:{alignSelf:"flex-start"}}),C=({file:{id:s,statusInfo:m,name:p,url:f},showId:w=!1,onRemove:c})=>{const[o,i]=a.useState(!1),[r,l]=a.useState(!1),k=a.useCallback(()=>{c!=null&&(i(!0),c().tap(()=>{i(!1),l(!1)}))},[c]),[u,n]=a.useState("copy");return e.jsxs(v,{style:[b.base,{borderColor:U(m.status).with("Uploaded","Uploading",()=>y.gray[100]).with("Pending",()=>y.shakespear[100]).with("Validated",()=>y.positive[500]).with("Refused",()=>y.negative[100]).exhaustive()}],children:[e.jsx(v,{alignItems:"center",direction:"row",style:b.content,children:m.status==="Uploading"?e.jsxs(e.Fragment,{children:[e.jsx(j,{numberOfLines:1,color:y.gray[700],children:t("fileTile.uploading")}),e.jsx(h,{width:20}),e.jsx(D,{role:"progressbar",style:b.progressBar,children:e.jsx(D,{style:[b.progress,{width:`${m.progress*100}%`}]})})]}):e.jsxs(e.Fragment,{children:[m.status==="Validated"?e.jsx(T,{size:24,color:y.positive[500],name:"checkmark-circle-regular"}):e.jsx(_,{icon:N(p),iconSize:20,color:U(m).with({status:A.union("Uploaded","Pending")},()=>"shakespear").with({status:"Refused"},()=>"negative").exhaustive()}),e.jsx(h,{width:16}),e.jsxs(v,{grow:1,children:[e.jsx(j,{numberOfLines:1,color:y.gray[700],style:H.fill,children:p}),w?e.jsx(D,{style:b.id,children:e.jsx(V,{describedBy:"copy",onHide:()=>n("copy"),togglableOnFocus:!0,content:u==="copy"?t("copyButton.copyTooltip"):t("copyButton.copiedTooltip"),children:e.jsx(W,{onPress:d=>{d.stopPropagation(),d.preventDefault(),Q(s),n("copied")},children:e.jsxs(v,{direction:"row",alignItems:"center",children:[e.jsx(j,{numberOfLines:1,variant:"smallRegular",children:t("fileTile.id",{id:s})}),e.jsx(h,{width:4}),e.jsx(T,{size:14,name:"copy-regular"})]})})})}):null]}),e.jsx(h,{width:12}),L(f)&&e.jsx(x,{mode:"tertiary",size:"small",icon:"open-filled",onPress:()=>{window.open(f,"_blank")},ariaLabel:t("common.open")}),B(c)&&e.jsx(x,{mode:"tertiary",size:"small",icon:"delete-regular",color:"negative",onPress:()=>l(!0),ariaLabel:t("common.remove")}),e.jsx(J,{title:t("fileTile.deleteModal.title"),icon:"subtract-circle-regular",visible:r,onPressClose:()=>l(!1),color:"negative",children:e.jsx(G,{paddingBottom:0,children:e.jsx(x,{loading:o,grow:!0,color:"negative",onPress:k,children:t("fileTile.deleteModal.delete")})})})]})}),U(m).with({status:"Pending"},()=>e.jsx(M,{anchored:!0,title:t("fileTile.status.Pending"),variant:"info"})).with({status:"Refused"},({reason:d,reasonCode:F})=>e.jsx(M,{anchored:!0,title:t("fileTile.status.Refused"),variant:"error",children:e.jsxs(v,{direction:"column",children:[e.jsx(j,{children:U(F).with("BadDocumentQuality",()=>t("supportingDocuments.rejectionReason.BadDocumentQuality")).with("CompanyNameMismatch",()=>t("supportingDocuments.rejectionReason.CompanyNameMismatch")).with("DeclaredAmountMismatch",()=>t("supportingDocuments.rejectionReason.DeclaredAmountMismatch")).with("ExpiredDocument",()=>t("supportingDocuments.rejectionReason.ExpiredDocument")).with("FullDocumentRequired",()=>t("supportingDocuments.rejectionReason.FullDocumentRequired")).with("IbanMismatch",()=>t("supportingDocuments.rejectionReason.IbanMismatch")).with("InvalidAddress",()=>t("supportingDocuments.rejectionReason.InvalidAddress")).with("InvalidDocument",()=>t("supportingDocuments.rejectionReason.InvalidDocument")).with("InvalidOrMissingData",()=>t("supportingDocuments.rejectionReason.InvalidOrMissingData")).with("InvalidTransaction",()=>t("supportingDocuments.rejectionReason.InvalidTransaction")).with("HandwrittenOrCertifiedElectronicSignatureRequired",()=>t("supportingDocuments.rejectionReason.HandwrittenOrCertifiedElectronicSignatureRequired")).with("MissingAccommodationProviderId",()=>t("supportingDocuments.rejectionReason.MissingAccommodationProviderId")).with("MissingAccommodationProviderIdLetter",()=>t("supportingDocuments.rejectionReason.MissingAccommodationProviderIdLetter")).with("MissingAccommodationProviderLetter",()=>t("supportingDocuments.rejectionReason.MissingAccommodationProviderLetter")).with("MissingCompanyDomiciliationStatement",()=>t("supportingDocuments.rejectionReason.MissingCompanyDomiciliationStatement")).with("MissingProviderProofOfAddress",()=>t("supportingDocuments.rejectionReason.MissingProviderProofOfAddress")).with("MissingProviderProofOfAddressAndIdDocument",()=>t("supportingDocuments.rejectionReason.MissingProviderProofOfAddressAndIdDocument")).with("MissingDescription",()=>t("supportingDocuments.rejectionReason.MissingDescription")).with("MissingSignature",()=>t("supportingDocuments.rejectionReason.MissingSignature")).with("PowerOfAttorneyToSwanRequired",()=>t("supportingDocuments.rejectionReason.PowerOfAttorneyToSwanRequired")).with("ProviderColorIdDocumentRequired",()=>t("supportingDocuments.rejectionReason.ProviderColorIdDocumentRequired")).with("TransactionAmountMismatch",()=>t("supportingDocuments.rejectionReason.TransactionAmountMismatch")).with("TransactionDateMismatch",()=>t("supportingDocuments.rejectionReason.TransactionDateMismatch")).with("TransactionNameMismatch",()=>t("supportingDocuments.rejectionReason.TransactionNameMismatch")).with("UnacceptableDocument",()=>t("supportingDocuments.rejectionReason.UnacceptableDocument")).with("other",()=>null).otherwise(q=>q)}),e.jsx(j,{children:d})]})})).otherwise(()=>null)]})};C.__docgenInfo={description:"",methods:[],displayName:"FileTile",props:{file:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},description:""},showId:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Future<unknown>",signature:{arguments:[],return:{name:"Future",elements:[{name:"unknown"}],raw:"Future<unknown>"}}},description:""}}};const K=({maxSize:s,accept:m,icon:p,getUploadConfig:f,onRemoveFile:w,onChange:c,formatAndSizeDescription:o,canUpload:i=!0,showIds:r=!1,...l},k)=>{const{files:u,upload:n,remove:d,add:F}=$(l),q=a.useRef(c);q.current=c;const I=a.useRef(!0);return a.useImperativeHandle(k,()=>({add:F})),a.useEffect(()=>{if(I.current){I.current=!1;return}const g=q.current;g!=null&&g(u)},[u]),e.jsxs(v,{children:[i?e.jsxs(e.Fragment,{children:[e.jsx(z,{layout:"horizontal",onFiles:g=>{g.forEach(R=>{n(f(R),R)})},accept:m,icon:p,description:o,maxSize:s}),e.jsx(h,{height:12})]}):null,u.map((g,R)=>e.jsxs(a.Fragment,{children:[R>0?e.jsx(h,{height:12}):null,e.jsx(C,{file:g,showId:r,onRemove:w!=null&&g.statusInfo.status==="Uploaded"?()=>w(g).tapOk(()=>{d(g.id)}):void 0})]},g.id))]})},X=a.forwardRef(K);X.__docgenInfo={description:"",methods:[],displayName:"FilesUploader",props:{initialFiles:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}}],raw:"SwanFile[]"},description:""},generateUpload:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  config: UploadInput,
) => Future<Result<UploadOutputWithId<UploadOutput>, GenerateUploadError>>`,signature:{arguments:[{type:{name:"UploadInput"},name:"config"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"signature",type:"object",raw:"{ id: string; upload: UploadOutput }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"UploadOutput",required:!0}}]}},{name:"GenerateUploadError"}],raw:"Result<UploadOutputWithId<UploadOutput>, GenerateUploadError>"}],raw:"Future<Result<UploadOutputWithId<UploadOutput>, GenerateUploadError>>"}}},description:""},uploadFile:{required:!0,tsType:{name:"signature",type:"function",raw:"(config: UploadFileInput<UploadOutput>) => Future<Result<unknown, UploadFileError>>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  upload: UploadOutput;
  file: File;
  onProgress: (progress: number) => void;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"UploadOutput",required:!0}},{key:"file",value:{name:"File",required:!0}},{key:"onProgress",value:{name:"signature",type:"function",raw:"(progress: number) => void",signature:{arguments:[{type:{name:"number"},name:"progress"}],return:{name:"void"}},required:!0}}]}},name:"config"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"UploadFileError"}],raw:"Result<unknown, UploadFileError>"}],raw:"Future<Result<unknown, UploadFileError>>"}}},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: GenerateUploadError | UploadFileError) => void",signature:{arguments:[{type:{name:"union",raw:"GenerateUploadError | UploadFileError",elements:[{name:"GenerateUploadError"},{name:"UploadFileError"}]},name:"error"}],return:{name:"void"}}},description:""},getUploadConfig:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File) => UploadInput",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"UploadInput"}}},description:""},accept:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},maxSize:{required:!0,tsType:{name:"number"},description:""},icon:{required:!0,tsType:{name:"unknown"},description:""},formatAndSizeDescription:{required:!1,tsType:{name:"string"},description:""},onRemoveFile:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: SwanFile) => Future<Result<unknown, unknown>>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: SwanFile[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}},{key:"reasonCode",value:{name:"string",required:!1}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}}],raw:"SwanFile[]"},name:"files"}],return:{name:"void"}}},description:""},canUpload:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{X as F};
//# sourceMappingURL=FilesUploader-DUZro9_-.js.map
