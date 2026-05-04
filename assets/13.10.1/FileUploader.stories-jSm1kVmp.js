import{j as r,P as o,k as a,s}from"./ScrollView-B_kzmstI.js";import{F as i}from"./FilesUploader-DFhOoZA2.js";import{S as n,a as m}from"./_StoriesComponents-DsIs_6cg.js";import"./iframe-B3r-NWKe.js";import"./preload-helper-D1IIBeq1.js";import"./index-DxBrmxAR.js";import"./FileInput-uXA63-Ly.js";import"./LakeButton-BadaaxTZ.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-gFrFR2xW.js";import"./index-WKfvk9_u.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DZK67Bq-.js";import"./useBoolean-C-85UFqU.js";import"./i18n-DpM30V0a.js";import"./rifm-DacaHC_H.js";import"./array-BfAlyugE.js";import"./LakeAlert-C9Gt7xA1.js";import"./useResponsive-BpQW5kDe.js";import"./Tag-BC9T25h1.js";import"./index-CBsLD2t-.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-nOJL4PVv.js";import"./FocusTrap-TWTp47qL.js";import"./Suspendable-D-8F0SwY.js";import"./ResponsiveContainer-jvrDHGao.js";import"./TransitionView-CtnEOdbi.js";import"./useBodyClassName-CC7lXYNq.js";import"./Separator-CbOUYcQV.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-jSm1kVmp.js.map
