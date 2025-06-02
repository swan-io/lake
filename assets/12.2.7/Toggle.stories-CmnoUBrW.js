import{j as e}from"./ScrollView-BeSXC1Tb.js";import{r as d}from"./iframe-B851kKZr.js";import{T as o}from"./Toggle-_QF41JTD.js";import{S as c,a as r}from"./_StoriesComponents-Dk6G-1Wx.js";import"./index-1Wf4ZSMK.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BgfDRk5N.js";import"./Separator-BTAzic5-.js";const L={title:"Forms/Toggle",component:o},t=()=>{const[l,a]=d.useState(!1);return e.jsxs(c,{title:"Variations",description:"Toggle component",children:[e.jsx(r,{title:"Desktop",children:e.jsx(o,{value:l,onToggle:a,mode:"desktop",offLabel:"Canceled",onLabel:"Active"})}),e.jsx(r,{title:"Desktop Disabled",children:e.jsx(o,{value:l,onToggle:a,mode:"desktop",disabled:!0,offLabel:"Canceled",onLabel:"Active"})}),e.jsx(r,{title:"Mobile",children:e.jsx(o,{value:l,onToggle:a,mode:"mobile",offLabel:"Canceled",onLabel:"Active"})}),e.jsx(r,{title:"Mobile Disabled",children:e.jsx(o,{value:l,disabled:!0,onToggle:a,mode:"mobile",offLabel:"Canceled",onLabel:"Active"})})]})};t.__docgenInfo={description:"",methods:[],displayName:"Variations"};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <StoryBlock title="Variations" description="Toggle component">
      <StoryPart title="Desktop">
        <Toggle value={value} onToggle={setValue} mode="desktop" offLabel="Canceled" onLabel="Active" />
      </StoryPart>

      <StoryPart title="Desktop Disabled">
        <Toggle value={value} onToggle={setValue} mode="desktop" disabled={true} offLabel="Canceled" onLabel="Active" />
      </StoryPart>

      <StoryPart title="Mobile">
        <Toggle value={value} onToggle={setValue} mode="mobile" offLabel="Canceled" onLabel="Active" />
      </StoryPart>

      <StoryPart title="Mobile Disabled">
        <Toggle value={value} disabled={true} onToggle={setValue} mode="mobile" offLabel="Canceled" onLabel="Active" />
      </StoryPart>
    </StoryBlock>;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const S=["Variations"];export{t as Variations,S as __namedExportsOrder,L as default};
//# sourceMappingURL=Toggle.stories-CmnoUBrW.js.map
