import{j as c}from"./jsx-runtime-BlAj40OV.js";import{G as p,z as k,N as x,p as s,V}from"./ScrollView-C9Sl8l-9.js";import{r as o}from"./index-Cs7sjTYM.js";import{u as I,T as g}from"./TransitionView-BaZ6uvKi.js";const v=({children:l,enter:d,leave:y,style:u,childStyle:m})=>{const n=o.useRef([]),[,f]=o.useReducer(()=>[],[]),h=e=>{n.current=n.current.filter(r=>r.key!==e),f()},a=o.useMemo(()=>p.filterMap(o.Children.toArray(l),e=>k(e).with({key:x.string},r=>s.Some({key:r.key,child:r})).otherwise(()=>s.None())),[l]),w=I(a),S=new Set(a.map(e=>e.key));n.current=[...n.current,...p.filterMap(w.map((e,r)=>({item:e,index:r})),({item:e,index:r})=>S.has(e.key)||n.current.find(t=>t.key===e.key)?s.None():s.Some({key:e.key,index:r}))];const i=[];return a.forEach((e,r)=>{i.push({key:e.key,originalIndex:r,child:e.child})}),n.current.forEach(({index:e,key:r})=>{const t=i.findIndex(T=>T.originalIndex===e);t===-1?i.push({key:r,originalIndex:e,child:null}):i.splice(t,0,{key:r,originalIndex:e,child:null})}),c.jsx(V,{style:u,children:i.map(({key:e,child:r})=>c.jsx(g,{enter:d,leave:y,style:m,onLeave:()=>h(e),children:r},e))})};v.__docgenInfo={description:"",methods:[],displayName:"TransitionGroupView",props:{enter:{required:!1,tsType:{name:"AnimationStyles"},description:""},leave:{required:!1,tsType:{name:"AnimationStyles"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},childStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{v as T};
//# sourceMappingURL=TransitionGroupView-EeXoHSl6.js.map
