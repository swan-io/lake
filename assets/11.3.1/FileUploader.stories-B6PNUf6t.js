import{j as r}from"./jsx-runtime-DT09rT5F.js";import{s as p,H as o,G as a}from"./ScrollView-BoCrTkEc.js";import{F as m}from"./FilesUploader-myk91sjU.js";import{S as d,a as l}from"./_StoriesComponents-BLlV-Q0j.js";import"./index-DXKZGL6g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BeFrmAzh.js";import"./FileInput-Bx5mSqgn.js";import"./LakeButton-Cs5zZhbT.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-F4uuO-P3.js";import"./index-B9iOX7Yo.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-axEHeQsr.js";import"./useBoolean-hauE57I1.js";import"./i18n-BqftwyaA.js";import"./rifm-D2YteQpd.js";import"./utc-BdCcOVEk.js";import"./array-BfAlyugE.js";import"./LakeAlert-QaL1gsCo.js";import"./useResponsive-6iDeDSbQ.js";import"./Tag-D7LuqrjP.js";import"./index-BH51n4Hn.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-D0_xPrGa.js";import"./FocusTrap-DDvJOAtm.js";import"./Suspendable-DRG3ow7X.js";import"./ResponsiveContainer--DEOKDQg.js";import"./TransitionView-C4NXOBjL.js";import"./useBodyClassName-CYzM7DM-.js";import"./Separator-BCHPcwA4.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],q={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(d,{title:"UploadArea with several documents",children:r.jsx(l,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-B6PNUf6t.js.map
