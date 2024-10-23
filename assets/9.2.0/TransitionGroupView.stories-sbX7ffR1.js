import{j as e}from"./jsx-runtime-BlAj40OV.js";import{r as d}from"./index-Cs7sjTYM.js";import{s as h,c as l,S as x,V as y,B as k,L as g}from"./ScrollView-C9Sl8l-9.js";import{a as f,L as o}from"./LakeButton-92bu12CU.js";import{T as c}from"./TransitionGroupView-EeXoHSl6.js";import{S as v}from"./_StoriesComponents--LS6DWDz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-B-ndY5ns.js";import"./index-D9GDMxJ-.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BaZ6uvKi.js";const n=h.create({container:{position:"relative",maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"200ms"},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:"translateZ(0px) translateX(200px)"}},animationDuration:"200ms"},block:{position:"absolute",left:0,width:300,height:40,backgroundColor:l.negative[400],borderRadius:8,transition:"200ms ease-in-out top"}}),M={title:"Animations/TransitionGroupView",component:c},i=()=>{const[p,s]=d.useState([]);return e.jsxs(v,{title:"TransitionGroupView",description:["TransitionView is component triggers a transition when its children enter or leave the DOM.","You can try it by adding & removing elements"],children:[e.jsxs(f,{children:[e.jsx(o,{onPress:()=>s(t=>[...t,String(Math.random())]),children:"Append"}),e.jsx(o,{onPress:()=>s(t=>[String(Math.random()),...t]),children:"Prepend"}),e.jsx(o,{onPress:()=>s(t=>t.slice(1)),children:"Remove first"}),e.jsx(o,{onPress:()=>s(t=>t.slice(0,-1)),children:"Remove last"})]}),e.jsx(x,{height:16}),e.jsx(y,{style:n.container,children:e.jsx(c,{childStyle:n.container,enter:n.enterAnimation,leave:n.leaveAnimation,children:p.map((t,u)=>e.jsx(k,{justifyContent:"center",alignItems:"center",style:[n.block,{top:u*60}],children:e.jsx(g,{color:l.live.contrast,variant:"semibold",children:t})},t))})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};var r,a,m;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(m=(a=i.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,M as default};
//# sourceMappingURL=TransitionGroupView.stories-sbX7ffR1.js.map
