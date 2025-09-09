import{j as r,s as p,aa as o,ab as a}from"./ScrollView-C6x0-cdZ.js";import{F as m}from"./FilesUploader-jAZ4Dp8H.js";import{S as l,a as d}from"./_StoriesComponents-sZoAkpXl.js";import"./iframe-CxIMQOkq.js";import"./preload-helper-DrfBMU97.js";import"./index-BvFtJeYR.js";import"./FileInput-BTUuMf_o.js";import"./LakeButton-fUE8Ie3v.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-2u-WEDHu.js";import"./index-R4lBonr8.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-bUrUDASs.js";import"./useBoolean-Bbsb6hOE.js";import"./i18n-DVEFacDJ.js";import"./rifm-Dyr0XaU-.js";import"./array-BfAlyugE.js";import"./LakeAlert-xFbSzu2p.js";import"./useResponsive-Bxwm9l9Y.js";import"./Tag-DnJ7h9os.js";import"./index-DCDfUpaj.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-4CfI0G_K.js";import"./FocusTrap-BGSDQGbp.js";import"./Suspendable-Bopu1SAx.js";import"./ResponsiveContainer-YuDaOIlC.js";import"./TransitionView-9Lj4cT36.js";import"./useBodyClassName-gIZ2D_ze.js";import"./Separator-iGxrgs7V.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],q={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(l,{title:"UploadArea with several documents",children:r.jsx(d,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-D9uTjm1S.js.map
