import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-BcOggOcg.js";import{F as s}from"./FilesUploader-D8Mm-9KN.js";import{S as n,a as m}from"./_StoriesComponents-CvsesdRW.js";import"./iframe-DbypTFRA.js";import"./preload-helper-D1IIBeq1.js";import"./index-XZHm71zw.js";import"./FileInput-BhEShawY.js";import"./LakeButton-C3kiRsFW.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-C6_68U_C.js";import"./index-CzJQZt3q.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DQ6rx9Ji.js";import"./useBoolean-Df4dAmM7.js";import"./i18n-BZAyzxrM.js";import"./rifm-DqODbhLQ.js";import"./array-BfAlyugE.js";import"./LakeAlert-DWgEMdl0.js";import"./useResponsive-Cmb87_gN.js";import"./Tag-Cv5EC9zJ.js";import"./index-DBXvbmLa.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-CxWg8Qv_.js";import"./FocusTrap-C0F2G1Bx.js";import"./Suspendable-CPr13ciM.js";import"./ResponsiveContainer-vbRJyesX.js";import"./TransitionView-BYvHNHJ8.js";import"./useBodyClassName-6osH5ltl.js";import"./Separator-BbimMH0M.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const V=["WithSeveralDocuments"];export{t as WithSeveralDocuments,V as __namedExportsOrder,Q as default};
//# sourceMappingURL=FileUploader.stories-Dzai2-P9.js.map
