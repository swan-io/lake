import{j as e,B as C,S as l,s as T}from"./ScrollView-C78SkEne.js";import{r as u}from"./iframe-bSWLDtM2.js";import{L as r,c as v}from"./LakeCopyButton-QXLltaE4.js";import{L as a}from"./LakeLabel-CR0REgIF.js";import{L as S}from"./LakeTextInput-Dxq6mm9o.js";import{S as L,a as c}from"./_StoriesComponents-akwUgReX.js";import"./index-BDj4D_R3.js";import"./preload-helper-DrfBMU97.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-CLuPoIvD.js";import"./commonStyles-BBEkV6IC.js";import"./v4-C6aID195.js";import"./Fill-CARpKc_O.js";import"./LakeSelect-Dwgrel78.js";import"./useDisclosure-nRYJYlyL.js";import"./FocusTrap-DTDVq-Ha.js";import"./array-BfAlyugE.js";import"./Popover-xpMUO9nM.js";import"./useResponsive-C-faiu3U.js";import"./function-CnUJIL0Q.js";import"./BottomPanel-BUShH2Wn.js";import"./useBodyClassName-Ou1g3Y2r.js";import"./Suspendable-Dg06D5sx.js";import"./index-h8MM-bqt.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BKXjSA5x.js";import"./index-D-W1HY0_.js";import"./Separator-YJI7LZ9S.js";import"./index-B3vo9wyY.js";const h=T.create({inputPart:{maxWidth:400}}),U={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(C,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(x=(m=i.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const X=["Variations"];export{i as Variations,X as __namedExportsOrder,U as default};
//# sourceMappingURL=CopyButton.stories-DzS-bxsT.js.map
