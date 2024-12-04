import{j as o}from"./jsx-runtime-BlAj40OV.js";import{s as p,H as r,G as n}from"./ScrollView-B3jDVNB7.js";import{F as d}from"./FilesUploader-CIjj9Idz.js";import{S as u,a as c}from"./_StoriesComponents-ChJ0o238.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./FileInput-CVRoHAOl.js";import"./LakeButton-BPWY4Y6Z.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-BbT4ktZO.js";import"./index-CNqu7dWz.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BtewF6jM.js";import"./useBoolean-DHW5baxv.js";import"./index-D3ylJrlI.js";import"./i18n-CCTqgBIF.js";import"./rifm-BZhH5af9.js";import"./utc-Bb9NEY8r.js";import"./array-BfAlyugE.js";import"./LakeAlert-ruKiK03A.js";import"./useResponsive-CzIqCC5v.js";import"./Tag-2Mu3YmB9.js";import"./index-CIH62Bl0.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-CpZ7kntQ.js";import"./FocusTrap-BCKynejr.js";import"./Suspendable-BC9ZmkKr.js";import"./ResponsiveContainer-CaV0twBN.js";import"./TransitionView-DNlJy86e.js";import"./useBodyClassName-DMoYUPTW.js";import"./Separator-CP_sv6U5.js";const g=p.create({storyPart:{maxWidth:600}}),U=["application/pdf","image/png","image/jpeg","image/svg+xml"],J={title:"Forms/FilesUploader",component:d},f=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>o.jsx(u,{title:"UploadArea with several documents",children:o.jsx(c,{title:"",style:g.storyPart,children:o.jsx(d,{maxSize:2e7,icon:"document-regular",accept:U,initialFiles:f,getUploadConfig:()=>{},generateUpload:()=>r.value(n.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>r.make(e=>{setTimeout(()=>e(n.Ok(void 0)),1e3)}),uploadFile:({onLoadStart:e,onProgress:a})=>r.make(l=>{e({loaded:0,total:1e3}),setTimeout(()=>a({loaded:100,total:1e3}),100),setTimeout(()=>a({loaded:600,total:1e3}),500),setTimeout(()=>{l(n.Ok(void 0))},1e3)}),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
          onLoadStart({
            loaded: 0,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>);
          setTimeout(() => onProgress({
            loaded: 100,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>), 100);
          setTimeout(() => onProgress({
            loaded: 600,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>), 500);
          setTimeout(() => {
            resolve(Result.Ok(undefined));
          }, 1_000);
        });
      }} formatAndSizeDescription={"20MB max"} />
      </StoryPart>
    </StoryBlock>;
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const K=["WithSeveralDocuments"];export{t as WithSeveralDocuments,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FileUploader.stories-Dm93QXxe.js.map
