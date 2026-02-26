import{j as r,P as o,k as a,s}from"./ScrollView-CDhETwN2.js";import{F as i}from"./FilesUploader-vEp7lLwu.js";import{S as n,a as m}from"./_StoriesComponents-BRDuCq4T.js";import"./iframe-Bc8Ae2xi.js";import"./preload-helper-D1IIBeq1.js";import"./index-DG4_q6Ce.js";import"./FileInput-D4TdWnPo.js";import"./LakeButton-CbG86U9y.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BpS-PI3j.js";import"./index-CWoCSAcW.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BApAPGCg.js";import"./useBoolean-DBnAw4ea.js";import"./i18n-DeXLcbtY.js";import"./rifm--XYgbLsT.js";import"./array-BfAlyugE.js";import"./LakeAlert-DBxFBUEz.js";import"./useResponsive-C9eFWdSK.js";import"./Tag-5rwRD0gR.js";import"./index-K5bOlvZX.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-CskdE1YE.js";import"./FocusTrap-CO3K2MNg.js";import"./Suspendable-BARmw_4T.js";import"./ResponsiveContainer-BzooREI9.js";import"./TransitionView-Bz6Ns6gA.js";import"./useBodyClassName-DbztZ5Bj.js";import"./Separator-DXNL4pQi.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-BMoSqocG.js.map
