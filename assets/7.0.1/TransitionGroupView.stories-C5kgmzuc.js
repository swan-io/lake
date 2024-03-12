import{s as h,c,j as s,a as t,S as y,V as k,B as g,L as v}from"./Space-CO5JyqEy.js";import{r as B}from"./index-CBqU2yxZ.js";import{a as x,L as r}from"./LakeButton-bZYypum-.js";import{T as p}from"./TransitionGroupView-CcAHdeO-.js";import{S as f}from"./_StoriesComponents-qADnHaId.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-CCWXgWvt.js";import"./index-CnjxK2kZ.js";import"./TransitionView-Bs6mGJsF.js";const n=h.create({container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"200ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"200ms"},block:{position:"absolute",left:0,width:300,height:40,backgroundColor:c.negative[400],borderRadius:8,transition:"200ms ease-in-out top"}}),j={title:"Animations/TransitionGroupView",component:p},o=()=>{const[u,i]=B.useState([]);return s(f,{title:"TransitionGroupView",description:["TransitionView is component triggers a transition when its children enter or leave the DOM.","You can try it by adding & removing elements"],children:[s(x,{children:[t(r,{onPress:()=>i(e=>[...e,String(Math.random())]),children:"Append"}),t(r,{onPress:()=>i(e=>[String(Math.random()),...e]),children:"Prepend"}),t(r,{onPress:()=>i(e=>e.slice(1)),children:"Remove first"}),t(r,{onPress:()=>i(e=>e.slice(0,-1)),children:"Remove last"})]}),t(y,{height:16}),t(k,{style:n.container,children:t(p,{childStyle:n.container,enter:n.enterAnimation,leave:n.leaveAnimation,children:u.map((e,d)=>t(g,{justifyContent:"center",alignItems:"center",style:[n.block,{top:d*60}],children:t(v,{color:c.live.contrast,variant:"semibold",children:e})},e))})})]})};var a,m,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,j as default};
//# sourceMappingURL=TransitionGroupView.stories-C5kgmzuc.js.map
