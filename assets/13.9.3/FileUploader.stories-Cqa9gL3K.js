import{j as r,P as o,k as a,s}from"./ScrollView-BU4Gh9Er.js";import{F as i}from"./FilesUploader-CQwt_-kn.js";import{S as n,a as m}from"./_StoriesComponents-DET1njs8.js";import"./iframe-Sl-WXsVR.js";import"./preload-helper-D1IIBeq1.js";import"./index-D_HvrnDR.js";import"./FileInput-CLr7B5cl.js";import"./LakeButton-zqwQxvHB.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-jVgDOqiP.js";import"./index-k1Iybb4R.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-NfwENk5N.js";import"./useBoolean-BG72Fxmp.js";import"./i18n-DpyqLNiT.js";import"./rifm-D77j-yTE.js";import"./array-BfAlyugE.js";import"./LakeAlert-D--AijhO.js";import"./useResponsive-C8HgPkCo.js";import"./Tag-eKn4DZOA.js";import"./index-CjxcBNe0.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-CDf6y8hn.js";import"./FocusTrap-vojLTRjo.js";import"./Suspendable-DQBvpQVK.js";import"./ResponsiveContainer-D38sg0Mg.js";import"./TransitionView-BOv26d1N.js";import"./useBodyClassName-D2vzRF5R.js";import"./Separator-Bxy4FPtB.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-Cqa9gL3K.js.map
