import{j as r,s as i,aa as o,ab as a}from"./ScrollView-BLWx9OTT.js";import{F as s}from"./FilesUploader-BgszKdbb.js";import{S as n,a as m}from"./_StoriesComponents-D0c3UF1q.js";import"./iframe-CHXLMrF-.js";import"./preload-helper-D1IIBeq1.js";import"./index-CsLNxXk5.js";import"./FileInput-CWPdPO48.js";import"./LakeButton-DyQpjOgq.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-rV0rAhlm.js";import"./index-Cq6KeqCz.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-pIpZrF2S.js";import"./useBoolean-e6kygSaS.js";import"./i18n-CGlkxv9h.js";import"./rifm-DMaKDvg0.js";import"./array-BfAlyugE.js";import"./LakeAlert-DvLH2ZIu.js";import"./useResponsive-C7BtlUgl.js";import"./Tag-Br0a2cXP.js";import"./index-DGuW8XLd.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DrTOx9gN.js";import"./FocusTrap-BZUqmO82.js";import"./Suspendable-52LXwzOz.js";import"./ResponsiveContainer-D4LF0H1Y.js";import"./TransitionView-VCRDOsQI.js";import"./useBodyClassName-tS7puKGv.js";import"./Separator-CtWIH5PB.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="UploadArea with several documents">
      <StoryPart title="" style={styles.storyPart}>
        <FilesUploader maxSize={20_000_000} icon="document-regular" accept={ACCEPTED_FORMATS} initialFiles={documents} getUploadConfig={() => {}} generateUpload={() => Future.value(Result.Ok({
        id: crypto.randomUUID(),
        upload: {}
      }))} onRemoveFile={() => Future.make<Result<unknown, unknown>>(resolve => {
        setTimeout(() => resolve(Result.Ok(undefined)), 1_000);
      })} uploadFile={({
        onProgress
      }) => {
        return Future.wait(1).tap(() => onProgress(0.8)).flatMap(() => Future.wait(1200)).map(Result.Ok);
      }} formatAndSizeDescription={"20MB max"} />
      </StoryPart>
    </StoryBlock>;
}`,...t.parameters?.docs?.source}}};const Q=["WithSeveralDocuments"];export{t as WithSeveralDocuments,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=FileUploader.stories-BaP1Jzxi.js.map
