import{j as t,B as S,L as j,c as P,s as T,V as h}from"./ScrollView-B1ZIOFos.js";import{r as c}from"./iframe-CfGACmgy.js";import{L as g}from"./LakeCopyButton-Cw5Jt8c9.js";import{L as u}from"./LakeTextInput-CybAVA_i.js";import{T as I}from"./Tag-jWxmpDvI.js";import{S as p,a as e}from"./_StoriesComponents-B1W83RbR.js";import"./index-KdmnAHUI.js";import"./preload-helper-D1IIBeq1.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-3iSMfKfk.js";import"./commonStyles-BBEkV6IC.js";import"./Fill-10JFSjnF.js";import"./LakeSelect-UlQkYuVv.js";import"./useDisclosure-CrtbPqBl.js";import"./FocusTrap-D2S41ttM.js";import"./array-BfAlyugE.js";import"./Popover-BiQ3U_90.js";import"./useResponsive-BfrHm6VX.js";import"./function-B2RjAcwV.js";import"./BottomPanel-CjbhX7gN.js";import"./useBodyClassName-Bw35jD8P.js";import"./Suspendable-BzSQ2lwS.js";import"./index-DBz4Th3M.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BkesIYju.js";import"./index-CLI9oW-i.js";import"./Separator-D_8MiOZf.js";import"./index-MDpUC8Zi.js";const x=T.create({input:{maxWidth:400},fixedHeightInput:{height:128}}),X={title:"Forms/TextInput",component:u},r=n=>{const[l,s]=c.useState(n.defaultValue??"");return t.jsx(h,{style:x.input,children:t.jsx(u,{...n,value:l,onChange:d=>s(d.currentTarget.value)})})},b=n=>{const[l,s]=c.useState(n.defaultValue??""),[d,y]=c.useState(n.unit);return t.jsx(h,{style:x.input,children:t.jsx(u,{...n,unit:d,value:l,onUnitChange:y,onChange:m=>s(m.currentTarget.value)})})},i=()=>t.jsxs(p,{title:"Input variations",children:[t.jsx(e,{title:"Default",children:t.jsx(r,{})}),t.jsx(e,{title:"Validating",children:t.jsx(r,{validating:!0})}),t.jsx(e,{title:"Valid",children:t.jsx(r,{valid:!0})}),t.jsx(e,{title:"Info",children:t.jsx(r,{info:t.jsx(S,{children:t.jsx(j,{color:P.shakespear[500],children:"This is an information"})})})}),t.jsx(e,{title:"Warning",children:t.jsx(r,{warning:!0})}),t.jsx(e,{title:"Warning + error",children:t.jsx(r,{warning:!0,error:"This input is invalid"})}),t.jsx(e,{title:"Invalid",children:t.jsx(r,{icon:"chat-help-regular",error:"This input is invalid"})}),t.jsx(e,{title:"Invalid without error message",children:t.jsx(r,{error:"This input is invalid",hideErrors:!0})}),t.jsx(e,{title:"With character counter",children:t.jsx(r,{maxCharCount:15})}),t.jsx(e,{title:"Character counter with error message",children:t.jsx(r,{error:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit semper ornare. ",maxCharCount:15})}),t.jsx(e,{title:"With help",children:t.jsx(r,{help:"9 characters"})}),t.jsx(e,{title:"With help and error",children:t.jsx(r,{help:"9 characters",error:"Invalid"})}),t.jsx(e,{title:"Disabled",children:t.jsx(r,{disabled:!0})}),t.jsx(e,{title:"Readonly",children:t.jsx(r,{readOnly:!0})}),t.jsx(e,{title:"Multi line",children:t.jsx(r,{multiline:!0})}),t.jsx(e,{title:"Multi line",children:t.jsx(r,{multiline:!0,style:x.fixedHeightInput,placeholder:"Placeholder"})}),t.jsx(e,{title:"With icon",children:t.jsx(r,{icon:"chat-help-regular"})}),t.jsx(e,{title:"With unit",children:t.jsx(r,{unit:"$"})}),t.jsx(e,{title:"With unit chooser",children:t.jsx(b,{units:["EUR","PLN","USD"],unit:"USD",inputMode:"numeric"})}),t.jsx(e,{title:"With end icon and custom injected component",children:t.jsx(r,{error:"Hey",renderEnd:()=>t.jsxs(t.Fragment,{children:[t.jsx(g,{copyText:"Copy",copiedText:"Copied",valueToCopy:"Copy me"}),t.jsx(I,{children:"Example tag"})]})})})]}),o=()=>t.jsxs(p,{title:"Text input color variation",description:"You can see different colors by focusing each input",children:[t.jsx(e,{title:"Default",children:t.jsx(r,{})}),t.jsx(e,{title:"Gray",children:t.jsx(r,{color:"gray"})}),t.jsx(e,{title:"Live",children:t.jsx(r,{color:"live"})}),t.jsx(e,{title:"Sandbox",children:t.jsx(r,{color:"sandbox"})}),t.jsx(e,{title:"Positive",children:t.jsx(r,{color:"positive"})}),t.jsx(e,{title:"Warning",children:t.jsx(r,{color:"warning"})}),t.jsx(e,{title:"Negative",children:t.jsx(r,{color:"negative"})}),t.jsx(e,{title:"Current",children:t.jsx(r,{color:"current"})}),t.jsx(e,{title:"Partner",children:t.jsx(r,{color:"partner"})}),t.jsx(e,{title:"Swan",children:t.jsx(r,{color:"swan"})}),t.jsx(e,{title:"Shakespear",children:t.jsx(r,{color:"shakespear"})}),t.jsx(e,{title:"DarkPink",children:t.jsx(r,{color:"darkPink"})}),t.jsx(e,{title:"Sunglow",children:t.jsx(r,{color:"sunglow"})}),t.jsx(e,{title:"MediumSladeBlue",children:t.jsx(r,{color:"mediumSladeBlue"})})]}),a=()=>t.jsx(p,{title:"Numeric text input",description:"This variation is an example for digit inputs. It displays digits only keyboard on mobile",children:t.jsx(r,{placeholder:"000000",inputMode:"numeric",pattern:"[0-9]",maxLength:6})});i.__docgenInfo={description:"",methods:[],displayName:"Variations"};o.__docgenInfo={description:"",methods:[],displayName:"ColorVariations"};a.__docgenInfo={description:"",methods:[],displayName:"Numeric"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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

      <StoryPart title="Info">
        <EditableInputText info={<Box>
              <LakeText color={colors.shakespear[500]}>This is an information</LakeText>
            </Box>} />
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Numeric text input" description="This variation is an example for digit inputs. It displays digits only keyboard on mobile">
      <EditableInputText placeholder="000000" inputMode="numeric" pattern="[0-9]" maxLength={6} />
    </StoryBlock>;
}`,...a.parameters?.docs?.source}}};const Z=["Variations","ColorVariations","Numeric"];export{o as ColorVariations,a as Numeric,i as Variations,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=TextInput.stories-BAbDnxUE.js.map
