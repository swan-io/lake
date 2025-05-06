import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{s as p,H as o,G as a}from"./ScrollView-CRqCiH49.js";import{F as m}from"./FilesUploader-DLTTRNOV.js";import{S as l,a as d}from"./_StoriesComponents-BJjd_5r-.js";import"./index-D9D9kDko.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D0hBKHsB.js";import"./FileInput-CzG35a07.js";import"./LakeButton-Y2oJasCQ.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-D0TQHTzC.js";import"./index-X5c_aylL.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-Qdhbqsm6.js";import"./useBoolean-CLEWiLu4.js";import"./i18n-CNtB0jvR.js";import"./rifm-B2FFccIi.js";import"./utc-JZaFi-_r.js";import"./array-BfAlyugE.js";import"./LakeAlert-D_6gK0uR.js";import"./useResponsive-DVbm4z6j.js";import"./Tag-BORgG-Pn.js";import"./index-uPcVX-2d.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-D4EFyGjh.js";import"./FocusTrap-D6KQDOaF.js";import"./Suspendable-DyCjnnoj.js";import"./ResponsiveContainer-Dsj4u0f5.js";import"./TransitionView-CIer91hl.js";import"./useBodyClassName-CPyC-r4W.js";import"./Separator-Bkm-h-Cw.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],q={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(l,{title:"UploadArea with several documents",children:r.jsx(d,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-2avfgWLC.js.map
