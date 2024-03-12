import{s as c,j as o,E as s,l as a}from"./Space-Bfex_hJx.js";import{F as l}from"./FilesUploader-CQ5VRkyT.js";import{S as g,a as f}from"./_StoriesComponents-BGHZFReg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./FileInput-D7cjzzCb.js";import"./LakeButton-DgMSOTHv.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-BgOPYjbo.js";import"./index-CYWflgUg.js";import"./LakeHeading-DZcX5sRZ.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./i18n-CbHmU6GW.js";import"./rifm-CVL2Q3jR.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./LakeAlert-C2IVsz--.js";import"./Tag-BaCsPH4E.js";import"./index-D1EpuBSR.js";const S=c.create({storyPart:{maxWidth:600}}),v=["application/pdf","image/png","image/jpeg","image/svg+xml"],W={title:"Forms/FilesUploader",component:l};let t=0;const e=()=>{const m=[{id:String(++t),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:String(++t),name:"second-document.png",statusInfo:{status:"Pending"}},{id:String(++t),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:String(++t),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:String(++t),name:"last-document.png",statusInfo:{status:"Uploaded"}}];return o.jsx(g,{title:"UploadArea with several documents",children:o.jsx(f,{title:"",style:S.storyPart,children:o.jsx(l,{maxSize:2e7,icon:"document-regular",accept:v,initialFiles:m,getUploadConfig:()=>{},generateUpload:()=>s.value(a.Ok({id:String(++t),upload:{}})),onRemoveFile:()=>s.make(n=>{setTimeout(()=>n(a.Ok(void 0)),1e3)}),uploadFile:({onLoadStart:n,onProgress:r})=>s.make(p=>{n({loaded:0,total:1e3}),setTimeout(()=>r({loaded:100,total:1e3}),100),setTimeout(()=>r({loaded:600,total:1e3}),500),setTimeout(()=>{p(a.Ok(void 0))},1e3)}),formatAndSizeDescription:"20MB max"})})})};e.__docgenInfo={description:"",methods:[],displayName:"WithSeveralDocuments"};var i,d,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const q=["WithSeveralDocuments"];export{e as WithSeveralDocuments,q as __namedExportsOrder,W as default};
//# sourceMappingURL=FileUploader.stories-CsznrGU8.js.map
