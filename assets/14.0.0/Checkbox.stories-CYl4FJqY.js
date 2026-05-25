import{c as e,i as t}from"./preload-helper-CdcoXO38.js";import{o as n}from"./iframe-LGJvGeF3.js";import{St as r,U as i,bt as a,ht as o}from"./ScrollView-C3WfkYQy.js";import{r as s,t as c}from"./Pressable-FI3JOkKe.js";import{n as l,r as u,t as d}from"./_StoriesComponents-bzZgEHKX.js";import{n as f,r as p,t as m}from"./LakeCheckbox-BZVjaQLo.js";var h,g,_,v,y,b,x,S,C;t((()=>{h=e(n()),o(),p(),s(),u(),g=i(),_=r.create({container:{alignSelf:`flex-start`}}),v={title:`Forms/Checkbox`,component:m},y=({defaultValue:e=!1,...t})=>{let[n,r]=(0,h.useState)(e);return(0,g.jsx)(c,{style:_.container,onPress:()=>{r(e=>e!==!0)},disabled:t.disabled,children:(0,g.jsx)(m,{value:n,...t})})},b=({defaultValue:e=!1,...t})=>{let[n,r]=(0,h.useState)(e);return(0,g.jsx)(a,{style:_.container,children:(0,g.jsx)(f,{value:n,onValueChange:()=>{r(e=>e!==!0)},...t})})},x=()=>(0,g.jsxs)(d,{title:`Variations`,children:[(0,g.jsx)(l,{title:`Default`,children:(0,g.jsx)(y,{})}),(0,g.jsx)(l,{title:`Indeterminate`,children:(0,g.jsx)(y,{defaultValue:`mixed`})}),(0,g.jsx)(l,{title:`Labelled`,children:(0,g.jsx)(b,{label:`Enabled`})}),(0,g.jsx)(l,{title:`Labelled error`,children:(0,g.jsx)(b,{label:`Enabled`,isError:!0})}),(0,g.jsx)(l,{title:`Disabled`,children:(0,g.jsx)(y,{disabled:!0})}),(0,g.jsx)(l,{title:`Disabled checked`,children:(0,g.jsx)(y,{defaultValue:!0,disabled:!0})}),(0,g.jsx)(l,{title:`Indeterminate checked`,children:(0,g.jsx)(y,{defaultValue:`mixed`,disabled:!0})}),(0,g.jsx)(l,{title:`Error`,children:(0,g.jsx)(y,{isError:!0})})]}),S=()=>(0,g.jsxs)(d,{title:`Colors`,description:`Checkbox color impacts only checked state`,children:[(0,g.jsx)(l,{title:`Default`,children:(0,g.jsx)(y,{defaultValue:!0})}),(0,g.jsx)(l,{title:`gray`,children:(0,g.jsx)(y,{defaultValue:!0,color:`gray`})}),(0,g.jsx)(l,{title:`live`,children:(0,g.jsx)(y,{defaultValue:!0,color:`live`})}),(0,g.jsx)(l,{title:`sandbox`,children:(0,g.jsx)(y,{defaultValue:!0,color:`sandbox`})}),(0,g.jsx)(l,{title:`positive`,children:(0,g.jsx)(y,{defaultValue:!0,color:`positive`})}),(0,g.jsx)(l,{title:`warning`,children:(0,g.jsx)(y,{defaultValue:!0,color:`warning`})}),(0,g.jsx)(l,{title:`negative`,children:(0,g.jsx)(y,{defaultValue:!0,color:`negative`})}),(0,g.jsx)(l,{title:`current`,children:(0,g.jsx)(y,{defaultValue:!0,color:`current`})}),(0,g.jsx)(l,{title:`partner`,children:(0,g.jsx)(y,{defaultValue:!0,color:`partner`})}),(0,g.jsx)(l,{title:`swan`,children:(0,g.jsx)(y,{defaultValue:!0,color:`swan`})}),(0,g.jsx)(l,{title:`shakespear`,children:(0,g.jsx)(y,{defaultValue:!0,color:`shakespear`})}),(0,g.jsx)(l,{title:`darkPink`,children:(0,g.jsx)(y,{defaultValue:!0,color:`darkPink`})}),(0,g.jsx)(l,{title:`sunglow`,children:(0,g.jsx)(y,{defaultValue:!0,color:`sunglow`})}),(0,g.jsx)(l,{title:`mediumSladeBlue`,children:(0,g.jsx)(y,{defaultValue:!0,color:`mediumSladeBlue`})})]}),x.__docgenInfo={description:``,methods:[],displayName:`Variations`},S.__docgenInfo={description:``,methods:[],displayName:`Colors`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Variations">
      <StoryPart title="Default">
        <InteractiveCheckbox />
      </StoryPart>

      <StoryPart title="Indeterminate">
        <InteractiveCheckbox defaultValue="mixed" />
      </StoryPart>

      <StoryPart title="Labelled">
        <InteractiveLabelledCheckbox label="Enabled" />
      </StoryPart>

      <StoryPart title="Labelled error">
        <InteractiveLabelledCheckbox label="Enabled" isError={true} />
      </StoryPart>

      <StoryPart title="Disabled">
        <InteractiveCheckbox disabled={true} />
      </StoryPart>

      <StoryPart title="Disabled checked">
        <InteractiveCheckbox defaultValue={true} disabled={true} />
      </StoryPart>

      <StoryPart title="Indeterminate checked">
        <InteractiveCheckbox defaultValue="mixed" disabled={true} />
      </StoryPart>

      <StoryPart title="Error">
        <InteractiveCheckbox isError={true} />
      </StoryPart>
    </StoryBlock>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Colors" description="Checkbox color impacts only checked state">
      <StoryPart title="Default">
        <InteractiveCheckbox defaultValue={true} />
      </StoryPart>

      <StoryPart title="gray">
        <InteractiveCheckbox defaultValue={true} color="gray" />
      </StoryPart>

      <StoryPart title="live">
        <InteractiveCheckbox defaultValue={true} color="live" />
      </StoryPart>

      <StoryPart title="sandbox">
        <InteractiveCheckbox defaultValue={true} color="sandbox" />
      </StoryPart>

      <StoryPart title="positive">
        <InteractiveCheckbox defaultValue={true} color="positive" />
      </StoryPart>

      <StoryPart title="warning">
        <InteractiveCheckbox defaultValue={true} color="warning" />
      </StoryPart>

      <StoryPart title="negative">
        <InteractiveCheckbox defaultValue={true} color="negative" />
      </StoryPart>

      <StoryPart title="current">
        <InteractiveCheckbox defaultValue={true} color="current" />
      </StoryPart>

      <StoryPart title="partner">
        <InteractiveCheckbox defaultValue={true} color="partner" />
      </StoryPart>

      <StoryPart title="swan">
        <InteractiveCheckbox defaultValue={true} color="swan" />
      </StoryPart>

      <StoryPart title="shakespear">
        <InteractiveCheckbox defaultValue={true} color="shakespear" />
      </StoryPart>

      <StoryPart title="darkPink">
        <InteractiveCheckbox defaultValue={true} color="darkPink" />
      </StoryPart>

      <StoryPart title="sunglow">
        <InteractiveCheckbox defaultValue={true} color="sunglow" />
      </StoryPart>

      <StoryPart title="mediumSladeBlue">
        <InteractiveCheckbox defaultValue={true} color="mediumSladeBlue" />
      </StoryPart>
    </StoryBlock>;
}`,...S.parameters?.docs?.source}}},C=[`Variations`,`Colors`]}))();export{S as Colors,x as Variations,C as __namedExportsOrder,v as default};
//# sourceMappingURL=Checkbox.stories-CYl4FJqY.js.map