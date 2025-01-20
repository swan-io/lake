import{j as r}from"./jsx-runtime-DT09rT5F.js";import{s as p,H as o,G as a}from"./ScrollView-uRWD7sHo.js";import{F as m}from"./FilesUploader-BqAvZ8yL.js";import{S as d,a as l}from"./_StoriesComponents-CfpM1uf7.js";import"./index-DXKZGL6g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CKeW-Qoz.js";import"./FileInput-B1Yluq2f.js";import"./LakeButton-DOM2fx1m.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-DcSKb_Ww.js";import"./index-oSnkc6z1.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-C3Pg1Dbb.js";import"./useBoolean-hauE57I1.js";import"./i18n-DF9xeZGk.js";import"./rifm-nPAvXYlH.js";import"./utc-BdCcOVEk.js";import"./array-BfAlyugE.js";import"./LakeAlert-DkaNLPus.js";import"./useResponsive-6iDeDSbQ.js";import"./Tag-C2ZZ_Ijz.js";import"./index-CMb-yCnL.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-C3OyQH2d.js";import"./FocusTrap-BTtxEFod.js";import"./Suspendable-DcBC6Bz-.js";import"./ResponsiveContainer-CE4Syk9F.js";import"./TransitionView-CHCst6-1.js";import"./useBodyClassName-CYzM7DM-.js";import"./Separator-Bs5w-fAv.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],q={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(d,{title:"UploadArea with several documents",children:r.jsx(l,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-Ba8VTxb4.js.map
