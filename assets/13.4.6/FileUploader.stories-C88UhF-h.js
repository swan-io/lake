import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-D4xdMMGg.js";import{F as s}from"./FilesUploader-DZzUUAKZ.js";import{S as n,a as m}from"./_StoriesComponents-VsY_yfP6.js";import"./iframe-BE29My_W.js";import"./preload-helper-D1IIBeq1.js";import"./index-VfIjEcOI.js";import"./FileInput-Dllgt8hJ.js";import"./LakeButton-DmI9IOE_.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-V8VR8oHC.js";import"./index-DbAAY4_G.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-D7czEqhx.js";import"./useBoolean-Bo_fcdDl.js";import"./i18n-DJKNaSZj.js";import"./rifm-D4PzLg8w.js";import"./array-BfAlyugE.js";import"./LakeAlert-BTCg-Jhv.js";import"./useResponsive-XLrYjW7E.js";import"./Tag-c55Vn6Ke.js";import"./index-BDx_6RU0.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-CQyxf9t9.js";import"./FocusTrap-oXAvodSQ.js";import"./Suspendable-BYJVLbzr.js";import"./ResponsiveContainer-CkJM9WQG.js";import"./TransitionView-CqRj5VZc.js";import"./useBodyClassName-Om-R0pb-.js";import"./Separator-BWjnmXpY.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-C88UhF-h.js.map
