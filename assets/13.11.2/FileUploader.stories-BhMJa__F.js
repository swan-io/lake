import{j as r,P as e,k as a,s}from"./ScrollView-2xhZ79Jo.js";import{F as n}from"./FilesUploader-b-dyD-GG.js";import{S as i,a as m}from"./_StoriesComponents-Cm_ABdCl.js";import"./iframe-6Cz0xUxr.js";import"./preload-helper-D1IIBeq1.js";import"./index-CPeLFKYT.js";import"./FileInput-C7kMdyz-.js";import"./LakeButton-Bt_Pp0RC.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-B8NN80MC.js";import"./index-D0mbFrR9.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-C3FBQMeE.js";import"./useBoolean-CLekn-nO.js";import"./i18n-DblhPVHl.js";import"./array-BfAlyugE.js";import"./LakeAlert-D6kA2WsF.js";import"./useResponsive-DNsNc3fk.js";import"./Tag-BHGshZEN.js";import"./index-BvFFThNg.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-dpCtDfK8.js";import"./FocusTrap-DrinZoPG.js";import"./Suspendable-DZeVFC46.js";import"./ResponsiveContainer-_0sjUvbI.js";import"./TransitionView-zVoD7Fgi.js";import"./useBodyClassName-BZt5f3Ah.js";import"./Separator-Do9AB7sg.js";const p=s.create({storyPart:{maxWidth:600}}),d=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:n},l=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reasonCode:"Invalid document"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reasonCode:"Invalid document",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(i,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(n,{maxSize:2e7,icon:"document-regular",accept:d,initialFiles:l,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-BhMJa__F.js.map
