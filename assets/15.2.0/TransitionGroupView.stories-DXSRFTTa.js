import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-BcHuJ41D.js";import{U as r,g as i,h as a,ht as o,i as s,it as c,kt as l,o as u,r as d,s as f,st as p,wt as m}from"./ScrollView-CrsrYS2O.js";import{n as h,r as g,t as _}from"./LakeButton-CfcGvfCb.js";import{r as v,t as y}from"./_StoriesComponents-BfslKxnP.js";import{n as b,t as x}from"./TransitionGroupView-Bhs4rNtg.js";var S,C,w,T,E,D;t((()=>{S=e(n()),o(),i(),g(),f(),s(),b(),p(),v(),C=r(),w=l.create({container:{position:`relative`,maxWidth:400},enterAnimation:{animationKeyframes:{"0%":{opacity:0,transform:`translateZ(0px) translateX(200px)`}},animationDuration:`200ms`},leaveAnimation:{animationKeyframes:{"100%":{opacity:0,transform:`translateZ(0px) translateX(200px)`}},animationDuration:`200ms`},block:{position:`absolute`,left:0,width:300,height:40,backgroundColor:c.negative[400],borderRadius:8,transition:`200ms ease-in-out top`}}),T={title:`Animations/TransitionGroupView`,component:x},E=()=>{let[e,t]=(0,S.useState)([]);return(0,C.jsxs)(y,{title:`TransitionGroupView`,description:[`TransitionView is component triggers a transition when its children enter or leave the DOM.`,`You can try it by adding & removing elements`],children:[(0,C.jsxs)(h,{children:[(0,C.jsx)(_,{onPress:()=>t(e=>[...e,String(Math.random())]),children:`Append`}),(0,C.jsx)(_,{onPress:()=>t(e=>[String(Math.random()),...e]),children:`Prepend`}),(0,C.jsx)(_,{onPress:()=>t(e=>e.slice(1)),children:`Remove first`}),(0,C.jsx)(_,{onPress:()=>t(e=>e.slice(0,-1)),children:`Remove last`})]}),(0,C.jsx)(d,{height:16}),(0,C.jsx)(m,{style:w.container,children:(0,C.jsx)(x,{childStyle:w.container,enter:w.enterAnimation,leave:w.leaveAnimation,children:e.map((e,t)=>(0,C.jsx)(a,{justifyContent:`center`,alignItems:`center`,style:[w.block,{top:t*60}],children:(0,C.jsx)(u,{color:c.live.contrast,variant:`semibold`,children:e})},e))})})]})},E.__docgenInfo={description:``,methods:[],displayName:`Default`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D=[`Default`]}))();export{E as Default,D as __namedExportsOrder,T as default};
//# sourceMappingURL=TransitionGroupView.stories-DXSRFTTa.js.map