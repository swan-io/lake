import{S as G,a as P,j as e}from"./Space-f85095f8.js";import{U as r}from"./UploadArea-01aae647.js";import{r as F}from"./index-b9a8c83f.js";import{S as g,a as o}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Box-f4fbfbba.js";import"./commonStyles-d52fedae.js";import"./LakeAlert-09a14a7e.js";import"./LakeButton-e8594097.js";import"./Pressable-7e9fd84c.js";import"./useMergeRefs-56399732.js";import"./index-4daf2301.js";import"./Tag-8a96fdf5.js";import"./index-75f16835.js";import"./LakeHeading-8971a458.js";import"./useBoolean-2d821b14.js";import"./index-8d47fad6.js";import"./tslib.es6-ee154506.js";import"./i18n-077527d7.js";import"./rifm-86a8061c.js";import"./dayjs.min-f79c4412.js";import"./utc-0dcac8e9.js";const n=G.create({storyPart:{maxWidth:600}}),a=["application/pdf","image/png","image/jpeg"],pe={title:"Forms/UploadArea",component:r},u=({icon:i,disabled:s,layout:t,error:l,maxSize:c})=>P(g,{title:"UploadArea",description:"You check design with vertical and horizontal layout, you can edit it in 'Controls' panel. (Press A to open it)",children:[e(o,{title:"Default",style:n.storyPart,children:e(r,{icon:i,disabled:s,error:l,maxSize:c,layout:t,accept:a})}),e(o,{title:"With custom icon",style:n.storyPart,children:e(r,{icon:"image-regular",layout:t,accept:a})}),e(o,{title:"With description",style:n.storyPart,children:e(r,{icon:"document-regular",layout:t,accept:a,description:"Supported documents: .pdf, .png, .jpg"})}),e(o,{title:"With error",style:n.storyPart,children:e(r,{icon:"document-regular",layout:t,accept:a,description:"Supported documents: .pdf, .png, .jpg",error:"This document is required"})}),e(o,{title:"Disabled",style:n.storyPart,children:e(r,{icon:"document-regular",layout:t,accept:a,description:"Supported documents: .pdf, .png, .jpg",disabled:!0})})]}),m=({icon:i,disabled:s,layout:t,error:l,maxSize:c})=>P(g,{title:"UploadArea with one file",description:"Here is different file icons depending on file extension",children:[e(o,{title:"Default",style:n.storyPart,children:e(r,{icon:i,disabled:s,error:l,maxSize:c,layout:t,accept:a})}),e(o,{title:"PDF",style:n.storyPart,children:e(r,{icon:"document-regular",layout:t,accept:a,value:{name:"document.pdf",size:1e3,type:"application/pdf"}})}),e(o,{title:"PNG",style:n.storyPart,children:e(r,{icon:"document-regular",layout:t,accept:a,value:{name:"document.png",size:1e3,type:"image/png"}})}),e(o,{title:"JPG",style:n.storyPart,children:e(r,{icon:"document-regular",layout:t,accept:a,value:{name:"document.jpg",size:1e3,type:"image/jpeg"}})}),e(o,{title:"XLS",style:n.storyPart,children:e(r,{icon:"document-regular",layout:t,accept:a,value:{name:"document.xls",size:1e3,type:"application/vnd.ms-excel"}})}),e(o,{title:"Unknown",style:n.storyPart,children:e(r,{icon:"document-regular",layout:t,accept:a,value:{name:"document.unknown",size:1e3,type:"unknown"}})})]}),y=({icon:i,disabled:s,layout:t,error:l,maxSize:c})=>{const f=[{id:"1",name:"first-document.pdf",status:"finished"},{id:"2",name:"second-document.png",status:"finished"},{id:"3",name:"third-document.jpg",status:"finished"},{id:"4",name:"fourth-document.xls",status:"finished"},{id:"5",name:"last-document.png",progress:60,status:"uploading"}];return P(g,{title:"UploadArea with several documents",children:[e(o,{title:"Default",style:n.storyPart,children:e(r,{icon:i,disabled:s,error:l,maxSize:c,layout:t,accept:a})}),e(o,{title:"",style:n.storyPart,children:e(r,{icon:"document-regular",layout:t,accept:a,documents:f})})]})},S=({icon:i,disabled:s,layout:t,error:l,maxSize:c})=>{const[f,h]=F.useState([]),[k,D]=F.useState(),M=d=>{const A=d.map((p,I)=>({id:(new Date().getTime()+I).toString(),name:p.name,status:"finished"}));h(p=>[...p,...A])},b=d=>{h(A=>A.filter(p=>p.id!==d))},W=d=>{D(d[0])},B=()=>{D(void 0)};return P(g,{title:"Interactive UploadArea",description:"You can try to select files, drag and drop and remove selected files.",children:[e(o,{title:"Default",style:n.storyPart,children:e(r,{icon:i,disabled:s,error:l,maxSize:c,layout:t,accept:a})}),e(o,{title:"With several documents",style:n.storyPart,children:e(r,{icon:"document-regular",layout:t,accept:a,documents:f,onDropAccepted:M,onRemoveFile:b})}),e(o,{title:"With one file",style:n.storyPart,children:e(r,{icon:"document-regular",layout:t,accept:a,value:k,onDropAccepted:W,onDropRejected:B})})]})};var T,U,v;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`({
  icon,
  disabled,
  layout,
  error,
  maxSize
}: StoryArgs) => {
  return <StoryBlock title="UploadArea" description="You check design with vertical and horizontal layout, you can edit it in 'Controls' panel. (Press A to open it)">
      <StoryPart title="Default" style={styles.storyPart}>
        <UploadArea icon={icon} disabled={disabled} error={error} maxSize={maxSize} layout={layout} accept={ACCEPTED_FORMATS} />
      </StoryPart>

      <StoryPart title="With custom icon" style={styles.storyPart}>
        <UploadArea icon="image-regular" layout={layout} accept={ACCEPTED_FORMATS} />
      </StoryPart>

      <StoryPart title="With description" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} description="Supported documents: .pdf, .png, .jpg" />
      </StoryPart>

      <StoryPart title="With error" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} description="Supported documents: .pdf, .png, .jpg" error="This document is required" />
      </StoryPart>

      <StoryPart title="Disabled" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} description="Supported documents: .pdf, .png, .jpg" disabled={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(v=(U=u.parameters)==null?void 0:U.docs)==null?void 0:v.source}}};var C,E,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`({
  icon,
  disabled,
  layout,
  error,
  maxSize
}: StoryArgs) => {
  return <StoryBlock title="UploadArea with one file" description="Here is different file icons depending on file extension">
      <StoryPart title="Default" style={styles.storyPart}>
        <UploadArea icon={icon} disabled={disabled} error={error} maxSize={maxSize} layout={layout} accept={ACCEPTED_FORMATS} />
      </StoryPart>

      <StoryPart title="PDF" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS}
      // @ts-expect-error we don't need more field for UploadArea
      value={{
        name: "document.pdf",
        size: 1000,
        type: "application/pdf"
      }} />
      </StoryPart>

      <StoryPart title="PNG" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS}
      // @ts-expect-error we don't need more field for UploadArea
      value={{
        name: "document.png",
        size: 1000,
        type: "image/png"
      }} />
      </StoryPart>

      <StoryPart title="JPG" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS}
      // @ts-expect-error we don't need more field for UploadArea
      value={{
        name: "document.jpg",
        size: 1000,
        type: "image/jpeg"
      }} />
      </StoryPart>

      <StoryPart title="XLS" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS}
      // @ts-expect-error we don't need more field for UploadArea
      value={{
        name: "document.xls",
        size: 1000,
        type: "application/vnd.ms-excel"
      }} />
      </StoryPart>

      <StoryPart title="Unknown" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS}
      // @ts-expect-error we don't need more field for UploadArea
      value={{
        name: "document.unknown",
        size: 1000,
        type: "unknown"
      }} />
      </StoryPart>
    </StoryBlock>;
}`,...(x=(E=m.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var z,w,R;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`({
  icon,
  disabled,
  layout,
  error,
  maxSize
}: StoryArgs) => {
  const documents: UploadFileStatus[] = [{
    id: "1",
    name: "first-document.pdf",
    status: "finished"
  }, {
    id: "2",
    name: "second-document.png",
    status: "finished"
  }, {
    id: "3",
    name: "third-document.jpg",
    status: "finished"
  }, {
    id: "4",
    name: "fourth-document.xls",
    status: "finished"
  }, {
    id: "5",
    name: "last-document.png",
    progress: 60,
    status: "uploading"
  }];
  return <StoryBlock title="UploadArea with several documents">
      <StoryPart title="Default" style={styles.storyPart}>
        <UploadArea icon={icon} disabled={disabled} error={error} maxSize={maxSize} layout={layout} accept={ACCEPTED_FORMATS} />
      </StoryPart>

      <StoryPart title="" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} documents={documents} />
      </StoryPart>
    </StoryBlock>;
}`,...(R=(w=y.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var O,_,j;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`({
  icon,
  disabled,
  layout,
  error,
  maxSize
}: StoryArgs) => {
  const [documents, setDocuments] = useState<UploadFileStatus[]>([]);
  const [file, setFile] = useState<File>();
  const addDocuments = (files: File[]) => {
    const newDocuments: UploadFileStatus[] = files.map((file, index) => ({
      id: (new Date().getTime() + index).toString(),
      name: file.name,
      status: "finished"
    }));
    setDocuments(currentDocuments => [...currentDocuments, ...newDocuments]);
  };
  const removeDocument = (fileId: string) => {
    setDocuments(currentDocuments => currentDocuments.filter(d => d.id !== fileId));
  };
  const selectFile = (files: File[]) => {
    setFile(files[0]);
  };
  const removeFile = () => {
    setFile(undefined);
  };
  return <StoryBlock title="Interactive UploadArea" description="You can try to select files, drag and drop and remove selected files.">
      <StoryPart title="Default" style={styles.storyPart}>
        <UploadArea icon={icon} disabled={disabled} error={error} maxSize={maxSize} layout={layout} accept={ACCEPTED_FORMATS} />
      </StoryPart>

      <StoryPart title="With several documents" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} documents={documents} onDropAccepted={addDocuments} onRemoveFile={removeDocument} />
      </StoryPart>

      <StoryPart title="With one file" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={file} onDropAccepted={selectFile} onDropRejected={removeFile} />
      </StoryPart>
    </StoryBlock>;
}`,...(j=(_=S.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const ue=["Variations","WithOneFile","WithSeveralDocuments","Interactive"];export{S as Interactive,u as Variations,m as WithOneFile,y as WithSeveralDocuments,ue as __namedExportsOrder,pe as default};
//# sourceMappingURL=UploadArea.stories-a293c7c2.js.map
