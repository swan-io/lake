import{j as r,P as o,k as a,s}from"./ScrollView-CiN_b_nh.js";import{F as i}from"./FilesUploader-B79ZN5tJ.js";import{S as n,a as m}from"./_StoriesComponents-B8jc_tsQ.js";import"./iframe-Ba6wAGIo.js";import"./preload-helper-D1IIBeq1.js";import"./index-BQw_B8t5.js";import"./FileInput-CSttvTX7.js";import"./LakeButton-8-LSCsTy.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-B2E80Jww.js";import"./index-BfD3niIO.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-CDMsmbLw.js";import"./useBoolean-CA3Mu1qv.js";import"./i18n-DymC91qI.js";import"./rifm-BWfZQOiu.js";import"./array-BfAlyugE.js";import"./LakeAlert-jYVxYN88.js";import"./useResponsive-C3xVUhwa.js";import"./Tag-DRJzNbMJ.js";import"./index-CdBXNUb7.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-BFr9lgaP.js";import"./FocusTrap-BW2o1HQh.js";import"./Suspendable-CJBdRuQY.js";import"./ResponsiveContainer-CZRRrJaX.js";import"./TransitionView-BAKqVxwZ.js";import"./useBodyClassName-B2YOnrHZ.js";import"./Separator-B-QfdRVf.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-B8y3YOBN.js.map
