import{j as r,P as o,k as a,s}from"./ScrollView-BJyiQezG.js";import{F as i}from"./FilesUploader-CaBWZH-w.js";import{S as n,a as m}from"./_StoriesComponents-CiQ8LbFJ.js";import"./iframe-NS7lph5a.js";import"./preload-helper-D1IIBeq1.js";import"./index-qYDG3cyQ.js";import"./FileInput-CvZcMO8u.js";import"./LakeButton-D8g_-Z27.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-Ds9LkmsG.js";import"./index-jGP6wa5-.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-y1780iEA.js";import"./useBoolean-BRix8BgL.js";import"./i18n-B6DRiK_9.js";import"./rifm-BDbjlRYm.js";import"./array-BfAlyugE.js";import"./LakeAlert-CfXVuhiJ.js";import"./useResponsive-CfPgX1IN.js";import"./Tag-B5yZva_i.js";import"./index-Utm4Qly2.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DwZTBJMm.js";import"./FocusTrap-DkFAvxYr.js";import"./Suspendable-DshhS3ju.js";import"./ResponsiveContainer-oGSN-DKl.js";import"./TransitionView-BpijBGae.js";import"./useBodyClassName-W8A60Jmu.js";import"./Separator--nplzSjJ.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const V=["WithSeveralDocuments"];export{t as WithSeveralDocuments,V as __namedExportsOrder,Q as default};
//# sourceMappingURL=FileUploader.stories-aT3ExRVo.js.map
