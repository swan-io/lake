import{r as i}from"./index-f1f749bf.js";const P=t=>{const[,f]=i.useReducer(e=>e+1,0),s=i.useRef(null),{replace:d,append:w}=t,m=d?d(t.format(t.value)):t.format(t.value),v=i.useRef(!1),C=e=>{const r=e.target.value;s.current=[r,e.target,r.length>m.length,v.current,m===t.format(r)],f()};return i.useLayoutEffect(()=>{if(s.current==null)return;let[e,r,c,x,S]=s.current;s.current=null;const E=x&&S,R=e.slice(r.selectionStart).search(t.accept||/\d/g),L=R!==-1?R:0,o=n=>(n.match(t.accept||/\d/g)||[]).join(""),g=o(e.substr(0,r.selectionStart)),k=n=>{let a=0,u=0;for(let h=0;h!==g.length;++h){let O=n.indexOf(g[h],a)+1,D=o(n).indexOf(g[h],u)+1;D-u>1&&(O=a,D=u),u=Math.max(D,u),a=Math.max(a,O)}return a};if(t.mask===!0&&c&&!S){let n=k(e);const a=o(e.substr(n))[0];n=e.indexOf(a,n),e=`${e.substr(0,n)}${e.substr(n+1)}`}let l=t.format(e);w!=null&&r.selectionStart===e.length&&!S&&(c?l=w(l):o(l.slice(-1))===""&&(l=l.slice(0,-1)));const y=d?d(l):l;return m===y?f():t.onChange(y),()=>{let n=k(l);if(t.mask!=null&&(c||x&&!E))for(;l[n]&&o(l[n])==="";)n+=1;r.selectionStart=r.selectionEnd=n+(E?1+L:0)}}),i.useEffect(()=>{const e=c=>{c.code==="Delete"&&(v.current=!0)},r=c=>{c.code==="Delete"&&(v.current=!1)};return document.addEventListener("keydown",e),document.addEventListener("keyup",r),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",r)}},[]),{value:s.current!=null?s.current[0]:m,onChange:C}},A=t=>{const f=P(t);return t.children(f)};export{A as R};
//# sourceMappingURL=rifm.esm-58cee9fb.js.map
