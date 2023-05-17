import{S as h,c as e,s as n,a as t,V as p,p as f,j as g,b as S,L as A}from"./Space-47397085.js";import{I as P}from"./Icon-4b2faede.js";import{L as x}from"./LakeTooltip-cebddb48.js";import{P as C}from"./Pressable-0a6a8b12.js";import{A as D}from"./index-de39eefd.js";import{S as Q,a as r}from"./_StoriesComponents-51aec9e7.js";import"./extends-98964cd2.js";import"./index-ebeaab24.js";import"./Svg-bb14214e.js";import"./index-9c09ad76.js";import"./index-1edc860b.js";import"./useMergeRefs-8bae9efe.js";import"./Portal-e70d4f41.js";import"./WithCurrentColor-ec684688.js";const a=h.create({container:{flexDirection:"row",alignItems:"flex-start",justifyContent:"center"},icon:{borderColor:e.gray[300],borderWidth:1,borderStyle:"solid",paddingHorizontal:n[24],paddingVertical:n[12],borderRadius:32},action:{alignItems:"center",paddingHorizontal:n[12],flexBasis:"30%"},disabled:{alignItems:"center",paddingHorizontal:n[12],flexBasis:"30%",opacity:.4},label:{lineHeight:16}}),i=({actions:c,tooltipDisabled:k=!1,tooltipText:d})=>t(p,{style:a.container,children:c.map((o,u)=>t(x,{content:d,placement:"top",disabled:k||f(d),children:g(C,{onPress:o.onPress,style:o.disabled===!0?a.disabled:a.action,disabled:o.isLoading===!0||o.disabled===!0,children:[t(p,{style:[a.icon,o.backgroundColor!=null?{backgroundColor:o.backgroundColor,borderColor:o.backgroundColor}:null],children:o.isLoading===!0?t(D,{color:o.color??e.gray[300],size:16}):t(P,{name:o.icon,size:16,color:o.color??e.gray[300]})}),t(S,{height:8}),t(A,{variant:"smallRegular",align:"center",style:a.label,children:o.label})]},u)},u))});try{i.displayName="QuickActions",i.__docgenInfo={description:"",displayName:"QuickActions",props:{actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"QuickAction[]"}},tooltipDisabled:{defaultValue:{value:"false"},description:"",name:"tooltipDisabled",required:!1,type:{name:"boolean"}},tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"string"}}}}}catch{}const E={title:"Interactivity/QuickActions",component:i},l=[{icon:"building-bank-regular",label:"Bank",onPress:()=>console.log("Click on Bank")},{icon:"database-regular",label:"Database",onPress:()=>console.log("Click on Database"),backgroundColor:e.positive.primary,color:e.positive.contrast},{icon:"document-regular",label:"Document",disabled:!0,onPress:()=>console.log("Click on Document"),backgroundColor:e.live.primary,color:e.live.contrast},{icon:"desktop-regular",label:"Desktop",onPress:()=>console.log("Click on Desktop"),isLoading:!0,backgroundColor:e.sandbox.primary,color:e.sandbox.contrast}],s=()=>g(Q,{title:"QuickActions",children:[t(r,{title:"Without any action",children:t(i,{actions:[]})}),t(r,{title:"Without 1 action",children:t(i,{actions:l.slice(0,1)})}),t(r,{title:"Without several actions",children:t(i,{actions:l})}),t(r,{title:"With tooltip",children:t(i,{actions:l,tooltipText:"Actions"})}),t(r,{title:"With tooltip disabled",children:t(i,{actions:l,tooltipText:"Actions",tooltipDisabled:!0})})]});var m,b,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="QuickActions">
      <StoryPart title="Without any action">
        <QuickActions actions={[]} />
      </StoryPart>

      <StoryPart title="Without 1 action">
        <QuickActions actions={actions.slice(0, 1)} />
      </StoryPart>

      <StoryPart title="Without several actions">
        <QuickActions actions={actions} />
      </StoryPart>

      <StoryPart title="With tooltip">
        <QuickActions actions={actions} tooltipText="Actions" />
      </StoryPart>

      <StoryPart title="With tooltip disabled">
        <QuickActions actions={actions} tooltipText="Actions" tooltipDisabled={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const O=["Default"];export{s as Default,O as __namedExportsOrder,E as default};
//# sourceMappingURL=QuickActions.stories-a02bf585.js.map
