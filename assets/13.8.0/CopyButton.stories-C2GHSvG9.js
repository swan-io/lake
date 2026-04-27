import{j as e,B as y,S as l,s as m}from"./ScrollView-CODiFaFh.js";import{r as u}from"./iframe-Cq29sBVl.js";import{L as r,c as x}from"./LakeCopyButton-DNYPsxkm.js";import{L as a}from"./LakeLabel-Cs94jpzX.js";import{L as C}from"./LakeTextInput-0m79GyP7.js";import{S as T,a as c}from"./_StoriesComponents-3geQ5ABq.js";import"./index-ccnNdJkJ.js";import"./preload-helper-D1IIBeq1.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-DkNhSab0.js";import"./commonStyles-BBEkV6IC.js";import"./v4-EwEgHOG0.js";import"./Fill-D5hPhb8V.js";import"./LakeSelect-C0KKfMRd.js";import"./useBoolean-HUeuHW6-.js";import"./useDisclosure-D0-eQSpW.js";import"./FocusTrap-SvUNjMK9.js";import"./array-BfAlyugE.js";import"./FlatList-CazPOMbE.js";import"./Popover-Cjx3Fcfv.js";import"./useResponsive-oJM9YtiG.js";import"./function-DxWPUYa8.js";import"./BottomPanel-CF54Lg1r.js";import"./useBodyClassName-9So8UrwN.js";import"./Suspendable-Wrava_UE.js";import"./index-BTU9dvsk.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BnSIG3kM.js";import"./index-CFrTLIah.js";import"./Separator-CMa9unlS.js";const v=m.create({inputPart:{maxWidth:400}}),K={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(T,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(y,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${x})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:v.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(C,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const Q=["Variations"];export{i as Variations,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=CopyButton.stories-C2GHSvG9.js.map
