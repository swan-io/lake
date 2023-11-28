import{S as p,c as l,a as h,j as e,V as i,b as w,L as y}from"./Space-8ec20221.js";import{r as d}from"./index-f1286426.js";import{B as u}from"./commonStyles-46fa1855.js";import{L as S}from"./LakeLabel-e425aa7c.js";import{S as f}from"./Switch-e51b5bed.js";import{T as c}from"./TransitionView-72f82458.js";import{S as g}from"./_StoriesComponents-1ed2bb38.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./v4-4a60fe23.js";import"./Animated-b1d14ca5.js";import"./index-23a462bd.js";import"./index-d01a13d5.js";import"./index-175a8c01.js";import"./math-534c7348.js";import"./index-ff079f0e.js";const t=p.create({switchContainer:{alignSelf:"flex-start"},container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},block:{position:"absolute",top:0,left:0,width:"100%",height:60,backgroundColor:l.negative[400],borderRadius:8}}),K={title:"Animations/TransitionView",component:c},n=()=>{const[o,m]=d.useState(!1);return h(g,{title:"TransitionView",description:["TransitionView is component triggers a transition when an element enters or leaves the DOM.","You can try it by toggling the switch"],children:[e(S,{label:"Switch displayed content",render:()=>e(i,{style:t.switchContainer,children:e(f,{value:o,onValueChange:m})})}),e(w,{height:16}),e(i,{style:t.container,children:e(c,{style:t.container,enter:t.enterAnimation,leave:t.leaveAnimation,children:o?e(u,{justifyContent:"center",alignItems:"center",style:t.block,children:e(y,{color:l.live.contrast,variant:"semibold",children:"Second block"})}):null})})]})};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,K as default};
//# sourceMappingURL=TransitionView.stories-7653e456.js.map
