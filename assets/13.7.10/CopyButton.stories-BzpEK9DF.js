import{j as e,B as y,S as l,s as m}from"./ScrollView-DSx3Pgxz.js";import{r as u}from"./iframe-CKAvb2re.js";import{L as r,c as x}from"./LakeCopyButton-ByLakdsQ.js";import{L as a}from"./LakeLabel-Dq8LOW6j.js";import{L as C}from"./LakeTextInput-Ccge9SNr.js";import{S as T,a as c}from"./_StoriesComponents-BygyYz9d.js";import"./index-DKZabIN1.js";import"./preload-helper-D1IIBeq1.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-DCi9kXlf.js";import"./commonStyles-BBEkV6IC.js";import"./v4-EwEgHOG0.js";import"./Fill-DoSasmXU.js";import"./LakeSelect-Cls78sYO.js";import"./useBoolean-iNMbesVi.js";import"./useDisclosure-fRdtxTQA.js";import"./FocusTrap-CjQmSfLt.js";import"./array-BfAlyugE.js";import"./Popover-CHSTddm1.js";import"./useResponsive-MxkyeYEq.js";import"./function-DaNKNtkk.js";import"./BottomPanel-ZO2YDdTD.js";import"./useBodyClassName-CsGrygYF.js";import"./Suspendable-SH-vxL5U.js";import"./index-3_MbNEE9.js";import"./extends-CF3RwP-h.js";import"./TransitionView-3_PsMy9n.js";import"./index-CUwTA_wL.js";import"./Separator-iPsBY1On.js";const v=m.create({inputPart:{maxWidth:400}}),J={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(T,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(y,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${x})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:v.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(C,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const K=["Variations"];export{i as Variations,K as __namedExportsOrder,J as default};
//# sourceMappingURL=CopyButton.stories-BzpEK9DF.js.map
