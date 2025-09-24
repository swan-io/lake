import{j as e,s as S,V as k}from"./ScrollView-DWuPglE9.js";import{r as x}from"./iframe-C8KUy286.js";import{L as h,a as j}from"./LakeCheckbox-09tKOXBP.js";import{P}from"./Pressable-CusmpWCH.js";import{S as b,a as t}from"./_StoriesComponents-D3Dr6CfS.js";import"./index-DBnTv2TV.js";import"./preload-helper-D1IIBeq1.js";import"./Separator-D7Szlmp6.js";import"./commonStyles-BBEkV6IC.js";const y=S.create({container:{alignSelf:"flex-start"}}),E={title:"Forms/Checkbox",component:h},r=({defaultValue:n=!1,...o})=>{const[i,s]=x.useState(n),c=()=>{s(u=>u!==!0)};return e.jsx(P,{style:y.container,onPress:c,disabled:o.disabled,children:e.jsx(h,{value:i,...o})})},d=({defaultValue:n=!1,...o})=>{const[i,s]=x.useState(n),c=()=>{s(u=>u!==!0)};return e.jsx(k,{style:y.container,children:e.jsx(j,{value:i,onValueChange:c,...o})})},a=()=>e.jsxs(b,{title:"Variations",children:[e.jsx(t,{title:"Default",children:e.jsx(r,{})}),e.jsx(t,{title:"Indeterminate",children:e.jsx(r,{defaultValue:"mixed"})}),e.jsx(t,{title:"Labelled",children:e.jsx(d,{label:"Enabled"})}),e.jsx(t,{title:"Labelled error",children:e.jsx(d,{label:"Enabled",isError:!0})}),e.jsx(t,{title:"Disabled",children:e.jsx(r,{disabled:!0})}),e.jsx(t,{title:"Disabled checked",children:e.jsx(r,{defaultValue:!0,disabled:!0})}),e.jsx(t,{title:"Indeterminate checked",children:e.jsx(r,{defaultValue:"mixed",disabled:!0})}),e.jsx(t,{title:"Error",children:e.jsx(r,{isError:!0})})]}),l=()=>e.jsxs(b,{title:"Colors",description:"Checkbox color impacts only checked state",children:[e.jsx(t,{title:"Default",children:e.jsx(r,{defaultValue:!0})}),e.jsx(t,{title:"gray",children:e.jsx(r,{defaultValue:!0,color:"gray"})}),e.jsx(t,{title:"live",children:e.jsx(r,{defaultValue:!0,color:"live"})}),e.jsx(t,{title:"sandbox",children:e.jsx(r,{defaultValue:!0,color:"sandbox"})}),e.jsx(t,{title:"positive",children:e.jsx(r,{defaultValue:!0,color:"positive"})}),e.jsx(t,{title:"warning",children:e.jsx(r,{defaultValue:!0,color:"warning"})}),e.jsx(t,{title:"negative",children:e.jsx(r,{defaultValue:!0,color:"negative"})}),e.jsx(t,{title:"current",children:e.jsx(r,{defaultValue:!0,color:"current"})}),e.jsx(t,{title:"partner",children:e.jsx(r,{defaultValue:!0,color:"partner"})}),e.jsx(t,{title:"swan",children:e.jsx(r,{defaultValue:!0,color:"swan"})}),e.jsx(t,{title:"shakespear",children:e.jsx(r,{defaultValue:!0,color:"shakespear"})}),e.jsx(t,{title:"darkPink",children:e.jsx(r,{defaultValue:!0,color:"darkPink"})}),e.jsx(t,{title:"sunglow",children:e.jsx(r,{defaultValue:!0,color:"sunglow"})}),e.jsx(t,{title:"mediumSladeBlue",children:e.jsx(r,{defaultValue:!0,color:"mediumSladeBlue"})})]});a.__docgenInfo={description:"",methods:[],displayName:"Variations"};l.__docgenInfo={description:"",methods:[],displayName:"Colors"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Variations">
      <StoryPart title="Default">
        <InteractiveCheckbox />
      </StoryPart>

      <StoryPart title="Indeterminate">
        <InteractiveCheckbox defaultValue="mixed" />
      </StoryPart>

      <StoryPart title="Labelled">
        <InteractiveLabelledCheckbox label="Enabled" />
      </StoryPart>

      <StoryPart title="Labelled error">
        <InteractiveLabelledCheckbox label="Enabled" isError={true} />
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const L=["Variations","Colors"];export{l as Colors,a as Variations,L as __namedExportsOrder,E as default};
//# sourceMappingURL=Checkbox.stories-bRg-bf1z.js.map
