import{r as u}from"./index-Cs7sjTYM.js";import"./with-selector-lUtTy5mt.js";var v=e=>e[e.length-1],f=()=>{},E=e=>e!=="",P=e=>e[0]==="/"?e:"/"+e,U=(e,r)=>e.length===r.length&&e.every((n,a)=>n===r[a]),x=e=>{const r=new URLSearchParams(e),n={};for(const[a,o]of r){const s=n[a];s!=null?n[a]=typeof s=="string"?[s,o]:s.concat(o):n[a]=o}return n},R=/=&/g,C=/=$/g,I=e=>{const r=Object.keys(e);if(r.length===0)return"";const n=new URLSearchParams;r.sort();for(const o of r){const s=e[o];if(s!=null)if(typeof s=="string")n.append(o,s);else for(const t of s)n.append(o,t)}const a=n.toString().replace(R,"&").replace(C,"");return a===""?"":"?"+a},L=!1,b=e=>{const r=e.indexOf("#"),n=P(r<0?e:e.substring(0,r)),a=n.indexOf("?");return a<0?{path:n,search:""}:{path:n.substring(0,a),search:n.substring(a)}},g=e=>{const r=b(e),n=r.path.substring(1),a=n!==""?L?n.split("/").map(decodeURIComponent):n.split("/").filter(E).map(decodeURIComponent):[],o=r.search!==""?x(r.search):{},s="/"+a.map(encodeURIComponent).join("/"),t=I(o),c=s+t;return{path:a,search:o,raw:{path:s,search:t},toString(){return c}}},m=e=>{e.preventDefault(),e.returnValue=""},_=()=>{const e=new Set;let r=[];const n=window.history,a=window.location;let o=g(a.pathname+a.search);const s=()=>{const t=g(a.pathname+a.search);if(t.toString()===o.toString())return;L=!0;const c=t.raw.search!==o.raw.search,l=c?{}:o.search;if(c){for(const i in t.search)if(Object.prototype.hasOwnProperty.call(t.search,i)){const p=t.search[i];if(p==null)continue;const h=o.search[i];h==null||typeof h=="string"||typeof p=="string"||!U(p,h)?l[i]=p:l[i]=h}}o={path:t.raw.path!==o.raw.path?t.path:o.path,search:l,raw:t.raw,toString:t.toString},e.forEach(i=>i(o))};return window.addEventListener("popstate",()=>{s()}),{get location(){return o},subscribe:t=>(e.add(t),()=>{e.delete(t)}),push:t=>{const c=v(r);if(c==null||window.confirm(c.message)){try{n.pushState(null,"",t)}catch{a.assign(t)}s()}},replace:t=>{const c=v(r);(c==null||window.confirm(c.message))&&(n.replaceState(null,"",t),s())},block:t=>(r.push(t),r.length===1&&window.addEventListener("beforeunload",m,{capture:!0}),()=>{r=r.filter(({id:c})=>c!==t.id),r.length===0&&window.removeEventListener("beforeunload",m,{capture:!0})})}},d=typeof window<"u"?_():{location:g("/"),subscribe:()=>f,push:f,replace:f,block:()=>f},H=()=>d.location,y=d.subscribe,O=d.push,A=d.replace,S=u.createContext(H);S.Provider;var k=()=>u.useContext(S),$=()=>{const e=k();return u.useSyncExternalStore(y,e,e)},G=({href:e,replace:r=!1,target:n})=>{const a=u.useMemo(()=>b(e).path,[e]),o=k(),s=()=>a===o().raw.path,t=u.useSyncExternalStore(y,s,s),c=r||t,l=n==null||n==="_self";return{active:t,onClick:u.useCallback(i=>{!i.defaultPrevented&&l&&i.button===0&&!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&(i.preventDefault(),c?A(e):O(e))},[c,l,e])}},K=u.forwardRef(({onClick:e,className:r,replace:n,style:a,target:o,to:s,activeClassName:t,activeStyle:c,...l},i)=>{const{active:p,onClick:h}=G({href:s,replace:n,target:o});return u.createElement("a",{...l,ref:i,href:s,onClick:w=>{e==null||e(w),h(w)},target:o,className:!p||t==null?r:r==null?t:`${r} ${t}`,style:!p||c==null?a:a==null?c:{...a,...c}})});K.displayName="Link";export{K as L,$ as a,G as u};
//# sourceMappingURL=index-BH9W4JmD.js.map