import{j as r,s as p,aa as o,ab as a}from"./ScrollView-C78SkEne.js";import{F as m}from"./FilesUploader-Dix7IOUn.js";import{S as l,a as d}from"./_StoriesComponents-BhMY1MHB.js";import"./iframe-bSWLDtM2.js";import"./preload-helper-DrfBMU97.js";import"./index-BDj4D_R3.js";import"./FileInput-Bg1F6-Pp.js";import"./LakeButton-DQG6RMPm.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-CLuPoIvD.js";import"./index-h8MM-bqt.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DDUNByjS.js";import"./useBoolean-Bs4rHNmV.js";import"./i18n-BO7aXBUw.js";import"./rifm-DX2k_jSL.js";import"./array-BfAlyugE.js";import"./LakeAlert-DA4likd6.js";import"./useResponsive-C-faiu3U.js";import"./Tag-BkY1TAcn.js";import"./index-D-W1HY0_.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-Di-xfoLU.js";import"./FocusTrap-DTDVq-Ha.js";import"./Suspendable-Dg06D5sx.js";import"./ResponsiveContainer-Brunc3F2.js";import"./TransitionView-BKXjSA5x.js";import"./useBodyClassName-Ou1g3Y2r.js";import"./Separator-YJI7LZ9S.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],q={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(l,{title:"UploadArea with several documents",children:r.jsx(d,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const G=["WithSeveralDocuments"];export{t as WithSeveralDocuments,G as __namedExportsOrder,q as default};
//# sourceMappingURL=FileUploader.stories-dyZYeatD.js.map
