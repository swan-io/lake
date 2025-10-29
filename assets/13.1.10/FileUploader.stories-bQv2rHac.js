import{j as r,s as i,aa as o,ab as a}from"./ScrollView-CFHMD8gR.js";import{F as s}from"./FilesUploader-CocXuKtl.js";import{S as n,a as m}from"./_StoriesComponents-BccmmW5J.js";import"./iframe-rgzRz24W.js";import"./preload-helper-D1IIBeq1.js";import"./index-DyBMJZr9.js";import"./FileInput-DJDWIxW-.js";import"./LakeButton-IFFz3hVW.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-INVaeo-b.js";import"./index-D7PcQfgm.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-CSJE4ouT.js";import"./useBoolean-DIt6mjD8.js";import"./i18n-CYGvUERN.js";import"./rifm-kYW2IxLu.js";import"./array-BfAlyugE.js";import"./LakeAlert-DzNA0g4S.js";import"./useResponsive-BzdTSScg.js";import"./Tag-BI0ZQk1-.js";import"./index-DYamaDjh.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-Djb_CAQf.js";import"./FocusTrap-BE3QxVuA.js";import"./Suspendable-BWIUR_ti.js";import"./ResponsiveContainer-BUmacYv1.js";import"./TransitionView-Bn7S2GyK.js";import"./useBodyClassName-Deh2QNpg.js";import"./Separator-Dn16jfTL.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-bQv2rHac.js.map
