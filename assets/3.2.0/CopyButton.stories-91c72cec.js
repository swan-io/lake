import{S,a as c,j as e,b as l}from"./Space-dba27b92.js";import{r as u}from"./index-f1286426.js";import{B as v}from"./commonStyles-42a4f97c.js";import{L as r,c as x}from"./LakeCopyButton-d6d08d03.js";import{L as a}from"./LakeLabel-af31f9aa.js";import{L}from"./LakeTextInput-bf88f81b.js";import{S as b,a as y}from"./_StoriesComponents-3cc488e2.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-20b32eda.js";import"./index-ca925b5c.js";import"./v4-4a60fe23.js";import"./Fill-e938b4c1.js";import"./LakeSelect-d9f7eed7.js";import"./useDisclosure-a0ce2208.js";import"./a11y-e7c88e69.js";import"./Popover-37204331.js";import"./useResponsive-c5d6bc67.js";import"./function-a81f264e.js";import"./Boxed-86465006.js";import"./BottomPanel-de831ede.js";import"./useBodyClassName-4b4df53c.js";import"./math-15178691.js";import"./FocusTrap-b85d66d4.js";import"./array-4dd4a51c.js";import"./LoadingView-935232a8.js";import"./colors-298625c7.js";import"./index-7f82ccac.js";import"./TransitionView-81a4e627.js";import"./index-35c6183c.js";import"./index-7af8ab58.js";import"./index-1e262cdd.js";const h=S.create({inputPart:{maxWidth:400}}),te={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,n=o.getHours(),t=o.getMinutes(),p=o.getSeconds();return`${n}:${t}:${p}`},i=()=>{const[o,n]=u.useState(""),[t,p]=u.useState(()=>d());return u.useEffect(()=>{const s=setInterval(()=>{p(d())},1e3);return()=>clearInterval(s)},[]),c(b,{title:"CopyButton",children:[e(y,{title:"Sizes",children:c(v,{direction:"row",alignItems:"start",children:[e(a,{label:`Default size (${x})`,render:()=>e(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 16",render:()=>e(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 21",render:()=>e(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 26",render:()=>e(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e(y,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e(a,{label:"Paste here",render:()=>e(L,{value:o,onChange:s=>n(s.currentTarget.value)})})})]})};var m,C,T;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-91c72cec.js.map
