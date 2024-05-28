import{s as C,j as e,B as T,S as l}from"./Space-Bx5QDxXb.js";import{r as u}from"./index-BwDkhjyp.js";import{L as r,c as v}from"./LakeCopyButton-BZBcP3KR.js";import{L as a}from"./LakeLabel-e7hihA1w.js";import{L as S}from"./LakeTextInput-Dpx_R4BY.js";import{S as L,a as c}from"./_StoriesComponents-AhKOd4N3.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./Pressable-Bn1ZMN3h.js";import"./index-DGaDRGzj.js";import"./commonStyles-t4XfA7cz.js";import"./v4-CQkTLCs1.js";import"./Fill-Dw2V-S9V.js";import"./LakeSelect-brnPrhgp.js";import"./useDisclosure-DRaTvJnZ.js";import"./a11y-DXvpDVrG.js";import"./Popover-CbrYZVh_.js";import"./BottomPanel-C6LweyEn.js";import"./useBodyClassName-Ds2flwH7.js";import"./math-CMPBFgTl.js";import"./FocusTrap-aGNEhBTL.js";import"./array-rjEBP2Ry.js";import"./Suspendable-B5EH3QQQ.js";import"./index-CWXQFdbZ.js";import"./TransitionView-oHMWxRhX.js";import"./index-COed5YRa.js";import"./useResponsive-Dg25MDxx.js";import"./function-C7LgQW2P.js";const h=C.create({inputPart:{maxWidth:400}}),U={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(T,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(x=(m=i.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const X=["Variations"];export{i as Variations,X as __namedExportsOrder,U as default};
//# sourceMappingURL=CopyButton.stories-ChwiBnto.js.map
