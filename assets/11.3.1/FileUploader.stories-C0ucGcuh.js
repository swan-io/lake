import{j as r}from"./index-DNTRjB4V.js";import{s as p,H as o,G as a}from"./ScrollView-DZFasRfs.js";import{F as m}from"./FilesUploader-DpUX6JXd.js";import{S as d,a as l}from"./_StoriesComponents-D5s7scz1.js";import"./index-t2oEqn7n.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-BJPDY9Ks.js";import"./FileInput-CeklueXK.js";import"./LakeButton-BLEdVG10.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-B0emFQdy.js";import"./index-DWeVdR1F.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-C4BtztKe.js";import"./useBoolean-DIv3-2nW.js";import"./i18n-CgHAweqt.js";import"./rifm-BL9hunKg.js";import"./utc-BLABpmqb.js";import"./array-BfAlyugE.js";import"./LakeAlert-BjF8erjg.js";import"./useResponsive-CbA82UXf.js";import"./Tag-CBln5SWE.js";import"./index-DVtii38k.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-D0-xCKII.js";import"./FocusTrap-C2HUOPTK.js";import"./Suspendable-B6HOWg-h.js";import"./ResponsiveContainer-5HGfLSfi.js";import"./TransitionView-B1FOrxm6.js";import"./useBodyClassName-CVuvJwtC.js";import"./Separator-BoTw3Vhn.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],q={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(d,{title:"UploadArea with several documents",children:r.jsx(l,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-C0ucGcuh.js.map
