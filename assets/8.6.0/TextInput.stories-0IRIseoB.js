import{s as C,j as t,V as b}from"./Space-vOSkumTC.js";import{r as u}from"./index-uCp2LrAq.js";import{L as f}from"./LakeCopyButton-ZFMKgniU.js";import{L as c}from"./LakeTextInput-BLHx_i5U.js";import{T as k}from"./Tag-C5yEGnhi.js";import{S as p,a as e}from"./_StoriesComponents-jOR6vAMI.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-C1mxBRS_.js";import"./commonStyles-t4XfA7cz.js";import"./Fill-Cf1X0Mdz.js";import"./LakeSelect-Cr6gH0ko.js";import"./useDisclosure-X_l1NENI.js";import"./a11y-DXvpDVrG.js";import"./Popover-DL-rmZPP.js";import"./useResponsive-CWYKQO6x.js";import"./function-De4Cecxu.js";import"./BottomPanel-CQMdPCyR.js";import"./useBodyClassName-CiTylq2A.js";import"./FocusTrap-BMYOn2gx.js";import"./array-rjEBP2Ry.js";import"./Suspendable-DAkP2ur3.js";import"./index-B_CfE0f5.js";import"./TransitionView-jc08-ng2.js";import"./index-ByctqrIc.js";const x=C.create({input:{maxWidth:400},fixedHeightInput:{height:128}}),nt={title:"Forms/TextInput",component:c},r=n=>{const[l,s]=u.useState(n.defaultValue??"");return t.jsx(b,{style:x.input,children:t.jsx(c,{...n,value:l,onChange:d=>s(d.currentTarget.value)})})},W=n=>{const[l,s]=u.useState(n.defaultValue??""),[d,E]=u.useState(n.unit);return t.jsx(b,{style:x.input,children:t.jsx(c,{...n,unit:d,value:l,onUnitChange:E,onChange:v=>s(v.currentTarget.value)})})},i=()=>t.jsxs(p,{title:"Input variations",children:[t.jsx(e,{title:"Default",children:t.jsx(r,{})}),t.jsx(e,{title:"Validating",children:t.jsx(r,{validating:!0})}),t.jsx(e,{title:"Valid",children:t.jsx(r,{valid:!0})}),t.jsx(e,{title:"Warning",children:t.jsx(r,{warning:!0})}),t.jsx(e,{title:"Warning + error",children:t.jsx(r,{warning:!0,error:"This input is invalid"})}),t.jsx(e,{title:"Invalid",children:t.jsx(r,{icon:"chat-help-regular",error:"This input is invalid"})}),t.jsx(e,{title:"Invalid without error message",children:t.jsx(r,{error:"This input is invalid",hideErrors:!0})}),t.jsx(e,{title:"With character counter",children:t.jsx(r,{maxCharCount:15})}),t.jsx(e,{title:"Character counter with error message",children:t.jsx(r,{error:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit semper ornare. ",maxCharCount:15})}),t.jsx(e,{title:"With help",children:t.jsx(r,{help:"9 characters"})}),t.jsx(e,{title:"With help and error",children:t.jsx(r,{help:"9 characters",error:"Invalid"})}),t.jsx(e,{title:"Disabled",children:t.jsx(r,{disabled:!0})}),t.jsx(e,{title:"Readonly",children:t.jsx(r,{readOnly:!0})}),t.jsx(e,{title:"Multi line",children:t.jsx(r,{multiline:!0})}),t.jsx(e,{title:"Multi line",children:t.jsx(r,{multiline:!0,style:x.fixedHeightInput,placeholder:"Placeholder"})}),t.jsx(e,{title:"With icon",children:t.jsx(r,{icon:"chat-help-regular"})}),t.jsx(e,{title:"With unit",children:t.jsx(r,{unit:"$"})}),t.jsx(e,{title:"With unit chooser",children:t.jsx(W,{units:["EUR","PLN","USD"],unit:"USD",inputMode:"numeric"})}),t.jsx(e,{title:"With end icon and custom injected component",children:t.jsx(r,{error:"Hey",renderEnd:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{copyText:"Copy",copiedText:"Copied",valueToCopy:"Copy me"}),t.jsx(k,{children:"Example tag"})]})})})]}),o=()=>t.jsxs(p,{title:"Text input color variation",description:"You can see different colors by focusing each input",children:[t.jsx(e,{title:"Default",children:t.jsx(r,{})}),t.jsx(e,{title:"Gray",children:t.jsx(r,{color:"gray"})}),t.jsx(e,{title:"Live",children:t.jsx(r,{color:"live"})}),t.jsx(e,{title:"Sandbox",children:t.jsx(r,{color:"sandbox"})}),t.jsx(e,{title:"Positive",children:t.jsx(r,{color:"positive"})}),t.jsx(e,{title:"Warning",children:t.jsx(r,{color:"warning"})}),t.jsx(e,{title:"Negative",children:t.jsx(r,{color:"negative"})}),t.jsx(e,{title:"Current",children:t.jsx(r,{color:"current"})}),t.jsx(e,{title:"Partner",children:t.jsx(r,{color:"partner"})}),t.jsx(e,{title:"Swan",children:t.jsx(r,{color:"swan"})}),t.jsx(e,{title:"Shakespear",children:t.jsx(r,{color:"shakespear"})}),t.jsx(e,{title:"DarkPink",children:t.jsx(r,{color:"darkPink"})}),t.jsx(e,{title:"Sunglow",children:t.jsx(r,{color:"sunglow"})}),t.jsx(e,{title:"MediumSladeBlue",children:t.jsx(r,{color:"mediumSladeBlue"})})]}),a=()=>t.jsx(p,{title:"Numeric text input",description:"This variation is an example for digit inputs. It displays digits only keyboard on mobile",children:t.jsx(r,{placeholder:"000000",inputMode:"numeric",pattern:"[0-9]",maxLength:6})});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};o.__docgenInfo={description:"",methods:[],displayName:"ColorVariations"};a.__docgenInfo={description:"",methods:[],displayName:"Numeric"};var h,y,m;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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

      <StoryPart title="Warning">
        <EditableInputText warning={true} />
      </StoryPart>

      <StoryPart title="Warning + error">
        <EditableInputText warning={true} error="This input is invalid" />
      </StoryPart>

      <StoryPart title="Invalid">
        <EditableInputText icon="chat-help-regular" error="This input is invalid" />
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
}`,...(m=(y=i.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var S,j,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(P=(j=o.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var g,T,I;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <StoryBlock title="Numeric text input" description="This variation is an example for digit inputs. It displays digits only keyboard on mobile">
      <EditableInputText placeholder="000000" inputMode="numeric" pattern="[0-9]" maxLength={6} />
    </StoryBlock>;
}`,...(I=(T=a.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const it=["Variations","ColorVariations","Numeric"];export{o as ColorVariations,a as Numeric,i as Variations,it as __namedExportsOrder,nt as default};
//# sourceMappingURL=TextInput.stories-0IRIseoB.js.map
