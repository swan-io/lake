import{S as m,c as e,s as i,a as r,V as c,x as b,j as g,b as k,L as y}from"./Space-57107f4e.js";import{I as C}from"./Icon-cf4ea6a3.js";import{L as f}from"./LakeTooltip-511c6b5e.js";import{P as h}from"./Pressable-912f514b.js";import{A as x}from"./index-c1bfc883.js";import{S,a as A}from"./_StoriesComponents-152d52c7.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8db94870.js";import"./Svg-c3c146c4.js";import"./index-8ce4a492.js";import"./index-73e1d3ab.js";import"./useMergeRefs-2375844e.js";import"./Portal-8c029158.js";import"./WithCurrentColor-c53f695f.js";const t=m.create({container:{flexDirection:"row",alignItems:"flex-start",justifyContent:"center",flexWrap:"wrap"},icon:{borderColor:e.gray[300],borderWidth:1,borderStyle:"solid",paddingHorizontal:i[24],paddingVertical:i[12],borderRadius:32},actionContainer:{flex:1,minWidth:100},action:{alignItems:"center",paddingHorizontal:i[12],paddingVertical:i[8]},disabled:{opacity:.4},label:{lineHeight:16}}),l=({actions:n})=>r(c,{style:t.container,children:n.map((o,s)=>r(f,{content:o.tooltipText,placement:"top",containerStyle:t.actionContainer,disabled:o.tooltipDisabled===!0||b(o.tooltipText),children:g(h,{onPress:o.onPress,style:[t.action,o.disabled===!0&&t.disabled],disabled:o.isLoading===!0||o.disabled===!0,children:[r(c,{style:[t.icon,o.backgroundColor!=null?{backgroundColor:o.backgroundColor,borderColor:o.backgroundColor}:null],children:o.isLoading===!0?r(x,{color:o.color??e.gray[300],size:16}):r(C,{name:o.icon,size:16,color:o.color??e.gray[300]})}),r(k,{height:8}),r(y,{variant:"smallRegular",align:"center",style:t.label,children:o.label})]},s)},s))});try{l.displayName="QuickActions",l.__docgenInfo={description:"",displayName:"QuickActions",props:{actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"QuickAction[]"}}}}}catch{}const E={title:"Interactivity/QuickActions",component:l},D=[{icon:"building-bank-regular",label:"Bank",onPress:()=>console.log("Click on Bank")},{icon:"database-regular",label:"Database",onPress:()=>console.log("Click on Database"),backgroundColor:e.positive.primary,color:e.positive.contrast},{icon:"document-regular",label:"Document",tooltipText:"Add a new document",disabled:!0,onPress:()=>console.log("Click on Document"),backgroundColor:e.live.primary,color:e.live.contrast},{icon:"document-regular",label:"Document",tooltipText:"Add a new document",tooltipDisabled:!0,disabled:!1,onPress:()=>console.log("Click on Document"),backgroundColor:e.live.primary,color:e.live.contrast},{icon:"desktop-regular",label:"Desktop",onPress:()=>console.log("Click on Desktop"),isLoading:!0,backgroundColor:e.sandbox.primary,color:e.sandbox.contrast}],a=()=>r(S,{title:"QuickActions",children:r(A,{title:"With several actions",children:r(l,{actions:D})})});var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <StoryBlock title="QuickActions">
      <StoryPart title="With several actions">
        <QuickActions actions={actions} />
      </StoryPart>
    </StoryBlock>;
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const O=["Default"];export{a as Default,O as __namedExportsOrder,E as default};
//# sourceMappingURL=QuickActions.stories-1d169f79.js.map
