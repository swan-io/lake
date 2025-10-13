import{j as r,s as i,aa as o,ab as a}from"./ScrollView-DBvD_-W5.js";import{F as s}from"./FilesUploader-BW0qZKzl.js";import{S as n,a as m}from"./_StoriesComponents-DYi1G9tZ.js";import"./iframe-Blcpj6iT.js";import"./preload-helper-D1IIBeq1.js";import"./index-CmwWnqzk.js";import"./FileInput-TbtFUtwe.js";import"./LakeButton-BmY4FSQ-.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BHvpfEXQ.js";import"./index-DfESDThz.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-k8Xjht3s.js";import"./useBoolean-CIeLe1z6.js";import"./i18n-ov3JaZ_2.js";import"./rifm-BiTVRmcY.js";import"./array-BfAlyugE.js";import"./LakeAlert-D19jlzTU.js";import"./useResponsive-Bxs2t25A.js";import"./Tag-B-O_iOZJ.js";import"./index-DXsE9T7k.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-BM-mDxmA.js";import"./FocusTrap-BNsa_ko6.js";import"./Suspendable-D_BI5z_N.js";import"./ResponsiveContainer-B0c4SqoE.js";import"./TransitionView-DAzrju7O.js";import"./useBodyClassName-BPt1r9A3.js";import"./Separator-C5O186Bn.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-T8EC4DLW.js.map
