import{j as e,V as i,s as l,S as c,B as m,L as p,c as s}from"./ScrollView-CyuEvVgY.js";import{r as h}from"./iframe-B1v9l0OR.js";import{L as d}from"./LakeLabel-BjXsN9AU.js";import{S as w}from"./Switch-C7q0dVGa.js";import{T as a}from"./TransitionView-whE-Pk6m.js";import{S as y}from"./_StoriesComponents-CInIvrOl.js";import"./index-CtvR1rPg.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./v4-BKrj-4V8.js";import"./index-DSvc_e8Z.js";import"./extends-CF3RwP-h.js";import"./Separator-CQ4GqYSC.js";const t=l.create({switchContainer:{alignSelf:"flex-start"},container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},block:{position:"absolute",top:0,left:0,width:"100%",height:60,backgroundColor:s.negative[400],borderRadius:8}}),C={title:"Animations/TransitionView",component:a},n=()=>{const[o,r]=h.useState(!1);return e.jsxs(y,{title:"TransitionView",description:["TransitionView is component triggers a transition when an element enters or leaves the DOM.","You can try it by toggling the switch"],children:[e.jsx(d,{label:"Switch displayed content",render:()=>e.jsx(i,{style:t.switchContainer,children:e.jsx(w,{value:o,onValueChange:r})})}),e.jsx(c,{height:16}),e.jsx(i,{style:t.container,children:e.jsx(a,{style:t.container,enter:t.enterAnimation,leave:t.leaveAnimation,children:o?e.jsx(m,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(p,{color:s.live.contrast,variant:"semibold",children:"Second block"})}):null})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const A=["Default"];export{n as Default,A as __namedExportsOrder,C as default};
//# sourceMappingURL=TransitionView.stories-BEoRs2CY.js.map
