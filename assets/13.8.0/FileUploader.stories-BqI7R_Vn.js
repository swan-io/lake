import{j as r,P as o,k as a,s}from"./ScrollView-CbF53ISe.js";import{F as i}from"./FilesUploader-BGpTFroj.js";import{S as n,a as m}from"./_StoriesComponents-qSiRrIz2.js";import"./iframe-CNlGepHT.js";import"./preload-helper-D1IIBeq1.js";import"./index-d_Ww4Ha5.js";import"./FileInput-BHSbNmHz.js";import"./LakeButton-CnP00RR-.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BVzeJew0.js";import"./index-BtDOF9dV.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-C74bpv6Y.js";import"./useBoolean-CPeE4Ugg.js";import"./i18n-BQ5R6Nq-.js";import"./rifm-BsGlmvbx.js";import"./array-BfAlyugE.js";import"./LakeAlert-CYdwXyWi.js";import"./useResponsive-B-bpoyzO.js";import"./Tag-CnktV3-O.js";import"./index-CTgEvwai.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-Bu4ORNJz.js";import"./FocusTrap-DBHfYdtC.js";import"./Suspendable-Bf3g_oX_.js";import"./ResponsiveContainer-RX5OFuWV.js";import"./TransitionView-C05_FfxO.js";import"./useBodyClassName-DHi5oWm1.js";import"./Separator-CJEAyuhl.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-BqI7R_Vn.js.map
