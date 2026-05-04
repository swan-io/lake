import{j as r,P as o,k as a,s}from"./ScrollView-Be2uaeG1.js";import{F as i}from"./FilesUploader-BsjG_5X_.js";import{S as n,a as m}from"./_StoriesComponents-BJZcRnz1.js";import"./iframe-CM3RFg6E.js";import"./preload-helper-D1IIBeq1.js";import"./index-uExSJENR.js";import"./FileInput-DA-IvAkD.js";import"./LakeButton-OvTMb_WF.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-B-CjcGuW.js";import"./index-Cy5rO2Vu.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-Bye1DHkx.js";import"./useBoolean-CemmSfaG.js";import"./i18n-gPeGekTT.js";import"./rifm-C-t_evdA.js";import"./array-BfAlyugE.js";import"./LakeAlert-DeUsYE8N.js";import"./useResponsive-BMK3LEh9.js";import"./Tag-CWVUGiSh.js";import"./index-TBlMkm3Q.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-D99u0pkk.js";import"./FocusTrap-o5qWQcdJ.js";import"./Suspendable-BkabwyAO.js";import"./ResponsiveContainer-BQ8-7lNY.js";import"./TransitionView-Dg4VrjO0.js";import"./useBodyClassName-DvGTgE7N.js";import"./Separator-CadOK1O6.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-0TMrxbdo.js.map
