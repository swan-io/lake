import{j as r,P as o,k as a,s}from"./ScrollView-BABzAA_G.js";import{F as i}from"./FilesUploader-R9DaJOG0.js";import{S as n,a as m}from"./_StoriesComponents-D20sZg-_.js";import"./iframe-DRc25qS0.js";import"./preload-helper-D1IIBeq1.js";import"./index-DvoH51Sm.js";import"./FileInput-BEjmUVFF.js";import"./LakeButton-Dw-2_76J.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-D72dLRaq.js";import"./index-Bw4f6u-g.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-Bj2-5OL1.js";import"./useBoolean-f4HWQdVo.js";import"./i18n-C2IcLnii.js";import"./rifm-Bxd4r-gh.js";import"./array-BfAlyugE.js";import"./LakeAlert-Bzv-7mWb.js";import"./useResponsive-DqzppcpW.js";import"./Tag-DYC17q1z.js";import"./index-Jb9ilPkJ.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-AaxQ_YCl.js";import"./FocusTrap-DdQ4aefB.js";import"./Suspendable-Z7J8XuvH.js";import"./ResponsiveContainer-CclwnxoZ.js";import"./TransitionView-Ckq_a8e0.js";import"./useBodyClassName-BRHXAl_u.js";import"./Separator-Uo9qg6Jw.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-nepD6qRm.js.map
