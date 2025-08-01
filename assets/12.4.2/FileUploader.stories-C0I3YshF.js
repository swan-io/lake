import{j as r,s as p,aa as e,ab as a}from"./ScrollView-7YCIze7b.js";import{F as m}from"./FilesUploader-BkX1fNc4.js";import{S as l,a as d}from"./_StoriesComponents-q5tLZAAH.js";import"./iframe-D-QwQAmZ.js";import"./index-mzIopdLk.js";import"./FileInput-DFyvRd6L.js";import"./LakeButton-DWZv5aEG.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DkpKCnAz.js";import"./index-e7iKZW_k.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DrwD3jTS.js";import"./useBoolean-xEFqzmog.js";import"./i18n-CbXpPoix.js";import"./rifm-3IfllOCq.js";import"./array-BfAlyugE.js";import"./LakeAlert-2SCGGOOf.js";import"./useResponsive-DzZ5F3p-.js";import"./Tag-C3-GY1rK.js";import"./index-ClhKWerN.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-CAYEnyTK.js";import"./FocusTrap-F3XSIrFP.js";import"./Suspendable-oJVFou4j.js";import"./ResponsiveContainer-BWWRQAmJ.js";import"./TransitionView-DgwaWab3.js";import"./useBodyClassName-B6H9E5zr.js";import"./Separator-DHWR-0WD.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],V={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(l,{title:"UploadArea with several documents",children:r.jsx(d,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const q=["WithSeveralDocuments"];export{t as WithSeveralDocuments,q as __namedExportsOrder,V as default};
//# sourceMappingURL=FileUploader.stories-C0I3YshF.js.map
