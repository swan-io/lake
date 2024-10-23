import{j as o}from"./jsx-runtime-BlAj40OV.js";import{s as p,P as r,k as n}from"./ScrollView-C9Sl8l-9.js";import{F as d}from"./FilesUploader-HtW67Mpa.js";import{S as u,a as c}from"./_StoriesComponents--LS6DWDz.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./FileInput-BYwW3HSe.js";import"./LakeButton-92bu12CU.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-B-ndY5ns.js";import"./index-D9GDMxJ-.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-CR6cMtqT.js";import"./useBoolean-DHW5baxv.js";import"./index-D3ylJrlI.js";import"./i18n-wa0w1hPY.js";import"./rifm-Kh7ohp2j.js";import"./utc-Bb9NEY8r.js";import"./array-BfAlyugE.js";import"./LakeAlert-BKoYXZxE.js";import"./useResponsive-CzIqCC5v.js";import"./Tag-CIRiX2WR.js";import"./index-HmJNsiCB.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-Cmn2R1W6.js";import"./FocusTrap-B09dygKp.js";import"./Suspendable-DMtC6jeg.js";import"./ResponsiveContainer-CZKIyyuy.js";import"./TransitionView-BaZ6uvKi.js";import"./useBodyClassName-DMoYUPTW.js";const g=p.create({storyPart:{maxWidth:600}}),U=["application/pdf","image/png","image/jpeg","image/svg+xml"],G={title:"Forms/FilesUploader",component:d},f=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>o.jsx(u,{title:"UploadArea with several documents",children:o.jsx(c,{title:"",style:g.storyPart,children:o.jsx(d,{maxSize:2e7,icon:"document-regular",accept:U,initialFiles:f,getUploadConfig:()=>{},generateUpload:()=>r.value(n.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>r.make(e=>{setTimeout(()=>e(n.Ok(void 0)),1e3)}),uploadFile:({onLoadStart:e,onProgress:a})=>r.make(l=>{e({loaded:0,total:1e3}),setTimeout(()=>a({loaded:100,total:1e3}),100),setTimeout(()=>a({loaded:600,total:1e3}),500),setTimeout(()=>{l(n.Ok(void 0))},1e3)}),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <StoryBlock title="UploadArea with several documents">
      <StoryPart title="" style={styles.storyPart}>
        <FilesUploader maxSize={20_000_000} icon="document-regular" accept={ACCEPTED_FORMATS} initialFiles={documents} getUploadConfig={() => {}} generateUpload={() => Future.value(Result.Ok({
        id: crypto.randomUUID(),
        upload: {}
      }))} onRemoveFile={() => Future.make<Result<unknown, unknown>>(resolve => {
        setTimeout(() => resolve(Result.Ok(undefined)), 1_000);
      })} uploadFile={({
        onLoadStart,
        onProgress
      }) => {
        return Future.make<Result<unknown, unknown>>(resolve => {
          onLoadStart({
            loaded: 0,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>);
          setTimeout(() => onProgress({
            loaded: 100,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>), 100);
          setTimeout(() => onProgress({
            loaded: 600,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>), 500);
          setTimeout(() => {
            resolve(Result.Ok(undefined));
          }, 1_000);
        });
      }} formatAndSizeDescription={"20MB max"} />
      </StoryPart>
    </StoryBlock>;
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const J=["WithSeveralDocuments"];export{t as WithSeveralDocuments,J as __namedExportsOrder,G as default};
//# sourceMappingURL=FileUploader.stories-DigsSt6J.js.map
