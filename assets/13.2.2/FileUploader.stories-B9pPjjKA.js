import{j as r,s as i,aa as o,ab as a}from"./ScrollView-DP-J4Co_.js";import{F as s}from"./FilesUploader-D6TduQGE.js";import{S as n,a as m}from"./_StoriesComponents-BWjo4NT5.js";import"./iframe-CdNfgd-T.js";import"./preload-helper-D1IIBeq1.js";import"./index-DsD7yjcw.js";import"./FileInput-DDCKgyam.js";import"./LakeButton-CGP3JRH0.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DVLk2IYY.js";import"./index-C74dzEW1.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-Ry1xtVD4.js";import"./useBoolean-CJiujZVa.js";import"./i18n-ClRcq11J.js";import"./rifm-COKXwgp-.js";import"./array-BfAlyugE.js";import"./LakeAlert-j_h34kAH.js";import"./useResponsive-B0Hh5TZY.js";import"./Tag-NQSQQ9Qy.js";import"./index-D5PE0THd.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-B0r3Hu4A.js";import"./FocusTrap-B-x-7-d9.js";import"./Suspendable-XYWDZ7-f.js";import"./ResponsiveContainer-Dyk4HU9Y.js";import"./TransitionView-Da5-vE6n.js";import"./useBodyClassName-BOpPFWgk.js";import"./Separator-CmiwAkZC.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-B9pPjjKA.js.map
