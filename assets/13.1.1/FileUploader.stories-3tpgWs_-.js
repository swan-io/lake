import{j as r,s as i,aa as o,ab as a}from"./ScrollView-C9PsFYIv.js";import{F as s}from"./FilesUploader-UG_FGHT1.js";import{S as n,a as m}from"./_StoriesComponents-8kZSVQgb.js";import"./iframe-CApFOUbG.js";import"./preload-helper-D1IIBeq1.js";import"./index-BMBfe11t.js";import"./FileInput-DnXRhJ4z.js";import"./LakeButton-CzcE5UO-.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-Cxbb0NSX.js";import"./index-CoVy-U7n.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-E-0iCwZx.js";import"./useBoolean-MFRghEBD.js";import"./i18n-D8hVVgLH.js";import"./rifm-BtXqfJHA.js";import"./array-BfAlyugE.js";import"./LakeAlert-B1cOoB-t.js";import"./useResponsive-7yyoCSKe.js";import"./Tag-By4oBgLa.js";import"./index-DU-3IirP.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-Bquvg6Ix.js";import"./FocusTrap-CvALvZPt.js";import"./Suspendable-yS7Njj2w.js";import"./ResponsiveContainer-B8mlCJRS.js";import"./TransitionView-ClFxX6ig.js";import"./useBodyClassName-DTm_K_tK.js";import"./Separator-CrS2qz3T.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-3tpgWs_-.js.map
