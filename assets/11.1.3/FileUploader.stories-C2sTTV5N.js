import{j as o}from"./jsx-runtime-BlAj40OV.js";import{s as p,H as r,G as n}from"./ScrollView-DAMcnhPN.js";import{F as d}from"./FilesUploader-BrW1YXfx.js";import{S as u,a as c}from"./_StoriesComponents-Bs-HXw4X.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./FileInput-hZMv3iP2.js";import"./LakeButton-DJuoDYYV.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-8N6ahZPW.js";import"./index-CJghV6hQ.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-XXdKUg9r.js";import"./useBoolean-DHW5baxv.js";import"./index-D3ylJrlI.js";import"./i18n-txGMRmwr.js";import"./rifm-D9VipfZA.js";import"./utc-Bb9NEY8r.js";import"./array-BfAlyugE.js";import"./LakeAlert-DxIzIo9J.js";import"./useResponsive-CzIqCC5v.js";import"./Tag-BsNIDiwk.js";import"./index-Cp2lnEJT.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DZjpSgZ_.js";import"./FocusTrap-HMOsJfWh.js";import"./Suspendable-Bl-Qq_g-.js";import"./ResponsiveContainer-BcpmGxdZ.js";import"./TransitionView-_995VKea.js";import"./useBodyClassName-DMoYUPTW.js";import"./Separator-qitoqTAJ.js";const g=p.create({storyPart:{maxWidth:600}}),U=["application/pdf","image/png","image/jpeg","image/svg+xml"],J={title:"Forms/FilesUploader",component:d},f=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>o.jsx(u,{title:"UploadArea with several documents",children:o.jsx(c,{title:"",style:g.storyPart,children:o.jsx(d,{maxSize:2e7,icon:"document-regular",accept:U,initialFiles:f,getUploadConfig:()=>{},generateUpload:()=>r.value(n.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>r.make(e=>{setTimeout(()=>e(n.Ok(void 0)),1e3)}),uploadFile:({onLoadStart:e,onProgress:a})=>r.make(l=>{e({loaded:0,total:1e3}),setTimeout(()=>a({loaded:100,total:1e3}),100),setTimeout(()=>a({loaded:600,total:1e3}),500),setTimeout(()=>{l(n.Ok(void 0))},1e3)}),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-C2sTTV5N.js.map
