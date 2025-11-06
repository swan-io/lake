import{j as r,s as i,aa as o,ab as a}from"./ScrollView-QVMNzpGz.js";import{F as s}from"./FilesUploader-ftRMYpXs.js";import{S as n,a as m}from"./_StoriesComponents-BnA3HjeD.js";import"./iframe-BNivJNQQ.js";import"./preload-helper-D1IIBeq1.js";import"./index-Bn-lSEWq.js";import"./FileInput-eVkAkRKR.js";import"./LakeButton-DLISmzZM.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BYy8PL0j.js";import"./index-BbK1RUvt.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-X_9Jh05n.js";import"./useBoolean-DMsGTa9X.js";import"./i18n-D2kwUNGB.js";import"./rifm-DRhEGTzE.js";import"./array-BfAlyugE.js";import"./LakeAlert-DyBvhR7z.js";import"./useResponsive-BIua4cws.js";import"./Tag-DZgCSwp9.js";import"./index-CfV73qWe.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-876YdB3m.js";import"./FocusTrap-DuG3XQkL.js";import"./Suspendable-CAaB37ga.js";import"./ResponsiveContainer-Cnq8QacM.js";import"./TransitionView-CaUaB7Pu.js";import"./useBodyClassName-hagpN1HU.js";import"./Separator-DQvT4H8s.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-YnefgS5o.js.map
