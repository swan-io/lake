import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-CfAHUjpY.js";import{Bt as r,Et as i,Ft as a,et as o,g as s,h as c,ht as l,i as u,o as d,r as f,s as p,vt as m}from"./ScrollView-BpRevQ4p.js";import{r as h,t as g}from"./_StoriesComponents-BfG2G5KR.js";import{n as _,t as v}from"./TransitionView--Nc7HftR.js";import{n as y,t as b}from"./LakeLabel-BTTvKYiO.js";import{n as x,t as S}from"./Switch-C1FRKc1W.js";var C,w,T,E,D,O;t((()=>{C=e(n()),i(),s(),y(),p(),u(),x(),_(),m(),h(),w=o(),T=r.create({switchContainer:{alignSelf:`flex-start`},container:{position:`relative`,maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:`translateZ(0px) translateX(200px)`}},animationDuration:`300ms`},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:`translateZ(0px) translateX(200px)`}},animationDuration:`300ms`},block:{position:`absolute`,top:0,left:0,width:`100%`,height:60,backgroundColor:l.negative[400],borderRadius:8}}),E={title:`Animations/TransitionView`,component:v},D=()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(g,{title:`TransitionView`,description:[`TransitionView is component triggers a transition when an element enters or leaves the DOM.`,`You can try it by toggling the switch`],children:[(0,w.jsx)(b,{label:`Switch displayed content`,render:()=>(0,w.jsx)(a,{style:T.switchContainer,children:(0,w.jsx)(S,{value:e,onValueChange:t})})}),(0,w.jsx)(f,{height:16}),(0,w.jsx)(a,{style:T.container,children:(0,w.jsx)(v,{style:T.container,enter:T.enterAnimation,leave:T.leaveAnimation,children:e?(0,w.jsx)(c,{justifyContent:`center`,alignItems:`center`,style:T.block,children:(0,w.jsx)(d,{color:l.live.contrast,variant:`semibold`,children:`Second block`})}):null})})]})},D.__docgenInfo={description:``,methods:[],displayName:`Default`},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}},O=[`Default`]}))();export{D as Default,O as __namedExportsOrder,E as default};
//# sourceMappingURL=TransitionView.stories-CiJJ0AHW.js.map