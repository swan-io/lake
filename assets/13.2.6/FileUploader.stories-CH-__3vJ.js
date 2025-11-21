import{j as r,s as i,aa as o,ab as a}from"./ScrollView-Cx-_2_qZ.js";import{F as s}from"./FilesUploader-Di4CeIYu.js";import{S as n,a as m}from"./_StoriesComponents-DUtGmRWS.js";import"./iframe-D2N-27y_.js";import"./preload-helper-D1IIBeq1.js";import"./index-8RuiGR6E.js";import"./FileInput--9lLRlbB.js";import"./LakeButton-DdsVLmd-.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-CuMb02U5.js";import"./index-B67Yjf_9.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-C6zPYGsP.js";import"./useBoolean-qkYUZ3UB.js";import"./i18n-ltbp3Qph.js";import"./rifm-BMtG45se.js";import"./array-BfAlyugE.js";import"./LakeAlert-CGOthfLg.js";import"./useResponsive-DGyYVoC0.js";import"./Tag-BcL9LnVd.js";import"./index-yhx6ja_f.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-YyIh8jsw.js";import"./FocusTrap-BIlErJi3.js";import"./Suspendable-BMBRmXTf.js";import"./ResponsiveContainer-DgVXStwK.js";import"./TransitionView-whHwE2l0.js";import"./useBodyClassName-Dc0qfvfc.js";import"./Separator-rzjehLGw.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-CH-__3vJ.js.map
