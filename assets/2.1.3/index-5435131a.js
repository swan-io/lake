import{D as W,S as p,w as x,_ as ge,A as he,u as me,V as H,B as be}from"./Space-7ecbd5cc.js";import{_ as ye}from"./extends-98964cd2.js";import{r as u}from"./index-ebeaab24.js";var Se=[];function Q(e){return Se[e-1]}var Ee=/^data:/;class s{static has(t){var r=s._entries,n=Ee.test(t);return n||!!r[t]}static add(t){var r=s._entries,n=Date.now();r[t]?(r[t].lastUsedTimestamp=n,r[t].refCount+=1):r[t]={lastUsedTimestamp:n,refCount:1}}static remove(t){var r=s._entries;r[t]&&(r[t].refCount-=1),s._cleanUpIfNeeded()}static _cleanUpIfNeeded(){var t=s._entries,r=Object.keys(t);if(r.length+1>s._maximumEntries){var n,a;r.forEach(o=>{var l=t[o];(!a||l.lastUsedTimestamp<a.lastUsedTimestamp)&&l.refCount===0&&(n=o,a=l)}),n&&delete t[n]}}}s._maximumEntries=256;s._entries={};var A=0,D={},E={abort(e){var t=D[""+e];t&&(t.onerror=null,t.onload=null,t=null,delete D[""+e])},getSize(e,t,r){var n=!1,a=setInterval(l,16),o=E.load(e,l,v);function l(){var d=D[""+o];if(d){var i=d.naturalHeight,f=d.naturalWidth;i&&f&&(t(f,i),n=!0)}n&&(E.abort(o),clearInterval(a))}function v(){typeof r=="function"&&r(),E.abort(o),clearInterval(a)}},has(e){return s.has(e)},load(e,t,r){A+=1;var n=new window.Image;return n.onerror=r,n.onload=a=>{var o=()=>t({nativeEvent:a});typeof n.decode=="function"?n.decode().then(o,o):setTimeout(o,0)},n.src=e,D[""+A]=n,A},prefetch(e){return new Promise((t,r)=>{E.load(e,()=>{s.add(e),s.remove(e),t()},r)})},queryCache(e){var t={};return e.forEach(r=>{s.has(r)&&(t[r]="disk/memory")}),Promise.resolve(t)}};const m=E;class w{static get(){return W.get("window").scale}static getFontScale(){return W.get("window").fontScale||w.get()}static getPixelSizeForLayoutSize(t){return Math.round(t*w.get())}static roundToNearestPixel(t){var r=w.get();return Math.round(t*r)/r}}var pe=["aria-label","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],we="ERRORED",P="LOADED",J="LOADING",Le="IDLE",ze=0,ke=/^(data:image\/svg\+xml;utf8,)(.*)/;function Ie(e,t){return e&&t!=null?u.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},u.createElement("defs",null,u.createElement("filter",{id:"tint-"+t,suppressHydrationWarning:!0},u.createElement("feFlood",{floodColor:""+e,key:e}),u.createElement("feComposite",{in2:"SourceAlpha",operator:"atop"})))):null}function xe(e,t,r,n){var a=p.flatten(e),o=a.filter,l=a.resizeMode,v=a.shadowOffset,d=a.tintColor;a.resizeMode,a.tintColor;var i=[],f=null;if(o&&i.push(o),t&&i.push("blur("+t+"px)"),v){var h=be(a);h&&i.push("drop-shadow("+h+")")}return(n||d)&&r!=null&&i.push("url(#tint-"+r+")"),i.length>0&&(f=i.join(" ")),delete a.blurRadius,delete a.shadowColor,delete a.shadowOpacity,delete a.shadowOffset,delete a.shadowRadius,delete a.tintColor,delete a.overlayColor,delete a.resizeMode,[a,l,f,d]}function De(e){if(typeof e=="number"){var t=Q(e),r=t.height,n=t.width;return{height:r,width:n}}else if(e!=null&&!Array.isArray(e)&&typeof e=="object"){var a=e.height,o=e.width;return{height:a,width:o}}}function _(e){var t=null;if(typeof e=="number"){var r=Q(e);if(r==null)throw new Error('Image: asset with ID "'+e+'" could not be found. Please check the image source or packager.');var n=r.scales[0];if(r.scales.length>1){var a=w.get();n=r.scales.reduce((f,h)=>Math.abs(h-a)<Math.abs(f-a)?h:f)}var o=n!==1?"@"+n+"x":"";t=r?r.httpServerLocation+"/"+r.name+o+"."+r.type:""}else typeof e=="string"?t=e:e&&typeof e.uri=="string"&&(t=e.uri);if(t){var l=t.match(ke);if(l){var v=l[1],d=l[2],i=encodeURIComponent(d);return""+v+i}}return t}var X=u.forwardRef((e,t)=>{var r=e["aria-label"],n=e.blurRadius,a=e.defaultSource,o=e.draggable,l=e.onError,v=e.onLayout,d=e.onLoad,i=e.onLoadEnd,f=e.onLoadStart,h=e.pointerEvents,M=e.source,Y=e.style,Z=ge(e,pe),T=u.useState(()=>{var c=_(M);if(c!=null){var g=m.has(c);if(g)return P}return Le}),j=T[0],L=T[1],F=u.useState({}),q=F[0],K=F[1],ee=u.useContext(he),O=u.useRef(null),N=u.useRef(ze++),b=u.useRef(null),te=j===P||j===J&&a==null,z=xe(Y,n,N.current,e.tintColor),re=z[0],ae=z[1],ne=z[2],oe=z[3],y=e.resizeMode||ae||"cover",ie=e.tintColor||oe,B=te?M:a,k=_(B),le=De(B),ue=k?'url("'+k+'")':null,$=de(),se=k?me("img",{alt:r||"",style:C.accessibilityImage$raw,draggable:o||!1,ref:O,src:k}):null;function de(){if(O.current!=null&&(y==="center"||y==="repeat")){var c=O.current,g=c.naturalHeight,S=c.naturalWidth,U=q.height,V=q.width;if(g&&S&&U&&V){var G=Math.min(1,V/S,U/g),ce=Math.ceil(G*S),ve=Math.ceil(G*g);return ce+"px "+ve+"px"}}}function fe(c){if(y==="center"||y==="repeat"||v){var g=c.nativeEvent.layout;v&&v(c),K(g)}}var I=_(M);return u.useEffect(()=>{c(),I!=null&&(L(J),f&&f(),b.current=m.load(I,function(S){L(P),d&&d(S),i&&i()},function(){L(we),l&&l({nativeEvent:{error:"Failed to load resource "+I+" (404)"}}),i&&i()}));function c(){b.current!=null&&(m.abort(b.current),b.current=null)}return c},[I,b,L,l,d,i,f]),u.createElement(H,ye({},Z,{"aria-label":r,onLayout:fe,pointerEvents:h,ref:t,style:[C.root,ee&&C.inline,le,re]}),u.createElement(H,{style:[C.image,Ce[y],{backgroundImage:ue,filter:ne},$!=null&&{backgroundSize:$}],suppressHydrationWarning:!0}),se,Ie(ie,N.current))});X.displayName="Image";var R=X;R.getSize=function(e,t,r){m.getSize(e,t,r)};R.prefetch=function(e){return m.prefetch(e)};R.queryCache=function(e){return m.queryCache(e)};var C=p.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},image:x(x({},p.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:x(x({},p.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),Ce=p.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}});const Ae=R;export{Ae as I};
//# sourceMappingURL=index-5435131a.js.map
