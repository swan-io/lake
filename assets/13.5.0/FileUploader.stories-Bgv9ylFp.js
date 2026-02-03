import{j as r,P as o,k as a,s}from"./ScrollView-C2RIqbh-.js";import{F as i}from"./FilesUploader-BfDMr8jz.js";import{S as n,a as m}from"./_StoriesComponents-XqONobn7.js";import"./iframe-cHe4xVEJ.js";import"./preload-helper-D1IIBeq1.js";import"./index-Qf4IeO9y.js";import"./FileInput-CfRa0huT.js";import"./LakeButton-vOSY7rJj.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DLKa6dnp.js";import"./index-BBfoRBQr.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BcPQUmcB.js";import"./useBoolean-B6MbXymI.js";import"./i18n-nlaoW3Gj.js";import"./rifm-C_Y0TxTT.js";import"./array-BfAlyugE.js";import"./LakeAlert-B6r-RVwy.js";import"./useResponsive-BJzo3YH5.js";import"./Tag-BkwNkB_Z.js";import"./index-BdUo2HU0.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-BEn7FSlU.js";import"./FocusTrap-BX9jh71o.js";import"./Suspendable-NUjecDh3.js";import"./ResponsiveContainer-CTvI18Q1.js";import"./TransitionView-DTOjrUlf.js";import"./useBodyClassName-CGmt2227.js";import"./Separator-DuyehIrG.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-Bgv9ylFp.js.map
