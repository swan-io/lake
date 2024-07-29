import{s as p,j as o,N as r,v as n}from"./ScrollView-izfwNnHL.js";import{F as d}from"./FilesUploader-Cf7mfXN0.js";import{S as u,a as c}from"./_StoriesComponents-CXvL8-uz.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./FileInput-Bp0yH3TC.js";import"./LakeButton-BBcicEdY.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-DvrY7kJq.js";import"./index-B3mxFpDz.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-D4HWT8Pm.js";import"./useBoolean-DHW5baxv.js";import"./index-D3ylJrlI.js";import"./i18n-jXAJjfpW.js";import"./rifm-CrqH4R_S.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./LakeAlert-BqV2U_4E.js";import"./useResponsive-CzIqCC5v.js";import"./Tag-ukHvcdnL.js";import"./index-BghSdxzY.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-DrAOR1KK.js";import"./FocusTrap-DRBbmiQ4.js";import"./a11y-DXvpDVrG.js";import"./Suspendable-CEa026B_.js";import"./ResponsiveContainer-BUliQvwg.js";import"./TransitionView-D3fWtmj9.js";import"./useBodyClassName-DZ8fhoLd.js";const g=p.create({storyPart:{maxWidth:600}}),U=["application/pdf","image/png","image/jpeg","image/svg+xml"],G={title:"Forms/FilesUploader",component:d},v=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>o.jsx(u,{title:"UploadArea with several documents",children:o.jsx(c,{title:"",style:g.storyPart,children:o.jsx(d,{maxSize:2e7,icon:"document-regular",accept:U,initialFiles:v,getUploadConfig:()=>{},generateUpload:()=>r.value(n.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>r.make(e=>{setTimeout(()=>e(n.Ok(void 0)),1e3)}),uploadFile:({onLoadStart:e,onProgress:a})=>r.make(l=>{e({loaded:0,total:1e3}),setTimeout(()=>a({loaded:100,total:1e3}),100),setTimeout(()=>a({loaded:600,total:1e3}),500),setTimeout(()=>{l(n.Ok(void 0))},1e3)}),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
          onLoadStart(({
            loaded: 0,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>));
          setTimeout(() => onProgress(({
            loaded: 100,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>)), 100);
          setTimeout(() => onProgress(({
            loaded: 600,
            total: 1000
          } as ProgressEvent<XMLHttpRequestEventTarget>)), 500);
          setTimeout(() => {
            resolve(Result.Ok(undefined));
          }, 1_000);
        });
      }} formatAndSizeDescription={"20MB max"} />
      </StoryPart>
    </StoryBlock>;
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const J=["WithSeveralDocuments"];export{t as WithSeveralDocuments,J as __namedExportsOrder,G as default};
//# sourceMappingURL=FileUploader.stories-cdVuhIu9.js.map
