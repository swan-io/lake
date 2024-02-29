import{s as v,j as c,a as e,S as l}from"./Space-BCOR-PRq.js";import{r as u}from"./index-CBqU2yxZ.js";import{B as S}from"./commonStyles-wPDjD-CA.js";import{L as r,c as x}from"./LakeCopyButton-BnI9PoLY.js";import{L as a}from"./LakeLabel-BjLv92ym.js";import{L}from"./LakeTextInput-ObgZ7vAz.js";import{S as h,a as y}from"./_StoriesComponents-E0TAbubu.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-Dalm2Hp_.js";import"./index-DGaDRGzj.js";import"./v4-D8aEg3BZ.js";import"./Fill-oisGpS5z.js";import"./LakeSelect-O5KCInn0.js";import"./useDisclosure-CS9t68_Y.js";import"./a11y-DXvpDVrG.js";import"./Popover-DcJrvaFj.js";import"./useResponsive-DNpd5joz.js";import"./function-BPhm5LGN.js";import"./Boxed-xcydBHmC.js";import"./BottomPanel-D-L5D6Ue.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-BJEnDdtw.js";import"./FocusTrap-CDYVCjOK.js";import"./array-rjEBP2Ry.js";import"./LoadingView-CAHOGKsa.js";import"./index-DzI5fSBQ.js";import"./TransitionView-D9FlI13W.js";import"./index-DKOL5M3v.js";import"./index-jgs6be1Q.js";import"./index-DibHI9_U.js";const b=v.create({inputPart:{maxWidth:400}}),te={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,n=o.getHours(),t=o.getMinutes(),p=o.getSeconds();return`${n}:${t}:${p}`},i=()=>{const[o,n]=u.useState(""),[t,p]=u.useState(()=>d());return u.useEffect(()=>{const s=setInterval(()=>{p(d())},1e3);return()=>clearInterval(s)},[]),c(h,{title:"CopyButton",children:[e(y,{title:"Sizes",children:c(S,{direction:"row",alignItems:"start",children:[e(a,{label:`Default size (${x})`,render:()=>e(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 16",render:()=>e(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 21",render:()=>e(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 26",render:()=>e(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e(y,{title:"You can test if value is well copied by paste it in this input",style:b.inputPart,children:e(a,{label:"Paste here",render:()=>e(L,{value:o,onChange:s=>n(s.currentTarget.value)})})})]})};var m,C,T;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-BsDQ58o3.js.map
