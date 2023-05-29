import{S as v,j as f,a as e,V as p}from"./Space-1224ae57.js";import{r as P}from"./index-ebeaab24.js";import{L as m,a as C}from"./LakeCheckbox-0ddbf2e1.js";import{P as I}from"./Pressable-cd6f2171.js";import{S as x,a as t}from"./_StoriesComponents-df71f637.js";import"./extends-98964cd2.js";import"./Svg-336b6968.js";import"./useMergeRefs-fd712292.js";import"./index-d714868b.js";const V=v.create({container:{alignSelf:"flex-start"}}),q={title:"Forms/Checkbox",component:m},r=({defaultValue:o=!1,...a})=>{const[i,c]=P.useState(o),u=()=>{c(d=>d!==!0)};return e(I,{style:V.container,onPress:u,disabled:a.disabled,children:e(m,{value:i,...a})})},g=({defaultValue:o=!1,...a})=>{const[i,c]=P.useState(o),u=()=>{c(d=>d!==!0)};return e(p,{style:V.container,children:e(C,{value:i,onValueChange:u,...a})})},l=()=>f(x,{title:"Variations",children:[e(t,{title:"Default",children:e(r,{})}),e(t,{title:"Indeterminate",children:e(r,{defaultValue:"mixed"})}),e(t,{title:"Lablelled",children:e(g,{label:"Enabled"})}),e(t,{title:"Disabled",children:e(r,{disabled:!0})}),e(t,{title:"Disabled checked",children:e(r,{defaultValue:!0,disabled:!0})}),e(t,{title:"Indeterminate checked",children:e(r,{defaultValue:"mixed",disabled:!0})}),e(t,{title:"Error",children:e(r,{isError:!0})})]}),n=()=>f(x,{title:"Colors",description:"Checkbox color impacts only checked state",children:[e(t,{title:"Default",children:e(r,{defaultValue:!0})}),e(t,{title:"gray",children:e(r,{defaultValue:!0,color:"gray"})}),e(t,{title:"live",children:e(r,{defaultValue:!0,color:"live"})}),e(t,{title:"sandbox",children:e(r,{defaultValue:!0,color:"sandbox"})}),e(t,{title:"positive",children:e(r,{defaultValue:!0,color:"positive"})}),e(t,{title:"warning",children:e(r,{defaultValue:!0,color:"warning"})}),e(t,{title:"negative",children:e(r,{defaultValue:!0,color:"negative"})}),e(t,{title:"current",children:e(r,{defaultValue:!0,color:"current"})}),e(t,{title:"partner",children:e(r,{defaultValue:!0,color:"partner"})}),e(t,{title:"swan",children:e(r,{defaultValue:!0,color:"swan"})}),e(t,{title:"shakespear",children:e(r,{defaultValue:!0,color:"shakespear"})}),e(t,{title:"darkPink",children:e(r,{defaultValue:!0,color:"darkPink"})}),e(t,{title:"sunglow",children:e(r,{defaultValue:!0,color:"sunglow"})}),e(t,{title:"mediumSladeBlue",children:e(r,{defaultValue:!0,color:"mediumSladeBlue"})})]});var s,h,S;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <StoryBlock title="Variations">
      <StoryPart title="Default">
        <InteractiveCheckbox />
      </StoryPart>

      <StoryPart title="Indeterminate">
        <InteractiveCheckbox defaultValue="mixed" />
      </StoryPart>

      <StoryPart title="Lablelled">
        <InteractiveLabelledCheckbox label="Enabled" />
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
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var y,b,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const z=["Variations","Colors"];export{n as Colors,l as Variations,z as __namedExportsOrder,q as default};
//# sourceMappingURL=Checkbox.stories-acd1d3c0.js.map
