import{j as e,S as d,T as p}from"./ScrollView-BJyiQezG.js";import{G as b}from"./Grid-DW4pyL8z.js";import{L as x}from"./LakeCopyButton-CemyQuBL.js";import{L as a}from"./LakeLabel-BkV5S-kJ.js";import{L as t}from"./LakeTextInput-T3fGaEC8.js";import{S as u,a as l}from"./_StoriesComponents-B_sddLZI.js";import"./iframe-NS7lph5a.js";import"./preload-helper-D1IIBeq1.js";import"./index-qYDG3cyQ.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-Ds9LkmsG.js";import"./commonStyles-BBEkV6IC.js";import"./v4-EwEgHOG0.js";import"./Fill-BMuT8rl1.js";import"./LakeSelect-Dl49tsP3.js";import"./useDisclosure-CLz2Fpf7.js";import"./FocusTrap-DkFAvxYr.js";import"./array-BfAlyugE.js";import"./Popover-Cmdr360L.js";import"./useResponsive-CfPgX1IN.js";import"./function-FPlQ-jcT.js";import"./BottomPanel-Cz2jwXcK.js";import"./useBodyClassName-W8A60Jmu.js";import"./Suspendable-DshhS3ju.js";import"./index-jGP6wa5-.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BpijBGae.js";import"./index-Utm4Qly2.js";import"./Separator--nplzSjJ.js";import"./index-DjqrH7ig.js";const A={title:"Forms/Label",component:a},n="Creditor IBAN",i=()=>e.jsx(u,{title:"Readonly label",children:e.jsx(l,{title:"Color variations",children:e.jsxs(b,{numColumns:5,horizontalSpace:8,verticalSpace:8,children:[e.jsx(a,{label:"Default",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"Gray",readOnly:!0,color:"gray",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"Live",readOnly:!0,color:"live",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"Sandbox",readOnly:!0,color:"sandbox",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"Positive",readOnly:!0,color:"positive",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"Warning",readOnly:!0,color:"warning",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"Negative",readOnly:!0,color:"negative",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"Current",readOnly:!0,color:"current",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"Partner",readOnly:!0,color:"partner",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"Swan",readOnly:!0,color:"swan",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"Shakespear",readOnly:!0,color:"shakespear",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"DarkPink",readOnly:!0,color:"darkPink",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"Sunglow",readOnly:!0,color:"sunglow",render:r=>e.jsx(t,{id:r,disabled:!0})}),e.jsx(a,{label:"MediumSladeBlue",readOnly:!0,color:"mediumSladeBlue",render:r=>e.jsx(t,{id:r,disabled:!0})})]})})}),o=()=>e.jsxs(u,{title:"Types labels",children:[e.jsx(l,{title:"Default",children:e.jsx(a,{label:n,render:r=>e.jsx(t,{id:r})})}),e.jsx(l,{title:"Form",children:e.jsx(a,{label:n,render:r=>e.jsx(t,{id:r}),type:"form"})}),e.jsx(l,{title:"Form Small",children:e.jsx(a,{label:n,render:r=>e.jsx(t,{id:r}),type:"formSmall"})}),e.jsxs(l,{title:"View",children:[e.jsx(a,{label:n,render:r=>e.jsx(t,{id:r,disabled:!0}),type:"view"}),e.jsx(d,{height:20})]}),e.jsx(l,{title:"View Small",children:e.jsx(a,{label:n,render:r=>e.jsx(t,{id:r,disabled:!0}),type:"viewSmall"})})]}),s=()=>e.jsxs(u,{title:"Variations labels",children:[e.jsx(l,{title:"Optional label",children:e.jsx(a,{label:n,render:r=>e.jsx(t,{id:r,disabled:!0}),optionalLabel:"Optional label"})}),e.jsx(d,{height:20}),e.jsx(l,{title:"Extra",children:e.jsx(a,{label:n,render:r=>e.jsx(t,{id:r,disabled:!0}),extra:()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{width:4}),e.jsx(p,{children:"Extra"})]})})}),e.jsx(d,{height:20}),e.jsx(l,{title:"Help",children:e.jsx(a,{label:n,render:r=>e.jsx(t,{id:r,disabled:!0}),help:e.jsxs(e.Fragment,{children:[e.jsx(d,{width:4}),e.jsx(p,{children:"Help"})]})})}),e.jsx(d,{height:20}),e.jsx(l,{title:"With actions",children:e.jsx(a,{label:n,render:r=>e.jsx(t,{id:r,disabled:!0}),actions:e.jsx(x,{valueToCopy:"",copyText:"Copy",copiedText:"Copied"})})})]});i.__docgenInfo={description:"",methods:[],displayName:"ReadOnly"};o.__docgenInfo={description:"",methods:[],displayName:"Types"};s.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const q=["ReadOnly","Types","Variations"];export{i as ReadOnly,o as Types,s as Variations,q as __namedExportsOrder,A as default};
//# sourceMappingURL=Label.stories-BjInNF6U.js.map
