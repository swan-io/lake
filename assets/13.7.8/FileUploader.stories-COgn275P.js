import{j as r,P as o,k as a,s}from"./ScrollView-DK7zeyCM.js";import{F as i}from"./FilesUploader-C5x_xiKV.js";import{S as n,a as m}from"./_StoriesComponents-BwNOiO4p.js";import"./iframe-BSuJv5nQ.js";import"./preload-helper-D1IIBeq1.js";import"./index-CDNViEuF.js";import"./FileInput-Nf7j2si7.js";import"./LakeButton-B66PieaK.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-nQH3GoxD.js";import"./index-BkUWTzVL.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-Crw1mz8Z.js";import"./useBoolean-pWYEBBKb.js";import"./i18n-DiHB-smJ.js";import"./rifm-DOlQm19X.js";import"./array-BfAlyugE.js";import"./LakeAlert-CQdnQI-t.js";import"./useResponsive-DiXzEPh3.js";import"./Tag-BNKSXfBt.js";import"./index-BXhLND-r.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DnpywoNn.js";import"./FocusTrap-DCcxkd-6.js";import"./Suspendable-CbD2W5YC.js";import"./ResponsiveContainer-DsxY-1gM.js";import"./TransitionView-BIru32ci.js";import"./useBodyClassName-Bo77_etM.js";import"./Separator-e32Grsez.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-COgn275P.js.map
