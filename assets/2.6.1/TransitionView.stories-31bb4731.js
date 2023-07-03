import{S as p,c as l,j as h,a as e,V as i,b as w,L as y}from"./Space-139dd191.js";import{r as d}from"./index-8db94870.js";import{B as u}from"./index-44ab6a94.js";import{L as S}from"./LakeLabel-68b1a9c7.js";import{S as f}from"./Switch-5b9efbc1.js";import{T as c}from"./TransitionView-93720cea.js";import{S as g}from"./_StoriesComponents-a1824435.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Animated-6a02ff99.js";import"./index-c982cf9b.js";import"./index-6a94bd55.js";import"./index-1aae546a.js";import"./math-096ccf08.js";import"./Icon-3a58148e.js";import"./Svg-5d1f3349.js";import"./index-1ef5520f.js";const t=p.create({switchContainer:{alignSelf:"flex-start"},container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},block:{position:"absolute",top:0,left:0,width:"100%",height:60,backgroundColor:l.negative[400],borderRadius:8}}),Y={title:"Animations/TransitionView",component:c},n=()=>{const[o,m]=d.useState(!1);return h(g,{title:"TransitionView",description:["TransitionView is component triggers a transition when an element enters or leaves the DOM.","You can try it by toggling the switch"],children:[e(S,{label:"Switch displayed content",render:()=>e(i,{style:t.switchContainer,children:e(f,{value:o,onValueChange:m})})}),e(w,{height:16}),e(i,{style:t.container,children:e(c,{style:t.container,enter:t.enterAnimation,leave:t.leaveAnimation,children:o?e(u,{justifyContent:"center",alignItems:"center",style:t.block,children:e(y,{color:l.live.contrast,variant:"semibold",children:"Second block"})}):null})})]})};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const Z=["Default"];export{n as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=TransitionView.stories-31bb4731.js.map
