import{s as h,c,j as s,a as t,S as y,V as k,L as g}from"./Space-BgCYS1JP.js";import{r as v}from"./index-CBqU2yxZ.js";import{B}from"./commonStyles-CuveE6mM.js";import{a as f,L as r}from"./LakeButton-Cu5YTFET.js";import{T as p}from"./TransitionGroupView-Bby6cwxR.js";import{S as x}from"./_StoriesComponents-CDAqobYJ.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Pressable-BGiiIFv7.js";import"./index-CBOdIruW.js";import"./Boxed-xcydBHmC.js";import"./TransitionView-BppKIn2-.js";const n=h.create({container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"200ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"200ms"},block:{position:"absolute",left:0,width:300,height:40,backgroundColor:c.negative[400],borderRadius:8,transition:"200ms ease-in-out top"}}),R={title:"Animations/TransitionGroupView",component:p},o=()=>{const[u,i]=v.useState([]);return s(x,{title:"TransitionGroupView",description:["TransitionView is component triggers a transition when its children enter or leave the DOM.","You can try it by adding & removing elements"],children:[s(f,{children:[t(r,{onPress:()=>i(e=>[...e,String(Math.random())]),children:"Append"}),t(r,{onPress:()=>i(e=>[String(Math.random()),...e]),children:"Prepend"}),t(r,{onPress:()=>i(e=>e.slice(1)),children:"Remove first"}),t(r,{onPress:()=>i(e=>e.slice(0,-1)),children:"Remove last"})]}),t(y,{height:16}),t(k,{style:n.container,children:t(p,{childStyle:n.container,enter:n.enterAnimation,leave:n.leaveAnimation,children:u.map((e,d)=>t(B,{justifyContent:"center",alignItems:"center",style:[n.block,{top:d*60}],children:t(g,{color:c.live.contrast,variant:"semibold",children:e})},e))})})]})};var a,m,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,R as default};
//# sourceMappingURL=TransitionGroupView.stories-DOVc8dTH.js.map