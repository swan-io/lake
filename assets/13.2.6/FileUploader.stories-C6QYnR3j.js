import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-DGHOeczt.js";import{F as s}from"./FilesUploader-Bskr0Gho.js";import{S as n,a as m}from"./_StoriesComponents-DE_xP_TO.js";import"./iframe-wP95P9Zj.js";import"./preload-helper-D1IIBeq1.js";import"./index-Cf8MV9xv.js";import"./FileInput-C8wiFuf0.js";import"./LakeButton-DCuGRJxo.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DytVXVjX.js";import"./index-MZmp8TJv.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-CX2exy9V.js";import"./useBoolean-lEve-Fbk.js";import"./i18n-BAwqqmmN.js";import"./rifm-DONdOljT.js";import"./array-BfAlyugE.js";import"./LakeAlert-qpXQmRN_.js";import"./useResponsive-_WCAEYUJ.js";import"./Tag-BuouHvdU.js";import"./index-Bww6GigD.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-Ba2KaOWv.js";import"./FocusTrap-DYFWwofR.js";import"./Suspendable-YHbTYR7o.js";import"./ResponsiveContainer-DXCFH1RG.js";import"./TransitionView-qPXrZuWh.js";import"./useBodyClassName-BSCo9M1t.js";import"./Separator-BKYUVQO0.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-C6QYnR3j.js.map
