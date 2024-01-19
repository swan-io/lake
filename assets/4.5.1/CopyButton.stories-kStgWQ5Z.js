import{s as v,j as c,a as e,S as l}from"./Space-XbJjHYih.js";import{r as u}from"./index-4g5l5LRQ.js";import{B as S}from"./commonStyles-l51GNuar.js";import{L as r,c as x}from"./LakeCopyButton-lDlq6Rii.js";import{L as a}from"./LakeLabel-J8fBqBhi.js";import{L}from"./LakeTextInput-jWaX6PyP.js";import{S as h,a as y}from"./_StoriesComponents-lI6HoiOB.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./Pressable-iurUTHZh.js";import"./index-sXb0hmHj.js";import"./v4-yQnnJER4.js";import"./Fill-jO6gZqnR.js";import"./LakeSelect-1TWnJ3WD.js";import"./useDisclosure-Cnlvt24p.js";import"./a11y-2bSo9Xxj.js";import"./Popover-jrjVFmYv.js";import"./useResponsive-eG9WQtW3.js";import"./function-dZk570d0.js";import"./Boxed-X5xMwKRs.js";import"./BottomPanel-pqSsB7So.js";import"./useBodyClassName-b5H8Q92H.js";import"./math-2aWubXm3.js";import"./FocusTrap-l0ovWAec.js";import"./array-_tkD71ox.js";import"./LoadingView-n6Iq-c4c.js";import"./colors-34oHE9gw.js";import"./index-1FXNbxK3.js";import"./TransitionView-zJfFYebd.js";import"./index-aS61JZOa.js";import"./index-QOrMhECN.js";import"./index-ad2h0iJv.js";const b=v.create({inputPart:{maxWidth:400}}),oe={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,n=o.getHours(),t=o.getMinutes(),p=o.getSeconds();return`${n}:${t}:${p}`},i=()=>{const[o,n]=u.useState(""),[t,p]=u.useState(()=>d());return u.useEffect(()=>{const s=setInterval(()=>{p(d())},1e3);return()=>clearInterval(s)},[]),c(h,{title:"CopyButton",children:[e(y,{title:"Sizes",children:c(S,{direction:"row",alignItems:"start",children:[e(a,{label:`Default size (${x})`,render:()=>e(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 16",render:()=>e(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 21",render:()=>e(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 26",render:()=>e(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e(y,{title:"You can test if value is well copied by paste it in this input",style:b.inputPart,children:e(a,{label:"Paste here",render:()=>e(L,{value:o,onChange:s=>n(s.currentTarget.value)})})})]})};var m,C,T;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-kStgWQ5Z.js.map
