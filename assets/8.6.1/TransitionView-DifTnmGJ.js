import{s as f,f as m,i as e,j as y,V as w}from"./ScrollView-CouMEPyK.js";import{r as s}from"./index-uCp2LrAq.js";const R=i=>{const t=s.useRef(i);return s.useEffect(()=>{t.current=i},[i]),t.current},T=f.create({base:{animationFillMode:"forwards"}}),E=({enter:i,leave:t,style:d,children:n,onLeave:o})=>{const a=s.useRef(null),r=s.useRef(null),[,p]=s.useReducer(()=>[],[]),u=R(n);return m(n)&&e(u)&&e(t)&&(r.current=u),e(n)&&m(u)&&(r.current=null),s.useLayoutEffect(()=>{if(m(n)&&e(t)&&e(a.current)){const l=a.current,c=()=>{r.current=null,p(),o==null||o(),l.removeEventListener("animationend",c)};return l.addEventListener("animationend",c),()=>l.removeEventListener("animationend",c)}},[n,t,o]),e(n)||e(r.current)?y.jsx(w,{ref:a,style:[T.base,d,i,e(r.current)&&t],children:n??r.current}):null};E.__docgenInfo={description:"",methods:[],displayName:"TransitionView",props:{enter:{required:!1,tsType:{name:"AnimationStyles"},description:""},leave:{required:!1,tsType:{name:"AnimationStyles"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | null",elements:[{name:"ReactNode"},{name:"null"}]},description:""},onLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{E as T,R as u};
//# sourceMappingURL=TransitionView-DifTnmGJ.js.map
