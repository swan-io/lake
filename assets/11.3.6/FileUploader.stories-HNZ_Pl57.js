import{j as r}from"./jsx-runtime-8P-18mTY.js";import{s as p,H as o,G as a}from"./ScrollView-BWWoymUH.js";import{F as m}from"./FilesUploader-DNHCn4mO.js";import{S as l,a as d}from"./_StoriesComponents-DjR8QrRP.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BKZjgRaT.js";import"./FileInput-DAXZsEps.js";import"./LakeButton-QK9d5GcI.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DrFTz465.js";import"./index-DqWyeXnr.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DjqVlrin.js";import"./useBoolean-DHW5baxv.js";import"./i18n-C6pz_Gwy.js";import"./rifm-COHyYCcy.js";import"./utc-JZaFi-_r.js";import"./array-BfAlyugE.js";import"./LakeAlert-CyquT38e.js";import"./useResponsive-CzIqCC5v.js";import"./Tag-Djm3fK4-.js";import"./index-B8wx1jqD.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-ohuQ-kpT.js";import"./FocusTrap-DK_mB3LC.js";import"./Suspendable-CoeGDO2w.js";import"./ResponsiveContainer-DRchTQ3H.js";import"./TransitionView-B1c2XDjk.js";import"./useBodyClassName-DMoYUPTW.js";import"./Separator-Cg2ZriTe.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],q={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(l,{title:"UploadArea with several documents",children:r.jsx(d,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const J=["WithSeveralDocuments"];export{t as WithSeveralDocuments,J as __namedExportsOrder,q as default};
//# sourceMappingURL=FileUploader.stories-HNZ_Pl57.js.map
