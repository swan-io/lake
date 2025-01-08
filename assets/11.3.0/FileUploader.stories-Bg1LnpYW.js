import{j as r}from"./jsx-runtime-DT09rT5F.js";import{s as p,H as o,G as a}from"./ScrollView-C1yxRy16.js";import{F as m}from"./FilesUploader-DUZro9_-.js";import{S as d,a as l}from"./_StoriesComponents-BSXeOJ1Z.js";import"./index-DXKZGL6g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BeFrmAzh.js";import"./FileInput-DTyySg5U.js";import"./LakeButton-r-Uybfm2.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-to27AyJA.js";import"./index-BpljNV4n.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-CD0FHpfz.js";import"./useBoolean-hauE57I1.js";import"./i18n-B1T03nNU.js";import"./rifm-BpdKztb4.js";import"./utc-BdCcOVEk.js";import"./array-BfAlyugE.js";import"./LakeAlert-C-HsTrbB.js";import"./useResponsive-6iDeDSbQ.js";import"./Tag-KbOj3ibt.js";import"./index-VNGmZ7GH.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DXbrI9Ji.js";import"./FocusTrap-Cq0HuauR.js";import"./Suspendable-CKuscA2L.js";import"./ResponsiveContainer-WxURT3St.js";import"./TransitionView-Cm_7ViIn.js";import"./useBodyClassName-CYzM7DM-.js";import"./Separator-DMQr2iVh.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],q={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(d,{title:"UploadArea with several documents",children:r.jsx(l,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-Bg1LnpYW.js.map
