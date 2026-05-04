import{j as r,P as e,k as a,s as i}from"./ScrollView-Bd0ePppY.js";import{F as s}from"./FilesUploader-DmqRQDTJ.js";import{S as n,a as m}from"./_StoriesComponents-DCjKIWb0.js";import"./iframe-BtrrGmPJ.js";import"./preload-helper-D1IIBeq1.js";import"./index-Dsa7eREZ.js";import"./FileInput-UPlgtPIB.js";import"./LakeButton-5K9kc9GK.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-C-KOCohL.js";import"./index-CqhfhOm1.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-Co-f0Kh0.js";import"./useBoolean-Dvof1oWP.js";import"./i18n-jznXFVdt.js";import"./array-BfAlyugE.js";import"./LakeAlert-DyYNHuMk.js";import"./useResponsive-3_V_difT.js";import"./Tag-ymJgua5c.js";import"./index-B09ogw1V.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-Di89nlpU.js";import"./FocusTrap-BdhT87pd.js";import"./Suspendable-DcThaAbT.js";import"./ResponsiveContainer-DKzCikE3.js";import"./TransitionView-D-HYJaux.js";import"./useBodyClassName-BcfyFQU2.js";import"./Separator-DWEu2Q06.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-CZMgFB83.js.map
