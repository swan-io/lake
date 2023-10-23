import{S as b,a as i,j as e,I as u,c as g,b as m,L as d,z as k,B as L}from"./Space-a6afbbbf.js";import{r as T}from"./index-f1286426.js";import{B as y}from"./BorderedIcon-bb3041d9.js";import{B as o}from"./commonStyles-fd4180f2.js";import{L as j}from"./LakeLabel-ad0bd7d8.js";import{L as P}from"./LakeTextInput-30de3bb1.js";import{S as w,a as p}from"./_StoriesComponents-9b5e55bb.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./v4-4a60fe23.js";import"./Pressable-626115f4.js";import"./Fill-bc793ec9.js";import"./LakeSelect-4bae3920.js";import"./useDisclosure-a0ce2208.js";import"./a11y-e7c88e69.js";import"./Popover-5302a6ee.js";import"./useResponsive-cad86890.js";import"./function-a81f264e.js";import"./Boxed-86465006.js";import"./BottomPanel-efd73b50.js";import"./useBodyClassName-4b4df53c.js";import"./math-953e6346.js";import"./FocusTrap-86591623.js";import"./array-4dd4a51c.js";import"./LoadingView-cefb5e25.js";import"./colors-298625c7.js";import"./index-42c12430.js";import"./TransitionView-8087a4d7.js";import"./index-0f1f34c2.js";import"./index-1845dc94.js";import"./index-83bf141a.js";const a=b.create({container:{flexWrap:"wrap"},iconContainer:{width:200,height:100}}),se={title:"Informations/Icon",component:y},h=r=>Object.keys(r),c=()=>{const[r,s]=T.useState("");return i(w,{title:"Icon",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:r,onChangeText:s})}),e(p,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:h(k).filter(t=>t.includes(r)).map(t=>i(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(u,{name:t,size:30,color:g.gray[800]}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})}),e(p,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:h(L).filter(t=>t.includes(r)).map(t=>i(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(u,{name:t,size:30,color:g.gray[800]}),e(m,{height:8}),e(d,{align:"center",children:t})]},t))})})]})},l=({color:r})=>{const[s,t]=T.useState("");return i(w,{title:"BorderedIcon",description:"You can change the color in 'Controls' panel (Press A to open it)",children:[e(j,{label:"Search",render:()=>e(P,{icon:"search-filled",value:s,onChangeText:t})}),e(p,{title:"Fluent icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:h(k).filter(n=>n.includes(s)).map(n=>i(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(y,{name:n,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})}),e(p,{title:"Custom icons",children:e(o,{direction:"row",alignItems:"center",style:a.container,children:h(L).filter(n=>n.includes(s)).map(n=>i(o,{alignItems:"center",justifyContent:"start",style:a.iconContainer,children:[e(y,{name:n,color:r,size:40,padding:8}),e(m,{height:8}),e(d,{align:"center",children:n})]},n))})})]})};var x,I,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="Icon">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" justifyContent="start" style={styles.iconContainer}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>)}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" justifyContent="start" style={styles.iconContainer}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var f,B,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`({
  color
}: BorderedArgs) => {
  const [search, setSearch] = useState("");
  return <StoryBlock title="BorderedIcon" description="You can change the color in 'Controls' panel (Press A to open it)">
      <LakeLabel label="Search" render={() => <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />} />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" justifyContent="start" style={styles.iconContainer}>
                <BorderedIcon name={name} color={color} size={40} padding={8} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>)}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons).filter(name => name.includes(search)).map(name => <Box key={name} alignItems="center" justifyContent="start" style={styles.iconContainer}>
                <BorderedIcon name={name} color={color} size={40} padding={8} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>)}
        </Box>
      </StoryPart>
    </StoryBlock>;
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const ce=["Default","Bordered"];export{l as Bordered,c as Default,ce as __namedExportsOrder,se as default};
//# sourceMappingURL=Icon.stories-3997bc7d.js.map
