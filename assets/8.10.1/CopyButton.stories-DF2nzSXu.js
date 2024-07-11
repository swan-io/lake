import{s as C,j as e,B as T,S as l}from"./ScrollView-B9F7HTm3.js";import{r as u}from"./index-uCp2LrAq.js";import{L as r,c as v}from"./LakeCopyButton-DD2W4UT1.js";import{L as a}from"./LakeLabel-8VUsec97.js";import{L as S}from"./LakeTextInput-DfS1pf70.js";import{S as L,a as c}from"./_StoriesComponents-Cq_5NJ0H.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-CFOT_yy9.js";import"./commonStyles-t4XfA7cz.js";import"./v4-CQkTLCs1.js";import"./Fill-n5vMefZr.js";import"./LakeSelect-Cp-tA_ih.js";import"./useDisclosure-X_l1NENI.js";import"./a11y-DXvpDVrG.js";import"./Popover-CWZJwwEZ.js";import"./useResponsive-CWYKQO6x.js";import"./function-BB3dD_YP.js";import"./BottomPanel-DBrvGMAS.js";import"./useBodyClassName-CiTylq2A.js";import"./FocusTrap-DYo-inec.js";import"./array-rjEBP2Ry.js";import"./Suspendable-eyyqBypp.js";import"./index-DL1RuylT.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BP_NA7bv.js";import"./index-yCoSIfiW.js";const h=C.create({inputPart:{maxWidth:400}}),Q={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,i=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${i}:${t}:${n}`},s=()=>{const[o,i]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(T,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>i(p.currentTarget.value)})})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-DF2nzSXu.js.map
