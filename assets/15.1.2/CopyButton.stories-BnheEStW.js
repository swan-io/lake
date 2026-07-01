import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-Ds3sea8g.js";import{U as r,g as i,h as a,ht as o,i as s,kt as c,r as l}from"./ScrollView-h2xCiEKZ.js";import{n as u,r as d,t as f}from"./_StoriesComponents-BKIbCgjJ.js";import{n as p,t as m}from"./LakeTextInput-BhrXo4ah.js";import{n as h,t as g}from"./LakeLabel-Bzuk-aSj.js";import{n as _,t as v}from"./LakeCopyButton-Di21JTN8.js";var y,b,x,S,C,w,T;t((()=>{y=e(n()),o(),i(),_(),h(),p(),s(),d(),b=r(),x=c.create({inputPart:{maxWidth:400}}),S={title:`Interactivity/CopyButton`,component:v},C=()=>{let e=new Date;return`${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}`},w=()=>{let[e,t]=(0,y.useState)(``),[n,r]=(0,y.useState)(()=>C());return(0,y.useEffect)(()=>{let e=setInterval(()=>{r(C())},1e3);return()=>clearInterval(e)},[]),(0,b.jsxs)(f,{title:`CopyButton`,children:[(0,b.jsx)(u,{title:`Sizes`,children:(0,b.jsxs)(a,{direction:`row`,alignItems:`start`,children:[(0,b.jsx)(g,{label:`Default size (21)`,render:()=>(0,b.jsx)(v,{copyText:`Copy`,copiedText:`Copied ${n}`,valueToCopy:n})}),(0,b.jsx)(l,{width:32}),(0,b.jsx)(g,{label:`Size 16`,render:()=>(0,b.jsx)(v,{size:16,copyText:`Copy`,copiedText:`Copied ${n}`,valueToCopy:n})}),(0,b.jsx)(l,{width:32}),(0,b.jsx)(g,{label:`Size 21`,render:()=>(0,b.jsx)(v,{size:21,copyText:`Copy`,copiedText:`Copied ${n}`,valueToCopy:n})}),(0,b.jsx)(l,{width:32}),(0,b.jsx)(g,{label:`Size 26`,render:()=>(0,b.jsx)(v,{size:26,copyText:`Copy`,copiedText:`Copied ${n}`,valueToCopy:n})})]})}),(0,b.jsx)(u,{title:`You can test if value is well copied by paste it in this input`,style:x.inputPart,children:(0,b.jsx)(g,{label:`Paste here`,render:()=>(0,b.jsx)(m,{value:e,onChange:e=>t(e.currentTarget.value)})})})]})},w.__docgenInfo={description:``,methods:[],displayName:`Variations`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T=[`Variations`]}))();export{w as Variations,T as __namedExportsOrder,S as default};
//# sourceMappingURL=CopyButton.stories-BnheEStW.js.map