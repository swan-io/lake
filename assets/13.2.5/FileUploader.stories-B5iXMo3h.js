import{j as r,s as i,aa as o,ab as a}from"./ScrollView-CkaScuSL.js";import{F as s}from"./FilesUploader-BirtUSg9.js";import{S as n,a as m}from"./_StoriesComponents-DGjgaD24.js";import"./iframe-BVid4p0P.js";import"./preload-helper-D1IIBeq1.js";import"./index-BLHSWTxF.js";import"./FileInput-DHPq0IN8.js";import"./LakeButton-CXaXykQV.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DtHpaU9W.js";import"./index-CSJtnbCR.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-HcfRlzPB.js";import"./useBoolean-2AeK2a2A.js";import"./i18n-B3XUNDWw.js";import"./rifm-DBLegypl.js";import"./array-BfAlyugE.js";import"./LakeAlert-eaNBojrV.js";import"./useResponsive-CvPPp2y8.js";import"./Tag-Di2DcBcp.js";import"./index-cN6wJSCQ.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DYC4XHi4.js";import"./FocusTrap-nz7pojFa.js";import"./Suspendable-CUNCkTP5.js";import"./ResponsiveContainer-rCiF07Qr.js";import"./TransitionView-3WvpP0hY.js";import"./useBodyClassName-DnKnUOMp.js";import"./Separator-gHFv-a7y.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-B5iXMo3h.js.map
