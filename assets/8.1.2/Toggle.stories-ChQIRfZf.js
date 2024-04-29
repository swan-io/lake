import{s as A,c as o,j as e,V as M,B as j,I as k,L}from"./Space-DwfUYIjw.js";import{r}from"./index-CBqU2yxZ.js";import{c as q}from"./commonStyles-t4XfA7cz.js";import{P as B}from"./Pressable-Q8uRqM2I.js";import{S as E,a as c}from"./_StoriesComponents-DjOscnYS.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";const l=26,s=1,d=A.create({switch:{userSelect:"none",flexDirection:"row",borderRadius:l/2,transform:"translateZ(0px)",width:"min-content",borderColor:o.gray[100],borderWidth:s},handle:{position:"absolute",width:l,height:l,top:-s,borderRadius:l/2,transitionDuration:"300ms",transitionTimingFunction:"ease-in-out",borderWidth:s},switchItem:{paddingHorizontal:8,height:l-s*2,display:"flex",alignItems:"center",justifyContent:"center"}}),n=({onToggle:a,value:t,disabled:m=!1,mode:w="desktop",onLabel:g,offLabel:f})=>{const b=r.useRef(null),y=r.useRef(null),h=r.useRef(null),[P,D]=r.useState(),u=w==="mobile",x=t?o.positive[500]:o.gray[500],T=t?o.gray[500]:o.negative[500],p=r.useCallback(()=>{var v;(v=(t?y:h).current)==null||v.measureLayout(b.current,(I,H,R)=>{D(_=>({transitionProperty:_?"width, transform":"none",width:R+2*s,transform:`translateX(${t?-s:I-2*s}px)`}))},()=>{})},[t]);return r.useEffect(p,[p,t,u,g,f]),e.jsxs(B,{style:[d.switch,m&&q.disabled],onPress:()=>a(!t),"aria-disabled":m,"aria-checked":t,disabled:m,ref:b,role:"switch",onLayout:p,children:[e.jsx(M,{style:[d.handle,P,{borderColor:t?o.positive[500]:o.negative[500],backgroundColor:t?o.positive[50]:o.negative[50]}]}),e.jsx(j,{style:d.switchItem,ref:y,children:u?e.jsx(k,{size:16,name:"checkmark-circle-regular",color:x}):e.jsx(L,{variant:"smallMedium",color:x,children:g})}),e.jsx(j,{style:d.switchItem,ref:h,children:u?e.jsx(k,{size:16,name:"subtract-circle-regular",color:T}):e.jsx(L,{variant:"smallMedium",color:T,children:f})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{value:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"(next: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"next"}],return:{name:"void"}}},description:""},mode:{required:!1,tsType:{name:"union",raw:'"desktop" | "mobile"',elements:[{name:"literal",value:'"desktop"'},{name:"literal",value:'"mobile"'}]},description:"",defaultValue:{value:'"desktop"',computed:!1}},onLabel:{required:!0,tsType:{name:"string"},description:""},offLabel:{required:!0,tsType:{name:"string"},description:""}}};const $={title:"Forms/Toggle",component:n},i=()=>{const[a,t]=r.useState(!1);return e.jsxs(E,{title:"Variations",description:"Toggle component",children:[e.jsx(c,{title:"Desktop",children:e.jsx(n,{value:a,onToggle:t,mode:"desktop",offLabel:"Canceled",onLabel:"Active"})}),e.jsx(c,{title:"Desktop Disabled",children:e.jsx(n,{value:a,onToggle:t,mode:"desktop",disabled:!0,offLabel:"Canceled",onLabel:"Active"})}),e.jsx(c,{title:"Mobile",children:e.jsx(n,{value:a,onToggle:t,mode:"mobile",offLabel:"Canceled",onLabel:"Active"})}),e.jsx(c,{title:"Mobile Disabled",children:e.jsx(n,{value:a,disabled:!0,onToggle:t,mode:"mobile",offLabel:"Canceled",onLabel:"Active"})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};var S,C,V;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <StoryBlock title="Variations" description="Toggle component">
      <StoryPart title="Desktop">
        <Toggle value={value} onToggle={setValue} mode="desktop" offLabel="Canceled" onLabel="Active" />
      </StoryPart>

      <StoryPart title="Desktop Disabled">
        <Toggle value={value} onToggle={setValue} mode="desktop" disabled={true} offLabel="Canceled" onLabel="Active" />
      </StoryPart>

      <StoryPart title="Mobile">
        <Toggle value={value} onToggle={setValue} mode="mobile" offLabel="Canceled" onLabel="Active" />
      </StoryPart>

      <StoryPart title="Mobile Disabled">
        <Toggle value={value} disabled={true} onToggle={setValue} mode="mobile" offLabel="Canceled" onLabel="Active" />
      </StoryPart>
    </StoryBlock>;
}`,...(V=(C=i.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const J=["Variations"];export{i as Variations,J as __namedExportsOrder,$ as default};
//# sourceMappingURL=Toggle.stories-ChQIRfZf.js.map