import{j as e,s as V,V as p}from"./ScrollView-rpcy4Ntm.js";import{r as j}from"./iframe-CZb_pTm6.js";import{L as P,a as v}from"./LakeCheckbox-C16VxHAU.js";import{P as C}from"./Pressable-dLj5GzUO.js";import{S as f,a as t}from"./_StoriesComponents-CCUyW6Y9.js";import"./index-DWBrKOLN.js";import"./Separator-CW0xnE3Z.js";import"./commonStyles-BBEkV6IC.js";const m=V.create({container:{alignSelf:"flex-start"}}),N={title:"Forms/Checkbox",component:P},r=({defaultValue:n=!1,...o})=>{const[i,s]=j.useState(n),c=()=>{s(u=>u!==!0)};return e.jsx(C,{style:m.container,onPress:c,disabled:o.disabled,children:e.jsx(P,{value:i,...o})})},d=({defaultValue:n=!1,...o})=>{const[i,s]=j.useState(n),c=()=>{s(u=>u!==!0)};return e.jsx(p,{style:m.container,children:e.jsx(v,{value:i,onValueChange:c,...o})})},a=()=>e.jsxs(f,{title:"Variations",children:[e.jsx(t,{title:"Default",children:e.jsx(r,{})}),e.jsx(t,{title:"Indeterminate",children:e.jsx(r,{defaultValue:"mixed"})}),e.jsx(t,{title:"Lablelled",children:e.jsx(d,{label:"Enabled"})}),e.jsx(t,{title:"Lablelled error",children:e.jsx(d,{label:"Enabled",isError:!0})}),e.jsx(t,{title:"Disabled",children:e.jsx(r,{disabled:!0})}),e.jsx(t,{title:"Disabled checked",children:e.jsx(r,{defaultValue:!0,disabled:!0})}),e.jsx(t,{title:"Indeterminate checked",children:e.jsx(r,{defaultValue:"mixed",disabled:!0})}),e.jsx(t,{title:"Error",children:e.jsx(r,{isError:!0})})]}),l=()=>e.jsxs(f,{title:"Colors",description:"Checkbox color impacts only checked state",children:[e.jsx(t,{title:"Default",children:e.jsx(r,{defaultValue:!0})}),e.jsx(t,{title:"gray",children:e.jsx(r,{defaultValue:!0,color:"gray"})}),e.jsx(t,{title:"live",children:e.jsx(r,{defaultValue:!0,color:"live"})}),e.jsx(t,{title:"sandbox",children:e.jsx(r,{defaultValue:!0,color:"sandbox"})}),e.jsx(t,{title:"positive",children:e.jsx(r,{defaultValue:!0,color:"positive"})}),e.jsx(t,{title:"warning",children:e.jsx(r,{defaultValue:!0,color:"warning"})}),e.jsx(t,{title:"negative",children:e.jsx(r,{defaultValue:!0,color:"negative"})}),e.jsx(t,{title:"current",children:e.jsx(r,{defaultValue:!0,color:"current"})}),e.jsx(t,{title:"partner",children:e.jsx(r,{defaultValue:!0,color:"partner"})}),e.jsx(t,{title:"swan",children:e.jsx(r,{defaultValue:!0,color:"swan"})}),e.jsx(t,{title:"shakespear",children:e.jsx(r,{defaultValue:!0,color:"shakespear"})}),e.jsx(t,{title:"darkPink",children:e.jsx(r,{defaultValue:!0,color:"darkPink"})}),e.jsx(t,{title:"sunglow",children:e.jsx(r,{defaultValue:!0,color:"sunglow"})}),e.jsx(t,{title:"mediumSladeBlue",children:e.jsx(r,{defaultValue:!0,color:"mediumSladeBlue"})})]});a.__docgenInfo={description:"",methods:[],displayName:"Variations"};l.__docgenInfo={description:"",methods:[],displayName:"Colors"};var x,h,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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

      <StoryPart title="Lablelled error">
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
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,S,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const F=["Variations","Colors"];export{l as Colors,a as Variations,F as __namedExportsOrder,N as default};
//# sourceMappingURL=Checkbox.stories-B_EUXRPw.js.map
