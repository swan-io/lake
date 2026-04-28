import{j as r,P as o,k as a,s}from"./ScrollView-043YSePJ.js";import{F as i}from"./FilesUploader-CWJms0FF.js";import{S as n,a as m}from"./_StoriesComponents-BzxENaF7.js";import"./iframe-BN3BVKX8.js";import"./preload-helper-D1IIBeq1.js";import"./index-Dlpirge6.js";import"./FileInput-BU6wbPpO.js";import"./LakeButton-BeYGalsG.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DzhiLFyl.js";import"./index-P1yuoy8V.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-Ce26Jtz4.js";import"./useBoolean-Bk_yQopR.js";import"./i18n-DrDZ9Gju.js";import"./rifm-DJC7kXyB.js";import"./array-BfAlyugE.js";import"./LakeAlert-CYGk33ql.js";import"./useResponsive-C6P0SBx2.js";import"./Tag-CbhM63c3.js";import"./index-CEeJu2lx.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-LzKJjtnE.js";import"./FocusTrap-9tfiqDPy.js";import"./Suspendable-C9wvjYmr.js";import"./ResponsiveContainer-BhnOUvky.js";import"./TransitionView-BtVON78z.js";import"./useBodyClassName-Cpl99UgS.js";import"./Separator-CcCQ9Zfp.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-DD19b7cd.js.map
