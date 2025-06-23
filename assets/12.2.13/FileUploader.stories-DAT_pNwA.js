import{j as r,s as p,aa as e,ab as a}from"./ScrollView-rpcy4Ntm.js";import{F as m}from"./FilesUploader-Cil4_poZ.js";import{S as l,a as d}from"./_StoriesComponents-kUG77bLi.js";import"./iframe-CZb_pTm6.js";import"./index-DWBrKOLN.js";import"./FileInput-BkN9Cg3_.js";import"./LakeButton-DMDRt9HC.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-dLj5GzUO.js";import"./index-Bnd0Vzw-.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BFLcWh3Q.js";import"./useBoolean-DE9o7JR6.js";import"./i18n-DC7-CeC2.js";import"./rifm-Cmtkq94G.js";import"./array-BfAlyugE.js";import"./LakeAlert-D7-Ikmo9.js";import"./useResponsive-BvdZnFNX.js";import"./Tag-Dh3ErjDu.js";import"./index-Cvhf7Voo.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DKBSM3UF.js";import"./FocusTrap-B7dAfXh9.js";import"./Suspendable-B4RLw8_w.js";import"./ResponsiveContainer-DJ4MQnBu.js";import"./TransitionView-BUujvhX0.js";import"./useBodyClassName-KxObRAPR.js";import"./Separator-CW0xnE3Z.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],V={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(l,{title:"UploadArea with several documents",children:r.jsx(d,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-DAT_pNwA.js.map
