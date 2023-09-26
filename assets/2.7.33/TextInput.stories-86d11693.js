import{S as E,a as o,j as t,F as v,V as C}from"./Space-e959b53a.js";import{r as k}from"./index-1e572255.js";import{L as f}from"./LakeCopyButton-818b5898.js";import{L as x}from"./LakeTextInput-cb6e4bd2.js";import{T as w}from"./Tag-4fa7144d.js";import{S as l,a as r}from"./_StoriesComponents-7ea45be6.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-326c0718.js";import"./useMergeRefs-fcd37fdc.js";import"./index-ca925b5c.js";import"./commonStyles-850b5c5b.js";import"./Fill-a555fe1c.js";import"./index-bb6c8686.js";import"./index-b1482036.js";const T=E.create({input:{maxWidth:400},fixedHeightInput:{height:128}}),Y={title:"Forms/TextInput",component:x},e=d=>{const[g,b]=k.useState(d.defaultValue??"");return t(C,{style:T.input,children:t(x,{...d,value:g,onChange:I=>b(I.currentTarget.value)})})},n=()=>o(l,{title:"Input variations",children:[t(r,{title:"Default",children:t(e,{})}),t(r,{title:"Validating",children:t(e,{validating:!0})}),t(r,{title:"Valid",children:t(e,{valid:!0})}),t(r,{title:"Invalid",children:t(e,{error:"This input is invalid"})}),t(r,{title:"Invalid without error message",children:t(e,{error:"This input is invalid",hideErrors:!0})}),t(r,{title:"With character counter",children:t(e,{maxCharCount:15})}),t(r,{title:"Character counter with error message",children:t(e,{error:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit semper ornare. ",maxCharCount:15})}),t(r,{title:"With help",children:t(e,{help:"9 characters"})}),t(r,{title:"With help and error",children:t(e,{help:"9 characters",error:"Invalid"})}),t(r,{title:"Disabled",children:t(e,{disabled:!0})}),t(r,{title:"Readonly",children:t(e,{readOnly:!0})}),t(r,{title:"Multi line",children:t(e,{multiline:!0})}),t(r,{title:"Multi line",children:t(e,{multiline:!0,style:T.fixedHeightInput,placeholder:"Placeholder"})}),t(r,{title:"With icon",children:t(e,{icon:"chat-help-regular"})}),t(r,{title:"With unit",children:t(e,{unit:"$"})}),t(r,{title:"With end icon and custom injected component",children:t(e,{error:"Hey",renderEnd:()=>o(v,{children:[t(f,{copyText:"Copy",copiedText:"Copied",valueToCopy:"Copy me"}),t(w,{children:"Example tag"})]})})})]}),i=()=>o(l,{title:"Text input color variation",description:"You can see different colors by focusing each input",children:[t(r,{title:"Default",children:t(e,{})}),t(r,{title:"Gray",children:t(e,{color:"gray"})}),t(r,{title:"Live",children:t(e,{color:"live"})}),t(r,{title:"Sandbox",children:t(e,{color:"sandbox"})}),t(r,{title:"Positive",children:t(e,{color:"positive"})}),t(r,{title:"Warning",children:t(e,{color:"warning"})}),t(r,{title:"Negative",children:t(e,{color:"negative"})}),t(r,{title:"Current",children:t(e,{color:"current"})}),t(r,{title:"Partner",children:t(e,{color:"partner"})}),t(r,{title:"Swan",children:t(e,{color:"swan"})}),t(r,{title:"Shakespear",children:t(e,{color:"shakespear"})}),t(r,{title:"DarkPink",children:t(e,{color:"darkPink"})}),t(r,{title:"Sunglow",children:t(e,{color:"sunglow"})}),t(r,{title:"MediumSladeBlue",children:t(e,{color:"mediumSladeBlue"})})]}),a=()=>t(l,{title:"Numeric text input",description:"This variation is an example for digit inputs. It displays digits only keyboard on mobile",children:t(e,{placeholder:"000000",inputMode:"numeric",pattern:"[0-9]",maxLength:6})});var c,u,s;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <StoryBlock title="Input variations">
      <StoryPart title="Default">
        <EditableInputText />
      </StoryPart>

      <StoryPart title="Validating">
        <EditableInputText validating={true} />
      </StoryPart>

      <StoryPart title="Valid">
        <EditableInputText valid={true} />
      </StoryPart>

      <StoryPart title="Invalid">
        <EditableInputText error="This input is invalid" />
      </StoryPart>

      <StoryPart title="Invalid without error message">
        <EditableInputText error="This input is invalid" hideErrors={true} />
      </StoryPart>

      <StoryPart title="With character counter">
        <EditableInputText maxCharCount={15} />
      </StoryPart>

      <StoryPart title="Character counter with error message">
        <EditableInputText error="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit semper ornare. " maxCharCount={15} />
      </StoryPart>

      <StoryPart title="With help">
        <EditableInputText help="9 characters" />
      </StoryPart>

      <StoryPart title="With help and error">
        <EditableInputText help="9 characters" error="Invalid" />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableInputText disabled={true} />
      </StoryPart>

      <StoryPart title="Readonly">
        <EditableInputText readOnly={true} />
      </StoryPart>

      <StoryPart title="Multi line">
        <EditableInputText multiline={true} />
      </StoryPart>

      <StoryPart title="Multi line">
        <EditableInputText multiline={true} style={styles.fixedHeightInput} placeholder="Placeholder" />
      </StoryPart>

      <StoryPart title="With icon">
        <EditableInputText icon="chat-help-regular" />
      </StoryPart>

      <StoryPart title="With unit">
        <EditableInputText unit="$" />
      </StoryPart>

      <StoryPart title="With end icon and custom injected component">
        <EditableInputText error="Hey" renderEnd={() => <>
              <LakeCopyButton copyText="Copy" copiedText="Copied" valueToCopy="Copy me" />
              <Tag>Example tag</Tag>
            </>} />
      </StoryPart>
    </StoryBlock>;
}`,...(s=(u=n.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var p,h,y;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <StoryBlock title="Text input color variation" description="You can see different colors by focusing each input">
      <StoryPart title="Default">
        <EditableInputText />
      </StoryPart>

      <StoryPart title="Gray">
        <EditableInputText color="gray" />
      </StoryPart>

      <StoryPart title="Live">
        <EditableInputText color="live" />
      </StoryPart>

      <StoryPart title="Sandbox">
        <EditableInputText color="sandbox" />
      </StoryPart>

      <StoryPart title="Positive">
        <EditableInputText color="positive" />
      </StoryPart>

      <StoryPart title="Warning">
        <EditableInputText color="warning" />
      </StoryPart>

      <StoryPart title="Negative">
        <EditableInputText color="negative" />
      </StoryPart>

      <StoryPart title="Current">
        <EditableInputText color="current" />
      </StoryPart>

      <StoryPart title="Partner">
        <EditableInputText color="partner" />
      </StoryPart>

      <StoryPart title="Swan">
        <EditableInputText color="swan" />
      </StoryPart>

      <StoryPart title="Shakespear">
        <EditableInputText color="shakespear" />
      </StoryPart>

      <StoryPart title="DarkPink">
        <EditableInputText color="darkPink" />
      </StoryPart>

      <StoryPart title="Sunglow">
        <EditableInputText color="sunglow" />
      </StoryPart>

      <StoryPart title="MediumSladeBlue">
        <EditableInputText color="mediumSladeBlue" />
      </StoryPart>
    </StoryBlock>;
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,m,P;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <StoryBlock title="Numeric text input" description="This variation is an example for digit inputs. It displays digits only keyboard on mobile">
      <EditableInputText placeholder="000000" inputMode="numeric" pattern="[0-9]" maxLength={6} />
    </StoryBlock>;
}`,...(P=(m=a.parameters)==null?void 0:m.docs)==null?void 0:P.source}}};const $=["Variations","ColorVariations","Numeric"];export{i as ColorVariations,a as Numeric,n as Variations,$ as __namedExportsOrder,Y as default};
//# sourceMappingURL=TextInput.stories-86d11693.js.map
