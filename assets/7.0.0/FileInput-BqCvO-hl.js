import{N as Ce,s as Ir,e as Ge,c as k,r as Pr,d as Oe,h as Je,v as J,M as Q,l as Sr,a as d,V as W,j as _,F as Z,I as fe,S as ee,L as _e,T as Tr,i as Qe}from"./Space-DOX6gAiW.js";import{L as Ze}from"./LakeButton-B3KFTJp0.js";import{L as er}from"./LakeHeading-Q9AaP0MD.js";import{c as Rr}from"./commonStyles-t4XfA7cz.js";import{u as zr}from"./useBoolean-B5BCxMq_.js";import{r as s,R as Lr}from"./index-CBqU2yxZ.js";import{P as f}from"./index-D3ylJrlI.js";import{_ as q,a as N,b as rr,c as ar,t as re,f as Mr}from"./i18n-t5FQMYIj.js";const Hr=e=>{var a;const r=(a=e.split(".").pop())==null?void 0:a.toLowerCase();return Ce(r).returnType().with("png",()=>"lake-document-png").with("xls",()=>"lake-document-xls").with("pdf",()=>"lake-document-pdf").with("jpg",()=>"lake-document-jpg").otherwise(()=>"document-regular")};var $r=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function te(e,r){var a=Br(e);if(typeof a.path!="string"){var t=e.webkitRelativePath;Object.defineProperty(a,"path",{value:typeof r=="string"?r:typeof t=="string"&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return a}function Br(e){var r=e.name,a=r&&r.lastIndexOf(".")!==-1;if(a&&!e.type){var t=r.split(".").pop().toLowerCase(),l=$r.get(t);l&&Object.defineProperty(e,"type",{value:l,writable:!1,configurable:!1,enumerable:!0})}return e}var Kr=[".DS_Store","Thumbs.db"];function Wr(e){return q(this,void 0,void 0,function(){return N(this,function(r){return de(e)&&qr(e.dataTransfer)?[2,Xr(e.dataTransfer,e.type)]:Nr(e)?[2,Vr(e)]:Array.isArray(e)&&e.every(function(a){return"getFile"in a&&typeof a.getFile=="function"})?[2,Ur(e)]:[2,[]]})})}function qr(e){return de(e)}function Nr(e){return de(e)&&de(e.target)}function de(e){return typeof e=="object"&&e!==null}function Vr(e){return Ie(e.target.files).map(function(r){return te(r)})}function Ur(e){return q(this,void 0,void 0,function(){var r;return N(this,function(a){switch(a.label){case 0:return[4,Promise.all(e.map(function(t){return t.getFile()}))];case 1:return r=a.sent(),[2,r.map(function(t){return te(t)})]}})})}function Xr(e,r){return q(this,void 0,void 0,function(){var a,t;return N(this,function(l){switch(l.label){case 0:return e.items?(a=Ie(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,a]:[4,Promise.all(a.map(Yr))]):[3,2];case 1:return t=l.sent(),[2,tr(vr(t))];case 2:return[2,tr(Ie(e.files).map(function(o){return te(o)}))]}})})}function tr(e){return e.filter(function(r){return Kr.indexOf(r.name)===-1})}function Ie(e){if(e===null)return[];for(var r=[],a=0;a<e.length;a++){var t=e[a];r.push(t)}return r}function Yr(e){if(typeof e.webkitGetAsEntry!="function")return nr(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?gr(r):nr(e)}function vr(e){return e.reduce(function(r,a){return rr(rr([],ar(r),!1),ar(Array.isArray(a)?vr(a):[a]),!1)},[])}function nr(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var a=te(r);return Promise.resolve(a)}function Gr(e){return q(this,void 0,void 0,function(){return N(this,function(r){return[2,e.isDirectory?gr(e):Jr(e)]})})}function gr(e){var r=e.createReader();return new Promise(function(a,t){var l=[];function o(){var c=this;r.readEntries(function(u){return q(c,void 0,void 0,function(){var g,D,E;return N(this,function(b){switch(b.label){case 0:if(u.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(l)];case 2:return g=b.sent(),a(g),[3,4];case 3:return D=b.sent(),t(D),[3,4];case 4:return[3,6];case 5:E=Promise.all(u.map(Gr)),l.push(E),o(),b.label=6;case 6:return[2]}})})},function(u){t(u)})}o()})}function Jr(e){return q(this,void 0,void 0,function(){return N(this,function(r){return[2,new Promise(function(a,t){e.file(function(l){var o=te(l,e.fullPath);a(o)},function(l){t(l)})})]})})}var Qr=function(e,r){if(e&&r){var a=Array.isArray(r)?r:r.split(","),t=e.name||"",l=(e.type||"").toLowerCase(),o=l.replace(/\/.*$/,"");return a.some(function(c){var u=c.trim().toLowerCase();return u.charAt(0)==="."?t.toLowerCase().endsWith(u):u.endsWith("/*")?o===u.replace(/\/.*$/,""):l===u})}return!0};function lr(e){return ra(e)||ea(e)||yr(e)||Zr()}function Zr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ea(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ra(e){if(Array.isArray(e))return Pe(e)}function or(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),a.push.apply(a,t)}return a}function ir(e){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?or(Object(a),!0).forEach(function(t){mr(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):or(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function mr(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function ae(e,r){return na(e)||ta(e,r)||yr(e,r)||aa()}function aa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yr(e,r){if(e){if(typeof e=="string")return Pe(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Pe(e,r)}}function Pe(e,r){(r==null||r>e.length)&&(r=e.length);for(var a=0,t=new Array(r);a<r;a++)t[a]=e[a];return t}function ta(e,r){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var t=[],l=!0,o=!1,c,u;try{for(a=a.call(e);!(l=(c=a.next()).done)&&(t.push(c.value),!(r&&t.length===r));l=!0);}catch(g){o=!0,u=g}finally{try{!l&&a.return!=null&&a.return()}finally{if(o)throw u}}return t}}function na(e){if(Array.isArray(e))return e}var la="file-invalid-type",oa="file-too-large",ia="file-too-small",ua="too-many-files",ca=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var a=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:la,message:"File type must be ".concat(a)}},ur=function(r){return{code:oa,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},cr=function(r){return{code:ia,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},sa={code:ua,message:"Too many files"};function hr(e,r){var a=e.type==="application/x-moz-file"||Qr(e,r);return[a,a?null:ca(r)]}function br(e,r,a){if(z(e.size))if(z(r)&&z(a)){if(e.size>a)return[!1,ur(a)];if(e.size<r)return[!1,cr(r)]}else{if(z(r)&&e.size<r)return[!1,cr(r)];if(z(a)&&e.size>a)return[!1,ur(a)]}return[!0,null]}function z(e){return e!=null}function fa(e){var r=e.files,a=e.accept,t=e.minSize,l=e.maxSize,o=e.multiple,c=e.maxFiles,u=e.validator;return!o&&r.length>1||o&&c>=1&&r.length>c?!1:r.every(function(g){var D=hr(g,a),E=ae(D,1),b=E[0],j=br(g,t,l),C=ae(j,1),I=C[0],P=u?u(g):null;return b&&I&&!P})}function ve(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function pe(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function sr(e){e.preventDefault()}function pa(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function da(e){return e.indexOf("Edge/")!==-1}function va(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return pa(e)||da(e)}function O(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return function(t){for(var l=arguments.length,o=new Array(l>1?l-1:0),c=1;c<l;c++)o[c-1]=arguments[c];return r.some(function(u){return!ve(t)&&u&&u.apply(void 0,[t].concat(o)),ve(t)})}}function ga(){return"showOpenFilePicker"in window}function ma(e){if(z(e)){var r=Object.entries(e).filter(function(a){var t=ae(a,2),l=t[0],o=t[1],c=!0;return wr(l)||(console.warn('Skipped "'.concat(l,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(o)||!o.every(kr))&&(console.warn('Skipped "'.concat(l,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(a,t){var l=ae(t,2),o=l[0],c=l[1];return ir(ir({},a),{},mr({},o,c))},{});return[{description:"Files",accept:r}]}return e}function ya(e){if(z(e))return Object.entries(e).reduce(function(r,a){var t=ae(a,2),l=t[0],o=t[1];return[].concat(lr(r),[l],lr(o))},[]).filter(function(r){return wr(r)||kr(r)}).join(",")}function ha(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function ba(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function wr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function kr(e){return/^.*\.[\w]+$/.test(e)}var wa=["children"],ka=["open"],Da=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Fa=["refKey","onChange","onClick"];function Aa(e){return Oa(e)||Ea(e)||Dr(e)||xa()}function xa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ea(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Oa(e){if(Array.isArray(e))return Se(e)}function je(e,r){return Ca(e)||ja(e,r)||Dr(e,r)||_a()}function _a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dr(e,r){if(e){if(typeof e=="string")return Se(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Se(e,r)}}function Se(e,r){(r==null||r>e.length)&&(r=e.length);for(var a=0,t=new Array(r);a<r;a++)t[a]=e[a];return t}function ja(e,r){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var t=[],l=!0,o=!1,c,u;try{for(a=a.call(e);!(l=(c=a.next()).done)&&(t.push(c.value),!(r&&t.length===r));l=!0);}catch(g){o=!0,u=g}finally{try{!l&&a.return!=null&&a.return()}finally{if(o)throw u}}return t}}function Ca(e){if(Array.isArray(e))return e}function fr(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),a.push.apply(a,t)}return a}function p(e){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?fr(Object(a),!0).forEach(function(t){Te(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fr(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function Te(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function ge(e,r){if(e==null)return{};var a=Ia(e,r),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function Ia(e,r){if(e==null)return{};var a={},t=Object.keys(e),l,o;for(o=0;o<t.length;o++)l=t[o],!(r.indexOf(l)>=0)&&(a[l]=e[l]);return a}var ze=s.forwardRef(function(e,r){var a=e.children,t=ge(e,wa),l=Ar(t),o=l.open,c=ge(l,ka);return s.useImperativeHandle(r,function(){return{open:o}},[o]),Lr.createElement(s.Fragment,null,a(p(p({},c),{},{open:o})))});ze.displayName="Dropzone";var Fr={disabled:!1,getFilesFromEvent:Wr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ze.defaultProps=Fr;ze.propTypes={children:f.func,accept:f.objectOf(f.arrayOf(f.string)),multiple:f.bool,preventDropOnDocument:f.bool,noClick:f.bool,noKeyboard:f.bool,noDrag:f.bool,noDragEventsBubbling:f.bool,minSize:f.number,maxSize:f.number,maxFiles:f.number,disabled:f.bool,getFilesFromEvent:f.func,onFileDialogCancel:f.func,onFileDialogOpen:f.func,useFsAccessApi:f.bool,autoFocus:f.bool,onDragEnter:f.func,onDragLeave:f.func,onDragOver:f.func,onDrop:f.func,onDropAccepted:f.func,onDropRejected:f.func,onError:f.func,validator:f.func};var Re={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Ar(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=p(p({},Fr),e),a=r.accept,t=r.disabled,l=r.getFilesFromEvent,o=r.maxSize,c=r.minSize,u=r.multiple,g=r.maxFiles,D=r.onDragEnter,E=r.onDragLeave,b=r.onDragOver,j=r.onDrop,C=r.onDropAccepted,I=r.onDropRejected,P=r.onFileDialogCancel,V=r.onFileDialogOpen,L=r.useFsAccessApi,U=r.autoFocus,M=r.preventDropOnDocument,m=r.noClick,S=r.noKeyboard,Le=r.noDrag,T=r.noDragEventsBubbling,me=r.onError,X=r.validator,Y=s.useMemo(function(){return ya(a)},[a]),Me=s.useMemo(function(){return ma(a)},[a]),ye=s.useMemo(function(){return typeof V=="function"?V:pr},[V]),ne=s.useMemo(function(){return typeof P=="function"?P:pr},[P]),w=s.useRef(null),x=s.useRef(null),xr=s.useReducer(Pa,Re),He=je(xr,2),he=He[0],F=He[1],Er=he.isFocused,$e=he.isFileDialogActive,le=s.useRef(typeof window<"u"&&window.isSecureContext&&L&&ga()),Be=function(){!le.current&&$e&&setTimeout(function(){if(x.current){var i=x.current.files;i.length||(F({type:"closeDialog"}),ne())}},300)};s.useEffect(function(){return window.addEventListener("focus",Be,!1),function(){window.removeEventListener("focus",Be,!1)}},[x,$e,ne,le]);var H=s.useRef([]),Ke=function(i){w.current&&w.current.contains(i.target)||(i.preventDefault(),H.current=[])};s.useEffect(function(){return M&&(document.addEventListener("dragover",sr,!1),document.addEventListener("drop",Ke,!1)),function(){M&&(document.removeEventListener("dragover",sr),document.removeEventListener("drop",Ke))}},[w,M]),s.useEffect(function(){return!t&&U&&w.current&&w.current.focus(),function(){}},[w,U,t]);var R=s.useCallback(function(n){me?me(n):console.error(n)},[me]),We=s.useCallback(function(n){n.preventDefault(),n.persist(),ce(n),H.current=[].concat(Aa(H.current),[n.target]),pe(n)&&Promise.resolve(l(n)).then(function(i){if(!(ve(n)&&!T)){var v=i.length,y=v>0&&fa({files:i,accept:Y,minSize:c,maxSize:o,multiple:u,maxFiles:g,validator:X}),A=v>0&&!y;F({isDragAccept:y,isDragReject:A,isDragActive:!0,type:"setDraggedFiles"}),D&&D(n)}}).catch(function(i){return R(i)})},[l,D,R,T,Y,c,o,u,g,X]),qe=s.useCallback(function(n){n.preventDefault(),n.persist(),ce(n);var i=pe(n);if(i&&n.dataTransfer)try{n.dataTransfer.dropEffect="copy"}catch{}return i&&b&&b(n),!1},[b,T]),Ne=s.useCallback(function(n){n.preventDefault(),n.persist(),ce(n);var i=H.current.filter(function(y){return w.current&&w.current.contains(y)}),v=i.indexOf(n.target);v!==-1&&i.splice(v,1),H.current=i,!(i.length>0)&&(F({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),pe(n)&&E&&E(n))},[w,E,T]),oe=s.useCallback(function(n,i){var v=[],y=[];n.forEach(function(A){var G=hr(A,Y),K=je(G,2),we=K[0],ke=K[1],De=br(A,c,o),se=je(De,2),Fe=se[0],Ae=se[1],xe=X?X(A):null;if(we&&Fe&&!xe)v.push(A);else{var Ee=[ke,Ae];xe&&(Ee=Ee.concat(xe)),y.push({file:A,errors:Ee.filter(function(Cr){return Cr})})}}),(!u&&v.length>1||u&&g>=1&&v.length>g)&&(v.forEach(function(A){y.push({file:A,errors:[sa]})}),v.splice(0)),F({acceptedFiles:v,fileRejections:y,type:"setFiles"}),j&&j(v,y,i),y.length>0&&I&&I(y,i),v.length>0&&C&&C(v,i)},[F,u,Y,c,o,g,j,C,I,X]),ie=s.useCallback(function(n){n.preventDefault(),n.persist(),ce(n),H.current=[],pe(n)&&Promise.resolve(l(n)).then(function(i){ve(n)&&!T||oe(i,n)}).catch(function(i){return R(i)}),F({type:"reset"})},[l,oe,R,T]),$=s.useCallback(function(){if(le.current){F({type:"openDialog"}),ye();var n={multiple:u,types:Me};window.showOpenFilePicker(n).then(function(i){return l(i)}).then(function(i){oe(i,null),F({type:"closeDialog"})}).catch(function(i){ha(i)?(ne(i),F({type:"closeDialog"})):ba(i)?(le.current=!1,x.current?(x.current.value=null,x.current.click()):R(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):R(i)});return}x.current&&(F({type:"openDialog"}),ye(),x.current.value=null,x.current.click())},[F,ye,ne,L,oe,R,Me,u]),Ve=s.useCallback(function(n){!w.current||!w.current.isEqualNode(n.target)||(n.key===" "||n.key==="Enter"||n.keyCode===32||n.keyCode===13)&&(n.preventDefault(),$())},[w,$]),Ue=s.useCallback(function(){F({type:"focus"})},[]),Xe=s.useCallback(function(){F({type:"blur"})},[]),Ye=s.useCallback(function(){m||(va()?setTimeout($,0):$())},[m,$]),B=function(i){return t?null:i},be=function(i){return S?null:B(i)},ue=function(i){return Le?null:B(i)},ce=function(i){T&&i.stopPropagation()},Or=s.useMemo(function(){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.refKey,v=i===void 0?"ref":i,y=n.role,A=n.onKeyDown,G=n.onFocus,K=n.onBlur,we=n.onClick,ke=n.onDragEnter,De=n.onDragOver,se=n.onDragLeave,Fe=n.onDrop,Ae=ge(n,Da);return p(p(Te({onKeyDown:be(O(A,Ve)),onFocus:be(O(G,Ue)),onBlur:be(O(K,Xe)),onClick:B(O(we,Ye)),onDragEnter:ue(O(ke,We)),onDragOver:ue(O(De,qe)),onDragLeave:ue(O(se,Ne)),onDrop:ue(O(Fe,ie)),role:typeof y=="string"&&y!==""?y:"presentation"},v,w),!t&&!S?{tabIndex:0}:{}),Ae)}},[w,Ve,Ue,Xe,Ye,We,qe,Ne,ie,S,Le,t]),_r=s.useCallback(function(n){n.stopPropagation()},[]),jr=s.useMemo(function(){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.refKey,v=i===void 0?"ref":i,y=n.onChange,A=n.onClick,G=ge(n,Fa),K=Te({accept:Y,multiple:u,type:"file",style:{display:"none"},onChange:B(O(y,ie)),onClick:B(O(A,_r)),tabIndex:-1},v,x);return p(p({},K),G)}},[x,a,u,ie,t]);return p(p({},he),{},{isFocused:Er&&!t,getRootProps:Or,getInputProps:jr,rootRef:w,inputRef:x,open:B($)})}function Pa(e,r){switch(r.type){case"focus":return p(p({},e),{},{isFocused:!0});case"blur":return p(p({},e),{},{isFocused:!1});case"openDialog":return p(p({},Re),{},{isFileDialogActive:!0});case"closeDialog":return p(p({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return p(p({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return p(p({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return p({},Re);default:return e}}function pr(){}const h=Ir.create({container:{backgroundColor:Ge.accented,borderWidth:1,borderColor:k.gray[200],borderStyle:"dashed",borderRadius:Pr[8],padding:Oe[32],cursor:"pointer",alignItems:"center"},disabled:{cursor:"default",backgroundColor:Ge.default},horizontalContainer:{flexDirection:"row"},icon:{alignItems:"center",justifyContent:"center"},hoveredContainer:{boxShadow:Je.tile},activeContainer:{borderColor:k.current[500],boxShadow:Je.tile},browse:{color:k.current[500]},browseBlock:{flex:1},decorativeIconLeft:{position:"absolute",bottom:0,left:"50%",opacity:0,transform:"translateX(-50%) scale(0.6)",transitionProperty:"opacity, transform",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},decorativeIconLeftHovered:{opacity:.3,transform:"translateX(-50%) translateX(-24px) scale(0.6) rotate(-5deg)"},decorativeIconRight:{position:"absolute",bottom:0,left:"50%",opacity:0,transform:"translateX(-50%) scale(0.6)",transitionProperty:"opacity, transform",transitionDuration:"300ms",transitionTimingFunction:"ease-in-out"},decorativeIconRightHovered:{opacity:.3,transform:"translateX(-50%) translateX(24px) scale(0.6) rotate(5deg)"},errorContainer:{borderColor:k.negative[500]},preview:{aspectRatio:16/5,width:"50%",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"},deleteButton:{position:"absolute",right:Oe[20],top:Oe[20]}}),dr=({icon:e="document-regular",accept:r,value:a,disabled:t=!1,onPressRemove:l,onFiles:o,onError:c,layout:u="vertical",description:g,error:D,maxSize:E})=>{var M;const[b,j]=zr(!1),C=s.useMemo(()=>r.every(m=>m.startsWith("image/")),[r]),I=s.useMemo(()=>Ce(a).with(J.nullish,()=>Q.None()).with({url:J.string},({url:m,name:S})=>Q.Some({url:m,name:S??Sr.fromExecution(()=>new URL(m).pathname).getWithDefault("untitled")})).with(J.instanceOf(File),m=>Q.Some({name:m.name,url:URL.createObjectURL(m)})).exhaustive(),[a]),{getRootProps:P,getInputProps:V,isDragActive:L,fileRejections:U}=Ar({accept:r.reduce((m,S)=>({...m,[S]:[]}),{}),onDropAccepted:o,onDropRejected:c,disabled:t,maxSize:E});return d(W,{style:Rr.fill,children:d("div",{...P(),onMouseEnter:j.on,onMouseLeave:j.off,children:_(W,{"aria-errormessage":D??((M=U[0])==null?void 0:M.errors.join(", ")),style:[h.container,t&&h.disabled,u==="horizontal"&&h.horizontalContainer,!t&&b&&h.hoveredContainer,L&&h.activeContainer,(D!=null||U.length>0)&&h.errorContainer],children:[d("input",{...V()}),Ce({file:I,isImageOnly:C}).with({file:Q.Some(J.select()),isImageOnly:!0},({url:m})=>_(Z,{children:[d(W,{style:[h.preview,{backgroundImage:`url("${m}")`}]}),l!=null?d(Ze,{mode:"tertiary",size:"small",icon:"delete-regular",color:"negative",onPress:l,style:h.deleteButton,ariaLabel:re("common.remove")}):null]})).with({file:Q.Some(J.select()),isImageOnly:!1},({name:m})=>_(Z,{children:[d(fe,{name:Hr(m),size:48,color:t?k.gray[200]:k.current[500]}),d(ee,{width:u==="horizontal"?48:16,height:u==="horizontal"?48:16}),_(W,{style:h.browseBlock,children:[d(er,{level:5,variant:"h5",align:u==="horizontal"?"left":"center",children:re("fileInput.clickToModify")}),d(ee,{height:4}),d(_e,{variant:"smallRegular",color:k.gray[200],children:m})]}),l!=null?d(Ze,{mode:"tertiary",size:"small",icon:"delete-regular",color:"negative",style:h.deleteButton,onPress:l,ariaLabel:re("common.remove")}):null]})).otherwise(()=>_(Z,{children:[_(W,{style:h.icon,children:[d(fe,{name:e,size:48,color:t?k.gray[200]:k.current[500],style:[h.decorativeIconLeft,(L||b)&&h.decorativeIconLeftHovered]}),d(fe,{name:e,size:48,color:t?k.gray[200]:k.current[500],style:[h.decorativeIconRight,(L||b)&&h.decorativeIconRightHovered]}),d(fe,{name:e,size:48,color:t?k.gray[200]:k.current[500]})]}),d(ee,{width:u==="horizontal"?48:16,height:u==="horizontal"?48:16}),_(W,{style:h.browseBlock,children:[d(er,{level:5,variant:"h5",align:u==="horizontal"?"left":"center",color:t?k.gray[200]:void 0,children:t?re("fileInput.noFile"):Mr("fileInput.dropFile",{browse:d(Tr,{style:h.browse,children:re("fileInput.browse")})})}),Qe(D)?_(Z,{children:[d(ee,{height:4}),d(_e,{color:k.negative[400],align:u==="horizontal"?"left":"center",children:D})]}):!t&&Qe(g)&&_(Z,{children:[d(ee,{height:4}),d(_e,{align:u==="horizontal"?"left":"center",children:g})]})]})]}))]})})})};try{dr.displayName="FileInput",dr.__docgenInfo={description:"",displayName:"FileInput",props:{accept:{defaultValue:null,description:"",name:"accept",required:!0,type:{name:"string[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"DistFile | File"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:"vertical"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},icon:{defaultValue:{value:"document-regular"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"lake-building-bank"'},{value:'"lake-calendar-arrow-swap"'},{value:'"lake-call"'},{value:'"lake-card"'},{value:'"lake-card-add"'},{value:'"lake-card-filled"'},{value:'"lake-card-one-off"'},{value:'"lake-card-physical"'},{value:'"lake-card-recurring"'},{value:'"lake-card-single-use"'},{value:'"lake-card-virtual"'},{value:'"lake-check"'},{value:'"lake-chevron-double"'},{value:'"lake-clipboard-bullet"'},{value:'"lake-clock"'},{value:'"lake-clock-arrow-swap"'},{value:'"lake-close"'},{value:'"lake-compass"'},{value:'"lake-currencies"'},{value:'"lake-delivery-grouped"'},{value:'"lake-delivery-individual"'},{value:'"lake-denied"'},{value:'"lake-document-csv"'},{value:'"lake-document-jpg"'},{value:'"lake-document-pdf"'},{value:'"lake-document-png"'},{value:'"lake-document-xls"'},{value:'"lake-email"'},{value:'"lake-eraser"'},{value:'"lake-error"'},{value:'"lake-face-id"'},{value:'"lake-fingerprint"'},{value:'"lake-id-card"'},{value:'"lake-inbox-empty"'},{value:'"lake-key"'},{value:'"lake-lock-closed"'},{value:'"lake-menu"'},{value:'"lake-people"'},{value:'"lake-person-arrow-swap"'},{value:'"lake-person-support"'},{value:'"lake-phone"'},{value:'"lake-receipt"'},{value:'"lake-settings"'},{value:'"lake-shield"'},{value:'"lake-signature"'},{value:'"lake-transfer"'},{value:'"lake-warning"'},{value:'"lake-world-map"'},{value:'"add-circle-filled"'},{value:'"add-circle-regular"'},{value:'"add-filled"'},{value:'"approvals-app-filled"'},{value:'"apps-list-filled"'},{value:'"apps-list-regular"'},{value:'"arrow-counterclockwise-filled"'},{value:'"arrow-clockwise-filled"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-regular"'},{value:'"arrow-download-filled"'},{value:'"arrow-left-filled"'},{value:'"arrow-left-regular"'},{value:'"arrow-right-filled"'},{value:'"arrow-right-regular"'},{value:'"arrow-swap-filled"'},{value:'"arrow-swap-regular"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-regular"'},{value:'"arrow-upload-filled"'},{value:'"arrow-upload-regular"'},{value:'"beaker-filled"'},{value:'"beaker-regular"'},{value:'"board-filled"'},{value:'"board-regular"'},{value:'"box-regular"'},{value:'"building-bank-filled"'},{value:'"building-bank-regular"'},{value:'"building-filled"'},{value:'"building-multiple-regular"'},{value:'"building-regular"'},{value:'"building-shop-regular"'},{value:'"calendar-ltr-regular"'},{value:'"cart-regular"'},{value:'"chat-help-filled"'},{value:'"chat-help-regular"'},{value:'"check-filled"'},{value:'"check-regular"'},{value:'"checkmark-circle-regular"'},{value:'"checkmark-filled"'},{value:'"checkmark-starburst-regular"'},{value:'"checkmark-starburst-filled"'},{value:'"chevron-down-filled"'},{value:'"chevron-left-filled"'},{value:'"chevron-right-filled"'},{value:'"chevron-up-down-regular"'},{value:'"chevron-up-filled"'},{value:'"clipboard-search-regular"'},{value:'"clock-filled"'},{value:'"clock-regular"'},{value:'"cloud-sync-filled"'},{value:'"cloud-sync-regular"'},{value:'"code-filled"'},{value:'"code-regular"'},{value:'"color-regular"'},{value:'"comment-note-regular"'},{value:'"copy-filled"'},{value:'"copy-regular"'},{value:'"cursor-click-regular"'},{value:'"database-filled"'},{value:'"database-regular"'},{value:'"delete-filled"'},{value:'"delete-regular"'},{value:'"desktop-regular"'},{value:'"device-meeting-room-regular"'},{value:'"dismiss-circle-regular"'},{value:'"dismiss-filled"'},{value:'"dismiss-regular"'},{value:'"document-regular"'},{value:'"earth-regular"'},{value:'"edit-filled"'},{value:'"edit-regular"'},{value:'"error-circle-filled"'},{value:'"error-circle-regular"'},{value:'"eye-filled"'},{value:'"eye-off-filled"'},{value:'"eye-regular"'},{value:'"eye-off-regular"'},{value:'"filter-filled"'},{value:'"flag-filled"'},{value:'"flag-regular"'},{value:'"flash-filled"'},{value:'"flash-regular"'},{value:'"form-new-filled"'},{value:'"form-new-regular"'},{value:'"hand-right-regular"'},{value:'"image-add-filled"'},{value:'"image-add-regular"'},{value:'"image-filled"'},{value:'"image-regular"'},{value:'"info-filled"'},{value:'"info-regular"'},{value:'"key-regular"'},{value:'"link-filled"'},{value:'"live-filled"'},{value:'"live-regular"'},{value:'"lock-closed-filled"'},{value:'"lock-closed-regular"'},{value:'"lock-open-filled"'},{value:'"lock-open-regular"'},{value:'"mail-filled"'},{value:'"mail-regular"'},{value:'"money-calculator-regular"'},{value:'"money-calculator-filled"'},{value:'"money-regular"'},{value:'"money-filled"'},{value:'"more-horizontal-filled"'},{value:'"more-vertical-filled"'},{value:'"open-filled"'},{value:'"open-regular"'},{value:'"options-regular"'},{value:'"paint-brush-filled"'},{value:'"paint-brush-regular"'},{value:'"panel-left-filled"'},{value:'"panel-left-regular"'},{value:'"panel-left-contract-filled"'},{value:'"panel-left-contract-regular"'},{value:'"panel-left-expand-filled"'},{value:'"panel-left-expand-regular"'},{value:'"pause-regular"'},{value:'"payment-filled"'},{value:'"payment-regular"'},{value:'"people-add-regular"'},{value:'"people-community-filled"'},{value:'"people-community-regular"'},{value:'"people-filled"'},{value:'"people-regular"'},{value:'"people-team-regular"'},{value:'"person-accounts-filled"'},{value:'"person-accounts-regular"'},{value:'"person-add-regular"'},{value:'"person-call-filled"'},{value:'"person-call-regular"'},{value:'"person-filled"'},{value:'"person-lock-regular"'},{value:'"person-regular"'},{value:'"phone-filled"'},{value:'"phone-regular"'},{value:'"pin-regular"'},{value:'"play-filled"'},{value:'"play-regular"'},{value:'"preview-link-filled"'},{value:'"qr-code-regular"'},{value:'"question-circle-regular"'},{value:'"receipt-money-filled"'},{value:'"receipt-money-regular"'},{value:'"rocket-regular"'},{value:'"search-filled"'},{value:'"send-filled"'},{value:'"send-regular"'},{value:'"settings-filled"'},{value:'"settings-regular"'},{value:'"shield-checkmark-filled"'},{value:'"shield-checkmark-regular"'},{value:'"shield-error-regular"'},{value:'"shield-regular"'},{value:'"sign-out-regular"'},{value:'"signature-filled"'},{value:'"signature-regular"'},{value:'"subtract-circle-filled"'},{value:'"subtract-circle-regular"'},{value:'"target-arrow-regular"'},{value:'"task-list-square-ltr-filled"'},{value:'"task-list-square-ltr-regular"'},{value:'"warning-filled"'},{value:'"warning-regular"'},{value:'"window-dev-tools-filled"'},{value:'"window-dev-tools-regular"'}]}},onFiles:{defaultValue:null,description:"",name:"onFiles",required:!1,type:{name:"((files: File[]) => void)"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"(() => void)"}},onPressRemove:{defaultValue:null,description:"",name:"onPressRemove",required:!1,type:{name:"(() => void)"}}}}}catch{}export{dr as F,Hr as g};
//# sourceMappingURL=FileInput-BqCvO-hl.js.map