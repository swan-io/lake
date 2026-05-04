import{j as r,P as o,k as a,s}from"./ScrollView-SDdqIOjG.js";import{F as i}from"./FilesUploader-BzGxetuh.js";import{S as n,a as m}from"./_StoriesComponents-BKqBt6LL.js";import"./iframe-D1duQp2Q.js";import"./preload-helper-D1IIBeq1.js";import"./index-CoghPqk4.js";import"./FileInput-th7eAOP1.js";import"./LakeButton-Z42kTch1.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BXC_w4K0.js";import"./index-CROAzjyK.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BJcc-58Q.js";import"./useBoolean-Zq0uUxiC.js";import"./i18n-BC6NtV_f.js";import"./rifm-DDCet3-J.js";import"./array-BfAlyugE.js";import"./LakeAlert-B_lLcR9p.js";import"./useResponsive-B1jxFPrI.js";import"./Tag-y0DtC9w4.js";import"./index-BXHitgjZ.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-CnbW30Fi.js";import"./FocusTrap-ChDM9kaO.js";import"./Suspendable-BAg_Tsnt.js";import"./ResponsiveContainer-D_UWsgDl.js";import"./TransitionView-CP4urHtg.js";import"./useBodyClassName-CwVo92do.js";import"./Separator-PPSvpwsX.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-C9eC4c_C.js.map
