import{S as I,a,j as t,F as E,V as v}from"./Space-cf4dfeb4.js";import{r as C}from"./index-76fb7be0.js";import{L as k}from"./LakeCopyButton-ada85137.js";import{L as x}from"./LakeTextInput-069889e1.js";import{T as f}from"./Tag-b70268e6.js";import{S as l,a as e}from"./_StoriesComponents-2a4b9755.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-6f7a1461.js";import"./Svg-b1e67ad2.js";import"./LakeTooltip-d2186e1e.js";import"./index-d3ea75b5.js";import"./index-5b9f7f54.js";import"./useMergeRefs-b61c1307.js";import"./Portal-e0be6b33.js";import"./WithCurrentColor-992ec9cb.js";import"./Pressable-ed362142.js";import"./index-ca925b5c.js";import"./commonStyles-d52fedae.js";import"./Fill-179ea1dc.js";import"./index-f3e36406.js";import"./index-af3f1da0.js";const w=I.create({input:{maxWidth:400}}),U={title:"Forms/TextInput",component:x},r=c=>{const[T,b]=C.useState(c.defaultValue??"");return t(v,{style:w.input,children:t(x,{...c,value:T,onChange:g=>b(g.currentTarget.value)})})},n=()=>a(l,{title:"Input variations",children:[t(e,{title:"Default",children:t(r,{})}),t(e,{title:"Validating",children:t(r,{validating:!0})}),t(e,{title:"Valid",children:t(r,{valid:!0})}),t(e,{title:"Invalid",children:t(r,{error:"This input is invalid"})}),t(e,{title:"Invalid without error message",children:t(r,{error:"This input is invalid",hideErrors:!0})}),t(e,{title:"With character counter",children:t(r,{maxCharCount:15})}),t(e,{title:"Character counter with error message",children:t(r,{error:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit semper ornare. ",maxCharCount:15})}),t(e,{title:"With help",children:t(r,{help:"9 characters"})}),t(e,{title:"With help and error",children:t(r,{help:"9 characters",error:"Invalid"})}),t(e,{title:"Disabled",children:t(r,{disabled:!0})}),t(e,{title:"Readonly",children:t(r,{readOnly:!0})}),t(e,{title:"Multi line",children:t(r,{multiline:!0})}),t(e,{title:"With icon",children:t(r,{icon:"chat-help-regular"})}),t(e,{title:"With unit",children:t(r,{unit:"$"})}),t(e,{title:"With end icon and custom injected component",children:t(r,{error:"Hey",renderEnd:()=>a(E,{children:[t(k,{copyText:"Copy",copiedText:"Copied",valueToCopy:"Copy me"}),t(f,{children:"Example tag"})]})})})]}),i=()=>a(l,{title:"Text input color variation",description:"You can see different colors by focusing each input",children:[t(e,{title:"Default",children:t(r,{})}),t(e,{title:"Gray",children:t(r,{color:"gray"})}),t(e,{title:"Live",children:t(r,{color:"live"})}),t(e,{title:"Sandbox",children:t(r,{color:"sandbox"})}),t(e,{title:"Positive",children:t(r,{color:"positive"})}),t(e,{title:"Warning",children:t(r,{color:"warning"})}),t(e,{title:"Negative",children:t(r,{color:"negative"})}),t(e,{title:"Current",children:t(r,{color:"current"})}),t(e,{title:"Partner",children:t(r,{color:"partner"})}),t(e,{title:"Swan",children:t(r,{color:"swan"})}),t(e,{title:"Shakespear",children:t(r,{color:"shakespear"})}),t(e,{title:"DarkPink",children:t(r,{color:"darkPink"})}),t(e,{title:"Sunglow",children:t(r,{color:"sunglow"})}),t(e,{title:"MediumSladeBlue",children:t(r,{color:"mediumSladeBlue"})})]}),o=()=>t(l,{title:"Numeric text input",description:"This variation is an example for digit inputs. It displays digits only keyboard on mobile",children:t(r,{placeholder:"000000",inputMode:"numeric",pattern:"[0-9]",maxLength:6})});var d,u,s;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(s=(u=n.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var p,y,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var m,S,P;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="Numeric text input" description="This variation is an example for digit inputs. It displays digits only keyboard on mobile">
      <EditableInputText placeholder="000000" inputMode="numeric" pattern="[0-9]" maxLength={6} />
    </StoryBlock>;
}`,...(P=(S=o.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const X=["Variations","ColorVariations","Numeric"];export{i as ColorVariations,o as Numeric,n as Variations,X as __namedExportsOrder,U as default};
//# sourceMappingURL=TextInput.stories-9ffc8928.js.map
