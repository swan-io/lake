import{s as y,k as d,i as e,a as V,V as _}from"./Space-BCOR-PRq.js";import{r as i}from"./index-CBqU2yxZ.js";const w=r=>{const t=i.useRef(r);return i.useEffect(()=>{t.current=r},[r]),t.current},E=y.create({base:{animationFillMode:"forwards"}}),f=({enter:r,leave:t,style:m,children:n,onLeave:a})=>{const o=i.useRef(null),s=i.useRef(null),[,p]=i.useReducer(()=>[],[]),l=w(n);return d(n)&&e(l)&&e(t)&&(s.current=l),e(n)&&d(l)&&(s.current=null),i.useLayoutEffect(()=>{if(d(n)&&e(t)&&e(o.current)){const u=o.current,c=()=>{s.current=null,p(),a==null||a(),u.removeEventListener("animationend",c)};return u.addEventListener("animationend",c),()=>u.removeEventListener("animationend",c)}},[n,t,a]),e(n)||e(s.current)?V(_,{ref:o,style:[E.base,m,r,e(s.current)&&t],children:n??s.current}):null};try{f.displayName="TransitionView",f.__docgenInfo={description:"",displayName:"TransitionView",props:{enter:{defaultValue:null,description:"",name:"enter",required:!1,type:{name:"AnimationStyles"}},leave:{defaultValue:null,description:"",name:"leave",required:!1,type:{name:"AnimationStyles"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"(() => void)"}}}}}catch{}export{f as T,w as u};
//# sourceMappingURL=TransitionView-D9FlI13W.js.map