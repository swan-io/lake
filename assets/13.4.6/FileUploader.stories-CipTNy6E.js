import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-Cb1eQnRP.js";import{F as s}from"./FilesUploader-CacyDtS2.js";import{S as n,a as m}from"./_StoriesComponents-B9uT2tf6.js";import"./iframe-CI-BCbrg.js";import"./preload-helper-D1IIBeq1.js";import"./index-Df-1hB2w.js";import"./FileInput-Bh95uBaE.js";import"./LakeButton-tKhToeDs.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DwBi5lNV.js";import"./index-C6x_sVQq.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DOm_6sTM.js";import"./useBoolean-l7E6TXQF.js";import"./i18n-Dy_4xuUB.js";import"./rifm-B8nxHFug.js";import"./array-BfAlyugE.js";import"./LakeAlert-f2uBZhCa.js";import"./useResponsive-C8LIClgF.js";import"./Tag-o7uD1EEy.js";import"./index-CuiqzAj6.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-8d14UfBq.js";import"./FocusTrap-splWZtCy.js";import"./Suspendable-DS5_xXug.js";import"./ResponsiveContainer-C5wcyjuJ.js";import"./TransitionView-DLmqVExL.js";import"./useBodyClassName-CZcDEnZ4.js";import"./Separator-DKFoXkv6.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-CipTNy6E.js.map
