import{s as m,c as o,b as a,j as r,V as l,n as g,o as b,I as k,S as y,L as x}from"./Space-Bfex_hJx.js";import{P as f}from"./Pressable-BgOPYjbo.js";import{A as v}from"./index-CYWflgUg.js";import{S as C,a as h}from"./_StoriesComponents-BGHZFReg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";const t=m.create({container:{flexDirection:"row",alignItems:"flex-start",justifyContent:"center",flexWrap:"wrap"},icon:{borderColor:o.gray[300],borderWidth:1,borderStyle:"solid",paddingHorizontal:a[24],paddingVertical:a[12],borderRadius:32},actionContainer:{flex:1,minWidth:100},action:{alignItems:"center",paddingHorizontal:a[12],paddingVertical:a[8]},disabled:{opacity:.4},label:{lineHeight:16}}),i=({actions:p})=>r.jsx(l,{style:t.container,children:p.map((e,s)=>r.jsx(g,{content:e.tooltipText,placement:"right",containerStyle:t.actionContainer,disabled:e.tooltipDisabled===!0||b(e.tooltipText),children:r.jsxs(f,{onPress:e.onPress,style:[t.action,e.disabled===!0&&t.disabled],disabled:e.isLoading===!0||e.disabled===!0,children:[r.jsx(l,{style:[t.icon,e.backgroundColor!=null?{backgroundColor:e.backgroundColor,borderColor:e.backgroundColor}:null],children:e.isLoading===!0?r.jsx(v,{color:e.color??o.gray[300],size:16}):r.jsx(k,{name:e.icon,size:16,color:e.color??o.gray[300]})}),r.jsx(y,{height:8}),r.jsx(x,{variant:"smallRegular",align:"center",style:t.label,children:e.label})]},s)},s))});i.__docgenInfo={description:"",methods:[],displayName:"QuickActions",props:{actions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: IconName;
  label: string;
  tooltipText?: string;
  tooltipDisabled?: boolean;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  backgroundColor?: string;
  color?: string;
}`,signature:{properties:[{key:"icon",value:{name:"unknown",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tooltipText",value:{name:"string",required:!1}},{key:"tooltipDisabled",value:{name:"boolean",required:!1}},{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"isLoading",value:{name:"boolean",required:!1}},{key:"backgroundColor",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}],raw:"QuickAction[]"},description:""}}};const Q={title:"Interactivity/QuickActions",component:i},D=[{icon:"building-bank-regular",label:"Bank",onPress:()=>console.log("Click on Bank")},{icon:"database-regular",label:"Database",onPress:()=>console.log("Click on Database"),backgroundColor:o.positive.primary,color:o.positive.contrast},{icon:"document-regular",label:"Document",tooltipText:"Add a new document",disabled:!0,onPress:()=>console.log("Click on Document"),backgroundColor:o.live.primary,color:o.live.contrast},{icon:"document-regular",label:"Document",tooltipText:"Add a new document",tooltipDisabled:!0,disabled:!1,onPress:()=>console.log("Click on Document"),backgroundColor:o.live.primary,color:o.live.contrast},{icon:"desktop-regular",label:"Desktop",onPress:()=>console.log("Click on Desktop"),isLoading:!0,backgroundColor:o.sandbox.primary,color:o.sandbox.contrast}],n=()=>r.jsx(C,{title:"QuickActions",children:r.jsx(h,{title:"With several actions",children:r.jsx(i,{actions:D})})});n.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,d,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <StoryBlock title="QuickActions">
      <StoryPart title="With several actions">
        <QuickActions actions={actions} />
      </StoryPart>
    </StoryBlock>;
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,Q as default};
//# sourceMappingURL=QuickActions.stories-C1cuxhpI.js.map
