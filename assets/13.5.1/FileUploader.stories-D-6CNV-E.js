import{j as r,P as o,k as a,s}from"./ScrollView-BgLPe5gl.js";import{F as i}from"./FilesUploader-BcDn8Qdn.js";import{S as n,a as m}from"./_StoriesComponents-BcNDBbeg.js";import"./iframe-ngjqEMqC.js";import"./preload-helper-D1IIBeq1.js";import"./index-D9fjzRNm.js";import"./FileInput-D9bUU89p.js";import"./LakeButton-X8-KBYv6.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BDDPqJMq.js";import"./index-C_J9C14u.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-D4w0v-Fm.js";import"./useBoolean-bY9Ki4uE.js";import"./i18n-H1CddC6P.js";import"./rifm-MUJawLsm.js";import"./array-BfAlyugE.js";import"./LakeAlert-CCw4NbDe.js";import"./useResponsive-C_gSHRwq.js";import"./Tag-BeVid17A.js";import"./index-BgdALbfX.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-D8ljjvcF.js";import"./FocusTrap-CyCE4a0N.js";import"./Suspendable-COvRMUvY.js";import"./ResponsiveContainer-HKSck2H8.js";import"./TransitionView-D-VivBTI.js";import"./useBodyClassName-D6r0C4YT.js";import"./Separator-B7i4NH44.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-D-6CNV-E.js.map
