import{j as e,S as c,V as p,B as u,L as d,c as r,s as h}from"./ScrollView-BHyA0YQe.js";import{r as x}from"./iframe-D68wIgOL.js";import{L as y,a as o}from"./LakeButton-BDabxjzV.js";import{T as a}from"./TransitionGroupView-DqCE1d66.js";import{S as k}from"./_StoriesComponents-B5dTlONB.js";import"./index-kFt5shej.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-WCLW66TX.js";import"./index-vyVBHV6P.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CvdPi2lk.js";import"./Separator-Rc6ZyfHq.js";const n=h.create({container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"200ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"200ms"},block:{position:"absolute",left:0,width:300,height:40,backgroundColor:r.negative[400],borderRadius:8,transition:"200ms ease-in-out top"}}),A={title:"Animations/TransitionGroupView",component:a},i=()=>{const[m,s]=x.useState([]);return e.jsxs(k,{title:"TransitionGroupView",description:["TransitionView is component triggers a transition when its children enter or leave the DOM.","You can try it by adding & removing elements"],children:[e.jsxs(y,{children:[e.jsx(o,{onPress:()=>s(t=>[...t,String(Math.random())]),children:"Append"}),e.jsx(o,{onPress:()=>s(t=>[String(Math.random()),...t]),children:"Prepend"}),e.jsx(o,{onPress:()=>s(t=>t.slice(1)),children:"Remove first"}),e.jsx(o,{onPress:()=>s(t=>t.slice(0,-1)),children:"Remove last"})]}),e.jsx(c,{height:16}),e.jsx(p,{style:n.container,children:e.jsx(a,{childStyle:n.container,enter:n.enterAnimation,leave:n.leaveAnimation,children:m.map((t,l)=>e.jsx(u,{justifyContent:"center",alignItems:"center",style:[n.block,{top:l*60}],children:e.jsx(d,{color:r.live.contrast,variant:"semibold",children:t})},t))})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [items, setItems] = useState<string[]>([]);
  return <StoryBlock title="TransitionGroupView" description={["TransitionView is component triggers a transition when its children enter or leave the DOM.", "You can try it by adding & removing elements"]}>
      <LakeButtonGroup>
        <LakeButton onPress={() => setItems(items => [...items, String(Math.random())])}>
          Append
        </LakeButton>

        <LakeButton onPress={() => setItems(items => [String(Math.random()), ...items])}>
          Prepend
        </LakeButton>

        <LakeButton onPress={() => setItems(items => {
        return items.slice(1);
      })}>
          Remove first
        </LakeButton>

        <LakeButton onPress={() => setItems(items => {
        return items.slice(0, -1);
      })}>
          Remove last
        </LakeButton>
      </LakeButtonGroup>

      <Space height={16} />

      <View style={styles.container}>
        <TransitionGroupView childStyle={styles.container} enter={styles.enterAnimation} leave={styles.leaveAnimation}>
          {items.map((item, index) => <Box justifyContent="center" alignItems="center" style={[styles.block, {
          top: index * 60
        }]} key={item}>
              <LakeText color={colors.live.contrast} variant="semibold">
                {item}
              </LakeText>
            </Box>)}
        </TransitionGroupView>
      </View>
    </StoryBlock>;
}`,...i.parameters?.docs?.source}}};const I=["Default"];export{i as Default,I as __namedExportsOrder,A as default};
//# sourceMappingURL=TransitionGroupView.stories-DfxmPwAV.js.map
