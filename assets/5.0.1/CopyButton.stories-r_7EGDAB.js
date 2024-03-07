import{s as v,j as c,a as e,S as l}from"./Space-9yQWBa1K.js";import{r as u}from"./index-CBqU2yxZ.js";import{B as S}from"./commonStyles-Cy2mopxz.js";import{L as r,c as x}from"./LakeCopyButton-DmIH17h_.js";import{L as a}from"./LakeLabel-CMr7LHaX.js";import{L}from"./LakeTextInput-hr5LPacz.js";import{S as h,a as y}from"./_StoriesComponents-SEttthGg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-Bp9IGIMD.js";import"./index-DGaDRGzj.js";import"./v4-D8aEg3BZ.js";import"./Fill-dE72TWQg.js";import"./LakeSelect-C3o7zik8.js";import"./useDisclosure-CS9t68_Y.js";import"./a11y-DXvpDVrG.js";import"./Popover-C8bMWygC.js";import"./useResponsive-B4pLQGou.js";import"./function-DwQDbke9.js";import"./Boxed-zE7Q22Jk.js";import"./BottomPanel-BoNKnPT9.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-BU1VNIy5.js";import"./FocusTrap-DXUDywfQ.js";import"./array-rjEBP2Ry.js";import"./LoadingView-CWh6yp2L.js";import"./index-CwlQE1BB.js";import"./TransitionView-NY0z4Las.js";import"./index-c7DTqyoj.js";import"./index-BnbCUlN6.js";import"./index-DeE2YFp2.js";const b=v.create({inputPart:{maxWidth:400}}),te={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,n=o.getHours(),t=o.getMinutes(),p=o.getSeconds();return`${n}:${t}:${p}`},i=()=>{const[o,n]=u.useState(""),[t,p]=u.useState(()=>d());return u.useEffect(()=>{const s=setInterval(()=>{p(d())},1e3);return()=>clearInterval(s)},[]),c(h,{title:"CopyButton",children:[e(y,{title:"Sizes",children:c(S,{direction:"row",alignItems:"start",children:[e(a,{label:`Default size (${x})`,render:()=>e(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 16",render:()=>e(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 21",render:()=>e(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 26",render:()=>e(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e(y,{title:"You can test if value is well copied by paste it in this input",style:b.inputPart,children:e(a,{label:"Paste here",render:()=>e(L,{value:o,onChange:s=>n(s.currentTarget.value)})})})]})};var m,C,T;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const oe=["Variations"];export{i as Variations,oe as __namedExportsOrder,te as default};
//# sourceMappingURL=CopyButton.stories-r_7EGDAB.js.map
