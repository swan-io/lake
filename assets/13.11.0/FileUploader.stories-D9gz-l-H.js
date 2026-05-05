import{j as r,P as e,k as a,s as i}from"./ScrollView-CWYrxhKF.js";import{F as s}from"./FilesUploader-D_36xZC8.js";import{S as n,a as m}from"./_StoriesComponents-BAyHtIsQ.js";import"./iframe-BUbFFmyd.js";import"./preload-helper-D1IIBeq1.js";import"./index-DjkQ_e3e.js";import"./FileInput-iZS1q59d.js";import"./LakeButton-eX4I6PGg.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-ZZspeDLx.js";import"./index-DY4FZFMp.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-D6rJ9cQk.js";import"./useBoolean-D1qtuYsc.js";import"./i18n-Cj4cEqVq.js";import"./array-BfAlyugE.js";import"./LakeAlert-v49KSxGD.js";import"./useResponsive-DxmBvMXc.js";import"./Tag-4C0SgLmr.js";import"./index-_qL_jy9O.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DgSGtvGk.js";import"./FocusTrap-DEzWi3mf.js";import"./Suspendable-cRkLJxLD.js";import"./ResponsiveContainer-Cl7c1fvc.js";import"./TransitionView-CIwdulAF.js";import"./useBodyClassName-DmP-BP4O.js";import"./Separator-E3tiNE9g.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-D9gz-l-H.js.map
