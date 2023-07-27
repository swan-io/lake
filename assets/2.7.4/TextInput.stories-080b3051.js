import{S as E,a,j as t,F as v,V as C}from"./Space-3e0bbd2b.js";import{r as k}from"./index-76fb7be0.js";import{L as f}from"./LakeCopyButton-df0e0542.js";import{L as x}from"./LakeTextInput-566c26be.js";import{T as w}from"./Tag-12d6d984.js";import{S as l,a as r}from"./_StoriesComponents-461cc4c7.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-93d0e3b8.js";import"./Svg-0fa38bd0.js";import"./LakeTooltip-5f930c2b.js";import"./index-d3ea75b5.js";import"./index-3dc8ce37.js";import"./useMergeRefs-2ef24421.js";import"./Portal-e25724c3.js";import"./WithCurrentColor-1700af49.js";import"./Pressable-e20910b9.js";import"./index-ca925b5c.js";import"./commonStyles-d52fedae.js";import"./Fill-cab72794.js";import"./index-b8a2f42e.js";import"./index-7300af7e.js";const T=E.create({input:{maxWidth:400},fixedHeightInput:{height:128}}),U={title:"Forms/TextInput",component:x},e=d=>{const[g,b]=k.useState(d.defaultValue??"");return t(C,{style:T.input,children:t(x,{...d,value:g,onChange:I=>b(I.currentTarget.value)})})},n=()=>a(l,{title:"Input variations",children:[t(r,{title:"Default",children:t(e,{})}),t(r,{title:"Validating",children:t(e,{validating:!0})}),t(r,{title:"Valid",children:t(e,{valid:!0})}),t(r,{title:"Invalid",children:t(e,{error:"This input is invalid"})}),t(r,{title:"Invalid without error message",children:t(e,{error:"This input is invalid",hideErrors:!0})}),t(r,{title:"With character counter",children:t(e,{maxCharCount:15})}),t(r,{title:"Character counter with error message",children:t(e,{error:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit semper ornare. ",maxCharCount:15})}),t(r,{title:"With help",children:t(e,{help:"9 characters"})}),t(r,{title:"With help and error",children:t(e,{help:"9 characters",error:"Invalid"})}),t(r,{title:"Disabled",children:t(e,{disabled:!0})}),t(r,{title:"Readonly",children:t(e,{readOnly:!0})}),t(r,{title:"Multi line",children:t(e,{multiline:!0})}),t(r,{title:"Multi line",children:t(e,{multiline:!0,style:T.fixedHeightInput,placeholder:"Placeholder"})}),t(r,{title:"With icon",children:t(e,{icon:"chat-help-regular"})}),t(r,{title:"With unit",children:t(e,{unit:"$"})}),t(r,{title:"With end icon and custom injected component",children:t(e,{error:"Hey",renderEnd:()=>a(v,{children:[t(f,{copyText:"Copy",copiedText:"Copied",valueToCopy:"Copy me"}),t(w,{children:"Example tag"})]})})})]}),i=()=>a(l,{title:"Text input color variation",description:"You can see different colors by focusing each input",children:[t(r,{title:"Default",children:t(e,{})}),t(r,{title:"Gray",children:t(e,{color:"gray"})}),t(r,{title:"Live",children:t(e,{color:"live"})}),t(r,{title:"Sandbox",children:t(e,{color:"sandbox"})}),t(r,{title:"Positive",children:t(e,{color:"positive"})}),t(r,{title:"Warning",children:t(e,{color:"warning"})}),t(r,{title:"Negative",children:t(e,{color:"negative"})}),t(r,{title:"Current",children:t(e,{color:"current"})}),t(r,{title:"Partner",children:t(e,{color:"partner"})}),t(r,{title:"Swan",children:t(e,{color:"swan"})}),t(r,{title:"Shakespear",children:t(e,{color:"shakespear"})}),t(r,{title:"DarkPink",children:t(e,{color:"darkPink"})}),t(r,{title:"Sunglow",children:t(e,{color:"sunglow"})}),t(r,{title:"MediumSladeBlue",children:t(e,{color:"mediumSladeBlue"})})]}),o=()=>t(l,{title:"Numeric text input",description:"This variation is an example for digit inputs. It displays digits only keyboard on mobile",children:t(e,{placeholder:"000000",inputMode:"numeric",pattern:"[0-9]",maxLength:6})});var c,u,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var s,h,y;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var m,S,P;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="Numeric text input" description="This variation is an example for digit inputs. It displays digits only keyboard on mobile">
      <EditableInputText placeholder="000000" inputMode="numeric" pattern="[0-9]" maxLength={6} />
    </StoryBlock>;
}`,...(P=(S=o.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const X=["Variations","ColorVariations","Numeric"];export{i as ColorVariations,o as Numeric,n as Variations,X as __namedExportsOrder,U as default};
//# sourceMappingURL=TextInput.stories-080b3051.js.map
