import{s as c,a as o,E as s,l as a}from"./Space-CO5JyqEy.js";import{F as l}from"./FilesUploader-C_ExEEgN.js";import{S as g,a as f}from"./_StoriesComponents-qADnHaId.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./FileInput-Cjzfx7io.js";import"./LakeButton-bZYypum-.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-CCWXgWvt.js";import"./index-CnjxK2kZ.js";import"./LakeHeading-C1fF1Uih.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./i18n-BrFA1a3r.js";import"./rifm-BblTD9EC.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./LakeAlert-DKvrFeKx.js";import"./Tag-BQ6pwmH2.js";import"./index-_Qlcd9NO.js";const S=c.create({storyPart:{maxWidth:600}}),v=["application/pdf","image/png","image/jpeg","image/svg+xml"],q={title:"Forms/FilesUploader",component:l};let t=0;const e=()=>{const m=[{id:String(++t),name:"first-document.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}},{id:String(++t),name:"second-document.png",statusInfo:{status:"Pending"}},{id:String(++t),name:"third-document.jpg",statusInfo:{status:"Refused",reason:"Quality of the document was too low"}},{id:String(++t),name:"fourth-document.xls",statusInfo:{status:"Uploaded"}},{id:String(++t),name:"last-document.png",statusInfo:{status:"Uploaded"}}];return o(g,{title:"UploadArea with several documents",children:o(f,{title:"",style:S.storyPart,children:o(l,{maxSize:2e7,icon:"document-regular",accept:v,initialFiles:m,getUploadConfig:()=>{},generateUpload:()=>s.value(a.Ok({id:String(++t),upload:{}})),onRemoveFile:()=>s.make(n=>{setTimeout(()=>n(a.Ok(void 0)),1e3)}),uploadFile:({onLoadStart:n,onProgress:r})=>s.make(p=>{n({loaded:0,total:1e3}),setTimeout(()=>r({loaded:100,total:1e3}),100),setTimeout(()=>r({loaded:600,total:1e3}),500),setTimeout(()=>{p(a.Ok(void 0))},1e3)}),formatAndSizeDescription:"20MB max"})})})};var i,d,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const H=["WithSeveralDocuments"];export{e as WithSeveralDocuments,H as __namedExportsOrder,q as default};
//# sourceMappingURL=FileUploader.stories-CK11PCjE.js.map
