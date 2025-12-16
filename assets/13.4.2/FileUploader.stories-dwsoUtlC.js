import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-Dd8e3hgV.js";import{F as s}from"./FilesUploader-DWSv0QUN.js";import{S as n,a as m}from"./_StoriesComponents-V35U3egi.js";import"./iframe-CVhAw4Eb.js";import"./preload-helper-D1IIBeq1.js";import"./index-B-RRoYbu.js";import"./FileInput-B71ogCF4.js";import"./LakeButton-93Nq_sYv.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DDtX_2pd.js";import"./index-D2kUz46T.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-CaL49qNE.js";import"./useBoolean-V2odLItC.js";import"./i18n-DLqpy6r6.js";import"./rifm-CKU8UXXh.js";import"./array-BfAlyugE.js";import"./LakeAlert-D1OcswPw.js";import"./useResponsive-Dne1zZd4.js";import"./Tag-D8oCKcUK.js";import"./index-DxKMEyOr.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-CqGmV1aG.js";import"./FocusTrap-DxWE9I9s.js";import"./Suspendable-BJ5y0Fce.js";import"./ResponsiveContainer-_Nhrp4lC.js";import"./TransitionView-BwXx5V4B.js";import"./useBodyClassName-7YT9ji2D.js";import"./Separator-B-eJ4IYj.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-dwsoUtlC.js.map
