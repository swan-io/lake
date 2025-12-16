import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-yhnlmysC.js";import{F as s}from"./FilesUploader-CcAcK4mu.js";import{S as n,a as m}from"./_StoriesComponents-26MXisOp.js";import"./iframe-BnDr4jPr.js";import"./preload-helper-D1IIBeq1.js";import"./index-BgAb9bgR.js";import"./FileInput-Dcj0j7rl.js";import"./LakeButton-c4I30xb4.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-C27QPiJN.js";import"./index-C08Gnc1L.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BGT9LTO3.js";import"./useBoolean-J382nFSC.js";import"./i18n-DoU8zrHR.js";import"./rifm-DJdBk3Gf.js";import"./array-BfAlyugE.js";import"./LakeAlert-kO0FrU05.js";import"./useResponsive-BJvnydWd.js";import"./Tag-DO4b7_7Z.js";import"./index-BrzuDZzc.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-wvOPO4f_.js";import"./FocusTrap-BIfNg75L.js";import"./Suspendable-DImD3S32.js";import"./ResponsiveContainer-_BQ2FD10.js";import"./TransitionView-D_rp2bTU.js";import"./useBodyClassName-DzL62ECt.js";import"./Separator-Cmw5bFvQ.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-BWXVuheZ.js.map
