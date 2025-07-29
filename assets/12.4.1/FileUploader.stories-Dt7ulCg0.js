import{j as r,s as p,aa as e,ab as a}from"./ScrollView-BjhR-u8T.js";import{F as m}from"./FilesUploader-DIYMmNMW.js";import{S as l,a as d}from"./_StoriesComponents-CUF8cQle.js";import"./iframe-jomoq2Of.js";import"./index-tVMwUKc_.js";import"./FileInput-Ct1NPNv3.js";import"./LakeButton-BsyfILiT.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BIQUer04.js";import"./index-gOoFTIqf.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BVh3oSaq.js";import"./useBoolean-D80YXCkq.js";import"./i18n-gKGJYm_2.js";import"./rifm-DXtNc4gy.js";import"./array-BfAlyugE.js";import"./LakeAlert-DzAsrEj6.js";import"./useResponsive-BWwElsB7.js";import"./Tag-Aa0JvPRI.js";import"./index-D72lBWGk.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DQKLob7S.js";import"./FocusTrap-B0Y6qTs6.js";import"./Suspendable-DN3V93-U.js";import"./ResponsiveContainer-BWk1-quw.js";import"./TransitionView-CFqDYyYk.js";import"./useBodyClassName-Dtsmm-oK.js";import"./Separator-CeM92jSP.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],V={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(l,{title:"UploadArea with several documents",children:r.jsx(d,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-Dt7ulCg0.js.map
