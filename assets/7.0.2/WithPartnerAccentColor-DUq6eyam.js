import{s as y,i as u,j as f,V as d}from"./Space-Bfex_hJx.js";import{m as l,c as a,a as h,b as m}from"./polished.esm-1TDmsf3v.js";import{r as c}from"./index-CBqU2yxZ.js";const w=y.create({container:{flexGrow:1,flexBasis:"0%"}}),P=e=>{if(l("#FFF",e).AALarge)return"#fff";let o=e;for(;!l(o,e).AALarge;)o=m(.25,o);return o},M=({color:e,scoped:o=!1,children:i})=>{const n=c.useRef(null);return c.useLayoutEffect(()=>{try{if(u(n.current)){const p=n.current;let t=1;for(;!l(a(Math.pow(.5,t),e),"#fff").AALarge;)t+=.1;const r={0:a(Math.pow(1,t),e),50:a(Math.pow(.97,t),e),100:a(Math.pow(.9,t),e),200:a(Math.pow(.8,t),e),300:a(Math.pow(.7,t),e),400:a(Math.pow(.6,t),e),500:a(Math.pow(.5,t),e),600:a(Math.pow(.4,t),e),700:a(Math.pow(.3,t),e),800:a(Math.pow(.2,t),e),900:a(Math.pow(.1,t),e),primary:e,contrast:P(e),secondary:h(.2,e)},s=o?p:p.ownerDocument.documentElement;s.style.setProperty("--color-partner-900",r[900],""),s.style.setProperty("--color-partner-800",r[800],""),s.style.setProperty("--color-partner-700",r[700],""),s.style.setProperty("--color-partner-600",r[600],""),s.style.setProperty("--color-partner-500",r[500],""),s.style.setProperty("--color-partner-400",r[400],""),s.style.setProperty("--color-partner-300",r[300],""),s.style.setProperty("--color-partner-200",r[200],""),s.style.setProperty("--color-partner-100",r[100],""),s.style.setProperty("--color-partner-50",r[50],""),s.style.setProperty("--color-partner-primary",r.primary,""),s.style.setProperty("--color-partner-secondary",r.secondary,""),s.style.setProperty("--color-partner-contrast",r.contrast,"")}}catch{}},[e,o]),f.jsx(d,{ref:n,style:w.container,children:i})};M.__docgenInfo={description:"",methods:[],displayName:"WithPartnerAccentColor",props:{color:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},scoped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{M as W};
//# sourceMappingURL=WithPartnerAccentColor-DUq6eyam.js.map
