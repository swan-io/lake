import{S,a as c,j as e,b as l}from"./Space-73637b93.js";import{r as u}from"./index-1e572255.js";import{B as v}from"./Box-0a859752.js";import{L as r,c as x}from"./LakeCopyButton-2b0b246f.js";import{L as a}from"./LakeLabel-9bfbb0bf.js";import{L}from"./LakeTextInput-4faeaf62.js";import{S as b,a as y}from"./_StoriesComponents-74a68e00.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-cb762705.js";import"./useMergeRefs-5471de57.js";import"./index-ca925b5c.js";import"./commonStyles-d52fedae.js";import"./v4-4a60fe23.js";import"./Fill-f1b84457.js";import"./index-2acf74e9.js";const h=S.create({inputPart:{maxWidth:400}}),M={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,i=o.getHours(),t=o.getMinutes(),s=o.getSeconds();return`${i}:${t}:${s}`},n=()=>{const[o,i]=u.useState(""),[t,s]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{s(d())},1e3);return()=>clearInterval(p)},[]),c(b,{title:"CopyButton",children:[e(y,{title:"Sizes",children:c(v,{direction:"row",alignItems:"start",children:[e(a,{label:`Default size (${x})`,render:()=>e(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 16",render:()=>e(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 21",render:()=>e(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 26",render:()=>e(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e(y,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e(a,{label:"Paste here",render:()=>e(L,{value:o,onChange:p=>i(p.currentTarget.value)})})})]})};var C,T,m;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(m=(T=n.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};const O=["Variations"];export{n as Variations,O as __namedExportsOrder,M as default};
//# sourceMappingURL=CopyButton.stories-8d8068fe.js.map
