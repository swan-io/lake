import{s as k,j as c,a as t,F as W,V as v}from"./Space-BLTJaWwn.js";import{r as s}from"./index-CBqU2yxZ.js";import{L as w}from"./LakeCopyButton-CQgTxhkV.js";import{L as p}from"./LakeTextInput-B6oOCVI_.js";import{T as V}from"./Tag-FhhH-RZC.js";import{S as h,a as e}from"./_StoriesComponents-B87UCnlK.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-CA_SvBOc.js";import"./index-DGaDRGzj.js";import"./commonStyles-t4XfA7cz.js";import"./Fill-C572Vcct.js";import"./LakeSelect-BxXBjdA6.js";import"./useDisclosure-CS9t68_Y.js";import"./a11y-DXvpDVrG.js";import"./Popover-DE_gRY0D.js";import"./useResponsive-ySRiRh3Z.js";import"./function-BOrG1jbP.js";import"./BottomPanel-CBlrm5U6.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-BQBccR-4.js";import"./FocusTrap-BekeliH_.js";import"./array-rjEBP2Ry.js";import"./LoadingView-CVes_EP3.js";import"./index-DWV12n1u.js";import"./TransitionView-CgiyVXp-.js";import"./index-ChCZh5If.js";import"./index-Gzpn0eiA.js";import"./index-nFxw9hjV.js";const y=k.create({input:{maxWidth:400},fixedHeightInput:{height:128}}),ut={title:"Forms/TextInput",component:p},r=n=>{const[l,u]=s.useState(n.defaultValue??"");return t(v,{style:y.input,children:t(p,{...n,value:l,onChange:d=>u(d.currentTarget.value)})})},B=n=>{const[l,u]=s.useState(n.defaultValue??""),[d,C]=s.useState(n.unit);return t(v,{style:y.input,children:t(p,{...n,unit:d,value:l,onUnitChange:C,onChange:f=>u(f.currentTarget.value)})})},i=()=>c(h,{title:"Input variations",children:[t(e,{title:"Default",children:t(r,{})}),t(e,{title:"Validating",children:t(r,{validating:!0})}),t(e,{title:"Valid",children:t(r,{valid:!0})}),t(e,{title:"Invalid",children:t(r,{error:"This input is invalid"})}),t(e,{title:"Invalid without error message",children:t(r,{error:"This input is invalid",hideErrors:!0})}),t(e,{title:"With character counter",children:t(r,{maxCharCount:15})}),t(e,{title:"Character counter with error message",children:t(r,{error:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit semper ornare. ",maxCharCount:15})}),t(e,{title:"With help",children:t(r,{help:"9 characters"})}),t(e,{title:"With help and error",children:t(r,{help:"9 characters",error:"Invalid"})}),t(e,{title:"Disabled",children:t(r,{disabled:!0})}),t(e,{title:"Readonly",children:t(r,{readOnly:!0})}),t(e,{title:"Multi line",children:t(r,{multiline:!0})}),t(e,{title:"Multi line",children:t(r,{multiline:!0,style:y.fixedHeightInput,placeholder:"Placeholder"})}),t(e,{title:"With icon",children:t(r,{icon:"chat-help-regular"})}),t(e,{title:"With unit",children:t(r,{unit:"$"})}),t(e,{title:"With unit chooser",children:t(B,{units:["EUR","PLN","USD"],unit:"USD",inputMode:"numeric"})}),t(e,{title:"With end icon and custom injected component",children:t(r,{error:"Hey",renderEnd:()=>c(W,{children:[t(w,{copyText:"Copy",copiedText:"Copied",valueToCopy:"Copy me"}),t(V,{children:"Example tag"})]})})})]}),o=()=>c(h,{title:"Text input color variation",description:"You can see different colors by focusing each input",children:[t(e,{title:"Default",children:t(r,{})}),t(e,{title:"Gray",children:t(r,{color:"gray"})}),t(e,{title:"Live",children:t(r,{color:"live"})}),t(e,{title:"Sandbox",children:t(r,{color:"sandbox"})}),t(e,{title:"Positive",children:t(r,{color:"positive"})}),t(e,{title:"Warning",children:t(r,{color:"warning"})}),t(e,{title:"Negative",children:t(r,{color:"negative"})}),t(e,{title:"Current",children:t(r,{color:"current"})}),t(e,{title:"Partner",children:t(r,{color:"partner"})}),t(e,{title:"Swan",children:t(r,{color:"swan"})}),t(e,{title:"Shakespear",children:t(r,{color:"shakespear"})}),t(e,{title:"DarkPink",children:t(r,{color:"darkPink"})}),t(e,{title:"Sunglow",children:t(r,{color:"sunglow"})}),t(e,{title:"MediumSladeBlue",children:t(r,{color:"mediumSladeBlue"})})]}),a=()=>t(h,{title:"Numeric text input",description:"This variation is an example for digit inputs. It displays digits only keyboard on mobile",children:t(r,{placeholder:"000000",inputMode:"numeric",pattern:"[0-9]",maxLength:6})});var m,S,P;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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

      <StoryPart title="With unit chooser">
        <EditableInputTextWithUnitChooser units={["EUR", "PLN", "USD"]} unit="USD" inputMode="numeric" />
      </StoryPart>

      <StoryPart title="With end icon and custom injected component">
        <EditableInputText error="Hey" renderEnd={() => <>
              <LakeCopyButton copyText="Copy" copiedText="Copied" valueToCopy="Copy me" />
              <Tag>Example tag</Tag>
            </>} />
      </StoryPart>
    </StoryBlock>;
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var x,T,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(g=(T=o.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var b,I,E;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <StoryBlock title="Numeric text input" description="This variation is an example for digit inputs. It displays digits only keyboard on mobile">
      <EditableInputText placeholder="000000" inputMode="numeric" pattern="[0-9]" maxLength={6} />
    </StoryBlock>;
}`,...(E=(I=a.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const dt=["Variations","ColorVariations","Numeric"];export{o as ColorVariations,a as Numeric,i as Variations,dt as __namedExportsOrder,ut as default};
//# sourceMappingURL=TextInput.stories-CHqB1qu3.js.map
