import{j as e,B as w,f as W,S as g,L as s,c as n,h as b,s as G,e as v}from"./ScrollView-2xhZ79Jo.js";import{r as S}from"./iframe-6Cz0xUxr.js";import{L as D}from"./LakeRadio-628844od.js";import{P as V}from"./Pressable-B8NN80MC.js";import{S as k,a}from"./_StoriesComponents-B5jelegm.js";import"./index-CPeLFKYT.js";import"./preload-helper-D1IIBeq1.js";import"./Separator-Do9AB7sg.js";import"./commonStyles-BBEkV6IC.js";const d=G.create({container:{flexWrap:"wrap"},item:{flexDirection:"row",alignItems:"center"},withRightSpace:{marginRight:v[24]},withBottomSpace:{marginBottom:v[12]},errorContainer:{paddingTop:v[4]}});function y({items:l,direction:r="column",color:c="current",disabled:R=!1,hideErrors:B=!1,error:p,help:P,value:x,onValueChange:E}){const T=b(p);return e.jsxs(e.Fragment,{children:[e.jsx(w,{direction:r,style:d.container,children:l.map((o,f)=>{const j=f===l.length-1,h=R||!W(o.disabled);return e.jsxs(S.Fragment,{children:[e.jsxs(V,{disabled:h,onPress:()=>{o.value!==x&&E(o.value)},style:[d.item,r==="row"&&d.withBottomSpace,r==="row"&&!j&&d.withRightSpace],children:[e.jsx(D,{isError:T,disabled:h,color:c,value:o.value===x}),e.jsx(g,{width:12}),e.jsx(s,{color:h?n.gray[300]:n.gray[900],children:o.name})]}),!j&&e.jsx(g,{height:r==="column"?12:void 0})]},f)})}),!B&&e.jsx(w,{direction:"row",style:d.errorContainer,children:b(p)?e.jsx(s,{variant:"smallRegular",color:n.negative[500],children:p}):e.jsx(s,{variant:"smallRegular",color:n.gray[500],children:P??" "})})]})}y.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: ReactNode;
  value: V;
  disabled?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"ReactNode",required:!0}},{key:"value",value:{name:"V",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioGroupItem<V>[]"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"column" | "row"',elements:[{name:"literal",value:'"column"'},{name:"literal",value:'"row"'}]},description:"",defaultValue:{value:'"column"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:"",defaultValue:{value:'"current"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"V"},description:""},error:{required:!1,tsType:{name:"string"},description:""},help:{required:!1,tsType:{name:"string"},description:""},hideErrors:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: V) => void",signature:{arguments:[{type:{name:"V"},name:"value"}],return:{name:"void"}}},description:""}}};const H={title:"Forms/RadioGroup",component:y};function t(l){const[r,c]=S.useState();return e.jsx(y,{...l,value:r,onValueChange:c})}function u({label:l,description:r}){return e.jsxs(s,{children:[e.jsx(s,{color:n.gray[900],children:l}),": ",e.jsx(s,{color:n.gray[500],children:r})]})}const i=[{name:"Less than €500",value:"LessThan500"},{name:"Between €500 and €1,500",value:"Between500And1500"},{name:"Between €1,500 and €3,000",value:"Between1500And3000"},{name:"Between €3,000 and €4,500",value:"Between3000And4500"},{name:"More than €4,500",value:"MoreThan4500"}],q=[{name:"Less than €500",value:"LessThan500"},{name:"Between €500 and €1,500",value:"Between500And1500"},{name:"Between €1,500 and €3,000",value:"Between1500And3000",disabled:!0},{name:"Between €3,000 and €4,500",value:"Between3000And4500"},{name:"More than €4,500",value:"MoreThan4500"}],L=[{name:e.jsx(u,{label:"Less than €500",description:"Suitable for occasional small purchases"}),value:"LessThan500"},{name:e.jsx(u,{label:"Between €500 and €1,500",description:"Ideal for regular everyday spending"}),value:"Between500And1500"},{name:e.jsx(u,{label:"Between €1,500 and €3,000",description:"For moderate to high monthly expenses"}),value:"Between1500And3000"},{name:e.jsx(u,{label:"Between €3,000 and €4,500",description:"For high spending needs"}),value:"Between3000And4500"},{name:e.jsx(u,{label:"More than €4,500",description:"No practical upper limit"}),value:"MoreThan4500"}],m=()=>e.jsxs(k,{title:"RadioGroup",children:[e.jsx(a,{title:"Default",children:e.jsx(t,{items:i})}),e.jsx(a,{title:"Row direction",children:e.jsx(t,{items:i,direction:"row"})}),e.jsx(a,{title:"Disabled",children:e.jsx(t,{items:i,disabled:!0})}),e.jsx(a,{title:"With disabled item",children:e.jsx(t,{items:q})}),e.jsx(a,{title:"With color",children:e.jsx(t,{items:i,color:"live"})}),e.jsx(a,{title:"With help",children:e.jsx(t,{items:i,help:"Select a value"})}),e.jsx(a,{title:"With error",children:e.jsx(t,{items:i,error:"This is an error"})}),e.jsx(a,{title:"With hidden error",children:e.jsx(t,{items:i,error:"I'm hidden :(",hideErrors:!0})}),e.jsx(a,{title:"With description",children:e.jsx(t,{items:L})})]});m.__docgenInfo={description:"",methods:[],displayName:"Default"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="RadioGroup">
      <StoryPart title="Default">
        <EditableRadioGroup items={items} />
      </StoryPart>

      <StoryPart title="Row direction">
        <EditableRadioGroup items={items} direction="row" />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableRadioGroup items={items} disabled={true} />
      </StoryPart>

      <StoryPart title="With disabled item">
        <EditableRadioGroup items={itemsWithDisabled} />
      </StoryPart>

      <StoryPart title="With color">
        <EditableRadioGroup items={items} color="live" />
      </StoryPart>

      <StoryPart title="With help">
        <EditableRadioGroup items={items} help="Select a value" />
      </StoryPart>

      <StoryPart title="With error">
        <EditableRadioGroup items={items} error="This is an error" />
      </StoryPart>

      <StoryPart title="With hidden error">
        <EditableRadioGroup items={items} error="I'm hidden :(" hideErrors={true} />
      </StoryPart>

      <StoryPart title="With description">
        <EditableRadioGroup items={itemsWithDescription} />
      </StoryPart>
    </StoryBlock>;
}`,...m.parameters?.docs?.source}}};const J=["Default"];export{m as Default,J as __namedExportsOrder,H as default};
//# sourceMappingURL=RadioGroup.stories-C1DFry2p.js.map
