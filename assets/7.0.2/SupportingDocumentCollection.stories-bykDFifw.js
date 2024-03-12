import{n as qe,l as D,E as Q,$ as Ie,M as $,s as ve,K as Oe,j as E,a as n,N as H,k as Ve,S as _,F as ke,L as W,o as Ce}from"./Space-BLTJaWwn.js";import{r as c}from"./index-CBqU2yxZ.js";import{c as Ee}from"./commonStyles-t4XfA7cz.js";import{a as Z,L as j}from"./LakeButton-wG8bDZgp.js";import{L as _e}from"./LakeLabel-CduBs740.js";import{i as we,t as u,l as Re}from"./i18n-ZX9YLZYn.js";import{F as Fe}from"./FilesUploader-CuKHVoCF.js";import{L as ee}from"./LakeModal-CxWMavkR.js";import{S as q,a as I}from"./_StoriesComponents-B87UCnlK.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-CA_SvBOc.js";import"./index-DWV12n1u.js";import"./v4-D8aEg3BZ.js";import"./rifm-GpQEBoqm.js";import"./utc-DJvBpWoA.js";import"./array-rjEBP2Ry.js";import"./FileInput-DFAJaZ7T.js";import"./LakeHeading--4gGZOng.js";import"./useBoolean-B5BCxMq_.js";import"./index-D3ylJrlI.js";import"./LakeAlert-Bmq0taqI.js";import"./Tag-FhhH-RZC.js";import"./index-Gzpn0eiA.js";import"./FocusTrap-BekeliH_.js";import"./a11y-DXvpDVrG.js";import"./LoadingView-CVes_EP3.js";import"./ResponsiveContainer-DuPD8_dW.js";import"./TransitionView-CgiyVXp-.js";import"./useBodyClassName-FAgY5CgW.js";const N=c.memo(c.forwardRef(({style:e,onReset:t,onSubmit:o,...s},l)=>qe("form",{...s,ref:l,onReset:p=>{p.preventDefault(),t==null||t(p)},onSubmit:p=>{p.preventDefault(),o==null||o(p)},style:[Ee.view,e]})));N.displayName="Form";try{N.displayName="Form",N.__docgenInfo={description:"",displayName:"Form",props:{onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyDownCapture:{defaultValue:null,description:"",name:"onKeyDownCapture",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},onKeyUpCapture:{defaultValue:null,description:"",name:"onKeyUpCapture",required:!1,type:{name:"((event: NativeSyntheticEvent<KeyboardEvent<Element>>) => void)"}},tabIndex:{defaultValue:null,description:"Additional accessibility props",name:"tabIndex",required:!1,type:{name:"enum",value:[{value:"0"},{value:"-1"}]}},"aria-activedescendant":{defaultValue:null,description:`Aria props (additional, minus existants)
@see https://necolas.github.io/react-native-web/docs/accessibility
@see https://reactnative.dev/docs/accessibility#aria-valuemax`,name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-atomic":{defaultValue:null,description:"",name:"aria-atomic",required:!1,type:{name:"boolean"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"string"}},"aria-colcount":{defaultValue:null,description:"",name:"aria-colcount",required:!1,type:{name:"number"}},"aria-colindex":{defaultValue:null,description:"",name:"aria-colindex",required:!1,type:{name:"number"}},"aria-colspan":{defaultValue:null,description:"",name:"aria-colspan",required:!1,type:{name:"number"}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},"aria-current":{defaultValue:null,description:"",name:"aria-current",required:!1,type:{name:'boolean | "page" | "step" | "location" | "date" | "time"'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}},"aria-errormessage":{defaultValue:null,description:"",name:"aria-errormessage",required:!1,type:{name:"string"}},"aria-flowto":{defaultValue:null,description:"",name:"aria-flowto",required:!1,type:{name:"string"}},"aria-haspopup":{defaultValue:null,description:"",name:"aria-haspopup",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:"boolean"}},"aria-keyshortcuts":{defaultValue:null,description:"",name:"aria-keyshortcuts",required:!1,type:{name:"string"}},"aria-level":{defaultValue:null,description:"",name:"aria-level",required:!1,type:{name:"number"}},"aria-multiline":{defaultValue:null,description:"",name:"aria-multiline",required:!1,type:{name:"boolean"}},"aria-multiselectable":{defaultValue:null,description:"",name:"aria-multiselectable",required:!1,type:{name:"boolean"}},"aria-orientation":{defaultValue:null,description:"",name:"aria-orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},"aria-owns":{defaultValue:null,description:"",name:"aria-owns",required:!1,type:{name:"string"}},"aria-placeholder":{defaultValue:null,description:"",name:"aria-placeholder",required:!1,type:{name:"string"}},"aria-posinset":{defaultValue:null,description:"",name:"aria-posinset",required:!1,type:{name:"number"}},"aria-pressed":{defaultValue:null,description:"",name:"aria-pressed",required:!1,type:{name:"boolean"}},"aria-readonly":{defaultValue:null,description:"",name:"aria-readonly",required:!1,type:{name:"boolean"}},"aria-required":{defaultValue:null,description:"",name:"aria-required",required:!1,type:{name:"boolean"}},"aria-roledescription":{defaultValue:null,description:"",name:"aria-roledescription",required:!1,type:{name:"string"}},"aria-rowcount":{defaultValue:null,description:"",name:"aria-rowcount",required:!1,type:{name:"number"}},"aria-rowindex":{defaultValue:null,description:"",name:"aria-rowindex",required:!1,type:{name:"number"}},"aria-rowspan":{defaultValue:null,description:"",name:"aria-rowspan",required:!1,type:{name:"number"}},"aria-setsize":{defaultValue:null,description:"",name:"aria-setsize",required:!1,type:{name:"number"}},"aria-sort":{defaultValue:null,description:"",name:"aria-sort",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"ascending"'},{value:'"descending"'},{value:'"other"'}]}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"((event: FormEvent<HTMLElement>) => void)"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"((event: FormEvent<HTMLElement>) => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: View | null) => void) | RefObject<View> | null"}}}}}catch{}function De(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(De=function(){return!!e})()}function Y(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,R(e,t)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(e)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,s){return o.__proto__=s,o},R(e,t)}function F(e){var t=typeof Map=="function"?new Map:void 0;return F=function(o){if(o===null||!function(l){try{return Function.toString.call(l).indexOf("[native code]")!==-1}catch{return typeof l=="function"}}(o))return o;if(typeof o!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(o))return t.get(o);t.set(o,s)}function s(){return function(l,p,S){if(De())return Reflect.construct.apply(null,arguments);var g=[null];g.push.apply(g,p);var v=new(l.bind.apply(l,g));return S&&R(v,S.prototype),v}(o,arguments,G(this).constructor)}return s.prototype=Object.create(o.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),R(s,o)},F(e)}var Le=function(e){function t(){return e.apply(this,arguments)||this}return Y(t,e),t}(F(Error)),Ae=function(e){function t(){return e.apply(this,arguments)||this}return Y(t,e),t}(F(Error)),Ue=function(e){function t(){return e.apply(this,arguments)||this}return Y(t,e),t}(F(Error)),Te=function(e){return e.ok?D.Ok(e):D.Error(new Ue("Received HTTP status "+e.status))},Be={make:function(e){var t=e.url,o=e.method,s=o===void 0?"GET":o,l=e.responseType,p=e.body,S=e.headers,g=e.withCredentials,v=g!==void 0&&g,P=e.onLoadStart,w=e.onProgress,k=e.timeout;return Q.make(function(b){var r=new XMLHttpRequest;r.withCredentials=v,r.open(s,t,!0),l!=null&&(r.responseType=l),k!=null&&(r.timeout=k),S!=null&&Ie.entries(S).forEach(function(i){return r.setRequestHeader(i[0],i[1])});var d=function(){a(),b(D.Error(new Le))},f=function(){a(),b(D.Error(new Ae))},h=function(){a();var i=r.status,m=$.fromNullable(r.response);b(D.Ok({status:i,ok:i>=200&&i<300,response:m,xhr:r}))},a=function(){r.removeEventListener("error",d),r.removeEventListener("load",h),r.removeEventListener("timeout",f),P!=null&&r.removeEventListener("loadstart",P),w!=null&&r.removeEventListener("progress",w)};return r.addEventListener("error",d),r.addEventListener("load",h),r.addEventListener("timeout",f),P!=null&&r.addEventListener("loadstart",P),w!=null&&r.addEventListener("progress",w),r.send(p),function(){a(),r.abort()}})}};const xe=["application/pdf","image/png","image/jpeg"],K=ve.create({button:{opacity:1},buttonWithDefaultCursor:{opacity:1,cursor:"default"}}),z=e=>H(e).with({type:"tooltip"},({text:t,width:o})=>n(Ce,{content:t,width:o,togglableOnFocus:!0,placement:"right",children:n(j,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",disabled:!0,style:[K.button,K.buttonWithDefaultCursor],ariaLabel:u("supportingDocuments.help.whatIsThis")})})).with({type:"button"},({label:t,onPress:o})=>n(j,{mode:"tertiary",size:"small",color:"gray",icon:"question-circle-regular",onPress:o,style:K.button,ariaLabel:u("supportingDocuments.help.whatIsThis"),children:t})).exhaustive(),X=e=>{const t=`supportingDocuments.purpose.${e}`;return we(t)?u(t):e},J=e=>{const t=`supportingDocuments.purpose.${e}.description`;return we(t)?u(t):""},Me=({documents:e,generateUpload:t,requiredDocumentPurposes:o,templateLanguage:s=Re.language,status:l,onRemoveFile:p},S)=>{const[g,v]=c.useState(!1),[P,w]=c.useState(!1),k=c.useMemo(()=>{const r=new Set(o);e.forEach(a=>r.add(a.purpose));const d=new Map([...r].map(a=>{const i=e.filter(m=>m.purpose===a);return[a,i]})),f=new Set(o),h=new Map([...r].map(a=>{const i=d.get(a)??[],L=i.length>0&&i.every(C=>C.file.statusInfo.status==="Validated")?0:f.has(a)?1:2;return[a,L]}));return[...r].sort((a,i)=>{const m=h.get(a)??2;return(h.get(i)??2)>m?-1:1}).map(a=>{const i=d.get(a)??[];return{purpose:a,files:i.map(m=>m.file),isRequired:f.has(a),areAllDocumentsValidated:h.get(a)===0}})},[o,e]),b=c.useRef(new Map(Oe.filterMap(k,({isRequired:r,purpose:d,files:f})=>r?$.Some([d,f]):$.None())));return c.useImperativeHandle(S,()=>({areAllRequiredDocumentsFilled:()=>[...b.current.values()].every(d=>d.length>0)})),E(N,{children:[k.map(({purpose:r,files:d,areAllDocumentsValidated:f,isRequired:h})=>E(c.Fragment,{children:[n(_e,{label:X(r),help:H(r).with("PowerOfAttorney",()=>n(z,{type:"button",label:u("supportingDocuments.help.whatIsThis"),onPress:()=>v(!0)})).with("SwornStatement",()=>n(z,{type:"button",label:u("supportingDocuments.help.whatIsThis"),onPress:()=>w(!0)})).otherwise(()=>{const a=J(r);return Ve(a)?n(z,{type:"tooltip",text:a}):null}),render:()=>n(Fe,{canUpload:l==="WaitingForDocument"&&!f,accept:xe,maxSize:2e7,icon:"document-regular",initialFiles:d,generateUpload:t,getUploadConfig:a=>({fileName:a.name,purpose:r}),uploadFile:({upload:a,file:i,onLoadStart:m,onProgress:L})=>{const C=new FormData;return a.fields.forEach(({key:Pe,value:be})=>C.append(Pe,be)),C.append("file",i),Be.make({url:a.url,method:"POST",onLoadStart:m,onProgress:L,body:C}).mapOkToResult(Te)},formatAndSizeDescription:u("supportingDocuments.documentTypes",{maxSizeMB:2e7/1e6}),onRemoveFile:p,onChange:a=>{h&&b.current.set(r,a)}})}),n(_,{height:24})]},r)),o.length===0?E(ke,{children:[n(_,{height:24}),n(W,{children:u("supportingDocuments.noRequiredDocuments")}),n(_,{height:24})]}):null,E(ee,{visible:g,title:u("supportingDocuments.powerOfAttorneyModal.title"),icon:"document-regular",onPressClose:()=>v(!1),children:[n(W,{children:u("supportingDocuments.powerOfAttorneyModal.description")}),n(_,{height:16}),n(Z,{paddingBottom:0,children:n(j,{grow:!0,color:"current",onPress:()=>window.open(`/power-of-attorney-template/${H(s).with("fr",()=>"fr").with("de",()=>"de").with("es",()=>"es").otherwise(()=>"en")}.pdf`),children:u("supportingDocuments.downloadTemplate")})})]}),E(ee,{visible:P,title:u("supportingDocuments.purpose.SwornStatement"),icon:"document-regular",onPressClose:()=>w(!1),children:[n(W,{children:u("supportingDocuments.purpose.SwornStatement.description")}),n(_,{height:16}),n(Z,{paddingBottom:0,children:n(j,{grow:!0,color:"current",onPress:()=>window.open("/sworn-statement-template/es.pdf"),children:u("supportingDocuments.downloadTemplate")})})]})]})},y=c.forwardRef(Me);try{X.displayName="getSupportingDocumentPurposeLabel",X.__docgenInfo={description:"",displayName:"getSupportingDocumentPurposeLabel",props:{}}}catch{}try{J.displayName="getSupportingDocumentPurposeDescriptionLabel",J.__docgenInfo={description:"",displayName:"getSupportingDocumentPurposeDescriptionLabel",props:{}}}catch{}try{y.displayName="SupportingDocumentCollection",y.__docgenInfo={description:"",displayName:"SupportingDocumentCollection",props:{status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"WaitingForDocument"'},{value:'"PendingReview"'},{value:'"Approved"'},{value:'"Canceled"'},{value:'"Rejected"'}]}},generateUpload:{defaultValue:null,description:"",name:"generateUpload",required:!0,type:{name:"(input: UploadInput<I>) => Future<Result<UploadOutputWithId<UploadOutput>, unknown>>"}},documents:{defaultValue:null,description:"",name:"documents",required:!0,type:{name:"Document<I>[]"}},requiredDocumentPurposes:{defaultValue:null,description:"",name:"requiredDocumentPurposes",required:!0,type:{name:"I[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((documents: Document<I>[]) => void)"}},onRemoveFile:{defaultValue:null,description:"",name:"onRemoveFile",required:!1,type:{name:"((file: SwanFile) => Future<Result<unknown, unknown>>)"}},templateLanguage:{defaultValue:{value:"locale.language"},description:"",name:"templateLanguage",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"ForwardedRef<SupportingDocumentCollectionRef>"}}}}}catch{}const O=ve.create({storyPart:{maxWidth:600}}),vt={title:"Onboarding/SupportingDocumentCollection",component:y};let je=-1;const V=()=>Q.make(e=>{setTimeout(()=>{e(D.Ok({id:String(++je),upload:{url:window.location.href,fields:[]}}))},500)}),A=()=>{const[e,t]=c.useState([]);return n(q,{title:"SupportingDocument",description:"Supporting document collection",children:n(I,{title:"Default",style:O.storyPart,children:n(y,{status:"WaitingForDocument",generateUpload:V,documents:e,onChange:t,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"]})})})},U=()=>{const[e,t]=c.useState([{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}},{purpose:"SwornStatement",file:{id:"sworn",name:"SwornStatement.pdf",statusInfo:{status:"Uploaded"}}},{purpose:"PowerOfAttorney",file:{id:"power",name:"power.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}]);return n(q,{title:"SupportingDocument",description:"Supporting document collection",children:n(I,{title:"Default",style:O.storyPart,children:n(y,{status:"WaitingForDocument",generateUpload:V,documents:e,onChange:t,requiredDocumentPurposes:["ProofOfIdentity","SwornStatement","PowerOfAttorney","UnknownDocumentType"],onRemoveFile:()=>Q.make(o=>{setTimeout(()=>{o(D.Ok(void 0))},1e3)})})})})},T=()=>n(q,{title:"SupportingDocument",description:"Supporting document collection",children:n(I,{title:"Default",style:O.storyPart,children:n(y,{status:"PendingReview",generateUpload:V,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Pending"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),B=()=>n(q,{title:"SupportingDocument",description:"Supporting document collection",children:n(I,{title:"Default",style:O.storyPart,children:n(y,{status:"Approved",generateUpload:V,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),x=()=>n(q,{title:"SupportingDocument",description:"Supporting document collection",children:n(I,{title:"Default",style:O.storyPart,children:n(y,{status:"Approved",generateUpload:V,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",statusInfo:{status:"Validated"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})}),M=()=>n(q,{title:"SupportingDocument",description:"Supporting document collection",children:n(I,{title:"Default",style:O.storyPart,children:n(y,{status:"Rejected",generateUpload:V,documents:[{purpose:"ProofOfIdentity",file:{id:"id",name:"IdCard.pdf",url:"https://swan.io",statusInfo:{status:"Refused",reason:"Invalid document"}}}],requiredDocumentPurposes:["ProofOfIdentity"]})})});var te,ne,re;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} />
      </StoryPart>
    </StoryBlock>;
}`,...(re=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ae,ie;U.parameters={...U.parameters,docs:{...(oe=U.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [documents, setDocuments] = useState<Document<string>[]>([{
    purpose: "ProofOfIdentity",
    file: {
      id: "id",
      name: "IdCard.pdf",
      statusInfo: {
        status: "Validated"
      }
    }
  }, {
    purpose: "SwornStatement",
    file: {
      id: "sworn",
      name: "SwornStatement.pdf",
      statusInfo: {
        status: "Uploaded"
      }
    }
  }, {
    purpose: "PowerOfAttorney",
    file: {
      id: "power",
      name: "power.pdf",
      url: "https://swan.io",
      statusInfo: {
        status: "Refused",
        reason: "Invalid document"
      }
    }
  }]);
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection status="WaitingForDocument" generateUpload={generateUpload} documents={documents} onChange={setDocuments} requiredDocumentPurposes={["ProofOfIdentity", "SwornStatement", "PowerOfAttorney", "UnknownDocumentType"]} onRemoveFile={() => Future.make(resolve => {
        setTimeout(() => {
          resolve(Result.Ok(undefined));
        }, 1_000);
      })} />
      </StoryPart>
    </StoryBlock>;
}`,...(ie=(ae=U.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ue,se,le;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection status="PendingReview" generateUpload={generateUpload} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          url: "https://swan.io",
          statusInfo: {
            status: "Pending"
          }
        }
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...(le=(se=T.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var pe,de,ce;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection status="Approved" generateUpload={generateUpload} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          url: "https://swan.io",
          statusInfo: {
            status: "Validated"
          }
        }
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...(ce=(de=B.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,fe,ye;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection status="Approved" generateUpload={generateUpload} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          statusInfo: {
            status: "Validated"
          }
        }
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...(ye=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ge,he,Se;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection status="Rejected" generateUpload={generateUpload} documents={[{
        purpose: "ProofOfIdentity",
        file: {
          id: "id",
          name: "IdCard.pdf",
          url: "https://swan.io",
          statusInfo: {
            status: "Refused",
            reason: "Invalid document"
          }
        }
      }]} requiredDocumentPurposes={["ProofOfIdentity"]} />
      </StoryPart>
    </StoryBlock>;
}`,...(Se=(he=M.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};const wt=["WaitingForDocument","WaitingForDocumentWithApprovedAndRejected","Pending","Approved","ApprovedWithoutDownload","Rejected"];export{B as Approved,x as ApprovedWithoutDownload,T as Pending,M as Rejected,A as WaitingForDocument,U as WaitingForDocumentWithApprovedAndRejected,wt as __namedExportsOrder,vt as default};
//# sourceMappingURL=SupportingDocumentCollection.stories-bykDFifw.js.map
