import{s as u,j as o,N as r,v as n}from"./Space-BWfEUChJ.js";import{F as d}from"./FilesUploader-FBPLPUuS.js";import{S as p,a as c}from"./_StoriesComponents-DYQz1sEa.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./FileInput-D6CwsBwp.js";import"./LakeButton-Dc18w6LU.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-BWpnb3-9.js";import"./index-mKv4xz1S.js";import"./LakeHeading-CsHk_0za.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./i18n-D1UsVC7v.js";import"./rifm-Czkz5_gl.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./LakeAlert-CYY2BVkB.js";import"./Tag-au5iXAuk.js";import"./index-BzEbCcHK.js";import"./index-DGaDRGzj.js";const g=u.create({storyPart:{maxWidth:600}}),U=["application/pdf","image/png","image/jpeg","image/svg+xml"],W={title:"Forms/FilesUploader",component:d},v=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>o.jsx(p,{title:"UploadArea with several documents",children:o.jsx(c,{title:"",style:g.storyPart,children:o.jsx(d,{maxSize:2e7,icon:"document-regular",accept:U,initialFiles:v,getUploadConfig:()=>{},generateUpload:()=>r.value(n.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>r.make(e=>{setTimeout(()=>e(n.Ok(void 0)),1e3)}),uploadFile:({onLoadStart:e,onProgress:a})=>r.make(l=>{e({loaded:0,total:1e3}),setTimeout(()=>a({loaded:100,total:1e3}),100),setTimeout(()=>a({loaded:600,total:1e3}),500),setTimeout(()=>{l(n.Ok(void 0))},1e3)}),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <StoryBlock title="UploadArea with several documents">
      <StoryPart title="" style={styles.storyPart}>
        <FilesUploader maxSize={20_000_000} icon="document-regular" accept={ACCEPTED_FORMATS} initialFiles={documents} getUploadConfig={() => {}} generateUpload={() => Future.value(Result.Ok({
        id: crypto.randomUUID(),
        upload: {}
      }))} onRemoveFile={() => Future.make<Result<unknown, unknown>>(resolve => {
        setTimeout(() => resolve(Result.Ok(undefined)), 1_000);
      })} uploadFile={({
        onLoadStart,
        onProgress
      }) => {
        return Future.make<Result<unknown, unknown>>(resolve => {
          onLoadStart(({
            loaded: 0,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>));
          setTimeout(() => onProgress(({
            loaded: 100,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>)), 100);
          setTimeout(() => onProgress(({
            loaded: 600,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>)), 500);
          setTimeout(() => {
            resolve(Result.Ok(undefined));
          }, 1_000);
        });
      }} formatAndSizeDescription={"20MB max"} />
      </StoryPart>
    </StoryBlock>;
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const q=["WithSeveralDocuments"];export{t as WithSeveralDocuments,q as __namedExportsOrder,W as default};
//# sourceMappingURL=FileUploader.stories-BUYcydrO.js.map
