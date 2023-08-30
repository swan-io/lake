import{S as V,a as s,j as e,V as x}from"./Space-93b72cf8.js";import{r as p}from"./index-b9a8c83f.js";import{L as h}from"./LakeCheckbox-5bfb9d4f.js";import{S,a as t}from"./_StoriesComponents-0e95db7e.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-70dc3c29.js";import"./useMergeRefs-712d4e18.js";import"./Box-72c83bdd.js";const v=V.create({container:{alignSelf:"flex-start"}}),_={title:"Forms/Checkbox",component:h},r=({defaultValue:y=!1,...k})=>{const[b,f]=p.useState(y),P=()=>{f(m=>m!==!0)};return e(x,{style:v.container,children:e(h,{value:b,onValueChange:P,...k})})},a=()=>s(S,{title:"Variations",children:[e(t,{title:"Default",children:e(r,{})}),e(t,{title:"Indeterminate",children:e(r,{defaultValue:"mixed"})}),e(t,{title:"Lablelled",children:e(r,{label:"Enabled"})}),e(t,{title:"Disabled",children:e(r,{disabled:!0})}),e(t,{title:"Disabled checked",children:e(r,{defaultValue:!0,disabled:!0})}),e(t,{title:"Indeterminate checked",children:e(r,{defaultValue:"mixed",disabled:!0})}),e(t,{title:"Error",children:e(r,{isError:!0})})]}),l=()=>s(S,{title:"Colors",description:"Checkbox color impacts only checked state",children:[e(t,{title:"Default",children:e(r,{defaultValue:!0})}),e(t,{title:"gray",children:e(r,{defaultValue:!0,color:"gray"})}),e(t,{title:"live",children:e(r,{defaultValue:!0,color:"live"})}),e(t,{title:"sandbox",children:e(r,{defaultValue:!0,color:"sandbox"})}),e(t,{title:"positive",children:e(r,{defaultValue:!0,color:"positive"})}),e(t,{title:"warning",children:e(r,{defaultValue:!0,color:"warning"})}),e(t,{title:"negative",children:e(r,{defaultValue:!0,color:"negative"})}),e(t,{title:"current",children:e(r,{defaultValue:!0,color:"current"})}),e(t,{title:"partner",children:e(r,{defaultValue:!0,color:"partner"})}),e(t,{title:"swan",children:e(r,{defaultValue:!0,color:"swan"})}),e(t,{title:"shakespear",children:e(r,{defaultValue:!0,color:"shakespear"})}),e(t,{title:"darkPink",children:e(r,{defaultValue:!0,color:"darkPink"})}),e(t,{title:"sunglow",children:e(r,{defaultValue:!0,color:"sunglow"})}),e(t,{title:"mediumSladeBlue",children:e(r,{defaultValue:!0,color:"mediumSladeBlue"})})]});var o,n,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <StoryBlock title="Variations">
      <StoryPart title="Default">
        <InteractiveCheckbox />
      </StoryPart>

      <StoryPart title="Indeterminate">
        <InteractiveCheckbox defaultValue="mixed" />
      </StoryPart>

      <StoryPart title="Lablelled">
        <InteractiveCheckbox label="Enabled" />
      </StoryPart>

      <StoryPart title="Disabled">
        <InteractiveCheckbox disabled={true} />
      </StoryPart>

      <StoryPart title="Disabled checked">
        <InteractiveCheckbox defaultValue={true} disabled={true} />
      </StoryPart>

      <StoryPart title="Indeterminate checked">
        <InteractiveCheckbox defaultValue="mixed" disabled={true} />
      </StoryPart>

      <StoryPart title="Error">
        <InteractiveCheckbox isError={true} />
      </StoryPart>
    </StoryBlock>;
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,u,d;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <StoryBlock title="Colors" description="Checkbox color impacts only checked state">
      <StoryPart title="Default">
        <InteractiveCheckbox defaultValue={true} />
      </StoryPart>

      <StoryPart title="gray">
        <InteractiveCheckbox defaultValue={true} color="gray" />
      </StoryPart>

      <StoryPart title="live">
        <InteractiveCheckbox defaultValue={true} color="live" />
      </StoryPart>

      <StoryPart title="sandbox">
        <InteractiveCheckbox defaultValue={true} color="sandbox" />
      </StoryPart>

      <StoryPart title="positive">
        <InteractiveCheckbox defaultValue={true} color="positive" />
      </StoryPart>

      <StoryPart title="warning">
        <InteractiveCheckbox defaultValue={true} color="warning" />
      </StoryPart>

      <StoryPart title="negative">
        <InteractiveCheckbox defaultValue={true} color="negative" />
      </StoryPart>

      <StoryPart title="current">
        <InteractiveCheckbox defaultValue={true} color="current" />
      </StoryPart>

      <StoryPart title="partner">
        <InteractiveCheckbox defaultValue={true} color="partner" />
      </StoryPart>

      <StoryPart title="swan">
        <InteractiveCheckbox defaultValue={true} color="swan" />
      </StoryPart>

      <StoryPart title="shakespear">
        <InteractiveCheckbox defaultValue={true} color="shakespear" />
      </StoryPart>

      <StoryPart title="darkPink">
        <InteractiveCheckbox defaultValue={true} color="darkPink" />
      </StoryPart>

      <StoryPart title="sunglow">
        <InteractiveCheckbox defaultValue={true} color="sunglow" />
      </StoryPart>

      <StoryPart title="mediumSladeBlue">
        <InteractiveCheckbox defaultValue={true} color="mediumSladeBlue" />
      </StoryPart>
    </StoryBlock>;
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const F=["Variations","Colors"];export{l as Colors,a as Variations,F as __namedExportsOrder,_ as default};
//# sourceMappingURL=Checkbox.stories-aaff00e0.js.map
