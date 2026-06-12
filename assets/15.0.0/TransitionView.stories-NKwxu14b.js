import{c as e,i as t}from"./preload-helper-C6cs2Kqh.js";import{o as n}from"./iframe-DaLHZq-5.js";import{St as r,U as i,bt as a,g as o,h as s,ht as c,i as l,it as u,o as d,r as f,s as p,st as m}from"./ScrollView-DrpkPocT.js";import{r as h,t as g}from"./_StoriesComponents-DAmgQRmw.js";import{n as _,t as v}from"./TransitionView-D0txQc3W.js";import{n as y,t as b}from"./LakeLabel-DQPbHrOX.js";import{n as x,t as S}from"./Switch-D9Wg2Fhn.js";var C,w,T,E,D,O;t((()=>{C=e(n()),c(),o(),y(),p(),l(),x(),_(),m(),h(),w=i(),T=r.create({switchContainer:{alignSelf:`flex-start`},container:{position:`relative`,maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:`translateZ(0px) translateX(200px)`}},animationDuration:`300ms`},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:`translateZ(0px) translateX(200px)`}},animationDuration:`300ms`},block:{position:`absolute`,top:0,left:0,width:`100%`,height:60,backgroundColor:u.negative[400],borderRadius:8}}),E={title:`Animations/TransitionView`,component:v},D=()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(g,{title:`TransitionView`,description:[`TransitionView is component triggers a transition when an element enters or leaves the DOM.`,`You can try it by toggling the switch`],children:[(0,w.jsx)(b,{label:`Switch displayed content`,render:()=>(0,w.jsx)(a,{style:T.switchContainer,children:(0,w.jsx)(S,{value:e,onValueChange:t})})}),(0,w.jsx)(f,{height:16}),(0,w.jsx)(a,{style:T.container,children:(0,w.jsx)(v,{style:T.container,enter:T.enterAnimation,leave:T.leaveAnimation,children:e?(0,w.jsx)(s,{justifyContent:`center`,alignItems:`center`,style:T.block,children:(0,w.jsx)(d,{color:u.live.contrast,variant:`semibold`,children:`Second block`})}):null})})]})},D.__docgenInfo={description:``,methods:[],displayName:`Default`},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=TransitionView.stories-NKwxu14b.js.map