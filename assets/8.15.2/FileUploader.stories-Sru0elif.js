import{s as p,j as o,N as r,v as n}from"./ScrollView-CnkSV7w6.js";import{F as d}from"./FilesUploader-BU0iPX7q.js";import{S as u,a as c}from"./_StoriesComponents-DbmhJPm-.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./FileInput-BH2nCKfq.js";import"./LakeButton-CC8Q2vJZ.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-BGOPdkuK.js";import"./index-Ckk5_94c.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-D1eov0F5.js";import"./useBoolean-DHW5baxv.js";import"./index-D3ylJrlI.js";import"./i18n-D43BJR72.js";import"./rifm-CYIyesWt.js";import"./utc-DJvBpWoA.js";import"./string-CfGb_hXU.js";import"./array-rjEBP2Ry.js";import"./LakeAlert-Dly2uCsx.js";import"./useResponsive-CzIqCC5v.js";import"./Tag-CoH4PIyY.js";import"./index-tMLA6eGL.js";import"./clipboard-BXAk6GqW.js";import"./LakeModal-l9hEWPia.js";import"./FocusTrap-fPGTEZsC.js";import"./a11y-DXvpDVrG.js";import"./Suspendable-BPrtu9_T.js";import"./ResponsiveContainer-DpHJNgNG.js";import"./TransitionView-CCVDrWcn.js";import"./useBodyClassName-DMoYUPTW.js";const g=p.create({storyPart:{maxWidth:600}}),U=["application/pdf","image/png","image/jpeg","image/svg+xml"],J={title:"Forms/FilesUploader",component:d},v=[{id:crypto.randomUUID(),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:crypto.randomUUID(),name:"second-document.png",statusInfo:{status:"Pending"}},{id:crypto.randomUUID(),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:crypto.randomUUID(),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:crypto.randomUUID(),name:"last-document.png",statusInfo:{status:"Uploaded"}}],t=()=>o.jsx(u,{title:"UploadArea with several documents",children:o.jsx(c,{title:"",style:g.storyPart,children:o.jsx(d,{maxSize:2e7,icon:"document-regular",accept:U,initialFiles:v,getUploadConfig:()=>{},generateUpload:()=>r.value(n.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>r.make(e=>{setTimeout(()=>e(n.Ok(void 0)),1e3)}),uploadFile:({onLoadStart:e,onProgress:a})=>r.make(l=>{e({loaded:0,total:1e3}),setTimeout(()=>a({loaded:100,total:1e3}),100),setTimeout(()=>a({loaded:600,total:1e3}),500),setTimeout(()=>{l(n.Ok(void 0))},1e3)}),formatAndSizeDescription:"20MB max"})})});t.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var s,i,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const K=["WithSeveralDocuments"];export{t as WithSeveralDocuments,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FileUploader.stories-Sru0elif.js.map
