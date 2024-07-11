import{s as C,j as e,B as T,S as l}from"./ScrollView-BxLwdHnf.js";import{r as u}from"./index-uCp2LrAq.js";import{L as r,c as v}from"./LakeCopyButton-CwsBjs5H.js";import{L as a}from"./LakeLabel-B01R_K1e.js";import{L as S}from"./LakeTextInput-DcOiscKa.js";import{S as L,a as c}from"./_StoriesComponents-COUv1FIe.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-TqGURk75.js";import"./commonStyles-t4XfA7cz.js";import"./v4-CQkTLCs1.js";import"./Fill-D42dugql.js";import"./LakeSelect-DGW1lBPh.js";import"./useDisclosure-X_l1NENI.js";import"./a11y-DXvpDVrG.js";import"./Popover-DJr0sBhN.js";import"./useResponsive-CWYKQO6x.js";import"./function-BxSKRNQm.js";import"./BottomPanel-SuIlHkuV.js";import"./useBodyClassName-CiTylq2A.js";import"./FocusTrap-D37N85YL.js";import"./array-rjEBP2Ry.js";import"./Suspendable-BmwwED9y.js";import"./index-CF4141qR.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CdWYiAlg.js";import"./index-XBqfzgGW.js";const h=C.create({inputPart:{maxWidth:400}}),Q={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,i=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${i}:${t}:${n}`},s=()=>{const[o,i]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(T,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>i(p.currentTarget.value)})})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-DxG8fvCK.js.map
