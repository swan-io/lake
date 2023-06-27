import{S as T,c as s,a as n,j as f,L as O,b as v,V as w,l as C}from"./Space-57107f4e.js";import{r as j}from"./index-8db94870.js";import{Q as d,H as t,B as x}from"./index-73e1d3ab.js";import{L as k}from"./LakeButton-545cef4e.js";import{v as F}from"./Boxed-dafb0729.js";import{z as M}from"./index-01d9d616.js";import{G as B}from"./Grid-b46f9878.js";import{L as $}from"./LakeHeading-42ced55c.js";import{W as G}from"./WithCurrentColor-c53f695f.js";import{S as H}from"./_StoriesComponents-152d52c7.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Icon-cf4ea6a3.js";import"./Svg-c3c146c4.js";import"./Pressable-912f514b.js";import"./useMergeRefs-2375844e.js";import"./index-c1bfc883.js";import"./with-selector-11af2eb6.js";import"./index-302a0035.js";const R={textDecoration:"none"},p=T.create({container:{alignItems:"flex-end"},bar:{width:"100%",height:4,borderRadius:2,backgroundColor:s.gray[100],overflow:"hidden",transformOrigin:"bottom",transform:"scaleY(0.5)",transitionDuration:"300ms",transitionProperty:"transform"},barActive:{transform:"scaleY(1)"},progressBar:{width:"100%",height:"100%",backgroundColor:s.current[500],transformOrigin:"left",transform:"scaleX(0)",transitionDuration:"300ms"},progressBarDone:{transform:"scaleX(1)"},progressBarError:{backgroundColor:s.negative[500]},mobileContainer:{borderBottomWidth:1,borderBottomColor:s.gray[100],paddingBottom:10},mobileNumber:{minWidth:28,height:24,borderRadius:12,borderWidth:1,borderColor:s.current[100],backgroundColor:s.current[50]},mobileNumberError:{borderColor:s.negative[100],backgroundColor:s.negative[50]}}),X=({to:o,disabled:a,style:u,children:i})=>a?n("span",{style:u,children:i}):n(M,{to:o,style:u,children:i}),_=({steps:o,activeStepId:a,style:u})=>{const i=o.map(e=>d(e).with({id:t.string},({id:m})=>[m]).with({children:t.array(t.any)},({children:m})=>m.map(({id:h})=>h)).exhaustive()).flat(),l=i.indexOf(a);return n(B,{numColumns:o.length,horizontalSpace:12,style:[p.container,u],children:o.map((e,m)=>{const h=m+1,V=d(e).with({id:t.string},({id:r})=>r).with({children:t.array(t.any)},({children:r})=>{var c;return((c=r[0])==null?void 0:c.id)??""}).exhaustive(),g=d(e).with({id:a},()=>!0).with({children:t.array(t.any)},({children:r})=>r.some(({id:c})=>c===a)).otherwise(()=>!1),b=d(e).with({id:t.string},({id:r})=>i.indexOf(r)<l).with({children:t.array(t.any)},({children:r})=>r.every(({id:c})=>i.indexOf(c)<l)).exhaustive(),z=d(e).with({hasErrors:!0},()=>!0).with({children:t.array(t.any)},({children:r})=>r.some(({hasErrors:c})=>c)).otherwise(()=>!1),D=d(e).with({id:t.string},({url:r})=>r).with({children:t.array(t.any)},({children:r})=>{var c;return((c=r[0])==null?void 0:c.url)??""}).exhaustive(),I=d(e).with({id:t.string},r=>[r]).with({children:t.array(t.any)},({children:r})=>r).exhaustive();return f(X,{to:D,disabled:!b,style:R,children:[f(O,{variant:g?"medium":"regular",color:z&&(b||g)?s.negative[500]:g||b?s.current[500]:s.gray[300],children:[h,". ",e.label]}),n(v,{height:12}),n(B,{numColumns:I.length,horizontalSpace:12,children:I.map(r=>{const c=r.id===a,W=i.indexOf(r.id)<l,q=r.hasErrors===!0;return n(w,{style:[p.bar,c&&p.barActive],children:n(w,{style:[p.progressBar,(c||W)&&p.progressBarDone,q&&p.progressBarError]})},r.id)})})]},V)})})},N=({steps:o,activeStepId:a})=>F.fromNullable(o.map((i,l)=>d(i).with({id:t.string},e=>({...e,number:`${l+1}`})).with({children:t.array(t.any)},({children:e})=>e.map((m,h)=>({...m,number:`${l+1}.${h+1}`}))).exhaustive()).flat().find(({id:i})=>i===a)).map(({label:i,hasErrors:l,number:e})=>({number:e,label:i,isErrorState:l===!0})).match({Some:({number:i,label:l,isErrorState:e})=>f(x,{direction:"row",alignItems:"center",justifyContent:"center",style:p.mobileContainer,children:[n(x,{alignItems:"center",justifyContent:"center",style:[p.mobileNumber,e&&p.mobileNumberError],children:n(O,{variant:"smallMedium",color:e?s.negative[500]:s.current[500],children:i})}),n(v,{width:8}),n($,{level:4,variant:"h4",color:e?s.negative[500]:s.current[500],children:l})]}),None:()=>null});try{_.displayName="LakeStepper",_.__docgenInfo={description:"",displayName:"LakeStepper",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"TopLevelStep[]"}},activeStepId:{defaultValue:null,description:"",name:"activeStepId",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}try{N.displayName="MobileStepTitle",N.__docgenInfo={description:"",displayName:"MobileStepTitle",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"TopLevelStep[]"}},activeStepId:{defaultValue:null,description:"",name:"activeStepId",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}const me={title:"Forms/Stepper",component:_},P=[{id:"enter_your_email",label:"Enter your e-mail",url:"#"},{label:"Fill in the form",children:[{id:"fill_in_the_form_part_1",label:"Fill in the form part 1",url:"#"},{id:"fill_in_the_form_part_2",label:"Fill in the form part 2",url:"#"}]},{id:"add_an_owner",label:"Add an owner",url:"#"},{label:"Attach the documents",children:[{id:"attach_the_documents_part_1",label:"Attach the documents part 1",url:"#"},{id:"attach_the_documents_part_2",label:"Attach the documents part 2",url:"#"},{id:"attach_the_documents_part_3",label:"Attach the documents part 3",url:"#"}]},{id:"finalize",label:"Finalize",url:"#"}],S=P.map(o=>d(o).with({id:t.string},({id:a})=>[a]).with({children:t.array(t.any)},({children:a})=>a.map(u=>u.id)).exhaustive()).flat(),y=()=>{const[o,a]=j.useState("attach_the_documents_part_2");return n(G,{variant:"live",children:f(H,{title:"Stepper",children:[n(_,{steps:P,activeStepId:o}),n(v,{height:32}),f(x,{direction:"row",children:[n(k,{size:"small",icon:"chevron-left-filled",color:"current",onPress:()=>{const l=S.indexOf(o),e=S[l-1];C(e)||a(e)}}),n(v,{width:16}),n(k,{size:"small",icon:"chevron-right-filled",color:"current",onPress:()=>{const l=S.indexOf(o),e=S[l+1];C(e)||a(e)}})]})]})})};var L,A,E;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
          <LakeButton size="small" icon="chevron-left-filled" color="current" onPress={setPreviousStep} />

          <Space width={16} />

          <LakeButton size="small" icon="chevron-right-filled" color="current" onPress={setNextStep} />
        </Box>
      </StoryBlock>
    </WithCurrentColor>;
}`,...(E=(A=y.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const he=["Interactive"];export{y as Interactive,he as __namedExportsOrder,me as default};
//# sourceMappingURL=Stepper.stories-c158a5e6.js.map
