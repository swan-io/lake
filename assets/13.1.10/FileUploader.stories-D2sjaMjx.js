import{j as r,s as i,aa as o,ab as a}from"./ScrollView-DMb9bjGO.js";import{F as s}from"./FilesUploader-CGdLholq.js";import{S as n,a as m}from"./_StoriesComponents-DyWuttUu.js";import"./iframe-D7BJ5AuT.js";import"./preload-helper-D1IIBeq1.js";import"./index-DX8vQjpC.js";import"./FileInput-DpZ2srlK.js";import"./LakeButton-DqiMCzId.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-YfoC2FQs.js";import"./index-BAvRvs3_.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-CuF1TKrO.js";import"./useBoolean-BnrViRje.js";import"./i18n-Dbcxr1WS.js";import"./rifm-Bwu4mpzf.js";import"./array-BfAlyugE.js";import"./LakeAlert-wee8C8He.js";import"./useResponsive-CBAAVgJA.js";import"./Tag-aDWBCXaw.js";import"./index-CT3UH8Ri.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-BdZn3Tq4.js";import"./FocusTrap-B_roqe0v.js";import"./Suspendable-BjWwmF9p.js";import"./ResponsiveContainer-CEp0Qmkg.js";import"./TransitionView-DHNrlJA-.js";import"./useBodyClassName-D2mq5rT4.js";import"./Separator-Cu2t3LZa.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-D2sjaMjx.js.map
