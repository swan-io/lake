import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-DnY9Nj2h.js";import{F as s}from"./FilesUploader-kVuBTLLf.js";import{S as n,a as m}from"./_StoriesComponents-D_HHKfJM.js";import"./iframe-DpLVTg5h.js";import"./preload-helper-D1IIBeq1.js";import"./index-Dymof6i-.js";import"./FileInput-BQ1n-fxv.js";import"./LakeButton-tJpfL7QZ.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DmYrMd4Y.js";import"./index-DOl1beJ0.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DLR28bwM.js";import"./useBoolean-HKyqnwux.js";import"./i18n-huCwe5qy.js";import"./rifm-Cza9euTQ.js";import"./array-BfAlyugE.js";import"./LakeAlert-BmtjEsqd.js";import"./useResponsive-CeAFNPI4.js";import"./Tag-DcnI0d1q.js";import"./index-CmSKwmRD.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-yTVhoTC_.js";import"./FocusTrap-DXeu1hks.js";import"./Suspendable-Cr__5EQm.js";import"./ResponsiveContainer-CErBHzzY.js";import"./TransitionView-CoED-l-s.js";import"./useBodyClassName-vCsc9cZG.js";import"./Separator-v_NzffoM.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-DSBPkBou.js.map
