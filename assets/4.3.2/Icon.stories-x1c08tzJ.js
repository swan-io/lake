import{s as O,j as a,a as e,I as g,c as y,S as m,L as d,f as k,b}from"./Space-iZQnLQXF.js";import{r as T}from"./index-4g5l5LRQ.js";import{B as u}from"./BorderedIcon-uEgW83a6.js";import{B as o}from"./commonStyles-xMA29gWq.js";import{L as P}from"./LakeLabel-I3-6rkP_.js";import{L as w}from"./LakeTextInput-UMW1DoNj.js";import{S as C,a as p}from"./_StoriesComponents-1rx7PAwk.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./v4-yQnnJER4.js";import"./Pressable-4KxmQE24.js";import"./Fill-9DSetZNl.js";import"./LakeSelect-a7fQ5tXp.js";import"./useDisclosure-Cnlvt24p.js";import"./a11y-2bSo9Xxj.js";import"./Popover-N4LqYfBj.js";import"./useResponsive-gZa38V05.js";import"./function-dZk570d0.js";import"./Boxed-X5xMwKRs.js";import"./BottomPanel-0v46x-Jx.js";import"./useBodyClassName-b5H8Q92H.js";import"./math-zuHSf5dW.js";import"./FocusTrap-ZX5X6LtQ.js";import"./array-_tkD71ox.js";import"./LoadingView-eUHZsnz3.js";import"./colors-34oHE9gw.js";import"./index-FR6gkyGA.js";import"./TransitionView-mME4iLM5.js";import"./index-BLLBUbRq.js";import"./index-dcIhjIwL.js";import"./index-2He3MD3n.js";const i=O.create({container:{flexWrap:"wrap"},icon:{flexBasis:"0%",flexGrow:1,minWidth:250,paddingVertical:16}}),ce={title:"Informations/Icon",component:u},h=r=>Object.keys(r),c=()=>{const[r,s]=T.useState("");return a(C,{title:"Icon",children:[e(P,{label:"Search",render:()=>e(w,{icon:"search-filled",value:r,onChangeText:s})}),e(p,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(k).filter(n=>n.includes(r)).map(n=>a(o,{alignItems:"center",style:i.icon,children:[e(g,{name:n,size:30,color:y.gray[800]}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:n})]},n))})}),e(p,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(b).filter(n=>n.includes(r)).map(n=>a(o,{alignItems:"center",style:i.icon,children:[e(g,{name:n,size:30,color:y.gray[800]}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:n})]},n))})})]})},l=({color:r})=>{const[s,n]=T.useState("");return a(C,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e(P,{label:"Search",render:()=>e(w,{icon:"search-filled",value:s,onChangeText:n})}),e(p,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(k).filter(t=>t.includes(s)).map(t=>a(o,{alignItems:"center",style:i.icon,children:[e(u,{name:t,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:t})]},t))})}),e(p,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:i.container,children:h(b).filter(t=>t.includes(s)).map(t=>a(o,{alignItems:"center",style:i.icon,children:[e(u,{name:t,color:r,size:100,padding:8}),e(m,{height:8}),e(d,{align:"center",numberOfLines:1,children:t})]},t))})})]})};var x,I,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(f=(I=c.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var S,B,L;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
//# sourceMappingURL=Icon.stories-x1c08tzJ.js.map
