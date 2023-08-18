import{S as T,a as p,j as e,b as s}from"./Space-f85095f8.js";import{r as C}from"./index-b9a8c83f.js";import{B as L}from"./Box-f4fbfbba.js";import{L as o}from"./LakeCopyButton-7282bdb6.js";import{L as t}from"./LakeLabel-2fef3f03.js";import{L as h}from"./LakeTextInput-221c8734.js";import{S as b,a as c}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-7e9fd84c.js";import"./useMergeRefs-56399732.js";import"./index-ca925b5c.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Fill-0c0bad9d.js";import"./index-4daf2301.js";const z=T.create({inputPart:{maxWidth:400}}),O={title:"Interactivity/CopyButton",component:o,args:{valueToCopy:"Helloworld",copyText:"Copy Helloworld",copiedText:"Copied Helloworld!"}},n=({size:l,valueToCopy:a,copyText:r,copiedText:i})=>{const[m,S]=C.useState("");return p(b,{title:"CopyButton",children:[e(c,{title:"Sizes",children:p(L,{direction:"row",alignItems:"start",children:[e(t,{label:`Choosen size (${l})`,render:()=>e(o,{size:l,copyText:r,copiedText:i,valueToCopy:a})}),e(s,{width:32}),e(t,{label:"Size 16",render:()=>e(o,{size:16,copyText:r,copiedText:i,valueToCopy:a})}),e(s,{width:32}),e(t,{label:"Size 21",render:()=>e(o,{size:21,copyText:r,copiedText:i,valueToCopy:a})}),e(s,{width:32}),e(t,{label:"Size 26",render:()=>e(o,{size:26,copyText:r,copiedText:i,valueToCopy:a})})]})}),e(c,{title:"You can test if value is well copied by paste it in this input",style:z.inputPart,children:e(t,{label:"Paste here",render:()=>e(h,{value:m,onChange:x=>S(x.currentTarget.value)})})})]})};var d,u,y;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`({
  size,
  valueToCopy,
  copyText,
  copiedText
}: StoryArgs) => {
  const [pastedValue, setPastedValue] = useState("");
  return <StoryBlock title="CopyButton">
      <StoryPart title="Sizes">
        <Box direction="row" alignItems="start">
          <LakeLabel label={\`Choosen size (\${size})\`} render={() => <LakeCopyButton size={size} copyText={copyText} copiedText={copiedText} valueToCopy={valueToCopy} />} />

          <Space width={32} />

          <LakeLabel label="Size 16" render={() => <LakeCopyButton size={16} copyText={copyText} copiedText={copiedText} valueToCopy={valueToCopy} />} />

          <Space width={32} />

          <LakeLabel label="Size 21" render={() => <LakeCopyButton size={21} copyText={copyText} copiedText={copiedText} valueToCopy={valueToCopy} />} />

          <Space width={32} />

          <LakeLabel label="Size 26" render={() => <LakeCopyButton size={26} copyText={copyText} copiedText={copiedText} valueToCopy={valueToCopy} />} />
        </Box>
      </StoryPart>

      <StoryPart title="You can test if value is well copied by paste it in this input" style={styles.inputPart}>
        <LakeLabel label="Paste here" render={() => <LakeTextInput value={pastedValue} onChange={event => setPastedValue(event.currentTarget.value)} />} />
      </StoryPart>
    </StoryBlock>;
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const W=["Variations"];export{n as Variations,W as __namedExportsOrder,O as default};
//# sourceMappingURL=CopyButton.stories-21ca92ca.js.map
