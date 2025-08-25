import{j as e,B as g,s as W,f as k,n as w,S as b,L as p,c as d,a as h}from"./ScrollView-C78SkEne.js";import{r as B}from"./iframe-bSWLDtM2.js";import{L as q}from"./LakeRadio-CdsaDcm-.js";import{P as D}from"./Pressable-CLuPoIvD.js";import{S as L,a}from"./_StoriesComponents-akwUgReX.js";import"./index-BDj4D_R3.js";import"./preload-helper-DrfBMU97.js";import"./Separator-YJI7LZ9S.js";import"./commonStyles-BBEkV6IC.js";const o=W.create({container:{flexWrap:"wrap"},item:{flexDirection:"row",alignItems:"center"},withRightSpace:{marginRight:h[24]},withBottomSpace:{marginBottom:h[12]},errorContainer:{paddingTop:h[4]}});function v({items:n,direction:i="column",color:u="current",disabled:P=!1,hideErrors:E=!1,error:m,help:T,value:y,onValueChange:G}){const V=w(m);return e.jsxs(e.Fragment,{children:[e.jsx(g,{direction:i,style:o.container,children:n.map((l,f)=>{const x=f===n.length-1,c=P||!k(l.disabled);return e.jsxs(B.Fragment,{children:[e.jsxs(D,{disabled:c,onPress:()=>{l.value!==y&&G(l.value)},style:[o.item,i==="row"&&o.withBottomSpace,i==="row"&&!x&&o.withRightSpace],children:[e.jsx(q,{isError:V,disabled:c,color:u,value:l.value===y}),e.jsx(b,{width:12}),e.jsx(p,{color:c?d.gray[300]:d.gray[900],children:l.name})]}),!x&&e.jsx(b,{height:i==="column"?12:void 0})]},f)})}),!E&&e.jsx(g,{direction:"row",style:o.errorContainer,children:w(m)?e.jsx(p,{variant:"smallRegular",color:d.negative[500],children:m}):e.jsx(p,{variant:"smallRegular",color:d.gray[500],children:T??" "})})]})}v.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  value: V;
  disabled?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"V",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioGroupItem<V>[]"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"column" | "row"',elements:[{name:"literal",value:'"column"'},{name:"literal",value:'"row"'}]},description:"",defaultValue:{value:'"column"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:"",defaultValue:{value:'"current"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"V"},description:""},error:{required:!1,tsType:{name:"string"},description:""},help:{required:!1,tsType:{name:"string"},description:""},hideErrors:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: V) => void",signature:{arguments:[{type:{name:"V"},name:"value"}],return:{name:"void"}}},description:""}}};const J={title:"Forms/RadioGroup",component:v};function r(n){const[i,u]=B.useState();return e.jsx(v,{...n,value:i,onValueChange:u})}const t=[{name:"Less than €500",value:"LessThan500"},{name:"Between €500 and €1,500",value:"Between500And1500"},{name:"Between €1,500 and €3,000",value:"Between1500And3000"},{name:"Between €3,000 and €4,500",value:"Between3000And4500"},{name:"More than €4,500",value:"MoreThan4500"}],A=[{name:"Less than €500",value:"LessThan500"},{name:"Between €500 and €1,500",value:"Between500And1500"},{name:"Between €1,500 and €3,000",value:"Between1500And3000",disabled:!0},{name:"Between €3,000 and €4,500",value:"Between3000And4500"},{name:"More than €4,500",value:"MoreThan4500"}],s=()=>e.jsxs(L,{title:"RadioGroup",children:[e.jsx(a,{title:"Default",children:e.jsx(r,{items:t})}),e.jsx(a,{title:"Row direction",children:e.jsx(r,{items:t,direction:"row"})}),e.jsx(a,{title:"Disabled",children:e.jsx(r,{items:t,disabled:!0})}),e.jsx(a,{title:"With disabled item",children:e.jsx(r,{items:A})}),e.jsx(a,{title:"With color",children:e.jsx(r,{items:t,color:"live"})}),e.jsx(a,{title:"With help",children:e.jsx(r,{items:t,help:"Select a value"})}),e.jsx(a,{title:"With error",children:e.jsx(r,{items:t,error:"This is an error"})}),e.jsx(a,{title:"With hidden error",children:e.jsx(r,{items:t,error:"I'm hidden :(",hideErrors:!0})})]});s.__docgenInfo={description:"",methods:[],displayName:"Default"};var j,S,R;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
    </StoryBlock>;
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const K=["Default"];export{s as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=RadioGroup.stories-pFDEPdb2.js.map
