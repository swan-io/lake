import{S as m,c as e,s as a,a as r,V as c,B as b,K as g,j as k,I as y,b as C,L as h}from"./Space-ImkcMIim.js";import{P as f}from"./Pressable-MDITAEu6.js";import{A as x}from"./index-0MnYVmN_.js";import{S,a as A}from"./_StoriesComponents-NdmN1C35.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-4g5l5LRQ.js";import"./index-jmm5gWkb.js";import"./commonStyles-fDEJ_OM7.js";const t=m.create({container:{flexDirection:"row",alignItems:"flex-start",justifyContent:"center",flexWrap:"wrap"},icon:{borderColor:e.gray[300],borderWidth:1,borderStyle:"solid",paddingHorizontal:a[24],paddingVertical:a[12],borderRadius:32},actionContainer:{flex:1,minWidth:100},action:{alignItems:"center",paddingHorizontal:a[12],paddingVertical:a[8]},disabled:{opacity:.4},label:{lineHeight:16}}),l=({actions:n})=>r(c,{style:t.container,children:n.map((o,s)=>r(b,{content:o.tooltipText,placement:"top",containerStyle:t.actionContainer,disabled:o.tooltipDisabled===!0||g(o.tooltipText),children:k(f,{onPress:o.onPress,style:[t.action,o.disabled===!0&&t.disabled],disabled:o.isLoading===!0||o.disabled===!0,children:[r(c,{style:[t.icon,o.backgroundColor!=null?{backgroundColor:o.backgroundColor,borderColor:o.backgroundColor}:null],children:o.isLoading===!0?r(x,{color:o.color??e.gray[300],size:16}):r(y,{name:o.icon,size:16,color:o.color??e.gray[300]})}),r(C,{height:8}),r(h,{variant:"smallRegular",align:"center",style:t.label,children:o.label})]},s)},s))});try{l.displayName="QuickActions",l.__docgenInfo={description:"",displayName:"QuickActions",props:{actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"QuickAction[]"}}}}}catch{}const V={title:"Interactivity/QuickActions",component:l},D=[{icon:"building-bank-regular",label:"Bank",onPress:()=>console.log("Click on Bank")},{icon:"database-regular",label:"Database",onPress:()=>console.log("Click on Database"),backgroundColor:e.positive.primary,color:e.positive.contrast},{icon:"document-regular",label:"Document",tooltipText:"Add a new document",disabled:!0,onPress:()=>console.log("Click on Document"),backgroundColor:e.live.primary,color:e.live.contrast},{icon:"document-regular",label:"Document",tooltipText:"Add a new document",tooltipDisabled:!0,disabled:!1,onPress:()=>console.log("Click on Document"),backgroundColor:e.live.primary,color:e.live.contrast},{icon:"desktop-regular",label:"Desktop",onPress:()=>console.log("Click on Desktop"),isLoading:!0,backgroundColor:e.sandbox.primary,color:e.sandbox.contrast}],i=()=>r(S,{title:"QuickActions",children:r(A,{title:"With several actions",children:r(l,{actions:D})})});var d,u,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <StoryBlock title="QuickActions">
      <StoryPart title="With several actions">
        <QuickActions actions={actions} />
      </StoryPart>
    </StoryBlock>;
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const W=["Default"];export{i as Default,W as __namedExportsOrder,V as default};
//# sourceMappingURL=QuickActions.stories-OpyH2OAo.js.map