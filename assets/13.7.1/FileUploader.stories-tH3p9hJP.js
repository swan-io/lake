import{j as r,P as o,k as a,s}from"./ScrollView-DwAufhIR.js";import{F as i}from"./FilesUploader-A6DAqg4V.js";import{S as n,a as m}from"./_StoriesComponents-CmWVGeLy.js";import"./iframe-x6VIqQ9n.js";import"./preload-helper-D1IIBeq1.js";import"./index-BwI6A7ed.js";import"./FileInput-BK8-menV.js";import"./LakeButton-Dw8cjwwN.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-C7d0l50P.js";import"./index-Bv1oazfD.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-RIXRJtJf.js";import"./useBoolean-BirYDkLO.js";import"./i18n-CFH_8zx9.js";import"./rifm-DCee9TgB.js";import"./array-BfAlyugE.js";import"./LakeAlert-DlZcIBXl.js";import"./useResponsive-BPG3zJQY.js";import"./Tag-1s3hWoYB.js";import"./index-BAKhGukv.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-u1_YsOYa.js";import"./FocusTrap-Oh9eB5b7.js";import"./Suspendable-DxAUHW1T.js";import"./ResponsiveContainer-BKf2gPeo.js";import"./TransitionView-BAHntSno.js";import"./useBodyClassName-BIUYmrxH.js";import"./Separator-DOVd7T6v.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-tH3p9hJP.js.map
