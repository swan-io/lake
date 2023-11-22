import{S,a as c,j as e,b as l}from"./Space-d12e3bfc.js";import{r as u}from"./index-f1286426.js";import{B as v}from"./commonStyles-1ccbee26.js";import{L as r,c as x}from"./LakeCopyButton-1e0040fd.js";import{L as a}from"./LakeLabel-20a53f75.js";import{L}from"./LakeTextInput-ac070cd4.js";import{S as b,a as y}from"./_StoriesComponents-5f6e9af0.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-70de31df.js";import"./index-ca925b5c.js";import"./v4-4a60fe23.js";import"./Fill-d9c69daa.js";import"./LakeSelect-423e2bb7.js";import"./useDisclosure-a0ce2208.js";import"./a11y-e7c88e69.js";import"./Popover-78ab83ce.js";import"./useResponsive-2838783c.js";import"./function-a81f264e.js";import"./Boxed-86465006.js";import"./BottomPanel-16b05758.js";import"./useBodyClassName-4b4df53c.js";import"./math-b41862e6.js";import"./FocusTrap-e6187b75.js";import"./array-4dd4a51c.js";import"./LoadingView-ebbf98a9.js";import"./colors-298625c7.js";import"./index-6c4b0b94.js";import"./TransitionView-221dc567.js";import"./index-9e829ad3.js";import"./index-e1411ff8.js";import"./index-6cbbe25a.js";const h=S.create({inputPart:{maxWidth:400}}),te={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,n=o.getHours(),t=o.getMinutes(),p=o.getSeconds();return`${n}:${t}:${p}`},i=()=>{const[o,n]=u.useState(""),[t,p]=u.useState(()=>d());return u.useEffect(()=>{const s=setInterval(()=>{p(d())},1e3);return()=>clearInterval(s)},[]),c(b,{title:"CopyButton",children:[e(y,{title:"Sizes",children:c(v,{direction:"row",alignItems:"start",children:[e(a,{label:`Default size (${x})`,render:()=>e(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 16",render:()=>e(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 21",render:()=>e(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 26",render:()=>e(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e(y,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e(a,{label:"Paste here",render:()=>e(L,{value:o,onChange:s=>n(s.currentTarget.value)})})})]})};var m,C,T;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const oe=["Variations"];export{i as Variations,oe as __namedExportsOrder,te as default};
//# sourceMappingURL=CopyButton.stories-09ed080b.js.map
