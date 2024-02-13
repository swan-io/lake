import{s as v,j as c,a as e,S as l}from"./Space-D-LFTQUD.js";import{r as u}from"./index-CBqU2yxZ.js";import{B as S}from"./commonStyles-DlLxS43U.js";import{L as r,c as x}from"./LakeCopyButton-CwLMEEWc.js";import{L as a}from"./LakeLabel-D65uqyul.js";import{L}from"./LakeTextInput-DcS2G2o7.js";import{S as h,a as y}from"./_StoriesComponents-arP7xYuJ.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-BUt7P99b.js";import"./index-DGaDRGzj.js";import"./v4-D8aEg3BZ.js";import"./Fill-MjXaT9sQ.js";import"./LakeSelect-DwPSeuss.js";import"./useDisclosure-CS9t68_Y.js";import"./a11y-DXvpDVrG.js";import"./Popover-8DgvrekR.js";import"./useResponsive-AqssVJ8Z.js";import"./function-DNthd_7Y.js";import"./Boxed-zu2eTygX.js";import"./BottomPanel-DuTCl-3o.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-C2JPv6lo.js";import"./FocusTrap-7uPBJHQD.js";import"./array-rjEBP2Ry.js";import"./LoadingView-9yvpGFPL.js";import"./index-B02IVMZB.js";import"./TransitionView-QG7hP13a.js";import"./index-BoWlRs8S.js";import"./index-ctX77jdt.js";import"./index-BT863zWr.js";const b=v.create({inputPart:{maxWidth:400}}),te={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,n=o.getHours(),t=o.getMinutes(),p=o.getSeconds();return`${n}:${t}:${p}`},i=()=>{const[o,n]=u.useState(""),[t,p]=u.useState(()=>d());return u.useEffect(()=>{const s=setInterval(()=>{p(d())},1e3);return()=>clearInterval(s)},[]),c(h,{title:"CopyButton",children:[e(y,{title:"Sizes",children:c(S,{direction:"row",alignItems:"start",children:[e(a,{label:`Default size (${x})`,render:()=>e(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 16",render:()=>e(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 21",render:()=>e(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e(l,{width:32}),e(a,{label:"Size 26",render:()=>e(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e(y,{title:"You can test if value is well copied by paste it in this input",style:b.inputPart,children:e(a,{label:"Paste here",render:()=>e(L,{value:o,onChange:s=>n(s.currentTarget.value)})})})]})};var m,C,T;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=CopyButton.stories-D2aGX-zC.js.map
