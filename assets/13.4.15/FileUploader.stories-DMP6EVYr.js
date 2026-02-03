import{j as r,aa as o,ab as a,s as i}from"./ScrollView-DpZndJD-.js";import{F as s}from"./FilesUploader-CG0rXgDX.js";import{S as n,a as m}from"./_StoriesComponents-oERC9Nal.js";import"./iframe-Cp82pBYH.js";import"./preload-helper-D1IIBeq1.js";import"./index-CuigAy1F.js";import"./FileInput-A_41H4L3.js";import"./LakeButton-TvFbC0iG.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-CBE7Rh5t.js";import"./index-B22isQOs.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-CNtYOf0q.js";import"./useBoolean-5DQo2JbN.js";import"./i18n-BN4OiD4B.js";import"./rifm-DktdQebj.js";import"./array-BfAlyugE.js";import"./LakeAlert-BlQThHO6.js";import"./useResponsive-y9KA2PWp.js";import"./Tag-DHmcJrpI.js";import"./index-B1fjDH9L.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DjlDGONU.js";import"./FocusTrap-_ogcdL10.js";import"./Suspendable-61VLsZ4U.js";import"./ResponsiveContainer-CqdaRlYI.js";import"./TransitionView-DI99MCD-.js";import"./useBodyClassName-BCtOORZp.js";import"./Separator-05rWY6s-.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-DMP6EVYr.js.map
