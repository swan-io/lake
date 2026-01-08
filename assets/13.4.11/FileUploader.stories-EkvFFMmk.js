import{j as r,s as i,aa as o,ab as a}from"./ScrollView-DlV7UP2f.js";import{F as s}from"./FilesUploader-D2lSl52G.js";import{S as n,a as m}from"./_StoriesComponents-BXp2NtC4.js";import"./iframe-DmwPBJup.js";import"./preload-helper-D1IIBeq1.js";import"./index-GfeqKvVK.js";import"./FileInput-BFrbAbyB.js";import"./LakeButton-MroQ01lv.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BkBmTIkd.js";import"./index-BOGyPM1x.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-MSRRe1Lf.js";import"./useBoolean-XVOJibeb.js";import"./i18n-CWJgFvBb.js";import"./rifm-kTkhn01n.js";import"./array-BfAlyugE.js";import"./LakeAlert-BMjHJsxe.js";import"./useResponsive-toUNXPN4.js";import"./Tag-C5hur-bY.js";import"./index-BjKxlDC_.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-BNOCmvPl.js";import"./FocusTrap-0SiSaHPQ.js";import"./Suspendable-OixxMgJh.js";import"./ResponsiveContainer-DtPjHsgJ.js";import"./TransitionView-BOium6IX.js";import"./useBodyClassName-B171qeHB.js";import"./Separator-BGFpNFil.js";const p=i.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],N={title:"Forms/FilesUploader",component:s},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(s,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const Q=["WithSeveralDocuments"];export{t as WithSeveralDocuments,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=FileUploader.stories-EkvFFMmk.js.map
