import{j as r,P as o,k as a,s}from"./ScrollView-umhQnv2C.js";import{F as i}from"./FilesUploader-BVmQl9hZ.js";import{S as n,a as m}from"./_StoriesComponents-CnyqZ7S7.js";import"./iframe-B0OM9YgA.js";import"./preload-helper-D1IIBeq1.js";import"./index-CChuWMTh.js";import"./FileInput-D-Ttzbz8.js";import"./LakeButton-BNu4rZ_r.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DJpeYzkL.js";import"./index-DPMd4fk2.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-CwDyg0QG.js";import"./useBoolean-BToRLXu3.js";import"./i18n-Dy26KIWO.js";import"./rifm-DqGRxCmB.js";import"./array-BfAlyugE.js";import"./LakeAlert-UkU9RVTo.js";import"./useResponsive-C_Q0-Hi4.js";import"./Tag-B7U7LZG2.js";import"./index-tGNP2ghS.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-Cf5SP9SA.js";import"./FocusTrap-DX5toD0I.js";import"./Suspendable-DbKD1kPb.js";import"./ResponsiveContainer-C5SWJQC9.js";import"./TransitionView-BC44Xqvk.js";import"./useBodyClassName-VV5IHfnA.js";import"./Separator-qQlcSW4B.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-AnNsKnmk.js.map
