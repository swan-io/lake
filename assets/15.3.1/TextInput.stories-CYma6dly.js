import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-BRHNB_95.js";import{U as r,g as i,h as a,ht as o,it as s,kt as c,o as l,s as u,st as d,wt as f}from"./ScrollView-BPgEBwS5.js";import{n as p,r as m,t as h}from"./_StoriesComponents-DowDFg02.js";import{n as g,t as _}from"./Tag-I7FtQh_6.js";import{n as v,t as y}from"./LakeTextInput-BvtcWbud.js";import{n as b,t as x}from"./LakeCopyButton-BJiPxxhY.js";var S,C,w,T,E,D,O,k,A,j;t((()=>{S=e(n()),o(),i(),b(),u(),v(),g(),d(),m(),C=r(),w=c.create({input:{maxWidth:400},fixedHeightInput:{height:128}}),T={title:`Forms/TextInput`,component:y},E=e=>{let[t,n]=(0,S.useState)(e.defaultValue??``);return(0,C.jsx)(f,{style:w.input,children:(0,C.jsx)(y,{...e,value:t,onChange:e=>n(e.currentTarget.value)})})},D=e=>{let[t,n]=(0,S.useState)(e.defaultValue??``),[r,i]=(0,S.useState)(e.unit);return(0,C.jsx)(f,{style:w.input,children:(0,C.jsx)(y,{...e,unit:r,value:t,onUnitChange:i,onChange:e=>n(e.currentTarget.value)})})},O=()=>(0,C.jsxs)(h,{title:`Input variations`,children:[(0,C.jsx)(p,{title:`Default`,children:(0,C.jsx)(E,{})}),(0,C.jsx)(p,{title:`Validating`,children:(0,C.jsx)(E,{validating:!0})}),(0,C.jsx)(p,{title:`Valid`,children:(0,C.jsx)(E,{valid:!0})}),(0,C.jsx)(p,{title:`Info`,children:(0,C.jsx)(E,{info:(0,C.jsx)(a,{children:(0,C.jsx)(l,{color:s.shakespear[500],children:`This is an information`})})})}),(0,C.jsx)(p,{title:`Warning`,children:(0,C.jsx)(E,{warning:!0})}),(0,C.jsx)(p,{title:`Warning + error`,children:(0,C.jsx)(E,{warning:!0,error:`This input is invalid`})}),(0,C.jsx)(p,{title:`Invalid`,children:(0,C.jsx)(E,{icon:`chat-help-regular`,error:`This input is invalid`})}),(0,C.jsx)(p,{title:`Invalid without error message`,children:(0,C.jsx)(E,{error:`This input is invalid`,hideErrors:!0})}),(0,C.jsx)(p,{title:`With character counter`,children:(0,C.jsx)(E,{maxCharCount:15})}),(0,C.jsx)(p,{title:`Character counter with error message`,children:(0,C.jsx)(E,{error:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit semper ornare. `,maxCharCount:15})}),(0,C.jsx)(p,{title:`With help`,children:(0,C.jsx)(E,{help:`9 characters`})}),(0,C.jsx)(p,{title:`With help and error`,children:(0,C.jsx)(E,{help:`9 characters`,error:`Invalid`})}),(0,C.jsx)(p,{title:`Disabled`,children:(0,C.jsx)(E,{disabled:!0})}),(0,C.jsx)(p,{title:`Readonly`,children:(0,C.jsx)(E,{readOnly:!0})}),(0,C.jsx)(p,{title:`Multi line`,children:(0,C.jsx)(E,{multiline:!0})}),(0,C.jsx)(p,{title:`Multi line`,children:(0,C.jsx)(E,{multiline:!0,style:w.fixedHeightInput,placeholder:`Placeholder`})}),(0,C.jsx)(p,{title:`With icon`,children:(0,C.jsx)(E,{icon:`chat-help-regular`})}),(0,C.jsx)(p,{title:`With unit`,children:(0,C.jsx)(E,{unit:`$`})}),(0,C.jsx)(p,{title:`With unit chooser`,children:(0,C.jsx)(D,{units:[`EUR`,`PLN`,`USD`],unit:`USD`,inputMode:`numeric`})}),(0,C.jsx)(p,{title:`With end icon and custom injected component`,children:(0,C.jsx)(E,{error:`Hey`,renderEnd:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(x,{copyText:`Copy`,copiedText:`Copied`,valueToCopy:`Copy me`}),(0,C.jsx)(_,{children:`Example tag`})]})})})]}),k=()=>(0,C.jsxs)(h,{title:`Text input color variation`,description:`You can see different colors by focusing each input`,children:[(0,C.jsx)(p,{title:`Default`,children:(0,C.jsx)(E,{})}),(0,C.jsx)(p,{title:`Gray`,children:(0,C.jsx)(E,{color:`gray`})}),(0,C.jsx)(p,{title:`Live`,children:(0,C.jsx)(E,{color:`live`})}),(0,C.jsx)(p,{title:`Sandbox`,children:(0,C.jsx)(E,{color:`sandbox`})}),(0,C.jsx)(p,{title:`Positive`,children:(0,C.jsx)(E,{color:`positive`})}),(0,C.jsx)(p,{title:`Warning`,children:(0,C.jsx)(E,{color:`warning`})}),(0,C.jsx)(p,{title:`Negative`,children:(0,C.jsx)(E,{color:`negative`})}),(0,C.jsx)(p,{title:`Current`,children:(0,C.jsx)(E,{color:`current`})}),(0,C.jsx)(p,{title:`Partner`,children:(0,C.jsx)(E,{color:`partner`})}),(0,C.jsx)(p,{title:`Swan`,children:(0,C.jsx)(E,{color:`swan`})}),(0,C.jsx)(p,{title:`Shakespear`,children:(0,C.jsx)(E,{color:`shakespear`})}),(0,C.jsx)(p,{title:`DarkPink`,children:(0,C.jsx)(E,{color:`darkPink`})}),(0,C.jsx)(p,{title:`Sunglow`,children:(0,C.jsx)(E,{color:`sunglow`})}),(0,C.jsx)(p,{title:`MediumSladeBlue`,children:(0,C.jsx)(E,{color:`mediumSladeBlue`})})]}),A=()=>(0,C.jsx)(h,{title:`Numeric text input`,description:`This variation is an example for digit inputs. It displays digits only keyboard on mobile`,children:(0,C.jsx)(E,{placeholder:`000000`,inputMode:`numeric`,pattern:`[0-9]`,maxLength:6})}),O.__docgenInfo={description:``,methods:[],displayName:`Variations`},k.__docgenInfo={description:``,methods:[],displayName:`ColorVariations`},A.__docgenInfo={description:``,methods:[],displayName:`Numeric`},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Numeric text input" description="This variation is an example for digit inputs. It displays digits only keyboard on mobile">
      <EditableInputText placeholder="000000" inputMode="numeric" pattern="[0-9]" maxLength={6} />
    </StoryBlock>;
}`,...A.parameters?.docs?.source}}},j=[`Variations`,`ColorVariations`,`Numeric`]}))();export{k as ColorVariations,A as Numeric,O as Variations,j as __namedExportsOrder,T as default};
//# sourceMappingURL=TextInput.stories-CYma6dly.js.map