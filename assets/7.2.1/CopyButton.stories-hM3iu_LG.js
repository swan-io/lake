import{s as C,j as e,B as T,S as l}from"./Space-DL-ib-Tf.js";import{r as u}from"./index-CBqU2yxZ.js";import{L as r,c as v}from"./LakeCopyButton-Cf1vzO8R.js";import{L as a}from"./LakeLabel-BUFbtcUt.js";import{L as S}from"./LakeTextInput-CZTZGqNA.js";import{S as L,a as c}from"./_StoriesComponents-CY4THWfR.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-CNHO5Gim.js";import"./index-DGaDRGzj.js";import"./commonStyles-t4XfA7cz.js";import"./v4-D8aEg3BZ.js";import"./Fill-CP1YotW0.js";import"./LakeSelect-DGFfxvBF.js";import"./useDisclosure-CS9t68_Y.js";import"./a11y-DXvpDVrG.js";import"./Popover-CaEjuxLG.js";import"./useResponsive-Co7zg1QK.js";import"./function-49NBvJDX.js";import"./BottomPanel-Bv-m7Hwv.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-ByrJGPQm.js";import"./FocusTrap-Co_Sr8t7.js";import"./array-rjEBP2Ry.js";import"./LoadingView-CzEfWel7.js";import"./index-ZD6EBxZp.js";import"./TransitionView-DNlPtq9W.js";import"./index-BpndFZoR.js";import"./index-shfpI0Dy.js";import"./index-DIz0UnDg.js";const h=C.create({inputPart:{maxWidth:400}}),Z={title:"Interactivity/CopyButton",component:r},d=()=>{const o=new Date,s=o.getHours(),t=o.getMinutes(),n=o.getSeconds();return`${s}:${t}:${n}`},i=()=>{const[o,s]=u.useState(""),[t,n]=u.useState(()=>d());return u.useEffect(()=>{const p=setInterval(()=>{n(d())},1e3);return()=>clearInterval(p)},[]),e.jsxs(L,{title:"CopyButton",children:[e.jsx(c,{title:"Sizes",children:e.jsxs(T,{direction:"row",alignItems:"start",children:[e.jsx(a,{label:`Default size (${v})`,render:()=>e.jsx(r,{copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 16",render:()=>e.jsx(r,{size:16,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 21",render:()=>e.jsx(r,{size:21,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})}),e.jsx(l,{width:32}),e.jsx(a,{label:"Size 26",render:()=>e.jsx(r,{size:26,copyText:"Copy",copiedText:`Copied ${t}`,valueToCopy:t})})]})}),e.jsx(c,{title:"You can test if value is well copied by paste it in this input",style:h.inputPart,children:e.jsx(a,{label:"Paste here",render:()=>e.jsx(S,{value:o,onChange:p=>s(p.currentTarget.value)})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,m,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(x=(m=i.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const ee=["Variations"];export{i as Variations,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=CopyButton.stories-hM3iu_LG.js.map