import{j as e}from"./jsx-runtime-8P-18mTY.js";import{r as l}from"./index-Cs7sjTYM.js";import{B as C,S as u,s as T}from"./ScrollView-BKkPsNRr.js";import{L as r,c as v}from"./LakeCopyButton-nbw00fF1.js";import{L as a}from"./LakeLabel-BLdWqsrL.js";import{L as S}from"./LakeTextInput-DnfVS9HL.js";import{S as L,a as c}from"./_StoriesComponents-S9Asl60a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BKZjgRaT.js";import"./clipboard-BXAk6GqW.js";import"./Pressable-BMgg_GIt.js";import"./commonStyles-BBEkV6IC.js";import"./v4-C6aID195.js";import"./Fill-DHjLyN54.js";import"./LakeSelect-D30uZH-d.js";import"./useDisclosure-DLkMFUa4.js";import"./FocusTrap-DbeXHdd-.js";import"./array-BfAlyugE.js";import"./Popover-1A3WDbgW.js";import"./useResponsive-CzIqCC5v.js";import"./function-XPQbrxn-.js";import"./BottomPanel-DqNtLW9I.js";import"./useBodyClassName-DMoYUPTW.js";import"./Suspendable-dEtQ-lRc.js";import"./index-BOFhFDBp.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CVbm9pvN.js";import"./index-CXuZBaac.js";import"./Separator-DVYelPYG.js";import"./index-D0lxU9-6.js";const h=T.create({inputPart:{maxWidth:400}}),X={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=l.useState(""),[t,n]=l.useState(()=>d());return l.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(C,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(u,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-DZj8bgr6.js.map
