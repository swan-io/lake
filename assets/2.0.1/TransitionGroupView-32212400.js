import{a as c,V as g}from"./Space-708a304c.js";import{d,h as l}from"./Boxed-b55f7b9d.js";import{r as o}from"./index-ebeaab24.js";import{K as I,S as _}from"./index-4c3a1169.js";import{u as v,T as x}from"./TransitionView-8aea257b.js";const u=({children:a,enter:p,leave:y,style:f,childStyle:m})=>{const n=o.useRef([]),[,h]=o.useReducer(()=>[],[]),V=e=>{n.current=n.current.filter(r=>r.key!==e),h()},s=o.useMemo(()=>d.filterMap(o.Children.toArray(a),e=>I(e).with({key:_.string},r=>l.Some({key:r.key,child:r})).otherwise(()=>l.None())),[a]),S=v(s),w=new Set(s.map(e=>e.key));n.current=[...n.current,...d.filterMap(S.map((e,r)=>({item:e,index:r})),({item:e,index:r})=>w.has(e.key)||n.current.find(t=>t.key===e.key)?l.None():l.Some({key:e.key,index:r}))];const i=[];return s.forEach((e,r)=>{i.push({key:e.key,originalIndex:r,child:e.child})}),n.current.forEach(({index:e,key:r})=>{const t=i.findIndex(k=>k.originalIndex===e);t===-1?i.push({key:r,originalIndex:e,child:null}):i.splice(t,0,{key:r,originalIndex:e,child:null})}),c(g,{style:f,children:i.map(({key:e,child:r})=>c(x,{enter:p,leave:y,style:m,onLeave:()=>V(e),children:r},e))})};try{u.displayName="TransitionGroupView",u.__docgenInfo={description:"",displayName:"TransitionGroupView",props:{enter:{defaultValue:null,description:"",name:"enter",required:!1,type:{name:"AnimationStyles"}},leave:{defaultValue:null,description:"",name:"leave",required:!1,type:{name:"AnimationStyles"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},childStyle:{defaultValue:null,description:"",name:"childStyle",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}export{u as T};
//# sourceMappingURL=TransitionGroupView-32212400.js.map
