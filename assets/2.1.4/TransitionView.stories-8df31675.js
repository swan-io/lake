import{S as p,c as l,j as h,a as e,V as i,b as w,L as y}from"./Space-b50d3fe3.js";import{r as d}from"./index-ebeaab24.js";import{B as u}from"./index-0fbc989a.js";import{L as S}from"./LakeLabel-cfe53f36.js";import{S as f}from"./Switch-1acc7926.js";import{T as c}from"./TransitionView-00b7d025.js";import{S as g}from"./_StoriesComponents-e555e0df.js";import"./extends-98964cd2.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./Animated-241a6ec0.js";import"./index-264b4537.js";import"./index-7e1b6320.js";import"./index-5e04e49e.js";import"./math-9be3aa77.js";import"./Icon-30a5585a.js";import"./Svg-4ae2a5a6.js";import"./index-88d77a27.js";const t=p.create({switchContainer:{alignSelf:"flex-start"},container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},block:{position:"absolute",top:0,left:0,width:"100%",height:60,backgroundColor:l.negative[400],borderRadius:8}}),X={title:"Animations/TransitionView",component:c},n=()=>{const[o,m]=d.useState(!1);return h(g,{title:"TransitionView",description:["TransitionView is component triggers a transition when an element enters or leaves the DOM.","You can try it by toggling the switch"],children:[e(S,{label:"Switch displayed content",render:()=>e(i,{style:t.switchContainer,children:e(f,{value:o,onValueChange:m})})}),e(w,{height:16}),e(i,{style:t.container,children:e(c,{style:t.container,enter:t.enterAnimation,leave:t.leaveAnimation,children:o?e(u,{justifyContent:"center",alignItems:"center",style:t.block,children:e(y,{color:l.live.contrast,variant:"semibold",children:"Second block"})}):null})})]})};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=TransitionView.stories-8df31675.js.map
