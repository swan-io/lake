import{j as r,s as p,aa as e,ab as a}from"./ScrollView-CS_ryOlU.js";import{F as m}from"./FilesUploader--HprWWnv.js";import{S as l,a as d}from"./_StoriesComponents-CfKgArz8.js";import"./iframe-snBXDk_T.js";import"./index-kJDUINeT.js";import"./FileInput-BrO0ttX9.js";import"./LakeButton-CYP7e0EF.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DGTHYRjV.js";import"./index-BsDS4oB9.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BXkzZajl.js";import"./useBoolean-B2AuI8Ap.js";import"./i18n-BvdL6EwW.js";import"./rifm-CfR93S3t.js";import"./array-BfAlyugE.js";import"./LakeAlert-DwvG_8Uu.js";import"./useResponsive-CMeUMmlU.js";import"./Tag-D7wJ4ayr.js";import"./index-B06S_85o.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-BLhFVBw0.js";import"./FocusTrap-C4wFzH1D.js";import"./Suspendable-D2lIu6Y2.js";import"./ResponsiveContainer-BH8oNQyl.js";import"./TransitionView-D6t2cDPu.js";import"./useBodyClassName-sSPbskeV.js";import"./Separator-QzjiGiL6.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],V={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(l,{title:"UploadArea with several documents",children:r.jsx(d,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-D6tIXb3u.js.map
