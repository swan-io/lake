import{s as C,j as e,B as T,S as l}from"./Space-Bfex_hJx.js";import{r as u}from"./index-CBqU2yxZ.js";import{L as r,c as v}from"./LakeCopyButton-QLJp1huw.js";import{L as a}from"./LakeLabel-DH4-TAU9.js";import{L as S}from"./LakeTextInput-BqH6WbUW.js";import{S as L,a as c}from"./_StoriesComponents-BGHZFReg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-BgOPYjbo.js";import"./commonStyles-t4XfA7cz.js";import"./v4-D8aEg3BZ.js";import"./Fill-CUI_szNE.js";import"./LakeSelect-CpIvcrj9.js";import"./useDisclosure-CS9t68_Y.js";import"./a11y-DXvpDVrG.js";import"./Popover-Dgqw1V2K.js";import"./useResponsive-DRWbrfMS.js";import"./function-CXiq0wkk.js";import"./BottomPanel-BX6qkQMU.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-C8ZpH5Ud.js";import"./FocusTrap-D5nWZIMn.js";import"./array-rjEBP2Ry.js";import"./LoadingView-B05U2Qzg.js";import"./index-CYWflgUg.js";import"./TransitionView-BczQdH9L.js";import"./index-CAUOOh5b.js";import"./index-D1EpuBSR.js";import"./index-C2BwA3tx.js";const h=C.create({inputPart:{maxWidth:400}}),X={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(T,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-ClxEiyl0.js.map
