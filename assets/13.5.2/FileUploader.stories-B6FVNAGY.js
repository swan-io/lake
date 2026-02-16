import{j as r,P as o,k as a,s}from"./ScrollView-BCLqv96g.js";import{F as i}from"./FilesUploader-1DKpdADM.js";import{S as n,a as m}from"./_StoriesComponents-D-2Oc5AH.js";import"./iframe-edXrO8F_.js";import"./preload-helper-D1IIBeq1.js";import"./index-Djf2DNB8.js";import"./FileInput-CKysG7JO.js";import"./LakeButton-CLhumrL5.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-Cf-f7nQp.js";import"./index-Bu4H-ZeP.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-zjdXLrT9.js";import"./useBoolean-MSiai3lE.js";import"./i18n-B4CA0_Hx.js";import"./rifm-kH6tkGPa.js";import"./array-BfAlyugE.js";import"./LakeAlert-CqtFRhuH.js";import"./useResponsive-chPjo5io.js";import"./Tag-B-JfUO04.js";import"./index-Ainu085I.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-CovzDzlH.js";import"./FocusTrap-DFR0ewV1.js";import"./Suspendable-BIOytuAd.js";import"./ResponsiveContainer-yiXIwCDf.js";import"./TransitionView-BX46r4tW.js";import"./useBodyClassName-wS_RvF-o.js";import"./Separator-CD9GLBkF.js";const p=s.create({storyPart:{maxWidth:600}}),l=["application/pdf","image/png","image/jpeg","image/svg+xml"],Q={title:"Forms/FilesUploader",component:i},d=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>r.jsx(n,{title:"UploadArea with several documents",children:r.jsx(m,{title:"",style:p.storyPart,children:r.jsx(i,{maxSize:2e7,icon:"document-regular",accept:l,initialFiles:d,getUploadConfig:()=>{},generateUpload:()=>o.value(a.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>o.make(e=>{setTimeout(()=>e(a.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>o.wait(1).tap(()=>e(.8)).flatMap(()=>o.wait(1200)).map(a.Ok),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploader.stories-B6FVNAGY.js.map
