import{S as v,a as f,j as e,V as p}from"./Space-f85095f8.js";import{r as P}from"./index-b9a8c83f.js";import{a as m,L as C}from"./LakeCheckbox-84454656.js";import{P as I}from"./Pressable-7e9fd84c.js";import{S as x,a as t}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./useMergeRefs-56399732.js";import"./Box-f4fbfbba.js";const V=v.create({container:{alignSelf:"flex-start"}}),O={title:"Forms/Checkbox",component:m},r=({defaultValue:a=!1,...l})=>{const[o,c]=P.useState(a),u=()=>{c(d=>d!==!0)};return e(I,{style:V.container,onPress:u,disabled:l.disabled,children:e(m,{value:o,...l})})},g=({defaultValue:a=!1,...l})=>{const[o,c]=P.useState(a),u=()=>{c(d=>d!==!0)};return e(p,{style:V.container,children:e(C,{value:o,onValueChange:u,...l})})},n=({color:a,disabled:l,isError:o})=>f(x,{title:"Variations",children:[e(t,{title:"Default",children:e(r,{color:a,disabled:l,isError:o})}),e(t,{title:"Indeterminate",children:e(r,{defaultValue:"mixed"})}),e(t,{title:"Lablelled",children:e(g,{label:"Enabled"})}),e(t,{title:"Disabled",children:e(r,{disabled:!0})}),e(t,{title:"Disabled checked",children:e(r,{defaultValue:!0,disabled:!0})}),e(t,{title:"Indeterminate checked",children:e(r,{defaultValue:"mixed",disabled:!0})}),e(t,{title:"Error",children:e(r,{isError:!0})})]}),i=({color:a})=>f(x,{title:"Colors",description:"Checkbox color impacts only checked state",children:[e(t,{title:"Default",children:e(r,{defaultValue:!0,color:a})}),e(t,{title:"gray",children:e(r,{defaultValue:!0,color:"gray"})}),e(t,{title:"live",children:e(r,{defaultValue:!0,color:"live"})}),e(t,{title:"sandbox",children:e(r,{defaultValue:!0,color:"sandbox"})}),e(t,{title:"positive",children:e(r,{defaultValue:!0,color:"positive"})}),e(t,{title:"warning",children:e(r,{defaultValue:!0,color:"warning"})}),e(t,{title:"negative",children:e(r,{defaultValue:!0,color:"negative"})}),e(t,{title:"current",children:e(r,{defaultValue:!0,color:"current"})}),e(t,{title:"partner",children:e(r,{defaultValue:!0,color:"partner"})}),e(t,{title:"swan",children:e(r,{defaultValue:!0,color:"swan"})}),e(t,{title:"shakespear",children:e(r,{defaultValue:!0,color:"shakespear"})}),e(t,{title:"darkPink",children:e(r,{defaultValue:!0,color:"darkPink"})}),e(t,{title:"sunglow",children:e(r,{defaultValue:!0,color:"sunglow"})}),e(t,{title:"mediumSladeBlue",children:e(r,{defaultValue:!0,color:"mediumSladeBlue"})})]});var s,h,S;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`({
  color,
  disabled,
  isError
}: StoryArgs) => {
  return <StoryBlock title="Variations">
      <StoryPart title="Default">
        <InteractiveCheckbox color={color} disabled={disabled} isError={isError} />
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
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var y,b,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`({
  color
}: StoryArgs) => {
  return <StoryBlock title="Colors" description="Checkbox color impacts only checked state">
      <StoryPart title="Default">
        <InteractiveCheckbox defaultValue={true} color={color} />
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
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const q=["Variations","Colors"];export{i as Colors,n as Variations,q as __namedExportsOrder,O as default};
//# sourceMappingURL=Checkbox.stories-62e53d7e.js.map
