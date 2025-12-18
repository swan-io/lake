import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-DxRRCoaf.js";import{F as s}from"./FilesUploader-Bnkw-fWN.js";import{S as n,a as m}from"./_StoriesComponents-CPdydN3X.js";import"./iframe-Dfdxn2Gd.js";import"./preload-helper-D1IIBeq1.js";import"./index-DFACyu1J.js";import"./FileInput-CmLu-M63.js";import"./LakeButton-DR6e9LK4.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-CfKLNGK2.js";import"./index-BWd2P_l4.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DzKpaHzb.js";import"./useBoolean-D4wXq8ZA.js";import"./i18n-CNdhS0Uy.js";import"./rifm-HxXYzTQs.js";import"./array-BfAlyugE.js";import"./LakeAlert-C9oP3xYC.js";import"./useResponsive-CUqW7RNz.js";import"./Tag-CnxHmSi9.js";import"./index-DjWs0xka.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DIHBCAnz.js";import"./FocusTrap-DaqduUYw.js";import"./Suspendable-B0N3KPA-.js";import"./ResponsiveContainer-CXcDEfQU.js";import"./TransitionView-Dd4swsPJ.js";import"./useBodyClassName-BeD_iVtP.js";import"./Separator-D-8tW4uE.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-D9j_zzC8.js.map
