import{j as r,s as i,aa as o,ab as a}from"./ScrollView-GnMM-MlE.js";import{F as s}from"./FilesUploader-DQAyuE-G.js";import{S as n,a as m}from"./_StoriesComponents-cAFR0z6z.js";import"./iframe-K-MNn7hz.js";import"./preload-helper-D1IIBeq1.js";import"./index-DLO6An4q.js";import"./FileInput-b7or7f08.js";import"./LakeButton-DsqM0yeg.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-qWc6ZaKO.js";import"./index-BfKoHZ8z.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-COArJvL3.js";import"./useBoolean-B9NMGOp9.js";import"./i18n-CjHCL0yh.js";import"./rifm-Di7LNOEF.js";import"./array-BfAlyugE.js";import"./LakeAlert-Btz2XHn3.js";import"./useResponsive-DoKngXOx.js";import"./Tag-J5VDlnqJ.js";import"./index-Q_Fjn5eh.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-D7uwmZU0.js";import"./FocusTrap-EQZRN1EA.js";import"./Suspendable-Y5DxLSTg.js";import"./ResponsiveContainer-DcSepwiL.js";import"./TransitionView-B77eEpjF.js";import"./useBodyClassName-bTzOZwuh.js";import"./Separator-BTvze7ui.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-B6a3Vond.js.map
