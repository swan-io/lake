import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-C-fx5i2W.js";import{F as s}from"./FilesUploader-BexVxbFK.js";import{S as n,a as m}from"./_StoriesComponents-zKRa1nI-.js";import"./iframe-_8SPXaVT.js";import"./preload-helper-D1IIBeq1.js";import"./index-Db_9hNjt.js";import"./FileInput-B7aUcmjq.js";import"./LakeButton-Dak7dZNH.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-C6oI5leC.js";import"./index-CVnz9_qy.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-Bi0eokQP.js";import"./useBoolean-50MltoFh.js";import"./i18n-C8BHdQXk.js";import"./rifm-CNG3QBng.js";import"./array-BfAlyugE.js";import"./LakeAlert-DrQqpECT.js";import"./useResponsive-L_2Je381.js";import"./Tag-qFndcKjx.js";import"./index-CVtz49Dl.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-hq4J5YId.js";import"./FocusTrap-DazPFO_H.js";import"./Suspendable-Dq89gX98.js";import"./ResponsiveContainer-ErtOSNnZ.js";import"./TransitionView-BZmk-dfe.js";import"./useBodyClassName-XwgPgCB7.js";import"./Separator-BE3CgiOq.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-nXtLXP1T.js.map
