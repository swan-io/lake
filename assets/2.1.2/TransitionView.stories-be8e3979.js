import{S as p,c as l,j as h,a as e,V as i,b as w,L as y}from"./Space-2242fd5e.js";import{r as d}from"./index-ebeaab24.js";import{B as u}from"./index-a8f23f17.js";import{L as S}from"./LakeLabel-ac09677f.js";import{S as f}from"./Switch-a90c5b89.js";import{T as c}from"./TransitionView-d25880c3.js";import{S as g}from"./_StoriesComponents-f13956a4.js";import"./extends-98964cd2.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Animated-a0619c6c.js";import"./index-906384f5.js";import"./index-6a5b2fcc.js";import"./index-ebbf1ea8.js";import"./math-0c833dd5.js";import"./Icon-b31120fb.js";import"./Svg-f92aaa32.js";import"./index-26fa083d.js";const t=p.create({switchContainer:{alignSelf:"flex-start"},container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},block:{position:"absolute",top:0,left:0,width:"100%",height:60,backgroundColor:l.negative[400],borderRadius:8}}),X={title:"Animations/TransitionView",component:c},n=()=>{const[o,m]=d.useState(!1);return h(g,{title:"TransitionView",description:["TransitionView is component triggers a transition when an element enters or leaves the DOM.","You can try it by toggling the switch"],children:[e(S,{label:"Switch displayed content",render:()=>e(i,{style:t.switchContainer,children:e(f,{value:o,onValueChange:m})})}),e(w,{height:16}),e(i,{style:t.container,children:e(c,{style:t.container,enter:t.enterAnimation,leave:t.leaveAnimation,children:o?e(u,{justifyContent:"center",alignItems:"center",style:t.block,children:e(y,{color:l.live.contrast,variant:"semibold",children:"Second block"})}):null})})]})};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [showBlock, setShowBlock] = useState(false);
  return <StoryBlock title="TransitionView" description={["TransitionView is component triggers a transition when an element enters or leaves the DOM.", "You can try it by toggling the switch"]}>
      <LakeLabel label="Switch displayed content" render={() => <View style={styles.switchContainer}>
            <Switch value={showBlock} onValueChange={setShowBlock} />
          </View>} />

      <Space height={16} />

      <View style={styles.container}>
        <TransitionView style={styles.container} enter={styles.enterAnimation} leave={styles.leaveAnimation}>
          {showBlock ? <Box justifyContent="center" alignItems="center" style={styles.block}>
              <LakeText color={colors.live.contrast} variant="semibold">
                Second block
              </LakeText>
            </Box> : null}
        </TransitionView>
      </View>
    </StoryBlock>;
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const Y=["Default"];export{n as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=TransitionView.stories-be8e3979.js.map
