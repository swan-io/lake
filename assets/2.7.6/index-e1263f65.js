import{_ as S}from"./extends-98964cd2.js";import{l as W,V as c,S as h}from"./Space-699872b3.js";import{r as t}from"./index-b9a8c83f.js";var _=["animating","color","hidesWhenStopped","size","style"],m=e=>t.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e}),p=t.forwardRef((e,v)=>{var r=e.animating,n=r===void 0?!0:r,o=e.color,s=o===void 0?"#1976D2":o,l=e.hidesWhenStopped,y=l===void 0?!0:l,d=e.size,i=d===void 0?"small":d,g=e.style,f=W(e,_),u=t.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},m({stroke:s,opacity:.2}),m({stroke:s,strokeDasharray:80,strokeDashoffset:60}));return t.createElement(c,S({},f,{"aria-valuemax":1,"aria-valuemin":0,ref:v,role:"progressbar",style:[a.container,g]}),t.createElement(c,{children:u,style:[typeof i=="number"?{height:i,width:i}:w[i],a.animation,!n&&a.animationPause,!n&&y&&a.hidesWhenStopped]}))});p.displayName="ActivityIndicator";var a=h.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),w=h.create({small:{width:20,height:20},large:{width:36,height:36}});const E=p;export{E as A};
//# sourceMappingURL=index-e1263f65.js.map
