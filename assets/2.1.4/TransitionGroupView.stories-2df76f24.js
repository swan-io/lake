import{S as h,c,j as s,a as t,b as y,V as k,L as g}from"./Space-b50d3fe3.js";import{r as v}from"./index-ebeaab24.js";import{B}from"./index-0fbc989a.js";import{a as f,L as r}from"./LakeButton-41e80ca8.js";import{T as p}from"./TransitionGroupView-bb503253.js";import{S as x}from"./_StoriesComponents-e555e0df.js";import"./extends-98964cd2.js";import"./Icon-30a5585a.js";import"./Svg-4ae2a5a6.js";import"./Pressable-bc3d19e7.js";import"./useMergeRefs-d99f8a4b.js";import"./index-30d96e89.js";import"./Boxed-dafb0729.js";import"./TransitionView-00b7d025.js";const n=h.create({container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"200ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"200ms"},block:{position:"absolute",left:0,width:300,height:40,backgroundColor:c.negative[400],borderRadius:8,transition:"200ms ease-in-out top"}}),C={title:"Animations/TransitionGroupView",component:p},o=()=>{const[u,i]=v.useState([]);return s(x,{title:"TransitionGroupView",description:["TransitionView is component triggers a transition when its children enter or leave the DOM.","You can try it by adding & removing elements"],children:[s(f,{children:[t(r,{onPress:()=>i(e=>[...e,String(Math.random())]),children:"Append"}),t(r,{onPress:()=>i(e=>[String(Math.random()),...e]),children:"Prepend"}),t(r,{onPress:()=>i(e=>e.slice(1)),children:"Remove first"}),t(r,{onPress:()=>i(e=>e.slice(0,-1)),children:"Remove last"})]}),t(y,{height:16}),t(k,{style:n.container,children:t(p,{childStyle:n.container,enter:n.enterAnimation,leave:n.leaveAnimation,children:u.map((e,d)=>t(B,{justifyContent:"center",alignItems:"center",style:[n.block,{top:d*60}],children:t(g,{color:c.live.contrast,variant:"semibold",children:e})},e))})})]})};var a,m,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,C as default};
//# sourceMappingURL=TransitionGroupView.stories-2df76f24.js.map
