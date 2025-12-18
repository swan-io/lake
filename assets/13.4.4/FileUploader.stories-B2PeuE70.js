import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-DKR3Xwsg.js";import{F as s}from"./FilesUploader-A7agt7uK.js";import{S as n,a as m}from"./_StoriesComponents-CJPCykNI.js";import"./iframe-B9a-F55R.js";import"./preload-helper-D1IIBeq1.js";import"./index-olIw8SgZ.js";import"./FileInput-DAb5cvGq.js";import"./LakeButton-CSkGFOkt.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-GxpFgwY-.js";import"./index-CyZKBfb-.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BnH0019-.js";import"./useBoolean-Dn8UnVc0.js";import"./i18n-yQ4tO9Ut.js";import"./rifm-B7cHksUk.js";import"./array-BfAlyugE.js";import"./LakeAlert-Bbz5j42h.js";import"./useResponsive-Cfy1MwM5.js";import"./Tag-C8fhfZP4.js";import"./index-Bu0Vx17P.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-B347svUN.js";import"./FocusTrap-Cc4PzOPz.js";import"./Suspendable-Byd6uOky.js";import"./ResponsiveContainer-DpEjpSZk.js";import"./TransitionView-C_jJhwc7.js";import"./useBodyClassName-wgw_08IW.js";import"./Separator-CAPqARCi.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-B2PeuE70.js.map
