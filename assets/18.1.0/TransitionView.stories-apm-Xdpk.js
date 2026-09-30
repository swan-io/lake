import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-Bp7n9_Wj.js";import{Bt as r,Et as i,Ft as a,J as o,g as s,h as c,ht as l,i as u,o as d,r as f,s as p,vt as m}from"./ScrollView-CaaTTa8S.js";import{r as h,t as g}from"./_StoriesComponents-Be3ypVil.js";import{n as _,t as v}from"./TransitionView-DHYNGeVZ.js";import{n as y,t as b}from"./Switch-IGmE1ThU.js";var x,S,C,w,T,E;t((()=>{x=e(n()),i(),s(),p(),u(),y(),_(),m(),h(),S=o(),C=r.create({container:{position:`relative`,maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:`translateZ(0px) translateX(200px)`}},animationDuration:`300ms`},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:`translateZ(0px) translateX(200px)`}},animationDuration:`300ms`},block:{position:`absolute`,top:0,left:0,width:`100%`,height:60,backgroundColor:l.negative[400],borderRadius:8}}),w={title:`Animations/TransitionView`,component:v},T=()=>{let[e,t]=(0,x.useState)(!1),n=(0,x.useId)();return(0,S.jsxs)(g,{title:`TransitionView`,description:[`TransitionView is component triggers a transition when an element enters or leaves the DOM.`,`You can try it by toggling the switch`],children:[(0,S.jsxs)(c,{direction:`row`,alignItems:`center`,children:[(0,S.jsx)(b,{value:e,onValueChange:t,labelledBy:n}),(0,S.jsx)(f,{width:12}),(0,S.jsx)(d,{id:n,color:l.gray[700],children:`Switch displayed content`})]}),(0,S.jsx)(f,{height:16}),(0,S.jsx)(a,{style:C.container,children:(0,S.jsx)(v,{style:C.container,enter:C.enterAnimation,leave:C.leaveAnimation,children:e?(0,S.jsx)(c,{justifyContent:`center`,alignItems:`center`,style:C.block,children:(0,S.jsx)(d,{color:l.live.contrast,variant:`semibold`,children:`Second block`})}):null})})]})},T.__docgenInfo={description:``,methods:[],displayName:`Default`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [showBlock, setShowBlock] = useState(false);
  const switchLabelId = useId();
  return <StoryBlock title="TransitionView" description={["TransitionView is component triggers a transition when an element enters or leaves the DOM.", "You can try it by toggling the switch"]}>
      <Box direction="row" alignItems="center">
        <Switch value={showBlock} onValueChange={setShowBlock} labelledBy={switchLabelId} />
        <Space width={12} />
        <LakeText id={switchLabelId} color={colors.gray[700]}>
          Switch displayed content
        </LakeText>
      </Box>

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
}`,...T.parameters?.docs?.source}}},E=[`Default`]}))();export{T as Default,E as __namedExportsOrder,w as default};
//# sourceMappingURL=TransitionView.stories-apm-Xdpk.js.map