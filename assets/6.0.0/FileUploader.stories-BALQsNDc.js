import{s as c,a as o}from"./Space-6ory0zX9.js";import{P as s,k as a}from"./Boxed-zE7Q22Jk.js";import{F as l}from"./FilesUploader-tTF6FJ1y.js";import{S as g,a as f}from"./_StoriesComponents-Db1Tgk4U.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./commonStyles-DR_W_1_d.js";import"./FileInput-BKac0LL2.js";import"./LakeButton-CnXQc1OV.js";import"./Pressable-BcjdNqwD.js";import"./index-B0ySoFFr.js";import"./LakeHeading-C5gJEMAN.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./i18n-vSEX3wdW.js";import"./rifm-BHFypX9W.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./LakeAlert-wN1a8NEp.js";import"./Tag-DmgFlHSl.js";import"./index-CE0AMyVX.js";const S=c.create({storyPart:{maxWidth:600}}),v=["application/pdf","image/png","image/jpeg","image/svg+xml"],H={title:"Forms/FilesUploader",component:l};let t=0;const e=()=>{const m=[{id:String(++t),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:String(++t),name:"second-document.png",statusInfo:{status:"Pending"}},{id:String(++t),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:String(++t),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:String(++t),name:"last-document.png",statusInfo:{status:"Uploaded"}}];return o(g,{title:"UploadArea with several documents",children:o(f,{title:"",style:S.storyPart,children:o(l,{maxSize:2e7,icon:"document-regular",accept:v,initialFiles:m,getUploadConfig:()=>{},generateUpload:()=>s.value(a.Ok({id:String(++t),upload:{}})),onRemoveFile:()=>s.make(n=>{setTimeout(()=>n(a.Ok(void 0)),1e3)}),uploadFile:({onLoadStart:n,onProgress:r})=>s.make(p=>{n({loaded:0,total:1e3}),setTimeout(()=>r({loaded:100,total:1e3}),100),setTimeout(()=>r({loaded:600,total:1e3}),500),setTimeout(()=>{p(a.Ok(void 0))},1e3)}),formatAndSizeDescription:"20MB max"})})})};var i,d,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const documents: SwanFile[] = [{
    id: String(++idCounter),
    name: "first-document.pdf",
    url: "https://swan.io",
    statusInfo: {
      status: "Validated"
    }
  }, {
    id: String(++idCounter),
    name: "second-document.png",
    statusInfo: {
      status: "Pending"
    }
  }, {
    id: String(++idCounter),
    name: "third-document.jpg",
    statusInfo: {
      status: "Refused",
      reason: "Quality of the document was too low"
    }
  }, {
    id: String(++idCounter),
    name: "fourth-document.xls",
    statusInfo: {
      status: "Uploaded"
    }
  }, {
    id: String(++idCounter),
    name: "last-document.png",
    statusInfo: {
      status: "Uploaded"
    }
  }];
  return <StoryBlock title="UploadArea with several documents">
      <StoryPart title="" style={styles.storyPart}>
        <FilesUploader maxSize={20_000_000} icon="document-regular" accept={ACCEPTED_FORMATS} initialFiles={documents} getUploadConfig={() => {}} generateUpload={() => Future.value(Result.Ok({
        id: String(++idCounter),
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const W=["WithSeveralDocuments"];export{e as WithSeveralDocuments,W as __namedExportsOrder,H as default};
//# sourceMappingURL=FileUploader.stories-BALQsNDc.js.map
