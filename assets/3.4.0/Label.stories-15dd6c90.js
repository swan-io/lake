import{j as e,a as i,b as d,F as p,T as c}from"./Space-d12e3bfc.js";import{G as P}from"./Grid-a831482c.js";import{L as g}from"./LakeCopyButton-1e0040fd.js";import{L as a}from"./LakeLabel-20a53f75.js";import{L as t}from"./LakeTextInput-ac070cd4.js";import{S as s,a as l}from"./_StoriesComponents-5f6e9af0.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-f1286426.js";import"./Pressable-70de31df.js";import"./index-ca925b5c.js";import"./commonStyles-1ccbee26.js";import"./v4-4a60fe23.js";import"./Fill-d9c69daa.js";import"./LakeSelect-423e2bb7.js";import"./useDisclosure-a0ce2208.js";import"./a11y-e7c88e69.js";import"./Popover-78ab83ce.js";import"./useResponsive-2838783c.js";import"./function-a81f264e.js";import"./Boxed-86465006.js";import"./BottomPanel-16b05758.js";import"./useBodyClassName-4b4df53c.js";import"./math-b41862e6.js";import"./FocusTrap-e6187b75.js";import"./array-4dd4a51c.js";import"./LoadingView-ebbf98a9.js";import"./colors-298625c7.js";import"./index-6c4b0b94.js";import"./TransitionView-221dc567.js";import"./index-9e829ad3.js";import"./index-e1411ff8.js";import"./index-6cbbe25a.js";const le={title:"Forms/Label",component:a},n="Creditor IBAN",o=()=>e(s,{title:"Readonly label",children:e(l,{title:"Color variations",children:i(P,{numColumns:5,horizontalSpace:8,verticalSpace:8,children:[e(a,{label:"Default",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"Gray",readOnly:!0,color:"gray",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"Live",readOnly:!0,color:"live",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"Sandbox",readOnly:!0,color:"sandbox",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"Positive",readOnly:!0,color:"positive",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"Warning",readOnly:!0,color:"warning",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"Negative",readOnly:!0,color:"negative",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"Current",readOnly:!0,color:"current",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"Partner",readOnly:!0,color:"partner",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"Swan",readOnly:!0,color:"swan",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"Shakespear",readOnly:!0,color:"shakespear",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"DarkPink",readOnly:!0,color:"darkPink",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"Sunglow",readOnly:!0,color:"sunglow",render:r=>e(t,{id:r,disabled:!0})}),e(a,{label:"MediumSladeBlue",readOnly:!0,color:"mediumSladeBlue",render:r=>e(t,{id:r,disabled:!0})})]})})}),u=()=>i(s,{title:"Types labels",children:[e(l,{title:"Default",children:e(a,{label:n,render:r=>e(t,{id:r})})}),e(l,{title:"Form",children:e(a,{label:n,render:r=>e(t,{id:r}),type:"form"})}),e(l,{title:"Form Small",children:e(a,{label:n,render:r=>e(t,{id:r}),type:"formSmall"})}),i(l,{title:"View",children:[e(a,{label:n,render:r=>e(t,{id:r,disabled:!0}),type:"view"}),e(d,{height:20})]}),e(l,{title:"View Small",children:e(a,{label:n,render:r=>e(t,{id:r,disabled:!0}),type:"viewSmall"})})]}),b=()=>i(s,{title:"Variations labels",children:[e(l,{title:"Optional label",children:e(a,{label:n,render:r=>e(t,{id:r,disabled:!0}),optionalLabel:"Optional label"})}),e(d,{height:20}),e(l,{title:"Extra",children:e(a,{label:n,render:r=>e(t,{id:r,disabled:!0}),extra:()=>i(p,{children:[e(d,{width:4}),e(c,{children:"Extra"})]})})}),e(d,{height:20}),e(l,{title:"Help",children:e(a,{label:n,render:r=>e(t,{id:r,disabled:!0}),help:i(p,{children:[e(d,{width:4}),e(c,{children:"Help"})]})})}),e(d,{height:20}),e(l,{title:"With actions",children:e(a,{label:n,render:r=>e(t,{id:r,disabled:!0}),actions:e(g,{valueToCopy:"",copyText:"Copy",copiedText:"Copied"})})})]});var L,y,m;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(m=(y=o.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var k,S,h;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(O=(T=b.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const ne=["ReadOnly","Types","Variations"];export{o as ReadOnly,u as Types,b as Variations,ne as __namedExportsOrder,le as default};
//# sourceMappingURL=Label.stories-15dd6c90.js.map