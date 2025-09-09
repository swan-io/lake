import{j as e,B as C,S as l,s as T}from"./ScrollView-CQW4iqwc.js";import{r as u}from"./iframe-CPbE1bI2.js";import{L as r,c as v}from"./LakeCopyButton-BZ6tbcRX.js";import{L as a}from"./LakeLabel-DQLOqOTU.js";import{L as S}from"./LakeTextInput-D4gVJEM_.js";import{S as L,a as c}from"./_StoriesComponents-DUvC1iSd.js";import"./index-HlszW1tC.js";import"./preload-helper-DrfBMU97.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-Cd0scxEN.js";import"./commonStyles-BBEkV6IC.js";import"./v4-C6aID195.js";import"./Fill-DwBTSW9e.js";import"./LakeSelect-Dy8dCf4x.js";import"./useDisclosure-B55QMVGv.js";import"./FocusTrap-DBlriSHh.js";import"./array-BfAlyugE.js";import"./Popover-zBBCD2fb.js";import"./useResponsive-D65dTy1R.js";import"./function-BwyPiTVp.js";import"./BottomPanel-DSxVrTlV.js";import"./useBodyClassName-BNNE31Rl.js";import"./Suspendable-ZBxQozm9.js";import"./index-DZQGz_9Q.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BaU7H18p.js";import"./index-DLHrviN0.js";import"./Separator-uJX5HRd6.js";import"./index-Bjg4sgr4.js";const h=T.create({inputPart:{maxWidth:400}}),U={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(C,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-BBxawZHA.js.map
