import{S as k,c as u,e as R,k as m,j as n,a as _,F as v,V as d,I as V}from"./Space-d12e3bfc.js";import{r as a}from"./index-f1286426.js";import{A as y}from"./Animated-f24508ae.js";import{i as D}from"./math-b41862e6.js";import{P as I}from"./index-e1411ff8.js";const f=Symbol("unset"),P=e=>{const o=a.useRef(f);return o.current===f&&(o.current=new y.Value(e)),o.current},h=36,g=16,p=2,t=k.create({base:{backgroundColor:u.gray[300],borderRadius:10,height:20,width:h,boxSizing:"content-box",transitionProperty:"background-color",transitionDuration:"300ms",boxShadow:"inset 0 0 0 1px rgba(0, 0, 0, 0.2)"},active:{backgroundColor:u.positive[500]},disabled:{opacity:.5},opaque:{opacity:1},button:{alignItems:"center",backgroundColor:R.accented,borderRadius:8,boxShadow:m.tile,height:16,justifyContent:"center",left:0,position:"absolute",top:p,width:g},icon:{opacity:0,transitionProperty:"opacity",transitionDuration:"300ms"},shadow:{position:"absolute",width:"100%",height:"100%",borderRadius:10,boxShadow:m.tile,opacity:0,transitionProperty:"opacity",transitionDuration:"300ms"}}),b=a.memo(a.forwardRef(({value:e,disabled:o=!1,onValueChange:s},w)=>{const i=e?1:0,r=P(i),c=a.useRef(null);return a.useEffect(()=>{const l=D({inputRange:[0,1],outputRange:[p,h-g-p]}),S=r.addListener(({value:x})=>{c.current instanceof HTMLElement&&(c.current.style.transform=`translateX(${l(x)}px)`)});return()=>{r.removeListener(S)}},[r]),a.useEffect(()=>{y.spring(r,{bounciness:6,speed:25,toValue:i,useNativeDriver:!1}).start()},[r,i]),n(I,{ref:w,role:"switch","aria-checked":e,disabled:o,onPress:()=>s==null?void 0:s(!e),children:({hovered:l})=>_(v,{children:[n(d,{style:[t.shadow,l&&t.opaque]}),n(d,{style:[t.base,e&&t.active,o&&t.disabled],children:n(d,{ref:c,style:t.button,children:n(V,{color:u.positive[400],name:"checkmark-filled",size:10,style:[t.icon,e&&t.opaque]})})})]})})}));try{b.displayName="Switch",b.__docgenInfo={description:"",displayName:"Switch",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: boolean) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{b as S};
//# sourceMappingURL=Switch-3f4ac579.js.map