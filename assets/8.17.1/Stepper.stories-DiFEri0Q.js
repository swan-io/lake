import{s as O,c as o,$ as c,g as r,j as t,L as z,S as f,V as _,W,B as D,h as w}from"./ScrollView-DWjQ00nM.js";import{r as F}from"./index-Cs7sjTYM.js";import{L as I}from"./LakeButton-B6sbG4pD.js";import{L as T}from"./index-BH9W4JmD.js";import{G as k}from"./Grid-Dm3gHPGa.js";import"./LakeHeading-Devxa2jE.js";import{S as V}from"./_StoriesComponents-_jmnnGUR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-CMe_F2_9.js";import"./index-BJ6ZNIxC.js";import"./extends-CF3RwP-h.js";import"./with-selector-lUtTy5mt.js";const R={textDecoration:"none"},p=O.create({container:{alignItems:"flex-end"},bar:{width:"100%",height:4,borderRadius:2,backgroundColor:o.gray[100],overflow:"hidden",transformOrigin:"bottom",transform:"scaleY(0.5)",transitionDuration:"300ms",transitionProperty:"transform"},barActive:{transform:"scaleY(1)"},progressBar:{width:"100%",height:"100%",backgroundColor:o.current[500],transformOrigin:"left",transform:"scaleX(0)",transitionDuration:"300ms"},progressBarDone:{transform:"scaleX(1)"},progressBarError:{backgroundColor:o.negative[500]},mobileContainer:{borderBottomWidth:1,borderBottomColor:o.gray[100],paddingBottom:10},mobileNumber:{minWidth:28,height:24,borderRadius:12,borderWidth:1,borderColor:o.current[100],backgroundColor:o.current[50]},mobileNumberError:{borderColor:o.negative[100],backgroundColor:o.negative[50]}}),G=({to:a,disabled:s,style:d,children:l})=>s?t.jsx("span",{style:d,children:l}):t.jsx(T,{to:a,style:d,children:l}),S=({steps:a,activeStepId:s,style:d})=>{const l=a.map(n=>c(n).with({id:r.string},({id:h})=>[h]).with({children:r.array(r.any)},({children:h})=>h.map(({id:x})=>x)).exhaustive()).flat(),u=l.indexOf(s);return t.jsx(k,{numColumns:a.length,horizontalSpace:12,style:[p.container,d],children:a.map((n,h)=>{const x=h+1,E=c(n).with({id:r.string},({id:e})=>e).with({children:r.array(r.any)},({children:e})=>{var i;return((i=e[0])==null?void 0:i.id)??""}).exhaustive(),v=c(n).with({id:s},()=>!0).with({children:r.array(r.any)},({children:e})=>e.some(({id:i})=>i===s)).otherwise(()=>!1),y=c(n).with({id:r.string},({id:e})=>l.indexOf(e)<u).with({children:r.array(r.any)},({children:e})=>e.every(({id:i})=>l.indexOf(i)<u)).exhaustive(),A=c(n).with({hasErrors:!0},()=>!0).with({children:r.array(r.any)},({children:e})=>e.some(({hasErrors:i})=>i)).otherwise(()=>!1),N=c(n).with({id:r.string},({url:e})=>e).with({children:r.array(r.any)},({children:e})=>{var i;return((i=e[0])==null?void 0:i.url)??""}).exhaustive(),b=c(n).with({id:r.string},e=>[e]).with({children:r.array(r.any)},({children:e})=>e).exhaustive();return t.jsxs(G,{to:N,disabled:!y,style:R,children:[t.jsxs(z,{variant:v?"medium":"regular",color:A&&(y||v)?o.negative[500]:v||y?o.current[500]:o.gray[300],children:[x,". ",n.label]}),t.jsx(f,{height:12}),t.jsx(k,{numColumns:b.length,horizontalSpace:12,children:b.map(e=>{const i=e.id===s,q=l.indexOf(e.id)<u,P=e.hasErrors===!0;return t.jsx(_,{style:[p.bar,i&&p.barActive],children:t.jsx(_,{style:[p.progressBar,(i||q)&&p.progressBarDone,P&&p.progressBarError]})},e.id)})})]},E)})})};S.__docgenInfo={description:"",methods:[],displayName:"LakeStepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"Step | StepWithChildren",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}},{key:"hasErrors",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{ label: string; children: Step[] }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}},{key:"hasErrors",value:{name:"boolean",required:!1}}]}}],raw:"Step[]",required:!0}}]}}]}],raw:"TopLevelStep[]"},description:""},activeStepId:{required:!0,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};const ie={title:"Forms/Stepper",component:S},L=[{id:"enter_your_email",label:"Enter your e-mail",url:"#"},{label:"Fill in the form",children:[{id:"fill_in_the_form_part_1",label:"Fill in the form part 1",url:"#"},{id:"fill_in_the_form_part_2",label:"Fill in the form part 2",url:"#"}]},{id:"add_an_owner",label:"Add an owner",url:"#"},{label:"Attach the documents",children:[{id:"attach_the_documents_part_1",label:"Attach the documents part 1",url:"#"},{id:"attach_the_documents_part_2",label:"Attach the documents part 2",url:"#"},{id:"attach_the_documents_part_3",label:"Attach the documents part 3",url:"#"}]},{id:"finalize",label:"Finalize",url:"#"}],g=L.map(a=>c(a).with({id:r.string},({id:s})=>[s]).with({children:r.array(r.any)},({children:s})=>s.map(d=>d.id)).exhaustive()).flat(),m=()=>{const[a,s]=F.useState("attach_the_documents_part_2"),d=()=>{const u=g.indexOf(a),n=g[u-1];w(n)||s(n)},l=()=>{const u=g.indexOf(a),n=g[u+1];w(n)||s(n)};return t.jsx(W,{variant:"live",children:t.jsxs(V,{title:"Stepper",children:[t.jsx(S,{steps:L,activeStepId:a}),t.jsx(f,{height:32}),t.jsxs(D,{direction:"row",children:[t.jsx(I,{size:"small",icon:"chevron-left-filled",color:"current",onPress:d,ariaLabel:"Previous"}),t.jsx(f,{width:16}),t.jsx(I,{size:"small",icon:"chevron-right-filled",color:"current",onPress:l,ariaLabel:"Next"})]})]})})};m.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var j,B,C;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const se=["Interactive"];export{m as Interactive,se as __namedExportsOrder,ie as default};
//# sourceMappingURL=Stepper.stories-DiFEri0Q.js.map
