import{z as c,N as r,j as t,s as N,L as q,c as a,S as f,V as _,W as P,B as O,f as w}from"./ScrollView-Dd8e3hgV.js";import{r as z}from"./iframe-CVhAw4Eb.js";import{L as I}from"./LakeButton-93Nq_sYv.js";import{L as W}from"./Link-DiqKFUiW.js";import{G as k}from"./Grid-BHj4ZqhE.js";import"./LakeHeading-CaL49qNE.js";import{S as D}from"./_StoriesComponents-ADrzzPLt.js";import"./index-B-RRoYbu.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-DDtX_2pd.js";import"./index-D2kUz46T.js";import"./extends-CF3RwP-h.js";import"./Separator-B-eJ4IYj.js";const F={textDecoration:"none"},p=N.create({container:{alignItems:"flex-end"},bar:{width:"100%",height:4,borderRadius:2,backgroundColor:a.gray[100],overflow:"hidden",transformOrigin:"bottom",transform:"scaleY(0.5)",transitionDuration:"300ms",transitionProperty:"transform"},barActive:{transform:"scaleY(1)"},progressBar:{width:"100%",height:"100%",backgroundColor:a.current[500],transformOrigin:"left",transform:"scaleX(0)",transitionDuration:"300ms"},progressBarDone:{transform:"scaleX(1)"},progressBarError:{backgroundColor:a.negative[500]},mobileContainer:{borderBottomWidth:1,borderBottomColor:a.gray[100],paddingBottom:10},mobileNumber:{minWidth:28,height:24,borderRadius:12,borderWidth:1,borderColor:a.current[100],backgroundColor:a.current[50]},mobileNumberError:{borderColor:a.negative[100],backgroundColor:a.negative[50]}}),T=({to:s,disabled:i,style:l,children:o})=>i?t.jsx("span",{style:l,children:o}):t.jsx(W,{to:s,style:l,children:o}),S=({steps:s,activeStepId:i,style:l})=>{const o=s.flatMap(n=>c(n).with({id:r.string},({id:h})=>[h]).with({children:r.array(r.any)},({children:h})=>h.map(({id:x})=>x)).exhaustive()),u=o.indexOf(i);return t.jsx(k,{numColumns:s.length,horizontalSpace:12,style:[p.container,l],children:s.map((n,h)=>{const x=h+1,B=c(n).with({id:r.string},({id:e})=>e).with({children:r.array(r.any)},({children:e})=>e[0]?.id??"").exhaustive(),v=c(n).with({id:i},()=>!0).with({children:r.array(r.any)},({children:e})=>e.some(({id:d})=>d===i)).otherwise(()=>!1),y=c(n).with({id:r.string},({id:e})=>o.indexOf(e)<u).with({children:r.array(r.any)},({children:e})=>e.every(({id:d})=>o.indexOf(d)<u)).exhaustive(),C=c(n).with({hasErrors:!0},()=>!0).with({children:r.array(r.any)},({children:e})=>e.some(({hasErrors:d})=>d===!0)).otherwise(()=>!1),L=c(n).with({id:r.string},({url:e})=>e).with({children:r.array(r.any)},({children:e})=>e[0]?.url??"").exhaustive(),b=c(n).with({id:r.string},e=>[e]).with({children:r.array(r.any)},({children:e})=>e).exhaustive();return t.jsxs(T,{to:L,disabled:!y,style:F,children:[t.jsxs(q,{variant:v?"medium":"regular",color:C&&(y||v)?a.negative[500]:v||y?a.current[500]:a.gray[300],children:[x,". ",n.label]}),t.jsx(f,{height:12}),t.jsx(k,{numColumns:b.length,horizontalSpace:12,children:b.map(e=>{const d=e.id===i,E=o.indexOf(e.id)<u,A=e.hasErrors===!0;return t.jsx(_,{style:[p.bar,d&&p.barActive],children:t.jsx(_,{style:[p.progressBar,(d||E)&&p.progressBarDone,A&&p.progressBarError]})},e.id)})})]},B)})})};S.__docgenInfo={description:"",methods:[],displayName:"LakeStepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"Step | StepWithChildren",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}},{key:"hasErrors",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{ label: string; children: Step[] }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}},{key:"hasErrors",value:{name:"boolean",required:!1}}]}}],raw:"Step[]",required:!0}}]}}]}],raw:"TopLevelStep[]"},description:""},activeStepId:{required:!0,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};const re={title:"Forms/Stepper",component:S},j=[{id:"enter_your_email",label:"Enter your e-mail",url:"#"},{label:"Fill in the form",children:[{id:"fill_in_the_form_part_1",label:"Fill in the form part 1",url:"#"},{id:"fill_in_the_form_part_2",label:"Fill in the form part 2",url:"#"}]},{id:"add_an_owner",label:"Add an owner",url:"#"},{label:"Attach the documents",children:[{id:"attach_the_documents_part_1",label:"Attach the documents part 1",url:"#"},{id:"attach_the_documents_part_2",label:"Attach the documents part 2",url:"#"},{id:"attach_the_documents_part_3",label:"Attach the documents part 3",url:"#"}]},{id:"finalize",label:"Finalize",url:"#"}],g=j.flatMap(s=>c(s).with({id:r.string},({id:i})=>[i]).with({children:r.array(r.any)},({children:i})=>i.map(l=>l.id)).exhaustive()),m=()=>{const[s,i]=z.useState("attach_the_documents_part_2"),l=()=>{const u=g.indexOf(s),n=g[u-1];w(n)||i(n)},o=()=>{const u=g.indexOf(s),n=g[u+1];w(n)||i(n)};return t.jsx(P,{variant:"live",children:t.jsxs(D,{title:"Stepper",children:[t.jsx(S,{steps:j,activeStepId:s}),t.jsx(f,{height:32}),t.jsxs(O,{direction:"row",children:[t.jsx(I,{size:"small",icon:"chevron-left-filled",color:"current",onPress:l,ariaLabel:"Previous"}),t.jsx(f,{width:16}),t.jsx(I,{size:"small",icon:"chevron-right-filled",color:"current",onPress:o,ariaLabel:"Next"})]})]})})};m.__docgenInfo={description:"",methods:[],displayName:"Interactive"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [activeStepId, setActiveStepId] = useState("attach_the_documents_part_2");
  const setPreviousStep = () => {
    const currentIndex = stepIds.indexOf(activeStepId);
    const previousStepId = stepIds[currentIndex - 1];
    if (!isNullish(previousStepId)) {
      setActiveStepId(previousStepId);
    }
  };
  const setNextStep = () => {
    const currentIndex = stepIds.indexOf(activeStepId);
    const nextStepId = stepIds[currentIndex + 1];
    if (!isNullish(nextStepId)) {
      setActiveStepId(nextStepId);
    }
  };
  return <WithCurrentColor variant="live">
      <StoryBlock title="Stepper">
        <LakeStepper steps={steps} activeStepId={activeStepId} />
        <Space height={32} />

        <Box direction="row">
          <LakeButton size="small" icon="chevron-left-filled" color="current" onPress={setPreviousStep} ariaLabel="Previous" />

          <Space width={16} />

          <LakeButton size="small" icon="chevron-right-filled" color="current" onPress={setNextStep} ariaLabel="Next" />
        </Box>
      </StoryBlock>
    </WithCurrentColor>;
}`,...m.parameters?.docs?.source}}};const te=["Interactive"];export{m as Interactive,te as __namedExportsOrder,re as default};
//# sourceMappingURL=Stepper.stories-BDdv6YNb.js.map
