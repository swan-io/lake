import{i as e}from"./preload-helper-CCSz8wUY.js";import{Bt as t,C as n,Et as r,J as i,O as a,R as o}from"./ScrollView-DE0BMcwD.js";import{n as s,t as c}from"./LakeLabel-DVy5LzXt.js";import{n as l,r as u,t as d}from"./_StoriesComponents-CdUzWrFP.js";import{n as f,t as p}from"./FilesUploader-CvbQebKO.js";var m,h,g,_,v,y,b;e((()=>{n(),s(),r(),f(),u(),m=i(),h=t.create({storyPart:{maxWidth:600}}),g=[`application/pdf`,`image/png`,`image/jpeg`,`image/svg+xml`],_={title:`Forms/FilesUploader`,component:p},v=[{id:crypto.randomUUID(),name:`first-document.pdf`,url:`https://swan.io`,statusInfo:{status:`Validated`}},{id:crypto.randomUUID(),name:`second-document.png`,statusInfo:{status:`Pending`}},{id:crypto.randomUUID(),name:`third-document.jpg`,statusInfo:{status:`Refused`,reasonCode:`Invalid document`}},{id:crypto.randomUUID(),name:`third-document.jpg`,statusInfo:{status:`Refused`,reasonCode:`Invalid document`,reason:`Quality of the document was too low`}},{id:crypto.randomUUID(),name:`fourth-document.xls`,statusInfo:{status:`Uploaded`}},{id:crypto.randomUUID(),name:`last-document.png`,statusInfo:{status:`Uploaded`}}],y=()=>(0,m.jsx)(d,{title:`UploadArea with several documents`,children:(0,m.jsx)(l,{title:``,style:h.storyPart,children:(0,m.jsx)(c,{label:`Documents`,render:e=>(0,m.jsx)(p,{id:e,maxSize:2e7,icon:`document-regular`,accept:g,initialFiles:v,getUploadConfig:()=>{},generateUpload:()=>a.value(o.Ok({id:crypto.randomUUID(),upload:{}})),onRemoveFile:()=>a.make(e=>{setTimeout(()=>e(o.Ok(void 0)),1e3)}),uploadFile:({onProgress:e})=>a.wait(1).tap(()=>e(.8)).flatMap(()=>a.wait(1200)).map(o.Ok),formatAndSizeDescription:`20MB max`})})})}),y.__docgenInfo={description:``,methods:[],displayName:`WithSeveralDocuments`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="UploadArea with several documents">
      <StoryPart title="" style={styles.storyPart}>
        <LakeLabel label="Documents" render={id => <FilesUploader id={id} maxSize={20_000_000} icon="document-regular" accept={ACCEPTED_FORMATS} initialFiles={documents} getUploadConfig={() => {}} generateUpload={() => Future.value(Result.Ok({
        id: crypto.randomUUID(),
        upload: {}
      }))} onRemoveFile={() => Future.make<Result<unknown, unknown>>(resolve => {
        setTimeout(() => resolve(Result.Ok(undefined)), 1_000);
      })} uploadFile={({
        onProgress
      }) => {
        return Future.wait(1).tap(() => onProgress(0.8)).flatMap(() => Future.wait(1200)).map(Result.Ok);
      }} formatAndSizeDescription={"20MB max"} />} />
      </StoryPart>
    </StoryBlock>;
}`,...y.parameters?.docs?.source}}},b=[`WithSeveralDocuments`]}))();export{y as WithSeveralDocuments,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=FileUploader.stories-DnJ_qqf_.js.map