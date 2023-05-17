import{S as m,c as e,s as i,a as r,V as c,p as b,j as g,b as k,L as y}from"./Space-47397085.js";import{I as f}from"./Icon-4b2faede.js";import{L as h}from"./LakeTooltip-cebddb48.js";import{P as C}from"./Pressable-0a6a8b12.js";import{A as x}from"./index-de39eefd.js";import{S as A,a as D}from"./_StoriesComponents-51aec9e7.js";import"./extends-98964cd2.js";import"./index-ebeaab24.js";import"./Svg-bb14214e.js";import"./index-9c09ad76.js";import"./index-1edc860b.js";import"./useMergeRefs-8bae9efe.js";import"./Portal-e70d4f41.js";import"./WithCurrentColor-ec684688.js";const t=m.create({container:{flexDirection:"row",alignItems:"flex-start",justifyContent:"center"},icon:{borderColor:e.gray[300],borderWidth:1,borderStyle:"solid",paddingHorizontal:i[24],paddingVertical:i[12],borderRadius:32},action:{alignItems:"center",paddingHorizontal:i[12],flexBasis:"30%"},disabled:{alignItems:"center",paddingHorizontal:i[12],flexBasis:"30%",opacity:.4},label:{lineHeight:16}}),l=({actions:s})=>r(c,{style:t.container,children:s.map((o,n)=>r(h,{content:o.tooltipText,placement:"top",disabled:o.tooltipDisabled===!0||b(o.tooltipText),children:g(C,{onPress:o.onPress,style:o.disabled===!0?t.disabled:t.action,disabled:o.isLoading===!0||o.disabled===!0,children:[r(c,{style:[t.icon,o.backgroundColor!=null?{backgroundColor:o.backgroundColor,borderColor:o.backgroundColor}:null],children:o.isLoading===!0?r(x,{color:o.color??e.gray[300],size:16}):r(f,{name:o.icon,size:16,color:o.color??e.gray[300]})}),r(k,{height:8}),r(y,{variant:"smallRegular",align:"center",style:t.label,children:o.label})]},n)},n))});try{l.displayName="QuickActions",l.__docgenInfo={description:"",displayName:"QuickActions",props:{actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"QuickAction[]"}}}}}catch{}const W={title:"Interactivity/QuickActions",component:l},S=[{icon:"building-bank-regular",label:"Bank",onPress:()=>console.log("Click on Bank")},{icon:"database-regular",label:"Database",onPress:()=>console.log("Click on Database"),backgroundColor:e.positive.primary,color:e.positive.contrast},{icon:"document-regular",label:"Document",tooltipText:"Add a new document",disabled:!0,onPress:()=>console.log("Click on Document"),backgroundColor:e.live.primary,color:e.live.contrast},{icon:"document-regular",label:"Document",tooltipText:"Add a new document",tooltipDisabled:!0,disabled:!1,onPress:()=>console.log("Click on Document"),backgroundColor:e.live.primary,color:e.live.contrast},{icon:"desktop-regular",label:"Desktop",onPress:()=>console.log("Click on Desktop"),isLoading:!0,backgroundColor:e.sandbox.primary,color:e.sandbox.contrast}],a=()=>r(A,{title:"QuickActions",children:r(D,{title:"With several actions",children:r(l,{actions:S})})});var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <StoryBlock title="QuickActions">
      <StoryPart title="With several actions">
        <QuickActions actions={actions} />
      </StoryPart>
    </StoryBlock>;
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const E=["Default"];export{a as Default,E as __namedExportsOrder,W as default};
//# sourceMappingURL=QuickActions.stories-1fc643db.js.map
