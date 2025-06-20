import{j as e,V as i,s as h,S as p,B as d,L as w,c as l}from"./ScrollView-o6if_kcp.js";import{r as y}from"./iframe-C2Z9El9p.js";import{L as u}from"./LakeLabel-6ku7vavO.js";import{S as x}from"./Switch-Dd_8Ueq3.js";import{T as c}from"./TransitionView-D7lMPaw5.js";import{S as f}from"./_StoriesComponents-DSxWTXor.js";import"./index-BgAqEgCl.js";import"./commonStyles-BBEkV6IC.js";import"./v4-C6aID195.js";import"./index-CaEp4Os5.js";import"./extends-CF3RwP-h.js";import"./Separator-mYRBsq9o.js";const t=h.create({switchContainer:{alignSelf:"flex-start"},container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"300ms"},block:{position:"absolute",top:0,left:0,width:"100%",height:60,backgroundColor:l.negative[400],borderRadius:8}}),D={title:"Animations/TransitionView",component:c},n=()=>{const[o,m]=y.useState(!1);return e.jsxs(f,{title:"TransitionView",description:["TransitionView is component triggers a transition when an element enters or leaves the DOM.","You can try it by toggling the switch"],children:[e.jsx(u,{label:"Switch displayed content",render:()=>e.jsx(i,{style:t.switchContainer,children:e.jsx(x,{value:o,onValueChange:m})})}),e.jsx(p,{height:16}),e.jsx(i,{style:t.container,children:e.jsx(c,{style:t.container,enter:t.enterAnimation,leave:t.leaveAnimation,children:o?e.jsx(d,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(w,{color:l.live.contrast,variant:"semibold",children:"Second block"})}):null})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};var s,a,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,D as default};
//# sourceMappingURL=TransitionView.stories-QD3MP6sK.js.map
