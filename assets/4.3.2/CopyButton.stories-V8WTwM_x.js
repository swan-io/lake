import{s as v,j as c,a as e,S as l}from"./Space-iZQnLQXF.js";import{r as u}from"./index-4g5l5LRQ.js";import{B as S}from"./commonStyles-xMA29gWq.js";import{L as r,c as x}from"./LakeCopyButton-Xt2QqSw2.js";import{L as a}from"./LakeLabel-I3-6rkP_.js";import{L}from"./LakeTextInput-UMW1DoNj.js";import{S as h,a as y}from"./_StoriesComponents-1rx7PAwk.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./Pressable-4KxmQE24.js";import"./index-sXb0hmHj.js";import"./v4-yQnnJER4.js";import"./Fill-9DSetZNl.js";import"./LakeSelect-a7fQ5tXp.js";import"./useDisclosure-Cnlvt24p.js";import"./a11y-2bSo9Xxj.js";import"./Popover-N4LqYfBj.js";import"./useResponsive-gZa38V05.js";import"./function-dZk570d0.js";import"./Boxed-X5xMwKRs.js";import"./BottomPanel-0v46x-Jx.js";import"./useBodyClassName-b5H8Q92H.js";import"./math-zuHSf5dW.js";import"./FocusTrap-ZX5X6LtQ.js";import"./array-_tkD71ox.js";import"./LoadingView-eUHZsnz3.js";import"./colors-34oHE9gw.js";import"./index-FR6gkyGA.js";import"./TransitionView-mME4iLM5.js";import"./index-BLLBUbRq.js";import"./index-dcIhjIwL.js";import"./index-2He3MD3n.js";const b=v.create({inputPart:{maxWidth:400}}),oe={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,n=o.getHours(),t=o.getMinutes(),p=o.getSeconds();return`${n}:${t}:${p}`},i=()=>{const[o,n]=u.useState(""),[t,p]=u.useState(()=>d());return u.useEffect(()=>{const s=setInterval(()=>{p(d())},1e3);return()=>clearInterval(s)},[]),c(h,{title:"CopyButton",children:[e(y,{title:"Sizes",children:c(S,{direction:"row",alignItems:"start",children:[e(a,{label:`Default size (${x})`,render:()=>e(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 16",render:()=>e(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 21",render:()=>e(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 26",render:()=>e(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e(y,{title:"You can test if value is well copied by paste it in this input",style:b.inputPart,children:e(a,{label:"Paste here",render:()=>e(L,{value:o,onChange:s=>n(s.currentTarget.value)})})})]})};var m,C,T;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-V8WTwM_x.js.map
