import{j as r,s as i,aa as o,ab as a}from"./ScrollView-BL36XWxy.js";import{F as s}from"./FilesUploader-BfihBiCE.js";import{S as n,a as m}from"./_StoriesComponents-DrF_UPCc.js";import"./iframe-C05-oeul.js";import"./preload-helper-D1IIBeq1.js";import"./index-BlbWIWvf.js";import"./FileInput-Dkc7LYk3.js";import"./LakeButton-zxLQktdA.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-CveIh5aA.js";import"./index-Burr2ELq.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-NakZw41i.js";import"./useBoolean-B_U_AOt5.js";import"./i18n-ZwxGGEdH.js";import"./rifm-CLCldyz2.js";import"./array-BfAlyugE.js";import"./LakeAlert-p1P-AyBF.js";import"./useResponsive-Cz3siX2F.js";import"./Tag-B3T4DUvv.js";import"./index-DAd_7NJo.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DEQKqaos.js";import"./FocusTrap-Dlq1Tkea.js";import"./Suspendable-BYVKGYe7.js";import"./ResponsiveContainer-C5JAD9em.js";import"./TransitionView-Cxb0WzAI.js";import"./useBodyClassName-B8nTqlDw.js";import"./Separator-Djwf9SC3.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-CsCshYaE.js.map
