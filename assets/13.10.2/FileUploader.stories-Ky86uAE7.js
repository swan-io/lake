import{j as r,P as e,k as a,s as i}from"./ScrollView-D62ibAIB.js";import{F as s}from"./FilesUploader-DfIkD1z-.js";import{S as n,a as m}from"./_StoriesComponents-BQs9RYw8.js";import"./iframe-BxiObLlT.js";import"./preload-helper-D1IIBeq1.js";import"./index-CXGbStiX.js";import"./FileInput-2fOq7mpm.js";import"./LakeButton-BfOCm3fg.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-IuiObHup.js";import"./index-7aTJbVC5.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-C0RQ2UEC.js";import"./useBoolean-IZ-pDfSv.js";import"./i18n-BAHhLTkf.js";import"./array-BfAlyugE.js";import"./LakeAlert-LRGyDMAD.js";import"./useResponsive-IDrYkp5e.js";import"./Tag-634c_G8z.js";import"./index-Bgg291J9.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-D0cCUpTw.js";import"./FocusTrap-DTttPBR6.js";import"./Suspendable-CExqBWGX.js";import"./ResponsiveContainer-Q_Qv0t1D.js";import"./TransitionView-C3qvf9TQ.js";import"./useBodyClassName-Dom7l_Fe.js";import"./Separator-Bt5trxzM.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-Ky86uAE7.js.map
