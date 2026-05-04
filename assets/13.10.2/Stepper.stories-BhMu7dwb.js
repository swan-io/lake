import{M as u,z as e,j as t,L as f,c as s,S as _,V as y,p as z,s as N,W as M,B as D,f as j}from"./ScrollView-Be2uaeG1.js";import{r as W}from"./iframe-CM3RFg6E.js";import{a as B}from"./LakeButton-OvTMb_WF.js";import{L as F}from"./Link-Bo_lpJOW.js";import{G as C}from"./Grid-DcGS88dX.js";import"./LakeHeading-Bye1DHkx.js";import{S as E}from"./_StoriesComponents-CWTMDqNc.js";import"./index-uExSJENR.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-B-CjcGuW.js";import"./index-Cy5rO2Vu.js";import"./extends-CF3RwP-h.js";import"./Separator-CadOK1O6.js";const R={textDecoration:"none"},m=N.create({container:{alignItems:"flex-end"},bar:{width:"100%",height:4,borderRadius:2,backgroundColor:s.gray[100],overflow:"hidden",transformOrigin:"bottom",transform:"scaleY(0.5)",transitionDuration:"300ms",transitionProperty:"transform"},barActive:{transform:"scaleY(1)"},progressBar:{width:"100%",height:"100%",backgroundColor:s.current[500],transformOrigin:"left",transform:"scaleX(0)",transitionDuration:"300ms"},progressBarDone:{transform:"scaleX(1)"},progressBarError:{backgroundColor:s.negative[500]},mobileContainer:{borderBottomWidth:1,borderBottomColor:s.gray[100],paddingBottom:10},mobileNumber:{minWidth:28,height:24,borderRadius:12,borderWidth:1,borderColor:s.current[100],backgroundColor:s.current[50]},mobileNumberError:{borderColor:s.negative[100],backgroundColor:s.negative[50]}}),L=N.create({progress:{borderRadius:10,marginTop:10,height:3,backgroundColor:s.gray[100]},progressBar:{borderRadius:10,height:"100%",backgroundColor:s.current[500],transitionDuration:"300ms"}}),T=({to:a,disabled:o,style:c,children:d})=>o?t.jsx("span",{style:c,children:d}):t.jsx(F,{to:a,style:c,children:d}),I=({steps:a,activeStepId:o,style:c})=>{const d=a.flatMap(n=>u(n).with({id:e.string},({id:l})=>[l]).with({children:e.array(e.any)},({children:l})=>l.map(({id:h})=>h)).exhaustive()),i=d.indexOf(o);return t.jsx(C,{numColumns:a.length,horizontalSpace:12,style:[m.container,c],children:a.map((n,l)=>{const h=l+1,S=u(n).with({id:e.string},({id:r})=>r).with({children:e.array(e.any)},({children:r})=>r[0]?.id??"").exhaustive(),v=u(n).with({id:o},()=>!0).with({children:e.array(e.any)},({children:r})=>r.some(({id:p})=>p===o)).otherwise(()=>!1),b=u(n).with({id:e.string},({id:r})=>d.indexOf(r)<i).with({children:e.array(e.any)},({children:r})=>r.every(({id:p})=>d.indexOf(p)<i)).exhaustive(),A=u(n).with({hasErrors:!0},()=>!0).with({children:e.array(e.any)},({children:r})=>r.some(({hasErrors:p})=>p===!0)).otherwise(()=>!1),q=u(n).with({id:e.string},({url:r})=>r).with({children:e.array(e.any)},({children:r})=>r[0]?.url??"").exhaustive(),k=u(n).with({id:e.string},r=>[r]).with({children:e.array(e.any)},({children:r})=>r).exhaustive();return t.jsxs(T,{to:q,disabled:!b,style:R,children:[t.jsxs(f,{variant:v?"medium":"regular",color:A&&(b||v)?s.negative[500]:v||b?s.current[500]:s.gray[300],children:[h,". ",n.label]}),t.jsx(_,{height:12}),t.jsx(C,{numColumns:k.length,horizontalSpace:12,children:k.map(r=>{const p=r.id===o,P=d.indexOf(r.id)<i,O=r.hasErrors===!0;return t.jsx(y,{style:[m.bar,p&&m.barActive],children:t.jsx(y,{style:[m.progressBar,(p||P)&&m.progressBarDone,O&&m.progressBarError]})},r.id)})})]},S)})})},V=({steps:a,activeStepId:o})=>{const c=a.length;return z.fromNullable(a.flatMap((i,n)=>u(i).with({id:e.string},l=>({...l,number:`${n+1}`})).with({children:e.array(e.any)},({children:l})=>l.map((h,S)=>({...h,number:`${n+1}.${S+1}`}))).exhaustive()).find(({id:i})=>i===o)).map(({label:i,hasErrors:n,number:l})=>({number:l,label:i,isErrorState:n===!0})).match({Some:({number:i,label:n,isErrorState:l})=>{const h=`${Number.parseFloat(i)/c*100}%`;return t.jsxs(y,{children:[t.jsx(f,{variant:"medium",color:l?s.negative[500]:s.current[500],children:n}),t.jsxs(f,{variant:"smallRegular",color:s.gray[300],children:[i," of ",c]}),t.jsx(y,{style:L.progress,children:t.jsx(y,{style:[L.progressBar,{width:h}]})})]})},None:()=>null})};I.__docgenInfo={description:"",methods:[],displayName:"LakeStepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"Step | StepWithChildren",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}},{key:"hasErrors",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{ label: string; children: Step[] }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}},{key:"hasErrors",value:{name:"boolean",required:!1}}]}}],raw:"Step[]",required:!0}}]}}]}],raw:"TopLevelStep[]"},description:""},activeStepId:{required:!0,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};const ie={title:"Forms/Stepper",component:I},w=[{id:"enter_your_email",label:"Enter your e-mail",url:"#"},{label:"Fill in the form",children:[{id:"fill_in_the_form_part_1",label:"Fill in the form part 1",url:"#"},{id:"fill_in_the_form_part_2",label:"Fill in the form part 2",url:"#"}]},{id:"add_an_owner",label:"Add an owner",url:"#"},{label:"Attach the documents",children:[{id:"attach_the_documents_part_1",label:"Attach the documents part 1",url:"#"},{id:"attach_the_documents_part_2",label:"Attach the documents part 2",url:"#"},{id:"attach_the_documents_part_3",label:"Attach the documents part 3",url:"#"}]},{id:"finalize",label:"Finalize",url:"#"}],x=w.flatMap(a=>u(a).with({id:e.string},({id:o})=>[o]).with({children:e.array(e.any)},({children:o})=>o.map(c=>c.id)).exhaustive()),g=()=>{const[a,o]=W.useState("attach_the_documents_part_2"),c=()=>{const i=x.indexOf(a),n=x[i-1];j(n)||o(n)},d=()=>{const i=x.indexOf(a),n=x[i+1];j(n)||o(n)};return t.jsxs(M,{variant:"live",children:[t.jsxs(E,{title:"Stepper",children:[t.jsx(I,{steps:w,activeStepId:a}),t.jsx(_,{height:32}),t.jsxs(D,{direction:"row",children:[t.jsx(B,{size:"small",icon:"chevron-left-filled",color:"current",onPress:c,ariaLabel:"Previous"}),t.jsx(_,{width:16}),t.jsx(B,{size:"small",icon:"chevron-right-filled",color:"current",onPress:d,ariaLabel:"Next"})]})]}),t.jsx(E,{title:"Mobile Stepper",children:t.jsx(V,{steps:w,activeStepId:a})})]})};g.__docgenInfo={description:"",methods:[],displayName:"Interactive"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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

      <StoryBlock title="Mobile Stepper">
        <MobileStepper steps={steps} activeStepId={activeStepId} />
      </StoryBlock>
    </WithCurrentColor>;
}`,...g.parameters?.docs?.source}}};const se=["Interactive"];export{g as Interactive,se as __namedExportsOrder,ie as default};
//# sourceMappingURL=Stepper.stories-BhMu7dwb.js.map
