import{s as p,c as l,j as h,a as e,V as i,S as w,L as y}from"./Space-9yQWBa1K.js";import{r as d}from"./index-CBqU2yxZ.js";import{B as u}from"./commonStyles-Cy2mopxz.js";import{L as f}from"./LakeLabel-CMr7LHaX.js";import{S as g}from"./Switch-BpmpVIuz.js";import{T as c}from"./TransitionView-NY0z4Las.js";import{S as k}from"./_StoriesComponents-SEttthGg.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./v4-D8aEg3BZ.js";import"./Animated-C-EIfxmt.js";import"./index-DeE2YFp2.js";import"./index-c7DTqyoj.js";import"./index-ku8aT5BP.js";import"./math-BU1VNIy5.js";import"./index-BnbCUlN6.js";const t=p.create({switchContainer:{alignSelf:"flex-start"},container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},block:{position:"absolute",top:0,left:0,width:"100%",height:60,backgroundColor:l.negative[400],borderRadius:8}}),M={title:"Animations/TransitionView",component:c},n=()=>{const[o,m]=d.useState(!1);return h(k,{title:"TransitionView",description:["TransitionView is component triggers a transition when an element enters or leaves the DOM.","You can try it by toggling the switch"],children:[e(f,{label:"Switch displayed content",render:()=>e(i,{style:t.switchContainer,children:e(g,{value:o,onValueChange:m})})}),e(w,{height:16}),e(i,{style:t.container,children:e(c,{style:t.container,enter:t.enterAnimation,leave:t.leaveAnimation,children:o?e(u,{justifyContent:"center",alignItems:"center",style:t.block,children:e(y,{color:l.live.contrast,variant:"semibold",children:"Second block"})}):null})})]})};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const X=["Default"];export{n as Default,X as __namedExportsOrder,M as default};
//# sourceMappingURL=TransitionView.stories-D9lfTNEj.js.map