import{j as r,s as p,aa as e,ab as a}from"./ScrollView-0Uwr25QJ.js";import{F as m}from"./FilesUploader-yYZf7U_J.js";import{S as l,a as d}from"./_StoriesComponents-CaE7mJQG.js";import"./iframe-BVG7Zmno.js";import"./index-Yb5yrVJw.js";import"./FileInput-2f-enkXT.js";import"./LakeButton-DQc7duge.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BePIqaqb.js";import"./index-C5tzorvF.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-BIN9Xbqe.js";import"./useBoolean-BFR4HKAX.js";import"./i18n-MwvxSyEO.js";import"./rifm-2cY-VqJy.js";import"./array-BfAlyugE.js";import"./LakeAlert-DUvJuFx8.js";import"./useResponsive-C8tQZ9FX.js";import"./Tag-DUS_KPPU.js";import"./index-Dt6VbPvn.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DFnd0auF.js";import"./FocusTrap-BrelZBuv.js";import"./Suspendable-Bv_Us0xo.js";import"./ResponsiveContainer-BCulqc8u.js";import"./TransitionView-CmMy3x_F.js";import"./useBodyClassName-BYTY_G0z.js";import"./Separator-Cs_oHo_l.js";const u=p.create({storyPart:{maxWidth:600}}),c=["application/pdf","image/png","image/jpeg","image/svg+xml"],V={title:"Forms/FilesUploader",component:m},U=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(l,{title:"UploadArea with several documents",children:r.jsx(d,{title:"",style:u.storyPart,children:r.jsx(m,{maxSize:2e7,icon:"document-regular",accept:c,initialFiles:U,getUploadConfig:()=>{},generateUpload:()=>e.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>e.make(o=>{setTimeout(()=>o(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:o})=>e.wait(1).tap(()=>o(.8)).flatMap(()=>e.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-C_qtlWBp.js.map
