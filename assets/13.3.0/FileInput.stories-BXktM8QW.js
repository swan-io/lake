import{j as e,s as d}from"./ScrollView-CQcklN0-.js";import{r as m}from"./iframe-Di-oVdt9.js";import{F as r}from"./FileInput-Row6_kVi.js";import{S as u,a as i}from"./_StoriesComponents-CmhGY0lR.js";import"./index-B-muNjWM.js";import"./preload-helper-D1IIBeq1.js";import"./LakeButton-BeCby6Jm.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-Bm8_VYMi.js";import"./index-CQul13NP.js";import"./extends-CF3RwP-h.js";import"./LakeHeading-DTk94aC7.js";import"./useBoolean-C-VKvKB8.js";import"./i18n-BOXLh9rP.js";import"./rifm-BztFd4d2.js";import"./array-BfAlyugE.js";import"./Separator-CYCAlPNA.js";const o=d.create({storyPart:{maxWidth:600}}),n=["application/pdf","image/png","image/jpeg","image/svg+xml"],z={title:"Forms/FileInput",component:r},s=({layout:t})=>e.jsxs(u,{title:"UploadArea",description:"You check design with vertical and horizontal layout, you can edit it in 'Controls' panel. (Press A to open it)",children:[e.jsx(i,{title:"Default",style:o.storyPart,children:e.jsx(r,{icon:"document-regular",layout:t,accept:n})}),e.jsx(i,{title:"With custom icon",style:o.storyPart,children:e.jsx(r,{icon:"image-regular",layout:t,accept:n})}),e.jsx(i,{title:"With description",style:o.storyPart,children:e.jsx(r,{icon:"document-regular",layout:t,accept:n,description:"Supported documents: .pdf, .png, .jpg"})}),e.jsx(i,{title:"With error",style:o.storyPart,children:e.jsx(r,{icon:"document-regular",layout:t,accept:n,description:"Supported documents: .pdf, .png, .jpg",error:"This document is required"})}),e.jsx(i,{title:"Disabled",style:o.storyPart,children:e.jsx(r,{icon:"document-regular",layout:t,accept:n,description:"Supported documents: .pdf, .png, .jpg",disabled:!0})})]}),y=new File([],"myDocument.pdf",{type:"application/pdf"}),S=new File([],"myDocument.xls",{type:"application/vnd.ms-excel"}),g=new File([],"myDocument.unknown",{type:"unknown"}),x=new File([new Blob(['<svg width="237" height="66" viewBox="0 0 237 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.10867 42.6541C8.98643 52.0835 15.976 58 26.9382 58C38.1173 58 45.7724 51.7989 45.7724 42.5551C45.7724 33.9054 41.092 30.3991 31.1963 28.3917C30.971 28.346 30.8396 28.3189 30.7081 28.2926C30.3755 28.2259 30.042 28.1637 28.1897 27.8165C20.6744 26.4076 18.3322 25.1922 18.3322 21.7793C18.3322 18.4547 21.5647 16.0978 26.6744 16.0978C31.9715 16.0978 34.9865 18.4017 35.5551 22.3692L35.6865 23.286H44.4603L44.3613 22.1267C43.6328 13.5941 36.4401 8 27.1141 8C16.8318 8 9.51127 13.5203 9.51127 21.7793C9.51127 30.074 13.9947 33.2687 24.0379 35.3609C24.1994 35.3945 24.2828 35.4121 24.3662 35.4294C24.5731 35.4724 24.7804 35.5138 26.1823 35.7948C34.3276 37.4276 36.8635 38.8239 36.8635 42.9058C36.8635 47.08 33.3757 49.8146 27.29 49.8146C21.1312 49.8146 17.7145 47.2948 17.0018 42.4011L16.8686 41.4867H8L8.10867 42.6541ZM151.459 56.6533H159.264V48.1861H151.459C143.403 48.1861 137.437 40.9322 137.437 32.338C137.437 23.8521 143.94 16.4673 152.668 16.4673C162.725 16.4673 168.649 21.643 168.649 30.2472V56.8311H177.147V30.2472C177.147 16.7012 167.188 8 152.668 8C138.981 8 128.938 19.4043 128.938 32.338C128.938 45.2781 138.295 56.6533 151.459 56.6533ZM228.339 27.1161C228.339 16.0448 221.062 8 210.166 8C204.399 8 199.531 10.3415 196.691 13.9669V9.33333H187.585V56.8333H196.691V28.6055C196.691 21.7296 201.785 16.619 208.491 16.619C214.599 16.619 219.559 21.1296 219.559 27.5541V56.8333H228.339V27.1161ZM87.848 21.6357L76.6672 56.8333H66.209L51.4051 9.33334H61.148L71.649 45.1564L83.1502 9.33334H92.5532L103.971 45.1565L114.556 9.33334H124.299L109.404 56.8333H98.9455L87.848 21.6357Z" fill="#14191A"/></svg>'])],"swanLogo.svg",{type:"image/svg+xml"}),c=({layout:t})=>{const[p,l]=m.useState(void 0);return e.jsxs(u,{title:"UploadArea with one file",description:"Here is different file icons depending on file extension",children:[e.jsx(i,{title:"Interactive",style:o.storyPart,children:e.jsx(r,{icon:"document-regular",layout:t,accept:n,value:p,onFiles:a=>void l(a[0]),onPressRemove:()=>l(void 0),maxSize:2e7,description:"20MB max"})}),e.jsx(i,{title:"Interactive (image only)",style:o.storyPart,children:e.jsx(r,{icon:"document-regular",layout:t,accept:n.filter(a=>a.startsWith("image/")),value:p,onFiles:a=>void l(a[0]),onPressRemove:()=>l(void 0),maxSize:2e7,description:"20MB max"})}),e.jsx(i,{title:"PDF",style:o.storyPart,children:e.jsx(r,{icon:"document-regular",layout:t,accept:n,value:y,maxSize:2e7,description:"20MB max"})}),e.jsx(i,{title:"SVG",style:o.storyPart,children:e.jsx(r,{icon:"document-regular",layout:t,accept:["image/svg+xml"],value:x,maxSize:2e7,description:"20MB max"})}),e.jsx(i,{title:"Controlled",style:o.storyPart,children:e.jsx(r,{icon:"image-regular",layout:t,accept:n,value:p,onFiles:a=>l(a[0]),maxSize:2e7,description:"20MB max"})}),e.jsx(i,{title:"XLS",style:o.storyPart,children:e.jsx(r,{icon:"document-regular",layout:t,accept:n,value:S,maxSize:2e7,description:"20MB max"})}),e.jsx(i,{title:"Unknown",style:o.storyPart,children:e.jsx(r,{icon:"document-regular",layout:t,accept:n,value:g,maxSize:2e7,description:"20MB max"})}),e.jsx(i,{title:"Dist file",style:o.storyPart,children:e.jsx(r,{icon:"document-regular",layout:t,accept:["image/png"],value:{url:"https://fakeimg.pl/500x300/?retina=true"},maxSize:2e7,description:"20MB max"})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Variations",props:{layout:{required:!0,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"WithOneFile",props:{layout:{required:!0,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  layout
}: StoryArgs) => {
  return <StoryBlock title="UploadArea" description="You check design with vertical and horizontal layout, you can edit it in 'Controls' panel. (Press A to open it)">
      <StoryPart title="Default" style={styles.storyPart}>
        <FileInput icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} />
      </StoryPart>

      <StoryPart title="With custom icon" style={styles.storyPart}>
        <FileInput icon="image-regular" layout={layout} accept={ACCEPTED_FORMATS} />
      </StoryPart>

      <StoryPart title="With description" style={styles.storyPart}>
        <FileInput icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} description="Supported documents: .pdf, .png, .jpg" />
      </StoryPart>

      <StoryPart title="With error" style={styles.storyPart}>
        <FileInput icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} description="Supported documents: .pdf, .png, .jpg" error="This document is required" />
      </StoryPart>

      <StoryPart title="Disabled" style={styles.storyPart}>
        <FileInput icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} description="Supported documents: .pdf, .png, .jpg" disabled={true} />
      </StoryPart>
    </StoryBlock>;
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  layout
}: StoryArgs) => {
  const [file, setFile] = useState<File | undefined>(undefined);
  return <StoryBlock title="UploadArea with one file" description="Here is different file icons depending on file extension">
      <StoryPart title="Interactive" style={styles.storyPart}>
        <FileInput icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={file} onFiles={files => void setFile(files[0])} onPressRemove={() => setFile(undefined)} maxSize={20_000_000} description={"20MB max"} />
      </StoryPart>

      <StoryPart title="Interactive (image only)" style={styles.storyPart}>
        <FileInput icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS.filter(item => item.startsWith("image/"))} value={file} onFiles={files => void setFile(files[0])} onPressRemove={() => setFile(undefined)} maxSize={20_000_000} description={"20MB max"} />
      </StoryPart>

      <StoryPart title="PDF" style={styles.storyPart}>
        <FileInput icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={PDF_FILE} maxSize={20_000_000} description={"20MB max"} />
      </StoryPart>

      <StoryPart title="SVG" style={styles.storyPart}>
        <FileInput icon="document-regular" layout={layout} accept={["image/svg+xml"]} value={SWAN_LOGO_SVG} maxSize={20_000_000} description={"20MB max"} />
      </StoryPart>

      <StoryPart title="Controlled" style={styles.storyPart}>
        <FileInput icon="image-regular" layout={layout} accept={ACCEPTED_FORMATS} value={file} onFiles={files => setFile(files[0])} maxSize={20_000_000} description={"20MB max"} />
      </StoryPart>

      <StoryPart title="XLS" style={styles.storyPart}>
        <FileInput icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={XLS_FILE} maxSize={20_000_000} description={"20MB max"} />
      </StoryPart>

      <StoryPart title="Unknown" style={styles.storyPart}>
        <FileInput icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} value={UNKNOWN_FILE} maxSize={20_000_000} description={"20MB max"} />
      </StoryPart>

      <StoryPart title="Dist file" style={styles.storyPart}>
        <FileInput icon="document-regular" layout={layout} accept={["image/png"]} value={{
        url: "https://fakeimg.pl/500x300/?retina=true"
      }} maxSize={20_000_000} description={"20MB max"} />
      </StoryPart>
    </StoryBlock>;
}`,...c.parameters?.docs?.source}}};const O=["Variations","WithOneFile"];export{s as Variations,c as WithOneFile,O as __namedExportsOrder,z as default};
//# sourceMappingURL=FileInput.stories-BXktM8QW.js.map
