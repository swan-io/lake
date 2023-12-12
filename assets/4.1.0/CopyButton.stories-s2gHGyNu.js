import{S,j as c,a as e,b as l}from"./Space-KV9EsIpg.js";import{r as u}from"./index-4g5l5LRQ.js";import{B as v}from"./commonStyles-qHnScWjD.js";import{L as r,c as x}from"./LakeCopyButton-tjs3p6Gt.js";import{L as a}from"./LakeLabel-sxumDOuV.js";import{L}from"./LakeTextInput-LWG8JtnI.js";import{S as b,a as y}from"./_StoriesComponents-s9XKbGZ-.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./Pressable-vutv82xZ.js";import"./index-sXb0hmHj.js";import"./v4-yQnnJER4.js";import"./Fill-KH6sOcTy.js";import"./LakeSelect-tEK-Z1-s.js";import"./useDisclosure-Cnlvt24p.js";import"./a11y-2bSo9Xxj.js";import"./Popover-dAmq4rrF.js";import"./useResponsive-yo6vhjI6.js";import"./function-sfCq9YxC.js";import"./Boxed-cdFaaAUo.js";import"./BottomPanel-Fc3Zquno.js";import"./useBodyClassName-b5H8Q92H.js";import"./math-cUmFzgb7.js";import"./FocusTrap-sFYH2qMX.js";import"./array-_tkD71ox.js";import"./LoadingView--S6UNov1.js";import"./colors-34oHE9gw.js";import"./index-sLD3S1b9.js";import"./TransitionView-1hGpZ6qz.js";import"./index-NOLkyyus.js";import"./index-AsMqhOtX.js";import"./index-pRd3U8mU.js";const h=S.create({inputPart:{maxWidth:400}}),oe={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,n=o.getHours(),t=o.getMinutes(),p=o.getSeconds();return`${n}:${t}:${p}`},i=()=>{const[o,n]=u.useState(""),[t,p]=u.useState(()=>d());return u.useEffect(()=>{const s=setInterval(()=>{p(d())},1e3);return()=>clearInterval(s)},[]),c(b,{title:"CopyButton",children:[e(y,{title:"Sizes",children:c(v,{direction:"row",alignItems:"start",children:[e(a,{label:`Default size (${x})`,render:()=>e(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 16",render:()=>e(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 21",render:()=>e(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 26",render:()=>e(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e(y,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e(a,{label:"Paste here",render:()=>e(L,{value:o,onChange:s=>n(s.currentTarget.value)})})})]})};var m,C,T;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const ae=["Variations"];export{i as Variations,ae as __namedExportsOrder,oe as default};
//# sourceMappingURL=CopyButton.stories-s2gHGyNu.js.map
