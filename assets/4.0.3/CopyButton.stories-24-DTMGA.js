import{S,j as c,a as e,b as l}from"./Space-mRfvjNi5.js";import{r as u}from"./index-4g5l5LRQ.js";import{B as v}from"./commonStyles-8syA6ICP.js";import{L as r,c as x}from"./LakeCopyButton-rAqEoEbi.js";import{L as a}from"./LakeLabel-yDfCzNHo.js";import{L}from"./LakeTextInput-8ZKPOpqW.js";import{S as b,a as y}from"./_StoriesComponents-NDVnze2M.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./Pressable-duDAmLCv.js";import"./index-sXb0hmHj.js";import"./v4-yQnnJER4.js";import"./Fill-JZYZsmON.js";import"./LakeSelect-CBKl-Xn9.js";import"./useDisclosure-Cnlvt24p.js";import"./a11y-2bSo9Xxj.js";import"./Popover-wW-LkW5u.js";import"./useResponsive-p540IeAW.js";import"./function-sfCq9YxC.js";import"./Boxed-cdFaaAUo.js";import"./BottomPanel-B4wNp7a5.js";import"./useBodyClassName-b5H8Q92H.js";import"./math-M5FMtyAs.js";import"./FocusTrap-Q3sS4FN1.js";import"./array-_tkD71ox.js";import"./LoadingView-C8nNNUi6.js";import"./colors-34oHE9gw.js";import"./index-hiiEWE7l.js";import"./TransitionView-CLO1wLr7.js";import"./index-4bA47Ig8.js";import"./index-WlBE4xk9.js";import"./index-Iyzce_eK.js";const h=S.create({inputPart:{maxWidth:400}}),oe={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,n=o.getHours(),t=o.getMinutes(),p=o.getSeconds();return`${n}:${t}:${p}`},i=()=>{const[o,n]=u.useState(""),[t,p]=u.useState(()=>d());return u.useEffect(()=>{const s=setInterval(()=>{p(d())},1e3);return()=>clearInterval(s)},[]),c(b,{title:"CopyButton",children:[e(y,{title:"Sizes",children:c(v,{direction:"row",alignItems:"start",children:[e(a,{label:`Default size (${x})`,render:()=>e(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 16",render:()=>e(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 21",render:()=>e(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 26",render:()=>e(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e(y,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e(a,{label:"Paste here",render:()=>e(L,{value:o,onChange:s=>n(s.currentTarget.value)})})})]})};var m,C,T;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-24-DTMGA.js.map
