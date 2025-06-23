import{j as e,B as C,S as l,s as T}from"./ScrollView-rpcy4Ntm.js";import{r as u}from"./iframe-CZb_pTm6.js";import{L as r,c as v}from"./LakeCopyButton-CtV7B93a.js";import{L as a}from"./LakeLabel-ENzKVgrL.js";import{L as S}from"./LakeTextInput-7FCi86Jy.js";import{S as L,a as c}from"./_StoriesComponents-CCUyW6Y9.js";import"./index-DWBrKOLN.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-dLj5GzUO.js";import"./commonStyles-BBEkV6IC.js";import"./v4-C6aID195.js";import"./Fill-D9W8kb53.js";import"./LakeSelect-BCWse8Qq.js";import"./useDisclosure-DkYJ2D3f.js";import"./FocusTrap-B7dAfXh9.js";import"./array-BfAlyugE.js";import"./Popover-c7bhfqjn.js";import"./useResponsive-BvdZnFNX.js";import"./function-BY67aOD3.js";import"./BottomPanel-DZ0TTqNO.js";import"./useBodyClassName-KxObRAPR.js";import"./Suspendable-B4RLw8_w.js";import"./index-Bnd0Vzw-.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BUujvhX0.js";import"./index-Cvhf7Voo.js";import"./Separator-CW0xnE3Z.js";import"./index-Ca8nC3gY.js";const h=T.create({inputPart:{maxWidth:400}}),Q={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,i=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${i}:${t}:${n}`},s=()=>{const[o,i]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(C,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>i(p.currentTarget.value)})})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-YWbwQzFk.js.map
