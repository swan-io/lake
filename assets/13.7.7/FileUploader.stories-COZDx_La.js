import{j as r,P as o,k as a,s}from"./ScrollView-DIw_0iRJ.js";import{F as i}from"./FilesUploader-jbykFhi5.js";import{S as n,a as m}from"./_StoriesComponents-CVQOEBl6.js";import"./iframe-B_AlqYO8.js";import"./preload-helper-D1IIBeq1.js";import"./index-iNNvGDTY.js";import"./FileInput-DbPbS9Uw.js";import"./LakeButton-Zuv5BdHG.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-_DrMD09-.js";import"./index-BLfBrjiD.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-8U9PPbGn.js";import"./useBoolean-nLH-qAe3.js";import"./i18n-5nhnZhA7.js";import"./rifm-RoPaV_KN.js";import"./array-BfAlyugE.js";import"./LakeAlert-D52uC21c.js";import"./useResponsive-zt-9bzsq.js";import"./Tag-CDM9GKlu.js";import"./index-GEf-JOS7.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-lju6Qa4I.js";import"./FocusTrap-Bp9T-NXm.js";import"./Suspendable-BZuEZ8Gm.js";import"./ResponsiveContainer-iJzJApUQ.js";import"./TransitionView-rZ0Q9yx6.js";import"./useBodyClassName-CfQb2wGy.js";import"./Separator-BnoY4SzK.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-COZDx_La.js.map
