/*! @placekit/client-js v2.0.0 | © placekit.io | MIT license | https://github.com/placekit/client-js#readme */const P=new Map;function b(){const r=[];return typeof window<"u"&&navigator.userAgent&&r.push(navigator.userAgent),r.push("PlaceKit/2.0.0 (Client=JavaScript)"),typeof process<"u"&&process.version&&r.push(`NodeJS/${process.version}`),r.join(" ")}function f(r,e={}){if(["string","undefined"].includes(typeof r))r||console.warn("PlaceKit: missing or empty `apiKey` argument.");else throw Error("PlaceKit: `apiKey` argument is invalid, expected a string.");let t=0;const n=["https://api.placekit.co"];let s=!1;const c={maxResults:5};typeof window<"u"&&navigator.language&&(c.language=navigator.language.slice(0,2));const m=b();function g(a="POST",l="",u={}){const{timeout:i,forwardIP:h,...x}=u,p=new AbortController,v=typeof i<"u"?setTimeout(()=>p.abort(),i):void 0,E=new URL(l.trim().replace(/^\/+/,""),n[t]),y={"Content-Type":"application/json; charset=UTF-8","User-Agent":m,"x-placekit-api-key":r};return h&&(y["x-forwarded-for"]=h),fetch(E,{method:a,headers:y,signal:p.signal,body:JSON.stringify(x)}).then(async o=>{clearTimeout(v);const w=await o.json();if(!o.ok)throw{status:o.status,statusText:o.statusText,...w};return w}).catch(o=>{if((o.name==="AbortError"||o.status&&o.status>=500)&&(t++,t<n.length-1))return g(a,l,u);throw o})}const d={get options(){return c},get hasGeolocation(){return s},configure(a={}){if(!["object","undefined"].includes(typeof a)||Array.isArray(a)||a===null)throw Error("PlaceKit.configure: `opts` argument is invalid, expected an object.");Object.assign(c,a)},requestGeolocation(a={}){if(!["object","undefined"].includes(typeof a)||Array.isArray(a)||a===null)throw Error("PlaceKit.requestGeolocation: `opts` argument is invalid, expected an object.");return new Promise((l,u)=>{typeof window>"u"||!navigator.geolocation?u(Error("PlaceKit.requestGeolocation: geolocation is only available in the browser.")):navigator.geolocation.getCurrentPosition(i=>{s=!0,c.coordinates=`${i.coords.latitude},${i.coords.longitude}`,l(i)},i=>{s=!1,delete c.coordinates,u(Error(`PlaceKit.requestGeolocation: (${i.code}) ${i.message}`))},a)})},clearGeolocation(){s=!1,delete c.coordinates}};for(const[a,l]of P.entries()){if(a in d)throw Error(`PlaceKit extend: \`client.${a}\` already exists.`);d[a]=l(g,d)}return d.configure(e),d}f.extend=function(r,e){if(!(e!=null&&e.call))throw Error("PlaceKit extend: `init` argument is invalid, expected a function.");P.set(r,e)};f.extend("search",(r,e)=>(t,n={})=>{if(!["string","undefined"].includes(typeof t))throw Error("PlaceKit `client.search`: `query` argument is invalid, expected a string.");if(!["object","undefined"].includes(typeof n)||Array.isArray(n)||n===null)throw Error("PlaceKit.search: `opts` argument is invalid, expected an object.");return r("POST","search",{...e.options,...n,query:t})});f.extend("reverse",(r,e)=>(t={})=>{if(!["object","undefined"].includes(typeof t)||Array.isArray(t)||t===null)throw Error("PlaceKit.reverse: `opts` argument is invalid, expected an object.");return r("POST","reverse",{...e.options,...t})});/*! @placekit/client-js v2.0.0 | © placekit.io | MIT license | https://github.com/placekit/client-js#readme */f.extend("patch",r=>({list(e={}){if(!["object","undefined"].includes(typeof e)||Array.isArray(e)||e===null)throw Error("PlaceKit.patch.list: `opts` argument is invalid, expected an object.");return r("POST","patch/search",e)},create(e,t={},n){if(!["object","undefined"].includes(typeof t)||Array.isArray(t)||t===null)throw Error("PlaceKit.patch.create: `opts` argument is invalid, expected an object.");return r(typeof n>"u"?"POST":"PUT","patch",{...typeof n>"u"?{record:e}:{origin:n,update:e},status:t==null?void 0:t.status,language:t==null?void 0:t.language})},get(e,t){if(typeof e!="string"||!e)throw Error("PlaceKit.patch.get: `id` argument is invalid, expected a string.");if(!["string","undefined"].includes(typeof t))throw Error("PlaceKit.patch.get: `language` argument is invalid, expected a string.");return r("GET",`patch/${e}`,{params:{language:t}})},update(e,t,n={}){if(typeof e!="string"||!e)throw Error("PlaceKit.patch.update: `id` argument is invalid, expected a string.");if(!["object","undefined"].includes(typeof n)||Array.isArray(n)||n===null)throw Error("PlaceKit.patch.update: `opts` argument is invalid, expected an object.");return r("PATCH",`patch/${e}`,{update:t,status:n==null?void 0:n.status,language:n==null?void 0:n.language})},delete(e){if(typeof e!="string"||!e)throw Error("PlaceKit.patch.delete: `id` argument is invalid, expected a string.");return r("DELETE",`patch/${e}`)},deleteLang(e,t){if(typeof e!="string"||!e)throw Error("PlaceKit.patch.deleteLang: `id` argument is invalid, expected a string.");if(typeof t!="string"||!t)throw Error("PlaceKit.patch.deleteLang: `language` argument is invalid, expected a string.");return r("DELETE",`patch/${e}/language/${t}`)}}));export{f as default};
//# sourceMappingURL=placekit-b76d53c8.js.map
