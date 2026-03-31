import{j as r,P as o,k as a,s}from"./ScrollView-DKhkmJ9r.js";import{F as i}from"./FilesUploader-CJQ_AU8v.js";import{S as n,a as m}from"./_StoriesComponents-Bk17KjEE.js";import"./iframe-BDZ7czIn.js";import"./preload-helper-D1IIBeq1.js";import"./index-CYdohqqv.js";import"./FileInput-CYS7PE03.js";import"./LakeButton-vaH8-N13.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-f9NgnVo1.js";import"./index-5pWXkuNN.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-TsFEV7Bf.js";import"./useBoolean-DGzOyuLH.js";import"./i18n-GqFZwE87.js";import"./rifm-CYZu0dEy.js";import"./array-BfAlyugE.js";import"./LakeAlert-qLBAcAN7.js";import"./useResponsive-DxZckg37.js";import"./Tag-Bn-ELh3J.js";import"./index-DIZDhswf.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-hGkG7d40.js";import"./FocusTrap-BzaosUFE.js";import"./Suspendable-BftoAXq9.js";import"./ResponsiveContainer-Dp21mLiV.js";import"./TransitionView-C-Fs-yju.js";import"./useBodyClassName-CkOULXBG.js";import"./Separator-BfGg27BJ.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-BWODcCEz.js.map
