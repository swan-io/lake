import{j as r,P as o,k as a,s}from"./ScrollView-Dj73aJVM.js";import{F as i}from"./FilesUploader-CLCVuNOb.js";import{S as n,a as m}from"./_StoriesComponents-B3SeHZcS.js";import"./iframe-CzDiwJr_.js";import"./preload-helper-D1IIBeq1.js";import"./index-CVRaEAzb.js";import"./FileInput-B5OjwxvU.js";import"./LakeButton-C_oMennl.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-Bg9p4Qo1.js";import"./index-C1ydCzYj.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BqAyQeGk.js";import"./useBoolean-eTZkJ5Ct.js";import"./i18n-BejMt7no.js";import"./rifm-ByCTM13F.js";import"./array-BfAlyugE.js";import"./LakeAlert-CWO5t6Bl.js";import"./useResponsive-C2HX7pIR.js";import"./Tag-B8nvcP9A.js";import"./index-BC0ALlKF.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-vQVEykUx.js";import"./FocusTrap-Dt5tR8if.js";import"./Suspendable-BbSCbu_S.js";import"./ResponsiveContainer-DKPsoPB4.js";import"./TransitionView-Dbye67lv.js";import"./useBodyClassName-DSVud3TW.js";import"./Separator-DWARDRsH.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-DDIcE4Pt.js.map
