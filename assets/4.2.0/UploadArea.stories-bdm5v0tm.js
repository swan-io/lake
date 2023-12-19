import{S as H,j as P,a as e}from"./Space-ImkcMIim.js";import{j as i}from"./Boxed-X5xMwKRs.js";import{U as o}from"./UploadArea-h96DIFmG.js";import{r as f}from"./index-4g5l5LRQ.js";import{S as g,a as n}from"./_StoriesComponents-NdmN1C35.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./commonStyles-fDEJ_OM7.js";import"./LakeButton-EkDPTC4Q.js";import"./Pressable-MDITAEu6.js";import"./index-0MnYVmN_.js";import"./LakeHeading-dDGPUhaC.js";import"./LoadingView-CbWruXID.js";import"./colors-34oHE9gw.js";import"./useBoolean-FxwQhC0M.js";import"./LakeAlert-g-dzNCEn.js";import"./Tag-UFOt6Sxr.js";import"./index-udVSLJHo.js";import"./i18n--6vfCdQ8.js";import"./rifm-Y_Gz021J.js";import"./utc-y0zBq2ZQ.js";import"./array-_tkD71ox.js";import"./index-tvtfaFq4.js";const r=H.create({storyPart:{maxWidth:600}}),a=["application/pdf","image/png","image/jpeg","image/svg+xml"],me={title:"Forms/UploadArea",component:o},m=({layout:t})=>P(g,{title:"UploadArea",description:"You check design with vertical and horizontal layout, you can edit it in 'Controls' panel. (Press A to open it)",children:[e(n,{title:"Default",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a})}),e(n,{title:"With custom icon",style:r.storyPart,children:e(o,{icon:"image-regular",layout:t,accept:a})}),e(n,{title:"With description",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,description:"Supported documents: .pdf, .png, .jpg"})}),e(n,{title:"With error",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,description:"Supported documents: .pdf, .png, .jpg",error:"This document is required"})}),e(n,{title:"Disabled",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,description:"Supported documents: .pdf, .png, .jpg",disabled:!0})})]}),I=new File([],"myDocument.pdf",{type:"application/pdf"}),V=new File([],"myDocument.xls",{type:"application/vnd.ms-excel"}),N=new File([],"myDocument.unknown",{type:"unknown"}),B=new File([new Blob(['<svg width="237" height="66" viewBox="0 0 237 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.10867 42.6541C8.98643 52.0835 15.976 58 26.9382 58C38.1173 58 45.7724 51.7989 45.7724 42.5551C45.7724 33.9054 41.092 30.3991 31.1963 28.3917C30.971 28.346 30.8396 28.3189 30.7081 28.2926C30.3755 28.2259 30.042 28.1637 28.1897 27.8165C20.6744 26.4076 18.3322 25.1922 18.3322 21.7793C18.3322 18.4547 21.5647 16.0978 26.6744 16.0978C31.9715 16.0978 34.9865 18.4017 35.5551 22.3692L35.6865 23.286H44.4603L44.3613 22.1267C43.6328 13.5941 36.4401 8 27.1141 8C16.8318 8 9.51127 13.5203 9.51127 21.7793C9.51127 30.074 13.9947 33.2687 24.0379 35.3609C24.1994 35.3945 24.2828 35.4121 24.3662 35.4294C24.5731 35.4724 24.7804 35.5138 26.1823 35.7948C34.3276 37.4276 36.8635 38.8239 36.8635 42.9058C36.8635 47.08 33.3757 49.8146 27.29 49.8146C21.1312 49.8146 17.7145 47.2948 17.0018 42.4011L16.8686 41.4867H8L8.10867 42.6541ZM151.459 56.6533H159.264V48.1861H151.459C143.403 48.1861 137.437 40.9322 137.437 32.338C137.437 23.8521 143.94 16.4673 152.668 16.4673C162.725 16.4673 168.649 21.643 168.649 30.2472V56.8311H177.147V30.2472C177.147 16.7012 167.188 8 152.668 8C138.981 8 128.938 19.4043 128.938 32.338C128.938 45.2781 138.295 56.6533 151.459 56.6533ZM228.339 27.1161C228.339 16.0448 221.062 8 210.166 8C204.399 8 199.531 10.3415 196.691 13.9669V9.33333H187.585V56.8333H196.691V28.6055C196.691 21.7296 201.785 16.619 208.491 16.619C214.599 16.619 219.559 21.1296 219.559 27.5541V56.8333H228.339V27.1161ZM87.848 21.6357L76.6672 56.8333H66.209L51.4051 9.33334H61.148L71.649 45.1564L83.1502 9.33334H92.5532L103.971 45.1565L114.556 9.33334H124.299L109.404 56.8333H98.9455L87.848 21.6357Z" fill="#14191A"/></svg>'])],"swanLogo.svg",{type:"image/svg+xml"}),y=({layout:t})=>{const[s,c]=f.useState(void 0);return P(g,{title:"UploadArea with one file",description:"Here is different file icons depending on file extension",children:[e(n,{title:"Interactive",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:s?i.Done(s):void 0,onDropAccepted:l=>void c(l[0]),onRemoveFile:()=>c(void 0)})}),e(n,{title:"PDF",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:i.Done(I)})}),e(n,{title:"SVG",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:i.Done(B)})}),e(n,{title:"Controlled",style:r.storyPart,children:e(o,{icon:"image-regular",layout:t,accept:a,value:s!=null?i.Done(s):i.NotAsked(),onDropAccepted:l=>c(l[0])})}),e(n,{title:"XLS",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:i.Done(V)})}),e(n,{title:"Unknown",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:i.Done(N)})})]})},S=({layout:t})=>{const s=[{id:"1",name:"first-document.pdf",status:"finished"},{id:"2",name:"second-document.png",status:"finished"},{id:"3",name:"third-document.jpg",status:"finished"},{id:"4",name:"fourth-document.xls",status:"finished"},{id:"5",name:"last-document.png",progress:60,status:"uploading"}];return e(g,{title:"UploadArea with several documents",children:e(n,{title:"",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,documents:s})})})},A=({layout:t})=>{const[s,c]=f.useState([]),[l,p]=f.useState(),k=d=>{const D=d.map((u,j)=>({id:(new Date().getTime()+j).toString(),name:u.name,status:"finished"}));c(u=>[...u,...D])},x=d=>{c(D=>D.filter(u=>u.id!==d))},h=d=>{p(d[0])},v=()=>{p(void 0)};return P(g,{title:"Interactive UploadArea",description:"You can try to select files, drag and drop and remove selected files.",children:[e(n,{title:"With several documents",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,documents:s,onDropAccepted:k,onRemoveDocument:x})}),e(n,{title:"With one file",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:l!=null?i.Done(l):void 0,onDropAccepted:h,onDropRejected:v,onRemoveFile:()=>p(void 0)})}),e(n,{title:"With one file",style:r.storyPart,children:e(o,{icon:"document-regular",layout:t,accept:a,value:l!=null?i.Done(l):i.NotAsked(),onDropAccepted:h,onDropRejected:v,onRemoveFile:()=>p(void 0)})})]})};var F,C,E;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`({
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
}`,...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var T,U,_;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`({
  layout
}: StoryArgs) => {
  const [file, setFile] = useState<File | undefined>(undefined);
  return <StoryBlock title="UploadArea with one file" description="Here is different file icons depending on file extension">
      <StoryPart title="Interactive" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={file ? AsyncData.Done(file) : undefined} onDropAccepted={file => void setFile(file[0])} onRemoveFile={() => setFile(undefined)} />
      </StoryPart>

      <StoryPart title="PDF" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={AsyncData.Done(PDF_FILE)} />
      </StoryPart>

      <StoryPart title="SVG" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={AsyncData.Done(SWAN_LOGO_SVG)} />
      </StoryPart>

      <StoryPart title="Controlled" style={styles.storyPart}>
        <UploadArea icon="image-regular" layout={layout} accept={ACCEPTED_FORMATS} value={file != null ? AsyncData.Done(file) : AsyncData.NotAsked()} onDropAccepted={files => setFile(files[0])} />
      </StoryPart>

      <StoryPart title="XLS" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={AsyncData.Done(XLS_FILE)} />
      </StoryPart>

      <StoryPart title="Unknown" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={AsyncData.Done(UNKNOWN_FILE)} />
      </StoryPart>
    </StoryBlock>;
}`,...(_=(U=y.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var R,w,L;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`({
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
}`,...(L=(w=S.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var O,W,M;A.parameters={...A.parameters,docs:{...(O=A.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} documents={documents} onDropAccepted={addDocuments} onRemoveDocument={removeDocument} />
      </StoryPart>

      <StoryPart title="With one file" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={file != null ? AsyncData.Done(file) : undefined} onDropAccepted={selectFile} onDropRejected={removeFile} onRemoveFile={() => setFile(undefined)} />
      </StoryPart>

      <StoryPart title="With one file" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={file != null ? AsyncData.Done(file) : AsyncData.NotAsked()} onDropAccepted={selectFile} onDropRejected={removeFile} onRemoveFile={() => setFile(undefined)} />
      </StoryPart>
    </StoryBlock>;
}`,...(M=(W=A.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};const ye=["Variations","WithOneFile","WithSeveralDocuments","Interactive"];export{A as Interactive,m as Variations,y as WithOneFile,S as WithSeveralDocuments,ye as __namedExportsOrder,me as default};
//# sourceMappingURL=UploadArea.stories-bdm5v0tm.js.map
