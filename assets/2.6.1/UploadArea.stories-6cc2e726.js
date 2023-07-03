import{S as z,j as g,a as e}from"./Space-6d26d64b.js";import{U as o}from"./UploadArea-2b1a922d.js";import{r as f}from"./index-8db94870.js";import{S as u,a as r}from"./_StoriesComponents-d5642f21.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a023e010.js";import"./commonStyles-d52fedae.js";import"./LakeAlert-0ff45fd4.js";import"./Icon-be3f4c28.js";import"./Svg-4d5f70b1.js";import"./LakeButton-19fbe306.js";import"./Pressable-ec1343e5.js";import"./useMergeRefs-02efd9e3.js";import"./index-722457b4.js";import"./Tag-48d6089c.js";import"./index-022bb208.js";import"./LakeHeading-5993f395.js";import"./useBoolean-2c9e9a66.js";import"./index-1fc0ca9a.js";import"./i18n-af620f4a.js";import"./rifm-700d63bc.js";import"./dayjs.min-47c8dffe.js";import"./utc-f29c9968.js";const n=z.create({storyPart:{maxWidth:600}}),a=["application/pdf","image/png","image/jpeg"],ce={title:"Forms/UploadArea",component:o},c=({layout:t})=>g(u,{title:"UploadArea",description:"You check design with vertical and horizontal layout, you can edit it in 'Controls' panel. (Press A to open it)",children:[e(r,{title:"Default",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a})}),e(r,{title:"With custom icon",style:n.storyPart,children:e(o,{icon:"image-regular",layout:t,accept:a})}),e(r,{title:"With description",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,description:"Supported documents: .pdf, .png, .jpg"})}),e(r,{title:"With error",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,description:"Supported documents: .pdf, .png, .jpg",error:"This document is required"})}),e(r,{title:"Disabled",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,description:"Supported documents: .pdf, .png, .jpg",disabled:!0})})]}),l=({layout:t})=>g(u,{title:"UploadArea with one file",description:"Here is different file icons depending on file extension",children:[e(r,{title:"PDF",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:{name:"document.pdf",size:1e3,type:"application/pdf"}})}),e(r,{title:"PNG",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:{name:"document.png",size:1e3,type:"image/png"}})}),e(r,{title:"JPG",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:{name:"document.jpg",size:1e3,type:"image/jpeg"}})}),e(r,{title:"XLS",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:{name:"document.xls",size:1e3,type:"application/vnd.ms-excel"}})}),e(r,{title:"Unknown",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:{name:"document.unknown",size:1e3,type:"unknown"}})})]}),d=({layout:t})=>{const m=[{id:"1",name:"first-document.pdf",status:"finished"},{id:"2",name:"second-document.png",status:"finished"},{id:"3",name:"third-document.jpg",status:"finished"},{id:"4",name:"fourth-document.xls",status:"finished"},{id:"5",name:"last-document.png",progress:60,status:"uploading"}];return e(u,{title:"UploadArea with several documents",children:e(r,{title:"",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,documents:m})})})},p=({layout:t})=>{const[m,S]=f.useState([]),[R,P]=f.useState(),k=s=>{const y=s.map((i,M)=>({id:(new Date().getTime()+M).toString(),name:i.name,status:"finished"}));S(i=>[...i,...y])},O=s=>{S(y=>y.filter(i=>i.id!==s))},_=s=>{P(s[0])},W=()=>{P(void 0)};return g(u,{title:"Interactive UploadArea",description:"You can try to select files, drag and drop and remove selected files.",children:[e(r,{title:"With several documents",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,documents:m,onDropAccepted:k,onRemoveFile:O})}),e(r,{title:"With one file",style:n.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:R,onDropAccepted:_,onDropRejected:W})})]})};var A,h,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`({
  layout
}: StoryArgs) => {
  return <StoryBlock title="UploadArea" description="You check design with vertical and horizontal layout, you can edit it in 'Controls' panel. (Press A to open it)">
      <StoryPart title="Default" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} />
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
}`,...(D=(h=c.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var v,F,U;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`({
  layout
}: StoryArgs) => {
  return <StoryBlock title="UploadArea with one file" description="Here is different file icons depending on file extension">
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
}`,...(U=(F=l.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var T,C,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`({
  layout
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
      <StoryPart title="" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} documents={documents} />
      </StoryPart>
    </StoryBlock>;
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var w,x,j;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`({
  layout
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
      <StoryPart title="With several documents" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} documents={documents} onDropAccepted={addDocuments} onRemoveFile={removeDocument} />
      </StoryPart>

      <StoryPart title="With one file" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={file} onDropAccepted={selectFile} onDropRejected={removeFile} />
      </StoryPart>
    </StoryBlock>;
}`,...(j=(x=p.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const le=["Variations","WithOneFile","WithSeveralDocuments","Interactive"];export{p as Interactive,c as Variations,l as WithOneFile,d as WithSeveralDocuments,le as __namedExportsOrder,ce as default};
//# sourceMappingURL=UploadArea.stories-6cc2e726.js.map
