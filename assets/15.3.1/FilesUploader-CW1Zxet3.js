import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-BRHNB_95.js";import{F as r,H as i,L as a,M as o,N as s,P as c,R as l,U as u,V as d,g as f,h as p,ht as m,i as h,it as g,kt as _,l as v,nt as y,o as b,ot as x,pt as S,r as C,s as ee,st as w,u as T,wt as E}from"./ScrollView-BPgEBwS5.js";import{n as D,t as O}from"./commonStyles-CaegYKO5.js";import{r as k,t as te}from"./Pressable-DWHNe5vu.js";import{n as ne,r as re,t as A}from"./LakeButton-B3VxGtn3.js";import{n as ie,t as ae}from"./Tag-I7FtQh_6.js";import{n as j,t as M}from"./LakeAlert-Ywi8luvt.js";import{a as N,i as P,s as F}from"./i18n-BTmySWJs.js";import{n as I,t as L}from"./clipboard-Bs0eOSsi.js";import{n as R,t as z}from"./LakeModal-CDxLA2vI.js";import{i as B,n as V,r as H,t as U}from"./FileInput-BYPbFZIy.js";var W,G,K=t((()=>{W=e(n()),G=e=>{let[t,n]=(0,W.useState)(e.initialFiles),r=(0,W.useCallback)(e=>{n(t=>t.some(t=>t.id===e.id)?t.map(t=>t.id===e.id?e:t):[...t,e])},[]);return{files:t,upload:(0,W.useCallback)((t,r)=>e.generateUpload(t).tapError(t=>{e.onError!=null&&e.onError(t)}).flatMapOk(({upload:t,id:i})=>(n(e=>[...e.filter(e=>e.id!==i),{id:i,statusInfo:{status:`Uploading`,progress:0},name:r.name}]),e.uploadFile({id:i,upload:t,file:r,onProgress:e=>{n(t=>t.map(t=>t.id===i?{...t,statusInfo:{status:`Uploading`,progress:e}}:t))}}).tapOk(()=>{n(e=>e.map(e=>e.id===i?{...e,statusInfo:{status:`Uploaded`}}:e))}).tapError(t=>{e.onError!=null&&e.onError(t),n(e=>e.filter(e=>e.id!==i))}))),[e]),remove:(0,W.useCallback)(e=>{n(t=>t.filter(t=>t.id!==e))},[]),add:r}}})),q,J,Y,X,oe=t((()=>{f(),i(),j(),re(),ee(),T(),k(),h(),ie(),D(),w(),L(),B(),r(),q=e(n()),m(),s(),N(),R(),J=u(),Y=_.create({base:{backgroundColor:y.accented,borderRadius:8,borderWidth:1,overflow:`hidden`},content:{height:56,paddingLeft:S[20],paddingRight:S[8]},progressBar:{flex:1,height:4,borderRadius:2,backgroundColor:x},progress:{height:4,transitionProperty:`width`,transitionDuration:`1000ms`,transitionTimingFunction:`ease-in-out`,borderRadius:2,backgroundColor:g.current[500]},id:{alignSelf:`flex-start`}}),X=({file:{id:e,statusInfo:t,name:n,url:r},showId:i=!1,onRemove:s})=>{let[u,f]=(0,q.useState)(!1),[m,h]=(0,q.useState)(!1),_=(0,q.useCallback)(()=>{s!=null&&(f(!0),s().tap(()=>{f(!1),h(!1)}))},[s]),[y,x]=(0,q.useState)(`copy`);return(0,J.jsxs)(p,{style:[Y.base,{borderColor:o(t.status).with(`Uploaded`,`Uploading`,()=>g.gray[100]).with(`Pending`,()=>g.shakespear[100]).with(`Validated`,()=>g.positive[500]).with(`Refused`,()=>g.negative[100]).exhaustive()}],children:[(0,J.jsx)(p,{alignItems:`center`,direction:`row`,style:Y.content,children:t.status===`Uploading`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(b,{numberOfLines:1,color:g.gray[700],children:F(`fileTile.uploading`)}),(0,J.jsx)(C,{width:20}),(0,J.jsx)(E,{role:`progressbar`,style:Y.progressBar,children:(0,J.jsx)(E,{style:[Y.progress,{width:`${t.progress*100}%`}]})})]}):(0,J.jsxs)(J.Fragment,{children:[t.status===`Validated`?(0,J.jsx)(d,{size:24,color:g.positive[500],name:`checkmark-circle-regular`}):(0,J.jsx)(ae,{icon:H(n),iconSize:20,color:o(t).with({status:c.union(`Uploaded`,`Pending`)},()=>`shakespear`).with({status:`Refused`},()=>`negative`).exhaustive()}),(0,J.jsx)(C,{width:16}),(0,J.jsxs)(p,{grow:1,children:[(0,J.jsx)(b,{numberOfLines:1,color:g.gray[700],style:O.fill,children:n}),i?(0,J.jsx)(E,{style:Y.id,children:(0,J.jsx)(v,{describedBy:`copy`,onHide:()=>x(`copy`),togglableOnFocus:!0,content:F(y===`copy`?`copyButton.copyTooltip`:`copyButton.copiedTooltip`),children:(0,J.jsx)(te,{onPress:t=>{t.stopPropagation(),t.preventDefault(),I(e),x(`copied`)},children:(0,J.jsxs)(p,{direction:`row`,alignItems:`center`,children:[(0,J.jsx)(b,{numberOfLines:1,variant:`smallRegular`,children:F(`fileTile.id`,{id:e})}),(0,J.jsx)(C,{width:4}),(0,J.jsx)(d,{size:14,name:`copy-regular`})]})})})}):null]}),(0,J.jsx)(C,{width:12}),l(r)&&(0,J.jsx)(A,{mode:`tertiary`,size:`small`,icon:`open-filled`,onPress:()=>{window.open(r,`_blank`)},ariaLabel:F(`common.open`)}),a(s)&&(0,J.jsx)(A,{mode:`tertiary`,size:`small`,icon:`delete-regular`,color:`negative`,onPress:()=>h(!0),ariaLabel:F(`common.remove`)}),(0,J.jsx)(z,{title:F(`fileTile.deleteModal.title`),icon:`subtract-circle-regular`,visible:m,onPressClose:()=>h(!1),color:`negative`,children:(0,J.jsx)(ne,{paddingBottom:0,children:(0,J.jsx)(A,{loading:u,grow:!0,color:`negative`,onPress:_,children:F(`fileTile.deleteModal.delete`)})})})]})}),o(t).with({status:`Pending`},()=>(0,J.jsx)(M,{anchored:!0,title:F(`fileTile.status.Pending`),variant:`info`})).with({status:`Refused`},({reason:e,reasonCode:t})=>(0,J.jsx)(M,{anchored:!0,variant:`error`,title:P(t),children:l(e)?(0,J.jsx)(b,{children:e}):null})).otherwise(()=>null)]})},X.__docgenInfo={description:``,methods:[],displayName:`FileTile`,props:{file:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`statusInfo`,value:{name:`union`,raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason?: string;
    reasonCode: string;
  }`,elements:[{name:`signature`,type:`object`,raw:`{ status: "Uploading"; progress: number }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploading"`,required:!0}},{key:`progress`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Uploaded" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploaded"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Pending" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Pending"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Validated" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Validated"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  status: "Refused";
  reason?: string;
  reasonCode: string;
}`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Refused"`,required:!0}},{key:`reason`,value:{name:`string`,required:!1}},{key:`reasonCode`,value:{name:`string`,required:!0}}]}}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!1}}]}},description:``},showId:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => Future<unknown>`,signature:{arguments:[],return:{name:`Future`,elements:[{name:`unknown`}],raw:`Future<unknown>`}}},description:``}}}})),Z,Q,$,se=t((()=>{f(),h(),Z=e(n()),K(),V(),oe(),Q=u(),$=({ref:e,maxSize:t,accept:n,icon:r,getUploadConfig:i,onRemoveFile:a,onChange:o,formatAndSizeDescription:s,canUpload:c=!0,showIds:l=!1,...u})=>{let{files:d,upload:f,remove:m,add:h}=G(u),g=(0,Z.useRef)(o);g.current=o;let _=(0,Z.useRef)(!0);return(0,Z.useImperativeHandle)(e,()=>({add:h})),(0,Z.useEffect)(()=>{if(_.current){_.current=!1;return}let e=g.current;e?.(d)},[d]),(0,Q.jsxs)(p,{children:[c?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(U,{layout:`horizontal`,onFiles:e=>{e.forEach(e=>{f(i(e),e)})},accept:n,icon:r,description:s,maxSize:t}),(0,Q.jsx)(C,{height:12})]}):null,d.map((e,t)=>(0,Q.jsxs)(Z.Fragment,{children:[t>0?(0,Q.jsx)(C,{height:12}):null,(0,Q.jsx)(X,{file:e,showId:l,onRemove:a!=null&&e.statusInfo.status===`Uploaded`?()=>a(e).tapOk(()=>{m(e.id)}):void 0})]},e.id))]})},$.__docgenInfo={description:``,methods:[],displayName:`FilesUploader`,props:{initialFiles:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`statusInfo`,value:{name:`union`,raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason?: string;
    reasonCode: string;
  }`,elements:[{name:`signature`,type:`object`,raw:`{ status: "Uploading"; progress: number }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploading"`,required:!0}},{key:`progress`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Uploaded" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploaded"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Pending" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Pending"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Validated" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Validated"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  status: "Refused";
  reason?: string;
  reasonCode: string;
}`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Refused"`,required:!0}},{key:`reason`,value:{name:`string`,required:!1}},{key:`reasonCode`,value:{name:`string`,required:!0}}]}}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!1}}]}}],raw:`SwanFile[]`},description:``},generateUpload:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(
  config: UploadInput,
) => Future<Result<UploadOutputWithId<UploadOutput>, GenerateUploadError>>`,signature:{arguments:[{type:{name:`UploadInput`},name:`config`}],return:{name:`Future`,elements:[{name:`Result`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; upload: UploadOutput }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`upload`,value:{name:`UploadOutput`,required:!0}}]}},{name:`GenerateUploadError`}],raw:`Result<UploadOutputWithId<UploadOutput>, GenerateUploadError>`}],raw:`Future<Result<UploadOutputWithId<UploadOutput>, GenerateUploadError>>`}}},description:``},uploadFile:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(config: UploadFileInput<UploadOutput>) => Future<Result<unknown, UploadFileError>>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  upload: UploadOutput;
  file: File;
  onProgress: (progress: number) => void;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`upload`,value:{name:`UploadOutput`,required:!0}},{key:`file`,value:{name:`File`,required:!0}},{key:`onProgress`,value:{name:`signature`,type:`function`,raw:`(progress: number) => void`,signature:{arguments:[{type:{name:`number`},name:`progress`}],return:{name:`void`}},required:!0}}]}},name:`config`}],return:{name:`Future`,elements:[{name:`Result`,elements:[{name:`unknown`},{name:`UploadFileError`}],raw:`Result<unknown, UploadFileError>`}],raw:`Future<Result<unknown, UploadFileError>>`}}},description:``},onError:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(error: GenerateUploadError | UploadFileError) => void`,signature:{arguments:[{type:{name:`union`,raw:`GenerateUploadError | UploadFileError`,elements:[{name:`GenerateUploadError`},{name:`UploadFileError`}]},name:`error`}],return:{name:`void`}}},description:``},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`signature`,type:`object`,raw:`{
  add: (file: SwanFile) => void;
}`,signature:{properties:[{key:`add`,value:{name:`signature`,type:`function`,raw:`(file: SwanFile) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`statusInfo`,value:{name:`union`,raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason?: string;
    reasonCode: string;
  }`,elements:[{name:`signature`,type:`object`,raw:`{ status: "Uploading"; progress: number }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploading"`,required:!0}},{key:`progress`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Uploaded" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploaded"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Pending" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Pending"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Validated" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Validated"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  status: "Refused";
  reason?: string;
  reasonCode: string;
}`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Refused"`,required:!0}},{key:`reason`,value:{name:`string`,required:!1}},{key:`reasonCode`,value:{name:`string`,required:!0}}]}}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!1}}]}},name:`file`}],return:{name:`void`}},required:!0}}]}}],raw:`Ref<FilesUploaderRef>`},description:``},getUploadConfig:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(file: File) => UploadInput`,signature:{arguments:[{type:{name:`File`},name:`file`}],return:{name:`UploadInput`}}},description:``},accept:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},maxSize:{required:!0,tsType:{name:`number`},description:``},icon:{required:!0,tsType:{name:`unknown`},description:``},formatAndSizeDescription:{required:!1,tsType:{name:`string`},description:``},onRemoveFile:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(file: SwanFile) => Future<Result<unknown, unknown>>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`statusInfo`,value:{name:`union`,raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason?: string;
    reasonCode: string;
  }`,elements:[{name:`signature`,type:`object`,raw:`{ status: "Uploading"; progress: number }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploading"`,required:!0}},{key:`progress`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Uploaded" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploaded"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Pending" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Pending"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Validated" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Validated"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  status: "Refused";
  reason?: string;
  reasonCode: string;
}`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Refused"`,required:!0}},{key:`reason`,value:{name:`string`,required:!1}},{key:`reasonCode`,value:{name:`string`,required:!0}}]}}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!1}}]}},name:`file`}],return:{name:`Future`,elements:[{name:`Result`,elements:[{name:`unknown`},{name:`unknown`}],raw:`Result<unknown, unknown>`}],raw:`Future<Result<unknown, unknown>>`}}},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: SwanFile[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`statusInfo`,value:{name:`union`,raw:`| { status: "Uploading"; progress: number }
| { status: "Uploaded" }
| { status: "Pending" }
| { status: "Validated" }
| {
    status: "Refused";
    reason?: string;
    reasonCode: string;
  }`,elements:[{name:`signature`,type:`object`,raw:`{ status: "Uploading"; progress: number }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploading"`,required:!0}},{key:`progress`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Uploaded" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Uploaded"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Pending" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Pending"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ status: "Validated" }`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Validated"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  status: "Refused";
  reason?: string;
  reasonCode: string;
}`,signature:{properties:[{key:`status`,value:{name:`literal`,value:`"Refused"`,required:!0}},{key:`reason`,value:{name:`string`,required:!1}},{key:`reasonCode`,value:{name:`string`,required:!0}}]}}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!1}}]}}],raw:`SwanFile[]`},name:`files`}],return:{name:`void`}}},description:``},canUpload:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showIds:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}}));export{se as n,$ as t};
//# sourceMappingURL=FilesUploader-CW1Zxet3.js.map