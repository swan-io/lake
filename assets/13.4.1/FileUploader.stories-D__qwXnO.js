import{j as r,s as i,a9 as o,aa as a}from"./ScrollView-wJwpWi3J.js";import{F as s}from"./FilesUploader-6IUWUdnM.js";import{S as n,a as m}from"./_StoriesComponents-jkEZojNr.js";import"./iframe-DzdVvflQ.js";import"./preload-helper-D1IIBeq1.js";import"./index-BrDz7hIM.js";import"./FileInput-Gl3a9H_C.js";import"./LakeButton-5J6-OVJf.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-B1vz_Y9d.js";import"./index-BQ8Ycqjw.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BDWWOHc3.js";import"./useBoolean-DID_lnp0.js";import"./i18n-BsyBeZXY.js";import"./rifm-p6jF7mk5.js";import"./array-BfAlyugE.js";import"./LakeAlert-BVg_l7TL.js";import"./useResponsive-7zSy6x_b.js";import"./Tag-DqEqv3vB.js";import"./index-Ctv6Dk3w.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DnGX9Tfy.js";import"./FocusTrap-Vfzp8D1L.js";import"./Suspendable-CCG6Sm0P.js";import"./ResponsiveContainer-CxiuUU54.js";import"./TransitionView-BJSzK25u.js";import"./useBodyClassName-BKsFdmWn.js";import"./Separator-B6dBECLm.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-D__qwXnO.js.map
