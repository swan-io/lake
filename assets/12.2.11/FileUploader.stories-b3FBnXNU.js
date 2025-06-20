import{j as r,s as p,aa as e,ab as a}from"./ScrollView-ID2_IJFT.js";import{F as m}from"./FilesUploader-vwQTVp4n.js";import{S as l,a as d}from"./_StoriesComponents-DdxAu8_p.js";import"./iframe-CRb7qgKH.js";import"./index-CUVqh0zW.js";import"./FileInput-sQSVgOud.js";import"./LakeButton-CjGmdcP6.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-slL_Mxdg.js";import"./index-DabszY2h.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-XgEKsA1l.js";import"./useBoolean-Ck4w6tVr.js";import"./i18n-LaWyTBLA.js";import"./rifm-BogTpkgo.js";import"./array-BfAlyugE.js";import"./LakeAlert-Dnkfl-mR.js";import"./useResponsive-DIM41Fbb.js";import"./Tag-BzFRXg3w.js";import"./index-B9zkDyy9.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-BKfR7CpU.js";import"./FocusTrap-Cl4oFJh4.js";import"./Suspendable-CLJPJt7S.js";import"./ResponsiveContainer-CcSypUS_.js";import"./TransitionView-B6W8OuYx.js";import"./useBodyClassName-vUjccN75.js";import"./Separator-C9maApcR.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],V={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(l,{title:"UploadArea with several documents",children:r.jsx(d,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-b3FBnXNU.js.map
