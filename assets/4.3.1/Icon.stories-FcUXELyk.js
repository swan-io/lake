import{S as O,j as a,a as e,I as g,c as y,b as m,L as d,f as k,d as b}from"./Space-vGYTwzdp.js";import{r as T}from"./index-4g5l5LRQ.js";import{B as u}from"./BorderedIcon-5XFDYDow.js";import{B as o}from"./commonStyles-66j-Zwa4.js";import{L as P}from"./LakeLabel-A87ATVj7.js";import{L as w}from"./LakeTextInput-Ti94YhlK.js";import{S as C,a as p}from"./_StoriesComponents-sJGtUUNe.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./v4-yQnnJER4.js";import"./Pressable-anKNl9-q.js";import"./Fill-5In0vdit.js";import"./LakeSelect-acbE3W2Y.js";import"./useDisclosure-Cnlvt24p.js";import"./a11y-2bSo9Xxj.js";import"./Popover-2JEoqGxo.js";import"./useResponsive-O-XtOQDs.js";import"./function-dZk570d0.js";import"./Boxed-X5xMwKRs.js";import"./BottomPanel--adWzDTS.js";import"./useBodyClassName-b5H8Q92H.js";import"./math-usntJexj.js";import"./FocusTrap-OPSShKHl.js";import"./array-_tkD71ox.js";import"./LoadingView-eVRaIpY1.js";import"./colors-34oHE9gw.js";import"./index-egSEiFFR.js";import"./TransitionView-MuHEYEAE.js";import"./index-xidplq-l.js";import"./index-3c8vLbCC.js";import"./index-7xP2ImVD.js";const i=O.create({container:{flexWrap:"wrap"},icon:{flexBasis:"0%",flexGrow:1,minWidth:250,paddingVertical:16}}),ce={title:"Informations/Icon",component:u},h=r=>Object.keys(r),c=()=>{const[r,s]=T.useState("");return a(C,{title:"Icon",children:[e(P,{label:"Search",render:()=>e(w,{icon:"search-filled",value:r,onChangeText:s})}),e(p,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(k).filter(t=>t.includes(r)).map(t=>a(o,{alignItems:"center",style:i.icon,children:[e(g,{name:t,size:30,color:y.gray[800]}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:t})]},t))})}),e(p,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(b).filter(t=>t.includes(r)).map(t=>a(o,{alignItems:"center",style:i.icon,children:[e(g,{name:t,size:30,color:y.gray[800]}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:t})]},t))})})]})},l=({color:r})=>{const[s,t]=T.useState("");return a(C,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e(P,{label:"Search",render:()=>e(w,{icon:"search-filled",value:s,onChangeText:t})}),e(p,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(k).filter(n=>n.includes(s)).map(n=>a(o,{alignItems:"center",style:i.icon,children:[e(u,{name:n,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:n})]},n))})}),e(p,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(b).filter(n=>n.includes(s)).map(n=>a(o,{alignItems:"center",style:i.icon,children:[e(u,{name:n,color:r,size:100,padding:8}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:n})]},n))})})]})};var x,I,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="Icon">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var f,B,L;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`({
  color
}: BorderedArgs) => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="BorderedIcon" description="You can change the color in 'Controls' panel (Press A to open it)">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <BorderedIcon name={name} color={color} size={40} padding={8} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" style={styles.icon}>
                <BorderedIcon name={name} color={color} size={100} padding={8} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const le=["Default","Bordered"];export{l as Bordered,c as Default,le as __namedExportsOrder,ce as default};
//# sourceMappingURL=Icon.stories-FcUXELyk.js.map
