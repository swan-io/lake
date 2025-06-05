import{j as e,B as C,S as l,s as T}from"./ScrollView-sI9q1Hi-.js";import{r as u}from"./iframe-D2cWRokJ.js";import{L as r,c as v}from"./LakeCopyButton-BxKkCpL5.js";import{L as a}from"./LakeLabel-BbY1Z2hG.js";import{L as S}from"./LakeTextInput-BSV8PTZf.js";import{S as L,a as c}from"./_StoriesComponents-5z-jYrQh.js";import"./index-nZb-kHcz.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-DKVnCsyt.js";import"./commonStyles-BBEkV6IC.js";import"./v4-C6aID195.js";import"./Fill-Cp41WrLi.js";import"./LakeSelect-z2btenSk.js";import"./useDisclosure-CEaK23VU.js";import"./FocusTrap-DYfClpzl.js";import"./array-BfAlyugE.js";import"./Popover-C1mlkFFD.js";import"./useResponsive-aUGX-ZC6.js";import"./function-BkWYKXhz.js";import"./BottomPanel-BW-I-SJQ.js";import"./useBodyClassName-C2JBTyV7.js";import"./Suspendable-BZObsUGM.js";import"./index-BPFVi3Sk.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CY4WTdT5.js";import"./index-CAFipeNF.js";import"./Separator-t7kBWJo4.js";import"./index-C9hHkiQW.js";const h=T.create({inputPart:{maxWidth:400}}),Q={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,i=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${i}:${t}:${n}`},s=()=>{const[o,i]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(C,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>i(p.currentTarget.value)})})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const U=["Variations"];export{s as Variations,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=CopyButton.stories-DhlpPsk7.js.map
