function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/7.2.2/DocsRenderer-K4EAMTCU-CyvPKM2-.js","assets/7.2.2/iframe-DcVfSG4T.js","assets/7.2.2/index-CBqU2yxZ.js","assets/7.2.2/_commonjsHelpers-BosuxZz1.js","assets/7.2.2/react-18-D8cruF67.js","assets/7.2.2/index-BtM5VmRH.js","assets/7.2.2/extends-CCbyfPlC.js","assets/7.2.2/polished.esm-1TDmsf3v.js","assets/7.2.2/_getPrototype-dJyelQMr.js","assets/7.2.2/index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./iframe-DcVfSG4T.js";import"../../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-CyvPKM2-.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
//# sourceMappingURL=preview-uY130LAi.js.map
