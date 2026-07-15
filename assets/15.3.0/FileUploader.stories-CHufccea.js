import{i as e}from"./preload-helper-B45gAKPr.js";import{C as t,D as n,E as r,U as i,ht as a,kt as o}from"./ScrollView-CEguXzeH.js";import{n as s,r as c,t as l}from"./_StoriesComponents-DhCpk55O.js";import{n as u,t as d}from"./FilesUploader-C1BG20Jl.js";var f,p,m,h,g,_,v;e((()=>{r(),a(),u(),c(),f=i(),p=o.create({storyPart:{maxWidth:600}}),m=[`application/pdf`,`image/png`,`image/jpeg`,`image/svg+xml`],h={title:`Forms/FilesUploader`,component:d},g=[{id:crypto.randomUUID(),name:`first-document.pdf`,url:`https://swan.io`,statusInfo:{status:`Validated`}},{id:crypto.randomUUID(),name:`second-document.png`,statusInfo:{status:`Pending`}},{id:crypto.randomUUID(),name:`third-document.jpg`,statusInfo:{status:`Refused`,reasonCode:`Invalid document`}},{id:crypto.randomUUID(),name:`third-document.jpg`,statusInfo:{status:`Refused`,reasonCode:`Invalid document`,reason:`Quality of the document was too low`}},{id:crypto.randomUUID(),name:`fourth-document.xls`,statusInfo:{status:`Uploaded`}},{id:crypto.randomUUID(),name:`last-document.png`,statusInfo:{status:`Uploaded`}}],_=()=>(0,f.jsx)(l,{title:`UploadArea with several documents`,children:(0,f.jsx)(s,{title:``,style:p.storyPart,children:(0,f.jsx)(d,{maxSize:2e7,icon:`document-regular`,accept:m,initialFiles:g,getUploadConfig:()=>{},generateUpload:()=>t.value(n.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>t.make(e=>{setTimeout(()=>e(n.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>t.wait(1).tap(()=>e(.8)).flatMap(()=>t.wait(1200)).map(n.Ok),formatAndSizeDescription:`20MB max`})})}),_.__docgenInfo={description:``,methods:[],displayName:`WithSeveralDocuments`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v=[`WithSeveralDocuments`]}))();export{_ as WithSeveralDocuments,v as __namedExportsOrder,h as default};
//# sourceMappingURL=FileUploader.stories-CHufccea.js.map