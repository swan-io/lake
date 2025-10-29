import{j as r,s as i,aa as o,ab as a}from"./ScrollView-BqTydURq.js";import{F as s}from"./FilesUploader-CBDy_hXI.js";import{S as n,a as m}from"./_StoriesComponents-RywymyrZ.js";import"./iframe-9aSoULCZ.js";import"./preload-helper-D1IIBeq1.js";import"./index-SVMasu_O.js";import"./FileInput-BJ1jPg5c.js";import"./LakeButton-DkzM6ANC.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DTDVRMBn.js";import"./index-DHXg-JMF.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-C-yxoyRQ.js";import"./useBoolean-C3MM0JQR.js";import"./i18n-B8QEYrWX.js";import"./rifm-CQ6saOid.js";import"./array-BfAlyugE.js";import"./LakeAlert-De0hTFpK.js";import"./useResponsive-CUtXKT7U.js";import"./Tag-DvUo7E3w.js";import"./index-vUELBNf4.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-3Y6YgSHS.js";import"./FocusTrap-CwFCF3wQ.js";import"./Suspendable-DNxscq-W.js";import"./ResponsiveContainer-CIZzckit.js";import"./TransitionView-CJxI5QP0.js";import"./useBodyClassName-CluOnEB1.js";import"./Separator-D7jsXJ4v.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-BUcaBawW.js.map
