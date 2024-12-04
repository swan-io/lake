import{j as e}from"./jsx-runtime-BlAj40OV.js";import{r as l}from"./index-Cs7sjTYM.js";import{s as C,B as T,S as u}from"./ScrollView-C_lwoIgf.js";import{L as r,c as v}from"./LakeCopyButton-CQ-2-8FG.js";import{L as a}from"./LakeLabel-NUs8ADFa.js";import{L as S}from"./LakeTextInput-C-MwScKF.js";import{S as L,a as c}from"./_StoriesComponents-C-aplp8L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-W_iHORBJ.js";import"./commonStyles-CWvHnKRn.js";import"./v4-DvF23Exx.js";import"./Fill-CxyWBYvl.js";import"./LakeSelect-DoCAyqn7.js";import"./useDisclosure-DLkMFUa4.js";import"./FocusTrap-tt26dmM5.js";import"./array-BfAlyugE.js";import"./Popover-CkJWDK5H.js";import"./useResponsive-CzIqCC5v.js";import"./function-vx2uFMA-.js";import"./BottomPanel-BkMazo9g.js";import"./useBodyClassName-DMoYUPTW.js";import"./Suspendable-D-vBtNRb.js";import"./index-CaijTTxg.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CVLW7WBQ.js";import"./index-Cp1_4Cpa.js";import"./Separator-nprBuSRp.js";import"./index-DL70bTWb.js";const h=C.create({inputPart:{maxWidth:400}}),X={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=l.useState(""),[t,n]=l.useState(()=>d());return l.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(T,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-BpK5jgHb.js.map