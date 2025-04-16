import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-D9D9kDko.js";import{B as C,S as u,s as T}from"./ScrollView-BXYY5pE1.js";import{L as r,c as v}from"./LakeCopyButton-zxshekA6.js";import{L as a}from"./LakeLabel-CPxaHX6L.js";import{L as S}from"./LakeTextInput-CgM9uFHL.js";import{S as L,a as c}from"./_StoriesComponents-CWN9_fjS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D0hBKHsB.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-Bcg9LWlT.js";import"./commonStyles-BBEkV6IC.js";import"./v4-C6aID195.js";import"./Fill-DXEBun0Z.js";import"./LakeSelect-BszF_Rdn.js";import"./useDisclosure-XMIqX_nt.js";import"./FocusTrap-S_CBQvXI.js";import"./array-BfAlyugE.js";import"./Popover-DhKTCUOH.js";import"./useResponsive-DVbm4z6j.js";import"./function-B6E9ahGE.js";import"./BottomPanel-BhIOPlrO.js";import"./useBodyClassName-CPyC-r4W.js";import"./Suspendable-B7PinCkT.js";import"./index-BiKzkAzw.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BH9VOP6x.js";import"./index-CmAykTSy.js";import"./Separator-C6_iuU14.js";import"./index-CTWc7shG.js";const h=T.create({inputPart:{maxWidth:400}}),X={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=l.useState(""),[t,n]=l.useState(()=>d());return l.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(C,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-BJA2DoDT.js.map
