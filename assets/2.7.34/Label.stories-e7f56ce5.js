import{j as e,a as i,b as d,F as p,T as c}from"./Space-e959b53a.js";import{G as P}from"./Grid-fdd5079e.js";import{L as g}from"./LakeCopyButton-818b5898.js";import{L as a}from"./LakeLabel-457dc96a.js";import{L as l}from"./LakeTextInput-79340866.js";import{S as s,a as t}from"./_StoriesComponents-7ea45be6.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-1e572255.js";import"./Pressable-326c0718.js";import"./useMergeRefs-fcd37fdc.js";import"./index-ca925b5c.js";import"./commonStyles-850b5c5b.js";import"./v4-4a60fe23.js";import"./Fill-a555fe1c.js";import"./index-bb6c8686.js";const _={title:"Forms/Label",component:a},n="Creditor IBAN",o=()=>e(s,{title:"Readonly label",children:e(t,{title:"Color variations",children:i(P,{numColumns:5,horizontalSpace:8,verticalSpace:8,children:[e(a,{label:"Default",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"Gray",readOnly:!0,color:"gray",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"Live",readOnly:!0,color:"live",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"Sandbox",readOnly:!0,color:"sandbox",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"Positive",readOnly:!0,color:"positive",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"Warning",readOnly:!0,color:"warning",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"Negative",readOnly:!0,color:"negative",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"Current",readOnly:!0,color:"current",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"Partner",readOnly:!0,color:"partner",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"Swan",readOnly:!0,color:"swan",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"Shakespear",readOnly:!0,color:"shakespear",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"DarkPink",readOnly:!0,color:"darkPink",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"Sunglow",readOnly:!0,color:"sunglow",render:r=>e(l,{id:r,disabled:!0})}),e(a,{label:"MediumSladeBlue",readOnly:!0,color:"mediumSladeBlue",render:r=>e(l,{id:r,disabled:!0})})]})})}),u=()=>i(s,{title:"Types labels",children:[e(t,{title:"Default",children:e(a,{label:n,render:r=>e(l,{id:r})})}),e(t,{title:"Form",children:e(a,{label:n,render:r=>e(l,{id:r}),type:"form"})}),e(t,{title:"Form Small",children:e(a,{label:n,render:r=>e(l,{id:r}),type:"formSmall"})}),i(t,{title:"View",children:[e(a,{label:n,render:r=>e(l,{id:r,disabled:!0}),type:"view"}),e(d,{height:20})]}),e(t,{title:"View Small",children:e(a,{label:n,render:r=>e(l,{id:r,disabled:!0}),type:"viewSmall"})})]}),b=()=>i(s,{title:"Variations labels",children:[e(t,{title:"Optional label",children:e(a,{label:n,render:r=>e(l,{id:r,disabled:!0}),optionalLabel:"Optional label"})}),e(d,{height:20}),e(t,{title:"Extra",children:e(a,{label:n,render:r=>e(l,{id:r,disabled:!0}),extra:()=>i(p,{children:[e(d,{width:4}),e(c,{children:"Extra"})]})})}),e(d,{height:20}),e(t,{title:"Help",children:e(a,{label:n,render:r=>e(l,{id:r,disabled:!0}),help:i(p,{children:[e(d,{width:4}),e(c,{children:"Help"})]})})}),e(d,{height:20}),e(t,{title:"With actions",children:e(a,{label:n,render:r=>e(l,{id:r,disabled:!0}),actions:e(g,{valueToCopy:"",copyText:"Copy",copiedText:"Copied"})})})]});var L,y,k;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <StoryBlock title="Readonly label">
      <StoryPart title="Color variations">
        <Grid numColumns={5} horizontalSpace={8} verticalSpace={8}>
          <LakeLabel label="Default" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="Gray" readOnly={true} color="gray" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="Live" readOnly={true} color="live" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="Sandbox" readOnly={true} color="sandbox" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="Positive" readOnly={true} color="positive" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="Warning" readOnly={true} color="warning" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="Negative" readOnly={true} color="negative" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="Current" readOnly={true} color="current" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="Partner" readOnly={true} color="partner" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="Swan" readOnly={true} color="swan" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="Shakespear" readOnly={true} color="shakespear" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="DarkPink" readOnly={true} color="darkPink" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="Sunglow" readOnly={true} color="sunglow" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel label="MediumSladeBlue" readOnly={true} color="mediumSladeBlue" render={id => <LakeTextInput id={id} disabled={true} />} />
        </Grid>
      </StoryPart>
    </StoryBlock>;
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var m,S,h;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="Types labels">
      <StoryPart title="Default">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} />} />
      </StoryPart>

      <StoryPart title="Form">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} />} type="form" />
      </StoryPart>

      <StoryPart title="Form Small">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} />} type="formSmall" />
      </StoryPart>

      <StoryPart title="View">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} disabled={true} />} type="view" />

        <Space height={20} />
      </StoryPart>

      <StoryPart title="View Small">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} disabled={true} />} type="viewSmall" />
      </StoryPart>
    </StoryBlock>;
}`,...(h=(S=u.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,T,O;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <StoryBlock title="Variations labels">
      <StoryPart title="Optional label">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} disabled={true} />} optionalLabel="Optional label" />
      </StoryPart>

      <Space height={20} />

      <StoryPart title="Extra">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} disabled={true} />} extra={() => <>
              <Space width={4} />
              <Text>Extra</Text>
            </>} />
      </StoryPart>

      <Space height={20} />

      <StoryPart title="Help">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} disabled={true} />} help={<>
              <Space width={4} />
              <Text>Help</Text>
            </>} />
      </StoryPart>

      <Space height={20} />

      <StoryPart title="With actions">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} disabled={true} />} actions={<LakeCopyButton valueToCopy={""} copyText={"Copy"} copiedText={"Copied"} />} />
      </StoryPart>
    </StoryBlock>;
}`,...(O=(T=b.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const z=["ReadOnly","Types","Variations"];export{o as ReadOnly,u as Types,b as Variations,z as __namedExportsOrder,_ as default};
//# sourceMappingURL=Label.stories-e7f56ce5.js.map
