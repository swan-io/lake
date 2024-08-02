import{$ as Ce,s as Cr,e as Xe,c as w,r as _r,d as Ae,g as Ge,C as Y,G as J,v as Ir,j as c,V as K,I as ce,S as Q,L as Oe,T as Tr,b as Ye}from"./ScrollView-izfwNnHL.js";import{L as Je}from"./LakeButton-BBcicEdY.js";import{L as Qe}from"./LakeHeading-D4HWT8Pm.js";import{c as Pr}from"./commonStyles-t4XfA7cz.js";import{u as kr}from"./useBoolean-DHW5baxv.js";import{r as f,R as Sr}from"./index-Cs7sjTYM.js";import{P as p}from"./index-D3ylJrlI.js";import{_ as W,a as q,b as Ze,c as er,t as Z,f as Rr}from"./i18n-jXAJjfpW.js";const zr=e=>{var t;const r=(t=e.split(".").pop())==null?void 0:t.toLowerCase();return Ce(r).returnType().with("png",()=>"lake-document-png").with("xls",()=>"lake-document-xls").with("pdf",()=>"lake-document-pdf").with("jpg",()=>"lake-document-jpg").otherwise(()=>"document-regular")};var Lr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function re(e,r){var t=Mr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Mr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),i=Lr.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var $r=[".DS_Store","Thumbs.db"];function Hr(e){return W(this,void 0,void 0,function(){return q(this,function(r){return fe(e)&&Br(e.dataTransfer)?[2,Nr(e.dataTransfer,e.type)]:Kr(e)?[2,Wr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,qr(e)]:[2,[]]})})}function Br(e){return fe(e)}function Kr(e){return fe(e)&&fe(e.target)}function fe(e){return typeof e=="object"&&e!==null}function Wr(e){return _e(e.target.files).map(function(r){return re(r)})}function qr(e){return W(this,void 0,void 0,function(){var r;return q(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return re(n)})]}})})}function Nr(e,r){return W(this,void 0,void 0,function(){var t,n;return q(this,function(i){switch(i.label){case 0:return e.items?(t=_e(e.items).filter(function(a){return a.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Ur))]):[3,2];case 1:return n=i.sent(),[2,rr(fr(n))];case 2:return[2,rr(_e(e.files).map(function(a){return re(a)}))]}})})}function rr(e){return e.filter(function(r){return $r.indexOf(r.name)===-1})}function _e(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Ur(e){if(typeof e.webkitGetAsEntry!="function")return tr(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?pr(r):tr(e)}function fr(e){return e.reduce(function(r,t){return Ze(Ze([],er(r),!1),er(Array.isArray(t)?fr(t):[t]),!1)},[])}function tr(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=re(r);return Promise.resolve(t)}function Vr(e){return W(this,void 0,void 0,function(){return q(this,function(r){return[2,e.isDirectory?pr(e):Xr(e)]})})}function pr(e){var r=e.createReader();return new Promise(function(t,n){var i=[];function a(){var u=this;r.readEntries(function(l){return W(u,void 0,void 0,function(){var g,x,O;return q(this,function(b){switch(b.label){case 0:if(l.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return g=b.sent(),t(g),[3,4];case 3:return x=b.sent(),n(x),[3,4];case 4:return[3,6];case 5:O=Promise.all(l.map(Vr)),i.push(O),a(),b.label=6;case 6:return[2]}})})},function(l){n(l)})}a()})}function Xr(e){return W(this,void 0,void 0,function(){return q(this,function(r){return[2,new Promise(function(t,n){e.file(function(i){var a=re(i,e.fullPath);t(a)},function(i){n(i)})})]})})}var Gr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),a=i.replace(/\/.*$/,"");return t.some(function(u){var l=u.trim().toLowerCase();return l.charAt(0)==="."?n.toLowerCase().endsWith(l):l.endsWith("/*")?a===l.replace(/\/.*$/,""):i===l})}return!0};function nr(e){return Qr(e)||Jr(e)||mr(e)||Yr()}function Yr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qr(e){if(Array.isArray(e))return Ie(e)}function or(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function ir(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?or(Object(t),!0).forEach(function(n){dr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):or(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function dr(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ee(e,r){return rt(e)||et(e,r)||mr(e,r)||Zr()}function Zr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mr(e,r){if(e){if(typeof e=="string")return Ie(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ie(e,r)}}function Ie(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function et(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,a=!1,u,l;try{for(t=t.call(e);!(i=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));i=!0);}catch(g){a=!0,l=g}finally{try{!i&&t.return!=null&&t.return()}finally{if(a)throw l}}return n}}function rt(e){if(Array.isArray(e))return e}var tt="file-invalid-type",nt="file-too-large",ot="file-too-small",it="too-many-files",at=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:tt,message:"File type must be ".concat(t)}},ar=function(r){return{code:nt,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},sr=function(r){return{code:ot,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},st={code:it,message:"Too many files"};function gr(e,r){var t=e.type==="application/x-moz-file"||Gr(e,r);return[t,t?null:at(r)]}function vr(e,r,t){if(R(e.size))if(R(r)&&R(t)){if(e.size>t)return[!1,ar(t)];if(e.size<r)return[!1,sr(r)]}else{if(R(r)&&e.size<r)return[!1,sr(r)];if(R(t)&&e.size>t)return[!1,ar(t)]}return[!0,null]}function R(e){return e!=null}function lt(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,a=e.multiple,u=e.maxFiles,l=e.validator;return!a&&r.length>1||a&&u>=1&&r.length>u?!1:r.every(function(g){var x=gr(g,t),O=ee(x,1),b=O[0],C=vr(g,n,i),_=ee(C,1),I=_[0],T=l?l(g):null;return b&&I&&!T})}function pe(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ue(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function lr(e){e.preventDefault()}function ct(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function ut(e){return e.indexOf("Edge/")!==-1}function ft(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return ct(e)||ut(e)}function E(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var i=arguments.length,a=new Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=arguments[u];return r.some(function(l){return!pe(n)&&l&&l.apply(void 0,[n].concat(a)),pe(n)})}}function pt(){return"showOpenFilePicker"in window}function dt(e){if(R(e)){var r=Object.entries(e).filter(function(t){var n=ee(t,2),i=n[0],a=n[1],u=!0;return yr(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),u=!1),(!Array.isArray(a)||!a.every(hr))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),u=!1),u}).reduce(function(t,n){var i=ee(n,2),a=i[0],u=i[1];return ir(ir({},t),{},dr({},a,u))},{});return[{description:"Files",accept:r}]}return e}function mt(e){if(R(e))return Object.entries(e).reduce(function(r,t){var n=ee(t,2),i=n[0],a=n[1];return[].concat(nr(r),[i],nr(a))},[]).filter(function(r){return yr(r)||hr(r)}).join(",")}function gt(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function vt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function yr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function hr(e){return/^.*\.[\w]+$/.test(e)}var yt=["children"],ht=["open"],bt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Dt=["refKey","onChange","onClick"];function wt(e){return Ft(e)||jt(e)||br(e)||xt()}function xt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ft(e){if(Array.isArray(e))return Te(e)}function Ee(e,r){return Et(e)||Ot(e,r)||br(e,r)||At()}function At(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function br(e,r){if(e){if(typeof e=="string")return Te(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Te(e,r)}}function Te(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ot(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,a=!1,u,l;try{for(t=t.call(e);!(i=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));i=!0);}catch(g){a=!0,l=g}finally{try{!i&&t.return!=null&&t.return()}finally{if(a)throw l}}return n}}function Et(e){if(Array.isArray(e))return e}function cr(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?cr(Object(t),!0).forEach(function(n){Pe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):cr(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Pe(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function de(e,r){if(e==null)return{};var t=Ct(e,r),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Ct(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var Se=f.forwardRef(function(e,r){var t=e.children,n=de(e,yt),i=wr(n),a=i.open,u=de(i,ht);return f.useImperativeHandle(r,function(){return{open:a}},[a]),Sr.createElement(f.Fragment,null,t(d(d({},u),{},{open:a})))});Se.displayName="Dropzone";var Dr={disabled:!1,getFilesFromEvent:Hr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Se.defaultProps=Dr;Se.propTypes={children:p.func,accept:p.objectOf(p.arrayOf(p.string)),multiple:p.bool,preventDropOnDocument:p.bool,noClick:p.bool,noKeyboard:p.bool,noDrag:p.bool,noDragEventsBubbling:p.bool,minSize:p.number,maxSize:p.number,maxFiles:p.number,disabled:p.bool,getFilesFromEvent:p.func,onFileDialogCancel:p.func,onFileDialogOpen:p.func,useFsAccessApi:p.bool,autoFocus:p.bool,onDragEnter:p.func,onDragLeave:p.func,onDragOver:p.func,onDrop:p.func,onDropAccepted:p.func,onDropRejected:p.func,onError:p.func,validator:p.func};var ke={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function wr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=d(d({},Dr),e),t=r.accept,n=r.disabled,i=r.getFilesFromEvent,a=r.maxSize,u=r.minSize,l=r.multiple,g=r.maxFiles,x=r.onDragEnter,O=r.onDragLeave,b=r.onDragOver,C=r.onDrop,_=r.onDropAccepted,I=r.onDropRejected,T=r.onFileDialogCancel,N=r.onFileDialogOpen,z=r.useFsAccessApi,U=r.autoFocus,L=r.preventDropOnDocument,v=r.noClick,P=r.noKeyboard,Re=r.noDrag,k=r.noDragEventsBubbling,me=r.onError,V=r.validator,X=f.useMemo(function(){return mt(t)},[t]),ze=f.useMemo(function(){return dt(t)},[t]),ge=f.useMemo(function(){return typeof N=="function"?N:ur},[N]),te=f.useMemo(function(){return typeof T=="function"?T:ur},[T]),D=f.useRef(null),A=f.useRef(null),xr=f.useReducer(_t,ke),Le=Ee(xr,2),ve=Le[0],j=Le[1],jr=ve.isFocused,Me=ve.isFileDialogActive,ne=f.useRef(typeof window<"u"&&window.isSecureContext&&z&&pt()),$e=function(){!ne.current&&Me&&setTimeout(function(){if(A.current){var s=A.current.files;s.length||(j({type:"closeDialog"}),te())}},300)};f.useEffect(function(){return window.addEventListener("focus",$e,!1),function(){window.removeEventListener("focus",$e,!1)}},[A,Me,te,ne]);var M=f.useRef([]),He=function(s){D.current&&D.current.contains(s.target)||(s.preventDefault(),M.current=[])};f.useEffect(function(){return L&&(document.addEventListener("dragover",lr,!1),document.addEventListener("drop",He,!1)),function(){L&&(document.removeEventListener("dragover",lr),document.removeEventListener("drop",He))}},[D,L]),f.useEffect(function(){return!n&&U&&D.current&&D.current.focus(),function(){}},[D,U,n]);var S=f.useCallback(function(o){me?me(o):console.error(o)},[me]),Be=f.useCallback(function(o){o.preventDefault(),o.persist(),se(o),M.current=[].concat(wt(M.current),[o.target]),ue(o)&&Promise.resolve(i(o)).then(function(s){if(!(pe(o)&&!k)){var m=s.length,y=m>0&&lt({files:s,accept:X,minSize:u,maxSize:a,multiple:l,maxFiles:g,validator:V}),F=m>0&&!y;j({isDragAccept:y,isDragReject:F,isDragActive:!0,type:"setDraggedFiles"}),x&&x(o)}}).catch(function(s){return S(s)})},[i,x,S,k,X,u,a,l,g,V]),Ke=f.useCallback(function(o){o.preventDefault(),o.persist(),se(o);var s=ue(o);if(s&&o.dataTransfer)try{o.dataTransfer.dropEffect="copy"}catch{}return s&&b&&b(o),!1},[b,k]),We=f.useCallback(function(o){o.preventDefault(),o.persist(),se(o);var s=M.current.filter(function(y){return D.current&&D.current.contains(y)}),m=s.indexOf(o.target);m!==-1&&s.splice(m,1),M.current=s,!(s.length>0)&&(j({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ue(o)&&O&&O(o))},[D,O,k]),oe=f.useCallback(function(o,s){var m=[],y=[];o.forEach(function(F){var G=gr(F,X),B=Ee(G,2),he=B[0],be=B[1],De=vr(F,u,a),le=Ee(De,2),we=le[0],xe=le[1],je=V?V(F):null;if(he&&we&&!je)m.push(F);else{var Fe=[be,xe];je&&(Fe=Fe.concat(je)),y.push({file:F,errors:Fe.filter(function(Er){return Er})})}}),(!l&&m.length>1||l&&g>=1&&m.length>g)&&(m.forEach(function(F){y.push({file:F,errors:[st]})}),m.splice(0)),j({acceptedFiles:m,fileRejections:y,type:"setFiles"}),C&&C(m,y,s),y.length>0&&I&&I(y,s),m.length>0&&_&&_(m,s)},[j,l,X,u,a,g,C,_,I,V]),ie=f.useCallback(function(o){o.preventDefault(),o.persist(),se(o),M.current=[],ue(o)&&Promise.resolve(i(o)).then(function(s){pe(o)&&!k||oe(s,o)}).catch(function(s){return S(s)}),j({type:"reset"})},[i,oe,S,k]),$=f.useCallback(function(){if(ne.current){j({type:"openDialog"}),ge();var o={multiple:l,types:ze};window.showOpenFilePicker(o).then(function(s){return i(s)}).then(function(s){oe(s,null),j({type:"closeDialog"})}).catch(function(s){gt(s)?(te(s),j({type:"closeDialog"})):vt(s)?(ne.current=!1,A.current?(A.current.value=null,A.current.click()):S(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):S(s)});return}A.current&&(j({type:"openDialog"}),ge(),A.current.value=null,A.current.click())},[j,ge,te,z,oe,S,ze,l]),qe=f.useCallback(function(o){!D.current||!D.current.isEqualNode(o.target)||(o.key===" "||o.key==="Enter"||o.keyCode===32||o.keyCode===13)&&(o.preventDefault(),$())},[D,$]),Ne=f.useCallback(function(){j({type:"focus"})},[]),Ue=f.useCallback(function(){j({type:"blur"})},[]),Ve=f.useCallback(function(){v||(ft()?setTimeout($,0):$())},[v,$]),H=function(s){return n?null:s},ye=function(s){return P?null:H(s)},ae=function(s){return Re?null:H(s)},se=function(s){k&&s.stopPropagation()},Fr=f.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=o.refKey,m=s===void 0?"ref":s,y=o.role,F=o.onKeyDown,G=o.onFocus,B=o.onBlur,he=o.onClick,be=o.onDragEnter,De=o.onDragOver,le=o.onDragLeave,we=o.onDrop,xe=de(o,bt);return d(d(Pe({onKeyDown:ye(E(F,qe)),onFocus:ye(E(G,Ne)),onBlur:ye(E(B,Ue)),onClick:H(E(he,Ve)),onDragEnter:ae(E(be,Be)),onDragOver:ae(E(De,Ke)),onDragLeave:ae(E(le,We)),onDrop:ae(E(we,ie)),role:typeof y=="string"&&y!==""?y:"presentation"},m,D),!n&&!P?{tabIndex:0}:{}),xe)}},[D,qe,Ne,Ue,Ve,Be,Ke,We,ie,P,Re,n]),Ar=f.useCallback(function(o){o.stopPropagation()},[]),Or=f.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=o.refKey,m=s===void 0?"ref":s,y=o.onChange,F=o.onClick,G=de(o,Dt),B=Pe({accept:X,multiple:l,type:"file",style:{display:"none"},onChange:H(E(y,ie)),onClick:H(E(F,Ar)),tabIndex:-1},m,A);return d(d({},B),G)}},[A,t,l,ie,n]);return d(d({},ve),{},{isFocused:jr&&!n,getRootProps:Fr,getInputProps:Or,rootRef:D,inputRef:A,open:H($)})}function _t(e,r){switch(r.type){case"focus":return d(d({},e),{},{isFocused:!0});case"blur":return d(d({},e),{},{isFocused:!1});case"openDialog":return d(d({},ke),{},{isFileDialogActive:!0});case"closeDialog":return d(d({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return d(d({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return d(d({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return d({},ke);default:return e}}function ur(){}const h=Cr.create({container:{backgroundColor:Xe.accented,borderWidth:1,borderColor:w.gray[200],borderStyle:"dashed",borderRadius:_r[8],padding:Ae[32],cursor:"pointer",alignItems:"center"},disabled:{cursor:"default",backgroundColor:Xe.default},horizontalContainer:{flexDirection:"row"},icon:{alignItems:"center",justifyContent:"center"},hoveredContainer:{boxShadow:Ge.tile},activeContainer:{borderColor:w.current[500],boxShadow:Ge.tile},browse:{color:w.current[500]},browseBlock:{flex:1},decorativeIconLeft:{position:"absolute",bottom:0,left:"50%",opacity:0,transform:"translateX(-50%) scale(0.6)",transitionProperty:"opacity, transform",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},decorativeIconLeftHovered:{opacity:.3,transform:"translateX(-50%) translateX(-24px) scale(0.6) rotate(-5deg)"},decorativeIconRight:{position:"absolute",bottom:0,left:"50%",opacity:0,transform:"translateX(-50%) scale(0.6)",transitionProperty:"opacity, transform",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},decorativeIconRightHovered:{opacity:.3,transform:"translateX(-50%) translateX(24px) scale(0.6) rotate(5deg)"},errorContainer:{borderColor:w.negative[500]},preview:{aspectRatio:16/5,width:"50%",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"},deleteButton:{position:"absolute",right:Ae[20],top:Ae[20]}}),It=({icon:e="document-regular",accept:r,value:t,disabled:n=!1,onPressRemove:i,onFiles:a,onError:u,layout:l="vertical",description:g,error:x,maxSize:O})=>{var L;const[b,C]=kr(!1),_=f.useMemo(()=>r.every(v=>v.startsWith("image/")),[r]),I=f.useMemo(()=>Ce(t).with(Y.nullish,()=>J.None()).with({url:Y.string},({url:v,name:P})=>J.Some({url:v,name:P??Ir.fromExecution(()=>new URL(v).pathname).getOr("untitled")})).with(Y.instanceOf(File),v=>J.Some({name:v.name,url:URL.createObjectURL(v)})).exhaustive(),[t]),{getRootProps:T,getInputProps:N,isDragActive:z,fileRejections:U}=wr({accept:r.reduce((v,P)=>({...v,[P]:[]}),{}),onDropAccepted:a,onDropRejected:u,disabled:n,maxSize:O});return c.jsx(K,{style:Pr.fill,children:c.jsx("div",{...T(),onMouseEnter:C.on,onMouseLeave:C.off,children:c.jsxs(K,{"aria-errormessage":x??((L=U[0])==null?void 0:L.errors.join(", ")),style:[h.container,n&&h.disabled,l==="horizontal"&&h.horizontalContainer,!n&&b&&h.hoveredContainer,z&&h.activeContainer,(x!=null||U.length>0)&&h.errorContainer],children:[c.jsx("input",{...N()}),Ce({file:I,isImageOnly:_}).with({file:J.Some(Y.select()),isImageOnly:!0},({url:v})=>c.jsxs(c.Fragment,{children:[c.jsx(K,{style:[h.preview,{backgroundImage:`url("${v}")`}]}),i!=null?c.jsx(Je,{mode:"tertiary",size:"small",icon:"delete-regular",color:"negative",onPress:i,style:h.deleteButton,ariaLabel:Z("common.remove")}):null]})).with({file:J.Some(Y.select()),isImageOnly:!1},({name:v})=>c.jsxs(c.Fragment,{children:[c.jsx(ce,{name:zr(v),size:48,color:n?w.gray[200]:w.current[500]}),c.jsx(Q,{width:l==="horizontal"?48:16,height:l==="horizontal"?48:16}),c.jsxs(K,{style:h.browseBlock,children:[c.jsx(Qe,{level:5,variant:"h5",align:l==="horizontal"?"left":"center",children:Z("fileInput.clickToModify")}),c.jsx(Q,{height:4}),c.jsx(Oe,{variant:"smallRegular",color:w.gray[200],align:l==="horizontal"?"left":"center",children:v})]}),i!=null?c.jsx(Je,{mode:"tertiary",size:"small",icon:"delete-regular",color:"negative",style:h.deleteButton,onPress:i,ariaLabel:Z("common.remove")}):null]})).otherwise(()=>c.jsxs(c.Fragment,{children:[c.jsxs(K,{style:h.icon,children:[c.jsx(ce,{name:e,size:48,color:n?w.gray[200]:w.current[500],style:[h.decorativeIconLeft,(z||b)&&h.decorativeIconLeftHovered]}),c.jsx(ce,{name:e,size:48,color:n?w.gray[200]:w.current[500],style:[h.decorativeIconRight,(z||b)&&h.decorativeIconRightHovered]}),c.jsx(ce,{name:e,size:48,color:n?w.gray[200]:w.current[500]})]}),c.jsx(Q,{width:l==="horizontal"?48:16,height:l==="horizontal"?48:16}),c.jsxs(K,{style:h.browseBlock,children:[c.jsx(Qe,{level:5,variant:"h5",align:l==="horizontal"?"left":"center",color:n?w.gray[200]:void 0,children:n?Z("fileInput.noFile"):Rr("fileInput.dropFile",{browse:c.jsx(Tr,{style:h.browse,children:Z("fileInput.browse")})})}),Ye(x)?c.jsxs(c.Fragment,{children:[c.jsx(Q,{height:4}),c.jsx(Oe,{color:w.negative[400],align:l==="horizontal"?"left":"center",children:x})]}):!n&&Ye(g)&&c.jsxs(c.Fragment,{children:[c.jsx(Q,{height:4}),c.jsx(Oe,{align:l==="horizontal"?"left":"center",children:g})]})]})]}))]})})})};It.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{accept:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"DistFile | File",elements:[{name:"signature",type:"object",raw:"{ url: string; name?: string }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!1}}]}},{name:"File"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},maxSize:{required:!1,tsType:{name:"number"},description:""},icon:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:'"document-regular"',computed:!1}},onFiles:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPressRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{It as F,zr as g};
//# sourceMappingURL=FileInput-Bp0yH3TC.js.map