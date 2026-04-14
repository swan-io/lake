import{j as r,P as o,k as a,s}from"./ScrollView-Cb3FzIY4.js";import{F as i}from"./FilesUploader-C1PC4Hcd.js";import{S as n,a as m}from"./_StoriesComponents-y0aJNuCM.js";import"./iframe-f7DV6EdO.js";import"./preload-helper-D1IIBeq1.js";import"./index-lfHgBQzh.js";import"./FileInput-fUlyrWI2.js";import"./LakeButton-4x0Gwt1q.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BF_8ftX2.js";import"./index-CxbuG1Ml.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DJQp2Zb1.js";import"./useBoolean-CMR9xJRy.js";import"./i18n-B3Bw2ant.js";import"./rifm-BseZDUmW.js";import"./array-BfAlyugE.js";import"./LakeAlert-DyDHC0XF.js";import"./useResponsive-bPLL-moi.js";import"./Tag-BkmaiRTB.js";import"./index-CplNnxVW.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-noX1UXRA.js";import"./FocusTrap-EdrjPBdW.js";import"./Suspendable-alLLsRyF.js";import"./ResponsiveContainer-DXjJscft.js";import"./TransitionView-WW2N4q6u.js";import"./useBodyClassName-ugfRTf_D.js";import"./Separator-D8CvsOV1.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-i0uYxmd9.js.map
