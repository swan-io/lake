import{j as r,s as i,aa as o,ab as a}from"./ScrollView-Dr_bxuwc.js";import{F as s}from"./FilesUploader-BTh0sagk.js";import{S as n,a as m}from"./_StoriesComponents-DQ74fu2-.js";import"./iframe-CcH7nP7F.js";import"./preload-helper-D1IIBeq1.js";import"./index-mJnZFKHq.js";import"./FileInput-D-lioJyB.js";import"./LakeButton-DnO6nKzi.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-B4Ie8lmq.js";import"./index-BzOUZSHq.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-S82ikmw4.js";import"./useBoolean-CR27zqMf.js";import"./i18n-BkjXgv_r.js";import"./rifm-CAIvsBDt.js";import"./array-BfAlyugE.js";import"./LakeAlert-CtqGbDLA.js";import"./useResponsive-DGW8MP7v.js";import"./Tag-D90oM1zE.js";import"./index-4bh1Pt2r.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-C-PI8Ho1.js";import"./FocusTrap-CaQ96cQp.js";import"./Suspendable-Br1b9DZy.js";import"./ResponsiveContainer-CvaeHItE.js";import"./TransitionView-CUJYHXYW.js";import"./useBodyClassName-C7tehfmQ.js";import"./Separator-VtGA5a8a.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-CNZAORCh.js.map
