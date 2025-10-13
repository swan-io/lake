import{j as r,s as i,aa as o,ab as a}from"./ScrollView-DPoCbDPH.js";import{F as s}from"./FilesUploader-D7gzxYOV.js";import{S as n,a as m}from"./_StoriesComponents-QlswNV_H.js";import"./iframe-Yx44behp.js";import"./preload-helper-D1IIBeq1.js";import"./index-BSY-2Bri.js";import"./FileInput-PvhQpw47.js";import"./LakeButton-CyiSGAMi.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-Dx6z1vhx.js";import"./index-s7VUU1gN.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BKzJdJ6M.js";import"./useBoolean-huu63h5x.js";import"./i18n-_T8lRYfC.js";import"./rifm-2DabYczG.js";import"./array-BfAlyugE.js";import"./LakeAlert-Dcta1eL9.js";import"./useResponsive-CqDWdKCT.js";import"./Tag-BpMe7Xok.js";import"./index-BqZAod5s.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-Ba-kaMwn.js";import"./FocusTrap-Uj4T6MiK.js";import"./Suspendable-BLPPnb_a.js";import"./ResponsiveContainer-DC6FCB9c.js";import"./TransitionView-7sO_qlS7.js";import"./useBodyClassName-D0w7ZZPy.js";import"./Separator-Chjo1GmY.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-CcGo_ooO.js.map
