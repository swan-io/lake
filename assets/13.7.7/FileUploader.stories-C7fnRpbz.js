import{j as r,P as o,k as a,s}from"./ScrollView-B8dEXUWT.js";import{F as i}from"./FilesUploader-oFJZ_wuX.js";import{S as n,a as m}from"./_StoriesComponents-CidHU9nU.js";import"./iframe-tL0Vcqfb.js";import"./preload-helper-D1IIBeq1.js";import"./index-CGF36j65.js";import"./FileInput-ClUgdATd.js";import"./LakeButton-mzfB1uy4.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-Dy1UpxaI.js";import"./index-CL_4XcUK.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BZ_8Shia.js";import"./useBoolean-DQr54PY7.js";import"./i18n-U_T6jwqK.js";import"./rifm-DVss7Pxy.js";import"./array-BfAlyugE.js";import"./LakeAlert-CS6CYRgc.js";import"./useResponsive-pN5XO1LP.js";import"./Tag-C96QkPCC.js";import"./index-CGYgm_tX.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DowaNy4a.js";import"./FocusTrap-Dj0OKBe4.js";import"./Suspendable-DVlmkhQi.js";import"./ResponsiveContainer-hTskAf5H.js";import"./TransitionView-DQDpoViM.js";import"./useBodyClassName-DTT9PSed.js";import"./Separator-Byp_sN2M.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-C7fnRpbz.js.map
