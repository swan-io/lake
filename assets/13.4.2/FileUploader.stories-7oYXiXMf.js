import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-PWEsXmwm.js";import{F as s}from"./FilesUploader-CPvDcFlM.js";import{S as n,a as m}from"./_StoriesComponents-pHwL2tk3.js";import"./iframe-C9Md4k9u.js";import"./preload-helper-D1IIBeq1.js";import"./index-5XpJ4RS0.js";import"./FileInput-q2qat32F.js";import"./LakeButton-DUlpBRtj.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-Dp8ypfCl.js";import"./index-DecXJzfZ.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-C1UJOnxi.js";import"./useBoolean-D0X4TVw5.js";import"./i18n-990K5H5b.js";import"./rifm-Ch-Jo9H4.js";import"./array-BfAlyugE.js";import"./LakeAlert-919-yK4X.js";import"./useResponsive-D3IiYbd-.js";import"./Tag-CYCSVulZ.js";import"./index-Bg8SdWFT.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-V2AlOO9N.js";import"./FocusTrap-S74D87qn.js";import"./Suspendable-B8S9S8Nf.js";import"./ResponsiveContainer-RmZKG0Iw.js";import"./TransitionView-DttKTouQ.js";import"./useBodyClassName-B28oH1Ih.js";import"./Separator-lpCzYxmS.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-7oYXiXMf.js.map
