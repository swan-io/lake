import{s as p,c as l,j as e,V as i,S as h,B as d,L as w}from"./Space-BWfEUChJ.js";import{r as y}from"./index-CBqU2yxZ.js";import{L as u}from"./LakeLabel-CWBKzEmw.js";import{S as x}from"./Switch-Chpui492.js";import{T as c}from"./TransitionView-DBPRGHtc.js";import{S as f}from"./_StoriesComponents-DYQz1sEa.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./v4-D8aEg3BZ.js";import"./Animated-DzZdbbRG.js";import"./index-uAdUn8KT.js";import"./index-E0U1iK8S.js";import"./index-DuDsQ_j8.js";import"./math-AB3ajLl_.js";import"./index-BzEbCcHK.js";const t=p.create({switchContainer:{alignSelf:"flex-start"},container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},block:{position:"absolute",top:0,left:0,width:"100%",height:60,backgroundColor:l.negative[400],borderRadius:8}}),K={title:"Animations/TransitionView",component:c},n=()=>{const[o,m]=y.useState(!1);return e.jsxs(f,{title:"TransitionView",description:["TransitionView is component triggers a transition when an element enters or leaves the DOM.","You can try it by toggling the switch"],children:[e.jsx(u,{label:"Switch displayed content",render:()=>e.jsx(i,{style:t.switchContainer,children:e.jsx(x,{value:o,onValueChange:m})})}),e.jsx(h,{height:16}),e.jsx(i,{style:t.container,children:e.jsx(c,{style:t.container,enter:t.enterAnimation,leave:t.leaveAnimation,children:o?e.jsx(d,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(w,{color:l.live.contrast,variant:"semibold",children:"Second block"})}):null})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};var s,a,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,K as default};
//# sourceMappingURL=TransitionView.stories-CDFv5kcM.js.map