import{j as r,aa as o,ab as a,s as i}from"./ScrollView-BYzbEEWX.js";import{F as s}from"./FilesUploader-C0c9hvD-.js";import{S as n,a as m}from"./_StoriesComponents-Bsa3WPof.js";import"./iframe-BKXUNtls.js";import"./preload-helper-D1IIBeq1.js";import"./index-85_8WeyO.js";import"./FileInput-BKiRAKz4.js";import"./LakeButton-AYTR8Wpp.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DhB6vjWm.js";import"./index-B0WMlLLU.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-Lk07GFOC.js";import"./useBoolean-CShUM8M_.js";import"./i18n-ChaI2eM7.js";import"./rifm-BZ0rPcYh.js";import"./array-BfAlyugE.js";import"./LakeAlert-CbIOXGYD.js";import"./useResponsive-CHcZsmZy.js";import"./Tag-B4mBaGht.js";import"./index-BVTjShKK.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DoEXsKzu.js";import"./FocusTrap-Hh5XtjW9.js";import"./Suspendable-BRoskwBh.js";import"./ResponsiveContainer-BGLmKlry.js";import"./TransitionView-3p_KmpUR.js";import"./useBodyClassName-BVGRdSXE.js";import"./Separator-D-AI36PG.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const Q=["WithSeveralDocuments"];export{t as WithSeveralDocuments,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=FileUploader.stories-_YWvlPRo.js.map
