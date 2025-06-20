import{j as r,s as p,aa as e,ab as a}from"./ScrollView-o6if_kcp.js";import{F as m}from"./FilesUploader-DveHcI0A.js";import{S as l,a as d}from"./_StoriesComponents-v1gK4JTZ.js";import"./iframe-C2Z9El9p.js";import"./index-BgAqEgCl.js";import"./FileInput-DloU1ed1.js";import"./LakeButton-D5SfiXxc.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DSEozOWF.js";import"./index-B4mCxXf_.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DAfMa4zu.js";import"./useBoolean-D3_P5kqp.js";import"./i18n-B5upCd0D.js";import"./rifm-CUVmKqxQ.js";import"./array-BfAlyugE.js";import"./LakeAlert-SLD0boeF.js";import"./useResponsive-DeKOCZhC.js";import"./Tag-Dd2CqggY.js";import"./index-CaEp4Os5.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-C_tYuaRe.js";import"./FocusTrap-BUTEJ7ju.js";import"./Suspendable-Db5KoI4w.js";import"./ResponsiveContainer-Dw-1EgiE.js";import"./TransitionView-D7lMPaw5.js";import"./useBodyClassName-zWpqcCHb.js";import"./Separator-mYRBsq9o.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],V={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(l,{title:"UploadArea with several documents",children:r.jsx(d,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-DbU4vsVk.js.map
