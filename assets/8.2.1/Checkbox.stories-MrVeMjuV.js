import{s as m,j as e,V}from"./Space-D2q7n8S5.js";import{r as k}from"./index-CBqU2yxZ.js";import{L as f,a as p}from"./LakeCheckbox-TB9X2O3l.js";import{P as v}from"./Pressable-CWb70MP5.js";import{S as j,a as t}from"./_StoriesComponents-CS-ilBhq.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";const P=m.create({container:{alignSelf:"flex-start"}}),F={title:"Forms/Checkbox",component:f},r=({defaultValue:n=!1,...o})=>{const[i,s]=k.useState(n),c=()=>{s(u=>u!==!0)};return e.jsx(v,{style:P.container,onPress:c,disabled:o.disabled,children:e.jsx(f,{value:i,...o})})},C=({defaultValue:n=!1,...o})=>{const[i,s]=k.useState(n),c=()=>{s(u=>u!==!0)};return e.jsx(V,{style:P.container,children:e.jsx(p,{value:i,onValueChange:c,...o})})},a=()=>e.jsxs(j,{title:"Variations",children:[e.jsx(t,{title:"Default",children:e.jsx(r,{})}),e.jsx(t,{title:"Indeterminate",children:e.jsx(r,{defaultValue:"mixed"})}),e.jsx(t,{title:"Lablelled",children:e.jsx(C,{label:"Enabled"})}),e.jsx(t,{title:"Disabled",children:e.jsx(r,{disabled:!0})}),e.jsx(t,{title:"Disabled checked",children:e.jsx(r,{defaultValue:!0,disabled:!0})}),e.jsx(t,{title:"Indeterminate checked",children:e.jsx(r,{defaultValue:"mixed",disabled:!0})}),e.jsx(t,{title:"Error",children:e.jsx(r,{isError:!0})})]}),l=()=>e.jsxs(j,{title:"Colors",description:"Checkbox color impacts only checked state",children:[e.jsx(t,{title:"Default",children:e.jsx(r,{defaultValue:!0})}),e.jsx(t,{title:"gray",children:e.jsx(r,{defaultValue:!0,color:"gray"})}),e.jsx(t,{title:"live",children:e.jsx(r,{defaultValue:!0,color:"live"})}),e.jsx(t,{title:"sandbox",children:e.jsx(r,{defaultValue:!0,color:"sandbox"})}),e.jsx(t,{title:"positive",children:e.jsx(r,{defaultValue:!0,color:"positive"})}),e.jsx(t,{title:"warning",children:e.jsx(r,{defaultValue:!0,color:"warning"})}),e.jsx(t,{title:"negative",children:e.jsx(r,{defaultValue:!0,color:"negative"})}),e.jsx(t,{title:"current",children:e.jsx(r,{defaultValue:!0,color:"current"})}),e.jsx(t,{title:"partner",children:e.jsx(r,{defaultValue:!0,color:"partner"})}),e.jsx(t,{title:"swan",children:e.jsx(r,{defaultValue:!0,color:"swan"})}),e.jsx(t,{title:"shakespear",children:e.jsx(r,{defaultValue:!0,color:"shakespear"})}),e.jsx(t,{title:"darkPink",children:e.jsx(r,{defaultValue:!0,color:"darkPink"})}),e.jsx(t,{title:"sunglow",children:e.jsx(r,{defaultValue:!0,color:"sunglow"})}),e.jsx(t,{title:"mediumSladeBlue",children:e.jsx(r,{defaultValue:!0,color:"mediumSladeBlue"})})]});a.__docgenInfo={description:"",methods:[],displayName:"Variations"};l.__docgenInfo={description:"",methods:[],displayName:"Colors"};var d,x,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,S,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const O=["Variations","Colors"];export{l as Colors,a as Variations,O as __namedExportsOrder,F as default};
//# sourceMappingURL=Checkbox.stories-MrVeMjuV.js.map
