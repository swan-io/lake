import{j as e,V as l,s as h,S as n,o as p,B as s,L as r,c as m}from"./ScrollView-BE4uMToS.js";import{r as b}from"./iframe-KTkBNPyg.js";import{L as x}from"./LakeLabel-BMkL8ZhR.js";import{R as c}from"./ResponsiveContainer-DfrOdpA-.js";import{S as y}from"./Switch-DJSgQfoU.js";import{S as u}from"./_StoriesComponents-C9sJbR-s.js";import"./index-7Q0EJKeB.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./v4-BKrj-4V8.js";import"./index-D-Mshg14.js";import"./extends-CF3RwP-h.js";import"./Separator-Besgo1oQ.js";const t=h.create({container:{width:"100%"},containerMobile:{maxWidth:400},switchContainer:{alignSelf:"flex-start"},block:{width:120,height:60,backgroundColor:m.gray[0],borderRadius:8}}),D={title:"Layout/ResponsiveContainer",component:c},o=()=>{const[a,d]=b.useState(!1);return e.jsxs(u,{title:"ResponsiveContainer",description:["ResponsiveContainer is a component that allows you to render different content depending on the screen size.",'You can try it by toggling the "Mobile mode" switch'],children:[e.jsx(x,{label:"Mobile mode",render:()=>e.jsx(l,{style:t.switchContainer,children:e.jsx(y,{value:a,onValueChange:d})})}),e.jsx(n,{height:16}),e.jsx(l,{style:a?t.containerMobile:t.container,children:e.jsx(c,{breakpoint:p.tiny,children:({small:i})=>e.jsxs(s,{direction:i?"column":"row",children:[e.jsx(s,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:i?"Mobile size":"Desktop size"})}),e.jsx(n,{width:16,height:16}),e.jsx(s,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:i?"Mobile size":"Desktop size"})}),e.jsx(n,{width:16,height:16}),e.jsx(s,{justifyContent:"center",alignItems:"center",style:t.block,children:e.jsx(r,{children:i?"Mobile size":"Desktop size"})})]})})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [forceMobileWidth, setForceMobileWidth] = useState(false);
  return <StoryBlock title="ResponsiveContainer" description={["ResponsiveContainer is a component that allows you to render different content depending on the screen size.", 'You can try it by toggling the "Mobile mode" switch']}>
      <LakeLabel label="Mobile mode" render={() => <View style={styles.switchContainer}>
            <Switch value={forceMobileWidth} onValueChange={setForceMobileWidth} />
          </View>} />

      <Space height={16} />

      <View style={forceMobileWidth ? styles.containerMobile : styles.container}>
        <ResponsiveContainer breakpoint={breakpoints.tiny}>
          {({
          small
        }) => <Box direction={small ? "column" : "row"}>
              <Box justifyContent="center" alignItems="center" style={styles.block}>
                <LakeText>{small ? "Mobile size" : "Desktop size"}</LakeText>
              </Box>

              <Space width={16} height={16} />

              <Box justifyContent="center" alignItems="center" style={styles.block}>
                <LakeText>{small ? "Mobile size" : "Desktop size"}</LakeText>
              </Box>

              <Space width={16} height={16} />

              <Box justifyContent="center" alignItems="center" style={styles.block}>
                <LakeText>{small ? "Mobile size" : "Desktop size"}</LakeText>
              </Box>
            </Box>}
        </ResponsiveContainer>
      </View>
    </StoryBlock>;
}`,...o.parameters?.docs?.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,D as default};
//# sourceMappingURL=ResponsiveContainer.stories-usQs9ONK.js.map
