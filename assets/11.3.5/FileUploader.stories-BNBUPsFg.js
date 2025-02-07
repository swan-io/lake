import{j as r}from"./jsx-runtime-DT09rT5F.js";import{s as p,H as o,G as a}from"./ScrollView-DmQfgLfc.js";import{F as m}from"./FilesUploader-B1hyL0iP.js";import{S as d,a as l}from"./_StoriesComponents-B9HmSSEq.js";import"./index-DXKZGL6g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BlQSi2IU.js";import"./FileInput-b5LToCzV.js";import"./LakeButton-CVVSHUYx.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-qr-VC_qH.js";import"./index-BJTS7HPn.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-D5hgUnge.js";import"./useBoolean-hauE57I1.js";import"./i18n-CSSfE9Sx.js";import"./rifm-O4oTxRTM.js";import"./utc-D_eSGhSe.js";import"./array-BfAlyugE.js";import"./LakeAlert-BFtZVpOe.js";import"./useResponsive-6iDeDSbQ.js";import"./Tag-hIyzxUTJ.js";import"./index-BwY4x6i0.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DAlslLff.js";import"./FocusTrap-DNHrld98.js";import"./Suspendable-BjksFpPY.js";import"./ResponsiveContainer-CJ6uRWwm.js";import"./TransitionView-B8hXHfhO.js";import"./useBodyClassName-CYzM7DM-.js";import"./Separator-DsQMCOlS.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],q={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(d,{title:"UploadArea with several documents",children:r.jsx(l,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-BNBUPsFg.js.map
