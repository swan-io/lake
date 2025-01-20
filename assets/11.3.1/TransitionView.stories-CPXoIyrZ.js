import{j as e}from"./index-DNTRjB4V.js";import{r as p}from"./index-t2oEqn7n.js";import{s as h,c as l,V as i,S as d,B as w,L as y}from"./ScrollView-DZFasRfs.js";import{L as u}from"./LakeLabel-C-vWF8vw.js";import{S as x}from"./Switch-DN_4ZUNk.js";import{T as c}from"./TransitionView-B1FOrxm6.js";import{S as f}from"./_StoriesComponents-CxsebG8Y.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-BJPDY9Ks.js";import"./commonStyles-CWvHnKRn.js";import"./v4-C6aID195.js";import"./index-DVtii38k.js";import"./extends-CF3RwP-h.js";import"./Separator-BoTw3Vhn.js";const t=h.create({switchContainer:{alignSelf:"flex-start"},container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},block:{position:"absolute",top:0,left:0,width:"100%",height:60,backgroundColor:l.negative[400],borderRadius:8}}),E={title:"Animations/TransitionView",component:c},n=()=>{const[o,m]=p.useState(!1);return e.jsxs(f,{title:"TransitionView",description:["TransitionView is component triggers a transition when an element enters or leaves the DOM.","You can try it by toggling the switch"],children:[e.jsx(u,{label:"Switch displayed content",render:()=>e.jsx(i,{style:t.switchContainer,children:e.jsx(x,{value:o,onValueChange:m})})}),e.jsx(d,{height:16}),e.jsx(i,{style:t.container,children:e.jsx(c,{style:t.container,enter:t.enterAnimation,leave:t.leaveAnimation,children:o?e.jsx(w,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(y,{color:l.live.contrast,variant:"semibold",children:"Second block"})}):null})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};var s,a,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,E as default};
//# sourceMappingURL=TransitionView.stories-CPXoIyrZ.js.map
