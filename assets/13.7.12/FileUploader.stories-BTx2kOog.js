import{j as r,P as o,k as a,s}from"./ScrollView-B0fJ4LaQ.js";import{F as i}from"./FilesUploader-qC6BbZ1t.js";import{S as n,a as m}from"./_StoriesComponents-Bsd-wOio.js";import"./iframe-C7ug3Yq-.js";import"./preload-helper-D1IIBeq1.js";import"./index-DTbDbjrf.js";import"./FileInput-C3m_es-c.js";import"./LakeButton-BcjOxc7j.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-B5VRENPz.js";import"./index-BaWP9F6p.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-Bci4wfIz.js";import"./useBoolean-BF97iN1K.js";import"./i18n-C5_5dE0O.js";import"./rifm-CGGdB9H8.js";import"./array-BfAlyugE.js";import"./LakeAlert-C242j6v2.js";import"./useResponsive-Djap7vJA.js";import"./Tag-CerXBwsa.js";import"./index-BJN2dsco.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-TXEXf3dL.js";import"./FocusTrap-Cp_awFw4.js";import"./Suspendable-D8C7Hxug.js";import"./ResponsiveContainer-RCFME9Vv.js";import"./TransitionView-d7KTbAek.js";import"./useBodyClassName-CdsK3Yfb.js";import"./Separator-yZlw1XxR.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-BTx2kOog.js.map
