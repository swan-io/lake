import{j as e}from"./jsx-runtime-DT09rT5F.js";import{r as l}from"./index-DXKZGL6g.js";import{s as C,B as T,S as u}from"./ScrollView-BoCrTkEc.js";import{L as r,c as v}from"./LakeCopyButton--Jfxr8zN.js";import{L as a}from"./LakeLabel-N5JXqfQP.js";import{L as S}from"./LakeTextInput-ChOFC3zq.js";import{S as L,a as c}from"./_StoriesComponents-DloRyvw6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BeFrmAzh.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-F4uuO-P3.js";import"./commonStyles-CWvHnKRn.js";import"./v4-C6aID195.js";import"./Fill-k23jBRLa.js";import"./LakeSelect-BT6Q7B7e.js";import"./useDisclosure-CwHJfrsH.js";import"./FocusTrap-DDvJOAtm.js";import"./array-BfAlyugE.js";import"./Popover-__n1yfwm.js";import"./useResponsive-6iDeDSbQ.js";import"./function-BYwUOg0j.js";import"./BottomPanel-Cda-5Nad.js";import"./useBodyClassName-CYzM7DM-.js";import"./Suspendable-DRG3ow7X.js";import"./index-B9iOX7Yo.js";import"./extends-CF3RwP-h.js";import"./TransitionView-C4NXOBjL.js";import"./index-BH51n4Hn.js";import"./Separator-BCHPcwA4.js";import"./index-BKK4bcui.js";const h=C.create({inputPart:{maxWidth:400}}),X={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=l.useState(""),[t,n]=l.useState(()=>d());return l.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(T,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(x=(m=i.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const Z=["Variations"];export{i as Variations,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=CopyButton.stories-BtN9W4Rb.js.map
