import{j as r,P as e,k as a,s}from"./ScrollView-MekbySN5.js";import{F as n}from"./FilesUploader-g2DWAoEc.js";import{S as i,a as m}from"./_StoriesComponents-DKuHuV1R.js";import"./iframe-DtSoNM3L.js";import"./preload-helper-D1IIBeq1.js";import"./index-C7iaMPW0.js";import"./FileInput-Cb-01m-z.js";import"./LakeButton-D_3m2Hv8.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DN1pHPdC.js";import"./index-CtYBqWfq.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BM1AGRur.js";import"./useBoolean-BfWIjLUt.js";import"./i18n-5PuG3vgA.js";import"./array-BfAlyugE.js";import"./LakeAlert-CACt38T4.js";import"./useResponsive-ByrXWIYR.js";import"./Tag-MHT6_NjC.js";import"./index-Bt2BoDkB.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-BITcd81k.js";import"./FocusTrap-ImEOf_5E.js";import"./Suspendable-DgV3aU8o.js";import"./ResponsiveContainer-bAl8nrQC.js";import"./TransitionView-CSY0ajHF.js";import"./useBodyClassName-BhOqwFK2.js";import"./Separator-TZ8ihUJF.js";const p=s.create({storyPart:{maxWidth:600}}),d=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:n},l=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reasonCode:"Invalid document"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reasonCode:"Invalid document",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(i,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(n,{maxSize:2e7,icon:"document-regular",accept:d,initialFiles:l,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-BYJ6IHQt.js.map
