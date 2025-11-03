import{j as r,s as i,aa as o,ab as a}from"./ScrollView-DjAxNoKY.js";import{F as s}from"./FilesUploader-Q8viUj0B.js";import{S as n,a as m}from"./_StoriesComponents-kzfjs0y9.js";import"./iframe-TVFM_kUx.js";import"./preload-helper-D1IIBeq1.js";import"./index-BfEQr3Ix.js";import"./FileInput-DkQtZNOu.js";import"./LakeButton-B5sR9Dpj.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-C-JibMcO.js";import"./index-v5KP310K.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-KEX0XLu2.js";import"./useBoolean-k5fRD7X3.js";import"./i18n-GRc-DWix.js";import"./rifm-DI0xx_eL.js";import"./array-BfAlyugE.js";import"./LakeAlert-BwGxi9zQ.js";import"./useResponsive-DkWVwvay.js";import"./Tag-BflShHpg.js";import"./index-CbRuInvt.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DerpWDyf.js";import"./FocusTrap-CF6p4ViD.js";import"./Suspendable-CHhPSMkN.js";import"./ResponsiveContainer-CsAVf8bA.js";import"./TransitionView-B-yt8KoT.js";import"./useBodyClassName-CeCETbGq.js";import"./Separator-BKuIGj4t.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-C8lnonQy.js.map
