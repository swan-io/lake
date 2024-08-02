import{s as L,e as V,g as O,d as E,J as C,c as F,j as e,B as k,L as h,S as w,V as T,$ as P,C as M,m as B,I as H,h as G,b as N}from"./ScrollView-izfwNnHL.js";import{r as n}from"./index-Cs7sjTYM.js";import{g as X,F as z}from"./FileInput-Bp0yH3TC.js";import{L as U}from"./LakeAlert-BqV2U_4E.js";import{L as j,a as D}from"./LakeButton-BBcicEdY.js";import{P as _}from"./Pressable-DvrY7kJq.js";import{T as W}from"./Tag-ukHvcdnL.js";import{c as A}from"./commonStyles-t4XfA7cz.js";import{s as $}from"./clipboard-BXAk6GqW.js";import{t as p}from"./i18n-jXAJjfpW.js";import{L as J}from"./LakeModal-BZ5EDN00.js";const K=s=>{const[c,d]=n.useState(s.initialFiles),y=n.useCallback(i=>{d(u=>u.some(t=>t.id===i.id)?u.map(t=>t.id===i.id?i:t):[...u,i])},[]),v=n.useCallback((i,u)=>s.generateUpload(i).tapError(t=>{s.onError!=null&&s.onError(t)}).flatMapOk(({upload:t,id:o})=>{d(r=>[...r.filter(a=>a.id!==o),{id:o,statusInfo:{status:"Uploading",progress:0},name:u.name}]);const f=r=>{d(a=>a.map(l=>l.id!==o?l:{...l,statusInfo:{status:"Uploading",progress:r.loaded/r.total}}))};return s.uploadFile({id:o,upload:t,file:u,onLoadStart:f,onProgress:f}).tapOk(()=>{d(r=>r.map(a=>a.id!==o?a:{...a,statusInfo:{status:"Uploaded"}}))}).tapError(r=>{s.onError!=null&&s.onError(r),d(a=>a.filter(l=>l.id!==o))})}),[s]),g=n.useCallback(i=>{d(u=>u.filter(t=>t.id!==i))},[]);return{files:c,upload:v,remove:g,add:y}},b=L.create({base:{backgroundColor:V.accented,borderRadius:8,boxShadow:O.tile,overflow:"hidden"},content:{height:56,paddingLeft:E[20],paddingRight:E[8]},progressBar:{flex:1,height:4,borderRadius:2,backgroundColor:C},progress:{height:4,transitionProperty:"width",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out",borderRadius:2,backgroundColor:F.current[500]}}),I=({file:{id:s,statusInfo:c,name:d,url:y},showId:v=!1,onRemove:g})=>{const[i,u]=n.useState(!1),[t,o]=n.useState(!1),f=n.useCallback(()=>{g!=null&&(u(!0),g().tap(()=>{u(!1),o(!1)}))},[g]),[r,a]=n.useState("copy");return e.jsxs(k,{style:b.base,children:[e.jsx(k,{alignItems:"center",direction:"row",style:b.content,children:c.status==="Uploading"?e.jsxs(e.Fragment,{children:[e.jsx(h,{numberOfLines:1,color:F.gray[700],children:p("fileTile.uploading")}),e.jsx(w,{width:20}),e.jsx(T,{role:"progressbar",style:b.progressBar,children:e.jsx(T,{style:[b.progress,{width:`${c.progress*100}%`}]})})]}):e.jsxs(e.Fragment,{children:[e.jsx(W,{icon:X(d),iconSize:20,color:P(c).with({status:M.union("Uploaded","Pending")},()=>"shakespear").with({status:"Validated"},()=>"positive").with({status:"Refused"},()=>"negative").exhaustive()}),e.jsx(w,{width:16}),e.jsxs(k,{grow:1,children:[e.jsx(h,{numberOfLines:1,color:F.gray[700],style:A.fill,children:d}),v?e.jsx(B,{describedBy:"copy",onHide:()=>a("copy"),togglableOnFocus:!0,content:r==="copy"?p("copyButton.copyTooltip"):p("copyButton.copiedTooltip"),children:e.jsx(_,{onPress:l=>{l.stopPropagation(),l.preventDefault(),$(s),a("copied")},children:e.jsxs(k,{direction:"row",alignItems:"center",children:[e.jsx(h,{numberOfLines:1,variant:"smallRegular",children:p("fileTile.id",{id:s})}),e.jsx(w,{width:4}),e.jsx(H,{size:14,name:"copy-regular"})]})})}):null]}),e.jsx(w,{width:12}),G(y)&&e.jsx(j,{mode:"tertiary",size:"small",icon:"open-filled",onPress:()=>{window.open(y,"_blank")},ariaLabel:p("common.open")}),N(g)&&e.jsx(j,{mode:"tertiary",size:"small",icon:"delete-regular",color:"negative",onPress:()=>o(!0),ariaLabel:p("common.remove")}),e.jsx(J,{title:p("fileTile.deleteModal.title"),icon:"subtract-circle-regular",visible:t,onPressClose:()=>o(!1),color:"negative",children:e.jsx(D,{paddingBottom:0,children:e.jsx(j,{loading:i,grow:!0,color:"negative",onPress:f,children:p("fileTile.deleteModal.delete")})})})]})}),P(c).with({status:"Pending"},()=>e.jsx(U,{anchored:!0,title:p("fileTile.status.Pending"),variant:"info"})).with({status:"Validated"},()=>e.jsx(U,{anchored:!0,title:p("fileTile.status.Validated"),variant:"success"})).with({status:"Refused"},({reason:l})=>e.jsx(U,{anchored:!0,title:p("fileTile.status.Refused"),variant:"error",children:l})).otherwise(()=>null)]})};I.__docgenInfo={description:"",methods:[],displayName:"FileTile",props:{file:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"statusInfo",value:{name:"union",raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},description:""},showId:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Future<unknown>",signature:{arguments:[],return:{name:"Future",elements:[{name:"unknown"}],raw:"Future<unknown>"}}},description:""}}};const Q=({maxSize:s,accept:c,icon:d,getUploadConfig:y,onRemoveFile:v,onChange:g,formatAndSizeDescription:i,canUpload:u=!0,showIds:t=!1,...o},f)=>{const{files:r,upload:a,remove:l,add:S}=K(o),R=n.useRef(g);R.current=g;const x=n.useRef(!0);return n.useImperativeHandle(f,()=>({add:S})),n.useEffect(()=>{if(x.current){x.current=!1;return}const m=R.current;m!=null&&m(r)},[r]),e.jsxs(k,{children:[u?e.jsxs(e.Fragment,{children:[e.jsx(z,{layout:"horizontal",onFiles:m=>{m.forEach(q=>{a(y(q),q)})},accept:c,icon:d,description:i,maxSize:s}),e.jsx(w,{height:12})]}):null,r.map((m,q)=>e.jsxs(n.Fragment,{children:[q>0?e.jsx(w,{height:12}):null,e.jsx(I,{file:m,showId:t,onRemove:v!=null&&m.statusInfo.status==="Uploaded"?()=>v(m).tapOk(()=>{l(m.id)}):void 0})]},m.id))]})},Y=n.forwardRef(Q);Y.__docgenInfo={description:"",methods:[],displayName:"FilesUploader",props:{initialFiles:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"statusInfo",value:{name:"union",raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}}],raw:"SwanFile[]"},description:""},generateUpload:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  config: UploadInput,
) => Future<Result<UploadOutputWithId<UploadOutput>, GenerateUploadError>>`,signature:{arguments:[{type:{name:"UploadInput"},name:"config"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"signature",type:"object",raw:"{ id: string; upload: UploadOutput }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"UploadOutput",required:!0}}]}},{name:"GenerateUploadError"}],raw:"Result<UploadOutputWithId<UploadOutput>, GenerateUploadError>"}],raw:"Future<Result<UploadOutputWithId<UploadOutput>, GenerateUploadError>>"}}},description:""},uploadFile:{required:!0,tsType:{name:"signature",type:"function",raw:"(config: UploadFileInput<UploadOutput>) => Future<Result<unknown, UploadFileError>>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  upload: UploadOutput;
  file: File;
  onLoadStart: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
  onProgress: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"upload",value:{name:"UploadOutput",required:!0}},{key:"file",value:{name:"File",required:!0}},{key:"onLoadStart",value:{name:"signature",type:"function",raw:"(event: ProgressEvent<XMLHttpRequestEventTarget>) => void",signature:{arguments:[{type:{name:"ProgressEvent",elements:[{name:"XMLHttpRequestEventTarget"}],raw:"ProgressEvent<XMLHttpRequestEventTarget>"},name:"event"}],return:{name:"void"}},required:!0}},{key:"onProgress",value:{name:"signature",type:"function",raw:"(event: ProgressEvent<XMLHttpRequestEventTarget>) => void",signature:{arguments:[{type:{name:"ProgressEvent",elements:[{name:"XMLHttpRequestEventTarget"}],raw:"ProgressEvent<XMLHttpRequestEventTarget>"},name:"event"}],return:{name:"void"}},required:!0}}]}},name:"config"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"UploadFileError"}],raw:"Result<unknown, UploadFileError>"}],raw:"Future<Result<unknown, UploadFileError>>"}}},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: GenerateUploadError | UploadFileError) => void",signature:{arguments:[{type:{name:"union",raw:"GenerateUploadError | UploadFileError",elements:[{name:"GenerateUploadError"},{name:"UploadFileError"}]},name:"error"}],return:{name:"void"}}},description:""},getUploadConfig:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File) => UploadInput",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"UploadInput"}}},description:""},accept:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},maxSize:{required:!0,tsType:{name:"number"},description:""},icon:{required:!0,tsType:{name:"unknown"},description:""},formatAndSizeDescription:{required:!1,tsType:{name:"string"},description:""},onRemoveFile:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: SwanFile) => Future<Result<unknown, unknown>>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"statusInfo",value:{name:"union",raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}},name:"file"}],return:{name:"Future",elements:[{name:"Result",elements:[{name:"unknown"},{name:"unknown"}],raw:"Result<unknown, unknown>"}],raw:"Future<Result<unknown, unknown>>"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: SwanFile[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"statusInfo",value:{name:"union",raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| { status: "Refused"; reason: string }`,elements:[{name:"signature",type:"object",raw:'{ status: "Uploading"; progress: number }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploading"',required:!0}},{key:"progress",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Uploaded" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Uploaded"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Pending" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Pending"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Validated" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Validated"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "Refused"; reason: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"Refused"',required:!0}},{key:"reason",value:{name:"string",required:!0}}]}}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}}]}}],raw:"SwanFile[]"},name:"files"}],return:{name:"void"}}},description:""},canUpload:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showIds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{Y as F};
//# sourceMappingURL=FilesUploader-BC8gjU4j.js.map