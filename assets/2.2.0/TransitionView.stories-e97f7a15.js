import{S as p,c as l,j as h,a as e,V as i,b as w,L as y}from"./Space-7ef2bf1f.js";import{r as d}from"./index-ebeaab24.js";import{B as u}from"./index-afc058e4.js";import{L as S}from"./LakeLabel-eb8f59e2.js";import{S as f}from"./Switch-dc48cb06.js";import{T as c}from"./TransitionView-79b4ea6b.js";import{S as g}from"./_StoriesComponents-1c8fe2d9.js";import"./extends-98964cd2.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Animated-9fdb5a0e.js";import"./index-05cf4fc1.js";import"./index-4b1e55e8.js";import"./index-4c3ac64e.js";import"./index-4bd07f54.js";import"./math-fdb0a206.js";import"./Icon-620f8419.js";import"./Svg-3c682173.js";import"./index-18d9be4d.js";const t=p.create({switchContainer:{alignSelf:"flex-start"},container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},block:{position:"absolute",top:0,left:0,width:"100%",height:60,backgroundColor:l.negative[400],borderRadius:8}}),Y={title:"Animations/TransitionView",component:c},n=()=>{const[o,m]=d.useState(!1);return h(g,{title:"TransitionView",description:["TransitionView is component triggers a transition when an element enters or leaves the DOM.","You can try it by toggling the switch"],children:[e(S,{label:"Switch displayed content",render:()=>e(i,{style:t.switchContainer,children:e(f,{value:o,onValueChange:m})})}),e(w,{height:16}),e(i,{style:t.container,children:e(c,{style:t.container,enter:t.enterAnimation,leave:t.leaveAnimation,children:o?e(u,{justifyContent:"center",alignItems:"center",style:t.block,children:e(y,{color:l.live.contrast,variant:"semibold",children:"Second block"})}):null})})]})};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=TransitionView.stories-e97f7a15.js.map
