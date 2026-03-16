import{j as e,B as y,S as l,s as m}from"./ScrollView-9d9_H-vT.js";import{r as u}from"./iframe-Wny54WcV.js";import{L as r,c as x}from"./LakeCopyButton-BmnRrk43.js";import{L as a}from"./LakeLabel-oqkUcFsS.js";import{L as C}from"./LakeTextInput-DouL_CuE.js";import{S as T,a as c}from"./_StoriesComponents-DIS6ELXU.js";import"./index-Bg9GbgPl.js";import"./preload-helper-D1IIBeq1.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-jDU8dMdf.js";import"./commonStyles-BBEkV6IC.js";import"./v4-EwEgHOG0.js";import"./Fill-D9orydea.js";import"./LakeSelect-BRtqanf1.js";import"./useDisclosure-DCb24-iH.js";import"./FocusTrap-DPgQIrMg.js";import"./array-BfAlyugE.js";import"./Popover-DQbV7kH9.js";import"./useResponsive-48CsPtFO.js";import"./function-DmAXMHAO.js";import"./BottomPanel-DdVALXcO.js";import"./useBodyClassName-BXP2xOta.js";import"./Suspendable-Cfb1vPRN.js";import"./index-BPxWiLG5.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BqmdHdyA.js";import"./index-DcaURsEy.js";import"./Separator-DMvmKODX.js";import"./index-B-mQ6UwQ.js";const v=m.create({inputPart:{maxWidth:400}}),J={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(T,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(y,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${x})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:v.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(C,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const K=["Variations"];export{i as Variations,K as __namedExportsOrder,J as default};
//# sourceMappingURL=CopyButton.stories-Dgbdr2tO.js.map
