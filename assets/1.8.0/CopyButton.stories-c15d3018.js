import{S,j as c,a as e,b as l}from"./Space-4880dc8d.js";import{r as u}from"./index-f1f749bf.js";import{B as v}from"./index.module-7da41443.js";import{L as r,c as x}from"./LakeCopyButton-2c17b124.js";import{L as a}from"./LakeLabel-ba1a49e7.js";import{L}from"./LakeTextInput-45ccf750.js";import{S as b,a as y}from"./_StoriesComponents-30824e31.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Icon-c3465053.js";import"./Svg-d55ab030.js";import"./LakeTooltip-e802ecdc.js";import"./index-96c5f47c.js";import"./useMergeRefs-ab5dc31b.js";import"./Portal-318292b0.js";import"./WithCurrentColor-ba8cb886.js";import"./Pressable-f8f36fef.js";import"./index-ca925b5c.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Fill-0a6558f7.js";import"./index-32b05dfd.js";const h=S.create({inputPart:{maxWidth:400}}),G={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,i=o.getHours(),t=o.getMinutes(),p=o.getSeconds();return`${i}:${t}:${p}`},n=()=>{const[o,i]=u.useState(""),[t,p]=u.useState(()=>d());return u.useEffect(()=>{const s=setInterval(()=>{p(d())},1e3);return()=>clearInterval(s)},[]),c(b,{title:"CopyButton",children:[e(y,{title:"Sizes",children:c(v,{direction:"row",alignItems:"start",children:[e(a,{label:`Default size (${x})`,render:()=>e(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 16",render:()=>e(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 21",render:()=>e(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 26",render:()=>e(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e(y,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e(a,{label:"Paste here",render:()=>e(L,{value:o,onChange:s=>i(s.currentTarget.value)})})})]})};var C,m,T;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [pastedValue, setPastedValue] = useState("");
  const [valueToCopy, setValueToCopy] = useState(() => getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setValueToCopy(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <StoryBlock title="CopyButton">
      <StoryPart title="Sizes">
        <Box direction="row" alignItems="start">
          <LakeLabel label={\`Default size (\${copyButtondefaultSize})\`} render={() => <LakeCopyButton copyText="Copy" copiedText={\`Copied \${valueToCopy}\`} valueToCopy={valueToCopy} />} />

          <Space width={32} />

          <LakeLabel label="Size 16" render={() => <LakeCopyButton size={16} copyText="Copy" copiedText={\`Copied \${valueToCopy}\`} valueToCopy={valueToCopy} />} />

          <Space width={32} />

          <LakeLabel label="Size 21" render={() => <LakeCopyButton size={21} copyText="Copy" copiedText={\`Copied \${valueToCopy}\`} valueToCopy={valueToCopy} />} />

          <Space width={32} />

          <LakeLabel label="Size 26" render={() => <LakeCopyButton size={26} copyText="Copy" copiedText={\`Copied \${valueToCopy}\`} valueToCopy={valueToCopy} />} />
        </Box>
      </StoryPart>

      <StoryPart title="You can test if value is well copied by paste it in this input" style={styles.inputPart}>
        <LakeLabel label="Paste here" render={() => <LakeTextInput value={pastedValue} onChange={event => setPastedValue(event.currentTarget.value)} />} />
      </StoryPart>
    </StoryBlock>;
}`,...(T=(m=n.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};const J=["Variations"];export{n as Variations,J as __namedExportsOrder,G as default};
//# sourceMappingURL=CopyButton.stories-c15d3018.js.map
