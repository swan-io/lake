import{j as r,P as e,k as a,s}from"./ScrollView-BFTe3NUs.js";import{F as n}from"./FilesUploader-BGEUH-Ca.js";import{S as i,a as m}from"./_StoriesComponents-BnU3qKiC.js";import"./iframe-DgAaViVc.js";import"./preload-helper-D1IIBeq1.js";import"./index-BAAQiwsw.js";import"./FileInput-CDhbOV6V.js";import"./LakeButton-DaCk3atp.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-Cyr_eKr3.js";import"./index-LA1RMurX.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DdE94Gf1.js";import"./useBoolean-D58j8Sx5.js";import"./i18n-Ci6qpPDI.js";import"./array-BfAlyugE.js";import"./LakeAlert-EiyQvUM4.js";import"./useResponsive-COoCDTYK.js";import"./Tag-CMxPODx7.js";import"./index-ByBJbYnQ.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-QXJbhELC.js";import"./FocusTrap-3fW7XPjR.js";import"./Suspendable-jY3Y2eU_.js";import"./ResponsiveContainer-BFphrrR9.js";import"./TransitionView-j0JnRKln.js";import"./useBodyClassName-BLP68U00.js";import"./Separator-OzvEz0ZT.js";const p=s.create({storyPart:{maxWidth:600}}),d=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:n},l=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reasonCode:"Invalid document"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reasonCode:"Invalid document",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(i,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(n,{maxSize:2e7,icon:"document-regular",accept:d,initialFiles:l,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-D9cgvDXs.js.map
