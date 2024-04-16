function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/7.4.5/DocsRenderer-K4EAMTCU-BoZTd5X6.js","assets/7.4.5/iframe-BKXXFKoG.js","assets/7.4.5/index-CBqU2yxZ.js","assets/7.4.5/_commonjsHelpers-BosuxZz1.js","assets/7.4.5/react-18-D8cruF67.js","assets/7.4.5/index-BtM5VmRH.js","assets/7.4.5/extends-CCbyfPlC.js","assets/7.4.5/polished.esm-1TDmsf3v.js","assets/7.4.5/_getPrototype-BbLr7HsR.js","assets/7.4.5/index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./iframe-BKXXFKoG.js";import"../../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-BoZTd5X6.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
//# sourceMappingURL=preview-CgdZgK4-.js.map
