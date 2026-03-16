import{j as r,P as o,k as a,s}from"./ScrollView-9d9_H-vT.js";import{F as i}from"./FilesUploader-BPYBhI3D.js";import{S as n,a as m}from"./_StoriesComponents-BSxSstMz.js";import"./iframe-Wny54WcV.js";import"./preload-helper-D1IIBeq1.js";import"./index-Bg9GbgPl.js";import"./FileInput-eaHhZQih.js";import"./LakeButton-Dix-PsrF.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-jDU8dMdf.js";import"./index-BPxWiLG5.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-kAgpBupm.js";import"./useBoolean-Vmiml78A.js";import"./i18n-CR5owFSJ.js";import"./rifm-CAPbvTke.js";import"./array-BfAlyugE.js";import"./LakeAlert-CCFeqlty.js";import"./useResponsive-48CsPtFO.js";import"./Tag-CoGbXkgg.js";import"./index-DcaURsEy.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-BtBcsSsf.js";import"./FocusTrap-DPgQIrMg.js";import"./Suspendable-Cfb1vPRN.js";import"./ResponsiveContainer-CykRmDpw.js";import"./TransitionView-BqmdHdyA.js";import"./useBodyClassName-BXP2xOta.js";import"./Separator-DMvmKODX.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const V=["WithSeveralDocuments"];export{t as WithSeveralDocuments,V as __namedExportsOrder,Q as default};
//# sourceMappingURL=FileUploader.stories-C6DhujIO.js.map
