import{j as r,s as i,aa as o,ab as a}from"./ScrollView-Bll2K2wJ.js";import{F as s}from"./FilesUploader-0T5__ZwU.js";import{S as n,a as m}from"./_StoriesComponents-Cx0hEKgA.js";import"./iframe-Jj_trAND.js";import"./preload-helper-D1IIBeq1.js";import"./index-BAlGKUK3.js";import"./FileInput-DJKsLaCl.js";import"./LakeButton-81AOAdmV.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-CaIjxvAf.js";import"./index-jhlVsJg0.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-sNPgHk26.js";import"./useBoolean-lunY8rHH.js";import"./i18n-iNQn2o8r.js";import"./rifm-Cm98g-xR.js";import"./array-BfAlyugE.js";import"./LakeAlert-D_er3msw.js";import"./useResponsive-BrnTECF2.js";import"./Tag-DJwBshI8.js";import"./index-B6Nyd8Em.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-Dq957vR7.js";import"./FocusTrap-C5Vpe5j6.js";import"./Suspendable-vgliP7JA.js";import"./ResponsiveContainer-CqhP53iW.js";import"./TransitionView-XEuIAUJU.js";import"./useBodyClassName-B8ml2g5J.js";import"./Separator-BRwU32FS.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-fJVqO2Lf.js.map
