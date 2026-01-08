import{j as r,s as i,aa as o,ab as a}from"./ScrollView-BxtBFVF1.js";import{F as s}from"./FilesUploader-DzBablOR.js";import{S as n,a as m}from"./_StoriesComponents-1Juvpviw.js";import"./iframe-DKDYG3Rz.js";import"./preload-helper-D1IIBeq1.js";import"./index-zDXlRz9t.js";import"./FileInput-s7dZ_oea.js";import"./LakeButton-Cu_y-WAQ.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-l73nU7Tg.js";import"./index-Dv8WScbi.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-2X85FHDN.js";import"./useBoolean-CCa4lFKc.js";import"./i18n-2dBGt0MS.js";import"./rifm-CUZnPtJv.js";import"./array-BfAlyugE.js";import"./LakeAlert-xBTNOXqE.js";import"./useResponsive-MG08eEwv.js";import"./Tag-BD7ECINa.js";import"./index-ByiCOZcJ.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-IA1UeHPk.js";import"./FocusTrap-DDgz7xwG.js";import"./Suspendable-DytVf_mm.js";import"./ResponsiveContainer-jADXH-gg.js";import"./TransitionView-CzoH89ea.js";import"./useBodyClassName-CqW7EL8I.js";import"./Separator-BjabA4z5.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-DHqa4s2j.js.map
