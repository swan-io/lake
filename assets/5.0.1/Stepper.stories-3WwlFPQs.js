import{s as T,c as s,N as d,v as t,a as n,j as f,L as E,S as v,V as w,W as j,k as N}from"./Space-9yQWBa1K.js";import{r as F}from"./index-CBqU2yxZ.js";import{B as x}from"./commonStyles-Cy2mopxz.js";import{L as k}from"./LakeButton-lOVojGJ1.js";import{v as M}from"./Boxed-zE7Q22Jk.js";import{K as $}from"./index-mVIp0DGy.js";import{G as C}from"./Grid-CbLj23OL.js";import{L as G}from"./LakeHeading-no4T7ijO.js";import{S as R}from"./_StoriesComponents-SEttthGg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-Bp9IGIMD.js";import"./index-CwlQE1BB.js";import"./with-selector-Dgb-xD57.js";const X={textDecoration:"none"},p=T.create({container:{alignItems:"flex-end"},bar:{width:"100%",height:4,borderRadius:2,backgroundColor:s.gray[100],overflow:"hidden",transformOrigin:"bottom",transform:"scaleY(0.5)",transitionDuration:"300ms",transitionProperty:"transform"},barActive:{transform:"scaleY(1)"},progressBar:{width:"100%",height:"100%",backgroundColor:s.current[500],transformOrigin:"left",transform:"scaleX(0)",transitionDuration:"300ms"},progressBarDone:{transform:"scaleX(1)"},progressBarError:{backgroundColor:s.negative[500]},mobileContainer:{borderBottomWidth:1,borderBottomColor:s.gray[100],paddingBottom:10},mobileNumber:{minWidth:28,height:24,borderRadius:12,borderWidth:1,borderColor:s.current[100],backgroundColor:s.current[50]},mobileNumberError:{borderColor:s.negative[100],backgroundColor:s.negative[50]}}),Y=({to:o,disabled:a,style:u,children:i})=>a?n("span",{style:u,children:i}):n($,{to:o,style:u,children:i}),_=({steps:o,activeStepId:a,style:u})=>{const i=o.map(e=>d(e).with({id:t.string},({id:h})=>[h]).with({children:t.array(t.any)},({children:h})=>h.map(({id:m})=>m)).exhaustive()).flat(),l=i.indexOf(a);return n(C,{numColumns:o.length,horizontalSpace:12,style:[p.container,u],children:o.map((e,h)=>{const m=h+1,V=d(e).with({id:t.string},({id:r})=>r).with({children:t.array(t.any)},({children:r})=>{var c;return((c=r[0])==null?void 0:c.id)??""}).exhaustive(),g=d(e).with({id:a},()=>!0).with({children:t.array(t.any)},({children:r})=>r.some(({id:c})=>c===a)).otherwise(()=>!1),b=d(e).with({id:t.string},({id:r})=>i.indexOf(r)<l).with({children:t.array(t.any)},({children:r})=>r.every(({id:c})=>i.indexOf(c)<l)).exhaustive(),z=d(e).with({hasErrors:!0},()=>!0).with({children:t.array(t.any)},({children:r})=>r.some(({hasErrors:c})=>c)).otherwise(()=>!1),D=d(e).with({id:t.string},({url:r})=>r).with({children:t.array(t.any)},({children:r})=>{var c;return((c=r[0])==null?void 0:c.url)??""}).exhaustive(),I=d(e).with({id:t.string},r=>[r]).with({children:t.array(t.any)},({children:r})=>r).exhaustive();return f(Y,{to:D,disabled:!b,style:X,children:[f(E,{variant:g?"medium":"regular",color:z&&(b||g)?s.negative[500]:g||b?s.current[500]:s.gray[300],children:[m,". ",e.label]}),n(v,{height:12}),n(C,{numColumns:I.length,horizontalSpace:12,children:I.map(r=>{const c=r.id===a,W=i.indexOf(r.id)<l,q=r.hasErrors===!0;return n(w,{style:[p.bar,c&&p.barActive],children:n(w,{style:[p.progressBar,(c||W)&&p.progressBarDone,q&&p.progressBarError]})},r.id)})})]},V)})})},B=({steps:o,activeStepId:a})=>M.fromNullable(o.map((i,l)=>d(i).with({id:t.string},e=>({...e,number:`${l+1}`})).with({children:t.array(t.any)},({children:e})=>e.map((h,m)=>({...h,number:`${l+1}.${m+1}`}))).exhaustive()).flat().find(({id:i})=>i===a)).map(({label:i,hasErrors:l,number:e})=>({number:e,label:i,isErrorState:l===!0})).match({Some:({number:i,label:l,isErrorState:e})=>f(x,{direction:"row",alignItems:"center",justifyContent:"center",style:p.mobileContainer,children:[n(x,{alignItems:"center",justifyContent:"center",style:[p.mobileNumber,e&&p.mobileNumberError],children:n(E,{variant:"smallMedium",color:e?s.negative[500]:s.current[500],children:i})}),n(v,{width:8}),n(G,{level:4,variant:"h4",color:e?s.negative[500]:s.current[500],children:l})]}),None:()=>null});try{_.displayName="LakeStepper",_.__docgenInfo={description:"",displayName:"LakeStepper",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"TopLevelStep[]"}},activeStepId:{defaultValue:null,description:"",name:"activeStepId",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}try{B.displayName="MobileStepTitle",B.__docgenInfo={description:"",displayName:"MobileStepTitle",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"TopLevelStep[]"}},activeStepId:{defaultValue:null,description:"",name:"activeStepId",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}const ce={title:"Forms/Stepper",component:_},O=[{id:"enter_your_email",label:"Enter your e-mail",url:"#"},{label:"Fill in the form",children:[{id:"fill_in_the_form_part_1",label:"Fill in the form part 1",url:"#"},{id:"fill_in_the_form_part_2",label:"Fill in the form part 2",url:"#"}]},{id:"add_an_owner",label:"Add an owner",url:"#"},{label:"Attach the documents",children:[{id:"attach_the_documents_part_1",label:"Attach the documents part 1",url:"#"},{id:"attach_the_documents_part_2",label:"Attach the documents part 2",url:"#"},{id:"attach_the_documents_part_3",label:"Attach the documents part 3",url:"#"}]},{id:"finalize",label:"Finalize",url:"#"}],y=O.map(o=>d(o).with({id:t.string},({id:a})=>[a]).with({children:t.array(t.any)},({children:a})=>a.map(u=>u.id)).exhaustive()).flat(),S=()=>{const[o,a]=F.useState("attach_the_documents_part_2");return n(j,{variant:"live",children:f(R,{title:"Stepper",children:[n(_,{steps:O,activeStepId:o}),n(v,{height:32}),f(x,{direction:"row",children:[n(k,{size:"small",icon:"chevron-left-filled",color:"current",onPress:()=>{const l=y.indexOf(o),e=y[l-1];N(e)||a(e)},ariaLabel:"Previous"}),n(v,{width:16}),n(k,{size:"small",icon:"chevron-right-filled",color:"current",onPress:()=>{const l=y.indexOf(o),e=y[l+1];N(e)||a(e)},ariaLabel:"Next"})]})]})})};var L,A,P;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(P=(A=S.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const de=["Interactive"];export{S as Interactive,de as __namedExportsOrder,ce as default};
//# sourceMappingURL=Stepper.stories-3WwlFPQs.js.map