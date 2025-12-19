import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-wliSVDPu.js";import{F as s}from"./FilesUploader-DJ99FgoW.js";import{S as n,a as m}from"./_StoriesComponents-De6KsuM6.js";import"./iframe-BBFvpc6J.js";import"./preload-helper-D1IIBeq1.js";import"./index-u-7PSVW7.js";import"./FileInput-Dy7CS14M.js";import"./LakeButton-CZpGqywg.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BaR7gP1y.js";import"./index-BkwY1wyW.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-CxsMaF1G.js";import"./useBoolean-B3x6sLJq.js";import"./i18n-BlGogmmI.js";import"./rifm-BmGlveXb.js";import"./array-BfAlyugE.js";import"./LakeAlert-yv8iHm6b.js";import"./useResponsive-D0ZCMrpz.js";import"./Tag-C714VIZm.js";import"./index-BJUUlijL.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-B1NZqego.js";import"./FocusTrap-C6fFb5xj.js";import"./Suspendable-LcZTad5p.js";import"./ResponsiveContainer-DMUMRWuh.js";import"./TransitionView-CFFojlsL.js";import"./useBodyClassName-MBjh_9ba.js";import"./Separator-S6lmTEoM.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-Dr42F8cA.js.map
